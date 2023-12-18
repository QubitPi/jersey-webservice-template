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

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.swing.*;

/**
 * A row in the conceptual table defined by the {@link com.qubitpi.ws.jersey.template.async.jobs.stores.ApiJobStore},
 * containing the metadata about a particular job.
 */
@Immutable
@ThreadSafe
public class JobRow {

    private static final Logger LOG = LoggerFactory.getLogger(JobRow.class);

    private final String jobId;
    private final Map<JobField, String> columns;

    /**
     * Builds a row of job metadata.
     *
     * @param jobIdFieldName  The field used as a key into the row
     * @param columns  A mapping from job fields to job metadata values, must contain the {@code jobIdFieldName} as a
     * key
     *
     * @throws NullPointerException if {@code jobIdFieldName} and/or {@code columns} is {@code null}
     * @throws IllegalStateException if {@code columns} does not contain the {@code jobIdFieldName} as a map key
     */
    public JobRow(@NotNull final JobField jobIdFieldName, @NotNull final Map<JobField, String> columns) {
        if (!Objects.requireNonNull(columns).containsKey(Objects.requireNonNull(jobIdFieldName))) {
            LOG.error(String.format("Missing ID key (%s) for job row %s", jobIdFieldName, columns));
            throw new IllegalStateException("WS experienced an internal error. Sorry");
        }

        this.jobId = Objects.requireNonNull(columns.get(jobIdFieldName));
        this.columns = columns.entrySet().stream()
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }

    @NotNull
    @JsonIgnore
    public String getJobId() {
        return jobId;
    }

    /**
     * Coerces the {@link JobRow} into a mapping from {@link JobField#getName() JobField name} to their values.
     *
     * @return a mapping from the name of each column to its associated col. value
     */
    @NotNull
    public Map<String, String> getRowMap() {
        return getColumns()
                .entrySet()
                .stream()
                .collect(
                        Collectors.toMap(
                                entry -> entry.getKey().getName(),
                                Map.Entry::getValue
                        )
                );
    }

    @JsonIgnore
    private Map<JobField, String> getColumns() {
        return columns;
    }

    @Override
    public boolean equals(final Object other) {
        if (this == other) {
            return true;
        }

        if (other == null || getClass() != other.getClass()) {
            return false;
        }

        final JobRow that = (JobRow) other;
        return Objects.equals(this.getJobId(), that.getJobId()) &&
                Objects.equals(this.getColumns(), that.getColumns());
    }

    /**
     * The hashi code of a job row is simply the hash code of its ID.
     *
     * @return the hash code of the job row
     */
    @Override
    public int hashCode() {
        return Objects.hash(getJobId());
    }

    @Override
    public String toString() {
        return "JobRow{" +
                "jobId='" + jobId + '\'' +
                ", columns=" + columns +
                '}';
    }
}
