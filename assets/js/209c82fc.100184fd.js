"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8606],{3809:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(4848),t=i(8453);const a={sidebar_position:5,title:"GraphQL Federation",description:"Beta support for GraphQL Federation"},s=void 0,l={id:"crud/elide/clientapis/graphql-federation",title:"GraphQL Federation",description:"Beta support for GraphQL Federation",source:"@site/docs/crud/elide/clientapis/graphql-federation.md",sourceDirName:"crud/elide/clientapis",slug:"/crud/elide/clientapis/graphql-federation",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/graphql-federation",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/crud/elide/clientapis/graphql-federation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"GraphQL Federation",description:"Beta support for GraphQL Federation"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Subscriptions",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/graphql-subscriptions"},next:{title:"Async API",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/asyncapi"}},d={},o=[{value:"What is GraphQL Federation",id:"what-is-graphql-federation",level:2},{value:"Benefits of Federation",id:"benefits-of-federation",level:3},{value:"Microservices Architecture",id:"microservices-architecture",level:4},{value:"Preserve Client Simplicity and Performance",id:"preserve-client-simplicity-and-performance",level:4},{value:"Design Schemas at Scale",id:"design-schemas-at-scale",level:4},{value:"GraphQL Federation in Elide",id:"graphql-federation-in-elide",level:2},{value:"Enabling GraphQL Federation",id:"enabling-graphql-federation",level:3},{value:"Schema Introspection Queries",id:"schema-introspection-queries",level:3},{value:"Implementing Federated Graphs",id:"implementing-federated-graphs",level:3},{value:"Extending an Elide entity",id:"extending-an-elide-entity",level:4},{value:"Including Elide entities",id:"including-elide-entities",level:4},{value:"Defining the DeferredID scalar",id:"defining-the-deferredid-scalar",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-is-graphql-federation",children:"What is GraphQL Federation"}),"\n",(0,r.jsx)(n.p,{children:"GraphQL Federation lets us declaratively combine multiple GraphQL APIs into a single, federated graph. This federated\ngraph enables clients to interact with multiple APIs through a single request."}),"\n",(0,r.jsx)(n.p,{children:"A client makes a request to the single entry point of the federated graph called the router. The router intelligently\norchestrates and distributes the request across your APIs and returns a unified response. For a client, the request and\nresponse cycle of querying the router looks the same as querying any GraphQL server."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Error loading graphql-federation.png",src:i(7509).A+"",width:"1119",height:"309"})}),"\n",(0,r.jsx)(n.h3,{id:"benefits-of-federation",children:"Benefits of Federation"}),"\n",(0,r.jsx)(n.h4,{id:"microservices-architecture",children:"Microservices Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["GraphQL Federation lets API teams operate in a\n",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith",children:"microservices architecture"}),"\nwhile exposing a unified GraphQL API to clients. Understanding these concepts can help us get the most out of\nfederation."]}),"\n",(0,r.jsx)(n.h4,{id:"preserve-client-simplicity-and-performance",children:"Preserve Client Simplicity and Performance"}),"\n",(0,r.jsx)(n.p,{children:"A client may need to make multiple requests when interacting with multiple non-federated GraphQL APIs. This can happen\nwhen an organization adopting GraphQL has multiple teams developing APIs independently. Each team sets up a GraphQL API\nthat provides the data used by that team. For example, a travel app may have separate GraphQL APIs for users, flights,\nand hotels:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Error loading multiple-graphql-apis.png",src:i(9334).A+"",width:"1093",height:"533"})}),"\n",(0,r.jsx)(n.p,{children:"With a single federated graph, we preserve a powerful advantage of GraphQL over traditional REST APIs: the ability to\nfetch all the data we need in a single request."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Error loading multiple-graphql-apis-federated.png",src:i(9577).A+"",width:"1547",height:"471"})}),"\n",(0,r.jsx)(n.p,{children:"The router intelligently calls all the APIs it needs to complete requests rather than simply forwarding them. For\nperformance and security reasons, clients should only query the router, and only the router should query the constituent\nAPIs. No client-side configuration is required."}),"\n",(0,r.jsx)(n.h4,{id:"design-schemas-at-scale",children:"Design Schemas at Scale"}),"\n",(0,r.jsx)(n.p,{children:"Some alternative approaches to combining GraphQL APIs impose limits on our schema, like adding namespaces or\nrepresenting relationships with IDs instead of types. With these approaches, our individual GraphQL API schemas may look\nunchanged\u2014but the resulting federated schema that clients interact with is more complex. Subsequently, it requires us to\nmake frontend as well as backend changes."}),"\n",(0,r.jsx)(n.p,{children:"With GraphQL Federation, clients can interact with the federated schema as if it were a monolith. Consumers of our API\nshouldn't know or care that it's implemented as microservices."}),"\n",(0,r.jsx)(n.h2,{id:"graphql-federation-in-elide",children:"GraphQL Federation in Elide"}),"\n",(0,r.jsx)(n.p,{children:"Elide supports GraphQL Federation. This feature needs to be enabled to be used."}),"\n",(0,r.jsx)(n.h3,{id:"enabling-graphql-federation",children:"Enabling GraphQL Federation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"elide:\n  graphql:\n    federation:\n      enabled: true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"schema-introspection-queries",children:"Schema Introspection Queries"}),"\n",(0,r.jsxs)(n.p,{children:["When GraphQL Federation is enabled, Elide will respond to enhanced introspection queries with ",(0,r.jsx)(n.code,{children:"Query._service"})," with the\nGraphQL schemas generated by Elide."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query {\n  _service {\n    sdl\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Elide does not have any built in measures to control which clients can execute the introspection queries. These queries\nshould typically be restricted only to the federated graph routers."}),"\n",(0,r.jsx)(n.h3,{id:"implementing-federated-graphs",children:"Implementing Federated Graphs"}),"\n",(0,r.jsx)(n.p,{children:"Elide generates its GraphQL schema programatically and cannot be used to define federated entities."}),"\n",(0,r.jsx)(n.p,{children:"This will need to be done in another subgraph implementation using a different subgraph library, for instance Spring\nGraphQL."}),"\n",(0,r.jsx)(n.h4,{id:"extending-an-elide-entity",children:"Extending an Elide entity"}),"\n",(0,r.jsxs)(n.p,{children:["The Elide entity can be extended with additional entities from the subgraph using the ",(0,r.jsx)(n.code,{children:"@extends"})," directive. The\nconfigurations are done in the subgraph and not in Elide."]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example the ",(0,r.jsx)(n.code,{children:"Group"})," entity from Elide is being extended to provide the additional ",(0,r.jsx)(n.code,{children:"GroupReview"})," entity\nprovided by the subgraph."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'type Group @key(fields: "name") @extends {\n    name: DeferredID! @external\n    groupReviews: [GroupReview!]!\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Note that Elide uses a custom scalar ",(0,r.jsx)(n.code,{children:"DeferredID"})," instead of ",(0,r.jsx)(n.code,{children:"ID"})," which will need to be registered with the subgraph."]}),"\n",(0,r.jsxs)(n.p,{children:["The following query is an example that starts from the ",(0,r.jsx)(n.code,{children:"Group"})," entity on Elide and references the ",(0,r.jsx)(n.code,{children:"GroupReview"})," entity\non the subgraph."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query {\n  group {\n    edges {\n      node {\n        commonName\n        groupReviews {\n          stars\n          text\n        }\n      }\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After the router queries the ",(0,r.jsx)(n.code,{children:"Group"})," entity on Elide, it will also make another query to this subgraph to get the\n",(0,r.jsx)(n.code,{children:"GroupReview"})," entity."]}),"\n",(0,r.jsxs)(n.p,{children:["The router will use the following query on the subgraph to add the additional fields of ",(0,r.jsx)(n.code,{children:"GroupReview"})," to the ",(0,r.jsx)(n.code,{children:"Group"}),"\nentity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'query {\n  _entities(representations: [{__typename: "Group", name: "com.paiondata.elide"}]) {\n    ... on Group {\n      stars\n      text\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"For Spring GraphQL the representations can be configured as shown below."}),"\n",(0,r.jsxs)(n.p,{children:["The mapping for the representations to the ",(0,r.jsx)(n.code,{children:"Group"})," is configured in the entity data fetcher for instance in\n",(0,r.jsx)(n.code,{children:"com.example.reviews.config.GraphQLConfiguration"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'DataFetcher<?> entityDataFetcher = env -> {\n  List<Map<String, Object>> representations = env.getArgument(_Entity.argumentName);\n  return representations.stream().map(representation -> {\n    // Assume only a single id key and no composite keys\n    String idKey = representation.keySet().stream().filter(key -> !"__typename".equals(key)).findFirst()\n        .orElse(null);\n    String id = (String) representation.get(idKey);\n    if (GROUP_TYPE.equals(representation.get("__typename"))) {\n      return new Group(id);\n    }\n    return null;\n  }).toList();\n};\n'})}),"\n",(0,r.jsx)(n.h4,{id:"including-elide-entities",children:"Including Elide entities"}),"\n",(0,r.jsxs)(n.p,{children:["The subgraph entity can include Elide entities as Elide supports the ",(0,r.jsx)(n.code,{children:"@key"})," directive. The following is the schema that\nElide generates for the ",(0,r.jsx)(n.code,{children:"Group"})," entity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'type Group @key(fields : "name") {\n  commonName: String\n  description: String\n  name: DeferredID\n  products(after: String, data: [ProductInput], filter: String, first: String, ids: [String], op: ElideRelationshipOp = FETCH, sort: String): ProductConnection\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The following is the schema of ",(0,r.jsx)(n.code,{children:"GroupReview"})," on the subgraph."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type GroupReview {\n    id: ID!,\n    text: String\n    stars: Int!\n    group: Group\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The following query is an example that starts from the ",(0,r.jsx)(n.code,{children:"GroupReview"})," entity on subgraph and references the ",(0,r.jsx)(n.code,{children:"Group"}),"\nentity on Elide."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query {\n  groupReviews {\n    id\n    stars\n    text\n    group {\n      name\n      commonName\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After calling to retrieve the ",(0,r.jsx)(n.code,{children:"GroupReview"})," entites on the subgraph, the router calls Elide with the following query."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'query {\n  _entities(representations: [{__typename: "Group", name: "com.paiondata.elide"}]) {\n    ... on Group {\n      name\n      commonName\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Elide will determine the projection in ",(0,r.jsx)(n.code,{children:"GraphQLEntityProjectionMaker"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"EntitiesDataFetcher"})," will fetch a list of ",(0,r.jsx)(n.code,{children:"NodeContainer"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class EntitiesDataFetcher implements DataFetcher<List<NodeContainer>> {\n\n    ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"EntityTypeResolver"})," will map the ",(0,r.jsx)(n.code,{children:"NodeContainer"})," to the appropriate ",(0,r.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"defining-the-deferredid-scalar",children:"Defining the DeferredID scalar"}),"\n",(0,r.jsxs)(n.p,{children:["Elide uses a custom scalar ",(0,r.jsx)(n.code,{children:"DeferredID"})," instead of ",(0,r.jsx)(n.code,{children:"ID"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This needs to be registered with the subgraph implementation."}),"\n",(0,r.jsx)(n.p,{children:"The following is the schema definition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"scalar DeferredID\n"})}),"\n",(0,r.jsx)(n.p,{children:"For Spring GraphQL this can be configured as shown below."}),"\n",(0,r.jsxs)(n.p,{children:["The following is the Java code for the ",(0,r.jsx)(n.code,{children:"GraphQLScalarType"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class GraphQLScalars {\n  public static GraphQLScalarType DEFERRED_ID = GraphQLScalarType.newScalar().name("DeferredID")\n      .description("The DeferredID scalar type represents a unique identifier.")\n      .coercing(new Coercing<Object, String>() {\n        @Override\n        public String serialize(Object o) {\n          return o.toString();\n        }\n\n        @Override\n        public String parseValue(Object o) {\n          return o.toString();\n        }\n\n        @Override\n        public String parseLiteral(Object o) {\n          if (o instanceof StringValue stringValue) {\n            return stringValue.getValue();\n          }\n          if (o instanceof IntValue intValue) {\n            return intValue.getValue().toString();\n          }\n          return o.toString();\n        }\n      }).build();\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The following is the Java code for registering the scalar in ",(0,r.jsx)(n.code,{children:"GraphQLConfiguration"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Bean\npublic GraphQlSourceBuilderCustomizer graphqlSourceBuilderCustomizer() {\n  return schemaResourceBuilder -> schemaResourceBuilder\n    .configureRuntimeWiring(runtimeWiring -> runtimeWiring.scalar(GraphQLScalars.DEFERRED_ID));\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7509:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/graphql-federation-fb3533e53b8b63a827db1a85b545f831.png"},9577:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/multiple-graphql-apis-federated-88b0b595c3ea4fa54bfafd5cd744f8ea.png"},9334:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/multiple-graphql-apis-0b524dcb2e19bba1bbaf4bf563f20876.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);