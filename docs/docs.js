/* location-select 
   0.1.0
   By Stephen Band
   Built 2022-06-03 15:26 */

var gt=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var yt=(t,e)=>{var o={};for(var r in t)Vt.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&gt)for(var r of gt(t))e.indexOf(r)<0&&Jt.call(t,r)&&(o[r]=t[r]);return o};function O(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var Qt=Array.prototype;function Xt(t,e){return typeof t=="function"?t.apply(null,e):t}function wt(t,e,o){o=o||t.length;var r=o===1?e?t:O(t):O(function(i){return wt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):Xt(r(s),Qt.slice.call(arguments,1))}}var c=wt;function W(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return e}var rn=c(W,!0);function $(t){return document.getElementById(t)||void 0}function k(t){return t.tagName&&t.tagName.toLowerCase()}function Yt(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):k(e)===t}var m=c(Yt,!0);function vt(t,e){var o=arguments[2];if(!(!e||e===document||e===o||e.nodeType===11))return e=e.correspondingUseElement||e,m(t,e)?e:vt(t,e.parentNode,o)}var bt=c(vt,!0);function Z(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function xt(t){return t.nodeType===1}function te(t){return(/^\//.test(t)?"":"/")+t}function S(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===te(t.pathname)}function V(t){return t}function l(){}var ee=Object.freeze;function Et(){return this}var w=ee({shift:l,push:l,forEach:l,join:function(){return""},map:Et,filter:Et,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:l,pipe:V,start:l,stop:l,done:l,valueOf:function(){return null}});function J(){return this}function Q(t){return t&&t[Symbol.iterator]}var ne=Object.assign;function oe(t){return t.stop?t.stop():t()}function re(t){t.forEach(oe),t.length=0}function x(){}ne(x.prototype,{stop:function(){return this.stopables&&re(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var ie=Object.assign;function j(t){x.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,j(o)}function a(){}ie(a.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&j(this[0]),this}});var h=Object.assign,d=Object.create;function C(t,e){e!==void 0&&t[0].push(e)}function se(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o];j(e)}else t.stop()}function u(t){this.input=t}h(u.prototype,x.prototype,{push:function(t){C(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new kt(this,t)},filter:function(t){return new St(this,t)},split:function(t){return new At(this,t)},flatMap:function(t){return new Ct(this,t)},take:function(t){return new Bt(this,t)},each:function(t){return new Pt(this,t)},reduce:function(t,e){return new Dt(this,t,e)},scan:function(t,e){return new Tt(this,t,e)},stop:function(){return se(this.input,this),this}});function kt(t,e){this.input=t,this.fn=e}kt.prototype=h(d(u.prototype),{push:function(e){let o=this.fn;C(this,o(e))}});function St(t,e){this.input=t,this.fn=e}St.prototype=h(d(u.prototype),{push:function(e){this.fn(e)&&C(this,e)}});function Ct(t,e){this.input=t,this.fn=e}Ct.prototype=h(d(u.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(Q(r))for(let i of r)C(this,i);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function At(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}At.prototype=h(d(u.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(C(this,o),this.chunk=[]):o.push(e)}});function Bt(t,e){this.input=t,this.count=e}Bt.prototype=h(d(u.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function Dt(t,e,o){return this.input=t,this.fn=e,this.value=o,this.i=0,t.pipe(this),o}Dt.prototype=h(d(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function Tt(t,e,o){this.input=t,this.fn=e,this.value=o}Tt.prototype=h(d(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function Pt(t,e){this.input=t,this.push=e,t.pipe(this)}Pt.prototype=h(d(u.prototype),{each:null,reduce:null,pipe:null});var ue=Array.prototype,ce=Object.assign,ae=Object.create;function A(t){this.buffer=t||[]}A.prototype=ce(ae(u.prototype),a.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(ue.shift.apply(this.buffer));return this.buffer=this[0],t}});var Ot=Object.assign,fe=Promise.resolve(),pe={schedule:function(){fe.then(this.fire)},unschedule:l},le={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},he={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function B(t,e){u.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},Ot(this,e==="tick"?pe:e==="frame"?le:he)}Ot(B.prototype,u.prototype,{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=u.of(t),this[0].push(this.output),this.schedule())},stop:function(){this.timer&&this.fire(),u.prototype.stop.apply(this,arguments)}});var me=Object.assign,de=Object.create;function D(t,e){u.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(w)}D.prototype=me(de(u.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var ge=Object.assign;function L(t){this.promise=t}ge(L.prototype,a.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(o=>this[0].push(o)).finally(o=>this.stop())},stop:function(){a.prototype.stop.apply(this,arguments),this[0]=w}});var Lt=Object.assign,Mt=Object.keys;function jt(t,e,o){let r=t.values,i=t.names,s=t[0];r[e]=o,(t.active||(t.active=Mt(r).length===i.length))&&s.push(Lt({},r))}function M(t){this.inputs=t,this.active=!1}Lt(M.prototype,a.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=Mt(e),this[0]=t;for(let o in e){let r=e[o];r.pipe?t.done(r.each(i=>jt(this,o,i))):r.then?r.then(i=>jt(this,o,i)):console.log("Todo: combine() raw values ?")}}});var ye=Object.assign;function U(t){this.inputs=t}ye(U.prototype,a.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let o=-1,r;for(;r=e[++o];)if(r.pipe)r.pipe(t);else if(r.then)r.then(i=>t.push(i));else{let i=-1;for(;++i<r.length;)t.push(r[i])}},stop:function(){let t=this.inputs,e=-1,o;for(;o=t[++e];)o.stop&&o.stop();return a.prototype.stop.apply(this,arguments)}});var Y=Array.prototype,we=Object.assign;function ve(t){return t.length>0}function be(t,e,o){return t[o]=e.shift(),t}function xe(t){return[]}function X(t,e,o,r){o.push(r),e.every(ve)&&t.push(e.reduce(be,{}))}function F(t){this.inputs=t,this.buffers=Y.map.call(t,xe)}we(F.prototype,a.prototype,{pipe:function(t){let e=this.inputs,o=this.buffers;this[0]=t,Y.forEach.call(e,(r,i)=>{let s=o[i];r.each?t.done(r.each(f=>X(t,o,s,f))):r.then?r.then(f=>X(t,o,s,f)):Y.forEach.call(r,f=>X(t,o,s,f))})},stop:function(){let t=this.inputs,e=-1,o;for(;o=t[++e];)o.stop();return a.prototype.stop.apply(this,arguments)}});var Ee=Array.prototype,Ut=Object.assign;function ke(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var Ft=Ut(u,{of:function(){return new A(Ee.slice.apply(arguments))},from:function(t){return t.pipe?new u(t):t.then?new u(new L(t)):typeof t.length=="number"?new A(t):ke(t)},burst:function(e){return new B(w,e)},broadcast:function(e){return new D(w,e)},combine:function(e){return new u(new M(e))},merge:function(){return new u(new U(arguments))},zip:function(){return new u(new F(arguments))}});Ut(u.prototype,{log:J,burst:function(t){return new B(this,t)},broadcast:function(t){return new D(this,t)}});var Se=Object.assign,Ce=/\s+/,Nt={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function N(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var Gt=0;window.addEventListener("click",t=>Gt=t.timeStamp);function Ae(t,e){return t.node.addEventListener(Nt[e]||e,t,t.options),t}function Be(t,e){return t.node.removeEventListener(Nt[e]||e,t),t}function It(t,e,o){this.types=t.split(Ce),this.options=e,this.node=o,this.select=e&&e.select}Se(It.prototype,a.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Ae,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Gt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Be,this),a.prototype.stop.apply(this,arguments)}});function p(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new Ft(new It(t,o,e))}function De(t,e){return e[t]}var g=c(De,!0);function tt(t){return!!t||t!=null&&!Number.isNaN(t)}function et(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}var G=g("classList"),v=G;function Te(t,e){G(e).add(t)}function Pe(t,e){G(e).remove(t)}function Oe(t,e){(function o(r){return t--?requestAnimationFrame(o):e(r)})()}function je(t,e){var o=G(e);o.add(t),Oe(2,()=>o.remove(t))}var go=c(Te,!0),yo=c(Pe,!0),wo=c(je,!0);function nt(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(r){let i=r.target,s=-1;for(;e[++s];){let f=i.closest(e[s]);if(f)return t[e[s]](f,...arguments)}}}var Le=Object.assign,T={bubbles:!0,cancelable:!0};function Me(t,e){var K;let o=T,r,i,s,f,_,R;return typeof t=="object"?(K=t,{type:t,detail:i,bubbles:s,cancelable:f,composed:_}=K,r=yt(K,["type","detail","bubbles","cancelable","composed"]),R=Le(new CustomEvent(t,{detail:i,bubbles:s||T.bubbles,cancelable:f||T.cancelable,composed:_||T.composed}),r)):R=new CustomEvent(t,T),e.dispatchEvent(R)}var I=c(Me,!0);function ot(t){if(t.toArray)return t.toArray();var e=[],o=t.length,r;if(typeof t.length!="number")return e;for(e.length=o,r=0;r<o;r++)e[r]=t[r];return e}function Ue(t,e){return ot(e.querySelectorAll(t))}var E=c(Ue,!0);var Fe=!1,rt=Fe?function(e,...o){window.console&&window.console.log&&window.console.log("%cbolt %c"+e+"%c","color: #888888; font-weight: 400;","color: #3a8ab0; font-weight: 600;","color: inherit; font-weight: 400;",...o)}:l;var Ne=Array.prototype,Ge=window.location,q=Ge.hash,qt=new WeakMap,Ht=c(function(e,o){return o(e)}),y={activeClass:"active",onClass:"on",cache:!0},st=[],Ie=[];function Rt(t){return E('[href$="#'+t+'"]',document.body).filter(et(k,{a:S,default:function(){return!0}})).concat(E('[data-href="#'+t+'"]',document))}function qe(t){let e=qt.get(t);return e||(e={},qt.set(t,e)),e}function P(t){var e=qe(t),o=t.id;return e.node||(e.node=t),e.buttons||(e.buttons=y.cache&&o&&Rt(o)),e}function Kt(t){return y.cache&&t.buttons||t.node.id&&Rt(t.node.id)}function He(t){if(t.type==="mousedown"){let e=p("click",t.currentTarget).each(function(r){e.stop(),r.preventDefault()})}}function ze(t){if(t.defaultPrevented||!N(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function _e(t){return(tt(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function Re(t,e){return t+!!e}function zt(t,e){if(!I({type:"dom-activate",relatedTarget:e},t))return;let r=P(t);r.active=!0,v(r.node).add(y.activeClass);let i=Kt(r);i&&i.forEach(function(f){v(f).add(y.onClass)});let s=t.querySelector(".active-focus");s&&requestAnimationFrame(()=>requestAnimationFrame(()=>s.focus()))}function ut(t,e){if(!I({type:"dom-deactivate",relatedTarget:e},t))return;let r=P(t);v(r.node).remove(y.activeClass);let i=Kt(r);i&&i.forEach(function(s){v(s).remove(y.onClass)}),r.active=!1}p("click",document).each(nt({"a[href]":function(t,e){if(!ze(e)&&!(t.hostname&&!S(t))){var o=_e(t);if(!!o){var r=document.getElementById(o);if(!!r){if(r.classList.contains("active")){e.preventDefault();return}var i=Ie.map(Ht(r)).reduce(Re,0);if(i){e.preventDefault();return}if(!!st.find(Ht(r))){var s=P(r);s.active||(e.preventDefault(),e.type==="mousedown"&&He(e),zt(r,t))}}}}},'[name="activate"]':function(t,e){let o=t.value,r=o.replace(/^#/,""),i=document.getElementById(r);if(!i)throw new Error('Button action name="activate" target "'+o+'" not found');var s=P(i);s.active||(e.preventDefault(),zt(i,t))},'[name="deactivate"]':function(t,e){let o=t.value,r=o.replace(/^#/,""),i=document.getElementById(r);if(!i)throw new Error('Button action name="deactivate" target "'+o+'" not found');var s=P(i);!s.active||(e.preventDefault(),ut(i,t))}}));var it=I("dom-activate"),Wt=new WeakSet;function $t(t){Wt.add(t)}function _t(t){return!Wt.has(t)}function Ke(t,e){let o=(window.location.hash?window.location.hash+", ":"")+("."+y.activeClass),r=E(o,e).filter(_t);return e.matches(o)&&_t(e)&&r.push(e),r.length&&(t.push.apply(t,r),r.forEach($t)),t}function We(t,e){return Ne.filter.call(e.addedNodes,xt).reduce(Ke,t)}p("DOMContentLoaded",document).each(function(){let t=E("."+y.activeClass,document);t.length&&(rt("dom-activate",t.length+" elements – #"+t.map(g("id")).join(", #")),t.forEach(it)),new MutationObserver((o,r)=>{if(o[0].type!=="childList")throw new Error("Not childList",o);let i=o.reduce(We,[]);i.length&&(rt("dom-activate",i.length+" elements – #"+i.map(g("id")).join(", #")),i.forEach(it),i.forEach($t))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});p("load",window).each(function(){if(!(!q||!/^#\S+$/.test(q)))try{E(q,document).forEach(it)}catch(t){console.warn("dom: Cannot activate "+q,t.message)}});var ct=m("[data-toggleable]");st.push(ct);var at=[];function $e(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}p("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!N(t)){var e=bt("a[href]",t.target);if(!!e&&!(e.hostname&&!S(e))){var o=$e(e);!o||at.indexOf(o)!==-1&&(ut($(o),e),t.preventDefault())}}});p("dom-activate",document).each(t=>{var e=t.target;!ct(e)||at.push(Z(e))});p("dom-deactivate",document).each(t=>{var e=t.target;!ct(e)||W(at,e.id)});var b={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},pt={type:"mouse"},Zt=v(document.documentElement),ft,H;function lt(t){ft!==t&&(Zt.remove(ft),Zt.add(t),ft=t)}function Ze(t){t.timeStamp<H+b.simulatedEventDelay*1e3||(H=void 0,lt(b.mouseClass),pt.type=b.mouseType)}function Ve(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(lt(b.keyClass),pt.type=b.keyType,H=t.timeStamp)}function Je(t){H=t.timeStamp,lt(b.touchClass),pt.type=b.touchType}document.addEventListener("mousedown",Ze);document.addEventListener("keydown",Ve);document.addEventListener("touchend",Je);function ht(t){return function(o,...r){var i=t[o]||t.default;return i&&i.apply(this,r)}}function mt(t){if(typeof t.length=="number")return t[t.length-1]}function z(t){return t===void 0?void 0:parseInt(t,10)}function dt(t){return t.replace(/-(\w)?/g,function(e,o){return o?o.toUpperCase():""})}function Qe(t){return t.offsetParent!==null}p("dom-activate",document.body).map(g("target")).filter(m(".toggle-block")).each(function(t){if(!Qe(t)||m(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),o=getComputedStyle(t),r=mt(t.children),i=r&&r.getBoundingClientRect().bottom,s=z(o.paddingBottom)+z(o.borderBottomWidth)+i-e.top;t.style.maxHeight=s+"px";let f=p("transitionend",t).each(function(_){f.stop(),t.style.maxHeight=""})});var Xe=ht({maxHeight:t=>t.clientHeight+"px",default:(t,e,o)=>e[o]});p("dom-deactivate",document.body).map(g("target")).filter(m(".toggle-block")).each(function(t){let e=t.getAttribute("style"),o=getComputedStyle(t),r=o["transition-property"].split(/\s*,\s*/).map(dt);t.style.transition="none",r.forEach(i=>t.style[i]=Xe(i,t,o,i)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
