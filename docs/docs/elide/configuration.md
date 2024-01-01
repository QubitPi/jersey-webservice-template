---
sidebar_position: 10
title: Configuration
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

The configurations in this page can be set from several sources in the following order:

1. the [operating system's environment variables]; for instance, an environment variable can be set with
   `export OAUTH_ENABLED="true"`
2. the [Java system properties]; for example, a Java system property can be set using
   `System.setProperty("OAUTH_ENABLED", "true")`
3. a **.properties** file placed under CLASSPATH. This file can be put under `src/main/resources` source directory with
   contents, for example, `OAUTH_ENABLED=true`

Core Properties
---------------

:::note

The following configurations can be placed in the properties file called **application.properties**

:::

- **MODEL_PACKAGE_NAME**: The fully qualified package name that contains a set of Elide JPA models

JPA DataStore
-------------

:::note

The following configurations can be placed in the properties file called **jpadatastore.properties**

:::

- **DB_USER**: Persistence DB username (needs have both Read and Write permissions).
- **DB_PASSWORD**: The persistence DB user password.
- **DB_URL**: The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".
- **DB_DRIVER**: The SQL DB driver class name, such as "com.mysql.jdbc.Driver".
- **DB_DIALECT**: The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".

CI/CD
-----

<!-- markdown-link-check-disable -->
In addition to the ones mentioned in [general CI/CD configs](../configuration#cicd), these
[GitHub Action Secrets][GitHub Action - How to set up] needs to be setup:
<!-- markdown-link-check-enable -->

| Secret Name                    | Definition                                                                                                                          | How to Get                                                                                                                                                                                                         |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| APPLICATION_PROPERTIES         | The contents of the `src/main/resources/application.properties` mentioned above                                                     | See [Core Properties](#core-properties) section above                                                                                                                                                              |
| JPADATASTORE_PROPERTIES        | The contents of the `src/main/resources/jpadatastore.properties` mentioned above                                                    | See [JPA DataStore](#jpa-datastore) section above                                                                                                                                                                  |
| DATA_MODELS_PRIVATE_REPO_TOKEN | The GitHub Fine-grained token with at least "Read access to code and metadata" repository permissions to the Elide data models repo | [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) |
| DATA_MODELS_PRIVATE_REPO_ORG   | The org/user name of the GitHub repo for Elide data models                                                                          | For [this example](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models), DATA_MODELS_PRIVATE_REPO_ORG is "QubitPi"                                                                               |
| DATA_MODELS_PRIVATE_REPO_NAME  | The name of the GitHub repo for Elide data models                                                                                   | For [this example](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models), DATA_MODELS_PRIVATE_REPO_NAME is "jersey-webservice-template"                                                           |

### CI/CD Chain

Jersey Webservice Templates adopts the best CI/CD strategies by incorporating its sister projects, [jersey-webservice-template-jpa-data-models] and
[jersey-webservice-template-jpa-data-models-acceptance-tests], into its CI/CD pipeline. Any PR merge into `jpa-elide` branch will trigger the
[CI/CD of its data model](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models/actions), which then triggers
[CI/CD of data model's acceptance tests](https://github.com/QubitPi/jersey-webservice-template-jpa-data-models-acceptance-tests/actions).

The triggering of its direct downstream project is done through GitHub Actions. See the **triggering** job in [CI/CD definition file]. Basically, the triggering is proxied to
[peter-evans/repository-dispatch]:

```yaml
  triggering:
    name: Triggering data model CI/CD
    runs-on: ubuntu-latest
    steps:
      - name: Trigger data model CI/CD
        uses: peter-evans/repository-dispatch@v2
        with:
          token: ${{ secrets.MY_DATA_MODEL_CICD_TRIGGER }}
          repository: my-org/my-data-model-repo
          event-type: my-webservice-repo-changes
```

[GitHub Action - How to set up]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[Java system properties]: https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html

[operating system's environment variables]: https://docs.oracle.com/javase/tutorial/essential/environment/env.html
