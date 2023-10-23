Jersey Webservice Template <sup>![Java Version Badge][Java Version Badge]</sup>
===============================================================================

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/jersey-ws-template/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/QubitPi/jersey-ws-template/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)
![GitHub Actions Badge][GitHub Actions Badge]
![HashiCorp Packer Badge][HashiCorp Packer Badge]
![HashiCorp Terraform Badge][HashiCorp Terraform Badge]

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

[Jersey Webservice Template (JWT)][jersey-ws-template] is a [JSR 370] web service **template** that lets us spin up
Java web service quickly through [Golden Paths] approach.

I Believe Binding to Standard Makes the Best Software
-----------------------------------------------------

Web services technology are now widespread, standardizing organizational approaches to the cloud. But as business
expand, web service often struggle to reach the desired levels of scale. Development slows as complexity grows.

By codifying and standardizing a webservice development and compliance rules, developers can be free to do what they
want to: add business value by writing code.

JWT applies the [Pareto Principle] to webservice design. Use case analysis shows that the vast majority of web
service component need just a handful of inputs to meet most customer requirements. Focusing on this "easy 80%" of use
cases results in neat, concise web service that are simple to understand and use. It also causes web service to become
more opinionated, which guides developers into a standard pattern, bringing consistency around how software is used in
the organization.

Gradually, more than just code can be shared. Best practices start to emerge. [Golden paths][Golden Paths] are created.

[The Technology Acceptance Model (TAM)] suggests that adoption is predicted on how much people see something as _being
useful_ and _easy to use_. Standardization and golden paths address both these factors and make adoption of an open
source project more likely. JWT does more to make itself easy to use by enabling "on-click" experience that goes from
nothing to a full-fledged webservice on AWS cloud

Documentation
-------------

- [Documentation]
- [Javadoc]

License
-------

The use and distribution terms for [jersey-ws-template] are covered by the
[Apache License, Version 2.0][Apache License, Version 2.0].

<div align="center">
    <a href="https://opensource.org/licenses">
        <img align="center" width="50%" alt="License Illustration" src="https://github.com/QubitPi/QubitPi/blob/master/img/apache-2.png?raw=true">
    </a>
</div>

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html

[Documentation]: https://qubitpi.github.io/jersey-ws-template/

[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[GitHub Actions Badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/jersey-ws-template/ci-cd.yml?branch=master&logo=github&style=for-the-badge
[Golden Paths]: https://www.hashicorp.com/blog/maturing-your-terraform-workflow#golden-paths

[HashiCorp Packer Badge]: https://img.shields.io/badge/Packer-02A8EF?style=for-the-badge&logo=Packer&logoColor=white
[HashiCorp Terraform Badge]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[Javadoc]: https://qubitpi.github.io/jersey-ws-template/apidocs/
[jersey-ws-template]: https://qubitpi.github.io/jersey-ws-template/
[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[Pareto Principle]: https://en.wikipedia.org/wiki/Pareto_principle

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

[The Technology Acceptance Model (TAM)]: https://open.ncl.ac.uk/theories/1/technology-acceptance-model/
