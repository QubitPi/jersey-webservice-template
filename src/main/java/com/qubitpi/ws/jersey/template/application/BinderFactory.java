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
package com.qubitpi.ws.jersey.template.application;

import com.qubitpi.ws.jersey.template.config.OAuthConfig;
import com.qubitpi.ws.jersey.template.web.filters.oauth.AccessTokenValidator;

import org.aeonbits.owner.ConfigFactory;
import org.glassfish.hk2.utilities.Binder;
import org.glassfish.hk2.utilities.binding.AbstractBinder;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * A binder factory builds a custom binder for the Jersey application.
 * <p>
 * The factory makes the component object instance that will eventually be passed to
 * {@link org.glassfish.jersey.server.ResourceConfig#register(Object)}.
 */
@Immutable
@ThreadSafe
public class BinderFactory {

    private static final OAuthConfig OAUTH_CONFIG = ConfigFactory.create(OAuthConfig.class);

    /**
     * Builds a hk2 Binder instance.
     * <p>
     * This binder should bind all relevant resources for runtime dependency injection.
     *
     * @return a binder instance that will be registered by putting as a parameter to
     * {@link org.glassfish.jersey.server.ResourceConfig#register(Object)}
     */
    @NotNull
    public Binder buildBinder() {
        return new AbstractBinder() {
            @Override
            protected void configure() {
                if (OAUTH_CONFIG.authEnabled()) {
                    bind(new AccessTokenValidator() {
                        @Override
                        public boolean validate(final String accessToken) {
                            return true;
                        }
                    }).to(AccessTokenValidator.class);
                }
            }
        };
    }
}
