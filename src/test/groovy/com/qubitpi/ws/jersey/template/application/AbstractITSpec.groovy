/*
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.qubitpi.ws.jersey.template.application

import static com.yahoo.elide.test.graphql.GraphQLDSL.argument
import static com.yahoo.elide.test.graphql.GraphQLDSL.arguments
import static com.yahoo.elide.test.graphql.GraphQLDSL.document
import static com.yahoo.elide.test.graphql.GraphQLDSL.field
import static com.yahoo.elide.test.graphql.GraphQLDSL.mutation
import static com.yahoo.elide.test.graphql.GraphQLDSL.query
import static com.yahoo.elide.test.graphql.GraphQLDSL.selection
import static com.yahoo.elide.test.graphql.GraphQLDSL.selections
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attr
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.attributes
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.data
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.datum
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.id
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.resource
import static com.yahoo.elide.test.jsonapi.JsonApiDSL.type
import static org.hamcrest.Matchers.equalTo

import com.yahoo.elide.jsonapi.JsonApi

import com.qubitpi.ws.jersey.template.models.Book

import org.apache.http.HttpStatus

import io.restassured.RestAssured
import io.restassured.response.Response
import spock.lang.Specification

abstract class AbstractITSpec extends Specification {

    static final int WS_PORT = 8080

    def childSetupSpec() {
        // intentionally left blank
    }

    def childCleanupSpec() {
        // intentionally left blank
    }

    def setupSpec() {
        RestAssured.baseURI = "http://localhost"
        RestAssured.port = WS_PORT
        RestAssured.basePath = "/v1/data/"

        childSetupSpec()
    }

    def cleanupSpec() {
        RestAssured.reset()

        childCleanupSpec()
    }

    def "JSON API allows for POSTing, GETing, PATCHing, and DELETing a book"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(data().toJSON()))

        when: "an entity is POSTed via JSON API"
        Response response = RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        data(
                                resource(
                                        type("book") ,
                                        attributes(
                                                attr("title", "Pride & Prejudice")
                                        )
                                )
                        )
                )
                .when()
                .post("book")

        then: "a new record is inserted into the database"
        final String bookId = response.jsonPath().get("data.id")
        response
                .then()
                .statusCode(HttpStatus.SC_CREATED)
                .body(equalTo(
                        datum(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride & Prejudice")
                                        )
                                )
                        ).toJSON()
                ))

        then: "we can GET that entity next"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(
                        data(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride & Prejudice")
                                        )
                                )
                        ).toJSON()
                ))

        when: "we update that entity"
        RestAssured
                .given()
                .contentType(JsonApi.MEDIA_TYPE)
                .accept(JsonApi.MEDIA_TYPE)
                .body(
                        datum(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride and Prejudice")
                                        )
                                )
                        )
                )
                .when()
                .patch("book/${bookId}")
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT)

        then: "we can GET that entity with updated attribute"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(
                        data(
                                resource(
                                        type("book"),
                                        id(bookId),
                                        attributes(
                                                attr("title", "Pride and Prejudice")
                                        )
                                )
                        ).toJSON()
                ))

        when: "the entity is deleted"
        RestAssured
                .given()
                .when()
                .delete("book/${bookId}")
                .then()
                .statusCode(HttpStatus.SC_NO_CONTENT)

        then: "that entity is not found in database anymore"
        RestAssured
                .given()
                .when()
                .get("book")
                .then()
                .statusCode(200)
                .body(equalTo(data().toJSON()))
    }

    def "GraphQL API allows for POSTing, GETing, PATCHing, and DELETing a book"() {
        expect: "database is initially empty"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                query(
                                        selections(
                                                field(
                                                        "book",
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                ),
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo("""{"data":{"book":{"edges":[]}}}"""))

        when: "an entity is POSTed via GraphQL API"
        Response response = RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "UPSERT"),
                                                                argument("data", new Book(title: "Pride & Prejudice"))
                                                        ),
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when()
                .post()

        then: "a new record is inserted into the database"
        final String bookId = response.jsonPath().get("data.book.edges[0].node.id")
        response
                .then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Pride & Prejudice")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        then: "we can retrieve that entity next"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                query(
                                        selections(
                                                field(
                                                        "book",
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                ),
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Pride & Prejudice")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        when: "we update that entity"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "UPSERT"),
                                                                argument("data", new Book(id: Long.valueOf(bookId), title: "Pride and Prejudice"))
                                                        ),
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Pride and Prejudice")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        then: "we can retrieve that entity with updated attribute"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                query(
                                        selections(
                                                field(
                                                        "book",
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                ),
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo(
                        document(
                                selection(
                                        field(
                                                "book",
                                                selections(
                                                        field("id", bookId),
                                                        field("title", "Pride and Prejudice")
                                                )
                                        )
                                )
                        ).toResponse()
                ))

        when: "the entity is deleted"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                mutation(
                                        selection(
                                                field(
                                                        "book",
                                                        arguments(
                                                                argument("op", "DELETE"),
                                                                argument("ids", [bookId])
                                                        ),
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                )
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)

        then: "that entity is not found in database anymore"
        RestAssured
                .given()
                .contentType("application/json")
                .accept("application/json")
                .body(
                        query: document(
                                query(
                                        selections(
                                                field(
                                                        "book",
                                                        selections(
                                                                field("id"),
                                                                field("title")
                                                        )
                                                ),
                                        )
                                )
                        ).toQuery()
                )
                .when().post().then()
                .statusCode(200)
                .body(equalTo("""{"data":{"book":{"edges":[]}}}"""))
    }
}
