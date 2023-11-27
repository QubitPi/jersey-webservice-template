---
slug: put-vs-post
title: PUT v.s. POST
authors: jiaqi
tags: [Webservice]
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

We should choose between PUT and POST based on [idempotence](http://en.wikipedia.org/wiki/Idempotent) of the action.

<!--truncate-->

**PUT** implies putting a resource - completely replacing whatever is available at the given URL with a different thing.
By definition, a PUT is idempotent. Do it as many times as you like, and the result is the same. `x=5` is idempotent.
You can PUT a resource whether it previously exists, or not (eg, to Create, or to Update)!

**POST updates a resource, adds a subsidiary resource, or causes a change. A POST is not idempotent, in the way that
`x++` is not idempotent.

By this argument, PUT is for creating when you know the URL of the thing you will create. POST can be used to create
when you know the URL of the "factory" or manager for the category of things you want to create.

so:

```bash
POST /expense-report
```

or:

```bash
PUT /expense-report/10929
```
