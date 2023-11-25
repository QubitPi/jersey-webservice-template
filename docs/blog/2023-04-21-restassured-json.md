---
slug: restassured-json
title: (RestAssured) Match JSON Ignoring Order
authors: jiaqi
tags: [Java, Testing]
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

Use RestAssured's JsonPath to parse the JSON file into a Map and then compare it with Hamcrest Matchers. This way the
order didn't matter.

```java
import static org.hamcrest.Matchers.equalTo;
import io.restassured.path.json.JsonPath;

...

JsonPath expectedJson = new JsonPath(new File("/path/to/expected.json"));

given()
    ...
    .then()
    .body("", equalTo(expectedJson.getMap("")));
```
