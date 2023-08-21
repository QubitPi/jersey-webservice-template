---
slug: env-var-in-pom
title: Refer to Environment Variables in POM
authors: jiaqi
tags: [Java, Maven]
---

Environment Variables
---------------------

To refer to environment variables from the pom.xml, we can use the **${env.VARIABLE_NAME}** syntax.

For instance, let's use it to externalize the Java version in the build process:

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>${env.JAVA_VERSION}</source>
                <target>${env.JAVA_VERSION}</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

We should remember to pass the Java version information via environment variables. If we fail to do so, then we won't be
able to build the project.

To run the Maven goals or phases against such a build file, we should first export the environment variable. For
instance

```bash
export JAVA_VERSION=17
mvn clean package
```

In order to provide a default when the `JAVA_VERSION` environment variable is missing we can use a Maven profile:

```xml
<profiles>
    <profile>
        <id>default-java</id>
        <activation>
            <property>
                <name>!env.JAVA_VERSION</name>
            </property>
        </activation>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.8.1</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

As shown above, we're creating a profile and making it active only if the `JAVA_VERSION` environment variable is missing
(`!env.JAVA_VERSION` part). If that happens, then this new plugin definition will override the existing one.