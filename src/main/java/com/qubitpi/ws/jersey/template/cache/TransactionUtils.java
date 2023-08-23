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
package com.qubitpi.ws.jersey.template.cache;

import org.bitbucket.jack20191124.annotation.NotNull;

import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

import java.util.Objects;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.function.Consumer;
import java.util.function.Supplier;

/**
 * Utilities to provide consistent warppers for read and write locking behavior.
 */
@Immutable
@ThreadSafe
public final class TransactionUtils {

    /**
     * Suppress default constructor for noninstantiability.
     */
    private TransactionUtils() {
        throw new AssertionError();
    }

    /**
     * Secures a lock, performs an action, returns any return value, and finally unlocks the lock.
     *
     * @param lock  The lock used to secure the transaction
     * @param action  The action to be performed
     * @param <T>  The type of the return value for the supplier
     *
     * @return the return value of the supplier
     *
     * @throws NullPointerException if any argument is {@code null}
     */
    public static <T> T withReadLock(
            @NotNull final ReadWriteLock lock,
            @NotNull final Supplier<T> action
    ) {
        return withLock(lock, (lockParam) -> lock.readLock().lock(), (lockParam) -> lock.readLock().unlock(), action);
    }

    /**
     * Secures a lock, performs an action, returns any return value, and finally unlocks the lock.
     *
     * @param lock  The lock used to secure the transaction
     * @param locker  The consumer used to secure the read lock
     * @param action  The action to be performed
     * @param <T>  The type of the return value for the supplier
     *
     * @return the return value of the supplier
     *
     * @throws NullPointerException if any argument is {@code null}
     */
    public static <T> T withReadLock(
            @NotNull final ReadWriteLock lock,
            @NotNull final Consumer<ReadWriteLock> locker,
            @NotNull final Supplier<T> action
    ) {
        return withLock(lock, locker, (lockParam) -> lock.readLock().unlock(), action);
    }

    /**
     * Secures a write lock, performs an action, returns any return value, and finally unlocks the lock.
     *
     * @param lock  The lock used to secure the transaction
     * @param action  The action to be performed.
     * @param <T>  The type of the return value for the supplier
     *
     * @return the return value of the supplier
     *
     * @throws NullPointerException if any argument is {@code null}
     */
    public static <T> T withWriteLock(
            @NotNull final ReadWriteLock lock,
            @NotNull final Supplier<T> action
    ) {
        return withLock(lock, (lockParam) -> lock.writeLock().lock(), (lockParam) -> lock.writeLock().unlock(), action);
    }

    /**
     * Secures a write lock, performs an action, returns any return value, and finally unlocks the lock.
     *
     * @param lock  The lock used to secure the transaction
     * @param locker  A consumer used to secure the write lock
     * @param action  The action to be performed.
     * @param <T>  The type of the return value for the supplier
     *
     * @return the return value of the supplier
     *
     * @throws NullPointerException if any argument is {@code null}
     */
    public static <T> T withWriteLock(
            @NotNull final ReadWriteLock lock,
            @NotNull final Consumer<ReadWriteLock> locker,
            @NotNull final Supplier<T> action
    ) {
        return withLock(lock, locker, (lockParam) -> lock.writeLock().unlock(), action);
    }

    /**
     * Secures a lock, performs an action, returning any return value and finally unlocks the lock.
     *
     * @param lock  The lock used to secure the transaction
     * @param locker  A consumer used to secure the lock
     * @param unlocker  A consumer used to unlock the lock
     * @param action  The action to be performed
     *
     * @param <T>  The type of return value from the {@code action}
     *
     * @return the result of the {@code action}
     *
     * @throws NullPointerException if any argument is {@code null}
     */
    public static <T> T withLock(
            @NotNull final ReadWriteLock lock,
            @NotNull final Consumer<ReadWriteLock> locker,
            @NotNull final Consumer<ReadWriteLock> unlocker,
            @NotNull final Supplier<T> action
    ) {
        Objects.requireNonNull(lock, "lock");
        Objects.requireNonNull(locker, "locker");
        Objects.requireNonNull(unlocker, "unlocker");
        Objects.requireNonNull(action, "action");

        locker.accept(lock);
        try {
            return performAction(action);
        } finally {
            unlocker.accept(lock);
        }
    }

    /**
     * Performs a functionally defined action.
     *
     * @param action  The action function, assumed to be non-nul
     *
     * @param <T>  The type of return value from the {@code action}
     *
     * @return the result of the {@code action}
     */
    private static <T> T performAction(@NotNull final Supplier<T> action) {
        return action.get();
    }
}
