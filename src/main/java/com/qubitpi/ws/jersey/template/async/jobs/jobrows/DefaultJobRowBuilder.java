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
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.Clock;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * A {@link JobRowBuilder} that populates a {@link JobRow} with the information for all the job fields defined in
 * {@link DefaultJobField}.
 */
@Immutable
@ThreadSafe
public class DefaultJobRowBuilder implements JobRowBuilder {

    private final Clock timestampGenerator;
    private final Function<Map<JobField, String>, String> idGenerator;

    /**
     * Builds a factory for generating {@link JobRow} with a custom function for generating a job row ID and a specified
     * clock to generate timestamps.
     *
     * @param timestampGenerator  The clock to use to generate timestamps for {@link DefaultJobField#DATE_CRATED} and
     * {@link DefaultJobField#DATE_UPDATED}
     * @param idGenerator  The specified function for generating the job row ID
     *
     * @throws NullPointerException if {@code timestampGenerator} or {@code idGenerator} is {@code null}
     */
    public DefaultJobRowBuilder(
            @NotNull final Clock timestampGenerator,
            @NotNull final Function<Map<JobField, String>, String> idGenerator
    ) {
        this.timestampGenerator = Objects.requireNonNull(timestampGenerator);
        this.idGenerator = Objects.requireNonNull(idGenerator);
    }

    /**
     * Builds a factory for generating {@link JobRow} containing values for every {@link DefaultJobField}.
     * <p>
     * The {@link DefaultJobField#DATE_CRATED} and {@link DefaultJobField#DATE_UPDATED} fields are generated from System
     * clock, and the {@link DefaultJobField#JOB_TICKET} from {@link UUID#randomUUID()}.
     */
    public DefaultJobRowBuilder() {
        this(
                Clock.systemDefaultZone(),
                jobMetadata -> UUID.randomUUID().toString()
        );
    }

    @Override
    public JobRow buildJobRow(final UriInfo request, final ContainerRequestContext requestContext) {
        Map<JobField, String> jobMetadata = new LinkedHashMap<>(DefaultJobField.values().length);

        jobMetadata.put(
                DefaultJobField.JOB,
                new BufferedReader(
                        new InputStreamReader(requestContext.getEntityStream()))
                                .lines()
                                .collect(Collectors.joining("\n"))
        );
        jobMetadata.put(DefaultJobField.STATUS, DefaultJobStatus.PENDING.getName());

        String isoDateCreated = LocalDateTime.ofEpochSecond(
                getTimestampGenerator().instant().toEpochMilli(), 0,
                ZoneOffset.UTC
        ).toString();
        jobMetadata.put(DefaultJobField.DATE_CRATED, isoDateCreated);
        jobMetadata.put(DefaultJobField.DATE_UPDATED, isoDateCreated);
        jobMetadata.put(DefaultJobField.JOB_TICKET, getIdGenerator().apply(jobMetadata));

        return new JobRow(DefaultJobField.JOB_TICKET, jobMetadata);
    }

    @NotNull
    private Clock getTimestampGenerator() {
        return timestampGenerator;
    }

    @NotNull
    private Function<Map<JobField, String>, String> getIdGenerator() {
        return idGenerator;
    }
}
