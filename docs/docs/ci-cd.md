---
sidebar_position: 7
title: CI/CD
---

![Error loading ci-cd.png](./img/ci-cd.png)

The following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- [**APPLICATION_PROPERTIES**][Application configs], such as

  ![Error loading application-config-file-example.png](./img/application-config-file-example.png)

- [**OAUTH_PROPERTIES**][OAuth-related configs], such as

  ![Error loadinng oauth-config-example.png](./img/oauth-config-example.png)

- [**SONAR_TOKEN**](https://sonarcloud.io/project/overview?id=QubitPi_jersey-ws-template)
- (Optional) **SSL_CERTIFICATE** SSL certificate file content (for
  [exposing webservice endpoints over HTTPS][Nginx SSL Config])
- (Optional) **SSL_CERTIFICATE_KEY** SSL certificate key file content (for
  [exposing webservice endpoints over HTTPS][Nginx SSL Config])

  :::info

  In case SSL is not needed (because, for example, the webservice is behind a load balancer, which handles SSL for it),
  Delete the following:

  - SSL config in HashiCorp [image][HashiCorp Packer template] and its
    [setup script][HashiCorp Packer template setup script]
  - [AWS Route 53 record config][HashiCorp Terraform config file]

  :::

- [**AWS_ACCESS_KEY_ID**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_SECRET_ACCESS_KEY**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [**AWS_REGION**](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html), such as "us-east-1"
- (Optional) **ZONE_ID** AWS Route 53 hosted zone ID (DNS routing) **if SSL configs above are set**
- **DOCKERHUB_USERNAME** The [Dockerfile][jersey-ws-template Dockerfile], in [CI/CD][jersey-ws-template CI/CD], got
  pushed to a [personal DockerHub][docker hub] account. The _DOCKERHUB_USERNAME_ if it needs to go to a different
  account, should be set accordingly
- [**DOCKERHUB_TOKEN**](https://docs.docker.com/docker-hub/access-tokens/) for pushing the
  [aforementioned image][jersey-ws-template Dockerfile]
<!-- markdown-link-check-disable -->

- [**SENTRY_DSN**](sentry)

<!-- markdown-link-check-enable -->

- Update `"EC2 Instance Name"` and `"Security Group Name"` in [Terraform config file][HashiCorp Terraform config file]
  accordingly

### JPA through Elide

- **APPLICATION_PROPERTIES** The _application.properties_ file content that will be put under _src/main/resources/_
  directory by CI/CD
- **JPADATASTORE_PROPERTIES** The _jpadatastore.properties_ file content that will be put under _src/main/resources/_
  directory

Note that if model package is from an internal Maven repo which requires authentication, we can insert a _settings.xml_
generating step using [create-mvn-settings]. For example:

```yml
  hashicorp:
    name: Generated Webservice WAR in GitHub Action, and Publish Template AMI Image and Deploy it to EC2 through HashiCorp
    needs: tests
    runs-on: ubuntu-latest
    steps:
      ...

      - name: Generate Maven settings.xml
        uses: ./.github/actions/create-mvn-settings
        with:
          internal-maven-repo-server-id: ${{ secrets.INTERNAL_MAVEN_REPO_SERVER_ID }}
          internal-maven-repo-user: ${{ secrets.INTERNAL_MAVEN_REPO_USER }}
          internal-maven-repo-token: ${{ secrets.INTERNAL_MAVEN_REPO_TOKEN }}

      ...
```

[Application configs]: https://github.com/QubitPi/jersey-ws-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/config/ApplicationConfig.java

[create-mvn-settings]: https://github.com/QubitPi/jersey-ws-template/blob/jpa-elide/.github/actions/create-mvn-settings/action.yml

[docker hub]: https://hub.docker.com/r/jack20191124/jersey-ws-template/

[HashiCorp Packer template]: https://github.com/QubitPi/jersey-ws-template/blob/master/hashicorp/images/aws-jersey-ws.pkr.hcl
[HashiCorp Packer template setup script]: https://github.com/QubitPi/jersey-ws-template/blob/master/hashicorp/scripts/setup.sh
[HashiCorp Terraform config file]: https://github.com/QubitPi/jersey-ws-template/blob/master/hashicorp/instances/main.tf
[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[jersey-ws-template CI/CD]: https://github.com/QubitPi/jersey-ws-template/blob/master/.github/workflows/ci-cd.yml
[jersey-ws-template Dockerfile]: https://github.com/QubitPi/jersey-ws-template/blob/master/Dockerfile

[Nginx SSL Config]: https://github.com/QubitPi/jersey-ws-template/blob/master/hashicorp/images/nginx-ssl.conf

[OAuth-related configs]: https://github.com/QubitPi/jersey-ws-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/config/OAuthConfig.java
