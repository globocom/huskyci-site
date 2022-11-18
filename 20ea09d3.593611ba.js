(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),a=(n(0),n(171)),c=(n(166),{id:"setup-my-ci",title:"Adding the huskyCI stage"}),o={id:"quickstart/setup-my-ci",title:"Adding the huskyCI stage",description:"Using huskyCI is simple. Your stage script only needs to download and execute a binary (written in Go) called huskyci-client. This client will perform several requests to huskyCI's API and act like a worker, regularly checking if all security tests have already finished and printing the results found to STDOUT.",source:"@site/docs/quickstart/setup-my-ci.md",permalink:"/docs/quickstart/setup-my-ci",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/quickstart/overview"},next:{title:"Installing in my organization",permalink:"/docs/guides/install-in-my-org"}},l=[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"GitLab CI/CD | GitLab",id:"gitlab-cicd--gitlab",children:[{value:"Useful Tips",id:"useful-tips",children:[]},{value:"Code Example",id:"code-example",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",{align:"center"}," ",Object(a.b)("img",{src:"/img/huskyci-stage.png",scale:"10"})),Object(a.b)("p",null,"Using huskyCI is simple. Your stage script only needs to download and execute a binary (written in Go) called ",Object(a.b)("inlineCode",{parentName:"p"},"huskyci-client"),". This client will perform several requests to huskyCI's API and act like a worker, regularly checking if all security tests have already finished and printing the results found to STDOUT."),Object(a.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(a.b)("p",null,"The following environment variables must be set so that ",Object(a.b)("inlineCode",{parentName:"p"},"huskyci-client")," can properly communicate with the API:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HUSKYCI_CLIENT_REPO_URL")," - The repository address of the project being tested."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HUSKYCI_CLIENT_REPO_BRANCH")," - The name of the branch being tested. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HUSKYCI_CLIENT_API_ADDR")," - The address of where the API is waiting for the ",Object(a.b)("inlineCode",{parentName:"li"},"huskyci-client")," to connect."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HUSKYCI_CLIENT_API_USE_HTTPS")," - A boolean value to define if HTTPS is being used or not."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HUSKYCI_CLIENT_TOKEN")," - Token authorization to check if that CI is allowed to perform tests.")),Object(a.b)("h2",{id:"gitlab-cicd--gitlab"},"GitLab CI/CD | GitLab"),Object(a.b)("p",null,"It is highly recommended not hardcoding huskyCI environment variables into your ",Object(a.b)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file. The best option is using GUI interface and mannually add them as follows:"),Object(a.b)("p",{align:"center"}," ",Object(a.b)("img",{src:"/img/gitlab-env-vars.png",scale:"10"})),Object(a.b)("h3",{id:"useful-tips"},"Useful Tips"),Object(a.b)("p",null,"When setting up a stage in Gitlab CI/CD, there are a few interesting environment variables that can be used to help ",Object(a.b)("inlineCode",{parentName:"p"},"huskyci-client")," properly scan a particular branch (",Object(a.b)("inlineCode",{parentName:"p"},"$CI_COMMIT_REF_NAME"),") and repository (",Object(a.b)("inlineCode",{parentName:"p"},"$CI_PROJECT_PATH"),"). If you would like to check all these variables you should check the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"}),"official Gitlab documentation"),". "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"HUSKYCI_CLIENT_REPO_URL: gitlab@gitlab.myorg.com:$CI_PROJECT_PATH.git\nHUSKYCI_CLIENT_REPO_BRANCH: $CI_COMMIT_REF_NAME\n")),Object(a.b)("h3",{id:"code-example"},"Code Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"stages:\n    - huskyCI\n\nhuskyCI:\n    stage: huskyCI\n    script:\n        - wget $HUSKYCI_CLIENT_URL/huskyci-client\n        - chmod +x huskyci-client\n        - ./huskyci-client\n")))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";var r=n(0),i=n(50);t.a=function(){return Object(r.useContext)(i.a)}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(168);var r=n(165);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},168:function(e,t,n){"use strict";var r=n(17),i=n(35),a=n(169),c="".startsWith;r(r.P+r.F*n(170)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},169:function(e,t,n){var r=n(70),i=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},170:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);