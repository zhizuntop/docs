!function(n){function e(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(e,a,c){for(var i,l,u=0,r=[];u<e.length;u++)l=e[u],o[l]&&r.push(o[l][0]),o[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(t&&t(e,a,c);r.length;)r.shift()()};var a={},o={127:0};return e.e=function(n){function t(){c.onerror=c.onload=null,clearTimeout(i);var e=o[n];0!==e&&(e&&e[1](new Error("Loading chunk "+n+" failed.")),o[n]=void 0)}if(0===o[n])return Promise.resolve();if(o[n])return o[n][2];var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,c.src=e.p+""+n+"."+{0:"c206d96",1:"18c5fcf",2:"cbba8c4",3:"8d6f1f4",4:"b7a5427",5:"e4524b5",6:"982f2a2",7:"bc53149",8:"795107e",9:"28a7791",10:"91eb15b",11:"73c42a6",12:"91c279e",13:"22f9490",14:"25b4902",15:"83544a0",16:"6910dcd",17:"7e4417a",18:"0a6ec27",19:"4fcd519",20:"2939d5c",21:"07e1556",22:"ff09e41",23:"e04d4a0",24:"20a985b",25:"ea5725d",26:"d453a50",27:"a76a6b4",28:"12ac7f9",29:"3cb28cb",30:"57e2035",31:"e6d8d05",32:"ac8c71a",33:"e53cf8c",34:"2c447d4",35:"6f9170d",36:"7b85e9e",37:"ca6baaa",38:"0fc568c",39:"b458bbb",40:"ce87d28",41:"bb2ed49",42:"48774b4",43:"40079cb",44:"3d1ecea",45:"2a4e8e1",46:"763686b",47:"97a09c1",48:"8e2ae83",49:"546529e",50:"5b35398",51:"d3b6689",52:"16b6cb0",53:"f5995b9",54:"18b27c7",55:"3ba71d6",56:"1d5e030",57:"4a6a97d",58:"3e356a2",59:"72b611c",60:"b221852",61:"84d89ee",62:"a08e611",63:"1ff9164",64:"6232d4d",65:"5c3be75",66:"879fc34",67:"7b55994",68:"712a162",69:"b9fa230",70:"a80b9b1",71:"e43549d",72:"fa7e032",73:"bb970c9",74:"f870707",75:"b5c92e1",76:"9bce4b6",77:"b3e27c5",78:"99fdadc",79:"909e50a",80:"0c878a4",81:"d066ef6",82:"5d68392",83:"24819d5",84:"b964f54",85:"12cb672",86:"ec0132f",87:"de203b5",88:"4799884",89:"ca2470a",90:"4b60127",91:"bd03b19",92:"7f3e5e3",93:"3ef693b",94:"53bb3ba",95:"97d5c68",96:"bce6283",97:"26f8fa2",98:"76da30f",99:"cffce24",100:"f0d9c60",101:"ee9d22c",102:"9c0d4e8",103:"0ce58f8",104:"1f5f059",105:"b246de6",106:"70d709b",107:"31eb8d0",108:"a7f9135",109:"1ca7aa9",110:"e70c079",111:"785a943",112:"fd54e11",113:"87afcb1",114:"f5911c2",115:"fe4fc5a",116:"d5e95f0",117:"c87a379",118:"f7adbab",119:"0325b37",120:"e1fc7c7",121:"4175d05",122:"effdf39",123:"44fbfca",124:"26ece81",125:"6549d9f",126:"ac4a024"}[n]+".js";var i=setTimeout(t,12e4);c.onerror=c.onload=t,a.appendChild(c);var l=new Promise(function(e,t){o[n]=[e,t]});return o[n][2]=l},e.m=n,e.c=a,e.i=function(n){return n},e.d=function(n,e,t){Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/docs/",e.oe=function(n){throw console.error(n),n},e(e.s=21)}({0:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}var o=t(4),c=a(o),i=t(7),l=a(i);t(15),t(14),t(16),(0,l.default)(c.default,"app")},1:function(n,e){n.exports=' <main class="row main" :class="{\'slide-in-left\': navbarShow}" _v-16297e78=""> <section class="col-2 is-scrollable navbar" _v-16297e78=""> <navbar _v-16297e78=""></navbar> </section> <section class="col-6 is-scrollable content" v-el:main="" @click="navbarShow = false" _v-16297e78=""> <div class=navbar-toggle-container _v-16297e78=""> <button class=navbar-toggle @click=toggleNavbar _v-16297e78=""> <span _v-16297e78=""></span> <span _v-16297e78=""></span> <span _v-16297e78=""></span> </button> </div> <router-view _v-16297e78=""></router-view> </section> <section class="col-4 demo" _v-16297e78=""> <phone _v-16297e78=""></phone> </section> </main> '},10:function(n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"phone",computed:{routePath:function(){return this.$route.path.replace(/^\/(zh-cn|en)2?/,"")}}}},11:function(n,e){},12:function(n,e){},13:function(n,e){},14:function(n,e){},149:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var a=n[t],o=h[a.id];if(o){o.refs++;for(var c=0;c<o.parts.length;c++)o.parts[c](a.parts[c]);for(;c<a.parts.length;c++)o.parts.push(l(a.parts[c],e))}else{for(var i=[],c=0;c<a.parts.length;c++)i.push(l(a.parts[c],e));h[a.id]={id:a.id,refs:1,parts:i}}}}function a(n){for(var e=[],t={},a=0;a<n.length;a++){var o=n[a],c=o[0],i=o[1],l=o[2],u=o[3],r={css:i,media:l,sourceMap:u};t[c]?t[c].parts.push(r):e.push(t[c]={id:c,parts:[r]})}return e}function o(n,e){var t=f(),a=b[b.length-1];if("top"===n.insertAt)a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function c(n){n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function i(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function l(n,e){var t,a,o;if(e.singleton){var l=g++;t=d||(d=i(e)),a=u.bind(null,t,l,!1),o=u.bind(null,t,l,!0)}else t=i(e),a=r.bind(null,t),o=function(){c(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else o()}}function u(n,e,t,a){var o=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=v(e,o);else{var c=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(c,i[e]):n.appendChild(c)}}function r(n,e){var t=e.css,a=e.media,o=e.sourceMap;if(a&&n.setAttribute("media",a),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h={},p=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},s=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,g=0,b=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=s()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=a(n);return t(o,e),function(n){for(var c=[],i=0;i<o.length;i++){var l=o[i],u=h[l.id];u.refs--,c.push(u)}if(n){var r=a(n);t(r,e)}for(var i=0;i<c.length;i++){var u=c[i];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete h[u.id]}}}};var v=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},15:function(n,e){},150:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var c=this[o][0];"number"==typeof c&&(a[c]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&a[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},16:function(n,e){},17:function(n,e){n.exports={default:"en2",langs:[{value:"zh-cn2",text:"中文（Vue 2.0 版）"},{value:"en2",text:"English (for Vue 2.0)"},{value:"zh-cn",text:"中文"},{value:"en",text:"English"}]}},18:function(n,e){n.exports=[{title:"JS Components",list:[{path:"/toast",name:"Toast"},{path:"/indicator",name:"Indicator"},{path:"/loadmore",name:"Loadmore"},{path:"/infinite-scroll",name:"Infinite scroll"},{path:"/message-box",name:"Message box"},{path:"/action-sheet",name:"Action sheet"},{path:"/popup",name:"Popup"},{path:"/swipe",name:"Swipe"},{path:"/lazyload",name:"Lazy load"},{path:"/range",name:"Range"},{path:"/progress",name:"Progress"},{path:"/picker",name:"Picker"},{path:"/datetime-picker",name:"Datetime Picker"},{path:"/index-list",name:"Index List"},{path:"/palette-button",name:"Palette Button (2.0)",only:["zh-cn2","en2"]}]},{title:"CSS Components",list:[{path:"/header",name:"Header"},{path:"/tabbar",name:"Tabbar"},{path:"/navbar",name:"Navbar"},{path:"/button",name:"Button"},{path:"/cell",name:"Cell"},{path:"/cell-swipe",name:"Cell Swipe"},{path:"/spinner",name:"Spinner"},{path:"/tab-container",name:"TabContainer"},{path:"/search",name:"Search"}]},{title:"Form Components",list:[{path:"/switch",name:"Switch"},{path:"/checklist",name:"Checklist"},{path:"/radio",name:"Radio"},{path:"/field",name:"Field"},{path:"/badge",name:"Badge"}]}]},19:function(n,e){n.exports=Vue},2:function(n,e){n.exports=" <div class=phone _v-54f9016e=\"\"> <iframe class=demo-page :src=\"'//elemefe.github.io/mint-ui/#' + (routePath === '/loadmore' ? '/pull-down' : (routePath === '/repositories' || routePath === '/quickstart' ? '' : routePath))\" frameborder=0 _v-54f9016e=\"\"> </iframe> </div> "},20:function(n,e){n.exports=VueRouter},21:function(n,e,t){n.exports=t(0)},3:function(n,e){n.exports=' <nav class=nav _v-a6464980=""> <ul _v-a6464980=""> <li _v-a6464980=""> <a class=nav-link v-link="{ path: \'/\' + ($route.language || $route.default_lang.value), activeClass: \'is-active\', exact: true }" _v-a6464980="">Overview</a> </li> <li _v-a6464980=""> <a class=nav-link v-link="{ path: \'/\' + ($route.language || $route.default_lang.value) + \'/quickstart\', activeClass: \'is-active\', exact: true }" _v-a6464980="">Quickstart</a> </li> <li _v-a6464980=""> <a class=nav-link v-link="{ path: \'/\' + ($route.language || $route.default_lang.value) + \'/repositories\', activeClass: \'is-active\', exact: true }" _v-a6464980="">Repositories</a> </li> <template v-for="group in navs"> <li _v-a6464980=""> <a href=# @click.prevent="group.visible = !group.visible" class=nav-label v-text=group.title _v-a6464980=""> </a> </li> <ul v-show=group.visible transition=slidedown :style="{\n          maxHeight: group.list.length * 36 + \'px\'\n        }" _v-a6464980=""> <li v-for="item in group.list" _v-a6464980=""> <a class=nav-link v-link="{\n              path: \'/\' + ($route.language || $route.default_lang.value) + item.path,\n              activeClass: \'is-active\'\n            }" v-text=item.name _v-a6464980=""> </a> </li> </ul> </template> </ul> </nav> '},4:function(n,e,t){var a,o,c={};t(11),a=t(8),o=t(1),n.exports=a||{},n.exports.__esModule&&(n.exports=n.exports.default);var i="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(c).forEach(function(n){var e=c[n];i.computed[n]=function(){return e}})},5:function(n,e,t){var a,o,c={};t(13),a=t(9),o=t(3),n.exports=a||{},n.exports.__esModule&&(n.exports=n.exports.default);var i="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(c).forEach(function(n){var e=c[n];i.computed[n]=function(){return e}})},6:function(n,e,t){var a,o,c={};t(12),a=t(10),o=t(2),n.exports=a||{},n.exports.__esModule&&(n.exports=n.exports.default);var i="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(c).forEach(function(n){var e=c[n];i.computed[n]=function(){return e}})},7:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){h.start(n,e)};var o=t(17),c=a(o),i=t(20),l=a(i),u=t(19),r=a(u);r.default.use(l.default);var h=new l.default,p={};c.default.langs.forEach(function(n){n.value===c.default.default&&(p=n)}),h.map({"/":{component:function(n){return t.e(0).then(function(){var e=[t(22)];n.apply(null,e)}.bind(this)).catch(t.oe)},default_lang:p,langs:c.default.langs,title:"选择语言"},"/zh-cn2":{title:"概述",language:"zh-cn2",component:function(n){return t.e(126).then(function(){var e=[t(117)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/repositories":{title:"子项目",language:"zh-cn2",component:function(n){return t.e(34).then(function(){var e=[t(141)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/quickstart":{title:"快速上手",language:"zh-cn2",component:function(n){return t.e(45).then(function(){var e=[t(138)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/toast":{title:"Toast",language:"zh-cn2",component:function(n){return t.e(4).then(function(){var e=[t(148)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/indicator":{title:"Indicator",language:"zh-cn2",component:function(n){return t.e(80).then(function(){var e=[t(128)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/loadmore":{title:"Loadmore",language:"zh-cn2",component:function(n){return t.e(68).then(function(){var e=[t(131)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/infinite-scroll":{title:"Infinite scroll",language:"zh-cn2",component:function(n){return t.e(75).then(function(){var e=[t(129)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/message-box":{title:"Message box",language:"zh-cn2",component:function(n){return t.e(63).then(function(){var e=[t(132)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/action-sheet":{title:"Action sheet",language:"zh-cn2",component:function(n){return t.e(122).then(function(){var e=[t(118)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/popup":{title:"Popup",language:"zh-cn2",component:function(n){return t.e(53).then(function(){var e=[t(136)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/swipe":{title:"Swipe",language:"zh-cn2",component:function(n){return t.e(21).then(function(){var e=[t(144)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/lazyload":{title:"Lazy load",language:"zh-cn2",component:function(n){return t.e(73).then(function(){var e=[t(130)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/range":{title:"Range",language:"zh-cn2",component:function(n){return t.e(37).then(function(){var e=[t(140)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/progress":{title:"Progress",language:"zh-cn2",component:function(n){return t.e(49).then(function(){var e=[t(137)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/picker":{title:"Picker",language:"zh-cn2",component:function(n){return t.e(57).then(function(){var e=[t(135)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/datetime-picker":{title:"Datetime Picker",language:"zh-cn2",component:function(n){return t.e(97).then(function(){var e=[t(124)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/index-list":{title:"Index List",language:"zh-cn2",component:function(n){return t.e(85).then(function(){var e=[t(127)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/palette-button":{title:"Palette Button (2.0)",language:"zh-cn2",component:function(n){return t.e(2).then(function(){var e=[t(134)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/header":{title:"Header",language:"zh-cn2",component:function(n){return t.e(89).then(function(){var e=[t(126)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/tabbar":{title:"Tabbar",language:"zh-cn2",component:function(n){return t.e(9).then(function(){var e=[t(147)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/navbar":{title:"Navbar",language:"zh-cn2",component:function(n){return t.e(61).then(function(){var e=[t(133)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/button":{title:"Button",language:"zh-cn2",component:function(n){return t.e(113).then(function(){var e=[t(120)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/cell":{title:"Cell",language:"zh-cn2",component:function(n){return t.e(109).then(function(){var e=[t(122)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/cell-swipe":{title:"Cell Swipe",language:"zh-cn2",component:function(n){return t.e(105).then(function(){var e=[t(121)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/spinner":{title:"Spinner",language:"zh-cn2",component:function(n){return t.e(25).then(function(){var e=[t(143)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/tab-container":{title:"TabContainer",language:"zh-cn2",component:function(n){return t.e(13).then(function(){var e=[t(146)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/search":{title:"Search",language:"zh-cn2",component:function(n){return t.e(29).then(function(){var e=[t(142)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/switch":{title:"Switch",language:"zh-cn2",component:function(n){return t.e(17).then(function(){var e=[t(145)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/checklist":{title:"Checklist",language:"zh-cn2",component:function(n){return t.e(101).then(function(){var e=[t(123)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/radio":{title:"Radio",language:"zh-cn2",component:function(n){return t.e(41).then(function(){var e=[t(139)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/field":{title:"Field",language:"zh-cn2",component:function(n){return t.e(93).then(function(){var e=[t(125)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn2/badge":{title:"Badge",language:"zh-cn2",component:function(n){return t.e(117).then(function(){var e=[t(119)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2":{title:"概述",language:"en2",component:function(n){return t.e(125).then(function(){var e=[t(54)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/repositories":{title:"子项目",language:"en2",component:function(n){return t.e(33).then(function(){var e=[t(78)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/quickstart":{title:"快速上手",language:"en2",component:function(n){return t.e(46).then(function(){var e=[t(75)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/toast":{title:"Toast",language:"en2",component:function(n){return t.e(5).then(function(){var e=[t(85)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/indicator":{title:"Indicator",language:"en2",component:function(n){return t.e(81).then(function(){var e=[t(65)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/loadmore":{title:"Loadmore",language:"en2",component:function(n){return t.e(69).then(function(){var e=[t(68)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/infinite-scroll":{title:"Infinite scroll",language:"en2",component:function(n){return t.e(77).then(function(){var e=[t(66)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/message-box":{title:"Message box",language:"en2",component:function(n){return t.e(65).then(function(){var e=[t(69)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/action-sheet":{title:"Action sheet",language:"en2",component:function(n){return t.e(120).then(function(){var e=[t(55)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/popup":{title:"Popup",language:"en2",component:function(n){return t.e(52).then(function(){var e=[t(73)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/swipe":{title:"Swipe",language:"en2",component:function(n){return t.e(20).then(function(){var e=[t(81)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/lazyload":{title:"Lazy load",language:"en2",component:function(n){return t.e(72).then(function(){var e=[t(67)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/range":{title:"Range",language:"en2",component:function(n){return t.e(36).then(function(){var e=[t(77)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/progress":{title:"Progress",language:"en2",component:function(n){return t.e(48).then(function(){var e=[t(74)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/picker":{title:"Picker",language:"en2",component:function(n){return t.e(56).then(function(){var e=[t(72)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/datetime-picker":{title:"Datetime Picker",language:"en2",component:function(n){return t.e(96).then(function(){var e=[t(61)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/index-list":{title:"Index List",language:"en2",component:function(n){return t.e(84).then(function(){var e=[t(64)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/palette-button":{title:"Palette Button (2.0)",language:"en2",component:function(n){return t.e(1).then(function(){var e=[t(71)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/header":{title:"Header",language:"en2",component:function(n){return t.e(88).then(function(){var e=[t(63)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/tabbar":{title:"Tabbar",language:"en2",component:function(n){return t.e(8).then(function(){var e=[t(84)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/navbar":{title:"Navbar",language:"en2",component:function(n){return t.e(60).then(function(){var e=[t(70)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/button":{title:"Button",language:"en2",component:function(n){return t.e(112).then(function(){var e=[t(57)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/cell":{title:"Cell",language:"en2",component:function(n){return t.e(108).then(function(){var e=[t(59)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/cell-swipe":{title:"Cell Swipe",language:"en2",component:function(n){return t.e(104).then(function(){var e=[t(58)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/spinner":{title:"Spinner",language:"en2",component:function(n){return t.e(24).then(function(){var e=[t(80)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/tab-container":{title:"TabContainer",language:"en2",component:function(n){return t.e(12).then(function(){var e=[t(83)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/search":{title:"Search",language:"en2",component:function(n){return t.e(28).then(function(){var e=[t(79)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/switch":{title:"Switch",language:"en2",component:function(n){return t.e(16).then(function(){var e=[t(82)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/checklist":{title:"Checklist",language:"en2",component:function(n){return t.e(100).then(function(){var e=[t(60)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/radio":{title:"Radio",language:"en2",component:function(n){return t.e(40).then(function(){var e=[t(76)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/field":{title:"Field",language:"en2",component:function(n){return t.e(92).then(function(){var e=[t(62)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en2/badge":{title:"Badge",language:"en2",component:function(n){return t.e(116).then(function(){var e=[t(56)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn":{title:"概述",language:"zh-cn",component:function(n){return t.e(124).then(function(){var e=[t(86)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/repositories":{title:"子项目",language:"zh-cn",component:function(n){return t.e(32).then(function(){var e=[t(109)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/quickstart":{title:"快速上手",language:"zh-cn",component:function(n){return t.e(44).then(function(){var e=[t(106)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/toast":{title:"Toast",language:"zh-cn",component:function(n){return t.e(3).then(function(){var e=[t(116)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/indicator":{title:"Indicator",language:"zh-cn",component:function(n){return t.e(79).then(function(){var e=[t(97)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/loadmore":{title:"Loadmore",language:"zh-cn",component:function(n){return t.e(67).then(function(){var e=[t(100)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/infinite-scroll":{title:"Infinite scroll",language:"zh-cn",component:function(n){return t.e(76).then(function(){var e=[t(98)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/message-box":{title:"Message box",language:"zh-cn",component:function(n){return t.e(64).then(function(){var e=[t(101)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/action-sheet":{title:"Action sheet",language:"zh-cn",component:function(n){return t.e(119).then(function(){var e=[t(87)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/popup":{title:"Popup",language:"zh-cn",component:function(n){return t.e(51).then(function(){var e=[t(104)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/swipe":{title:"Swipe",language:"zh-cn",component:function(n){return t.e(19).then(function(){var e=[t(112)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/lazyload":{title:"Lazy load",language:"zh-cn",component:function(n){return t.e(71).then(function(){var e=[t(99)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/range":{title:"Range",language:"zh-cn",component:function(n){return t.e(35).then(function(){var e=[t(108)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/progress":{title:"Progress",language:"zh-cn",component:function(n){return t.e(47).then(function(){var e=[t(105)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/picker":{title:"Picker",language:"zh-cn",component:function(n){return t.e(55).then(function(){var e=[t(103)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/datetime-picker":{title:"Datetime Picker",language:"zh-cn",component:function(n){return t.e(95).then(function(){var e=[t(93)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/index-list":{title:"Index List",language:"zh-cn",component:function(n){return t.e(83).then(function(){var e=[t(96)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/header":{title:"Header",language:"zh-cn",component:function(n){return t.e(87).then(function(){var e=[t(95)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/tabbar":{title:"Tabbar",language:"zh-cn",component:function(n){return t.e(7).then(function(){var e=[t(115)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/navbar":{title:"Navbar",language:"zh-cn",component:function(n){return t.e(59).then(function(){var e=[t(102)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/button":{title:"Button",language:"zh-cn",component:function(n){return t.e(111).then(function(){var e=[t(89)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/cell":{title:"Cell",language:"zh-cn",component:function(n){return t.e(107).then(function(){var e=[t(91)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/cell-swipe":{title:"Cell Swipe",language:"zh-cn",component:function(n){return t.e(103).then(function(){var e=[t(90)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/spinner":{title:"Spinner",language:"zh-cn",component:function(n){return t.e(23).then(function(){var e=[t(111)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/tab-container":{title:"TabContainer",language:"zh-cn",component:function(n){return t.e(11).then(function(){var e=[t(114)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/search":{title:"Search",language:"zh-cn",component:function(n){return t.e(27).then(function(){var e=[t(110)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/switch":{title:"Switch",language:"zh-cn",component:function(n){return t.e(15).then(function(){var e=[t(113)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/checklist":{title:"Checklist",language:"zh-cn",component:function(n){return t.e(99).then(function(){var e=[t(92)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/radio":{title:"Radio",language:"zh-cn",component:function(n){return t.e(39).then(function(){var e=[t(107)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/field":{title:"Field",language:"zh-cn",component:function(n){return t.e(91).then(function(){var e=[t(94)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/zh-cn/badge":{title:"Badge",language:"zh-cn",component:function(n){return t.e(115).then(function(){var e=[t(88)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en":{title:"概述",language:"en",component:function(n){return t.e(123).then(function(){var e=[t(23)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/repositories":{title:"子项目",language:"en",component:function(n){return t.e(31).then(function(){var e=[t(46)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/quickstart":{title:"快速上手",language:"en",component:function(n){return t.e(43).then(function(){var e=[t(43)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/toast":{title:"Toast",language:"en",component:function(n){return t.e(6).then(function(){var e=[t(53)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/indicator":{title:"Indicator",language:"en",component:function(n){return t.e(82).then(function(){var e=[t(34)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/loadmore":{title:"Loadmore",language:"en",component:function(n){return t.e(70).then(function(){var e=[t(37)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/infinite-scroll":{title:"Infinite scroll",language:"en",component:function(n){return t.e(78).then(function(){var e=[t(35)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/message-box":{title:"Message box",language:"en",component:function(n){return t.e(66).then(function(){var e=[t(38)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/action-sheet":{title:"Action sheet",language:"en",component:function(n){return t.e(121).then(function(){var e=[t(24)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/popup":{title:"Popup",language:"en",component:function(n){return t.e(54).then(function(){var e=[t(41)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/swipe":{title:"Swipe",language:"en",component:function(n){return t.e(22).then(function(){var e=[t(49)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/lazyload":{title:"Lazy load",language:"en",component:function(n){return t.e(74).then(function(){var e=[t(36)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/range":{title:"Range",language:"en",component:function(n){return t.e(38).then(function(){var e=[t(45)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/progress":{title:"Progress",language:"en",component:function(n){return t.e(50).then(function(){var e=[t(42)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/picker":{title:"Picker",language:"en",component:function(n){return t.e(58).then(function(){var e=[t(40)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/datetime-picker":{title:"Datetime Picker",language:"en",component:function(n){return t.e(98).then(function(){var e=[t(30)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/index-list":{title:"Index List",language:"en",component:function(n){return t.e(86).then(function(){var e=[t(33)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/header":{title:"Header",language:"en",component:function(n){return t.e(90).then(function(){var e=[t(32)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/tabbar":{title:"Tabbar",language:"en",component:function(n){return t.e(10).then(function(){var e=[t(52)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/navbar":{title:"Navbar",language:"en",component:function(n){return t.e(62).then(function(){var e=[t(39)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/button":{title:"Button",language:"en",component:function(n){return t.e(114).then(function(){var e=[t(26)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/cell":{title:"Cell",language:"en",component:function(n){return t.e(110).then(function(){var e=[t(28)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/cell-swipe":{title:"Cell Swipe",language:"en",component:function(n){return t.e(106).then(function(){var e=[t(27)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/spinner":{title:"Spinner",language:"en",component:function(n){return t.e(26).then(function(){var e=[t(48)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/tab-container":{title:"TabContainer",language:"en",component:function(n){return t.e(14).then(function(){var e=[t(51)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/search":{title:"Search",language:"en",component:function(n){return t.e(30).then(function(){var e=[t(47)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/switch":{title:"Switch",language:"en",component:function(n){return t.e(18).then(function(){var e=[t(50)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/checklist":{title:"Checklist",language:"en",component:function(n){return t.e(102).then(function(){var e=[t(29)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/radio":{title:"Radio",language:"en",component:function(n){return t.e(42).then(function(){var e=[t(44)];n.apply(null,e)}.bind(this)).catch(t.oe)}},"/en/field":{title:"Field",language:"en",component:function(n){return t.e(94).then(function(){var e=[t(31)];n.apply(null,e);
}.bind(this)).catch(t.oe)}},"/en/badge":{title:"Badge",language:"en",component:function(n){return t.e(118).then(function(){var e=[t(25)];n.apply(null,e)}.bind(this)).catch(t.oe)}}}),h.redirect({"*":"/"}),h.beforeEach(function(n){document.title=n.to.title||document.title,n.next()})},8:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t(5),c=a(o),i=t(6),l=a(i);e.default={watch:{"$route.path":function(){var n=this;this.$els.main.scrollTop=0,setTimeout(function(){n.navbarShow=!1},200)}},data:function(){return{navbarShow:!1}},components:{Navbar:c.default,Phone:l.default},methods:{toggleNavbar:function(n){n.stopPropagation(),this.navbarShow=!this.navbarShow}}}},9:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t(18),c=a(o);c.default.map(function(n){return n.visible=!0,n}),e.default={data:function(){return{navs:c.default}}}}});