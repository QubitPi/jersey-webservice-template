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

import static org.bitbucket.jack20191124.jaxrs.config.ErrorMessageFormat.CREATE_DIR_ERROR;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;

/**
 * Utils for dealing with files.
 */
public class FileUtils {

    /**
     * Create parent directory if it doesn't exist in a given file path.
     *
     * @param path  The path name
     */
    public static void createParentDirectories(final String path) {
        final File parent = new File(path).getParentFile();
        if (!parent.exists() && !parent.mkdir()) {
            throw new IllegalStateException(CREATE_DIR_ERROR.format(parent));
        }
    }

    /**
     * Deletes files and directories in the specified path.
     *
     * @param path  The pathname
     */
    public static void deleteFiles(final String path) {
        try {
            Files.walkFileTree(Paths.get(path), new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(
                        final Path file,
                        final BasicFileAttributes attributes
                ) throws IOException {
                    Files.delete(file);
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult postVisitDirectory(
                        final Path dir,
                        final IOException exception
                ) throws IOException {
                    Files.delete(dir);
                    return FileVisitResult.CONTINUE;
                }
            });
        } catch (final IOException exception) {
            throw new RuntimeException(exception);
        }
    }
}
