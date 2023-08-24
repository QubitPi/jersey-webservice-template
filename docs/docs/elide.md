---
sidebar_position: 6
title: Elide Middleware
---

Template can delegate JPA persistence to [Elide].

Configuring Elide requires 2 [bindings][what is binding]:

1. **[Elide][Elide instance class]**
2. **[ElideSettings][ElideSettings instance class]** with 2 extra sub-bindings:

   - **EntityDictionary**
   - **DataStore**

The binding is referencing [Elide Standalone] in the following way:

![Error loading resource-binding.png](./img/resource-binding.png)

To inject Elide model package, simply put the models in a separate JAR and include it as a dependency in POM. If the
model package is internal and cannot be visible publicly, either make the webservice project private or public with
env variable masking, for example:

```xml
<dependencies>
    <dependency>
        <groupId>${env.MODEL_PACKAGE_JAR_GROUP_ID}</groupId>
        <artifactId>${env.MODEL_PACKAGE_JAR_ARTIFACT_ID}</artifactId>
        <version>${env.MODEL_PACKAGE_JAR_VERSION}</version>
    </dependency>
</dependencies>
```

```bash
export MODEL_PACKAGE_JAR_GROUP_ID=com.mycompnay
export MODEL_PACKAGE_JAR_ARTIFACT_ID=my-model-package
export MODEL_PACKAGE_JAR_VERSION=1.0.7
```

:::caution

The jetty-base should be initialized with

```bash
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket
```

In addition, before running webservice, the environment variable **MODEL_PACKAGE_NAME** must be set. For example:

```bash
export MODEL_PACKAGE_NAME=com.mycompnay.models
```

:::

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

[BinderFactory]: https://github.com/QubitPi/jersey-ws-template/blob/jpa-elide/src/main/java/com/qubitpi/ws/jersey/template/application/BinderFactory.java

[Elide]: https://elide.io/
[Elide instance class]: https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java
[Elide Standalone]: https://github.com/yahoo/elide/tree/master/elide-standalone
[ElideSettings instance class]: https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java

[ResourceConfig]: https://github.com/QubitPi/jersey-ws-template/blob/jpa-elide/src/main/java/com/qubitpi/ws/jersey/template/application/ResourceConfig.java

[what is binding]: https://qubitpi.github.io/jersey/ioc.html
