/*
 * Copyright 2025 Jiaqi Liu. All rights reserved.
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
package com.qubitpi.fastws.web.filters

import jakarta.ws.rs.container.ContainerRequestContext
import jakarta.ws.rs.container.ContainerResponseContext
import jakarta.ws.rs.core.MultivaluedHashMap
import jakarta.ws.rs.core.MultivaluedMap
import jakarta.ws.rs.core.Response
import spock.lang.Specification

class CorsFilterSpec extends Specification {

    def "When a request #beingPreflight preflight, request #beingAborted aborted"() {
        setup: "a request is being configure for being preflight or not"
        ContainerRequestContext request = Mock(ContainerRequestContext)

        if (isPreflight) {
            request.getHeaderString("Origin") >> "some origin"
            request.getMethod() >> "OPTIONS"
        } else {
            request.getHeaderString("Origin") >> null
            request.getMethod() >> "POST"
        }

        when: "the request is pre-matched by CORS filter"
        new CorsFilter().filter(request)

        then: "preflight request is bounced back and non-preflight request is accepted"
        (isPreflight ? 1 : 0) * request.abortWith(_ as Response)

        where:
        _ | isPreflight
        _ | true
        _ | false

        beingPreflight = isPreflight ? "is" : "is not"
        beingAborted = isPreflight ? "is" : "is not"
    }

    def "When a request #beingCrossOrigin cross-origin and #beingPreflight preflight, response headers are #expectedResponseHeaders"() {
        setup: "a request is being configure for being cross-origin/preflight or not"
        ContainerRequestContext request = Mock(ContainerRequestContext)
        ContainerResponseContext response = Mock(ContainerResponseContext)

        if (isCrossOrigin) {
            request.getHeaderString("Origin") >>> ["some origin"]
        } else {
            request.getHeaderString("Origin") >>> [null]
        }

        if (isPreflight) {
            request.getHeaderString("Origin") >>> ["some origin"]
            request.getMethod() >> "OPTIONS"
        } else {
            request.getHeaderString("Origin") >>> [null]
            request.getMethod() >> "POST"
        }

        MultivaluedMap headers = new MultivaluedHashMap()
        response.getHeaders() >>> [headers, headers, headers, headers]

        when: "a response is being processed by CORS filter"
        new CorsFilter().filter(request, response)

        then: "the response header gets populated based on cross-origin/preflight nature of the configured request"
        response.getHeaders() == expectedResponseHeaders

        where:
        isCrossOrigin | isPreflight || expectedResponseHeaders
        false         | false       || [:]
        false         | true        || [:]
        true          | false       || accessControlAllowOrigin()
        true          | true        || accessControlAllowHeaders() << accessControlAllowCredentials() << accessControlAllowMethods() << accessControlAllowOrigin()

        beingCrossOrigin = isCrossOrigin ? "is" : "is not"
        beingPreflight = isPreflight ? "is" : "is not"
    }

    @SuppressWarnings('GroovyAccessibility')
    def "When a request #contains 'Origin' header, it #is a cross origin request"() {
        given:
        ContainerRequestContext request = Mock(ContainerRequestContext)

        if (isCorssOrigin) {
            request.getHeaderString("Origin") >> "some origin"
        } else {
            request.getHeaderString("Origin") >> null
        }

        expect:
        CorsFilter.isCrossOriginRequest(request) == isCorssOrigin

        where:
        _ || isCorssOrigin
        _ || true
        _ || false

        contains = isCorssOrigin ? "contains" : "does not contain"
        is = isCorssOrigin ? "is" : "is not"
    }

    @SuppressWarnings('GroovyAccessibility')
    def "When a request #containsOrigin 'Origin' header and method #isOptions 'OPTIONS', it #is a preflight request"() {
        given:
        ContainerRequestContext request = Mock(ContainerRequestContext)

        if (isCorssOrigin) {
            request.getHeaderString("Origin") >> "some origin"
        } else {
            request.getHeaderString("Origin") >> null
        }

        if (methodIsOptions) {
            request.getMethod() >> "OPTIONS"
        } else {
            request.getMethod() >> "POST"
        }

        expect:
        CorsFilter.isPreflightRequest(request) == isPreflight

        where:
        isCorssOrigin | methodIsOptions || isPreflight
        false         | false           || false
        false         | true            || false
        true          | false           || false
        true          | true            || true

        containsOrigin = isCorssOrigin ? "contains" : "does not contain"
        isOptions = isCorssOrigin ? "is" : "is not"
        is = isPreflight ? "is" : "is not"
    }

    static def accessControlAllowHeaders() {
        ["Access-Control-Allow-Headers": ["CSRF-Token, X-Requested-By, Authorization, Content-Type"]]
    }

    static def accessControlAllowCredentials() {
        ["Access-Control-Allow-Credentials": ["true"]]
    }

    static def accessControlAllowMethods() {
        ["Access-Control-Allow-Methods": ["GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH"]]
    }

    static def accessControlAllowOrigin() {
        ["Access-Control-Allow-Origin": ["*"]]
    }
}
