FastWS
======

![Java Version Badge][Java Version Badge]
[![GitHub Workflow Status][GitHub Workflow Status]](https://github.com/QubitPi/fast-ws/actions/workflows/ci-cd.yml)
[![Apache License Badge]][Apache License, Version 2.0]

__FastWS__ is a [JSR 370] webservice template that lets us spin up Java webservice quickly through [GitHub templates].
One can think of FastWS as the Jersey/Jetty version of [Spring Initializr]. At the end of the day, FastWS helps
organization to improve the velocity and quality of their teams' work

✨ Features
-----------

- Out-of-the-box healthcheck endpoint
- Docusaurus-based documentation site freely hosted on GitHub Pages
- Dockerized webservice
- ELK application monitoring
- Flexible webservice configuration

🚀 Quick Start
--------------

Please make sure Docker is installed
([_Installing Docker_](https://docker.qubitpi.org/desktop/setup/install/mac-install/)), then execute this on-click
commands:

```console
docker run --name=fast-ws -it -p 8080:8080 jack20191124/fast-ws
```

That's it. A healthcheck endpoint can be pinned with

```console
curl -v localhost:8080/v1/data/healthcheck
```

which would gave

```console
$ curl -v localhost:8080/v1/data/healthcheck
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /v1/data/healthcheck HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.85.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Length: 0
< Server: Jetty(11.0.15)
<
* Connection #0 to host localhost left intact
```

Developer can now start adding business values without repeating the time-consuming scaffolding works. To proceed from
here, including getting and developing the webservice source code, please refer to the [documentation][Documentation]
for details.

License
-------

The use and distribution terms for [fast-ws]() are covered by the [Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0

[Documentation]: https://fastws.qubitpi.org/

[GitHub templates]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository#about-template-repositories
[GitHub Workflow Status]: https://img.shields.io/github/actions/workflow/status/QubitPi/fast-ws/ci-cd.yml?branch=master&logo=github&style=for-the-badge

[Java Version Badge]: https://img.shields.io/badge/Java-17-brightgreen?style=for-the-badge&logo=OpenJDK&logoColor=white
[fast-ws]: https://fastws.qubitpi.org/
[JSR 370]: https://jcp.org/en/jsr/detail?id=370

[Spring Initializr]: https://start.spring.io/
