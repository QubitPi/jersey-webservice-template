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

import spock.lang.Ignore
import spock.lang.Specification

import java.nio.file.Files
import java.nio.file.Paths

@Ignore
class FileUtilsSpec extends Specification {

    private static final TEMP_DIR = "target/tmp/util/"

    def cleanup() {
        Files.deleteIfExists(Paths.get(TEMP_DIR))
    }

    def "File path without parent dir generates the parent"() {
        given: "a file path without a parent directory"
        String path = TEMP_DIR + "data.txt"

        // make sure parent directory does not exist yet
        assert ! new File(TEMP_DIR).exists()

        when: "create a parent for the path"
        FileUtils.createParentDirectories(path)

        then: "the parent now exists"
        new File(TEMP_DIR).exists()
    }

    def "All files & dirs under a directory, including the directory itself, are deleted"() {
        setup: "create the parent directory"
        Files.createDirectory(Paths.get(TEMP_DIR))

        and: "initialize directory contents"
        String file1 = TEMP_DIR + "data1.txt"
        String file2 = TEMP_DIR + "data2.txt"
        String subDir = TEMP_DIR + "subDir/"
        String subFile = TEMP_DIR + "subDir/data.txt"

        and: "create the directory contents"
        Files.createFile(Paths.get(file1))
        Files.createFile(Paths.get(file2))
        Files.createDirectory(Paths.get(subDir))
        Files.createFile(Paths.get(subFile))

        // make sure all files and sub-dir exist
        assert new File(file1).isFile()
        assert new File(file2).isFile()
        assert new File(subDir).isDirectory()
        assert new File(subFile).isFile()

        assert new File(file1).exists()
        assert new File(file2).exists()
        assert new File(subDir).exists()
        assert new File(subFile).exists()

        when: "delete the parent directory"
        FileUtils.deleteFiles(TEMP_DIR)

        then: "all files & dirs under a directory, including the directory itself, are deleted"
        ! new File(file1).exists()
        ! new File(file2).exists()
        ! new File(subDir).exists()
        ! new File(subFile).exists()
        ! new File(TEMP_DIR).exists()
    }
}
