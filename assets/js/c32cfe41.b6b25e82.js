"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1574],{1820:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(5893),n=s(1151);const a={slug:"restassured-json",title:"(RestAssured) Match JSON Ignoring Order",authors:"jiaqi",tags:["Java","Testing"]},o=void 0,i={permalink:"/jersey-webservice-template/blog/restassured-json",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2023-04-21-restassured-json.md",source:"@site/blog/2023-04-21-restassured-json.md",title:"(RestAssured) Match JSON Ignoring Order",description:"[//]: # (Copyright Jiaqi Liu)",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"Java",permalink:"/jersey-webservice-template/blog/tags/java"},{label:"Testing",permalink:"/jersey-webservice-template/blog/tags/testing"}],readingTime:.725,hasTruncateMarker:!1,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"restassured-json",title:"(RestAssured) Match JSON Ignoring Order",authors:"jiaqi",tags:["Java","Testing"]},unlisted:!1,nextItem:{title:"Provider v.s. @Provider",permalink:"/jersey-webservice-template/blog/provider"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use RestAssured's JsonPath to parse the JSON file into a Map and then compare it with Hamcrest Matchers. This way the\norder didn't matter."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static org.hamcrest.Matchers.equalTo;\nimport io.restassured.path.json.JsonPath;\n\n...\n\nJsonPath expectedJson = new JsonPath(new File("/path/to/expected.json"));\n\ngiven()\n    ...\n    .then()\n    .body("", equalTo(expectedJson.getMap("")));\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var r=s(7294);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);