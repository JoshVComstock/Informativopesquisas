function Up(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var to={},Vp={get exports(){return to},set exports(e){to=e}},Ui={},C={},Hp={get exports(){return C},set exports(e){C=e}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),Wp=Symbol.for("react.portal"),Qp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Kp=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),Jp=Symbol.for("react.suspense"),qp=Symbol.for("react.memo"),eh=Symbol.for("react.lazy"),wu=Symbol.iterator;function th(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ed=Object.assign,td={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||qc}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nd(){}nd.prototype=Pr.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||qc}var ms=hs.prototype=new nd;ms.constructor=hs;ed(ms,Pr.prototype);ms.isPureReactComponent=!0;var Su=Array.isArray,rd=Object.prototype.hasOwnProperty,gs={current:null},od={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)rd.call(t,r)&&!od.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ko,type:e,key:i,ref:l,props:o,_owner:gs.current}}function nh(e,t){return{$$typeof:ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ko}function rh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rh(""+e.key):t.toString(36)}function Jo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ko:case Wp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+jl(l,0):r,Su(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Jo(o,t,n,"",function(c){return c})):o!=null&&(vs(o)&&(o=nh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Su(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+jl(i,s);l+=Jo(i,t,n,u,o)}else if(u=th(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+jl(i,s++),l+=Jo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ro(e,t,n){if(e==null)return e;var r=[],o=0;return Jo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function oh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},qo={transition:null},ih={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:qo,ReactCurrentOwner:gs};W.Children={map:Ro,forEach:function(e,t,n){Ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ro(e,function(){t++}),t},toArray:function(e){return Ro(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Pr;W.Fragment=Qp;W.Profiler=Kp;W.PureComponent=hs;W.StrictMode=Gp;W.Suspense=Jp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ed({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=gs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)rd.call(t,u)&&!od.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ko,type:e.type,key:o,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:Xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yp,_context:e},e.Consumer=e};W.createElement=id;W.createFactory=function(e){var t=id.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Zp,render:e}};W.isValidElement=vs;W.lazy=function(e){return{$$typeof:eh,_payload:{_status:-1,_result:e},_init:oh}};W.memo=function(e,t){return{$$typeof:qp,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return He.current.useCallback(e,t)};W.useContext=function(e){return He.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return He.current.useDeferredValue(e)};W.useEffect=function(e,t){return He.current.useEffect(e,t)};W.useId=function(){return He.current.useId()};W.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return He.current.useMemo(e,t)};W.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};W.useRef=function(e){return He.current.useRef(e)};W.useState=function(e){return He.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return He.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(Hp);const Be=Bp(C),sa=Up({__proto__:null,default:Be},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh=C,ah=Symbol.for("react.element"),sh=Symbol.for("react.fragment"),uh=Object.prototype.hasOwnProperty,ch=lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dh={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)uh.call(t,r)&&!dh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ah,type:e,key:i,ref:l,props:o,_owner:ch.current}}Ui.Fragment=sh;Ui.jsx=ld;Ui.jsxs=ld;(function(e){e.exports=Ui})(Vp);const kt=to.Fragment,a=to.jsx,y=to.jsxs;var ua={},ca={},fh={get exports(){return ca},set exports(e){ca=e}},ot={},da={},ph={get exports(){return da},set exports(e){da=e}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var b=_.length;_.push(I);e:for(;0<b;){var oe=b-1>>>1,N=_[oe];if(0<o(N,I))_[oe]=I,_[b]=N,b=oe;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var I=_[0],b=_.pop();if(b!==I){_[0]=b;e:for(var oe=0,N=_.length,$=N>>>1;oe<$;){var O=2*(oe+1)-1,F=_[O],S=O+1,Q=_[S];if(0>o(F,b))S<N&&0>o(Q,F)?(_[oe]=Q,_[S]=b,oe=S):(_[oe]=F,_[O]=b,oe=O);else if(S<N&&0>o(Q,b))_[oe]=Q,_[S]=b,oe=S;else break e}}return I}function o(_,I){var b=_.sortIndex-I.sortIndex;return b!==0?b:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],g=1,m=null,v=3,E=!1,w=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=_)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function k(_){if(x=!1,h(_),!w)if(n(u)!==null)w=!0,jt(T);else{var I=n(c);I!==null&&Me(k,I.startTime-_)}}function T(_,I){w=!1,x&&(x=!1,f(z),z=-1),E=!0;var b=v;try{for(h(I),m=n(u);m!==null&&(!(m.expirationTime>I)||_&&!Se());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,v=m.priorityLevel;var N=oe(m.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(u)&&r(u),h(I)}else r(u);m=n(u)}if(m!==null)var $=!0;else{var O=n(c);O!==null&&Me(k,O.startTime-I),$=!1}return $}finally{m=null,v=b,E=!1}}var R=!1,D=null,z=-1,X=5,M=-1;function Se(){return!(e.unstable_now()-M<X)}function ve(){if(D!==null){var _=e.unstable_now();M=_;var I=!0;try{I=D(!0,_)}finally{I?Ae():(R=!1,D=null)}}else R=!1}var Ae;if(typeof d=="function")Ae=function(){d(ve)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,De=qe.port2;qe.port1.onmessage=ve,Ae=function(){De.postMessage(null)}}else Ae=function(){P(ve,0)};function jt(_){D=_,R||(R=!0,Ae())}function Me(_,I){z=P(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||E||(w=!0,jt(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var b=v;v=I;try{return _()}finally{v=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var b=v;v=_;try{return I()}finally{v=b}},e.unstable_scheduleCallback=function(_,I,b){var oe=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?oe+b:oe):b=oe,_){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=b+N,_={id:g++,callback:I,priorityLevel:_,startTime:b,expirationTime:N,sortIndex:-1},b>oe?(_.sortIndex=b,t(c,_),n(u)===null&&_===n(c)&&(x?(f(z),z=-1):x=!0,Me(k,b-oe))):(_.sortIndex=N,t(u,_),w||E||(w=!0,jt(T))),_},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(_){var I=v;return function(){var b=v;v=I;try{return _.apply(this,arguments)}finally{v=b}}}})(ad);(function(e){e.exports=ad})(ph);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=C,rt=da;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,no={};function Rn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(no[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},Eu={};function mh(e){return fa.call(Eu,e)?!0:fa.call(Cu,e)?!1:hh.test(e)?Eu[e]=!0:(Cu[e]=!0,!1)}function gh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vh(e,t,n,r){if(t===null||typeof t>"u"||gh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,xs);$e[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,xs);$e[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,xs);$e[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,t,n,r){var o=$e.hasOwnProperty(t)?$e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vh(t,n,o,r)&&(n=null),r||o===null?mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),ks=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Nl;function Ur(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Rl=!1;function zl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function yh(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Zn:return"Portal";case pa:return"Profiler";case Ss:return"StrictMode";case ha:return"Suspense";case ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return t=e.displayName||null,t!==null?t:ga(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return ga(e(t))}catch{}}return null}function xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(t);case 8:return t===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wh(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=wh(e))}function hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function va(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function md(e,t){t=t.checked,t!=null&&ws(e,"checked",t,!1)}function ya(e,t){md(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&xa(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xa(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Br(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function gd(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Sh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function xd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=xd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kh=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(kh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,dr=null,fr=null;function Nu(e){if(e=Po(e)){if(typeof Pa!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Qi(t),Pa(e.stateNode,e.type,t))}}function Sd(e){dr?fr?fr.push(e):fr=[e]:dr=e}function kd(){if(dr){var e=dr,t=fr;if(fr=dr=null,Nu(e),t)for(e=0;e<t.length;e++)Nu(t[e])}}function Cd(e,t){return e(t)}function Ed(){}var $l=!1;function Pd(e,t,n){if($l)return e(t,n);$l=!0;try{return Cd(e,t,n)}finally{$l=!1,(dr!==null||fr!==null)&&(Ed(),kd())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=Qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Aa=!1;if(Lt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Aa=!1}function Ch(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Qr=!1,fi=null,pi=!1,Ta=null,Eh={onError:function(e){Qr=!0,fi=e}};function Ph(e,t,n,r,o,i,l,s,u){Qr=!1,fi=null,Ch.apply(Eh,arguments)}function Ah(e,t,n,r,o,i,l,s,u){if(Ph.apply(this,arguments),Qr){if(Qr){var c=fi;Qr=!1,fi=null}else throw Error(A(198));pi||(pi=!0,Ta=c)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(zn(e)!==e)throw Error(A(188))}function Th(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ru(o),e;if(i===r)return Ru(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Td(e){return e=Th(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_d(e);if(t!==null)return t;e=e.sibling}return null}var jd=rt.unstable_scheduleCallback,zu=rt.unstable_cancelCallback,_h=rt.unstable_shouldYield,jh=rt.unstable_requestPaint,me=rt.unstable_now,Nh=rt.unstable_getCurrentPriorityLevel,Ps=rt.unstable_ImmediatePriority,Nd=rt.unstable_UserBlockingPriority,hi=rt.unstable_NormalPriority,Rh=rt.unstable_LowPriority,Rd=rt.unstable_IdlePriority,Bi=null,Tt=null;function zh(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Oh,$h=Math.log,Dh=Math.LN2;function Oh(e){return e>>>=0,e===0?32:31-($h(e)/Dh|0)|0}var Oo=64,Lo=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Vr(s):(i&=l,i!==0&&(r=Vr(i)))}else l=n&~o,l!==0?r=Vr(l):i!==0&&(r=Vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function Lh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ih(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),s=1<<l,u=o[l];u===-1?(!(s&n)||s&r)&&(o[l]=Lh(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function bh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function $d(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dd,Ts,Od,Ld,Id,ja=!1,Io=[],Zt=null,Jt=null,qt=null,io=new Map,lo=new Map,Qt=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(t.pointerId)}}function Dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Po(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mh(e,t,n,r,o){switch(t){case"focusin":return Zt=Dr(Zt,e,t,n,r,o),!0;case"dragenter":return Jt=Dr(Jt,e,t,n,r,o),!0;case"mouseover":return qt=Dr(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return io.set(i,Dr(io.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,lo.set(i,Dr(lo.get(i)||null,e,t,n,r,o)),!0}return!1}function bd(e){var t=xn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ad(n),t!==null){e.blockedOn=t,Id(e.priority,function(){Od(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ea=r,n.target.dispatchEvent(r),Ea=null}else return t=Po(n),t!==null&&Ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){ei(e)&&n.delete(t)}function Uh(){ja=!1,Zt!==null&&ei(Zt)&&(Zt=null),Jt!==null&&ei(Jt)&&(Jt=null),qt!==null&&ei(qt)&&(qt=null),io.forEach(Du),lo.forEach(Du)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,ja||(ja=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Uh)))}function ao(e){function t(o){return Or(o,e)}if(0<Io.length){Or(Io[0],e);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Or(Zt,e),Jt!==null&&Or(Jt,e),qt!==null&&Or(qt,e),io.forEach(t),lo.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)bd(n),n.blockedOn===null&&Qt.shift()}var pr=Mt.ReactCurrentBatchConfig,gi=!0;function Bh(e,t,n,r){var o=te,i=pr.transition;pr.transition=null;try{te=1,_s(e,t,n,r)}finally{te=o,pr.transition=i}}function Vh(e,t,n,r){var o=te,i=pr.transition;pr.transition=null;try{te=4,_s(e,t,n,r)}finally{te=o,pr.transition=i}}function _s(e,t,n,r){if(gi){var o=Na(e,t,n,r);if(o===null)Hl(e,t,r,vi,n),$u(e,r);else if(Mh(o,e,t,n,r))r.stopPropagation();else if($u(e,r),t&4&&-1<Fh.indexOf(e)){for(;o!==null;){var i=Po(o);if(i!==null&&Dd(i),i=Na(e,t,n,r),i===null&&Hl(e,t,r,vi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var vi=null;function Na(e,t,n,r){if(vi=null,e=Es(r),e=xn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nh()){case Ps:return 1;case Nd:return 4;case hi:case Rh:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var Kt=null,js=null,ti=null;function Md(){if(ti)return ti;var e,t=js,n=t.length,r,o="value"in Kt?Kt.value:Kt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ti=o.slice(e,1<r?1-r:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function Ou(){return!1}function it(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bo:Ou,this.isPropagationStopped=Ou,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=it(Ar),Eo=de({},Ar,{view:0,detail:0}),Hh=it(Eo),Ol,Ll,Lr,Vi=de({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ol=e.screenX-Lr.screenX,Ll=e.screenY-Lr.screenY):Ll=Ol=0,Lr=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Lu=it(Vi),Wh=de({},Vi,{dataTransfer:0}),Qh=it(Wh),Gh=de({},Eo,{relatedTarget:0}),Il=it(Gh),Kh=de({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=it(Kh),Xh=de({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zh=it(Xh),Jh=de({},Ar,{data:0}),Iu=it(Jh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function Rs(){return n0}var r0=de({},Eo,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o0=it(r0),i0=de({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=it(i0),l0=de({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),a0=it(l0),s0=de({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=it(s0),c0=de({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=it(c0),f0=[9,13,27,32],zs=Lt&&"CompositionEvent"in window,Gr=null;Lt&&"documentMode"in document&&(Gr=document.documentMode);var p0=Lt&&"TextEvent"in window&&!Gr,Ud=Lt&&(!zs||Gr&&8<Gr&&11>=Gr),Fu=String.fromCharCode(32),Mu=!1;function Bd(e,t){switch(e){case"keyup":return f0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function h0(e,t){switch(e){case"compositionend":return Vd(t);case"keypress":return t.which!==32?null:(Mu=!0,Fu);case"textInput":return e=t.data,e===Fu&&Mu?null:e;default:return null}}function m0(e,t){if(qn)return e==="compositionend"||!zs&&Bd(e,t)?(e=Md(),ti=js=Kt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ud&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function Hd(e,t,n,r){Sd(r),t=yi(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,so=null;function v0(e){tf(e,0)}function Hi(e){var t=nr(e);if(hd(t))return e}function y0(e,t){if(e==="change")return t}var Wd=!1;if(Lt){var bl;if(Lt){var Fl="oninput"in document;if(!Fl){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Fl=typeof Bu.oninput=="function"}bl=Fl}else bl=!1;Wd=bl&&(!document.documentMode||9<document.documentMode)}function Vu(){Kr&&(Kr.detachEvent("onpropertychange",Qd),so=Kr=null)}function Qd(e){if(e.propertyName==="value"&&Hi(so)){var t=[];Hd(t,so,e,Es(e)),Pd(v0,t)}}function x0(e,t,n){e==="focusin"?(Vu(),Kr=t,so=n,Kr.attachEvent("onpropertychange",Qd)):e==="focusout"&&Vu()}function w0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(so)}function S0(e,t){if(e==="click")return Hi(t)}function k0(e,t){if(e==="input"||e==="change")return Hi(t)}function C0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:C0;function uo(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fa.call(t,o)||!St(e[o],t[o]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kd(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E0(e){var t=Kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gd(n.ownerDocument.documentElement,n)){if(r!==null&&$s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wu(n,i);var l=Wu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P0=Lt&&"documentMode"in document&&11>=document.documentMode,er=null,Ra=null,Yr=null,za=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;za||er==null||er!==di(r)||(r=er,"selectionStart"in r&&$s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&uo(Yr,r)||(Yr=r,r=yi(Ra,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Ml={},Yd={};Lt&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Wi(e){if(Ml[e])return Ml[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yd)return Ml[e]=t[n];return e}var Xd=Wi("animationend"),Zd=Wi("animationiteration"),Jd=Wi("animationstart"),qd=Wi("transitionend"),ef=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){ef.set(e,t),Rn(t,[e])}for(var Ul=0;Ul<Gu.length;Ul++){var Bl=Gu[Ul],A0=Bl.toLowerCase(),T0=Bl[0].toUpperCase()+Bl.slice(1);cn(A0,"on"+T0)}cn(Xd,"onAnimationEnd");cn(Zd,"onAnimationIteration");cn(Jd,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(qd,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ah(r,t,void 0,e),e.currentTarget=null}function tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ku(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ku(o,s,c),i=u}}}if(pi)throw e=Ta,pi=!1,Ta=null,e}function le(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),nf(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Mo]){e[Mo]=!0,ud.forEach(function(n){n!=="selectionchange"&&(_0.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,Vl("selectionchange",!1,t))}}function nf(e,t,n,r){switch(Fd(t)){case 1:var o=Bh;break;case 4:o=Vh;break;default:o=_s}n=o.bind(null,t,n,e),o=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=xn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Pd(function(){var c=i,g=Es(n),m=[];e:{var v=ef.get(e);if(v!==void 0){var E=Ns,w=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":E=o0;break;case"focusin":w="focus",E=Il;break;case"focusout":w="blur",E=Il;break;case"beforeblur":case"afterblur":E=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=a0;break;case Xd:case Zd:case Jd:E=Yh;break;case qd:E=u0;break;case"scroll":E=Hh;break;case"wheel":E=d0;break;case"copy":case"cut":case"paste":E=Zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=bu}var x=(t&4)!==0,P=!x&&e==="scroll",f=x?v!==null?v+"Capture":null:v;x=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=oo(d,f),k!=null&&x.push(fo(d,k,h)))),P)break;d=d.return}0<x.length&&(v=new E(v,w,null,n,g),m.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",v&&n!==Ea&&(w=n.relatedTarget||n.fromElement)&&(xn(w)||w[It]))break e;if((E||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,E?(w=n.relatedTarget||n.toElement,E=c,w=w?xn(w):null,w!==null&&(P=zn(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(E=null,w=c),E!==w)){if(x=Lu,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=bu,k="onPointerLeave",f="onPointerEnter",d="pointer"),P=E==null?v:nr(E),h=w==null?v:nr(w),v=new x(k,d+"leave",E,n,g),v.target=P,v.relatedTarget=h,k=null,xn(g)===c&&(x=new x(f,d+"enter",w,n,g),x.target=h,x.relatedTarget=P,k=x),P=k,E&&w)t:{for(x=E,f=w,d=0,h=x;h;h=Xn(h))d++;for(h=0,k=f;k;k=Xn(k))h++;for(;0<d-h;)x=Xn(x),d--;for(;0<h-d;)f=Xn(f),h--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Xn(x),f=Xn(f)}x=null}else x=null;E!==null&&Yu(m,v,E,x,!1),w!==null&&P!==null&&Yu(m,P,w,x,!0)}}e:{if(v=c?nr(c):window,E=v.nodeName&&v.nodeName.toLowerCase(),E==="select"||E==="input"&&v.type==="file")var T=y0;else if(Uu(v))if(Wd)T=k0;else{T=w0;var R=x0}else(E=v.nodeName)&&E.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(T=S0);if(T&&(T=T(e,c))){Hd(m,T,n,g);break e}R&&R(e,v,c),e==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&xa(v,"number",v.value)}switch(R=c?nr(c):window,e){case"focusin":(Uu(R)||R.contentEditable==="true")&&(er=R,Ra=c,Yr=null);break;case"focusout":Yr=Ra=er=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Qu(m,n,g);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Qu(m,n,g)}var D;if(zs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else qn?Bd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ud&&n.locale!=="ko"&&(qn||z!=="onCompositionStart"?z==="onCompositionEnd"&&qn&&(D=Md()):(Kt=g,js="value"in Kt?Kt.value:Kt.textContent,qn=!0)),R=yi(c,z),0<R.length&&(z=new Iu(z,e,null,n,g),m.push({event:z,listeners:R}),D?z.data=D:(D=Vd(n),D!==null&&(z.data=D)))),(D=p0?h0(e,n):m0(e,n))&&(c=yi(c,"onBeforeInput"),0<c.length&&(g=new Iu("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=D))}tf(m,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=oo(e,n),i!=null&&r.unshift(fo(e,i,o)),i=oo(e,t),i!=null&&r.push(fo(e,i,o))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=oo(n,i),u!=null&&l.unshift(fo(n,u,s))):o||(u=oo(n,i),u!=null&&l.push(fo(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var j0=/\r\n?/g,N0=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(N0,"")}function Uo(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(A(425))}function xi(){}var $a=null,Da=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch($0)}:La;function $0(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),At="__reactFiber$"+Tr,po="__reactProps$"+Tr,It="__reactContainer$"+Tr,Ia="__reactEvents$"+Tr,D0="__reactListeners$"+Tr,O0="__reactHandles$"+Tr;function xn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[At])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[At]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Qi(e){return e[po]||null}var ba=[],rr=-1;function dn(e){return{current:e}}function ae(e){0>rr||(e.current=ba[rr],ba[rr]=null,rr--)}function ie(e,t){rr++,ba[rr]=e.current,e.current=t}var un={},Fe=dn(un),Ye=dn(!1),An=un;function vr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Xe(e){return e=e.childContextTypes,e!=null}function wi(){ae(Ye),ae(Fe)}function qu(e,t,n){if(Fe.current!==un)throw Error(A(168));ie(Fe,t),ie(Ye,n)}function rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,xh(e)||"Unknown",o));return de({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,An=Fe.current,ie(Fe,e),ie(Ye,Ye.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=rf(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ae(Ye),ae(Fe),ie(Fe,e)):ae(Ye),ie(Ye,n)}var Rt=null,Gi=!1,Ql=!1;function of(e){Rt===null?Rt=[e]:Rt.push(e)}function L0(e){Gi=!0,of(e)}function fn(){if(!Ql&&Rt!==null){Ql=!0;var e=0,t=te;try{var n=Rt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Gi=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),jd(Ps,fn),o}finally{te=t,Ql=!1}}return null}var or=[],ir=0,ki=null,Ci=0,at=[],st=0,Tn=null,zt=1,$t="";function vn(e,t){or[ir++]=Ci,or[ir++]=ki,ki=e,Ci=t}function lf(e,t,n){at[st++]=zt,at[st++]=$t,at[st++]=Tn,Tn=e;var r=zt;e=$t;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,zt=1<<32-xt(t)+o|n<<o|r,$t=i+e}else zt=1<<i|n<<o|r,$t=e}function Ds(e){e.return!==null&&(vn(e,1),lf(e,1,0))}function Os(e){for(;e===ki;)ki=or[--ir],or[ir]=null,Ci=or[--ir],or[ir]=null;for(;e===Tn;)Tn=at[--st],at[st]=null,$t=at[--st],at[st]=null,zt=at[--st],at[st]=null}var nt=null,tt=null,se=!1,yt=null;function af(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:zt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(se){var t=tt;if(t){var n=t;if(!tc(e,t)){if(Fa(e))throw Error(A(418));t=en(n.nextSibling);var r=nt;t&&tc(e,t)?af(r,n):(e.flags=e.flags&-4097|2,se=!1,nt=e)}}else{if(Fa(e))throw Error(A(418));e.flags=e.flags&-4097|2,se=!1,nt=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Bo(e){if(e!==nt)return!1;if(!se)return nc(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=tt)){if(Fa(e))throw sf(),Error(A(418));for(;t;)af(e,t),t=en(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?en(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=tt;e;)e=en(e.nextSibling)}function yr(){tt=nt=null,se=!1}function Ls(e){yt===null?yt=[e]:yt.push(e)}var I0=Mt.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ei=dn(null),Pi=null,lr=null,Is=null;function bs(){Is=lr=Pi=null}function Fs(e){var t=Ei.current;ae(Ei),e._currentValue=t}function Ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){Pi=e,Is=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Is!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Pi===null)throw Error(A(308));lr=e,Pi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var wn=null;function Ms(e){wn===null?wn=[e]:wn.push(e)}function uf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ms(t)):(n.next=o.next,o.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ms(r)):(t.next=o.next,o.next=t),r.interleaved=t,bt(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,g=c=u=null,s=i;do{var v=s.lane,E=s.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:E,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(v=t,E=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(E,m,v);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,v=typeof w=="function"?w.call(E,m,v):w,v==null)break e;m=de({},m,v);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else E={eventTime:E,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=E,u=m):g=g.next=E,l|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(g===null&&(u=m),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=m}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var df=new sd.Component().refs;function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=rn(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(wt(t,e,o,r),ri(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=rn(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(wt(t,e,o,r),ri(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=rn(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(wt(t,e,r,n),ri(t,e,r))}};function ic(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,i):!0}function ff(e,t,n){var r=!1,o=un,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Xe(t)?An:Fe.current,r=t.contextTypes,i=(r=r!=null)?vr(e,o):un),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=df,Us(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Xe(t)?An:Fe.current,o.context=vr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ba(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ki.enqueueReplaceState(o,o.state,null),Ai(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===df&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Vo(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function pf(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=on(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,k){return d===null||d.tag!==6?(d=ql(h,f.mode,k),d.return=f,d):(d=o(d,h),d.return=f,d)}function u(f,d,h,k){var T=h.type;return T===Jn?g(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ht&&ac(T)===d.type)?(k=o(d,h.props),k.ref=Ir(f,d,h),k.return=f,k):(k=ui(h.type,h.key,h.props,null,f.mode,k),k.ref=Ir(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ea(h,f.mode,k),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function g(f,d,h,k,T){return d===null||d.tag!==7?(d=Cn(h,f.mode,k,T),d.return=f,d):(d=o(d,h),d.return=f,d)}function m(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ql(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zo:return h=ui(d.type,d.key,d.props,null,f.mode,h),h.ref=Ir(f,null,d),h.return=f,h;case Zn:return d=ea(d,f.mode,h),d.return=f,d;case Ht:var k=d._init;return m(f,k(d._payload),h)}if(Br(d)||zr(d))return d=Cn(d,f.mode,h,null),d.return=f,d;Vo(f,d)}return null}function v(f,d,h,k){var T=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return T!==null?null:s(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:return h.key===T?u(f,d,h,k):null;case Zn:return h.key===T?c(f,d,h,k):null;case Ht:return T=h._init,v(f,d,T(h._payload),k)}if(Br(h)||zr(h))return T!==null?null:g(f,d,h,k,null);Vo(f,h)}return null}function E(f,d,h,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,s(d,f,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case zo:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,T);case Zn:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,T);case Ht:var R=k._init;return E(f,d,h,R(k._payload),T)}if(Br(k)||zr(k))return f=f.get(h)||null,g(d,f,k,T,null);Vo(d,k)}return null}function w(f,d,h,k){for(var T=null,R=null,D=d,z=d=0,X=null;D!==null&&z<h.length;z++){D.index>z?(X=D,D=null):X=D.sibling;var M=v(f,D,h[z],k);if(M===null){D===null&&(D=X);break}e&&D&&M.alternate===null&&t(f,D),d=i(M,d,z),R===null?T=M:R.sibling=M,R=M,D=X}if(z===h.length)return n(f,D),se&&vn(f,z),T;if(D===null){for(;z<h.length;z++)D=m(f,h[z],k),D!==null&&(d=i(D,d,z),R===null?T=D:R.sibling=D,R=D);return se&&vn(f,z),T}for(D=r(f,D);z<h.length;z++)X=E(D,f,z,h[z],k),X!==null&&(e&&X.alternate!==null&&D.delete(X.key===null?z:X.key),d=i(X,d,z),R===null?T=X:R.sibling=X,R=X);return e&&D.forEach(function(Se){return t(f,Se)}),se&&vn(f,z),T}function x(f,d,h,k){var T=zr(h);if(typeof T!="function")throw Error(A(150));if(h=T.call(h),h==null)throw Error(A(151));for(var R=T=null,D=d,z=d=0,X=null,M=h.next();D!==null&&!M.done;z++,M=h.next()){D.index>z?(X=D,D=null):X=D.sibling;var Se=v(f,D,M.value,k);if(Se===null){D===null&&(D=X);break}e&&D&&Se.alternate===null&&t(f,D),d=i(Se,d,z),R===null?T=Se:R.sibling=Se,R=Se,D=X}if(M.done)return n(f,D),se&&vn(f,z),T;if(D===null){for(;!M.done;z++,M=h.next())M=m(f,M.value,k),M!==null&&(d=i(M,d,z),R===null?T=M:R.sibling=M,R=M);return se&&vn(f,z),T}for(D=r(f,D);!M.done;z++,M=h.next())M=E(D,f,z,M.value,k),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?z:M.key),d=i(M,d,z),R===null?T=M:R.sibling=M,R=M);return e&&D.forEach(function(ve){return t(f,ve)}),se&&vn(f,z),T}function P(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===Jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:e:{for(var T=h.key,R=d;R!==null;){if(R.key===T){if(T=h.type,T===Jn){if(R.tag===7){n(f,R.sibling),d=o(R,h.props.children),d.return=f,f=d;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ht&&ac(T)===R.type){n(f,R.sibling),d=o(R,h.props),d.ref=Ir(f,R,h),d.return=f,f=d;break e}n(f,R);break}else t(f,R);R=R.sibling}h.type===Jn?(d=Cn(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=ui(h.type,h.key,h.props,null,f.mode,k),k.ref=Ir(f,d,h),k.return=f,f=k)}return l(f);case Zn:e:{for(R=h.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ea(h,f.mode,k),d.return=f,f=d}return l(f);case Ht:return R=h._init,P(f,d,R(h._payload),k)}if(Br(h))return w(f,d,h,k);if(zr(h))return x(f,d,h,k);Vo(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=ql(h,f.mode,k),d.return=f,f=d),l(f)):n(f,d)}return P}var xr=pf(!0),hf=pf(!1),Ao={},_t=dn(Ao),ho=dn(Ao),mo=dn(Ao);function Sn(e){if(e===Ao)throw Error(A(174));return e}function Bs(e,t){switch(ie(mo,t),ie(ho,e),ie(_t,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}ae(_t),ie(_t,t)}function wr(){ae(_t),ae(ho),ae(mo)}function mf(e){Sn(mo.current);var t=Sn(_t.current),n=Sa(t,e.type);t!==n&&(ie(ho,e),ie(_t,n))}function Vs(e){ho.current===e&&(ae(_t),ae(ho))}var ue=dn(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Hs(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var oi=Mt.ReactCurrentDispatcher,Kl=Mt.ReactCurrentBatchConfig,_n=0,ce=null,ye=null,ke=null,_i=!1,Xr=!1,go=0,b0=0;function Le(){throw Error(A(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,o,i){if(_n=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?B0:V0,e=n(r,o),Xr){i=0;do{if(Xr=!1,go=0,25<=i)throw Error(A(301));i+=1,ke=ye=null,t.updateQueue=null,oi.current=H0,e=n(r,o)}while(Xr)}if(oi.current=ji,t=ye!==null&&ye.next!==null,_n=0,ke=ye=ce=null,_i=!1,t)throw Error(A(300));return e}function Gs(){var e=go!==0;return go=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ce.memoizedState=ke=e:ke=ke.next=e,ke}function ft(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=ke===null?ce.memoizedState:ke.next;if(t!==null)ke=t,ye=e;else{if(e===null)throw Error(A(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?ce.memoizedState=ke=e:ke=ke.next=e}return ke}function vo(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=ft(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var g=c.lane;if((_n&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,ce.lanes|=g,jn|=g}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,St(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=ft(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);St(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gf(){}function vf(e,t){var n=ce,r=ft(),o=t(),i=!St(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,Ks(wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,yo(9,xf.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(A(349));_n&30||yf(n,t,o)}return o}function yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xf(e,t,n,r){t.value=n,t.getSnapshot=r,Sf(t)&&kf(e)}function wf(e,t,n){return n(function(){Sf(t)&&kf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function kf(e){var t=bt(e,1);t!==null&&wt(t,e,1,-1)}function sc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=U0.bind(null,ce,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cf(){return ft().memoizedState}function ii(e,t,n,r){var o=Pt();ce.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var o=ft();r=r===void 0?null:r;var i=void 0;if(ye!==null){var l=ye.memoizedState;if(i=l.destroy,r!==null&&Ws(r,l.deps)){o.memoizedState=yo(t,n,i,r);return}}ce.flags|=e,o.memoizedState=yo(1|t,n,i,r)}function uc(e,t){return ii(8390656,8,e,t)}function Ks(e,t){return Yi(2048,8,e,t)}function Ef(e,t){return Yi(4,2,e,t)}function Pf(e,t){return Yi(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Af.bind(null,t,e),n)}function Ys(){}function _f(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jf(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nf(e,t,n){return _n&21?(St(n,t)||(n=zd(),ce.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function F0(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{te=n,Kl.transition=r}}function Rf(){return ft().memoizedState}function M0(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zf(e))$f(t,n);else if(n=uf(e,t,n,r),n!==null){var o=Ve();wt(n,e,r,o),Df(n,t,r)}}function U0(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zf(e))$f(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,St(s,l)){var u=t.interleaved;u===null?(o.next=o,Ms(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=uf(e,t,o,r),n!==null&&(o=Ve(),wt(n,e,r,o),Df(n,t,r))}}function zf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function $f(e,t){Xr=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var ji={readContext:dt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},B0={readContext:dt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:sc,useDebugValue:Ys,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=sc(!1),t=e[0];return e=F0.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=Pt();if(se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ee===null)throw Error(A(349));_n&30||yf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,uc(wf.bind(null,r,i,e),[e]),r.flags|=2048,yo(9,xf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ee.identifierPrefix;if(se){var n=$t,r=zt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=b0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:dt,useCallback:_f,useContext:dt,useEffect:Ks,useImperativeHandle:Tf,useInsertionEffect:Ef,useLayoutEffect:Pf,useMemo:jf,useReducer:Yl,useRef:Cf,useState:function(){return Yl(vo)},useDebugValue:Ys,useDeferredValue:function(e){var t=ft();return Nf(t,ye.memoizedState,e)},useTransition:function(){var e=Yl(vo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:vf,useId:Rf,unstable_isNewReconciler:!1},H0={readContext:dt,useCallback:_f,useContext:dt,useEffect:Ks,useImperativeHandle:Tf,useInsertionEffect:Ef,useLayoutEffect:Pf,useMemo:jf,useReducer:Xl,useRef:Cf,useState:function(){return Xl(vo)},useDebugValue:Ys,useDeferredValue:function(e){var t=ft();return ye===null?t.memoizedState=e:Nf(t,ye.memoizedState,e)},useTransition:function(){var e=Xl(vo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:vf,useId:Rf,unstable_isNewReconciler:!1};function Sr(e,t){try{var n="",r=t;do n+=yh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Of(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ri||(Ri=!0,es=r),Ha(e,t)},n}function Lf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ha(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ha(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Q0=Mt.ReactCurrentOwner,Ke=!1;function Ue(e,t,n,r){t.child=e===null?hf(t,null,n,r):xr(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return hr(t,o),r=Qs(e,t,n,r,i,o),n=Gs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(se&&n&&Ds(t),t.flags|=1,Ue(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,If(e,t,i,r,o)):(e=ui(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(l,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function If(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(uo(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return Wa(e,t,n,r,o)}function bf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(sr,et),et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(sr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(sr,et),et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(sr,et),et|=r;return Ue(e,t,o,n),t.child}function Ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,n,r,o){var i=Xe(n)?An:Fe.current;return i=vr(t,i),hr(t,o),n=Qs(e,t,n,r,i,o),r=Gs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(se&&r&&Ds(t),t.flags|=1,Ue(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Xe(n)){var i=!0;Si(t)}else i=!1;if(hr(t,o),t.stateNode===null)li(e,t),ff(t,n,r),Va(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Xe(n)?An:Fe.current,c=vr(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&lc(t,l,r,c),Wt=!1;var v=t.memoizedState;l.state=v,Ai(t,r,l,o),u=t.memoizedState,s!==r||v!==u||Ye.current||Wt?(typeof g=="function"&&(Ba(t,n,g,r),u=t.memoizedState),(s=Wt||ic(t,n,s,r,v,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,cf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:gt(t.type,s),l.props=c,m=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Xe(n)?An:Fe.current,u=vr(t,u));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||v!==u)&&lc(t,l,r,u),Wt=!1,v=t.memoizedState,l.state=v,Ai(t,r,l,o);var w=t.memoizedState;s!==m||v!==w||Ye.current||Wt?(typeof E=="function"&&(Ba(t,n,E,r),w=t.memoizedState),(c=Wt||ic(t,n,c,r,v,w,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,i,o)}function Qa(e,t,n,r,o,i){Ff(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),Ft(e,t,i);r=t.stateNode,Q0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xr(t,e.child,null,i),t.child=xr(t,null,s,i)):Ue(e,t,s,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function Mf(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),Bs(e,t.containerInfo)}function gc(e,t,n,r,o){return yr(),Ls(o),t.flags|=256,Ue(e,t,n,r),t.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,t,n){var r=t.pendingProps,o=ue.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ue,o&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ji(l,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ka(n),t.memoizedState=Ga,e):Xs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return G0(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=on(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=on(s,i):(i=Cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ka(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ga,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&Ls(r),xr(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(A(422))),Ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ji({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xr(t,e.child,null,l),t.child.memoizedState=Ka(l),t.memoizedState=Ga,i);if(!(t.mode&1))return Ho(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=Zl(i,r,void 0),Ho(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ke||s){if(r=Ee,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,bt(e,o),wt(r,e,o,-1))}return nu(),r=Zl(Error(A(421))),Ho(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,tt=en(o.nextSibling),nt=t,se=!0,yt=null,e!==null&&(at[st++]=zt,at[st++]=$t,at[st++]=Tn,zt=e.id,$t=e.overflow,Tn=t),t=Xs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ua(e.return,t,n)}function Jl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jl(t,!0,n,null,i);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:Mf(t),yr();break;case 5:mf(t);break;case 1:Xe(t.type)&&Si(t);break;case 4:Bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Uf(e,t,n):(ie(ue,ue.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,bf(e,t,n)}return Ft(e,t,n)}var Vf,Ya,Hf,Wf;Vf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Hf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sn(_t.current);var i=null;switch(n){case"input":o=va(e,o),r=va(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=wa(e,o),r=wa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}ka(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&le("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Wf=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y0(e,t,n){var r=t.pendingProps;switch(Os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Xe(t.type)&&wi(),Ie(t),null;case 3:return r=t.stateNode,wr(),ae(Ye),ae(Fe),Hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(rs(yt),yt=null))),Ya(e,t),Ie(t),null;case 5:Vs(t);var o=Sn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ie(t),null}if(e=Sn(_t.current),Bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[po]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<Hr.length;o++)le(Hr[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Au(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":_u(r,i),le("invalid",r)}ka(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,s,e),o=["children",""+s]):no.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":$o(r),Tu(r,i,!0);break;case"textarea":$o(r),ju(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[At]=t,e[po]=r,Vf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ca(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<Hr.length;o++)le(Hr[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":Au(e,r),o=va(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),le("invalid",e);break;case"textarea":_u(e,r),o=wa(e,r),le("invalid",e);break;default:o=r}ka(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?wd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(e,u):typeof u=="number"&&ro(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(no.hasOwnProperty(i)?u!=null&&i==="onScroll"&&le("scroll",e):u!=null&&ws(e,i,u,l))}switch(n){case"input":$o(e),Tu(e,r,!1);break;case"textarea":$o(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cr(e,!!r.multiple,i,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Wf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Sn(mo.current),Sn(_t.current),Bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Ie(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&tt!==null&&t.mode&1&&!(t.flags&128))sf(),yr(),t.flags|=98560,i=!1;else if(i=Bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[At]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else yt!==null&&(rs(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?xe===0&&(xe=3):nu())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return wr(),Ya(e,t),e===null&&co(t.stateNode.containerInfo),Ie(t),null;case 10:return Fs(t.type._context),Ie(t),null;case 17:return Xe(t.type)&&wi(),Ie(t),null;case 19:if(ae(ue),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)br(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ti(e),l!==null){for(t.flags|=128,br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>kr&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!se)return Ie(t),null}else 2*me()-i.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function X0(e,t){switch(Os(t),t.tag){case 1:return Xe(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),ae(Ye),ae(Fe),Hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return wr(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Wo=!1,be=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,L=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Xa(e,t,n){try{n()}catch(r){pe(e,t,r)}}var yc=!1;function J0(e,t){if($a=gi,e=Kd(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,g=0,m=e,v=null;t:for(;;){for(var E;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(E=m.firstChild)!==null;)v=m,m=E;for(;;){if(m===e)break t;if(v===n&&++c===o&&(s=l),v===i&&++g===r&&(u=l),(E=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=E}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:e,selectionRange:n},gi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,P=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:gt(t.type,x),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=yc,yc=!1,w}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Xa(t,n,i)}o=o.next}while(o!==r)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qf(e){var t=e.alternate;t!==null&&(e.alternate=null,Qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[po],delete t[Ia],delete t[D0],delete t[O0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}var Re=null,vt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Kf(e,t,n),n=n.sibling}function Kf(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Bi,n)}catch{}switch(n.tag){case 5:be||ar(n,t);case 6:var r=Re,o=vt;Re=null,Bt(e,t,n),Re=r,vt=o,Re!==null&&(vt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(vt?(e=Re,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),ao(e)):Wl(Re,n.stateNode));break;case 4:r=Re,o=vt,Re=n.stateNode.containerInfo,vt=!0,Bt(e,t,n),Re=r,vt=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Xa(n,t,l),o=o.next}while(o!==r)}Bt(e,t,n);break;case 1:if(!be&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Bt(e,t,n),be=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Z0),t.forEach(function(r){var o=am.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,vt=!1;break e;case 3:Re=s.stateNode.containerInfo,vt=!0;break e;case 4:Re=s.stateNode.containerInfo,vt=!0;break e}s=s.return}if(Re===null)throw Error(A(160));Kf(i,l,o),Re=null,vt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){pe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling}function Yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Ct(e),r&4){try{Zr(3,e,e.return),Xi(3,e)}catch(x){pe(e,e.return,x)}try{Zr(5,e,e.return)}catch(x){pe(e,e.return,x)}}break;case 1:mt(t,e),Ct(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(mt(t,e),Ct(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(x){pe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&md(o,i),Ca(s,l);var c=Ca(s,i);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?wd(o,m):g==="dangerouslySetInnerHTML"?yd(o,m):g==="children"?ro(o,m):ws(o,g,m,c)}switch(s){case"input":ya(o,i);break;case"textarea":gd(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?cr(o,!!i.multiple,E,!1):v!==!!i.multiple&&(i.defaultValue!=null?cr(o,!!i.multiple,i.defaultValue,!0):cr(o,!!i.multiple,i.multiple?[]:"",!1))}o[po]=i}catch(x){pe(e,e.return,x)}}break;case 6:if(mt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){pe(e,e.return,x)}}break;case 3:if(mt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(x){pe(e,e.return,x)}break;case 4:mt(t,e),Ct(e);break;case 13:mt(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(qs=me())),r&4&&wc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(be=(c=be)||g,mt(t,e),be=c):mt(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(L=e,g=e.child;g!==null;){for(m=L=g;L!==null;){switch(v=L,E=v.child,v.tag){case 0:case 11:case 14:case 15:Zr(4,v,v.return);break;case 1:ar(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){pe(r,n,x)}}break;case 5:ar(v,v.return);break;case 22:if(v.memoizedState!==null){kc(m);continue}}E!==null?(E.return=v,L=E):kc(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=xd("display",l))}catch(x){pe(e,e.return,x)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){pe(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:mt(t,e),Ct(e),r&4&&wc(e);break;case 21:break;default:mt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var i=xc(e);qa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=xc(e);Ja(e,s,l);break;default:throw Error(A(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q0(e,t,n){L=e,Xf(e)}function Xf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Wo;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||be;s=Wo;var c=be;if(Wo=l,(be=u)&&!c)for(L=o;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Cc(o):u!==null?(u.return=l,L=u):Cc(o);for(;i!==null;)L=i,Xf(i),i=i.sibling;L=o,Wo=s,be=c}Sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Sc(e)}}function Sc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&ao(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}be||t.flags&512&&Za(t)}catch(v){pe(t,t.return,v)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function kc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Cc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xi(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){pe(t,o,u)}}var i=t.return;try{Za(t)}catch(u){pe(t,i,u)}break;case 5:var l=t.return;try{Za(t)}catch(u){pe(t,l,u)}}}catch(u){pe(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var em=Math.ceil,Ni=Mt.ReactCurrentDispatcher,Zs=Mt.ReactCurrentOwner,ct=Mt.ReactCurrentBatchConfig,Y=0,Ee=null,ge=null,ze=0,et=0,sr=dn(0),xe=0,xo=null,jn=0,Zi=0,Js=0,Jr=null,Ge=null,qs=0,kr=1/0,Nt=null,Ri=!1,es=null,nn=null,Qo=!1,Yt=null,zi=0,qr=0,ts=null,ai=-1,si=0;function Ve(){return Y&6?me():ai!==-1?ai:ai=me()}function rn(e){return e.mode&1?Y&2&&ze!==0?ze&-ze:I0.transition!==null?(si===0&&(si=zd()),si):(e=te,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e):1}function wt(e,t,n,r){if(50<qr)throw qr=0,ts=null,Error(A(185));Co(e,n,r),(!(Y&2)||e!==Ee)&&(e===Ee&&(!(Y&2)&&(Zi|=n),xe===4&&Gt(e,ze)),Ze(e,r),n===1&&Y===0&&!(t.mode&1)&&(kr=me()+500,Gi&&fn()))}function Ze(e,t){var n=e.callbackNode;Ih(e,t);var r=mi(e,e===Ee?ze:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?L0(Ec.bind(null,e)):of(Ec.bind(null,e)),z0(function(){!(Y&6)&&fn()}),n=null;else{switch($d(r)){case 1:n=Ps;break;case 4:n=Nd;break;case 16:n=hi;break;case 536870912:n=Rd;break;default:n=hi}n=op(n,Zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zf(e,t){if(ai=-1,si=0,Y&6)throw Error(A(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=mi(e,e===Ee?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$i(e,r);else{t=r;var o=Y;Y|=2;var i=qf();(Ee!==e||ze!==t)&&(Nt=null,kr=me()+500,kn(e,t));do try{rm();break}catch(s){Jf(e,s)}while(1);bs(),Ni.current=i,Y=o,ge!==null?t=0:(Ee=null,ze=0,t=xe)}if(t!==0){if(t===2&&(o=_a(e),o!==0&&(r=o,t=ns(e,o))),t===1)throw n=xo,kn(e,0),Gt(e,r),Ze(e,me()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!tm(o)&&(t=$i(e,r),t===2&&(i=_a(e),i!==0&&(r=i,t=ns(e,i))),t===1))throw n=xo,kn(e,0),Gt(e,r),Ze(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:yn(e,Ge,Nt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=qs+500-me(),10<t)){if(mi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=La(yn.bind(null,e,Ge,Nt),t);break}yn(e,Ge,Nt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*em(r/1960))-r,10<r){e.timeoutHandle=La(yn.bind(null,e,Ge,Nt),r);break}yn(e,Ge,Nt);break;case 5:yn(e,Ge,Nt);break;default:throw Error(A(329))}}}return Ze(e,me()),e.callbackNode===n?Zf.bind(null,e):null}function ns(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=$i(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&rs(t)),e}function rs(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!St(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Js,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if(Y&6)throw Error(A(327));mr();var t=mi(e,0);if(!(t&1))return Ze(e,me()),null;var n=$i(e,t);if(e.tag!==0&&n===2){var r=_a(e);r!==0&&(t=r,n=ns(e,r))}if(n===1)throw n=xo,kn(e,0),Gt(e,t),Ze(e,me()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ge,Nt),Ze(e,me()),null}function eu(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(kr=me()+500,Gi&&fn())}}function Nn(e){Yt!==null&&Yt.tag===0&&!(Y&6)&&mr();var t=Y;Y|=1;var n=ct.transition,r=te;try{if(ct.transition=null,te=1,e)return e()}finally{te=r,ct.transition=n,Y=t,!(Y&6)&&fn()}}function tu(){et=sr.current,ae(sr)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R0(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:wr(),ae(Ye),ae(Fe),Hs();break;case 5:Vs(r);break;case 4:wr();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:Fs(r.type._context);break;case 22:case 23:tu()}n=n.return}if(Ee=e,ge=e=on(e.current,null),ze=et=t,xe=0,xo=null,Js=Zi=jn=0,Ge=Jr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}wn=null}return e}function Jf(e,t){do{var n=ge;try{if(bs(),oi.current=ji,_i){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_i=!1}if(_n=0,ke=ye=ce=null,Xr=!1,go=0,Zs.current=null,n===null||n.return===null){xe=1,xo=t,ge=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=ze,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=dc(l);if(E!==null){E.flags&=-257,fc(E,l,s,i,t),E.mode&1&&cc(i,c,t),t=E,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){cc(i,c,t),nu();break e}u=Error(A(426))}}else if(se&&s.mode&1){var P=dc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),fc(P,l,s,i,t),Ls(Sr(u,s));break e}}i=u=Sr(u,s),xe!==4&&(xe=2),Jr===null?Jr=[i]:Jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Of(i,u,t);rc(i,f);break e;case 1:s=u;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(nn===null||!nn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Lf(i,s,t);rc(i,k);break e}}i=i.return}while(i!==null)}tp(n)}catch(T){t=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function qf(){var e=Ni.current;return Ni.current=ji,e===null?ji:e}function nu(){(xe===0||xe===3||xe===2)&&(xe=4),Ee===null||!(jn&268435455)&&!(Zi&268435455)||Gt(Ee,ze)}function $i(e,t){var n=Y;Y|=2;var r=qf();(Ee!==e||ze!==t)&&(Nt=null,kn(e,t));do try{nm();break}catch(o){Jf(e,o)}while(1);if(bs(),Y=n,Ni.current=r,ge!==null)throw Error(A(261));return Ee=null,ze=0,xe}function nm(){for(;ge!==null;)ep(ge)}function rm(){for(;ge!==null&&!_h();)ep(ge)}function ep(e){var t=rp(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?tp(e):ge=t,Zs.current=null}function tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X0(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}else if(n=Y0(n,t,et),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);xe===0&&(xe=5)}function yn(e,t,n){var r=te,o=ct.transition;try{ct.transition=null,te=1,om(e,t,n,r)}finally{ct.transition=o,te=r}return null}function om(e,t,n,r){do mr();while(Yt!==null);if(Y&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bh(e,i),e===Ee&&(ge=Ee=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,op(hi,function(){return mr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var l=te;te=1;var s=Y;Y|=4,Zs.current=null,J0(e,n),Yf(n,e),E0(Da),gi=!!$a,Da=$a=null,e.current=n,q0(n),jh(),Y=s,te=l,ct.transition=i}else e.current=n;if(Qo&&(Qo=!1,Yt=e,zi=o),i=e.pendingLanes,i===0&&(nn=null),zh(n.stateNode),Ze(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ri)throw Ri=!1,e=es,es=null,e;return zi&1&&e.tag!==0&&mr(),i=e.pendingLanes,i&1?e===ts?qr++:(qr=0,ts=e):qr=0,fn(),null}function mr(){if(Yt!==null){var e=$d(zi),t=ct.transition,n=te;try{if(ct.transition=null,te=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,zi=0,Y&6)throw Error(A(331));var o=Y;for(Y|=4,L=e.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:Zr(8,g,i)}var m=g.child;if(m!==null)m.return=g,L=m;else for(;L!==null;){g=L;var v=g.sibling,E=g.return;if(Qf(g),g===c){L=null;break}if(v!==null){v.return=E,L=v;break}L=E}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,L=f;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){l=L;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,L=h;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xi(9,s)}}catch(T){pe(s,s.return,T)}if(s===l){L=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,L=k;break e}L=s.return}}if(Y=o,fn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Bi,e)}catch{}r=!0}return r}finally{te=n,ct.transition=t}}return!1}function Pc(e,t,n){t=Sr(n,t),t=Of(e,t,1),e=tn(e,t,1),t=Ve(),e!==null&&(Co(e,1,t),Ze(e,t))}function pe(e,t,n){if(e.tag===3)Pc(e,e,n);else for(;t!==null;){if(t.tag===3){Pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Sr(n,e),e=Lf(t,e,1),t=tn(t,e,1),e=Ve(),t!==null&&(Co(t,1,e),Ze(t,e));break}}t=t.return}}function im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(ze&n)===n&&(xe===4||xe===3&&(ze&130023424)===ze&&500>me()-qs?kn(e,0):Js|=n),Ze(e,t)}function np(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=Ve();e=bt(e,t),e!==null&&(Co(e,t,n),Ze(e,n))}function lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),np(e,n)}function am(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),np(e,n)}var rp;rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,K0(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,se&&t.flags&1048576&&lf(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;li(e,t),e=t.pendingProps;var o=vr(t,Fe.current);hr(t,n),o=Qs(null,t,r,e,o,n);var i=Gs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(i=!0,Si(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Us(t),o.updater=Ki,t.stateNode=o,o._reactInternals=t,Va(t,r,e,n),t=Qa(null,t,r,!0,i,n)):(t.tag=0,se&&i&&Ds(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(li(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=um(r),e=gt(r,e),o){case 0:t=Wa(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,gt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Wa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),mc(e,t,r,o,n);case 3:e:{if(Mf(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,cf(e,t),Ai(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Sr(Error(A(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=Sr(Error(A(424)),t),t=gc(e,t,r,n,o);break e}else for(tt=en(t.stateNode.containerInfo.firstChild),nt=t,se=!0,yt=null,n=hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===o){t=Ft(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return mf(t),e===null&&Ma(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Oa(r,o)?l=null:i!==null&&Oa(r,i)&&(t.flags|=32),Ff(e,t),Ue(e,t,l,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return Uf(e,t,n);case 4:return Bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),pc(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ie(Ei,r._currentValue),r._currentValue=l,i!==null)if(St(i.value,l)){if(i.children===o.children&&!Ye.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ot(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ua(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ua(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hr(t,n),o=dt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=gt(r,t.pendingProps),o=gt(r.type,o),hc(e,t,r,o,n);case 15:return If(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),li(e,t),t.tag=1,Xe(r)?(e=!0,Si(t)):e=!1,hr(t,n),ff(t,r,o),Va(t,r,o,n),Qa(null,t,r,!0,e,n);case 19:return Bf(e,t,n);case 22:return bf(e,t,n)}throw Error(A(156,t.tag))};function op(e,t){return jd(e,t)}function sm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new sm(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function um(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ks)return 11;if(e===Cs)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ru(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jn:return Cn(n.children,o,i,t);case Ss:l=8,o|=8;break;case pa:return e=ut(12,n,t,o|2),e.elementType=pa,e.lanes=i,e;case ha:return e=ut(13,n,t,o),e.elementType=ha,e.lanes=i,e;case ma:return e=ut(19,n,t,o),e.elementType=ma,e.lanes=i,e;case fd:return Ji(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:l=10;break e;case dd:l=9;break e;case ks:l=11;break e;case Cs:l=14;break e;case Ht:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=ut(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=ut(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,o,i,l,s,u){return e=new cm(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ut(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(i),e}function dm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ip(e){if(!e)return un;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Xe(n))return rf(e,n,t)}return t}function lp(e,t,n,r,o,i,l,s,u){return e=ou(n,r,!0,e,o,i,l,s,u),e.context=ip(null),n=e.current,r=Ve(),o=rn(n),i=Ot(r,o),i.callback=t??null,tn(n,i,o),e.current.lanes=o,Co(e,o,r),Ze(e,r),e}function qi(e,t,n,r){var o=t.current,i=Ve(),l=rn(o);return n=ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,l),e!==null&&(wt(e,o,l,i),ri(e,o,l)),l}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function fm(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}el.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));qi(e,t,null,null)};el.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){qi(null,e,null,null)}),t[It]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&bd(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function pm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Di(l);i.call(c)}}var l=lp(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[It]=l.current,co(e.nodeType===8?e.parentNode:e),Nn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Di(u);s.call(c)}}var u=ou(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=u,e[It]=u.current,co(e.nodeType===8?e.parentNode:e),Nn(function(){qi(t,u,n,r)}),u}function nl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=Di(l);s.call(u)}}qi(t,l,e,o)}else l=pm(n,t,e,o,r);return Di(l)}Dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(As(t,n|1),Ze(t,me()),!(Y&6)&&(kr=me()+500,fn()))}break;case 13:Nn(function(){var r=bt(e,1);if(r!==null){var o=Ve();wt(r,e,1,o)}}),iu(e,1)}};Ts=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}iu(e,134217728)}};Od=function(e){if(e.tag===13){var t=rn(e),n=bt(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}iu(e,t)}};Ld=function(){return te};Id=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Pa=function(e,t,n){switch(t){case"input":if(ya(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qi(r);if(!o)throw Error(A(90));hd(r),ya(r,o)}}}break;case"textarea":gd(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Cd=eu;Ed=Nn;var hm={usingClientEntryPoint:!1,Events:[Po,nr,Qi,Sd,kd,eu]},Fr={findFiberByHostInstance:xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mm={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Bi=Go.inject(mm),Tt=Go}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(A(200));return dm(e,t,null,n)};ot.createRoot=function(e,t){if(!au(e))throw Error(A(299));var n=!1,r="",o=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,co(e.nodeType===8?e.parentNode:e),new lu(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Td(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Nn(e)};ot.hydrate=function(e,t,n){if(!tl(t))throw Error(A(200));return nl(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!au(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ap;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lp(t,null,e,1,n??null,o,!1,i,l),e[It]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new el(t)};ot.render=function(e,t,n){if(!tl(t))throw Error(A(200));return nl(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!tl(e))throw Error(A(40));return e._reactRootContainer?(Nn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};ot.unstable_batchedUpdates=eu;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return nl(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ot})(fh);var _c=ca;ua.createRoot=_c.createRoot,ua.hydrateRoot=_c.hydrateRoot;var Oi={},gm={get exports(){return Oi},set exports(e){Oi=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=Symbol.for("react.element"),uu=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),ll=Symbol.for("react.provider"),al=Symbol.for("react.context"),vm=Symbol.for("react.server_context"),sl=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),fl=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),sp;sp=Symbol.for("react.module.reference");function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case su:switch(e=e.type,e){case rl:case il:case ol:case ul:case cl:return e;default:switch(e=e&&e.$$typeof,e){case vm:case al:case sl:case fl:case dl:case ll:return e;default:return t}}case uu:return t}}}ne.ContextConsumer=al;ne.ContextProvider=ll;ne.Element=su;ne.ForwardRef=sl;ne.Fragment=rl;ne.Lazy=fl;ne.Memo=dl;ne.Portal=uu;ne.Profiler=il;ne.StrictMode=ol;ne.Suspense=ul;ne.SuspenseList=cl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return pt(e)===al};ne.isContextProvider=function(e){return pt(e)===ll};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===su};ne.isForwardRef=function(e){return pt(e)===sl};ne.isFragment=function(e){return pt(e)===rl};ne.isLazy=function(e){return pt(e)===fl};ne.isMemo=function(e){return pt(e)===dl};ne.isPortal=function(e){return pt(e)===uu};ne.isProfiler=function(e){return pt(e)===il};ne.isStrictMode=function(e){return pt(e)===ol};ne.isSuspense=function(e){return pt(e)===ul};ne.isSuspenseList=function(e){return pt(e)===cl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===il||e===ol||e===ul||e===cl||e===ym||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===ll||e.$$typeof===al||e.$$typeof===sl||e.$$typeof===sp||e.getModuleId!==void 0)};ne.typeOf=pt;(function(e){e.exports=ne})(gm);function xm(e){function t(N,$,O,F,S){for(var Q=0,j=0,fe=0,J=0,ee,V,Te=0,Qe=0,Z,Oe=Z=ee=0,q=0,_e=0,Nr=0,je=0,No=O.length,Rr=No-1,ht,U="",he="",Tl="",_l="",Ut;q<No;){if(V=O.charCodeAt(q),q===Rr&&j+J+fe+Q!==0&&(j!==0&&(V=j===47?10:47),J=fe=Q=0,No++,Rr++),j+J+fe+Q===0){if(q===Rr&&(0<_e&&(U=U.replace(v,"")),0<U.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:U+=O.charAt(q)}V=59}switch(V){case 123:for(U=U.trim(),ee=U.charCodeAt(0),Z=1,je=++q;q<No;){switch(V=O.charCodeAt(q)){case 123:Z++;break;case 125:Z--;break;case 47:switch(V=O.charCodeAt(q+1)){case 42:case 47:e:{for(Oe=q+1;Oe<Rr;++Oe)switch(O.charCodeAt(Oe)){case 47:if(V===42&&O.charCodeAt(Oe-1)===42&&q+2!==Oe){q=Oe+1;break e}break;case 10:if(V===47){q=Oe+1;break e}}q=Oe}}break;case 91:V++;case 40:V++;case 34:case 39:for(;q++<Rr&&O.charCodeAt(q)!==V;);}if(Z===0)break;q++}switch(Z=O.substring(je,q),ee===0&&(ee=(U=U.replace(m,"").trim()).charCodeAt(0)),ee){case 64:switch(0<_e&&(U=U.replace(v,"")),V=U.charCodeAt(1),V){case 100:case 109:case 115:case 45:_e=$;break;default:_e=jt}if(Z=t($,_e,Z,V,S+1),je=Z.length,0<_&&(_e=n(jt,U,Nr),Ut=s(3,Z,_e,$,Ae,ve,je,V,S,F),U=_e.join(""),Ut!==void 0&&(je=(Z=Ut.trim()).length)===0&&(V=0,Z="")),0<je)switch(V){case 115:U=U.replace(R,l);case 100:case 109:case 45:Z=U+"{"+Z+"}";break;case 107:U=U.replace(d,"$1 $2"),Z=U+"{"+Z+"}",Z=De===1||De===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=U+Z,F===112&&(Z=(he+=Z,""))}else Z="";break;default:Z=t($,n($,U,Nr),Z,F,S+1)}Tl+=Z,Z=Nr=_e=Oe=ee=0,U="",V=O.charCodeAt(++q);break;case 125:case 59:if(U=(0<_e?U.replace(v,""):U).trim(),1<(je=U.length))switch(Oe===0&&(ee=U.charCodeAt(0),ee===45||96<ee&&123>ee)&&(je=(U=U.replace(" ",":")).length),0<_&&(Ut=s(1,U,$,N,Ae,ve,he.length,F,S,F))!==void 0&&(je=(U=Ut.trim()).length)===0&&(U="\0\0"),ee=U.charCodeAt(0),V=U.charCodeAt(1),ee){case 0:break;case 64:if(V===105||V===99){_l+=U+O.charAt(q);break}default:U.charCodeAt(je-1)!==58&&(he+=o(U,ee,V,U.charCodeAt(2)))}Nr=_e=Oe=ee=0,U="",V=O.charCodeAt(++q)}}switch(V){case 13:case 10:j===47?j=0:1+ee===0&&F!==107&&0<U.length&&(_e=1,U+="\0"),0<_*b&&s(0,U,$,N,Ae,ve,he.length,F,S,F),ve=1,Ae++;break;case 59:case 125:if(j+J+fe+Q===0){ve++;break}default:switch(ve++,ht=O.charAt(q),V){case 9:case 32:if(J+Q+j===0)switch(Te){case 44:case 58:case 9:case 32:ht="";break;default:V!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:J+j+Q===0&&(_e=Nr=1,ht="\f"+ht);break;case 108:if(J+j+Q+qe===0&&0<Oe)switch(q-Oe){case 2:Te===112&&O.charCodeAt(q-3)===58&&(qe=Te);case 8:Qe===111&&(qe=Qe)}break;case 58:J+j+Q===0&&(Oe=q);break;case 44:j+fe+J+Q===0&&(_e=1,ht+="\r");break;case 34:case 39:j===0&&(J=J===V?0:J===0?V:J);break;case 91:J+j+fe===0&&Q++;break;case 93:J+j+fe===0&&Q--;break;case 41:J+j+Q===0&&fe--;break;case 40:if(J+j+Q===0){if(ee===0)switch(2*Te+3*Qe){case 533:break;default:ee=1}fe++}break;case 64:j+fe+J+Q+Oe+Z===0&&(Z=1);break;case 42:case 47:if(!(0<J+Q+fe))switch(j){case 0:switch(2*V+3*O.charCodeAt(q+1)){case 235:j=47;break;case 220:je=q,j=42}break;case 42:V===47&&Te===42&&je+2!==q&&(O.charCodeAt(je+2)===33&&(he+=O.substring(je,q+1)),ht="",j=0)}}j===0&&(U+=ht)}Qe=Te,Te=V,q++}if(je=he.length,0<je){if(_e=$,0<_&&(Ut=s(2,he,_e,N,Ae,ve,je,F,S,F),Ut!==void 0&&(he=Ut).length===0))return _l+he+Tl;if(he=_e.join(",")+"{"+he+"}",De*qe!==0){switch(De!==2||i(he,2)||(qe=0),qe){case 111:he=he.replace(k,":-moz-$1")+he;break;case 112:he=he.replace(h,"::-webkit-input-$1")+he.replace(h,"::-moz-$1")+he.replace(h,":-ms-input-$1")+he}qe=0}}return _l+he+Tl}function n(N,$,O){var F=$.trim().split(P);$=F;var S=F.length,Q=N.length;switch(Q){case 0:case 1:var j=0;for(N=Q===0?"":N[0]+" ";j<S;++j)$[j]=r(N,$[j],O).trim();break;default:var fe=j=0;for($=[];j<S;++j)for(var J=0;J<Q;++J)$[fe++]=r(N[J]+" ",F[j],O).trim()}return $}function r(N,$,O){var F=$.charCodeAt(0);switch(33>F&&(F=($=$.trim()).charCodeAt(0)),F){case 38:return $.replace(f,"$1"+N.trim());case 58:return N.trim()+$.replace(f,"$1"+N.trim());default:if(0<1*O&&0<$.indexOf("\f"))return $.replace(f,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+$}function o(N,$,O,F){var S=N+";",Q=2*$+3*O+4*F;if(Q===944){N=S.indexOf(":",9)+1;var j=S.substring(N,S.length-1).trim();return j=S.substring(0,N).trim()+j+";",De===1||De===2&&i(j,1)?"-webkit-"+j+j:j}if(De===0||De===2&&!i(S,1))return S;switch(Q){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(Se,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return j=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+S+"-ms-flex-pack"+j+S;case 1005:return w.test(S)?S.replace(E,":-webkit-")+S.replace(E,":-moz-")+S:S;case 1e3:switch(j=S.substring(13).trim(),$=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt($)){case 226:j=S.replace(T,"tb");break;case 232:j=S.replace(T,"tb-rl");break;case 220:j=S.replace(T,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+j+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch($=(S=N).length-10,j=(S.charCodeAt($)===33?S.substring(0,$):S).substring(N.indexOf(":",7)+1).trim(),Q=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:S=S.replace(j,"-webkit-"+j)+";"+S;break;case 207:case 102:S=S.replace(j,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+S.replace(j,"-webkit-"+j)+";"+S.replace(j,"-ms-"+j+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return j=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+j+"-ms-flex-"+j+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(z,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(z,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(M.test(N)===!0)return(j=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),$,O,F).replace(":fill-available",":stretch"):S.replace(j,"-webkit-"+j)+S.replace(j,"-moz-"+j.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,O+F===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+S}return S}function i(N,$){var O=N.indexOf($===1?":":"{"),F=N.substring(0,$!==3?O:10);return O=N.substring(O+1,N.length-1),I($!==2?F:F.replace(X,"$1"),O,$)}function l(N,$){var O=o($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return O!==$+";"?O.replace(D," or ($1)").substring(4):"("+$+")"}function s(N,$,O,F,S,Q,j,fe,J,ee){for(var V=0,Te=$,Qe;V<_;++V)switch(Qe=Me[V].call(g,N,Te,O,F,S,Q,j,fe,J,ee)){case void 0:case!1:case!0:case null:break;default:Te=Qe}if(Te!==$)return Te}function u(N){switch(N){case void 0:case null:_=Me.length=0;break;default:if(typeof N=="function")Me[_++]=N;else if(typeof N=="object")for(var $=0,O=N.length;$<O;++$)u(N[$]);else b=!!N|0}return u}function c(N){return N=N.prefix,N!==void 0&&(I=null,N?typeof N!="function"?De=1:(De=2,I=N):De=0),c}function g(N,$){var O=N;if(33>O.charCodeAt(0)&&(O=O.trim()),oe=O,O=[oe],0<_){var F=s(-1,$,O,O,Ae,ve,0,0,0,0);F!==void 0&&typeof F=="string"&&($=F)}var S=t(jt,O,$,0,0);return 0<_&&(F=s(-2,S,O,O,Ae,ve,S.length,0,0,0),F!==void 0&&(S=F)),oe="",qe=0,ve=Ae=1,S}var m=/^\0+/g,v=/[\0\r\f]/g,E=/: */g,w=/zoo|gra/,x=/([,: ])(transform)/g,P=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,k=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,z=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,Se=/([^-])(image-set\()/,ve=1,Ae=1,qe=0,De=1,jt=[],Me=[],_=0,I=null,b=0,oe="";return g.use=u,g.set=c,e!==void 0&&c(e),g}var wm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Sm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var km=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jc=Sm(function(e){return km.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),os={},Cm={get exports(){return os},set exports(e){os=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,cu=Pe?Symbol.for("react.element"):60103,du=Pe?Symbol.for("react.portal"):60106,pl=Pe?Symbol.for("react.fragment"):60107,hl=Pe?Symbol.for("react.strict_mode"):60108,ml=Pe?Symbol.for("react.profiler"):60114,gl=Pe?Symbol.for("react.provider"):60109,vl=Pe?Symbol.for("react.context"):60110,fu=Pe?Symbol.for("react.async_mode"):60111,yl=Pe?Symbol.for("react.concurrent_mode"):60111,xl=Pe?Symbol.for("react.forward_ref"):60112,wl=Pe?Symbol.for("react.suspense"):60113,Em=Pe?Symbol.for("react.suspense_list"):60120,Sl=Pe?Symbol.for("react.memo"):60115,kl=Pe?Symbol.for("react.lazy"):60116,Pm=Pe?Symbol.for("react.block"):60121,Am=Pe?Symbol.for("react.fundamental"):60117,Tm=Pe?Symbol.for("react.responder"):60118,_m=Pe?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cu:switch(e=e.type,e){case fu:case yl:case pl:case ml:case hl:case wl:return e;default:switch(e=e&&e.$$typeof,e){case vl:case xl:case kl:case Sl:case gl:return e;default:return t}}case du:return t}}}function up(e){return lt(e)===yl}re.AsyncMode=fu;re.ConcurrentMode=yl;re.ContextConsumer=vl;re.ContextProvider=gl;re.Element=cu;re.ForwardRef=xl;re.Fragment=pl;re.Lazy=kl;re.Memo=Sl;re.Portal=du;re.Profiler=ml;re.StrictMode=hl;re.Suspense=wl;re.isAsyncMode=function(e){return up(e)||lt(e)===fu};re.isConcurrentMode=up;re.isContextConsumer=function(e){return lt(e)===vl};re.isContextProvider=function(e){return lt(e)===gl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cu};re.isForwardRef=function(e){return lt(e)===xl};re.isFragment=function(e){return lt(e)===pl};re.isLazy=function(e){return lt(e)===kl};re.isMemo=function(e){return lt(e)===Sl};re.isPortal=function(e){return lt(e)===du};re.isProfiler=function(e){return lt(e)===ml};re.isStrictMode=function(e){return lt(e)===hl};re.isSuspense=function(e){return lt(e)===wl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pl||e===yl||e===ml||e===hl||e===wl||e===Em||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===Sl||e.$$typeof===gl||e.$$typeof===vl||e.$$typeof===xl||e.$$typeof===Am||e.$$typeof===Tm||e.$$typeof===_m||e.$$typeof===Pm)};re.typeOf=lt;(function(e){e.exports=re})(Cm);var pu=os,jm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hu={};hu[pu.ForwardRef]=Rm;hu[pu.Memo]=cp;function Nc(e){return pu.isMemo(e)?cp:hu[e.$$typeof]||jm}var zm=Object.defineProperty,$m=Object.getOwnPropertyNames,Rc=Object.getOwnPropertySymbols,Dm=Object.getOwnPropertyDescriptor,Om=Object.getPrototypeOf,zc=Object.prototype;function dp(e,t,n){if(typeof t!="string"){if(zc){var r=Om(t);r&&r!==zc&&dp(e,r,n)}var o=$m(t);Rc&&(o=o.concat(Rc(t)));for(var i=Nc(e),l=Nc(t),s=0;s<o.length;++s){var u=o[s];if(!Nm[u]&&!(n&&n[u])&&!(l&&l[u])&&!(i&&i[u])){var c=Dm(t,u);try{zm(e,u,c)}catch{}}}}return e}var Lm=dp;function Dt(){return(Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $c=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},is=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Oi.typeOf(e)},Li=Object.freeze([]),ln=Object.freeze({});function wo(e){return typeof e=="function"}function Dc(e){return e.displayName||e.name||"Component"}function mu(e){return e&&typeof e.styledComponentId=="string"}var Cr=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",gu=typeof window<"u"&&"HTMLElement"in window,Im=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function To(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var bm=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&To(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var s=i;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,g=r.length;c<g;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,s=i;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),ci=new Map,Ii=new Map,eo=1,Ko=function(e){if(ci.has(e))return ci.get(e);for(;Ii.has(eo);)eo++;var t=eo++;return ci.set(e,t),Ii.set(t,e),t},Fm=function(e){return Ii.get(e)},Mm=function(e,t){t>=eo&&(eo=t+1),ci.set(e,t),Ii.set(t,e)},Um="style["+Cr+'][data-styled-version="5.3.6"]',Bm=new RegExp("^"+Cr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Vm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Hm=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var s=l.match(Bm);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Mm(c,u),Vm(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},Wm=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},fp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var g=u[c];if(g&&g.nodeType===1&&g.hasAttribute(Cr))return g}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Cr,"active"),r.setAttribute("data-styled-version","5.3.6");var l=Wm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Qm=function(){function e(n){var r=this.element=fp(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,s=i.length;l<s;l++){var u=i[l];if(u.ownerNode===o)return u}To(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Gm=function(){function e(n){var r=this.element=fp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Km=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Oc=gu,Ym={isServer:!gu,useCSSOMInjection:!Im},pp=function(){function e(n,r,o){n===void 0&&(n=ln),r===void 0&&(r={}),this.options=Dt({},Ym,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&gu&&Oc&&(Oc=!1,function(i){for(var l=document.querySelectorAll(Um),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(Cr)!=="active"&&(Hm(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ko(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Dt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Km(l):i?new Qm(l):new Gm(l),new bm(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ko(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ko(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ko(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var s=Fm(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var g=Cr+".g"+l+'[id="'+s+'"]',m="";u!==void 0&&u.forEach(function(v){v.length>0&&(m+=v+",")}),i+=""+c+g+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),Xm=/(a)(d)/gi,Lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ls(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Lc(t%52)+n;return(Lc(t%52)+n).replace(Xm,"$1-$2")}var ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hp=function(e){return ur(5381,e)};function Zm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wo(n)&&!mu(n))return!1}return!0}var Jm=hp("5.3.6"),qm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Zm(t),this.componentId=n,this.baseHash=ur(Jm,n),this.baseStyle=r,pp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Er(this.rules,t,n,r).join(""),s=ls(ur(this.baseHash,l)>>>0);if(!n.hasNameForId(o,s)){var u=r(l,"."+s,void 0,o);n.insertRules(o,s,u)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,g=ur(this.baseHash,r.hash),m="",v=0;v<c;v++){var E=this.rules[v];if(typeof E=="string")m+=E;else if(E){var w=Er(E,t,n,r),x=Array.isArray(w)?w.join(""):w;g=ur(g,x+v),m+=x}}if(m){var P=ls(g>>>0);if(!n.hasNameForId(o,P)){var f=r(m,"."+P,void 0,o);n.insertRules(o,P,f)}i.push(P)}}return i.join(" ")},e}(),eg=/^\s*\/\/.*$/gm,tg=[":","[",".","#"];function ng(e){var t,n,r,o,i=e===void 0?ln:e,l=i.options,s=l===void 0?ln:l,u=i.plugins,c=u===void 0?Li:u,g=new xm(s),m=[],v=function(x){function P(f){if(f)try{x(f+"}")}catch{}}return function(f,d,h,k,T,R,D,z,X,M){switch(f){case 1:if(X===0&&d.charCodeAt(0)===64)return x(d+";"),"";break;case 2:if(z===0)return d+"/*|*/";break;case 3:switch(z){case 102:case 112:return x(h[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(P)}}}(function(x){m.push(x)}),E=function(x,P,f){return P===0&&tg.indexOf(f[n.length])!==-1||f.match(o)?x:"."+t};function w(x,P,f,d){d===void 0&&(d="&");var h=x.replace(eg,""),k=P&&f?f+" "+P+" { "+h+" }":h;return t=d,n=P,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),g(f||!P?"":P,k)}return g.use([].concat(c,[function(x,P,f){x===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,E))},v,function(x){if(x===-2){var P=m;return m=[],P}}])),w.hash=c.length?c.reduce(function(x,P){return P.name||To(15),ur(x,P.name)},5381).toString():"",w}var mp=Be.createContext();mp.Consumer;var gp=Be.createContext(),rg=(gp.Consumer,new pp),as=ng();function og(){return C.useContext(mp)||rg}function ig(){return C.useContext(gp)||as}var vp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=as);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return To(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=as),this.name+t.hash},e}(),lg=/([A-Z])/,ag=/([A-Z])/g,sg=/^ms-/,ug=function(e){return"-"+e.toLowerCase()};function Ic(e){return lg.test(e)?e.replace(ag,ug).replace(sg,"-ms-"):e}var bc=function(e){return e==null||e===!1||e===""};function Er(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,s=e.length;l<s;l+=1)(o=Er(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(bc(e))return"";if(mu(e))return"."+e.styledComponentId;if(wo(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Er(u,t,n,r)}var c;return e instanceof vp?n?(e.inject(n,r),e.getName(r)):e:is(e)?function g(m,v){var E,w,x=[];for(var P in m)m.hasOwnProperty(P)&&!bc(m[P])&&(Array.isArray(m[P])&&m[P].isCss||wo(m[P])?x.push(Ic(P)+":",m[P],";"):is(m[P])?x.push.apply(x,g(m[P],P)):x.push(Ic(P)+": "+(E=P,(w=m[P])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||E in wm?String(w).trim():w+"px")+";"));return v?[v+" {"].concat(x,["}"]):x}(e):e.toString()}var Fc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function yp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return wo(e)||is(e)?Fc(Er($c(Li,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Fc(Er($c(e,n)))}var cg=function(e,t,n){return n===void 0&&(n=ln),e.theme!==n.theme&&e.theme||t||n.theme},dg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fg=/(^-|-$)/g;function ta(e){return e.replace(dg,"-").replace(fg,"")}var xp=function(e){return ls(hp(e)>>>0)};function Yo(e){return typeof e=="string"&&!0}var ss=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},pg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function hg(e,t,n){var r=e[n];ss(t)&&ss(r)?wp(r,t):e[n]=t}function wp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(ss(l))for(var s in l)pg(s)&&hg(e,l[s],s)}return e}var Sp=Be.createContext();Sp.Consumer;var na={};function kp(e,t,n){var r=mu(e),o=!Yo(e),i=t.attrs,l=i===void 0?Li:i,s=t.componentId,u=s===void 0?function(d,h){var k=typeof d!="string"?"sc":ta(d);na[k]=(na[k]||0)+1;var T=k+"-"+xp("5.3.6"+k+na[k]);return h?h+"-"+T:T}(t.displayName,t.parentComponentId):s,c=t.displayName,g=c===void 0?function(d){return Yo(d)?"styled."+d:"Styled("+Dc(d)+")"}(e):c,m=t.displayName&&t.componentId?ta(t.displayName)+"-"+t.componentId:t.componentId||u,v=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,E=t.shouldForwardProp;r&&e.shouldForwardProp&&(E=t.shouldForwardProp?function(d,h,k){return e.shouldForwardProp(d,h,k)&&t.shouldForwardProp(d,h,k)}:e.shouldForwardProp);var w,x=new qm(n,m,r?e.componentStyle:void 0),P=x.isStatic&&l.length===0,f=function(d,h){return function(k,T,R,D){var z=k.attrs,X=k.componentStyle,M=k.defaultProps,Se=k.foldedComponentIds,ve=k.shouldForwardProp,Ae=k.styledComponentId,qe=k.target,De=function(F,S,Q){F===void 0&&(F=ln);var j=Dt({},S,{theme:F}),fe={};return Q.forEach(function(J){var ee,V,Te,Qe=J;for(ee in wo(Qe)&&(Qe=Qe(j)),Qe)j[ee]=fe[ee]=ee==="className"?(V=fe[ee],Te=Qe[ee],V&&Te?V+" "+Te:V||Te):Qe[ee]}),[j,fe]}(cg(T,C.useContext(Sp),M)||ln,T,z),jt=De[0],Me=De[1],_=function(F,S,Q,j){var fe=og(),J=ig(),ee=S?F.generateAndInjectStyles(ln,fe,J):F.generateAndInjectStyles(Q,fe,J);return ee}(X,D,jt),I=R,b=Me.$as||T.$as||Me.as||T.as||qe,oe=Yo(b),N=Me!==T?Dt({},T,{},Me):T,$={};for(var O in N)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?$.as=N[O]:(ve?ve(O,jc,b):!oe||jc(O))&&($[O]=N[O]));return T.style&&Me.style!==T.style&&($.style=Dt({},T.style,{},Me.style)),$.className=Array.prototype.concat(Se,Ae,_!==Ae?_:null,T.className,Me.className).filter(Boolean).join(" "),$.ref=I,C.createElement(b,$)}(w,d,h,P)};return f.displayName=g,(w=Be.forwardRef(f)).attrs=v,w.componentStyle=x,w.displayName=g,w.shouldForwardProp=E,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Li,w.styledComponentId=m,w.target=r?e.target:e,w.withComponent=function(d){var h=t.componentId,k=function(R,D){if(R==null)return{};var z,X,M={},Se=Object.keys(R);for(X=0;X<Se.length;X++)z=Se[X],D.indexOf(z)>=0||(M[z]=R[z]);return M}(t,["componentId"]),T=h&&h+"-"+(Yo(d)?d:ta(Dc(d)));return kp(d,Dt({},k,{attrs:v,componentId:T}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?wp({},e.defaultProps,d):d}}),w.toString=function(){return"."+w.styledComponentId},o&&Lm(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var us=function(e){return function t(n,r,o){if(o===void 0&&(o=ln),!Oi.isValidElementType(r))return To(1,String(r));var i=function(){return n(r,o,yp.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Dt({},o,{},l))},i.attrs=function(l){return t(n,r,Dt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(kp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){us[e]=us(e)});function Cp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=yp.apply(void 0,[e].concat(n)).join(""),i=xp(o);return new vp(i,o)}const p=us;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const Mc="popstate";function mg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return cs("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:bi(o)}return vg(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gg(){return Math.random().toString(36).substr(2,8)}function Uc(e,t){return{usr:e.state,key:e.key,idx:t}}function cs(e,t,n,r){return n===void 0&&(n=null),So({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:n,key:t&&t.key||r||gg()})}function bi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Xt.Pop,u=null,c=g();c==null&&(c=0,l.replaceState(So({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function m(){s=Xt.Pop;let P=g(),f=P==null?null:P-c;c=P,u&&u({action:s,location:x.location,delta:f})}function v(P,f){s=Xt.Push;let d=cs(x.location,P,f);n&&n(d,P),c=g()+1;let h=Uc(d,c),k=x.createHref(d);try{l.pushState(h,"",k)}catch{o.location.assign(k)}i&&u&&u({action:s,location:x.location,delta:1})}function E(P,f){s=Xt.Replace;let d=cs(x.location,P,f);n&&n(d,P),c=g();let h=Uc(d,c),k=x.createHref(d);l.replaceState(h,"",k),i&&u&&u({action:s,location:x.location,delta:0})}function w(P){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof P=="string"?P:bi(P);return we(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let x={get action(){return s},get location(){return e(o,l)},listen(P){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Mc,m),u=P,()=>{o.removeEventListener(Mc,m),u=null}},createHref(P){return t(o,P)},createURL:w,encodeLocation(P){let f=w(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:v,replace:E,go(P){return l.go(P)}};return x}var Bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bc||(Bc={}));function yg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?_r(t):t,o=Ap(r.pathname||"/",n);if(o==null)return null;let i=Ep(e);xg(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=_g(i[s],Rg(o));return l}function Ep(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(we(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=an([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(we(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ep(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Ag(c,i.index),routesMeta:g})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let u of Pp(i.path))o(i,l,u)}),t}function Pp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Pp(r.join("/")),s=[];return s.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function xg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wg=/^:\w+$/,Sg=3,kg=2,Cg=1,Eg=10,Pg=-2,Vc=e=>e==="*";function Ag(e,t){let n=e.split("/"),r=n.length;return n.some(Vc)&&(r+=Pg),t&&(r+=kg),n.filter(o=>!Vc(o)).reduce((o,i)=>o+(wg.test(i)?Sg:i===""?Cg:Eg),r)}function Tg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function _g(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",g=jg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let m=s.route;i.push({params:r,pathname:an([o,g.pathname]),pathnameBase:Og(an([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=an([o,g.pathnameBase]))}return i}function jg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ng(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,g,m)=>{if(g==="*"){let v=s[m]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return c[g]=zg(s[m]||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Ng(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Rg(e){try{return decodeURI(e)}catch(t){return vu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function zg(e,t){try{return decodeURIComponent(e)}catch(n){return vu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $g(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_r(e):e;return{pathname:n?n.startsWith("/")?n:Dg(n,t):t,search:Lg(r),hash:Ig(o)}}function Dg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ra(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _p(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_r(e):(o=So({},e),we(!o.pathname||!o.pathname.includes("?"),ra("?","pathname","search",o)),we(!o.pathname||!o.pathname.includes("#"),ra("#","pathname","hash",o)),we(!o.search||!o.search.includes("#"),ra("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(r||l==null)s=n;else{let m=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;o.pathname=v.join("/")}s=m>=0?t[m]:"/"}let u=$g(o,s),c=l&&l!=="/"&&l.endsWith("/"),g=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const an=e=>e.join("/").replace(/\/\/+/g,"/"),Og=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ig=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fg=["post","put","patch","delete"];[...Fg];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}function Mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ug=typeof Object.is=="function"?Object.is:Mg,{useState:Bg,useEffect:Vg,useLayoutEffect:Hg,useDebugValue:Wg}=sa;function Qg(e,t,n){const r=t(),[{inst:o},i]=Bg({inst:{value:r,getSnapshot:t}});return Hg(()=>{o.value=r,o.getSnapshot=t,oa(o)&&i({inst:o})},[e,r,t]),Vg(()=>(oa(o)&&i({inst:o}),e(()=>{oa(o)&&i({inst:o})})),[e]),Wg(r),r}function oa(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ug(n,r)}catch{return!0}}function Gg(e,t,n){return t()}const Kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yg=!Kg,Xg=Yg?Gg:Qg;"useSyncExternalStore"in sa&&(e=>e.useSyncExternalStore)(sa);const jp=C.createContext(null),Np=C.createContext(null),Cl=C.createContext(null),El=C.createContext(null),$n=C.createContext({outlet:null,matches:[]}),Rp=C.createContext(null);function Zg(e,t){let{relative:n}=t===void 0?{}:t;_o()||we(!1);let{basename:r,navigator:o}=C.useContext(Cl),{hash:i,pathname:l,search:s}=zp(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:an([r,l])),o.createHref({pathname:u,search:s,hash:i})}function _o(){return C.useContext(El)!=null}function Pl(){return _o()||we(!1),C.useContext(El).location}function Jg(){_o()||we(!1);let{basename:e,navigator:t}=C.useContext(Cl),{matches:n}=C.useContext($n),{pathname:r}=Pl(),o=JSON.stringify(Tp(n).map(s=>s.pathnameBase)),i=C.useRef(!1);return C.useEffect(()=>{i.current=!0}),C.useCallback(function(s,u){if(u===void 0&&(u={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let c=_p(s,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:an([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}const qg=C.createContext(null);function e1(e){let t=C.useContext($n).outlet;return t&&C.createElement(qg.Provider,{value:e},t)}function zp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext($n),{pathname:o}=Pl(),i=JSON.stringify(Tp(r).map(l=>l.pathnameBase));return C.useMemo(()=>_p(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function t1(e,t){_o()||we(!1);let{navigator:n}=C.useContext(Cl),r=C.useContext(Np),{matches:o}=C.useContext($n),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Pl(),c;if(t){var g;let x=typeof t=="string"?_r(t):t;s==="/"||(g=x.pathname)!=null&&g.startsWith(s)||we(!1),c=x}else c=u;let m=c.pathname||"/",v=s==="/"?m:m.slice(s.length)||"/",E=yg(e,{pathname:v}),w=i1(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:an([s,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:an([s,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,r||void 0);return t&&w?C.createElement(El.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Xt.Pop}},w):w}function n1(){let e=u1(),t=bg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,i)}class r1 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement($n.Provider,{value:this.props.routeContext},C.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o1(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(jp);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement($n.Provider,{value:t},r)}function i1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||we(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,s)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,c=n?l.route.errorElement||C.createElement(n1,null):null,g=t.concat(r.slice(0,s+1)),m=()=>C.createElement(o1,{match:l,routeContext:{outlet:i,matches:g}},u?c:l.route.element!==void 0?l.route.element:i);return n&&(l.route.errorElement||s===0)?C.createElement(r1,{location:n.location,component:c,error:u,children:m(),routeContext:{outlet:null,matches:g}}):m()},null)}var Hc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Hc||(Hc={}));var Fi;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fi||(Fi={}));function l1(e){let t=C.useContext(Np);return t||we(!1),t}function a1(e){let t=C.useContext($n);return t||we(!1),t}function s1(e){let t=a1(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function u1(){var e;let t=C.useContext(Rp),n=l1(Fi.UseRouteError),r=s1(Fi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $p(e){return e1(e.context)}function Ne(e){we(!1)}function c1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Xt.Pop,navigator:i,static:l=!1}=e;_o()&&we(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:i,static:l}),[s,i,l]);typeof r=="string"&&(r=_r(r));let{pathname:c="/",search:g="",hash:m="",state:v=null,key:E="default"}=r,w=C.useMemo(()=>{let x=Ap(c,s);return x==null?null:{pathname:x,search:g,hash:m,state:v,key:E}},[s,c,g,m,v,E]);return w==null?null:C.createElement(Cl.Provider,{value:u},C.createElement(El.Provider,{children:n,value:{location:w,navigationType:o}}))}function d1(e){let{children:t,location:n}=e,r=C.useContext(jp),o=r&&!t?r.router.routes:fs(t);return t1(o,n)}var Wc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wc||(Wc={}));new Promise(()=>{});function fs(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,fs(r.props.children,t));return}r.type!==Ne&&we(!1),!r.props.index||!r.props.children||we(!1);let i=[...t,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=fs(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function f1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function p1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h1(e,t){return e.button===0&&(!t||t==="_self")&&!p1(e)}const m1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function g1(e){let{basename:t,children:n,window:r}=e,o=C.useRef();o.current==null&&(o.current=mg({window:r,v5Compat:!0}));let i=o.current,[l,s]=C.useState({action:i.action,location:i.location});return C.useLayoutEffect(()=>i.listen(s),[i]),C.createElement(c1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const v1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jo=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:u,to:c,preventScrollReset:g}=t,m=f1(t,m1),v,E=!1;if(v1&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){v=c;let f=new URL(window.location.href),d=c.startsWith("//")?new URL(f.protocol+c):new URL(c);d.origin===f.origin?c=d.pathname+d.search+d.hash:E=!0}let w=Zg(c,{relative:o}),x=y1(c,{replace:l,state:s,target:u,preventScrollReset:g,relative:o});function P(f){r&&r(f),f.defaultPrevented||x(f)}return C.createElement("a",ps({},m,{href:v||w,onClick:E||i?r:P,ref:n,target:u}))});var Qc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Qc||(Qc={}));var Gc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gc||(Gc={}));function y1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,s=Jg(),u=Pl(),c=zp(e,{relative:l});return C.useCallback(g=>{if(h1(g,n)){g.preventDefault();let m=r!==void 0?r:bi(u)===bi(c);s(e,{replace:m,state:o,preventScrollReset:i,relative:l})}},[u,s,c,r,o,n,e,i,l])}const x1="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATdJREFUSEvtl8FxwjAQRR8dQAd0EKggoYJMKiCpANIBqSB0QEqgA+gAUgEpgRKYP+NlhMaKsbUe+4AuPlj8t/u1Xi0DOlqDjrj0DjwEnpzc+AXOsVZZxu/AxglqMh/AT6gZg8fAyRlqcqMw8xj8AuyKnZ/AMTOICfBdaMyAven9B77Z2DCAMJEH+MbEpDUPqwMH9An+JRxprbhWwByYlnUnoBVwKLoF3kqydgerl6vD6Zlsi14ZC7IAvooO9BxlqItAlofn7ZKx7HwthFVQZUstVnBb2eBl0HOrPmk5oqLTygKr0R+qaNF768uNwbJO0JS1qXh0zrJcQdttV+uSkEBdqAVjv20Evt6fNa3OKi4VlMcgsL5nEOhs9FFwnQx7djbqUqpIj6Xjumu89YBVavTun0RlxLkbLqBoaR8ZgEDbAAAAAElFTkSuQmCC",w1="/assets/Capsulas-317998d3.jpg",S1="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPRJREFUSEvtltENwjAMRF83gQlgBNiADYDNYAQmgA1gBEZBRg0KURCXOKitRP5a+XJ2fDmnY6DVDcRLCfEGWFQkegNOKU4lPgDbCtIAMfw+xivES+DqIA3QOXAPHwrxCjj3gDVwKUjiI3ZyxLOo58f+CHP/mlec21D99+xU7VGrJM0rVvU1HeLYpUw0u75EM4JwF1NHcourxKViR1L7nhVXjUsFR3IRqy7ljkuvk3vDRO6yqnOBqmjUuGyP1T554sZPnHMptxZGLa5/xXYCP+2xOvrUuLf3WiquGq9Wib++Mm0kWgItl41Sm2SvpTx9WiYwPPED57uQH/S1wEkAAAAASUVORK5CYII=",k1="/assets/Detallecentros-fd46f9d3.jpg",C1="/assets/Informacion-a86a4db8.jpg",E1="/assets/Programas-9a98e74b.jpg",P1="/assets/Redcentros-7e97ba15.jpg",A1=()=>y(T1,{children:[a(j1,{children:y(N1,{children:[a(R1,{children:a("h1",{children:"Admin page"})}),y(hn,{to:"portada",children:[a(pn,{src:x1,alt:""})," Portada"]}),y(hn,{to:"capsulas",children:[a(pn,{src:w1,alt:""}),"Capsulas"]}),y(hn,{to:"centros",children:[a(pn,{src:S1,alt:""}),"Centros"]}),y(hn,{to:"detallecentro",children:[a(pn,{src:k1,alt:""}),"Detalle centro"]}),y(hn,{to:"informacion",children:[a(pn,{src:C1,alt:""}),"Informacion"]}),y(hn,{to:"programa",children:[a(pn,{src:E1,alt:""}),"Programa"]}),y(hn,{to:"redcentro",children:[a(pn,{src:P1,alt:""}),"Red centros"]})]})}),a(_1,{children:a($p,{})})]}),T1=p.div`
  min-width: 100vh;
  display: flex;
  flex-direction: row;
  background: #222f49;
  overflow: hidden;
`,_1=p.div`
  width: calc(100% - 200px);
  background: #fff;
  border-radius: 50px;
`,j1=p.div`
  width: 200px;
  height: 100vh;
  background: #222f49;
  display: flex;
  justify-content: center;
  align-items: center;
`,N1=p.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  font-size: 17px;
`,pn=p.img`
  width: 30px;
  margin-right: 10px;

  filter: invert(31%) sepia(57%) saturate(759%) hue-rotate(214deg)
    brightness(103%) contrast(86%);
`,hn=p(jo)`
  display: flex;
  align-items: center;
  margin: 10px 7px 0px 7px;
  padding: 15px;
  text-decoration: none;
  color: #dce1de;
  transition: 0.5s;

  &:hover {
    border-radius: 15px 15px 15px 15px;
    background: #4155ea92;
    color: #fff;
    transition: 0.5s;
    margin-left: 5px;
  }
  &:hover img {
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(131deg)
      brightness(101%) contrast(102%);
  }
`,R1=p.div`
  font-size: 16px;
  color: #fff;
  border-radius: 30%;
  border-bottom: 5px solid #4155ea92;
  margin: 0px 5px 5px 5px;
  cursor: default;
  display: flex;
  justify-content: center;
`,Dn=p.div`
  width: 100%;
  height: 100%;
`,On=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ln=p.div`
  display: flex;
  margin-top: 35px;
  margin-left: 70px;
  align-content: center;
  font-size: 22px;
`,In=p.div`
  min-height: calc(100% - 50px);
  display: flex;
  justify-content: space-around;
`,bn=p.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Fn=p.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.2);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`,G=p.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`,Ce=p.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
`;p.textarea`
  height: 200px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;const z1=p.textarea`
  height: 100px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`,Mn=p.button`
  padding: 10px;
  border-radius: 12px;
  border: none;
  background: #222f49;
    color: #fff;
    transition: .5s;
  &:hover {
    transition: .5s;
    background: #4155ea92;
  }
`;p.button`
  display: inline-block;
  position: relative;
  background-color: #186cc3;
  color: #fff;
  border: 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: ease-out 120ms background-color;
  &:active {
    background-color: #114378;
  }
  &:hover {
    background-color: #16579b;
  }
`;const En=p.input`
  border: none;
  width: 135px;
`,K=p.label`
  font-size: 17px;
  color: #151f6b92;
`,Un=p.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #4155ea92;
  border-radius: 50%;
`,Bn=p.div`
  width: 60%;
  margin-right: 20px;

`,Vn=p.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`,Hn=p.tr`
  background-color: #222f49;
  color: #ffff;
  text-align: left;
`,Wn=p.tr`
  border-bottom: 1px solid #dddddd;
  font-weight: bold;
  color: #003398;
  &:nth-of-type(even){
    background-color: #f3f3f3;
  }
  &:last-of-type{
    border-bottom: 2px solid #005998;
  }
`;p.thead`
  
`;const H=p.td`
padding: 12px 15px;
`,B=p.th`
  padding: 12px 15px;
`,Mi=p.td`
  padding: 12px 15px;
  max-width: 150px;
  overflow-y: auto;
`,Je=p.button`
  padding: 0px;
  margin-left: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
`,Qn=p.img`
  filter: invert(22%) sepia(99%) saturate(2159%) hue-rotate(170deg) brightness(96%) contrast(104%);
`,Gn=p.img`
filter: invert(42%) sepia(36%) saturate(1237%) hue-rotate(307deg) brightness(89%) contrast(86%);
`,Pn=p.img`
  width: 50px;
  height: 50px;
`,Kn="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAT9JREFUSEvllu1tAjEQRB8dUAJUQEoInYQOoJN0ENJBOkg6SKgASoAKEo3Encz642yfT0hhf57Oft7ZWXtn3Clmd+IyNfgZ+AolFwPPgVWBGgfgbP5/Ad6APbCxe4XA3YJc7jugNW7YPTy4BS+AYy4RCEGlluS1it3ALVg1+byCd8DPwCGC9QNC8AvwBJy0Zwq8jhkjcphObmWmcOGCKqk+kVZgt6Yykgv/ALZWvRbgkBkt3Dp+tNSpDnDhXnXGZJyCejUd6mPX1SlzjYLWuroGqjVqo779SqWuherqvFGwBFwD1YXxfa1vNfg3cnGkjBT1TEnGIfCQeycBD0ElUHNwDrQZuOC17H9tkvH/B3tPWUXK6uPXnD4uHX1KzrLspo/QXa1vpcNeDtybzVLjrWRqERoCvNlt6oE+evDHA/8BveR5H1+zjSMAAAAASUVORK5CYII=",Yn="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAf1JREFUSEvNloExhEEMhd9VgApQATqgAlSAClABKkAFqAAVoAJUQAlUwHxmc5ON/W/3bpi9zNzM3W02L3nJJhmpk4w64WoW4E1JC5LWk9Mvkj4kPU0TRCswIIeSdiQtDgAAfifpTNJ7zYkaMCDnkvZrhsL5taTjxETx6iRgoryVtOJu3kh6lAS9fBD0+MDGttPl/MDpZQ4MAWPowdF6L+mogUKcvHAOQP9WCbwEDL3PLlIow9g0gpOkCCFywHFiLCVg8rOXNGYBNeMenBRldRKBoZhoEeglb16gcqhiS2dUueV91d+NwD7aTDF5fJUKBj0vRFM6w5m3pJhFHYHJA80hUuMNYIdqNXADNUeiwxY1tpdMyQPTkajkaNh0IwDgCJGaeIdK9ygynmPWMskn7xbZGHh/EdzTXQLl3NfNbupuGfCppJNkaVJjKYEPgZpjX+kL7RSc+QDuRnW34oJ6e06xefzFc/r0I3VuGogvfR4+5e/l31omIF2GBMCMRUbZcgqVKXMZIq/99JPpVRKFWx2L1m1obfRtBNoZkbVdilQwh22qUVCA2rYydri2+gBokZsD/EcUfvVZS2B+jKJDl/sFGjtXiT5oZ/uwxaBGsZ0z3aA7o9dfrm2ZpguF9FgiMvqjE9AKG+jVUjLzQg8TcaH/GXet0hpxq71mvW7A33blkB9uxCpOAAAAAElFTkSuQmCC",Al=e=>{const[t,n]=C.useState([]),r=async()=>{const o=await e(),i=await(o==null?void 0:o.json());n(i),console.log(i)};return C.useEffect(()=>{r()},[]),console.log(t),{getApi:r,res:t}},Dp="http://127.0.0.1:8000/api/",Op=async()=>{try{return await fetch(`${Dp}principales`,{method:"GET",headers:{"Content-Type":"application/json"}})}catch(e){console.log(e)}},$1=async e=>{(await fetch(`${Dp}principales/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json"}})).ok},D1=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState("");Al(Op);const l=async c=>{c.preventDefault(),(await fetch("http://127.0.0.1:8000/api/principales",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({titulo:e,foto:n,descripcion:o})})).ok&&(t(""),r(""),i(""))},s=(c,g)=>{let m=new FileReader;m.readAsDataURL(c),m.onload=function(){g(m.result)},m.onerror=function(v){return console.log("Error: ",v)}};return a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(G,{children:[a(K,{htmlFor:"",children:"Titulo"}),a(Ce,{type:"text",name:"Titulo",value:e,onChange:c=>t(c.target.value)})]}),y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file",onChange:c=>{s(c.target.files[0],g=>{r(g)})}}),a(L1,{src:n,alt:""})]}),y(G,{children:[a(K,{htmlFor:"",children:"Descripcion"}),a(O1,{type:"text",value:o,onChange:c=>i(c.target.value)})]}),a(Mn,{onClick:l,children:"Agregar"})]})})},O1=p.textarea`
  width: 300px;
  height: 100px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`,L1=p.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`,I1=()=>{const{getApi:e,res:t}=Al(Op);return C.useEffect(()=>{e()},[]),a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Portada"})}),y(In,{children:[a(D1,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"#"}),a(B,{children:"Titulo"}),a(B,{children:"Foto"}),a(B,{children:"Descripcion"}),a(B,{children:"Acciones"})]})}),t.map((n,r)=>y(Wn,{className:"row",children:[a(H,{children:1+r}),a(Mi,{children:n.titulo}),a(H,{children:a(Pn,{src:n.foto,alt:""})}),a(Mi,{children:n.descripcion}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{onClick:()=>$1(n.id),children:a(Gn,{src:Yn,alt:""})})]})]},r))]})})]})]})})},b1=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(""),[l,s]=C.useState(""),u=async m=>{m.preventDefault();const v=await fetch("http://127.0.0.1:8000/api/capsula",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({titulo:e,foto:n,descripcion:o,mas_detalles:l})}),E=await(v==null?void 0:v.json());(E.mensaje="Creado satisfactoriamente")&&(t(""),r(""),i(""),s(""))},c=(m,v)=>{let E=new FileReader;E.readAsDataURL(m),E.onload=function(){v(E.result)},E.onerror=function(w){return console.log("Error: ",w)}};return a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(U1,{children:[y(M1,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Titulo"}),a(Ce,{type:"text",value:e,onChange:m=>t(m.target.value)})]}),y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file",onChange:m=>{c(m.target.files[0],v=>{r(v)})}}),a(H1,{src:n,alt:""})]})]}),y(F1,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Descripcion breve"}),a(B1,{type:"text",value:o,onChange:m=>i(m.target.value)})]}),y(G,{children:[a(K,{children:"Descripcion detallada"}),a(V1,{type:"text",value:l,onChange:m=>s(m.target.value)})]})]})]}),a(Mn,{onClick:u,children:"Agregar"})]})})},F1=p.div`
  margin: 5px;
`,M1=p.div`
  margin: 5px;
`,U1=p.div`
  display: flex;
`,B1=p.textarea`
  height: 50px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`,V1=p.textarea`
  height: 80px;
  width: 250px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`,H1=p.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`,W1=()=>{const[e,t]=C.useState([]),n=async()=>{const r=await fetch("http://127.0.0.1:8000/api/capsula",{method:"GET",headers:{"Content-Type":"application/json"}}),o=await(r==null?void 0:r.json());t(o)};return C.useEffect(()=>{n()},[]),a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Capsulas informativas"})}),y(In,{children:[a(b1,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"#"}),a(B,{children:"Titulo"}),a(B,{children:"Foto"}),a(B,{children:"Descripcion"}),a(B,{children:"Mas detalles"}),a(B,{children:"Acciones"})]})}),e.map((r,o)=>y(Wn,{className:"row",children:[a(H,{children:1+o}),a(H,{children:r.titulo}),a(H,{children:a(Pn,{src:r.foto,alt:""})}),a(Mi,{children:r.descripcion}),a(Mi,{children:r.mas_detalles}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})," "]})]},o))]})})]})]})})},Q1=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(""),[l,s]=C.useState(""),[u,c]=C.useState(0),[g,m]=C.useState(""),v=async x=>{x.preventDefault();const P=await fetch("http://127.0.0.1:8000/api/centros",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({centro_diagnostico:e,sede:n,centro:o,foto:l,telefono:u,dirreccion:g})}),f=await(P==null?void 0:P.json());(f.mensaje="Creado satisfactoriamente")&&(t(""),r(""),i(""),s(""),c(""),m(""))},E=(x,P)=>{let f=new FileReader;f.readAsDataURL(x),f.onload=function(){P(f.result)},f.onerror=function(d){return console.log("Error: ",d)}};return a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(G1,{children:[y(K1,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Centro diagnostico"}),a(Ce,{type:"text",value:e,onChange:x=>t(x.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Sede"}),a(Ce,{type:"text",value:n,onChange:x=>r(x.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Centro"}),a(Ce,{type:"text",value:o,onChange:x=>i(x.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Telefono"}),a(Ce,{type:"Number",value:u,onChange:x=>c(x.target.value)})]})]}),y(Y1,{children:[y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file",onChange:x=>{E(x.target.files[0],P=>{s(P)})}}),a(X1,{src:l,alt:""})]}),y(G,{children:[a(K,{htmlFor:"",children:"Direccion"}),a(Ce,{type:"text",value:g,onChange:x=>m(x.target.value)})]})]})]}),a(Mn,{onClick:v,children:"Agregar"})]})})},G1=p.div`
  display: flex;
`,K1=p.div`
  margin: 5px;
  width: 250px;
`,Y1=p.div`
  margin: 5px;
  width: 250px;
`,X1=p.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`,Z1=()=>{const[e,t]=C.useState([]),n=async()=>{const r=await fetch("http://127.0.0.1:8000/api/centros",{method:"GET",headers:{"Content-Type":"application/json"}}),o=await(r==null?void 0:r.json());t(o)};return C.useEffect(()=>{n()},[]),a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Centros"})}),y(In,{children:[a(Q1,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"#"}),a(B,{children:"Centro diagnostico "}),a(B,{children:"Sede"}),a(B,{children:"centro"}),a(B,{children:"Foto"}),a(B,{children:"Telefono"}),a(B,{children:"Direccion"}),a(B,{children:"Acciones"})]})}),e.map((r,o)=>y(Wn,{className:"row",children:[a(H,{children:1+o}),a(H,{children:r.centro_diagnostico}),a(H,{children:r.sede}),a(H,{children:r.centro}),a(H,{children:a(Pn,{src:r.foto,alt:""})}),a(H,{children:r.telefono}),a(H,{children:r.dirreccion}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})," "]})]},o))]})})]})]})})},J1="http://127.0.0.1:8000/api/",q1=async()=>{try{return await fetch(`${J1}detallecentros`,{method:"GET",headers:{"Content-Type":"application/json"}})}catch(e){console.log(e)}},ev="http://127.0.0.1:8000/api/",tv=async()=>{try{return await fetch(`${ev}red`,{method:"GET",headers:{"Content-Type":"application/json"}})}catch(e){console.log(e)}},nv=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(0),[l,s]=C.useState(0),[u,c]=C.useState(""),[g,m]=C.useState(1),{res:v}=Al(tv),E=async w=>{w.preventDefault();const x=await fetch("http://127.0.0.1:8000/api/detallecentros",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({nombre:e,direccion:n,telefono:o,horario_atencion:l,mapa:u,id_redcentros:g})}),P=await(x==null?void 0:x.json());(P.mensaje="Creado satisfactoriamente")&&(t(""),r(""),i(""),s(""),c(""))};return a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(G,{children:[a(K,{htmlFor:"",children:"Nombre centro"}),a(Ce,{type:"text",value:e,onChange:w=>t(w.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Direccion"}),a(Ce,{type:"text",value:n,onChange:w=>r(w.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Telefono"}),a(Ce,{type:"number",value:o,onChange:w=>i(w.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Horario de atencion"}),a(Ce,{type:"time",value:l,onChange:w=>s(w.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Mapa"}),a(rv,{type:"text",value:u,onChange:w=>c(w.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Detalle red"}),a(ov,{name:"select",onChange:w=>m(w.target.value),children:v.map((w,x)=>a("option",{value:w.id,children:w.red},x))})]}),a(Mn,{onClick:E,children:"Agregar"})]})})},rv=p.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
  width: 280px;
`,ov=p.select`
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`,iv=()=>{const{res:e}=Al(q1);return a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Detalle centro"})}),y(In,{children:[a(nv,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"Nombre"}),a(B,{children:"Direccion"}),a(B,{children:"Telefono"}),a(B,{children:"Horario atencion"}),a(B,{children:"Mapa"}),a(H,{children:"red centros"}),a(B,{children:"Acciones"})]})}),e.map((t,n)=>y(Wn,{className:"row",children:[a(H,{children:t.nombre}),a(H,{children:t.direccion}),a(H,{children:t.telefono}),a(H,{children:t.horario_atencion}),a(H,{children:t.mapa}),a(H,{children:t.red}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})]})]},n))]})})]})]})})},lv=()=>a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(av,{children:[y(sv,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Titulo"}),a(Ce,{type:"text"})]}),y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file"}),a(ia,{src:"",alt:""})]}),y(G,{children:[a(K,{htmlFor:"",children:"Descripcion"}),a(z1,{})]})]}),y(uv,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Mision"}),a(Ce,{type:"text"})]}),y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file"}),a(ia,{src:"",alt:""})]}),y(G,{children:[a(K,{htmlFor:"",children:"Vision"}),a(Ce,{type:"text"})]}),y(G,{children:[a(K,{children:"Foto"}),a(En,{type:"file"}),a(ia,{src:"",alt:""})]})]})]}),a(Mn,{children:"Agregar"})]})}),ia=p.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`,av=p.div`
  display: flex;
`,sv=p.div`
  margin: 7px;
`,uv=p.div`
    margin: 7px;
`,cv=()=>a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Informacion"})}),y(In,{children:[a(lv,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"Nombre"}),a(B,{children:"Foto"}),a(B,{children:"Descripcion"}),a(B,{children:"Mision"}),a(B,{children:"Foto mision"}),a(B,{children:"Vision "}),a(B,{children:"Foto vision"}),a(B,{children:"Acciones"})]})}),a("tbody",{children:y(Wn,{className:"row",children:[a(H,{children:"asdasd"}),a(H,{children:a(Pn,{src:"",alt:""})}),a(H,{children:"asdasda"}),a(H,{children:"mision"}),y(H,{children:[a(Pn,{src:"",alt:""})," "]}),a(H,{children:"vision"}),y(H,{children:[" ",a(Pn,{src:"",alt:""})]}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})," "]})]})})]})})]})]})}),dv=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(""),[l,s]=C.useState(""),[u,c]=C.useState(""),[g,m]=C.useState(""),[v,E]=C.useState(""),w=async f=>{f.preventDefault(),(await fetch("http://127.0.0.1:8000/api/programa",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({nombre:e,foto:n,contenido_a:o,contenido_b:l,titulo:u,titulo_desc:g,compemento:v})})).ok&&(t(""),r(""),i(""),s(""),c(""),m(""),E(""))},x=(f,d)=>{let h=new FileReader;h.readAsDataURL(f),h.onload=function(){d(h.result)},h.onerror=function(k){return console.log("Error: ",k)}};return a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(fv,{children:[y(pv,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Titulo A"}),a(Ce,{type:"text",value:e,onChange:f=>t(f.target.value)}),y(G,{children:[a(K,{children:"Fondo"}),a(En,{type:"file",onChange:f=>{x(f.target.files[0],d=>{r(d)})}}),a(mv,{src:n,alt:""})]})]}),y(G,{children:[a(K,{htmlFor:"",children:"Titulo complemento"}),a(Ce,{type:"text",value:g,onChange:f=>m(f.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Complemento"}),a(la,{type:"text",value:v,onChange:f=>E(f.target.value)})]})]}),y(hv,{children:[y(G,{children:[a(K,{htmlFor:"",children:"Titulo B"}),a(Ce,{type:"text",value:u,onChange:f=>c(f.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Contenido B"}),a(la,{type:"text",value:l,onChange:f=>s(f.target.value)})]}),y(G,{children:[a(K,{htmlFor:"",children:"Contenido A"}),a(la,{type:"text",value:o,onChange:f=>i(f.target.value)})]})]})]}),a(Mn,{onClick:w,children:"Agregar"})]})})},fv=p.div`
  display: flex;
`,pv=p.div`
  margin: 5px;
`,hv=p.div`
  margin: 5px;
`,la=p.textarea`
  height: 80px;
  width: 250px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`,mv=p.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`,gv=()=>a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Programa"})}),y(In,{children:[a(dv,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"Nombre"}),a(B,{children:"Foto"}),a(B,{children:"Contenido A"}),a(B,{children:"Contenido B"}),a(B,{children:"Titulo descripcion"}),a(B,{children:"Complemento"}),a(B,{children:"Acciones"})]})}),a("tbody",{children:y(Wn,{className:"row",children:[a(H,{children:"Biotech"}),a(H,{children:a(Pn,{src:"",alt:""})}),a(H,{children:"asdasdasd"}),a(H,{children:"asdadasd"}),a(H,{children:"dolores as"}),a(H,{children:"asdasdas"}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})," "]})]})})]})})]})]})}),vv=()=>{C.useState([]);const[e,t]=C.useState("");return C.useState(0),a(bn,{children:y(Fn,{children:[a(Un,{children:a("h1",{children:"Registro"})}),y(G,{children:[a(K,{htmlFor:"",children:"Red"}),a(Ce,{type:"text",value:e,onChange:r=>t(r.target.value)})]}),a(Mn,{onClick:async r=>{r.preventDefault();const o=await fetch("http://127.0.0.1:8000/api/red",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({red:e})}),i=await(o==null?void 0:o.json());(i.mensaje="Creado satisfactoriamente")&&t("")},children:"Agregar"})]})})},yv=()=>{const[e,t]=C.useState([]),n=async()=>{const r=await fetch("http://127.0.0.1:8000/api/red",{method:"GET",headers:{"Content-Type":"application/json"}}),o=await(r==null?void 0:r.json());t(o)};return C.useEffect(()=>{n()},[]),a(Dn,{children:y(On,{children:[a(Ln,{children:a("h1",{children:"Red centros"})}),y(In,{children:[a(vv,{}),a(Bn,{children:y(Vn,{className:"table",children:[a("thead",{children:y(Hn,{children:[a(B,{children:"#"}),a(B,{children:"Red"}),a(B,{children:"Acciones"})]})}),e.map((r,o)=>y(Wn,{className:"row",children:[a(H,{children:1+o}),a(H,{children:r.red}),y(H,{children:[a(Je,{children:a(Qn,{src:Kn,alt:""})}),a(Je,{children:a(Gn,{src:Yn,alt:""})})," "]})]},o))]})})]})]})})},xv=()=>y(kt,{children:[y(wv,{children:[a(kv,{children:y(Cv,{children:[a(aa,{src:"https://unifranz.edu.bo/wp-content/themes/unifranz/dist/images/logo_583717f4.png",alt:"Logo 1"}),a(aa,{src:"https://www.biotech.com.bo/Administrador/images/logo.png",alt:"Logo 2"}),a(aa,{src:"https://www.minsalud.gob.bo/images/web/SedesSanta.jpg",alt:"Logo 3"})]})}),a(Ev,{children:y(Sv,{children:[a("li",{children:a(mn,{to:"/",children:"Inicio"})}),a("li",{children:a(mn,{to:"/programas",children:"Programas"})}),a("li",{children:a(mn,{to:"/informaciones",children:"Informaciones"})}),a("li",{children:a(mn,{to:"/centross",children:"Centros"})}),a("li",{children:a(mn,{to:"/quienlorealiza",children:"¿Quien lo realiza?"})}),a("li",{children:a(mn,{to:"/colaboraciones",children:"Colaboracion"})}),a("li",{children:a(mn,{to:"/contactanos",children:"Contactanos"})})]})})]}),a($p,{})]}),wv=p.div`
  position:absolute;
  width:100%;
  display: flex;
  flex-direction: column;
  z-index:2;

`,Sv=p.div`
  display: flex;
  list-style: none;
  margin: 0;
  width: 70%;
  background: #5e636d9e;
  padding: 15px;
  justify-content: center;
    align-items: center;
`,kv=p.div`
 width: 100%;
 display: flex;
  justify-content: center;
 
  
  
`,Cv=p.div`
margin-top:30px;
width: 80%;
height: 60px;
background: #ffffff4b;
opacity:0.8;
display: flex;
justify-content: space-around;
align-items: center;

`,aa=p.img`
   height: 55%;
  background-size: cover;
  transition: all 2s;
  &:hover {
    transform: scale(1.5);
  }
`,mn=p(jo)`
 color:#fff;
text-decoration: none;
padding: 20px;
transition: all 0.5s;

font-family: 'Poppins', sans-serif;

  /* border-radius: 5px; */
  &:hover {
    background-color: #ffffffea;
    color:#3c425c
  }
`,Ev=p.div`
width:100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
`,jr=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/centros",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),a(kt,{children:y(Av,{children:[e.slice(0,3).map((r,o)=>y(jv,{children:[y(Kc,{children:[" ",r.sede]}),a(Yc,{children:r.dirreccion}),a(Nv,{children:r.telefono})]},o)),y(Tv,{children:[a("li",{children:a(gn,{to:"/",children:"Inicio"})}),a("li",{children:a(gn,{to:"/programas",children:"Programas"})}),a("li",{children:a(gn,{to:"/informaciones",children:"Informaciones"})}),a("li",{children:a(gn,{to:"/centross",children:"Centros"})}),a("li",{children:a(gn,{to:"/quienlorealiza",children:"Nosotros"})}),a("li",{children:a(gn,{to:"/colaboraciones",children:"Colaboracion"})}),a("li",{children:a(gn,{to:"/contactanos",children:"Contactanos"})})]}),y(_v,{children:[a(Kc,{children:"Contactate con nosotros"}),a(Yc,{children:" info@biotech.com.bo"}),a(Rv,{})]})]})})},Pv=Cp`
 0% {left: -10% ;
 }
  50% {left: 50%;
    width: 150px;
    height:150px;
    background-color:#97a6c94b;
   }
  100% {left: -10%;
   }
`,Av=p.div`
  margin-top: 0 auto;

  width: 100%;
  height: 300px;
  max-height: 450px;
  background-color: #0b41ace6;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: absolute;
    content: "";
    background-color: #14154d;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    z-index: -1;
    left: -10%;
    animation: ${Pv} 10s linear infinite;
  }
`,Tv=p.div`
  width: calc(100% / 3);
  background-color: #143068a6;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
  justify-content: center;
`,_v=p.div`
  width: calc(100% / 3);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  border-radius: 2em 0 0 2em;
  margin-left: 2em;
`,gn=p(jo)`
  padding: 0.5em 100vh;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffffea;
    color: #3c425c;
  }
`,jv=p.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #ffffff;
  padding: 0 0 0 3em;
  height: 80%;
`,Kc=p.h2`
  font-size: 27px;
  border-left: solid 2px #ffffff;
  margin: 1em 0;
  padding-left: 1em;
`,Yc=p.h2`
  font-size: 16px;
  margin: 0 0 1em 1em;
  text-align: justify;
  width: 60%;
  overflow: hidden;

  max-width: 80%;
`,Nv=p.h2`
  font-size: 17px;

  margin: 1em;
`,Rv=p.input`
  font-size: 20px;
  border: none;
  margin: 1em;
  background-color: #3c425c;
  padding: 0.5em;
  place-content: "escribenos";
  transition: all 1.5s;

  &:focus {
    background-color: #a6445e;
    color: #fff;
    font-size: 15px;
  }
`,zv=()=>y($v,{children:[a(Dv,{src:"https://images.pexels.com/photos/119604/baby-foot-blanket-newborn-119604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""}),a(Ov,{children:a(Lv,{children:"Programa de Tamizaje NEONATAL"})})]}),$v=p.div`
  position: relative;
  width: 100%;
  height: 80vh;
`,Dv=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 24% 0);
`,Ov=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #222f49;
`;p.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;p.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #a6445e;
    color: #fff;
  }
`;const Lv=p.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  font-family: "Poppins", sans-serif;
  color: #e0e0e0;
  font-size: 2em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`,Iv=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/programa",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),y(bv,{children:[e.map((r,o)=>y(Fv,{children:[y(Mv,{children:[a(Zc,{children:r.nombre}),a(Xc,{children:r.contenido_a})]}),y(Uv,{children:[a(Zc,{children:r.titulo}),a(Xc,{children:r.contenido_b})]})]},o)),";"]})},bv=p.div`
  width: 100%;
  height: 47vh;
  display: flex;
  justify-content: center;
`,Fv=p.div`
  width: 80%;
  max-width: 1350px;
  height: 45vh;
  max-height: 400px;
  z-index: 2;
  display: flex;
  margin-top:3em;
  gap:3em; 
`,Mv=p.div`
  width: calc(100% / 2);
  height: 100%;
  background-color: #f779d9;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  transition: all 2s;
  &::before{
    content:"";
    position:absolute;
    width: 38%;
    height: 45%;
    transform:rotate(-8deg);
    z-index:-1;
transition:all 3s;
    background-color:#22728b6c;
  }
  &:hover{
    width: calc(102% / 2);
  height: 102%;&::before{
    transform:rotate(0deg);
  }
  }
`,Uv=p.div`
  width: calc(100% / 2);
  background-color: #74bacf;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  &::before{
    content:"";
    position:absolute;
    width: 38%;
    height: 45%;
    transform:rotate(8deg);
    z-index:-1;
    background-color:#8b22226c;
    transition:all 3s;
  }
  &:hover{
    width: calc(102% / 2);
  height: 102%;&::before{
    transform:rotate(0deg);
  }
}
`,Xc=p.p`
  text-align: justify;
  padding: 0 3em;
`,Zc=p.h2`
  color: #fff;
  font-size: 30px;
`,Lp=()=>a(Hv,{children:a(Vv,{})}),Bv=Cp`
to{
    transform: rotate(360deg);
}
`,Vv=p.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  border-top-color: #000;
  animation: ${Bv} 1.2s linear infinite;
  display: flex;
  justify-content: center;
`,Hv=p.div`
  width: 100vh;
  display: flex;
  justify-content: center;
`,Ip=Be.createContext({}),bp=!0;function Wv({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:i,direction:l,duration:s,enableAnimation:u=bp}){const c={};return l==="rtl"&&(c["--animation-direction"]="reverse"),typeof s=="number"&&(c["--animation-duration"]=`${s}s`),u||(c["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(c.width=n),(typeof r=="string"||typeof r=="number")&&(c.height=r),(typeof o=="string"||typeof o=="number")&&(c.borderRadius=o),i&&(c.borderRadius="50%"),typeof e<"u"&&(c["--base-color"]=e),typeof t<"u"&&(c["--highlight-color"]=t),c}function Jc({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:i=!1,style:l,...s}){var u,c,g;const m=Be.useContext(Ip),v={...s};for(const[h,k]of Object.entries(s))typeof k>"u"&&delete v[h];const E={...m,...v,circle:i},w={...l,...Wv(E)};let x="react-loading-skeleton";n&&(x+=` ${n}`);const P=(u=E.inline)!==null&&u!==void 0?u:!1,f=[],d=Math.ceil(e);for(let h=0;h<d;h++){let k=w;if(d>e&&h===d-1){const R=(c=k.width)!==null&&c!==void 0?c:"100%",D=e%1,z=typeof R=="number"?R*D:`calc(${R} * ${D})`;k={...k,width:z}}const T=Be.createElement("span",{className:x,style:k,key:h},"‌");P?f.push(T):f.push(Be.createElement(Be.Fragment,{key:h},T,Be.createElement("br",null)))}return Be.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":(g=E.enableAnimation)!==null&&g!==void 0?g:bp},t?f.map((h,k)=>Be.createElement(t,{key:k},h)):f)}function Qv({children:e,...t}){return Be.createElement(Ip.Provider,{value:t},e)}const Gv=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(!0);async function o(){const i=await fetch("http://127.0.0.1:8000/api/programa",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),l=await(i==null?void 0:i.json());t(l),r(!1),console.log(n)}return C.useEffect(()=>{o()},[]),y(Kv,{children:[n&&a(Lp,{}),e.map((i,l)=>y(Yv,{children:[a(Xv,{children:i.titulo_desc||a(Jc,{})}),a(Zv,{children:i.compemento||a(Jc,{})})]},l)),";"]})},Kv=p.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: start;
  
`;p.img`
width:300px;
height:300px;
`;const Yv=p.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222f49;
  color: #fff;

  &::before {
    content: "";
    width: 450px;
    height: 430px;
    background-color: #2ea6caa7;
    position: absolute;
    z-index: -1;
    left: 10em;
    border-radius: 50% 0;
    transform: translatey(-3em);
    transition:all 2s;
    
           
  }
&:hover{
&::before{
  border-radius:50% 0;
  transform: translatey(-2em);
  
  box-shadow:  -12px -12px 24px #3a5e67;
}
&::after{
  box-shadow:  
             5px 5px 14px #2c2b2b;
             background-color: #918d8d99;          
}
}
  &::after {
    
    content: "";
    width:7%;
    height: 25%;
    background-color: #ffffff;
    position: absolute;
   
    transition:all 1s;

/*  
    box-shadow:  -12px -12px 24px #3a5e67,
             12px 12px 24px #2d4850; */

    left:25%;
    border-radius: 0 50%  50% 0;
    
   
  }
  border-radius:2em;
`,Xv=p.h2`
  font-size: 35px;
`,Zv=p.h4`

  font-size: 15px;
  text-align: justify;
  padding: 1em 5rem 1em 10em ; 
`,Jv=()=>y(kt,{children:[a(zv,{}),a(Iv,{}),a(qv,{children:"titulo"}),a(Gv,{}),a(jr,{})]}),qv=p.div`
text-align:left;
margin: 2em 3em ;
border:none ;
border-left: solid 10px #222f49;
font-size:35px;
`,ey=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/capsula",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),y(ry,{children:[a(ny,{children:"Informate con nuestras capsulas"}),a(kt,{children:a(oy,{children:e.slice(0,3).map((r,o)=>y(iy,{children:[a(ly,{children:r.titulo}),a(ay,{children:r.descripcion}),a("li",{children:a(ty,{to:"/informaciones",children:"Ver más"})})]},o))})})]})},ty=p(jo)`
 padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #222f4928;
  transition: all 2s;
  color: #222f49;
  &:hover {
    background-color: #0b0c3a2d;
    color: #222f49;
    padding: 10px 60px;
  }
`,ny=p.h2`
  border-top: 7em;
  border-left: 10px solid #222f49;
  font-size: 3em;
  letter-spacing: 2px;
  color: #222f49;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #a6445e;
  }
`,ry=p.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 590px;
  max-height: 650px;
  background: rgb(223, 225, 235);
  list-style: none;
`,oy=p.div`
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  gap: 2em;
  width: 100%;
  height: 450px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; //
`,iy=p.div`
  width: calc(100 / 3);
  height: 420px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background: rgb(223, 225, 235);
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.25) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`,ly=p.h2`
  margin-top: 1em;
  width: 200px;
  text-align: start;
  line-height: 1.2;
`,ay=p.p`
  width: 320px;
  height: 160px;
  overflow: hidden;
  padding: 10px 30px;
  text-align: justify;
  line-height: 1.2;
  
`;p.button`
  padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #222f4928;
  transition: all 2s;
  color: #222f49;
  &:hover {
    background-color: #0b0c3a2d;
    color: #222f49;
    padding: 10px 60px;
  }
`;const sy=()=>y(uy,{children:[a(fy,{children:a(py,{children:"Sobre Nosotros"})}),a(vy,{children:y(dy,{children:[a(gy,{src:"https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"titulo_img"}),y(my,{children:[a(cy,{children:"Titulo biotech"}),a(hy,{children:"Biotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una tecnologí­a confiable y novedosa para la realización de pruebas de diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva. Contactando proveedores internacionales de renombre mundial, con quienes ha establecido una sólida relaciónBiotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una tecnologí­a confiable y novedosa para la realización de pruebas de diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva. Contactando proveedores internacionales de renombre mundial, con quienes ha establecido una sólida relaciónBiotech Bolivia fue fundada en 1993 con el objetivo de ofrecer una tecnologí­a confiable y novedosa para la realización de pruebas de diagnóstico clí­nico. Habiendo propuesto mejores rapia intensiva. Contactando proveedores internacionales de renombre mundial, con quienes ha establecido una sólida relación a través de los años."}),a(yy,{children:"ler mas "})]})]})})]}),uy=p.div`
  padding: 3rem;
  margin: 0 auto;
  background: linear-gradient(to bottom left, #203d75e3 50%, #224c9ea0 50%);
  /* background-color: #203d75e3; */
  height:80vh;
  
`;p.p`
margin: 1rem 0;
width:60%;
  text-align: justify;
  line-height: 1.6;
  color: #ffffff;
  max-height: 300px;
  overflow: hidden;

`;const cy=p.h3`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  color: #222352;
`,dy=p.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    align-items: center;

`,fy=p.div`
  width: 45%;
  text-align: justify;
`,py=p.h2`
  border-top: 7em;
  border-left: 10px solid #ffffff;
  font-size: 3em;
  letter-spacing: 2px;
  color: #ffffff;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #fff;
  }
`,hy=p.p`
  margin: 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #000000;
  max-height: 400px;
  overflow: hidden;
`,my=p.div`
  padding: 3rem;
  display: flex;
  width: 600px;
  height: 400px;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffffd5;
  border-radius:0 3em 3em 0;

`,gy=p.img`
  display: flex;
  flex-direction: row;
  width: 50%;
  max-width:500px;
  height: 70%;
  border-radius:3em 0 0 3em;
  size: cover;
  /* transition: all 3s;
  &:hover {
    transform: scale(1.05);
  } */
`,vy=p.div``,yy=p.button`
  background-color: #484d7ec8;
  color: #fff;
  border: none;
  padding: 1em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #663d3f;
  }
`,xy=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(!0);async function o(){const i=await fetch("http://127.0.0.1:8000/api/programa",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),l=await(i==null?void 0:i.json());t(l),r(!1),console.log(n)}return C.useEffect(()=>{o()},[]),y(kt,{children:[n&&a(Lp,{}),e.map((i,l)=>y(wy,{children:[a(Ty,{children:a(_y,{children:i.titulo_desc})}),y(Ey,{children:[y(Py,{children:[a(ky,{children:"Programa"}),a(Ay,{children:i.compemento})]}),a(Sy,{children:a(Cy,{src:i.foto,alt:"Imagen de la tarjeta"})})]})]},l))]})},wy=p.div`
  background-color:rgb(223, 225, 235);
  /* ad1a8b61 */
  /* background-color: #babcc7; */
  width: 100%;
  padding:2em;
`,Sy=p.div`
margin:0;
padding:0;

`,ky=p.h2`
color:#fff;

`,Cy=p.img`
  display: flex;
  max-width:650px;
  min-width:500px;
  min-height:400px;
  max-height:300px;
  background-size: cover;
border-radius:3em;
`,Ey=p.div`
  display: flex;
  flex-direction: row;
`,Py=p.div`
padding:3em;
margin:3em 0 3em 3em;
  display: flex;
  max-width: 600px;
  min-width: 300px;
  flex-direction: column;
  align-items: stretch;
border-radius:3em 0 0 3em;
background-color:#0b3079e6;
`,Ay=p.p`
  margin: 0 0 0 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #e7e7e7;
  max-height:300px;
  overflow:hidden;
`,Ty=p.div`
  width: 45%;
  text-align: justify;
`,_y=p.h2`
  border-top: 7em;
  border-left: 10px solid #19193b;
  font-size: 40px;
  text-align:left;
  letter-spacing: 2px;
  color: #0b3079e6;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #fff;
  }
`,jy=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/principales",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),a(kt,{children:e.map((r,o)=>y(Ny,{children:[a(Fp,{src:r.foto}),y(yu,{children:[a(xu,{children:r.titulo}),a(Mp,{children:r.descripcion}),a(Ry,{children:" MÁS INFORMACION"})]})]},o))})},Fp=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  box-shadow:  -12px -12px 24px #151616;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
 

  &::after{
  content:"";
  position:relative;
  width:100%;
  height:80vh;
  background-color:#2014525f;

}
`,Mp=p.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
`,yu=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`,Ny=p.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
`,Ry=p.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`,xu=p.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`,zy=()=>y($y,{children:[a(jy,{}),a(xy,{}),a(sy,{}),a(ey,{}),a(jr,{})]}),$y=p.div``,Dy=()=>y(Oy,{children:[a(Ly,{src:"http://127.0.0.1:8000/images/fo.jpg",alt:""}),a(Iy,{children:a(by,{children:"Informate con nuestras capsulas informativas"})})]}),Oy=p.div`
position: relative;
width: 100%;
height: 75vh;
`,Ly=p.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-size: cover;
clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 24% 0);
`,Iy=p.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 10px 3rem;
text-align: center;
background-color: #222f49;
`;p.div`
position: relative;
width: 100%;
height: 100vh;
`;p.button`
z-index: 1;
background-color: #ffffff;
color: #2e3049;
border: none;
margin: 3em;
padding: 1em 5em;
transition: all 1s;
cursor: pointer;
border-radius: 5px;
&:hover {
  background-color: #a6445e;
  color: #fff;
}
`;const by=p.h2`
margin-top: 4em;
max-width: 30%;
min-width: 20%;
font-family: "Poppins", sans-serif;
color: #e0e0e0;
font-size: 2em;
display: flex;
padding: 10px;
text-align: left;
border-left: 10px solid #ffffff;
`;p.div`
  width: calc(100% - 950px);
  height: 100vh;
  max-height:125vh;
  overflow: auto; /* esto hace que aparezca una barra de desplazamiento si el contenido es más grande que el contenedor */

  background-color: #222f49;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: #fff;

`;p.input`
padding:0.8em;
border:none;
&:focus{
  border:none;
  background-color:#42455057;
  color:#fff;
};

`;p.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;p.button`
  width: 100%;
  padding: 0.8em 0;
  border: none;
  border-bottom: solid 1px;
  border-top: solid 1px;
  font-size: 1em;
  transition: all 1s;

  &:hover {
    background-color: #326bdd76;
    color: #fff;
    transform: translateX(-10px);
    border-bottom: solid 1px;
  border-top: solid 1px;
  }
`;p.label`
  padding: 2em 0 0 0;
  font-size: 2em;
  border-left: 1em solid #fff;
`;p.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  padding:1em;


justify-content: center

`;p.div`
  width: 30%;
  height: calc(100% / 4);
  background-color: #bfccccca;
 max-width:400px;
 min-width:250px;
  display: flex;
  flex-direction: column;
  transition:all 1s;
  text-align:justify;
  gap: 2em;
  &:hover{
   transform:scale(1.08);

  }
`;p.p`
padding:2em;
width:100%;
height: 35vh;
overflow:hidden;
`;p.h2`
text-align:center;
padding: 0.5em 0;
background-color:#A6445E;
color:#fff;
width:100%;
display:block;
`;p.button`
  width: 100%;
  padding: 0.8em 0;
  border: none;
  border-bottom: solid 1px;
  border-top: solid 1px;
  font-size: 1em;
  transition: all 1s;

  &:hover {
    background-color: #326bdd76;
    color: #fff;

    border-bottom: solid 1px;
  border-top: solid 1px;
  }
`;const Fy=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/capsula",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),y(kt,{children:[a(Dy,{}),a(Vy,{children:y(My,{children:[a(Uy,{children:a(Wy,{children:a(Qy,{children:e.map((r,o)=>y(Gy,{children:[a(Ky,{children:r.titulo}),a(Yy,{children:r.descripcion}),a("li",{children:a(Hy,{to:"/informaciones",children:"Ver más"})})]},o))})})}),y(By,{children:[a("h1",{children:"capsulas"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"}),a(Vt,{children:"capsula 1"})]})]})}),a(jr,{})]})},Vt=p.button`
  width: 100%;
  height: 3.5em;
 margin: 0.2em 0 ;
`,My=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #682f2f;
`,Uy=p.div`
  grid-area: 1 / 1 / 5 / 4;
  height: 100%;
  width: 100%;
  background-color: #fff;
`,By=p.div`
  grid-area: 1 / 4 / 5 / 5;
  height: 100%;
  width: 100%;
  background-color: #72abad;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`,Vy=p.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,Hy=p(jo)`
 padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #222f4928;
  transition: all 2s;
  color: #222f49;
  &:hover {
    background-color: #0b0c3a2d;
    color: #222f49;
    padding: 10px 60px;
  }
`;p.h2`
  border-top: 7em;
  border-left: 10px solid #222f49;
  font-size: 3em;
  letter-spacing: 2px;
  color: #222f49;
  transition: all 1s;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #a6445e;
  }
`;const Wy=p.div`
  margin-top: 0 auto;
  padding: 3rem;
  width: 100%;
  height: 100%;
 
  background: rgb(223, 225, 235);
  list-style: none;
`,Qy=p.div`
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  gap: 2em;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden; //
`,Gy=p.div`
  width: calc(100% / 3);
  height: 350px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background: rgb(223, 225, 235);
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.25) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`,Ky=p.h2`
  margin-top: 1em;
  width: 200px;
  text-align: start;
  line-height: 1.2;
`,Yy=p.p`
  width: 320px;
  height: 160px;
  overflow: hidden;
  padding: 10px 30px;
  text-align: justify;
  line-height: 1.2;
  
`;p.button`
  padding: 10px 45px;
  margin: 20px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #222f4928;
  transition: all 2s;
  color: #222f49;
  &:hover {
    background-color: #0b0c3a2d;
    color: #222f49;
    padding: 10px 60px;
  }
`;const Xy=()=>y(Zy,{children:[a(Fp,{src:"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:""}),a(yu,{children:a(xu,{children:"Centros donde se realiza el tamizaje"})})]}),Zy=p.div`
  position: relative;
  width: 100%;
  height: 80vh;
`,Jy=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/centros",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),y(qy,{children:[e.slice(0,3).map((r,o)=>y(ex,{children:[a(tx,{src:r.foto,alt:"img"}),y(nx,{children:[a(ox,{children:r.sede}),a(ix,{children:r.telefono}),a(lx,{children:r.dirreccion}),a(rx,{children:"Maps"})]})]},o)),";"]})},qy=p.div`

  width: 100%;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
`,ex=p.div`
  background-color: transparent;
  width: 50vh;
  height: 40vh;
  position: relative;
  transition: all 2s;
  &:hover Img {
    margin-top: -15vh;
  }
`,tx=p.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  transition: all 2s;
  border-radius: 20px;
  background-size: cover;
`,nx=p.div`
  position: absolute;
  background-color: #28274d;
  width: 50vh;
  height: 40vh;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
  border-radius: 20px;
  display: flex;
  padding: 2em;
  align-items: stretch;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  color:#fff;
  &:hover {
    margin-top: 10vh;
  }
`,rx=p.button`
display:block;
padding: 1em;
border:none;
cursor: pointer;
background-color:rgb(152, 33, 39);
color:#fff;
transition:background-color 1s,color 2s;
border-radius:5px;&:hover{
  background-color:#ffffff;
color:rgb(152, 33, 39);
}

`,ox=p.h2``,ix=p.h3``,lx=p.p``,ax=()=>{const[e,t]=C.useState([]);async function n(){const l=await fetch("http://127.0.0.1:8000/api/detallecentros",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),s=await(l==null?void 0:l.json());t(s)}C.useEffect(()=>{n()},[]);const[r,o]=C.useState([]);async function i(){const l=await fetch("http://127.0.0.1:8000/api/red",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),s=await(l==null?void 0:l.json());o(s)}return C.useEffect(()=>{i()},[]),a(kt,{children:r.map((l,s)=>y("div",{children:[a(sx,{children:l.red}),a(fx,{children:y(px,{className:"table",children:[a(hx,{children:y(mx,{children:[a(Et,{children:"Nombre"}),a(Et,{children:"Direccion"}),a(Et,{children:"Telefono"}),a(Et,{children:"Horario de atencion"}),a(Et,{children:"mapa"})]})}),e.map((u,c)=>a(gx,{children:y(ux,{children:[a(Mr,{children:u.nombre}),a(Mr,{children:u.direccion}),a(Mr,{children:u.telefono}),a(Mr,{children:u.horario_atencion}),a(Mr,{children:a(cx,{href:u.mapa,children:"Ver mapa"})})]})},c)),a(dx,{children:y("tr",{children:[a(Et,{}),a(Et,{}),a(Et,{}),a(Et,{}),a(Et,{})]})})]})})]}))})},sx=p.h2`
font-size:20px;
border-left:1em solid;
margin-left:2em;
`,ux=p.tr`
 background-color:#d7d8df;
  &:hover{
    background-color:#2327367f;
    color:#fff;
    }
`,cx=p.a`
color:#968989;
&:hover{
  color:#ffff;
}
`,dx=p.tfoot`
  background-color: #1e3c4d;
  height:2em;
`,fx=p.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
`,px=p.table`
  width: 85%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
`,hx=p.thead``,mx=p.tr`
  background-color: #1e3c4d;
  color: #ffff;
  text-align: left;

 
`,Et=p.th`
  padding: 12px 15px;
`,gx=p.tbody`
  width: 100%;
  height: 3em;
`,Mr=p.td`
border:1px solid;
height:0em;
padding:0 1em ;
`,vx=()=>y(yx,{children:[a(Xy,{}),a(xx,{children:"Centros de diagnostico"}),a(Jy,{}),a(ax,{}),a(jr,{})]}),yx=p.div`
  width: 100%;
  height: 100%;
`,xx=p.h2`
  margin: 1em 2em 1em 3em;
  font-size: 2em;
  border-left: 1em solid rgb(152, 33, 39);
`,wx=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/informacion",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),a(kt,{children:e.map((r,o)=>y(Sx,{children:[a(kx,{children:a(Ax,{children:r.mision})}),y(Cx,{children:[a(Ex,{children:"Mision"}),a("img",{src:"",alt:"img"})]}),y(Tx,{children:[a(Px,{children:"Vision"}),a("img",{src:"",alt:"img"})]}),a(_x,{children:a(jx,{children:r.vision})})]}))})},Sx=p.div`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2em;
`,kx=p.div`
  /* background-color: #a84141; */
  width: 50%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
`,Cx=p.div`
  width: 50%;
  height: 55vh;
  display: flex;

  align-items: center;
`,Ex=p.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-left: solid 10px;
  transition: all 2s linear;
  &:hover {
    border-left: none;
    background-image: url(http://127.0.0.1:8000/img/empresa/vision_.jpg);
    /* box-shadow: 5px 5px 6px 8px rgba(0, 0, 0, 0.3); */
    width: 80vh;
    height: 80%;
    color: transparent;
    background-size: cover;
  }
`,Px=p.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-right: solid 10px;
  transition: all 3s linear;
  &:hover {
    border-right: none;
    background-image: url(http://127.0.0.1:8000/img/empresa/vision_.jpg);
    width: 100%;
    height: 100%;
    color: transparent;
    background-size: cover;
    width: 80vh;
    height: 80%;
  }
`,Ax=p.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    /* top:10vh;
    left:30vh; */
    z-index: -1;
    border-radius: 2em;
    transform: rotate(-7deg);
  }
`,Tx=p.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
`,_x=p.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
`,jx=p.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    /* top:10vh;
    left:30vh; */
    z-index: -1;
    border-radius: 2em;
    transform: rotate(7deg);
  }
`,Nx=()=>y(zx,{children:[a(Rx,{src:"http://127.0.0.1:8000/img/empresa/somos_.png",alt:""}),y(yu,{children:[a(xu,{children:"Biotech "}),a(Mp,{children:" Preservando la vida desde su nacimiento"})]})]}),Rx=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 34% 100%, 48% 100%, 24% 50%);
`,zx=p.div`
  width: 100%;
  height: 80vh;
`,$x=()=>y(Dx,{children:[a(Nx,{}),a(wx,{}),a(jr,{})]}),Dx=p.div`
  width: 100%;
  height: 100%;
`,Ox=()=>{const[e,t]=C.useState([]);async function n(){const r=await fetch("http://127.0.0.1:8000/api/principales",{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await(r==null?void 0:r.json());t(o)}return C.useEffect(()=>{n()},[]),y(kt,{children:[e.map((r,o)=>y(bx,{children:[a(Lx,{src:r.foto}),a(Ix,{children:a(Fx,{children:"Con la ayuda de:"})})]},o)),a(Mx,{children:y(Ux,{children:[y(Bx,{children:[" ",a("h1",{children:"titulo"}),y("div",{children:[a("h2",{children:"nombre"}),a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quis corrupti, quibusdam totam aperiam debitis quo sit iste sapiente?"})]}),y("div",{children:[a("h2",{children:"nombre"}),a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quis corrupti, quibusdam totam aperiam debitis quo sit iste sapiente?"})]}),y("div",{children:[a("h2",{children:"nombre"}),a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quis corrupti, quibusdam totam aperiam debitis quo sit iste sapiente?"})]})]}),y(Vx,{children:[" ",a(Hx,{src:"https://conviertemas.com/wp-content/uploads/2022/09/colaboraciones-de-Instagram-Convierte-Mas.png"})]})]})})]})},Lx=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-size: cover;
  box-shadow: -12px -12px 24px #151616;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);

  &::after {
    content: "";
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #2014525f;
  }
`;p.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
`;const Ix=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`,bx=p.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;p.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`;const Fx=p.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`,Mx=p.div`
  width: 100%;
  height: 80vh;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ux=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  height: 80%;

  background-color: transparent;
`,Bx=p.div`
  grid-area: 1 / 1 / 2 / 3;
  width: 100%;
  height: 100%;
  background-color: #463939;
`,Vx=p.div`
  grid-area: 1 / 3 / 2 / 4;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
 
  &::before {
    content: "";
    position: absolute;
    display: block;
    width:80%;
    height:80%;
   border:solid 2px #afa2a2;
    left:1em;
    top:1em;
    z-index:1;
  }
`,Hx=p.img`
 z-index:2;
  width: 80%;
  height: 80%;
  background-size: cover;


`,Wx=()=>y(kt,{children:[y(rw,{children:[a(ew,{}),y(nw,{children:[a(ow,{children:" Conntactate con nosostros"}),a(tw,{})]})]}),a(Jx,{children:"Contactanos"}),a(qx,{children:y(Qx,{children:[y(Gx,{children:[a(Zx,{children:"informacion de contacto"})," ",a(Xx,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium dicta perferendis adipisci impedit laboriosam?"}),a("h4",{children:"cel:75215686"}),a("h4",{children:"email:biotechadmsadsl"}),a("h3",{children:"ubicacion"})]}),y(Kx,{children:[a(Xo,{children:"nombre"}),a(Zo,{type:"text"}),a(Xo,{children:"Email"}),a(Zo,{type:"email"}),a(Xo,{children:"Mensaje"}),a(Zo,{type:"text"}),a(Xo,{children:"Celular"}),a(Zo,{type:"number"}),a(Yx,{children:"enviar"})]})]})}),a(jr,{})]}),Qx=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 70vw;
  height: 80vh;
`,Gx=p.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #0b41ace6;
  width: 30vw;
  height: 100%;
  display:flex;
  flex-direction:column;
  padding:5em;
color:#fff;
position:relative;
&::before{
  content:"";
  width: 150px;
  display: block;
  height:150px;
  background-color:#8b185f;
  position:absolute;
  border-radius: 90% 0  0 0;
  bottom: 0;
   right: 0;
}
&::after{
  content:"";
  width: 150px;
  height:150px;
  display: block;
  background-color:#5a1f72a9;
  position:absolute;
  bottom: 60px;
   right: 60px;
   border-radius:50%;

}
       gap:1em;      
`,Kx=p.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #f3f3f3;
  width: 50vw;
  height: 100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content:center;
  padding:5em;
  box-shadow: 8px 9px 25px 8px rgba(0,0,0,0.34);
-webkit-box-shadow: 8px 9px 25px 8px rgba(0,0,0,0.34);
-moz-box-shadow: 8px 9px 25px 8px rgba(0,0,0,0.34);
`,Yx=p.button`
padding:1em;
width:12em;
margin: 0 0 0 65% ;
position: relative;
transition:all 3s;
cursor: pointer;
&::before{
  content:"";
  width: 30%;
  display: block;
  height:100%;
  background-color:#8b185f;
  position:absolute;
  border-radius: 90% 0  0 0;
  bottom: 0;
   right: 0;
   transition:all 1s;
   z-index:2;
}
&::after{
  content:"";
  width: 36%;
  display: block;
  height:100%;
  background-color:#24188b;
  position:absolute;
  border-radius: 90% 0  0 0;
  bottom: 0;
   right: 0;
   transition:all 1s;
   z-index:1;
}
`,Xx=p.p`
text-align:justify;

`,Zx=p.h2`
margin:0 0 1em 0;
`,Jx=p.h1`
  font-size: 35px;
  padding: 0.5em;
  color: #000000;
  text-align: center;
  background-color:#f0ecec;
`,qx=p.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0ecec;
`,Xo=p.label`
  color: #1b1a1a;
  padding: 0 3em;
  font-size: 16px;
  width:50%;
`;p.input`
  width: 80%;
  height: 10em;
  background-color: transparent;
  border: none;
  border-left: 10px;
  
  color: #fff;
`;const Zo=p.input`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 3em;
  margin: 1em 3em;
  border:none;
  border-bottom:solid #6b4848 1px;
  color: #000000;
  background:transparent;
`;p.div`
  background-color: #b0b9df;
  width: 60vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 3em;
  padding: 2em;
  border-radius: 3em;
  &::before {
    content: "";
    background-color: #2a148b;
    width: 60vw;
    height: 65vh;
    position: absolute;
    z-index: -1;
    left: 20%;
    border-radius: 3em;
    transform: rotate(2deg);
  }
`;const ew=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-size: cover;
  border: none;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
`,tw=p.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
`,nw=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`,rw=p.div`
  top: 0;
  position: relative;
  width: 100%;
  height: 60vh;
`;p.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`;const ow=p.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;function iw(){return a("div",{children:a(Qv,{baseColor:"#202020",highlightColor:"#444",children:a(g1,{children:y(d1,{children:[y(Ne,{path:"/",element:a(xv,{}),children:[a(Ne,{path:"/",element:a(zy,{})}),a(Ne,{path:"/programas",element:a(Jv,{})}),a(Ne,{path:"/informaciones",element:a(Fy,{})}),a(Ne,{path:"/centross",element:a(vx,{})}),a(Ne,{path:"/quienlorealiza",element:a($x,{})}),a(Ne,{path:"/colaboraciones",element:a(Ox,{})}),a(Ne,{path:"/contactanos",element:a(Wx,{})})]}),y(Ne,{path:"/ingresar",element:a(A1,{}),children:[a(Ne,{path:"portada",element:a(I1,{})}),a(Ne,{path:"capsulas",element:a(W1,{})}),a(Ne,{path:"centros",element:a(Z1,{})}),a(Ne,{path:"detallecentro",element:a(iv,{})}),a(Ne,{path:"informacion",element:a(cv,{})}),a(Ne,{path:"programa",element:a(gv,{})}),a(Ne,{path:"redcentro",element:a(yv,{})})]})]})})})})}ua.createRoot(document.getElementById("root")).render(a(Be.StrictMode,{children:a(iw,{})}));
