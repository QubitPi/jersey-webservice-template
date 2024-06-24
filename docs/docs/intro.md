---
sidebar_position: 1
title: Introduction
---

The Tao of Jersey Webservice Template
-------------------------------------

### Workflows, Not Technologies

Our approach is to focus on the end goal and workflow, rather than the underlying technologies. Software and hardware
will evolve and improve, and it is our goal to make adoption of new tooling simple, while still providing the most
streamlined user experience possible. Product design starts with an envisioned workflow to achieve a set goal. We then
identify existing tools that simplify the workflow. If a sufficient tool does not exist, we step in to build it. This
leads to a fundamentally technology-agnostic view - we will use the best technology available to solve the problem. As
technologies evolve and better tooling emerges, the ideal workflow is just updated to leverage those technologies.
Technologies change, end goals stay the same.

### Immutable Infrastructure

#### Immutability

Immutability is the inability to be changed. This is a concept that can apply at many levels. The most familiar
implementation of immutability is version control systems; once code is committed, that commit is forever fixed. Version
control systems, such as git, enjoy widespread use because they offer tremendous benefits. Code becomes versionable,
allowing rollback and roll forwards. You can inspect and write code atomically. Using versions enables auditing and
creates a clear history of how the current state was reached. When something breaks, the origin of the error can be
determined using the version history.

The concept of immutability can be extended to many aspects of infrastructure — application source, application versions,
and server state. We believe that using immutable infrastructure leads to more robust systems that are simpler to
operate, debug, version and visualize.

### Binding to Standard Makes the Best Software

Web services technology are now widespread, standardizing organizational approaches to the cloud. But as business
expand, web service often struggle to reach the desired levels of scale. Development slows as complexity grows.

By codifying and standardizing a webservice development and compliance rules, developers can be free to do what they
want to: add business value by writing code.

JWT applies the [Pareto Principle] to webservice design. Use case analysis shows that the vast majority of web
service component need just a handful of inputs to meet most customer requirements. Focusing on this "easy 80%" of use
cases results in neat, concise web service that are simple to understand and use. It also causes web service to become
more opinionated, which guides developers into a standard pattern, bringing consistency around how software is used in
the organization.

Gradually, more than just code can be shared. Best practices start to emerge. [Golden paths] are created.

[The Technology Acceptance Model (TAM)] suggests that adoption is predicted on how much people see something as _being
useful_ and _easy to use_. Standardization and golden paths address both these factors and make adoption of an open
source project more likely. JWT does more to make itself easy to use by enabling "on-click" experience that goes from
nothing to a full-fledged webservice on AWS cloud

[Golden Paths]: https://www.hashicorp.com/blog/maturing-your-terraform-workflow#golden-paths

[Pareto Principle]: https://en.wikipedia.org/wiki/Pareto_principle
