/**
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
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Immutable Infrastructure',
    Svg: require('@site/static/img/hashicorp-logo.svg').default,
    description: (
      <>
        JWT has first-class support for HashiCorp as CI/CD deployment and was designed to be easily deployed and
        maintained to get our webservice up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/business.svg').default,
    description: (
      <>
        JWT lets us focus on our business logics, and the template will do the chores.
      </>
    ),
  },
  {
    title: 'Powered by Jetty',
    Svg: require('@site/static/img/jetty-logo.svg').default,
    description: (
      <>
        JWT runs in standalone Jetty container, which standardize webservice runtime.
      </>
    ),
  },
  {
    title: 'Swagger Documentation',
    Svg: require('@site/static/img/swagger-logo.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Healthcheck Endpoint',
    Svg: require('@site/static/img/healthcheck.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'CORS Filter',
    Svg: require('@site/static/img/cors.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Groovy Spock Testing',
    Svg: require('@site/static/img/groovy.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Docker-based Dev Environment & Integration Tests',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Easy Config Management',
    Svg: require('@site/static/img/config.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'ELK Support',
    Svg: require('@site/static/img/elastic.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
