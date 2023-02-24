(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]),i.push([e.id,"* {\n    font-family: 'Ubuntu', sans-serif;\n}\n\nbody {\n    background-color: rgb(235, 231, 231);\n    margin: 0px;\n    padding: 0px;\n}\n\ncontent {\n    display: flex;\n    align-items: center;\n}\n\n.title {\n    font-size: 48px;\n    font-weight: bold;\n    padding: 32px 16px;\n}\n\n.displaysection {\n    background-color: red;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;    \n    background-color: rgb(162, 173, 173);\n}\n\n.browsingtab {\n    display: flex;\n    justify-content: space-between;\n}\n\n.browsingtab > button {\n    padding: 8px 12px;\n    margin: 12px;\n    border: 1px solid black;\n    border-radius: 12px;\n    font-size: 20px;\n}\n\n#textsection {\n    margin: 32px 64px;\n    padding: 64px;\n    background-color: wheat;\n    border: 1px solid #000;\n    border-radius: 20px;\n    text-align: center;\n}\n\n#textsection > div {\n    font-size: 20px;\n    padding-bottom: 32px;\n}\n\nimg {\n    width: 300px;\n    height: 300px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(e){e.textContent="";const n=document.createElement("div");n.textContent="the bestest coolest restaurant in the entire pacific ocean. We serve the most amazing water you could ever buy. Heck! We even got Gordon Ramsay here!",e.appendChild(n);const t=document.createElement("img");t.src="./images/gordonramsay.jpeg",t.alt="Chef Ramsay",e.appendChild(t)},v=document.querySelector("#content"),g=document.createElement("div");g.classList.add("header"),v.appendChild(g);const x=document.createElement("div");x.classList.add("title"),x.textContent="Restaurant Page",g.appendChild(x);const b=document.createElement("div");b.classList.add("browsingtab"),g.appendChild(b);const y=document.createElement("div");y.setAttribute("id","textsection"),h(y),v.appendChild(y);const C=document.createElement("button");C.textContent="Home",b.appendChild(C),C.onclick=function(){h(y)};const w=document.createElement("button");w.textContent="Menu",b.appendChild(w),w.onclick=function(){!function(e){e.textContent="";const n=document.createElement("div");n.textContent="Water: $100",e.appendChild(n);const t=document.createElement("img");t.src="./images/waterglass.jpeg",t.alt="Glass of water",e.appendChild(t)}(y)};const E=document.createElement("button");E.textContent="Contact",b.appendChild(E),E.onclick=function(){!function(e){e.textContent="";const n=document.createElement("div");n.textContent="Phone number: 123-456-7891\nLocation: look at map below",e.appendChild(n);const t=document.createElement("img");t.src="./images/ocean.png",t.alt="pacific ocean",e.appendChild(t)}(y)}})()})();