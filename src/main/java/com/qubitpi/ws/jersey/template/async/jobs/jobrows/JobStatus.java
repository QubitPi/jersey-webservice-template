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

/**
 * A job status describes the current state of the job (e.g. 'pending', 'success', or 'failure')
 */
public interface JobStatus {

    /**
     * Returns a human-friendly name of the status.
     *
     * @return the name of the status
     */
    @NotNull
    String getName();

    /**
     * Returns a human-friendly description of the status.
     *
     * @return a description of the status
     */
    @NotNull
    String getDescription();
}
