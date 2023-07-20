Jersey Webservice Template <sup>![Java Version Badge][Java Version Badge]</sup>
===============================================================================

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/jersey-ws-template/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/QubitPi/jersey-ws-template/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)

<a href="https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template">
    <img
        align="left"
        width="17%"
        alt="SonarCloud Quality Gate"
        src="https://sonarcloud.io/api/project_badges/quality_gate?project=QubitPi_jersey-ws-template"
    >
</a>

[![Bugs][Sonar Bugs]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Vulnerabilities][Sonar Vulnerabilities]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Security Rating][Sonar Security Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

[![Coverage][Sonar Coverage]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Code Smells][Sonar Code Smells]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Maintainability Rating][Sonar Maintainability Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

[![Lines of Code][Sonar Lines of Code]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Duplicated Lines (%)][Sonar Duplicated Lines (%)]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Reliability Rating][Sonar Reliability Rating]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)
[![Technical Debt][Sonar Technical Debt]](https://sonarcloud.io/summary/new_code?id=QubitPi_jersey-ws-template)

Running Tests
-------------

```bash
mvn clean verify
```

Packaging
---------

```bash
mvn clean package
```

A **WAR** file will be generated under _target_ directory

Running in Standalone Jetty
---------------------------

### Download Jetty

At [download page](https://www.eclipse.org/jetty/download.php), pick up a `.tgz` distribution. Since this template
requires Java 11+, we will use "11.0.15" release as an example:

![Error loading download-jetty.png](./download-jetty.png)

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
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy
```

The `--add-module=annotations,server,http,deploy` is how we configure the Jetty container.

Lastly, drop the [WAR file](#packaging) into **/path/to/jetty-base/webapps** directory and rename the WAR file to
**ROOT.war**:

```bash
mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war
```

### Running Jersey Template Webservice

```bash
java -jar $JETTY_HOME/start.jar
```

The webservice will run on port **8080**

CI/CD
-----

![Error loading ci-cd.png](./docs/ci-cd.png)

The following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- **SONAR_TOKEN** T

- **SSL_CERTIFICATE** SSL certificate file content (for
  [exposing webservice endpoints over HTTPS](./hashicorp/images/nginx-ssl.conf))
- **SSL_CERTIFICATE_KEY** SSL certificate key file content (for
  [exposing webservice endpoints over HTTPS](./hashicorp/images/nginx-ssl.conf))

- **AWS_ACCESS_KEY_ID**
- **AWS_SECRET_ACCESS_KEY**
- **AWS_REGION**
- **ZONE_ID** AWS Route 53 hosted zone ID (DNS routing)

License
-------

The use and distribution terms for [jersey-ws-template][jersey-ws-template] are covered by the
[Apache License, Version 2.0][Apache License, Version 2.0].

<div align="center">
    <a href="https://opensource.org/licenses">
        <img align="center" width="50%" alt="License Illustration" src="https://github.com/QubitPi/QubitPi/blob/master/img/apache-2.png?raw=true">
    </a>
</div>

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html

[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/jersey-ws-template/ci-cd.yml?branch=master&logo=github&style=for-the-badge

[Java Version Badge]: https://img.shields.io/badge/Java-11-brightgreen?style=flat-square&logo=OpenJDK&logoColor=white
[jersey-ws-template]: https://github.com/QubitPi/jersey-ws-template

[Sonar Bugs]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=bugs
[Sonar Vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=vulnerabilities
[Sonar Security Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=security_rating
[Sonar Coverage]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=coverage
[Sonar Code Smells]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=code_smells
[Sonar Maintainability Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=sqale_rating
[Sonar Lines of Code]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=ncloc
[Sonar Duplicated Lines (%)]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=duplicated_lines_density
[Sonar Reliability Rating]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=reliability_rating
[Sonar Technical Debt]: https://sonarcloud.io/api/project_badges/measure?project=QubitPi_jersey-ws-template&metric=sqale_index
