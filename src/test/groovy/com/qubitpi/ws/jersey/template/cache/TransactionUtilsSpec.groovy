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
package com.qubitpi.ws.jersey.template.cache

import spock.lang.Specification

import java.util.concurrent.locks.Lock
import java.util.concurrent.locks.ReadWriteLock
import java.util.function.Consumer
import java.util.function.Supplier

class TransactionUtilsSpec extends Specification {

    Supplier<Boolean> action
    Consumer<ReadWriteLock> locker
    Consumer<ReadWriteLock> unlocker
    ReadWriteLock lock
    Lock innerLock

    def setup() {
        action = Mock(Supplier)
        locker = Mock(Consumer)
        unlocker = Mock(Consumer)
        lock = Mock(ReadWriteLock)
        innerLock = Mock(Lock)
    }

    @SuppressWarnings(["GroovyAccessibility", "GroovyResultOfObjectAllocationIgnored"])
    def "Class is non-instantiable"() {
        when: "instantiating this util class"
        new TransactionUtils()

        then: "instantiation is not allowed"
        thrown(AssertionError)
    }

    def "withReadLock() locks, performs the action, and unlocks"() {
        given:
        2 * lock.readLock() >> innerLock
        1 * innerLock.lock()
        1 * innerLock.unlock()
        1 * action.get() >> true

        expect:
        TransactionUtils.withReadLock(lock, action)
    }

    def "withReadLock() locks by definition, performs the action, and unlocks"() {
        given:
        1 * lock.readLock() >> innerLock
        1 * action.get() >> true
        1 * locker.accept(lock)
        1 * innerLock.unlock()

        expect:
        TransactionUtils.withReadLock(lock, locker, action)
    }

    def "withWriteLock() locks, performs the action, and unlocks"() {
        given:
        2 * lock.writeLock() >> innerLock
        1 * innerLock.lock()
        1 * innerLock.unlock()
        1 * action.get() >> true

        expect:
        TransactionUtils.withWriteLock(lock, action)
    }

    def "withWriteLock() locks by definition, performs the action, and unlocks"() {
        given:
        1 * lock.writeLock() >> innerLock
        1 * action.get() >> true
        1 * locker.accept(lock)
        1 * innerLock.unlock()

        expect:
        TransactionUtils.withWriteLock(lock, locker, action)
    }

    def "withLock() locks, performs the action, and unlocks"() {
        given:
        1 * locker.accept(lock)
        1 * unlocker.accept(lock)
        1 * action.get() >> true

        expect:
        TransactionUtils.withLock(lock, locker, unlocker, action)
    }

    def "withLock() propagates runtime error"() {
        given:
        1 * locker.accept(lock)
        1 * unlocker.accept(lock)
        1 * action.get() >> {throw new IllegalStateException()}

        when:
        TransactionUtils.withLock(lock, locker, unlocker, action)

        then:
        thrown(IllegalStateException)
    }
}
