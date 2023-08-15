---
sidebar_position: 6
title: Elide Middleware
---

Template can delegate persistence operations, a common webservice feature, to [Elide].

Configuring Elide requires 2 [bindings][what is binding]:

1. **[Elide][Elide instance class]**
2. **[ElideSettings][ElideSettings instance class]** itself with 2 extra sub-bindings:

   - **EntityDictionary**
   - **DataStore**

The _ResourceConfig_ looks like this:

```java
import com.yahoo.elide.Elide;

import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.hk2.utilities.Binder;

import jakarta.inject.Inject;
import jakarta.servlet.ServletContext;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Context;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * The resource configuration for the web applications.
 */
@Immutable
@ThreadSafe
@ApplicationPath("/v1/data/")
public class ResourceConfig extends org.glassfish.jersey.server.ResourceConfig {

    private static final String ENDPOINT_PACKAGE = "com.yahoo.elide.jsonapi.resources";

    /**
     * DI Constructor.
     *
     * @param injector  A standard HK2 service locator
     * @param servletContext  Currently unused
     */
    @Inject
    public ResourceConfig(final ServiceLocator injector, @Context final ServletContext servletContext) {
        final Binder binder = new BinderFactory().buildBinder(injector);

        register(binder);

        register(new org.glassfish.hk2.utilities.binding.AbstractBinder() {
            @Override
            protected void configure() {
                final Elide elide = injector.getService(Elide.class, "elide");
                elide.doScans();
            }
        });

        packages(ENDPOINT_PACKAGE);
    }
}

```

The _binding_ looks like

```java
import static com.yahoo.elide.standalone.Util.combineModelEntities;

import com.yahoo.elide.Elide;
import com.yahoo.elide.ElideSettings;
import com.yahoo.elide.ElideSettingsBuilder;
import com.yahoo.elide.core.TransactionRegistry;
import com.yahoo.elide.core.datastore.DataStore;
import com.yahoo.elide.core.dictionary.EntityDictionary;
import com.yahoo.elide.core.dictionary.Injector;
import com.yahoo.elide.core.utils.ClassScanner;
import com.yahoo.elide.core.utils.DefaultClassScanner;
import com.yahoo.elide.core.utils.coerce.CoerceUtil;
import com.yahoo.elide.datastores.jpa.JpaDataStore;
import com.yahoo.elide.datastores.jpa.PersistenceUnitInfoImpl;
import com.yahoo.elide.datastores.jpa.transaction.NonJtaTransaction;

import org.aeonbits.owner.ConfigFactory;
import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.hk2.utilities.Binder;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.hibernate.Session;
import org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl;
import org.hibernate.jpa.boot.internal.PersistenceUnitInfoDescriptor;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.spi.PersistenceUnitInfo;
import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Properties;
import java.util.function.Consumer;

/**
 * A binder factory builds a custom binder for the Jersey application.
 * <p>
 * The factory makes the component object instance that will eventually be passed to
 * {@link org.glassfish.jersey.server.ResourceConfig#register(Object)}.
 */
@Immutable
@ThreadSafe
public class BinderFactory {

    /**
     * Builds a hk2 Binder instance.
     * <p>
     * This binder should bind all relevant resources for runtime dependency injection.
     *
     * @param injector  A standard HK2 service locator
     *
     * @return a binder instance that will be registered by putting as a parameter to
     * {@link org.glassfish.jersey.server.ResourceConfig#register(Object)}
     */
    @NotNull
    public Binder buildBinder(final ServiceLocator injector) {
        return new AbstractBinder() {

            private static final Consumer<EntityManager> TXCANCEL = em -> em.unwrap(Session.class).cancelQuery();

            private static final ApplicationConfig CONFIG = ConfigFactory.create(ApplicationConfig.class);

            private final ClassScanner classScanner = new DefaultClassScanner();

            @Override
            protected void configure() {
                final ElideSettings elideSettings = buildElideSettings();

                bind(buildElide(elideSettings)).to(Elide.class).named("elide");
                bind(elideSettings).to(ElideSettings.class);
                bind(elideSettings.getDictionary()).to(EntityDictionary.class);
                bind(elideSettings.getDataStore()).to(DataStore.class).named("elideDataStore");
            }

            private Elide buildElide(final ElideSettings elideSettings) {
                return new Elide(
                        elideSettings,
                        new TransactionRegistry(),
                        elideSettings.getDictionary().getScanner(),
                        false
                );
            }

            private ElideSettings buildElideSettings() {
                return new ElideSettingsBuilder(buildDataStore(buildEntityManagerFactory()))
                        .withEntityDictionary(buildEntityDictionary(injector))
                        .build();
            }

            private DataStore buildDataStore(final EntityManagerFactory entityManagerFactory) {
                return new JpaDataStore(
                        entityManagerFactory::createEntityManager,
                        em -> new NonJtaTransaction(em, TXCANCEL),
                        entityManagerFactory::getMetamodel);
            }

            private EntityManagerFactory buildEntityManagerFactory() {
                final String modelPackageName = CONFIG.modelPackageName();
                final ClassLoader classLoader = null;

                final PersistenceUnitInfo persistenceUnitInfo = new PersistenceUnitInfoImpl(
                        "astraios",
                        combineModelEntities(classScanner, modelPackageName, false),
                        getDefaultDbConfigs(),
                        classLoader
                );

                return new EntityManagerFactoryBuilderImpl(
                        new PersistenceUnitInfoDescriptor(persistenceUnitInfo),
                        new HashMap<>(),
                        classLoader
                ).build();
            }

            private static Properties getDefaultDbConfigs() {
                final Properties dbProperties = new Properties();

                dbProperties.put("hibernate.show_sql", "true");
                dbProperties.put("hibernate.hbm2ddl.auto", "create");
                dbProperties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
                dbProperties.put("hibernate.current_session_context_class", "thread");
                dbProperties.put("hibernate.jdbc.use_scrollable_resultset", "true");

                // Collection Proxy & JDBC Batching
                dbProperties.put("hibernate.jdbc.batch_size", "50");
                dbProperties.put("hibernate.jdbc.fetch_size", "50");
                dbProperties.put("hibernate.default_batch_fetch_size", "100");

                // Hikari Connection Pool Settings
                dbProperties.putIfAbsent("hibernate.connection.provider_class",
                        "com.zaxxer.hikari.hibernate.HikariConnectionProvider");
                dbProperties.putIfAbsent("hibernate.hikari.connectionTimeout", "20000");
                dbProperties.putIfAbsent("hibernate.hikari.maximumPoolSize", "30");
                dbProperties.putIfAbsent("hibernate.hikari.idleTimeout", "30000");

                dbProperties.put("jakarta.persistence.jdbc.driver", "com.mysql.jdbc.Driver");
                dbProperties.put("jakarta.persistence.jdbc.url", "jdbc:mysql://localhost/elide?serverTimezone=UTC");
                dbProperties.put("jakarta.persistence.jdbc.user", "root");
                dbProperties.put("jakarta.persistence.jdbc.password", "root");

                return dbProperties;
            }

            private EntityDictionary buildEntityDictionary(final ServiceLocator injector) {
                return new EntityDictionary(
                        new HashMap<>(),
                        new HashMap<>(),
                        new Injector() {
                            @Override
                            public void inject(final Object entity) {
                                injector.inject(entity);
                            }

                            @Override
                            public <T> T instantiate(final Class<T> cls) {
                                return injector.create(cls);
                            }
                        },
                        CoerceUtil::lookup,
                        new HashSet<>(),
                        classScanner
                );
            }
        };
    }
}

```

The jetty-base should be initialized with

```bash
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket
```

Example POST via JSON API:

```bash
curl -X POST http://localhost:8080/v1/data/EntityType \
  -H "Content-Type: application/vnd.api+json" \
  -H "Accept: application/vnd.api+json" \
  -d '{"data": {"type": "EntityType", "id": "elide-demo"}}'
```

Troubleshooting
---------------

### Entity Missing Default Constructor

```bash
13:17:52.396 [main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for
class: ... (class must be instantiated by Interceptor)
```

### How to Exclude GraphQL Feature

To optionally disable GraphQL endpoints, simply exclude corresponding dependencies in POM. For example:

```xml
        <dependency>
            <groupId>com.yahoo.elide</groupId>
            <artifactId>elide-core</artifactId>
            <version>7.0.0-pr6</version>
            <exclusions>
                <exclusion>
                    <groupId>com.yahoo.elide</groupId>
                    <artifactId>elide-graphql</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
```

[Elide]: https://elide.io/
[Elide instance class]: https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java
[ElideSettings instance class]: https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java

[what is binding]: https://qubitpi.github.io/jersey/ioc.html
