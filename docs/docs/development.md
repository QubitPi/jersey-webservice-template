---
sidebar_position: 3
title: Development
---

The following guide is intended to help developers who maintain or want to make changes to the Jersey Webservice
Template.

Preparing for Local Development
-------------------------------

This section discusses the one-time setup in order to develop FastWS.

### Installing Java & Maven (on Mac)

```bash
brew update
brew install openjdk@17
```

At the end of the last command prompt, something like the below will show up:

```bash
For the system Java wrappers to find this JDK, symlink it with
  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk

openjdk@17 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have openjdk@17 first in your PATH, run:
  echo 'export PATH=".../openjdk@17/bin:$PATH"' >> .../.bash_profile

For compilers to find openjdk@17 you may need to set:
  export CPPFLAGS="-I.../openjdk@17/include"
```

Make sure to execute the `sudo ln -sfn`, `echo 'export PATH=...`, and the `export CPPFLAGS=` commands above

:::tip

FastWS is built using maven. Maven uses a separate JDK version, which can be seen via `mvn -v`. If it's not JDK 17, we
should have Maven point to our JDK 17 using [JAVA_HOME](https://stackoverflow.com/a/2503679):

```bash
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

:::

If we see something similar after typing the command with the version flag below we're good to go

```bash
$ java --version
openjdk 17.0.10 2021-01-19
OpenJDK Runtime Environment (build 17.0.10+9)
OpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)
```

### Installing Docker Engine

FastWS has [Docker-based integration tests]; it also supports
[running template webserivce in Docker][fast-ws Dockerfile]. Docker can be installed by following its
[official instructions](https://docs.docker.com/desktop/install/mac-install/)

Getting Source Code
-------------------

```bash
git clone git@github.com:QubitPi/fast-ws.git
cd fast-ws
```

### Syncing up with FastWS's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to FastWS's code as IntelliJ
settings. If IntelliJ is used for IDE, we may import these code style settings by importing the
[FastWS-Project-intellij-code-style.xml][style config] file in the root of the repo. The setting for the project will
appear as a new Scheme named "fast-ws-Project" under IDE's __Editor__ -> __Code Style__ section.

Please also enable "remove unused imports" by __Editor__ -> __General__ -> __Auto Import__ -> __Optimize Imports on the
Fly__, which will automatically remove unused imports.

Running Tests
-------------

The following commands runs both unit and integration tests:

:::tip

If tests fail with 404 or endpoint-not-working, make sure the port 8080 is not occupied. All integration tests runs
against webservice running at that port.

:::

```bash
mvn clean verify
```

For IT tests, we use [Testcontainers] instead of [jcabi-mysql] because the latter is hard to configure and debug and
[Testcontainers] support more types of databases, such as mongo

Packaging
---------

A [WAR file](https://en.wikipedia.org/wiki/WAR_(file_format)) named __fast-ws-1.0-SNAPSHOT.war__ will
be generated under _target_ directory for [running in Jetty](#running-webservice-in-standalone-jetty-production) with
the command below:

```bash
mvn clean package
```

Running Webservice in Docker
----------------------------

Please make sure Docker is installed
([_Installing Docker_](https://docker.qubitpi.org/desktop/setup/install/mac-install/)), then execute the following
commands:

### Getting the Image

We can obtain the image in one of the 2 approaches below:

#### Docker Hub

We can pull the image from [my docker hub](https://hub.docker.com/r/jack20191124/fast-ws/):

```bash
docker pull jack20191124/fast-ws
```

#### GitHub

We could also build the image from [source][Docker]:

```bash
git clone https://github.com/QubitPi/fast-ws.git
cd fast-ws
docker build -t jack20191124/fast-ws .
```

Please note that the `jack20191124/fast-ws` in the last command is the image name; we could replace
that value with anything preferred

### Standing up a Container

When image is built, we can spin up an instance with

```bash
docker run --name=fast-ws -it -p 8080:8080 jack20191124/fast-ws
```

- __name=fast-ws__: the container is named "fast-ws". We can change it
  accordingly.
- __-p 8080:8080__: 8080 is the port where webservice will listen on. With this port forwarding, we will be able to
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

Running Webservice in Standalone Jetty
--------------------------------------

### Download Jetty

For JDK __17__, which is the version FastWS runs on, it's been tested that Jetty _11.0.15_ worked. Hence, we will use
["11.0.15" release](https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/11.0.15/jetty-home-11.0.15.tar.gz) as
an example:

![Error loading download-jetty.png](img/download-jetty.png)

Put the `tar.gz` file into a location of your choice as the installation path and extract the Jetty binary using

```bash
tar -xzvf jetty-home-11.0.15.tar.gz
```

The extracted directory *jetty-home-11.0.15* is the Jetty distribution. We call this directory __$JETTY_HOME__, which
should not be modified.

### Setting Up Standalone Jetty

Our [WAR file](#packaging) will be dropped to a directory where Jetty can pick up and run. We call this directory
__$JETTY_BASE__, which is usually different from the _$JETTY_HOME_. The _$JETTY_BASE_ also contains container runtime
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

Lastly, drop the [WAR file](#packaging) into __/path/to/jetty-base/webapps__ directory and rename the WAR file to
__ROOT.war__:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Running Webservice

```bash
java -jar $JETTY_HOME/start.jar
```

The webservice will run on port __8080__, and you will see the data you inserted

Troubleshooting
---------------

### IntelliJ

#### IntelliJ Cannot READ Resource File

We sometimes see errors when we run unit tests in IntelliJ, saying "some resource file" cannot be found. We know the
path is absolutely right. If this is the case, it's simply a IntelliJ issue which is solved by simply loading those
resources explicitly by telling IntelliJ where those resources are:

![Error loading intelliJ-find-resource.png](img/intelliJ-find-resource.png)

#### Tab Width

We use 4-space as tab. This can be configured at __Code Style__ -> __Java__ -> __Tabs and Indents__ with the following
settings:

Tab size: 4
Indent: 4
Continuation indent: 8

If tabs still come out at 2 spaces when hitting TAB or Enter, not 4 spaces, try:

1. "Settings | Editor | Code Style" -- try disabling "Detect and use existing file indents for editing" in case if you
   have it enabled (it is by default). NOTE: re-opening file in editor may be required.
2. Do you have any .editorconfig files anywhere in the path of that file? Settings from .editorconfig
   ("Settings | Editor | Code Style") have priority (will overwrite) over your IDE settings.

[Docker]: https://github.com/QubitPi/fast-ws/blob/master/Dockerfile
[Docker-based integration tests]: https://github.com/QubitPi/fast-ws/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DockerITSpec.groovy

[jcabi-mysql]: https://mysql.jcabi.com/
[fast-ws Dockerfile]: https://github.com/QubitPi/fast-ws/blob/master/Dockerfile

[style config]: https://github.com/QubitPi/fast-ws/blob/master/FastWS-Project-intellij-code-style.xml

[Testcontainers]: https://qubitpi.github.io/testcontainers-java/
