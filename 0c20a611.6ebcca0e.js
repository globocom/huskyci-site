/*! For license information please see 0c20a611.6ebcca0e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,18],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(0),a=n.n(r),i=n(166),l=n(167),s=n.n(l),c=n(126),u=n.n(c);function o(e){var t=e.imageUrl,n=e.title,r=e.description,l=Object(i.a)(t);return a.a.createElement("div",{className:s()("text--center col col--4",u.a.feature)},l&&a.a.createElement("div",null,a.a.createElement("img",{className:u.a.featureImage,src:l,alt:n})),a.a.createElement("h3",null,n),a.a.createElement("p",null,r))}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(2),a=n(0),i=n.n(a),l=n(167),s=n.n(l),c=n(126),u=n.n(c),o=n(127),m=[{title:i.a.createElement(i.a.Fragment,null,"Vulnerabilities"),imageUrl:"img/undraw_bug_fixing_oc7a.svg",description:i.a.createElement(i.a.Fragment,null,"Run security tests in multiple languages to find issues before the deployment.")},{title:i.a.createElement(i.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_web_developer_p3e5.svg",description:i.a.createElement(i.a.Fragment,null,"Add a simple stage into your pipeline and huskyCI will find which security tests better suit the repository.")},{title:i.a.createElement(i.a.Fragment,null,"Extensible"),imageUrl:"img/undraw_logistics_x4dc.svg",description:i.a.createElement(i.a.Fragment,null,"Create your own security test and add it into huskyCI.")},{title:i.a.createElement(i.a.Fragment,null,"Open Source"),imageUrl:"img/undraw_version_control_9bpv.svg",description:i.a.createElement(i.a.Fragment,null,"Everyone can use, give feedback and contribute. Give it a try!")},{title:i.a.createElement(i.a.Fragment,null,"Metrics"),imageUrl:"img/undraw_data_trends_b0wg.svg",description:i.a.createElement(i.a.Fragment,null,"Gather information about the health of the organization projects.")}];function g(){return i.a.createElement(i.a.Fragment,null,m&&m.length&&i.a.createElement("section",{className:u.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:s()("row",u.a.justifiedFeatures)},m.map((function(e,t){return i.a.createElement(o.default,Object(r.a)({key:t},e))}))))))}},165:function(e,t,n){"use strict";var r=n(0),a=n(50);t.a=function(){return Object(r.useContext)(a.a)}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(168);var r=n(165);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},167:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},168:function(e,t,n){"use strict";var r=n(17),a=n(35),i=n(169),l="".startsWith;r(r.P+r.F*n(170)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return l?l.call(t,r,n):t.slice(n,n+r.length)===r}})},169:function(e,t,n){var r=n(70),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},170:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);