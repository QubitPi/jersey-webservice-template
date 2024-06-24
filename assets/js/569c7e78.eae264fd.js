"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1599],{8170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=r(4848),t=r(8453),s=r(1470),a=r(9365);const o={sidebar_position:1,title:"Client APIs",description:"JSON API and GraphQL Client APIs"},l=void 0,d={id:"crud/elide/clientapis/index",title:"Client APIs",description:"JSON API and GraphQL Client APIs",source:"@site/docs/crud/elide/clientapis/index.mdx",sourceDirName:"crud/elide/clientapis",slug:"/crud/elide/clientapis/",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/crud/elide/clientapis/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Client APIs",description:"JSON API and GraphQL Client APIs"},sidebar:"tutorialSidebar",previous:{title:"Client APIs",permalink:"/jersey-webservice-template/docs/category/client-apis"},next:{title:"JSON API",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/jsonapi"}},c={},h=[{value:"Supported APIs",id:"supported-apis",level:2},{value:"Common Concepts",id:"common-concepts",level:2},{value:"API Versioning",id:"api-versioning",level:3},{value:"Type Coercion",id:"type-coercion",level:3},{value:"User Type Registration",id:"user-type-registration",level:4},{value:"Date Coercion",id:"date-coercion",level:4},{value:"Spring Boot Configuration",id:"spring-boot-configuration",level:5},{value:"Elide Standalone Configuration",id:"elide-standalone-configuration",level:5},{value:"Elide Library Configuration",id:"elide-library-configuration",level:5},{value:"UUID Coercion",id:"uuid-coercion",level:4},{value:"Enum Coercion",id:"enum-coercion",level:4},{value:"Custom Error Responses",id:"custom-error-responses",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"supported-apis",children:"Supported APIs"}),"\n",(0,i.jsx)(n.p,{children:"Elide supports the two most widely adopted standards for graph APIs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"jsonapi",children:"JSON-API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"graphql",children:"GraphQL"})}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Graph APIs are an evolution of web service APIs that serve and manipulate data for mobile & web applications. They have\na number of characteristics that make them well suited to this task:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Most notably, they present a ",(0,i.jsx)(n.strong,{children:"data model"})," as an entity relationship graph and an ",(0,i.jsx)(n.strong,{children:"accompanying schema"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A well-defined model allows for a consistent view of the data and a centralized way to manipulate an instance of\nthe model or to cache it."}),"\n",(0,i.jsx)(n.li,{children:"The schema provides powerful introspection capabilities that can be used to build tools to help developers\nunderstand and navigate the model."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The API allows the client to ",(0,i.jsx)(n.strong,{children:"fetch or mutate as much or as little information in single roundtrip"})," between client\nand server. This also shrinks payload sizes and simplifies the process of schema evolution."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.strong,{children:"well-defined standard"})," for the API that fosters a community approach to development of supporting\ntools & best practices."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"common-concepts",children:"Common Concepts"}),"\n",(0,i.jsx)(n.p,{children:"All Elide APIs share a common set of concepts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The API exposes a set of related data models as an entity relationship graph."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"All models have a unique identifier."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Models have attributes and relationships."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Relationships are links to other models. They can be traversed in the API. If the relationship represents a\ncollection, it can be sorted, filtered, and paginated."}),"\n",(0,i.jsx)(n.li,{children:"Attributes are properties of the model. They can be simple or complex (objects or collections)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Filtering, sorting, and pagination share common languages and expressions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Text and numeric representation of complex attributes is common."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"API versioning works in the same manner."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom error responses have the same configuration mechanism."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"api-versioning",children:"API Versioning"}),"\n",(0,i.jsxs)(n.p,{children:["Elide allows multiple versions of the same models to coexist and for clients to request a particular instance. Elide\nJAX-RS endpoints (elide-standalone) and Spring controllers (Spring) support an API version that can be set to match the\nmodel annotation (",(0,i.jsx)(n.code,{children:"@ApiVersion"}),") version."]}),"\n",(0,i.jsxs)(n.p,{children:["If no version is specified by the client, Elide only exposes the models that lack an ",(0,i.jsx)(n.code,{children:"@ApiVersion"})," annotation."]}),"\n",(0,i.jsxs)(n.p,{children:["OpenAPI endpoints (JSON-API) and GraphQL schemas are also scoped by the ",(0,i.jsx)(n.code,{children:"ApiVersion"})," header. They only return the\nschema corresponding to the requested API version."]}),"\n",(0,i.jsx)(n.p,{children:"Elide includes implementations for the following API Versioning Strategies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Path"}),"\n",(0,i.jsx)(n.li,{children:"Header"}),"\n",(0,i.jsx)(n.li,{children:"Parameters"}),"\n",(0,i.jsx)(n.li,{children:"Media Type Profile"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This can be customized by implementing and registering a ",(0,i.jsx)(n.code,{children:"com.paiondata.elide.core.request.route.RouteResolver"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The default in Elide Spring Boot uses the Path strategy. The Path strategy is the only one that is supported when\nintegrating with Springdoc as the other strategies are difficult to document with OpenAPI."}),"\n",(0,i.jsxs)(n.p,{children:["This can be configured using ",(0,i.jsx)(n.code,{children:"application.yaml"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"elide:\n  api-versioning-strategy:\n    path:\n      enabled: false\n    header:\n      enabled: true\n      header-name:\n      - ApiVersion\n"})}),"\n",(0,i.jsx)(n.p,{children:"The default in Elide Standalone now accepts all the strategies."}),"\n",(0,i.jsxs)(n.p,{children:["This can be configured by overriding ",(0,i.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public RouteResolver getRouteResolver() {\n        new HeaderRouteResolver("ApiVersion");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Details of how to version Elide models can be found ",(0,i.jsx)(n.a,{href:"../data-model#api-versions",children:"here"}),". Details of how to configure\nversioned OpenAPI documents can be found ",(0,i.jsx)(n.a,{href:"../openapi#api-versions",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"type-coercion",children:"Type Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide attempts to deserialize and coerce fields in the client payload into the underlying type defined in the data\nmodel. Similarly, Elide will serialize the data model fields into the text format defined by the schema of the client\npayload."}),"\n",(0,i.jsx)(n.p,{children:"Beyond primitive, numeric, and String types, Elide can serialize and deserialize complex and user defined types."}),"\n",(0,i.jsx)(n.h4,{id:"user-type-registration",children:"User Type Registration"}),"\n",(0,i.jsxs)(n.p,{children:["To register a new type for serialization and deserialization, define a ",(0,i.jsx)(n.code,{children:"Serde"})," (short for Serializer/Deserializer):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Bidirectional conversion from one type to another.\n *\n * @param <S> The serialized type\n * @param <T> The deserialized type\n */\npublic interface Serde<S, T> {\n\n    /**\n     * Deserialize an instance of type S to type T.\n     * @param val The thing to deserialize\n     * @return The deserialized value\n     */\n    T deserialize(S val);\n\n    /**\n     * Serializes an instance of type T as type S.\n     * @param val The thing to serialize\n     * @return The serialized value\n     */\n    S serialize(T val);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At startup, Elide will automatically discover any ",(0,i.jsx)(n.code,{children:"Serde"})," classes annotated with ",(0,i.jsx)(n.code,{children:"ElideTypeConverter"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@ElideTypeConverter(type = OffsetDateTime.class, name = "OffsetDateTime")\npublic class OffsetDateTimeSerde implements Serde<String, OffsetDateTime> {\n\n    @Override\n    public OffsetDateTime deserialize(String val) {\n        return OffsetDateTime.parse(val, DateTimeFormatter.ISO_OFFSET_DATE_TIME);\n    }\n\n    @Override\n    public String serialize(OffsetDateTime val) {\n        return val.format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"date-coercion",children:"Date Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide has built-in support for either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Epoch based dates (serialized as a long)"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO8601"})," based dates (serialized as a String\n`yyyy-MM-dd'T'HH",":mm","'Z')"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"spring-boot-configuration",children:"Spring Boot Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-spring/elide-spring-boot-autoconfigure",children:"Elide Spring Boot"})," is configured by default to use ISO8601 dates."]}),"\n",(0,i.jsxs)(n.p,{children:["This can be toggled by creating a ",(0,i.jsx)(n.code,{children:"ElideSettingsBuilderCustomizer"})," bean:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    ElideSettingsBuilderCustomizer elideSettingsBuilderCustomizer() {\n        return builder -> builder.serdes(serdes -> serdes.withEpochDates());\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"elide-standalone-configuration",children:"Elide Standalone Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/tree/master/elide-standalone",children:"Elide Standalone"})," defaults to ISO8601 dates. This can be toggled by overriding the following binding"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Whether Dates should be ISO8601 strings (true) or epochs (false).\n * @return\n */\npublic boolean enableISO8601Dates() {\n    return true;\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"elide-library-configuration",children:"Elide Library Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following date serdes can be registered:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-core/src/main/java/com/paiondata/elide/core/utils/coerce/converters/ISO8601DateSerde.java",children:"ISO8601 Serde"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-core/src/main/java/com/paiondata/elide/core/utils/coerce/converters/EpochToDateConverter.java",children:"Epoch Serde"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"uuid-coercion",children:"UUID Coercion"}),"\n",(0,i.jsxs)(n.p,{children:["Elide has built in support for converting between String and UUIDs. The conversion leverages ",(0,i.jsx)(n.code,{children:"UUID.fromString"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"enum-coercion",children:"Enum Coercion"}),"\n",(0,i.jsx)(n.p,{children:"Elide has built in support for converting between Strings or Integers to enumeration types (by name or value\nrespectively)."}),"\n",(0,i.jsx)(n.h3,{id:"custom-error-responses",children:"Custom Error Responses"}),"\n",(0,i.jsxs)(n.p,{children:["For normal error handling, Elide throws runtime exceptions which are mapped to error responses. We can override any\nerror response in Elide by providing a custom ",(0,i.jsx)(n.code,{children:"ExceptionMapper"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Maps an exception to an {@link ElideErrorResponse}.\n *\n * @param <E> exception type\n * @param <T> response body type\n */\n@FunctionalInterface\npublic interface ExceptionMapper<E extends Throwable, T> {\n\n    /**\n     * Map the exception to an {@link ElideErrorResponse}.\n     *\n     * @param exception the exception to map.\n     * @param errorContext the error context\n     * @return the mapped ElideErrorResponse or null if you do not want to map this error\n     */\n    @Nullable\n    ElideErrorResponse<? extends T> toErrorResponse(E exception, ErrorContext errorContext);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The mapper returns a ",(0,i.jsx)(n.code,{children:"ElideErrorResponse"})," which allows the developer complete control over the error objects returned\nin the 'errors' array for both JSON-API and GraphQL."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class InvalidEntityBodyExceptionMapper implements ExceptionMapper<InvalidEntityBodyException, ElideErrors> {\n    public ElideErrorResponse<ElideErrors> toErrorResponse(\n            InvalidEntityBodyException exception,\n            ErrorContext errorContext\n    ) {\n        return ElideErrorResponse.badRequest()\n                .errors(errors -> errors\n                        // Add the first error\n                        .error(error -> error\n                                .message(errorContext.isVerbose() ? exception.getMessage() : "Invalid entity body")\n                                .attribute("code", "InvalidEntityBody")\n                                .attribute("body", ""))\n                        // Add the second error\n                        .error(error -> error\n                                .message("Item 1 cannot be empty")\n                                .attribute("code", "NotEmpty")\n                                .attribute("item", "1"))\n                        // Add the third error\n                        .error(error -> error\n                                .message("Item 2 cannot be null")\n                                .attribute("code", "NotNull")\n                                .attribute("item", "2")));\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ElideErrors"})," will be mapped to the corresponding ",(0,i.jsx)(n.code,{children:"JsonApiErrors"})," and ",(0,i.jsx)(n.code,{children:"GraphQLErrors"}),". The\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-core/src/main/java/com/paiondata/elide/jsonapi/serialization/JsonApiErrorSerializer.java",children:(0,i.jsx)(n.code,{children:"JsonApiError"})}),"\nand\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-graphql/src/main/java/com/paiondata/elide/graphql/serialization/GraphQLErrorSerializer.java",children:(0,i.jsx)(n.code,{children:"GraphQLError"})}),"\nare what is serialized as a response."]}),"\n",(0,i.jsxs)(n.p,{children:["This mapping of ",(0,i.jsx)(n.code,{children:"ElideErrors"})," happens in the\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-core/src/main/java/com/paiondata/elide/jsonapi/DefaultJsonApiExceptionHandler.java",children:(0,i.jsx)(n.code,{children:"DefaultJsonApiExceptionHandler"})}),"\nand\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/elide/blob/master/elide-graphql/src/main/java/com/paiondata/elide/graphql/DefaultGraphQLExceptionHandler.java",children:(0,i.jsx)(n.code,{children:"DefaultGraphQLExceptionHandler"})}),"\nusing the ",(0,i.jsx)(n.code,{children:"JsonApiErrorMapper"})," and ",(0,i.jsx)(n.code,{children:"GraphQLErrorMapper"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We can configure a custom ",(0,i.jsx)(n.code,{children:"ExceptionMapper"})," as follows:"]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"@Configuration"})," class that defines our custom implementation as a ",(0,i.jsx)(n.code,{children:"@Bean"}),". In the following example the\n",(0,i.jsx)(n.code,{children:"InvalidEntityBodyExceptionMapper"})," is the custom implementation."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public ExceptionMapper exceptionMapper() {\n        return new InvalidEntityBodyExceptionMapper();\n    }\n}\n"})})]}),(0,i.jsxs)(a.A,{value:"Elide Standalone",label:"Elide Standalone",children:[(0,i.jsxs)(n.p,{children:["Override ElideStandaloneSettings. In the following example the ",(0,i.jsx)(n.code,{children:"InvalidEntityBodyExceptionMapper"})," is the custom\nimplementation being registered."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ExceptionMappers getExceptionMappers() {\n        return BasicExceptionMappers.builder().register(new InvalidEntityBodyExceptionMapper()).build();\n    }\n}\n"})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The following is the relationship between ",(0,i.jsx)(n.code,{children:"ElideError"})," and ",(0,i.jsx)(n.code,{children:"JsonApiError"})," and ",(0,i.jsx)(n.code,{children:"GraphQLError"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Elide Error"}),(0,i.jsx)(n.th,{children:"JsonApi Error"}),(0,i.jsx)(n.th,{children:"GraphQL Error"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"details"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.id"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.status"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"status"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.status"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.code"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"code"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.code"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.title"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.source"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"source"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.source"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.links"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"links"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"extensions.links"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta.path"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"path"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"attributes.locations"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"meta.locations"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"locations"})})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var i=r(53);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var i=r(6540),t=r(53),s=r(3104),a=r(6347),o=r(205),l=r(7485),d=r(1682),c=r(9466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=p(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,h]=x({queryString:r,groupId:t}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=d??j;return u({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function f(e){let{className:n,block:r,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==i&&(d(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function E(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(E,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);