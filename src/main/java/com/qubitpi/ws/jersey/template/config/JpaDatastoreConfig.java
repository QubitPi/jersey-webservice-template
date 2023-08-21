/*
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.qubitpi.ws.jersey.template.config;

import org.aeonbits.owner.Config;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link JpaDatastoreConfig} provides an interface for retrieving configuration values, allowing for implicit type
 * conversion, defaulting, and use of a runtime properties interface to override configured settings.
 * <p>
 * {@link JpaDatastoreConfig} supports overriding between properties:
 * <ol>
 *     <li> It will try to load the given property from the
 *          <a href="https://docs.oracle.com/javase/tutorial/essential/environment/env.html">operating system's
 *          environment variables</a>; if an environment variable with the same name is found, its value will be
 *          returned. For instance, an environment variable can be set with
 *          {@code export EXAMPLE_CONFIG_KEY_NAME="some-value"}
 *     <li> Otherwise, it will try to load the given property from the
 *          <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">Java system properties
 *          </a>; if such property is defined, the associated value is returned. For example, a Java system property can
 *          be set using {@code System.setProperty("EXAMPLE_CONFIG_KEY_NAME", "some-value")}
 *     <li> <b>The first resource defining the property will prevail.</b>
 * </ol>
 */
@Immutable
@ThreadSafe
@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:env", "system:properties", "classpath:jpadatastore.properties"})
public interface JpaDatastoreConfig extends Config {

    /**
     * Persistence DB username (needs have both Read and Write permissions).
     *
     * @return a credential
     */
    @NotNull
    @Key("DB_USER")
    String dbUser();

    /**
     * The persistence DB user password.
     *
     * @return a credential
     */
    @NotNull
    @Key("DB_PASSWORD")
    String dbPassword();

    /**
     * The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".
     *
     * @return a JDBC connection URL
     */
    @NotNull
    @Key("DB_URL")
    String dbUrl();

    /**
     * The SQL DB driver class name, such as "com.mysql.jdbc.Driver".
     *
     * @return a DB config string
     */
    @NotNull
    @Key("DB_DRIVER")
    String dbDriver();

    /**
     * The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".
     *
     * @return a DB config string
     */
    @NotNull
    @Key("DB_DIALECT")
    String dbDialect();
}
