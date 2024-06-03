"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4865],{5370:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(4848),t=i(8453);const o={sidebar_position:10,title:"OpenAPI",description:"JSON API documentations"},s=void 0,a={id:"elide/openapi",title:"OpenAPI",description:"JSON API documentations",source:"@site/docs/elide/openapi.md",sourceDirName:"elide",slug:"/elide/openapi",permalink:"/jersey-webservice-template/docs/elide/openapi",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/openapi.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"OpenAPI",description:"JSON API documentations"},sidebar:"tutorialSidebar",previous:{title:"Logging & Audit",permalink:"/jersey-webservice-template/docs/elide/audit"},next:{title:"Test",permalink:"/jersey-webservice-template/docs/elide/test"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Features Supported",id:"features-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Maven",id:"maven",level:3},{value:"Spring Boot Configuration",id:"spring-boot-configuration",level:4},{value:"Supporting OAuth",id:"supporting-oauth",level:4},{value:"SpringDoc Integration",id:"springdoc-integration",level:4},{value:"Elide Standalone Configuration",id:"elide-standalone-configuration",level:4},{value:"Elide Library Configuration",id:"elide-library-configuration",level:3},{value:"Converting OpenAPI to JSON or YAML",id:"converting-openapi-to-json-or-yaml",level:4},{value:"Configure JAX-RS Endpoint",id:"configure-jax-rs-endpoint",level:4},{value:"Supporting OAuth",id:"supporting-oauth-1",level:3},{value:"Adding a global parameter",id:"adding-a-global-parameter",level:3},{value:"Adding a global response code",id:"adding-a-global-response-code",level:3},{value:"Performance",id:"performance",level:2},{value:"Path Generation",id:"path-generation",level:3},{value:"Document Size",id:"document-size",level:3},{value:"Model Properties",id:"model-properties",level:3},{value:"Attribute Properties",id:"attribute-properties",level:3},{value:"API Versions",id:"api-versions",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Elide supports the generation of ",(0,r.jsx)(n.a,{href:"https://www.openapis.org/",children:"OpenAPI"})," documentation from Elide annotated beans.\nSpecifically, it generates a JSON or YAML document conforming to the OpenAPI specification that can be used by tools\nlike ",(0,r.jsx)(n.a,{href:"http://swagger.io/",children:"Swagger UI"})," (among others) to explore, understand, and compose queries against our Elide API."]}),"\n",(0,r.jsxs)(n.p,{children:["Only JSON-API endpoints are documented. The GraphQL API schema can be explored directly with tools like\n",(0,r.jsx)(n.a,{href:"https://github.com/graphql/graphiql",children:"Graphiql"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"features-supported",children:"Features Supported"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JaxRS & Spring Endpoint"})," - Elide ships with a customizable JaxRS endpoints that can publish one or more OpenAPI\ndocuments in both JSON or YAML."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Path Discovery"})," - Given a set of entities to explore, Elide will generate the minimum, cycle-free, de-duplicated\nset of URL paths in the OpenAPI document."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Filter by Primitive Attributes"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests on entity collections include filter parameters for each\nprimitive attribute."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prune Fields"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support JSON-API sparse fields query parameter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Include Top Level Relationships"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support the ability to include direct relationships."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sort by Attribute"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support sort query parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pagination"})," - All ",(0,r.jsx)(n.em,{children:"GET"})," requests support pagination query parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Permission Exposition"})," - Elide permissions are exported as documentation for entity schemas."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Model & Attribute Properties"})," - The ",(0,r.jsx)(n.em,{children:"required"}),", ",(0,r.jsx)(n.em,{children:"readOnly"}),", ",(0,r.jsx)(n.em,{children:"example"}),", ",(0,r.jsx)(n.em,{children:"value"}),", ",(0,r.jsx)(n.em,{children:"description"}),", ",(0,r.jsx)(n.em,{children:"title"}),",\n",(0,r.jsx)(n.em,{children:"accessMode"}),", ",(0,r.jsx)(n.em,{children:"requiredMode"})," fields are extracted from ",(0,r.jsx)(n.code,{children:"Schema"})," annotations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"API Version Support"})," - Elide can create separate documents for different API versions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,r.jsxs)(n.p,{children:["If we are not using ",(0,r.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-spring/elide-spring-boot-autoconfigure",children:"Elide Spring Starter"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-standalone",children:"Elide Standalone"})," (which package\nswagger as a dependency), we will need to pull in the following elide dependencies :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.yahoo.elide</groupId>\n  <artifactId>elide-swagger</artifactId>\n</dependency>\n\n<dependency>\n  <groupId>com.yahoo.elide</groupId>\n  <artifactId>elide-core</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Pull in swagger core:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>io.swagger</groupId>\n  <artifactId>swagger-core-jakarta</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"spring-boot-configuration",children:"Spring Boot Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["If we are using\n",(0,r.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-spring/elide-spring-boot-autoconfigure",children:"Elide Spring Autoconfigure"}),",\nwe can customize the ",(0,r.jsx)(n.code,{children:"OpenAPI"})," document by using a ",(0,r.jsx)(n.code,{children:"OpenApiDocumentCustomizer"})," bean:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Configuration\npublic class ElideConfiguration {\n\n    @Bean\n    public OpenApiDocumentCustomizer openApiDocumentCustomizer() {\n        return openApi -> {\n            Info info = new Info().title("My Title");\n            openApi.setInfo(info);\n        };\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The application YAML file has settings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"to enable the OpenAPI document endpoint"}),"\n",(0,r.jsx)(n.li,{children:"to set the URL path for the OpenAPI document endpoint"}),"\n",(0,r.jsx)(n.li,{children:"to set the OpenAPI specification version to generate either 3.0 or 3.1"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"elide:\n  api-docs:\n    enabled: true\n    path: /doc\n    version: openapi_3_0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"supporting-oauth",children:"Supporting OAuth"}),"\n",(0,r.jsx)(n.p,{children:"If we want Swagger UI to acquire & use a bearer token from an OAuth identity provider, we can configure the OpenAPI\ndocument by using annotations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@SpringBootApplication\n@OpenAPIDefinition(info = @Info(title = "My Title"), security = @SecurityRequirement(name = "bearerAuth"))\n@SecurityScheme(\n        name = "bearerAuth",\n        type = SecuritySchemeType.HTTP,\n        bearerFormat = "JWT",\n        scheme = "bearer"\n    )\npublic class App {\n\n    public static void main(String[] args) throws Exception {\n        SpringApplication.run(App.class, args);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"springdoc-integration",children:"SpringDoc Integration"}),"\n",(0,r.jsxs)(n.p,{children:["Elide contributes to ",(0,r.jsx)(n.a,{href:"https://springdoc.org",children:"Springdoc"}),"'s OpenAPI document by exposing a Springdoc ",(0,r.jsx)(n.code,{children:"OpenApiCustomizer"}),"\nbean."]}),"\n",(0,r.jsx)(n.p,{children:"If API Versioning is used, only the Path strategy is supported when integrating with Springdoc as the other strategies\nare difficult to document with OpenAPI."}),"\n",(0,r.jsxs)(n.p,{children:["The default implementation is implemented in ",(0,r.jsx)(n.code,{children:"DefaultElideOpenApiCustomizer"}),". To override the behavior a\n",(0,r.jsx)(n.code,{children:"ElideOpenApiCustomizer"})," bean can be created which will cause the ",(0,r.jsx)(n.code,{children:"DefaultElideOpenApiCustomizer"})," not to be configured."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public ElideOpenApiCustomizer elideOpenApiCustomizer() {\n        return new MyCustomElideOpenApiCustomizer();\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"GroupedOpenApi"})," is used, the ",(0,r.jsx)(n.code,{children:"ElideOpenApiCustomizer"})," is not applied to the groups. Instead Elide has a\n",(0,r.jsx)(n.code,{children:"DefaultElideGroupedOpenApiCustomizer"})," that will customize the ",(0,r.jsx)(n.code,{children:"GroupedOpenApi"})," to set the appropriate\n",(0,r.jsx)(n.code,{children:"OpenApiCustomizers"})," on the ",(0,r.jsx)(n.code,{children:"GroupedOpenApi"})," that matches the paths to match and exclude. To override the behavior a\n",(0,r.jsx)(n.code,{children:"ElideGroupedOpenApiCustomizer"})," can be defined that will need to process the ",(0,r.jsx)(n.code,{children:"OpenApiCustomizers"})," and remove the ones\nautomatically added by Elide."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public ElideGroupedOpenApiCustomizer elideGroupedOpenApiCustomizer() {\n        return new MyCustomElideGroupedOpenApiCustomizer();\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"elide-standalone-configuration",children:"Elide Standalone Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["If we are using ",(0,r.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-standalone",children:"Elide Standalone"}),", we can extend\n",(0,r.jsx)(n.code,{children:"ElideStandaloneSettings"})," to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable the OpenAPI document endpoint."}),"\n",(0,r.jsx)(n.li,{children:"Configure the URL Path for the OpenAPI document."}),"\n",(0,r.jsx)(n.li,{children:"Configure the OpenAPI document version."}),"\n",(0,r.jsx)(n.li,{children:"Configure the service name."}),"\n",(0,r.jsx)(n.li,{children:"Construct OpenAPI documents for your service."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public abstract class Settings implements ElideStandaloneSettings {\n    /**\n     * Enable OpenAPI documentation.\n     * @return whether OpenAPI is enabled;\n     */\n    @Override\n    public boolean enableApiDocs() {\n        return true;\n    }\n\n    /**\n     * API root path specification for the OpenAPI endpoint. Namely, this is the root uri for OpenAPI docs.\n     *\n     * @return Default: /api-docs/*\n     */\n    @Override\n    public String getApiDocsPathSpec() {\n        return "/api-docs/*";\n    }\n\n    /**\n     * OpenAPI documentation requires an API name.\n     * @return open api service name;\n     */\n    @Override\n    public String getApiTitle() {\n        return "Elide Service";\n    }\n\n    /**\n     * The OpenAPI Specification Version to generate.\n     * @return the OpenAPI Specification Version to generate\n     */\n    @Override\n    public OpenApiVersion getOpenApiVersion() {\n        return OpenApiVersion.OPENAPI_3_0;\n    }\n\n    /**\n     * Creates a singular OpenAPI document for JSON-API.\n     * @param dictionary Contains the static metadata about Elide models. .\n     * @return list of OpenAPI registration objects.\n     */\n    @Override\n    public List<ApiDocsEndpoint.ApiDocsRegistration> buildApiDocs(EntityDictionary dictionary) {\n        List<ApiDocsEndpoint.ApiDocsRegistration> docs = new ArrayList<>();\n\n        dictionary.getApiVersions().stream().forEach(apiVersion -> {\n            Info info = new Info()\n                    .title(getApiTitle())\n                    .version(apiVersion);\n            OpenApiBuilder builder = new OpenApiBuilder(dictionary).apiVersion(apiVersion);\n            String moduleBasePath = getJsonApiPathSpec().replace("/*", "");\n            OpenAPI openApi = builder.build().info(info).addServersItem(new Server().url(moduleBasePath));\n            docs.add(new ApiDocsEndpoint.ApiDocsRegistration("test", () -> openApi, getOpenApiVersion().getValue(),\n                    apiVersion));\n        });\n\n        return docs;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"elide-library-configuration",children:"Elide Library Configuration"}),"\n",(0,r.jsx)(n.p,{children:"If we are using Elide directly as a library (and not using Elide Standalone), follow these instructions:"}),"\n",(0,r.jsx)(n.p,{children:"Create and initialize an entity dictionary."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"EntityDictionary dictionary = EntityDictionary.builder().build();\n\ndictionary.bindEntity(Book.class);\ndictionary.bindEntity(Author.class);\ndictionary.bindEntity(Publisher.class);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a Info object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Info info = new Info().title("My Service").version("1");\n'})}),"\n",(0,r.jsx)(n.p,{children:"Initialize a OpenAPI builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenApiBuilder builder = new OpenApiBuilder(dictionary);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the OpenAPI document"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenAPI document = builder.build().info(info);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"converting-openapi-to-json-or-yaml",children:"Converting OpenAPI to JSON or YAML"}),"\n",(0,r.jsx)(n.p,{children:"We can directly convert to JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));\nString jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_JSON);\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can directly convert to YAML as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiDocument openApiDocument = new OpenApiDocument(document, OpenApiDocument.Version.from("3.0"));\nString jsonOutput = openApiDocument.of(OpenApiDocument.MediaType.APPLICATION_YAML);\n'})}),"\n",(0,r.jsx)(n.h4,{id:"configure-jax-rs-endpoint",children:"Configure JAX-RS Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["Or we can use the OpenAPI document directly to configure the ",(0,r.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-swagger/src/main/java/com/yahoo/elide/swagger/resources/ApiDocsEndpoint.java",children:"provided JAX-RS Endpoint"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'List<ApiDocsEndpoint.ApiDocsRegistration> apiDocs = new ArrayList<>();\nOpenAPI openApi = new OpenAPI();\napiDocs.add(new ApiDocsEndpoint.ApiDocsRegistration("test", () -> openApi, "3.0", ""));\n\n//Dependency Inject the ApiDocsEndpoint JAX-RS resource\nbind(apiDocs).named("apiDocs").to(new TypeLiteral<List<ApiDocsEndpoint.ApiDocsRegistration>>() { });\n'})}),"\n",(0,r.jsx)(n.h3,{id:"supporting-oauth-1",children:"Supporting OAuth"}),"\n",(0,r.jsx)(n.p,{children:"If we want Swagger UI to acquire & use a bearer token from an OAuth identity provider, we can configure\nthe OpenAPI document similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SecurityScheme oauthDef = new SecurityScheme()\n    .name("bearerAuth")\n    .type(SecurityScheme.Type.HTTP)\n    .bearerFormat("JWT")\n    .scheme("bearer");\nSecurityRequirement oauthReq = new SecurityRequirement().addList("bearerAuth");\n\nOpenApiBuilder builder = new OpenApiBuilder(entityDictionary);\nOpenAPI document = builder.build();\ndocument.addSecurityItem(oauthReq);\ndocument.getComponents().addSecuritySchemes("bearerAuth", oauthDef);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-global-parameter",children:"Adding a global parameter"}),"\n",(0,r.jsx)(n.p,{children:"A query or header parameter can be added globally to all Elide API endpoints:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Parameter oauthParam = new Parameter()\n        .in("Header")\n        .name("Authorization")\n        .schema(new StringSchema())\n        .description("OAuth bearer token")\n        .required(false);\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).globalParameter(oauthParam);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-global-response-code",children:"Adding a global response code"}),"\n",(0,r.jsx)(n.p,{children:"An HTTP response can be added globally to all Elide API endpoints:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ApiResponse rateLimitedResponse = new ApiResponse().description("Too Many Requests");\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).globalResponse(429, rateLimitedResponse);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.h3,{id:"path-generation",children:"Path Generation"}),"\n",(0,r.jsx)(n.p,{children:"The Swagger UI is very slow when the number of generated URL paths exceeds a few dozen. For large, complex data models,\nit is recommended to generate separate OpenAPI documents for subgraphs of the model."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<Type<?>> entities = Set.of(\n    ClassType.of(Book.class),\n    ClassType.of(Author.class),\n    ClassType.of(Publisher.class)\n);\n\nOpenApiBuilder builder = new OpenApiBuilder(dictionary).managedClasses(entities);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, the ",(0,r.jsx)(n.code,{children:"OpenApiBuilder"})," will only generate paths that exclusively traverse the provided set of\nentities."]}),"\n",(0,r.jsx)(n.h3,{id:"document-size",children:"Document Size"}),"\n",(0,r.jsx)(n.p,{children:"The size of the OpenAPI document can be reduced significantly by limiting the number of filter operators that are used\nto generate query parameter documentation."}),"\n",(0,r.jsxs)(n.p,{children:["In this example, filter query parameters are only generated for the ",(0,r.jsx)(n.em,{children:"IN"})," operator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"OpenApiBuilder builder = new OpenApiBuilder(dictionary).filterOperators(Set.of(Operator.IN));\n"})}),"\n",(0,r.jsx)(n.h3,{id:"model-properties",children:"Model Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Elide extracts the model description and title from the ",(0,r.jsx)(n.code,{children:"Schema"})," and ",(0,r.jsx)(n.code,{children:"Include"})," annotations and adds them to the OpenAPI\ndocumentation. ",(0,r.jsx)(n.code,{children:"Schema"})," has precedence over ",(0,r.jsx)(n.code,{children:"Include"})," if both are present."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Schema(description = "A book model description", title = "Book")\nclass Book {\n\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"Schema"})," only the ",(0,r.jsx)(n.em,{children:"description"})," and ",(0,r.jsx)(n.em,{children:"title"})," property is extracted. For the ",(0,r.jsx)(n.code,{children:"Include"})," annotation, the ",(0,r.jsx)(n.em,{children:"friendlyName"}),"\nis used as the ",(0,r.jsx)(n.em,{children:"title"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"attribute-properties",children:"Attribute Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Elide extracts properties from the ",(0,r.jsx)(n.code,{children:"Schema"})," annotation and adds them to the OpenAPI documentation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Book {\n\n    @Schema(requiredMode = RequiredMode.REQUIRED)\n    public String title;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Only the ",(0,r.jsx)(n.em,{children:"required"}),", ",(0,r.jsx)(n.em,{children:"value"}),", ",(0,r.jsx)(n.em,{children:"example"}),", ",(0,r.jsx)(n.em,{children:"readOnly"}),", ",(0,r.jsx)(n.em,{children:"writeOnly"}),", ",(0,r.jsx)(n.em,{children:"requiredProperties"}),", ",(0,r.jsx)(n.em,{children:"requiredMode"})," and ",(0,r.jsx)(n.em,{children:"accessMode"}),"\nproperties are extracted. This is currently only supported for attributes on Elide models."]}),"\n",(0,r.jsx)(n.h2,{id:"api-versions",children:"API Versions"}),"\n",(0,r.jsx)(n.p,{children:"OpenAPI documents are tied to an explicit API version. When constructing a OpenAPI document, the API version must be set\nto match the API version of the models it will describe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'OpenApiBuilder builder = new OpenApiBuilder(dictionary).apiVersion("1");\nOpenAPI openApi = builder.build();\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);