"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3264],{9588:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=a(4848),r=a(8453),i=a(1470),s=a(9365);const o={sidebar_position:1,title:"Getting Started"},l=void 0,d={id:"elide/intro",title:"Getting Started",description:"So You Want An API?",source:"@site/docs/elide/intro.mdx",sourceDirName:"elide",slug:"/elide/intro",permalink:"/jersey-webservice-template/docs/elide/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Setting Up Sentry.io",permalink:"/jersey-webservice-template/docs/sentry"},next:{title:"Elide Standalone",permalink:"/jersey-webservice-template/docs/elide/elide-standalone"}},c={},u=[{value:"So You Want An API?",id:"so-you-want-an-api",level:2},{value:"Adding Elide as a Dependency",id:"adding-elide-as-a-dependency",level:2},{value:"Creating Models",id:"creating-models",level:2},{value:"Spinning up the API",id:"spinning-up-the-api",level:2},{value:"Classes",id:"classes",level:3},{value:"Supporting Files",id:"supporting-files",level:3},{value:"Running",id:"running",level:3},{value:"Looking at More Data",id:"looking-at-more-data",level:2},{value:"Writing Data",id:"writing-data",level:2},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Modifying Data",id:"modifying-data",level:3},{value:"Running Analytic Queries",id:"running-analytic-queries",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"so-you-want-an-api",children:"So You Want An API?"}),"\n",(0,t.jsxs)(n.p,{children:["The easiest way to get started with Elide is to use the ",(0,t.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-spring/elide-spring-boot-starter",children:"Spring Boot starter dependency"}),". The starter bundles all of\nthe dependencies we will need to stand up a web service. This tutorial uses the starter, and all of the code is\n",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/elide-spring-boot-example",children:"available here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Don't like Spring/Spring Boot? - check out the same getting starting guide using Jetty/Jersey and\n",(0,t.jsx)(n.a,{href:"elide-standalone",children:"Elide standalone"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-elide-as-a-dependency",children:"Adding Elide as a Dependency"}),"\n",(0,t.jsx)(n.p,{children:"To include elide into our spring project, add the single starter dependency:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-spring-boot-starter</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-models",children:"Creating Models"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Elide models"})," are some of the most important code in any Elide project. Our models are the view of our data that we\nwish to expose. In this example we will be modeling a software artifact repository since most developers have a\nhigh-level familiarity with artifact repositories such as Maven, Artifactory, npm, and the like."]}),"\n",(0,t.jsx)(n.p,{children:"There will 2 kinds of models:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Models that we intend to both read & write"}),". These models are created by defining Java classes.  For this\nexample, that includes ",(0,t.jsx)(n.code,{children:"ArtifactGroup"}),", ",(0,t.jsx)(n.code,{children:"ArtifactProduct"}),", and ",(0,t.jsx)(n.code,{children:"ArtifactVersion"}),".  For brevity we will omit package\nnames and import statements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Read-only models"})," that we intend to run analytic queries against. These models can be created with Java classes\nor with a HJSON configuration language.  For this example, we will use the latter to create a ",(0,t.jsx)(n.code,{children:"Downloads"})," model."]}),"\n"]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"ArtifactGroup.java",label:"ArtifactGroup.java",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Include(rootLevel = true, name = "group")\n@Entity\npublic class ArtifactGroup {\n    @Id\n    private String name = "";\n\n    private String commonName = "";\n\n    private String description = "";\n\n    @OneToMany(mappedBy = "group")\n    private List<ArtifactProduct> products = new ArrayList<>();\n}\n'})})}),(0,t.jsx)(s.A,{value:"ArtifactProduct.java",label:"ArtifactProduct.java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Include(name = "product")\n@Entity\npublic class ArtifactProduct {\n    @Id\n    private String name = "";\n\n    private String commonName = "";\n\n    private String description = "";\n\n    @ManyToOne\n    private ArtifactGroup group = null;\n\n    @OneToMany(mappedBy = "artifact")\n    private List<ArtifactVersion> versions = new ArrayList<>();\n}\n'})})}),(0,t.jsx)(s.A,{value:"ArtifactVersion.java",label:"ArtifactVersion.java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Include(name = "version")\n@Entity\npublic class ArtifactVersion {\n    @Id\n    private String name = "";\n\n    private Date createdAt = new Date();\n\n    @ManyToOne\n    private ArtifactProduct artifact;\n}\n'})})}),(0,t.jsx)(s.A,{value:"artifactDownloads.hjson",label:"artifactDownloads.hjson",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hjson",children:"{\n  tables: [\n    {\n      name: Downloads\n      table: downloads\n      description:\n      '''\n      Analytics for artifact downloads.\n      '''\n      joins: [\n        {\n          name: artifactGroup\n          to: group\n          kind: toOne\n          type: left\n          definition: '{{group_id}} = {{artifactGroup.name}}'\n        },\n        {\n          name: artifactProduct\n          to: product\n          kind: toOne\n          definition: '{{product_id}} = {{artifactProduct.name}}'\n        }\n      ]\n      dimensions: [\n        {\n          name: group\n          type: TEXT\n          definition: '{{artifactGroup.name}}'\n        }\n        {\n          name: product\n          type: TEXT\n          definition: '{{artifactProduct.name}}'\n        }\n        {\n          name: date\n          type: TIME\n          definition: '{{date}}'\n          grains: [{\n            type: DAY\n          }]\n        }\n      ]\n      measures: [\n        {\n          name: downloads\n          type: INTEGER\n          definition: 'SUM({{downloads}})'\n        }\n      ]\n    }\n  ]\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"spinning-up-the-api",children:"Spinning up the API"}),"\n",(0,t.jsxs)(n.p,{children:["So now we have some models, but without an API it is not very useful. Before we add the API component, we need to create\nthe schema in the database that our models will use. Our example uses liquibase to manage the schema. Our example will\nexecute the ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/elide-spring-boot-example/blob/master/src/main/resources/db/changelog/changelog.xml",children:"database migrations"})," to configure the database with some test data automatically. This demo\nuses ",(0,t.jsx)(n.em,{children:"Postgres"}),". Feel free to modify the migration script if a different database provider is used."]}),"\n",(0,t.jsxs)(n.p,{children:["We may notice the example liquibase migration script adds an extra table, ",(0,t.jsx)(n.code,{children:"AsyncQuery"}),". This is only required if\nleveraging Elide's ",(0,t.jsx)(n.a,{href:"clientapis/asyncapi",children:"asynchronous API"})," to manage long-running analytic queries."]}),"\n",(0,t.jsxs)(n.p,{children:["There may be more tables in our database than models in our project or vice versa. Similarly, there may be more columns\nin a table than in a particular model or vice versa. Not only will our models work just fine, but we expect that models\nwill normally expose only a subset of the fields present in the database. Elide is an ideal tool for building\nmicro-services - ",(0,t.jsx)(n.strong,{children:"each service in your system can expose only the slice of the database that it requires"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"classes",children:"Classes"}),"\n",(0,t.jsx)(n.p,{children:"Bringing life to our API is trivially easy.  We need a single Application class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Example app using elide-spring.\n */\n@SpringBootApplication\npublic class App {\n    public static void main(String[] args) throws Exception {\n        SpringApplication.run(App.class, args);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"supporting-files",children:"Supporting Files"}),"\n",(0,t.jsx)(n.p,{children:"The application is configured with a Spring application YAML file (broken into sections below)."}),"\n",(0,t.jsx)(n.p,{children:"The Elide Spring starter uses a JPA data store (the thing that talks to the database). This can be configured like any\nother Spring data source and JPA provider.  The one below uses an H2 in-memory database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spring:\n  jpa:\n    show-sql: true\n    properties:\n      hibernate:\n        dialect: 'org.hibernate.dialect.H2Dialect'\n        '[default_batch_fetch_size]': 100\n        '[use_scrollable_resultset]': true\n    hibernate:\n      naming:\n        physical-strategy: 'org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl'\n      ddl-auto: 'validate'\n  datasource:\n    url: 'jdbc:h2:mem:db1;DB_CLOSE_DELAY=-1'\n    username: 'sa'\n    password: ''\n    driver-class-name: 'org.h2.Driver'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Elide has its own configuration to turn on APIs and setup their URL paths:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"elide:\n  json-api:\n    path: /api/v1\n    enabled: true\n  graphql:\n    path: /graphql/api/v1\n    enabled: true\n  api-docs:\n    path: /doc\n    enabled: true\n    version: openapi_3_0\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following configuration enables Elide's asynchronous API for analytic queries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  async:\n    enabled: true\n    thread-pool-size: 7\n    cleanup:\n      enabled: true\n      query-max-run-time: 65s\n      query-retention-duration: 7d\n"})}),"\n",(0,t.jsx)(n.p,{children:"To enable analytic queries, we have to turn on the the aggregation data store.  This example also enables HJSON configuration for analytic models:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  aggregation-store:\n    enabled: true\n    default-dialect: h2\n    dynamic-config:\n      path: src/main/resources/analytics\n      enabled: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running",children:"Running"}),"\n",(0,t.jsxs)(n.p,{children:["With these new classes, we have two options for running our project. We can either run the ",(0,t.jsx)(n.code,{children:"App"})," class using our\nfavorite IDE, or we can run the service from the command line:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"java -jar target/elide-spring-boot-1.0.jar\n"})}),"\n",(0,t.jsx)(n.p,{children:"Our example requires the following environment variables to be set to work correctly with Postgres."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"JDBC_DATABASE_URL"}),"\n",(0,t.jsx)(n.li,{children:"JDBC_DATABASE_USERNAME"}),"\n",(0,t.jsx)(n.li,{children:"JDBC_DATABASE_PASSWORD"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If we don't set them, the example will use the H2 in memory database."}),"\n",(0,t.jsxs)(n.p,{children:["With the ",(0,t.jsx)(n.code,{children:"App"})," class and application YAML file, we can now run our API."]}),"\n",(0,t.jsx)(n.p,{children:"We can now run the following curl commands to see some of the sample data that the liquibase migrations added for us."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"curl http://localhost:8080/api/v1/group\n"})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n  "http://localhost:8080/graphql/api/v1" \\\n  -d\'{ \n         "query" : "{ group { edges { node { name commonName description } } } }"\n     }\'\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Here are the respective responses:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": [\n        {\n            "attributes": {\n                "commonName": "Example Repository",\n                "description": "The code for this project"\n            },\n            "id": "com.example.repository",\n            "relationships": {\n                "products": {\n                    "data": [\n                        {\n                            "id": "elide-demo",\n                            "type": "product"\n                        }\n                    ]\n                }\n            },\n            "type": "group"\n        },\n        {\n            "attributes": {\n                "commonName": "Elide",\n                "description": "The magical library powering this project"\n            },\n            "id": "com.yahoo.elide",\n            "relationships": {\n                "products": {\n                    "data": [\n                        {\n                            "id": "elide-core",\n                            "type": "product"\n                        },\n                        {\n                            "id": "elide-standalone",\n                            "type": "product"\n                        },\n                        {\n                            "id": "elide-datastore-hibernate5",\n                            "type": "product"\n                        }\n                    ]\n                }\n            },\n            "type": "group"\n        }\n    ]\n}\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "group": {\n            "edges": [\n                {\n                    "node": {\n                        "commonName": "Example Repository",\n                        "description": "The code for this project",\n                        "name": "com.example.repository"\n                    }\n                },\n                {\n                    "node": {\n                        "commonName": "Elide",\n                        "description": "The magical library powering this project",\n                        "name": "com.yahoo.elide"\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"looking-at-more-data",children:"Looking at More Data"}),"\n",(0,t.jsx)(n.p,{children:"We can navigate through the entity relationship graph defined in the models and explore relationships:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"List groups:                 group/\nShow a group:                group/<group id>\nList a group's products:     group/<group id>/products/\nShow a product:              group/<group id>/products/<product id>\nList a product's versions:   group/<group id>/products/<product id>/versions/\nShow a version:              group/<group id>/products/<product id>/versions/<version id>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"writing-data",children:"Writing Data"}),"\n",(0,t.jsx)(n.p,{children:"So far we have defined our views on the database and exposed those views over HTTP. This is great progress, but so far\nwe have only read data from the database."}),"\n",(0,t.jsx)(n.h3,{id:"inserting-data",children:"Inserting Data"}),"\n",(0,t.jsx)(n.p,{children:"Fortunately for us adding data is just as easy as reading data. For now let\u2019s use cURL to put data in the database."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -X POST http://localhost:8080/api/v1/group/com.example.repository/products -H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json" -d \'{"data": {"type": "product", "id": "elide-demo"}}\'\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n  "http://localhost:8080/graphql/api/v1" \\\n  -d\'{ "query" : "mutation { group(ids: [\\"com.example.repository\\"]) { edges { node { products(op: UPSERT, data: {name: \\"elide-demo\\"}) { edges { node { name } } } } } } }" }\'\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"When we run that cURL call we should see a bunch of json returned, that is our newly inserted object!"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": [\n        {\n            "attributes": {\n                "commonName": "",\n                "description": ""\n            },\n            "id": "elide-demo",\n            "relationships": {\n                "group": {\n                    "data": {\n                        "id": "com.example.repository",\n                        "type": "group"\n                    }\n                },\n                "versions": {\n                    "data": []\n                }\n            },\n            "type": "product"\n        }\n    ]\n}\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "group":{\n            "edges":[\n                {\n                    "node":{\n                        "products":{\n                            "edges":[\n                                {\n                                    "node":{\n                                        "name":"elide-demo"\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"modifying-data",children:"Modifying Data"}),"\n",(0,t.jsx)(n.p,{children:"Notice that, when we created it, we did not set any of the attributes of our new product record. Updating our\ndata to help our users is just as easy as it is to add new data. Let's update our model with the following cURL call."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -X PATCH http://localhost:8080/api/v1/group/com.example.repository/products/elide-demo \\\n-H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json" \\\n-d \'{\n  "data": {\n    "type": "product",\n    "id": "elide-demo",\n    "attributes": {\n      "commonName": "demo application",\n      "description": "An example implementation of an Elide web service that showcases many Elide features"\n    }\n  }\n}\'\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n   "http://localhost:8080/graphql/api/v1" \\\n   -d\'{   \n          "query" : "mutation { group(ids: [\\"com.example.repository\\"]) { edges { node { products(op: UPDATE, data: { name: \\"elide-demo\\", commonName: \\"demo application\\", description: \\"An example implementation of an Elide web service that showcases many Elide features\\" }) { edges { node { name } } } } } } }"\n      }\'\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"running-analytic-queries",children:"Running Analytic Queries"}),"\n",(0,t.jsxs)(n.p,{children:["Analytic queries leverage the same API as reading any other Elide model.  Note that Elide will aggregate the measures\nselected by the dimensions requested. Learn more about analytic queries ",(0,t.jsx)(n.a,{href:"analytics",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -g "http://localhost:8080/api/v1/downloads?fields[downloads]=downloads,group,product"\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n    "http://localhost:8080/graphql/api/v1" \\\n    -d\'{ \n           "query" : "{ downloads { edges { node { downloads group product } } } }"\n       }\'\n\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Here are the respective responses:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"JSON-API",label:"JSON-API",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": [\n        {\n            "attributes": {\n                "downloads": 35,\n                "group": "com.example.repository",\n                "product": "elide-core"\n            },\n            "id": "0",\n            "type": "downloads"\n        }\n    ]\n}\n'})})}),(0,t.jsx)(s.A,{value:"GraphQL",label:"GraphQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "downloads": {\n            "edges": [\n                {\n                    "node": {\n                        "downloads": 35,\n                        "group": "com.example.repository",\n                        "product": "elide-core"\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(53);const r={tabItem:"tabItem_Ymn6"};var i=a(4848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),r=a(53),i=a(3104),s=a(6347),o=a(205),l=a(7485),d=a(1682),c=a(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:a,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),x=(()=>{const e=d??g;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=a(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(4848);function v(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(d(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);