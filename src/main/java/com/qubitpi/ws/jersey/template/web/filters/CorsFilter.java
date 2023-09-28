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
package com.qubitpi.ws.jersey.template.web.filters;

import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;
import jakarta.ws.rs.container.PreMatching;
import jakarta.ws.rs.core.Response;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * {@link CorsFilter} is a Jersey
 * <a href="https://www.baeldung.com/jersey-filters-interceptors">pre-matching filter</a> handling CORS.
 * <p>
 * <ul>
 *     <li> If the request is a preflight request, the webservice registered with {@link CorsFilter} will simply bounce
 *          back the request with a 200 response with the following headers attached:
 *          <ul>
 *              <li> {@code "Access-Control-Allow-Headers": "CSRF-Token, X-Requested-By, Authorization, Content-Type"}
 *              <li> {@code "Access-Control-Allow-Credentials": "true"}
 *              <li> {@code "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH"}
 *              <li> {@code "Access-Control-Allow-Origin": "*"}
 *          </ul>
 *     <li> If the request is not preflight but cross-origin the {@code "Access-Control-Allow-Origin": "*"} header will
 *          be attached to the response
 *     <li> If the request is neither preflight nor corss-origin, the response will be send back unmodified
 * </ul>
 * For more information, see this <a href="https://stackoverflow.com/a/28067653">post</a>
 */
@Immutable
@ThreadSafe
@PreMatching
public class CorsFilter implements ContainerRequestFilter, ContainerResponseFilter {

    @Override
    public void filter(@NotNull final ContainerRequestContext request) {
        if (isPreflightRequest(request)) {
            request.abortWith(Response.ok().build());
        }
    }

    @Override
    public void filter(
            @NotNull final ContainerRequestContext request,
            @NotNull final ContainerResponseContext response
    ) {
        if (!isCrossOriginRequest(request)) {
            return;
        }

        if (isPreflightRequest(request)) {
            response.getHeaders().add(
                    "Access-Control-Allow-Headers",
                    "CSRF-Token, X-Requested-By, Authorization, Content-Type"
            );
            response.getHeaders().add("Access-Control-Allow-Credentials", "true");
            response.getHeaders().add(
                    "Access-Control-Allow-Methods",
                    "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH"
            );
        }

        response.getHeaders().add("Access-Control-Allow-Origin", "*");
    }

    /**
     * Returns whether or not a request is a cross-origin request.
     * <p>
     * A request is considered cross-origin if the request contains
     * <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">"Origin"</a> header
     *
     * @param request  a pre-checked HTTP request, cannot be {@code null}
     *
     * @return {@code true} if the request is a cross-origin request or {@code false}, otherwise
     */
    private static boolean isCrossOriginRequest(@NotNull final ContainerRequestContext request) {
        return request.getHeaderString("Origin") != null;
    }

    /**
     * Returns whether or not a request is a preflight request.
     * <p>
     * A request is considered preflight if
     * <ul>
     *     <li> the request contains
     *          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">"Origin"</a> header, and
     *     <li> the request method is "OPTIONS"
     * </ul>
     *
     * @param request  a pre-checked HTTP request, cannot be {@code null}
     *
     * @return {@code true} if the request is a preflight request or {@code false}, otherwise
     */
    private static boolean isPreflightRequest(@NotNull final ContainerRequestContext request) {
        return isCrossOriginRequest(request)
                && request.getMethod().equalsIgnoreCase("OPTIONS");
    }
}
