---
sidebar_position: 2
title: Setup
---

Prepare for Local Development
-----------------------------

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

Maven uses a separate JDK version, which can be seen via `mvn -v`. If it's not JDK 17, we should have Maven point
to our JDK 17 using [JAVA_HOME](https://stackoverflow.com/a/2503679):

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

[Jersey Webservice Template][jersey-ws-template] has [Docker-based integration tests][Docker-based integration tests];
it also supports [running template webserivce in Docker][jersey-ws-template Dockerfile]. Docker can be installed by
following its [official instructions](https://docs.docker.com/desktop/install/mac-install/)

Getting Source Code
-------------------

```bash
https://github.com/QubitPi/jersey-ws-template.git
cd jersey-ws-template
```

### Syncing up with jersey-ws-template's Code Styles with IntelliJ

For the moment, we have distilled the most important code style conventions with respect to jersey-ws-template's code as
IntelliJ settings. If IntelliJ is used for IDE, we may import these code style settings by importing the
[Jersey-WS-Template-Project-intellij-code-style.xml][style config] file in the root of the repo. The setting for the
project will appear as a new Scheme named Jersey-WS-Template-Project under IDE's `Editor -> Code Style` section.

Removing Unneeded Classes
-------------------------

[Jersey Webservice Template][jersey-ws-template] comes with common classes many webservices need, such as those
implementing caching feature. _Remove them if not needed_:

- [Caching][Caching] and [its tests][Caching tests]

Modifying Templates
-------------------

<!-- markdown-link-check-disable -->

1. Setup [CI/CD](ci-cd)

<!-- markdown-link-check-enable -->

2. Renaming `src` package
3. Setup SonarCloud Project and replace all `QubitPi_jersey-ws-template` with project ID accordingly
4. Update links by replacing all `jersey-ws-template`, `Jersey Webservice Template`, and `QubitPi` (including cases)
   accordingly
5. Update [endpoint package] accordingly
6. Update Copyright holder "Jiaqi Liu"

[Caching]: https://github.com/QubitPi/jersey-ws-template/tree/master/src/main/java/com/qubitpi/ws/jersey/template/cache
[Caching tests]: https://github.com/QubitPi/jersey-ws-template/tree/master/src/test/groovy/com/qubitpi/ws/jersey/template/cache

[Docker-based integration tests]: https://github.com/QubitPi/jersey-ws-template/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy

[endpoint package]: https://github.com/QubitPi/jersey-ws-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/application/ResourceConfig.java

[jersey-ws-template]: https://github.com/QubitPi/jersey-ws-template
[jersey-ws-template Dockerfile]: https://github.com/QubitPi/jersey-ws-template/blob/master/Dockerfile

[style config]: https://github.com/QubitPi/jersey-ws-template/blob/master/Jersey-WS-Template-Project-intellij-code-style.xml