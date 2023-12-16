"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3545],{9202:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(5893),r=s(1151);const o={slug:"put-vs-post",title:"PUT v.s. POST",authors:"jiaqi",tags:["Webservice"]},a=void 0,i={permalink:"/jersey-webservice-template/blog/put-vs-post",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2021-04-25-put-vs-post.md",source:"@site/blog/2021-04-25-put-vs-post.md",title:"PUT v.s. POST",description:"[//]: # (Copyright Jiaqi Liu)",date:"2021-04-25T00:00:00.000Z",formattedDate:"April 25, 2021",tags:[{label:"Webservice",permalink:"/jersey-webservice-template/blog/tags/webservice"}],readingTime:1.265,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"put-vs-post",title:"PUT v.s. POST",authors:"jiaqi",tags:["Webservice"]},unlisted:!1,prevItem:{title:"Java 8 Stream",permalink:"/jersey-webservice-template/blog/java-stream"},nextItem:{title:"JQPL",permalink:"/jersey-webservice-template/blog/jpql"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We should choose between PUT and POST based on ",(0,n.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Idempotent",children:"idempotence"})," of the action."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"PUT"})," implies putting a resource - completely replacing whatever is available at the given URL with a different thing.\nBy definition, a PUT is idempotent. Do it as many times as you like, and the result is the same. ",(0,n.jsx)(t.code,{children:"x=5"})," is idempotent.\nYou can PUT a resource whether it previously exists, or not (eg, to Create, or to Update)!"]}),"\n",(0,n.jsxs)(t.p,{children:["**POST updates a resource, adds a subsidiary resource, or causes a change. A POST is not idempotent, in the way that\n",(0,n.jsx)(t.code,{children:"x++"})," is not idempotent."]}),"\n",(0,n.jsx)(t.p,{children:'By this argument, PUT is for creating when you know the URL of the thing you will create. POST can be used to create\nwhen you know the URL of the "factory" or manager for the category of things you want to create.'}),"\n",(0,n.jsx)(t.p,{children:"so:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"POST /expense-report\n"})}),"\n",(0,n.jsx)(t.p,{children:"or:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"PUT /expense-report/10929\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>a});var n=s(7294);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);