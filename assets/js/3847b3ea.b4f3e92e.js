"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,title:"Setup"},o=void 0,l={unversionedId:"setup",id:"setup",title:"Setup",description:"This section discusses the one-time setup in order to develop [Jersey Webservice Template].",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/jersey-webservice-template/docs/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Jersey Webservice Template Documentation",permalink:"/jersey-webservice-template/docs/intro"},next:{title:"Development",permalink:"/jersey-webservice-template/docs/development"}},s={},p=[{value:"Prepare for Local Development",id:"prepare-for-local-development",level:2},{value:"Installing Java &amp; Maven (on Mac)",id:"installing-java--maven-on-mac",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Getting Source Code",id:"getting-source-code",level:2},{value:"Syncing up with jersey-webservice-template&#39;s Code Styles with IntelliJ",id:"syncing-up-with-jersey-webservice-templates-code-styles-with-intellij",level:3},{value:"Modifying Templates",id:"modifying-templates",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section discusses the one-time setup in order to develop ",(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/jersey-webservice-template/"},"Jersey Webservice Template"),"."),(0,a.kt)("h2",{id:"prepare-for-local-development"},"Prepare for Local Development"),(0,a.kt)("h3",{id:"installing-java--maven-on-mac"},"Installing Java & Maven (on Mac)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install openjdk@17\n")),(0,a.kt)("p",null,"At the end of the last command prompt, something like the below will show up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n')),(0,a.kt)("p",null,"Make sure to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ln -sfn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"echo 'export PATH=..."),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"export CPPFLAGS=")," commands above"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Maven uses a separate JDK version, which can be seen via ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn -v"),". If it's not JDK 17, we should have Maven point\nto our JDK 17 using ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/2503679"},"JAVA_HOME"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"))),(0,a.kt)("p",null,"If we see something similar after typing the command with the version flag below we're good to go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n")),(0,a.kt)("h3",{id:"installing-docker-engine"},"Installing Docker Engine"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/jersey-webservice-template/"},"Jersey Webservice Template")," has ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy"},"Docker-based integration tests"),";\nit also supports ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/Dockerfile"},"running template webserivce in Docker"),". Docker can be\ninstalled by following its ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/mac-install/"},"official instructions")),(0,a.kt)("h2",{id:"getting-source-code"},"Getting Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:QubitPi/jersey-webservice-template.git\ncd jersey-webservice-template\n")),(0,a.kt)("h3",{id:"syncing-up-with-jersey-webservice-templates-code-styles-with-intellij"},"Syncing up with jersey-webservice-template's Code Styles with IntelliJ"),(0,a.kt)("p",null,"For the moment, we have distilled the most important code style conventions with respect to\njersey-webservice-template's code as IntelliJ settings. If IntelliJ is used for IDE, we may import these code style\nsettings by importing the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/jersey-webservice-template-Project-intellij-code-style.xml"},"jersey-webservice-template-Project-intellij-code-style.xml"),' file in the root\nof the repo. The setting for the project will appear as a new Scheme named "jersey-webservice-template-Project" under\nIDE\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"Editor -> Code Style")," section."),(0,a.kt)("h2",{id:"modifying-templates"},"Modifying Templates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup ",(0,a.kt)("a",{parentName:"li",href:"ci-cd"},"CI/CD"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Renaming ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," package"),(0,a.kt)("li",{parentName:"ol"},"Setup SonarCloud Project and replace all ",(0,a.kt)("inlineCode",{parentName:"li"},"QubitPi_jersey-webservice-template")," with project ID accordingly"),(0,a.kt)("li",{parentName:"ol"},"Update links by replacing all ",(0,a.kt)("inlineCode",{parentName:"li"},"jersey-webservice-template"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Jersey Webservice Template"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"QubitPi")," (including\ncases) accordingly"),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/application/ResourceConfig.java"},"endpoint package")," accordingly"),(0,a.kt)("li",{parentName:"ol"},'Update Copyright holder "Jiaqi Liu"')))}d.isMDXComponent=!0}}]);