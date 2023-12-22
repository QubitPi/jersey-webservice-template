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
package com.qubitpi.ws.jersey.template.async.jobs.jobrows;

import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.core.UriInfo;

/**
 * Interface for building {@link JobRow} from JWT request.
 * <p>
 * {@link JobRowBuilder} provides an abstraction layer that separates {@link JobRow} to an outside WS request.
 */
@FunctionalInterface
public interface JobRowBuilder {

    /**
     * Builds a bean holding the metadata about an asynchronous job.
     *
     * @param request  The request that is triggering this job
     * @param requestContext  The context of the request triggering this job
     *
     * @return a bean containing the metadata about this job
     *
     * @throws NullPointerException if {@code request} or {@code requestContext} is {@code null}
     */
    @NotNull
    JobRow buildJobRow(@NotNull UriInfo request, @NotNull ContainerRequestContext requestContext);
}
