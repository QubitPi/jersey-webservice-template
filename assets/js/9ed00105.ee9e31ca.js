"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9004],{8373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(5893),n=r(1151);r(4866),r(5162);const i={sidebar_position:7,title:"Configuration"},a=void 0,o={id:"configuration",title:"Configuration",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/jersey-webservice-template/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/configuration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/jersey-webservice-template/docs/security"},next:{title:"Setting Up Sentry.io",permalink:"/jersey-webservice-template/docs/sentry"}},c={},l=[{value:"OAuth 2",id:"oauth-2",level:2},{value:"CI/CD",id:"cicd",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The configurations in this page can be set from several sources in the following order:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html",children:"operating system's environment variables"}),"; for instance, an environment variable can be set with\n",(0,s.jsx)(t.code,{children:'export OAUTH_ENABLED="true"'})]}),"\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html",children:"Java system properties"}),"; for example, a Java system property can be set using\n",(0,s.jsx)(t.code,{children:'System.setProperty("OAUTH_ENABLED", "true")'})]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.strong,{children:".properties"})," file placed under CLASSPATH. This file can be put under ",(0,s.jsx)(t.code,{children:"src/main/resources"})," source directory with\ncontents, for example, ",(0,s.jsx)(t.code,{children:"OAUTH_ENABLED=true"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Note that environment config has higher priority than Java system properties. Java system properties have higher\npriority than file based configuration."}),"\n",(0,s.jsx)(t.h2,{id:"oauth-2",children:"OAuth 2"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The following configurations can be placed in the properties file called ",(0,s.jsx)(t.strong,{children:"src/main/resources/oauth.properties"})]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OAUTH_ENABLED"}),": Whether or not to enable ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/jersey-webservice-template/apidocs/com/qubitpi/ws/jersey/template/web/filters/OAuthFilter.html",children:"OAuthFilter"})," container request filter."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JWKS_URL"}),": (",(0,s.jsxs)(t.strong,{children:["Required if ",(0,s.jsx)(t.code,{children:"OAUTH_ENABLED"})," is set to ",(0,s.jsx)(t.code,{children:"true"})]}),") A standard ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWKS"})," URL that, on GET, returns a json\nobject such as"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "keys": [\n        {\n            "kty": "EC",\n            "use": "sig",\n            "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",\n            "alg": "ES384",\n            "crv": "P-384",\n            "x": "sdfrgHGYF...",\n            "y": "sdfuUIG&8..."\n        }\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,s.jsxs)(t.p,{children:["The following ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",children:"GitHub Action Secrets"})," needs to be setup:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Secret Name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Definition"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"How to Get"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DOCKERHUB_USERNAME"}),(0,s.jsx)(t.td,{children:"You Docker Hub username"}),(0,s.jsxs)(t.td,{children:["For example, ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/u/jack20191124",children:"this user"}),"'s is ",(0,s.jsx)(t.code,{children:"jack20191124"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DOCKERHUB_TOKEN"}),(0,s.jsx)(t.td,{children:"A personal access token (PAT) to use as an Docker CLI authentication from within GitHub Action"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.docker.com/security/for-developers/access-tokens/#create-an-access-token",children:"Creating an access token"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS_WS_PKRVARS_HCL"}),(0,s.jsxs)(t.td,{children:["The HashiCorp Packer variable ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"values file"})," contents"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/webservice",children:"hashicorp-aws"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSL_CERTIFICATE"}),(0,s.jsx)(t.td,{children:"SSL cert file for exposing webservice API via secure HTTPS"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets",children:"Installing Free SSL Certificates with Certbot running on Nginx"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSL_CERTIFICATE_KEY"}),(0,s.jsx)(t.td,{children:"SSL cert key file for exposing webservice API via secure HTTPS"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#step-1---store-ssl-certificate-in-github-secrets",children:"Installing Free SSL Certificates with Certbot running on Nginx"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NGINX_CONFIG_FILE"}),(0,s.jsx)(t.td,{children:"Config file for Nginx as a HTTPS reverse proxy"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#step-3---define-nginx-reverse-proxy-config-file",children:"Define Nginx Reverse Proxy Config File"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS_WS_TFVARS"}),(0,s.jsxs)(t.td,{children:["The HashiCorp Terraform variable ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"values file"})," contents"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/webservice",children:"hashicorp-aws"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MAVEN_SETTINGS_XML"}),(0,s.jsxs)(t.td,{children:["A ",(0,s.jsx)(t.a,{href:"https://maven.apache.org/settings.html",children:"Maven settings file"})," for the Webservice project"]}),(0,s.jsxs)(t.td,{children:["The exact settings.xml contents containing ",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/settings.xml.example",children:"these meta tags"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OAUTH_PROPERTIES"}),(0,s.jsxs)(t.td,{children:["The contents of the ",(0,s.jsx)(t.code,{children:"src/main/resources/oauth.properties"})," mentioned above"]}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"#oauth-2",children:"Security"})," section above"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS_ACCESS_KEY_ID"}),(0,s.jsxs)(t.td,{children:["The exact same AWS_ACCESS_KEY_ID as mentioned in ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"Environment variables to configure the AWS CLI"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html",children:"How to create and configure AWS credentials for Amazon Keyspaces"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS_SECRET_ACCESS_KEY"}),(0,s.jsxs)(t.td,{children:["The exact same AWS_SECRET_ACCESS_KEY as mentioned in ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"Environment variables to configure the AWS CLI"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html",children:"How to create and configure AWS credentials for Amazon Keyspaces"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS_REGION"}),(0,s.jsxs)(t.td,{children:["The exact same AWS_REGION as mentioned in ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"Environment variables to configure the AWS CLI"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.html",children:"How to create and configure AWS credentials for Amazon Keyspaces"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>a});r(7294);var s=r(6010);const n={tabItem:"tabItem_Ymn6"};var i=r(5893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,a),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(7294),n=r(6010),i=r(2466),a=r(6550),o=r(469),c=r(1980),l=r(7392),d=r(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=u(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[l,h]=f({queryString:r,groupId:n}),[x,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),j=(()=>{const e=l??x;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(5893);function g(e){let{className:t,block:r,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=o[r].value;n!==s&&(l(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,n.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,b.jsx)(S,{...e,children:h(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(7294);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);