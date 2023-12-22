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
package com.qubitpi.ws.jersey.template.async.jobs.stores;

import com.qubitpi.ws.jersey.template.async.jobs.jobrows.JobRow;

import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.functions.Consumer;

/**
 * An {@link ApiJobStore} is responsible for storing the metadata about an async job.
 * <p>
 * Conceptually, it is a table where each row is the metadata of a particular async job and the columns are the metadata
 * stored with each job (such metadata may include date created, a link to results, etc). The table uses the job's ID as
 * the primary key.
 */
public interface ApiJobStore {

    /**
     * Returns a cold {@link Observable} that emits 0 or 1 messages: the desired {@link JobRow}, or nothing if there is
     * no {@link JobRow} with the specified ID.
     * <p>
     * If an error is encountered, then one of {@code onError} methods is called with the exception as payload.
     *
     * @param id  The ID of the job desired
     *
     * @return An {@link Observable} that emits the metadata of the job with the specified ID, if such a job exists
     */
    Observable<JobRow> get(String id);

    /**
     * Returns a cold {@link Observable} that emits the {@link JobRow} that has been stored.
     * <p>
     * The message is not emitted until the metadata has been successfully stored.
     * <p>
     * While the {@link Observable} should not emit a message until at least one subscriber has subscribed, it should
     * store the results immediately, without waiting for a subscriber.
     * <p>
     * If a row with the same ID already exists, then that row will be overwritten. Otherwise, a new ID-{@link JobRow}
     * mapping is added to the store. If an error is encountered while storing the data, the {@link Observable} instead
     * invokes the {@code onError} methods on its subscribers with an Exception.
     *
     * @param metadata  The job metadata that needs to be store
     *
     * @return and {@link Observable} that emits a stream of all the {@link JobRow}s in the store
     */
    Observable<JobRow> save(JobRow metadata);
}
