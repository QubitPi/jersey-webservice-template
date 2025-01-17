---
sidebar_position: 1
title: Introduction
---

Getting Started
===============

:::caution

Before proceeding, it is important to note that __we DO NOT support Spring/Spring Boot paradigm__.
[Jersey Webservice Template] runs as a **[JAX-RS]** webservice backed by its reference implementation [Jersey] running
as a WAR inside [Jetty] container.

More info about difference between JAX-RS and Spring can be found in [this thread](https://stackoverflow.com/a/42955575)

:::

To use JWT as the basis for a webservice, we start by creating a repository using the template on GitHub.

Creating a Repository from GitHub Template
------------------------------------------

We can click on this link to generate a repository using the template: [Create a new repository](https://github.com/QubitPi/jersey-webservice-template/generate) from QubitPi/jersey-webservice-template. Alternatively, we can visit
the [jersey-webservice-template repository on GitHub](https://github.com/QubitPi/jersey-webservice-template) and click
on the "Use this template" button on the top-right.

In both cases, the next steps are:

1. Enter a name for the new repository.
2. Uncheck "Include all branches".
3. Click on "Create repository from template".

For more details on how to create repositories using template, read the article on the GitHub website:
[Creating a repository from a template](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

:::caution

If the repository is public, GitHub offers unlimited free build minutes. If it's a private repository, however,
[billing policy](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes)
applies

:::

After Creating the Repository
-----------------------------

At this point, JWT has generated a Java webservice project with just what we need to start quickly. Developer can now
start adding business value and __get work done much faster in a standard way__. The following sections of this
documentation contain further details on how to proceed next.

- [Development](development)
- [Configuration](configuration)

[JAX-RS]: https://jcp.org/en/jsr/detail?id=370
[Jersey Webservice Template]: https://qubitpi.github.io/jersey-webservice-template/
[Jetty]: https://en.wikipedia.org/wiki/Jetty_(web_server)
