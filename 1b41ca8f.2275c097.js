(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),c=n(9),a=(n(0),n(171)),s={id:"routes",title:"Routes"},o={id:"api/routes",title:"Routes",description:"Healthcheck:",source:"@site/docs/api/routes.md",permalink:"/docs/api/routes",sidebar:"docs",previous:{title:"Accessing interal repositories",permalink:"/docs/guides/accessing-internal-repositories"},next:{title:"Environment Variables",permalink:"/docs/api/env-vars"}},i=[],l={rightToc:i};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("a",{name:"top"}),Object(a.b)("p",null,"Healthcheck:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#gethealthcheck"}),Object(a.b)("inlineCode",{parentName:"a"},"GET /healthcheck"))," : returns API health status")),Object(a.b)("p",null,"Version:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#getversion"}),Object(a.b)("inlineCode",{parentName:"a"},"GET /version"))," : returns API version")),Object(a.b)("p",null,"Analysis:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#getanalysisid"}),Object(a.b)("inlineCode",{parentName:"a"},"GET /analysis/:id"))," : gets an analysis given its ",Object(a.b)("inlineCode",{parentName:"li"},"id")," (RID)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#postanalysis"}),Object(a.b)("inlineCode",{parentName:"a"},"POST /analysis"))," : creates a new analysis")),Object(a.b)("p",null,"SecurityTest:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#postsecuritytest"}),Object(a.b)("inlineCode",{parentName:"a"},"POST /securitytest"))," : creates a new security test")),Object(a.b)("p",null,"Repository:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#postrepository"}),Object(a.b)("inlineCode",{parentName:"a"},"POST /repository"))," : creates a new repository")),Object(a.b)("hr",null),Object(a.b)("a",{name:"gethealthcheck"}),Object(a.b)("h4",{id:"get-healthckeck"},"GET /healthckeck"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -i localhost:8888/healthcheck\n")),Object(a.b)("p",null,"200 OK"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"WORKING\n")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null),Object(a.b)("a",{name:"getversion"}),Object(a.b)("h4",{id:"get-version"},"GET /version"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -i localhost:8888/version\n")),Object(a.b)("p",null,"200 OK"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "date":"2019-04-05",\n    "version":"0.1.2"\n}\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null),Object(a.b)("a",{name:"getanalysisid"}),Object(a.b)("h4",{id:"get-analysisid"},"GET /analysis/:id"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -i localhost:8888/analysis/Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J\n")),Object(a.b)("p",null,"200 OK"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "RID": "Ym3CjUl3H9nfaHbhaeXuEz7ILBtXiP0J",\n  "repositoryURL": "https://github.com/globocom/huskyCI.git",\n  "repositoryBranch": "poc-golang-gosec",\n  "commitAuthors": [\n    "husky_test@example.com"\n  ],\n  "status": "finished",\n  "result": "failed",\n  "errorFound": "",\n  "containers": [\n    {\n      "CID": "db850be381bf1dd27a63b8a16ea807d53faa4e1edfe21c8c115e421f806e75c1",\n      "securityTest": {\n        "name": "gitauthors",\n        "image": "huskyci/gitauthors",\n        "imageTag": "2.18.1",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ngit clone %GIT_REPO% code --quiet 2> /tmp/errorGitCloneEnry\\ncd code\\ngit checkout %GIT_BRANCH% --quiet\\nif [ $? -eq 0 ]; then\\n  for i in $(git log origin/master.. --pretty=\\"%ae\\" | sort -u); do\\n    jsonMiddle=\\"\\\\\\"$i\\\\\\",$jsonMiddle\\"\\n  done\\n  length=${#jsonMiddle}\\n  endindex=$(expr $length - 1)\\n  authors=\\"${jsonMiddle:0:$endindex}\\"\\n  echo \\"{\\\\\\"authors\\\\\\":[$authors]}\\"\\nelse\\n  echo \\"ERROR_CLONING\\"\\n  cat /tmp/errorGitCloneEnry\\nfi\\n",\n        "type": "Generic",\n        "language": "",\n        "default": true,\n        "timeOutSeconds": 60\n      },\n      "cStatus": "finished",\n      "cOutput": "{\\"authors\\":[\\"husky_test@example.com\\"]}\\r\\n",\n      "cResult": "passed",\n      "cInfo": "No issues found.",\n      "startedAt": "2019-12-11T17:06:42.404Z",\n      "finishedAt": "2019-12-11T17:07:58.622Z"\n    },\n    {\n      "CID": "2f873c5516fa58a30624ccaca3a86566b69dff7fa60d5bda1093875202891fb9",\n      "securityTest": {\n        "name": "gitleaks",\n        "image": "huskyci/gitleaks",\n        "imageTag": "2.1.0",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGitleaks\\nif [ $? -eq 0 ]; then\\n    touch /tmp/results.json\\n    $(which gitleaks) --log=warn --report=/tmp/results.json --repo-path=./code --repo-config > /tmp/errorGitleaks\\n    if [ $? -eq 2 ]; then\\n        echo -n \'ERROR_RUNNING_GITLEAKS\'\\n        cat /tmp/errorGitleaks\\n    else\\n        jq -j -M -c . /tmp/results.json\\n    fi\\nelse\\n    echo \\"ERROR_CLONING\\"\\n    cat /tmp/errorGitCloneGitleaks\\nfi\\n",\n        "type": "Generic",\n        "language": "",\n        "default": true,\n        "timeOutSeconds": 360\n      },\n      "cStatus": "finished",\n      "cOutput": "",\n      "cResult": "passed",\n      "cInfo": "No issues found.",\n      "startedAt": "2019-12-11T17:06:42.399Z",\n      "finishedAt": "2019-12-11T17:08:04.681Z"\n    },\n    {\n      "CID": "8eda196517b06aad3e935f2a4db06ca0562db120ec354138a64054360f0bf1d5",\n      "securityTest": {\n        "name": "gosec",\n        "image": "huskyci/gosec",\n        "imageTag": "v2.1.0",\n        "cmd": "mkdir -p ~/.ssh &&\\necho \'GIT_PRIVATE_SSH_KEY\' > ~/.ssh/huskyci_id_rsa &&\\nchmod 600 ~/.ssh/huskyci_id_rsa &&\\necho \\"IdentityFile ~/.ssh/huskyci_id_rsa\\" >> /etc/ssh/ssh_config &&\\necho \\"StrictHostKeyChecking no\\" >> /etc/ssh/ssh_config &&\\ncd src\\ngit clone -b %GIT_BRANCH% --single-branch %GIT_REPO% code --quiet 2> /tmp/errorGitCloneGosec\\nif [ $? -eq 0 ]; then\\n  cd code\\n  touch results.json\\n  $(which gosec) -quiet -fmt=json -log=log.txt -out=results.json ./... 2> /dev/null\\n  jq -j -M -c . results.json\\nelse\\n  echo \\"ERROR_CLONING\\"\\n  cat /tmp/errorGitCloneGosec\\nfi\\n",\n        "type": "Language",\n        "language": "Go",\n        "default": true,\n        "timeOutSeconds": 360\n      },\n      "cStatus": "finished",\n      "cOutput": "{\\"Golang errors\\":{\\"/go/src/code/api/server.go\\":[{\\"line\\":20,\\"column\\":42,\\"error\\":\\"Healthcheck not declared by package routes\\"}]},\\"Issues\\":[{\\"severity\\":\\"MEDIUM\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G501\\",\\"details\\":\\"Blacklisted import crypto/md5: weak cryptographic primitive\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"\\\\\\"crypto/md5\\\\\\"\\",\\"line\\":\\"4\\"},{\\"severity\\":\\"MEDIUM\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G401\\",\\"details\\":\\"Use of weak cryptographic primitive\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"md5.New()\\",\\"line\\":\\"23\\"},{\\"severity\\":\\"LOW\\",\\"confidence\\":\\"HIGH\\",\\"rule_id\\":\\"G104\\",\\"details\\":\\"Errors unhandled.\\",\\"file\\":\\"/go/src/code/api/util/util.go\\",\\"code\\":\\"io.WriteString(h, s)\\",\\"line\\":\\"24\\"}],\\"Stats\\":{\\"files\\":3,\\"lines\\":68,\\"nosec\\":0,\\"found\\":3}}",\n      "cResult": "failed",\n      "cInfo": "Issues found.",\n      "startedAt": "2019-12-11T17:06:42.4Z",\n      "finishedAt": "2019-12-11T17:10:36.036Z"\n    }\n  ],\n  "startedAt": "2019-12-11T17:06:07.359Z",\n  "finishedAt": "2019-12-11T17:10:36.036Z",\n  "codes": [\n    {\n      "language": "Go",\n      "files": [\n        "api/routes/healthcheck.go",\n        "api/server.go",\n        "api/util/util.go",\n        "api/util/util_suite_test.go",\n        "api/util/util_test.go"\n      ]\n    }\n  ],\n  "huskyciresults": {\n    "goresults": {\n      "gosecoutput": {\n        "lowvulns": [\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "LOW",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "24",\n            "code": "io.WriteString(h, s)",\n            "details": "Errors unhandled."\n          }\n        ],\n        "mediumvulns": [\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "MEDIUM",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "4",\n            "code": "\\"crypto/md5\\"",\n            "details": "Blacklisted import crypto/md5: weak cryptographic primitive"\n          },\n          {\n            "language": "Go",\n            "securitytool": "GoSec",\n            "severity": "MEDIUM",\n            "confidence": "HIGH",\n            "file": "/go/src/code/api/util/util.go",\n            "line": "23",\n            "code": "md5.New()",\n            "details": "Use of weak cryptographic primitive"\n          }\n        ]\n      }\n    },\n    "pythonresults": {\n      "banditoutput": {},\n      "safetyoutput": {}\n    },\n    "javascriptresults": {\n      "npmauditoutput": {},\n      "yarnauditoutput": {}\n    },\n    "rubyresults": {\n      "brakemanoutput": {}\n    },\n    "javaresults": {\n      "spotbugsoutput": {}\n    },\n    "genericresults": {\n      "gitleaksoutput": {}\n    }\n  }\n}\n')),Object(a.b)("p",null,"400 Bad Request"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid RID","success":false}\n')),Object(a.b)("p",null,"404 Not Found"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"analysis not found","success":false}\n')),Object(a.b)("p",null,"500 Internal Server Error"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"internal error","success":false}\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null),Object(a.b)("a",{name:"postanalysis"}),Object(a.b)("h4",{id:"post-analysis"},"POST /analysis"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -i -H "Content-Type: application/json" -d \'{"repositoryURL":"https://github.com/globocom/huskyCI.git","repositoryBranch":"master"}\' http://localhost:8888/analysis\n')),Object(a.b)("p",null,"201 Created"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"none","success":true}\n')),Object(a.b)("p",null,"400 Bad Request"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid repository JSON","success":false}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid repository URL","success":false}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid repository branch","success":false}\n')),Object(a.b)("p",null,"409 Conflict"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"an analysis is already in place for this URL and branch","success":false}\n')),Object(a.b)("p",null,"500 Internal Server Error"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"internal error","success":false}\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null),Object(a.b)("a",{name:"postsecuritytest"}),Object(a.b)("h4",{id:"post-securitytest"},"POST /securitytest"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -i -H "Content-Type: application/json" -d \'{"name":"newSecTest", "image":"huskyci/new","cmd":"whoami", "language":"JavaScript", "default":true, "timeOutSecods":60}\' http://localhost:8888/securitytest\n')),Object(a.b)("p",null,"201 Created"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"none","success":true}\n')),Object(a.b)("p",null,"400 Bad Request"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid security test JSON","success":false}\n')),Object(a.b)("p",null,"409 Conflict"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"this security test is already registered","success":false}\n')),Object(a.b)("p",null,"500 Internal Server Error"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"internal error","success":false}\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null),Object(a.b)("a",{name:"postrepository"}),Object(a.b)("h4",{id:"post-repository"},"POST /repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -i -H "Content-Type: application/json" -d \'{"repositoryURL":"https://github.com/globocom/huskyCI2", "repositoryBranch":"master"}\' http://localhost:8888/repository\n')),Object(a.b)("p",null,"201 Created"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"none","success":true}\n')),Object(a.b)("p",null,"400 Bad Request"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"invalid repository JSON","success":false}\n')),Object(a.b)("p",null,"409 Conflict"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"this repository is already registered","success":false}\n')),Object(a.b)("p",null,"500 Internal Server Error"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{"error":"internal error","success":false}\n')),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#top"}),"^")),Object(a.b)("hr",null))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),b=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return n?c.a.createElement(O,o(o({ref:t},l),{},{components:n})):c.a.createElement(O,o({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);