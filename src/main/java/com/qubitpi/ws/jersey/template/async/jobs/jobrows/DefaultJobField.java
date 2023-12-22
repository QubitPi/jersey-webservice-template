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
 * The default fields for job metadata.
 */
@Immutable
@ThreadSafe
public enum DefaultJobField implements JobField {

    JOB("A JSON object that describes the job."),
    STATUS("The current status of the job."),
    JOB_TICKET("The job's unique identifier."),
    DATE_CRATED("The date the job was created."),
    DATE_UPDATED("The date the job was last updated.");

    private final String serializeName;
    private final String description;

    /**
     * Constructor.
     *
     * @param description  A human-friendly description of the field.
     *
     * @throws NullPointerException if {@code description} is {@code null}
     */
    DefaultJobField(@NotNull final String description) {
        this.serializeName = camelCase(name());
        this.description = Objects.requireNonNull(description);
    }

    @Override
    public String getName() {
        return serializeName;
    }

    @Override
    public String getDescription() {
        return description;
    }

    /**
     * Returns a string representation of this {@link JobField} instance.
     * <p>
     * The string is the same as {@link #getName()}.
     *
     * @return {@link #getName()}
     */
    @NotNull
    @Override
    public String toString() {
        return getName();
    }

    /**
     * Converts the string value to a camel case string. e.g ENUM_CONST_VALUE {@literal ->} enumConstValue
     *
     * @param s  string
     *
     * @return enum string changed to camel case format
     */
    private static String camelCase(String s) {
        String[] words = s.toLowerCase(Locale.ENGLISH).split("_");
        StringBuilder lowerCamelCase = new StringBuilder(words[0]);

        for (int i = 1; i < words.length; i++) {
            lowerCamelCase.append((words[i].substring(0, 1)).toUpperCase(Locale.ENGLISH));
            lowerCamelCase.append(words[i].substring(1));
        }
        return lowerCamelCase.toString();
    }
}
