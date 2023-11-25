---
slug: restassured-json
title: (RestAssured) Match JSON Ignoring Order
authors: jiaqi
tags: [Java, Testing]
---

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
