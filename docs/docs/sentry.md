---
sidebar_position: 6
title: Setting Up Sentry.io
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

Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually
matters, solve quicker, and learn continuously about their applications.

<p align="center">
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/projects.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/issue-details.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/transaction-summary.png" width="270" />
  <img src="https://github.com/getsentry/sentry/raw/master/.github/screenshots/releases.png" width="270" />
</p>

:::note

The logging framework has to be <b>Logback</b>, which is the logging library used in
[jersey-webservice-template][jersey-webservice-template]

![Error loading setup-sentry-1.png](img/setup-sentry-1.png)
![Error loading setup-sentry-2.png](img/setup-sentry-2.png)
![Error loading setup-sentry-3.png](img/setup-sentry-3.png)

:::

### Hiding [Sentry DSN](https://docs.sentry.io/platforms/java/guides/logback/#dsn-configuration)

It is recommended to simply define **SENTRY_DSN** environment variable via CI/CD so that Sentry SDK can pick it up
automatically

[jersey-webservice-template]: https://github.com/QubitPi/jersey-webservice-template
