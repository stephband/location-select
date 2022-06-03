/* slide-show 
   1.2.0
   By Stephen Band
   Built 2022-05-27 22:50 */

var mt=Object.getOwnPropertySymbols;var Wt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable;var dt=(t,e)=>{var n={};for(var o in t)Wt.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&mt)for(var o of mt(t))e.indexOf(o)<0&&$t.call(t,o)&&(n[o]=t[o]);return n};function P(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Zt=Array.prototype;function Vt(t,e){return typeof t=="function"?t.apply(null,e):t}function gt(t,e,n){n=n||t.length;var o=n===1?e?t:P(t):P(function(r){return gt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Vt(o(i),Zt.slice.call(arguments,1))}}var u=gt;function R(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Qe=u(R,!0);function K(t){return document.getElementById(t)||void 0}function E(t){return t.tagName&&t.tagName.toLowerCase()}function Jt(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):E(e)===t}var h=u(Jt,!0);function yt(t,e){var n=arguments[2];if(!(!e||e===document||e===n||e.nodeType===11))return e=e.correspondingUseElement||e,h(t,e)?e:yt(t,e.parentNode,n)}var wt=u(yt,!0);function W(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function vt(t){return t.nodeType===1}function Qt(t){return(/^\//.test(t)?"":"/")+t}function k(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===Qt(t.pathname)}function $(t){return t}function p(){}var Xt=Object.freeze;function bt(){return this}var v=Xt({shift:p,push:p,forEach:p,join:function(){return""},map:bt,filter:bt,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:p,pipe:$,start:p,stop:p,done:p,valueOf:function(){return null}});function Z(){return this}function V(t){return t&&t[Symbol.iterator]}var Yt=Object.assign;function te(t){return t.stop?t.stop():t()}function ee(t){t.forEach(te),t.length=0}function b(){}Yt(b.prototype,{stop:function(){return this.stopables&&ee(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var ne=Object.assign;function O(t){b.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,O(n)}function c(){}ne(c.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&O(this[0]),this}});var l=Object.assign,m=Object.create;function S(t,e){e!==void 0&&t[0].push(e)}function oe(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];O(e)}else t.stop()}function s(t){this.input=t}l(s.prototype,b.prototype,{push:function(t){S(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new xt(this,t)},filter:function(t){return new Et(this,t)},chunk:function(t){return new St(this,t)},flatMap:function(t){return new kt(this,t)},take:function(t){return new Ct(this,t)},each:function(t){return new Dt(this,t)},reduce:function(t,e){return new At(this,t,e)},scan:function(t,e){return new Bt(this,t,e)},stop:function(){return oe(this.input,this),this}});function xt(t,e){this.input=t,this.fn=e}xt.prototype=l(m(s.prototype),{push:function(e){let n=this.fn;S(this,n(e))}});function Et(t,e){this.input=t,this.fn=e}Et.prototype=l(m(s.prototype),{push:function(e){this.fn(e)&&S(this,e)}});function kt(t,e){this.input=t,this.fn=e}kt.prototype=l(m(s.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(V(o))for(let r of o)S(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function St(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}St.prototype=l(m(s.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(S(this,n),this.chunk=[])}});function Ct(t,e){this.input=t,this.count=e}Ct.prototype=l(m(s.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function At(t,e,n){return this.input=t,this.fn=e,this.value=n,this.i=0,t.pipe(this),n}At.prototype=l(m(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function Bt(t,e,n){this.input=t,this.fn=e,this.value=n}Bt.prototype=l(m(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function Dt(t,e){this.input=t,this.push=e,t.pipe(this)}Dt.prototype=l(m(s.prototype),{each:null,reduce:null,pipe:null});var re=Array.prototype,ie=Object.assign,se=Object.create;function C(t){this.buffer=t||[]}C.prototype=ie(se(s.prototype),c.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(re.shift.apply(this.buffer));return this.buffer=this[0],t}});var ue=Object.assign,ce=Object.create;function A(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(v)}A.prototype=ue(ce(s.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var ae=Object.assign;function T(t){this.promise=t}ae(T.prototype,c.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){c.prototype.stop.apply(this,arguments),this[0]=v}});var Ot=Object.assign,Tt=Object.keys;function Pt(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=Tt(o).length===r.length))&&i.push(Ot({},o))}function j(t){this.inputs=t,this.active=!1}Ot(j.prototype,c.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=Tt(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>Pt(this,n,r))):o.then?o.then(r=>Pt(this,n,r)):console.log("Todo: combine() raw values ?")}}});var fe=Object.assign;function L(t){this.inputs=t}fe(L.prototype,c.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return c.prototype.stop.apply(this,arguments)}});var Q=Array.prototype,pe=Object.assign;function le(t){return t.length>0}function he(t,e,n){return t[n]=e.shift(),t}function me(t){return[]}function J(t,e,n,o){n.push(o),e.every(le)&&t.push(e.reduce(he,{}))}function M(t){this.inputs=t,this.buffers=Q.map.call(t,me)}pe(M.prototype,c.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,Q.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(a=>J(t,n,i,a))):o.then?o.then(a=>J(t,n,i,a)):Q.forEach.call(o,a=>J(t,n,i,a))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return c.prototype.stop.apply(this,arguments)}});var de=Array.prototype,jt=Object.assign;function ge(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var Lt=jt(s,{of:function(){return new C(de.slice.apply(arguments))},from:function(t){return t.pipe?new s(t):t.then?new s(new T(t)):typeof t.length=="number"?new C(t):ge(t)},broadcast:function(e){return new A(v,e)},combine:function(e){return new s(new j(e))},merge:function(){return new s(new L(arguments))},zip:function(){return new s(new M(arguments))}});jt(s.prototype,{log:Z,broadcast:function(t){return new A(this,t)}});var ye=Object.assign,we=/\s+/,Mt={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function U(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var Ut=0;window.addEventListener("click",t=>Ut=t.timeStamp);function ve(t,e){return t.node.addEventListener(Mt[e]||e,t,t.options),t}function be(t,e){return t.node.removeEventListener(Mt[e]||e,t),t}function Nt(t,e,n){this.types=t.split(we),this.options=e,this.node=n,this.select=e&&e.select}ye(Nt.prototype,c.prototype,{pipe:function(t){this[0]=t,this.types.reduce(ve,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Ut)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(be,this),c.prototype.stop.apply(this,arguments)}});function f(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new Lt(new Nt(t,n,e))}function xe(t,e){return e[t]}var d=u(xe,!0);function X(t){return!!t||t!=null&&!Number.isNaN(t)}function Y(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var N=d("classList"),y=N;function Ee(t,e){N(e).add(t)}function ke(t,e){N(e).remove(t)}function Se(t,e){(function n(o){return t--?requestAnimationFrame(n):e(o)})()}function Ce(t,e){var n=N(e);n.add(t),Se(2,()=>n.remove(t))}var ro=u(Ee,!0),io=u(ke,!0),so=u(Ce,!0);function tt(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let a=r.closest(e[i]);if(a)return t[e[i]](a,...arguments)}}}var Ae=Object.assign,B={bubbles:!0,cancelable:!0};function Be(t,e){var _;let n=B,o,r,i,a,H,z;return typeof t=="object"?(_=t,{type:t,detail:r,bubbles:i,cancelable:a,composed:H}=_,o=dt(_,["type","detail","bubbles","cancelable","composed"]),z=Ae(new CustomEvent(t,{detail:r,bubbles:i||B.bubbles,cancelable:a||B.cancelable,composed:H||B.composed}),o)):z=new CustomEvent(t,B),e.dispatchEvent(z)}var F=u(Be,!0);function et(t){if(t.toArray)return t.toArray();var e=[],n=t.length,o;if(typeof t.length!="number")return e;for(e.length=n,o=0;o<n;o++)e[o]=t[o];return e}function De(t,e){return et(e.querySelectorAll(t))}var x=u(De,!0);var Pe=!1,nt=Pe?function(e,...n){window.console&&window.console.log&&window.console.log("%cbolt %c"+e+"%c","color: #888888; font-weight: 400;","color: #3a8ab0; font-weight: 600;","color: inherit; font-weight: 400;",...n)}:p;var Oe=Array.prototype,Te=window.location,G=Te.hash,Ft=new WeakMap,Gt=u(function(e,n){return n(e)}),g={activeClass:"active",onClass:"on",cache:!0},rt=[],je=[];function Ht(t){return x('[href$="#'+t+'"]',document.body).filter(Y(E,{a:k,default:function(){return!0}})).concat(x('[data-href="#'+t+'"]',document))}function Le(t){let e=Ft.get(t);return e||(e={},Ft.set(t,e)),e}function D(t){var e=Le(t),n=t.id;return e.node||(e.node=t),e.buttons||(e.buttons=g.cache&&n&&Ht(n)),e}function zt(t){return g.cache&&t.buttons||t.node.id&&Ht(t.node.id)}function Me(t){if(t.type==="mousedown"){let e=f("click",t.currentTarget).each(function(o){e.stop(),o.preventDefault()})}}function Ue(t){if(t.defaultPrevented||!U(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function Ne(t){return(X(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function Fe(t,e){return t+!!e}function It(t,e){if(!F({type:"dom-activate",relatedTarget:e},t))return;let o=D(t);o.active=!0,y(o.node).add(g.activeClass);let r=zt(o);r&&r.forEach(function(a){y(a).add(g.onClass)});let i=t.querySelector(".active-focus");i&&requestAnimationFrame(()=>requestAnimationFrame(()=>i.focus()))}function it(t,e){if(!F({type:"dom-deactivate",relatedTarget:e},t))return;let o=D(t);y(o.node).remove(g.activeClass);let r=zt(o);r&&r.forEach(function(i){y(i).remove(g.onClass)}),o.active=!1}f("click",document).each(tt({"a[href]":function(t,e){if(!Ue(e)&&!(t.hostname&&!k(t))){var n=Ne(t);if(!!n){var o=document.getElementById(n);if(!!o){if(o.classList.contains("active")){e.preventDefault();return}var r=je.map(Gt(o)).reduce(Fe,0);if(r){e.preventDefault();return}if(!!rt.find(Gt(o))){var i=D(o);i.active||(e.preventDefault(),e.type==="mousedown"&&Me(e),It(o,t))}}}}},'[name="activate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="activate" target "'+n+'" not found');var i=D(r);i.active||(e.preventDefault(),It(r,t))},'[name="deactivate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="deactivate" target "'+n+'" not found');var i=D(r);!i.active||(e.preventDefault(),it(r,t))}}));var ot=F("dom-activate"),_t=new WeakSet;function Rt(t){_t.add(t)}function qt(t){return!_t.has(t)}function Ge(t,e){let n=(window.location.hash?window.location.hash+", ":"")+("."+g.activeClass),o=x(n,e).filter(qt);return e.matches(n)&&qt(e)&&o.push(e),o.length&&(t.push.apply(t,o),o.forEach(Rt)),t}function Ie(t,e){return Oe.filter.call(e.addedNodes,vt).reduce(Ge,t)}f("DOMContentLoaded",document).each(function(){let t=x("."+g.activeClass,document);t.length&&(nt("dom-activate",t.length+" elements – #"+t.map(d("id")).join(", #")),t.forEach(ot)),new MutationObserver((n,o)=>{if(n[0].type!=="childList")throw new Error("Not childList",n);let r=n.reduce(Ie,[]);r.length&&(nt("dom-activate",r.length+" elements – #"+r.map(d("id")).join(", #")),r.forEach(ot),r.forEach(Rt))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});f("load",window).each(function(){if(!(!G||!/^#\S+$/.test(G)))try{x(G,document).forEach(ot)}catch(t){console.warn("dom: Cannot activate "+G,t.message)}});var st=h("[data-toggleable]");rt.push(st);var ut=[];function qe(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}f("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!U(t)){var e=wt("a[href]",t.target);if(!!e&&!(e.hostname&&!k(e))){var n=qe(e);!n||ut.indexOf(n)!==-1&&(it(K(n),e),t.preventDefault())}}});f("dom-activate",document).each(t=>{var e=t.target;!st(e)||ut.push(W(e))});f("dom-deactivate",document).each(t=>{var e=t.target;!st(e)||R(ut,e.id)});var w={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},at={type:"mouse"},Kt=y(document.documentElement),ct,I;function ft(t){ct!==t&&(Kt.remove(ct),Kt.add(t),ct=t)}function He(t){t.timeStamp<I+w.simulatedEventDelay*1e3||(I=void 0,ft(w.mouseClass),at.type=w.mouseType)}function ze(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(ft(w.keyClass),at.type=w.keyType,I=t.timeStamp)}function _e(t){I=t.timeStamp,ft(w.touchClass),at.type=w.touchType}document.addEventListener("mousedown",He);document.addEventListener("keydown",ze);document.addEventListener("touchend",_e);function pt(t){return function(n,...o){var r=t[n]||t.default;return r&&r.apply(this,o)}}function lt(t){if(typeof t.length=="number")return t[t.length-1]}function q(t){return t===void 0?void 0:parseInt(t,10)}function ht(t){return t.replace(/-(\w)?/g,function(e,n){return n?n.toUpperCase():""})}function Re(t){return t.offsetParent!==null}f("dom-activate",document.body).map(d("target")).filter(h(".toggle-block")).each(function(t){if(!Re(t)||h(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),n=getComputedStyle(t),o=lt(t.children),r=o&&o.getBoundingClientRect().bottom,i=q(n.paddingBottom)+q(n.borderBottomWidth)+r-e.top;t.style.maxHeight=i+"px";let a=f("transitionend",t).each(function(H){a.stop(),t.style.maxHeight=""})});var Ke=pt({maxHeight:t=>t.clientHeight+"px",default:(t,e,n)=>e[n]});f("dom-deactivate",document.body).map(d("target")).filter(h(".toggle-block")).each(function(t){let e=t.getAttribute("style"),n=getComputedStyle(t),o=n["transition-property"].split(/\s*,\s*/).map(ht);t.style.transition="none",o.forEach(r=>t.style[r]=Ke(r,t,n,r)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
