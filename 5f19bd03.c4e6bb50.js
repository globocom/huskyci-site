(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(171)),i={id:"overview",title:"Overview"},c={id:"quickstart/overview",title:"Overview",description:"huskyCI is an open-source tool that orchestrates security tests inside CI pipelines of multiple projects and centralizes all results into a database for further analysis and metrics.",source:"@site/docs/quickstart/overview.md",permalink:"/docs/quickstart/overview",sidebar:"docs",previous:{title:"About the Documentation",permalink:"/docs/welcome/about"},next:{title:"Adding the huskyCI stage",permalink:"/docs/quickstart/setup-my-ci"}},s=[{value:"How does it work?",id:"how-does-it-work",children:[]}],u={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"huskyCI is an open-source tool that orchestrates security tests inside CI pipelines of multiple projects and centralizes all results into a database for further analysis and metrics."),Object(o.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(o.b)("p",null,"The main goal of this project is to help development teams improve the quality of their code by finding vulnerabilities as quickly as possible, and thus addressing them."),Object(o.b)("p",null,"huskyCI can perform static security analysis in Python (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/PyCQA/bandit"}),"Bandit")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pyupio/safety"}),"Safety"),"), Ruby (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/presidentbeef/brakeman"}),"Brakeman"),"), JavaScript (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/audit"}),"Npm Audit")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/cli/audit/"}),"Yarn Audit"),"), Golang (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/securego/gosec"}),"Gosec"),"), and Java(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://spotbugs.github.io"}),"SpotBugs")," plus ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://find-sec-bugs.github.io"}),"Find Sec Bugs"),"). It can also audit repositories for secrets like AWS Secret Keys, Private SSH Keys, and many others using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zricethezav/gitleaks"}),"GitLeaks"),". You should check our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/globocom/huskyCI/wiki/How-does-huskyCI-work%3F"}),"wiki")," to better understand how this tool could help securing your organization projects!"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://github.com/globocom/huskyCI/raw/master/huskyCI.gif"})))}p.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,h=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(h,c(c({ref:t},u),{},{components:r})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);