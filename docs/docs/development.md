---
sidebar_position: 3
title: Development
---

[//]: # (Copyright Jiaqi Liu)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

Running Tests
-------------

The following commands runs both unit and integration tests

:::info

<!-- markdown-link-check-disable -->
For [JPA through Elide Middleware](elide) template, please refer to its dedicated [setup](elide#setup) section first
<!-- markdown-link-check-enable -->

:::

```bash
mvn clean verify
```

For IT tests, we use [Testcontainers] instead of [jcabi-mysql] because the latter is hard to configure and debug and
[Testcontainers] support more types of db, such as mongo

:::tip

If tests fail with 404 or endpoint-not-working, make sure the port 8080 is not occupied all integration tests runs
against webservice running at that port.

:::

Packaging
---------

```bash
mvn clean package
```

A [WAR file](https://en.wikipedia.org/wiki/WAR_(file_format)) named **jersey-webservice-template-1.0-SNAPSHOT.war** will
be generated under _target_ directory for [running in Jetty](#running-in-standalone-jetty)

Running Webservice in Docker (Local Dev & Testing ONLY)
-------------------------------------------------------

This [Docker] image can be used for

1. decoupling frontend and backend developments, and
2. making it easy to run E2E testing of application backed by Jersey Webservice Template in CI/CD

:::caution

Docker designed here is intended for local development and testing purposes ONLY! _It is strongly discouraged
to run this Docker container in production!_

:::

### Getting the Image

We can obtain the image in one of the 2 approaches below:

#### Docker Hub

We can pull the image from [my docker hub](https://hub.docker.com/r/jack20191124/jersey-webservice-template/):

```bash
docker pull jack20191124/jersey-webservice-template
```

#### GitHub

We could also build the image from [source][Docker]:

```bash
git clone https://github.com/QubitPi/jersey-webservice-template.git
cd jersey-webservice-template
mvn clean package
docker build -t jack20191124/jersey-webservice-template .
```

:::info

<!-- markdown-link-check-disable -->

- The `mvn clean package` requires JDK 17 which can be setup with [instructions here](setup)
- The `jack20191124/jersey-webservice-template` in the last command is the image name; we could replace that value with
  anything preferred

<!-- markdown-link-check-enable -->

:::

### Standing up a Container

When image is built, we can spin up an instance with

```bash
docker run --name=jersey-webservice-template -it -p 8080:8080 jack20191124/jersey-webservice-template
```

- **name=jersey-webservice-template**: the container is named "jersey-webservice-template". We can change it
  accordingly.
- **-p 8080:8080**: 8080 is the port where webservice will listen on. With this port forwarding, we will be able to
  access webservice from host machine web browser at `localhost:8080`

If we see the following output, it means the container is running properly and ready to accept request such as
`http://localhost:8080/v1/data/healthcheck`

```bash
...

2023-10-24 05:21:46.032:INFO :oejss.DefaultSessionIdManager:main: Session workerName=node0
2023-10-24 05:21:46.977:INFO :oejsh.ContextHandler:main: Started o.e.j.w.WebAppContext@2892dae4{ROOT.war,/,file:///tmp/jetty-0_0_0_0-8080-ROOT_war-_-any-13760845903749066689/webapp/,AVAILABLE}{/jetty-base/webapps/ROOT.war}
2023-10-24 05:21:46.994:INFO :oejs.AbstractConnector:main: Started ServerConnector@5c8dfc08{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}
2023-10-24 05:21:47.009:INFO :oejs.Server:main: Started Server@71d44a3{STARTING}[11.0.15,sto=5000] @2947ms
```

Running Webservice in Standalone Jetty (Production)
---------------------------------------------------

### Download Jetty

For JDK **17**, which is the version JWT runs on, it's been tested that Jetty _11.0.15_ worked. Hence, we will use
["11.0.15" release](https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/11.0.15/jetty-home-11.0.15.tar.gz) as
an example:

![Error loading download-jetty.png](img/download-jetty.png)

Put the `tar.gz` file into a location of your choice as the installation path and extract the Jetty binary using

```bash
tar -xzvf jetty-home-11.0.15.tar.gz
```

The extracted directory *jetty-home-11.0.15* is the Jetty distribution. We call this directory **$JETTY_HOME**, which
should not be modified.

### Setting Up Standalone Jetty

Our [WAR file](#packaging) will be dropped to a directory where Jetty can pick up and run. We call this directory
**$JETTY_BASE**, which is usually different from the _$JETTY_HOME_. The _$JETTY_BASE_ also contains container runtime
configs. In short, the Standalone Jetty container will be setup with

```bash
export JETTY_HOME=/path/to/jetty-home-11.0.15
mkdir -p /path/to/jetty-base
cd /path/to/jetty-base
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp
```

where `/path/to/` is the _absolute_ path to the directory containing the `jetty-home-11.0.15` directory

The `--add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp` is how we configure the Jetty
container.

Lastly, drop the [WAR file](#packaging) into **/path/to/jetty-base/webapps** directory and rename the WAR file to
**ROOT.war**:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Running Webservice

```bash
java -jar $JETTY_HOME/start.jar
```

The webservice will run on port **8080**, and you will see the data you inserted

Deployment
----------

Jersey Webservice Template supports
[automatically deploying to AWS through HashiCorp][hashicorp-aws webservice]

[Docker]: https://github.com/QubitPi/jersey-webservice-template/blob/master/Dockerfile

[jcabi-mysql]: https://mysql.jcabi.com/

[Testcontainers]: https://qubitpi.github.io/testcontainers-java/
