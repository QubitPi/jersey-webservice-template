Jersey Webservice Template <sup>![Java Version Badge][Java Version Badge]</sup>
===============================================================================

[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/jersey-webservice-template/actions/workflows/ci-cd.yml)
![Last Commit](https://img.shields.io/github/last-commit/QubitPi/jersey-webservice-template/master?logo=github&style=for-the-badge)
[![Apache License Badge]](https://www.apache.org/licenses/LICENSE-2.0)
![GitHub Actions Badge][GitHub Actions Badge]
![HashiCorp Packer Badge][HashiCorp Packer Badge]
![HashiCorp Terraform Badge][HashiCorp Terraform Badge]

[Jersey Webservice Template (JWT)][jersey-webservice-template] is a [JSR 370] web service **template** that lets us
spin up Java web service quickly through [Golden Paths] approach.

JWT seamlessly combines development and deployment of a Webservice API with

1. a business-oriented approach using [Convention Over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration), which resulted in a highly opinionated APIs for web & mobile
2. the latest
   [Immutable Infrastructure](https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure)
   DevOp practice that
   [fully automates the API deployment onto
   AWS](https://qubitpi.github.io/hashicorp-aws/)

At the end of the day, JWT helps organization to **improve the velocity and quality of their teams' work**

Spinning Up and Deploying Webservice on JCP
-------------------------------------------

Coming Soon!

Documentation
-------------

JWT supports 3 kinds of webservice templates:

- [A general scaffolding without any vertical-business logics](https://qubitpi.github.io/jersey-webservice-template/docs/intro)
- [A JPA webservice template backed by yahoo/elide](https://qubitpi.github.io/jersey-webservice-template/docs/category/jpa-through-yahooelide)
- An async jobstore webservice template similar to yahoo/fili's JobStore design (Developing...)

Comprehensive documentation is viewable on our [website][Documentation]

License
-------

The use and distribution terms for [jersey-webservice-template] are covered by the
[Apache License, Version 2.0][Apache License, Version 2.0].

<div align="center">
    <a href="https://opensource.org/licenses">
        <img align="center" width="50%" alt="License Illustration" src="https://github.com/QubitPi/QubitPi/blob/master/img/apache-2.png?raw=true">
    </a>
</div>

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0.html

[Documentation]: https://qubitpi.github.io/jersey-webservice-template/

[How to set up GitHub Action Secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets

[GitHub Actions Badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/jersey-webservice-template/ci-cd.yml?branch=master&logo=github&style=for-the-badge

[HashiCorp Packer Badge]: https://img.shields.io/badge/Packer-02A8EF?style=for-the-badge&logo=Packer&logoColor=white
[HashiCorp Terraform Badge]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[Javadoc]: https://qubitpi.github.io/jersey-webservice-template/apidocs/
[jersey-webservice-template]: https://qubitpi.github.io/jersey-webservice-template/
[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[The Technology Acceptance Model (TAM)]: https://open.ncl.ac.uk/theories/1/technology-acceptance-model/
