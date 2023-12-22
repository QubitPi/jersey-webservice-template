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
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.util.Locale;
import java.util.Objects;

/**
 * Provides an enumeration of the standard job statuses that JWT supports.
 */
@Immutable
@ThreadSafe
public enum DefaultJobStatus implements JobStatus {

    PENDING("The job is in progress"),
    SUCCESS("The job has completed successfully"),
    CANCELED("The job has been canceled before it could be completed"),
    FAILURE("An error occurred and the job failed to complete");

    private final String description;
    private final String name;

    /**
     * Constructor.
     *
     * @param description  Description for the job status
     *
     * @throws NullPointerException if {@code description} is {@code null}
     */
    DefaultJobStatus(@NotNull final String description) {
        this.description = Objects.requireNonNull(description);
        this.name = name().toLowerCase(Locale.ENGLISH);
    }


    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
