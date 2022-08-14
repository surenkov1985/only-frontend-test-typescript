!function(){"use strict";var t,e={8148:function(t,e,n){var r=n(2578),o=n(6963),i=n(8428),a=n(5008),c="SET_CHECKED",l="SET_NAME";function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p,h,d,m,y,v,g,b,x,w,E,O,j,P,k,F,S,L,_={checked:!1,userName:""},Z=(0,a.UY)({checkReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return s(s({},t),{},{checked:e.auth});case l:return s(s({},t),{},{userName:e.name});default:return t}}}),A=n(2712),z=(0,a.MT)(Z,{},(0,a.md)(A.Z)),D=n(558),N=n(5487);function I(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var T=N.ZP.label(p||(p=I(["\n\tdisplay: flex;\n\tflex-direction: column;\n    row-gap: 10px;\n    margin-top: 10px;\n"]))),C=N.ZP.div(h||(h=I(["\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 19px;\n\tcolor: #1F1F1F;\n"]))),G=N.ZP.div(d||(d=I(["\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tline-height: 17px;\n\tcolor: #E26F6F;\n"]))),q=N.ZP.input(m||(m=I(["\n\twidth: 100%;\n\theight: 60px;\n\tpadding: 20px;\n\tbackground: #F5F5F5;\n\tborder-radius: 8px;\n\tfont-size: 16px;\n"]))),M=N.ZP.label(y||(y=I(["\n\tdisplay: flex;\n\t\talign-items: center;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tmargin-top: 12px;\n"]))),Y=N.ZP.input(v||(v=I(["\n\twidth: 640px;\n\t\theight: 60px;\n\t\tleft: 640px;\n\t\ttop: 649px;\n\t\tbackground: #4A67FF;\n\t\tborder-radius: 8px;\n\t\tcolor: #FFFFFF;\n\t\tcursor: pointer;\n\t\tmargin-top: 41px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\t&:disabled {\n\t\t\tcursor: default;\n\t\t\topacity: 0.5;\n\t\t}\n"]))),R=N.ZP.input(g||(g=I(["\n\tmargin-right: 20px;\n\t\topacity: 0;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tbackground: #f5f5f5;\n\n\t\t&:checked {\n\t\t\t\t& ~ .form__false-check > .form__false-bg{\n\n\t\t\t\tbackground: #4A67FF;\n\t\t\t}\n\t\t}\t\n"]))),B=N.ZP.span(b||(b=I(["\n\tposition: absolute;\n\twidth: 20px;\n\theight: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tborder-radius: 4px;\n"]))),H=N.ZP.span(x||(x=I(["\n\tdisplay: block;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 2px;\n"]))),K=N.ZP.div.attrs({className:"container"})(w||(w=I(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))),U=N.ZP.div(E||(E=I(["\n\tposition: absolute;\n\ttop: 40px;\n"]))),V=N.ZP.h2(O||(O=I(["\n \tfont-weight: 700;\n\tfont-size: 64px;\n\tline-height: 78px;\n\tcolor: #000000;\n"]))),$=N.ZP.form(j||(j=I(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 95px;\n\twidth: 640px;\n"]))),W=N.ZP.div(P||(P=I(["\n\tdisplay: flex;\n\talign-items: center;\n\tmin-width: 640px;\n\theight: 60px;\n\tpadding: 20px;\n\tbackground: #F5E9E9;\n\tborder: 1px solid #E26F6F;\n\tborder-radius: 8px;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin-top: 10px;\n\tmargin-bottom: 17px;\n"]))),J=N.ZP.span(k||(k=I(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: #FFC8C8;\n\tborder-radius: 50%;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tcolor: #EE6565;\n\tmargin-right: 14px;\n"]))),Q=N.ZP.div(F||(F=I(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 110px;\n"]))),X=N.ZP.div(S||(S=I(["\n\tfont-weight: 400;\n\tfont-size: 40px;\n\t\n\t& > b {\n\t\tfont-weight: 700;\n\t}\n"]))),tt=N.ZP.button(L||(L=I(["\n\twidth: 200px;\n\theight: 60px;\n\tmargin-top: 50px;\n\tbackground: #F5F5F5;\n\tborder-radius: 8px;\n\tfont-weight: 700;\n\tfont-size: 18px;\n\tcursor: pointer;\n\t\n\t&:hover {\n\t\tbackground: #D1D1D1;\n\t}\n"]))),et=n(3626);function nt(){return r.createElement(U,null,r.createElement(V,null,"ONLY."))}var rt=n(8039),ot=function(t){var e=t.error;return r.createElement(W,null,r.createElement(J,null,"!"),e)},it=function(t){return{type:c,auth:t}},at=n(3772),ct=n.n(at);function lt(t){return lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(t)}function ut(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ut=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function f(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&n.call(y,o)&&(d=y);var v=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==lt(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=h,c(v,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){pt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ht(){return ht=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht.apply(this,arguments)}function dt(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function mt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){dt(i,r,o,a,c,"next",t)}function c(t){dt(i,r,o,a,c,"throw",t)}a(void 0)}))}}function yt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return vt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var gt=function(){var t,e,n=(0,rt.cI)({mode:"onBlur"}),o=n.register,a=n.formState,c=a.errors,u=a.isValid,s=n.handleSubmit,f=(n.reset,yt((0,r.useState)(""),2)),p=f[0],h=(f[1],yt((0,r.useState)(u),2)),d=h[0],m=h[1];(0,r.useEffect)((function(){m(u)}),[u]);var y=(0,i.I0)();(0,r.useEffect)((function(){var t;y(it(localStorage.hasOwnProperty("jwt_token"))),y((t=localStorage.getItem("login"),{type:l,name:t}))}),[]);var v="Логин",g="text",b="Введите логин",x={text:"Пароль",type:"password",name:"password",required:"Обязательное поле",message:"Пароль дожен содержать минимум 5 символов",placeholder:"Введите пароль",pattern:/\w{5,}/};function w(){return(w=mt(ut().mark((function t(e){return ut().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct().post("/api/auth/register",ft({},e),{headers:{"Content-Type":"application/json",mode:"no-cors"}}).then((function(t){return console.log(t)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}return r.createElement($,{onSubmit:s((function(t){!function(t){w.apply(this,arguments)}(t)}))},p&&r.createElement(ot,{error:p}),r.createElement(T,null,r.createElement(C,null,v),r.createElement(q,ht({type:g,placeholder:b,autoFocus:!0},o("login",{required:"Обязательное поле",pattern:{value:/^((([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([\x2DA-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/,message:"Логин должен быть в формате test@test.io"}}))),r.createElement(G,null,(null==c?void 0:c.login)&&r.createElement("span",null,(null==c||null===(t=c.login)||void 0===t?void 0:t.message)||"Error!"))),r.createElement(T,null,r.createElement(C,null,x.text),r.createElement(q,ht({type:x.type,placeholder:x.placeholder},o("password",{required:x.required,pattern:{value:x.pattern,message:x.message}}))),r.createElement(G,null,(null==c?void 0:c.password)&&r.createElement("span",null,(null==c||null===(e=c.password)||void 0===e?void 0:e.message)||"Error!"))),r.createElement(M,null,r.createElement(R,{type:"checkbox"}),r.createElement(B,{className:"form__false-check"},r.createElement(H,{className:"form__false-bg"})),r.createElement("span",null,"Запомнить пароль")),r.createElement(Y,{type:"submit",disabled:!d,value:"Войти"}))},bt=function(t){var e=t.children,n=((0,et.TH)(),(0,i.v9)((function(t){return t.checkReducer.checked})));return console.log(n),n?r.createElement(r.Fragment,null,e):r.createElement(gt,null)},xt=function(){var t=(0,i.I0)(),e=(0,i.v9)((function(t){return t.checkReducer.userName}));return r.createElement(Q,null,r.createElement(X,null,"Здравствуйте, ",r.createElement("b",null,e)),r.createElement(tt,{onClick:function(){t(it(!1)),localStorage.removeItem("jwt_token"),localStorage.removeItem("login")}},"Выйти"))},wt=function(){return r.createElement(bt,null,r.createElement(xt,null))},Et=function(){return r.createElement(K,null,r.createElement(nt,null),r.createElement(et.Z5,null,r.createElement(et.AW,{path:"/",element:r.createElement(wt,null)})))},Ot=document.getElementById("app");(0,o.s)(Ot).render(r.createElement(D.VK,null,r.createElement(i.zt,{store:z},r.createElement(Et,null))))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,loaded:!1,exports:{}};return e[t](i,i.exports,r),i.loaded=!0,i.exports}r.m=e,t=[],r.O=function(e,n,o,i){if(!n){var a=1/0;for(s=0;s<t.length;s++){n=t[s][0],o=t[s][1],i=t[s][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],c=n[1],l=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var s=l(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.O(void 0,[70],(function(){return r(6005)}));var o=r.O(void 0,[70],(function(){return r(8148)}));o=r.O(o)}();