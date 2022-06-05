/* location-select 
   0.2.0
   By Stephen Band
   Built 2022-06-05 15:16 */

var dt=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var gt=(t,e)=>{var o={};for(var r in t)Vt.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&dt)for(var r of dt(t))e.indexOf(r)<0&&Jt.call(t,r)&&(o[r]=t[r]);return o};function P(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var Qt=Array.prototype;function Xt(t,e){return typeof t=="function"?t.apply(null,e):t}function yt(t,e,o){o=o||t.length;var r=o===1?e?t:P(t):P(function(i){return yt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):Xt(r(s),Qt.slice.call(arguments,1))}}var u=yt;function K(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return e}var nn=u(K,!0);function W(t){return document.getElementById(t)||void 0}function C(t){return t.tagName&&t.tagName.toLowerCase()}function Yt(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):C(e)===t}var m=u(Yt,!0);function wt(t,e){var o=arguments[2];if(!(!e||e===document||e===o||e.nodeType===11))return e=e.correspondingUseElement||e,m(t,e)?e:wt(t,e.parentNode,o)}var vt=u(wt,!0);function $(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function bt(t){return t.nodeType===1}function Zt(t){return(/^\//.test(t)?"":"/")+t}function B(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===Zt(t.pathname)}function V(t){return t}function p(){}var te=Object.freeze;function xt(){return this}var E=te({shift:p,push:p,forEach:p,join:function(){return""},map:xt,filter:xt,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:p,pipe:V,start:p,stop:p,done:p,valueOf:function(){return null}});function J(){return this}function Q(t){return t&&t[Symbol.iterator]}var ee=Object.assign;function ne(t){return t.stop?t.stop():t()}function D(){}ee(D.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(ne),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var l=Object.assign,d=Object.create;function h(t,e){t&&t.push(e)}function w(t){D.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function c(t){this.input=t}l(c.prototype,D.prototype,{push:function(t){h(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new Et(this,t)},filter:function(t){return new St(this,t)},split:function(t){return new Ct(this,t)},flatMap:function(t){return new kt(this,t)},take:function(t){return new Bt(this,t)},each:function(t){return this.pipe(new Tt(t))},reduce:function(t,e){return this.pipe(new Dt(t,e)).value},scan:function(t,e){return new At(this,t,e)},stop:function(){return w(this),this}});function Et(t,e){this.input=t,this.fn=e}Et.prototype=l(d(c.prototype),{push:function(e){let r=this.fn(e);r!==void 0&&h(this[0],r)}});function St(t,e){this.input=t,this.fn=e}St.prototype=l(d(c.prototype),{push:function(e){this.fn(e)&&h(this[0],e)}});function kt(t,e){this.input=t,this.fn=e}kt.prototype=l(d(c.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(Q(r))for(let i of r)h(this[0],i);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function Ct(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}Ct.prototype=l(d(c.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(h(this[0],o),this.chunk=[]):o.push(e)}});function Bt(t,e){this.input=t,this.count=e}Bt.prototype=l(d(c.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function Dt(t,e){this.fn=t,this.value=e,this.i=0}Dt.prototype=l(d(c.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function At(t,e,o){this.input=t,this.fn=e,this.value=o}At.prototype=l(d(c.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function Tt(t){this.push=t}Tt.prototype=l(d(c.prototype),{each:null,reduce:null,pipe:null});var oe=Object.assign,re=Object.create;function ie(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o]}else t.stop()}function A(t,e){c.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(E)}A.prototype=oe(re(c.prototype),{push:function(t){if(t===void 0)return;this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)},pipe:function(t){let e=-1;for(;this[++e];);return this.memory&&e===0&&this.input.pipe(this),this[e]=t,t.done(()=>ie(this,t)),this.value!==void 0&&t.push(this.value),!this.memory&&e===0&&this.input.pipe(this),t}});var se=Array.prototype,ce=Object.assign,ue=Object.create;function ae(t){return t!==void 0}function T(t){this.buffer=t?t.filter?t.filter(ae):t:[],this.output=this.buffer}T.prototype=ce(ue(c.prototype),{push:function(t){t!==void 0&&this.output.push(t)},pipe:function(t){for(t.done(this),this[0]=t;this.buffer.length;)t.push(se.shift.apply(this.buffer));return this.output=t,t},stop:function(){return this.output=this.buffer,c.prototype.stop.apply(this,arguments)}});var Ot=Object.assign,fe=Object.create,pe=Promise.resolve(),he={schedule:function(){pe.then(this.fire)},unschedule:p},le={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},me={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function v(t,e){c.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},Ot(this,e==="tick"?he:e==="frame"?le:me)}v.prototype=Ot(fe(c.prototype),{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=c.of(t),this[0].push(this.output),this.schedule())},stop:function(){return this.timer&&this.fire(),c.prototype.stop.apply(this,arguments)}});var X=Object.assign,de=Object.create,jt=Object.keys;function Y(t,e,o,r,i){this.stream=t,this.names=e,this.values=o,this.name=r,this.input=i}X(Y.prototype,{push:function(t){let e=this.stream,o=this.values,r=this.name;o[r]=t,(e.active||(e.active=jt(o).length===this.names.length))&&h(e[0],X({},o))},stop:function(){--this.stream.count===0&&w(this.stream)},done:function(t){this.stream.done(t)}});function L(t){this.inputs=t,this.active=!1}L.prototype=X(de(c.prototype),{push:null,pipe:function(t){let e=this.inputs,o=jt(e),r={};this.count=o.length,this[0]=t,t.done(this);let i;for(i in e){let s=e[i];if(s.pipe){let a=new Y(this,o,r,i,s);s.pipe(a)}else if(s.then){let a=new Y(this,o,r,i,s);s.then(k=>a.push(k)),s.finally(()=>a.stop())}else r[i]=s,--this.count}return t}});var Mt=Object.assign,ge=Object.create;function Pt(t){this.stream=t}Mt(Pt.prototype,{push:function(t){h(this.stream[0],t)},stop:function(){--this.stream.count===0&&w(this.stream)},done:function(t){this.stream.done(t)}});function U(t){this.inputs=t}U.prototype=Mt(ge(c.prototype),{push:null,pipe:function(t){let e=this.inputs;this.count=e.length,this[0]=t,t.done(this);let o=new Pt(this),r=-1,i;for(;i=e[++r];)if(i.pipe)i.pipe(o);else if(i.then)i.then(s=>o.push(s)),i.finally(()=>o.stop());else{let s=-1;for(;++s<i.length;)o.push(i[s]);o.stop()}return t}});var ye=Object.assign,we=Object.create;function F(t){this.promise=t}F.prototype=ye(we(c.prototype),{push:null,pipe:function(t){let e=this.promise;return this[0]=t,t.done(this),e.then(o=>h(this,o)),e.finally(()=>w(this)),t}});var ve=Array.prototype,Lt=Object.assign;function be(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var Ut=Lt(c,{of:function(){return new T(ve.slice.apply(arguments))},from:function(t){return t.pipe?new c(t):t.then?new F(t):typeof t.length=="number"?new T(t):be(t)},batch:t=>new v(E,t),burst:t=>(console.warn("Stream.burst() is now Stream.batch()"),new v(E,t)),broadcast:t=>new A(E,t),combine:t=>new L(t),merge:function(){return new U(arguments)}});Lt(c.prototype,{log:J,batch:function(t){return new v(this,t)},burst:function(t){return console.warn("stream.burst() is now stream.batch()"),new v(this,t)},broadcast:function(t){return new A(this,t)}});var xe=Object.assign;function O(){}xe(O.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&c(this[0]),this}});var Ee=Object.assign,Se=/\s+/,Ft={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function N(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var Nt=0;window.addEventListener("click",t=>Nt=t.timeStamp);function ke(t,e){return t.node.addEventListener(Ft[e]||e,t,t.options),t}function Ce(t,e){return t.node.removeEventListener(Ft[e]||e,t),t}function Gt(t,e,o){this.types=t.split(Se),this.options=e,this.node=o,this.select=e&&e.select}Ee(Gt.prototype,O.prototype,{pipe:function(t){this[0]=t,this.types.reduce(ke,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Nt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Ce,this),O.prototype.stop.apply(this,arguments)}});function f(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new Ut(new Gt(t,o,e))}function Be(t,e){return e[t]}var g=u(Be,!0);function Z(t){return!!t||t!=null&&!Number.isNaN(t)}function tt(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}var G=g("classList"),b=G;function De(t,e){G(e).add(t)}function Ae(t,e){G(e).remove(t)}function Te(t,e){(function o(r){return t--?requestAnimationFrame(o):e(r)})()}function Oe(t,e){var o=G(e);o.add(t),Te(2,()=>o.remove(t))}var fo=u(De,!0),po=u(Ae,!0),ho=u(Oe,!0);function et(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(r){let i=r.target,s=-1;for(;e[++s];){let a=i.closest(e[s]);if(a)return t[e[s]](a,...arguments)}}}var je=Object.assign,j={bubbles:!0,cancelable:!0};function Me(t,e){var R;let o=j,r,i,s,a,k,_;return typeof t=="object"?(R=t,{type:t,detail:i,bubbles:s,cancelable:a,composed:k}=R,r=gt(R,["type","detail","bubbles","cancelable","composed"]),_=je(new CustomEvent(t,{detail:i,bubbles:s||j.bubbles,cancelable:a||j.cancelable,composed:k||j.composed}),r)):_=new CustomEvent(t,j),e.dispatchEvent(_)}var I=u(Me,!0);function nt(t){if(t.toArray)return t.toArray();var e=[],o=t.length,r;if(typeof t.length!="number")return e;for(e.length=o,r=0;r<o;r++)e[r]=t[r];return e}function Pe(t,e){return nt(e.querySelectorAll(t))}var S=u(Pe,!0);var Le=!1,ot=Le?function(e,...o){window.console&&window.console.log&&window.console.log("%cbolt %c"+e+"%c","color: #888888; font-weight: 400;","color: #3a8ab0; font-weight: 600;","color: inherit; font-weight: 400;",...o)}:p;var Ue=Array.prototype,Fe=window.location,q=Fe.hash,It=new WeakMap,qt=u(function(e,o){return o(e)}),y={activeClass:"active",onClass:"on",cache:!0},it=[],Ne=[];function _t(t){return S('[href$="#'+t+'"]',document.body).filter(tt(C,{a:B,default:function(){return!0}})).concat(S('[data-href="#'+t+'"]',document))}function Ge(t){let e=It.get(t);return e||(e={},It.set(t,e)),e}function M(t){var e=Ge(t),o=t.id;return e.node||(e.node=t),e.buttons||(e.buttons=y.cache&&o&&_t(o)),e}function Rt(t){return y.cache&&t.buttons||t.node.id&&_t(t.node.id)}function Ie(t){if(t.type==="mousedown"){let e=f("click",t.currentTarget).each(function(r){e.stop(),r.preventDefault()})}}function qe(t){if(t.defaultPrevented||!N(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function He(t){return(Z(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function ze(t,e){return t+!!e}function Ht(t,e){if(!I({type:"dom-activate",relatedTarget:e},t))return;let r=M(t);r.active=!0,b(r.node).add(y.activeClass);let i=Rt(r);i&&i.forEach(function(a){b(a).add(y.onClass)});let s=t.querySelector(".active-focus");return s&&requestAnimationFrame(()=>requestAnimationFrame(()=>s.focus())),!0}function st(t,e){if(!I({type:"dom-deactivate",relatedTarget:e},t))return;let r=M(t);b(r.node).remove(y.activeClass);let i=Rt(r);return i&&i.forEach(function(s){b(s).remove(y.onClass)}),r.active=!1,!0}f("click",document).each(et({"a[href]":function(t,e){if(!qe(e)&&!(t.hostname&&!B(t))){var o=He(t);if(!!o){var r=document.getElementById(o);if(!!r){if(r.classList.contains("active")){e.preventDefault();return}var i=Ne.map(qt(r)).reduce(ze,0);if(i){e.preventDefault();return}if(!!it.find(qt(r))){var s=M(r);s.active||(e.preventDefault(),e.type==="mousedown"&&Ie(e),Ht(r,t))}}}}},'[name="activate"]':function(t,e){let o=t.value,r=o.replace(/^#/,""),i=document.getElementById(r);if(!i)throw new Error('Button action name="activate" target "'+o+'" not found');var s=M(i);s.active||(e.preventDefault(),Ht(i,t))},'[name="deactivate"]':function(t,e){let o=t.value,r=o.replace(/^#/,""),i=document.getElementById(r);if(!i)throw new Error('Button action name="deactivate" target "'+o+'" not found');var s=M(i);!s.active||(e.preventDefault(),st(i,t))}}));var rt=I("dom-activate"),Kt=new WeakSet;function Wt(t){Kt.add(t)}function zt(t){return!Kt.has(t)}function _e(t,e){let o=(window.location.hash?window.location.hash+", ":"")+("."+y.activeClass),r=S(o,e).filter(zt);return e.matches(o)&&zt(e)&&r.push(e),r.length&&(t.push.apply(t,r),r.forEach(Wt)),t}function Re(t,e){return Ue.filter.call(e.addedNodes,bt).reduce(_e,t)}f("DOMContentLoaded",document).each(function(){let t=S("."+y.activeClass,document);t.length&&(ot("dom-activate",t.length+" elements – #"+t.map(g("id")).join(", #")),t.forEach(rt)),new MutationObserver((o,r)=>{if(o[0].type!=="childList")throw new Error("Not childList",o);let i=o.reduce(Re,[]);i.length&&(ot("dom-activate",i.length+" elements – #"+i.map(g("id")).join(", #")),i.forEach(rt),i.forEach(Wt))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});f("load",window).each(function(){if(!(!q||!/^#\S+$/.test(q)))try{S(q,document).forEach(rt)}catch(t){console.warn("dom: Cannot activate "+q,t.message)}});var ct=m("[data-toggleable]");it.push(ct);var ut=[];function Ke(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}f("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!N(t)){var e=vt("a[href]",t.target);if(!!e&&!(e.hostname&&!B(e))){var o=Ke(e);!o||ut.indexOf(o)!==-1&&(st(W(o),e),t.preventDefault())}}});f("dom-activate",document).each(t=>{var e=t.target;!ct(e)||ut.push($(e))});f("dom-deactivate",document).each(t=>{var e=t.target;!ct(e)||K(ut,e.id)});var x={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},ft={type:"mouse"},$t=b(document.documentElement),at,H;function pt(t){at!==t&&($t.remove(at),$t.add(t),at=t)}function We(t){t.timeStamp<H+x.simulatedEventDelay*1e3||(H=void 0,pt(x.mouseClass),ft.type=x.mouseType)}function $e(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(pt(x.keyClass),ft.type=x.keyType,H=t.timeStamp)}function Ve(t){H=t.timeStamp,pt(x.touchClass),ft.type=x.touchType}document.addEventListener("mousedown",We);document.addEventListener("keydown",$e);document.addEventListener("touchend",Ve);function ht(t){return function(o,...r){var i=t[o]||t.default;return i&&i.apply(this,r)}}function lt(t){if(typeof t.length=="number")return t[t.length-1]}function z(t){return t===void 0?void 0:parseInt(t,10)}function mt(t){return t.replace(/-(\w)?/g,function(e,o){return o?o.toUpperCase():""})}function Je(t){return t.offsetParent!==null}f("dom-activate",document.body).map(g("target")).filter(m(".toggle-block")).each(function(t){if(!Je(t)||m(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),o=getComputedStyle(t),r=lt(t.children),i=r&&r.getBoundingClientRect().bottom,s=z(o.paddingBottom)+z(o.borderBottomWidth)+i-e.top;t.style.maxHeight=s+"px";let a=f("transitionend",t).each(function(k){a.stop(),t.style.maxHeight=""})});var Qe=ht({maxHeight:t=>t.clientHeight+"px",default:(t,e,o)=>e[o]});f("dom-deactivate",document.body).map(g("target")).filter(m(".toggle-block")).each(function(t){let e=t.getAttribute("style"),o=getComputedStyle(t),r=o["transition-property"].split(/\s*,\s*/).map(mt);t.style.transition="none",r.forEach(i=>t.style[i]=Qe(i,t,o,i)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
