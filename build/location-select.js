/* location-select 
   0.1.0
   By Stephen Band
   Built 2022-06-05 14:44 */

function x(t){return t}function b(t,e){return function(){let i=t.apply(this,arguments),r=e[i]||e.default;if(!r)throw new Error('overload() no handler for "'+i+'"');return r.apply(this,arguments)}}function C(t){var e=new Map;return function(i){if(e.has(i))return e.get(i);var r=t(i);return e.set(i,r),r}}var jt=Array.prototype;function _t(t,e){return typeof t=="function"?t.apply(null,e):t}function Y(t,e,o){o=o||t.length;var i=o===1?e?t:C(t):C(function(r){return Y(function(){var s=[r];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function r(s){return arguments.length===0?r:arguments.length===1?i(s):arguments.length>=o?t.apply(null,arguments):_t(i(s),jt.slice.call(arguments,1))}}var y=Y;function p(){}var Ct=b(x,{is:p,tag:p,html:function(t,e,o){e.innerHTML=o},text:function(t,e,o){e.textContent=o},children:function(t,e,o){e.innerHTML="",e.append.apply(e,o)},points:M,cx:M,cy:M,r:M,preserveAspectRatio:M,viewBox:M,default:function(t,e,o){t in e?e[t]=o:e.setAttribute(t,o)}});function M(t,e,o){e.setAttribute(t,o)}function Bt(t,e){for(var o=Object.keys(e),i=o.length;i--;)Ct(o[i],t,e[o[i]]);return t}var B=y(Bt,!0);var N="http://www.w3.org/2000/svg",Z=document.createElement("div"),I=(t,e)=>e&&typeof e;function tt(t,e){let o=document.createRange();return o.selectNode(t),o.createContextualFragment(e)}var l=b(I,{string:function(t,e){let o=document.createElementNS(N,t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElementNS(N,t);return typeof e.length=="number"?o.append.apply(o,e):B(o,e),o},default:t=>document.createElementNS(N,t)}),Dt=b(I,{string:function(t,e){let o=document.createElement(t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElement(t);return typeof e.length=="number"?o.append.apply(o,e):B(o,e),o},default:t=>document.createElement(t)}),Ft=b(x,{comment:function(t,e){return document.createComment(e||"")},fragment:b(I,{string:function(t,e,o){if(o)return tt(o,e);let i=document.createDocumentFragment();Z.innerHTML=e;let r=Z.childNodes;for(;r[0];)i.appendChild(r[0]);return i},object:function(t,e,o){let i=o?tt(o):document.createDocumentFragment();return typeof e.length=="number"?i.append.apply(i,e):B(i,e),i},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:l,ellipse:l,g:l,glyph:l,image:l,line:l,rect:l,use:l,path:l,pattern:l,polygon:l,polyline:l,svg:l,default:Dt}),V=Ft;function z(t,e,o){let i;typeof o!="string"&&o.input!==void 0&&o.index!==void 0&&(i=o,o=i.input.slice(o.index+o[0].length+(o.consumed||0)));let r=t.exec(o);if(!r)return;let s=e(r);return i&&(i.consumed=(i.consumed||0)+r.index+r[0].length+(r.consumed||0)),s}var ze=y(z,!0);function Ut(t,e,o){throw o.input!==void 0&&o.index!==void 0&&(o=o.input),new Error('Cannot parse string "'+(o.length>128?o.length.slice(0,128)+"…":o)+'"')}function Gt(t,e,o){let i=-1;for(;++i<o.length;)e=o[i]!==void 0&&t[i]?t[i](e,o):e;return t.done?t.done(e,o):t.close?t.close(e,o):e}function Rt(t,e,o,i){let r=z(t,s=>Gt(e,o,s),i);return r===void 0?e.catch?e.catch(o,i):Ut(t,e,i):r}var et=y(Rt,!0);var $=p;var h=Symbol("internals"),S=Symbol("shadow"),nt=Object.defineProperties,Nt={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},It={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[h].form}},labels:{get:function(){return this[h].labels}},validity:{get:function(){return this[h].validity}},validationMessage:{get:function(){return this[h].validationMessage}},willValidate:{get:function(){return this[h].willValidate}},checkValidity:{value:function(){return this[h].checkValidity()}},reportValidity:{value:function(){return this[h].reportValidity()}}},Vt={},ot={once:!0},zt=0,it=!1;function $t(t){return Nt[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var qt=et(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function Kt(t,e){if(t.hasOwnProperty(e)){let o=t[e];delete t[e],t[e]=o}return t}function Qt(t,e,o){t._initialLoad=!0;let i=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(o){let r=V("link",{rel:"stylesheet",href:o});i.append(r)}return t[S]=i,i}function Jt(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=V("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(o){this.input.value=o},e}function Wt(t){t._initialAttributes={},t._n=0}function Xt(t,e,o){let i=t._initialAttributes;for(;t._n<e.length&&i[e[t._n]]!==void 0;)o[e[t._n]].call(t,i[e[t._n]]),++t._n}function rt(t,e,o){if(!t._initialAttributes)return;let i=t._initialAttributes;for(;t._n<e.length;)i[e[t._n]]!==void 0&&o[e[t._n]]&&o[e[t._n]].call(t,i[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function Yt(t){return!!t.attribute}function Zt(t){return t.set||t.get||t.hasOwnProperty("value")}function st(t,e){return Yt(e[1])&&(t.attributes[e[0]]=e[1].attribute),Zt(e[1])&&(t.properties[e[0]]=e[1]),t}function q(t,e,o,i){let{name:r,tag:s}=qt(t),E=typeof s=="string"?$t(s):HTMLElement,{attributes:m,properties:k}=o?Object.entries(o).reduce(st,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(st,{attributes:{},properties:{}}):Vt;function c(){let a=Reflect.construct(E,arguments,c),f=e.construct&&e.construct.length>zt?Qt(a,e,i||e.stylesheet):void 0,d=c.formAssociated&&Jt(a);return s&&(it=!0),e.construct&&e.construct.call(a,f,d),m&&(Wt(a),Promise.resolve(1).then(function(){rt(a,c.observedAttributes,m)})),k&&Object.keys(k).reduce(Kt,a),a}return c.prototype=Object.create(E.prototype,k),k&&k.value&&(c.formAssociated=!0,nt(c.prototype,It),(e.enable||e.disable)&&(c.prototype.formDisabledCallback=function(a){return a?e.disable&&e.disable.call(this,this[S],this[h]):e.enable&&e.enable.call(this,this[S],this[h])}),e.reset&&(c.prototype.formResetCallback=function(){return e.reset.call(this,this[S],this[h])}),e.restore&&(c.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[S],this[h])})),m&&(c.observedAttributes=Object.keys(m),c.prototype.attributeChangedCallback=function(a,f,d){if(!this._initialAttributes)return m[a].call(this,d);this._initialAttributes[a]=d,Xt(this,c.observedAttributes,m)}),c.prototype.connectedCallback=function(){let a=this,f=a[S],d=a[h];if(a._initialAttributes&&rt(a,c.observedAttributes,m),a._initialLoad){let A=f.querySelectorAll('link[rel="stylesheet"]');if(A.length){let Mt=0,R=A.length,X=function(Ht){++Mt>=A.length&&(delete a._initialLoad,e.load&&($("element()","loaded",Array.from(A).map(Pt=>Pt.href).join(`
`)),e.load.call(a,f)))},Ot=X;for(;R--;)A[R].addEventListener("load",X,ot),A[R].addEventListener("error",Ot,ot);e.connect&&e.connect.call(this,f,d)}else e.connect&&e.connect.call(this,f,d),e.load&&e.load.call(this,f,d)}else e.connect&&e.connect.call(this,f,d)},e.disconnect&&(c.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[S],this[h])}),$("element()","<"+(s?s+" is="+r:r)+">"),window.customElements.define(r,c,s&&{extends:s}),s&&!it&&document.querySelectorAll('[is="'+r+'"]').forEach(a=>{o&&nt(a,o),e.construct&&e.construct.apply(a);let f;for(f in m){let d=a.attributes[f];d&&m[f].call(a,d.value)}e.connect&&e.connect.apply(a)}),c}function te(t,e){return e[t]}var nn=y(te,!0);var ee=Object.freeze;function ut(){return this}var O=ee({shift:p,push:p,forEach:p,join:function(){return""},map:ut,filter:ut,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:p,pipe:x,start:p,stop:p,done:p,valueOf:function(){return null}});function K(){return this}function Q(t){return t&&t[Symbol.iterator]}var ne=Object.assign;function oe(t){return t.stop?t.stop():t()}function H(){}ne(H.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(oe),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var g=Object.assign,v=Object.create;function w(t,e){t&&t.push(e)}function T(t){H.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function u(t){this.input=t}g(u.prototype,H.prototype,{push:function(t){w(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new at(this,t)},filter:function(t){return new ct(this,t)},split:function(t){return new ft(this,t)},flatMap:function(t){return new pt(this,t)},take:function(t){return new lt(this,t)},each:function(t){return this.pipe(new mt(t))},reduce:function(t,e){return this.pipe(new ht(t,e)).value},scan:function(t,e){return new dt(this,t,e)},stop:function(){return T(this),this}});function at(t,e){this.input=t,this.fn=e}at.prototype=g(v(u.prototype),{push:function(e){let i=this.fn(e);i!==void 0&&w(this[0],i)}});function ct(t,e){this.input=t,this.fn=e}ct.prototype=g(v(u.prototype),{push:function(e){this.fn(e)&&w(this[0],e)}});function pt(t,e){this.input=t,this.fn=e}pt.prototype=g(v(u.prototype),{push:function(e){let i=this.fn(e);if(i!==void 0)if(Q(i))for(let r of i)w(this[0],r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function ft(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}ft.prototype=g(v(u.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(w(this[0],o),this.chunk=[]):o.push(e)}});function lt(t,e){this.input=t,this.count=e}lt.prototype=g(v(u.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function ht(t,e){this.fn=t,this.value=e,this.i=0}ht.prototype=g(v(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function dt(t,e,o){this.input=t,this.fn=e,this.value=o}dt.prototype=g(v(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function mt(t){this.push=t}mt.prototype=g(v(u.prototype),{each:null,reduce:null,pipe:null});var ie=Object.assign,re=Object.create;function se(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o]}else t.stop()}function P(t,e){u.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(O)}P.prototype=ie(re(u.prototype),{push:function(t){if(t===void 0)return;this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)},pipe:function(t){let e=-1;for(;this[++e];);return this.memory&&e===0&&this.input.pipe(this),this[e]=t,t.done(()=>se(this,t)),this.value!==void 0&&t.push(this.value),!this.memory&&e===0&&this.input.pipe(this),t}});var ue=Array.prototype,ae=Object.assign,ce=Object.create;function pe(t){return t!==void 0}function j(t){this.buffer=t?t.filter?t.filter(pe):t:[],this.output=this.buffer}j.prototype=ae(ce(u.prototype),{push:function(t){t!==void 0&&this.output.push(t)},pipe:function(t){for(t.done(this),this[0]=t;this.buffer.length;)t.push(ue.shift.apply(this.buffer));return this.output=t,t},stop:function(){return this.output=this.buffer,u.prototype.stop.apply(this,arguments)}});var wt=Object.assign,fe=Object.create,le=Promise.resolve(),he={schedule:function(){le.then(this.fire)},unschedule:p},de={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},me={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function L(t,e){u.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},wt(this,e==="tick"?he:e==="frame"?de:me)}L.prototype=wt(fe(u.prototype),{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=u.of(t),this[0].push(this.output),this.schedule())},stop:function(){return this.timer&&this.fire(),u.prototype.stop.apply(this,arguments)}});var J=Object.assign,we=Object.create,gt=Object.keys;function W(t,e,o,i,r){this.stream=t,this.names=e,this.values=o,this.name=i,this.input=r}J(W.prototype,{push:function(t){let e=this.stream,o=this.values,i=this.name;o[i]=t,(e.active||(e.active=gt(o).length===this.names.length))&&w(e[0],J({},o))},stop:function(){--this.stream.count===0&&T(this.stream)},done:function(t){this.stream.done(t)}});function D(t){this.inputs=t,this.active=!1}D.prototype=J(we(u.prototype),{push:null,pipe:function(t){let e=this.inputs,o=gt(e),i={};this.count=o.length,this[0]=t,t.done(this);let r;for(r in e){let s=e[r];if(s.pipe){let E=new W(this,o,i,r,s);s.pipe(E)}else if(s.then){let E=new W(this,o,i,r,s);s.then(m=>E.push(m)),s.finally(()=>E.stop())}else i[r]=s,--this.count}return t}});var bt=Object.assign,ge=Object.create;function yt(t){this.stream=t}bt(yt.prototype,{push:function(t){w(this.stream[0],t)},stop:function(){--this.stream.count===0&&T(this.stream)},done:function(t){this.stream.done(t)}});function F(t){this.inputs=t}F.prototype=bt(ge(u.prototype),{push:null,pipe:function(t){let e=this.inputs;this.count=e.length,this[0]=t,t.done(this);let o=new yt(this),i=-1,r;for(;r=e[++i];)if(r.pipe)r.pipe(o);else if(r.then)r.then(s=>o.push(s)),r.finally(()=>o.stop());else{let s=-1;for(;++s<r.length;)o.push(r[s]);o.stop()}return t}});var be=Object.assign,ye=Object.create;function U(t){this.promise=t}U.prototype=be(ye(u.prototype),{push:null,pipe:function(t){let e=this.promise;return this[0]=t,t.done(this),e.then(o=>w(this,o)),e.finally(()=>T(this)),t}});var ve=Array.prototype,vt=Object.assign;function Ee(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var Et=vt(u,{of:function(){return new j(ve.slice.apply(arguments))},from:function(t){return t.pipe?new u(t):t.then?new U(t):typeof t.length=="number"?new j(t):Ee(t)},batch:t=>new L(O,t),burst:t=>(console.warn("Stream.burst() is now Stream.batch()"),new L(O,t)),broadcast:t=>new P(O,t),combine:t=>new D(t),merge:function(){return new F(arguments)}});vt(u.prototype,{log:K,batch:function(t){return new L(this,t)},burst:function(t){return console.warn("stream.burst() is now stream.batch()"),new L(this,t)},broadcast:function(t){return new P(this,t)}});var xe=Object.assign;function _(){}xe(_.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&u(this[0]),this}});var Se=Object.assign,Te=/\s+/,xt={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};var St=0;window.addEventListener("click",t=>St=t.timeStamp);function Le(t,e){return t.node.addEventListener(xt[e]||e,t,t.options),t}function Ae(t,e){return t.node.removeEventListener(xt[e]||e,t),t}function Tt(t,e,o){this.types=t.split(Te),this.options=e,this.node=o,this.select=e&&e.select}Se(Tt.prototype,_.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Le,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=St)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Ae,this),_.prototype.stop.apply(this,arguments)}});function G(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new Et(new Tt(t,o,e))}function Me(t){return/^#\S+$/.test(t)}function Lt(t){let e=t.children,o=-1;for(;e[++o];){let i=e[o];if(!i.value)continue;if(new URL(i.value,window.location).href===window.location.href){t.value=i.value;break}}}var At={construct:function(){G("change",this).map(t=>t.target.value).filter(t=>!!t).each(t=>{if(Me(t)){let e=t.slice(1);window.location.hash=e}else window.location=t}),G("popstate",window).each(()=>Lt(this))},connect:function(){Lt(this)}};var Yn=q('<select is="location-select">',At);window.console&&window.console.log('%c<select is="location-select">%c registered (docs at %chttps://stephen.band/location-select/%c)',"color: #3a8ab0; font-weight: 600;","color: #888888; font-weight: 400;","color: inherit; font-weight: 400;","color: #888888; font-weight: 400;");export{Yn as default};
