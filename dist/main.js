"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[179],{426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n}\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 5%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.heading {\r\n  margin-top: 2rem;\r\n}\r\n.score {\r\n  display: flex;\r\n  gap: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.scores {\r\n  margin-top: 1rem;\r\n  list-style: none;\r\n  border: 2px solid #000;\r\n}\r\n.users {\r\n  padding: 1rem;\r\n}\r\n.users2 {\r\n  background-color: rgb(194, 194, 194);\r\n}\r\n.form-add {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2rem;\r\n}\r\n.form-add input {\r\n  width: 60%;\r\n  padding: 0.5rem;\r\n  border: 2px solid #000;\r\n  border-radius: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn {\r\n  width: 5rem;\r\n  background: rgb(119, 119, 119);\r\n  font-weight: bold;\r\n  color: white;\r\n  border: 0 none;\r\n  border-radius: 1px;\r\n  cursor: pointer;\r\n  padding: 10px 5px;\r\n  margin: 10px 5px;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(194, 194, 194);\r\n}\r\n",""]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<r.length;d++){var u=[].concat(r[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),d=0;d<a.length;d++){var u=e(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},987:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),d=e(565),u=e.n(d),p=e(216),l=e.n(p),f=e(589),m=e.n(f),g=e(426),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),o()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals}},r=>{r(r.s=987)}]);