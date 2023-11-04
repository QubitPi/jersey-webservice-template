---
sidebar_position: 8
title: CI/CD
---

Jersey Webservice Template supports
[automatically deploying to AWS through HashiCorp][hashicorp-aws webservice]

In addition, the following [GitHub Secrets][How to set up GitHub Action Secrets] needs to be defined

- [**SONAR_TOKEN**](https://sonarcloud.io/project/overview?id=QubitPi_jersey-webservice-template)

![Error loading ci-cd.png](./img/ci-cd.png)

### JPA through Elide

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
          jersey-webservice-template-model-package-jar-group-id: ${{ secrets.JWT_MODEL_PACKAGE_JAR_GROUP_ID }}
          jersey-webservice-template-model-package-jar-artifact-id: ${{ secrets.JWT_MODEL_PACKAGE_JAR_ARTIFACT_ID }}
          jersey-webservice-template-model-package-jar-version: ${{ secrets.JWT_MODEL_PACKAGE_JAR_VERSION }}
          jersey-webservice-template-model-package-repo-id: ${{ secrets.JWT_MODEL_PACKAGE_REPO_ID }}
          jersey-webservice-template-model-package-repo-url: ${{ secrets.JWT_MODEL_PACKAGE_REPO_URL }}
      ...
```

[hashicorp-aws webservice]: https://qubitpi.github.io/hashicorp-aws/docs/webservice

[Application configs]: https://github.com/QubitPi/jersey-webservice-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/config/ApplicationConfig.java

[create-mvn-settings]: https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/.github/actions/create-mvn-settings/action.yml

[docker hub]: https://hub.docker.com/r/jack20191124/jersey-webservice-template/

[HashiCorp Packer template]: https://github.com/QubitPi/jersey-webservice-template/blob/master/hashicorp/images/aws-jersey-ws.pkr.hcl
[HashiCorp Packer template setup script]: https://github.com/QubitPi/jersey-webservice-template/blob/master/hashicorp/scripts/setup.sh
[HashiCorp Terraform config file]: https://github.com/QubitPi/jersey-webservice-template/blob/master/hashicorp/instances/main.tf
[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[jersey-webservice-template CI/CD]: https://github.com/QubitPi/jersey-webservice-template/blob/master/.github/workflows/ci-cd.yml
[jersey-webservice-template Dockerfile]: https://github.com/QubitPi/jersey-webservice-template/blob/master/Dockerfile

[Nginx SSL Config]: https://github.com/QubitPi/jersey-webservice-template/blob/master/hashicorp/images/nginx-ssl.conf

[OAuth-related configs]: https://github.com/QubitPi/jersey-webservice-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/config/OAuthConfig.java
