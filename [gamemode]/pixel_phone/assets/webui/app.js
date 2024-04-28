function Bk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var A0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _w(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ow={exports:{}},Fu={},zw={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),Fk=Symbol.for("react.portal"),Vk=Symbol.for("react.fragment"),Hk=Symbol.for("react.strict_mode"),Wk=Symbol.for("react.profiler"),Uk=Symbol.for("react.provider"),qk=Symbol.for("react.context"),Gk=Symbol.for("react.forward_ref"),Kk=Symbol.for("react.suspense"),Zk=Symbol.for("react.memo"),Yk=Symbol.for("react.lazy"),gy=Symbol.iterator;function Xk(e){return e===null||typeof e!="object"?null:(e=gy&&e[gy]||e["@@iterator"],typeof e=="function"?e:null)}var Nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Aw=Object.assign,Lw={};function vo(e,t,n){this.props=e,this.context=t,this.refs=Lw,this.updater=n||Nw}vo.prototype.isReactComponent={};vo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iw(){}Iw.prototype=vo.prototype;function L0(e,t,n){this.props=e,this.context=t,this.refs=Lw,this.updater=n||Nw}var I0=L0.prototype=new Iw;I0.constructor=L0;Aw(I0,vo.prototype);I0.isPureReactComponent=!0;var yy=Array.isArray,$w=Object.prototype.hasOwnProperty,$0={current:null},Dw={key:!0,ref:!0,__self:!0,__source:!0};function Bw(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)$w.call(t,r)&&!Dw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:el,type:e,key:s,ref:o,props:i,_owner:$0.current}}function Qk(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function D0(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function Jk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vy=/\/+/g;function gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jk(""+e.key):t.toString(36)}function dc(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case el:case Fk:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+gf(o,0):r,yy(i)?(n="",e!=null&&(n=e.replace(vy,"$&/")+"/"),dc(i,t,n,"",function(u){return u})):i!=null&&(D0(i)&&(i=Qk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vy,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",yy(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+gf(s,l);o+=dc(s,t,n,c,i)}else if(c=Xk(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+gf(s,l++),o+=dc(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(e,t,n){if(e==null)return e;var r=[],i=0;return dc(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ej(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var It={current:null},fc={transition:null},tj={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:fc,ReactCurrentOwner:$0};me.Children={map:Pl,forEach:function(e,t,n){Pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pl(e,function(){t++}),t},toArray:function(e){return Pl(e,function(t){return t})||[]},only:function(e){if(!D0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=vo;me.Fragment=Vk;me.Profiler=Wk;me.PureComponent=L0;me.StrictMode=Hk;me.Suspense=Kk;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tj;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Aw({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)$w.call(t,c)&&!Dw.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:el,type:e.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(e){return e={$$typeof:qk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uk,_context:e},e.Consumer=e};me.createElement=Bw;me.createFactory=function(e){var t=Bw.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:Gk,render:e}};me.isValidElement=D0;me.lazy=function(e){return{$$typeof:Yk,_payload:{_status:-1,_result:e},_init:ej}};me.memo=function(e,t){return{$$typeof:Zk,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=fc.transition;fc.transition={};try{e()}finally{fc.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return It.current.useCallback(e,t)};me.useContext=function(e){return It.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return It.current.useDeferredValue(e)};me.useEffect=function(e,t){return It.current.useEffect(e,t)};me.useId=function(){return It.current.useId()};me.useImperativeHandle=function(e,t,n){return It.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return It.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return It.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return It.current.useMemo(e,t)};me.useReducer=function(e,t,n){return It.current.useReducer(e,t,n)};me.useRef=function(e){return It.current.useRef(e)};me.useState=function(e){return It.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return It.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return It.current.useTransition()};me.version="18.2.0";zw.exports=me;var w=zw.exports;const I=Bu(w),Oh=Bk({__proto__:null,default:I},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nj=w,rj=Symbol.for("react.element"),ij=Symbol.for("react.fragment"),sj=Object.prototype.hasOwnProperty,oj=nj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aj={key:!0,ref:!0,__self:!0,__source:!0};function Fw(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)sj.call(t,r)&&!aj.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rj,type:e,key:s,ref:o,props:i,_owner:oj.current}}Fu.Fragment=ij;Fu.jsx=Fw;Fu.jsxs=Fw;Ow.exports=Fu;var a=Ow.exports,zh={},Vw={exports:{}},fn={},Hw={exports:{}},Ww={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,$){var V=L.length;L.push($);e:for(;0<V;){var B=V-1>>>1,Q=L[B];if(0<i(Q,$))L[B]=$,L[V]=Q,V=B;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],V=L.pop();if(V!==$){L[0]=V;e:for(var B=0,Q=L.length,xe=Q>>>1;B<xe;){var de=2*(B+1)-1,pe=L[de],ge=de+1,we=L[ge];if(0>i(pe,V))ge<Q&&0>i(we,pe)?(L[B]=we,L[ge]=V,B=ge):(L[B]=pe,L[de]=V,B=de);else if(ge<Q&&0>i(we,V))L[B]=we,L[ge]=V,B=ge;else break e}}return $}function i(L,$){var V=L.sortIndex-$.sortIndex;return V!==0?V:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,h=3,g=!1,m=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=L)r(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function C(L){if(y=!1,v(L),!m)if(n(c)!==null)m=!0,A(b);else{var $=n(u);$!==null&&D(C,$.startTime-L)}}function b(L,$){m=!1,y&&(y=!1,x(S),S=-1),g=!0;var V=h;try{for(v($),f=n(c);f!==null&&(!(f.expirationTime>$)||L&&!T());){var B=f.callback;if(typeof B=="function"){f.callback=null,h=f.priorityLevel;var Q=B(f.expirationTime<=$);$=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(c)&&r(c),v($)}else r(c);f=n(c)}if(f!==null)var xe=!0;else{var de=n(u);de!==null&&D(C,de.startTime-$),xe=!1}return xe}finally{f=null,h=V,g=!1}}var E=!1,j=null,S=-1,_=5,M=-1;function T(){return!(e.unstable_now()-M<_)}function R(){if(j!==null){var L=e.unstable_now();M=L;var $=!0;try{$=j(!0,L)}finally{$?O():(E=!1,j=null)}}else E=!1}var O;if(typeof p=="function")O=function(){p(R)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,N=k.port2;k.port1.onmessage=R,O=function(){N.postMessage(null)}}else O=function(){P(R,0)};function A(L){j=L,E||(E=!0,O())}function D(L,$){S=P(function(){L(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){m||g||(m=!0,A(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var V=h;h=$;try{return L()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=h;h=L;try{return $()}finally{h=V}},e.unstable_scheduleCallback=function(L,$,V){var B=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?B+V:B):V=B,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,L={id:d++,callback:$,priorityLevel:L,startTime:V,expirationTime:Q,sortIndex:-1},V>B?(L.sortIndex=V,t(u,L),n(c)===null&&L===n(u)&&(y?(x(S),S=-1):y=!0,D(C,V-B))):(L.sortIndex=Q,t(c,L),m||g||(m=!0,A(b))),L},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(L){var $=h;return function(){var V=h;h=$;try{return L.apply(this,arguments)}finally{h=V}}}})(Ww);Hw.exports=Ww;var lj=Hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uw=w,cn=lj;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qw=new Set,ja={};function is(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(ja[e]=t,e=0;e<t.length;e++)qw.add(t[e])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=Object.prototype.hasOwnProperty,cj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xy={},wy={};function uj(e){return Nh.call(wy,e)?!0:Nh.call(xy,e)?!1:cj.test(e)?wy[e]=!0:(xy[e]=!0,!1)}function dj(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fj(e,t,n,r){if(t===null||typeof t>"u"||dj(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var B0=/[\-:]([a-z])/g;function F0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(B0,F0);xt[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(B0,F0);xt[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(B0,F0);xt[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function V0(e,t,n,r){var i=xt.hasOwnProperty(t)?xt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fj(t,n,i,r)&&(n=null),r||i===null?uj(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nr=Uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),js=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),H0=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Kw=Symbol.for("react.context"),W0=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),U0=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Zw=Symbol.for("react.offscreen"),by=Symbol.iterator;function Ro(e){return e===null||typeof e!="object"?null:(e=by&&e[by]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,yf;function qo(e){if(yf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yf=t&&t[1]||""}return`
`+yf+e}var vf=!1;function xf(e,t){if(!e||vf)return"";vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{vf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qo(e):""}function hj(e){switch(e.tag){case 5:return qo(e.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return e=xf(e.type,!1),e;case 11:return e=xf(e.type.render,!1),e;case 1:return e=xf(e.type,!0),e;default:return""}}function $h(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ps:return"Fragment";case js:return"Portal";case Ah:return"Profiler";case H0:return"StrictMode";case Lh:return"Suspense";case Ih:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kw:return(e.displayName||"Context")+".Consumer";case Gw:return(e._context.displayName||"Context")+".Provider";case W0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U0:return t=e.displayName||null,t!==null?t:$h(e.type)||"Memo";case Gr:t=e._payload,e=e._init;try{return $h(e(t))}catch{}}return null}function pj(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(t);case 8:return t===H0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mj(e){var t=Yw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rl(e){e._valueTracker||(e._valueTracker=mj(e))}function Xw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dh(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qw(e,t){t=t.checked,t!=null&&V0(e,"checked",t,!1)}function Bh(e,t){Qw(e,t);var n=pi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fh(e,t.type,pi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fh(e,t,n){(t!=="number"||Bc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Ws(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ky(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Go(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pi(n)}}function Jw(e,t){var n=pi(t.value),r=pi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ml,tb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ml.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gj=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){gj.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oa[t]=oa[e]})});function nb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oa.hasOwnProperty(e)&&oa[e]?(""+t).trim():t+"px"}function rb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yj=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(e,t){if(t){if(yj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Uh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function q0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gh=null,Us=null,qs=null;function Py(e){if(e=rl(e)){if(typeof Gh!="function")throw Error(F(280));var t=e.stateNode;t&&(t=qu(t),Gh(e.stateNode,e.type,t))}}function ib(e){Us?qs?qs.push(e):qs=[e]:Us=e}function sb(){if(Us){var e=Us,t=qs;if(qs=Us=null,Py(e),t)for(e=0;e<t.length;e++)Py(t[e])}}function ob(e,t){return e(t)}function ab(){}var wf=!1;function lb(e,t,n){if(wf)return e(t,n);wf=!0;try{return ob(e,t,n)}finally{wf=!1,(Us!==null||qs!==null)&&(ab(),sb())}}function Ea(e,t){var n=e.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Kh=!1;if(Tr)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Kh=!1}function vj(e,t,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var aa=!1,Fc=null,Vc=!1,Zh=null,xj={onError:function(e){aa=!0,Fc=e}};function wj(e,t,n,r,i,s,o,l,c){aa=!1,Fc=null,vj.apply(xj,arguments)}function bj(e,t,n,r,i,s,o,l,c){if(wj.apply(this,arguments),aa){if(aa){var u=Fc;aa=!1,Fc=null}else throw Error(F(198));Vc||(Vc=!0,Zh=u)}}function ss(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ey(e){if(ss(e)!==e)throw Error(F(188))}function Sj(e){var t=e.alternate;if(!t){if(t=ss(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ey(i),e;if(s===r)return Ey(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function ub(e){return e=Sj(e),e!==null?db(e):null}function db(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=db(e);if(t!==null)return t;e=e.sibling}return null}var fb=cn.unstable_scheduleCallback,Ry=cn.unstable_cancelCallback,Cj=cn.unstable_shouldYield,kj=cn.unstable_requestPaint,Ye=cn.unstable_now,jj=cn.unstable_getCurrentPriorityLevel,G0=cn.unstable_ImmediatePriority,hb=cn.unstable_UserBlockingPriority,Hc=cn.unstable_NormalPriority,Pj=cn.unstable_LowPriority,pb=cn.unstable_IdlePriority,Vu=null,ir=null;function Ej(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Vu,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Tj,Rj=Math.log,Mj=Math.LN2;function Tj(e){return e>>>=0,e===0?32:31-(Rj(e)/Mj|0)|0}var Tl=64,_l=4194304;function Ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ko(l):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$n(t),i=1<<n,r|=e[n],t&=~i;return r}function _j(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oj(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-$n(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=_j(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Yh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mb(){var e=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),e}function bf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$n(t),e[t]=n}function zj(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function K0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$n(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function gb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yb,Z0,vb,xb,wb,Xh=!1,Ol=[],ti=null,ni=null,ri=null,Ra=new Map,Ma=new Map,Yr=[],Nj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function My(e,t){switch(e){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function To(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=rl(t),t!==null&&Z0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Aj(e,t,n,r,i){switch(t){case"focusin":return ti=To(ti,e,t,n,r,i),!0;case"dragenter":return ni=To(ni,e,t,n,r,i),!0;case"mouseover":return ri=To(ri,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ra.set(s,To(Ra.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,To(Ma.get(s)||null,e,t,n,r,i)),!0}return!1}function bb(e){var t=Ii(e.target);if(t!==null){var n=ss(t);if(n!==null){if(t=n.tag,t===13){if(t=cb(n),t!==null){e.blockedOn=t,wb(e.priority,function(){vb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return t=rl(n),t!==null&&Z0(t),e.blockedOn=n,!1;t.shift()}return!0}function Ty(e,t,n){hc(e)&&n.delete(t)}function Lj(){Xh=!1,ti!==null&&hc(ti)&&(ti=null),ni!==null&&hc(ni)&&(ni=null),ri!==null&&hc(ri)&&(ri=null),Ra.forEach(Ty),Ma.forEach(Ty)}function _o(e,t){e.blockedOn===t&&(e.blockedOn=null,Xh||(Xh=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Lj)))}function Ta(e){function t(i){return _o(i,e)}if(0<Ol.length){_o(Ol[0],e);for(var n=1;n<Ol.length;n++){var r=Ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ti!==null&&_o(ti,e),ni!==null&&_o(ni,e),ri!==null&&_o(ri,e),Ra.forEach(t),Ma.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)bb(n),n.blockedOn===null&&Yr.shift()}var Gs=Nr.ReactCurrentBatchConfig,Uc=!0;function Ij(e,t,n,r){var i=Ee,s=Gs.transition;Gs.transition=null;try{Ee=1,Y0(e,t,n,r)}finally{Ee=i,Gs.transition=s}}function $j(e,t,n,r){var i=Ee,s=Gs.transition;Gs.transition=null;try{Ee=4,Y0(e,t,n,r)}finally{Ee=i,Gs.transition=s}}function Y0(e,t,n,r){if(Uc){var i=Qh(e,t,n,r);if(i===null)_f(e,t,r,qc,n),My(e,r);else if(Aj(i,e,t,n,r))r.stopPropagation();else if(My(e,r),t&4&&-1<Nj.indexOf(e)){for(;i!==null;){var s=rl(i);if(s!==null&&yb(s),s=Qh(e,t,n,r),s===null&&_f(e,t,r,qc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _f(e,t,r,null,n)}}var qc=null;function Qh(e,t,n,r){if(qc=null,e=q0(r),e=Ii(e),e!==null)if(t=ss(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qc=e,null}function Sb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jj()){case G0:return 1;case hb:return 4;case Hc:case Pj:return 16;case pb:return 536870912;default:return 16}default:return 16}}var Qr=null,X0=null,pc=null;function Cb(){if(pc)return pc;var e,t=X0,n=t.length,r,i="value"in Qr?Qr.value:Qr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return pc=i.slice(e,1<r?1-r:void 0)}function mc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function _y(){return!1}function hn(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:_y,this.isPropagationStopped=_y,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Q0=hn(xo),nl=He({},xo,{view:0,detail:0}),Dj=hn(nl),Sf,Cf,Oo,Hu=He({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:J0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Sf=e.screenX-Oo.screenX,Cf=e.screenY-Oo.screenY):Cf=Sf=0,Oo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:Cf}}),Oy=hn(Hu),Bj=He({},Hu,{dataTransfer:0}),Fj=hn(Bj),Vj=He({},nl,{relatedTarget:0}),kf=hn(Vj),Hj=He({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),Wj=hn(Hj),Uj=He({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qj=hn(Uj),Gj=He({},xo,{data:0}),zy=hn(Gj),Kj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yj[e])?!!t[e]:!1}function J0(){return Xj}var Qj=He({},nl,{key:function(e){if(e.key){var t=Kj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:J0,charCode:function(e){return e.type==="keypress"?mc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jj=hn(Qj),e8=He({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ny=hn(e8),t8=He({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:J0}),n8=hn(t8),r8=He({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),i8=hn(r8),s8=He({},Hu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o8=hn(s8),a8=[9,13,27,32],em=Tr&&"CompositionEvent"in window,la=null;Tr&&"documentMode"in document&&(la=document.documentMode);var l8=Tr&&"TextEvent"in window&&!la,kb=Tr&&(!em||la&&8<la&&11>=la),Ay=String.fromCharCode(32),Ly=!1;function jb(e,t){switch(e){case"keyup":return a8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Es=!1;function c8(e,t){switch(e){case"compositionend":return Pb(t);case"keypress":return t.which!==32?null:(Ly=!0,Ay);case"textInput":return e=t.data,e===Ay&&Ly?null:e;default:return null}}function u8(e,t){if(Es)return e==="compositionend"||!em&&jb(e,t)?(e=Cb(),pc=X0=Qr=null,Es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kb&&t.locale!=="ko"?null:t.data;default:return null}}var d8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d8[e.type]:t==="textarea"}function Eb(e,t,n,r){ib(r),t=Gc(t,"onChange"),0<t.length&&(n=new Q0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ca=null,_a=null;function f8(e){$b(e,0)}function Wu(e){var t=Ts(e);if(Xw(t))return e}function h8(e,t){if(e==="change")return t}var Rb=!1;if(Tr){var jf;if(Tr){var Pf="oninput"in document;if(!Pf){var $y=document.createElement("div");$y.setAttribute("oninput","return;"),Pf=typeof $y.oninput=="function"}jf=Pf}else jf=!1;Rb=jf&&(!document.documentMode||9<document.documentMode)}function Dy(){ca&&(ca.detachEvent("onpropertychange",Mb),_a=ca=null)}function Mb(e){if(e.propertyName==="value"&&Wu(_a)){var t=[];Eb(t,_a,e,q0(e)),lb(f8,t)}}function p8(e,t,n){e==="focusin"?(Dy(),ca=t,_a=n,ca.attachEvent("onpropertychange",Mb)):e==="focusout"&&Dy()}function m8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wu(_a)}function g8(e,t){if(e==="click")return Wu(t)}function y8(e,t){if(e==="input"||e==="change")return Wu(t)}function v8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:v8;function Oa(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nh.call(t,i)||!Fn(e[i],t[i]))return!1}return!0}function By(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fy(e,t){var n=By(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=By(n)}}function Tb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _b(){for(var e=window,t=Bc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bc(e.document)}return t}function tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function x8(e){var t=_b(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tb(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Fy(n,s);var o=Fy(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w8=Tr&&"documentMode"in document&&11>=document.documentMode,Rs=null,Jh=null,ua=null,ep=!1;function Vy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Rs==null||Rs!==Bc(r)||(r=Rs,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Oa(ua,r)||(ua=r,r=Gc(Jh,"onSelect"),0<r.length&&(t=new Q0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rs)))}function Nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ms={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Ef={},Ob={};Tr&&(Ob=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Uu(e){if(Ef[e])return Ef[e];if(!Ms[e])return e;var t=Ms[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ob)return Ef[e]=t[n];return e}var zb=Uu("animationend"),Nb=Uu("animationiteration"),Ab=Uu("animationstart"),Lb=Uu("transitionend"),Ib=new Map,Hy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(e,t){Ib.set(e,t),is(t,[e])}for(var Rf=0;Rf<Hy.length;Rf++){var Mf=Hy[Rf],b8=Mf.toLowerCase(),S8=Mf[0].toUpperCase()+Mf.slice(1);xi(b8,"on"+S8)}xi(zb,"onAnimationEnd");xi(Nb,"onAnimationIteration");xi(Ab,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(Lb,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Wy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bj(r,t,void 0,e),e.currentTarget=null}function $b(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Wy(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Wy(i,l,u),s=c}}}if(Vc)throw e=Zh,Vc=!1,Zh=null,e}function ze(e,t){var n=t[sp];n===void 0&&(n=t[sp]=new Set);var r=e+"__bubble";n.has(r)||(Db(t,e,2,!1),n.add(r))}function Tf(e,t,n){var r=0;t&&(r|=4),Db(n,e,r,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function za(e){if(!e[Al]){e[Al]=!0,qw.forEach(function(n){n!=="selectionchange"&&(C8.has(n)||Tf(n,!1,e),Tf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,Tf("selectionchange",!1,t))}}function Db(e,t,n,r){switch(Sb(t)){case 1:var i=Ij;break;case 4:i=$j;break;default:i=Y0}n=i.bind(null,t,n,e),i=void 0,!Kh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _f(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ii(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lb(function(){var u=s,d=q0(n),f=[];e:{var h=Ib.get(e);if(h!==void 0){var g=Q0,m=e;switch(e){case"keypress":if(mc(n)===0)break e;case"keydown":case"keyup":g=Jj;break;case"focusin":m="focus",g=kf;break;case"focusout":m="blur",g=kf;break;case"beforeblur":case"afterblur":g=kf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=n8;break;case zb:case Nb:case Ab:g=Wj;break;case Lb:g=i8;break;case"scroll":g=Dj;break;case"wheel":g=o8;break;case"copy":case"cut":case"paste":g=qj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ny}var y=(t&4)!==0,P=!y&&e==="scroll",x=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,v;p!==null;){v=p;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,x!==null&&(C=Ea(p,x),C!=null&&y.push(Na(p,C,v)))),P)break;p=p.return}0<y.length&&(h=new g(h,m,null,n,d),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==qh&&(m=n.relatedTarget||n.fromElement)&&(Ii(m)||m[_r]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?Ii(m):null,m!==null&&(P=ss(m),m!==P||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(y=Oy,C="onMouseLeave",x="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ny,C="onPointerLeave",x="onPointerEnter",p="pointer"),P=g==null?h:Ts(g),v=m==null?h:Ts(m),h=new y(C,p+"leave",g,n,d),h.target=P,h.relatedTarget=v,C=null,Ii(d)===u&&(y=new y(x,p+"enter",m,n,d),y.target=v,y.relatedTarget=P,C=y),P=C,g&&m)t:{for(y=g,x=m,p=0,v=y;v;v=hs(v))p++;for(v=0,C=x;C;C=hs(C))v++;for(;0<p-v;)y=hs(y),p--;for(;0<v-p;)x=hs(x),v--;for(;p--;){if(y===x||x!==null&&y===x.alternate)break t;y=hs(y),x=hs(x)}y=null}else y=null;g!==null&&Uy(f,h,g,y,!1),m!==null&&P!==null&&Uy(f,P,m,y,!0)}}e:{if(h=u?Ts(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=h8;else if(Iy(h))if(Rb)b=y8;else{b=m8;var E=p8}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=g8);if(b&&(b=b(e,u))){Eb(f,b,n,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Fh(h,"number",h.value)}switch(E=u?Ts(u):window,e){case"focusin":(Iy(E)||E.contentEditable==="true")&&(Rs=E,Jh=u,ua=null);break;case"focusout":ua=Jh=Rs=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,Vy(f,n,d);break;case"selectionchange":if(w8)break;case"keydown":case"keyup":Vy(f,n,d)}var j;if(em)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Es?jb(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(kb&&n.locale!=="ko"&&(Es||S!=="onCompositionStart"?S==="onCompositionEnd"&&Es&&(j=Cb()):(Qr=d,X0="value"in Qr?Qr.value:Qr.textContent,Es=!0)),E=Gc(u,S),0<E.length&&(S=new zy(S,e,null,n,d),f.push({event:S,listeners:E}),j?S.data=j:(j=Pb(n),j!==null&&(S.data=j)))),(j=l8?c8(e,n):u8(e,n))&&(u=Gc(u,"onBeforeInput"),0<u.length&&(d=new zy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=j))}$b(f,t)})}function Na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ea(e,n),s!=null&&r.unshift(Na(e,s,i)),s=Ea(e,t),s!=null&&r.push(Na(e,s,i))),e=e.return}return r}function hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uy(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ea(n,s),c!=null&&o.unshift(Na(n,c,l))):i||(c=Ea(n,s),c!=null&&o.push(Na(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var k8=/\r\n?/g,j8=/\u0000|\uFFFD/g;function qy(e){return(typeof e=="string"?e:""+e).replace(k8,`
`).replace(j8,"")}function Ll(e,t,n){if(t=qy(t),qy(e)!==t&&n)throw Error(F(425))}function Kc(){}var tp=null,np=null;function rp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,P8=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,E8=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(e){return Gy.resolve(null).then(e).catch(R8)}:ip;function R8(e){setTimeout(function(){throw e})}function Of(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ta(t)}function ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ky(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+wo,Aa="__reactProps$"+wo,_r="__reactContainer$"+wo,sp="__reactEvents$"+wo,M8="__reactListeners$"+wo,T8="__reactHandles$"+wo;function Ii(e){var t=e[Jn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_r]||n[Jn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ky(e);e!==null;){if(n=e[Jn])return n;e=Ky(e)}return t}e=n,n=e.parentNode}return null}function rl(e){return e=e[Jn]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ts(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function qu(e){return e[Aa]||null}var op=[],_s=-1;function wi(e){return{current:e}}function Ae(e){0>_s||(e.current=op[_s],op[_s]=null,_s--)}function Oe(e,t){_s++,op[_s]=e.current,e.current=t}var mi={},Tt=wi(mi),Ut=wi(!1),Zi=mi;function to(e,t){var n=e.type.contextTypes;if(!n)return mi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qt(e){return e=e.childContextTypes,e!=null}function Zc(){Ae(Ut),Ae(Tt)}function Zy(e,t,n){if(Tt.current!==mi)throw Error(F(168));Oe(Tt,t),Oe(Ut,n)}function Bb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,pj(e)||"Unknown",i));return He({},n,r)}function Yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mi,Zi=Tt.current,Oe(Tt,e),Oe(Ut,Ut.current),!0}function Yy(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Bb(e,t,Zi),r.__reactInternalMemoizedMergedChildContext=e,Ae(Ut),Ae(Tt),Oe(Tt,e)):Ae(Ut),Oe(Ut,n)}var xr=null,Gu=!1,zf=!1;function Fb(e){xr===null?xr=[e]:xr.push(e)}function _8(e){Gu=!0,Fb(e)}function bi(){if(!zf&&xr!==null){zf=!0;var e=0,t=Ee;try{var n=xr;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xr=null,Gu=!1}catch(i){throw xr!==null&&(xr=xr.slice(e+1)),fb(G0,bi),i}finally{Ee=t,zf=!1}}return null}var Os=[],zs=0,Xc=null,Qc=0,wn=[],bn=0,Yi=null,Sr=1,Cr="";function Oi(e,t){Os[zs++]=Qc,Os[zs++]=Xc,Xc=e,Qc=t}function Vb(e,t,n){wn[bn++]=Sr,wn[bn++]=Cr,wn[bn++]=Yi,Yi=e;var r=Sr;e=Cr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sr=1<<32-$n(t)+i|n<<i|r,Cr=s+e}else Sr=1<<s|n<<i|r,Cr=e}function nm(e){e.return!==null&&(Oi(e,1),Vb(e,1,0))}function rm(e){for(;e===Xc;)Xc=Os[--zs],Os[zs]=null,Qc=Os[--zs],Os[zs]=null;for(;e===Yi;)Yi=wn[--bn],wn[bn]=null,Cr=wn[--bn],wn[bn]=null,Sr=wn[--bn],wn[bn]=null}var sn=null,rn=null,Ie=!1,An=null;function Hb(e,t){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,rn=ii(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,rn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yi!==null?{id:Sr,overflow:Cr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,rn=null,!0):!1;default:return!1}}function ap(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lp(e){if(Ie){var t=rn;if(t){var n=t;if(!Xy(e,t)){if(ap(e))throw Error(F(418));t=ii(n.nextSibling);var r=sn;t&&Xy(e,t)?Hb(r,n):(e.flags=e.flags&-4097|2,Ie=!1,sn=e)}}else{if(ap(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ie=!1,sn=e}}}function Qy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function Il(e){if(e!==sn)return!1;if(!Ie)return Qy(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rp(e.type,e.memoizedProps)),t&&(t=rn)){if(ap(e))throw Wb(),Error(F(418));for(;t;)Hb(e,t),t=ii(t.nextSibling)}if(Qy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rn=ii(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rn=null}}else rn=sn?ii(e.stateNode.nextSibling):null;return!0}function Wb(){for(var e=rn;e;)e=ii(e.nextSibling)}function no(){rn=sn=null,Ie=!1}function im(e){An===null?An=[e]:An.push(e)}var O8=Nr.ReactCurrentBatchConfig;function On(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Jc=wi(null),eu=null,Ns=null,sm=null;function om(){sm=Ns=eu=null}function am(e){var t=Jc.current;Ae(Jc),e._currentValue=t}function cp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ks(e,t){eu=e,sm=Ns=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Wt=!0),e.firstContext=null)}function jn(e){var t=e._currentValue;if(sm!==e)if(e={context:e,memoizedValue:t,next:null},Ns===null){if(eu===null)throw Error(F(308));Ns=e,eu.dependencies={lanes:0,firstContext:e}}else Ns=Ns.next=e;return t}var $i=null;function lm(e){$i===null?$i=[e]:$i.push(e)}function Ub(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lm(t)):(n.next=i.next,i.next=n),t.interleaved=n,Or(e,r)}function Or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kr=!1;function cm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function si(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Or(e,n)}return i=r.interleaved,i===null?(t.next=t,lm(r)):(t.next=i.next,i.next=t),r.interleaved=t,Or(e,n)}function gc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,K0(e,n)}}function Jy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tu(e,t,n,r){var i=e.updateQueue;Kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(h=t,g=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(g,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(g,f,h):m,h==null)break e;f=He({},f,h);break e;case 2:Kr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,c=f):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Qi|=o,e.lanes=o,e.memoizedState=f}}function ev(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Gb=new Uw.Component().refs;function up(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ku={isMounted:function(e){return(e=e._reactInternals)?ss(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Lt(),i=ai(e),s=jr(r,i);s.payload=t,n!=null&&(s.callback=n),t=si(e,s,i),t!==null&&(Dn(t,e,i,r),gc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Lt(),i=ai(e),s=jr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=si(e,s,i),t!==null&&(Dn(t,e,i,r),gc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Lt(),r=ai(e),i=jr(n,r);i.tag=2,t!=null&&(i.callback=t),t=si(e,i,r),t!==null&&(Dn(t,e,r,n),gc(t,e,r))}};function tv(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Oa(n,r)||!Oa(i,s):!0}function Kb(e,t,n){var r=!1,i=mi,s=t.contextType;return typeof s=="object"&&s!==null?s=jn(s):(i=qt(t)?Zi:Tt.current,r=t.contextTypes,s=(r=r!=null)?to(e,i):mi),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ku,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function nv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ku.enqueueReplaceState(t,t.state,null)}function dp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Gb,cm(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=jn(s):(s=qt(t)?Zi:Tt.current,i.context=to(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(up(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ku.enqueueReplaceState(i,i.state,null),tu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Gb&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function $l(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rv(e){var t=e._init;return t(e._payload)}function Zb(e){function t(x,p){if(e){var v=x.deletions;v===null?(x.deletions=[p],x.flags|=16):v.push(p)}}function n(x,p){if(!e)return null;for(;p!==null;)t(x,p),p=p.sibling;return null}function r(x,p){for(x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function i(x,p){return x=li(x,p),x.index=0,x.sibling=null,x}function s(x,p,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<p?(x.flags|=2,p):v):(x.flags|=2,p)):(x.flags|=1048576,p)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,p,v,C){return p===null||p.tag!==6?(p=Bf(v,x.mode,C),p.return=x,p):(p=i(p,v),p.return=x,p)}function c(x,p,v,C){var b=v.type;return b===Ps?d(x,p,v.props.children,C,v.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gr&&rv(b)===p.type)?(C=i(p,v.props),C.ref=zo(x,p,v),C.return=x,C):(C=Sc(v.type,v.key,v.props,null,x.mode,C),C.ref=zo(x,p,v),C.return=x,C)}function u(x,p,v,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ff(v,x.mode,C),p.return=x,p):(p=i(p,v.children||[]),p.return=x,p)}function d(x,p,v,C,b){return p===null||p.tag!==7?(p=qi(v,x.mode,C,b),p.return=x,p):(p=i(p,v),p.return=x,p)}function f(x,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bf(""+p,x.mode,v),p.return=x,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case El:return v=Sc(p.type,p.key,p.props,null,x.mode,v),v.ref=zo(x,null,p),v.return=x,v;case js:return p=Ff(p,x.mode,v),p.return=x,p;case Gr:var C=p._init;return f(x,C(p._payload),v)}if(Go(p)||Ro(p))return p=qi(p,x.mode,v,null),p.return=x,p;$l(x,p)}return null}function h(x,p,v,C){var b=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:l(x,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case El:return v.key===b?c(x,p,v,C):null;case js:return v.key===b?u(x,p,v,C):null;case Gr:return b=v._init,h(x,p,b(v._payload),C)}if(Go(v)||Ro(v))return b!==null?null:d(x,p,v,C,null);$l(x,v)}return null}function g(x,p,v,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(v)||null,l(p,x,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case El:return x=x.get(C.key===null?v:C.key)||null,c(p,x,C,b);case js:return x=x.get(C.key===null?v:C.key)||null,u(p,x,C,b);case Gr:var E=C._init;return g(x,p,v,E(C._payload),b)}if(Go(C)||Ro(C))return x=x.get(v)||null,d(p,x,C,b,null);$l(p,C)}return null}function m(x,p,v,C){for(var b=null,E=null,j=p,S=p=0,_=null;j!==null&&S<v.length;S++){j.index>S?(_=j,j=null):_=j.sibling;var M=h(x,j,v[S],C);if(M===null){j===null&&(j=_);break}e&&j&&M.alternate===null&&t(x,j),p=s(M,p,S),E===null?b=M:E.sibling=M,E=M,j=_}if(S===v.length)return n(x,j),Ie&&Oi(x,S),b;if(j===null){for(;S<v.length;S++)j=f(x,v[S],C),j!==null&&(p=s(j,p,S),E===null?b=j:E.sibling=j,E=j);return Ie&&Oi(x,S),b}for(j=r(x,j);S<v.length;S++)_=g(j,x,S,v[S],C),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?S:_.key),p=s(_,p,S),E===null?b=_:E.sibling=_,E=_);return e&&j.forEach(function(T){return t(x,T)}),Ie&&Oi(x,S),b}function y(x,p,v,C){var b=Ro(v);if(typeof b!="function")throw Error(F(150));if(v=b.call(v),v==null)throw Error(F(151));for(var E=b=null,j=p,S=p=0,_=null,M=v.next();j!==null&&!M.done;S++,M=v.next()){j.index>S?(_=j,j=null):_=j.sibling;var T=h(x,j,M.value,C);if(T===null){j===null&&(j=_);break}e&&j&&T.alternate===null&&t(x,j),p=s(T,p,S),E===null?b=T:E.sibling=T,E=T,j=_}if(M.done)return n(x,j),Ie&&Oi(x,S),b;if(j===null){for(;!M.done;S++,M=v.next())M=f(x,M.value,C),M!==null&&(p=s(M,p,S),E===null?b=M:E.sibling=M,E=M);return Ie&&Oi(x,S),b}for(j=r(x,j);!M.done;S++,M=v.next())M=g(j,x,S,M.value,C),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?S:M.key),p=s(M,p,S),E===null?b=M:E.sibling=M,E=M);return e&&j.forEach(function(R){return t(x,R)}),Ie&&Oi(x,S),b}function P(x,p,v,C){if(typeof v=="object"&&v!==null&&v.type===Ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case El:e:{for(var b=v.key,E=p;E!==null;){if(E.key===b){if(b=v.type,b===Ps){if(E.tag===7){n(x,E.sibling),p=i(E,v.props.children),p.return=x,x=p;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gr&&rv(b)===E.type){n(x,E.sibling),p=i(E,v.props),p.ref=zo(x,E,v),p.return=x,x=p;break e}n(x,E);break}else t(x,E);E=E.sibling}v.type===Ps?(p=qi(v.props.children,x.mode,C,v.key),p.return=x,x=p):(C=Sc(v.type,v.key,v.props,null,x.mode,C),C.ref=zo(x,p,v),C.return=x,x=C)}return o(x);case js:e:{for(E=v.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(x,p.sibling),p=i(p,v.children||[]),p.return=x,x=p;break e}else{n(x,p);break}else t(x,p);p=p.sibling}p=Ff(v,x.mode,C),p.return=x,x=p}return o(x);case Gr:return E=v._init,P(x,p,E(v._payload),C)}if(Go(v))return m(x,p,v,C);if(Ro(v))return y(x,p,v,C);$l(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(x,p.sibling),p=i(p,v),p.return=x,x=p):(n(x,p),p=Bf(v,x.mode,C),p.return=x,x=p),o(x)):n(x,p)}return P}var ro=Zb(!0),Yb=Zb(!1),il={},sr=wi(il),La=wi(il),Ia=wi(il);function Di(e){if(e===il)throw Error(F(174));return e}function um(e,t){switch(Oe(Ia,t),Oe(La,e),Oe(sr,il),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hh(t,e)}Ae(sr),Oe(sr,t)}function io(){Ae(sr),Ae(La),Ae(Ia)}function Xb(e){Di(Ia.current);var t=Di(sr.current),n=Hh(t,e.type);t!==n&&(Oe(La,e),Oe(sr,n))}function dm(e){La.current===e&&(Ae(sr),Ae(La))}var Be=wi(0);function nu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nf=[];function fm(){for(var e=0;e<Nf.length;e++)Nf[e]._workInProgressVersionPrimary=null;Nf.length=0}var yc=Nr.ReactCurrentDispatcher,Af=Nr.ReactCurrentBatchConfig,Xi=0,Ve=null,it=null,lt=null,ru=!1,da=!1,$a=0,z8=0;function St(){throw Error(F(321))}function hm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function pm(e,t,n,r,i,s){if(Xi=s,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yc.current=e===null||e.memoizedState===null?I8:$8,e=n(r,i),da){s=0;do{if(da=!1,$a=0,25<=s)throw Error(F(301));s+=1,lt=it=null,t.updateQueue=null,yc.current=D8,e=n(r,i)}while(da)}if(yc.current=iu,t=it!==null&&it.next!==null,Xi=0,lt=it=Ve=null,ru=!1,t)throw Error(F(300));return e}function mm(){var e=$a!==0;return $a=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ve.memoizedState=lt=e:lt=lt.next=e,lt}function Pn(){if(it===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=lt===null?Ve.memoizedState:lt.next;if(t!==null)lt=t,it=e;else{if(e===null)throw Error(F(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},lt===null?Ve.memoizedState=lt=e:lt=lt.next=e}return lt}function Da(e,t){return typeof t=="function"?t(e):t}function Lf(e){var t=Pn(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((Xi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,Ve.lanes|=d,Qi|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Fn(r,t.memoizedState)||(Wt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ve.lanes|=s,Qi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function If(e){var t=Pn(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Fn(s,t.memoizedState)||(Wt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qb(){}function Jb(e,t){var n=Ve,r=Pn(),i=t(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Wt=!0),r=r.queue,gm(n4.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,t4.bind(null,n,r,i,t),void 0,null),ft===null)throw Error(F(349));Xi&30||e4(n,t,i)}return i}function e4(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function t4(e,t,n,r){t.value=n,t.getSnapshot=r,r4(t)&&i4(e)}function n4(e,t,n){return n(function(){r4(t)&&i4(e)})}function r4(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function i4(e){var t=Or(e,1);t!==null&&Dn(t,e,1,-1)}function iv(e){var t=Gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},t.queue=e,e=e.dispatch=L8.bind(null,Ve,e),[t.memoizedState,e]}function Ba(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function s4(){return Pn().memoizedState}function vc(e,t,n,r){var i=Gn();Ve.flags|=e,i.memoizedState=Ba(1|t,n,void 0,r===void 0?null:r)}function Zu(e,t,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&hm(r,o.deps)){i.memoizedState=Ba(t,n,s,r);return}}Ve.flags|=e,i.memoizedState=Ba(1|t,n,s,r)}function sv(e,t){return vc(8390656,8,e,t)}function gm(e,t){return Zu(2048,8,e,t)}function o4(e,t){return Zu(4,2,e,t)}function a4(e,t){return Zu(4,4,e,t)}function l4(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function c4(e,t,n){return n=n!=null?n.concat([e]):null,Zu(4,4,l4.bind(null,t,e),n)}function ym(){}function u4(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function d4(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function f4(e,t,n){return Xi&21?(Fn(n,t)||(n=mb(),Ve.lanes|=n,Qi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=n)}function N8(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=Af.transition;Af.transition={};try{e(!1),t()}finally{Ee=n,Af.transition=r}}function h4(){return Pn().memoizedState}function A8(e,t,n){var r=ai(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},p4(e))m4(t,n);else if(n=Ub(e,t,n,r),n!==null){var i=Lt();Dn(n,e,r,i),g4(n,t,r)}}function L8(e,t,n){var r=ai(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(p4(e))m4(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Fn(l,o)){var c=t.interleaved;c===null?(i.next=i,lm(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ub(e,t,i,r),n!==null&&(i=Lt(),Dn(n,e,r,i),g4(n,t,r))}}function p4(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function m4(e,t){da=ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g4(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,K0(e,n)}}var iu={readContext:jn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},I8={readContext:jn,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:jn,useEffect:sv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vc(4194308,4,l4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vc(4194308,4,e,t)},useInsertionEffect:function(e,t){return vc(4,2,e,t)},useMemo:function(e,t){var n=Gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=A8.bind(null,Ve,e),[r.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:iv,useDebugValue:ym,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=iv(!1),t=e[0];return e=N8.bind(null,e[1]),Gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ve,i=Gn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),ft===null)throw Error(F(349));Xi&30||e4(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,sv(n4.bind(null,r,s,e),[e]),r.flags|=2048,Ba(9,t4.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Gn(),t=ft.identifierPrefix;if(Ie){var n=Cr,r=Sr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=z8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$8={readContext:jn,useCallback:u4,useContext:jn,useEffect:gm,useImperativeHandle:c4,useInsertionEffect:o4,useLayoutEffect:a4,useMemo:d4,useReducer:Lf,useRef:s4,useState:function(){return Lf(Da)},useDebugValue:ym,useDeferredValue:function(e){var t=Pn();return f4(t,it.memoizedState,e)},useTransition:function(){var e=Lf(Da)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:Jb,useId:h4,unstable_isNewReconciler:!1},D8={readContext:jn,useCallback:u4,useContext:jn,useEffect:gm,useImperativeHandle:c4,useInsertionEffect:o4,useLayoutEffect:a4,useMemo:d4,useReducer:If,useRef:s4,useState:function(){return If(Da)},useDebugValue:ym,useDeferredValue:function(e){var t=Pn();return it===null?t.memoizedState=e:f4(t,it.memoizedState,e)},useTransition:function(){var e=If(Da)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:Jb,useId:h4,unstable_isNewReconciler:!1};function so(e,t){try{var n="",r=t;do n+=hj(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function $f(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B8=typeof WeakMap=="function"?WeakMap:Map;function y4(e,t,n){n=jr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ou||(ou=!0,Sp=r),fp(e,t)},n}function v4(e,t,n){n=jr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fp(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fp(e,t),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ov(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B8;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e6.bind(null,e,t,n),t.then(e,e))}function av(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jr(-1,1),t.tag=2,si(n,t,1))),n.lanes|=1),e)}var F8=Nr.ReactCurrentOwner,Wt=!1;function At(e,t,n,r){t.child=e===null?Yb(t,null,n,r):ro(t,e.child,n,r)}function cv(e,t,n,r,i){n=n.render;var s=t.ref;return Ks(t,i),r=pm(e,t,n,r,s,i),n=mm(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zr(e,t,i)):(Ie&&n&&nm(t),t.flags|=1,At(e,t,r,i),t.child)}function uv(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!jm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,x4(e,t,s,r,i)):(e=Sc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&e.ref===t.ref)return zr(e,t,i)}return t.flags|=1,e=li(s,r),e.ref=t.ref,e.return=t,t.child=e}function x4(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Oa(s,r)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Wt=!0);else return t.lanes=e.lanes,zr(e,t,i)}return hp(e,t,n,r,i)}function w4(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Ls,en),en|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(Ls,en),en|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(Ls,en),en|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Oe(Ls,en),en|=r;return At(e,t,i,n),t.child}function b4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hp(e,t,n,r,i){var s=qt(n)?Zi:Tt.current;return s=to(t,s),Ks(t,i),n=pm(e,t,n,r,s,i),r=mm(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zr(e,t,i)):(Ie&&r&&nm(t),t.flags|=1,At(e,t,n,i),t.child)}function dv(e,t,n,r,i){if(qt(n)){var s=!0;Yc(t)}else s=!1;if(Ks(t,i),t.stateNode===null)xc(e,t),Kb(t,n,r),dp(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=qt(n)?Zi:Tt.current,u=to(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&nv(t,o,r,u),Kr=!1;var h=t.memoizedState;o.state=h,tu(t,r,o,i),c=t.memoizedState,l!==r||h!==c||Ut.current||Kr?(typeof d=="function"&&(up(t,n,d,r),c=t.memoizedState),(l=Kr||tv(t,n,l,r,h,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,qb(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:On(t.type,l),o.props=u,f=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=jn(c):(c=qt(n)?Zi:Tt.current,c=to(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==c)&&nv(t,o,r,c),Kr=!1,h=t.memoizedState,o.state=h,tu(t,r,o,i);var m=t.memoizedState;l!==f||h!==m||Ut.current||Kr?(typeof g=="function"&&(up(t,n,g,r),m=t.memoizedState),(u=Kr||tv(t,n,u,r,h,m,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return pp(e,t,n,r,s,i)}function pp(e,t,n,r,i,s){b4(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yy(t,n,!1),zr(e,t,s);r=t.stateNode,F8.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ro(t,e.child,null,s),t.child=ro(t,null,l,s)):At(e,t,l,s),t.memoizedState=r.state,i&&Yy(t,n,!0),t.child}function S4(e){var t=e.stateNode;t.pendingContext?Zy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zy(e,t.context,!1),um(e,t.containerInfo)}function fv(e,t,n,r,i){return no(),im(i),t.flags|=256,At(e,t,n,r),t.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(e){return{baseLanes:e,cachePool:null,transitions:null}}function C4(e,t,n){var r=t.pendingProps,i=Be.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Oe(Be,i&1),e===null)return lp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qu(o,r,0,null),e=qi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=gp(n),t.memoizedState=mp,e):vm(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return V8(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=li(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=li(l,s):(s=qi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=mp,r}return s=e.child,e=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vm(e,t){return t=Qu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dl(e,t,n,r){return r!==null&&im(r),ro(t,e.child,null,n),e=vm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V8(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=$f(Error(F(422))),Dl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Qu({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ro(t,e.child,null,o),t.child.memoizedState=gp(o),t.memoizedState=mp,s);if(!(t.mode&1))return Dl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=$f(s,r,void 0),Dl(e,t,o,r)}if(l=(o&e.childLanes)!==0,Wt||l){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(e,i),Dn(r,e,i,-1))}return km(),r=$f(Error(F(421))),Dl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t6.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,rn=ii(i.nextSibling),sn=t,Ie=!0,An=null,e!==null&&(wn[bn++]=Sr,wn[bn++]=Cr,wn[bn++]=Yi,Sr=e.id,Cr=e.overflow,Yi=t),t=vm(t,r.children),t.flags|=4096,t)}function hv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cp(e.return,t,n)}function Df(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k4(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(At(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hv(e,n,t);else if(e.tag===19)hv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Df(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Df(t,!0,n,null,s);break;case"together":Df(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H8(e,t,n){switch(t.tag){case 3:S4(t),no();break;case 5:Xb(t);break;case 1:qt(t.type)&&Yc(t);break;case 4:um(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Oe(Jc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?C4(e,t,n):(Oe(Be,Be.current&1),e=zr(e,t,n),e!==null?e.sibling:null);Oe(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return k4(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,w4(e,t,n)}return zr(e,t,n)}var j4,yp,P4,E4;j4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yp=function(){};P4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Di(sr.current);var s=null;switch(n){case"input":i=Dh(e,i),r=Dh(e,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Vh(e,i),r=Vh(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kc)}Wh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ze("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};E4=function(e,t,n,r){n!==r&&(t.flags|=4)};function No(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W8(e,t,n){var r=t.pendingProps;switch(rm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return qt(t.type)&&Zc(),Ct(t),null;case 3:return r=t.stateNode,io(),Ae(Ut),Ae(Tt),fm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,An!==null&&(jp(An),An=null))),yp(e,t),Ct(t),null;case 5:dm(t);var i=Di(Ia.current);if(n=t.type,e!==null&&t.stateNode!=null)P4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ct(t),null}if(e=Di(sr.current),Il(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Jn]=t,r[Aa]=s,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(i=0;i<Zo.length;i++)ze(Zo[i],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":Sy(r,s),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ze("invalid",r);break;case"textarea":ky(r,s),ze("invalid",r)}Wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,l,e),i=["children",""+l]):ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",r)}switch(n){case"input":Rl(r),Cy(r,s,!0);break;case"textarea":Rl(r),jy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Jn]=t,e[Aa]=r,j4(e,t,!1,!1),t.stateNode=e;e:{switch(o=Uh(n,r),n){case"dialog":ze("cancel",e),ze("close",e),i=r;break;case"iframe":case"object":case"embed":ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)ze(Zo[i],e);i=r;break;case"source":ze("error",e),i=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=r;break;case"details":ze("toggle",e),i=r;break;case"input":Sy(e,r),i=Dh(e,r),ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),ze("invalid",e);break;case"textarea":ky(e,r),i=Vh(e,r),ze("invalid",e);break;default:i=r}Wh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?rb(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tb(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pa(e,c):typeof c=="number"&&Pa(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ze("scroll",e):c!=null&&V0(e,s,c,o))}switch(n){case"input":Rl(e),Cy(e,r,!1);break;case"textarea":Rl(e),jy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pi(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ws(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ws(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)E4(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Di(Ia.current),Di(sr.current),Il(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jn]=t,(s=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:Ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=t,t.stateNode=r}return Ct(t),null;case 13:if(Ae(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&rn!==null&&t.mode&1&&!(t.flags&128))Wb(),no(),t.flags|=98560,s=!1;else if(s=Il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Jn]=t}else no(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),s=!1}else An!==null&&(jp(An),An=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?st===0&&(st=3):km())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return io(),yp(e,t),e===null&&za(t.stateNode.containerInfo),Ct(t),null;case 10:return am(t.type._context),Ct(t),null;case 17:return qt(t.type)&&Zc(),Ct(t),null;case 19:if(Ae(Be),s=t.memoizedState,s===null)return Ct(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)No(s,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nu(e),o!==null){for(t.flags|=128,No(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ye()>oo&&(t.flags|=128,r=!0,No(s,!1),t.lanes=4194304)}else{if(!r)if(e=nu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return Ct(t),null}else 2*Ye()-s.renderingStartTime>oo&&n!==1073741824&&(t.flags|=128,r=!0,No(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ye(),t.sibling=null,n=Be.current,Oe(Be,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return Cm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?en&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function U8(e,t){switch(rm(t),t.tag){case 1:return qt(t.type)&&Zc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return io(),Ae(Ut),Ae(Tt),fm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dm(t),null;case 13:if(Ae(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Be),null;case 4:return io(),null;case 10:return am(t.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var Bl=!1,Mt=!1,q8=typeof WeakSet=="function"?WeakSet:Set,Z=null;function As(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(e,t,r)}else n.current=null}function vp(e,t,n){try{n()}catch(r){qe(e,t,r)}}var pv=!1;function G8(e,t){if(tp=Uc,e=_b(),tm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(c=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:e,selectionRange:n},Uc=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,P=m.memoizedState,x=t.stateNode,p=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:On(t.type,y),P);x.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){qe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return m=pv,pv=!1,m}function fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&vp(t,n,s)}i=i.next}while(i!==r)}}function Yu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function R4(e){var t=e.alternate;t!==null&&(e.alternate=null,R4(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jn],delete t[Aa],delete t[sp],delete t[M8],delete t[T8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M4(e){return e.tag===5||e.tag===3||e.tag===4}function mv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kc));else if(r!==4&&(e=e.child,e!==null))for(wp(e,t,n),e=e.sibling;e!==null;)wp(e,t,n),e=e.sibling}function bp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bp(e,t,n),e=e.sibling;e!==null;)bp(e,t,n),e=e.sibling}var gt=null,zn=!1;function Br(e,t,n){for(n=n.child;n!==null;)T4(e,t,n),n=n.sibling}function T4(e,t,n){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:Mt||As(n,t);case 6:var r=gt,i=zn;gt=null,Br(e,t,n),gt=r,zn=i,gt!==null&&(zn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(zn?(e=gt,n=n.stateNode,e.nodeType===8?Of(e.parentNode,n):e.nodeType===1&&Of(e,n),Ta(e)):Of(gt,n.stateNode));break;case 4:r=gt,i=zn,gt=n.stateNode.containerInfo,zn=!0,Br(e,t,n),gt=r,zn=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vp(n,t,o),i=i.next}while(i!==r)}Br(e,t,n);break;case 1:if(!Mt&&(As(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){qe(n,t,l)}Br(e,t,n);break;case 21:Br(e,t,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Br(e,t,n),Mt=r):Br(e,t,n);break;default:Br(e,t,n)}}function gv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q8),t.forEach(function(r){var i=n6.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,zn=!1;break e;case 3:gt=l.stateNode.containerInfo,zn=!0;break e;case 4:gt=l.stateNode.containerInfo,zn=!0;break e}l=l.return}if(gt===null)throw Error(F(160));T4(s,o,i),gt=null,zn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_4(t,e),t=t.sibling}function _4(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rn(t,e),Wn(e),r&4){try{fa(3,e,e.return),Yu(3,e)}catch(y){qe(e,e.return,y)}try{fa(5,e,e.return)}catch(y){qe(e,e.return,y)}}break;case 1:Rn(t,e),Wn(e),r&512&&n!==null&&As(n,n.return);break;case 5:if(Rn(t,e),Wn(e),r&512&&n!==null&&As(n,n.return),e.flags&32){var i=e.stateNode;try{Pa(i,"")}catch(y){qe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qw(i,s),Uh(l,o);var u=Uh(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?rb(i,f):d==="dangerouslySetInnerHTML"?tb(i,f):d==="children"?Pa(i,f):V0(i,d,f,u)}switch(l){case"input":Bh(i,s);break;case"textarea":Jw(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ws(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ws(i,!!s.multiple,s.defaultValue,!0):Ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Aa]=s}catch(y){qe(e,e.return,y)}}break;case 6:if(Rn(t,e),Wn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){qe(e,e.return,y)}}break;case 3:if(Rn(t,e),Wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(t.containerInfo)}catch(y){qe(e,e.return,y)}break;case 4:Rn(t,e),Wn(e);break;case 13:Rn(t,e),Wn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Ye())),r&4&&gv(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Mt=(u=Mt)||d,Rn(t,e),Mt=u):Rn(t,e),Wn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(f=Z=d;Z!==null;){switch(h=Z,g=h.child,h.tag){case 0:case 11:case 14:case 15:fa(4,h,h.return);break;case 1:As(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){qe(r,n,y)}}break;case 5:As(h,h.return);break;case 22:if(h.memoizedState!==null){vv(f);continue}}g!==null?(g.return=h,Z=g):vv(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nb("display",o))}catch(y){qe(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){qe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(t,e),Wn(e),r&4&&gv(e);break;case 21:break;default:Rn(t,e),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(M4(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pa(i,""),r.flags&=-33);var s=mv(e);bp(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mv(e);wp(e,l,o);break;default:throw Error(F(161))}}catch(c){qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K8(e,t,n){Z=e,O4(e)}function O4(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bl;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Mt;l=Bl;var u=Mt;if(Bl=o,(Mt=c)&&!u)for(Z=i;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null?xv(i):c!==null?(c.return=o,Z=c):xv(i);for(;s!==null;)Z=s,O4(s),s=s.sibling;Z=i,Bl=l,Mt=u}yv(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Z=s):yv(e)}}function yv(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Mt||Yu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:On(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ev(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ev(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Mt||t.flags&512&&xp(t)}catch(h){qe(t,t.return,h)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function vv(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function xv(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yu(4,t)}catch(c){qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){qe(t,i,c)}}var s=t.return;try{xp(t)}catch(c){qe(t,s,c)}break;case 5:var o=t.return;try{xp(t)}catch(c){qe(t,o,c)}}}catch(c){qe(t,t.return,c)}if(t===e){Z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Z=l;break}Z=t.return}}var Z8=Math.ceil,su=Nr.ReactCurrentDispatcher,xm=Nr.ReactCurrentOwner,kn=Nr.ReactCurrentBatchConfig,ve=0,ft=null,nt=null,vt=0,en=0,Ls=wi(0),st=0,Fa=null,Qi=0,Xu=0,wm=0,ha=null,Ht=null,bm=0,oo=1/0,gr=null,ou=!1,Sp=null,oi=null,Fl=!1,Jr=null,au=0,pa=0,Cp=null,wc=-1,bc=0;function Lt(){return ve&6?Ye():wc!==-1?wc:wc=Ye()}function ai(e){return e.mode&1?ve&2&&vt!==0?vt&-vt:O8.transition!==null?(bc===0&&(bc=mb()),bc):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Sb(e.type)),e):1}function Dn(e,t,n,r){if(50<pa)throw pa=0,Cp=null,Error(F(185));tl(e,n,r),(!(ve&2)||e!==ft)&&(e===ft&&(!(ve&2)&&(Xu|=n),st===4&&Xr(e,vt)),Gt(e,r),n===1&&ve===0&&!(t.mode&1)&&(oo=Ye()+500,Gu&&bi()))}function Gt(e,t){var n=e.callbackNode;Oj(e,t);var r=Wc(e,e===ft?vt:0);if(r===0)n!==null&&Ry(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ry(n),t===1)e.tag===0?_8(wv.bind(null,e)):Fb(wv.bind(null,e)),E8(function(){!(ve&6)&&bi()}),n=null;else{switch(gb(r)){case 1:n=G0;break;case 4:n=hb;break;case 16:n=Hc;break;case 536870912:n=pb;break;default:n=Hc}n=B4(n,z4.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function z4(e,t){if(wc=-1,bc=0,ve&6)throw Error(F(327));var n=e.callbackNode;if(Zs()&&e.callbackNode!==n)return null;var r=Wc(e,e===ft?vt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lu(e,r);else{t=r;var i=ve;ve|=2;var s=A4();(ft!==e||vt!==t)&&(gr=null,oo=Ye()+500,Ui(e,t));do try{Q8();break}catch(l){N4(e,l)}while(1);om(),su.current=s,ve=i,nt!==null?t=0:(ft=null,vt=0,t=st)}if(t!==0){if(t===2&&(i=Yh(e),i!==0&&(r=i,t=kp(e,i))),t===1)throw n=Fa,Ui(e,0),Xr(e,r),Gt(e,Ye()),n;if(t===6)Xr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Y8(i)&&(t=lu(e,r),t===2&&(s=Yh(e),s!==0&&(r=s,t=kp(e,s))),t===1))throw n=Fa,Ui(e,0),Xr(e,r),Gt(e,Ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:zi(e,Ht,gr);break;case 3:if(Xr(e,r),(r&130023424)===r&&(t=bm+500-Ye(),10<t)){if(Wc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ip(zi.bind(null,e,Ht,gr),t);break}zi(e,Ht,gr);break;case 4:if(Xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z8(r/1960))-r,10<r){e.timeoutHandle=ip(zi.bind(null,e,Ht,gr),r);break}zi(e,Ht,gr);break;case 5:zi(e,Ht,gr);break;default:throw Error(F(329))}}}return Gt(e,Ye()),e.callbackNode===n?z4.bind(null,e):null}function kp(e,t){var n=ha;return e.current.memoizedState.isDehydrated&&(Ui(e,t).flags|=256),e=lu(e,t),e!==2&&(t=Ht,Ht=n,t!==null&&jp(t)),e}function jp(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function Y8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xr(e,t){for(t&=~wm,t&=~Xu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$n(t),r=1<<n;e[n]=-1,t&=~r}}function wv(e){if(ve&6)throw Error(F(327));Zs();var t=Wc(e,0);if(!(t&1))return Gt(e,Ye()),null;var n=lu(e,t);if(e.tag!==0&&n===2){var r=Yh(e);r!==0&&(t=r,n=kp(e,r))}if(n===1)throw n=Fa,Ui(e,0),Xr(e,t),Gt(e,Ye()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zi(e,Ht,gr),Gt(e,Ye()),null}function Sm(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(oo=Ye()+500,Gu&&bi())}}function Ji(e){Jr!==null&&Jr.tag===0&&!(ve&6)&&Zs();var t=ve;ve|=1;var n=kn.transition,r=Ee;try{if(kn.transition=null,Ee=1,e)return e()}finally{Ee=r,kn.transition=n,ve=t,!(ve&6)&&bi()}}function Cm(){en=Ls.current,Ae(Ls)}function Ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P8(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:io(),Ae(Ut),Ae(Tt),fm();break;case 5:dm(r);break;case 4:io();break;case 13:Ae(Be);break;case 19:Ae(Be);break;case 10:am(r.type._context);break;case 22:case 23:Cm()}n=n.return}if(ft=e,nt=e=li(e.current,null),vt=en=t,st=0,Fa=null,wm=Xu=Qi=0,Ht=ha=null,$i!==null){for(t=0;t<$i.length;t++)if(n=$i[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$i=null}return e}function N4(e,t){do{var n=nt;try{if(om(),yc.current=iu,ru){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(Xi=0,lt=it=Ve=null,da=!1,$a=0,xm.current=null,n===null||n.return===null){st=1,Fa=t,nt=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=vt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=av(o);if(g!==null){g.flags&=-257,lv(g,o,l,s,t),g.mode&1&&ov(s,u,t),t=g,c=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(c),t.updateQueue=y}else m.add(c);break e}else{if(!(t&1)){ov(s,u,t),km();break e}c=Error(F(426))}}else if(Ie&&l.mode&1){var P=av(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),lv(P,o,l,s,t),im(so(c,l));break e}}s=c=so(c,l),st!==4&&(st=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=y4(s,c,t);Jy(s,x);break e;case 1:l=c;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(oi===null||!oi.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=v4(s,l,t);Jy(s,C);break e}}s=s.return}while(s!==null)}I4(n)}catch(b){t=b,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function A4(){var e=su.current;return su.current=iu,e===null?iu:e}function km(){(st===0||st===3||st===2)&&(st=4),ft===null||!(Qi&268435455)&&!(Xu&268435455)||Xr(ft,vt)}function lu(e,t){var n=ve;ve|=2;var r=A4();(ft!==e||vt!==t)&&(gr=null,Ui(e,t));do try{X8();break}catch(i){N4(e,i)}while(1);if(om(),ve=n,su.current=r,nt!==null)throw Error(F(261));return ft=null,vt=0,st}function X8(){for(;nt!==null;)L4(nt)}function Q8(){for(;nt!==null&&!Cj();)L4(nt)}function L4(e){var t=D4(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?I4(e):nt=t,xm.current=null}function I4(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=U8(n,t),n!==null){n.flags&=32767,nt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,nt=null;return}}else if(n=W8(n,t,en),n!==null){nt=n;return}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);st===0&&(st=5)}function zi(e,t,n){var r=Ee,i=kn.transition;try{kn.transition=null,Ee=1,J8(e,t,n,r)}finally{kn.transition=i,Ee=r}return null}function J8(e,t,n,r){do Zs();while(Jr!==null);if(ve&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(zj(e,s),e===ft&&(nt=ft=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,B4(Hc,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=Ee;Ee=1;var l=ve;ve|=4,xm.current=null,G8(e,n),_4(n,e),x8(np),Uc=!!tp,np=tp=null,e.current=n,K8(n),kj(),ve=l,Ee=o,kn.transition=s}else e.current=n;if(Fl&&(Fl=!1,Jr=e,au=i),s=e.pendingLanes,s===0&&(oi=null),Ej(n.stateNode),Gt(e,Ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,e=Sp,Sp=null,e;return au&1&&e.tag!==0&&Zs(),s=e.pendingLanes,s&1?e===Cp?pa++:(pa=0,Cp=e):pa=0,bi(),null}function Zs(){if(Jr!==null){var e=gb(au),t=kn.transition,n=Ee;try{if(kn.transition=null,Ee=16>e?16:e,Jr===null)var r=!1;else{if(e=Jr,Jr=null,au=0,ve&6)throw Error(F(331));var i=ve;for(ve|=4,Z=e.current;Z!==null;){var s=Z,o=s.child;if(Z.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:fa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Z=f;else for(;Z!==null;){d=Z;var h=d.sibling,g=d.return;if(R4(d),d===u){Z=null;break}if(h!==null){h.return=g,Z=h;break}Z=g}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}Z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Z=o;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Z=x;break e}Z=s.return}}var p=e.current;for(Z=p;Z!==null;){o=Z;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Z=v;else e:for(o=p;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yu(9,l)}}catch(b){qe(l,l.return,b)}if(l===o){Z=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Z=C;break e}Z=l.return}}if(ve=i,bi(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Vu,e)}catch{}r=!0}return r}finally{Ee=n,kn.transition=t}}return!1}function bv(e,t,n){t=so(n,t),t=y4(e,t,1),e=si(e,t,1),t=Lt(),e!==null&&(tl(e,1,t),Gt(e,t))}function qe(e,t,n){if(e.tag===3)bv(e,e,n);else for(;t!==null;){if(t.tag===3){bv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){e=so(n,e),e=v4(t,e,1),t=si(t,e,1),e=Lt(),t!==null&&(tl(t,1,e),Gt(t,e));break}}t=t.return}}function e6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Lt(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(vt&n)===n&&(st===4||st===3&&(vt&130023424)===vt&&500>Ye()-bm?Ui(e,0):wm|=n),Gt(e,t)}function $4(e,t){t===0&&(e.mode&1?(t=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):t=1);var n=Lt();e=Or(e,t),e!==null&&(tl(e,t,n),Gt(e,n))}function t6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$4(e,n)}function n6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),$4(e,n)}var D4;D4=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Wt=!1,H8(e,t,n);Wt=!!(e.flags&131072)}else Wt=!1,Ie&&t.flags&1048576&&Vb(t,Qc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xc(e,t),e=t.pendingProps;var i=to(t,Tt.current);Ks(t,n),i=pm(null,t,r,e,i,n);var s=mm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qt(r)?(s=!0,Yc(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cm(t),i.updater=Ku,t.stateNode=i,i._reactInternals=t,dp(t,r,e,n),t=pp(null,t,r,!0,s,n)):(t.tag=0,Ie&&s&&nm(t),At(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xc(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i6(r),e=On(r,e),i){case 0:t=hp(null,t,r,e,n);break e;case 1:t=dv(null,t,r,e,n);break e;case 11:t=cv(null,t,r,e,n);break e;case 14:t=uv(null,t,r,On(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),hp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),dv(e,t,r,i,n);case 3:e:{if(S4(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,qb(e,t),tu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=so(Error(F(423)),t),t=fv(e,t,r,n,i);break e}else if(r!==i){i=so(Error(F(424)),t),t=fv(e,t,r,n,i);break e}else for(rn=ii(t.stateNode.containerInfo.firstChild),sn=t,Ie=!0,An=null,n=Yb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){t=zr(e,t,n);break e}At(e,t,r,n)}t=t.child}return t;case 5:return Xb(t),e===null&&lp(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,rp(r,i)?o=null:s!==null&&rp(r,s)&&(t.flags|=32),b4(e,t),At(e,t,o,n),t.child;case 6:return e===null&&lp(t),null;case 13:return C4(e,t,n);case 4:return um(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ro(t,null,r,n):At(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),cv(e,t,r,i,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Oe(Jc,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Ut.current){t=zr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=jr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),cp(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cp(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ks(t,n),i=jn(i),r=r(i),t.flags|=1,At(e,t,r,n),t.child;case 14:return r=t.type,i=On(r,t.pendingProps),i=On(r.type,i),uv(e,t,r,i,n);case 15:return x4(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),xc(e,t),t.tag=1,qt(r)?(e=!0,Yc(t)):e=!1,Ks(t,n),Kb(t,r,i),dp(t,r,i,n),pp(null,t,r,!0,e,n);case 19:return k4(e,t,n);case 22:return w4(e,t,n)}throw Error(F(156,t.tag))};function B4(e,t){return fb(e,t)}function r6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,r){return new r6(e,t,n,r)}function jm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i6(e){if(typeof e=="function")return jm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W0)return 11;if(e===U0)return 14}return 2}function li(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sc(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")jm(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ps:return qi(n.children,i,s,t);case H0:o=8,i|=8;break;case Ah:return e=Cn(12,n,t,i|2),e.elementType=Ah,e.lanes=s,e;case Lh:return e=Cn(13,n,t,i),e.elementType=Lh,e.lanes=s,e;case Ih:return e=Cn(19,n,t,i),e.elementType=Ih,e.lanes=s,e;case Zw:return Qu(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gw:o=10;break e;case Kw:o=9;break e;case W0:o=11;break e;case U0:o=14;break e;case Gr:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Cn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function qi(e,t,n,r){return e=Cn(7,e,r,t),e.lanes=n,e}function Qu(e,t,n,r){return e=Cn(22,e,r,t),e.elementType=Zw,e.lanes=n,e.stateNode={isHidden:!1},e}function Bf(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function Ff(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s6(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bf(0),this.expirationTimes=bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pm(e,t,n,r,i,s,o,l,c){return e=new s6(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Cn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(s),e}function o6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function F4(e){if(!e)return mi;e=e._reactInternals;e:{if(ss(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(qt(n))return Bb(e,n,t)}return t}function V4(e,t,n,r,i,s,o,l,c){return e=Pm(n,r,!0,e,i,s,o,l,c),e.context=F4(null),n=e.current,r=Lt(),i=ai(n),s=jr(r,i),s.callback=t??null,si(n,s,i),e.current.lanes=i,tl(e,i,r),Gt(e,r),e}function Ju(e,t,n,r){var i=t.current,s=Lt(),o=ai(i);return n=F4(n),t.context===null?t.context=n:t.pendingContext=n,t=jr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=si(i,t,o),e!==null&&(Dn(e,i,o,s),gc(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Em(e,t){Sv(e,t),(e=e.alternate)&&Sv(e,t)}function a6(){return null}var H4=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rm(e){this._internalRoot=e}ed.prototype.render=Rm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Ju(e,t,null,null)};ed.prototype.unmount=Rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ji(function(){Ju(null,e,null,null)}),t[_r]=null}};function ed(e){this._internalRoot=e}ed.prototype.unstable_scheduleHydration=function(e){if(e){var t=xb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&bb(e)}};function Mm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cv(){}function l6(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cu(o);s.call(u)}}var o=V4(t,r,e,0,null,!1,!1,"",Cv);return e._reactRootContainer=o,e[_r]=o.current,za(e.nodeType===8?e.parentNode:e),Ji(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=cu(c);l.call(u)}}var c=Pm(e,0,!1,null,null,!1,!1,"",Cv);return e._reactRootContainer=c,e[_r]=c.current,za(e.nodeType===8?e.parentNode:e),Ji(function(){Ju(t,c,n,r)}),c}function nd(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=cu(o);l.call(c)}}Ju(t,o,e,i)}else o=l6(n,t,e,i,r);return cu(o)}yb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ko(t.pendingLanes);n!==0&&(K0(t,n|1),Gt(t,Ye()),!(ve&6)&&(oo=Ye()+500,bi()))}break;case 13:Ji(function(){var r=Or(e,1);if(r!==null){var i=Lt();Dn(r,e,1,i)}}),Em(e,1)}};Z0=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var n=Lt();Dn(t,e,134217728,n)}Em(e,134217728)}};vb=function(e){if(e.tag===13){var t=ai(e),n=Or(e,t);if(n!==null){var r=Lt();Dn(n,e,t,r)}Em(e,t)}};xb=function(){return Ee};wb=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};Gh=function(e,t,n){switch(t){case"input":if(Bh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qu(r);if(!i)throw Error(F(90));Xw(r),Bh(r,i)}}}break;case"textarea":Jw(e,n);break;case"select":t=n.value,t!=null&&Ws(e,!!n.multiple,t,!1)}};ob=Sm;ab=Ji;var c6={usingClientEntryPoint:!1,Events:[rl,Ts,qu,ib,sb,Sm]},Ao={findFiberByHostInstance:Ii,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},u6={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ub(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||a6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Vu=Vl.inject(u6),ir=Vl}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c6;fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(t))throw Error(F(200));return o6(e,t,null,n)};fn.createRoot=function(e,t){if(!Mm(e))throw Error(F(299));var n=!1,r="",i=H4;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pm(e,1,!1,null,null,n,!1,r,i),e[_r]=t.current,za(e.nodeType===8?e.parentNode:e),new Rm(t)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=ub(t),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return Ji(e)};fn.hydrate=function(e,t,n){if(!td(t))throw Error(F(200));return nd(null,e,t,!0,n)};fn.hydrateRoot=function(e,t,n){if(!Mm(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H4;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=V4(t,null,e,1,n??null,i,!1,s,o),e[_r]=t.current,za(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ed(t)};fn.render=function(e,t,n){if(!td(t))throw Error(F(200));return nd(null,e,t,!1,n)};fn.unmountComponentAtNode=function(e){if(!td(e))throw Error(F(40));return e._reactRootContainer?(Ji(function(){nd(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};fn.unstable_batchedUpdates=Sm;fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!td(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return nd(e,t,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";function W4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W4)}catch(e){console.error(e)}}W4(),Vw.exports=fn;var Tm=Vw.exports,kv=Tm;zh.createRoot=kv.createRoot,zh.hydrateRoot=kv.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}var ei;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ei||(ei={}));const jv="popstate";function d6(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:l="",hash:c=""}=os(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Pp("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof s=="string"?s:uu(s))}function r(i,s){rd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return h6(t,n,r,e)}function Ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f6(){return Math.random().toString(36).substr(2,8)}function Pv(e,t){return{usr:e.state,key:e.key,idx:t}}function Pp(e,t,n,r){return n===void 0&&(n=null),Va({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?os(t):t,{state:n,key:t&&t.key||r||f6()})}function uu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function os(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h6(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ei.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Va({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=ei.Pop;let P=d(),x=P==null?null:P-u;u=P,c&&c({action:l,location:y.location,delta:x})}function h(P,x){l=ei.Push;let p=Pp(y.location,P,x);n&&n(p,P),u=d()+1;let v=Pv(p,u),C=y.createHref(p);try{o.pushState(v,"",C)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(C)}s&&c&&c({action:l,location:y.location,delta:1})}function g(P,x){l=ei.Replace;let p=Pp(y.location,P,x);n&&n(p,P),u=d();let v=Pv(p,u),C=y.createHref(p);o.replaceState(v,"",C),s&&c&&c({action:l,location:y.location,delta:0})}function m(P){let x=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof P=="string"?P:uu(P);return Ke(x,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,x)}let y={get action(){return l},get location(){return e(i,o)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(jv,f),c=P,()=>{i.removeEventListener(jv,f),c=null}},createHref(P){return t(i,P)},createURL:m,encodeLocation(P){let x=m(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(P){return o.go(P)}};return y}var Ev;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ev||(Ev={}));function p6(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?os(t):t,i=Ha(r.pathname||"/",n);if(i==null)return null;let s=U4(e);m6(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=k6(s[l],P6(i));return o}function U4(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ke(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ci([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),U4(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:S6(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of q4(s.path))i(s,o,c)}),t}function q4(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q4(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function m6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:C6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const g6=/^:\w+$/,y6=3,v6=2,x6=1,w6=10,b6=-2,Rv=e=>e==="*";function S6(e,t){let n=e.split("/"),r=n.length;return n.some(Rv)&&(r+=b6),t&&(r+=v6),n.filter(i=>!Rv(i)).reduce((i,s)=>i+(g6.test(s)?y6:s===""?x6:w6),r)}function C6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function k6(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Ep({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;s.push({params:r,pathname:ci([i,d.pathname]),pathnameBase:T6(ci([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=ci([i,d.pathnameBase]))}return s}function Ep(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let h=l[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=E6(l[f]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:e}}function j6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function P6(e){try{return decodeURI(e)}catch(t){return rd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function E6(e,t){try{return decodeURIComponent(e)}catch(n){return rd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ha(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function R6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?os(e):e;return{pathname:n?n.startsWith("/")?n:M6(n,t):t,search:_6(r),hash:O6(i)}}function M6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function K4(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=os(e):(i=Va({},e),Ke(!i.pathname||!i.pathname.includes("?"),Vf("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),Vf("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),Vf("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=R6(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ci=e=>e.join("/").replace(/\/\/+/g,"/"),T6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Z4=["post","put","patch","delete"];new Set(Z4);const N6=["get",...Z4];new Set(N6);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}const id=w.createContext(null),Y4=w.createContext(null),as=w.createContext(null),sd=w.createContext(null),Ar=w.createContext({outlet:null,matches:[],isDataRoute:!1}),X4=w.createContext(null);function A6(e,t){let{relative:n}=t===void 0?{}:t;sl()||Ke(!1);let{basename:r,navigator:i}=w.useContext(as),{hash:s,pathname:o,search:l}=od(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:ci([r,o])),i.createHref({pathname:c,search:l,hash:s})}function sl(){return w.useContext(sd)!=null}function Lr(){return sl()||Ke(!1),w.useContext(sd).location}function Q4(e){w.useContext(as).static||w.useLayoutEffect(e)}function K(){let{isDataRoute:e}=w.useContext(Ar);return e?Y6():L6()}function L6(){sl()||Ke(!1);let e=w.useContext(id),{basename:t,navigator:n}=w.useContext(as),{matches:r}=w.useContext(Ar),{pathname:i}=Lr(),s=JSON.stringify(G4(r).map(c=>c.pathnameBase)),o=w.useRef(!1);return Q4(()=>{o.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=K4(c,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ci([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}const I6=w.createContext(null);function $6(e){let t=w.useContext(Ar).outlet;return t&&w.createElement(I6.Provider,{value:e},t)}function J4(){let{matches:e}=w.useContext(Ar),t=e[e.length-1];return t?t.params:{}}function od(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(Ar),{pathname:i}=Lr(),s=JSON.stringify(G4(r).map(o=>o.pathnameBase));return w.useMemo(()=>K4(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function D6(e,t){return B6(e,t)}function B6(e,t,n){sl()||Ke(!1);let{navigator:r}=w.useContext(as),{matches:i}=w.useContext(Ar),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Lr(),u;if(t){var d;let y=typeof t=="string"?os(t):t;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||Ke(!1),u=y}else u=c;let f=u.pathname||"/",h=l==="/"?f:f.slice(l.length)||"/",g=p6(e,{pathname:h}),m=U6(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ci([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:ci([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&m?w.createElement(sd.Provider,{value:{location:du({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ei.Pop}},m):m}function F6(){let e=Z6(),t=z6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,s)}const V6=w.createElement(F6,null);class H6 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(Ar.Provider,{value:this.props.routeContext},w.createElement(X4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W6(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(id);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ar.Provider,{value:t},r)}function U6(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));l>=0||Ke(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,c,u)=>{let d=c.route.id?o==null?void 0:o[c.route.id]:null,f=null;n&&(f=c.route.errorElement||V6);let h=t.concat(s.slice(0,u+1)),g=()=>{let m;return d?m=f:c.route.Component?m=w.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=l,w.createElement(W6,{match:c,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?w.createElement(H6,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var e3=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(e3||{}),fu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fu||{});function q6(e){let t=w.useContext(id);return t||Ke(!1),t}function G6(e){let t=w.useContext(Y4);return t||Ke(!1),t}function K6(e){let t=w.useContext(Ar);return t||Ke(!1),t}function t3(e){let t=K6(),n=t.matches[t.matches.length-1];return n.route.id||Ke(!1),n.route.id}function Z6(){var e;let t=w.useContext(X4),n=G6(fu.UseRouteError),r=t3(fu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Y6(){let{router:e}=q6(e3.UseNavigateStable),t=t3(fu.UseNavigateStable),n=w.useRef(!1);return Q4(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,du({fromRouteId:t},s)))},[e,t])}function _m(e){return $6(e.context)}function G(e){Ke(!1)}function X6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ei.Pop,navigator:s,static:o=!1}=e;sl()&&Ke(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=os(r));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:g="default"}=r,m=w.useMemo(()=>{let y=Ha(u,l);return y==null?null:{location:{pathname:y,search:d,hash:f,state:h,key:g},navigationType:i}},[l,u,d,f,h,g,i]);return m==null?null:w.createElement(as.Provider,{value:c},w.createElement(sd.Provider,{children:n,value:m}))}function bo(e){let{children:t,location:n}=e;return D6(Rp(t),n)}new Promise(()=>{});function Rp(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Rp(r.props.children,s));return}r.type!==G&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hu.apply(this,arguments)}function n3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Q6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J6(e,t){return e.button===0&&(!t||t==="_self")&&!Q6(e)}const eP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],tP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],nP=w.createContext({isTransitioning:!1}),rP="startTransition",Mv=Oh[rP];function iP(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=d6({window:i,v5Compat:!0}));let o=s.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&Mv?Mv(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.createElement(X6,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const sP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aP=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,h=n3(t,eP),{basename:g}=w.useContext(as),m,y=!1;if(typeof u=="string"&&oP.test(u)&&(m=u,sP))try{let v=new URL(window.location.href),C=u.startsWith("//")?new URL(v.protocol+u):new URL(u),b=Ha(C.pathname,g);C.origin===v.origin&&b!=null?u=b+C.search+C.hash:y=!0}catch{}let P=A6(u,{relative:i}),x=cP(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,unstable_viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||x(v)}return w.createElement("a",hu({},h,{href:m||P,onClick:y||s?r:p,ref:n,target:c}))}),Ln=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,unstable_viewTransition:u,children:d}=t,f=n3(t,tP),h=od(c,{relative:f.relative}),g=Lr(),m=w.useContext(Y4),{navigator:y}=w.useContext(as),P=m!=null&&uP(h)&&u===!0,x=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,p=g.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,x=x.toLowerCase());let C=p===x||!o&&p.startsWith(x)&&p.charAt(x.length)==="/",b=v!=null&&(v===x||!o&&v.startsWith(x)&&v.charAt(x.length)==="/"),E={isActive:C,isPending:b,isTransitioning:P},j=C?r:void 0,S;typeof s=="function"?S=s(E):S=[s,C?"active":null,b?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let _=typeof l=="function"?l(E):l;return w.createElement(aP,hu({},f,{"aria-current":j,className:S,ref:n,style:_,to:c,unstable_viewTransition:u}),typeof d=="function"?d(E):d)});var Mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mp||(Mp={}));var Tv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tv||(Tv={}));function lP(e){let t=w.useContext(id);return t||Ke(!1),t}function cP(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,c=K(),u=Lr(),d=od(e,{relative:o});return w.useCallback(f=>{if(J6(f,n)){f.preventDefault();let h=r!==void 0?r:uu(u)===uu(d);c(e,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,c,d,r,i,n,e,s,o,l])}function uP(e,t){t===void 0&&(t={});let n=w.useContext(nP);n==null&&Ke(!1);let{basename:r}=lP(Mp.useViewTransitionState),i=od(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Ha(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ha(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ep(i.pathname,o)!=null||Ep(i.pathname,s)!=null}var dt=function(){return dt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},dt.apply(this,arguments)};function Wa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function r3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fP=r3(function(e){return dP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ne="-ms-",ma="-moz-",ke="-webkit-",i3="comm",ad="rule",Om="decl",hP="@import",s3="@keyframes",pP="@layer",mP=Math.abs,zm=String.fromCharCode,Tp=Object.assign;function gP(e,t){return ct(e,0)^45?(((t<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}function o3(e){return e.trim()}function yr(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function Cc(e,t){return e.indexOf(t)}function ct(e,t){return e.charCodeAt(t)|0}function ao(e,t,n){return e.slice(t,n)}function Yn(e){return e.length}function a3(e){return e.length}function Yo(e,t){return t.push(e),e}function yP(e,t){return e.map(t).join("")}function _v(e,t){return e.filter(function(n){return!yr(n,t)})}var ld=1,lo=1,l3=0,En=0,et=0,So="";function cd(e,t,n,r,i,s,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:ld,column:lo,length:o,return:"",siblings:l}}function Ur(e,t){return Tp(cd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ps(e){for(;e.root;)e=Ur(e.root,{children:[e]});Yo(e,e.siblings)}function vP(){return et}function xP(){return et=En>0?ct(So,--En):0,lo--,et===10&&(lo=1,ld--),et}function Bn(){return et=En<l3?ct(So,En++):0,lo++,et===10&&(lo=1,ld++),et}function Gi(){return ct(So,En)}function kc(){return En}function ud(e,t){return ao(So,e,t)}function _p(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wP(e){return ld=lo=1,l3=Yn(So=e),En=0,[]}function bP(e){return So="",e}function Hf(e){return o3(ud(En-1,Op(e===91?e+2:e===40?e+1:e)))}function SP(e){for(;(et=Gi())&&et<33;)Bn();return _p(e)>2||_p(et)>3?"":" "}function CP(e,t){for(;--t&&Bn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return ud(e,kc()+(t<6&&Gi()==32&&Bn()==32))}function Op(e){for(;Bn();)switch(et){case e:return En;case 34:case 39:e!==34&&e!==39&&Op(et);break;case 40:e===41&&Op(e);break;case 92:Bn();break}return En}function kP(e,t){for(;Bn()&&e+et!==47+10;)if(e+et===42+42&&Gi()===47)break;return"/*"+ud(t,En-1)+"*"+zm(e===47?e:Bn())}function jP(e){for(;!_p(Gi());)Bn();return ud(e,En)}function PP(e){return bP(jc("",null,null,null,[""],e=wP(e),0,[0],e))}function jc(e,t,n,r,i,s,o,l,c){for(var u=0,d=0,f=o,h=0,g=0,m=0,y=1,P=1,x=1,p=0,v="",C=i,b=s,E=r,j=v;P;)switch(m=p,p=Bn()){case 40:if(m!=108&&ct(j,f-1)==58){Cc(j+=le(Hf(p),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:j+=Hf(p);break;case 9:case 10:case 13:case 32:j+=SP(m);break;case 92:j+=CP(kc()-1,7);continue;case 47:switch(Gi()){case 42:case 47:Yo(EP(kP(Bn(),kc()),t,n,c),c);break;default:j+="/"}break;case 123*y:l[u++]=Yn(j)*x;case 125*y:case 59:case 0:switch(p){case 0:case 125:P=0;case 59+d:x==-1&&(j=le(j,/\f/g,"")),g>0&&Yn(j)-f&&Yo(g>32?zv(j+";",r,n,f-1,c):zv(le(j," ","")+";",r,n,f-2,c),c);break;case 59:j+=";";default:if(Yo(E=Ov(j,t,n,u,d,i,l,v,C=[],b=[],f,s),s),p===123)if(d===0)jc(j,t,E,E,C,s,f,l,b);else switch(h===99&&ct(j,3)===110?100:h){case 100:case 108:case 109:case 115:jc(e,E,E,r&&Yo(Ov(e,E,E,0,0,i,l,v,i,C=[],f,b),b),i,b,f,l,r?C:b);break;default:jc(j,E,E,E,[""],b,0,l,b)}}u=d=g=0,y=x=1,v=j="",f=o;break;case 58:f=1+Yn(j),g=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&xP()==125)continue}switch(j+=zm(p),p*y){case 38:x=d>0?1:(j+="\f",-1);break;case 44:l[u++]=(Yn(j)-1)*x,x=1;break;case 64:Gi()===45&&(j+=Hf(Bn())),h=Gi(),d=f=Yn(v=j+=jP(kc())),p++;break;case 45:m===45&&Yn(j)==2&&(y=0)}}return s}function Ov(e,t,n,r,i,s,o,l,c,u,d,f){for(var h=i-1,g=i===0?s:[""],m=a3(g),y=0,P=0,x=0;y<r;++y)for(var p=0,v=ao(e,h+1,h=mP(P=o[y])),C=e;p<m;++p)(C=o3(P>0?g[p]+" "+v:le(v,/&\f/g,g[p])))&&(c[x++]=C);return cd(e,t,n,i===0?ad:l,c,u,d,f)}function EP(e,t,n,r){return cd(e,t,n,i3,zm(vP()),ao(e,2,-2),0,r)}function zv(e,t,n,r,i){return cd(e,t,n,Om,ao(e,0,r),ao(e,r+1,-1),r,i)}function c3(e,t,n){switch(gP(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+e+e;case 4789:return ma+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+ma+e+Ne+e+e;case 5936:switch(ct(e,t+11)){case 114:return ke+e+Ne+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Ne+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Ne+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Ne+e+e;case 6165:return ke+e+Ne+"flex-"+e+e;case 5187:return ke+e+le(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return ke+e+Ne+"flex-item-"+le(e,/flex-|-self/g,"")+(yr(e,/flex-|baseline/)?"":Ne+"grid-row-"+le(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Ne+"flex-line-pack"+le(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Ne+le(e,"shrink","negative")+e;case 5292:return ke+e+Ne+le(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+le(e,"-grow","")+ke+e+Ne+le(e,"grow","positive")+e;case 4554:return ke+le(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+e+e;case 4200:if(!yr(e,/flex-|baseline/))return Ne+"grid-column-align"+ao(e,t)+e;break;case 2592:case 3360:return Ne+le(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,yr(r.props,/grid-\w+-end/)})?~Cc(e+(n=n[t].value),"span")?e:Ne+le(e,"-start","")+e+Ne+"grid-row-span:"+(~Cc(n,"span")?yr(n,/\d+/):+yr(n,/\d+/)-+yr(e,/\d+/))+";":Ne+le(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yr(r.props,/grid-\w+-start/)})?e:Ne+le(le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yn(e)-1-t>6)switch(ct(e,t+1)){case 109:if(ct(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+ma+(ct(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Cc(e,"stretch")?c3(le(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,c,u){return Ne+i+":"+s+u+(o?Ne+i+"-span:"+(l?c:+c-+s)+u:"")+e});case 4949:if(ct(e,t+6)===121)return le(e,":",":"+ke)+e;break;case 6444:switch(ct(e,ct(e,14)===45?18:11)){case 120:return le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(ct(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Ne+"$2box$3")+e;case 100:return le(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(e,"scroll-","scroll-snap-")+e}return e}function pu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function RP(e,t,n,r){switch(e.type){case pP:if(e.children.length)break;case hP:case Om:return e.return=e.return||e.value;case i3:return"";case s3:return e.return=e.value+"{"+pu(e.children,r)+"}";case ad:if(!Yn(e.value=e.props.join(",")))return""}return Yn(n=pu(e.children,r))?e.return=e.value+"{"+n+"}":""}function MP(e){var t=a3(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function TP(e){return function(t){t.root||(t=t.return)&&e(t)}}function _P(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Om:e.return=c3(e.value,e.length,n);return;case s3:return pu([Ur(e,{value:le(e.value,"@","@"+ke)})],r);case ad:if(e.length)return yP(n=e.props,function(i){switch(yr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ps(Ur(e,{props:[le(i,/:(read-\w+)/,":"+ma+"$1")]})),ps(Ur(e,{props:[i]})),Tp(e,{props:_v(n,r)});break;case"::placeholder":ps(Ur(e,{props:[le(i,/:(plac\w+)/,":"+ke+"input-$1")]})),ps(Ur(e,{props:[le(i,/:(plac\w+)/,":"+ma+"$1")]})),ps(Ur(e,{props:[le(i,/:(plac\w+)/,Ne+"input-$1")]})),ps(Ur(e,{props:[i]})),Tp(e,{props:_v(n,r)});break}return""})}}var u3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},co=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Nm=typeof window<"u"&&"HTMLElement"in window,OP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),zP={},dd=Object.freeze([]),uo=Object.freeze({});function d3(e,t,n){return n===void 0&&(n=uo),e.theme!==n.theme&&e.theme||t||n.theme}var f3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),NP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AP=/(^-|-$)/g;function Nv(e){return e.replace(NP,"-").replace(AP,"")}var LP=/(a)(d)/gi,Av=function(e){return String.fromCharCode(e+(e>25?39:97))};function zp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Av(t%52)+n;return(Av(t%52)+n).replace(LP,"$1-$2")}var Wf,Is=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},h3=function(e){return Is(5381,e)};function p3(e){return zp(h3(e)>>>0)}function IP(e){return e.displayName||e.name||"Component"}function Uf(e){return typeof e=="string"&&!0}var m3=typeof Symbol=="function"&&Symbol.for,g3=m3?Symbol.for("react.memo"):60115,$P=m3?Symbol.for("react.forward_ref"):60112,DP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},BP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FP=((Wf={})[$P]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wf[g3]=y3,Wf);function Lv(e){return("type"in(t=e)&&t.type.$$typeof)===g3?y3:"$$typeof"in e?FP[e.$$typeof]:DP;var t}var VP=Object.defineProperty,HP=Object.getOwnPropertyNames,Iv=Object.getOwnPropertySymbols,WP=Object.getOwnPropertyDescriptor,UP=Object.getPrototypeOf,$v=Object.prototype;function v3(e,t,n){if(typeof t!="string"){if($v){var r=UP(t);r&&r!==$v&&v3(e,r,n)}var i=HP(t);Iv&&(i=i.concat(Iv(t)));for(var s=Lv(e),o=Lv(t),l=0;l<i.length;++l){var c=i[l];if(!(c in BP||n&&n[c]||o&&c in o||s&&c in s)){var u=WP(t,c);try{VP(e,c,u)}catch{}}}}return e}function es(e){return typeof e=="function"}function Am(e){return typeof e=="object"&&"styledComponentId"in e}function Bi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Np(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ua(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ap(e,t,n){if(n===void 0&&(n=!1),!n&&!Ua(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ap(e[r],t[r]);else if(Ua(t))for(var r in t)e[r]=Ap(e[r],t[r]);return e}function Lm(e,t){Object.defineProperty(e,"toString",{value:t})}function gi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw gi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Pc=new Map,mu=new Map,qf=1,Hl=function(e){if(Pc.has(e))return Pc.get(e);for(;mu.has(qf);)qf++;var t=qf++;return Pc.set(e,t),mu.set(t,e),t},GP=function(e,t){Pc.set(e,t),mu.set(t,e)},KP="style[".concat(co,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),ZP=new RegExp("^".concat(co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YP=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},XP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var c=l.match(ZP);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(GP(d,u),YP(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function QP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var x3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(co,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(co,"active"),r.setAttribute("data-styled-version","6.1.0");var o=QP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},JP=function(){function e(t){this.element=x3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw gi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),eE=function(){function e(t){this.element=x3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dv=Nm,nE={isServer:!Nm,useCSSOMInjection:!OP},gu=function(){function e(t,n,r){t===void 0&&(t=uo),n===void 0&&(n={});var i=this;this.options=dt(dt({},nE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Nm&&Dv&&(Dv=!1,function(s){for(var o=document.querySelectorAll(KP),l=0,c=o.length;l<c;l++){var u=o[l];u&&u.getAttribute(co)!=="active"&&(XP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Lm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,c="",u=function(f){var h=function(x){return mu.get(x)}(f);if(h===void 0)return"continue";var g=s.names.get(h),m=o.getGroup(f);if(g===void 0||m.length===0)return"continue";var y="".concat(co,".g").concat(f,'[id="').concat(h,'"]'),P="";g!==void 0&&g.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),c+="".concat(m).concat(y,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Hl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(dt(dt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tE(i):r?new JP(i):new eE(i)}(this.options),new qP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Hl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Hl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rE=/&/g,iE=/^\s*\/\/.*$/gm;function w3(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=w3(n.children,t)),n})}function sE(e){var t,n,r,i=e===void 0?uo:e,s=i.options,o=s===void 0?uo:s,l=i.plugins,c=l===void 0?dd:l,u=function(h,g,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):h},d=c.slice();d.push(function(h){h.type===ad&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(rE,n).replace(r,u))}),o.prefix&&d.push(_P),d.push(RP);var f=function(h,g,m,y){g===void 0&&(g=""),m===void 0&&(m=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var P=h.replace(iE,""),x=PP(m||g?"".concat(m," ").concat(g," { ").concat(P," }"):P);o.namespace&&(x=w3(x,o.namespace));var p=[];return pu(x,MP(d.concat(TP(function(v){return p.push(v)})))),p};return f.hash=c.length?c.reduce(function(h,g){return g.name||gi(15),Is(h,g.name)},5381).toString():"",f}var oE=new gu,Lp=sE(),b3=I.createContext({shouldForwardProp:void 0,styleSheet:oE,stylis:Lp});b3.Consumer;I.createContext(void 0);function Ip(){return w.useContext(b3)}var aE=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Lp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lm(this,function(){throw gi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Lp),this.name+t.hash},e}(),lE=function(e){return e>="A"&&e<="Z"};function Bv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;lE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var S3=function(e){return e==null||e===!1||e===""},C3=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!S3(s)&&(Array.isArray(s)&&s.isCss||es(s)?r.push("".concat(Bv(i),":"),s,";"):Ua(s)?r.push.apply(r,Wa(Wa(["".concat(i," {")],C3(s),!1),["}"],!1)):r.push("".concat(Bv(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in u3||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ui(e,t,n,r){if(S3(e))return[];if(Am(e))return[".".concat(e.styledComponentId)];if(es(e)){if(!es(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return ui(i,t,n,r)}var s;return e instanceof aE?n?(e.inject(n,r),[e.getName(r)]):[e]:Ua(e)?C3(e):Array.isArray(e)?Array.prototype.concat.apply(dd,e.map(function(o){return ui(o,t,n,r)})):[e.toString()]}function k3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(es(n)&&!Am(n))return!1}return!0}var cE=h3("6.1.0"),uE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&k3(t),this.componentId=n,this.baseHash=Is(cE,n),this.baseStyle=r,gu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bi(i,this.staticRulesId);else{var s=Np(ui(this.rules,t,n,r)),o=zp(Is(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Bi(i,o),this.staticRulesId=o}else{for(var c=Is(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=Np(ui(f,t,n,r));c=Is(c,h+d),u+=h}}if(u){var g=zp(c>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Bi(i,g)}}return i},e}(),fo=I.createContext(void 0);fo.Consumer;function pn(){var e=w.useContext(fo);if(!e)throw gi(18);return e}function dE(e){var t=I.useContext(fo),n=w.useMemo(function(){return function(r,i){if(!r)throw gi(14);if(es(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw gi(8);return i?dt(dt({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?I.createElement(fo.Provider,{value:n},e.children):null}var Gf={};function fE(e,t,n){var r=Am(e),i=e,s=!Uf(e),o=t.attrs,l=o===void 0?dd:o,c=t.componentId,u=c===void 0?function(v,C){var b=typeof v!="string"?"sc":Nv(v);Gf[b]=(Gf[b]||0)+1;var E="".concat(b,"-").concat(p3("6.1.0"+b+Gf[b]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):c,d=t.displayName;d===void 0&&function(v){return Uf(v)?"styled.".concat(v):"Styled(".concat(IP(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(Nv(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(v,C){return m(v,C)&&y(v,C)}}else g=m}var P=new uE(n,f,r?i.componentStyle:void 0);function x(v,C){return function(b,E,j){var S=b.attrs,_=b.componentStyle,M=b.defaultProps,T=b.foldedComponentIds,R=b.styledComponentId,O=b.target,k=I.useContext(fo),N=Ip(),A=b.shouldForwardProp||N.shouldForwardProp,D=function(xe,de,pe){for(var ge,we=dt(dt({},de),{className:void 0,theme:pe}),q=0;q<xe.length;q+=1){var X=es(ge=xe[q])?ge(we):ge;for(var ee in X)we[ee]=ee==="className"?Bi(we[ee],X[ee]):ee==="style"?dt(dt({},we[ee]),X[ee]):X[ee]}return de.className&&(we.className=Bi(we.className,de.className)),we}(S,E,d3(E,k,M)||uo),L=D.as||O,$={};for(var V in D)D[V]===void 0||V[0]==="$"||V==="as"||V==="theme"||(V==="forwardedAs"?$.as=D.forwardedAs:A&&!A(V,L)||($[V]=D[V]));var B=function(xe,de){var pe=Ip(),ge=xe.generateAndInjectStyles(de,pe.styleSheet,pe.stylis);return ge}(_,D),Q=Bi(T,R);return B&&(Q+=" "+B),D.className&&(Q+=" "+D.className),$[Uf(L)&&!f3.has(L)?"class":"className"]=Q,$.ref=j,w.createElement(L,$)}(p,v,C)}var p=I.forwardRef(x);return p.attrs=h,p.componentStyle=P,p.shouldForwardProp=g,p.foldedComponentIds=r?Bi(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var b=[],E=1;E<arguments.length;E++)b[E-1]=arguments[E];for(var j=0,S=b;j<S.length;j++)Ap(C,S[j],!0);return C}({},i.defaultProps,v):v}}),Lm(p,function(){return".".concat(p.styledComponentId)}),s&&v3(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Fv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vv=function(e){return Object.assign(e,{isCss:!0})};function j3(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(es(e)||Ua(e)){var r=e;return Vv(ui(Fv(dd,Wa([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ui(i):Vv(ui(Fv(i,t)))}function $p(e,t,n){if(n===void 0&&(n=uo),!t)throw gi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,j3.apply(void 0,Wa([i],s,!1)))};return r.attrs=function(i){return $p(e,t,dt(dt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $p(e,t,dt(dt({},n),i))},r}var P3=function(e){return $p(fE,e)},W=P3;f3.forEach(function(e){W[e]=P3(e)});var hE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=k3(t),gu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Np(ui(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&gu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function pE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=j3.apply(void 0,Wa([e],t,!1)),i="sc-global-".concat(p3(JSON.stringify(r))),s=new hE(r,i),o=function(c){var u=Ip(),d=I.useContext(fo),f=I.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),I.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return s.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,h){if(s.isStatic)s.renderStyles(c,zP,d,h);else{var g=dt(dt({},u),{theme:d3(u,f,o.defaultProps)});s.renderStyles(c,g,d,h)}}return I.memo(o)}const mE=["/instagram/cam","/whats/camera","/instagram/liveCam","/instagram/storyCam","/instagram/liveOwner","/instagram/liveView","/bank/auth/camera"],gE=e=>!mE.includes(e),yE=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({path:e})=>gE(e)&&"#101011"};
  position: relative;
  overflow: hidden;
  & > div:nth-child(2) {
    flex: 1;
    overflow-y: auto;
  }
`,Im=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),fd=w.createContext({}),hd=w.createContext(null),pd=typeof document<"u",ol=pd?w.useLayoutEffect:w.useEffect,E3=w.createContext({strict:!1});function vE(e,t,n,r){const{visualElement:i}=w.useContext(fd),s=w.useContext(E3),o=w.useContext(hd),l=w.useContext(Im).reducedMotion,c=w.useRef();r=r||s.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const u=c.current;w.useInsertionEffect(()=>{u&&u.update(n,o)});const d=w.useRef(!!window.HandoffAppearAnimations);return ol(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),w.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),window.HandoffAppearAnimations=void 0,d.current=!1)}),u}function $s(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function xE(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):$s(n)&&(n.current=r))},[t])}function qa(e){return typeof e=="string"||Array.isArray(e)}function md(e){return typeof e=="object"&&typeof e.start=="function"}const $m=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dm=["initial",...$m];function gd(e){return md(e.animate)||Dm.some(t=>qa(e[t]))}function R3(e){return!!(gd(e)||e.variants)}function wE(e,t){if(gd(e)){const{initial:n,animate:r}=e;return{initial:n===!1||qa(n)?n:void 0,animate:qa(r)?r:void 0}}return e.inherit!==!1?t:{}}function bE(e){const{initial:t,animate:n}=wE(e,w.useContext(fd));return w.useMemo(()=>({initial:t,animate:n}),[Hv(t),Hv(n)])}function Hv(e){return Array.isArray(e)?e.join(" "):e}const Wv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ga={};for(const e in Wv)Ga[e]={isEnabled:t=>Wv[e].some(n=>!!t[n])};function SE(e){for(const t in e)Ga[t]={...Ga[t],...e[t]}}const Bm=w.createContext({}),M3=w.createContext({}),CE=Symbol.for("motionComponentSymbol");function kE({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&SE(e);function s(l,c){let u;const d={...w.useContext(Im),...l,layoutId:jE(l)},{isStatic:f}=d,h=bE(l),g=r(l,f);if(!f&&pd){h.visualElement=vE(i,g,d,t);const m=w.useContext(M3),y=w.useContext(E3).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,y,e,m))}return w.createElement(fd.Provider,{value:h},u&&h.visualElement?w.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,l,xE(g,h.visualElement,c),g,f,h.visualElement))}const o=w.forwardRef(s);return o[CE]=i,o}function jE({layoutId:e}){const t=w.useContext(Bm).id;return t&&e!==void 0?t+"-"+e:e}function PE(e){function t(r,i={}){return kE(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const EE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fm(e){return typeof e!="string"||e.includes("-")?!1:!!(EE.indexOf(e)>-1||/[A-Z]/.test(e))}const yu={};function RE(e){Object.assign(yu,e)}const al=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(al);function T3(e,{layout:t,layoutId:n}){return ls.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!yu[e]||e==="opacity")}const Zt=e=>!!(e&&e.getVelocity),ME={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TE=al.length;function _E(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<TE;o++){const l=al[o];if(e[l]!==void 0){const c=ME[l]||l;s+=`${c}(${e[l]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const _3=e=>t=>typeof t=="string"&&t.startsWith(e),O3=_3("--"),Dp=_3("var(--"),OE=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,zE=(e,t)=>t&&typeof e=="number"?t.transform(e):e,yi=(e,t,n)=>Math.min(Math.max(n,e),t),cs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ga={...cs,transform:e=>yi(0,1,e)},Wl={...cs,default:1},ya=e=>Math.round(e*1e5)/1e5,yd=/(-)?([\d]*\.?[\d])+/g,z3=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,NE=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ll(e){return typeof e=="string"}const cl=e=>({test:t=>ll(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qr=cl("deg"),or=cl("%"),te=cl("px"),AE=cl("vh"),LE=cl("vw"),Uv={...or,parse:e=>or.parse(e)/100,transform:e=>or.transform(e*100)},qv={...cs,transform:Math.round},N3={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,radius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,size:te,top:te,right:te,bottom:te,left:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:Wl,scaleX:Wl,scaleY:Wl,scaleZ:Wl,skew:qr,skewX:qr,skewY:qr,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:ga,originX:Uv,originY:Uv,originZ:te,zIndex:qv,fillOpacity:ga,strokeOpacity:ga,numOctaves:qv};function Vm(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:l}=e;let c=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(O3(f)){s[f]=h;continue}const g=N3[f],m=zE(h,g);if(ls.has(f)){if(c=!0,o[f]=m,!d)continue;h!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,l[f]=m):i[f]=m}if(t.transform||(c||r?i.transform=_E(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:g=0}=l;i.transformOrigin=`${f} ${h} ${g}`}}const Hm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function A3(e,t,n){for(const r in t)!Zt(t[r])&&!T3(r,n)&&(e[r]=t[r])}function IE({transformTemplate:e},t,n){return w.useMemo(()=>{const r=Hm();return Vm(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function $E(e,t,n){const r=e.style||{},i={};return A3(i,r,e),Object.assign(i,IE(e,t,n)),e.transformValues?e.transformValues(i):i}function DE(e,t,n){const r={},i=$E(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const BE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function vu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||BE.has(e)}let L3=e=>!vu(e);function FE(e){e&&(L3=t=>t.startsWith("on")?!vu(t):e(t))}try{FE(require("@emotion/is-prop-valid").default)}catch{}function VE(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(L3(i)||n===!0&&vu(i)||!t&&!vu(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Gv(e,t,n){return typeof e=="string"?e:te.transform(t+n*e)}function HE(e,t,n){const r=Gv(t,e.x,e.width),i=Gv(n,e.y,e.height);return`${r} ${i}`}const WE={offset:"stroke-dashoffset",array:"stroke-dasharray"},UE={offset:"strokeDashoffset",array:"strokeDasharray"};function qE(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?WE:UE;e[s.offset]=te.transform(-r);const o=te.transform(t),l=te.transform(n);e[s.array]=`${o} ${l}`}function Wm(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...u},d,f,h){if(Vm(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:m,dimensions:y}=e;g.transform&&(y&&(m.transform=g.transform),delete g.transform),y&&(i!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=HE(y,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&qE(g,o,l,c,!1)}const I3=()=>({...Hm(),attrs:{}}),Um=e=>typeof e=="string"&&e.toLowerCase()==="svg";function GE(e,t,n,r){const i=w.useMemo(()=>{const s=I3();return Wm(s,t,{enableHardwareAcceleration:!1},Um(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};A3(s,e.style,e),i.style={...s,...i.style}}return i}function KE(e=!1){return(n,r,i,{latestValues:s},o)=>{const c=(Fm(n)?GE:DE)(r,s,o,n),d={...VE(r,typeof n=="string",e),...c,ref:i},{children:f}=r,h=w.useMemo(()=>Zt(f)?f.get():f,[f]);return w.createElement(n,{...d,children:h})}}const qm=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function $3(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const D3=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function B3(e,t,n,r){$3(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(D3.has(i)?i:qm(i),t.attrs[i])}function Gm(e,t){const{style:n}=e,r={};for(const i in n)(Zt(n[i])||t.style&&Zt(t.style[i])||T3(i,e))&&(r[i]=n[i]);return r}function F3(e,t){const n=Gm(e,t);for(const r in e)if(Zt(e[r])||Zt(t[r])){const i=al.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Km(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Co(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const xu=e=>Array.isArray(e),ZE=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),YE=e=>xu(e)?e[e.length-1]||0:e;function Ec(e){const t=Zt(e)?e.get():e;return ZE(t)?t.toValue():t}function XE({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:QE(r,i,s,e),renderState:t()};return n&&(o.mount=l=>n(r,l,o)),o}const V3=e=>(t,n)=>{const r=w.useContext(fd),i=w.useContext(hd),s=()=>XE(e,t,r,i);return n?s():Co(s)};function QE(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=Ec(s[h]);let{initial:o,animate:l}=e;const c=gd(e),u=R3(e);t&&u&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?l:o;return f&&typeof f!="boolean"&&!md(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const m=Km(e,g);if(!m)return;const{transitionEnd:y,transition:P,...x}=m;for(const p in x){let v=x[p];if(Array.isArray(v)){const C=d?v.length-1:0;v=v[C]}v!==null&&(i[p]=v)}for(const p in y)i[p]=y[p]}),i}const Ge=e=>e;class Kv{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function JE(e){let t=new Kv,n=new Kv,r=0,i=!1,s=!1;const o=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&o.add(c),h.add(c)&&f&&i&&(r=t.order.length),c},cancel:c=>{n.remove(c),o.delete(c)},process:c=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(c),o.has(d)&&(l.schedule(d),e())}i=!1,s&&(s=!1,l.process(c))}};return l}const Ul=["prepare","read","update","preRender","render","postRender"],eR=40;function tR(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=Ul.reduce((f,h)=>(f[h]=JE(()=>n=!0),f),{}),o=f=>s[f].process(i),l=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,eR),1),i.timestamp=f,i.isProcessing=!0,Ul.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(l))},c=()=>{n=!0,r=!0,i.isProcessing||e(l)};return{schedule:Ul.reduce((f,h)=>{const g=s[h];return f[h]=(m,y=!1,P=!1)=>(n||c(),g.schedule(m,y,P)),f},{}),cancel:f=>Ul.forEach(h=>s[h].cancel(f)),state:i,steps:s}}const{schedule:Me,cancel:lr,state:at,steps:Kf}=tR(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ge,!0),nR={useVisualState:V3({scrapeMotionValuesFromProps:F3,createRenderState:I3,onMount:(e,t,{renderState:n,latestValues:r})=>{Me.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Me.render(()=>{Wm(n,r,{enableHardwareAcceleration:!1},Um(t.tagName),e.transformTemplate),B3(t,n)})}})},rR={useVisualState:V3({scrapeMotionValuesFromProps:Gm,createRenderState:Hm})};function iR(e,{forwardMotionProps:t=!1},n,r){return{...Fm(e)?nR:rR,preloadedFeatures:n,useRender:KE(t),createVisualElement:r,Component:e}}function kr(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const H3=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function vd(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const sR=e=>t=>H3(t)&&e(t,vd(t));function Pr(e,t,n,r){return kr(e,t,sR(n),r)}const oR=(e,t)=>n=>t(e(n)),di=(...e)=>e.reduce(oR);function W3(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Zv=W3("dragHorizontal"),Yv=W3("dragVertical");function U3(e){let t=!1;if(e==="y")t=Yv();else if(e==="x")t=Zv();else{const n=Zv(),r=Yv();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function q3(){const e=U3(!0);return e?(e(),!1):!0}class Si{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Xv(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.type==="touch"||q3())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&Me.update(()=>l[r](s,o))};return Pr(e.current,n,i,{passive:!e.getProps()[r]})}class aR extends Si{mount(){this.unmount=di(Xv(this.node,!0),Xv(this.node,!1))}unmount(){}}class lR extends Si{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=di(kr(this.node.current,"focus",()=>this.onFocus()),kr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const G3=(e,t)=>t?e===t?!0:G3(e,t.parentElement):!1;function Zf(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,vd(n))}class cR extends Si{constructor(){super(...arguments),this.removeStartListeners=Ge,this.removeEndListeners=Ge,this.removeAccessibleListeners=Ge,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),s=Pr(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d}=this.node.getProps();Me.update(()=>{G3(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(r.onTap||r.onPointerUp)}),o=Pr(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=di(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||Zf("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&Me.update(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=kr(this.node.current,"keyup",o),Zf("down",(l,c)=>{this.startPress(l,c)})},n=kr(this.node.current,"keydown",t),r=()=>{this.isPressing&&Zf("cancel",(s,o)=>this.cancelPress(s,o))},i=kr(this.node.current,"blur",r);this.removeAccessibleListeners=di(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Me.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!q3()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Me.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Pr(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=kr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=di(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Bp=new WeakMap,Yf=new WeakMap,uR=e=>{const t=Bp.get(e.target);t&&t(e)},dR=e=>{e.forEach(uR)};function fR({root:e,...t}){const n=e||document;Yf.has(n)||Yf.set(n,{});const r=Yf.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(dR,{root:e,...t})),r[i]}function hR(e,t,n){const r=fR(t);return Bp.set(e,n),r.observe(e),()=>{Bp.delete(e),r.unobserve(e)}}const pR={some:0,all:1};class mR extends Si{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:pR[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(c)};return hR(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(gR(t,n))&&this.startObserver()}unmount(){}}function gR({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const yR={inView:{Feature:mR},tap:{Feature:cR},focus:{Feature:lR},hover:{Feature:aR}};function K3(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function vR(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function xR(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function xd(e,t,n){const r=e.getProps();return Km(r,t,n!==void 0?n:r.custom,vR(e),xR(e))}const wR="framerAppearId",bR="data-"+qm(wR);let SR=Ge,Zm=Ge;const fi=e=>e*1e3,Er=e=>e/1e3,CR={current:!1},Z3=e=>Array.isArray(e)&&typeof e[0]=="number";function Y3(e){return!!(!e||typeof e=="string"&&X3[e]||Z3(e)||Array.isArray(e)&&e.every(Y3))}const Xo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,X3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function Q3(e){if(e)return Z3(e)?Xo(e):Array.isArray(e)?e.map(Q3):X3[e]}function kR(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:l,times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=Q3(l);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function jR(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const J3=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,PR=1e-7,ER=12;function RR(e,t,n,r,i){let s,o,l=0;do o=t+(n-t)/2,s=J3(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>PR&&++l<ER);return o}function ul(e,t,n,r){if(e===t&&n===r)return Ge;const i=s=>RR(s,0,1,e,n);return s=>s===0||s===1?s:J3(i(s),t,r)}const MR=ul(.42,0,1,1),TR=ul(0,0,.58,1),eS=ul(.42,0,.58,1),_R=e=>Array.isArray(e)&&typeof e[0]!="number",tS=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nS=e=>t=>1-e(1-t),rS=e=>1-Math.sin(Math.acos(e)),Ym=nS(rS),OR=tS(Ym),iS=ul(.33,1.53,.69,.99),Xm=nS(iS),zR=tS(Xm),NR=e=>(e*=2)<1?.5*Xm(e):.5*(2-Math.pow(2,-10*(e-1))),AR={linear:Ge,easeIn:MR,easeInOut:eS,easeOut:TR,circIn:rS,circInOut:OR,circOut:Ym,backIn:Xm,backInOut:zR,backOut:iS,anticipate:NR},Qv=e=>{if(Array.isArray(e)){Zm(e.length===4);const[t,n,r,i]=e;return ul(t,n,r,i)}else if(typeof e=="string")return AR[e];return e},Qm=(e,t)=>n=>!!(ll(n)&&NE.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),sS=(e,t,n)=>r=>{if(!ll(r))return r;const[i,s,o,l]=r.match(yd);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},LR=e=>yi(0,255,e),Xf={...cs,transform:e=>Math.round(LR(e))},Fi={test:Qm("rgb","red"),parse:sS("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Xf.transform(e)+", "+Xf.transform(t)+", "+Xf.transform(n)+", "+ya(ga.transform(r))+")"};function IR(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Fp={test:Qm("#"),parse:IR,transform:Fi.transform},Ds={test:Qm("hsl","hue"),parse:sS("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+or.transform(ya(t))+", "+or.transform(ya(n))+", "+ya(ga.transform(r))+")"},Nt={test:e=>Fi.test(e)||Fp.test(e)||Ds.test(e),parse:e=>Fi.test(e)?Fi.parse(e):Ds.test(e)?Ds.parse(e):Fp.parse(e),transform:e=>ll(e)?e:e.hasOwnProperty("red")?Fi.transform(e):Ds.transform(e)},Fe=(e,t,n)=>-n*e+n*t+e;function Qf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $R({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Qf(c,l,e+1/3),s=Qf(c,l,e),o=Qf(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Jf=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},DR=[Fp,Fi,Ds],BR=e=>DR.find(t=>t.test(e));function Jv(e){const t=BR(e);let n=t.parse(e);return t===Ds&&(n=$R(n)),n}const oS=(e,t)=>{const n=Jv(e),r=Jv(t),i={...n};return s=>(i.red=Jf(n.red,r.red,s),i.green=Jf(n.green,r.green,s),i.blue=Jf(n.blue,r.blue,s),i.alpha=Fe(n.alpha,r.alpha,s),Fi.transform(i))};function FR(e){var t,n;return isNaN(e)&&ll(e)&&(((t=e.match(yd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(z3))===null||n===void 0?void 0:n.length)||0)>0}const aS={regex:OE,countKey:"Vars",token:"${v}",parse:Ge},lS={regex:z3,countKey:"Colors",token:"${c}",parse:Nt.parse},cS={regex:yd,countKey:"Numbers",token:"${n}",parse:cs.parse};function eh(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function wu(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&eh(n,aS),eh(n,lS),eh(n,cS),n}function uS(e){return wu(e).values}function dS(e){const{values:t,numColors:n,numVars:r,tokenised:i}=wu(e),s=t.length;return o=>{let l=i;for(let c=0;c<s;c++)c<r?l=l.replace(aS.token,o[c]):c<r+n?l=l.replace(lS.token,Nt.transform(o[c])):l=l.replace(cS.token,ya(o[c]));return l}}const VR=e=>typeof e=="number"?0:e;function HR(e){const t=uS(e);return dS(e)(t.map(VR))}const vi={test:FR,parse:uS,createTransformer:dS,getAnimatableNone:HR},fS=(e,t)=>n=>`${n>0?t:e}`;function hS(e,t){return typeof e=="number"?n=>Fe(e,t,n):Nt.test(e)?oS(e,t):e.startsWith("var(")?fS(e,t):mS(e,t)}const pS=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>hS(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},WR=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hS(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},mS=(e,t)=>{const n=vi.createTransformer(t),r=wu(e),i=wu(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?di(pS(r.values,i.values),n):fS(e,t)},Ka=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ex=(e,t)=>n=>Fe(e,t,n);function UR(e){return typeof e=="number"?ex:typeof e=="string"?Nt.test(e)?oS:mS:Array.isArray(e)?pS:typeof e=="object"?WR:ex}function qR(e,t,n){const r=[],i=n||UR(e[0]),s=e.length-1;for(let o=0;o<s;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||Ge:t;l=di(c,l)}r.push(l)}return r}function Jm(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Zm(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=qR(t,r,i),l=o.length,c=u=>{let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=Ka(e[d],e[d+1],u);return o[d](f)};return n?u=>c(yi(e[0],e[s-1],u)):c}function GR(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ka(0,t,r);e.push(Fe(n,1,i))}}function KR(e){const t=[0];return GR(t,e.length-1),t}function ZR(e,t){return e.map(n=>n*t)}function YR(e,t){return e.map(()=>t||eS).splice(0,e.length-1)}function bu({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=_R(r)?r.map(Qv):Qv(r),s={done:!1,value:t[0]},o=ZR(n&&n.length===t.length?n:KR(t),e),l=Jm(o,t,{ease:Array.isArray(i)?i:YR(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}function gS(e,t){return t?e*(1e3/t):0}const XR=5;function yS(e,t,n){const r=Math.max(t-XR,0);return gS(n-e(r),t-r)}const th=.001,QR=.01,tx=10,JR=.05,e9=1;function t9({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;SR(e<=fi(tx));let o=1-t;o=yi(JR,e9,o),e=yi(QR,tx,Er(e)),o<1?(i=u=>{const d=u*o,f=d*e,h=d-n,g=Vp(u,o),m=Math.exp(-f);return th-h/g*m},s=u=>{const f=u*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,m=Math.exp(-f),y=Vp(Math.pow(u,2),o);return(-i(u)+th>0?-1:1)*((h-g)*m)/y}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-th+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=r9(i,s,l);if(e=fi(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const n9=12;function r9(e,t,n){let r=n;for(let i=1;i<n9;i++)r=r-e(r)/t(r);return r}function Vp(e,t){return e*Math.sqrt(1-t*t)}const i9=["duration","bounce"],s9=["stiffness","damping","mass"];function nx(e,t){return t.some(n=>e[n]!==void 0)}function o9(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!nx(e,s9)&&nx(e,i9)){const n=t9(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function vS({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:l,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:h}=o9(r),g=d?-Er(d):0,m=c/(2*Math.sqrt(l*u)),y=s-i,P=Er(Math.sqrt(l/u)),x=Math.abs(y)<5;n||(n=x?.01:2),t||(t=x?.005:.5);let p;if(m<1){const v=Vp(P,m);p=C=>{const b=Math.exp(-m*P*C);return s-b*((g+m*P*y)/v*Math.sin(v*C)+y*Math.cos(v*C))}}else if(m===1)p=v=>s-Math.exp(-P*v)*(y+(g+P*y)*v);else{const v=P*Math.sqrt(m*m-1);p=C=>{const b=Math.exp(-m*P*C),E=Math.min(v*C,300);return s-b*((g+m*P*y)*Math.sinh(E)+v*y*Math.cosh(E))/v}}return{calculatedDuration:h&&f||null,next:v=>{const C=p(v);if(h)o.done=v>=f;else{let b=g;v!==0&&(m<1?b=yS(p,v,C):b=0);const E=Math.abs(b)<=n,j=Math.abs(s-C)<=t;o.done=E&&j}return o.value=o.done?s:C,o}}}function rx({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},g=S=>l!==void 0&&S<l||c!==void 0&&S>c,m=S=>l===void 0?c:c===void 0||Math.abs(l-S)<Math.abs(c-S)?l:c;let y=n*t;const P=f+y,x=o===void 0?P:o(P);x!==P&&(y=x-f);const p=S=>-y*Math.exp(-S/r),v=S=>x+p(S),C=S=>{const _=p(S),M=v(S);h.done=Math.abs(_)<=u,h.value=h.done?x:M};let b,E;const j=S=>{g(h.value)&&(b=S,E=vS({keyframes:[h.value,m(h.value)],velocity:yS(v,S,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:S=>{let _=!1;return!E&&b===void 0&&(_=!0,C(S),j(S)),b!==void 0&&S>b?E.next(S-b):(!_&&C(S),h)}}}const a9=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Me.update(t,!0),stop:()=>lr(t),now:()=>at.isProcessing?at.timestamp:performance.now()}},ix=2e4;function sx(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ix;)t+=n,r=e.next(t);return t>=ix?1/0:t}const l9={decay:rx,inertia:rx,tween:bu,keyframes:bu,spring:vS};function Su({autoplay:e=!0,delay:t=0,driver:n=a9,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:l="loop",onPlay:c,onStop:u,onComplete:d,onUpdate:f,...h}){let g=1,m=!1,y,P;const x=()=>{P=new Promise(B=>{y=B})};x();let p;const v=l9[i]||bu;let C;v!==bu&&typeof r[0]!="number"&&(C=Jm([0,100],r,{clamp:!1}),r=[0,100]);const b=v({...h,keyframes:r});let E;l==="mirror"&&(E=v({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let j="idle",S=null,_=null,M=null;b.calculatedDuration===null&&s&&(b.calculatedDuration=sx(b));const{calculatedDuration:T}=b;let R=1/0,O=1/0;T!==null&&(R=T+o,O=R*(s+1)-o);let k=0;const N=B=>{if(_===null)return;g>0&&(_=Math.min(_,B)),g<0&&(_=Math.min(B-O/g,_)),S!==null?k=S:k=Math.round(B-_)*g;const Q=k-t*(g>=0?1:-1),xe=g>=0?Q<0:Q>O;k=Math.max(Q,0),j==="finished"&&S===null&&(k=O);let de=k,pe=b;if(s){const X=k/R;let ee=Math.floor(X),re=X%1;!re&&X>=1&&(re=1),re===1&&ee--,ee=Math.min(ee,s+1);const se=!!(ee%2);se&&(l==="reverse"?(re=1-re,o&&(re-=o/R)):l==="mirror"&&(pe=E));let Te=yi(0,1,re);k>O&&(Te=l==="reverse"&&se?1:0),de=Te*R}const ge=xe?{done:!1,value:r[0]}:pe.next(de);C&&(ge.value=C(ge.value));let{done:we}=ge;!xe&&T!==null&&(we=g>=0?k>=O:k<=0);const q=S===null&&(j==="finished"||j==="running"&&we);return f&&f(ge.value),q&&L(),ge},A=()=>{p&&p.stop(),p=void 0},D=()=>{j="idle",A(),y(),x(),_=M=null},L=()=>{j="finished",d&&d(),A(),y()},$=()=>{if(m)return;p||(p=n(N));const B=p.now();c&&c(),S!==null?_=B-S:(!_||j==="finished")&&(_=B),j==="finished"&&x(),M=_,S=null,j="running",p.start()};e&&$();const V={then(B,Q){return P.then(B,Q)},get time(){return Er(k)},set time(B){B=fi(B),k=B,S!==null||!p||g===0?S=B:_=p.now()-B/g},get duration(){const B=b.calculatedDuration===null?sx(b):b.calculatedDuration;return Er(B)},get speed(){return g},set speed(B){B===g||!p||(g=B,V.time=Er(k))},get state(){return j},play:$,pause:()=>{j="paused",S=k},stop:()=>{m=!0,j!=="idle"&&(j="idle",u&&u(),D())},cancel:()=>{M!==null&&N(M),D()},complete:()=>{j="finished"},sample:B=>(_=0,N(B))};return V}function c9(e){let t;return()=>(t===void 0&&(t=e()),t)}const u9=c9(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),d9=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ql=10,f9=2e4,h9=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Y3(t.ease);function p9(e,t,{onUpdate:n,onComplete:r,...i}){if(!(u9()&&d9.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,l,c;const u=()=>{c=new Promise(p=>{l=p})};u();let{keyframes:d,duration:f=300,ease:h,times:g}=i;if(h9(t,i)){const p=Su({...i,repeat:0,delay:0});let v={done:!1,value:d[0]};const C=[];let b=0;for(;!v.done&&b<f9;)v=p.sample(b),C.push(v.value),b+=ql;g=void 0,d=C,f=b-ql,h="linear"}const m=kR(e.owner.current,t,d,{...i,duration:f,ease:h,times:g});i.syncStart&&(m.startTime=at.isProcessing?at.timestamp:document.timeline?document.timeline.currentTime:performance.now());const y=()=>m.cancel(),P=()=>{Me.update(y),l(),u()};return m.onfinish=()=>{e.set(jR(d,i)),r&&r(),P()},{then(p,v){return c.then(p,v)},attachTimeline(p){return m.timeline=p,m.onfinish=null,Ge},get time(){return Er(m.currentTime||0)},set time(p){m.currentTime=fi(p)},get speed(){return m.playbackRate},set speed(p){m.playbackRate=p},get duration(){return Er(f)},play:()=>{o||(m.play(),lr(y))},pause:()=>m.pause(),stop:()=>{if(o=!0,m.playState==="idle")return;const{currentTime:p}=m;if(p){const v=Su({...i,autoplay:!1});e.setWithVelocity(v.sample(p-ql).value,v.sample(p).value,ql)}P()},complete:()=>m.finish(),cancel:P}}function m9({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Ge,pause:Ge,stop:Ge,then:s=>(s(),Promise.resolve()),cancel:Ge,complete:Ge});return t?Su({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const g9={type:"spring",stiffness:500,damping:25,restSpeed:10},y9=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),v9={type:"keyframes",duration:.8},x9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w9=(e,{keyframes:t})=>t.length>2?v9:ls.has(e)?e.startsWith("scale")?y9(t[1]):g9:x9,Hp=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(vi.test(t)||t==="0")&&!t.startsWith("url(")),b9=new Set(["brightness","contrast","saturate","opacity"]);function S9(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(yd)||[];if(!r)return e;const i=n.replace(r,"");let s=b9.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const C9=/([a-z-]*)\(.*?\)/g,Wp={...vi,getAnimatableNone:e=>{const t=e.match(C9);return t?t.map(S9).join(" "):e}},k9={...N3,color:Nt,backgroundColor:Nt,outlineColor:Nt,fill:Nt,stroke:Nt,borderColor:Nt,borderTopColor:Nt,borderRightColor:Nt,borderBottomColor:Nt,borderLeftColor:Nt,filter:Wp,WebkitFilter:Wp},e1=e=>k9[e];function xS(e,t){let n=e1(e);return n!==Wp&&(n=vi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const wS=e=>/^0[^.\s]+$/.test(e);function j9(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||wS(e)}function P9(e,t,n,r){const i=Hp(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:e.get();let l;const c=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),j9(s[u])&&c.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(l=s[u]);if(i&&c.length&&l)for(let u=0;u<c.length;u++){const d=c[u];s[d]=xS(t,l)}return s}function E9({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}function bS(e,t){return e[t]||e.default||e}const t1=(e,t,n,r={})=>i=>{const s=bS(r,e)||{},o=s.delay||r.delay||0;let{elapsed:l=0}=r;l=l-fi(o);const c=P9(t,e,n,s),u=c[0],d=c[c.length-1],f=Hp(e,u),h=Hp(e,d);let g={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-l,onUpdate:m=>{t.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(E9(s)||(g={...g,...w9(e,g)}),g.duration&&(g.duration=fi(g.duration)),g.repeatDelay&&(g.repeatDelay=fi(g.repeatDelay)),!f||!h||CR.current||s.type===!1)return m9(g);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=p9(t,e,g);if(m)return m}return Su(g)};function Cu(e){return!!(Zt(e)&&e.add)}const SS=e=>/^\-?\d*\.?\d+$/.test(e);function n1(e,t){e.indexOf(t)===-1&&e.push(t)}function r1(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class i1{constructor(){this.subscriptions=[]}add(t){return n1(this.subscriptions,t),()=>r1(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const R9=e=>!isNaN(parseFloat(e)),va={current:void 0};class M9{constructor(t,n={}){this.version="10.16.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=at;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Me.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Me.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=R9(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new i1);const r=this.events[t].add(n);return t==="change"?()=>{r(),Me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return va.current&&va.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?gS(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ts(e,t){return new M9(e,t)}const CS=e=>t=>t.test(e),T9={test:e=>e==="auto",parse:e=>e},kS=[cs,te,or,qr,LE,AE,T9],Lo=e=>kS.find(CS(e)),_9=[...kS,Nt,vi],O9=e=>_9.find(CS(e));function z9(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ts(n))}function s1(e,t){const n=xd(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const l=YE(s[o]);z9(e,o,l)}}function Up(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&s1(e,i),e.variantChildren&&e.variantChildren.forEach(s=>{Up(s,t)})})}function N9(e,t){if(Array.isArray(t))return Up(e,t);if(typeof t=="string")return Up(e,[t]);s1(e,t)}function A9(e,t,n){var r,i;const s=Object.keys(t).filter(l=>!e.hasValue(l)),o=s.length;if(o)for(let l=0;l<o;l++){const c=s[l],u=t[c];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[c])!==null&&r!==void 0?r:e.readValue(c))!==null&&i!==void 0?i:t[c]),d!=null&&(typeof d=="string"&&(SS(d)||wS(d))?d=parseFloat(d):!O9(d)&&vi.test(u)&&(d=xS(c,u)),e.addValue(c,ts(d,{owner:e})),n[c]===void 0&&(n[c]=d),d!==null&&e.setBaseTarget(c,d))}}function L9(e,t){return t?(t[e]||t.default||t).from:void 0}function I9(e,t,n){const r={};for(const i in e){const s=L9(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function $9({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function jS(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(s=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const h=e.getValue(f),g=l[f];if(!h||g===void 0||d&&$9(d,f))continue;const m={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!h.hasAnimated){const P=e.getProps()[bR];P&&(m.elapsed=window.HandoffAppearAnimations(P,f,h,Me),m.syncStart=!0)}h.start(t1(f,h,g,e.shouldReduceMotion&&ls.has(f)?{type:!1}:m));const y=h.animation;Cu(c)&&(c.add(f),y.then(()=>c.remove(f))),u.push(y)}return o&&Promise.all(u).then(()=>{o&&s1(e,o)}),u}function qp(e,t,n={}){const r=xd(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(jS(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return D9(e,t,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,u]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function D9(e,t,n=0,r=0,i=1,s){const o=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(B9).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(qp(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function B9(e,t){return e.sortNodePosition(t)}function PS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>qp(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=qp(e,t,n);else{const i=typeof t=="function"?xd(e,t,n.custom):t;r=Promise.all(jS(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const F9=[...$m].reverse(),V9=$m.length;function H9(e){return t=>Promise.all(t.map(({animation:n,options:r})=>PS(e,n,r)))}function W9(e){let t=H9(e);const n=q9();let r=!0;const i=(c,u)=>{const d=xd(e,u);if(d){const{transition:f,transitionEnd:h,...g}=d;c={...c,...g,...h}}return c};function s(c){t=c(e)}function o(c,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],g=new Set;let m={},y=1/0;for(let x=0;x<V9;x++){const p=F9[x],v=n[p],C=d[p]!==void 0?d[p]:f[p],b=qa(C),E=p===u?v.isActive:null;E===!1&&(y=x);let j=C===f[p]&&C!==d[p]&&b;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),v.protectedKeys={...m},!v.isActive&&E===null||!C&&!v.prevProp||md(C)||typeof C=="boolean")continue;const S=U9(v.prevProp,C);let _=S||p===u&&v.isActive&&!j&&b||x>y&&b;const M=Array.isArray(C)?C:[C];let T=M.reduce(i,{});E===!1&&(T={});const{prevResolvedValues:R={}}=v,O={...R,...T},k=N=>{_=!0,g.delete(N),v.needsAnimating[N]=!0};for(const N in O){const A=T[N],D=R[N];m.hasOwnProperty(N)||(A!==D?xu(A)&&xu(D)?!K3(A,D)||S?k(N):v.protectedKeys[N]=!0:A!==void 0?k(N):g.add(N):A!==void 0&&g.has(N)?k(N):v.protectedKeys[N]=!0)}v.prevProp=C,v.prevResolvedValues=T,v.isActive&&(m={...m,...T}),r&&e.blockInitialAnimation&&(_=!1),_&&!j&&h.push(...M.map(N=>({animation:N,options:{type:p,...c}})))}if(g.size){const x={};g.forEach(p=>{const v=e.getBaseTarget(p);v!==void 0&&(x[p]=v)}),h.push({animation:x})}let P=!!h.length;return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(P=!1),r=!1,P?t(h):Promise.resolve()}function l(c,u,d){var f;if(n[c].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var m;return(m=g.animationState)===null||m===void 0?void 0:m.setActive(c,u)}),n[c].isActive=u;const h=o(d,c);for(const g in n)n[g].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n}}function U9(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K3(t,e):!1}function Pi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function q9(){return{animate:Pi(!0),whileInView:Pi(),whileHover:Pi(),whileTap:Pi(),whileDrag:Pi(),whileFocus:Pi(),exit:Pi()}}class G9 extends Si{constructor(t){super(t),t.animationState||(t.animationState=W9(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),md(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let K9=0;class Z9 extends Si{constructor(){super(...arguments),this.id=K9++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Y9={animation:{Feature:G9},exit:{Feature:Z9}},ox=(e,t)=>Math.abs(e-t);function X9(e,t){const n=ox(e.x,t.x),r=ox(e.y,t.y);return Math.sqrt(n**2+r**2)}class ES{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=rh(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,f=X9(u.offset,{x:0,y:0})>=3;if(!d&&!f)return;const{point:h}=u,{timestamp:g}=at;this.history.push({...h,timestamp:g});const{onStart:m,onMove:y}=this.handlers;d||(m&&m(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,d)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=nh(d,this.transformPagePoint),Me.update(this.updatePoint,!0)},this.handlePointerUp=(u,d)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:f,onSessionEnd:h}=this.handlers,g=rh(u.type==="pointercancel"?this.lastMoveEventInfo:nh(d,this.transformPagePoint),this.history);this.startEvent&&f&&f(u,g),h&&h(u,g)},!H3(t))return;this.handlers=n,this.transformPagePoint=r;const i=vd(t),s=nh(i,this.transformPagePoint),{point:o}=s,{timestamp:l}=at;this.history=[{...o,timestamp:l}];const{onSessionStart:c}=n;c&&c(t,rh(s,this.history)),this.removeListeners=di(Pr(window,"pointermove",this.handlePointerMove),Pr(window,"pointerup",this.handlePointerUp),Pr(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),lr(this.updatePoint)}}function nh(e,t){return t?{point:t(e.point)}:e}function ax(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rh({point:e},t){return{point:e,delta:ax(e,RS(t)),offset:ax(e,Q9(t)),velocity:J9(t,.1)}}function Q9(e){return e[0]}function RS(e){return e[e.length-1]}function J9(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=RS(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>fi(t)));)n--;if(!r)return{x:0,y:0};const s=Er(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function un(e){return e.max-e.min}function Gp(e,t=0,n=.01){return Math.abs(e-t)<=n}function lx(e,t,n,r=.5){e.origin=r,e.originPoint=Fe(t.min,t.max,e.origin),e.scale=un(n)/un(t),(Gp(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Fe(n.min,n.max,e.origin)-e.originPoint,(Gp(e.translate)||isNaN(e.translate))&&(e.translate=0)}function xa(e,t,n,r){lx(e.x,t.x,n.x,r?r.originX:void 0),lx(e.y,t.y,n.y,r?r.originY:void 0)}function cx(e,t,n){e.min=n.min+t.min,e.max=e.min+un(t)}function eM(e,t,n){cx(e.x,t.x,n.x),cx(e.y,t.y,n.y)}function ux(e,t,n){e.min=t.min-n.min,e.max=e.min+un(t)}function wa(e,t,n){ux(e.x,t.x,n.x),ux(e.y,t.y,n.y)}function tM(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Fe(n,e,r.max):Math.min(e,n)),e}function dx(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nM(e,{top:t,left:n,bottom:r,right:i}){return{x:dx(e.x,n,i),y:dx(e.y,t,r)}}function fx(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function rM(e,t){return{x:fx(e.x,t.x),y:fx(e.y,t.y)}}function iM(e,t){let n=.5;const r=un(e),i=un(t);return i>r?n=Ka(t.min,t.max-r,e.min):r>i&&(n=Ka(e.min,e.max-i,t.min)),yi(0,1,n)}function sM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Kp=.35;function oM(e=Kp){return e===!1?e=0:e===!0&&(e=Kp),{x:hx(e,"left","right"),y:hx(e,"top","bottom")}}function hx(e,t,n){return{min:px(e,t),max:px(e,n)}}function px(e,t){return typeof e=="number"?e:e[t]||0}const mx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Bs=()=>({x:mx(),y:mx()}),gx=()=>({min:0,max:0}),Je=()=>({x:gx(),y:gx()});function Kn(e){return[e("x"),e("y")]}function MS({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function aM({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function lM(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ih(e){return e===void 0||e===1}function Zp({scale:e,scaleX:t,scaleY:n}){return!ih(e)||!ih(t)||!ih(n)}function Ni(e){return Zp(e)||TS(e)||e.z||e.rotate||e.rotateX||e.rotateY}function TS(e){return yx(e.x)||yx(e.y)}function yx(e){return e&&e!=="0%"}function ku(e,t,n){const r=e-n,i=t*r;return n+i}function vx(e,t,n,r,i){return i!==void 0&&(e=ku(e,i,r)),ku(e,n,r)+t}function Yp(e,t=0,n=1,r,i){e.min=vx(e.min,t,n,r,i),e.max=vx(e.max,t,n,r,i)}function _S(e,{x:t,y:n}){Yp(e.x,t.translate,t.scale,t.originPoint),Yp(e.y,n.translate,n.scale,n.originPoint)}function cM(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const c=s.instance;c&&c.style&&c.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,_S(e,o)),r&&Ni(s.latestValues)&&Fs(e,s.latestValues))}t.x=xx(t.x),t.y=xx(t.y)}function xx(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Zr(e,t){e.min=e.min+t,e.max=e.max+t}function wx(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=Fe(e.min,e.max,s);Yp(e,t[n],t[r],o,t.scale)}const uM=["x","scaleX","originX"],dM=["y","scaleY","originY"];function Fs(e,t){wx(e.x,t,uM),wx(e.y,t,dM)}function OS(e,t){return MS(lM(e.getBoundingClientRect(),t))}function fM(e,t,n){const r=OS(e,n),{scroll:i}=t;return i&&(Zr(r.x,i.offset.x),Zr(r.y,i.offset.y)),r}const hM=new WeakMap;class pM{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Je(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{this.stopAnimation(),n&&this.snapToCursor(vd(c,"page").point)},s=(c,u)=>{const{drag:d,dragPropagation:f,onDragStart:h}=this.getProps();if(d&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=U3(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kn(m=>{let y=this.getAxisMotionValue(m).get()||0;if(or.test(y)){const{projection:P}=this.visualElement;if(P&&P.layout){const x=P.layout.layoutBox[m];x&&(y=un(x)*(parseFloat(y)/100))}}this.originPoint[m]=y}),h&&Me.update(()=>h(c,u),!1,!0);const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(c,u)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:h,onDrag:g}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:m}=u;if(f&&this.currentDirection===null){this.currentDirection=mM(m),this.currentDirection!==null&&h&&h(this.currentDirection);return}this.updateAxis("x",u.point,m),this.updateAxis("y",u.point,m),this.visualElement.render(),g&&g(c,u)},l=(c,u)=>this.stop(c,u);this.panSession=new ES(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:l},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Me.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Gl(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=tM(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&$s(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=nM(r.layoutBox,t):this.constraints=!1,this.elastic=oM(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Kn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=sM(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!$s(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=fM(r,i.root,this.visualElement.getTransformPagePoint());let o=rM(i.layout.layoutBox,s);if(n){const l=n(aM(o));this.hasMutatedConstraints=!!l,l&&(o=MS(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Kn(d=>{if(!Gl(d,n,this.currentDirection))return;let f=c&&c[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,g=i?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(t1(t,r,0,n))}stopAnimation(){Kn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Kn(n=>{const{drag:r}=this.getProps();if(!Gl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];s.set(t[n]-Fe(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!$s(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Kn(o=>{const l=this.getAxisMotionValue(o);if(l){const c=l.get();i[o]=iM({min:c,max:c},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Kn(o=>{if(!Gl(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];l.set(Fe(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;hM.set(this.visualElement,this);const t=this.visualElement.current,n=Pr(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();$s(c)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=kr(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Kn(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Kp,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function Gl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function mM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class gM extends Si{constructor(t){super(t),this.removeGroupControls=Ge,this.removeListeners=Ge,this.controls=new pM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ge}unmount(){this.removeGroupControls(),this.removeListeners()}}const bx=e=>(t,n)=>{e&&Me.update(()=>e(t,n))};class yM extends Si{constructor(){super(...arguments),this.removePointerDownListener=Ge}onPointerDown(t){this.session=new ES(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:bx(t),onStart:bx(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Me.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=Pr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function vM(){const e=w.useContext(hd);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=w.useId();return w.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const Rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sx(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Io={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(te.test(e))e=parseFloat(e);else return e;const n=Sx(e,t.target.x),r=Sx(e,t.target.y);return`${n}% ${r}%`}},xM={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=vi.parse(e);if(i.length>5)return r;const s=vi.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const u=Fe(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class wM extends I.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;RE(bM),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Me.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function zS(e){const[t,n]=vM(),r=w.useContext(Bm);return I.createElement(wM,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(M3),isPresent:t,safeToRemove:n})}const bM={borderRadius:{...Io,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Io,borderTopRightRadius:Io,borderBottomLeftRadius:Io,borderBottomRightRadius:Io,boxShadow:xM},NS=["TopLeft","TopRight","BottomLeft","BottomRight"],SM=NS.length,Cx=e=>typeof e=="string"?parseFloat(e):e,kx=e=>typeof e=="number"||te.test(e);function CM(e,t,n,r,i,s){i?(e.opacity=Fe(0,n.opacity!==void 0?n.opacity:1,kM(r)),e.opacityExit=Fe(t.opacity!==void 0?t.opacity:1,0,jM(r))):s&&(e.opacity=Fe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<SM;o++){const l=`border${NS[o]}Radius`;let c=jx(t,l),u=jx(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||kx(c)===kx(u)?(e[l]=Math.max(Fe(Cx(c),Cx(u),r),0),(or.test(u)||or.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=Fe(t.rotate||0,n.rotate||0,r))}function jx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const kM=AS(0,.5,Ym),jM=AS(.5,.95,Ge);function AS(e,t,n){return r=>r<e?0:r>t?1:n(Ka(e,t,r))}function Px(e,t){e.min=t.min,e.max=t.max}function vn(e,t){Px(e.x,t.x),Px(e.y,t.y)}function Ex(e,t,n,r,i){return e-=t,e=ku(e,1/n,r),i!==void 0&&(e=ku(e,1/i,r)),e}function PM(e,t=0,n=1,r=.5,i,s=e,o=e){if(or.test(t)&&(t=parseFloat(t),t=Fe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=Fe(s.min,s.max,r);e===s&&(l-=t),e.min=Ex(e.min,t,n,l,i),e.max=Ex(e.max,t,n,l,i)}function Rx(e,t,[n,r,i],s,o){PM(e,t[n],t[r],t[i],t.scale,s,o)}const EM=["x","scaleX","originX"],RM=["y","scaleY","originY"];function Mx(e,t,n,r){Rx(e.x,t,EM,n?n.x:void 0,r?r.x:void 0),Rx(e.y,t,RM,n?n.y:void 0,r?r.y:void 0)}function Tx(e){return e.translate===0&&e.scale===1}function LS(e){return Tx(e.x)&&Tx(e.y)}function MM(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function IS(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function _x(e){return un(e.x)/un(e.y)}class TM{constructor(){this.members=[]}add(t){n1(this.members,t),t.scheduleRender()}remove(t){if(r1(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ox(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:u,rotateY:d}=n;c&&(r+=`rotate(${c}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const _M=(e,t)=>e.depth-t.depth;class OM{constructor(){this.children=[],this.isDirty=!1}add(t){n1(this.children,t),this.isDirty=!0}remove(t){r1(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_M),this.isDirty=!1,this.children.forEach(t)}}function zM(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(lr(r),e(s-t))};return Me.read(r,!0),()=>lr(r)}function NM(e){window.MotionDebug&&window.MotionDebug.record(e)}function AM(e){return e instanceof SVGElement&&e.tagName!=="svg"}function LM(e,t,n){const r=Zt(e)?e:ts(e);return r.start(t1("",r,t,n)),r.animation}const zx=["","X","Y","Z"],Nx=1e3;let IM=0;const Ai={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function $S({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=IM++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{Ai.totalNodes=Ai.resolvedTargetDeltas=Ai.recalculatedProjection=0,this.nodes.forEach(BM),this.nodes.forEach(UM),this.nodes.forEach(qM),this.nodes.forEach(FM),NM(Ai)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new OM)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new i1),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=AM(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=zM(h,250),Rc.hasAnimatedSinceResize&&(Rc.hasAnimatedSinceResize=!1,this.nodes.forEach(Lx))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||XM,{onLayoutAnimationStart:P,onLayoutAnimationComplete:x}=d.getProps(),p=!this.targetLayout||!IS(this.targetLayout,m)||g,v=!h&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const C={...bS(y,"layout"),onPlay:P,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else h||Lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,lr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GM),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ax);return}this.isUpdating||this.nodes.forEach(HM),this.isUpdating=!1,this.nodes.forEach(WM),this.nodes.forEach($M),this.nodes.forEach(DM),this.clearAllSnapshots();const l=performance.now();at.delta=yi(0,1e3/60,l-at.timestamp),at.timestamp=l,at.isProcessing=!0,Kf.update.process(at),Kf.preRender.process(at),Kf.render.process(at),at.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(VM),this.sharedNodes.forEach(KM)}scheduleUpdateProjection(){Me.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!LS(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(l||Ni(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),QM(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Je();const l=o.measureViewportBox(),{scroll:c}=this.root;return c&&(Zr(l.x,c.offset.x),Zr(l.y,c.offset.y)),l}removeElementScroll(o){const l=Je();vn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){vn(l,o);const{scroll:h}=this.root;h&&(Zr(l.x,-h.offset.x),Zr(l.y,-h.offset.y))}Zr(l.x,d.offset.x),Zr(l.y,d.offset.y)}}return l}applyTransform(o,l=!1){const c=Je();vn(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Fs(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ni(d.latestValues)&&Fs(c,d.latestValues)}return Ni(this.latestValues)&&Fs(c,this.latestValues),c}removeTransform(o){const l=Je();vn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Ni(u.latestValues))continue;Zp(u.latestValues)&&u.updateSnapshot();const d=Je(),f=u.measurePageBox();vn(d,f),Mx(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Ni(this.latestValues)&&Mx(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==at.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=at.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),wa(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Je(),this.targetWithTransforms=Je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vn(this.target,this.layout.layoutBox),_S(this.target,this.targetDelta)):vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),wa(this.relativeTargetOrigin,this.target,g.target),vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ai.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zp(this.parent.latestValues)||TS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===at.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;vn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,g=this.treeScale.y;cM(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:m}=l;if(!m){this.projectionTransform&&(this.projectionDelta=Bs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Bs(),this.projectionDeltaWithTransform=Bs());const y=this.projectionTransform;xa(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Ox(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==h||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Ai.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Bs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Je(),g=c?c.source:void 0,m=this.layout?this.layout.source:void 0,y=g!==m,P=this.getStack(),x=!P||P.members.length<=1,p=!!(y&&!x&&this.options.crossfade===!0&&!this.path.some(YM));this.animationProgress=0;let v;this.mixTargetDelta=C=>{const b=C/1e3;Ix(f.x,o.x,b),Ix(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZM(this.relativeTarget,this.relativeTargetOrigin,h,b),v&&MM(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Je()),vn(v,this.relativeTarget)),y&&(this.animationValues=d,CM(d,u,this.latestValues,b,p,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(lr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Me.update(()=>{Rc.hasAnimatedSinceResize=!0,this.currentAnimation=LM(0,Nx,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=o;if(!(!l||!c||!u)){if(this!==o&&this.layout&&u&&DS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Je();const f=un(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+f;const h=un(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+h}vn(l,c),Fs(l,d),xa(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new TM),this.sharedNodes.get(o).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const u={};for(let d=0;d<zx.length;d++){const f="rotate"+zx[d];c[f]&&(u[f]=c[f],o.setStaticValue(f,0))}o.render();for(const d in u)o.setStaticValue(d,u[d]);o.scheduleRender()}getProjectionStyles(o={}){var l,c;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ec(o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ec(o.pointerEvents)||""),this.hasProjected&&!Ni(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Ox(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:g,y:m}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in yu){if(h[y]===void 0)continue;const{correct:P,applyTo:x}=yu[y],p=u.transform==="none"?h[y]:P(h[y],f);if(x){const v=x.length;for(let C=0;C<v;C++)u[x[C]]=p}else u[y]=p}return this.options.layoutId&&(u.pointerEvents=f===this?Ec(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Ax),this.root.sharedNodes.clear()}}}function $M(e){e.updateLayout()}function DM(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Kn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=un(h);h.min=r[f].min,h.max=h.min+g}):DS(s,n.layoutBox,r)&&Kn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=un(r[f]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const l=Bs();xa(l,r,n.layoutBox);const c=Bs();o?xa(c,e.applyTransform(i,!0),n.measuredBox):xa(c,r,n.layoutBox);const u=!LS(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:g}=f;if(h&&g){const m=Je();wa(m,n.layoutBox,h.layoutBox);const y=Je();wa(y,r,g.layoutBox),IS(m,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=m,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function BM(e){Ai.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function FM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function VM(e){e.clearSnapshot()}function Ax(e){e.clearMeasurements()}function HM(e){e.isLayoutDirty=!1}function WM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Lx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function UM(e){e.resolveTargetDelta()}function qM(e){e.calcProjection()}function GM(e){e.resetRotation()}function KM(e){e.removeLeadSnapshot()}function Ix(e,t,n){e.translate=Fe(t.translate,0,n),e.scale=Fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function $x(e,t,n,r){e.min=Fe(t.min,n.min,r),e.max=Fe(t.max,n.max,r)}function ZM(e,t,n,r){$x(e.x,t.x,n.x,r),$x(e.y,t.y,n.y,r)}function YM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const XM={duration:.45,ease:[.4,0,.1,1]},Dx=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Bx=Dx("applewebkit/")&&!Dx("chrome/")?Math.round:Ge;function Fx(e){e.min=Bx(e.min),e.max=Bx(e.max)}function QM(e){Fx(e.x),Fx(e.y)}function DS(e,t,n){return e==="position"||e==="preserve-aspect"&&!Gp(_x(t),_x(n),.2)}const JM=$S({attachResizeListener:(e,t)=>kr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sh={current:void 0},BS=$S({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!sh.current){const e=new JM({});e.mount(window),e.setOptions({layoutScroll:!0}),sh.current=e}return sh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),eT={pan:{Feature:yM},drag:{Feature:gM,ProjectionNode:BS,MeasureLayout:zS}},tT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function nT(e){const t=tT.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Xp(e,t,n=1){const[r,i]=nT(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return SS(o)?parseFloat(o):o}else return Dp(i)?Xp(i,t,n+1):i}function rT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!Dp(s))return;const o=Xp(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!Dp(s))continue;const o=Xp(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const iT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),FS=e=>iT.has(e),sT=e=>Object.keys(e).some(FS),Vx=e=>e===cs||e===te,Hx=(e,t)=>parseFloat(e.split(", ")[t]),Wx=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Hx(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Hx(s[1],e):0}},oT=new Set(["x","y","z"]),aT=al.filter(e=>!oT.has(e));function lT(e){const t=[];return aT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ho={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Wx(4,13),y:Wx(5,14)};ho.translateX=ho.x;ho.translateY=ho.y;const cT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,l={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{l[u]=ho[u](r,s)}),t.render();const c=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(l[u]),e[u]=ho[u](c,s)}),e},uT=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(FS);let s=[],o=!1;const l=[];if(i.forEach(c=>{const u=e.getValue(c);if(!e.hasValue(c))return;let d=n[c],f=Lo(d);const h=t[c];let g;if(xu(h)){const m=h.length,y=h[0]===null?1:0;d=h[y],f=Lo(d);for(let P=y;P<m&&h[P]!==null;P++)g?Zm(Lo(h[P])===g):g=Lo(h[P])}else g=Lo(h);if(f!==g)if(Vx(f)&&Vx(g)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof h=="string"?t[c]=parseFloat(h):Array.isArray(h)&&g===te&&(t[c]=h.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||h===0)?d===0?u.set(g.transform(d)):t[c]=f.transform(h):(o||(s=lT(e),o=!0),l.push(c),r[c]=r[c]!==void 0?r[c]:t[c],u.jump(h))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,u=cT(t,e,l);return s.length&&s.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),pd&&c!==null&&window.scrollTo({top:c}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function dT(e,t,n,r){return sT(t)?uT(e,t,n,r):{target:t,transitionEnd:r}}const fT=(e,t,n,r)=>{const i=rT(e,t,r);return t=i.target,r=i.transitionEnd,dT(e,t,n,r)},Qp={current:null},VS={current:!1};function hT(){if(VS.current=!0,!!pd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Qp.current=e.matches;e.addListener(t),t()}else Qp.current=!1}function pT(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(Zt(s))e.addValue(i,s),Cu(r)&&r.add(i);else if(Zt(o))e.addValue(i,ts(s,{owner:e})),Cu(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const l=e.getValue(i);!l.hasAnimated&&l.set(s)}else{const l=e.getStaticValue(i);e.addValue(i,ts(l!==void 0?l:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Ux=new WeakMap,HS=Object.keys(Ga),mT=HS.length,qx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],gT=Dm.length;class yT{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Me.render(this.render,!1,!0);const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=gd(n),this.isVariantNode=R3(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];l[f]!==void 0&&Zt(h)&&(h.set(l[f],!1),Cu(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ux.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),VS.current||hT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ux.delete(this.current),this.projection&&this.projection.unmount(),lr(this.notifyUpdate),lr(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=ls.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Me.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s){let o,l;for(let c=0;c<mT;c++){const u=HS[c],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:g}=Ga[u];h&&(o=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),g&&(l=g))}if(!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:g}=n;this.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||f&&$s(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:g})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Je()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<qx.length;r++){const i=qx[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=pT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<gT;r++){const i=Dm[r],s=this.props[i];(qa(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ts(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Km(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Zt(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new i1),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class WS extends yT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=I9(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){A9(this,r,o);const l=fT(this,r,o,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function vT(e){return window.getComputedStyle(e)}class xT extends WS{readValueFromInstance(t,n){if(ls.has(n)){const r=e1(n);return r&&r.default||0}else{const r=vT(t),i=(O3(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return OS(t,n)}build(t,n,r,i){Vm(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Gm(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Zt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){$3(t,n,r,i)}}class wT extends WS{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ls.has(n)){const r=e1(n);return r&&r.default||0}return n=D3.has(n)?n:qm(n),t.getAttribute(n)}measureInstanceViewportBox(){return Je()}scrapeMotionValuesFromProps(t,n){return F3(t,n)}build(t,n,r,i){Wm(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){B3(t,n,r,i)}mount(t){this.isSVGTag=Um(t.tagName),super.mount(t)}}const bT=(e,t)=>Fm(e)?new wT(t,{enableHardwareAcceleration:!1}):new xT(t,{enableHardwareAcceleration:!0}),ST={layout:{ProjectionNode:BS,MeasureLayout:zS}},CT={...Y9,...yR,...eT,...ST},H=PE((e,t)=>iR(e,t,CT,bT));function US(){const e=w.useRef(!1);return ol(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function kT(){const e=US(),[t,n]=w.useState(0),r=w.useCallback(()=>{e.current&&n(t+1)},[t]);return[w.useCallback(()=>Me.postRender(r),[r]),t]}class jT extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PT({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0});return w.useInsertionEffect(()=>{const{width:s,height:o,top:l,left:c}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),w.createElement(jT,{isPresent:t,childRef:r,sizeRef:i},w.cloneElement(e,{ref:r}))}const oh=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=Co(ET),c=w.useId(),u=w.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:d=>{l.set(d,!0);for(const f of l.values())if(!f)return;r&&r()},register:d=>(l.set(d,!1),()=>l.delete(d))}),s?void 0:[n]);return w.useMemo(()=>{l.forEach((d,f)=>l.set(f,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(e=w.createElement(PT,{isPresent:n},e)),w.createElement(hd.Provider,{value:u},e)};function ET(){return new Map}function RT(e){return w.useEffect(()=>()=>e(),[])}const Cs=e=>e.key||"";function MT(e,t){e.forEach(n=>{const r=Cs(n);t.set(r,n)})}function TT(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const cr=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=w.useContext(Bm).forceRender||kT()[0],c=US(),u=TT(e);let d=u;const f=w.useRef(new Map).current,h=w.useRef(d),g=w.useRef(new Map).current,m=w.useRef(!0);if(ol(()=>{m.current=!1,MT(u,g),h.current=d}),RT(()=>{m.current=!0,g.clear(),f.clear()}),m.current)return w.createElement(w.Fragment,null,d.map(p=>w.createElement(oh,{key:Cs(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},p)));d=[...d];const y=h.current.map(Cs),P=u.map(Cs),x=y.length;for(let p=0;p<x;p++){const v=y[p];P.indexOf(v)===-1&&!f.has(v)&&f.set(v,void 0)}return o==="wait"&&f.size&&(d=[]),f.forEach((p,v)=>{if(P.indexOf(v)!==-1)return;const C=g.get(v);if(!C)return;const b=y.indexOf(v);let E=p;if(!E){const j=()=>{g.delete(v),f.delete(v);const S=h.current.findIndex(_=>_.key===v);if(h.current.splice(S,1),!f.size){if(h.current=u,c.current===!1)return;l(),r&&r()}};E=w.createElement(oh,{key:Cs(C),isPresent:!1,onExitComplete:j,custom:t,presenceAffectsLayout:s,mode:o},C),f.set(v,E)}d.splice(b,0,E)}),d=d.map(p=>{const v=p.key;return f.has(v)?p:w.createElement(oh,{key:Cs(p),isPresent:!0,presenceAffectsLayout:s,mode:o},p)}),w.createElement(w.Fragment,null,f.size?d:d.map(p=>w.cloneElement(p)))};function po(e){const t=Co(()=>ts(e)),{isStatic:n}=w.useContext(Im);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}const _T=e=>typeof e=="object"&&e.mix,OT=e=>_T(e)?e.mix:void 0;function zT(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],o=e[3+n],l=Jm(i,s,{mixer:OT(s[0]),...o});return t?l(r):l}function qS(e,t){const n=po(t()),r=()=>n.set(t());return r(),ol(()=>{const i=()=>Me.update(r,!1,!0),s=e.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),lr(r)}}),n}function NT(e){va.current=[],e();const t=qS(va.current,e);return va.current=void 0,t}function ju(e,t,n,r){if(typeof e=="function")return NT(e);const i=typeof t=="function"?t:zT(t,n,r);return Array.isArray(e)?Gx(e,i):Gx([e],([s])=>i(s))}function Gx(e,t){const n=Co(()=>[]);return qS(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function AT(e){e.values.forEach(t=>t.stop())}function LT(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(s=>{i.push(PS(s,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{N9(r,n)})},stop(){e.forEach(n=>{AT(n)})},mount(){return()=>{t.stop()}}};return t}function IT(){const e=Co(LT);return ol(e.mount,[]),e}const GS=IT;class $T{constructor(){this.componentControls=new Set}subscribe(t){return this.componentControls.add(t),()=>this.componentControls.delete(t)}start(t,n){this.componentControls.forEach(r=>{r.start(t.nativeEvent||t,n)})}}const DT=()=>new $T;function KS(){return Co(DT)}const BT=W.div`
  height: 100%;
  width: 100%;
  padding: 4% 8%;

  display: flex;
  flex-direction: column;
  color: #202024;

  .nav {
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        font-size: 16px;
      }
      &:disabled {
        cursor: default;
        color: #a8a8b3;
      }
    }
    .next {
      font-size: 12px;
    }
  }

  .page1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    position: relative;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    .language {
      width: fit-content;
      display: flex;
      align-items: center;
      font-size: 10px;
      svg {
        font-size: 16px;
      }
    }
    .next {
      margin-top: 16px;
      padding: 8px;
      width: fit-content;
      display: flex;
      background-color: #008ded;
      border-radius: 50%;
      svg {
        font-size: 20px;
        color: #fff;
      }
    }
    .bottom {
      width: 100%;
      position: absolute;
      bottom: 10px;
      left: 0;
      font-size: 10px;
      text-align: center;
    }
  }

  .page2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    & > p {
      font-size: 8px;
      margin-bottom: 32px;
    }
    h4 {
      width: 85%;
      font-weight: 400;
      font-size: 12px;
    }
    ul {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      li > button {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 10px;
        svg {
          font-size: 16px;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          small {
            width: fit-content;
            font-weight: 500;
            font-size: 6px;
          }
        }
      }
    }
  }

  .page3 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    & > p {
      font-size: 10px;
    }
    .input {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      span {
        font-size: 8px;
        color: #ff0000;
      }
    }
    .password {
      border: none;
      background-color: #dddddd;
      padding: 8px 12px;
      font-size: 10px;
      border-radius: 4px;
    }
    .switchContainer {
      display: flex;
      align-items: center;
      gap: 4px;
      & > label.text {
        font-size: 10px;
        cursor: pointer;
      }
    }
    .switch {
      background-color: #e1e1e6;
      border: 1.6px solid #008ded;
      width: 28px;
      height: 16px;
      border-radius: 8px;
      position: relative;
      input {
        opacity: 0;
        width: 0;
        height: 0;
        &:checked + .slider {
          transform: translateX(12px);
        }
      }
      .slider {
        position: absolute;
        cursor: pointer;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        background-color: #008ded;
        transition: 0.4s;
      }
    }

    .conect {
      margin-top: 24px;
      width: 80px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #008ded;
      font-size: 12px;
      color: #e1e1e6;
      border-radius: 20px;
    }
  }

  .page4 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div:first-child {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    h1 {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }
    p {
      font-size: 10px;
      font-weight: 500;
      text-align: center;
    }
    .MuiCircularProgress-root {
      margin: auto;
      color: #5d5dfc;
    }
  }
`;var ZS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kx=I.createContext&&I.createContext(ZS),hi=globalThis&&globalThis.__assign||function(){return hi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hi.apply(this,arguments)},FT=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function YS(e){return e&&e.map(function(t,n){return I.createElement(t.tag,hi({key:n},t.attr),YS(t.child))})}function U(e){return function(t){return I.createElement(VT,hi({attr:hi({},e.attr)},t),YS(e.child))}}function VT(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=FT(e,["attr","size","title"]),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),I.createElement("svg",hi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:hi(hi({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&I.createElement("title",null,s),e.children)};return Kx!==void 0?I.createElement(Kx.Consumer,null,function(n){return t(n)}):t(ZS)}function XS(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function HT(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(e)}function WT(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M382.1 442.7L154.5 55c-4-6.7-12.7-9-19.5-5.1-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.7-4 9-12.6 5.1-19.4zM324.6 313.3l57.9-75.8c3.8-5.6.2-13.4-6.3-13.4h-104l52.4 89.2zM320.4 37.1c.9-4.5-4.6-7.1-7.2-3.4L227 146.9l42.4 72.3 51-182.1zM187.4 198.7l-57.9 75.8c-3.8 5.6-.2 13.4 6.3 13.4h103.9l-52.3-89.2zM191.6 474.9c-.9 4.5 4.6 7.1 7.2 3.4L285 365.1l-42.4-72.3-51 182.1z"}}]})(e)}function UT(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z"}},{tag:"path",attr:{d:"M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7zM256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z"}}]})(e)}function qT(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 192l128 128 128-128z"}}]})(e)}function GT(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"}}]})(e)}const KT=({setPage:e})=>a.jsxs(H.div,{initial:{x:0,scale:.6,opacity:.6},animate:{x:0,opacity:1,scale:1},exit:{x:-200,opacity:.2},transition:{ease:"easeIn",duration:.4},className:"page1",children:[a.jsx("h1",{children:"Vamos la!"}),a.jsxs("button",{className:"language",children:["Portugues (Brazil) ",a.jsx(qT,{})]}),a.jsx("button",{className:"next",onClick:()=>e(2),children:a.jsx(GT,{})}),a.jsx("div",{className:"bottom",children:a.jsx("p",{children:"Rocket Community"})})]}),ZT=({networks:e,handle:t,conectedNet:n})=>a.jsxs(H.div,{initial:{x:100,opacity:.2},animate:{x:0,opacity:1},exit:{x:-200,opacity:.2},transition:{ease:"easeInOut",duration:.4},className:"page2",children:[a.jsx("h1",{children:"Conectividade"}),a.jsx("p",{children:"Antes de começar a usar o seu novo Samsung Galaxy A50 Você precisa conectar a uma Rede Publica de WI-FI, Se você estiver em um lugar remoto ou sem sinal procure uma praça ou lugar publico que possua uma WI-FI grátis."}),a.jsx("h4",{children:"Clique para selecionar uma Rede:"}),a.jsx("ul",{children:e.length>0?e.map((r,i)=>a.jsx(YT,{data:r,conected:n===r.name,handle:t},i)):a.jsx("p",{children:"Nenhuma rede disponivel"})})]}),YT=({data:e,conected:t,handle:n})=>a.jsx("li",{children:a.jsxs("button",{onClick:()=>{n(e)},children:[a.jsx(UT,{}),a.jsxs("div",{children:[a.jsx("p",{children:e==null?void 0:e.name}),t&&a.jsx("small",{children:"Conectado"})]})]})}),XT={black:"#000",white:"#fff"},Za=XT,QT={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ms=QT,JT={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},gs=JT,e_={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ys=e_,t_={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},vs=t_,n_={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},xs=n_,r_={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},$o=r_,i_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},s_=i_;function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function br(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function QS(e){if(!br(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=QS(e[n])}),t}function on(e,t,n={clone:!0}){const r=n.clone?Y({},e):e;return br(e)&&br(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(br(t[i])&&i in e&&br(e[i])?r[i]=on(e[i],t[i],n):n.clone?r[i]=br(t[i])?QS(t[i]):t[i]:r[i]=t[i])}),r}var JS={exports:{}},o_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a_=o_,l_=a_;function eC(){}function tC(){}tC.resetWarningCache=eC;var c_=function(){function e(r,i,s,o,l,c){if(c!==l_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tC,resetWarningCache:eC};return n.PropTypes=n,n};JS.exports=c_();var dr=JS.exports;const z=Bu(dr);function mo(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function Xe(e){if(typeof e!="string")throw new Error(mo(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ah(e){return e&&e.ownerDocument||document}function u_(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const d_=typeof window<"u"?w.useLayoutEffect:w.useEffect,f_=d_;function h_({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=w.useRef(e!==void 0),[s,o]=w.useState(t),l=i?e:s,c=w.useCallback(u=>{i||o(u)},[]);return[l,c]}function Qo(e){const t=w.useRef(e);return f_(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function Jp(...e){return w.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{u_(n,t)})},e)}let wd=!0,e0=!1,Zx;const p_={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function m_(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&p_[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function g_(e){e.metaKey||e.altKey||e.ctrlKey||(wd=!0)}function lh(){wd=!1}function y_(){this.visibilityState==="hidden"&&e0&&(wd=!0)}function v_(e){e.addEventListener("keydown",g_,!0),e.addEventListener("mousedown",lh,!0),e.addEventListener("pointerdown",lh,!0),e.addEventListener("touchstart",lh,!0),e.addEventListener("visibilitychange",y_,!0)}function x_(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return wd||m_(t)}function w_(){const e=w.useCallback(i=>{i!=null&&v_(i.ownerDocument)},[]),t=w.useRef(!1);function n(){return t.current?(e0=!0,window.clearTimeout(Zx),Zx=window.setTimeout(()=>{e0=!1},100),t.current=!1,!0):!1}function r(i){return x_(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function nC(e,t){const n=Y({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=Y({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},s=t[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=Y({},s),Object.keys(i).forEach(o=>{n[r][o]=nC(i[o],s[o])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Ci(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((s,o)=>{if(o){const l=t(o);l!==""&&s.push(l),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const Yx=e=>e,b_=()=>{let e=Yx;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Yx}}},S_=b_(),C_=S_,k_={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ir(e,t,n="Mui"){const r=k_[t];return r?`${n}-${r}`:`${C_.generate(e)}-${t}`}function ki(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=Ir(e,i,n)}),r}const rC="$$material";function ot(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function j_(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function P_(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var E_=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(P_(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=j_(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),jt="-ms-",Pu="-moz-",Se="-webkit-",iC="comm",o1="rule",a1="decl",R_="@import",sC="@keyframes",M_="@layer",T_=Math.abs,bd=String.fromCharCode,__=Object.assign;function O_(e,t){return yt(e,0)^45?(((t<<2^yt(e,0))<<2^yt(e,1))<<2^yt(e,2))<<2^yt(e,3):0}function oC(e){return e.trim()}function z_(e,t){return(e=t.exec(e))?e[0]:e}function Ce(e,t,n){return e.replace(t,n)}function t0(e,t){return e.indexOf(t)}function yt(e,t){return e.charCodeAt(t)|0}function Ya(e,t,n){return e.slice(t,n)}function Xn(e){return e.length}function l1(e){return e.length}function Kl(e,t){return t.push(e),e}function N_(e,t){return e.map(t).join("")}var Sd=1,go=1,aC=0,Yt=0,tt=0,ko="";function Cd(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Sd,column:go,length:o,return:""}}function Do(e,t){return __(Cd("",null,null,"",null,null,0),e,{length:-e.length},t)}function A_(){return tt}function L_(){return tt=Yt>0?yt(ko,--Yt):0,go--,tt===10&&(go=1,Sd--),tt}function an(){return tt=Yt<aC?yt(ko,Yt++):0,go++,tt===10&&(go=1,Sd++),tt}function ar(){return yt(ko,Yt)}function Mc(){return Yt}function dl(e,t){return Ya(ko,e,t)}function Xa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lC(e){return Sd=go=1,aC=Xn(ko=e),Yt=0,[]}function cC(e){return ko="",e}function Tc(e){return oC(dl(Yt-1,n0(e===91?e+2:e===40?e+1:e)))}function I_(e){for(;(tt=ar())&&tt<33;)an();return Xa(e)>2||Xa(tt)>3?"":" "}function $_(e,t){for(;--t&&an()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return dl(e,Mc()+(t<6&&ar()==32&&an()==32))}function n0(e){for(;an();)switch(tt){case e:return Yt;case 34:case 39:e!==34&&e!==39&&n0(tt);break;case 40:e===41&&n0(e);break;case 92:an();break}return Yt}function D_(e,t){for(;an()&&e+tt!==47+10;)if(e+tt===42+42&&ar()===47)break;return"/*"+dl(t,Yt-1)+"*"+bd(e===47?e:an())}function B_(e){for(;!Xa(ar());)an();return dl(e,Yt)}function F_(e){return cC(_c("",null,null,null,[""],e=lC(e),0,[0],e))}function _c(e,t,n,r,i,s,o,l,c){for(var u=0,d=0,f=o,h=0,g=0,m=0,y=1,P=1,x=1,p=0,v="",C=i,b=s,E=r,j=v;P;)switch(m=p,p=an()){case 40:if(m!=108&&yt(j,f-1)==58){t0(j+=Ce(Tc(p),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:j+=Tc(p);break;case 9:case 10:case 13:case 32:j+=I_(m);break;case 92:j+=$_(Mc()-1,7);continue;case 47:switch(ar()){case 42:case 47:Kl(V_(D_(an(),Mc()),t,n),c);break;default:j+="/"}break;case 123*y:l[u++]=Xn(j)*x;case 125*y:case 59:case 0:switch(p){case 0:case 125:P=0;case 59+d:x==-1&&(j=Ce(j,/\f/g,"")),g>0&&Xn(j)-f&&Kl(g>32?Qx(j+";",r,n,f-1):Qx(Ce(j," ","")+";",r,n,f-2),c);break;case 59:j+=";";default:if(Kl(E=Xx(j,t,n,u,d,i,l,v,C=[],b=[],f),s),p===123)if(d===0)_c(j,t,E,E,C,s,f,l,b);else switch(h===99&&yt(j,3)===110?100:h){case 100:case 108:case 109:case 115:_c(e,E,E,r&&Kl(Xx(e,E,E,0,0,i,l,v,i,C=[],f),b),i,b,f,l,r?C:b);break;default:_c(j,E,E,E,[""],b,0,l,b)}}u=d=g=0,y=x=1,v=j="",f=o;break;case 58:f=1+Xn(j),g=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&L_()==125)continue}switch(j+=bd(p),p*y){case 38:x=d>0?1:(j+="\f",-1);break;case 44:l[u++]=(Xn(j)-1)*x,x=1;break;case 64:ar()===45&&(j+=Tc(an())),h=ar(),d=f=Xn(v=j+=B_(Mc())),p++;break;case 45:m===45&&Xn(j)==2&&(y=0)}}return s}function Xx(e,t,n,r,i,s,o,l,c,u,d){for(var f=i-1,h=i===0?s:[""],g=l1(h),m=0,y=0,P=0;m<r;++m)for(var x=0,p=Ya(e,f+1,f=T_(y=o[m])),v=e;x<g;++x)(v=oC(y>0?h[x]+" "+p:Ce(p,/&\f/g,h[x])))&&(c[P++]=v);return Cd(e,t,n,i===0?o1:l,c,u,d)}function V_(e,t,n){return Cd(e,t,n,iC,bd(A_()),Ya(e,2,-2),0)}function Qx(e,t,n,r){return Cd(e,t,n,a1,Ya(e,0,r),Ya(e,r+1,-1),r)}function Ys(e,t){for(var n="",r=l1(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function H_(e,t,n,r){switch(e.type){case M_:if(e.children.length)break;case R_:case a1:return e.return=e.return||e.value;case iC:return"";case sC:return e.return=e.value+"{"+Ys(e.children,r)+"}";case o1:e.value=e.props.join(",")}return Xn(n=Ys(e.children,r))?e.return=e.value+"{"+n+"}":""}function W_(e){var t=l1(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function U_(e){return function(t){t.root||(t=t.return)&&e(t)}}var q_=function(t,n,r){for(var i=0,s=0;i=s,s=ar(),i===38&&s===12&&(n[r]=1),!Xa(s);)an();return dl(t,Yt)},G_=function(t,n){var r=-1,i=44;do switch(Xa(i)){case 0:i===38&&ar()===12&&(n[r]=1),t[r]+=q_(Yt-1,n,r);break;case 2:t[r]+=Tc(i);break;case 4:if(i===44){t[++r]=ar()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=bd(i)}while(i=an());return t},K_=function(t,n){return cC(G_(lC(t),n))},Jx=new WeakMap,Z_=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Jx.get(r))&&!i){Jx.set(t,!0);for(var s=[],o=K_(n,s),l=r.props,c=0,u=0;c<o.length;c++)for(var d=0;d<l.length;d++,u++)t.props[u]=s[c]?o[c].replace(/&\f/g,l[d]):l[d]+" "+o[c]}}},Y_=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function uC(e,t){switch(O_(e,t)){case 5103:return Se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+e+Pu+e+jt+e+e;case 6828:case 4268:return Se+e+jt+e+e;case 6165:return Se+e+jt+"flex-"+e+e;case 5187:return Se+e+Ce(e,/(\w+).+(:[^]+)/,Se+"box-$1$2"+jt+"flex-$1$2")+e;case 5443:return Se+e+jt+"flex-item-"+Ce(e,/flex-|-self/,"")+e;case 4675:return Se+e+jt+"flex-line-pack"+Ce(e,/align-content|flex-|-self/,"")+e;case 5548:return Se+e+jt+Ce(e,"shrink","negative")+e;case 5292:return Se+e+jt+Ce(e,"basis","preferred-size")+e;case 6060:return Se+"box-"+Ce(e,"-grow","")+Se+e+jt+Ce(e,"grow","positive")+e;case 4554:return Se+Ce(e,/([^-])(transform)/g,"$1"+Se+"$2")+e;case 6187:return Ce(Ce(Ce(e,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),e,"")+e;case 5495:case 3959:return Ce(e,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return Ce(Ce(e,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+e+e;case 4095:case 3583:case 4068:case 2532:return Ce(e,/(.+)-inline(.+)/,Se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(yt(e,t+1)){case 109:if(yt(e,t+4)!==45)break;case 102:return Ce(e,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Pu+(yt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~t0(e,"stretch")?uC(Ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(yt(e,t+1)!==115)break;case 6444:switch(yt(e,Xn(e)-3-(~t0(e,"!important")&&10))){case 107:return Ce(e,":",":"+Se)+e;case 101:return Ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Se+(yt(e,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+jt+"$2box$3")+e}break;case 5936:switch(yt(e,t+11)){case 114:return Se+e+jt+Ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Se+e+jt+Ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Se+e+jt+Ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Se+e+jt+e+e}return e}var X_=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case a1:t.return=uC(t.value,t.length);break;case sC:return Ys([Do(t,{value:Ce(t.value,"@","@"+Se)})],i);case o1:if(t.length)return N_(t.props,function(s){switch(z_(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ys([Do(t,{props:[Ce(s,/:(read-\w+)/,":"+Pu+"$1")]})],i);case"::placeholder":return Ys([Do(t,{props:[Ce(s,/:(plac\w+)/,":"+Se+"input-$1")]}),Do(t,{props:[Ce(s,/:(plac\w+)/,":"+Pu+"$1")]}),Do(t,{props:[Ce(s,/:(plac\w+)/,jt+"input-$1")]})],i)}return""})}},Q_=[X_],J_=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Q_,s={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),x=1;x<P.length;x++)s[P[x]]=!0;l.push(y)});var c,u=[Z_,Y_];{var d,f=[H_,U_(function(y){d.insert(y)})],h=W_(u.concat(i,f)),g=function(P){return Ys(F_(P),h)};c=function(P,x,p,v){d=p,g(P?P+"{"+x.styles+"}":x.styles),v&&(m.inserted[x.name]=!0)}}var m={key:n,sheet:new E_({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:c};return m.sheet.hydrate(l),m},dC={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,c1=ht?Symbol.for("react.element"):60103,u1=ht?Symbol.for("react.portal"):60106,kd=ht?Symbol.for("react.fragment"):60107,jd=ht?Symbol.for("react.strict_mode"):60108,Pd=ht?Symbol.for("react.profiler"):60114,Ed=ht?Symbol.for("react.provider"):60109,Rd=ht?Symbol.for("react.context"):60110,d1=ht?Symbol.for("react.async_mode"):60111,Md=ht?Symbol.for("react.concurrent_mode"):60111,Td=ht?Symbol.for("react.forward_ref"):60112,_d=ht?Symbol.for("react.suspense"):60113,e7=ht?Symbol.for("react.suspense_list"):60120,Od=ht?Symbol.for("react.memo"):60115,zd=ht?Symbol.for("react.lazy"):60116,t7=ht?Symbol.for("react.block"):60121,n7=ht?Symbol.for("react.fundamental"):60117,r7=ht?Symbol.for("react.responder"):60118,i7=ht?Symbol.for("react.scope"):60119;function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case c1:switch(e=e.type,e){case d1:case Md:case kd:case Pd:case jd:case _d:return e;default:switch(e=e&&e.$$typeof,e){case Rd:case Td:case zd:case Od:case Ed:return e;default:return t}}case u1:return t}}}function fC(e){return mn(e)===Md}Re.AsyncMode=d1;Re.ConcurrentMode=Md;Re.ContextConsumer=Rd;Re.ContextProvider=Ed;Re.Element=c1;Re.ForwardRef=Td;Re.Fragment=kd;Re.Lazy=zd;Re.Memo=Od;Re.Portal=u1;Re.Profiler=Pd;Re.StrictMode=jd;Re.Suspense=_d;Re.isAsyncMode=function(e){return fC(e)||mn(e)===d1};Re.isConcurrentMode=fC;Re.isContextConsumer=function(e){return mn(e)===Rd};Re.isContextProvider=function(e){return mn(e)===Ed};Re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===c1};Re.isForwardRef=function(e){return mn(e)===Td};Re.isFragment=function(e){return mn(e)===kd};Re.isLazy=function(e){return mn(e)===zd};Re.isMemo=function(e){return mn(e)===Od};Re.isPortal=function(e){return mn(e)===u1};Re.isProfiler=function(e){return mn(e)===Pd};Re.isStrictMode=function(e){return mn(e)===jd};Re.isSuspense=function(e){return mn(e)===_d};Re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kd||e===Md||e===Pd||e===jd||e===_d||e===e7||typeof e=="object"&&e!==null&&(e.$$typeof===zd||e.$$typeof===Od||e.$$typeof===Ed||e.$$typeof===Rd||e.$$typeof===Td||e.$$typeof===n7||e.$$typeof===r7||e.$$typeof===i7||e.$$typeof===t7)};Re.typeOf=mn;dC.exports=Re;var s7=dC.exports,hC=s7,o7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a7={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pC={};pC[hC.ForwardRef]=o7;pC[hC.Memo]=a7;var l7=!0;function c7(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var mC=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||l7===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},u7=function(t,n,r){mC(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function d7(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var f7=/[A-Z]|^ms/g,h7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gC=function(t){return t.charCodeAt(1)===45},e2=function(t){return t!=null&&typeof t!="boolean"},ch=r3(function(e){return gC(e)?e:e.replace(f7,"-$&").toLowerCase()}),t2=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(h7,function(r,i,s){return Qn={name:i,styles:s,next:Qn},i})}return u3[t]!==1&&!gC(t)&&typeof n=="number"&&n!==0?n+"px":n};function Qa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Qn={name:n.name,styles:n.styles,next:Qn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Qn={name:r.name,styles:r.styles,next:Qn},r=r.next;var i=n.styles+";";return i}return p7(e,t,n)}case"function":{if(e!==void 0){var s=Qn,o=n(e);return Qn=s,Qa(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function p7(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Qa(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":e2(o)&&(r+=ch(s)+":"+t2(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)e2(o[l])&&(r+=ch(s)+":"+t2(s,o[l])+";");else{var c=Qa(e,t,o);switch(s){case"animation":case"animationName":{r+=ch(s)+":"+c+";";break}default:r+=s+"{"+c+"}"}}}return r}var n2=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Qn,yC=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";Qn=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=Qa(r,n,o)):s+=o[0];for(var l=1;l<t.length;l++)s+=Qa(r,n,t[l]),i&&(s+=o[l]);n2.lastIndex=0;for(var c="",u;(u=n2.exec(s))!==null;)c+="-"+u[1];var d=d7(s)+c;return{name:d,styles:s,next:Qn}},m7=function(t){return t()},g7=Oh["useInsertionEffect"]?Oh["useInsertionEffect"]:!1,y7=g7||m7,vC=w.createContext(typeof HTMLElement<"u"?J_({key:"css"}):null);vC.Provider;var v7=function(t){return w.forwardRef(function(n,r){var i=w.useContext(vC);return t(n,i,r)})},xC=w.createContext({});function f1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return yC(t)}var fl=function(){var t=f1.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},x7=fP,w7=function(t){return t!=="theme"},r2=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?x7:w7},i2=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},b7=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return mC(n,r,i),y7(function(){return u7(n,r,i)}),null},S7=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var l=i2(t,n,r),c=l||r2(i),u=!c("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var h=d.length,g=1;g<h;g++)f.push(d[g],d[0][g])}var m=v7(function(y,P,x){var p=u&&y.as||i,v="",C=[],b=y;if(y.theme==null){b={};for(var E in y)b[E]=y[E];b.theme=w.useContext(xC)}typeof y.className=="string"?v=c7(P.registered,C,y.className):y.className!=null&&(v=y.className+" ");var j=yC(f.concat(C),P.registered,b);v+=P.key+"-"+j.name,o!==void 0&&(v+=" "+o);var S=u&&l===void 0?r2(p):c,_={};for(var M in y)u&&M==="as"||S(M)&&(_[M]=y[M]);return _.className=v,_.ref=x,w.createElement(w.Fragment,null,w.createElement(b7,{cache:P,serialized:j,isStringTag:typeof p=="string"}),w.createElement(p,_))});return m.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=f,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(y,P){return e(y,Y({},n,P,{shouldForwardProp:i2(m,P,!0)})).apply(void 0,f)},m}},C7=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],r0=S7.bind();C7.forEach(function(e){r0[e]=r0(e)});/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function k7(e,t){return r0(e,t)}const j7=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},P7=["values","unit","step"],E7=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>Y({},n,{[r.key]:r.val}),{})};function R7(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=ot(e,P7),s=E7(t),o=Object.keys(s);function l(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`}function c(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-r/100}${n})`}function u(h,g){const m=o.indexOf(g);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(m!==-1&&typeof t[o[m]]=="number"?t[o[m]]:g)-r/100}${n})`}function d(h){return o.indexOf(h)+1<o.length?u(h,o[o.indexOf(h)+1]):l(h)}function f(h){const g=o.indexOf(h);return g===0?l(o[1]):g===o.length-1?c(o[g]):u(h,o[o.indexOf(h)+1]).replace("@media","@media not all and")}return Y({keys:o,values:s,up:l,down:c,between:u,only:d,not:f,unit:n},i)}const M7={borderRadius:4},T7=M7;function ba(e,t){return t?on(e,t,{clone:!1}):e}const h1={xs:0,sm:600,md:900,lg:1200,xl:1536},s2={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${h1[e]}px)`};function Vn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||s2;return t.reduce((o,l,c)=>(o[s.up(s.keys[c])]=n(t[c]),o),{})}if(typeof t=="object"){const s=r.breakpoints||s2;return Object.keys(t).reduce((o,l)=>{if(Object.keys(s.values||h1).indexOf(l)!==-1){const c=s.up(l);o[c]=n(t[l],l)}else{const c=l;o[c]=t[c]}return o},{})}return n(t)}function wC(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const s=e.up(i);return r[s]={},r},{}))||{}}function bC(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function _7(e,...t){const n=wC(e),r=[n,...t].reduce((i,s)=>on(i,s),{});return bC(Object.keys(n),r)}function O7(e,t){if(typeof e!="object")return{};const n={},r=Object.keys(t);return Array.isArray(e)?r.forEach((i,s)=>{s<e.length&&(n[i]=!0)}):r.forEach(i=>{e[i]!=null&&(n[i]=!0)}),n}function uh({values:e,breakpoints:t,base:n}){const r=n||O7(e,t),i=Object.keys(r);if(i.length===0)return e;let s;return i.reduce((o,l,c)=>(Array.isArray(e)?(o[l]=e[c]!=null?e[c]:e[s],s=c):typeof e=="object"?(o[l]=e[l]!=null?e[l]:e[s],s=l):o[l]=e,o),{})}function Nd(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function Eu(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Nd(e,n)||r,t&&(i=t(i,r,e)),i}function je(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,s=o=>{if(o[t]==null)return null;const l=o[t],c=o.theme,u=Nd(c,r)||{};return Vn(o,l,f=>{let h=Eu(u,i,f);return f===h&&typeof f=="string"&&(h=Eu(u,i,`${t}${f==="default"?"":Xe(f)}`,f)),n===!1?h:{[n]:h}})};return s.propTypes={},s.filterProps=[t],s}function z7(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const N7={m:"margin",p:"padding"},A7={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},o2={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},L7=z7(e=>{if(e.length>2)if(o2[e])e=o2[e];else return[e];const[t,n]=e.split(""),r=N7[t],i=A7[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),p1=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],m1=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...p1,...m1];function hl(e,t,n,r){var i;const s=(i=Nd(e,t,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function g1(e){return hl(e,"spacing",8)}function ns(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function I7(e,t){return n=>e.reduce((r,i)=>(r[i]=ns(t,n),r),{})}function $7(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=L7(n),s=I7(i,r),o=e[n];return Vn(e,o,s)}function SC(e,t){const n=g1(e.theme);return Object.keys(e).map(r=>$7(e,t,r,n)).reduce(ba,{})}function We(e){return SC(e,p1)}We.propTypes={};We.filterProps=p1;function Ue(e){return SC(e,m1)}Ue.propTypes={};Ue.filterProps=m1;function D7(e=8){if(e.mui)return e;const t=g1({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=t(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Ad(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>t[s]?ba(i,t[s](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function er(e){return typeof e!="number"?e:`${e}px solid`}const B7=je({prop:"border",themeKey:"borders",transform:er}),F7=je({prop:"borderTop",themeKey:"borders",transform:er}),V7=je({prop:"borderRight",themeKey:"borders",transform:er}),H7=je({prop:"borderBottom",themeKey:"borders",transform:er}),W7=je({prop:"borderLeft",themeKey:"borders",transform:er}),U7=je({prop:"borderColor",themeKey:"palette"}),q7=je({prop:"borderTopColor",themeKey:"palette"}),G7=je({prop:"borderRightColor",themeKey:"palette"}),K7=je({prop:"borderBottomColor",themeKey:"palette"}),Z7=je({prop:"borderLeftColor",themeKey:"palette"}),Ld=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=hl(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:ns(t,r)});return Vn(e,e.borderRadius,n)}return null};Ld.propTypes={};Ld.filterProps=["borderRadius"];Ad(B7,F7,V7,H7,W7,U7,q7,G7,K7,Z7,Ld);const Id=e=>{if(e.gap!==void 0&&e.gap!==null){const t=hl(e.theme,"spacing",8),n=r=>({gap:ns(t,r)});return Vn(e,e.gap,n)}return null};Id.propTypes={};Id.filterProps=["gap"];const $d=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=hl(e.theme,"spacing",8),n=r=>({columnGap:ns(t,r)});return Vn(e,e.columnGap,n)}return null};$d.propTypes={};$d.filterProps=["columnGap"];const Dd=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=hl(e.theme,"spacing",8),n=r=>({rowGap:ns(t,r)});return Vn(e,e.rowGap,n)}return null};Dd.propTypes={};Dd.filterProps=["rowGap"];const Y7=je({prop:"gridColumn"}),X7=je({prop:"gridRow"}),Q7=je({prop:"gridAutoFlow"}),J7=je({prop:"gridAutoColumns"}),eO=je({prop:"gridAutoRows"}),tO=je({prop:"gridTemplateColumns"}),nO=je({prop:"gridTemplateRows"}),rO=je({prop:"gridTemplateAreas"}),iO=je({prop:"gridArea"});Ad(Id,$d,Dd,Y7,X7,Q7,J7,eO,tO,nO,rO,iO);function Xs(e,t){return t==="grey"?t:e}const sO=je({prop:"color",themeKey:"palette",transform:Xs}),oO=je({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xs}),aO=je({prop:"backgroundColor",themeKey:"palette",transform:Xs});Ad(sO,oO,aO);function tn(e){return e<=1&&e!==0?`${e*100}%`:e}const lO=je({prop:"width",transform:tn}),y1=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const s=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||h1[n];return s?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:tn(n)}};return Vn(e,e.maxWidth,t)}return null};y1.filterProps=["maxWidth"];const cO=je({prop:"minWidth",transform:tn}),uO=je({prop:"height",transform:tn}),dO=je({prop:"maxHeight",transform:tn}),fO=je({prop:"minHeight",transform:tn});je({prop:"size",cssProperty:"width",transform:tn});je({prop:"size",cssProperty:"height",transform:tn});const hO=je({prop:"boxSizing"});Ad(lO,y1,cO,uO,dO,fO,hO);const pO={border:{themeKey:"borders",transform:er},borderTop:{themeKey:"borders",transform:er},borderRight:{themeKey:"borders",transform:er},borderBottom:{themeKey:"borders",transform:er},borderLeft:{themeKey:"borders",transform:er},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ld},color:{themeKey:"palette",transform:Xs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xs},backgroundColor:{themeKey:"palette",transform:Xs},p:{style:Ue},pt:{style:Ue},pr:{style:Ue},pb:{style:Ue},pl:{style:Ue},px:{style:Ue},py:{style:Ue},padding:{style:Ue},paddingTop:{style:Ue},paddingRight:{style:Ue},paddingBottom:{style:Ue},paddingLeft:{style:Ue},paddingX:{style:Ue},paddingY:{style:Ue},paddingInline:{style:Ue},paddingInlineStart:{style:Ue},paddingInlineEnd:{style:Ue},paddingBlock:{style:Ue},paddingBlockStart:{style:Ue},paddingBlockEnd:{style:Ue},m:{style:We},mt:{style:We},mr:{style:We},mb:{style:We},ml:{style:We},mx:{style:We},my:{style:We},margin:{style:We},marginTop:{style:We},marginRight:{style:We},marginBottom:{style:We},marginLeft:{style:We},marginX:{style:We},marginY:{style:We},marginInline:{style:We},marginInlineStart:{style:We},marginInlineEnd:{style:We},marginBlock:{style:We},marginBlockStart:{style:We},marginBlockEnd:{style:We},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Id},rowGap:{style:Dd},columnGap:{style:$d},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:tn},maxWidth:{style:y1},minWidth:{transform:tn},height:{transform:tn},maxHeight:{transform:tn},minHeight:{transform:tn},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Bd=pO;function mO(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function gO(e,t){return typeof e=="function"?e(t):e}function yO(){function e(n,r,i,s){const o={[n]:r,theme:i},l=s[n];if(!l)return{[n]:r};const{cssProperty:c=n,themeKey:u,transform:d,style:f}=l;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const h=Nd(i,u)||{};return f?f(o):Vn(o,r,m=>{let y=Eu(h,d,m);return m===y&&typeof m=="string"&&(y=Eu(h,d,`${n}${m==="default"?"":Xe(m)}`,m)),c===!1?y:{[c]:y}})}function t(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:Bd;function l(c){let u=c;if(typeof c=="function")u=c(s);else if(typeof c!="object")return c;if(!u)return null;const d=wC(s.breakpoints),f=Object.keys(d);let h=d;return Object.keys(u).forEach(g=>{const m=gO(u[g],s);if(m!=null)if(typeof m=="object")if(o[g])h=ba(h,e(g,m,s,o));else{const y=Vn({theme:s},m,P=>({[g]:P}));mO(y,m)?h[g]=t({sx:m,theme:s}):h=ba(h,y)}else h=ba(h,e(g,m,s,o))}),bC(f,h)}return Array.isArray(i)?i.map(l):l(i)}return t}const CC=yO();CC.filterProps=["sx"];const v1=CC,vO=["breakpoints","palette","spacing","shape"];function Fd(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=e,o=ot(e,vO),l=R7(n),c=D7(i);let u=on({breakpoints:l,direction:"ltr",components:{},palette:Y({mode:"light"},r),spacing:c,shape:Y({},T7,s)},o);return u=t.reduce((d,f)=>on(d,f),u),u.unstable_sxConfig=Y({},Bd,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(f){return v1({sx:f,theme:this})},u}function xO(e){return Object.keys(e).length===0}function wO(e=null){const t=w.useContext(xC);return!t||xO(t)?e:t}const bO=Fd();function SO(e=bO){return wO(e)}const CO=["sx"],kO=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Bd;return Object.keys(e).forEach(s=>{i[s]?r.systemProps[s]=e[s]:r.otherProps[s]=e[s]}),r};function kC(e){const{sx:t}=e,n=ot(e,CO),{systemProps:r,otherProps:i}=kO(n);let s;return Array.isArray(t)?s=[r,...t]:typeof t=="function"?s=(...o)=>{const l=t(...o);return br(l)?Y({},r,l):r}:s=Y({},r,t),Y({},i,{sx:s})}var i0={exports:{}};function jC(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=jC(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function a2(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=jC(e))&&(r&&(r+=" "),r+=t);return r}i0.exports=a2,i0.exports.clsx=a2;var Vd=i0.exports;const ut=Bu(Vd),jO=["variant"];function l2(e){return e.length===0}function PC(e){const{variant:t}=e,n=ot(e,jO);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=l2(r)?e[i]:Xe(e[i]):r+=`${l2(r)?i:Xe(i)}${Xe(e[i].toString())}`}),r}const PO=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function EO(e){return Object.keys(e).length===0}function RO(e){return typeof e=="string"&&e.charCodeAt(0)>96}const MO=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Ru=e=>{const t={};return e&&e.forEach(n=>{const r=PC(n.props);t[r]=n.style}),t},TO=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),Ru(n)},Mu=(e,t,n)=>{const{ownerState:r={}}=e,i=[];return n&&n.forEach(s=>{let o=!0;Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&e[l]!==s.props[l]&&(o=!1)}),o&&i.push(t[PC(s.props)])}),i},_O=(e,t,n,r)=>{var i;const s=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return Mu(e,t,s)};function Oc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const OO=Fd(),zO=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function zc({defaultTheme:e,theme:t,themeId:n}){return EO(t)?e:t[n]||t}function NO(e){return e?(t,n)=>n[e]:null}const c2=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const i=e(Y({},t,{theme:zc(Y({},t,{defaultTheme:n,themeId:r}))}));let s;if(i&&i.variants&&(s=i.variants,delete i.variants),s){const o=Mu(t,Ru(s),s);return[i,...o]}return i};function EC(e={}){const{themeId:t,defaultTheme:n=OO,rootShouldForwardProp:r=Oc,slotShouldForwardProp:i=Oc}=e,s=o=>v1(Y({},o,{theme:zc(Y({},o,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(o,l={})=>{j7(o,C=>C.filter(b=>!(b!=null&&b.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:d,skipSx:f,overridesResolver:h=NO(zO(u))}=l,g=ot(l,PO),m=d!==void 0?d:u&&u!=="Root"&&u!=="root"||!1,y=f||!1;let P,x=Oc;u==="Root"||u==="root"?x=r:u?x=i:RO(o)&&(x=void 0);const p=k7(o,Y({shouldForwardProp:x,label:P},g)),v=(C,...b)=>{const E=b?b.map(M=>{if(typeof M=="function"&&M.__emotion_real!==M)return T=>c2({styledArg:M,props:T,defaultTheme:n,themeId:t});if(br(M)){let T=M,R;return M&&M.variants&&(R=M.variants,delete T.variants,T=O=>{let k=M;return Mu(O,Ru(R),R).forEach(A=>{k=on(k,A)}),k}),T}return M}):[];let j=C;if(br(C)){let M;C&&C.variants&&(M=C.variants,delete j.variants,j=T=>{let R=C;return Mu(T,Ru(M),M).forEach(k=>{R=on(R,k)}),R})}else typeof C=="function"&&C.__emotion_real!==C&&(j=M=>c2({styledArg:C,props:M,defaultTheme:n,themeId:t}));c&&h&&E.push(M=>{const T=zc(Y({},M,{defaultTheme:n,themeId:t})),R=MO(c,T);if(R){const O={};return Object.entries(R).forEach(([k,N])=>{O[k]=typeof N=="function"?N(Y({},M,{theme:T})):N}),h(M,O)}return null}),c&&!m&&E.push(M=>{const T=zc(Y({},M,{defaultTheme:n,themeId:t}));return _O(M,TO(c,T),T,c)}),y||E.push(s);const S=E.length-b.length;if(Array.isArray(C)&&S>0){const M=new Array(S).fill("");j=[...C,...M],j.raw=[...C.raw,...M]}const _=p(j,...E);return o.muiName&&(_.muiName=o.muiName),_};return p.withConfig&&(v.withConfig=p.withConfig),v}}const AO=EC(),LO=AO;function IO(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:nC(t.components[n].defaultProps,r)}function RC({props:e,name:t,defaultTheme:n,themeId:r}){let i=SO(n);return r&&(i=i[r]||i),IO({theme:i,name:t,props:e})}function x1(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function $O(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function rs(e){if(e.type)return e;if(e.charAt(0)==="#")return rs($O(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(mo(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(mo(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function Hd(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function DO(e){e=rs(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,s=r*Math.min(i,1-i),o=(u,d=(u+n/30)%12)=>i-s*Math.max(Math.min(d-3,9-d,1),-1);let l="rgb";const c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),Hd({type:l,values:c})}function u2(e){e=rs(e);let t=e.type==="hsl"||e.type==="hsla"?rs(DO(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function BO(e,t){const n=u2(e),r=u2(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function FO(e,t){return e=rs(e),t=x1(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Hd(e)}function VO(e,t){if(e=rs(e),t=x1(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Hd(e)}function HO(e,t){if(e=rs(e),t=x1(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Hd(e)}const WO=["component","direction","spacing","divider","children","className","useFlexGap"],UO=Fd(),qO=LO("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function GO(e){return RC({props:e,name:"MuiStack",defaultTheme:UO})}function KO(e,t){const n=w.Children.toArray(e).filter(Boolean);return n.reduce((r,i,s)=>(r.push(i),s<n.length-1&&r.push(w.cloneElement(t,{key:`separator-${s}`})),r),[])}const ZO=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],YO=({ownerState:e,theme:t})=>{let n=Y({display:"flex",flexDirection:"column"},Vn({theme:t},uh({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=g1(t),i=Object.keys(t.breakpoints.values).reduce((c,u)=>((typeof e.spacing=="object"&&e.spacing[u]!=null||typeof e.direction=="object"&&e.direction[u]!=null)&&(c[u]=!0),c),{}),s=uh({values:e.direction,base:i}),o=uh({values:e.spacing,base:i});typeof s=="object"&&Object.keys(s).forEach((c,u,d)=>{if(!s[c]){const h=u>0?s[d[u-1]]:"column";s[c]=h}}),n=on(n,Vn({theme:t},o,(c,u)=>e.useFlexGap?{gap:ns(r,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ZO(u?s[u]:e.direction)}`]:ns(r,c)}}))}return n=_7(t.breakpoints,n),n};function XO(e={}){const{createStyledComponent:t=qO,useThemeProps:n=GO,componentName:r="MuiStack"}=e,i=()=>Ci({root:["root"]},c=>Ir(r,c),{}),s=t(YO);return w.forwardRef(function(c,u){const d=n(c),f=kC(d),{component:h="div",direction:g="column",spacing:m=0,divider:y,children:P,className:x,useFlexGap:p=!1}=f,v=ot(f,WO),C={direction:g,spacing:m,useFlexGap:p},b=i();return a.jsx(s,Y({as:h,ownerState:C,ref:u,className:ut(b.root,x)},v,{children:y?KO(P,y):P}))})}function QO(e,t){return Y({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const JO=["mode","contrastThreshold","tonalOffset"],d2={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Za.white,default:Za.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},dh={text:{primary:Za.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Za.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function f2(e,t,n,r){const i=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=HO(e.main,i):t==="dark"&&(e.dark=VO(e.main,s)))}function ez(e="light"){return e==="dark"?{main:ys[200],light:ys[50],dark:ys[400]}:{main:ys[700],light:ys[400],dark:ys[800]}}function tz(e="light"){return e==="dark"?{main:gs[200],light:gs[50],dark:gs[400]}:{main:gs[500],light:gs[300],dark:gs[700]}}function nz(e="light"){return e==="dark"?{main:ms[500],light:ms[300],dark:ms[700]}:{main:ms[700],light:ms[400],dark:ms[800]}}function rz(e="light"){return e==="dark"?{main:vs[400],light:vs[300],dark:vs[700]}:{main:vs[700],light:vs[500],dark:vs[900]}}function iz(e="light"){return e==="dark"?{main:xs[400],light:xs[300],dark:xs[700]}:{main:xs[800],light:xs[500],dark:xs[900]}}function sz(e="light"){return e==="dark"?{main:$o[400],light:$o[300],dark:$o[700]}:{main:"#ed6c02",light:$o[500],dark:$o[900]}}function oz(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=ot(e,JO),s=e.primary||ez(t),o=e.secondary||tz(t),l=e.error||nz(t),c=e.info||rz(t),u=e.success||iz(t),d=e.warning||sz(t);function f(y){return BO(y,dh.text.primary)>=n?dh.text.primary:d2.text.primary}const h=({color:y,name:P,mainShade:x=500,lightShade:p=300,darkShade:v=700})=>{if(y=Y({},y),!y.main&&y[x]&&(y.main=y[x]),!y.hasOwnProperty("main"))throw new Error(mo(11,P?` (${P})`:"",x));if(typeof y.main!="string")throw new Error(mo(12,P?` (${P})`:"",JSON.stringify(y.main)));return f2(y,"light",p,r),f2(y,"dark",v,r),y.contrastText||(y.contrastText=f(y.main)),y},g={dark:dh,light:d2};return on(Y({common:Y({},Za),mode:t,primary:h({color:s,name:"primary"}),secondary:h({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:l,name:"error"}),warning:h({color:d,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:u,name:"success"}),grey:s_,contrastThreshold:n,getContrastText:f,augmentColor:h,tonalOffset:r},g[t]),i)}const az=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function lz(e){return Math.round(e*1e5)/1e5}const h2={textTransform:"uppercase"},p2='"Roboto", "Helvetica", "Arial", sans-serif';function cz(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=p2,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:d,pxToRem:f}=n,h=ot(n,az),g=i/14,m=f||(x=>`${x/u*g}rem`),y=(x,p,v,C,b)=>Y({fontFamily:r,fontWeight:x,fontSize:m(p),lineHeight:v},r===p2?{letterSpacing:`${lz(C/p)}em`}:{},b,d),P={h1:y(s,96,1.167,-1.5),h2:y(s,60,1.2,-.5),h3:y(o,48,1.167,0),h4:y(o,34,1.235,.25),h5:y(o,24,1.334,0),h6:y(l,20,1.6,.15),subtitle1:y(o,16,1.75,.15),subtitle2:y(l,14,1.57,.1),body1:y(o,16,1.5,.15),body2:y(o,14,1.43,.15),button:y(l,14,1.75,.4,h2),caption:y(o,12,1.66,.4),overline:y(o,12,2.66,1,h2),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return on(Y({htmlFontSize:u,pxToRem:m,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:l,fontWeightBold:c},P),h,{clone:!1})}const uz=.2,dz=.14,fz=.12;function Le(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${uz})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${dz})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fz})`].join(",")}const hz=["none",Le(0,2,1,-1,0,1,1,0,0,1,3,0),Le(0,3,1,-2,0,2,2,0,0,1,5,0),Le(0,3,3,-2,0,3,4,0,0,1,8,0),Le(0,2,4,-1,0,4,5,0,0,1,10,0),Le(0,3,5,-1,0,5,8,0,0,1,14,0),Le(0,3,5,-1,0,6,10,0,0,1,18,0),Le(0,4,5,-2,0,7,10,1,0,2,16,1),Le(0,5,5,-3,0,8,10,1,0,3,14,2),Le(0,5,6,-3,0,9,12,1,0,3,16,2),Le(0,6,6,-3,0,10,14,1,0,4,18,3),Le(0,6,7,-4,0,11,15,1,0,4,20,3),Le(0,7,8,-4,0,12,17,2,0,5,22,4),Le(0,7,8,-4,0,13,19,2,0,5,24,4),Le(0,7,9,-4,0,14,21,2,0,5,26,4),Le(0,8,9,-5,0,15,22,2,0,6,28,5),Le(0,8,10,-5,0,16,24,2,0,6,30,5),Le(0,8,11,-5,0,17,26,2,0,6,32,5),Le(0,9,11,-5,0,18,28,2,0,7,34,6),Le(0,9,12,-6,0,19,29,2,0,7,36,6),Le(0,10,13,-6,0,20,31,3,0,8,38,7),Le(0,10,13,-6,0,21,33,3,0,8,40,7),Le(0,10,14,-6,0,22,35,3,0,8,42,7),Le(0,11,14,-7,0,23,36,3,0,9,44,8),Le(0,11,15,-7,0,24,38,3,0,9,46,8)],pz=hz,mz=["duration","easing","delay"],gz={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},yz={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function m2(e){return`${Math.round(e)}ms`}function vz(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function xz(e){const t=Y({},gz,e.easing),n=Y({},yz,e.duration);return Y({getAutoHeightDuration:vz,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:l=t.easeInOut,delay:c=0}=s;return ot(s,mz),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:m2(o)} ${l} ${typeof c=="string"?c:m2(c)}`).join(",")}},e,{easing:t,duration:n})}const wz={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},bz=wz,Sz=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Cz(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=e,o=ot(e,Sz);if(e.vars)throw new Error(mo(18));const l=oz(r),c=Fd(e);let u=on(c,{mixins:QO(c.breakpoints,n),palette:l,shadows:pz.slice(),typography:cz(l,s),transitions:xz(i),zIndex:Y({},bz)});return u=on(u,o),u=t.reduce((d,f)=>on(d,f),u),u.unstable_sxConfig=Y({},Bd,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(f){return v1({sx:f,theme:this})},u}const kz=Cz(),MC=kz;function ji({props:e,name:t}){return RC({props:e,name:t,defaultTheme:MC,themeId:rC})}const TC=e=>Oc(e)&&e!=="classes",jz=EC({themeId:rC,defaultTheme:MC,rootShouldForwardProp:TC}),Xt=jz;function Pz(e){return Ir("MuiSvgIcon",e)}ki("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ez=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Rz=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${Xe(t)}`,`fontSize${Xe(n)}`]};return Ci(i,Pz,r)},Mz=Xt("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Xe(n.color)}`],t[`fontSize${Xe(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,s,o,l,c,u,d,f,h,g,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(o=s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((u=e.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(f=(h=(e.vars||e).palette)==null||(h=h[t.color])==null?void 0:h.main)!=null?f:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),_C=w.forwardRef(function(t,n){const r=ji({props:t,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:l="svg",fontSize:c="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:f,viewBox:h="0 0 24 24"}=r,g=ot(r,Ez),m=w.isValidElement(i)&&i.type==="svg",y=Y({},r,{color:o,component:l,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:h,hasSvgAsChild:m}),P={};d||(P.viewBox=h);const x=Rz(y);return a.jsxs(Mz,Y({as:l,className:ut(x.root,s),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},P,g,m&&i.props,{ownerState:y,children:[m?i.props.children:i,f?a.jsx("title",{children:f}):null]}))});_C.muiName="SvgIcon";const g2=_C;function w1(e,t){function n(r,i){return a.jsx(g2,Y({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return n.muiName=g2.muiName,w.memo(w.forwardRef(n))}function s0(e,t){return s0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},s0(e,t)}function Tz(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,s0(e,t)}const y2=I.createContext(null);function _z(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b1(e,t){var n=function(s){return t&&w.isValidElement(s)?t(s):s},r=Object.create(null);return e&&w.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function Oz(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var o,l={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var u=r[c][o];l[r[c][o]]=n(u)}l[c]=n(c)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}function Vi(e,t,n){return n[t]!=null?n[t]:e.props[t]}function zz(e,t){return b1(e.children,function(n){return w.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Vi(n,"appear",e),enter:Vi(n,"enter",e),exit:Vi(n,"exit",e)})})}function Nz(e,t,n){var r=b1(e.children),i=Oz(t,r);return Object.keys(i).forEach(function(s){var o=i[s];if(w.isValidElement(o)){var l=s in t,c=s in r,u=t[s],d=w.isValidElement(u)&&!u.props.in;c&&(!l||d)?i[s]=w.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:Vi(o,"exit",e),enter:Vi(o,"enter",e)}):!c&&l&&!d?i[s]=w.cloneElement(o,{in:!1}):c&&l&&w.isValidElement(u)&&(i[s]=w.cloneElement(o,{onExited:n.bind(null,o),in:u.props.in,exit:Vi(o,"exit",e),enter:Vi(o,"enter",e)}))}}),i}var Az=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Lz={component:"div",childFactory:function(t){return t}},S1=function(e){Tz(t,e);function t(r,i){var s;s=e.call(this,r,i)||this;var o=s.handleExited.bind(_z(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,s){var o=s.children,l=s.handleExited,c=s.firstRender;return{children:c?zz(i,l):Nz(i,o,l),firstRender:!1}},n.handleExited=function(i,s){var o=b1(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(l){var c=Y({},l.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,s=i.component,o=i.childFactory,l=ot(i,["component","childFactory"]),c=this.state.contextValue,u=Az(this.state.children).map(o);return delete l.appear,delete l.enter,delete l.exit,s===null?I.createElement(y2.Provider,{value:c},u):I.createElement(y2.Provider,{value:c},I.createElement(s,l,u))},t}(I.Component);S1.propTypes={};S1.defaultProps=Lz;const Iz=S1;function $z(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:l,onExited:c,timeout:u}=e,[d,f]=w.useState(!1),h=ut(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),g={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},m=ut(n.child,d&&n.childLeaving,r&&n.childPulsate);return!l&&!d&&f(!0),w.useEffect(()=>{if(!l&&c!=null){const y=setTimeout(c,u);return()=>{clearTimeout(y)}}},[c,l,u]),a.jsx("span",{className:h,style:g,children:a.jsx("span",{className:m})})}const Dz=ki("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),xn=Dz,Bz=["center","classes","className"];let Wd=e=>e,v2,x2,w2,b2;const o0=550,Fz=80,Vz=fl(v2||(v2=Wd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Hz=fl(x2||(x2=Wd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Wz=fl(w2||(w2=Wd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Uz=Xt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qz=Xt($z,{name:"MuiTouchRipple",slot:"Ripple"})(b2||(b2=Wd`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),xn.rippleVisible,Vz,o0,({theme:e})=>e.transitions.easing.easeInOut,xn.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,xn.child,xn.childLeaving,Hz,o0,({theme:e})=>e.transitions.easing.easeInOut,xn.childPulsate,Wz,({theme:e})=>e.transitions.easing.easeInOut),Gz=w.forwardRef(function(t,n){const r=ji({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=r,l=ot(r,Bz),[c,u]=w.useState([]),d=w.useRef(0),f=w.useRef(null);w.useEffect(()=>{f.current&&(f.current(),f.current=null)},[c]);const h=w.useRef(!1),g=w.useRef(0),m=w.useRef(null),y=w.useRef(null);w.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);const P=w.useCallback(C=>{const{pulsate:b,rippleX:E,rippleY:j,rippleSize:S,cb:_}=C;u(M=>[...M,a.jsx(qz,{classes:{ripple:ut(s.ripple,xn.ripple),rippleVisible:ut(s.rippleVisible,xn.rippleVisible),ripplePulsate:ut(s.ripplePulsate,xn.ripplePulsate),child:ut(s.child,xn.child),childLeaving:ut(s.childLeaving,xn.childLeaving),childPulsate:ut(s.childPulsate,xn.childPulsate)},timeout:o0,pulsate:b,rippleX:E,rippleY:j,rippleSize:S},d.current)]),d.current+=1,f.current=_},[s]),x=w.useCallback((C={},b={},E=()=>{})=>{const{pulsate:j=!1,center:S=i||b.pulsate,fakeElement:_=!1}=b;if((C==null?void 0:C.type)==="mousedown"&&h.current){h.current=!1;return}(C==null?void 0:C.type)==="touchstart"&&(h.current=!0);const M=_?null:y.current,T=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let R,O,k;if(S||C===void 0||C.clientX===0&&C.clientY===0||!C.clientX&&!C.touches)R=Math.round(T.width/2),O=Math.round(T.height/2);else{const{clientX:N,clientY:A}=C.touches&&C.touches.length>0?C.touches[0]:C;R=Math.round(N-T.left),O=Math.round(A-T.top)}if(S)k=Math.sqrt((2*T.width**2+T.height**2)/3),k%2===0&&(k+=1);else{const N=Math.max(Math.abs((M?M.clientWidth:0)-R),R)*2+2,A=Math.max(Math.abs((M?M.clientHeight:0)-O),O)*2+2;k=Math.sqrt(N**2+A**2)}C!=null&&C.touches?m.current===null&&(m.current=()=>{P({pulsate:j,rippleX:R,rippleY:O,rippleSize:k,cb:E})},g.current=setTimeout(()=>{m.current&&(m.current(),m.current=null)},Fz)):P({pulsate:j,rippleX:R,rippleY:O,rippleSize:k,cb:E})},[i,P]),p=w.useCallback(()=>{x({},{pulsate:!0})},[x]),v=w.useCallback((C,b)=>{if(clearTimeout(g.current),(C==null?void 0:C.type)==="touchend"&&m.current){m.current(),m.current=null,g.current=setTimeout(()=>{v(C,b)});return}m.current=null,u(E=>E.length>0?E.slice(1):E),f.current=b},[]);return w.useImperativeHandle(n,()=>({pulsate:p,start:x,stop:v}),[p,x,v]),a.jsx(Uz,Y({className:ut(xn.root,s.root,o),ref:y},l,{children:a.jsx(Iz,{component:null,exit:!0,children:c})}))}),Kz=Gz;function Zz(e){return Ir("MuiButtonBase",e)}const Yz=ki("MuiButtonBase",["root","disabled","focusVisible"]),Xz=Yz,Qz=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Jz=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o=Ci({root:["root",t&&"disabled",n&&"focusVisible"]},Zz,i);return n&&r&&(o.root+=` ${r}`),o},eN=Xt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Xz.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),tN=w.forwardRef(function(t,n){const r=ji({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:l,component:c="button",disabled:u=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:h=!1,LinkComponent:g="a",onBlur:m,onClick:y,onContextMenu:P,onDragLeave:x,onFocus:p,onFocusVisible:v,onKeyDown:C,onKeyUp:b,onMouseDown:E,onMouseLeave:j,onMouseUp:S,onTouchEnd:_,onTouchMove:M,onTouchStart:T,tabIndex:R=0,TouchRippleProps:O,touchRippleRef:k,type:N}=r,A=ot(r,Qz),D=w.useRef(null),L=w.useRef(null),$=Jp(L,k),{isFocusVisibleRef:V,onFocus:B,onBlur:Q,ref:xe}=w_(),[de,pe]=w.useState(!1);u&&de&&pe(!1),w.useImperativeHandle(i,()=>({focusVisible:()=>{pe(!0),D.current.focus()}}),[]);const[ge,we]=w.useState(!1);w.useEffect(()=>{we(!0)},[]);const q=ge&&!d&&!u;w.useEffect(()=>{de&&h&&!d&&ge&&L.current.pulsate()},[d,h,de,ge]);function X(oe,py,Dk=f){return Qo(my=>(py&&py(my),!Dk&&L.current&&L.current[oe](my),!0))}const ee=X("start",E),re=X("stop",P),se=X("stop",x),Te=X("stop",S),Qe=X("stop",oe=>{de&&oe.preventDefault(),j&&j(oe)}),Dt=X("start",T),$e=X("stop",_),gn=X("stop",M),_e=X("stop",oe=>{Q(oe),V.current===!1&&pe(!1),m&&m(oe)},!1),De=Qo(oe=>{D.current||(D.current=oe.currentTarget),B(oe),V.current===!0&&(pe(!0),v&&v(oe)),p&&p(oe)}),Bt=()=>{const oe=D.current;return c&&c!=="button"&&!(oe.tagName==="A"&&oe.href)},fs=w.useRef(!1),kl=Qo(oe=>{h&&!fs.current&&de&&L.current&&oe.key===" "&&(fs.current=!0,L.current.stop(oe,()=>{L.current.start(oe)})),oe.target===oe.currentTarget&&Bt()&&oe.key===" "&&oe.preventDefault(),C&&C(oe),oe.target===oe.currentTarget&&Bt()&&oe.key==="Enter"&&!u&&(oe.preventDefault(),y&&y(oe))}),yn=Qo(oe=>{h&&oe.key===" "&&L.current&&de&&!oe.defaultPrevented&&(fs.current=!1,L.current.stop(oe,()=>{L.current.pulsate(oe)})),b&&b(oe),y&&oe.target===oe.currentTarget&&Bt()&&oe.key===" "&&!oe.defaultPrevented&&y(oe)});let jl=c;jl==="button"&&(A.href||A.to)&&(jl=g);const Eo={};jl==="button"?(Eo.type=N===void 0?"button":N,Eo.disabled=u):(!A.href&&!A.to&&(Eo.role="button"),u&&(Eo["aria-disabled"]=u));const Ik=Jp(n,xe,D),hy=Y({},r,{centerRipple:s,component:c,disabled:u,disableRipple:d,disableTouchRipple:f,focusRipple:h,tabIndex:R,focusVisible:de}),$k=Jz(hy);return a.jsxs(eN,Y({as:jl,className:ut($k.root,l),ownerState:hy,onBlur:_e,onClick:y,onContextMenu:re,onFocus:De,onKeyDown:kl,onKeyUp:yn,onMouseDown:ee,onMouseLeave:Qe,onMouseUp:Te,onDragLeave:se,onTouchEnd:$e,onTouchMove:gn,onTouchStart:Dt,ref:Ik,tabIndex:u?-1:R,type:N},Eo,A,{children:[o,q?a.jsx(Kz,Y({ref:$,center:s},O)):null]}))}),nN=tN;function rN(e){return Ir("MuiTypography",e)}ki("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const iN=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],sN=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:s,classes:o}=e,l={root:["root",s,e.align!=="inherit"&&`align${Xe(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return Ci(l,rN,o)},oN=Xt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Xe(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>Y({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),S2={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},aN={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},lN=e=>aN[e]||e,cN=w.forwardRef(function(t,n){const r=ji({props:t,name:"MuiTypography"}),i=lN(r.color),s=kC(Y({},r,{color:i})),{align:o="inherit",className:l,component:c,gutterBottom:u=!1,noWrap:d=!1,paragraph:f=!1,variant:h="body1",variantMapping:g=S2}=s,m=ot(s,iN),y=Y({},s,{align:o,color:i,className:l,component:c,gutterBottom:u,noWrap:d,paragraph:f,variant:h,variantMapping:g}),P=c||(f?"p":g[h]||S2[h])||"span",x=sN(y);return a.jsx(oN,Y({as:P,ref:n,ownerState:y,className:ut(x.root,l)},m))}),C2=cN;function k2(e){return e.substring(2).toLowerCase()}function uN(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function OC(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:s="onTouchEnd"}=e,o=w.useRef(!1),l=w.useRef(null),c=w.useRef(!1),u=w.useRef(!1);w.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const d=Jp(t.ref,l),f=Qo(m=>{const y=u.current;u.current=!1;const P=ah(l.current);if(!c.current||!l.current||"clientX"in m&&uN(m,P))return;if(o.current){o.current=!1;return}let x;m.composedPath?x=m.composedPath().indexOf(l.current)>-1:x=!P.documentElement.contains(m.target)||l.current.contains(m.target),!x&&(n||!y)&&i(m)}),h=m=>y=>{u.current=!0;const P=t.props[m];P&&P(y)},g={ref:d};return s!==!1&&(g[s]=h(s)),w.useEffect(()=>{if(s!==!1){const m=k2(s),y=ah(l.current),P=()=>{o.current=!0};return y.addEventListener(m,f),y.addEventListener("touchmove",P),()=>{y.removeEventListener(m,f),y.removeEventListener("touchmove",P)}}},[f,s]),r!==!1&&(g[r]=h(r)),w.useEffect(()=>{if(r!==!1){const m=k2(r),y=ah(l.current);return y.addEventListener(m,f),()=>{y.removeEventListener(m,f)}}},[f,r]),a.jsx(w.Fragment,{children:w.cloneElement(t,g)})}function dN({props:e,states:t,muiFormControl:n}){return t.reduce((r,i)=>(r[i]=e[i],n&&typeof e[i]>"u"&&(r[i]=n[i]),r),{})}const fN=w.createContext(void 0),hN=fN;function zC(){return w.useContext(hN)}function pN(e){return Ir("PrivateSwitchBase",e)}ki("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const mN=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],gN=e=>{const{classes:t,checked:n,disabled:r,edge:i}=e,s={root:["root",n&&"checked",r&&"disabled",i&&`edge${Xe(i)}`],input:["input"]};return Ci(s,pN,t)},yN=Xt(nN)(({ownerState:e})=>Y({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),vN=Xt("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),xN=w.forwardRef(function(t,n){const{autoFocus:r,checked:i,checkedIcon:s,className:o,defaultChecked:l,disabled:c,disableFocusRipple:u=!1,edge:d=!1,icon:f,id:h,inputProps:g,inputRef:m,name:y,onBlur:P,onChange:x,onFocus:p,readOnly:v,required:C=!1,tabIndex:b,type:E,value:j}=t,S=ot(t,mN),[_,M]=h_({controlled:i,default:!!l,name:"SwitchBase",state:"checked"}),T=zC(),R=$=>{p&&p($),T&&T.onFocus&&T.onFocus($)},O=$=>{P&&P($),T&&T.onBlur&&T.onBlur($)},k=$=>{if($.nativeEvent.defaultPrevented)return;const V=$.target.checked;M(V),x&&x($,V)};let N=c;T&&typeof N>"u"&&(N=T.disabled);const A=E==="checkbox"||E==="radio",D=Y({},t,{checked:_,disabled:N,disableFocusRipple:u,edge:d}),L=gN(D);return a.jsxs(yN,Y({component:"span",className:ut(L.root,o),centerRipple:!0,focusRipple:!u,disabled:N,tabIndex:null,role:void 0,onFocus:R,onBlur:O,ownerState:D,ref:n},S,{children:[a.jsx(vN,Y({autoFocus:r,checked:i,defaultChecked:l,className:L.input,disabled:N,id:A?h:void 0,name:y,onChange:k,readOnly:v,ref:m,required:C,ownerState:D,tabIndex:b,type:E},E==="checkbox"&&j===void 0?{}:{value:j},g)),_?s:f]}))}),wN=xN,bN=w1(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),SN=w1(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),CN=w1(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function kN(e){return Ir("MuiCheckbox",e)}const jN=ki("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),fh=jN,PN=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],EN=e=>{const{classes:t,indeterminate:n,color:r,size:i}=e,s={root:["root",n&&"indeterminate",`color${Xe(r)}`,`size${Xe(i)}`]},o=Ci(s,kN,t);return Y({},t,o)},RN=Xt(wN,{shouldForwardProp:e=>TC(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,n.color!=="default"&&t[`color${Xe(n.color)}`]]}})(({theme:e,ownerState:t})=>Y({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:FO(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${fh.checked}, &.${fh.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${fh.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),MN=a.jsx(SN,{}),TN=a.jsx(bN,{}),_N=a.jsx(CN,{}),ON=w.forwardRef(function(t,n){var r,i;const s=ji({props:t,name:"MuiCheckbox"}),{checkedIcon:o=MN,color:l="primary",icon:c=TN,indeterminate:u=!1,indeterminateIcon:d=_N,inputProps:f,size:h="medium",className:g}=s,m=ot(s,PN),y=u?d:c,P=u?d:o,x=Y({},s,{color:l,indeterminate:u,size:h}),p=EN(x);return a.jsx(RN,Y({type:"checkbox",inputProps:Y({"data-indeterminate":u},f),icon:w.cloneElement(y,{fontSize:(r=y.props.fontSize)!=null?r:h}),checkedIcon:w.cloneElement(P,{fontSize:(i=P.props.fontSize)!=null?i:h}),ownerState:x,ref:n,className:ut(p.root,g)},m,{classes:p}))}),NC=ON;function zN(e){return Ir("MuiCircularProgress",e)}ki("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const NN=["className","color","disableShrink","size","style","thickness","value","variant"];let Ud=e=>e,j2,P2,E2,R2;const Fr=44,AN=fl(j2||(j2=Ud`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),LN=fl(P2||(P2=Ud`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),IN=e=>{const{classes:t,variant:n,color:r,disableShrink:i}=e,s={root:["root",n,`color${Xe(r)}`],svg:["svg"],circle:["circle",`circle${Xe(n)}`,i&&"circleDisableShrink"]};return Ci(s,zN,t)},$N=Xt("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${Xe(n.color)}`]]}})(({ownerState:e,theme:t})=>Y({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&f1(E2||(E2=Ud`
      animation: ${0} 1.4s linear infinite;
    `),AN)),DN=Xt("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),BN=Xt("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${Xe(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>Y({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&f1(R2||(R2=Ud`
      animation: ${0} 1.4s ease-in-out infinite;
    `),LN)),FN=w.forwardRef(function(t,n){const r=ji({props:t,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:o=!1,size:l=40,style:c,thickness:u=3.6,value:d=0,variant:f="indeterminate"}=r,h=ot(r,NN),g=Y({},r,{color:s,disableShrink:o,size:l,thickness:u,value:d,variant:f}),m=IN(g),y={},P={},x={};if(f==="determinate"){const p=2*Math.PI*((Fr-u)/2);y.strokeDasharray=p.toFixed(3),x["aria-valuenow"]=Math.round(d),y.strokeDashoffset=`${((100-d)/100*p).toFixed(3)}px`,P.transform="rotate(-90deg)"}return a.jsx($N,Y({className:ut(m.root,i),style:Y({width:l,height:l},P,c),ownerState:g,ref:n,role:"progressbar"},x,h,{children:a.jsx(DN,{className:m.svg,ownerState:g,viewBox:`${Fr/2} ${Fr/2} ${Fr} ${Fr}`,children:a.jsx(BN,{className:m.circle,style:y,ownerState:g,cx:Fr,cy:Fr,r:(Fr-u)/2,fill:"none",strokeWidth:u})})}))}),C1=FN,VN=XO({createStyledComponent:Xt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>ji({props:e,name:"MuiStack"})}),HN=VN;function WN(e){return Ir("MuiFormControlLabel",e)}const UN=ki("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Jo=UN,qN=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],GN=e=>{const{classes:t,disabled:n,labelPlacement:r,error:i,required:s}=e,o={root:["root",n&&"disabled",`labelPlacement${Xe(r)}`,i&&"error",s&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",i&&"error"]};return Ci(o,WN,t)},KN=Xt("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Jo.label}`]:t.label},t.root,t[`labelPlacement${Xe(n.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>Y({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Jo.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Jo.label}`]:{[`&.${Jo.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ZN=Xt("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Jo.error}`]:{color:(e.vars||e).palette.error.main}})),YN=w.forwardRef(function(t,n){var r,i;const s=ji({props:t,name:"MuiFormControlLabel"}),{className:o,componentsProps:l={},control:c,disabled:u,disableTypography:d,label:f,labelPlacement:h="end",required:g,slotProps:m={}}=s,y=ot(s,qN),P=zC(),x=(r=u??c.props.disabled)!=null?r:P==null?void 0:P.disabled,p=g??c.props.required,v={disabled:x,required:p};["checked","name","onChange","value","inputRef"].forEach(_=>{typeof c.props[_]>"u"&&typeof s[_]<"u"&&(v[_]=s[_])});const C=dN({props:s,muiFormControl:P,states:["error"]}),b=Y({},s,{disabled:x,labelPlacement:h,required:p,error:C.error}),E=GN(b),j=(i=m.typography)!=null?i:l.typography;let S=f;return S!=null&&S.type!==C2&&!d&&(S=a.jsx(C2,Y({component:"span"},j,{className:ut(E.label,j==null?void 0:j.className),children:S}))),a.jsxs(KN,Y({className:ut(E.root,o),ownerState:b,ref:n},y,{children:[w.cloneElement(c,v),p?a.jsxs(HN,{direction:"row",alignItems:"center",children:[S,a.jsxs(ZN,{ownerState:b,"aria-hidden":!0,className:E.asterisk,children:[" ","*"]})]}):S]}))}),AC=YN,XN=({network:e,handleConect:t})=>{const[n,r]=w.useState(!1),[i,s]=w.useState(!1),[o,l]=w.useState(!1),[c,u]=w.useState(""),d=()=>{s(!0);const f=setTimeout(()=>{t(e,c),clearTimeout(f)},1e3)};return a.jsxs(H.div,{initial:{x:100,opacity:.2},animate:{x:0,opacity:1},exit:{x:-200,opacity:.2},transition:{ease:"easeInOut",duration:.4},className:"page3",children:[a.jsx("h1",{children:"Wifi"}),a.jsxs("p",{children:["Você está prestes a se conectar a ",a.jsx("strong",{children:e==null?void 0:e.name})]}),a.jsxs("div",{className:"input",children:[o&&a.jsx("span",{children:"Senha incorreta"}),a.jsx("input",{type:"password",className:"password",placeholder:"Senha da Rede",value:c,onChange:f=>u(f.target.value)})]}),a.jsxs("div",{className:"switchContainer",children:[a.jsxs("label",{className:"switch",children:[a.jsx("input",{type:"checkbox",name:"switch",id:"switch",checked:n,onChange:f=>r(f.target.checked)}),a.jsx("span",{className:"slider"})]}),a.jsx("label",{className:"text",htmlFor:"switch",children:"Auto Reconectar Nesta Rede"})]}),a.jsx(OC,{onClickAway:()=>l(!1),children:a.jsx("button",{onClick:()=>d(),className:"conect",children:i?a.jsx(C1,{size:12,color:"inherit"}):"Conectar"})})]})},dn=(e,t,n)=>window.mta.triggerEvent(e,JSON.stringify(t)),QN=()=>(K(),w.useEffect(()=>{const e=setTimeout(()=>{dn("execPhoneCration",{}),clearTimeout(e)},200)},[]),a.jsxs(H.div,{initial:{x:100,opacity:.2},animate:{x:0,opacity:1},exit:{x:-200,opacity:.2},transition:{ease:"easeInOut",duration:.4},className:"page4",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Configurando o Aparelho"}),a.jsx("p",{children:"Isso pode levar alguns minutos."})]}),a.jsx(C1,{size:36,color:"inherit"})]})),J=w.createContext(),JN={showBottomNav:!1,bottomNavStyles:{background:"transparent",color:"#fff"},showStatusbar:!1,statusbarstyle:{background:"#f2f2fa",color:"#a8a8b3"}},eA=(e,t)=>{switch(t.type){case"showBottomNav":return{...e,showBottomNav:!0};case"removeBottomNav":return{...e,showBottomNav:!1};case"setBottomNavStyles":return{...e,bottomNavStyles:t.values};case"showStatusbar":return{...e,showStatusbar:!0};case"removeStatusbar":return{...e,showStatusbar:!1};case"setStatusBarStyle":return{...e,statusbarstyle:t.values}}},tA=({children:e})=>{const[t,n]=w.useReducer(eA,JN),r=po(-500),i=GS(),s=()=>({HandleY:r,controls:i});return a.jsx(J.Provider,{value:{SistemState:t,SistemDispatch:n,notificationsHanldes:s},children:e})},LC=w.createContext(void 0),$r=()=>{const e=w.useContext(LC);if(!e)throw new Error("useMta must be used within a MtaProvider");return e},nA=({children:e})=>{const[t,n]=I.useState([]),r=(s,o)=>{t.some(c=>c.event===s)||n(c=>[...c,{event:s,handler:o}])},i=window;return i.nuiCallFunction=s=>{const o=JSON.parse(s)[0];t.forEach(l=>{l.event==o.event&&l.handler(o.data)})},a.jsx(LC.Provider,{value:{addEventListener:r},children:e})},rA=()=>{const{SistemDispatch:e}=w.useContext(J),[t,n]=w.useState(1),[r,i]=w.useState(),[s,o]=w.useState([]),{addEventListener:l}=$r();l("receiveNetworks",h=>{o(h)});const[c,u]=w.useState(),d=h=>{i(h),n(3)},f=(h,g)=>{dn("execPhoneConnection",{network:h.id,password:g}),l("execPhoneConnectionCB",m=>{m&&u(h.name),n(2)})};return w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#f2f2fa",color:"#29292E"}})},[]),a.jsx(H.div,{animate:{backgroundColor:"#f2f2fa"},exit:{backgroundColor:"#101011"},transition:{ease:"easeInOut",duration:.4},style:{height:"100%",backgroundColor:"#f2f2fa"},children:a.jsxs(BT,{children:[a.jsxs(cr,{children:[t===1&&a.jsx(KT,{setPage:n},1),t===2&&a.jsx(ZT,{setPage:n,conectedNet:c,networks:s,handle:d},2),t===3&&a.jsx(XN,{handleConect:f,network:r},3),t===4&&a.jsx(QN,{},4)]}),t>1&&a.jsxs("div",{className:"nav",children:[a.jsx("button",{onClick:()=>n(t-1),disabled:t===4,children:a.jsx(XS,{})}),a.jsx("button",{className:"next",disabled:!c||t===4,onClick:()=>n(4),children:"Proximo"})]})]})})},iA=W.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .react-grid-layout {
    position: relative;
    width: 100%;
    height: 100% !important;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
    }
  }
  .react-grid-item.react-grid-placeholder {
    border: 1px solid #fff;
    border-radius: 8px;
    opacity: 0.4;
  }
  * {
    z-index: 10;
    cursor: default !important;
    user-select: none;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("https://media.discordapp.net/attachments/773208858516258826/1180009504096653324/sci-fi-cyberpunk-android-soldier-cgi-digital-art-phone-wallpaper-4k-uhdpaper.png")
      no-repeat;
    background-size: cover;
    z-index: 5;
  }

  .appIcon {
    width: 36px;
    animation: icon 0.4s ease-in;
  }

  @keyframes icon {
    from {
      transform: scale(0.4);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .MenuList {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 16px;
    padding: 36px 0 44px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .search {
      width: 86%;
      padding: 6px 12px;
      background-color: rgba(255, 255, 255, 0.18);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 82%;
        background: none;
        border: none;
        font-size: 10px;
        color: #fff;
        ::placeholder {
          color: #c4c4cc;
        }
      }
      svg {
        font-size: 12px;
        flex-shrink: 0;
        color: #f2f2fa;
      }
    }
    .carousel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      .control-arrow {
        display: none;
      }

      .slider-wrapper {
        width: 100%;
      }

      .slider-wrapper,
      .slider-wrapper ul {
        height: 100%;
      }
      & > div > ul {
        display: flex;
      }
      .control-dots {
        margin: 8px 0;
        display: flex;
        justify-content: center;
        gap: 8px;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #8d8d99;
          transition: 0.4s ease;
          &.active {
            background-color: #fff;
          }
        }
      }
    }
    .menu--apps {
      margin: 0 auto;
      width: 86%;
      height: 100%;
      padding: 16px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 12px;
      row-gap: 16px;
      li {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }
      img {
        width: 36px;
        z-index: 30;
      }
      p {
        font-size: 8px;
        text-align: center;
        word-break: normal;
      }
    }
  }
`;var IC={exports:{}},pl={},a0={exports:{}};(function(e,t){(function(n,r){r(t)})(A0,function(n){function r(q){return function(ee,re,se,Te,Qe,Dt,$e){return q(ee,re,$e)}}function i(q){return function(ee,re,se,Te){if(!ee||!re||typeof ee!="object"||typeof re!="object")return q(ee,re,se,Te);var Qe=Te.get(ee),Dt=Te.get(re);if(Qe&&Dt)return Qe===re&&Dt===ee;Te.set(ee,re),Te.set(re,ee);var $e=q(ee,re,se,Te);return Te.delete(ee),Te.delete(re),$e}}function s(q,X){var ee={};for(var re in q)ee[re]=q[re];for(var re in X)ee[re]=X[re];return ee}function o(q){return q.constructor===Object||q.constructor==null}function l(q){return typeof q.then=="function"}function c(q,X){return q===X||q!==q&&X!==X}var u="[object Arguments]",d="[object Boolean]",f="[object Date]",h="[object RegExp]",g="[object Map]",m="[object Number]",y="[object Object]",P="[object Set]",x="[object String]",p=Object.prototype.toString;function v(q){var X=q.areArraysEqual,ee=q.areDatesEqual,re=q.areMapsEqual,se=q.areObjectsEqual,Te=q.areRegExpsEqual,Qe=q.areSetsEqual,Dt=q.createIsNestedEqual,$e=Dt(gn);function gn(_e,De,Bt){if(_e===De)return!0;if(!_e||!De||typeof _e!="object"||typeof De!="object")return _e!==_e&&De!==De;if(o(_e)&&o(De))return se(_e,De,$e,Bt);var fs=Array.isArray(_e),kl=Array.isArray(De);if(fs||kl)return fs===kl&&X(_e,De,$e,Bt);var yn=p.call(_e);return yn!==p.call(De)?!1:yn===f?ee(_e,De,$e,Bt):yn===h?Te(_e,De,$e,Bt):yn===g?re(_e,De,$e,Bt):yn===P?Qe(_e,De,$e,Bt):yn===y||yn===u?l(_e)||l(De)?!1:se(_e,De,$e,Bt):yn===d||yn===m||yn===x?c(_e.valueOf(),De.valueOf()):!1}return gn}function C(q,X,ee,re){var se=q.length;if(X.length!==se)return!1;for(;se-- >0;)if(!ee(q[se],X[se],se,se,q,X,re))return!1;return!0}var b=i(C);function E(q,X){return c(q.valueOf(),X.valueOf())}function j(q,X,ee,re){var se=q.size===X.size;if(!se)return!1;if(!q.size)return!0;var Te={},Qe=0;return q.forEach(function(Dt,$e){if(se){var gn=!1,_e=0;X.forEach(function(De,Bt){!gn&&!Te[_e]&&(gn=ee($e,Bt,Qe,_e,q,X,re)&&ee(Dt,De,$e,Bt,q,X,re))&&(Te[_e]=!0),_e++}),Qe++,se=gn}}),se}var S=i(j),_="_owner",M=Object.prototype.hasOwnProperty;function T(q,X,ee,re){var se=Object.keys(q),Te=se.length;if(Object.keys(X).length!==Te)return!1;for(var Qe;Te-- >0;){if(Qe=se[Te],Qe===_){var Dt=!!q.$$typeof,$e=!!X.$$typeof;if((Dt||$e)&&Dt!==$e)return!1}if(!M.call(X,Qe)||!ee(q[Qe],X[Qe],Qe,Qe,q,X,re))return!1}return!0}var R=i(T);function O(q,X){return q.source===X.source&&q.flags===X.flags}function k(q,X,ee,re){var se=q.size===X.size;if(!se)return!1;if(!q.size)return!0;var Te={};return q.forEach(function(Qe,Dt){if(se){var $e=!1,gn=0;X.forEach(function(_e,De){!$e&&!Te[gn]&&($e=ee(Qe,_e,Dt,De,q,X,re))&&(Te[gn]=!0),gn++}),se=$e}}),se}var N=i(k),A=Object.freeze({areArraysEqual:C,areDatesEqual:E,areMapsEqual:j,areObjectsEqual:T,areRegExpsEqual:O,areSetsEqual:k,createIsNestedEqual:r}),D=Object.freeze({areArraysEqual:b,areDatesEqual:E,areMapsEqual:S,areObjectsEqual:R,areRegExpsEqual:O,areSetsEqual:N,createIsNestedEqual:r}),L=v(A);function $(q,X){return L(q,X,void 0)}var V=v(s(A,{createIsNestedEqual:function(){return c}}));function B(q,X){return V(q,X,void 0)}var Q=v(D);function xe(q,X){return Q(q,X,new WeakMap)}var de=v(s(D,{createIsNestedEqual:function(){return c}}));function pe(q,X){return de(q,X,new WeakMap)}function ge(q){return v(s(A,q(A)))}function we(q){var X=v(s(D,q(D)));return function(ee,re,se){return se===void 0&&(se=new WeakMap),X(ee,re,se)}}n.circularDeepEqual=xe,n.circularShallowEqual=pe,n.createCustomCircularEqual=we,n.createCustomEqual=ge,n.deepEqual=$,n.sameValueZeroEqual=c,n.shallowEqual=B,Object.defineProperty(n,"__esModule",{value:!0})})})(a0,a0.exports);var k1=a0.exports,he={},sA=function(t,n,r){return t===n?!0:t.className===n.className&&r(t.style,n.style)&&t.width===n.width&&t.autoSize===n.autoSize&&t.cols===n.cols&&t.draggableCancel===n.draggableCancel&&t.draggableHandle===n.draggableHandle&&r(t.verticalCompact,n.verticalCompact)&&r(t.compactType,n.compactType)&&r(t.layout,n.layout)&&r(t.margin,n.margin)&&r(t.containerPadding,n.containerPadding)&&t.rowHeight===n.rowHeight&&t.maxRows===n.maxRows&&t.isBounded===n.isBounded&&t.isDraggable===n.isDraggable&&t.isResizable===n.isResizable&&t.allowOverlap===n.allowOverlap&&t.preventCollision===n.preventCollision&&t.useCSSTransforms===n.useCSSTransforms&&t.transformScale===n.transformScale&&t.isDroppable===n.isDroppable&&r(t.resizeHandles,n.resizeHandles)&&r(t.resizeHandle,n.resizeHandle)&&t.onLayoutChange===n.onLayoutChange&&t.onDragStart===n.onDragStart&&t.onDrag===n.onDrag&&t.onDragStop===n.onDragStop&&t.onResizeStart===n.onResizeStart&&t.onResize===n.onResize&&t.onResizeStop===n.onResizeStop&&t.onDrop===n.onDrop&&r(t.droppingItem,n.droppingItem)&&r(t.innerRef,n.innerRef)};Object.defineProperty(he,"__esModule",{value:!0});he.bottom=j1;he.childrenEqual=lA;he.cloneLayout=$C;he.cloneLayoutItem=Ki;he.collides=qd;he.compact=BC;he.compactItem=FC;he.compactType=CA;he.correctBounds=VC;he.fastPositionEqual=uA;he.fastRGLPropsEqual=void 0;he.getAllCollisions=HC;he.getFirstCollision=Hi;he.getLayoutItem=P1;he.getStatics=E1;he.modifyLayout=DC;he.moveElement=ta;he.moveElementAwayFromCollision=c0;he.noop=void 0;he.perc=fA;he.resizeItemInDirection=vA;he.setTopLeft=wA;he.setTransform=xA;he.sortLayoutItems=z1;he.sortLayoutItemsByColRow=KC;he.sortLayoutItemsByRowCol=GC;he.synchronizeLayoutWithChildren=bA;he.validateLayout=SA;he.withLayoutItem=aA;var M2=k1,ea=oA(w);function oA(e){return e&&e.__esModule?e:{default:e}}function j1(e){let t=0,n;for(let r=0,i=e.length;r<i;r++)n=e[r].y+e[r].h,n>t&&(t=n);return t}function $C(e){const t=Array(e.length);for(let n=0,r=e.length;n<r;n++)t[n]=Ki(e[n]);return t}function DC(e,t){const n=Array(e.length);for(let r=0,i=e.length;r<i;r++)t.i===e[r].i?n[r]=t:n[r]=e[r];return n}function aA(e,t,n){let r=P1(e,t);return r?(r=n(Ki(r)),e=DC(e,r),[e,r]):[e,null]}function Ki(e){return{w:e.w,h:e.h,x:e.x,y:e.y,i:e.i,minW:e.minW,maxW:e.maxW,minH:e.minH,maxH:e.maxH,moved:!!e.moved,static:!!e.static,isDraggable:e.isDraggable,isResizable:e.isResizable,resizeHandles:e.resizeHandles,isBounded:e.isBounded}}function lA(e,t){return(0,M2.deepEqual)(ea.default.Children.map(e,n=>n==null?void 0:n.key),ea.default.Children.map(t,n=>n==null?void 0:n.key))&&(0,M2.deepEqual)(ea.default.Children.map(e,n=>n==null?void 0:n.props["data-grid"]),ea.default.Children.map(t,n=>n==null?void 0:n.props["data-grid"]))}const cA=sA;he.fastRGLPropsEqual=cA;function uA(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.width&&e.height===t.height}function qd(e,t){return!(e.i===t.i||e.x+e.w<=t.x||e.x>=t.x+t.w||e.y+e.h<=t.y||e.y>=t.y+t.h)}function BC(e,t,n,r){const i=E1(e),s=z1(e,t),o=Array(e.length);for(let l=0,c=s.length;l<c;l++){let u=Ki(s[l]);u.static||(u=FC(i,u,t,n,s,r),i.push(u)),o[e.indexOf(s[l])]=u,u.moved=!1}return o}const dA={x:"w",y:"h"};function l0(e,t,n,r){const i=dA[r];t[r]+=1;const s=e.map(o=>o.i).indexOf(t.i);for(let o=s+1;o<e.length;o++){const l=e[o];if(!l.static){if(l.y>t.y+t.h)break;qd(t,l)&&l0(e,l,n+t[i],r)}}t[r]=n}function FC(e,t,n,r,i,s){const o=n==="vertical",l=n==="horizontal";if(o)for(t.y=Math.min(j1(e),t.y);t.y>0&&!Hi(e,t);)t.y--;else if(l)for(;t.x>0&&!Hi(e,t);)t.x--;let c;for(;(c=Hi(e,t))&&!(n===null&&s);)if(l?l0(i,t,c.x+c.w,"x"):l0(i,t,c.y+c.h,"y"),l&&t.x+t.w>r)for(t.x=r-t.w,t.y++;t.x>0&&!Hi(e,t);)t.x--;return t.y=Math.max(t.y,0),t.x=Math.max(t.x,0),t}function VC(e,t){const n=E1(e);for(let r=0,i=e.length;r<i;r++){const s=e[r];if(s.x+s.w>t.cols&&(s.x=t.cols-s.w),s.x<0&&(s.x=0,s.w=t.cols),!s.static)n.push(s);else for(;Hi(n,s);)s.y++}return e}function P1(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n].i===t)return e[n]}function Hi(e,t){for(let n=0,r=e.length;n<r;n++)if(qd(e[n],t))return e[n]}function HC(e,t){return e.filter(n=>qd(n,t))}function E1(e){return e.filter(t=>t.static)}function ta(e,t,n,r,i,s,o,l,c){if(t.static&&t.isDraggable!==!0||t.y===r&&t.x===n)return e;"Moving element ".concat(t.i," to [").concat(String(n),",").concat(String(r),"] from [").concat(t.x,",").concat(t.y,"]");const u=t.x,d=t.y;typeof n=="number"&&(t.x=n),typeof r=="number"&&(t.y=r),t.moved=!0;let f=z1(e,o);(o==="vertical"&&typeof r=="number"?d>=r:o==="horizontal"&&typeof n=="number"?u>=n:!1)&&(f=f.reverse());const g=HC(f,t),m=g.length>0;if(m&&c)return $C(e);if(m&&s)return"Collision prevented on ".concat(t.i,", reverting."),t.x=u,t.y=d,t.moved=!1,e;for(let y=0,P=g.length;y<P;y++){const x=g[y];"Resolving collision between ".concat(t.i," at [").concat(t.x,",").concat(t.y,"] and ").concat(x.i," at [").concat(x.x,",").concat(x.y,"]"),!x.moved&&(x.static?e=c0(e,x,t,i,o):e=c0(e,t,x,i,o))}return e}function c0(e,t,n,r,i,s){const o=i==="horizontal",l=i==="vertical",c=t.static;if(r){r=!1;const f={x:o?Math.max(t.x-n.w,0):n.x,y:l?Math.max(t.y-n.h,0):n.y,w:n.w,h:n.h,i:"-1"},h=Hi(e,f),g=h&&h.y+h.h>t.y,m=h&&t.x+t.w>h.x;if(h){if(g&&l)return ta(e,n,void 0,t.y+1,r,c,i);if(g&&i==null)return t.y=n.y,n.y=n.y+n.h,e;if(m&&o)return ta(e,t,n.x,void 0,r,c,i)}else return"Doing reverse collision on ".concat(n.i," up to [").concat(f.x,",").concat(f.y,"]."),ta(e,n,o?f.x:void 0,l?f.y:void 0,r,c,i)}const u=o?n.x+1:void 0,d=l?n.y+1:void 0;return u==null&&d==null?e:ta(e,n,o?n.x+1:void 0,l?n.y+1:void 0,r,c,i)}function fA(e){return e*100+"%"}const WC=(e,t,n,r)=>e+n>r?t:n,UC=(e,t,n)=>e<0?t:n,qC=e=>Math.max(0,e),R1=e=>Math.max(0,e),M1=(e,t,n)=>{let{left:r,height:i,width:s}=t;const o=e.top-(i-e.height);return{left:r,width:s,height:UC(o,e.height,i),top:R1(o)}},T1=(e,t,n)=>{let{top:r,left:i,height:s,width:o}=t;return{top:r,height:s,width:WC(e.left,e.width,o,n),left:qC(i)}},_1=(e,t,n)=>{let{top:r,height:i,width:s}=t;const o=e.left-(s-e.width);return{height:i,width:o<0?e.width:WC(e.left,e.width,s,n),top:R1(r),left:qC(o)}},O1=(e,t,n)=>{let{top:r,left:i,height:s,width:o}=t;return{width:o,left:i,height:UC(r,e.height,s),top:R1(r)}},hA=function(){return M1(arguments.length<=0?void 0:arguments[0],T1(...arguments))},pA=function(){return M1(arguments.length<=0?void 0:arguments[0],_1(...arguments))},mA=function(){return O1(arguments.length<=0?void 0:arguments[0],T1(...arguments))},gA=function(){return O1(arguments.length<=0?void 0:arguments[0],_1(...arguments))},yA={n:M1,ne:hA,e:T1,se:mA,s:O1,sw:gA,w:_1,nw:pA};function vA(e,t,n,r){const i=yA[e];return i?i(t,{...t,...n},r):n}function xA(e){let{top:t,left:n,width:r,height:i}=e;const s="translate(".concat(n,"px,").concat(t,"px)");return{transform:s,WebkitTransform:s,MozTransform:s,msTransform:s,OTransform:s,width:"".concat(r,"px"),height:"".concat(i,"px"),position:"absolute"}}function wA(e){let{top:t,left:n,width:r,height:i}=e;return{top:"".concat(t,"px"),left:"".concat(n,"px"),width:"".concat(r,"px"),height:"".concat(i,"px"),position:"absolute"}}function z1(e,t){return t==="horizontal"?KC(e):t==="vertical"?GC(e):e}function GC(e){return e.slice(0).sort(function(t,n){return t.y>n.y||t.y===n.y&&t.x>n.x?1:t.y===n.y&&t.x===n.x?0:-1})}function KC(e){return e.slice(0).sort(function(t,n){return t.x>n.x||t.x===n.x&&t.y>n.y?1:-1})}function bA(e,t,n,r,i){e=e||[];const s=[];ea.default.Children.forEach(t,l=>{if((l==null?void 0:l.key)==null)return;const c=P1(e,String(l.key)),u=l.props["data-grid"];c&&u==null?s.push(Ki(c)):u?s.push(Ki({...u,i:l.key})):s.push(Ki({w:1,h:1,x:0,y:j1(s),i:String(l.key)}))});const o=VC(s,{cols:n});return i?o:BC(o,r,n)}function SA(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Layout";const n=["x","y","w","h"];if(!Array.isArray(e))throw new Error(t+" must be an array!");for(let r=0,i=e.length;r<i;r++){const s=e[r];for(let o=0;o<n.length;o++)if(typeof s[n[o]]!="number")throw new Error("ReactGridLayout: "+t+"["+r+"]."+n[o]+" must be a number!")}}function CA(e){const{verticalCompact:t,compactType:n}=e||{};return t===!1?null:n}const kA=()=>{};he.noop=kA;var fr={};Object.defineProperty(fr,"__esModule",{value:!0});fr.calcGridColWidth=Gd;fr.calcGridItemPosition=jA;fr.calcGridItemWHPx=u0;fr.calcWH=EA;fr.calcXY=PA;fr.clamp=Wi;function Gd(e){const{margin:t,containerPadding:n,containerWidth:r,cols:i}=e;return(r-t[0]*(i-1)-n[0]*2)/i}function u0(e,t,n){return Number.isFinite(e)?Math.round(t*e+Math.max(0,e-1)*n):e}function jA(e,t,n,r,i,s){const{margin:o,containerPadding:l,rowHeight:c}=e,u=Gd(e),d={};return s&&s.resizing?(d.width=Math.round(s.resizing.width),d.height=Math.round(s.resizing.height)):(d.width=u0(r,u,o[0]),d.height=u0(i,c,o[1])),s&&s.dragging?(d.top=Math.round(s.dragging.top),d.left=Math.round(s.dragging.left)):s&&s.resizing&&typeof s.resizing.top=="number"&&typeof s.resizing.left=="number"?(d.top=Math.round(s.resizing.top),d.left=Math.round(s.resizing.left)):(d.top=Math.round((c+o[1])*n+l[1]),d.left=Math.round((u+o[0])*t+l[0])),d}function PA(e,t,n,r,i){const{margin:s,cols:o,rowHeight:l,maxRows:c}=e,u=Gd(e);let d=Math.round((n-s[0])/(u+s[0])),f=Math.round((t-s[1])/(l+s[1]));return d=Wi(d,0,o-r),f=Wi(f,0,c-i),{x:d,y:f}}function EA(e,t,n,r,i,s){const{margin:o,maxRows:l,cols:c,rowHeight:u}=e,d=Gd(e);let f=Math.round((t+o[0])/(d+o[0])),h=Math.round((n+o[1])/(u+o[1])),g=Wi(f,0,c-r),m=Wi(h,0,l-i);return["sw","w","nw"].indexOf(s)!==-1&&(g=Wi(f,0,c)),["nw","n","ne"].indexOf(s)!==-1&&(m=Wi(h,0,l)),{w:g,h:m}}function Wi(e,t,n){return Math.max(Math.min(e,n),t)}var Kd={},Zd={exports:{}},ZC={};function YC(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=YC(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function T2(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=YC(e))&&(r&&(r+=" "),r+=t);return r}const RA=Object.freeze(Object.defineProperty({__proto__:null,clsx:T2,default:T2},Symbol.toStringTag,{value:"Module"})),MA=_w(RA);var Ze={},hr={};Object.defineProperty(hr,"__esModule",{value:!0});hr.dontSetMe=NA;hr.findInArray=TA;hr.int=zA;hr.isFunction=_A;hr.isNum=OA;function TA(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function _A(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function OA(e){return typeof e=="number"&&!isNaN(e)}function zA(e){return parseInt(e,10)}function NA(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var us={};Object.defineProperty(us,"__esModule",{value:!0});us.browserPrefixToKey=QC;us.browserPrefixToStyle=AA;us.default=void 0;us.getPrefix=XC;const hh=["Moz","Webkit","O","ms"];function XC(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<hh.length;r++)if(QC(t,hh[r])in n)return hh[r];return""}function QC(e,t){return t?"".concat(t).concat(LA(e)):e}function AA(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function LA(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}us.default=XC();Object.defineProperty(Ze,"__esModule",{value:!0});Ze.addClassName=t5;Ze.addEvent=DA;Ze.addUserSelectStyles=YA;Ze.createCSSTransform=qA;Ze.createSVGTransform=GA;Ze.getTouch=KA;Ze.getTouchIdentifier=ZA;Ze.getTranslation=N1;Ze.innerHeight=HA;Ze.innerWidth=WA;Ze.matchesSelector=e5;Ze.matchesSelectorAndParentsTo=$A;Ze.offsetXYFromParent=UA;Ze.outerHeight=FA;Ze.outerWidth=VA;Ze.removeClassName=n5;Ze.removeEvent=BA;Ze.removeUserSelectStyles=XA;var ln=hr,_2=IA(us);function JC(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(JC=function(r){return r?n:t})(e)}function IA(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=JC(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}let Zl="";function e5(e,t){return Zl||(Zl=(0,ln.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,ln.isFunction)(e[n])})),(0,ln.isFunction)(e[Zl])?e[Zl](t):!1}function $A(e,t,n){let r=e;do{if(e5(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function DA(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function BA(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function FA(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,ln.int)(n.borderTopWidth),t+=(0,ln.int)(n.borderBottomWidth),t}function VA(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,ln.int)(n.borderLeftWidth),t+=(0,ln.int)(n.borderRightWidth),t}function HA(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,ln.int)(n.paddingTop),t-=(0,ln.int)(n.paddingBottom),t}function WA(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,ln.int)(n.paddingLeft),t-=(0,ln.int)(n.paddingRight),t}function UA(e,t,n){const i=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-i.left)/n,o=(e.clientY+t.scrollTop-i.top)/n;return{x:s,y:o}}function qA(e,t){const n=N1(e,t,"px");return{[(0,_2.browserPrefixToKey)("transform",_2.default)]:n}}function GA(e,t){return N1(e,t,"")}function N1(e,t,n){let{x:r,y:i}=e,s="translate(".concat(r).concat(n,",").concat(i).concat(n,")");if(t){const o="".concat(typeof t.x=="string"?t.x:t.x+n),l="".concat(typeof t.y=="string"?t.y:t.y+n);s="translate(".concat(o,", ").concat(l,")")+s}return s}function KA(e,t){return e.targetTouches&&(0,ln.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,ln.findInArray)(e.changedTouches,n=>t===n.identifier)}function ZA(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function YA(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&t5(e.body,"react-draggable-transparent-selection")}function XA(e){if(e)try{if(e.body&&n5(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function t5(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function n5(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.canDragX=eL;pr.canDragY=tL;pr.createCoreData=rL;pr.createDraggableData=iL;pr.getBoundPosition=QA;pr.getControlPosition=nL;pr.snapToGrid=JA;var Jt=hr,Vs=Ze;function QA(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:sL(r);const i=A1(e);if(typeof r=="string"){const{ownerDocument:s}=i,o=s.defaultView;let l;if(r==="parent"?l=i.parentNode:l=s.querySelector(r),!(l instanceof o.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const c=l,u=o.getComputedStyle(i),d=o.getComputedStyle(c);r={left:-i.offsetLeft+(0,Jt.int)(d.paddingLeft)+(0,Jt.int)(u.marginLeft),top:-i.offsetTop+(0,Jt.int)(d.paddingTop)+(0,Jt.int)(u.marginTop),right:(0,Vs.innerWidth)(c)-(0,Vs.outerWidth)(i)-i.offsetLeft+(0,Jt.int)(d.paddingRight)-(0,Jt.int)(u.marginRight),bottom:(0,Vs.innerHeight)(c)-(0,Vs.outerHeight)(i)-i.offsetTop+(0,Jt.int)(d.paddingBottom)-(0,Jt.int)(u.marginBottom)}}return(0,Jt.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,Jt.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Jt.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,Jt.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function JA(e,t,n){const r=Math.round(t/e[0])*e[0],i=Math.round(n/e[1])*e[1];return[r,i]}function eL(e){return e.props.axis==="both"||e.props.axis==="x"}function tL(e){return e.props.axis==="both"||e.props.axis==="y"}function nL(e,t,n){const r=typeof t=="number"?(0,Vs.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const i=A1(n),s=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,Vs.offsetXYFromParent)(r||e,s,n.props.scale)}function rL(e,t,n){const r=!(0,Jt.isNum)(e.lastX),i=A1(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function iL(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function sL(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function A1(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var Yd={},Xd={};Object.defineProperty(Xd,"__esModule",{value:!0});Xd.default=oL;function oL(){}Object.defineProperty(Yd,"__esModule",{value:!0});Yd.default=void 0;var ph=lL(w),Ft=L1(dr),aL=L1(Tm),kt=Ze,Vr=pr,mh=hr,Bo=L1(Xd);function L1(e){return e&&e.__esModule?e:{default:e}}function r5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(r5=function(r){return r?n:t})(e)}function lL(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=r5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function zt(e,t,n){return t=cL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cL(e){var t=uL(e,"string");return typeof t=="symbol"?t:String(t)}function uL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _n={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Hr=_n.mouse,Qd=class extends ph.Component{constructor(){super(...arguments),zt(this,"dragging",!1),zt(this,"lastX",NaN),zt(this,"lastY",NaN),zt(this,"touchIdentifier",null),zt(this,"mounted",!1),zt(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,kt.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,kt.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const i=(0,kt.getTouchIdentifier)(t);this.touchIdentifier=i;const s=(0,Vr.getControlPosition)(t,i,this);if(s==null)return;const{x:o,y:l}=s,c=(0,Vr.createCoreData)(this,o,l);(0,Bo.default)("DraggableCore: handleDragStart: %j",c),(0,Bo.default)("calling",this.props.onStart),!(this.props.onStart(t,c)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,kt.addUserSelectStyles)(r),this.dragging=!0,this.lastX=o,this.lastY=l,(0,kt.addEvent)(r,Hr.move,this.handleDrag),(0,kt.addEvent)(r,Hr.stop,this.handleDragStop))}),zt(this,"handleDrag",t=>{const n=(0,Vr.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:i}=n;if(Array.isArray(this.props.grid)){let l=r-this.lastX,c=i-this.lastY;if([l,c]=(0,Vr.snapToGrid)(this.props.grid,l,c),!l&&!c)return;r=this.lastX+l,i=this.lastY+c}const s=(0,Vr.createCoreData)(this,r,i);if((0,Bo.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(c)}return}this.lastX=r,this.lastY=i}),zt(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Vr.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:i}=n;if(Array.isArray(this.props.grid)){let c=r-this.lastX||0,u=i-this.lastY||0;[c,u]=(0,Vr.snapToGrid)(this.props.grid,c,u),r=this.lastX+c,i=this.lastY+u}const s=(0,Vr.createCoreData)(this,r,i);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const l=this.findDOMNode();l&&this.props.enableUserSelectHack&&(0,kt.removeUserSelectStyles)(l.ownerDocument),(0,Bo.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,l&&((0,Bo.default)("DraggableCore: Removing handlers"),(0,kt.removeEvent)(l.ownerDocument,Hr.move,this.handleDrag),(0,kt.removeEvent)(l.ownerDocument,Hr.stop,this.handleDragStop))}),zt(this,"onMouseDown",t=>(Hr=_n.mouse,this.handleDragStart(t))),zt(this,"onMouseUp",t=>(Hr=_n.mouse,this.handleDragStop(t))),zt(this,"onTouchStart",t=>(Hr=_n.touch,this.handleDragStart(t))),zt(this,"onTouchEnd",t=>(Hr=_n.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,kt.addEvent)(t,_n.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,kt.removeEvent)(n,_n.mouse.move,this.handleDrag),(0,kt.removeEvent)(n,_n.touch.move,this.handleDrag),(0,kt.removeEvent)(n,_n.mouse.stop,this.handleDragStop),(0,kt.removeEvent)(n,_n.touch.stop,this.handleDragStop),(0,kt.removeEvent)(t,_n.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,kt.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:aL.default.findDOMNode(this)}render(){return ph.cloneElement(ph.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};Yd.default=Qd;zt(Qd,"displayName","DraggableCore");zt(Qd,"propTypes",{allowAnyClick:Ft.default.bool,children:Ft.default.node.isRequired,disabled:Ft.default.bool,enableUserSelectHack:Ft.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Ft.default.arrayOf(Ft.default.number),handle:Ft.default.string,cancel:Ft.default.string,nodeRef:Ft.default.object,onStart:Ft.default.func,onDrag:Ft.default.func,onStop:Ft.default.func,onMouseDown:Ft.default.func,scale:Ft.default.number,className:mh.dontSetMe,style:mh.dontSetMe,transform:mh.dontSetMe});zt(Qd,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),e.default=void 0;var t=h(w),n=d(dr),r=d(Tm),i=d(MA),s=Ze,o=pr,l=hr,c=d(Yd),u=d(Xd);function d(p){return p&&p.__esModule?p:{default:p}}function f(p){if(typeof WeakMap!="function")return null;var v=new WeakMap,C=new WeakMap;return(f=function(b){return b?C:v})(p)}function h(p,v){if(!v&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var C=f(v);if(C&&C.has(p))return C.get(p);var b={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in p)if(j!=="default"&&Object.prototype.hasOwnProperty.call(p,j)){var S=E?Object.getOwnPropertyDescriptor(p,j):null;S&&(S.get||S.set)?Object.defineProperty(b,j,S):b[j]=p[j]}return b.default=p,C&&C.set(p,b),b}function g(){return g=Object.assign?Object.assign.bind():function(p){for(var v=1;v<arguments.length;v++){var C=arguments[v];for(var b in C)Object.prototype.hasOwnProperty.call(C,b)&&(p[b]=C[b])}return p},g.apply(this,arguments)}function m(p,v,C){return v=y(v),v in p?Object.defineProperty(p,v,{value:C,enumerable:!0,configurable:!0,writable:!0}):p[v]=C,p}function y(p){var v=P(p,"string");return typeof v=="symbol"?v:String(v)}function P(p,v){if(typeof p!="object"||p===null)return p;var C=p[Symbol.toPrimitive];if(C!==void 0){var b=C.call(p,v||"default");if(typeof b!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(p)}class x extends t.Component{static getDerivedStateFromProps(v,C){let{position:b}=v,{prevPropsPosition:E}=C;return b&&(!E||b.x!==E.x||b.y!==E.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:b,prevPropsPosition:E}),{x:b.x,y:b.y,prevPropsPosition:{...b}}):null}constructor(v){super(v),m(this,"onDragStart",(C,b)=>{if((0,u.default)("Draggable: onDragStart: %j",b),this.props.onStart(C,(0,o.createDraggableData)(this,b))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),m(this,"onDrag",(C,b)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",b);const E=(0,o.createDraggableData)(this,b),j={x:E.x,y:E.y,slackX:0,slackY:0};if(this.props.bounds){const{x:_,y:M}=j;j.x+=this.state.slackX,j.y+=this.state.slackY;const[T,R]=(0,o.getBoundPosition)(this,j.x,j.y);j.x=T,j.y=R,j.slackX=this.state.slackX+(_-j.x),j.slackY=this.state.slackY+(M-j.y),E.x=j.x,E.y=j.y,E.deltaX=j.x-this.state.x,E.deltaY=j.y-this.state.y}if(this.props.onDrag(C,E)===!1)return!1;this.setState(j)}),m(this,"onDragStop",(C,b)=>{if(!this.state.dragging||this.props.onStop(C,(0,o.createDraggableData)(this,b))===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",b);const j={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:_,y:M}=this.props.position;j.x=_,j.y=M}this.setState(j)}),this.state={dragging:!1,dragged:!1,x:v.position?v.position.x:v.defaultPosition.x,y:v.position?v.position.y:v.defaultPosition.y,prevPropsPosition:{...v.position},slackX:0,slackY:0,isElementSVG:!1},v.position&&!(v.onDrag||v.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var v,C;return(v=(C=this.props)===null||C===void 0||(C=C.nodeRef)===null||C===void 0?void 0:C.current)!==null&&v!==void 0?v:r.default.findDOMNode(this)}render(){const{axis:v,bounds:C,children:b,defaultPosition:E,defaultClassName:j,defaultClassNameDragging:S,defaultClassNameDragged:_,position:M,positionOffset:T,scale:R,...O}=this.props;let k={},N=null;const D=!!!M||this.state.dragging,L=M||E,$={x:(0,o.canDragX)(this)&&D?this.state.x:L.x,y:(0,o.canDragY)(this)&&D?this.state.y:L.y};this.state.isElementSVG?N=(0,s.createSVGTransform)($,T):k=(0,s.createCSSTransform)($,T);const V=(0,i.default)(b.props.className||"",j,{[S]:this.state.dragging,[_]:this.state.dragged});return t.createElement(c.default,g({},O,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(b),{className:V,style:{...b.props.style,...k},transform:N}))}}e.default=x,m(x,"displayName","Draggable"),m(x,"propTypes",{...c.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),m(x,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ZC);const{default:i5,DraggableCore:dL}=ZC;Zd.exports=i5;Zd.exports.default=i5;Zd.exports.DraggableCore=dL;var s5=Zd.exports,Jd={exports:{}},ml={},I1={};I1.__esModule=!0;I1.cloneElement=yL;var fL=hL(w);function hL(e){return e&&e.__esModule?e:{default:e}}function O2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function z2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O2(Object(n),!0).forEach(function(r){pL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pL(e,t,n){return t=mL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mL(e){var t=gL(e,"string");return typeof t=="symbol"?t:String(t)}function gL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yL(e,t){return t.style&&e.props.style&&(t.style=z2(z2({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),fL.default.cloneElement(e,t)}var gl={};gl.__esModule=!0;gl.resizableProps=void 0;var ie=vL(dr);function vL(e){return e&&e.__esModule?e:{default:e}}var xL={axis:ie.default.oneOf(["both","x","y","none"]),className:ie.default.string,children:ie.default.element.isRequired,draggableOpts:ie.default.shape({allowAnyClick:ie.default.bool,cancel:ie.default.string,children:ie.default.node,disabled:ie.default.bool,enableUserSelectHack:ie.default.bool,offsetParent:ie.default.node,grid:ie.default.arrayOf(ie.default.number),handle:ie.default.string,nodeRef:ie.default.object,onStart:ie.default.func,onDrag:ie.default.func,onStop:ie.default.func,onMouseDown:ie.default.func,scale:ie.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0];if(i.axis==="both"||i.axis==="y"){var s;return(s=ie.default.number).isRequired.apply(s,n)}return ie.default.number.apply(ie.default,n)},handle:ie.default.oneOfType([ie.default.node,ie.default.func]),handleSize:ie.default.arrayOf(ie.default.number),lockAspectRatio:ie.default.bool,maxConstraints:ie.default.arrayOf(ie.default.number),minConstraints:ie.default.arrayOf(ie.default.number),onResizeStop:ie.default.func,onResizeStart:ie.default.func,onResize:ie.default.func,resizeHandles:ie.default.arrayOf(ie.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:ie.default.number,width:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0];if(i.axis==="both"||i.axis==="x"){var s;return(s=ie.default.number).isRequired.apply(s,n)}return ie.default.number.apply(ie.default,n)}};gl.resizableProps=xL;ml.__esModule=!0;ml.default=void 0;var Fo=kL(w),wL=s5,bL=I1,SL=gl,CL=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function o5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(o5=function(i){return i?n:t})(e)}function kL(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=o5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function d0(){return d0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d0.apply(this,arguments)}function jL(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function N2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N2(Object(n),!0).forEach(function(r){PL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PL(e,t,n){return t=EL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function EL(e){var t=RL(e,"string");return typeof t=="symbol"?t:String(t)}function RL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ML(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,f0(e,t)}function f0(e,t){return f0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},f0(e,t)}var $1=function(e){ML(t,e);function t(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s))||this,r.handleRefs={},r.lastHandleRect=null,r.slack=null,r}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(i,s){var o=this.props,l=o.minConstraints,c=o.maxConstraints,u=o.lockAspectRatio;if(!l&&!c&&!u)return[i,s];if(u){var d=this.props.width/this.props.height,f=i-this.props.width,h=s-this.props.height;Math.abs(f)>Math.abs(h*d)?s=i/d:i=s*d}var g=i,m=s,y=this.slack||[0,0],P=y[0],x=y[1];return i+=P,s+=x,l&&(i=Math.max(l[0],i),s=Math.max(l[1],s)),c&&(i=Math.min(c[0],i),s=Math.min(c[1],s)),this.slack=[P+(g-i),x+(m-s)],[i,s]},n.resizeHandler=function(i,s){var o=this;return function(l,c){var u=c.node,d=c.deltaX,f=c.deltaY;i==="onResizeStart"&&o.resetData();var h=(o.props.axis==="both"||o.props.axis==="x")&&s!=="n"&&s!=="s",g=(o.props.axis==="both"||o.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!h&&!g)){var m=s[0],y=s[s.length-1],P=u.getBoundingClientRect();if(o.lastHandleRect!=null){if(y==="w"){var x=P.left-o.lastHandleRect.left;d+=x}if(m==="n"){var p=P.top-o.lastHandleRect.top;f+=p}}o.lastHandleRect=P,y==="w"&&(d=-d),m==="n"&&(f=-f);var v=o.props.width+(h?d/o.props.transformScale:0),C=o.props.height+(g?f/o.props.transformScale:0),b=o.runConstraints(v,C);v=b[0],C=b[1];var E=v!==o.props.width||C!==o.props.height,j=typeof o.props[i]=="function"?o.props[i]:null,S=i==="onResize"&&!E;j&&!S&&(l.persist==null||l.persist(),j(l,{node:u,size:{width:v,height:C},handle:s})),i==="onResizeStop"&&o.resetData()}}},n.renderResizeHandle=function(i,s){var o=this.props.handle;if(!o)return Fo.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+i,ref:s});if(typeof o=="function")return o(i,s);var l=typeof o.type=="string",c=gh({ref:s},l?{}:{handleAxis:i});return Fo.cloneElement(o,c)},n.render=function(){var i=this,s=this.props,o=s.children,l=s.className,c=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var u=s.resizeHandles;s.transformScale;var d=jL(s,CL);return(0,bL.cloneElement)(o,gh(gh({},d),{},{className:(l?l+" ":"")+"react-resizable",children:[].concat(o.props.children,u.map(function(f){var h,g=(h=i.handleRefs[f])!=null?h:i.handleRefs[f]=Fo.createRef();return Fo.createElement(wL.DraggableCore,d0({},c,{nodeRef:g,key:"resizableHandle-"+f,onStop:i.resizeHandler("onResizeStop",f),onStart:i.resizeHandler("onResizeStart",f),onDrag:i.resizeHandler("onResize",f)}),i.renderResizeHandle(f,g))}))}))},t}(Fo.Component);ml.default=$1;$1.propTypes=SL.resizableProps;$1.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var ef={};ef.__esModule=!0;ef.default=void 0;var yh=NL(w),TL=a5(dr),_L=a5(ml),OL=gl,zL=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function a5(e){return e&&e.__esModule?e:{default:e}}function l5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(l5=function(i){return i?n:t})(e)}function NL(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=l5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function h0(){return h0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h0.apply(this,arguments)}function A2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A2(Object(n),!0).forEach(function(r){AL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AL(e,t,n){return t=LL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LL(e){var t=IL(e,"string");return typeof t=="symbol"?t:String(t)}function IL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $L(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function DL(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p0(e,t)}function p0(e,t){return p0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},p0(e,t)}var c5=function(e){DL(t,e);function t(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s))||this,r.state={width:r.props.width,height:r.props.height,propsWidth:r.props.width,propsHeight:r.props.height},r.onResize=function(l,c){var u=c.size;r.props.onResize?(l.persist==null||l.persist(),r.setState(u,function(){return r.props.onResize&&r.props.onResize(l,c)})):r.setState(u)},r}t.getDerivedStateFromProps=function(i,s){return s.propsWidth!==i.width||s.propsHeight!==i.height?{width:i.width,height:i.height,propsWidth:i.width,propsHeight:i.height}:null};var n=t.prototype;return n.render=function(){var i=this.props,s=i.handle,o=i.handleSize;i.onResize;var l=i.onResizeStart,c=i.onResizeStop,u=i.draggableOpts,d=i.minConstraints,f=i.maxConstraints,h=i.lockAspectRatio,g=i.axis;i.width,i.height;var m=i.resizeHandles,y=i.style,P=i.transformScale,x=$L(i,zL);return yh.createElement(_L.default,{axis:g,draggableOpts:u,handle:s,handleSize:o,height:this.state.height,lockAspectRatio:h,maxConstraints:f,minConstraints:d,onResizeStart:l,onResize:this.onResize,onResizeStop:c,resizeHandles:m,transformScale:P,width:this.state.width},yh.createElement("div",h0({},x,{style:Tu(Tu({},y),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(yh.Component);ef.default=c5;c5.propTypes=Tu(Tu({},OL.resizableProps),{},{children:TL.default.element});Jd.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};Jd.exports.Resizable=ml.default;Jd.exports.ResizableBox=ef.default;var BL=Jd.exports,Rr={};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.resizeHandleType=Rr.resizeHandleAxesType=Rr.default=void 0;var ae=u5(dr),FL=u5(w);function u5(e){return e&&e.__esModule?e:{default:e}}const d5=ae.default.arrayOf(ae.default.oneOf(["s","w","e","n","sw","nw","se","ne"]));Rr.resizeHandleAxesType=d5;const f5=ae.default.oneOfType([ae.default.node,ae.default.func]);Rr.resizeHandleType=f5;var VL={className:ae.default.string,style:ae.default.object,width:ae.default.number,autoSize:ae.default.bool,cols:ae.default.number,draggableCancel:ae.default.string,draggableHandle:ae.default.string,verticalCompact:function(e){e.verticalCompact},compactType:ae.default.oneOf(["vertical","horizontal"]),layout:function(e){var t=e.layout;t!==void 0&&he.validateLayout(t,"layout")},margin:ae.default.arrayOf(ae.default.number),containerPadding:ae.default.arrayOf(ae.default.number),rowHeight:ae.default.number,maxRows:ae.default.number,isBounded:ae.default.bool,isDraggable:ae.default.bool,isResizable:ae.default.bool,allowOverlap:ae.default.bool,preventCollision:ae.default.bool,useCSSTransforms:ae.default.bool,transformScale:ae.default.number,isDroppable:ae.default.bool,resizeHandles:d5,resizeHandle:f5,onLayoutChange:ae.default.func,onDragStart:ae.default.func,onDrag:ae.default.func,onDragStop:ae.default.func,onResizeStart:ae.default.func,onResize:ae.default.func,onResizeStop:ae.default.func,onDrop:ae.default.func,droppingItem:ae.default.shape({i:ae.default.string.isRequired,w:ae.default.number.isRequired,h:ae.default.number.isRequired}),children:function(e,t){const n=e[t],r={};FL.default.Children.forEach(n,function(i){if((i==null?void 0:i.key)!=null){if(r[i.key])throw new Error('Duplicate child key "'+i.key+'" found! This will cause problems in ReactGridLayout.');r[i.key]=!0}})},innerRef:ae.default.any};Rr.default=VL;Object.defineProperty(Kd,"__esModule",{value:!0});Kd.default=void 0;var ws=D1(w),be=D1(dr),HL=s5,WL=BL,bs=he,pt=fr,L2=Rr,UL=D1(Vd);function D1(e){return e&&e.__esModule?e:{default:e}}function Zn(e,t,n){return t=qL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qL(e){var t=GL(e,"string");return typeof t=="symbol"?t:String(t)}function GL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class B1 extends ws.default.Component{constructor(){super(...arguments),Zn(this,"state",{resizing:null,dragging:null,className:""}),Zn(this,"elementRef",ws.default.createRef()),Zn(this,"onDragStart",(t,n)=>{let{node:r}=n;const{onDragStart:i,transformScale:s}=this.props;if(!i)return;const o={top:0,left:0},{offsetParent:l}=r;if(!l)return;const c=l.getBoundingClientRect(),u=r.getBoundingClientRect(),d=u.left/s,f=c.left/s,h=u.top/s,g=c.top/s;o.left=d-f+l.scrollLeft,o.top=h-g+l.scrollTop,this.setState({dragging:o});const{x:m,y}=(0,pt.calcXY)(this.getPositionParams(),o.top,o.left,this.props.w,this.props.h);return i.call(this,this.props.i,m,y,{e:t,node:r,newPosition:o})}),Zn(this,"onDrag",(t,n)=>{let{node:r,deltaX:i,deltaY:s}=n;const{onDrag:o}=this.props;if(!o)return;if(!this.state.dragging)throw new Error("onDrag called before onDragStart.");let l=this.state.dragging.top+s,c=this.state.dragging.left+i;const{isBounded:u,i:d,w:f,h,containerWidth:g}=this.props,m=this.getPositionParams();if(u){const{offsetParent:p}=r;if(p){const{margin:v,rowHeight:C}=this.props,b=p.clientHeight-(0,pt.calcGridItemWHPx)(h,C,v[1]);l=(0,pt.clamp)(l,0,b);const E=(0,pt.calcGridColWidth)(m),j=g-(0,pt.calcGridItemWHPx)(f,E,v[0]);c=(0,pt.clamp)(c,0,j)}}const y={top:l,left:c};this.setState({dragging:y});const{x:P,y:x}=(0,pt.calcXY)(m,l,c,f,h);return o.call(this,d,P,x,{e:t,node:r,newPosition:y})}),Zn(this,"onDragStop",(t,n)=>{let{node:r}=n;const{onDragStop:i}=this.props;if(!i)return;if(!this.state.dragging)throw new Error("onDragEnd called before onDragStart.");const{w:s,h:o,i:l}=this.props,{left:c,top:u}=this.state.dragging,d={top:u,left:c};this.setState({dragging:null});const{x:f,y:h}=(0,pt.calcXY)(this.getPositionParams(),u,c,s,o);return i.call(this,l,f,h,{e:t,node:r,newPosition:d})}),Zn(this,"onResizeStop",(t,n,r)=>this.onResizeHandler(t,n,r,"onResizeStop")),Zn(this,"onResizeStart",(t,n,r)=>this.onResizeHandler(t,n,r,"onResizeStart")),Zn(this,"onResize",(t,n,r)=>this.onResizeHandler(t,n,r,"onResize"))}shouldComponentUpdate(t,n){if(this.props.children!==t.children||this.props.droppingPosition!==t.droppingPosition)return!0;const r=(0,pt.calcGridItemPosition)(this.getPositionParams(this.props),this.props.x,this.props.y,this.props.w,this.props.h,this.state),i=(0,pt.calcGridItemPosition)(this.getPositionParams(t),t.x,t.y,t.w,t.h,n);return!(0,bs.fastPositionEqual)(r,i)||this.props.useCSSTransforms!==t.useCSSTransforms}componentDidMount(){this.moveDroppingItem({})}componentDidUpdate(t){this.moveDroppingItem(t)}moveDroppingItem(t){const{droppingPosition:n}=this.props;if(!n)return;const r=this.elementRef.current;if(!r)return;const i=t.droppingPosition||{left:0,top:0},{dragging:s}=this.state,o=s&&n.left!==i.left||n.top!==i.top;if(!s)this.onDragStart(n.e,{node:r,deltaX:n.left,deltaY:n.top});else if(o){const l=n.left-s.left,c=n.top-s.top;this.onDrag(n.e,{node:r,deltaX:l,deltaY:c})}}getPositionParams(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props;return{cols:t.cols,containerPadding:t.containerPadding,containerWidth:t.containerWidth,margin:t.margin,maxRows:t.maxRows,rowHeight:t.rowHeight}}createStyle(t){const{usePercentages:n,containerWidth:r,useCSSTransforms:i}=this.props;let s;return i?s=(0,bs.setTransform)(t):(s=(0,bs.setTopLeft)(t),n&&(s.left=(0,bs.perc)(t.left/r),s.width=(0,bs.perc)(t.width/r))),s}mixinDraggable(t,n){return ws.default.createElement(HL.DraggableCore,{disabled:!n,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,handle:this.props.handle,cancel:".react-resizable-handle"+(this.props.cancel?","+this.props.cancel:""),scale:this.props.transformScale,nodeRef:this.elementRef},t)}curryResizeHandler(t,n){return(r,i)=>n(r,i,t)}mixinResizable(t,n,r){const{cols:i,minW:s,minH:o,maxW:l,maxH:c,transformScale:u,resizeHandles:d,resizeHandle:f}=this.props,h=this.getPositionParams(),g=(0,pt.calcGridItemPosition)(h,0,0,i,0).width,m=(0,pt.calcGridItemPosition)(h,0,0,s,o),y=(0,pt.calcGridItemPosition)(h,0,0,l,c),P=[m.width,m.height],x=[Math.min(y.width,g),Math.min(y.height,1/0)];return ws.default.createElement(WL.Resizable,{draggableOpts:{disabled:!r},className:r?void 0:"react-resizable-hide",width:n.width,height:n.height,minConstraints:P,maxConstraints:x,onResizeStop:this.curryResizeHandler(n,this.onResizeStop),onResizeStart:this.curryResizeHandler(n,this.onResizeStart),onResize:this.curryResizeHandler(n,this.onResize),transformScale:u,resizeHandles:d,handle:f},t)}onResizeHandler(t,n,r,i){let{node:s,size:o,handle:l}=n;const c=this.props[i];if(!c)return;const{x:u,y:d,i:f,maxH:h,minH:g,containerWidth:m}=this.props,{minW:y,maxW:P}=this.props;let x=o;s&&(x=(0,bs.resizeItemInDirection)(l,r,o,m),this.setState({resizing:i==="onResizeStop"?null:x}));let{w:p,h:v}=(0,pt.calcWH)(this.getPositionParams(),x.width,x.height,u,d,l);p=(0,pt.clamp)(p,Math.max(y,1),P),v=(0,pt.clamp)(v,g,h),c.call(this,f,p,v,{e:t,node:s,size:x,handle:l})}render(){const{x:t,y:n,w:r,h:i,isDraggable:s,isResizable:o,droppingPosition:l,useCSSTransforms:c}=this.props,u=(0,pt.calcGridItemPosition)(this.getPositionParams(),t,n,r,i,this.state),d=ws.default.Children.only(this.props.children);let f=ws.default.cloneElement(d,{ref:this.elementRef,className:(0,UL.default)("react-grid-item",d.props.className,this.props.className,{static:this.props.static,resizing:!!this.state.resizing,"react-draggable":s,"react-draggable-dragging":!!this.state.dragging,dropping:!!l,cssTransforms:c}),style:{...this.props.style,...d.props.style,...this.createStyle(u)}});return f=this.mixinResizable(f,u,o),f=this.mixinDraggable(f,s),f}}Kd.default=B1;Zn(B1,"propTypes",{children:be.default.element,cols:be.default.number.isRequired,containerWidth:be.default.number.isRequired,rowHeight:be.default.number.isRequired,margin:be.default.array.isRequired,maxRows:be.default.number.isRequired,containerPadding:be.default.array.isRequired,x:be.default.number.isRequired,y:be.default.number.isRequired,w:be.default.number.isRequired,h:be.default.number.isRequired,minW:function(e,t){const n=e[t];if(typeof n!="number")return new Error("minWidth not Number");if(n>e.w||n>e.maxW)return new Error("minWidth larger than item width/maxWidth")},maxW:function(e,t){const n=e[t];if(typeof n!="number")return new Error("maxWidth not Number");if(n<e.w||n<e.minW)return new Error("maxWidth smaller than item width/minWidth")},minH:function(e,t){const n=e[t];if(typeof n!="number")return new Error("minHeight not Number");if(n>e.h||n>e.maxH)return new Error("minHeight larger than item height/maxHeight")},maxH:function(e,t){const n=e[t];if(typeof n!="number")return new Error("maxHeight not Number");if(n<e.h||n<e.minH)return new Error("maxHeight smaller than item height/minHeight")},i:be.default.string.isRequired,resizeHandles:L2.resizeHandleAxesType,resizeHandle:L2.resizeHandleType,onDragStop:be.default.func,onDragStart:be.default.func,onDrag:be.default.func,onResizeStop:be.default.func,onResizeStart:be.default.func,onResize:be.default.func,isDraggable:be.default.bool.isRequired,isResizable:be.default.bool.isRequired,isBounded:be.default.bool.isRequired,static:be.default.bool,useCSSTransforms:be.default.bool.isRequired,transformScale:be.default.number,className:be.default.string,handle:be.default.string,cancel:be.default.string,droppingPosition:be.default.shape({e:be.default.object.isRequired,left:be.default.number.isRequired,top:be.default.number.isRequired})});Zn(B1,"defaultProps",{className:"",cancel:"",handle:"",minH:1,minW:1,maxH:1/0,maxW:1/0,transformScale:1});Object.defineProperty(pl,"__esModule",{value:!0});pl.default=void 0;var Ei=XL(w),vh=k1,KL=F1(Vd),ne=he,ZL=fr,I2=F1(Kd),YL=F1(Rr);function F1(e){return e&&e.__esModule?e:{default:e}}function h5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(h5=function(r){return r?n:t})(e)}function XL(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=h5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function Rt(e,t,n){return t=QL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QL(e){var t=JL(e,"string");return typeof t=="symbol"?t:String(t)}function JL(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const $2="react-grid-layout";let p5=!1;try{p5=/firefox/i.test(navigator.userAgent)}catch{}let tf=class extends Ei.Component{constructor(){super(...arguments),Rt(this,"state",{activeDrag:null,layout:(0,ne.synchronizeLayoutWithChildren)(this.props.layout,this.props.children,this.props.cols,(0,ne.compactType)(this.props),this.props.allowOverlap),mounted:!1,oldDragItem:null,oldLayout:null,oldResizeItem:null,resizing:!1,droppingDOMNode:null,children:[]}),Rt(this,"dragEnterCounter",0),Rt(this,"onDragStart",(t,n,r,i)=>{let{e:s,node:o}=i;const{layout:l}=this.state,c=(0,ne.getLayoutItem)(l,t);if(c)return this.setState({oldDragItem:(0,ne.cloneLayoutItem)(c),oldLayout:l}),this.props.onDragStart(l,c,c,null,s,o)}),Rt(this,"onDrag",(t,n,r,i)=>{let{e:s,node:o}=i;const{oldDragItem:l}=this.state;let{layout:c}=this.state;const{cols:u,allowOverlap:d,preventCollision:f}=this.props,h=(0,ne.getLayoutItem)(c,t);if(!h)return;const g={w:h.w,h:h.h,x:h.x,y:h.y,placeholder:!0,i:t},m=!0;c=(0,ne.moveElement)(c,h,n,r,m,f,(0,ne.compactType)(this.props),u,d),this.props.onDrag(c,l,h,g,s,o),this.setState({layout:d?c:(0,ne.compact)(c,(0,ne.compactType)(this.props),u),activeDrag:g})}),Rt(this,"onDragStop",(t,n,r,i)=>{let{e:s,node:o}=i;if(!this.state.activeDrag)return;const{oldDragItem:l}=this.state;let{layout:c}=this.state;const{cols:u,preventCollision:d,allowOverlap:f}=this.props,h=(0,ne.getLayoutItem)(c,t);if(!h)return;const g=!0;c=(0,ne.moveElement)(c,h,n,r,g,d,(0,ne.compactType)(this.props),u,f);const m=f?c:(0,ne.compact)(c,(0,ne.compactType)(this.props),u);this.props.onDragStop(m,l,h,null,s,o);const{oldLayout:y}=this.state;this.setState({activeDrag:null,layout:m,oldDragItem:null,oldLayout:null}),this.onLayoutMaybeChanged(m,y)}),Rt(this,"onResizeStart",(t,n,r,i)=>{let{e:s,node:o}=i;const{layout:l}=this.state,c=(0,ne.getLayoutItem)(l,t);c&&(this.setState({oldResizeItem:(0,ne.cloneLayoutItem)(c),oldLayout:this.state.layout,resizing:!0}),this.props.onResizeStart(l,c,c,null,s,o))}),Rt(this,"onResize",(t,n,r,i)=>{let{e:s,node:o,size:l,handle:c}=i;const{oldResizeItem:u}=this.state;let{layout:d}=this.state;const{cols:f,preventCollision:h,allowOverlap:g}=this.props;let m=!1,y,P,x;const[p,v]=(0,ne.withLayoutItem)(d,t,b=>{let E;return P=b.x,x=b.y,["sw","w","nw","n","ne"].indexOf(c)!==-1&&(["sw","nw","w"].indexOf(c)!==-1&&(P=b.x+(b.w-n),n=b.x!==P&&P<0?b.w:n,P=P<0?0:P),["ne","n","nw"].indexOf(c)!==-1&&(x=b.y+(b.h-r),r=b.y!==x&&x<0?b.h:r,x=x<0?0:x),m=!0),h&&!g&&(E=(0,ne.getAllCollisions)(d,{...b,w:n,h:r,x:P,y:x}).filter(S=>S.i!==b.i).length>0,E&&(x=b.y,r=b.h,P=b.x,n=b.w,m=!1)),b.w=n,b.h=r,b});if(!v)return;y=p,m&&(y=(0,ne.moveElement)(p,v,P,x,!0,this.props.preventCollision,(0,ne.compactType)(this.props),f,g));const C={w:v.w,h:v.h,x:v.x,y:v.y,static:!0,i:t};this.props.onResize(y,u,v,C,s,o),this.setState({layout:g?y:(0,ne.compact)(y,(0,ne.compactType)(this.props),f),activeDrag:C})}),Rt(this,"onResizeStop",(t,n,r,i)=>{let{e:s,node:o}=i;const{layout:l,oldResizeItem:c}=this.state,{cols:u,allowOverlap:d}=this.props,f=(0,ne.getLayoutItem)(l,t),h=d?l:(0,ne.compact)(l,(0,ne.compactType)(this.props),u);this.props.onResizeStop(h,c,f,null,s,o);const{oldLayout:g}=this.state;this.setState({activeDrag:null,layout:h,oldResizeItem:null,oldLayout:null,resizing:!1}),this.onLayoutMaybeChanged(h,g)}),Rt(this,"onDragOver",t=>{var n;if(t.preventDefault(),t.stopPropagation(),p5&&!((n=t.nativeEvent.target)!==null&&n!==void 0&&n.classList.contains($2)))return!1;const{droppingItem:r,onDropDragOver:i,margin:s,cols:o,rowHeight:l,maxRows:c,width:u,containerPadding:d,transformScale:f}=this.props,h=i==null?void 0:i(t);if(h===!1)return this.state.droppingDOMNode&&this.removeDroppingPlaceholder(),!1;const g={...r,...h},{layout:m}=this.state,{layerX:y,layerY:P}=t.nativeEvent,x={left:y/f,top:P/f,e:t};if(this.state.droppingDOMNode){if(this.state.droppingPosition){const{left:p,top:v}=this.state.droppingPosition;(p!=y||v!=P)&&this.setState({droppingPosition:x})}}else{const p={cols:o,margin:s,maxRows:c,rowHeight:l,containerWidth:u,containerPadding:d||s},v=(0,ZL.calcXY)(p,P,y,g.w,g.h);this.setState({droppingDOMNode:Ei.createElement("div",{key:g.i}),droppingPosition:x,layout:[...m,{...g,x:v.x,y:v.y,static:!1,isDraggable:!0}]})}}),Rt(this,"removeDroppingPlaceholder",()=>{const{droppingItem:t,cols:n}=this.props,{layout:r}=this.state,i=(0,ne.compact)(r.filter(s=>s.i!==t.i),(0,ne.compactType)(this.props),n,this.props.allowOverlap);this.setState({layout:i,droppingDOMNode:null,activeDrag:null,droppingPosition:void 0})}),Rt(this,"onDragLeave",t=>{t.preventDefault(),t.stopPropagation(),this.dragEnterCounter--,this.dragEnterCounter===0&&this.removeDroppingPlaceholder()}),Rt(this,"onDragEnter",t=>{t.preventDefault(),t.stopPropagation(),this.dragEnterCounter++}),Rt(this,"onDrop",t=>{t.preventDefault(),t.stopPropagation();const{droppingItem:n}=this.props,{layout:r}=this.state,i=r.find(s=>s.i===n.i);this.dragEnterCounter=0,this.removeDroppingPlaceholder(),this.props.onDrop(r,i,t)})}componentDidMount(){this.setState({mounted:!0}),this.onLayoutMaybeChanged(this.state.layout,this.props.layout)}static getDerivedStateFromProps(t,n){let r;return n.activeDrag?null:(!(0,vh.deepEqual)(t.layout,n.propsLayout)||t.compactType!==n.compactType?r=t.layout:(0,ne.childrenEqual)(t.children,n.children)||(r=n.layout),r?{layout:(0,ne.synchronizeLayoutWithChildren)(r,t.children,t.cols,(0,ne.compactType)(t),t.allowOverlap),compactType:t.compactType,children:t.children,propsLayout:t.layout}:null)}shouldComponentUpdate(t,n){return this.props.children!==t.children||!(0,ne.fastRGLPropsEqual)(this.props,t,vh.deepEqual)||this.state.activeDrag!==n.activeDrag||this.state.mounted!==n.mounted||this.state.droppingPosition!==n.droppingPosition}componentDidUpdate(t,n){if(!this.state.activeDrag){const r=this.state.layout,i=n.layout;this.onLayoutMaybeChanged(r,i)}}containerHeight(){if(!this.props.autoSize)return;const t=(0,ne.bottom)(this.state.layout),n=this.props.containerPadding?this.props.containerPadding[1]:this.props.margin[1];return t*this.props.rowHeight+(t-1)*this.props.margin[1]+n*2+"px"}onLayoutMaybeChanged(t,n){n||(n=this.state.layout),(0,vh.deepEqual)(n,t)||this.props.onLayoutChange(t)}placeholder(){const{activeDrag:t}=this.state;if(!t)return null;const{width:n,cols:r,margin:i,containerPadding:s,rowHeight:o,maxRows:l,useCSSTransforms:c,transformScale:u}=this.props;return Ei.createElement(I2.default,{w:t.w,h:t.h,x:t.x,y:t.y,i:t.i,className:"react-grid-placeholder ".concat(this.state.resizing?"placeholder-resizing":""),containerWidth:n,cols:r,margin:i,containerPadding:s||i,maxRows:l,rowHeight:o,isDraggable:!1,isResizable:!1,isBounded:!1,useCSSTransforms:c,transformScale:u},Ei.createElement("div",null))}processGridItem(t,n){if(!t||!t.key)return;const r=(0,ne.getLayoutItem)(this.state.layout,String(t.key));if(!r)return null;const{width:i,cols:s,margin:o,containerPadding:l,rowHeight:c,maxRows:u,isDraggable:d,isResizable:f,isBounded:h,useCSSTransforms:g,transformScale:m,draggableCancel:y,draggableHandle:P,resizeHandles:x,resizeHandle:p}=this.props,{mounted:v,droppingPosition:C}=this.state,b=typeof r.isDraggable=="boolean"?r.isDraggable:!r.static&&d,E=typeof r.isResizable=="boolean"?r.isResizable:!r.static&&f,j=r.resizeHandles||x,S=b&&h&&r.isBounded!==!1;return Ei.createElement(I2.default,{containerWidth:i,cols:s,margin:o,containerPadding:l||o,maxRows:u,rowHeight:c,cancel:y,handle:P,onDragStop:this.onDragStop,onDragStart:this.onDragStart,onDrag:this.onDrag,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,isDraggable:b,isResizable:E,isBounded:S,useCSSTransforms:g&&v,usePercentages:!v,transformScale:m,w:r.w,h:r.h,x:r.x,y:r.y,i:r.i,minH:r.minH,minW:r.minW,maxH:r.maxH,maxW:r.maxW,static:r.static,droppingPosition:n?C:void 0,resizeHandles:j,resizeHandle:p},t)}render(){const{className:t,style:n,isDroppable:r,innerRef:i}=this.props,s=(0,KL.default)($2,t),o={height:this.containerHeight(),...n};return Ei.createElement("div",{ref:i,className:s,style:o,onDrop:r?this.onDrop:ne.noop,onDragLeave:r?this.onDragLeave:ne.noop,onDragEnter:r?this.onDragEnter:ne.noop,onDragOver:r?this.onDragOver:ne.noop},Ei.Children.map(this.props.children,l=>this.processGridItem(l)),r&&this.state.droppingDOMNode&&this.processGridItem(this.state.droppingDOMNode,!0),this.placeholder())}};pl.default=tf;Rt(tf,"displayName","ReactGridLayout");Rt(tf,"propTypes",YL.default);Rt(tf,"defaultProps",{autoSize:!0,cols:12,className:"",style:{},draggableHandle:"",draggableCancel:"",containerPadding:null,rowHeight:150,maxRows:1/0,layout:[],margin:[10,10],isBounded:!1,isDraggable:!0,isResizable:!0,allowOverlap:!1,isDroppable:!1,useCSSTransforms:!0,transformScale:1,verticalCompact:!0,compactType:"vertical",preventCollision:!1,droppingItem:{i:"__dropping-elem__",h:1,w:1},resizeHandles:["se"],onLayoutChange:ne.noop,onDragStart:ne.noop,onDrag:ne.noop,onDragStop:ne.noop,onResizeStart:ne.noop,onResize:ne.noop,onResizeStop:ne.noop,onDrop:ne.noop,onDropDragOver:ne.noop});var nf={},ds={};Object.defineProperty(ds,"__esModule",{value:!0});ds.findOrGenerateResponsiveLayout=nI;ds.getBreakpointFromWidth=eI;ds.getColsFromBreakpoint=tI;ds.sortBreakpoints=V1;var Yl=he;function eI(e,t){const n=V1(e);let r=n[0];for(let i=1,s=n.length;i<s;i++){const o=n[i];t>e[o]&&(r=o)}return r}function tI(e,t){if(!t[e])throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint "+e+" is missing!");return t[e]}function nI(e,t,n,r,i,s){if(e[n])return(0,Yl.cloneLayout)(e[n]);let o=e[r];const l=V1(t),c=l.slice(l.indexOf(n));for(let u=0,d=c.length;u<d;u++){const f=c[u];if(e[f]){o=e[f];break}}return o=(0,Yl.cloneLayout)(o||[]),(0,Yl.compact)((0,Yl.correctBounds)(o,{cols:i}),s,i)}function V1(e){return Object.keys(e).sort(function(n,r){return e[n]-e[r]})}Object.defineProperty(nf,"__esModule",{value:!0});nf.default=void 0;var D2=iI(w),Vt=m5(dr),xh=k1,Qs=he,Ri=ds,rI=m5(pl);function m5(e){return e&&e.__esModule?e:{default:e}}function g5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(g5=function(r){return r?n:t})(e)}function iI(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=g5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function m0(){return m0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m0.apply(this,arguments)}function _u(e,t,n){return t=sI(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sI(e){var t=oI(e,"string");return typeof t=="symbol"?t:String(t)}function oI(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B2=e=>Object.prototype.toString.call(e);function Xl(e,t){return e==null?null:Array.isArray(e)?e:e[t]}class H1 extends D2.Component{constructor(){super(...arguments),_u(this,"state",this.generateInitialState()),_u(this,"onLayoutChange",t=>{this.props.onLayoutChange(t,{...this.props.layouts,[this.state.breakpoint]:t})})}generateInitialState(){const{width:t,breakpoints:n,layouts:r,cols:i}=this.props,s=(0,Ri.getBreakpointFromWidth)(n,t),o=(0,Ri.getColsFromBreakpoint)(s,i),l=this.props.verticalCompact===!1?null:this.props.compactType;return{layout:(0,Ri.findOrGenerateResponsiveLayout)(r,n,s,s,o,l),breakpoint:s,cols:o}}static getDerivedStateFromProps(t,n){if(!(0,xh.deepEqual)(t.layouts,n.layouts)){const{breakpoint:r,cols:i}=n;return{layout:(0,Ri.findOrGenerateResponsiveLayout)(t.layouts,t.breakpoints,r,r,i,t.compactType),layouts:t.layouts}}return null}componentDidUpdate(t){(this.props.width!=t.width||this.props.breakpoint!==t.breakpoint||!(0,xh.deepEqual)(this.props.breakpoints,t.breakpoints)||!(0,xh.deepEqual)(this.props.cols,t.cols))&&this.onWidthChange(t)}onWidthChange(t){const{breakpoints:n,cols:r,layouts:i,compactType:s}=this.props,o=this.props.breakpoint||(0,Ri.getBreakpointFromWidth)(this.props.breakpoints,this.props.width),l=this.state.breakpoint,c=(0,Ri.getColsFromBreakpoint)(o,r),u={...i};if(l!==o||t.breakpoints!==n||t.cols!==r){l in u||(u[l]=(0,Qs.cloneLayout)(this.state.layout));let h=(0,Ri.findOrGenerateResponsiveLayout)(u,n,o,l,c,s);h=(0,Qs.synchronizeLayoutWithChildren)(h,this.props.children,c,s,this.props.allowOverlap),u[o]=h,this.props.onLayoutChange(h,u),this.props.onBreakpointChange(o,c),this.setState({breakpoint:o,layout:h,cols:c})}const d=Xl(this.props.margin,o),f=Xl(this.props.containerPadding,o);this.props.onWidthChange(this.props.width,d,c,f)}render(){const{breakpoint:t,breakpoints:n,cols:r,layouts:i,margin:s,containerPadding:o,onBreakpointChange:l,onLayoutChange:c,onWidthChange:u,...d}=this.props;return D2.createElement(rI.default,m0({},d,{margin:Xl(s,this.state.breakpoint),containerPadding:Xl(o,this.state.breakpoint),onLayoutChange:this.onLayoutChange,layout:this.state.layout,cols:this.state.cols}))}}nf.default=H1;_u(H1,"propTypes",{breakpoint:Vt.default.string,breakpoints:Vt.default.object,allowOverlap:Vt.default.bool,cols:Vt.default.object,margin:Vt.default.oneOfType([Vt.default.array,Vt.default.object]),containerPadding:Vt.default.oneOfType([Vt.default.array,Vt.default.object]),layouts(e,t){if(B2(e[t])!=="[object Object]")throw new Error("Layout property must be an object. Received: "+B2(e[t]));Object.keys(e[t]).forEach(n=>{if(!(n in e.breakpoints))throw new Error("Each key in layouts must align with a key in breakpoints.");(0,Qs.validateLayout)(e.layouts[n],"layouts."+n)})},width:Vt.default.number.isRequired,onBreakpointChange:Vt.default.func,onLayoutChange:Vt.default.func,onWidthChange:Vt.default.func});_u(H1,"defaultProps",{breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},containerPadding:{lg:null,md:null,sm:null,xs:null,xxs:null},layouts:{},margin:[10,10],allowOverlap:!1,onBreakpointChange:Qs.noop,onLayoutChange:Qs.noop,onWidthChange:Qs.noop});var W1={},y5=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},t}()}(),g0=typeof window<"u"&&typeof document<"u"&&window.document===document,Ou=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),aI=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ou):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),lI=2;function cI(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&l()}function o(){aI(s)}function l(){var c=Date.now();if(n){if(c-i<lI)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=c}return l}var uI=20,dI=["top","right","bottom","left","width","height","size","weight"],fI=typeof MutationObserver<"u",hI=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=cI(this.refresh.bind(this),uI)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!g0||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),fI?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!g0||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=dI.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),v5=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yo=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ou},x5=rf(0,0,0,0);function zu(e){return parseFloat(e)||0}function F2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+zu(s)},0)}function pI(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],o=e["padding-"+s];n[s]=zu(o)}return n}function mI(e){var t=e.getBBox();return rf(0,0,t.width,t.height)}function gI(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return x5;var r=yo(e).getComputedStyle(e),i=pI(r),s=i.left+i.right,o=i.top+i.bottom,l=zu(r.width),c=zu(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+s)!==t&&(l-=F2(r,"left","right")+s),Math.round(c+o)!==n&&(c-=F2(r,"top","bottom")+o)),!vI(e)){var u=Math.round(l+s)-t,d=Math.round(c+o)-n;Math.abs(u)!==1&&(l-=u),Math.abs(d)!==1&&(c-=d)}return rf(i.left,i.top,l,c)}var yI=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yo(e).SVGGraphicsElement}:function(e){return e instanceof yo(e).SVGElement&&typeof e.getBBox=="function"}}();function vI(e){return e===yo(e).document.documentElement}function xI(e){return g0?yI(e)?mI(e):gI(e):x5}function wI(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return v5(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}function rf(e,t,n,r){return{x:e,y:t,width:n,height:r}}var bI=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=rf(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=xI(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),SI=function(){function e(t,n){var r=wI(n);v5(this,{target:t,contentRect:r})}return e}(),CI=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new y5,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new bI(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new SI(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w5=typeof WeakMap<"u"?new WeakMap:new y5,b5=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=hI.getInstance(),r=new CI(t,n,this);w5.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){b5.prototype[e]=function(){var t;return(t=w5.get(this))[e].apply(t,arguments)}});var kI=function(){return typeof Ou.ResizeObserver<"u"?Ou.ResizeObserver:b5}();const jI=Object.freeze(Object.defineProperty({__proto__:null,default:kI},Symbol.toStringTag,{value:"Module"})),PI=_w(jI);Object.defineProperty(W1,"__esModule",{value:!0});W1.default=NI;var Ql=TI(w),EI=U1(dr),RI=U1(PI),MI=U1(Vd);function U1(e){return e&&e.__esModule?e:{default:e}}function S5(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(S5=function(r){return r?n:t})(e)}function TI(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=S5(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}function y0(){return y0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y0.apply(this,arguments)}function Ss(e,t,n){return t=_I(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _I(e){var t=OI(e,"string");return typeof t=="symbol"?t:String(t)}function OI(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const zI="react-grid-layout";function NI(e){var t;return t=class extends Ql.Component{constructor(){super(...arguments),Ss(this,"state",{width:1280}),Ss(this,"elementRef",Ql.createRef()),Ss(this,"mounted",!1),Ss(this,"resizeObserver",void 0)}componentDidMount(){this.mounted=!0,this.resizeObserver=new RI.default(i=>{if(this.elementRef.current instanceof HTMLElement){const o=i[0].contentRect.width;this.setState({width:o})}});const r=this.elementRef.current;r instanceof HTMLElement&&this.resizeObserver.observe(r)}componentWillUnmount(){this.mounted=!1;const r=this.elementRef.current;r instanceof HTMLElement&&this.resizeObserver.unobserve(r),this.resizeObserver.disconnect()}render(){const{measureBeforeMount:r,...i}=this.props;return r&&!this.mounted?Ql.createElement("div",{className:(0,MI.default)(this.props.className,zI),style:this.props.style,ref:this.elementRef}):Ql.createElement(e,y0({innerRef:this.elementRef},i,this.state))}},Ss(t,"defaultProps",{measureBeforeMount:!1}),Ss(t,"propTypes",{measureBeforeMount:EI.default.bool}),t}(function(e){e.exports=pl.default,e.exports.utils=he,e.exports.calculateUtils=fr,e.exports.Responsive=nf.default,e.exports.Responsive.utils=ds,e.exports.WidthProvider=W1.default})(IC);var AI=IC.exports;const LI=Bu(AI),na=[{name:"Bank",icon:"src/assets/BankIcon.png",navigate:"/bank"},{name:"Contatos",icon:"src/assets/PhoneIcon.png",navigate:"/contacts"},{name:"Camera",icon:"src/assets/CameraIcon.png"},{name:"Configurações",icon:"src/assets/SettingsIcon.png"},{name:"Wi-fi",icon:"src/assets/Wi-FiIcon.png"},{name:"Mensagens",icon:"src/assets/MessagesIcon.png"},{name:"Calculadora",icon:"src/assets/CalculatorIcon.png"},{name:"Play store",icon:"src/assets/PlayStoreIcon.png"},{name:"Anotações",icon:"src/assets/NotesIcon.png"},{name:"Instagram",icon:"src/assets/InstagramIcon.png",navigate:"/instagram"},{name:"WhatsApp",icon:"src/assets/WhatsIcon.png",navigate:"/whats"},{name:"Internet",icon:"src/assets/InternetIcon.png"}];var C5={},sf={},q1={},wh={},V2;function II(){return V2||(V2=1,function(e){(function(t,n){n(e,w,dr)})(A0,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=m;var i=o(n),s=o(r);function o(p){return p&&p.__esModule?p:{default:p}}var l=Object.assign||function(p){for(var v=1;v<arguments.length;v++){var C=arguments[v];for(var b in C)Object.prototype.hasOwnProperty.call(C,b)&&(p[b]=C[b])}return p};function c(p,v){var C={};for(var b in p)v.indexOf(b)>=0||Object.prototype.hasOwnProperty.call(p,b)&&(C[b]=p[b]);return C}function u(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}var d=function(){function p(v,C){for(var b=0;b<C.length;b++){var E=C[b];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(v,E.key,E)}}return function(v,C,b){return C&&p(v.prototype,C),b&&p(v,b),v}}();function f(p,v){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:p}function h(p,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);p.prototype=Object.create(v&&v.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(p,v):p.__proto__=v)}var g=!1;function m(p){g=p}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){m(!0)}}))}catch{}function y(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return g?p:p.capture}function P(p){if("touches"in p){var v=p.touches[0],C=v.pageX,b=v.pageY;return{x:C,y:b}}var E=p.screenX,j=p.screenY;return{x:E,y:j}}var x=function(p){h(v,p);function v(){var C;u(this,v);for(var b=arguments.length,E=Array(b),j=0;j<b;j++)E[j]=arguments[j];var S=f(this,(C=v.__proto__||Object.getPrototypeOf(v)).call.apply(C,[this].concat(E)));return S._handleSwipeStart=S._handleSwipeStart.bind(S),S._handleSwipeMove=S._handleSwipeMove.bind(S),S._handleSwipeEnd=S._handleSwipeEnd.bind(S),S._onMouseDown=S._onMouseDown.bind(S),S._onMouseMove=S._onMouseMove.bind(S),S._onMouseUp=S._onMouseUp.bind(S),S._setSwiperRef=S._setSwiperRef.bind(S),S}return d(v,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,y({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(b){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(b))}},{key:"_onMouseMove",value:function(b){this.mouseDown&&this._handleSwipeMove(b)}},{key:"_onMouseUp",value:function(b){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(b)}},{key:"_handleSwipeStart",value:function(b){var E=P(b),j=E.x,S=E.y;this.moveStart={x:j,y:S},this.props.onSwipeStart(b)}},{key:"_handleSwipeMove",value:function(b){if(this.moveStart){var E=P(b),j=E.x,S=E.y,_=j-this.moveStart.x,M=S-this.moveStart.y;this.moving=!0;var T=this.props.onSwipeMove({x:_,y:M},b);T&&b.cancelable&&b.preventDefault(),this.movePosition={deltaX:_,deltaY:M}}}},{key:"_handleSwipeEnd",value:function(b){this.props.onSwipeEnd(b);var E=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-E?this.props.onSwipeLeft(1,b):this.movePosition.deltaX>E&&this.props.onSwipeRight(1,b),this.movePosition.deltaY<-E?this.props.onSwipeUp(1,b):this.movePosition.deltaY>E&&this.props.onSwipeDown(1,b)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(b){this.swiper=b,this.props.innerRef(b)}},{key:"render",value:function(){var b=this.props;b.tagName;var E=b.className,j=b.style,S=b.children;b.allowMouseEvents,b.onSwipeUp,b.onSwipeDown,b.onSwipeLeft,b.onSwipeRight,b.onSwipeStart,b.onSwipeMove,b.onSwipeEnd,b.innerRef,b.tolerance;var _=c(b,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:E,style:j},_),S)}}]),v}(n.Component);x.displayName="ReactSwipe",x.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,innerRef:s.default.func,tolerance:s.default.number.isRequired},x.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=x})}(wh)),wh}(function(e){(function(t,n){n(e,II())})(A0,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}t.default=r.default})})(q1);var yl={},k5={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&r.push(l)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(k5);var $I=k5.exports;Object.defineProperty(yl,"__esModule",{value:!0});yl.default=void 0;var Wr=DI($I);function DI(e){return e&&e.__esModule?e:{default:e}}function BI(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var FI={ROOT:function(t){return(0,Wr.default)(BI({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,Wr.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,Wr.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,Wr.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,Wr.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,Wr.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,Wr.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,Wr.default)({dot:!0,selected:t})}};yl.default=FI;var vl={},of={};Object.defineProperty(of,"__esModule",{value:!0});of.outerWidth=void 0;var VI=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};of.outerWidth=VI;var jo={};Object.defineProperty(jo,"__esModule",{value:!0});jo.default=void 0;var HI=function(t,n,r){var i=t===0?t:t+n,s=r==="horizontal"?[i,0,0]:[0,i,0],o="translate3d",l="("+s.join(",")+")";return o+l};jo.default=HI;var xl={};Object.defineProperty(xl,"__esModule",{value:!0});xl.default=void 0;var WI=function(){return window};xl.default=WI;Object.defineProperty(vl,"__esModule",{value:!0});vl.default=void 0;var Mn=GI(w),Mi=af(yl),UI=of,H2=af(jo),qI=af(q1),Jl=af(xl);function af(e){return e&&e.__esModule?e:{default:e}}function j5(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return j5=function(){return e},e}function GI(e){if(e&&e.__esModule)return e;if(e===null||Sa(e)!=="object"&&typeof e!="function")return{default:e};var t=j5();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function Sa(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sa=function(n){return typeof n}:Sa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Sa(e)}function v0(){return v0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v0.apply(this,arguments)}function KI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ZI(e,t,n){return t&&W2(e.prototype,t),n&&W2(e,n),e}function YI(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x0(e,t)}function x0(e,t){return x0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},x0(e,t)}function XI(e){var t=JI();return function(){var r=Nu(e),i;if(t){var s=Nu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return QI(this,i)}}function QI(e,t){return t&&(Sa(t)==="object"||typeof t=="function")?t:Ot(e)}function Ot(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JI(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Nu(e){return Nu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Nu(e)}function Et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var e$=function(t){return t.hasOwnProperty("key")},G1=function(e){YI(n,e);var t=XI(n);function n(r){var i;return KI(this,n),i=t.call(this,r),Et(Ot(i),"itemsWrapperRef",void 0),Et(Ot(i),"itemsListRef",void 0),Et(Ot(i),"thumbsRef",void 0),Et(Ot(i),"setItemsWrapperRef",function(s){i.itemsWrapperRef=s}),Et(Ot(i),"setItemsListRef",function(s){i.itemsListRef=s}),Et(Ot(i),"setThumbsRef",function(s,o){i.thumbsRef||(i.thumbsRef=[]),i.thumbsRef[o]=s}),Et(Ot(i),"updateSizes",function(){if(!(!i.props.children||!i.itemsWrapperRef||!i.thumbsRef)){var s=Mn.Children.count(i.props.children),o=i.itemsWrapperRef.clientWidth,l=i.props.thumbWidth?i.props.thumbWidth:(0,UI.outerWidth)(i.thumbsRef[0]),c=Math.floor(o/l),u=c<s,d=u?s-c:0;i.setState(function(f,h){return{itemSize:l,visibleItems:c,firstItem:u?i.getFirstItem(h.selectedItem):0,lastPosition:d,showArrows:u}})}}),Et(Ot(i),"handleClickItem",function(s,o,l){if(!e$(l)||l.key==="Enter"){var c=i.props.onSelectItem;typeof c=="function"&&c(s,o)}}),Et(Ot(i),"onSwipeStart",function(){i.setState({swiping:!0})}),Et(Ot(i),"onSwipeEnd",function(){i.setState({swiping:!1})}),Et(Ot(i),"onSwipeMove",function(s){var o=s.x;if(!i.state.itemSize||!i.itemsWrapperRef||!i.state.visibleItems)return!1;var l=0,c=Mn.Children.count(i.props.children),u=-(i.state.firstItem*100)/i.state.visibleItems,d=Math.max(c-i.state.visibleItems,0),f=-d*100/i.state.visibleItems;u===l&&o>0&&(o=0),u===f&&o<0&&(o=0);var h=i.itemsWrapperRef.clientWidth,g=u+100/(h/o);return i.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(m){i.itemsListRef.style[m]=(0,H2.default)(g,"%",i.props.axis)}),!0}),Et(Ot(i),"slideRight",function(s){i.moveTo(i.state.firstItem-(typeof s=="number"?s:1))}),Et(Ot(i),"slideLeft",function(s){i.moveTo(i.state.firstItem+(typeof s=="number"?s:1))}),Et(Ot(i),"moveTo",function(s){s=s<0?0:s,s=s>=i.state.lastPosition?i.state.lastPosition:s,i.setState({firstItem:s})}),i.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},i}return ZI(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(i){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==i.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Jl.default)().addEventListener("resize",this.updateSizes),(0,Jl.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Jl.default)().removeEventListener("resize",this.updateSizes),(0,Jl.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(i){var s=i;return i>=this.state.lastPosition&&(s=this.state.lastPosition),i<this.state.firstItem+this.state.visibleItems&&(s=this.state.firstItem),i<this.state.firstItem&&(s=i),s}},{key:"renderItems",value:function(){var i=this;return this.props.children.map(function(s,o){var l=Mi.default.ITEM(!1,o===i.state.selectedItem),c={key:o,ref:function(d){return i.setThumbsRef(d,o)},className:l,onClick:i.handleClickItem.bind(i,o,i.props.children[o]),onKeyDown:i.handleClickItem.bind(i,o,i.props.children[o]),"aria-label":"".concat(i.props.labels.item," ").concat(o+1),style:{width:i.props.thumbWidth}};return Mn.default.createElement("li",v0({},c,{role:"button",tabIndex:0}),s)})}},{key:"render",value:function(){var i=this;if(!this.props.children)return null;var s=Mn.Children.count(this.props.children)>1,o=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),d=(0,H2.default)(u,"px",this.props.axis),f=this.props.transitionTime+"ms";return c={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f},Mn.default.createElement("div",{className:Mi.default.CAROUSEL(!1)},Mn.default.createElement("div",{className:Mi.default.WRAPPER(!1),ref:this.setItemsWrapperRef},Mn.default.createElement("button",{type:"button",className:Mi.default.ARROW_PREV(!o),onClick:function(){return i.slideRight()},"aria-label":this.props.labels.leftArrow}),s?Mn.default.createElement(qI.default,{tagName:"ul",className:Mi.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):Mn.default.createElement("ul",{className:Mi.default.SLIDER(!1,this.state.swiping),ref:function(g){return i.setItemsListRef(g)},style:c},this.renderItems()),Mn.default.createElement("button",{type:"button",className:Mi.default.ARROW_NEXT(!l),onClick:function(){return i.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(Mn.Component);vl.default=G1;Et(G1,"displayName","Thumbs");Et(G1,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var lf={};Object.defineProperty(lf,"__esModule",{value:!0});lf.default=void 0;var t$=function(){return document};lf.default=t$;var nn={};Object.defineProperty(nn,"__esModule",{value:!0});nn.setPosition=nn.getPosition=nn.isKeyboardEvent=nn.defaultStatusFormatter=nn.noop=void 0;var n$=w,r$=i$(jo);function i$(e){return e&&e.__esModule?e:{default:e}}var s$=function(){};nn.noop=s$;var o$=function(t,n){return"".concat(t," of ").concat(n)};nn.defaultStatusFormatter=o$;var a$=function(t){return t?t.hasOwnProperty("key"):!1};nn.isKeyboardEvent=a$;var l$=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=n$.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var i=-t*n.centerSlidePercentage,s=r-1;return t&&(t!==s||n.infiniteLoop)?i+=(100-n.centerSlidePercentage)/2:t===s&&(i+=100-n.centerSlidePercentage),i}return-t*100};nn.getPosition=l$;var c$=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(i){r[i]=(0,r$.default)(t,"%",n)}),r};nn.setPosition=c$;var tr={};Object.defineProperty(tr,"__esModule",{value:!0});tr.fadeAnimationHandler=tr.slideStopSwipingHandler=tr.slideSwipeAnimationHandler=tr.slideAnimationHandler=void 0;var P5=w,u$=d$(jo),nr=nn;function d$(e){return e&&e.__esModule?e:{default:e}}function U2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Li(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U2(Object(n),!0).forEach(function(r){f$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h$=function(t,n){var r={},i=n.selectedItem,s=i,o=P5.Children.count(t.children)-1,l=t.infiniteLoop&&(i<0||i>o);if(l)return s<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,nr.setPosition)(-(o+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,nr.setPosition)(-(o+2)*100,t.axis):s>o&&(r.itemListStyle=(0,nr.setPosition)(0,t.axis)),r;var c=(0,nr.getPosition)(i,t),u=(0,u$.default)(c,"%",t.axis),d=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=Li(Li({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};tr.slideAnimationHandler=h$;var p$=function(t,n,r,i){var s={},o=n.axis==="horizontal",l=P5.Children.count(n.children),c=0,u=(0,nr.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,nr.getPosition)(l-1,n)-100:(0,nr.getPosition)(l-1,n),f=o?t.x:t.y,h=f;u===c&&f>0&&(h=0),u===d&&f<0&&(h=0);var g=u+100/(r.itemSize/h),m=Math.abs(f)>n.swipeScrollTolerance;return n.infiniteLoop&&m&&(r.selectedItem===0&&g>-100?g-=l*100:r.selectedItem===l-1&&g<-l*100&&(g+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||m||r.swipeMovementStarted)&&(r.swipeMovementStarted||i({swipeMovementStarted:!0}),s.itemListStyle=(0,nr.setPosition)(g,n.axis)),m&&!r.cancelClick&&i({cancelClick:!0}),s};tr.slideSwipeAnimationHandler=p$;var m$=function(t,n){var r=(0,nr.getPosition)(n.selectedItem,t),i=(0,nr.setPosition)(r,t.axis);return{itemListStyle:i}};tr.slideStopSwipingHandler=m$;var g$=function(t,n){var r=t.transitionTime+"ms",i="ease-in-out",s={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:i,msTransitionTimingFunction:i,MozTransitionTimingFunction:i,WebkitTransitionTimingFunction:i,OTransitionTimingFunction:i};return n.swiping||(s=Li(Li({},s),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:s,selectedStyle:Li(Li({},s),{},{opacity:1,position:"relative"}),prevStyle:Li({},s)}};tr.fadeAnimationHandler=g$;Object.defineProperty(sf,"__esModule",{value:!0});sf.default=void 0;var Pe=x$(w),y$=wl(q1),wr=wl(yl),v$=wl(vl),ec=wl(lf),tc=wl(xl),ra=nn,Au=tr;function wl(e){return e&&e.__esModule?e:{default:e}}function E5(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return E5=function(){return e},e}function x$(e){if(e&&e.__esModule)return e;if(e===null||Ca(e)!=="object"&&typeof e!="function")return{default:e};var t=E5();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function Ca(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ca=function(n){return typeof n}:Ca=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ca(e)}function w0(){return w0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w0.apply(this,arguments)}function q2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q2(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b$(e,t,n){return t&&G2(e.prototype,t),n&&G2(e,n),e}function S$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b0(e,t)}function b0(e,t){return b0=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},b0(e,t)}function C$(e){var t=j$();return function(){var r=Lu(e),i;if(t){var s=Lu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return k$(this,i)}}function k$(e,t){return t&&(Ca(t)==="object"||typeof t=="function")?t:fe(e)}function fe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j$(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Lu(e){return Lu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Lu(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K1=function(e){S$(n,e);var t=C$(n);function n(r){var i;w$(this,n),i=t.call(this,r),ue(fe(i),"thumbsRef",void 0),ue(fe(i),"carouselWrapperRef",void 0),ue(fe(i),"listRef",void 0),ue(fe(i),"itemsRef",void 0),ue(fe(i),"timer",void 0),ue(fe(i),"animationHandler",void 0),ue(fe(i),"setThumbsRef",function(o){i.thumbsRef=o}),ue(fe(i),"setCarouselWrapperRef",function(o){i.carouselWrapperRef=o}),ue(fe(i),"setListRef",function(o){i.listRef=o}),ue(fe(i),"setItemsRef",function(o,l){i.itemsRef||(i.itemsRef=[]),i.itemsRef[l]=o}),ue(fe(i),"autoPlay",function(){Pe.Children.count(i.props.children)<=1||(i.clearAutoPlay(),i.props.autoPlay&&(i.timer=setTimeout(function(){i.increment()},i.props.interval)))}),ue(fe(i),"clearAutoPlay",function(){i.timer&&clearTimeout(i.timer)}),ue(fe(i),"resetAutoPlay",function(){i.clearAutoPlay(),i.autoPlay()}),ue(fe(i),"stopOnHover",function(){i.setState({isMouseEntered:!0},i.clearAutoPlay)}),ue(fe(i),"startOnLeave",function(){i.setState({isMouseEntered:!1},i.autoPlay)}),ue(fe(i),"isFocusWithinTheCarousel",function(){return i.carouselWrapperRef?!!((0,ec.default)().activeElement===i.carouselWrapperRef||i.carouselWrapperRef.contains((0,ec.default)().activeElement)):!1}),ue(fe(i),"navigateWithKeyboard",function(o){if(i.isFocusWithinTheCarousel()){var l=i.props.axis,c=l==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=c?u.ArrowRight:u.ArrowDown,f=c?u.ArrowLeft:u.ArrowUp;d===o.keyCode?i.increment():f===o.keyCode&&i.decrement()}}),ue(fe(i),"updateSizes",function(){if(!(!i.state.initialized||!i.itemsRef||i.itemsRef.length===0)){var o=i.props.axis==="horizontal",l=i.itemsRef[0];if(l){var c=o?l.clientWidth:l.clientHeight;i.setState({itemSize:c}),i.thumbsRef&&i.thumbsRef.updateSizes()}}}),ue(fe(i),"setMountState",function(){i.setState({hasMount:!0}),i.updateSizes()}),ue(fe(i),"handleClickItem",function(o,l){if(Pe.Children.count(i.props.children)!==0){if(i.state.cancelClick){i.setState({cancelClick:!1});return}i.props.onClickItem(o,l),o!==i.state.selectedItem&&i.setState({selectedItem:o})}}),ue(fe(i),"handleOnChange",function(o,l){Pe.Children.count(i.props.children)<=1||i.props.onChange(o,l)}),ue(fe(i),"handleClickThumb",function(o,l){i.props.onClickThumb(o,l),i.moveTo(o)}),ue(fe(i),"onSwipeStart",function(o){i.setState({swiping:!0}),i.props.onSwipeStart(o)}),ue(fe(i),"onSwipeEnd",function(o){i.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),i.props.onSwipeEnd(o),i.clearAutoPlay(),i.state.autoPlay&&i.autoPlay()}),ue(fe(i),"onSwipeMove",function(o,l){i.props.onSwipeMove(l);var c=i.props.swipeAnimationHandler(o,i.props,i.state,i.setState.bind(fe(i)));return i.setState(Tn({},c)),!!Object.keys(c).length}),ue(fe(i),"decrement",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem-(typeof o=="number"?o:1))}),ue(fe(i),"increment",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem+(typeof o=="number"?o:1))}),ue(fe(i),"moveTo",function(o){if(typeof o=="number"){var l=Pe.Children.count(i.props.children)-1;o<0&&(o=i.props.infiniteLoop?l:0),o>l&&(o=i.props.infiniteLoop?0:l),i.selectItem({selectedItem:o}),i.state.autoPlay&&i.state.isMouseEntered===!1&&i.resetAutoPlay()}}),ue(fe(i),"onClickNext",function(){i.increment(1)}),ue(fe(i),"onClickPrev",function(){i.decrement(1)}),ue(fe(i),"onSwipeForward",function(){i.increment(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),ue(fe(i),"onSwipeBackwards",function(){i.decrement(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),ue(fe(i),"changeItem",function(o){return function(l){(!(0,ra.isKeyboardEvent)(l)||l.key==="Enter")&&i.moveTo(o)}}),ue(fe(i),"selectItem",function(o){i.setState(Tn({previousItem:i.state.selectedItem},o),function(){i.setState(i.animationHandler(i.props,i.state))}),i.handleOnChange(o.selectedItem,Pe.Children.toArray(i.props.children)[o.selectedItem])}),ue(fe(i),"getInitialImage",function(){var o=i.props.selectedItem,l=i.itemsRef&&i.itemsRef[o],c=l&&l.getElementsByTagName("img")||[];return c[0]}),ue(fe(i),"getVariableItemHeight",function(o){var l=i.itemsRef&&i.itemsRef[o];if(i.state.hasMount&&l&&l.children.length){var c=l.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var d=function g(){i.forceUpdate(),u.removeEventListener("load",g)};u.addEventListener("load",d)}}var f=c[0]||l.children[0],h=f.clientHeight;return h>0?h:null}return null});var s={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return i.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&Au.fadeAnimationHandler||Au.slideAnimationHandler,i.state=Tn(Tn({},s),i.animationHandler(r,s)),i}return b$(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(i,s){!i.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!i.autoFocus&&this.props.autoFocus&&this.forceFocus(),s.swiping&&!this.state.swiping&&this.setState(Tn({},this.props.stopSwipingHandler(this.props,this.state))),(i.selectedItem!==this.props.selectedItem||i.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),i.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var i=this;this.bindEvents(),this.state.autoPlay&&Pe.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var s=i.getInitialImage();s&&!s.complete?s.addEventListener("load",i.setMountState):i.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.addEventListener("mouseenter",this.stopOnHover),i.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.removeEventListener("mouseenter",this.stopOnHover),i.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,tc.default)().addEventListener("resize",this.updateSizes),(0,tc.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,ec.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,tc.default)().removeEventListener("resize",this.updateSizes),(0,tc.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var i=this.getInitialImage();i&&i.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,ec.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var i;(i=this.carouselWrapperRef)===null||i===void 0||i.focus()}},{key:"renderItems",value:function(i){var s=this;return this.props.children?Pe.Children.map(this.props.children,function(o,l){var c=l===s.state.selectedItem,u=l===s.state.previousItem,d=c&&s.state.selectedStyle||u&&s.state.prevStyle||s.state.slideStyle||{};s.props.centerMode&&s.props.axis==="horizontal"&&(d=Tn(Tn({},d),{},{minWidth:s.props.centerSlidePercentage+"%"})),s.state.swiping&&s.state.swipeMovementStarted&&(d=Tn(Tn({},d),{},{pointerEvents:"none"}));var f={ref:function(g){return s.setItemsRef(g,l)},key:"itemKey"+l+(i?"clone":""),className:wr.default.ITEM(!0,l===s.state.selectedItem,l===s.state.previousItem),onClick:s.handleClickItem.bind(s,l,o),style:d};return Pe.default.createElement("li",f,s.props.renderItem(o,{isSelected:l===s.state.selectedItem,isPrevious:l===s.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var i=this,s=this.props,o=s.showIndicators,l=s.labels,c=s.renderIndicator,u=s.children;return o?Pe.default.createElement("ul",{className:"control-dots"},Pe.Children.map(u,function(d,f){return c&&c(i.changeItem(f),f===i.state.selectedItem,f,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?Pe.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,Pe.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||Pe.Children.count(this.props.children)===0?null:Pe.default.createElement(v$.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var i=this;if(!this.props.children||Pe.Children.count(this.props.children)===0)return null;var s=this.props.swipeable&&Pe.Children.count(this.props.children)>1,o=this.props.axis==="horizontal",l=this.props.showArrows&&Pe.Children.count(this.props.children)>1,c=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=l&&(this.state.selectedItem<Pe.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),f=d.shift(),h=d.pop(),g={className:wr.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},m={};if(o){if(g.onSwipeLeft=this.onSwipeForward,g.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var y=this.getVariableItemHeight(this.state.selectedItem);m.height=y||"auto"}}else g.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,g.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,g.style=Tn(Tn({},g.style),{},{height:this.state.itemSize}),m.height=this.state.itemSize;return Pe.default.createElement("div",{"aria-label":this.props.ariaLabel,className:wr.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},Pe.default.createElement("div",{className:wr.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),Pe.default.createElement("div",{className:wr.default.WRAPPER(!0,this.props.axis),style:m},s?Pe.default.createElement(y$.default,w0({tagName:"ul",innerRef:this.setListRef},g,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f):Pe.default.createElement("ul",{className:wr.default.SLIDER(!0,this.state.swiping),ref:function(x){return i.setListRef(x)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&f)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(Pe.default.Component);sf.default=K1;ue(K1,"displayName","Carousel");ue(K1,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:ra.noop,onClickThumb:ra.noop,onChange:ra.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return Pe.default.createElement("button",{type:"button","aria-label":r,className:wr.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return Pe.default.createElement("button",{type:"button","aria-label":r,className:wr.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,i){return Pe.default.createElement("li",{className:wr.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=Pe.Children.map(t,function(r){var i=r;if(r.type!=="img"&&(i=Pe.Children.toArray(r.props.children).find(function(s){return s.type==="img"})),!!i)return i});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:ra.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Au.slideSwipeAnimationHandler,stopSwipingHandler:Au.slideStopSwipingHandler});var P$={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=i(sf),n=P$,r=i(vl);function i(s){return s&&s.__esModule?s:{default:s}}})(C5);function E$(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"}}]})(e)}function R$(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}}]})(e)}function Z1(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"}}]})(e)}function R5(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function M$(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"}}]})(e)}function T$(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"}},{tag:"path",attr:{d:"M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"}}]})(e)}const _$=({control:e,handleAddApp:t})=>{const n=K(),[r,i]=w.useState(""),s=u=>{u.deltaY>0&&e.start("hidden")},o=u=>{const d=parseInt(u.currentTarget.getAttribute("data-index")||"0",10),f=r.length>0?na.filter(h=>h.name.toLowerCase().startsWith(r))[d]:na[d];f&&f.navigate&&n(f.navigate)},l=u=>{e.start("hidden");const d=setTimeout(()=>{t({i:u}),clearTimeout(d)},500)},c=()=>(r.length>0?na.filter(d=>d.name.toLowerCase().startsWith(r)):na).map((d,f)=>a.jsxs("li",{"data-index":f,onClick:o,children:[a.jsx(H.img,{src:d.icon,alt:"icon",whileTap:{scale:.8},onTap:()=>l(d.icon)}),a.jsx("p",{children:d.name})]},d.name+f));return a.jsxs(H.div,{variants:{hidden:{y:500,opacity:.4},visible:{y:0,opacity:1}},initial:"hidden",animate:e,onWheel:s,transition:{ease:"easeInOut",duration:.6},className:"MenuList",children:[a.jsxs("div",{className:"search",children:[a.jsx("input",{type:"text",placeholder:"Procurar um App",value:r,onChange:u=>i(u.target.value)}),a.jsx(R5,{})]}),a.jsx(C5.Carousel,{showThumbs:!1,axis:"horizontal",emulateTouch:!0,centerMode:!0,centerSlidePercentage:100,showArrows:!1,className:"carousel",showStatus:!1,showIndicators:!0,preventMovementUntilSwipeScrollTolerance:!0,renderIndicator:(u,d)=>a.jsx("div",{onClick:u,className:`dot ${d?"active":""}`}),children:a.jsx("ul",{className:"menu--apps",children:c()},"slide1")})]})},O$=()=>{const e={dia:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],mes:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},t=new Date,n=o=>("0"+o).slice(-2),[r,i]=w.useState({date:`${e.dia[t.getDay()]}, ${t.getDate()} de ${e.mes[t.getMonth()]}`,hour:`${t.getHours()}:${n(t.getMinutes())}`}),s=()=>{const o=new Date;i({date:`${e.dia[o.getDay()]}, ${o.getDate()} de ${e.mes[o.getMonth()]}`,hour:`${o.getHours()}:${n(o.getMinutes())}`})};return w.useEffect(()=>{const o=setInterval(()=>{s()},1e3);return()=>clearInterval(o)},[]),a.jsxs(z$,{children:[a.jsx("h1",{children:r.hour}),a.jsx("h3",{children:r.date})]})},z$=W.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 36px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`,N$=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=GS(),[r,i]=w.useState({widgets:[{i:"hour",x:1,y:0,w:2,h:2},{i:"google",x:0,y:7,w:4,h:1}],icons:[{i:"src/assets/WhatsIcon.png",x:0,y:8,w:1,h:1},{i:"src/assets/InstagramIcon.png",x:1,y:8,w:1,h:1},{i:"src/assets/CalculatorIcon.png",x:2,y:8,w:1,h:1},{i:"src/assets/BankIcon.png",x:3,y:8,w:1,h:1}]});w.useEffect(()=>{t({type:"showStatusbar"}),t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"transparent",color:"#f2f2f2"}}),t({type:"setStatusBarStyle",values:{background:"transparent",color:"#f2f2f2"}})},[]);const s=c=>{c={...c,x:r.icons.filter(u=>u.y===3).length,y:3,w:1,h:1},!(r.icons.filter(u=>u.i===c.i).length>0)&&(i({...r,icons:[...r.icons,c]}),console.log(r))},o=c=>{i({widgets:c.filter(u=>u.i==="hour"||u.i==="google"),icons:c.filter(u=>u.i!=="hour"&&u.i!=="google")})},l=c=>{c.deltaY<0&&n.start("visible")};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeInOut",duration:.4},children:a.jsxs(iA,{onWheel:c=>l(c),children:[a.jsx("div",{className:"background"}),a.jsxs(LI,{layout:r.widgets.concat(r.icons),onLayoutChange:o,cols:4,width:228,compactType:null,rowHeight:36,maxRows:9,isResizable:!1,isBounded:!0,preventCollision:!0,children:[a.jsx("div",{children:a.jsx(O$,{})},"hour"),r.icons.map(c=>{const u=na.find(d=>d.icon===c.i);return a.jsx("div",{onClick:u!=null&&u.navigate?()=>e(u.navigate):()=>{},children:a.jsx("img",{className:"appIcon",src:c.i,alt:"icon"})},c.i)})]}),a.jsx(_$,{control:n,handleAddApp:s})]})})},A$=W.div`
  flex: 1;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  & > img {
    width: 74%;
    animation: show 2s ease;
  }
  .credits {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    position: absolute;
    top: 86%;
    left: 13%;
    font-size: 10px;
    font-weight: 600;
  }

  @keyframes show {
    from {
      transform: scale(0.76);
      opacity: 0.5;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`,ur=Object.create(null);ur.open="0";ur.close="1";ur.ping="2";ur.pong="3";ur.message="4";ur.upgrade="5";ur.noop="6";const Nc=Object.create(null);Object.keys(ur).forEach(e=>{Nc[ur[e]]=e});const S0={type:"error",data:"parser error"},M5=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",T5=typeof ArrayBuffer=="function",_5=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Y1=({type:e,data:t},n,r)=>M5&&t instanceof Blob?n?r(t):K2(t,r):T5&&(t instanceof ArrayBuffer||_5(t))?n?r(t):K2(new Blob([t]),r):r(ur[e]+(t||"")),K2=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function Z2(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let bh;function L$(e,t){if(M5&&e.data instanceof Blob)return e.data.arrayBuffer().then(Z2).then(t);if(T5&&(e.data instanceof ArrayBuffer||_5(e.data)))return t(Z2(e.data));Y1(e,!1,n=>{bh||(bh=new TextEncoder),t(bh.encode(n))})}const Y2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ia=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Y2.length;e++)ia[Y2.charCodeAt(e)]=e;const I$=e=>{let t=e.length*.75,n=e.length,r,i=0,s,o,l,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const u=new ArrayBuffer(t),d=new Uint8Array(u);for(r=0;r<n;r+=4)s=ia[e.charCodeAt(r)],o=ia[e.charCodeAt(r+1)],l=ia[e.charCodeAt(r+2)],c=ia[e.charCodeAt(r+3)],d[i++]=s<<2|o>>4,d[i++]=(o&15)<<4|l>>2,d[i++]=(l&3)<<6|c&63;return u},$$=typeof ArrayBuffer=="function",X1=(e,t)=>{if(typeof e!="string")return{type:"message",data:O5(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:D$(e.substring(1),t)}:Nc[n]?e.length>1?{type:Nc[n],data:e.substring(1)}:{type:Nc[n]}:S0},D$=(e,t)=>{if($$){const n=I$(e);return O5(n,t)}else return{base64:!0,data:e}},O5=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},z5=String.fromCharCode(30),B$=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((s,o)=>{Y1(s,!1,l=>{r[o]=l,++i===n&&t(r.join(z5))})})},F$=(e,t)=>{const n=e.split(z5),r=[];for(let i=0;i<n.length;i++){const s=X1(n[i],t);if(r.push(s),s.type==="error")break}return r};function V$(){return new TransformStream({transform(e,t){L$(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let Sh;function nc(e){return e.reduce((t,n)=>t+n.length,0)}function rc(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function H$(e,t){Sh||(Sh=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,l){for(n.push(o);;){if(r===0){if(nc(n)<1)break;const c=rc(n,1);s=(c[0]&128)===128,i=c[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(nc(n)<2)break;const c=rc(n,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),r=3}else if(r===2){if(nc(n)<8)break;const c=rc(n,8),u=new DataView(c.buffer,c.byteOffset,c.length),d=u.getUint32(0);if(d>Math.pow(2,53-32)-1){l.enqueue(S0);break}i=d*Math.pow(2,32)+u.getUint32(4),r=3}else{if(nc(n)<i)break;const c=rc(n,i);l.enqueue(X1(s?c:Sh.decode(c),t)),r=0}if(i===0||i>e){l.enqueue(S0);break}}}})}const N5=4;function rt(e){if(e)return W$(e)}function W$(e){for(var t in rt.prototype)e[t]=rt.prototype[t];return e}rt.prototype.on=rt.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};rt.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};rt.prototype.off=rt.prototype.removeListener=rt.prototype.removeAllListeners=rt.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+e],this};rt.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this};rt.prototype.emitReserved=rt.prototype.emit;rt.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};rt.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Sn=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function A5(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const U$=Sn.setTimeout,q$=Sn.clearTimeout;function cf(e,t){t.useNativeTimers?(e.setTimeoutFn=U$.bind(Sn),e.clearTimeoutFn=q$.bind(Sn)):(e.setTimeoutFn=Sn.setTimeout.bind(Sn),e.clearTimeoutFn=Sn.clearTimeout.bind(Sn))}const G$=1.33;function K$(e){return typeof e=="string"?Z$(e):Math.ceil((e.byteLength||e.size)*G$)}function Z$(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function Y$(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function X$(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class Q$ extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class Q1 extends rt{constructor(t){super(),this.writable=!1,cf(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,n,r){return super.emitReserved("error",new Q$(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=X1(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=Y$(t);return n.length?"?"+n:""}}const L5="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),C0=64,J$={};let X2=0,ic=0,Q2;function J2(e){let t="";do t=L5[e%C0]+t,e=Math.floor(e/C0);while(e>0);return t}function I5(){const e=J2(+new Date);return e!==Q2?(X2=0,Q2=e):e+"."+J2(X2++)}for(;ic<C0;ic++)J$[L5[ic]]=ic;let $5=!1;try{$5=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const eD=$5;function D5(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||eD))return new XMLHttpRequest}catch{}if(!t)try{return new Sn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function tD(){}const nD=function(){return new D5({xdomain:!1}).responseType!=null}();class rD extends Q1{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}const n=t&&t.forceBase64;this.supportsBinary=nD&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};F$(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,B$(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=I5()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Js(this.uri(),t)}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}let Js=class Ac extends rt{constructor(t,n){super(),cf(this,n),this.opts=n,this.method=n.method||"GET",this.uri=t,this.data=n.data!==void 0?n.data:null,this.create()}create(){var t;const n=A5(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const r=this.xhr=new D5(n);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this.opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Ac.requestsCount++,Ac.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=tD,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Ac.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};Js.requestsCount=0;Js.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ew);else if(typeof addEventListener=="function"){const e="onpagehide"in Sn?"pagehide":"unload";addEventListener(e,ew,!1)}}function ew(){for(let e in Js.requests)Js.requests.hasOwnProperty(e)&&Js.requests[e].abort()}const J1=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0))(),sc=Sn.WebSocket||Sn.MozWebSocket,tw=!0,iD="arraybuffer",nw=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class sD extends Q1{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),n=this.opts.protocols,r=nw?{}:A5(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=tw&&!nw?n?new sc(t,n):new sc(t):new sc(t,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Y1(r,this.supportsBinary,s=>{const o={};try{tw&&this.ws.send(s)}catch{}i&&J1(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=I5()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}check(){return!!sc}}class oD extends Q1{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(t=>{const n=H$(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),i=V$();i.readable.pipeTo(t.writable),this.writer=i.writable.getWriter();const s=()=>{r.read().then(({done:l,value:c})=>{l||(this.onPacket(c),s())}).catch(l=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;this.writer.write(r).then(()=>{i&&J1(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this.transport)===null||t===void 0||t.close()}}const aD={websocket:sD,webtransport:oD,polling:rD},lD=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,cD=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function k0(e){const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=lD.exec(e||""),s={},o=14;for(;o--;)s[cD[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=uD(s,s.path),s.queryKey=dD(s,s.query),s}function uD(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function dD(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}let B5=class ks extends rt{constructor(t,n={}){super(),this.binaryType=iD,this.writeBuffer=[],t&&typeof t=="object"&&(n=t,t=null),t?(t=k0(t),n.hostname=t.host,n.secure=t.protocol==="https"||t.protocol==="wss",n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=k0(n.host).host),cf(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=X$(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=N5,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new aD[t](r)}open(){let t;if(this.opts.rememberUpgrade&&ks.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(t){let n=this.createTransport(t),r=!1;ks.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",f=>{if(!r)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;ks.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(d(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=n.name,this.emitReserved("upgradeError",h)}}))};function s(){r||(r=!0,d(),n.close(),n=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=n.name,s(),this.emitReserved("upgradeError",h)};function l(){o("transport closed")}function c(){o("socket closed")}function u(f){n&&f.name!==n.name&&s()}const d=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",l),this.off("close",c),this.off("upgrading",u)};n.once("open",i),n.once("error",o),n.once("close",l),this.once("close",c),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onOpen(){if(this.readyState="open",ks.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const n=this.upgrades.length;for(;t<n;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=t.data,this.onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=K$(i)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(t,n,r){return this.sendPacket("message",t,n,r),this}send(t,n,r){return this.sendPacket("message",t,n,r),this}sendPacket(t,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:t,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}onError(t){ks.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const n=[];let r=0;const i=t.length;for(;r<i;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}};B5.protocol=N5;function fD(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=k0(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+t,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const hD=typeof ArrayBuffer=="function",pD=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,F5=Object.prototype.toString,mD=typeof Blob=="function"||typeof Blob<"u"&&F5.call(Blob)==="[object BlobConstructor]",gD=typeof File=="function"||typeof File<"u"&&F5.call(File)==="[object FileConstructor]";function eg(e){return hD&&(e instanceof ArrayBuffer||pD(e))||mD&&e instanceof Blob||gD&&e instanceof File}function Lc(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(Lc(e[n]))return!0;return!1}if(eg(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Lc(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Lc(e[n]))return!0;return!1}function yD(e){const t=[],n=e.data,r=e;return r.data=j0(n,t),r.attachments=t.length,{packet:r,buffers:t}}function j0(e,t){if(!e)return e;if(eg(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=j0(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=j0(e[r],t));return n}return e}function vD(e,t){return e.data=P0(e.data,t),delete e.attachments,e}function P0(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=P0(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=P0(e[n],t));return e}const xD=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],wD=5;var ye;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(ye||(ye={}));class bD{constructor(t){this.replacer=t}encode(t){return(t.type===ye.EVENT||t.type===ye.ACK)&&Lc(t)?this.encodeAsBinary({type:t.type===ye.EVENT?ye.BINARY_EVENT:ye.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===ye.BINARY_EVENT||t.type===ye.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=yD(t),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}function rw(e){return Object.prototype.toString.call(e)==="[object Object]"}class tg extends rt{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===ye.BINARY_EVENT;r||n.type===ye.BINARY_ACK?(n.type=r?ye.EVENT:ye.ACK,this.reconstructor=new SD(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(eg(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(ye[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===ye.BINARY_EVENT||r.type===ye.BINARY_ACK){const s=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const o=t.substring(s,n);if(o!=Number(o)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(t.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(s,n)}else r.nsp="/";const i=t.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=t.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===t.length)break}r.id=Number(t.substring(s,n+1))}if(t.charAt(++n)){const s=this.tryParse(t.substr(n));if(tg.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case ye.CONNECT:return rw(n);case ye.DISCONNECT:return n===void 0;case ye.CONNECT_ERROR:return typeof n=="string"||rw(n);case ye.EVENT:case ye.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&xD.indexOf(n[0])===-1);case ye.ACK:case ye.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class SD{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=vD(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const CD=Object.freeze(Object.defineProperty({__proto__:null,Decoder:tg,Encoder:bD,get PacketType(){return ye},protocol:wD},Symbol.toStringTag,{value:"Module"}));function Nn(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const kD=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class V5 extends rt{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Nn(t,"open",this.onopen.bind(this)),Nn(t,"packet",this.onpacket.bind(this)),Nn(t,"error",this.onerror.bind(this)),Nn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){if(kD.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:ye.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,l=n.pop();this._registerAckCallback(o,l),r.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[t]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===t&&this.sendBuffer.splice(o,1);n.call(this,new Error("operation has timed out"))},i);this.acks[t]=(...o)=>{this.io.clearTimeoutFn(s),n.apply(this,[null,...o])}}emitWithAck(t,...n){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,s)=>{n.push((o,l)=>r?o?s(o):i(l):i(o)),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:ye.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case ye.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ye.EVENT:case ye.BINARY_EVENT:this.onevent(t);break;case ye.ACK:case ye.BINARY_ACK:this.onack(t);break;case ye.DISCONNECT:this.ondisconnect();break;case ye.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:ye.ACK,id:t,data:i}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(n.apply(this,t.data),delete this.acks[t.id])}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ye.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Po(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Po.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Po.prototype.reset=function(){this.attempts=0};Po.prototype.setMin=function(e){this.ms=e};Po.prototype.setMax=function(e){this.max=e};Po.prototype.setJitter=function(e){this.jitter=e};class E0 extends rt{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,cf(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Po({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||CD;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new B5(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Nn(n,"open",function(){r.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=Nn(n,"error",s);if(this._timeout!==!1){const l=this._timeout,c=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Nn(t,"ping",this.onping.bind(this)),Nn(t,"data",this.ondata.bind(this)),Nn(t,"error",this.onerror.bind(this)),Nn(t,"close",this.onclose.bind(this)),Nn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){J1(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new V5(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vo={};function Ic(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=fD(e,t.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Vo[i]&&s in Vo[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return l?c=new E0(r,t):(Vo[i]||(Vo[i]=new E0(r,t)),c=Vo[i]),n.query&&!t.query&&(t.query=n.queryKey),c.socket(n.path,t)}Object.assign(Ic,{Manager:E0,Socket:V5,io:Ic,connect:Ic});const H5=I.createContext(void 0),jD=({children:e})=>{const[t,n]=w.useState(!1),r=w.useRef(),i=s=>{!t&&!r.current&&(r.current=Ic("http://26.255.75.156:4096/game/phone",{query:{id:s}}),r.current.on("connect",()=>{n(!0)}))};return a.jsx(H5.Provider,{value:{connect:i,socket:r.current},children:e})},ng=()=>{const e=w.useContext(H5);if(e===void 0)throw new Error("useSocket deve ser usado dentro de um SocketProvider");return e},PD=()=>{const e=K(),{addEventListener:t}=$r(),{connect:n}=ng();return w.useEffect(()=>{dn("execBootRequest",{})},[]),t("execOnPhoneBoot",r=>{r?(n(r.id),e("/home")):e("/onboarding")}),a.jsx(H.div,{style:{height:"100%",overflowY:"auto"},initial:{backgroundColor:"transparent"},animate:{backgroundColor:"#09090a"},exit:{backgroundColor:"#000000"},transition:{ease:"easeInOut",duration:.4},children:a.jsx(A$,{children:a.jsx("img",{src:"src/assets/samsungA50.png",alt:"banner"})})})},ED=W.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    z-index: 10;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${({theme:e})=>e.background20};
    z-index: 5;
  }

  .logo {
    width: 48px;
  }

  .rocket {
    position: absolute;
    bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: ${({theme:e})=>e.text10};
    p:nth-child(2) {
      color: #00b37e;
      font-weight: 500;
    }
  }
`,RD=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"transparent",color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"transparent",color:n.text10}});const r=setTimeout(()=>{e("/instagram/conect")},3e3);return()=>clearTimeout(r)},[]),a.jsx(H.div,{initial:{opacity:0,scale:.5,borderRadius:"100%"},animate:{opacity:1,scale:1,borderRadius:0},transition:{duration:.4,ease:"easeInOut"},children:a.jsxs(ED,{children:[a.jsx("div",{className:"background"}),a.jsx("img",{className:"logo",src:"src/assets/InstagramLogo.png",alt:"instagram"}),a.jsxs("div",{className:"rocket",children:[a.jsx("p",{children:"from"}),a.jsx("p",{children:"Rocket Community"})]})]})})},MD=W.div`
  height: 100%;
  color: ${({theme:e})=>e.text10};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  * {
    z-index: 10;
  }

  .icon {
    margin: 12px 0;
    width: 48px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    text-align: center;
    button {
      width: 100%;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      padding: 6px;
      border-radius: 4px;
      width: 180px;
      background-color: #04d361;
      color: ${({theme:e})=>e.text10};
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    a {
      font-weight: 600;
      color: #00875f;
    }
  }

  .rocket {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: ${({theme:e})=>e.text10};
    p:nth-child(2) {
      color: #00b37e;
      font-weight: 500;
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({theme:e})=>e.background10};
    z-index: 5;
  }
`,TD=W.div`
  border-radius: 50%;
  img {
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: 50%;
  }
`,ce=({size:e,id:t,url:n})=>a.jsx(TD,{size:e,className:"avatar",children:a.jsx("img",{src:n||(t?`src/assets/Avatars/${t}.png`:"src/assets/Avatars/non.png"),alt:"profile picture"})}),_D=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn(),[r,i]=w.useState(!1);w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"transparent",color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"transparent",color:n.text10}})},[]);const s=()=>{i(!0),e("/instagram/profile")};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeInOut",duration:.4},children:a.jsxs(MD,{children:[a.jsx("div",{className:"background"}),a.jsx(H.img,{initial:{opacity:0,translateX:-60,translateY:48},animate:{opacity:1,translateX:0,translateY:0},exit:{opacity:0,translateX:60,translateY:-48},transition:{delay:.6,ease:"easeIn",duration:.4},className:"icon",src:"src/assets/rocketGreen.png",alt:"rocket"}),a.jsxs(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,ease:"easeIn",duration:.4},className:"form",children:[a.jsx(ce,{size:60}),a.jsx("p",{children:"vini_54"}),a.jsx("button",{onClick:s,children:r?a.jsx(C1,{color:"inherit",size:16}):"Log in"})]}),a.jsxs(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,ease:"easeIn",duration:.4},className:"rocket",children:[a.jsx("p",{children:"from"}),a.jsx("p",{children:"Rocket Community"})]})]})})},OD=W.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  & > main {
    flex: 1;
    color: ${({theme:e})=>e.text10};
    background-color: ${({theme:e})=>e.background10};
    overflow-y: auto;
  }
  & > nav {
    padding: 0 12px;
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme:e})=>e.background10};
    border-top: 2px inset rgba(225, 225, 225, 0.4);
    svg {
      overflow: visible;
      color: ${({theme:e})=>e.text10};
      path {
        stroke: ${({theme:e})=>e.text10};
      }
    }
    .home.active svg {
      fill: ${({theme:e})=>e.text10};
    }
    a.avatar {
      padding: 2px;
      border-radius: 50%;
      &.active {
        border: 1px solid ${({theme:e})=>e.text10};
      }
    }
    & > a {
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease;
      &.active {
        svg {
          stroke-width: 1;
        }
      }
    }
  }
`;function zD(e){return U({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{stroke:"#000",strokeWidth:"2",d:"M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"}}]})(e)}function ND(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}function AD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"}}]})(e)}function W5(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"}}]})(e)}function LD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"}}]})(e)}function U5(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"}}]})(e)}function ID(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"}}]})(e)}function $D(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}}]})(e)}function DD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}function BD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"}}]})(e)}function FD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"}}]})(e)}function VD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}},{tag:"path",attr:{d:"M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"}}]})(e)}function HD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}}]})(e)}function WD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}},{tag:"path",attr:{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}}]})(e)}function UD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"}}]})(e)}function qD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}}]})(e)}function rg(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}}]})(e)}function GD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function KD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]})(e)}function ZD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}}]})(e)}function YD(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}function q5(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}}]})(e)}function XD(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(e)}function QD(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"}}]})(e)}function JD(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"}}]})(e)}function G5(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function eB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"}}]})(e)}const tB=()=>{const{SistemDispatch:e}=w.useContext(J),t=pn();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:t.background10,color:t.text10}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:t.background10,color:t.text10}})},[]),w.useEffect(()=>{e({type:"setBottomNavStyles",values:{background:t.background10,color:t.text10}}),e({type:"setStatusBarStyle",values:{background:t.background10,color:t.text10}})},[t]),a.jsxs(OD,{children:[a.jsx("main",{children:a.jsx(_m,{})}),a.jsxs("nav",{children:[a.jsx(Ln,{to:"/instagram/feed",className:"home",children:a.jsx(zD,{size:12})}),a.jsx(Ln,{to:"/instagram/explore",children:a.jsx(YD,{size:12})}),a.jsx(Ln,{to:"/instagram/cam",children:a.jsx(JD,{size:18})}),a.jsx(Ln,{to:"/instagram/activity",children:({isActive:n})=>n?a.jsx(qD,{size:12}):a.jsx(rg,{size:12})}),a.jsx(Ln,{to:"/instagram/profile",className:"avatar",children:a.jsx(ce,{size:18})})]})]})},K5=W.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};
  transition: 0.4s ease-in-out;

  .container1 {
    padding: 0 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    & > div {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .left.back {
      gap: 0;
      margin-left: -4px;
    }
    .right {
      gap: 8px;
      button {
        color: ${({theme:e})=>e.text10};
      }
    }
  }

  .container2 {
    width: 100%;
    padding: 0 8px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    .avatar {
      padding: 2px;
      border: 2px solid #48484a;
    }
    .infos {
      display: flex;
      gap: 12px;
      font-size: 10px;
      strong {
        font-size: 12px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .infos.follow {
      flex-wrap: wrap;
      row-gap: 2px;
      justify-content: center;
    }
  }

  .container3 {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    .username {
      font-size: 12px;
      font-weight: 600;
    }
    .bio {
      font-size: 10px;
    }
    &.margin {
      margin-bottom: 8px;
    }
  }

  button.edit {
    margin: 8px auto 0 auto;
    width: calc(100% - 8px);
    padding: 4px;
    background: none;
    border: 1px solid ${({theme:e})=>e.border10};
    border-radius: 6px;
    font-size: 10px;
    font-weight: 500;
    color: ${({theme:e})=>e.text10};
    display: flex;
    justify-content: center;
  }

  button.follow {
    width: 100%;
    padding: 2px;
    background: none;
    background-color: #5d5dfc;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    color: ${({theme:e})=>e.background10};
    display: flex;
    justify-content: center;
  }

  .highsContainer {
    margin: 8px;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    overflow-x: auto;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid ${({theme:e})=>e.border10};
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${({theme:e})=>e.text10};
        }
      }

      img {
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      p {
        max-width: 36px;
        max-height: 12px;
        font-size: 10px;
        overflow: hidden;
        text-align: center;
      }
    }
  }

  .container4 {
    width: 100%;
    display: flex;
    border-top: 1px solid ${({theme:e})=>e.border10};
    & > div {
      width: 50%;
      padding: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 16px;
      }
    }
    & > .active {
      border-bottom: 1px solid ${({theme:e})=>e.text10};
    }
  }

  .container5 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
`;function nB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"}}]})(e)}function rB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0zm0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"}}]})(e)}function iB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}}]})(e)}function sB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M8 5v14l11-7z"}}]})(e)}function oB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}}]})(e)}function aB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"}},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}}]})(e)}function lB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32-7.01-7.01zm9.28 14.94l1.41-1.41-7.69-7.7-3.94-3.94-6.75-6.75-1.42 1.41 6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-2.67l6.28 6.28z"}},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}}]})(e)}function cB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"}}]})(e)}function Ch(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M18 5V2H6v1.17L7.83 5zM16 11l2-3V7H9.83L16 13.17zM2.81 2.81L1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81z"}}]})(e)}function kh(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 2h12v3H6zM6 7v1l2 3v11h8V11l2-3V7H6zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(e)}function uB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"}}]})(e)}function dB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3.2"}},{tag:"path",attr:{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}]})(e)}function fB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z"}}]})(e)}function hB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}}]})(e)}function pB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{fillOpacity:".3",d:"M2 22h20V2L2 22z"}},{tag:"path",attr:{d:"M17 7L2 22h15V7z"}}]})(e)}function Z5(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}}]},{tag:"path",attr:{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"}},{tag:"path",attr:{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"}}]})(e)}function mB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0112 19z"}}]})(e)}function gB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 2H5a2 2 0 00-2 2v14a2 2 0 002 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z"}}]})(e)}function yB(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{cx:"15.5",cy:"9.5",r:"1.5"}},{tag:"circle",attr:{cx:"8.5",cy:"9.5",r:"1.5"}},{tag:"path",attr:{d:"M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(e)}const vB=["src/assets/Images/placeholder1.png","src/assets/Images/placeholder2.png","src/assets/Images/placeholder3.png","src/assets/Images/placeholder4.png","src/assets/Images/placeholder5.png","src/assets/Images/placeholder6.png","src/assets/Images/placeholder7.png","src/assets/Images/placeholder8.png","src/assets/Images/placeholder1.png","src/assets/Images/placeholder2.png","src/assets/Images/placeholder3.png","src/assets/Images/placeholder4.png","src/assets/Images/placeholder5.png","src/assets/Images/placeholder6.png","src/assets/Images/placeholder7.png"],Y5=()=>{const e=K();return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"container4",children:[a.jsx("div",{className:"grid active",children:a.jsx(UD,{size:14})}),a.jsx("div",{className:"Tag",children:a.jsx(gB,{size:18})})]}),a.jsx("div",{className:"container5",children:vB.map((t,n)=>a.jsx(H.img,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4,delay:.05*(n-1)},src:t,alt:"picture",onClick:()=>e("/instagram/post")},n))})]})};function xB(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 260H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm-96-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0z"}}]})(e)}function ig(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(e)}function wB(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(e)}var iw;(function(e){e.RN="RN",e.CJS="CJS",e.ES="ES",e.MJS="MJS",e.UMD="UMD",e.UMD_MIN="UMD_MIN"})(iw||(iw={}));const vr=Symbol(),bB=!1,X5=!0,Q5=typeof window<"u";function sa(e){return typeof e=="function"}function sw(e){return typeof e=="object"}function J5(e){return e?sa(e.then):!1}var ow;(function(e){e[e.array=1]="array",e[e.object=2]="object"})(ow||(ow={}));var aw;(function(e){function t(s,o){if(Array.isArray(s)&&Array.isArray(o)){if(s.length!==o.length)return!1;for(let l=0;l<s.length;l++)if(!Object.is(s[l],o[l]))return!1;return!0}else return Object.is(s,o)}e.shallowCompareArray=t;function n(s,o){const l=Array.isArray(s),c=Array.isArray(o);return l!==c?!1:l&&c?t(s,o):r(s,o)}e.shallowCompareArrayOrObject=n;function r(s,o){if(sw(s)&&sw(o)){const l=Object.keys(s),c=Object.keys(o);if(l.length!==c.length)return!1;for(let u=0;u<l.length;u++){const d=l[u],f=c[u];if(d!==f||!Object.is(s[d],o[f]))return!1}return!0}else return Object.is(s,o)}e.shallowCompareObject=r;function i(s,o){return JSON.stringify(s)===JSON.stringify(o)}e.stringifyCompare=i})(aw||(aw={}));var lw={},SB={get exports(){return lw},set exports(e){lw=e}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw;function CB(){if(cw)return Ho;cw=1;var e=I,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,c,u){var d,f={},h=null,g=null;u!==void 0&&(h=""+u),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(g=c.ref);for(d in c)r.call(c,d)&&!s.hasOwnProperty(d)&&(f[d]=c[d]);if(l&&l.defaultProps)for(d in c=l.defaultProps,c)f[d]===void 0&&(f[d]=c[d]);return{$$typeof:t,type:l,key:h,ref:g,props:f,_owner:i.current}}return Ho.Fragment=n,Ho.jsx=o,Ho.jsxs=o,Ho}(function(e){e.exports=CB()})(SB);let kB=0;const jB=()=>++kB,PB=w.createContext({M$pool:{}});function sg(e){const n=w.useContext(PB).M$pool[e.M$scopeId];return n||e}class uw{constructor({get:t,compareFn:n}){this[vr]={M$get:t,M$compareFn:n||Object.is}}}function dw(e){for(const t of e)if(!t.M$getIsReadyStatus())return!1;return!0}var In;(function(e){e[e.hydrate=1]="hydrate",e[e.set=2]="set",e[e.reset=3]="reset"})(In||(In={}));class EB{constructor(){this.M$watcherCollection={},this.M$incrementalWatchId=0,this.M$watch=t=>{const n=++this.M$incrementalWatchId;return this.M$watcherCollection[n]=t,()=>{delete this.M$watcherCollection[n]}},this.M$unwatchAll=()=>{this.M$watcherCollection={}},this.M$refresh=(...t)=>{const n=Object.values(this.M$watcherCollection);for(let r=0;r<n.length;r++)n[r](...t)}}}function ek(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(String(e[r]));return n.join(t)}function og(e,...t){let n=`Relink_E${e}`;return t.length>0&&(n+=`-${ek(t,",")}`),n}function RB(e){throw new TypeError(og(1,e))}function MB(e){const t=ek(e," -> ");throw new Error(og(2,t))}function TB(e){throw new Error(og(3,String(e)))}var rr;(function(e){e[e.C=1]="C",e[e.D=2]="D",e[e.N=3]="N",e[e.S=4]="S"})(rr||(rr={}));class _B{constructor(t){this.M$mutationCount=0,this.M$isHydrating=!1,this.M$watcher=new EB,this.M$set=n=>{this.M$bumpMutationCount(this.M$currentState,n),this.M$currentState=n,this.M$watcher.M$refresh({type:In.set,state:this.M$currentState})},this.M$reset=()=>{this.M$bumpMutationCount(this.M$currentState,this.M$defaultState),this.M$currentState=this.M$defaultState,this.M$watcher.M$refresh({type:In.reset,state:this.M$currentState})},this.M$beginHydration=()=>{this.M$isHydrating||(this.M$isHydrating=!0,this.M$watcher.M$refresh({isHydrating:this.M$isHydrating,type:In.hydrate,state:this.M$currentState}))},this.M$endHydration=(n,r)=>{if(this.M$isHydrating){if(n===rr.C)this.M$bumpMutationCount(this.M$currentState,r),this.M$currentState=r;else if(n!==rr.N)if(n===rr.D||n===rr.S)this.M$bumpMutationCount(this.M$currentState,this.M$defaultState),this.M$currentState=this.M$defaultState;else throw TB(n);this.M$isHydrating=!1,this.M$watcher.M$refresh({isHydrating:this.M$isHydrating,type:In.hydrate,state:this.M$currentState})}},this.M$defaultState=t,this.M$currentState=t}M$bumpMutationCount(t,n){Object.is(t,n)||(this.M$mutationCount+=1)}}function tk(e,t){for(let n=0;n<e.length;n++){const r=e[n].M$key,i=[...t,r];t.includes(r)&&MB(i),tk(e[n].M$parentDeps,i)}}const OB=()=>{};class zB{constructor(t,n){this.M$isFlushing=!1,this.M$queueStack=[],this.M$flush=async()=>{if(!this.M$isFlushing){for(this.M$isFlushing=!0;this.M$isOpen&&this.M$queueStack.length>0;){const[r,i,s]=this.M$queueStack.shift();try{const o=r(),l=J5(o)?await o:o;i(l)}catch(o){s(o)}}this.M$isFlushing=!1}},this.M$exec=r=>new Promise((i,s)=>{this.M$queueStack.push([r,i,s]),this.M$flush()}),this.M$lockBase=()=>{this.M$isOpen=!1},this.M$lock=()=>this.M$exec(this.M$lockBase),this.M$open=()=>new Promise((r,i)=>{if(!this.M$isOpen)this.M$isOpen=!0,this.M$flush(),r();else for(let s=0;s<this.M$queueStack.length;s++){const[o]=this.M$queueStack[s];if(Object.is(o,this.M$lockBase)){this.M$queueStack.splice(s,1,[OB,r,i]);break}}}),this.M$isOpen=t}}const R0={};function NB(e){Q5&&(R0[e]||(R0[e]=!0))}function AB(e){delete R0[e]}var Hs;(function(e){e.M$commit="commit",e.M$skip="skip"})(Hs||(Hs={}));function LB(){let e=!1;return()=>e?!1:(e=!0,!0)}const IB=LB;function $B(e){return{isAsync:{current:!1},stop:()=>{}}}const DB={public:!1,suspense:!1};class bl{get key(){return this.M$key}get default(){return this.M$defaultState}constructor({key:t,scope:n,deps:r=[],default:i,lifecycle:s={},options:o}){this.M$depWatchers=[],this.M$childDeps=[],this.M$getIsReadyStatus=()=>{const u=this.M$core.M$isHydrating,d=dw(this.M$parentDeps);return!u&&d};const l=typeof t;l==="string"||l==="number"||l==="symbol"?this.M$key=t:RB(l),this.hydrate=this.hydrate.bind(this),this.get=this.get.bind(this),this.getAsync=this.getAsync.bind(this),this.set=this.set.bind(this),this.reset=this.reset.bind(this),this.watch=this.watch.bind(this),this.cleanup=this.cleanup.bind(this),this.dispose=this.dispose.bind(this),NB(this.M$key),tk(r,[this.M$key]),this.M$parentDeps=r,this.M$scopeId=n?n.M$scopeId:jB(),this.M$gatedFlow=new zB(r.length<=0,this.M$key),this.M$options={...DB,...o},this.M$core=new _B(i),this.M$defaultState=i;const c=async()=>{sa(s.init)&&await this.hydrate(s.init)};c();for(const u of r){u.M$childDeps.push(this.M$key);const d=u.watch(f=>{f.type===In.hydrate&&(f.isHydrating?this.M$core.M$beginHydration():dw(r)&&c())});this.M$depWatchers.push(d)}sa(s.didSet)&&this.M$core.M$watcher.M$watch(u=>{u.type===In.set&&s.didSet(u)}),sa(s.didReset)&&this.M$core.M$watcher.M$watch(u=>{u.type===In.reset&&s.didReset(u)})}hydrate(t){return this.M$gatedFlow.M$exec(this.M$core.M$beginHydration),this.M$gatedFlow.M$exec(()=>{const n=IB(this.M$key);return t({defaultState:this.M$defaultState,commit:i=>{n(Hs.M$commit)&&this.M$core.M$endHydration(rr.C,i)},skip:()=>{n(Hs.M$skip)&&this.M$core.M$endHydration(rr.S)},commitDefault:()=>{n(Hs.M$skip)&&this.M$core.M$endHydration(rr.D)},commitNoop:()=>{n(Hs.M$skip)&&this.M$core.M$endHydration(rr.N)}})})}get(){return this.M$core.M$currentState}getAsync(){return this.M$gatedFlow.M$exec(()=>this.M$core.M$currentState)}set(t){return this.M$gatedFlow.M$exec(()=>{if(sa(t)){const n=$B(this.M$key),r=t(this.M$core.M$currentState);if(J5(r))return n.isAsync.current=!0,new Promise((i,s)=>{r.then(o=>{this.M$core.M$set(o),i()}).catch(o=>{s(o)}).finally(()=>{n.stop()})});this.M$core.M$set(r),n.stop()}else this.M$core.M$set(t)})}reset(){return this.M$gatedFlow.M$exec(()=>{this.M$core.M$reset()})}watch(t){return this.M$core.M$watcher.M$watch(t)}cleanup(){for(const t of this.M$parentDeps){if(!t.M$childDeps)continue;const n=t.M$childDeps.findIndex(r=>Object.is(r,this.M$key));n>=0?t.M$childDeps.splice(n,1):(this.M$key,t.M$key,void 0)}for(this.M$core.M$watcher.M$unwatchAll(),AB(this.M$key);this.M$depWatchers.length>0;)this.M$depWatchers.shift()()}async dispose(t={}){t.force||await this.M$gatedFlow.M$exec(()=>{}),this.cleanup();for(const n in this)delete this[n];this.get=void 0,this.getAsync=void 0,this.set=void 0,this.reset=void 0,this.hydrate=void 0,this.cleanup=void 0,this.dispose=void 0,this.watch=void 0}}function BB(e){return new Promise(t=>{if(e.M$getIsReadyStatus())t();else{const n=e.watch(r=>{r.type===In.hydrate&&(r.isHydrating||(n(),t()))})}})}const FB=e=>e+1,VB=Q5?w.useLayoutEffect:w.useEffect;function HB(e){let t=1,n=null;const r=e.then(i=>{t=0,n=i}).catch(i=>{t=2,n=i});return()=>{switch(t){case 1:throw r;case 2:throw n}}}function ag(e){const t=w.useRef(null),[,n]=w.useReducer(FB,0);e.M$options.suspense&&(e.M$getIsReadyStatus()||(t.current=(async()=>{await BB(e),t.current=null})()),t.current&&HB(t.current)()),VB(()=>{if(e.M$options.suspense){const r=e.watch(i=>{i.type===In.hydrate&&i.isHydrating&&n()});return()=>{r()}}},[e])}var M0={},WB={get exports(){return M0},set exports(e){M0=e}},jh={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fw;function UB(){if(fw)return jh;fw=1;var e=I;function t(f,h){return f===h&&(f!==0||1/f===1/h)||f!==f&&h!==h}var n=typeof Object.is=="function"?Object.is:t,r=e.useState,i=e.useEffect,s=e.useLayoutEffect,o=e.useDebugValue;function l(f,h){var g=h(),m=r({inst:{value:g,getSnapshot:h}}),y=m[0].inst,P=m[1];return s(function(){y.value=g,y.getSnapshot=h,c(y)&&P({inst:y})},[f,g,h]),i(function(){return c(y)&&P({inst:y}),f(function(){c(y)&&P({inst:y})})},[f]),o(g),g}function c(f){var h=f.getSnapshot;f=f.value;try{var g=h();return!n(f,g)}catch{return!0}}function u(f,h){return h()}var d=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:l;return jh.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:d,jh}(function(e){e.exports=UB()})(WB);class qB{constructor(t){this.M$isInitialized=!1,this.M$factory=t}get(){return this.M$isInitialized||(this.M$value=this.M$factory(),this.M$isInitialized=!0),this.M$value}}function lg(e,t,n=X5){const r=sg(e);ag(e);const i=nk(r,t,n);return w.useDebugValue(void 0,()=>{if(e.M$options.public||bB)return{key:e.M$key,selector:t,value:i}}),i}const hw={[vr]:[-1,null]};function nk(e,t,n){const r=w.useRef(t);r.current=t;const i=w.useCallback(c=>r.current?r.current instanceof uw?r.current[vr].M$get(c):r.current(c):c,[]),s=w.useMemo(()=>r.current instanceof uw?r.current[vr].M$compareFn:Object.is,[]),o=w.useRef(hw),l=w.useRef(!1);return M0.useSyncExternalStore(e.watch,w.useCallback(()=>{const[c,u]=o.current[vr],d=e.M$core.M$mutationCount,f=new qB(()=>i(e.get()));if((()=>!n&&c>hw[vr][0]||c===d?!0:l.current?s(u,f.get()):!1)())return o.current;{const g={[vr]:[d,f.get()]};return o.current=g,l.current=!0,g}},[n,s,i,e]),w.useCallback(()=>({[vr]:[-1,i(e.get())]}),[i,e]))[vr][1]}function rk(e,t,n=X5){const r=sg(e);return ag(e),[nk(r,t,n),r.set,r.reset]}function ik(e){const t=sg(e);return ag(t),t.set}const pw={Dark:{background10:"#101011",background20:"#121214",background40:"#29292E",text10:"#F2F2FA",text20:"#E1E1E6",text40:"#8D8D99",text50:"#7C7C8A",border10:"rgba(242, 242, 250, .2)",instaLogo:"brightness(1)"},Light:{background10:"#F2F2FA",background20:"#E1E1E6",background40:"#C4C4CC",text10:"#09090A",text20:"#121214",text40:"#29292E",text50:"#323238",border10:"rgba(9, 9, 10, .2)",instaLogo:"brightness(0)"}},sk=new bl({key:"newStory",default:{text:"",id:1,background:{type:"",value:""}}}),ok=new bl({key:"theme",default:"dark"}),GB=({children:e})=>{const t=lg(ok);return a.jsx(dE,{theme:t==="dark"?pw.Dark:pw.Light,children:e})},cg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"}))};cg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};cg.defaultProps={color:"currentColor",size:"24"};const KB=cg,ug=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"}))};ug.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ug.defaultProps={color:"currentColor",size:"24"};const ZB=ug,YB=()=>{const e=K(),[t,n]=rk(ok);return a.jsx(H.div,{initial:{translateX:200},animate:{translateX:0},transition:{ease:"easeIn",duration:.4},children:a.jsxs(K5,{children:[a.jsxs("div",{className:"container1",children:[a.jsxs("div",{className:"left",children:[a.jsx("p",{children:"evol"}),a.jsx(nB,{size:12,color:"#3249CB"})]}),a.jsxs("div",{className:"right",children:[t==="dark"?a.jsx("button",{onClick:()=>n("light"),children:a.jsx(ZB,{size:16})}):a.jsx("button",{onClick:()=>n("dark"),children:a.jsx(KB,{size:16})}),a.jsx(WD,{size:14})]})]}),a.jsxs("div",{className:"container2",children:[a.jsx(ce,{id:31,size:40}),a.jsxs("div",{className:"infos",children:[a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"54"}),a.jsx("p",{children:"Posts"})]}),a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"834"}),a.jsx("p",{children:"Sequidores"})]}),a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"162"}),a.jsx("p",{children:"Sequindo"})]})]})]}),a.jsxs("div",{className:"container3",children:[a.jsx("p",{className:"username",children:"MonkA+"}),a.jsxs("div",{className:"bio",children:[a.jsx("p",{children:"Digital goodies designer @pixsellz"}),a.jsx("p",{children:"Everything is designed."})]})]}),a.jsx("button",{onClick:()=>e("/instagram/profileEdit"),className:"edit",children:"Editar perfil"}),a.jsxs("div",{className:"highsContainer",children:[a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx(wB,{size:16})}),a.jsx("p",{children:"New"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder4.png"})}),a.jsx("p",{children:"Friends"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder3.png"})}),a.jsx("p",{children:"Sport"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder6.png"})}),a.jsx("p",{children:"Design"})]})]}),a.jsx(Y5,{})]})})},XB=W.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  overflow-y: hidden;

  .imgsContainer {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    display: grid;
    align-content: start;
    gap: 1px;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      object-fit: cover;
      aspect-ratio: 1;
    }
    img:nth-child(2) {
      grid-area: 1 / 2 / 3 / 4;
    }
  }
`,QB=W.div`
  padding: 4px 8px;
  margin: 8px 0;
  width: calc(100% - 24px);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({theme:e})=>e.background40};
  border-radius: 6px;

  & > input {
    width: 100%;
    background: none;
    border: none;
    color: ${({theme:e})=>e.text10};
    font-size: 12px;
    ::placeholder {
      color: ${({theme:e})=>e.text50};
    }
  }

  svg {
    flex-shrink: 0;
    color: ${({theme:e})=>e.text50};
  }
`;function JB(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:"32",d:"M256 112v288m144-144H112"}}]})(e)}function eF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M124 158v-22h-24v22m235.76 127.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M196 272l-20-20-20 20m200 0l-20 20-20-20"}}]})(e)}function tF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 352c-12.6-.84-21-4-28-12-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11-90.46 80-90.46 210.92 0 290.87 45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56 440 348 431 353 416 352zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"}}]})(e)}function nF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"336",height:"336",x:"128",y:"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"57",ry:"57"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"}}]})(e)}function rF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432 208H288l32-192L80 304h144l-32 192z"}}]})(e)}function iF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"416",height:"352",x:"48",y:"80",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"}},{tag:"circle",attr:{cx:"336",cy:"176",r:"32",fill:"none",strokeMiterlimit:"10",strokeWidth:"32"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0143.11-2L464 368"}}]})(e)}function sF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285"}}]})(e)}function oF(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"}}]})(e)}const ak=({...e})=>a.jsxs(QB,{className:"searchInput",children:[a.jsx(oF,{size:14}),a.jsx("input",{...e,type:"text",placeholder:"Buscar"})]}),aF=["src/assets/Images/placeholder1.png","src/assets/images/placeholder2.png","src/assets/Images/placeholder3.png","src/assets/Images/placeholder4.png","src/assets/Images/placeholder6.png","src/assets/Images/placeholder5.png","src/assets/Images/placeholder8.png","src/assets/Images/placeholder2.png","src/assets/Images/placeholder7.png","src/assets/Images/placeholder6.png","src/assets/Images/placeholder3.png","src/assets/Images/placeholder1.png"],lF=()=>{const e=K(),t=()=>{e("/instagram/post")};return a.jsxs(XB,{children:[a.jsx(ak,{}),a.jsx("div",{className:"imgsContainer",children:aF.map((n,r)=>a.jsx(H.img,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4,delay:.1*(r-1)},src:n,alt:"pub",onClick:()=>t()},r))})]})},cF=W.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  overflow: auto;

  h1 {
    font-size: 16px;
    font-weight: 500;
  }

  h2 {
    font-size: 12px;
    font-weight: 500;
  }

  .list {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      width: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      strong {
        font-weight: 600;
      }
      p {
        flex: 1;
        font-size: 10px;
        max-height: 24px;
        overflow: hidden;
      }
      .postImg {
        width: 32px;
        height: 32px;
        object-fit: cover;
      }
      .followBtn {
        margin: auto;
        background: #4f4fcf;
        color: #e1e1e6;
        padding: 4px;
        font-size: 8px;
        font-weight: 500;
        border-radius: 4px;
        transition: 0.2s ease;
      }
    }
  }
`,Un=({user:e,id:t,message:n,type:r})=>{const i=K(),[s,o]=w.useState(!1),l=()=>{i("/instagram/post")};return a.jsxs("li",{className:"card",children:[a.jsx("button",{onClick:()=>i("/instagram/user"),children:a.jsx(ce,{id:t,size:28})}),a.jsxs("p",{children:[a.jsx("strong",{children:e})," ",n]}),r==="follow"?a.jsx("button",{className:"followBtn",onClick:()=>o(!s),children:s?"seguindo":"seguir"}):a.jsx("img",{onClick:()=>l(),src:"src/assets/Images/placeholder8.png",alt:"pic",className:"postImg"})]})},uF=()=>a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(cF,{children:[a.jsx("h1",{children:"Atividade"}),a.jsxs("section",{children:[a.jsx("h2",{children:"Recente"}),a.jsxs("ul",{className:"list",children:[a.jsx(Un,{id:86,user:"vinioli",message:"Curtiu sua foto"}),a.jsx(Un,{id:110,user:"craig_love",message:"Mencionou você em um comentário"}),a.jsx(Un,{id:5,user:"marcoMarcias",message:"Começou a lhe seguir",type:"follow"}),a.jsx(Un,{id:32,user:"monk",message:"Mencionou você em um comentário"}),a.jsx(Un,{id:51,user:"vinioli",message:"Curtiu sua foto"})]})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Este mês"}),a.jsxs("ul",{className:"list",children:[a.jsx(Un,{id:7,user:"vinioli",message:"Curtiu sua foto"}),a.jsx(Un,{id:61,user:"craig_love",message:"Mencionou você em um comentário"}),a.jsx(Un,{id:37,user:"marcoMarcias",message:"Começou a lhe seguir",type:"folow"}),a.jsx(Un,{id:91,user:"monk",message:"Mencionou você em um comentário"}),a.jsx(Un,{id:76,user:"vinioli",message:"Começou a lhe seguir",type:"folow"})]})]})]})}),dF=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;

  .container1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 72px;
      filter: ${({theme:e})=>e.instaLogo};
    }

    .navs {
      display: flex;
      align-items: center;
      gap: 8px;

      button {
        color: inherit;
      }
    }
  }

  .container2 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    overflow-x: auto;

    .profile {
      position: relative;
      .avatar {
        border: none;
      }
      .btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 16px;
        height: 16px;
        background-color: #2879d4;
        border-radius: 50%;
        border: 2px solid ${({theme:e})=>e.background10};
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .avatar {
      border: 2px solid #fa7e1e;
      padding: 2px;
    }
  }

  .postsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`,fF=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({theme:e})=>e.text10};
  button {
    color: ${({theme:e})=>e.text10};
  }
  .container1 {
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    p {
      font-size: 10px;
      font-weight: 500;
    }
  }

  .postImg {
    width: 100%;
    max-height: 160px;
    object-fit: cover;
  }

  .container3 {
    margin: 8px 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    button {
      display: flex;
      align-items: center;
    }
    .chat {
      margin-bottom: 2px;
    }
    .likedHeart {
      color: #d73628;
      animation: like 0.2s ease-in;
    }

    @keyframes like {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .savedMark {
      animation: like 0.2s ease-in;
    }
  }

  .container4 {
    p {
      width: 100%;
      font-size: 10px;
      font-weight: 300;
    }
    strong {
      font-weight: 600;
    }
  }

  .coments {
    color: ${({theme:e})=>e.text20};
    font-size: 8px;
    cursor: pointer;
    opacity: 0.8;
  }
`,$c=({seeComments:e,noRedirect:t})=>{const[n,r]=w.useState(!1),[i,s]=w.useState(!1),o=K(),l=()=>{o("/instagram/post")};return a.jsxs(fF,{children:[a.jsxs("div",{className:"container1",children:[a.jsxs("div",{className:"profile",children:[a.jsx(ce,{id:42,size:24}),a.jsx("p",{children:"Soweto"})]}),a.jsx("button",{children:a.jsx(q5,{size:14})})]}),a.jsx(H.img,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4,delay:.2},className:"postImg",src:"src/assets/Images/placeholder6.png",onClick:()=>!t&&l()}),a.jsxs("div",{className:"container3",children:[a.jsxs("div",{children:[a.jsx("button",{onClick:()=>r(!n),children:n?a.jsx($D,{className:"likedHeart",size:14}):a.jsx(rg,{size:14})}),a.jsx("button",{children:a.jsx(HD,{size:14,className:"chat"})})]}),a.jsx("button",{onClick:()=>s(!i),children:i?a.jsx(AD,{className:"savedMark",size:14}):a.jsx(FD,{size:14})})]}),a.jsx("div",{className:"container4",children:a.jsxs("p",{children:[a.jsx("strong",{children:"Soweto"})," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt officiis dolor ipsum enim"]})}),e&&a.jsx("p",{className:"coments",onClick:()=>l(),children:"Ver 90 comentários"})]})},hF=()=>{const e=K();return a.jsxs("div",{className:"container2",children:[a.jsxs("button",{className:"profile",children:[a.jsx(ce,{id:2,size:32}),a.jsx("div",{className:"btn",children:a.jsx(JB,{})})]}),a.jsx("button",{onClick:()=>e("/instagram/storyView"),children:a.jsx(ce,{id:5,size:28})}),a.jsx("button",{onClick:()=>e("/instagram/liveView"),children:a.jsx(ce,{id:8,size:28})}),a.jsx(ce,{id:3,size:28}),a.jsx(ce,{id:7,size:28}),a.jsx(ce,{id:2,size:28}),a.jsx(ce,{id:9,size:28}),a.jsx(ce,{id:1,size:28})]})},pF=()=>{const e=K();return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(dF,{children:[a.jsxs("div",{className:"container1",children:[a.jsx("img",{src:"src/assets/InstagramBrand.png",alt:"instagram",className:"logo"}),a.jsxs("div",{className:"navs",children:[a.jsx("button",{onClick:()=>e("/instagram/activity"),children:a.jsx(rg,{size:16})}),a.jsx("button",{onClick:()=>e("/instagram/chats"),children:a.jsx(sF,{className:"paperIcon",size:16})})]})]}),a.jsx(hF,{}),a.jsxs("div",{className:"postsContainer",children:[a.jsx($c,{seeComments:!0}),a.jsx($c,{seeComments:!0}),a.jsx($c,{seeComments:!0})]})]})})},mF=W.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > main {
    flex-grow: 1;
    position: relative;

    * {
      z-index: 2;
    }
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 8px;
      box-shadow: 0 0 0 16px ${({theme:e})=>e.background10};
      z-index: 1;
    }
  }

  .tabs {
    width: 100%;
    padding: 16px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme:e})=>e.background10};
    position: relative;

    .gallery {
      position: absolute;
      left: 8px;
      bottom: 12px;
      z-index: 3;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      color: ${({theme:e})=>e.text40};

      a {
        transition: 0.4s ease;
      }

      .active {
        color: ${({theme:e})=>e.text10};
        font-weight: 500;
      }
    }
  }
`,dg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M18,15V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15A3,3,0,0,0,18,15ZM4,5A1,1,0,0,1,5,4H15a1,1,0,0,1,1,1V9.36L14.92,8.27a2.56,2.56,0,0,0-1.81-.75h0a2.58,2.58,0,0,0-1.81.75l-.91.91-.81-.81a2.93,2.93,0,0,0-4.11,0L4,9.85Zm.12,10.45A.94.94,0,0,1,4,15V12.67L6.88,9.79a.91.91,0,0,1,1.29,0L9,10.6Zm8.6-5.76a.52.52,0,0,1,.39-.17h0a.52.52,0,0,1,.39.17L16,12.18V15a1,1,0,0,1-1,1H6.4ZM21,6a1,1,0,0,0-1,1V17a3,3,0,0,1-3,3H7a1,1,0,0,0,0,2H17a5,5,0,0,0,5-5V7A1,1,0,0,0,21,6Z"}))};dg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};dg.defaultProps={color:"currentColor",size:"24"};const lk=dg,gF=()=>{const e=K(),t=pn();return a.jsxs("div",{className:"tabs",children:[a.jsx("button",{onClick:()=>e("/instagram/galleryPost"),className:"gallery",children:a.jsx(lk,{size:20,color:t.text20})}),a.jsxs("nav",{children:[a.jsx(Ln,{to:"/instagram/storyCam",children:"Story"}),a.jsx(Ln,{to:"/instagram/cam",children:"Publicação"}),a.jsx(Ln,{to:"/instagram/liveCam",children:"Live"})]})]})},yF=()=>{const{SistemDispatch:e}=w.useContext(J),t=pn();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:t.background10,color:t.text10}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:t.background10,color:t.text10}})},[]),a.jsxs(mF,{children:[a.jsx("main",{children:a.jsx(_m,{})}),a.jsx(gF,{})]})},vF=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  .nav {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changeCam {
    position: absolute;
    left: 16px;
    bottom: 26px;
  }

  .videoCam {
    position: absolute;
    right: 16px;
    bottom: 26px;
  }
`,fg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"}))};fg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};fg.defaultProps={color:"currentColor",size:"24"};const uf=fg,hg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}))};hg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};hg.defaultProps={color:"currentColor",size:"24"};const Hn=hg,pg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12.29,5.21l1.5,1.5a1,1,0,0,0,1.42,0,1,1,0,0,0,.13-1.21H19a1,1,0,0,0,0-2H15.34a1,1,0,0,0-.13-1.21,1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76A1,1,0,0,0,12.29,5.21ZM22.92,9.12a1,1,0,0,0-.21-.33l-1.5-1.5a1,1,0,0,0-1.42,0,1,1,0,0,0-.13,1.21H16a1,1,0,0,0,0,2h3.66a1,1,0,0,0,.13,1.21,1,1,0,0,0,1.42,0l1.5-1.5a1,1,0,0,0,.21-.33A1,1,0,0,0,22.92,9.12ZM11,10a4,4,0,1,0,4,4A4,4,0,0,0,11,10Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,16Zm9-3a1,1,0,0,0-1,1v5a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.69l.54-1.62A1,1,0,0,1,8.44,7H10a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.59,7.06L5.28,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V14A1,1,0,0,0,20,13Z"}))};pg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};pg.defaultProps={color:"currentColor",size:"24"};const mg=pg,gg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"}))};gg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};gg.defaultProps={color:"currentColor",size:"24"};const ck=gg,uk=W.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & > button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.actionBtn {
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
  }
`,T0=({children:e,onClick:t})=>a.jsx(uk,{className:"actionBtn",children:a.jsx("button",{onClick:t,children:e})}),df=({children:e,onClick:t})=>a.jsx(uk,{children:a.jsx("button",{onClick:t,children:e})}),xF=()=>{const e=K();return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"linear",duration:.6},style:{height:"100%"},children:a.jsxs(vF,{children:[a.jsxs("div",{className:"nav",children:[a.jsx("button",{children:a.jsx(uf,{size:20,color:"#fff"})}),a.jsx("button",{onClick:()=>e("/instagram/feed"),children:a.jsx(Hn,{size:20,color:"#fff"})})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"videoCam",children:a.jsx(ck,{size:20,color:"#fff"})}),a.jsx(df,{}),a.jsx("button",{className:"changeCam",children:a.jsx(mg,{size:20,color:"#fff"})})]})]})})},wF=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .shadow svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  .nav {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changeCam {
    position: absolute;
    left: 16px;
    bottom: 26px;
  }

  .startLive {
    margin-top: -4px;
    margin-right: -4px;
  }
`,yg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M2.88,16.88a3,3,0,0,0,0,4.24,3,3,0,0,0,4.24,0,3,3,0,0,0-4.24-4.24Zm2.83,2.83a1,1,0,0,1-1.42-1.42,1,1,0,0,1,1.42,0A1,1,0,0,1,5.71,19.71ZM5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0,7,7,0,0,0-7-7ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0,11.08,11.08,0,0,0-3.22-7.78A11.08,11.08,0,0,0,5,8Zm10.61.39A15.11,15.11,0,0,0,5,4,1,1,0,0,0,5,6,13,13,0,0,1,18,19a1,1,0,0,0,2,0A15.11,15.11,0,0,0,15.61,8.39Z"}))};yg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};yg.defaultProps={color:"currentColor",size:"24"};const bF=yg,SF=()=>{const e=K();return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"linear",duration:.6},style:{height:"100%"},children:a.jsxs(wF,{children:[a.jsxs("div",{className:"nav",children:[a.jsx("button",{className:"shadow",children:a.jsx(uf,{size:20,color:"#fff"})}),a.jsx("button",{className:"shadow",onClick:()=>e("/instagram/feed"),children:a.jsx(Hn,{size:20,color:"#fff"})})]}),a.jsxs("div",{className:"actions",children:[a.jsx(df,{onClick:()=>e("/instagram/liveOwner"),children:a.jsx(bF,{className:"startLive",size:28,color:"#29292e"})}),a.jsx("button",{className:"changeCam",children:a.jsx(mg,{size:20,color:"#fff"})})]})]})})},dk=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .shadow svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  &.textCam {
    background-color: ${({background:e})=>e};
    transition: 0.2s ease-in;

    & > input {
      width: 100%;
      padding: 0 16px;
      font-size: 20px;
      color: #f2f2fa;
      text-align: center;
      &::placeholder {
        text-align: center;
        font-weight: 600;
        color: rgba(225, 225, 230, 0.8);
      }
    }
  }

  .nav {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & > div {
      margin-right: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    &.text > div {
      margin: 0;
    }

    &.text .bgBtn {
      width: 12px;
      height: 18px;
      background: #982649;
      border-radius: 4px;
    }
  }

  .changeCam {
    position: absolute;
    left: 16px;
    bottom: 26px;
  }
`,vg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"}))};vg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};vg.defaultProps={color:"currentColor",size:"24"};const CF=vg,kF=()=>{const e=K();return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"linear",duration:.6},style:{height:"100%"},children:a.jsxs(dk,{children:[a.jsxs("div",{className:"nav",children:[a.jsx("button",{className:"shadow",children:a.jsx(uf,{size:20,color:"#fff"})}),a.jsx("button",{className:"shadow",onClick:()=>e("/instagram/feed"),children:a.jsx(Hn,{size:20,color:"#fff"})})]}),a.jsxs("div",{className:"actions",children:[a.jsxs("div",{children:[a.jsx(T0,{onClick:()=>e("/instagram/storyCam/text"),children:a.jsx(CF,{size:16,color:"#29292e"})}),a.jsx(df,{})]}),a.jsx("button",{className:"changeCam",children:a.jsx(mg,{size:20,color:"#fff"})})]})]})})},xg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"}))};xg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};xg.defaultProps={color:"currentColor",size:"24"};const jF=xg,wg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"}))};wg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};wg.defaultProps={color:"currentColor",size:"24"};const Sl=wg,Ph=["#4EA699","#7776BC","#042A2B","#982649","#FF674D"],PF=()=>{const e=K(),t=ik(sk),[n,r]=w.useState(Ph[Math.floor(Math.random()*Ph.length)]),[i,s]=w.useState(""),o=()=>{let c=Ph.filter(d=>d!==n),u=c[Math.floor(Math.random()*c.length)];r(u)},l=()=>{i.length>0&&(t({text:i,id:1,background:{type:"color",value:n}}),e("/instagram/storyEdit"))};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"linear",duration:.6},style:{height:"100%"},children:a.jsxs(dk,{className:"textCam",background:n,children:[a.jsxs("div",{className:"nav",children:[a.jsx("button",{children:a.jsx(uf,{size:20,color:"#fff"})}),a.jsx("button",{onClick:()=>e("/instagram/feed"),children:a.jsx(Hn,{size:20,color:"#fff"})})]}),a.jsx("input",{onChange:c=>s(c.target.value),type:"text",placeholder:"Toque para digitar"}),a.jsxs("div",{className:"actions text",children:[a.jsx(T0,{onClick:()=>e("/instagram/storyCam"),children:a.jsx(jF,{size:18,color:"#29292e"})}),a.jsx(df,{onClick:()=>l(),children:a.jsx(Sl,{size:32,color:"#29292e"})}),a.jsx(T0,{onClick:()=>o(),children:a.jsx("span",{className:"bgBtn"})})]})]})})},EF=()=>a.jsxs(bo,{children:[a.jsx(G,{path:"/",element:a.jsx(kF,{})}),a.jsx(G,{path:"/text",element:a.jsx(PF,{})})]}),RF=W.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,MF=W.div`
  width: 100%;
  height: 100%;
  background: ${({background:e})=>e};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: 0.2s linear;
  z-index: 10;

  .textCard {
    max-width: 80%;
    display: flex;
    text-align: center;
    padding: 4px 8px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    border-radius: 6px;
    transition: ease;
    overflow-x: hidden;
    position: absolute;

    z-index: 10;
  }
`,TF=W.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & button {
    z-index: 10;
  }

  & > input {
    width: 80%;
    padding: 4px 8px;
    font-size: 14px;
    text-align: center;
    border-radius: 8px;
    z-index: 10;
    transition: 0.2s ease;
    &::placeholder {
      text-align: center;
      font-weight: 600;
      color: rgba(225, 225, 230, 0.8);
    }
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .back {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;

      .backIcon {
        margin-right: 2px;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    & > button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #f2f2fa;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .addText {
      padding-bottom: 2px;
      color: #101011;
      position: relative;
      h3 {
        font-size: 10px;
        z-index: 13;
      }

      span {
        position: absolute;
        right: -2px;
        bottom: 0px;
        background-color: #f2f2fa;
        border-radius: 50%;
        display: flex;
        z-index: 12;
      }
    }

    .changeBg span {
      width: 10px;
      height: 16px;
      background: #982649;
      border-radius: 2px;
      transition: 0.2s ease;
      &.input {
        transform: rotate(90deg);
        background: #101011;
      }
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
    }

    .edit {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .delete {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .next {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        transition: 0.2s ease-in;
      }
      &.submit > svg {
        margin-left: 3px;
        transform: rotate(90deg);
      }
    }

    .scaleBar {
      width: 4px;
      height: 120px;
      border-radius: 4px;
      background-color: rgba(124, 124, 138, 1);
      z-index: 10;
      position: absolute;
      bottom: 8px;
      left: 12px;

      .control {
        width: 12px;
        height: 12px;
        background: #f2f2fa;
        border-radius: 50%;
        margin-left: -4px;
        transition: ease;
      }
    }
  }

  .editLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;function _F(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}const OF=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function Mr(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function Iu(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function zF(e){const t=Iu(e,"border-left-width"),n=Iu(e,"border-right-width");return e.clientWidth+t+n}function NF(e){const t=Iu(e,"border-top-width"),n=Iu(e,"border-bottom-width");return e.clientHeight+t+n}function fk(e,t={}){const n=t.width||zF(e),r=t.height||NF(e);return{width:n,height:r}}function AF(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const Qt=16384;function LF(e){(e.width>Qt||e.height>Qt)&&(e.width>Qt&&e.height>Qt?e.width>e.height?(e.height*=Qt/e.width,e.width=Qt):(e.width*=Qt/e.height,e.height=Qt):e.width>Qt?(e.height*=Qt/e.width,e.width=Qt):(e.width*=Qt/e.height,e.height=Qt))}function $u(e){return new Promise((t,n)=>{const r=new Image;r.decode=()=>t(r),r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function IF(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function $F(e,t,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),s=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),i.appendChild(s),s.appendChild(e),IF(i)}const Kt=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||Kt(n,t)};function DF(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function BF(e){return Mr(e).map(t=>{const n=e.getPropertyValue(t),r=e.getPropertyPriority(t);return`${t}: ${n}${r?" !important":""};`}).join(" ")}function FF(e,t,n){const r=`.${e}:${t}`,i=n.cssText?DF(n):BF(n);return document.createTextNode(`${r}{${i}}`)}function mw(e,t,n){const r=window.getComputedStyle(e,n),i=r.getPropertyValue("content");if(i===""||i==="none")return;const s=OF();try{t.className=`${t.className} ${s}`}catch{return}const o=document.createElement("style");o.appendChild(FF(s,n,r)),t.appendChild(o)}function VF(e,t){mw(e,t,":before"),mw(e,t,":after")}const gw="application/font-woff",yw="image/jpeg",HF={woff:gw,woff2:gw,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:yw,jpeg:yw,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function WF(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function bg(e){const t=WF(e).toLowerCase();return HF[t]||""}function UF(e){return e.split(/,/)[1]}function _0(e){return e.search(/^(data:)/)!==-1}function hk(e,t){return`data:${t};base64,${e}`}async function pk(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((s,o)=>{const l=new FileReader;l.onerror=o,l.onloadend=()=>{try{s(n({res:r,result:l.result}))}catch(c){o(c)}},l.readAsDataURL(i)})}const Eh={};function qF(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function Sg(e,t,n){const r=qF(e,t,n.includeQueryParams);if(Eh[r]!=null)return Eh[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{const s=await pk(e,n.fetchRequestInit,({res:o,result:l})=>(t||(t=o.headers.get("Content-Type")||""),UF(l)));i=hk(s,t)}catch(s){i=n.imagePlaceholder||"";let o=`Failed to fetch resource: ${e}`;s&&(o=typeof s=="string"?s:s.message),o&&console.warn(o)}return Eh[r]=i,i}async function GF(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):$u(t)}async function KF(e,t){if(e.currentSrc){const s=document.createElement("canvas"),o=s.getContext("2d");s.width=e.clientWidth,s.height=e.clientHeight,o==null||o.drawImage(e,0,0,s.width,s.height);const l=s.toDataURL();return $u(l)}const n=e.poster,r=bg(n),i=await Sg(n,r,t);return $u(i)}async function ZF(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await ff(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function YF(e,t){return Kt(e,HTMLCanvasElement)?GF(e):Kt(e,HTMLVideoElement)?KF(e,t):Kt(e,HTMLIFrameElement)?ZF(e):e.cloneNode(!1)}const XF=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function QF(e,t,n){var r,i;let s=[];return XF(e)&&e.assignedNodes?s=Mr(e.assignedNodes()):Kt(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?s=Mr(e.contentDocument.body.childNodes):s=Mr(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),s.length===0||Kt(e,HTMLVideoElement)||await s.reduce((o,l)=>o.then(()=>ff(l,n)).then(c=>{c&&t.appendChild(c)}),Promise.resolve()),t}function JF(e,t){const n=t.style;if(!n)return;const r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):Mr(r).forEach(i=>{let s=r.getPropertyValue(i);i==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),Kt(e,HTMLIFrameElement)&&i==="display"&&s==="inline"&&(s="block"),i==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),n.setProperty(i,s,r.getPropertyPriority(i))})}function eV(e,t){Kt(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Kt(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function tV(e,t){if(Kt(e,HTMLSelectElement)){const n=t,r=Array.from(n.children).find(i=>e.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function nV(e,t){return Kt(t,Element)&&(JF(e,t),VF(e,t),eV(e,t),tV(e,t)),t}async function rV(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let s=0;s<n.length;s++){const l=n[s].getAttribute("xlink:href");if(l){const c=e.querySelector(l),u=document.querySelector(l);!c&&u&&!r[l]&&(r[l]=await ff(u,t,!0))}}const i=Object.values(r);if(i.length){const s="http://www.w3.org/1999/xhtml",o=document.createElementNS(s,"svg");o.setAttribute("xmlns",s),o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.overflow="hidden",o.style.display="none";const l=document.createElementNS(s,"defs");o.appendChild(l);for(let c=0;c<i.length;c++)l.appendChild(i[c]);e.appendChild(o)}return e}async function ff(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>YF(r,t)).then(r=>QF(e,r,t)).then(r=>nV(e,r)).then(r=>rV(r,t))}const mk=/url\((['"]?)([^'"]+?)\1\)/g,iV=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,sV=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function oV(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function aV(e){const t=[];return e.replace(mk,(n,r,i)=>(t.push(i),n)),t.filter(n=>!_0(n))}async function lV(e,t,n,r,i){try{const s=n?_F(t,n):t,o=bg(t);let l;if(i){const c=await i(s);l=hk(c,o)}else l=await Sg(s,o,r);return e.replace(oV(t),`$1${l}$3`)}catch{}return e}function cV(e,{preferredFontFormat:t}){return t?e.replace(sV,n=>{for(;;){const[r,,i]=iV.exec(n)||[];if(!i)return"";if(i===t)return`src: ${r};`}}):e}function gk(e){return e.search(mk)!==-1}async function yk(e,t,n){if(!gk(e))return e;const r=cV(e,n);return aV(r).reduce((s,o)=>s.then(l=>lV(l,o,t,n)),Promise.resolve(r))}async function oc(e,t,n){var r;const i=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(i){const s=await yk(i,null,n);return t.style.setProperty(e,s,t.style.getPropertyPriority(e)),!0}return!1}async function uV(e,t){await oc("background",e,t)||await oc("background-image",e,t),await oc("mask",e,t)||await oc("mask-image",e,t)}async function dV(e,t){const n=Kt(e,HTMLImageElement);if(!(n&&!_0(e.src))&&!(Kt(e,SVGImageElement)&&!_0(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,i=await Sg(r,bg(r),t);await new Promise((s,o)=>{e.onload=s,e.onerror=o;const l=e;l.decode&&(l.decode=s),l.loading==="lazy"&&(l.loading="eager"),n?(e.srcset="",e.src=i):e.href.baseVal=i})}async function fV(e,t){const r=Mr(e.childNodes).map(i=>vk(i,t));await Promise.all(r).then(()=>e)}async function vk(e,t){Kt(e,Element)&&(await uV(e,t),await dV(e,t),await fV(e,t))}function hV(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),e}const vw={};async function xw(e){let t=vw[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},vw[e]=t,t}async function ww(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,s=(n.match(/url\([^)]+\)/g)||[]).map(async o=>{let l=o.replace(r,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),pk(l,t.fetchRequestInit,({result:c})=>(n=n.replace(o,`url(${c})`),[o,c]))});return Promise.all(s).then(()=>n)}function bw(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=i.exec(r);if(c===null)break;t.push(c[0])}r=r.replace(i,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(o,"gi");for(;;){let c=s.exec(r);if(c===null){if(c=l.exec(r),c===null)break;s.lastIndex=l.lastIndex}else l.lastIndex=s.lastIndex;t.push(c[0])}return t}async function pV(e,t){const n=[],r=[];return e.forEach(i=>{if("cssRules"in i)try{Mr(i.cssRules||[]).forEach((s,o)=>{if(s.type===CSSRule.IMPORT_RULE){let l=o+1;const c=s.href,u=xw(c).then(d=>ww(d,t)).then(d=>bw(d).forEach(f=>{try{i.insertRule(f,f.startsWith("@import")?l+=1:i.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:f,error:h})}})).catch(d=>{console.error("Error loading remote css",d.toString())});r.push(u)}})}catch(s){const o=e.find(l=>l.href==null)||document.styleSheets[0];i.href!=null&&r.push(xw(i.href).then(l=>ww(l,t)).then(l=>bw(l).forEach(c=>{o.insertRule(c,i.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",s)}}),Promise.all(r).then(()=>(e.forEach(i=>{if("cssRules"in i)try{Mr(i.cssRules||[]).forEach(s=>{n.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${i.href}`,s)}}),n))}function mV(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>gk(t.style.getPropertyValue("src")))}async function gV(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=Mr(e.ownerDocument.styleSheets),r=await pV(n,t);return mV(r)}async function yV(e,t){const n=await gV(e,t);return(await Promise.all(n.map(i=>{const s=i.parentStyleSheet?i.parentStyleSheet.href:null;return yk(i.cssText,s,t)}))).join(`
`)}async function vV(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await yV(e,t);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function xV(e,t={}){const{width:n,height:r}=fk(e,t),i=await ff(e,t,!0);return await vV(i,t),await vk(i,t),hV(i,t),await $F(i,n,r)}async function wV(e,t={}){const{width:n,height:r}=fk(e,t),i=await xV(e,t),s=await $u(i),o=document.createElement("canvas"),l=o.getContext("2d"),c=t.pixelRatio||AF(),u=t.canvasWidth||n,d=t.canvasHeight||r;return o.width=u*c,o.height=d*c,t.skipAutoScale||LF(o),o.style.width=`${u}`,o.style.height=`${d}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,o.width,o.height)),l.drawImage(s,0,0,o.width,o.height),o}async function bV(e,t={}){return(await wV(e,t)).toDataURL()}let ac;const SV=new Uint8Array(16);function CV(){if(!ac&&(ac=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ac))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ac(SV)}const mt=[];for(let e=0;e<256;++e)mt.push((e+256).toString(16).slice(1));function kV(e,t=0){return mt[e[t+0]]+mt[e[t+1]]+mt[e[t+2]]+mt[e[t+3]]+"-"+mt[e[t+4]]+mt[e[t+5]]+"-"+mt[e[t+6]]+mt[e[t+7]]+"-"+mt[e[t+8]]+mt[e[t+9]]+"-"+mt[e[t+10]]+mt[e[t+11]]+mt[e[t+12]]+mt[e[t+13]]+mt[e[t+14]]+mt[e[t+15]]}const jV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Sw={randomUUID:jV};function Cw(e,t,n){if(Sw.randomUUID&&!t&&!e)return Sw.randomUUID();e=e||{};const r=e.random||(e.rng||CV)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return kV(r)}const Cg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"}))};Cg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Cg.defaultProps={color:"currentColor",size:"24"};const xk=Cg,kg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M9.71,6.71,11,5.41V17a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,6.71ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"}))};kg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};kg.defaultProps={color:"currentColor",size:"24"};const PV=kg,jg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"}))};jg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};jg.defaultProps={color:"currentColor",size:"24"};const EV=jg,Pg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"}))};Pg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Pg.defaultProps={color:"currentColor",size:"24"};const Dc=Pg,RV=["#4EA699","#7776BC","#042A2B","#982649","#FF674D"],MV=({background:e,setBackground:t,isDragging:n,textsList:r,setTextsList:i,isEditingText:s,setIsEditingText:o})=>{const l=K(),c=po(55),u=ju(c,[0,110],[1.25,.75]),d=KS(),[f,h]=w.useState({text:"",id:Cw(),size:u,controlY:c,bg:"light",color:"dark"}),g=()=>{let E=RV.filter(S=>S!==e),j=E[Math.floor(Math.random()*E.length)];t(j)},m=()=>{f.bg==="light"?h({...f,bg:"dark",color:"light"}):f.bg==="dark"?h({...f,bg:"none"}):h({...f,bg:"light",color:"dark"})},y=()=>{console.log("submit"),bV(document.getElementById("storyContent")).then(E=>{console.log(E)})},P=()=>{h({text:"",id:Cw(),size:u,bg:"light",color:"dark"}),o(!0)},x=()=>{f.color==="light"?h({...f,color:"dark"}):h({...f,color:"light"})},p=()=>{o(!1),r.find(E=>E.id===f.id)?i(r.map(E=>E.id===f.id?{...f,size:u.get(),controlY:c.get()}:E)):i([...r,{...f,size:u.get(),controlY:c.get()}]),c.set(55)},v=()=>{o(!1)},C=E=>{i(r.filter(j=>j.id!==E))},b=E=>{const j=r.find(S=>S.id===E);c.set(j.controlY),h({...j,size:u,controlY:c}),o(!0)};return w.useEffect(()=>{n.click&&b(n.id)},[n.click]),a.jsxs(TF,{children:[s&&a.jsx("div",{className:"editLayer"}),a.jsxs("div",{className:"top",children:[a.jsx("button",{className:"back",onClick:()=>s?v():l(-1),children:s?a.jsx(xk,{className:"backIcon",size:16,color:"#f2f2fa"}):a.jsx(Hn,{size:16,color:"#f2f2fa"})}),a.jsxs("div",{className:"actions",children:[a.jsxs("button",{className:"addText",onClick:()=>s?x():P(),children:[a.jsx("h3",{children:"Aa"}),!s&&a.jsx("span",{children:a.jsx(EV,{size:12,color:"#101011"})})]}),a.jsx("button",{className:"changeBg",onClick:()=>s?m():g(),children:a.jsx("span",{className:`${s&&"input"}`})})]})]}),a.jsx(cr,{children:s&&a.jsx(H.input,{initial:{opacity:.5,scaleX:0},animate:{opacity:1,scaleX:1},exit:{opacity:0,scaleX:0},transition:{ease:"easeInOut"},autoFocus:!0,style:{background:f.bg==="light"?"#f2f2fa":f.bg==="dark"?"#101011":null,color:f.color==="light"?"#f2f2fa":"#101011",scale:u},value:f.text,onChange:E=>h({...f,text:E.target.value}),type:"text"})}),a.jsxs("div",{className:"bottom",children:[a.jsxs("div",{children:[a.jsx(cr,{children:n.value&&a.jsx(a.Fragment,{children:a.jsx(H.button,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.4},onMouseUp:()=>C(n.id),className:"delete",children:a.jsx(Dc,{size:16,color:"#f2f2fa"})})})}),s&&a.jsx("div",{className:"scaleBar",children:a.jsx(H.div,{drag:"y",dragControls:d,dragMomentum:!1,dragElastic:0,dragConstraints:{top:0,bottom:110},style:{y:c},className:"control"})})]}),a.jsx("button",{className:`next ${!s&&"submit"}`,onClick:()=>s?p():y(),children:s?a.jsx(Sl,{size:16,color:"#f2f2fa"}):a.jsx(PV,{size:16,color:"#f2f2fa"})})]})]})},TV=({background:e,textsList:t,dragRef:n,setIsDragging:r})=>a.jsx(MF,{background:e,id:"storyContent",children:t.map(i=>a.jsx(_V,{id:i.id,content:i.text,dragRef:n,size:i.size,bg:i.bg,color:i.color,setIsDragging:r},i.id))}),_V=({content:e,id:t,dragRef:n,size:r,bg:i,color:s,setIsDragging:o})=>a.jsx(H.div,{drag:!0,dragConstraints:n,dragElastic:0,dragMomentum:!1,onDragStart:()=>o({value:!0,id:t}),onDragEnd:()=>o({value:!1,id:t}),onDoubleClick:()=>o({click:!0,id:t}),className:"textCard",style:{background:i==="light"?"#f2f2fa":i==="dark"?"#101011":"",color:s==="light"?"#f2f2fa":"#101011",scale:r},children:a.jsx("p",{children:e})}),OV=()=>{const{SistemDispatch:e}=w.useContext(J),t=lg(sk),n=pn(),r=w.useRef(null),[i,s]=w.useState([{text:t.text,size:1,controlY:55,id:t.id,bg:"dark",color:"light"}]),[o,l]=w.useState(!1),[c,u]=w.useState(t.background.value),[d,f]=w.useState({value:!1,id:0,click:!1});return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{height:"100%",width:"100%"},children:a.jsxs(RF,{ref:r,children:[a.jsx(TV,{background:c,textsList:i,dragRef:r,setIsDragging:f}),a.jsx(MV,{isDragging:d,background:c,setBackground:u,textsList:i,setTextsList:s,isEditingText:o,setIsEditingText:l})]})})},zV=W.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};
  overflow-y: hidden;

  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .wrap {
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .comments {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .comments--item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .item--content {
      padding-right: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 10px;
        font-weight: 500;
      }
      p {
        font-size: 8px;
      }
    }

    svg {
      color: ${({theme:e})=>e.text10};
    }
  }

  .commentInput {
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      padding: 4px 8px;
      width: 100%;
      flex-grow: 1;
      border: 2px solid ${({theme:e})=>e.border10};
      color: ${({theme:e})=>e.text10};
      border-radius: 20px;
      font-size: 8px;
    }

    button {
      flex-shrink: 0;
    }

    svg {
      color: ${({theme:e})=>e.text10};
    }
  }
`,Eg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"}))};Eg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Eg.defaultProps={color:"currentColor",size:"24"};const Rg=Eg,Mg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"}))};Mg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Mg.defaultProps={color:"currentColor",size:"24"};const wk=Mg,Wo=({content:e})=>a.jsxs("div",{className:"comments--item",children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"item--content",children:[a.jsx("h3",{children:"Soweto"}),a.jsx("p",{children:e})]}),a.jsx("button",{className:"item--options",children:a.jsx(wk,{size:16})})]}),Tg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"}))};Tg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Tg.defaultProps={color:"currentColor",size:"24"};const hf=Tg,NV=()=>a.jsxs("div",{className:"commentInput",children:[a.jsx("input",{type:"text",placeholder:"deixe seu comentário..."}),a.jsx("button",{children:a.jsx(hf,{size:16})})]}),AV=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsxs(zV,{children:[a.jsx("button",{className:"header",onClick:()=>e(-1),children:a.jsx(Rg,{color:n.text10,size:20})}),a.jsxs("div",{className:"wrap",children:[a.jsx($c,{noRedirect:!0}),a.jsxs("div",{className:"comments",children:[a.jsx(Wo,{content:"Lorem, ipsum dolor sit amet consec adipisicing elit"}),a.jsx(Wo,{content:"Lorem, ipsum dolor sit amet consec adipisicing elit"}),a.jsx(Wo,{content:"Lorem, ipsum dolor sit amet consec adipisicing elit"}),a.jsx(Wo,{content:"Lorem, ipsum dolor sit amet consec adipisicing elit"}),a.jsx(Wo,{content:"Lorem, ipsum dolor sit amet consec adipisicing elit"})]})]}),a.jsx(NV,{})]})},LV=W.div`
  width: 100%;
  max-height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};
  overflow-y: hidden;

  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    svg {
      color: ${({theme:e})=>e.text10};
    }
    h3 {
      font-size: 14px;
    }
  }

  .wrap {
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .searchInput {
    margin: 0;
    width: 100%;
  }

  .searchUserList {
    flex-shrink: 0;
    margin: 8px 0;
    max-width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      p {
        font-size: 10px;
        max-width: 28px;
        max-height: 24px;
        overflow: hidden;
      }
    }
  }

  .MessageList {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: 12px;
    }
  }

  .MessageList--list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      .content {
        width: 100%;
        font-size: 8px;

        strong {
          font-size: 10px;
          font-weight: 500;
        }

        p {
          max-width: 100%;
          max-height: 20px;
          overflow: hidden;
        }
      }

      span {
        color: ${({theme:e})=>e.text40};
        font-size: 10px;
        flex-shrink: 0;
        font-weight: 500;
      }
    }
  }
`,_g=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"}))};_g.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};_g.defaultProps={color:"currentColor",size:"24"};const Og=_g,IV=()=>a.jsxs("div",{className:"MessageList",children:[a.jsx("h3",{children:"Mensagens"}),a.jsxs(H.ul,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},className:"MessageList--list",children:[a.jsx(qn,{id:6,user:"mayk",message:"Lorem ipsum dolor sit amet",status:"Online"}),a.jsx(qn,{id:50,user:"orion",message:"Lorem ipsum dolor sit amet",status:"15m"}),a.jsx(qn,{id:43,user:"sow",message:"Lorem ipsum dolor sit amet",status:"12m"}),a.jsx(qn,{id:16,user:"vini",message:"Lorem ipsum dolor sit amet",status:"1h"}),a.jsx(qn,{id:74,user:"konn",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",status:"Online"}),a.jsx(qn,{id:102,user:"mel",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic nesciunt, beatae dolore consectetur unde accusantium, odio et quaerat molestiae laudantium in iusto officia amet quam commodi saepe quisquam officiis.",status:"Online"}),a.jsx(qn,{id:84,user:"evol",message:"Lorem ipsum dolor sit amet",status:"6h"}),a.jsx(qn,{id:65,user:"eyu",message:"Lorem ipsum dolor sit amet",status:"1d"}),a.jsx(qn,{id:42,user:"clebin",message:"Lorem ipsum dolor sit amet",status:"6m"}),a.jsx(qn,{id:63,user:"baz",message:"Lorem ipsum dolor sit amet",status:"Online"})]})]}),qn=({user:e,message:t,status:n,id:r})=>{const i=K();return a.jsxs("li",{children:[a.jsx(ce,{id:r,size:28}),a.jsxs("div",{className:"content",onClick:()=>i("/instagram/dm"),children:[a.jsx("p",{children:a.jsx("strong",{children:e})}),a.jsx("p",{children:t})]}),a.jsx("span",{children:`· ${n}`})]})},$V=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsxs(LV,{children:[a.jsxs("div",{className:"header",children:[a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Og,{size:24})}),a.jsx("h3",{children:"Conversas"})]}),a.jsxs("div",{className:"wrap",children:[a.jsx(ak,{}),a.jsxs("ul",{className:"searchUserList",children:[a.jsx(mr,{id:4,user:"monk"}),a.jsx(mr,{id:6,user:"monk"}),a.jsx(mr,{id:8,user:"monk"}),a.jsx(mr,{id:2,user:"monk"}),a.jsx(mr,{id:82,user:"monk"}),a.jsx(mr,{id:71,user:"monk"}),a.jsx(mr,{id:60,user:"monk"}),a.jsx(mr,{id:9,user:"monk"}),a.jsx(mr,{id:14,user:"monk"})]}),a.jsx(IV,{})]})]})},mr=({user:e,id:t})=>a.jsxs("li",{children:[a.jsx(ce,{id:t,size:28}),a.jsx("p",{children:e})]}),DV=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn(),[r,i]=w.useState(!1);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsx(H.div,{initial:{opacity:.6},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(K5,{children:[a.jsx("div",{className:"container1",children:a.jsxs("div",{className:"left back",children:[a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Og,{size:20,color:n.text10})}),a.jsx("p",{children:"monk"})]})}),a.jsxs("div",{className:"container2",children:[a.jsx(ce,{id:64,size:40}),a.jsxs("div",{className:"infos follow",children:[a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"54"}),a.jsx("p",{children:"Posts"})]}),a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"834"}),a.jsx("p",{children:"Sequidores"})]}),a.jsxs("div",{className:"info",children:[a.jsx("strong",{children:"162"}),a.jsx("p",{children:"Sequindo"})]}),a.jsx("button",{onClick:()=>i(!r),className:"follow",children:r?"Seguindo":"Seguir"})]})]}),a.jsxs("div",{className:"container3 margin",children:[a.jsx("p",{className:"username",children:"vitor ribeiro"}),a.jsxs("div",{className:"bio",children:[a.jsx("p",{children:"Digital goodies designer @pixsellz"}),a.jsx("p",{children:"Everything is designed."})]})]}),a.jsxs("div",{className:"highsContainer",children:[a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder4.png"})}),a.jsx("p",{children:"Friends"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder5.png"})}),a.jsx("p",{children:"Sport"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{children:a.jsx("img",{src:"src/assets/Images/placeholder6.png"})}),a.jsx("p",{children:"Design"})]})]}),a.jsx(Y5,{})]})})},BV=W.div`
  width: 100%;
  max-height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};

  .header {
    flex-shrink: 0;
    width: 100%;
    padding: 0 8px 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2px;

    .left {
      display: flex;
      align-items: center;

      h4 {
        margin-left: 8px;
        font-size: 12px;
      }
    }
  }

  .messagesList {
    padding: 0 8px;
    height: 100%;
    overflow-y: auto;
    transition: 0.2s ease;
    display: flex;
    flex-direction: column;

    .wrap {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 10px;
    }

    .chatBox {
      display: flex;
      max-width: 75%;
      padding: 6px 12px;
      align-self: flex-start;
      background: #272837;
      border-radius: 8px;
      color: #f2f2fa;
    }

    .chatBox.isMe {
      align-self: flex-end;
      background: #3e3ebd;
    }
  }

  .commentInput {
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      padding: 4px 8px;
      width: 100%;
      flex-grow: 1;
      border: 2px solid ${({theme:e})=>e.border10};
      color: ${({theme:e})=>e.text10};
      border-radius: 20px;
      font-size: 8px;
    }

    button {
      flex-shrink: 0;
    }
  }
`,zg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"}))};zg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};zg.defaultProps={color:"currentColor",size:"24"};const FV=zg,VV=[{user:"evol",message:"lorem ipsum"},{user:"vini",message:"Nullam tristique est tempor porttitor sodales"},{user:"evol",message:"eget molestie neque diam a enim"},{user:"vini",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"},{user:"evol",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"},{user:"vini",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"},{user:"evol",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"},{user:"vini",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"},{user:"evol",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor"}],HV=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn(),r=w.useRef(null),i=w.useRef(null),[s,o]=w.useState(VV),[l,c]=w.useState(""),u=()=>{o([...s,{user:"vini",message:l}]),r.current.value=""},d=()=>{i.current.scrollIntoView({behavior:"smooth",block:"end"})};return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),w.useEffect(()=>{d()},[s]),a.jsxs(BV,{children:[a.jsxs("div",{className:"header",children:[a.jsxs("div",{className:"left",children:[a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Og,{size:24,color:n.text10})}),a.jsx(ce,{size:20}),a.jsx("h4",{children:"Vinicius"})]}),a.jsx("button",{children:a.jsx(FV,{size:18,color:n.text10})})]}),a.jsxs("div",{className:"messagesList",children:[a.jsx("div",{className:"wrap",children:s.map((f,h)=>a.jsx(WV,{isMe:f.user==="vini",message:f.message},h))}),a.jsx("div",{ref:i})]}),a.jsxs("div",{className:"commentInput",children:[a.jsx("button",{children:a.jsx(lk,{size:16,color:n.text10})}),a.jsx("input",{onChange:f=>c(f.target.value),type:"text",placeholder:"Enviar mensagem...",ref:r}),a.jsx("button",{onClick:()=>u(),children:a.jsx(hf,{size:16,color:n.text10})})]})]})},WV=({isMe:e,message:t})=>a.jsx(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},className:`chatBox ${e&&"isMe"}`,children:a.jsx("p",{children:t})}),bk=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 0 16px #101011;
    z-index: 1;
  }

  .videoOffOverlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #505059;

    svg {
      margin-bottom: 40px;
    }
  }
`,Sk=W.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .shadow {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f2f2fa;

    .left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 4px;

      .live {
        display: flex;
        padding: 4px 6px;
        background: rgba(226, 0, 55, 0.8);
        border-radius: 4px;
        font-size: 8px;
        color: #f2f2fa;
      }

      .views {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 2px 4px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        font-size: 10px;
        color: #f2f2fa;
      }
    }
  }

  .rightBtns {
    position: absolute;
    top: 36px;
    right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .bottom {
    max-height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
  }

  .comments {
    max-height: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #f2f2fa;
    overflow-y: auto;

    h4 {
      font-weight: 500;
      text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
    }

    p {
      text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 10px;
    }
  }

  .commentInput {
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      padding: 4px 8px;
      width: 100%;
      flex-grow: 1;
      border: 2px solid rgba(225, 225, 230, 0.6);
      color: #f2f2fa;
      border-radius: 20px;
      font-size: 10px;

      ::placeholder {
        color: rgba(225, 225, 230, 0.6);
      }
    }

    button {
      flex-shrink: 0;
    }
  }
`,Ng=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"}))};Ng.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Ng.defaultProps={color:"currentColor",size:"24"};const Cl=Ng,Ag=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"}))};Ag.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Ag.defaultProps={color:"currentColor",size:"24"};const UV=Ag,Lg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M10.5,3.73a2,2,0,0,1,2.95-.14A2,2,0,0,1,14,5V8.41a1,1,0,0,0,2,0V5A4,4,0,0,0,9,2.47,1,1,0,1,0,10.5,3.73Zm8.22,9.54.2,0a1,1,0,0,0,1-.81A7.91,7.91,0,0,0,20,11a1,1,0,0,0-2,0,5.54,5.54,0,0,1-.11,1.1A1,1,0,0,0,18.72,13.27Zm3,6.06-18-18a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L8,8.48V11a4,4,0,0,0,6,3.46l1.46,1.46A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93a7.87,7.87,0,0,0,3.85-1.59l3.4,3.4a1,1,0,0,0,1.42-1.41ZM12,13a2,2,0,0,1-2-2v-.52l2.45,2.46A1.74,1.74,0,0,1,12,13Z"}))};Lg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Lg.defaultProps={color:"currentColor",size:"24"};const qV=Lg,Ig=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M7.71,6.29h0l-4-4A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,1.9-.69l4.39,4.4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM14,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6.59l7.87,7.88A1,1,0,0,1,14,16Zm7.53-8.85a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H12.66a1,1,0,0,0,0,2H14a1,1,0,0,1,1,1v1.5h0a1.62,1.62,0,0,0,0,.19.65.65,0,0,0,.05.2h0s.05.06.07.1a1,1,0,0,0,.15.21s.1.06.15.1l.17.11a.85.85,0,0,0,.23,0,.7.7,0,0,0,.14,0h0a1.62,1.62,0,0,0,.19,0,.65.65,0,0,0,.2-.05h0L20,9.62v5.72a1,1,0,1,0,2,0V8A1,1,0,0,0,21.53,7.15Z"}))};Ig.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Ig.defaultProps={color:"currentColor",size:"24"};const Ck=Ig,kk=()=>a.jsxs("ul",{className:"comments",children:[a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam dignissimos cumque nulla, id consequuntur quidem. Deserunt laudantium, sunt placeat non animi soluta earum accusantium. Eius ab velit magni eum neque?"})]})]}),a.jsxs("li",{children:[a.jsx(ce,{size:24}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"mayk"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur"})]})]})]}),GV=({liveState:e,setLiveState:t})=>{const n=K();return a.jsxs(Sk,{children:[a.jsxs("div",{className:"header",children:[a.jsxs("div",{className:"left",children:[a.jsx(ce,{size:20}),a.jsx("p",{className:"shadow",children:"evol3"})]}),a.jsxs("div",{className:"right",children:[a.jsx("span",{className:"live",children:"LIVE"}),a.jsxs("span",{className:"views",children:[a.jsx(Cl,{size:12}),"20"]}),a.jsx("button",{onClick:()=>n(-1),children:a.jsx(Hn,{className:"shadow",size:16,color:"#f2f2fa"})})]})]}),a.jsxs("div",{className:"rightBtns",children:[a.jsx("button",{onClick:()=>t({...e,mic:!e.mic}),children:e.mic?a.jsx(UV,{className:"shadow",size:16,color:"#f2f2fa"}):a.jsx(qV,{className:"shadow",size:16,color:"#f2f2fa"})}),a.jsx("button",{onClick:()=>t({...e,video:!e.video}),children:e.video?a.jsx(ck,{className:"shadow",size:16,color:"#f2f2fa"}):a.jsx(Ck,{className:"shadow",size:16,color:"#f2f2fa"})})]}),a.jsxs("div",{className:"bottom",children:[a.jsx(kk,{}),a.jsxs("div",{className:"commentInput",children:[a.jsx("input",{type:"text",placeholder:"deixe seu comentário..."}),a.jsx("button",{className:"shadow",children:a.jsx(hf,{size:16,color:"#f2f2fa"})})]})]})]})},KV=()=>{const e=K();return a.jsxs(Sk,{children:[a.jsxs("div",{className:"header",children:[a.jsxs("div",{className:"left",children:[a.jsx(ce,{size:20}),a.jsx("p",{children:"evol3"})]}),a.jsxs("div",{className:"right",children:[a.jsx("span",{className:"live",children:"LIVE"}),a.jsxs("span",{className:"views",children:[a.jsx(Cl,{size:12}),"20"]}),a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Hn,{size:16,color:"#f2f2fa"})})]})]}),a.jsxs("div",{className:"bottom",children:[a.jsx(kk,{}),a.jsxs("div",{className:"commentInput",children:[a.jsx("input",{type:"text",placeholder:"deixe seu comentário..."}),a.jsx("button",{children:a.jsx(hf,{size:16,color:"#f2f2fa"})})]})]})]})},ZV=()=>{const{SistemDispatch:e}=w.useContext(J),[t,n]=w.useState({mic:!0,video:!0});return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#101011",color:"#f2f2fa"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#101011",color:"#f2f2fa"}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(bk,{children:[a.jsx(GV,{liveState:t,setLiveState:n}),a.jsx(cr,{children:!t.video&&a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeInOut",duration:.4},className:"videoOffOverlay",children:a.jsx(Ck,{size:24,color:"#f2f2fa"})})})]})})},YV=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};
  overflow-y: hidden;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 8px 8px;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    h4 {
      font-weight: 500;
      font-size: 14px;
    }

    .right svg {
      transition: 0.2s ease;
    }
  }

  .imagesWrap {
    width: 100%;
    display: grid;
    overflow-y: auto;
    display: grid;
    align-content: start;
    gap: 1px;
    grid-template-columns: 1fr 1fr 1fr;

    .item {
      aspect-ratio: 1;
      display: flex;
      position: relative;

      img {
        object-fit: cover;
      }
    }

    .radio {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #f2f2fa;
      background: rgba(141, 141, 153, 0.4);
      color: #f2f2fa;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in;

      &.selected {
        background: #4f4fcf;
      }
    }
  }
`,$g=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"}))};$g.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};$g.defaultProps={color:"currentColor",size:"24"};const Du=$g,XV=Array(3).fill(""),QV=({selectedImgs:e,setSelectedImgs:t})=>{const n=r=>{e.includes(r)?t(e.filter(i=>i!==r)):t([...e,r])};return a.jsx("div",{className:"imagesWrap",children:XV.map((r,i)=>a.jsx(JV,{selected:e.includes(i),order:e.includes(i)?e.indexOf(i)+1:null,onClick:()=>n(i)},i))})},JV=({selected:e,order:t,onClick:n})=>a.jsxs("div",{className:"item",onClick:n,children:[a.jsx("img",{src:"src/assets/Images/placeholder5.png",alt:"gallery"}),a.jsx("span",{className:`radio ${e&&"selected"}`,children:e?t:null})]}),eH=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn(),[r,i]=w.useState([]);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(YV,{children:[a.jsxs("div",{className:"head",children:[a.jsxs("div",{className:"left",children:[a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Hn,{size:16,color:n.text10})}),a.jsx("h4",{children:"Galeria"})]}),a.jsx("button",{onClick:()=>e("/instagram/createPost"),disabled:!(r.length>0),className:"right",children:a.jsx(Du,{size:24,color:r.length>0?"#3E3EBD":n.text40})})]}),a.jsx(QV,{selectedImgs:r,setSelectedImgs:i})]})})},tH=W.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px 4px 0;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;

      h4 {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .right {
      color: #04d361;
      &:disabled {
        color: ${({theme:e})=>e.background40};
      }

      svg {
        transition: 0.4s ease;
      }
    }
  }

  .row {
    width: 100%;
    padding: 8px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #7c7c8a;
  }

  .row1 {
    margin-top: -8px;
    justify-content: space-between;

    button {
      max-width: 50%;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      color: ${({theme:e})=>e.text10};

      p {
        max-height: 14px;
        overflow: hidden;
      }

      svg {
        flex-shrink: 0;
      }
    }
  }

  .rowInput {
    justify-content: center;
    input {
      width: 95%;
      font-size: 10px;
      color: ${({theme:e})=>e.text10};

      &::placeholder {
        color: #8d8d99;
      }
    }
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`,Dg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"}))};Dg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Dg.defaultProps={color:"currentColor",size:"24"};const nH=Dg,rH=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn(),[r,i]=w.useState({description:""});return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(tH,{children:[a.jsxs("div",{className:"head",children:[a.jsxs("div",{className:"left",children:[a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Rg,{size:20,color:n.text10})}),a.jsx("h4",{children:"Publicar"})]}),a.jsx("button",{className:"right",disabled:!r.description.length>0,children:a.jsx(Sl,{size:20})})]}),a.jsxs("div",{className:"row row1",children:[a.jsx(ce,{size:24}),a.jsxs("button",{children:[a.jsx("p",{children:"Localização atual"}),a.jsx(nH,{size:18,color:n.text10})]})]}),a.jsx("div",{className:"row rowInput",children:a.jsx("input",{type:"text",placeholder:"Marque um amigo"})}),a.jsx("div",{className:"row rowInput",children:a.jsx("input",{onChange:s=>i({...r,description:s.target.value}),type:"text",placeholder:"Escreva uma legenda..."})}),a.jsx("div",{className:"images",children:a.jsx("img",{src:"src/assets/Images/placeholder5.png",alt:"pic"})})]})})},iH=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({theme:e})=>e.background10};
  color: ${({theme:e})=>e.text10};

  .head {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .container1 {
    width: 100%;
    margin-top: 16px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .pic {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4px;

      button {
        color: #5d5dfc;
        font-size: 10px;
        font-weight: 500;
      }
    }

    .row {
      width: 100%;
      padding: 8px 0;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid ${({theme:e})=>e.border10};

      input {
        width: 94%;
        color: ${({theme:e})=>e.text10};
        font-size: 10px;
      }
    }
  }

  .container2 {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h5 {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .highs {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    overflow-x: auto;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      position: relative;

      .delete {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0px;
        right: -2px;
        border-radius: 50%;
        background: #ff5343;
        color: #f2f2fa;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-bottom: 1px;
        }
      }

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid ${({theme:e})=>e.border10};
        object-fit: cover;
        /* display: flex;
        justify-content: center;
        align-items: center; */

        svg {
          color: ${({theme:e})=>e.text10};
        }
      }

      p {
        max-width: 36px;
        max-height: 12px;
        font-size: 10px;
        overflow: hidden;
        text-align: center;
      }
    }
  }
`,sH=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),n=pn();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:n.background10,color:n.text10}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:n.background10,color:n.text10}})},[]),a.jsx(H.div,{initial:{opacity:.6},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsxs(iH,{children:[a.jsxs("div",{className:"head",children:[a.jsx("button",{onClick:()=>e("/instagram/profile"),children:a.jsx(Hn,{size:18,color:n.text10})}),a.jsx("h4",{children:"Editar perfil"}),a.jsx("button",{children:a.jsx(Sl,{size:20,color:n.text10})})]}),a.jsxs("div",{className:"container1",children:[a.jsxs("div",{className:"pic",children:[a.jsx(ce,{size:64}),a.jsx("button",{children:"Alterar foto"})]}),a.jsx("div",{className:"row",children:a.jsx("input",{type:"text",placeholder:"nome"})}),a.jsx("div",{className:"row",children:a.jsx("input",{type:"text",placeholder:"nome de usuário"})}),a.jsx("div",{className:"row",children:a.jsx("input",{type:"text",placeholder:"Bio"})})]}),a.jsxs("div",{className:"container2",children:[a.jsx("h5",{children:"Destaques"}),a.jsxs("div",{className:"highs",children:[a.jsxs("div",{className:"item",children:[a.jsx("button",{className:"delete",children:a.jsx(Dc,{size:12})}),a.jsx("img",{src:"src/assets/Images/placeholder6.png"}),a.jsx("p",{contentEditable:!0,children:"Friends"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{className:"delete",children:a.jsx(Dc,{size:12})}),a.jsx("img",{src:"src/assets/Images/placeholder5.png"}),a.jsx("p",{contentEditable:!0,children:"Sport"})]}),a.jsxs("div",{className:"item",children:[a.jsx("button",{className:"delete",children:a.jsx(Dc,{size:12})}),a.jsx("img",{src:"src/assets/Images/placeholder4.png"}),a.jsx("p",{contentEditable:!0,children:"Design"})]})]})]})]})})},Bg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"}))};Bg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Bg.defaultProps={color:"currentColor",size:"24"};const oH=Bg,aH=W.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f2f2fa;
  position: relative;

  * {
    z-index: 10;
  }

  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .viewBar {
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: #7c7c8a;

    .fill {
      width: 100%;
      height: 100%;
      background: #f2f2fa;
      border-radius: 4px;
      transform-origin: left center;
    }
  }

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: 4px;
    z-index: 2;
  }
`,lH=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#101011",color:"#f2f2fa"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#101011",color:"#f2f2fa"}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(aH,{children:[a.jsx("img",{src:"src/assets/Images/placeholder3.png",alt:"story",className:"background"}),a.jsxs("div",{className:"top",children:[a.jsx("div",{className:"viewBar",children:a.jsx(H.div,{initial:{scaleX:0},animate:{scaleX:1},transition:{ease:"linear",duration:3,delay:.4},onAnimationComplete:()=>e(-1),className:"fill"})}),a.jsxs("div",{className:"head",children:[a.jsxs("div",{className:"left",children:[a.jsx(ce,{size:20,id:61}),a.jsx("p",{children:"evol"})]}),a.jsx("button",{onClick:()=>e(-1),children:a.jsx(Hn,{size:16,color:"#f2f2fa"})})]})]}),a.jsxs("div",{className:"bottom",children:[a.jsx("button",{children:a.jsx(oH,{size:20,color:"#f2f2fa"})}),a.jsx("button",{children:a.jsx(wk,{size:20,color:"#f2f2fa"})})]})]})})},cH=()=>{const{SistemDispatch:e}=w.useContext(J);return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#101011",color:"#f2f2fa"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#101011",color:"#f2f2fa"}})},[]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:a.jsx(bk,{children:a.jsx(KV,{})})})},kw=()=>a.jsx(GB,{children:a.jsxs(bo,{children:[a.jsx(G,{path:"/",element:a.jsx(RD,{})}),a.jsx(G,{path:"/conect",element:a.jsx(_D,{})}),a.jsx(G,{path:"/post",element:a.jsx(AV,{})}),a.jsx(G,{path:"/chats",element:a.jsx($V,{})}),a.jsx(G,{path:"/user",element:a.jsx(DV,{})}),a.jsx(G,{path:"/dm",element:a.jsx(HV,{})}),a.jsx(G,{path:"/liveOwner",element:a.jsx(ZV,{})}),a.jsx(G,{path:"/liveView",element:a.jsx(cH,{})}),a.jsx(G,{path:"/galleryPost",element:a.jsx(eH,{})}),a.jsx(G,{path:"/createPost",element:a.jsx(rH,{})}),a.jsx(G,{path:"/profileEdit",element:a.jsx(sH,{})}),a.jsx(G,{path:"/storyView",element:a.jsx(lH,{})}),a.jsxs(G,{element:a.jsx(tB,{}),children:[a.jsx(G,{path:"/feed",element:a.jsx(pF,{})}),a.jsx(G,{path:"/profile",element:a.jsx(YB,{})}),a.jsx(G,{path:"/explore",element:a.jsx(lF,{})}),a.jsx(G,{path:"/activity",element:a.jsx(uF,{})})]}),a.jsxs(G,{element:a.jsx(yF,{}),children:[a.jsx(G,{path:"/cam",element:a.jsx(xF,{})}),a.jsx(G,{path:"/liveCam",element:a.jsx(SF,{})}),a.jsx(G,{path:"/storyCam/*",element:a.jsx(EF,{})})]}),a.jsx(G,{path:"/storyEdit",element:a.jsx(OV,{})})]})}),uH=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;

  background: #121b22;

  font-size: 0.7rem;
`,dH=()=>a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsx(uH,{})}),fH=W.ul`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #121b22;
  font-size: 12px;
  margin-top: 8px;

  .chat {
    padding: 8px 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .center {
      width: 120px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;

      h3 {
        font-size: 12px;
        font-weight: 500;
      }

      p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        font-size: 10px;
        color: #869399;
      }
    }

    .infos {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: flex-start;
      p {
        font-size: 8px;
        color: #98a3a9;
      }
    }
  }

  .newBtn {
    aspect-ratio: 1;
    padding: 10px;
    border-radius: 50%;
    background-color: #00a884;
    position: absolute;
    right: 12px;
    bottom: 64px;
    z-index: 10;

    svg {
      transform: rotateY(180deg);
    }
  }
`;function hH(e){return U({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM4.911 7.089h11.456a2.197 2.197 0 0 1 2.165 2.19v5.863a2.213 2.213 0 0 1-2.177 2.178H8.04c-1.174 0-2.04-.99-2.04-2.178v-4.639L4.503 7.905c-.31-.42-.05-.816.408-.816zm3.415 2.19c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.545-.68-.545zm0 2.177c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.544-.68-.544zm-.013 2.19c-.346 0-.68.21-.68.544 0 .334.334.544.68.544h5.728c.347 0 .68-.21.68-.544 0-.334-.333-.545-.68-.545z"}}]})(e)}const jk=w.createContext(void 0),Dr=()=>{const e=w.useContext(jk);if(!e)throw new Error("useWhatsApp must be used within a WhatsAppContyext");return e},pH=({children:e})=>{const[t,n]=w.useState(),r=(s,o)=>{n(l=>{if(l){const c=l.chatboxes.find(u=>u.data.id===s);if(c&&!c.messages.find(d=>d._id===o._id)){const d=l.chatboxes.map(f=>f.data.id===s?{...f,messages:[...f.messages,o]}:f);return{...l,chatboxes:d}}}return l})},i=s=>{if(t){const o=t.chatboxes?[...t.chatboxes,s]:[s],l={...t,chatboxes:o};n(l)}};return a.jsx(jk.Provider,{value:{whats:t,setInitialWhatsApp:n,addMessageToChatbox:r,addTemporaryContact:i},children:e})},jw=e=>e.sort((n,r)=>r.createdAt-n.createdAt)[0],Pk=e=>{const t=new Date(e),n=t.getHours(),r=t.getMinutes(),i=n<12?"AM":"PM",s=n%12===0?12:n%12,o=r.toString().padStart(2,"0");return`${s}:${o} ${i}`},mH=()=>{const{whats:e,setInitialWhatsApp:t,addMessageToChatbox:n}=Dr(),{socket:r}=ng(),i=K();return w.useEffect(()=>{r==null||r.on("whats:onNewMessage",s=>{n(s.from,s)})},[r]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(fH,{children:[e==null?void 0:e.chatboxes.map(s=>{var o,l;return a.jsx(gH,{picture:s.data.picture,id:s.data.id,name:s.data.name,lastMsgStr:(o=jw(s.messages))==null?void 0:o.content,lastMsgHour:Pk((l=jw(s.messages))==null?void 0:l.createdAt)||""},s.data.id)}),a.jsx("button",{className:"newBtn",onClick:()=>{i("/whats/dmChat/5")},children:a.jsx(hH,{color:"#F8FFFF",size:14})})]})})},gH=({id:e,picture:t,name:n,lastMsgStr:r,lastMsgHour:i})=>{const s=K();return a.jsxs("li",{className:"chat",onClick:()=>s("/whats/dmChat/"+e),children:[a.jsx(ce,{id:t,size:32}),a.jsxs("div",{className:"center",children:[a.jsx("h3",{children:n}),r?a.jsx("p",{children:r}):a.jsx("p",{})]}),a.jsx("div",{className:"infos",children:i?a.jsx("p",{children:i}):a.jsx("p",{})})]})},yH=W.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #121b22;
  padding-bottom: 10px;
  .tag {
    margin-top: 16px;
    margin-left: 12px;
    font-weight: 600;
    font-size: 10px;
    color: #869399;
  }
`,vH=W.div`
  padding-left: 10px;

  .user {
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    /* .avatar {
            width: 35px;
            height: 35px;
            border-radius: 100%;
        } */

    .userRight {
      margin-left: 7px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;

      .chatInfos {
        h3 {
          font-size: 11.5px;
          font-weight: 500;
        }

        h4 {
          display: inline-block;
          padding-top: 2.5px;
          font-size: 10.5px;
          font-weight: 400;
          color: #869399;
        }

        .message {
          display: inline;
          margin-bottom: 0px;
          width: 11px;
          height: 8px;
          color: #ed5774;
        }
      }

      .hourOfMsg {
        margin-left: 23px;
        margin-bottom: 14px;
        color: #98a3a9;
        font-size: 8px;
      }
    }
  }

  .userCalls {
    margin-top: 12px;
    .user {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 100%;
      }
      .userRight {
        margin-left: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        .callInfos {
          h3 {
            font-size: 11.5px;
            font-weight: 500;
          }

          h4 {
            padding-top: 1px;
            font-size: 10.5px;
            font-weight: 400;
            color: #869399;
          }
          .callAcepted {
            margin-right: 1px;
            margin-bottom: -2px;
            font-size: 13px;
            color: #35c16b;
            transform: rotate(175deg);
          }
          .callRejected {
            margin-right: 1px;
            margin-bottom: -2px;
            font-size: 13px;
            color: #ed5774;
          }
        }

        .callIcon {
          position: absolute;
          margin-left: 145px;
          color: #16b08e;
          font-size: 12px;
          transform: rotate(90deg);
        }
      }
    }
  }

  .addIcon {
    position: absolute;
    top: 140px;
    right: 174px;
  }

  .statusAvatar {
    padding: 3.5px;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%236F7C84FF' stroke-width='3' stroke-dasharray='23%25%2c 5%25' stroke-dashoffset='64' stroke-linecap='butt'/%3e%3c/svg%3e");
  }

  .statusAvatarWithoutDash {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;function xH(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function wH(e){return U({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}}]})(e)}function O0(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function bH(e){return U({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"}}]})(e)}function SH(e){return U({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"}}]})(e)}function CH(e){return U({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function kH(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"}}]})(e)}const Ek=e=>{const{whats:t}=Dr(),n=K(),r=()=>{n("/whats/storyMaker")};return a.jsx(vH,{children:a.jsxs("div",{onClick:r,className:"user",children:[a.jsx(ce,{id:t==null?void 0:t.picture,size:40}),a.jsx("div",{className:"userRight",children:a.jsxs("div",{className:"chatInfos",children:[a.jsx("h3",{children:"Character"}),a.jsx("h4",{children:"Adicionar um status"}),a.jsxs("svg",{className:"addIcon",width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"1",y:"1",width:"17",height:"17",rx:"8.5",fill:"#04A87E",stroke:"#121B22","stroke-width":"2"}),a.jsx("path",{d:"M9.9375 9.0625V6.4375C9.9375 6.19588 9.74162 6 9.5 6C9.25838 6 9.0625 6.19588 9.0625 6.4375V9.0625H6.4375C6.19588 9.0625 6 9.25838 6 9.5C6 9.74162 6.19588 9.9375 6.4375 9.9375H9.0625V12.5625C9.0625 12.8041 9.25838 13 9.5 13C9.74162 13 9.9375 12.8041 9.9375 12.5625V9.9375H12.5625C12.8041 9.9375 13 9.74162 13 9.5C13 9.25838 12.8041 9.0625 12.5625 9.0625H9.9375Z",fill:"#F3F8F9"})]})]})})]})})},jH=e=>(Dr(),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(yH,{children:[a.jsx(Ek,{className:"avatarStatusWithoutDash"}),a.jsx("h2",{className:"tag",children:"Recent updates"}),a.jsx("h2",{className:"tag",children:"Viewed updates"})]})})),PH=W.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  background: #121b22;

  font-size: 0.7rem;

  padding-bottom: 10px;

  background-image: url("https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .statusAvatarWithoutDash {
    width: 35px;
    height: 35px;
  }

  .loadingBar {
    width: 205px;
    height: 4px;

    background: #bababa;
    border-radius: 5px;
  }

  .loadingBar2 {
    width: 0px;
    height: 4px;

    background: #ffffff;
    border-radius: 5px;
  }

  .userModal {
    position: absolute;
    top: 55px;
    left: 10px;
  }

  .user {
    position: absolute;
    margin-left: -10px;
  }

  .closeStory {
    position: relative;
    top: 20px;
    left: 184px;
    font-size: 20px;
  }
`,EH=()=>{const{SistemDispatch:e}=w.useContext(J);w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#121515",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#121515",color:"#f2f2f2"}})},[]);const t=K(),n=()=>{t(-1)};return a.jsx(PH,{children:a.jsxs("div",{className:"userModal",children:[a.jsx("div",{className:"loadingBar",children:a.jsx(H.div,{initial:{width:1},animate:{width:"205px"},transition:{ease:"linear",duration:4,delay:.4},onAnimationComplete:()=>t(-1),className:"loadingBar2"})}),a.jsx(Ek,{className:"userStatus",avatarUrl:"https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048",name:"Marcão Lindao",hours:"Hoje, 21:20"}),a.jsx(ig,{onClick:n,className:"closeStory"})]})})},RH=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  background: #121B22;
  
.credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    font-size: 0.7rem;
    
    h4 {
        font-weight: 400;
        color: #71787F;
    }

    h3 {
        margin-top: 2px;
        color: #4AD199;
        font-weight: 500;
    }
}  
`,MH=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),{setInitialWhatsApp:n}=Dr(),{addEventListener:r}=$r();return w.useEffect(()=>(t({type:"showStatusbar"}),t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#121B22",color:"#f2f2f2"}}),t({type:"setStatusBarStyle",values:{background:"#121B22",color:"#f2f2f2"}}),dn("execRequestWhatsApp",{}),r("execRequestWhatsApp",i=>{n(i),e("/whats/chat")}),()=>{}),[]),a.jsxs(RH,{children:[a.jsx("img",{src:"src/assets/whatsLogo.svg",alt:"logo do whatsapp"}),a.jsxs("div",{className:"credits",children:[a.jsx("h4",{children:"from"}),a.jsx("h3",{children:"Low Pixel"})]})]})},TH=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 4px;

  background: url("src/assets/whatsbg.svg");

  .head {
    width: 100%;
    padding: 2px 8px 4px 8px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background: #1f2c34;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .name {
      width: 100%;

      h4 {
        font-size: 12px;
        font-weight: 500;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  .messagesList {
    padding: 0 8px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    transition: 0.2s ease;
    display: flex;
    flex-direction: column;

    .wrap {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 4px;
      font-size: 10px;
    }

    .chatBox {
      display: flex;
      max-width: 75%;
      padding: 6px 8px;
      align-self: flex-start;
      background: #272837;
      border-radius: 6px;
      color: #f2f2fa;
      column-gap: 8px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      align-items: flex-end;
    }

    .isAudio {
      width: 100%;
      /* height: 40px; */

      .user {
        position: relative;

        span {
          width: 14px;
          height: 14px;
          position: absolute;
          bottom: -4px;
          right: 0;
          background: #272837;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .foot {
      display: flex;
      align-items: flex-end;
      font-size: 8px;
      gap: 2px;

      svg {
        margin-bottom: -2px;
      }
    }

    .audio {
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        flex-shrink: 0;
      }

      .ratio {
        background: #128c7e;
        color: inherit;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 10px;
      }
    }

    .react-waves {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .chatBox.isMe {
      align-self: flex-end;
      background: #075e54;

      .user span {
        background: #075e54;
      }

      .user,
      .ratio {
        order: -1;
      }
    }
  }

  .chatInput {
    width: 100%;
    display: flex;
    padding: 4px 8px;
    gap: 4px;

    .inputBox {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      background: #1f2c34;
      border-radius: 16px;
    }

    .audioDrag {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 10px;
      background: #1f2c34;
      border-radius: 16px;
      font-size: 10px;
      transform-origin: center right;

      .left {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 10px;
      }

      .right {
        display: flex;
        align-items: flex-end;
        gap: 2px;
        color: #dee2e6;
      }
    }

    input {
      width: 100%;
      font-size: 12px;
      color: #f8f9fa;
    }

    .audioBtn {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      aspect-ratio: 1;
      position: relative;

      .mic {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #008069;
        transition: ease-in;
        z-index: 5;
      }

      .drag {
        padding: 8px;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        background: #1f2c34;
        border-radius: 16px;
        z-index: 2;
        position: absolute;
        bottom: 8px;
        right: 0;
      }
    }

    .sendbtn {
      width: 30px;
      height: 30px;
      padding-left: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #008069;
      aspect-ratio: 1;
    }

    .RecorderAudio {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      justify-content: space-between;
      width: 100%;
      height: 30px;
      background-color: #1f2c34;

      transition: all 0.5s;

      .CancelAudio {
        color: white;
        & > svg:hover {
          color: #a84242;
          transition: all 0.3s;
        }
      }

      .PauseAudio:hover {
        transition: all 0.3s;
        filter: brightness(0.8);
      }

      .SubmitAudio {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 1.563rem;
        border-radius: 4px;
        background-color: #018865;

        transition: all 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      strong {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }
`;var _H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function OH(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zH(e,t){return t={exports:{}},e(t,t.exports),t.exports}var NH=zH(function(e,t){/*!
 * wavesurfer.js 4.1.1 (2020-09-25)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */(function(r,i){e.exports=i()})(_H,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(o&1&&(s=i(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var c in s)i.d(l,c,(function(u){return s[u]}).bind(null,c));return l},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s="./src/wavesurfer.js")}({"./node_modules/debounce/index.js":function(n,r){function i(s,o,l){var c,u,d,f,h;o==null&&(o=100);function g(){var y=Date.now()-f;y<o&&y>=0?c=setTimeout(g,o-y):(c=null,l||(h=s.apply(d,u),d=u=null))}var m=function(){d=this,u=arguments,f=Date.now();var y=l&&!c;return c||(c=setTimeout(g,o)),y&&(h=s.apply(d,u),d=u=null),h};return m.clear=function(){c&&(clearTimeout(c),c=null)},m.flush=function(){c&&(h=s.apply(d,u),d=u=null,clearTimeout(c),c=null)},m}i.debounce=i,n.exports=i},"./src/drawer.canvasentry.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=l(i("./src/util/style.js")),o=l(i("./src/util/get-id.js"));function l(h){return h&&h.__esModule?h:{default:h}}function c(h,g){if(!(h instanceof g))throw new TypeError("Cannot call a class as a function")}function u(h,g){for(var m=0;m<g.length;m++){var y=g[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}function d(h,g,m){return g&&u(h.prototype,g),m&&u(h,m),h}var f=function(){function h(){c(this,h),this.wave=null,this.waveCtx=null,this.progress=null,this.progressCtx=null,this.start=0,this.end=1,this.id=(0,o.default)(typeof this.constructor.name<"u"?this.constructor.name.toLowerCase()+"_":"canvasentry_"),this.canvasContextAttributes={}}return d(h,[{key:"initWave",value:function(m){this.wave=m,this.waveCtx=this.wave.getContext("2d",this.canvasContextAttributes)}},{key:"initProgress",value:function(m){this.progress=m,this.progressCtx=this.progress.getContext("2d",this.canvasContextAttributes)}},{key:"updateDimensions",value:function(m,y,P,x){this.start=this.wave.offsetLeft/y||0,this.end=this.start+m/y,this.wave.width=P,this.wave.height=x;var p={width:m+"px"};(0,s.default)(this.wave,p),this.hasProgressCanvas&&(this.progress.width=P,this.progress.height=x,(0,s.default)(this.progress,p))}},{key:"clearWave",value:function(){this.waveCtx.clearRect(0,0,this.waveCtx.canvas.width,this.waveCtx.canvas.height),this.hasProgressCanvas&&this.progressCtx.clearRect(0,0,this.progressCtx.canvas.width,this.progressCtx.canvas.height)}},{key:"setFillStyles",value:function(m,y){this.waveCtx.fillStyle=m,this.hasProgressCanvas&&(this.progressCtx.fillStyle=y)}},{key:"fillRects",value:function(m,y,P,x,p){this.fillRectToContext(this.waveCtx,m,y,P,x,p),this.hasProgressCanvas&&this.fillRectToContext(this.progressCtx,m,y,P,x,p)}},{key:"fillRectToContext",value:function(m,y,P,x,p,v){m&&(v?this.drawRoundedRect(m,y,P,x,p,v):m.fillRect(y,P,x,p))}},{key:"drawRoundedRect",value:function(m,y,P,x,p,v){p!==0&&(p<0&&(p*=-1,P-=p),m.beginPath(),m.moveTo(y+v,P),m.lineTo(y+x-v,P),m.quadraticCurveTo(y+x,P,y+x,P+v),m.lineTo(y+x,P+p-v),m.quadraticCurveTo(y+x,P+p,y+x-v,P+p),m.lineTo(y+v,P+p),m.quadraticCurveTo(y,P+p,y,P+p-v),m.lineTo(y,P+v),m.quadraticCurveTo(y,P,y+v,P),m.closePath(),m.fill())}},{key:"drawLines",value:function(m,y,P,x,p,v){this.drawLineToContext(this.waveCtx,m,y,P,x,p,v),this.hasProgressCanvas&&this.drawLineToContext(this.progressCtx,m,y,P,x,p,v)}},{key:"drawLineToContext",value:function(m,y,P,x,p,v,C){if(m){var b=y.length/2,E=Math.round(b*this.start),j=Math.round(b*this.end)+1,S=E,_=j,M=this.wave.width/(_-S-1),T=x+p,R=P/x;m.beginPath(),m.moveTo((S-E)*M,T),m.lineTo((S-E)*M,T-Math.round((y[2*S]||0)/R));var O,k,N;for(O=S;O<_;O++)k=y[2*O]||0,N=Math.round(k/R),m.lineTo((O-E)*M+this.halfPixel,T-N);var A=_-1;for(A;A>=S;A--)k=y[2*A+1]||0,N=Math.round(k/R),m.lineTo((A-E)*M+this.halfPixel,T-N);m.lineTo((S-E)*M,T-Math.round((y[2*S+1]||0)/R)),m.closePath(),m.fill()}}},{key:"destroy",value:function(){this.waveCtx=null,this.wave=null,this.progressCtx=null,this.progress=null}},{key:"getImage",value:function(m,y,P){var x=this;if(P==="blob")return new Promise(function(p){x.wave.toBlob(p,m,y)});if(P==="dataURL")return this.wave.toDataURL(m,y)}}]),h}();r.default=f,n.exports=r.default},"./src/drawer.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=l(i("./src/util/index.js"));function o(){if(typeof WeakMap!="function")return null;var C=new WeakMap;return o=function(){return C},C}function l(C){if(C&&C.__esModule)return C;if(C===null||c(C)!=="object"&&typeof C!="function")return{default:C};var b=o();if(b&&b.has(C))return b.get(C);var E={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in C)if(Object.prototype.hasOwnProperty.call(C,S)){var _=j?Object.getOwnPropertyDescriptor(C,S):null;_&&(_.get||_.set)?Object.defineProperty(E,S,_):E[S]=C[S]}return E.default=C,b&&b.set(C,E),E}function c(C){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(E){return typeof E}:c=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},c(C)}function u(C,b){if(!(C instanceof b))throw new TypeError("Cannot call a class as a function")}function d(C,b){for(var E=0;E<b.length;E++){var j=b[E];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(C,j.key,j)}}function f(C,b,E){return b&&d(C.prototype,b),E&&d(C,E),C}function h(C,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(b&&b.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),b&&g(C,b)}function g(C,b){return g=Object.setPrototypeOf||function(j,S){return j.__proto__=S,j},g(C,b)}function m(C){var b=x();return function(){var j=p(C),S;if(b){var _=p(this).constructor;S=Reflect.construct(j,arguments,_)}else S=j.apply(this,arguments);return y(this,S)}}function y(C,b){return b&&(c(b)==="object"||typeof b=="function")?b:P(C)}function P(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function p(C){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(E){return E.__proto__||Object.getPrototypeOf(E)},p(C)}var v=function(C){h(E,C);var b=m(E);function E(j,S){var _;return u(this,E),_=b.call(this),_.container=j,_.params=S,_.width=0,_.height=S.height*_.params.pixelRatio,_.lastPos=0,_.wrapper=null,_}return f(E,[{key:"style",value:function(S,_){return s.style(S,_)}},{key:"createWrapper",value:function(){this.wrapper=this.container.appendChild(document.createElement("wave")),this.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:this.params.height+"px"}),(this.params.fillParent||this.params.scrollParent)&&this.style(this.wrapper,{width:"100%",overflowX:this.params.hideScrollbar?"hidden":"auto",overflowY:"hidden"}),this.setupWrapperEvents()}},{key:"handleEvent",value:function(S,_){!_&&S.preventDefault();var M=S.targetTouches?S.targetTouches[0].clientX:S.clientX,T=this.wrapper.getBoundingClientRect(),R=this.width,O=this.getWidth(),k;return!this.params.fillParent&&R<O?k=(this.params.rtl?T.right-M:M-T.left)*(this.params.pixelRatio/R)||0:k=((this.params.rtl?T.right-M:M-T.left)+this.wrapper.scrollLeft)/this.wrapper.scrollWidth||0,s.clamp(k,0,1)}},{key:"setupWrapperEvents",value:function(){var S=this;this.wrapper.addEventListener("click",function(_){var M=S.wrapper.offsetHeight-S.wrapper.clientHeight;if(M!==0){var T=S.wrapper.getBoundingClientRect();if(_.clientY>=T.bottom-M)return}S.params.interact&&S.fireEvent("click",_,S.handleEvent(_))}),this.wrapper.addEventListener("dblclick",function(_){S.params.interact&&S.fireEvent("dblclick",_,S.handleEvent(_))}),this.wrapper.addEventListener("scroll",function(_){return S.fireEvent("scroll",_)})}},{key:"drawPeaks",value:function(S,_,M,T){this.setWidth(_)||this.clearWave(),this.params.barWidth?this.drawBars(S,0,M,T):this.drawWave(S,0,M,T)}},{key:"resetScroll",value:function(){this.wrapper!==null&&(this.wrapper.scrollLeft=0)}},{key:"recenter",value:function(S){var _=this.wrapper.scrollWidth*S;this.recenterOnPosition(_,!0)}},{key:"recenterOnPosition",value:function(S,_){var M=this.wrapper.scrollLeft,T=~~(this.wrapper.clientWidth/2),R=this.wrapper.scrollWidth-this.wrapper.clientWidth,O=S-T,k=O-M;if(R!=0){if(!_&&-T<=k&&k<T){var N=this.params.autoCenterRate;N/=T,N*=R,k=Math.max(-N,Math.min(N,k)),O=M+k}O=Math.max(0,Math.min(R,O)),O!=M&&(this.wrapper.scrollLeft=O)}}},{key:"getScrollX",value:function(){var S=0;if(this.wrapper){var _=this.params.pixelRatio;if(S=Math.round(this.wrapper.scrollLeft*_),this.params.scrollParent){var M=~~(this.wrapper.scrollWidth*_-this.getWidth());S=Math.min(M,Math.max(0,S))}}return S}},{key:"getWidth",value:function(){return Math.round(this.container.clientWidth*this.params.pixelRatio)}},{key:"setWidth",value:function(S){return this.width==S?!1:(this.width=S,this.params.fillParent||this.params.scrollParent?this.style(this.wrapper,{width:""}):this.style(this.wrapper,{width:~~(this.width/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"setHeight",value:function(S){return S==this.height?!1:(this.height=S,this.style(this.wrapper,{height:~~(this.height/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"progress",value:function(S){var _=1/this.params.pixelRatio,M=Math.round(S*this.width)*_;if(M<this.lastPos||M-this.lastPos>=_){if(this.lastPos=M,this.params.scrollParent&&this.params.autoCenter){var T=~~(this.wrapper.scrollWidth*S);this.recenterOnPosition(T,this.params.autoCenterImmediately)}this.updateProgress(M)}}},{key:"destroy",value:function(){this.unAll(),this.wrapper&&(this.wrapper.parentNode==this.container&&this.container.removeChild(this.wrapper),this.wrapper=null)}},{key:"updateCursor",value:function(){}},{key:"updateSize",value:function(){}},{key:"drawBars",value:function(S,_,M,T){}},{key:"drawWave",value:function(S,_,M,T){}},{key:"clearWave",value:function(){}},{key:"updateProgress",value:function(S){}}]),E}(s.Observer);r.default=v,n.exports=r.default},"./src/drawer.multicanvas.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=d(i("./src/drawer.js")),o=u(i("./src/util/index.js")),l=d(i("./src/drawer.canvasentry.js"));function c(){if(typeof WeakMap!="function")return null;var j=new WeakMap;return c=function(){return j},j}function u(j){if(j&&j.__esModule)return j;if(j===null||f(j)!=="object"&&typeof j!="function")return{default:j};var S=c();if(S&&S.has(j))return S.get(j);var _={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in j)if(Object.prototype.hasOwnProperty.call(j,T)){var R=M?Object.getOwnPropertyDescriptor(j,T):null;R&&(R.get||R.set)?Object.defineProperty(_,T,R):_[T]=j[T]}return _.default=j,S&&S.set(j,_),_}function d(j){return j&&j.__esModule?j:{default:j}}function f(j){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(_){return typeof _}:f=function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},f(j)}function h(j,S){if(!(j instanceof S))throw new TypeError("Cannot call a class as a function")}function g(j,S){for(var _=0;_<S.length;_++){var M=S[_];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(j,M.key,M)}}function m(j,S,_){return S&&g(j.prototype,S),_&&g(j,_),j}function y(j,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(S&&S.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),S&&P(j,S)}function P(j,S){return P=Object.setPrototypeOf||function(M,T){return M.__proto__=T,M},P(j,S)}function x(j){var S=C();return function(){var M=b(j),T;if(S){var R=b(this).constructor;T=Reflect.construct(M,arguments,R)}else T=M.apply(this,arguments);return p(this,T)}}function p(j,S){return S&&(f(S)==="object"||typeof S=="function")?S:v(j)}function v(j){if(j===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function b(j){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(_){return _.__proto__||Object.getPrototypeOf(_)},b(j)}var E=function(j){y(_,j);var S=x(_);function _(M,T){var R;return h(this,_),R=S.call(this,M,T),R.maxCanvasWidth=T.maxCanvasWidth,R.maxCanvasElementWidth=Math.round(T.maxCanvasWidth/T.pixelRatio),R.hasProgressCanvas=T.waveColor!=T.progressColor,R.halfPixel=.5/T.pixelRatio,R.canvases=[],R.progressWave=null,R.EntryClass=l.default,R.canvasContextAttributes=T.drawingContextAttributes,R.overlap=2*Math.ceil(T.pixelRatio/2),R.barRadius=T.barRadius||0,R}return m(_,[{key:"init",value:function(){this.createWrapper(),this.createElements()}},{key:"createElements",value:function(){this.progressWave=this.wrapper.appendChild(this.style(document.createElement("wave"),{position:"absolute",zIndex:3,left:0,top:0,bottom:0,overflow:"hidden",width:"0",display:"none",boxSizing:"border-box",borderRightStyle:"solid",pointerEvents:"none"})),this.addCanvas(),this.updateCursor()}},{key:"updateCursor",value:function(){this.style(this.progressWave,{borderRightWidth:this.params.cursorWidth+"px",borderRightColor:this.params.cursorColor})}},{key:"updateSize",value:function(){for(var T=this,R=Math.round(this.width/this.params.pixelRatio),O=Math.ceil(R/(this.maxCanvasElementWidth+this.overlap));this.canvases.length<O;)this.addCanvas();for(;this.canvases.length>O;)this.removeCanvas();var k=this.maxCanvasWidth+this.overlap,N=this.canvases.length-1;this.canvases.forEach(function(A,D){D==N&&(k=T.width-T.maxCanvasWidth*N),T.updateDimensions(A,k,T.height),A.clearWave()})}},{key:"addCanvas",value:function(){var T=new this.EntryClass;T.canvasContextAttributes=this.canvasContextAttributes,T.hasProgressCanvas=this.hasProgressCanvas,T.halfPixel=this.halfPixel;var R=this.maxCanvasElementWidth*this.canvases.length;T.initWave(this.wrapper.appendChild(this.style(document.createElement("canvas"),{position:"absolute",zIndex:2,left:R+"px",top:0,bottom:0,height:"100%",pointerEvents:"none"}))),this.hasProgressCanvas&&T.initProgress(this.progressWave.appendChild(this.style(document.createElement("canvas"),{position:"absolute",left:R+"px",top:0,bottom:0,height:"100%"}))),this.canvases.push(T)}},{key:"removeCanvas",value:function(){var T=this.canvases[this.canvases.length-1];T.wave.parentElement.removeChild(T.wave),this.hasProgressCanvas&&T.progress.parentElement.removeChild(T.progress),T&&(T.destroy(),T=null),this.canvases.pop()}},{key:"updateDimensions",value:function(T,R,O){var k=Math.round(R/this.params.pixelRatio),N=Math.round(this.width/this.params.pixelRatio);T.updateDimensions(k,N,R,O),this.style(this.progressWave,{display:"block"})}},{key:"clearWave",value:function(){var T=this;o.frame(function(){T.canvases.forEach(function(R){return R.clearWave()})})()}},{key:"drawBars",value:function(T,R,O,k){var N=this;return this.prepareDraw(T,R,O,k,function(A){var D=A.absmax,L=A.hasMinVals;A.height;var $=A.offsetY,V=A.halfH,B=A.peaks;if(O!==void 0){var Q=L?2:1,xe=B.length/Q,de=N.params.barWidth*N.params.pixelRatio,pe=N.params.barGap===null?Math.max(N.params.pixelRatio,~~(de/2)):Math.max(N.params.pixelRatio,N.params.barGap*N.params.pixelRatio),ge=de+pe,we=xe/N.width,q=O,X=k,ee=q;for(ee;ee<X;ee+=ge){var re=B[Math.floor(ee*we*Q)]||0,se=Math.round(re/D*V);se==0&&N.params.barMinHeight&&(se=N.params.barMinHeight),N.fillRect(ee+N.halfPixel,V-se+$,de+N.halfPixel,se*2,N.barRadius)}}})}},{key:"drawWave",value:function(T,R,O,k){var N=this;return this.prepareDraw(T,R,O,k,function(A){var D=A.absmax,L=A.hasMinVals;A.height;var $=A.offsetY,V=A.halfH,B=A.peaks,Q=A.channelIndex;if(!L){var xe=[],de=B.length,pe=0;for(pe;pe<de;pe++)xe[2*pe]=B[pe],xe[2*pe+1]=-B[pe];B=xe}O!==void 0&&N.drawLine(B,D,V,$,O,k,Q),N.fillRect(0,V+$-N.halfPixel,N.width,N.halfPixel,N.barRadius)})}},{key:"drawLine",value:function(T,R,O,k,N,A,D){var L=this,$=this.params.splitChannelsOptions.channelColors[D]||{},V=$.waveColor,B=$.progressColor;this.canvases.forEach(function(Q,xe){L.setFillStyles(Q,V,B),Q.drawLines(T,R,O,k,N,A)})}},{key:"fillRect",value:function(T,R,O,k,N){var A=Math.floor(T/this.maxCanvasWidth),D=Math.min(Math.ceil((T+O)/this.maxCanvasWidth)+1,this.canvases.length),L=A;for(L;L<D;L++){var $=this.canvases[L],V=L*this.maxCanvasWidth,B={x1:Math.max(T,L*this.maxCanvasWidth),y1:R,x2:Math.min(T+O,L*this.maxCanvasWidth+$.wave.width),y2:R+k};B.x1<B.x2&&(this.setFillStyles($),$.fillRects(B.x1-V,B.y1,B.x2-B.x1,B.y2-B.y1,N))}}},{key:"hideChannel",value:function(T){return this.params.splitChannels&&this.params.splitChannelsOptions.filterChannels.includes(T)}},{key:"prepareDraw",value:function(T,R,O,k,N,A){var D=this;return o.frame(function(){if(T[0]instanceof Array){var L=T;if(D.params.splitChannels){var $=L.filter(function(we,q){return!D.hideChannel(q)});return D.params.splitChannelsOptions.overlay||D.setHeight(Math.max($.length,1)*D.params.height*D.params.pixelRatio),L.forEach(function(we,q){return D.prepareDraw(we,q,O,k,N,$.indexOf(we))})}T=L[0]}if(!D.hideChannel(R)){var V=1/D.params.barHeight;if(D.params.normalize){var B=o.max(T),Q=o.min(T);V=-Q>B?-Q:B}var xe=[].some.call(T,function(we){return we<0}),de=D.params.height*D.params.pixelRatio,pe=de*A||0,ge=de/2;return N({absmax:V,hasMinVals:xe,height:de,offsetY:pe,halfH:ge,peaks:T,channelIndex:R})}})()}},{key:"setFillStyles",value:function(T){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.params.waveColor,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.params.progressColor;T.setFillStyles(R,O)}},{key:"getImage",value:function(T,R,O){if(O==="blob")return Promise.all(this.canvases.map(function(N){return N.getImage(T,R,O)}));if(O==="dataURL"){var k=this.canvases.map(function(N){return N.getImage(T,R,O)});return k.length>1?k:k[0]}}},{key:"updateProgress",value:function(T){this.style(this.progressWave,{width:T+"px"})}}]),_}(s.default);r.default=E,n.exports=r.default},"./src/mediaelement-webaudio.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=o(i("./src/mediaelement.js"));function o(b){return b&&b.__esModule?b:{default:b}}function l(b){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(j){return typeof j}:l=function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},l(b)}function c(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")}function u(b,E){for(var j=0;j<E.length;j++){var S=E[j];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(b,S.key,S)}}function d(b,E,j){return E&&u(b.prototype,E),j&&u(b,j),b}function f(b,E,j){return typeof Reflect<"u"&&Reflect.get?f=Reflect.get:f=function(_,M,T){var R=h(_,M);if(R){var O=Object.getOwnPropertyDescriptor(R,M);return O.get?O.get.call(T):O.value}},f(b,E,j||b)}function h(b,E){for(;!Object.prototype.hasOwnProperty.call(b,E)&&(b=v(b),b!==null););return b}function g(b,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(E&&E.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),E&&m(b,E)}function m(b,E){return m=Object.setPrototypeOf||function(S,_){return S.__proto__=_,S},m(b,E)}function y(b){var E=p();return function(){var S=v(b),_;if(E){var M=v(this).constructor;_=Reflect.construct(S,arguments,M)}else _=S.apply(this,arguments);return P(this,_)}}function P(b,E){return E&&(l(E)==="object"||typeof E=="function")?E:x(b)}function x(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function v(b){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},v(b)}var C=function(b){g(j,b);var E=y(j);function j(S){var _;return c(this,j),_=E.call(this,S),_.params=S,_.sourceMediaElement=null,_}return d(j,[{key:"init",value:function(){this.setPlaybackRate(this.params.audioRate),this.createTimer(),this.createVolumeNode(),this.createScriptNode(),this.createAnalyserNode()}},{key:"_load",value:function(_,M,T){f(v(j.prototype),"_load",this).call(this,_,M,T),this.createMediaElementSource(_)}},{key:"createMediaElementSource",value:function(_){this.sourceMediaElement=this.ac.createMediaElementSource(_),this.sourceMediaElement.connect(this.analyser)}},{key:"play",value:function(_,M){return this.resumeAudioContext(),f(v(j.prototype),"play",this).call(this,_,M)}},{key:"destroy",value:function(){f(v(j.prototype),"destroy",this).call(this),this.destroyWebAudio()}}]),j}(s.default);r.default=C,n.exports=r.default},"./src/mediaelement.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=u(i("./src/webaudio.js")),o=c(i("./src/util/index.js"));function l(){if(typeof WeakMap!="function")return null;var S=new WeakMap;return l=function(){return S},S}function c(S){if(S&&S.__esModule)return S;if(S===null||d(S)!=="object"&&typeof S!="function")return{default:S};var _=l();if(_&&_.has(S))return _.get(S);var M={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in S)if(Object.prototype.hasOwnProperty.call(S,R)){var O=T?Object.getOwnPropertyDescriptor(S,R):null;O&&(O.get||O.set)?Object.defineProperty(M,R,O):M[R]=S[R]}return M.default=S,_&&_.set(S,M),M}function u(S){return S&&S.__esModule?S:{default:S}}function d(S){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(M){return typeof M}:d=function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},d(S)}function f(S,_){if(!(S instanceof _))throw new TypeError("Cannot call a class as a function")}function h(S,_){for(var M=0;M<_.length;M++){var T=_[M];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(S,T.key,T)}}function g(S,_,M){return _&&h(S.prototype,_),M&&h(S,M),S}function m(S,_,M){return typeof Reflect<"u"&&Reflect.get?m=Reflect.get:m=function(R,O,k){var N=y(R,O);if(N){var A=Object.getOwnPropertyDescriptor(N,O);return A.get?A.get.call(k):A.value}},m(S,_,M||S)}function y(S,_){for(;!Object.prototype.hasOwnProperty.call(S,_)&&(S=E(S),S!==null););return S}function P(S,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(_&&_.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),_&&x(S,_)}function x(S,_){return x=Object.setPrototypeOf||function(T,R){return T.__proto__=R,T},x(S,_)}function p(S){var _=b();return function(){var T=E(S),R;if(_){var O=E(this).constructor;R=Reflect.construct(T,arguments,O)}else R=T.apply(this,arguments);return v(this,R)}}function v(S,_){return _&&(d(_)==="object"||typeof _=="function")?_:C(S)}function C(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function b(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function E(S){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},E(S)}var j=function(S){P(M,S);var _=p(M);function M(T){var R;return f(this,M),R=_.call(this,T),R.params=T,R.media={currentTime:0,duration:0,paused:!0,playbackRate:1,play:function(){},pause:function(){},volume:0},R.mediaType=T.mediaType.toLowerCase(),R.elementPosition=T.elementPosition,R.peaks=null,R.playbackRate=1,R.volume=1,R.isMuted=!1,R.buffer=null,R.onPlayEnd=null,R.mediaListeners={},R}return g(M,[{key:"init",value:function(){this.setPlaybackRate(this.params.audioRate),this.createTimer()}},{key:"_setupMediaListeners",value:function(){var R=this;this.mediaListeners.error=function(){R.fireEvent("error","Error loading media element")},this.mediaListeners.canplay=function(){R.fireEvent("canplay")},this.mediaListeners.ended=function(){R.fireEvent("finish")},this.mediaListeners.play=function(){R.fireEvent("play")},this.mediaListeners.pause=function(){R.fireEvent("pause")},this.mediaListeners.seeked=function(O){R.fireEvent("seek")},this.mediaListeners.volumechange=function(O){R.isMuted=R.media.muted,R.isMuted?R.volume=0:R.volume=R.media.volume,R.fireEvent("volume")},Object.keys(this.mediaListeners).forEach(function(O){R.media.removeEventListener(O,R.mediaListeners[O]),R.media.addEventListener(O,R.mediaListeners[O])})}},{key:"createTimer",value:function(){var R=this,O=function k(){R.isPaused()||(R.fireEvent("audioprocess",R.getCurrentTime()),o.frame(k)())};this.on("play",O),this.on("pause",function(){R.fireEvent("audioprocess",R.getCurrentTime())})}},{key:"load",value:function(R,O,k,N){var A=document.createElement(this.mediaType);A.controls=this.params.mediaControls,A.autoplay=this.params.autoplay||!1,A.preload=N??"auto",A.src=R,A.style.width="100%";var D=O.querySelector(this.mediaType);D&&O.removeChild(D),O.appendChild(A),this._load(A,k,N)}},{key:"loadElt",value:function(R,O){R.controls=this.params.mediaControls,R.autoplay=this.params.autoplay||!1,this._load(R,O,R.preload)}},{key:"_load",value:function(R,O,k){if(!(R instanceof HTMLMediaElement)||typeof R.addEventListener>"u")throw new Error("media parameter is not a valid media element");typeof R.load=="function"&&!(O&&k=="none")&&R.load(),this.media=R,this._setupMediaListeners(),this.peaks=O,this.onPlayEnd=null,this.buffer=null,this.isMuted=R.muted,this.setPlaybackRate(this.playbackRate),this.setVolume(this.volume)}},{key:"isPaused",value:function(){return!this.media||this.media.paused}},{key:"getDuration",value:function(){if(this.explicitDuration)return this.explicitDuration;var R=(this.buffer||this.media).duration;return R>=1/0&&(R=this.media.seekable.end(0)),R}},{key:"getCurrentTime",value:function(){return this.media&&this.media.currentTime}},{key:"getPlayedPercents",value:function(){return this.getCurrentTime()/this.getDuration()||0}},{key:"getPlaybackRate",value:function(){return this.playbackRate||this.media.playbackRate}},{key:"setPlaybackRate",value:function(R){this.playbackRate=R||1,this.media.playbackRate=this.playbackRate}},{key:"seekTo",value:function(R){R!=null&&(this.media.currentTime=R),this.clearPlayEnd()}},{key:"play",value:function(R,O){this.seekTo(R);var k=this.media.play();return O&&this.setPlayEnd(O),k}},{key:"pause",value:function(){var R;return this.media&&(R=this.media.pause()),this.clearPlayEnd(),R}},{key:"setPlayEnd",value:function(R){var O=this;this.clearPlayEnd(),this._onPlayEnd=function(k){k>=R&&(O.pause(),O.seekTo(R))},this.on("audioprocess",this._onPlayEnd)}},{key:"clearPlayEnd",value:function(){this._onPlayEnd&&(this.un("audioprocess",this._onPlayEnd),this._onPlayEnd=null)}},{key:"getPeaks",value:function(R,O,k){return this.buffer?m(E(M.prototype),"getPeaks",this).call(this,R,O,k):this.peaks||[]}},{key:"setSinkId",value:function(R){return R?this.media.setSinkId?this.media.setSinkId(R):Promise.reject(new Error("setSinkId is not supported in your browser")):Promise.reject(new Error("Invalid deviceId: "+R))}},{key:"getVolume",value:function(){return this.volume}},{key:"setVolume",value:function(R){this.volume=R,this.media.volume!==this.volume&&(this.media.volume=this.volume)}},{key:"setMute",value:function(R){this.isMuted=this.media.muted=R}},{key:"destroy",value:function(){var R=this;this.pause(),this.unAll(),this.destroyed=!0,Object.keys(this.mediaListeners).forEach(function(O){R.media&&R.media.removeEventListener(O,R.mediaListeners[O])}),this.params.removeMediaElementOnDestroy&&this.media&&this.media.parentNode&&this.media.parentNode.removeChild(this.media),this.media=null}}]),M}(s.default);r.default=j,n.exports=r.default},"./src/peakcache.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function s(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function o(u,d){for(var f=0;f<d.length;f++){var h=d[f];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}function l(u,d,f){return d&&o(u.prototype,d),f&&o(u,f),u}var c=function(){function u(){s(this,u),this.clearPeakCache()}return l(u,[{key:"clearPeakCache",value:function(){this.peakCacheRanges=[],this.peakCacheLength=-1}},{key:"addRangeToPeakCache",value:function(f,h,g){f!=this.peakCacheLength&&(this.clearPeakCache(),this.peakCacheLength=f);for(var m=[],y=0;y<this.peakCacheRanges.length&&this.peakCacheRanges[y]<h;)y++;for(y%2==0&&m.push(h);y<this.peakCacheRanges.length&&this.peakCacheRanges[y]<=g;)m.push(this.peakCacheRanges[y]),y++;y%2==0&&m.push(g),m=m.filter(function(x,p,v){return p==0?x!=v[p+1]:p==v.length-1?x!=v[p-1]:x!=v[p-1]&&x!=v[p+1]}),this.peakCacheRanges=this.peakCacheRanges.concat(m),this.peakCacheRanges=this.peakCacheRanges.sort(function(x,p){return x-p}).filter(function(x,p,v){return p==0?x!=v[p+1]:p==v.length-1?x!=v[p-1]:x!=v[p-1]&&x!=v[p+1]});var P=[];for(y=0;y<m.length;y+=2)P.push([m[y],m[y+1]]);return P}},{key:"getCacheRanges",value:function(){var f=[],h;for(h=0;h<this.peakCacheRanges.length;h+=2)f.push([this.peakCacheRanges[h],this.peakCacheRanges[h+1]]);return f}}]),u}();r.default=c,n.exports=r.default},"./src/util/clamp.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=s;function s(o,l,c){return Math.min(Math.max(l,o),c)}n.exports=r.default},"./src/util/fetch.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=f;var s=o(i("./src/util/observer.js"));function o(h){return h&&h.__esModule?h:{default:h}}function l(h,g){if(!(h instanceof g))throw new TypeError("Cannot call a class as a function")}function c(h,g){for(var m=0;m<g.length;m++){var y=g[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(h,y.key,y)}}function u(h,g,m){return g&&c(h.prototype,g),m&&c(h,m),h}var d=function(){function h(g,m,y){l(this,h),this.instance=g,this.instance._reader=y.body.getReader(),this.total=parseInt(m,10),this.loaded=0}return u(h,[{key:"start",value:function(m){var y=this,P=function x(){y.instance._reader.read().then(function(p){var v=p.done,C=p.value;if(v){y.total===0&&y.instance.onProgress.call(y.instance,{loaded:y.loaded,total:y.total,lengthComputable:!1}),m.close();return}y.loaded+=C.byteLength,y.instance.onProgress.call(y.instance,{loaded:y.loaded,total:y.total,lengthComputable:y.total!==0}),m.enqueue(C),x()}).catch(function(p){m.error(p)})};P()}}]),h}();function f(h){if(h){if(!h.url)throw new Error("fetch url missing")}else throw new Error("fetch options missing");var g=new s.default,m=new Headers,y=new Request(h.url);g.controller=new AbortController,h&&h.requestHeaders&&h.requestHeaders.forEach(function(p){m.append(p.key,p.value)});var P=h.responseType||"json",x={method:h.method||"GET",headers:m,mode:h.mode||"cors",credentials:h.credentials||"same-origin",cache:h.cache||"default",redirect:h.redirect||"follow",referrer:h.referrer||"client",signal:g.controller.signal};return fetch(y,x).then(function(p){g.response=p;var v=!0;p.body||(v=!1);var C=p.headers.get("content-length");return C===null&&(v=!1),v?(g.onProgress=function(b){g.fireEvent("progress",b)},new Response(new ReadableStream(new d(g,C,p)),x)):p}).then(function(p){var v;if(p.ok)switch(P){case"arraybuffer":return p.arrayBuffer();case"json":return p.json();case"blob":return p.blob();case"text":return p.text();default:v="Unknown responseType: "+P;break}throw v||(v="HTTP error status: "+p.status),new Error(v)}).then(function(p){g.fireEvent("success",p)}).catch(function(p){g.fireEvent("error",p)}),g.fetchRequest=y,g}n.exports=r.default},"./src/util/frame.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=l;var s=o(i("./src/util/request-animation-frame.js"));function o(c){return c&&c.__esModule?c:{default:c}}function l(c){return function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];return(0,s.default)(function(){return c.apply(void 0,d)})}}n.exports=r.default},"./src/util/get-id.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=s;function s(o){return o===void 0&&(o="wavesurfer_"),o+Math.random().toString(32).substring(2)}n.exports=r.default},"./src/util/index.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getId",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(r,"max",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"min",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(r,"Observer",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(r,"style",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(r,"requestAnimationFrame",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"frame",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(r,"debounce",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(r,"preventClick",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(r,"fetchFile",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(r,"clamp",{enumerable:!0,get:function(){return y.default}});var s=P(i("./src/util/get-id.js")),o=P(i("./src/util/max.js")),l=P(i("./src/util/min.js")),c=P(i("./src/util/observer.js")),u=P(i("./src/util/style.js")),d=P(i("./src/util/request-animation-frame.js")),f=P(i("./src/util/frame.js")),h=P(i("./node_modules/debounce/index.js")),g=P(i("./src/util/prevent-click.js")),m=P(i("./src/util/fetch.js")),y=P(i("./src/util/clamp.js"));function P(x){return x&&x.__esModule?x:{default:x}}},"./src/util/max.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=s;function s(o){var l=-1/0;return Object.keys(o).forEach(function(c){o[c]>l&&(l=o[c])}),l}n.exports=r.default},"./src/util/min.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=s;function s(o){var l=1/0;return Object.keys(o).forEach(function(c){o[c]<l&&(l=o[c])}),l}n.exports=r.default},"./src/util/observer.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function s(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function o(u,d){for(var f=0;f<d.length;f++){var h=d[f];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}function l(u,d,f){return d&&o(u.prototype,d),f&&o(u,f),u}var c=function(){function u(){s(this,u),this._disabledEventEmissions=[],this.handlers=null}return l(u,[{key:"on",value:function(f,h){var g=this;this.handlers||(this.handlers={});var m=this.handlers[f];return m||(m=this.handlers[f]=[]),m.push(h),{name:f,callback:h,un:function(P,x){return g.un(P,x)}}}},{key:"un",value:function(f,h){if(this.handlers){var g=this.handlers[f],m;if(g)if(h)for(m=g.length-1;m>=0;m--)g[m]==h&&g.splice(m,1);else g.length=0}}},{key:"unAll",value:function(){this.handlers=null}},{key:"once",value:function(f,h){var g=this,m=function y(){for(var P=arguments.length,x=new Array(P),p=0;p<P;p++)x[p]=arguments[p];h.apply(g,x),setTimeout(function(){g.un(f,y)},0)};return this.on(f,m)}},{key:"setDisabledEventEmissions",value:function(f){this._disabledEventEmissions=f}},{key:"_isDisabledEventEmission",value:function(f){return this._disabledEventEmissions&&this._disabledEventEmissions.includes(f)}},{key:"fireEvent",value:function(f){for(var h=arguments.length,g=new Array(h>1?h-1:0),m=1;m<h;m++)g[m-1]=arguments[m];if(!(!this.handlers||this._isDisabledEventEmission(f))){var y=this.handlers[f];y&&y.forEach(function(P){P.apply(void 0,g)})}}}]),u}();r.default=c,n.exports=r.default},"./src/util/prevent-click.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;function s(l){l.stopPropagation(),document.body.removeEventListener("click",s,!0)}function o(l){document.body.addEventListener("click",s,!0)}n.exports=r.default},"./src/util/request-animation-frame.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(o,l){return setTimeout(o,1e3/60)}).bind(window);r.default=s,n.exports=r.default},"./src/util/style.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=s;function s(o,l){return Object.keys(l).forEach(function(c){o.style[c]!==l[c]&&(o.style[c]=l[c])}),o}n.exports=r.default},"./src/wavesurfer.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=g(i("./src/util/index.js")),o=f(i("./src/drawer.multicanvas.js")),l=f(i("./src/webaudio.js")),c=f(i("./src/mediaelement.js")),u=f(i("./src/peakcache.js")),d=f(i("./src/mediaelement-webaudio.js"));function f(M){return M&&M.__esModule?M:{default:M}}function h(){if(typeof WeakMap!="function")return null;var M=new WeakMap;return h=function(){return M},M}function g(M){if(M&&M.__esModule)return M;if(M===null||m(M)!=="object"&&typeof M!="function")return{default:M};var T=h();if(T&&T.has(M))return T.get(M);var R={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in M)if(Object.prototype.hasOwnProperty.call(M,k)){var N=O?Object.getOwnPropertyDescriptor(M,k):null;N&&(N.get||N.set)?Object.defineProperty(R,k,N):R[k]=M[k]}return R.default=M,T&&T.set(M,R),R}function m(M){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(R){return typeof R}:m=function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},m(M)}function y(M,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(T&&T.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),T&&P(M,T)}function P(M,T){return P=Object.setPrototypeOf||function(O,k){return O.__proto__=k,O},P(M,T)}function x(M){var T=C();return function(){var O=b(M),k;if(T){var N=b(this).constructor;k=Reflect.construct(O,arguments,N)}else k=O.apply(this,arguments);return p(this,k)}}function p(M,T){return T&&(m(T)==="object"||typeof T=="function")?T:v(M)}function v(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function b(M){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(R){return R.__proto__||Object.getPrototypeOf(R)},b(M)}function E(M,T){if(!(M instanceof T))throw new TypeError("Cannot call a class as a function")}function j(M,T){for(var R=0;R<T.length;R++){var O=T[R];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(M,O.key,O)}}function S(M,T,R){return T&&j(M.prototype,T),R&&j(M,R),M}var _=function(M){y(R,M);var T=x(R);S(R,null,[{key:"create",value:function(k){var N=new R(k);return N.init()}}]);function R(O){var k;if(E(this,R),k=T.call(this),k.defaultParams={audioContext:null,audioScriptProcessor:null,audioRate:1,autoCenter:!0,autoCenterRate:5,autoCenterImmediately:!1,backend:"WebAudio",backgroundColor:null,barHeight:1,barRadius:0,barGap:null,barMinHeight:null,container:null,cursorColor:"#333",cursorWidth:1,dragSelection:!0,drawingContextAttributes:{desynchronized:!1},duration:null,fillParent:!0,forceDecode:!1,height:128,hideScrollbar:!1,interact:!0,loopSelection:!0,maxCanvasWidth:4e3,mediaContainer:null,mediaControls:!1,mediaType:"audio",minPxPerSec:20,normalize:!1,partialRender:!1,pixelRatio:window.devicePixelRatio||screen.deviceXDPI/screen.logicalXDPI,plugins:[],progressColor:"#555",removeMediaElementOnDestroy:!0,renderer:o.default,responsive:!1,rtl:!1,scrollParent:!1,skipLength:2,splitChannels:!1,splitChannelsOptions:{overlay:!1,channelColors:{},filterChannels:[]},waveColor:"#999",xhr:{}},k.backends={MediaElement:c.default,WebAudio:l.default,MediaElementWebAudio:d.default},k.util=s,k.params=Object.assign({},k.defaultParams,O),k.container=typeof O.container=="string"?document.querySelector(k.params.container):k.params.container,!k.container)throw new Error("Container element not found");if(k.params.mediaContainer==null?k.mediaContainer=k.container:typeof k.params.mediaContainer=="string"?k.mediaContainer=document.querySelector(k.params.mediaContainer):k.mediaContainer=k.params.mediaContainer,!k.mediaContainer)throw new Error("Media Container element not found");if(k.params.maxCanvasWidth<=1)throw new Error("maxCanvasWidth must be greater than 1");if(k.params.maxCanvasWidth%2==1)throw new Error("maxCanvasWidth must be an even number");if(k.params.rtl===!0&&s.style(k.container,{transform:"rotateY(180deg)"}),k.params.backgroundColor&&k.setBackgroundColor(k.params.backgroundColor),k.savedVolume=0,k.isMuted=!1,k.tmpEvents=[],k.currentRequest=null,k.arraybuffer=null,k.drawer=null,k.backend=null,k.peakCache=null,typeof k.params.renderer!="function")throw new Error("Renderer parameter is invalid");k.Drawer=k.params.renderer,k.params.backend=="AudioElement"&&(k.params.backend="MediaElement"),(k.params.backend=="WebAudio"||k.params.backend==="MediaElementWebAudio")&&!l.default.prototype.supportsWebAudio.call(null)&&(k.params.backend="MediaElement"),k.Backend=k.backends[k.params.backend],k.initialisedPluginList={},k.isDestroyed=!1,k.isReady=!1;var N=0;return k._onResize=s.debounce(function(){N!=k.drawer.wrapper.clientWidth&&!k.params.scrollParent&&(N=k.drawer.wrapper.clientWidth,k.drawer.fireEvent("redraw"))},typeof k.params.responsive=="number"?k.params.responsive:100),p(k,v(k))}return S(R,[{key:"init",value:function(){return this.registerPlugins(this.params.plugins),this.createDrawer(),this.createBackend(),this.createPeakCache(),this}},{key:"registerPlugins",value:function(k){var N=this;return k.forEach(function(A){return N.addPlugin(A)}),k.forEach(function(A){A.deferInit||N.initPlugin(A.name)}),this.fireEvent("plugins-registered",k),this}},{key:"getActivePlugins",value:function(){return this.initialisedPluginList}},{key:"addPlugin",value:function(k){var N=this;if(!k.name)throw new Error("Plugin does not have a name!");if(!k.instance)throw new Error("Plugin ".concat(k.name," does not have an instance property!"));k.staticProps&&Object.keys(k.staticProps).forEach(function(L){N[L]=k.staticProps[L]});var A=k.instance,D=Object.getOwnPropertyNames(s.Observer.prototype);return D.forEach(function(L){A.prototype[L]=s.Observer.prototype[L]}),this[k.name]=new A(k.params||{},this),this.fireEvent("plugin-added",k.name),this}},{key:"initPlugin",value:function(k){if(!this[k])throw new Error("Plugin ".concat(k," has not been added yet!"));return this.initialisedPluginList[k]&&this.destroyPlugin(k),this[k].init(),this.initialisedPluginList[k]=!0,this.fireEvent("plugin-initialised",k),this}},{key:"destroyPlugin",value:function(k){if(!this[k])throw new Error("Plugin ".concat(k," has not been added yet and cannot be destroyed!"));if(!this.initialisedPluginList[k])throw new Error("Plugin ".concat(k," is not active and cannot be destroyed!"));if(typeof this[k].destroy!="function")throw new Error("Plugin ".concat(k," does not have a destroy function!"));return this[k].destroy(),delete this.initialisedPluginList[k],this.fireEvent("plugin-destroyed",k),this}},{key:"destroyAllPlugins",value:function(){var k=this;Object.keys(this.initialisedPluginList).forEach(function(N){return k.destroyPlugin(N)})}},{key:"createDrawer",value:function(){var k=this;this.drawer=new this.Drawer(this.container,this.params),this.drawer.init(),this.fireEvent("drawer-created",this.drawer),this.params.responsive!==!1&&(window.addEventListener("resize",this._onResize,!0),window.addEventListener("orientationchange",this._onResize,!0)),this.drawer.on("redraw",function(){k.drawBuffer(),k.drawer.progress(k.backend.getPlayedPercents())}),this.drawer.on("click",function(N,A){setTimeout(function(){return k.seekTo(A)},0)}),this.drawer.on("scroll",function(N){k.params.partialRender&&k.drawBuffer(),k.fireEvent("scroll",N)})}},{key:"createBackend",value:function(){var k=this;this.backend&&this.backend.destroy(),this.backend=new this.Backend(this.params),this.backend.init(),this.fireEvent("backend-created",this.backend),this.backend.on("finish",function(){k.drawer.progress(k.backend.getPlayedPercents()),k.fireEvent("finish")}),this.backend.on("play",function(){return k.fireEvent("play")}),this.backend.on("pause",function(){return k.fireEvent("pause")}),this.backend.on("audioprocess",function(N){k.drawer.progress(k.backend.getPlayedPercents()),k.fireEvent("audioprocess",N)}),(this.params.backend==="MediaElement"||this.params.backend==="MediaElementWebAudio")&&(this.backend.on("seek",function(){k.drawer.progress(k.backend.getPlayedPercents())}),this.backend.on("volume",function(){var N=k.getVolume();k.fireEvent("volume",N),k.backend.isMuted!==k.isMuted&&(k.isMuted=k.backend.isMuted,k.fireEvent("mute",k.isMuted))}))}},{key:"createPeakCache",value:function(){this.params.partialRender&&(this.peakCache=new u.default)}},{key:"getDuration",value:function(){return this.backend.getDuration()}},{key:"getCurrentTime",value:function(){return this.backend.getCurrentTime()}},{key:"setCurrentTime",value:function(k){k>=this.getDuration()?this.seekTo(1):this.seekTo(k/this.getDuration())}},{key:"play",value:function(k,N){var A=this;return this.fireEvent("interaction",function(){return A.play(k,N)}),this.backend.play(k,N)}},{key:"setPlayEnd",value:function(k){this.backend.setPlayEnd(k)}},{key:"pause",value:function(){if(!this.backend.isPaused())return this.backend.pause()}},{key:"playPause",value:function(){return this.backend.isPaused()?this.play():this.pause()}},{key:"isPlaying",value:function(){return!this.backend.isPaused()}},{key:"skipBackward",value:function(k){this.skip(-k||-this.params.skipLength)}},{key:"skipForward",value:function(k){this.skip(k||this.params.skipLength)}},{key:"skip",value:function(k){var N=this.getDuration()||1,A=this.getCurrentTime()||0;A=Math.max(0,Math.min(N,A+(k||0))),this.seekAndCenter(A/N)}},{key:"seekAndCenter",value:function(k){this.seekTo(k),this.drawer.recenter(k)}},{key:"seekTo",value:function(k){var N=this;if(typeof k!="number"||!isFinite(k)||k<0||k>1)throw new Error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");this.fireEvent("interaction",function(){return N.seekTo(k)});var A=this.backend.isPaused();A||this.backend.pause();var D=this.params.scrollParent;this.params.scrollParent=!1,this.backend.seekTo(k*this.getDuration()),this.drawer.progress(k),A||this.backend.play(),this.params.scrollParent=D,this.fireEvent("seek",k)}},{key:"stop",value:function(){this.pause(),this.seekTo(0),this.drawer.progress(0)}},{key:"setSinkId",value:function(k){return this.backend.setSinkId(k)}},{key:"setVolume",value:function(k){this.backend.setVolume(k),this.fireEvent("volume",k)}},{key:"getVolume",value:function(){return this.backend.getVolume()}},{key:"setPlaybackRate",value:function(k){this.backend.setPlaybackRate(k)}},{key:"getPlaybackRate",value:function(){return this.backend.getPlaybackRate()}},{key:"toggleMute",value:function(){this.setMute(!this.isMuted)}},{key:"setMute",value:function(k){if(k===this.isMuted){this.fireEvent("mute",this.isMuted);return}this.backend.setMute?(this.backend.setMute(k),this.isMuted=k):k?(this.savedVolume=this.backend.getVolume(),this.backend.setVolume(0),this.isMuted=!0,this.fireEvent("volume",0)):(this.backend.setVolume(this.savedVolume),this.isMuted=!1,this.fireEvent("volume",this.savedVolume)),this.fireEvent("mute",this.isMuted)}},{key:"getMute",value:function(){return this.isMuted}},{key:"getFilters",value:function(){return this.backend.filters||[]}},{key:"toggleScroll",value:function(){this.params.scrollParent=!this.params.scrollParent,this.drawBuffer()}},{key:"toggleInteraction",value:function(){this.params.interact=!this.params.interact}},{key:"getWaveColor",value:function(){return this.params.waveColor}},{key:"setWaveColor",value:function(k){this.params.waveColor=k,this.drawBuffer()}},{key:"getProgressColor",value:function(){return this.params.progressColor}},{key:"setProgressColor",value:function(k){this.params.progressColor=k,this.drawBuffer()}},{key:"getBackgroundColor",value:function(){return this.params.backgroundColor}},{key:"setBackgroundColor",value:function(k){this.params.backgroundColor=k,s.style(this.container,{background:this.params.backgroundColor})}},{key:"getCursorColor",value:function(){return this.params.cursorColor}},{key:"setCursorColor",value:function(k){this.params.cursorColor=k,this.drawer.updateCursor()}},{key:"getHeight",value:function(){return this.params.height}},{key:"setHeight",value:function(k){this.params.height=k,this.drawer.setHeight(k*this.params.pixelRatio),this.drawBuffer()}},{key:"setFilteredChannels",value:function(k){this.params.splitChannelsOptions.filterChannels=k,this.drawBuffer()}},{key:"drawBuffer",value:function(){var k=Math.round(this.getDuration()*this.params.minPxPerSec*this.params.pixelRatio),N=this.drawer.getWidth(),A=k,D=0,L=Math.max(D+N,A);this.params.fillParent&&(!this.params.scrollParent||k<N)&&(A=N,D=0,L=A);var $;if(this.params.partialRender){var V=this.peakCache.addRangeToPeakCache(A,D,L),B;for(B=0;B<V.length;B++)$=this.backend.getPeaks(A,V[B][0],V[B][1]),this.drawer.drawPeaks($,A,V[B][0],V[B][1])}else $=this.backend.getPeaks(A,D,L),this.drawer.drawPeaks($,A,D,L);this.fireEvent("redraw",$,A)}},{key:"zoom",value:function(k){k?(this.params.minPxPerSec=k,this.params.scrollParent=!0):(this.params.minPxPerSec=this.defaultParams.minPxPerSec,this.params.scrollParent=!1),this.drawBuffer(),this.drawer.progress(this.backend.getPlayedPercents()),this.drawer.recenter(this.getCurrentTime()/this.getDuration()),this.fireEvent("zoom",k)}},{key:"loadArrayBuffer",value:function(k){var N=this;this.decodeArrayBuffer(k,function(A){N.isDestroyed||N.loadDecodedBuffer(A)})}},{key:"loadDecodedBuffer",value:function(k){this.backend.load(k),this.drawBuffer(),this.isReady=!0,this.fireEvent("ready")}},{key:"loadBlob",value:function(k){var N=this,A=new FileReader;A.addEventListener("progress",function(D){return N.onProgress(D)}),A.addEventListener("load",function(D){return N.loadArrayBuffer(D.target.result)}),A.addEventListener("error",function(){return N.fireEvent("error","Error reading file")}),A.readAsArrayBuffer(k),this.empty()}},{key:"load",value:function(k,N,A,D){if(!k)throw new Error("url parameter cannot be empty");if(this.empty(),A){var L={"Preload is not 'auto', 'none' or 'metadata'":["auto","metadata","none"].indexOf(A)===-1,"Peaks are not provided":!N,"Backend is not of type 'MediaElement' or 'MediaElementWebAudio'":["MediaElement","MediaElementWebAudio"].indexOf(this.params.backend)===-1,"Url is not of type string":typeof k!="string"},$=Object.keys(L).filter(function(V){return L[V]});$.length&&(console.warn(`Preload parameter of wavesurfer.load will be ignored because:
	- `+$.join(`
	- `)),A=null)}switch(this.params.backend){case"WebAudio":return this.loadBuffer(k,N,D);case"MediaElement":case"MediaElementWebAudio":return this.loadMediaElement(k,N,A,D)}}},{key:"loadBuffer",value:function(k,N,A){var D=this,L=function(V){return V&&D.tmpEvents.push(D.once("ready",V)),D.getArrayBuffer(k,function(B){return D.loadArrayBuffer(B)})};if(N)this.backend.setPeaks(N,A),this.drawBuffer(),this.tmpEvents.push(this.once("interaction",L));else return L()}},{key:"loadMediaElement",value:function(k,N,A,D){var L=this,$=k;if(typeof k=="string")this.backend.load($,this.mediaContainer,N,A);else{var V=k;this.backend.loadElt(V,N),$=V.src}this.tmpEvents.push(this.backend.once("canplay",function(){L.backend.destroyed||(L.drawBuffer(),L.isReady=!0,L.fireEvent("ready"))}),this.backend.once("error",function(B){return L.fireEvent("error",B)})),N&&(this.backend.setPeaks(N,D),this.drawBuffer()),(!N||this.params.forceDecode)&&this.backend.supportsWebAudio()&&this.getArrayBuffer($,function(B){L.decodeArrayBuffer(B,function(Q){L.backend.buffer=Q,L.backend.setPeaks(null),L.drawBuffer(),L.fireEvent("waveform-ready")})})}},{key:"decodeArrayBuffer",value:function(k,N){var A=this;this.arraybuffer=k,this.backend.decodeArrayBuffer(k,function(D){!A.isDestroyed&&A.arraybuffer==k&&(N(D),A.arraybuffer=null)},function(){return A.fireEvent("error","Error decoding audiobuffer")})}},{key:"getArrayBuffer",value:function(k,N){var A=this,D=Object.assign({url:k,responseType:"arraybuffer"},this.params.xhr),L=s.fetchFile(D);return this.currentRequest=L,this.tmpEvents.push(L.on("progress",function($){A.onProgress($)}),L.on("success",function($){N($),A.currentRequest=null}),L.on("error",function($){A.fireEvent("error",$),A.currentRequest=null})),L}},{key:"onProgress",value:function(k){var N;k.lengthComputable?N=k.loaded/k.total:N=k.loaded/(k.loaded+1e6),this.fireEvent("loading",Math.round(N*100),k.target)}},{key:"exportPCM",value:function(k,N,A,D,L){k=k||1024,D=D||0,N=N||1e4,A=A||!1;var $=this.backend.getPeaks(k,D,L),V=[].map.call($,function(B){return Math.round(B*N)/N});return new Promise(function(B,Q){var xe=JSON.stringify(V);A||window.open("data:application/json;charset=utf-8,"+encodeURIComponent(xe)),B(xe)})}},{key:"exportImage",value:function(k,N,A){return k||(k="image/png"),N||(N=1),A||(A="dataURL"),this.drawer.getImage(k,N,A)}},{key:"cancelAjax",value:function(){this.currentRequest&&this.currentRequest.controller&&(this.currentRequest._reader&&this.currentRequest._reader.cancel().catch(function(k){}),this.currentRequest.controller.abort(),this.currentRequest=null)}},{key:"clearTmpEvents",value:function(){this.tmpEvents.forEach(function(k){return k.un()})}},{key:"empty",value:function(){this.backend.isPaused()||(this.stop(),this.backend.disconnectSource()),this.isReady=!1,this.cancelAjax(),this.clearTmpEvents(),this.drawer.progress(0),this.drawer.setWidth(0),this.drawer.drawPeaks({length:this.drawer.getWidth()},0)}},{key:"destroy",value:function(){this.destroyAllPlugins(),this.fireEvent("destroy"),this.cancelAjax(),this.clearTmpEvents(),this.unAll(),this.params.responsive!==!1&&(window.removeEventListener("resize",this._onResize,!0),window.removeEventListener("orientationchange",this._onResize,!0)),this.backend&&this.backend.destroy(),this.drawer&&this.drawer.destroy(),this.isDestroyed=!0,this.isReady=!1,this.arraybuffer=null}}]),R}(s.Observer);r.default=_,_.VERSION="4.1.1",_.util=s,n.exports=r.default},"./src/webaudio.js":function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=l(i("./src/util/index.js"));function o(){if(typeof WeakMap!="function")return null;var S=new WeakMap;return o=function(){return S},S}function l(S){if(S&&S.__esModule)return S;if(S===null||c(S)!=="object"&&typeof S!="function")return{default:S};var _=o();if(_&&_.has(S))return _.get(S);var M={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in S)if(Object.prototype.hasOwnProperty.call(S,R)){var O=T?Object.getOwnPropertyDescriptor(S,R):null;O&&(O.get||O.set)?Object.defineProperty(M,R,O):M[R]=S[R]}return M.default=S,_&&_.set(S,M),M}function c(S){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(M){return typeof M}:c=function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},c(S)}function u(S,_,M){return _ in S?Object.defineProperty(S,_,{value:M,enumerable:!0,configurable:!0,writable:!0}):S[_]=M,S}function d(S,_){if(!(S instanceof _))throw new TypeError("Cannot call a class as a function")}function f(S,_){for(var M=0;M<_.length;M++){var T=_[M];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(S,T.key,T)}}function h(S,_,M){return _&&f(S.prototype,_),M&&f(S,M),S}function g(S,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(_&&_.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),_&&m(S,_)}function m(S,_){return m=Object.setPrototypeOf||function(T,R){return T.__proto__=R,T},m(S,_)}function y(S){var _=p();return function(){var T=v(S),R;if(_){var O=v(this).constructor;R=Reflect.construct(T,arguments,O)}else R=T.apply(this,arguments);return P(this,R)}}function P(S,_){return _&&(c(_)==="object"||typeof _=="function")?_:x(S)}function x(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function v(S){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},v(S)}var C="playing",b="paused",E="finished",j=function(S){g(M,S);var _=y(M);h(M,[{key:"supportsWebAudio",value:function(){return!!(window.AudioContext||window.webkitAudioContext)}},{key:"getAudioContext",value:function(){return window.WaveSurferAudioContext||(window.WaveSurferAudioContext=new(window.AudioContext||window.webkitAudioContext)),window.WaveSurferAudioContext}},{key:"getOfflineAudioContext",value:function(R){return window.WaveSurferOfflineAudioContext||(window.WaveSurferOfflineAudioContext=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,R)),window.WaveSurferOfflineAudioContext}}]);function M(T){var R,O,k;return d(this,M),k=_.call(this),k.audioContext=null,k.offlineAudioContext=null,k.stateBehaviors=(R={},u(R,C,{init:function(){this.addOnAudioProcess()},getPlayedPercents:function(){var A=this.getDuration();return this.getCurrentTime()/A||0},getCurrentTime:function(){return this.startPosition+this.getPlayedTime()}}),u(R,b,{init:function(){this.removeOnAudioProcess()},getPlayedPercents:function(){var A=this.getDuration();return this.getCurrentTime()/A||0},getCurrentTime:function(){return this.startPosition}}),u(R,E,{init:function(){this.removeOnAudioProcess(),this.fireEvent("finish")},getPlayedPercents:function(){return 1},getCurrentTime:function(){return this.getDuration()}}),R),k.params=T,k.ac=T.audioContext||(k.supportsWebAudio()?k.getAudioContext():{}),k.lastPlay=k.ac.currentTime,k.startPosition=0,k.scheduledPause=null,k.states=(O={},u(O,C,Object.create(k.stateBehaviors[C])),u(O,b,Object.create(k.stateBehaviors[b])),u(O,E,Object.create(k.stateBehaviors[E])),O),k.buffer=null,k.filters=[],k.gainNode=null,k.mergedPeaks=null,k.offlineAc=null,k.peaks=null,k.playbackRate=1,k.analyser=null,k.scriptNode=null,k.source=null,k.splitPeaks=[],k.state=null,k.explicitDuration=T.duration,k.destroyed=!1,k}return h(M,[{key:"init",value:function(){this.createVolumeNode(),this.createScriptNode(),this.createAnalyserNode(),this.setState(b),this.setPlaybackRate(this.params.audioRate),this.setLength(0)}},{key:"disconnectFilters",value:function(){this.filters&&(this.filters.forEach(function(R){R&&R.disconnect()}),this.filters=null,this.analyser.connect(this.gainNode))}},{key:"setState",value:function(R){this.state!==this.states[R]&&(this.state=this.states[R],this.state.init.call(this))}},{key:"setFilter",value:function(){for(var R=arguments.length,O=new Array(R),k=0;k<R;k++)O[k]=arguments[k];this.setFilters(O)}},{key:"setFilters",value:function(R){this.disconnectFilters(),R&&R.length&&(this.filters=R,this.analyser.disconnect(),R.reduce(function(O,k){return O.connect(k),k},this.analyser).connect(this.gainNode))}},{key:"createScriptNode",value:function(){this.params.audioScriptProcessor?this.scriptNode=this.params.audioScriptProcessor:this.ac.createScriptProcessor?this.scriptNode=this.ac.createScriptProcessor(M.scriptBufferSize):this.scriptNode=this.ac.createJavaScriptNode(M.scriptBufferSize),this.scriptNode.connect(this.ac.destination)}},{key:"addOnAudioProcess",value:function(){var R=this;this.scriptNode.onaudioprocess=function(){var O=R.getCurrentTime();O>=R.getDuration()?(R.setState(E),R.fireEvent("pause")):O>=R.scheduledPause?R.pause():R.state===R.states[C]&&R.fireEvent("audioprocess",O)}}},{key:"removeOnAudioProcess",value:function(){this.scriptNode.onaudioprocess=function(){}}},{key:"createAnalyserNode",value:function(){this.analyser=this.ac.createAnalyser(),this.analyser.connect(this.gainNode)}},{key:"createVolumeNode",value:function(){this.ac.createGain?this.gainNode=this.ac.createGain():this.gainNode=this.ac.createGainNode(),this.gainNode.connect(this.ac.destination)}},{key:"setSinkId",value:function(R){if(R){var O=new window.Audio;if(!O.setSinkId)return Promise.reject(new Error("setSinkId is not supported in your browser"));O.autoplay=!0;var k=this.ac.createMediaStreamDestination();return this.gainNode.disconnect(),this.gainNode.connect(k),O.srcObject=k.stream,O.setSinkId(R)}else return Promise.reject(new Error("Invalid deviceId: "+R))}},{key:"setVolume",value:function(R){this.gainNode.gain.setValueAtTime(R,this.ac.currentTime)}},{key:"getVolume",value:function(){return this.gainNode.gain.value}},{key:"decodeArrayBuffer",value:function(R,O,k){this.offlineAc||(this.offlineAc=this.getOfflineAudioContext(this.ac&&this.ac.sampleRate?this.ac.sampleRate:44100)),this.offlineAc.decodeAudioData(R,function(N){return O(N)},k)}},{key:"setPeaks",value:function(R,O){O!=null&&(this.explicitDuration=O),this.peaks=R}},{key:"setLength",value:function(R){if(!(this.mergedPeaks&&R==2*this.mergedPeaks.length-1+2)){this.splitPeaks=[],this.mergedPeaks=[];var O=this.buffer?this.buffer.numberOfChannels:1,k;for(k=0;k<O;k++)this.splitPeaks[k]=[],this.splitPeaks[k][2*(R-1)]=0,this.splitPeaks[k][2*(R-1)+1]=0;this.mergedPeaks[2*(R-1)]=0,this.mergedPeaks[2*(R-1)+1]=0}}},{key:"getPeaks",value:function(R,O,k){if(this.peaks)return this.peaks;if(!this.buffer)return[];if(O=O||0,k=k||R-1,this.setLength(R),!this.buffer)return this.params.splitChannels?this.splitPeaks:this.mergedPeaks;if(!this.buffer.length){var N=this.createBuffer(1,4096,this.sampleRate);this.buffer=N.buffer}var A=this.buffer.length/R,D=~~(A/10)||1,L=this.buffer.numberOfChannels,$;for($=0;$<L;$++){var V=this.splitPeaks[$],B=this.buffer.getChannelData($),Q=void 0;for(Q=O;Q<=k;Q++){var xe=~~(Q*A),de=~~(xe+A),pe=B[xe],ge=pe,we=void 0;for(we=xe;we<de;we+=D){var q=B[we];q>ge&&(ge=q),q<pe&&(pe=q)}V[2*Q]=ge,V[2*Q+1]=pe,($==0||ge>this.mergedPeaks[2*Q])&&(this.mergedPeaks[2*Q]=ge),($==0||pe<this.mergedPeaks[2*Q+1])&&(this.mergedPeaks[2*Q+1]=pe)}}return this.params.splitChannels?this.splitPeaks:this.mergedPeaks}},{key:"getPlayedPercents",value:function(){return this.state.getPlayedPercents.call(this)}},{key:"disconnectSource",value:function(){this.source&&this.source.disconnect()}},{key:"destroyWebAudio",value:function(){this.disconnectFilters(),this.disconnectSource(),this.gainNode.disconnect(),this.scriptNode.disconnect(),this.analyser.disconnect(),this.params.closeAudioContext&&(typeof this.ac.close=="function"&&this.ac.state!="closed"&&this.ac.close(),this.ac=null,this.params.audioContext?this.params.audioContext=null:window.WaveSurferAudioContext=null,window.WaveSurferOfflineAudioContext=null)}},{key:"destroy",value:function(){this.isPaused()||this.pause(),this.unAll(),this.buffer=null,this.destroyed=!0,this.destroyWebAudio()}},{key:"load",value:function(R){this.startPosition=0,this.lastPlay=this.ac.currentTime,this.buffer=R,this.createSource()}},{key:"createSource",value:function(){this.disconnectSource(),this.source=this.ac.createBufferSource(),this.source.start=this.source.start||this.source.noteGrainOn,this.source.stop=this.source.stop||this.source.noteOff,this.source.playbackRate.setValueAtTime(this.playbackRate,this.ac.currentTime),this.source.buffer=this.buffer,this.source.connect(this.analyser)}},{key:"resumeAudioContext",value:function(){this.ac.state=="suspended"&&this.ac.resume&&this.ac.resume()}},{key:"isPaused",value:function(){return this.state!==this.states[C]}},{key:"getDuration",value:function(){return this.explicitDuration?this.explicitDuration:this.buffer?this.buffer.duration:0}},{key:"seekTo",value:function(R,O){if(this.buffer)return this.scheduledPause=null,R==null&&(R=this.getCurrentTime(),R>=this.getDuration()&&(R=0)),O==null&&(O=this.getDuration()),this.startPosition=R,this.lastPlay=this.ac.currentTime,this.state===this.states[E]&&this.setState(b),{start:R,end:O}}},{key:"getPlayedTime",value:function(){return(this.ac.currentTime-this.lastPlay)*this.playbackRate}},{key:"play",value:function(R,O){if(this.buffer){this.createSource();var k=this.seekTo(R,O);R=k.start,O=k.end,this.scheduledPause=O,this.source.start(0,R),this.resumeAudioContext(),this.setState(C),this.fireEvent("play")}}},{key:"pause",value:function(){this.scheduledPause=null,this.startPosition+=this.getPlayedTime(),this.source&&this.source.stop(0),this.setState(b),this.fireEvent("pause")}},{key:"getCurrentTime",value:function(){return this.state.getCurrentTime.call(this)}},{key:"getPlaybackRate",value:function(){return this.playbackRate}},{key:"setPlaybackRate",value:function(R){R=R||1,this.isPaused()?this.playbackRate=R:(this.pause(),this.playbackRate=R,this.play())}},{key:"setPlayEnd",value:function(R){this.scheduledPause=R}}]),M}(s.Observer);r.default=j,j.scriptBufferSize=256,n.exports=r.default}})})}),Rh=OH(NH);class Fg{static create(t){return{name:"microphone",deferInit:t&&t.deferInit?t.deferInit:!1,params:t,instance:Fg}}constructor(t,n){this.params=t,this.wavesurfer=n,this.active=!1,this.paused=!1,this.browser=this.detectBrowser(),this.reloadBufferFunction=i=>this.reloadBuffer(i);const r=(i,s,o)=>{const l=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return l?new Promise((c,u)=>{l.call(navigator,i,c,u)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))};navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=r),this.constraints=this.params.constraints||{video:!1,audio:!0},this.bufferSize=this.params.bufferSize||4096,this.numberOfInputChannels=this.params.numberOfInputChannels||1,this.numberOfOutputChannels=this.params.numberOfOutputChannels||1,this._onBackendCreated=()=>{this.micContext=this.wavesurfer.backend.getAudioContext()}}init(){this.wavesurfer.on("backend-created",this._onBackendCreated),this.wavesurfer.backend&&this._onBackendCreated()}destroy(){this.paused=!0,this.wavesurfer.un("backend-created",this._onBackendCreated),this.stop()}start(){navigator.mediaDevices.getUserMedia(this.constraints).then(t=>this.gotStream(t)).catch(t=>this.deviceError(t))}togglePlay(){this.active?(this.paused=!this.paused,this.paused?this.pause():this.play()):this.start()}play(){this.paused=!1,this.connect()}pause(){this.paused=!0,this.disconnect()}stop(){this.active&&(this.stopDevice(),this.wavesurfer.empty())}stopDevice(){if(this.active=!1,this.disconnect(),this.stream){if((this.browser.browser==="chrome"&&this.browser.version>=45||this.browser.browser==="firefox"&&this.browser.version>=44||this.browser.browser==="edge"||this.browser.browser==="safari")&&this.stream.getTracks){this.stream.getTracks().forEach(t=>t.stop());return}this.stream.stop()}}connect(){this.stream!==void 0&&(this.browser.browser==="edge"&&(this.localAudioBuffer=this.micContext.createBuffer(this.numberOfInputChannels,this.bufferSize,this.micContext.sampleRate)),this.mediaStreamSource=this.micContext.createMediaStreamSource(this.stream),this.levelChecker=this.micContext.createScriptProcessor(this.bufferSize,this.numberOfInputChannels,this.numberOfOutputChannels),this.mediaStreamSource.connect(this.levelChecker),this.levelChecker.connect(this.micContext.destination),this.levelChecker.onaudioprocess=this.reloadBufferFunction)}disconnect(){this.mediaStreamSource!==void 0&&this.mediaStreamSource.disconnect(),this.levelChecker!==void 0&&(this.levelChecker.disconnect(),this.levelChecker.onaudioprocess=void 0),this.localAudioBuffer!==void 0&&(this.localAudioBuffer=void 0)}reloadBuffer(t){if(!this.paused)if(this.wavesurfer.empty(),this.browser.browser==="edge"){let n,r;for(n=0,r=Math.min(this.localAudioBuffer.numberOfChannels,t.inputBuffer.numberOfChannels);n<r;n++)this.localAudioBuffer.getChannelData(n).set(t.inputBuffer.getChannelData(n));this.wavesurfer.loadDecodedBuffer(this.localAudioBuffer)}else this.wavesurfer.loadDecodedBuffer(t.inputBuffer)}gotStream(t){this.stream=t,this.active=!0,this.play(),this.fireEvent("deviceReady",t)}deviceError(t){this.fireEvent("deviceError",t)}extractVersion(t,n,r){const i=t.match(n);return i&&i.length>=r&&parseInt(i[r],10)}detectBrowser(){const t={};return t.browser=null,t.version=null,t.minVersion=null,typeof window>"u"||!window.navigator?(t.browser="Not a supported browser.",t):navigator.mozGetUserMedia?(t.browser="firefox",t.version=this.extractVersion(navigator.userAgent,/Firefox\/(\d+)\./,1),t.minVersion=31,t):navigator.webkitGetUserMedia?(t.browser="chrome",t.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/(\d+)\./,2),t.minVersion=38,t):navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(t.browser="edge",t.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),t.minVersion=10547,t):window.RTCPeerConnection&&navigator.userAgent.match(/AppleWebKit\/(\d+)\./)?(t.browser="safari",t.minVersion=11,t.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/(\d+)\./,1),t):(t.browser="Not a supported browser.",t)}}class Pw{constructor(t,n,r){this.wavesurfer=r,this.wrapper=r.drawer.wrapper,this.util=r.util,this.style=this.util.style,this.regionsUtil=n,this.id=t.id==null?r.util.getId():t.id,this.start=Number(t.start)||0,this.end=t.end==null?this.start+4/this.wrapper.scrollWidth*this.wavesurfer.getDuration():Number(t.end),this.resize=t.resize===void 0?!0:!!t.resize,this.drag=t.drag===void 0?!0:!!t.drag,this.isResizing=!1,this.isDragging=!1,this.loop=!!t.loop,this.color=t.color||"rgba(0, 0, 0, 0.1)",this.handleStyle=t.handleStyle||{left:{},right:{}},this.handleLeftEl=null,this.handleRightEl=null,this.data=t.data||{},this.attributes=t.attributes||{},this.maxLength=t.maxLength,this.minLength=t.minLength,this._onRedraw=()=>this.updateRender(),this.scroll=t.scroll!==!1&&r.params.scrollParent,this.scrollSpeed=t.scrollSpeed||1,this.scrollThreshold=t.scrollThreshold||10,this.preventContextMenu=t.preventContextMenu===void 0?!1:!!t.preventContextMenu;let i=t.channelIdx==null?-1:parseInt(t.channelIdx);if(this.regionHeight="100%",this.marginTop="0px",i!==-1){let s=this.wavesurfer.backend.buffer!=null?this.wavesurfer.backend.buffer.numberOfChannels:-1;s>=0&&i<s&&(this.regionHeight=Math.floor(1/s*100)+"%",this.marginTop=this.wavesurfer.getHeight()*i+"px")}this.formatTimeCallback=t.formatTimeCallback,this.edgeScrollWidth=t.edgeScrollWidth,this.bindInOut(),this.render(),this.wavesurfer.on("zoom",this._onRedraw),this.wavesurfer.on("redraw",this._onRedraw),this.wavesurfer.fireEvent("region-created",this)}update(t){t.start!=null&&(this.start=Number(t.start)),t.end!=null&&(this.end=Number(t.end)),t.loop!=null&&(this.loop=!!t.loop),t.color!=null&&(this.color=t.color),t.handleStyle!=null&&(this.handleStyle=t.handleStyle),t.data!=null&&(this.data=t.data),t.resize!=null&&(this.resize=!!t.resize,this.updateHandlesResize(this.resize)),t.drag!=null&&(this.drag=!!t.drag),t.maxLength!=null&&(this.maxLength=Number(t.maxLength)),t.minLength!=null&&(this.minLength=Number(t.minLength)),t.attributes!=null&&(this.attributes=t.attributes),this.updateRender(),this.fireEvent("update"),this.wavesurfer.fireEvent("region-updated",this)}remove(){this.element&&(this.wrapper.removeChild(this.element),this.element=null,this.fireEvent("remove"),this.wavesurfer.un("zoom",this._onRedraw),this.wavesurfer.un("redraw",this._onRedraw),this.wavesurfer.fireEvent("region-removed",this))}play(t){const n=t||this.start;this.wavesurfer.play(n,this.end),this.fireEvent("play"),this.wavesurfer.fireEvent("region-play",this)}playLoop(t){this.loop=!0,this.play(t)}setLoop(t){this.loop=t}render(){const t=document.createElement("region");t.className="wavesurfer-region",t.title=this.formatTime(this.start,this.end),t.setAttribute("data-id",this.id);for(const n in this.attributes)t.setAttribute("data-region-"+n,this.attributes[n]);if(this.style(t,{position:"absolute",zIndex:2,height:this.regionHeight,top:this.marginTop}),this.resize){this.handleLeftEl=t.appendChild(document.createElement("handle")),this.handleRightEl=t.appendChild(document.createElement("handle")),this.handleLeftEl.className="wavesurfer-handle wavesurfer-handle-start",this.handleRightEl.className="wavesurfer-handle wavesurfer-handle-end";const n={cursor:"col-resize",position:"absolute",top:"0px",width:"2px",height:"100%",backgroundColor:"rgba(0, 0, 0, 1)"},r=this.handleStyle.left!=="none"?Object.assign({left:"0px"},n,this.handleStyle.left):null,i=this.handleStyle.right!=="none"?Object.assign({right:"0px"},n,this.handleStyle.right):null;r&&this.style(this.handleLeftEl,r),i&&this.style(this.handleRightEl,i)}this.element=this.wrapper.appendChild(t),this.updateRender(),this.bindEvents(t)}formatTime(t,n){return this.formatTimeCallback?this.formatTimeCallback(t,n):(t==n?[t]:[t,n]).map(r=>[Math.floor(r%3600/60),("00"+Math.floor(r%60)).slice(-2)].join(":")).join("-")}getWidth(){return this.wavesurfer.drawer.width/this.wavesurfer.params.pixelRatio}updateRender(){const t=this.wavesurfer.getDuration(),n=this.getWidth();var r=this.start,i=this.end;if(r<0&&(r=0,i=i-r),i>t&&(i=t,r=t-(i-r)),this.minLength!=null&&(i=Math.max(r+this.minLength,i)),this.maxLength!=null&&(i=Math.min(r+this.maxLength,i)),this.element!=null){const s=Math.round(r/t*n),o=Math.round(i/t*n)-s;this.style(this.element,{left:s+"px",width:o+"px",backgroundColor:this.color,cursor:this.drag?"move":"default"});for(const l in this.attributes)this.element.setAttribute("data-region-"+l,this.attributes[l]);this.element.title=this.formatTime(this.start,this.end)}}bindInOut(){this.firedIn=!1,this.firedOut=!1;const t=n=>{let r=Math.round(this.start*10)/10,i=Math.round(this.end*10)/10;n=Math.round(n*10)/10,!this.firedOut&&this.firedIn&&(r>n||i<=n)&&(this.firedOut=!0,this.firedIn=!1,this.fireEvent("out"),this.wavesurfer.fireEvent("region-out",this)),!this.firedIn&&r<=n&&i>n&&(this.firedIn=!0,this.firedOut=!1,this.fireEvent("in"),this.wavesurfer.fireEvent("region-in",this))};this.wavesurfer.backend.on("audioprocess",t),this.on("remove",()=>{this.wavesurfer.backend.un("audioprocess",t)}),this.on("out",()=>{if(this.loop){const n=this.wavesurfer.getCurrentTime();n>=this.start&&n<=this.end&&this.wavesurfer.play(this.start)}})}bindEvents(){const t=this.preventContextMenu;this.element.addEventListener("mouseenter",n=>{this.fireEvent("mouseenter",n),this.wavesurfer.fireEvent("region-mouseenter",this,n)}),this.element.addEventListener("mouseleave",n=>{this.fireEvent("mouseleave",n),this.wavesurfer.fireEvent("region-mouseleave",this,n)}),this.element.addEventListener("click",n=>{n.preventDefault(),this.fireEvent("click",n),this.wavesurfer.fireEvent("region-click",this,n)}),this.element.addEventListener("dblclick",n=>{n.stopPropagation(),n.preventDefault(),this.fireEvent("dblclick",n),this.wavesurfer.fireEvent("region-dblclick",this,n)}),this.element.addEventListener("contextmenu",n=>{t&&n.preventDefault(),this.fireEvent("contextmenu",n),this.wavesurfer.fireEvent("region-contextmenu",this,n)}),(this.drag||this.resize)&&this.bindDragEvents()}bindDragEvents(){const t=this.wavesurfer.drawer.container,n=this.scrollSpeed;this.scrollThreshold;let r,i,s,o,l,c=!1,u,d,f,h;const g=x=>{const p=this.wavesurfer.getDuration();if(!u||!s&&!l)return;const v=x.clientX;let C=0,b=0,E=0,j=this.regionsUtil.getRegionSnapToGridValue(this.wavesurfer.drawer.handleEvent(x)*p);if(s)u===-1?(b=f*this.wavesurfer.params.minPxPerSec,C=v-d.left):(b=h*this.wavesurfer.params.minPxPerSec,C=d.right-v);else{let M=this.minLength;M||(M=0),l==="start"?(j>this.end-M&&(j=this.end-M,E=n*u),j<0&&(j=0)):l==="end"&&(j<this.start+M&&(j=this.start+M,E=n*u),j>p&&(j=p))}if(u===-1){if(Math.round(this.wrapper.scrollLeft)===0||Math.round(this.wrapper.scrollLeft-b+C)<=0)return}else if(Math.round(this.wrapper.scrollLeft)===o||Math.round(this.wrapper.scrollLeft+b-C)>=o)return;let S=this.wrapper.scrollLeft-E+n*u;if(u===-1){const M=Math.max(0+b-C,S);this.wrapper.scrollLeft=S=M}else{const M=Math.min(o-b+C,S);this.wrapper.scrollLeft=S=M}const _=j-r;r=j,s?this.onDrag(_):this.onResize(_,l),window.requestAnimationFrame(()=>{g(x)})},m=x=>{const p=this.wavesurfer.getDuration();x.touches&&x.touches.length>1||(i=x.targetTouches?x.targetTouches[0].identifier:null,(this.drag||this.resize)&&x.stopPropagation(),r=this.regionsUtil.getRegionSnapToGridValue(this.wavesurfer.drawer.handleEvent(x,!0)*p),f=r-this.start,h=this.end-r,o=this.wrapper.scrollWidth-this.wrapper.clientWidth,d=this.wrapper.getBoundingClientRect(),this.isResizing=!1,this.isDragging=!1,x.target.tagName.toLowerCase()==="handle"?(this.isResizing=!0,l=x.target.classList.contains("wavesurfer-handle-start")?"start":"end"):(this.isDragging=!0,s=!0,l=!1))},y=x=>{x.touches&&x.touches.length>1||((s||l)&&(this.isDragging=!1,this.isResizing=!1,s=!1,u=null,l=!1),c&&(c=!1,this.util.preventClick(),this.fireEvent("update-end",x),this.wavesurfer.fireEvent("region-update-end",this,x)))},P=x=>{const p=this.wavesurfer.getDuration();if(x.touches&&x.touches.length>1||x.targetTouches&&x.targetTouches[0].identifier!=i||!s&&!l)return;let v=this.regionsUtil.getRegionSnapToGridValue(this.wavesurfer.drawer.handleEvent(x)*p);if(s){const b=this.wavesurfer.getDuration();v>b-h&&(v=b-h),v-f<0&&(v=f)}if(l){let b=this.minLength;b||(b=0),l==="start"?(v>this.end-b&&(v=this.end-b),v<0&&(v=0)):l==="end"&&(v<this.start+b&&(v=this.start+b),v>p&&(v=p))}let C=v-r;if(r=v,this.drag&&s&&(c=c||!!C,this.onDrag(C)),this.resize&&l&&(c=c||!!C,this.onResize(C,l)),this.scroll&&t.clientWidth<this.wrapper.scrollWidth){if(s){let b=x.clientX;b<d.left+this.edgeScrollWidth?u=-1:b>d.right-this.edgeScrollWidth?u=1:u=null}else{let b=x.clientX;b<d.left+this.edgeScrollWidth?u=-1:b>d.right-this.edgeScrollWidth?u=1:u=null}u&&g(x)}};this.element.addEventListener("mousedown",m),this.element.addEventListener("touchstart",m),document.body.addEventListener("mousemove",P),document.body.addEventListener("touchmove",P),document.body.addEventListener("mouseup",y),document.body.addEventListener("touchend",y),this.on("remove",()=>{document.body.removeEventListener("mouseup",y),document.body.removeEventListener("touchend",y),document.body.removeEventListener("mousemove",P),document.body.removeEventListener("touchmove",P)}),this.wavesurfer.on("destroy",()=>{document.body.removeEventListener("mouseup",y),document.body.removeEventListener("touchend",y)})}onDrag(t){const n=this.wavesurfer.getDuration();this.end+t>n&&(t=n-this.end),this.start+t<0&&(t=this.start*-1),this.update({start:this.start+t,end:this.end+t})}onResize(t,n){const r=this.wavesurfer.getDuration();n==="start"?(t>0&&this.end-(this.start+t)<this.minLength&&(t=this.end-this.minLength-this.start),t<0&&this.start+t<0&&(t=this.start*-1),this.update({start:Math.min(this.start+t,this.end),end:Math.max(this.start+t,this.end)})):(t<0&&this.end+t-this.start<this.minLength&&(t=this.start+this.minLength-this.end),t>0&&this.end+t>r&&(t=r-this.end),this.update({start:Math.min(this.end+t,this.start),end:Math.max(this.end+t,this.start)}))}updateHandlesResize(t){const n=t?"col-resize":"auto";this.handleLeftEl&&this.style(this.handleLeftEl,{cursor:n}),this.handleRightEl&&this.style(this.handleRightEl,{cursor:n})}}class Vg{static create(t){return{name:"regions",deferInit:t&&t.deferInit?t.deferInit:!1,params:t,staticProps:{addRegion(n){return this.initialisedPluginList.regions||this.initPlugin("regions"),this.regions.add(n)},clearRegions(){this.regions&&this.regions.clear()},enableDragSelection(n){this.initialisedPluginList.regions||this.initPlugin("regions"),this.regions.enableDragSelection(n)},disableDragSelection(){this.regions.disableDragSelection()}},instance:Vg}}constructor(t,n){this.params=t,this.wavesurfer=n,this.util={...n.util,getRegionSnapToGridValue:i=>this.getRegionSnapToGridValue(i,t)},this.maxRegions=t.maxRegions,this.regionsMinLength=t.regionsMinLength||null,Object.getOwnPropertyNames(this.util.Observer.prototype).forEach(i=>{Pw.prototype[i]=this.util.Observer.prototype[i]}),this.wavesurfer.Region=Pw,this._onBackendCreated=()=>{this.wrapper=this.wavesurfer.drawer.wrapper,this.params.regions&&this.params.regions.forEach(i=>{i.edgeScrollWidth=this.params.edgeScrollWidth||this.wrapper.clientWidth*.05,this.add(i)})},this.list={},this._onReady=()=>{this.wrapper=this.wavesurfer.drawer.wrapper,this.params.dragSelection&&this.enableDragSelection(this.params),Object.keys(this.list).forEach(i=>{this.list[i].updateRender()})}}init(){this.wavesurfer.isReady?(this._onBackendCreated(),this._onReady()):(this.wavesurfer.once("ready",this._onReady),this.wavesurfer.once("backend-created",this._onBackendCreated))}destroy(){this.wavesurfer.un("ready",this._onReady),this.wavesurfer.un("backend-created",this._onBackendCreated),this.disableDragSelection(),this.clear()}wouldExceedMaxRegions(){return this.maxRegions&&Object.keys(this.list).length>=this.maxRegions}add(t){if(this.wouldExceedMaxRegions())return null;!t.minLength&&this.regionsMinLength&&(t={...t,minLength:this.regionsMinLength});const n=new this.wavesurfer.Region(t,this.util,this.wavesurfer);return this.list[n.id]=n,n.on("remove",()=>{delete this.list[n.id]}),n}clear(){Object.keys(this.list).forEach(t=>{this.list[t].remove()})}enableDragSelection(t){this.disableDragSelection();const n=t.slop||2,r=this.wavesurfer.drawer.container,i=t.scroll!==!1&&this.wavesurfer.params.scrollParent,s=t.scrollSpeed||1,o=t.scrollThreshold||10;let l,c=this.wavesurfer.getDuration(),u,d,f,h,g=0,m,y;const P=C=>{if(!f||!m)return;let b=this.wrapper.scrollLeft+s*m;this.wrapper.scrollLeft=b=Math.min(u,Math.max(0,b));const E=this.wavesurfer.drawer.handleEvent(C);f.update({start:Math.min(E*c,d*c),end:Math.max(E*c,d*c)}),b<u&&b>0&&window.requestAnimationFrame(()=>{P(C)})},x=C=>{C.touches&&C.touches.length>1||(c=this.wavesurfer.getDuration(),h=C.targetTouches?C.targetTouches[0].identifier:null,u=this.wrapper.scrollWidth-this.wrapper.clientWidth,y=this.wrapper.getBoundingClientRect(),l=!0,d=this.wavesurfer.drawer.handleEvent(C,!0),f=null,m=null)};this.wrapper.addEventListener("mousedown",x),this.wrapper.addEventListener("touchstart",x),this.on("disable-drag-selection",()=>{this.wrapper.removeEventListener("touchstart",x),this.wrapper.removeEventListener("mousedown",x)});const p=C=>{C.touches&&C.touches.length>1||(l=!1,g=0,m=null,f&&(this.util.preventClick(),f.fireEvent("update-end",C),this.wavesurfer.fireEvent("region-update-end",f,C)),f=null)};this.wrapper.addEventListener("mouseup",p),this.wrapper.addEventListener("touchend",p),document.body.addEventListener("mouseup",p),document.body.addEventListener("touchend",p),this.on("disable-drag-selection",()=>{document.body.removeEventListener("mouseup",p),document.body.removeEventListener("touchend",p),this.wrapper.removeEventListener("touchend",p),this.wrapper.removeEventListener("mouseup",p)});const v=C=>{if(!l||++g<=n||C.touches&&C.touches.length>1||C.targetTouches&&C.targetTouches[0].identifier!=h||!f&&(f=this.add(t||{}),!f))return;const b=this.wavesurfer.drawer.handleEvent(C),E=this.wavesurfer.regions.util.getRegionSnapToGridValue(d*c),j=this.wavesurfer.regions.util.getRegionSnapToGridValue(b*c);if(f.update({start:Math.min(j,E),end:Math.max(j,E)}),i&&r.clientWidth<this.wrapper.scrollWidth){const S=C.clientX-y.left;S<=o?m=-1:S>=y.right-o?m=1:m=null,m&&P(C)}};this.wrapper.addEventListener("mousemove",v),this.wrapper.addEventListener("touchmove",v),this.on("disable-drag-selection",()=>{this.wrapper.removeEventListener("touchmove",v),this.wrapper.removeEventListener("mousemove",v)}),this.wavesurfer.on("region-created",C=>{this.regionsMinLength&&(C.minLength=this.regionsMinLength)})}disableDragSelection(){this.fireEvent("disable-drag-selection")}getCurrentRegion(){const t=this.wavesurfer.getCurrentTime();let n=null;return Object.keys(this.list).forEach(r=>{const i=this.list[r];i.start<=t&&i.end>=t&&(!n||i.end-i.start<n.end-n.start)&&(n=i)}),n}getRegionSnapToGridValue(t,n){if(n.snapToGridInterval){const r=n.snapToGridOffset||0;return Math.round((t-r)/n.snapToGridInterval)*n.snapToGridInterval+r}return t}}function Ew(e,t,n,r){this.bufferSize=e,this.sampleRate=t,this.bandwidth=2/e*(t/2),this.sinTable=new Float32Array(e),this.cosTable=new Float32Array(e),this.windowValues=new Float32Array(e),this.reverseTable=new Uint32Array(e),this.peakBand=0,this.peak=0;var o;switch(n){case"bartlett":for(o=0;o<e;o++)this.windowValues[o]=2/(e-1)*((e-1)/2-Math.abs(o-(e-1)/2));break;case"bartlettHann":for(o=0;o<e;o++)this.windowValues[o]=.62-.48*Math.abs(o/(e-1)-.5)-.38*Math.cos(Math.PI*2*o/(e-1));break;case"blackman":for(r=r||.16,o=0;o<e;o++)this.windowValues[o]=(1-r)/2-.5*Math.cos(Math.PI*2*o/(e-1))+r/2*Math.cos(4*Math.PI*o/(e-1));break;case"cosine":for(o=0;o<e;o++)this.windowValues[o]=Math.cos(Math.PI*o/(e-1)-Math.PI/2);break;case"gauss":for(r=r||.25,o=0;o<e;o++)this.windowValues[o]=Math.pow(Math.E,-.5*Math.pow((o-(e-1)/2)/(r*(e-1)/2),2));break;case"hamming":for(o=0;o<e;o++)this.windowValues[o]=.54-.46*Math.cos(Math.PI*2*o/(e-1));break;case"hann":case void 0:for(o=0;o<e;o++)this.windowValues[o]=.5*(1-Math.cos(Math.PI*2*o/(e-1)));break;case"lanczoz":for(o=0;o<e;o++)this.windowValues[o]=Math.sin(Math.PI*(2*o/(e-1)-1))/(Math.PI*(2*o/(e-1)-1));break;case"rectangular":for(o=0;o<e;o++)this.windowValues[o]=1;break;case"triangular":for(o=0;o<e;o++)this.windowValues[o]=2/e*(e/2-Math.abs(o-(e-1)/2));break;default:throw Error("No such window function '"+n+"'")}for(var i=1,s=e>>1,o;i<e;){for(o=0;o<i;o++)this.reverseTable[o+i]=this.reverseTable[o]+s;i=i<<1,s=s>>1}for(o=0;o<e;o++)this.sinTable[o]=Math.sin(-Math.PI/o),this.cosTable[o]=Math.cos(-Math.PI/o);this.calculateSpectrum=function(l){var c=this.bufferSize,u=this.cosTable,d=this.sinTable,f=this.reverseTable,h=new Float32Array(c),g=new Float32Array(c),m=2/this.bufferSize,y=Math.sqrt,P,x,p,v=new Float32Array(c/2),C=Math.floor(Math.log(c)/Math.LN2);if(Math.pow(2,C)!==c)throw"Invalid buffer size, must be a power of 2.";if(c!==l.length)throw"Supplied buffer is not the same size as defined FFT. FFT Size: "+c+" Buffer Size: "+l.length;for(var b=1,E,j,S,_,M,T,R,O,k=0;k<c;k++)h[k]=l[f[k]]*this.windowValues[f[k]],g[k]=0;for(;b<c;){E=u[b],j=d[b],S=1,_=0;for(var N=0;N<b;N++){for(var k=N;k<c;)M=k+b,T=S*h[M]-_*g[M],R=S*g[M]+_*h[M],h[M]=h[k]-T,g[M]=g[k]-R,h[k]+=T,g[k]+=R,k+=b<<1;O=S,S=O*E-_*j,_=O*j+_*E}b=b<<1}for(var k=0,A=c/2;k<A;k++)P=h[k],x=g[k],p=m*y(P*P+x*x),p>this.peak&&(this.peakBand=k,this.peak=p),v[k]=p;return v}}class Hg{static create(t){return{name:"spectrogram",deferInit:t&&t.deferInit?t.deferInit:!1,params:t,staticProps:{FFT:Ew},instance:Hg}}constructor(t,n){this.params=t,this.wavesurfer=n,this.util=n.util,this.frequenciesDataUrl=t.frequenciesDataUrl,this._onScroll=r=>{this.updateScroll(r)},this._onRender=()=>{this.render()},this._onWrapperClick=r=>{this._wrapperClickHandler(r)},this._onReady=()=>{const r=this.drawer=n.drawer;if(this.container=typeof t.container=="string"?document.querySelector(t.container):t.container,!this.container)throw Error("No container for WaveSurfer spectrogram");if(t.colorMap){if(t.colorMap.length<256)throw new Error("Colormap must contain 256 elements");for(let i=0;i<t.colorMap.length;i++)if(t.colorMap[i].length!==4)throw new Error("ColorMap entries must contain 4 values");this.colorMap=t.colorMap}else{this.colorMap=[];for(let i=0;i<256;i++){const s=(255-i)/256;this.colorMap.push([s,s,s,1])}}this.width=r.width,this.pixelRatio=this.params.pixelRatio||n.params.pixelRatio,this.fftSamples=this.params.fftSamples||n.params.fftSamples||512,this.height=this.fftSamples/2,this.noverlap=t.noverlap,this.windowFunc=t.windowFunc,this.alpha=t.alpha,this.createWrapper(),this.createCanvas(),this.render(),r.wrapper.addEventListener("scroll",this._onScroll),n.on("redraw",this._onRender)}}init(){this.wavesurfer.isReady?this._onReady():this.wavesurfer.once("ready",this._onReady)}destroy(){this.unAll(),this.wavesurfer.un("ready",this._onReady),this.wavesurfer.un("redraw",this._onRender),this.drawer&&this.drawer.wrapper.removeEventListener("scroll",this._onScroll),this.wavesurfer=null,this.util=null,this.params=null,this.wrapper&&(this.wrapper.removeEventListener("click",this._onWrapperClick),this.wrapper.parentNode.removeChild(this.wrapper),this.wrapper=null)}createWrapper(){const t=this.container.querySelector("spectrogram");t&&this.container.removeChild(t);const n=this.wavesurfer.params;if(this.wrapper=document.createElement("spectrogram"),this.params.labels){const r=this.labelsEl=document.createElement("canvas");r.classList.add("spec-labels"),this.drawer.style(r,{left:0,position:"absolute",zIndex:9,height:`${this.height/this.pixelRatio}px`,width:`${55/this.pixelRatio}px`}),this.wrapper.appendChild(r),this.loadLabels("rgba(68,68,68,0.5)","12px","10px","","#fff","#f7f7f7","center","#specLabels")}this.drawer.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:`${this.height/this.pixelRatio}px`}),(n.fillParent||n.scrollParent)&&this.drawer.style(this.wrapper,{width:"100%",overflowX:"hidden",overflowY:"hidden"}),this.container.appendChild(this.wrapper),this.wrapper.addEventListener("click",this._onWrapperClick)}_wrapperClickHandler(t){t.preventDefault();const n="offsetX"in t?t.offsetX:t.layerX;this.fireEvent("click",n/this.width||0)}createCanvas(){const t=this.canvas=this.wrapper.appendChild(document.createElement("canvas"));this.spectrCc=t.getContext("2d"),this.util.style(t,{position:"absolute",zIndex:4})}render(){this.updateCanvasStyle(),this.frequenciesDataUrl?this.loadFrequenciesData(this.frequenciesDataUrl):this.getFrequencies(this.drawSpectrogram)}updateCanvasStyle(){const t=Math.round(this.width/this.pixelRatio)+"px";this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=t}drawSpectrogram(t,n){n.spectrCc,n.wavesurfer.backend.getDuration();const r=n.height,i=n.resample(t),s=n.buffer?2/n.buffer.numberOfChannels:1;let o,l;for(o=0;o<i.length;o++)for(l=0;l<i[o].length;l++){const c=n.colorMap[i[o][l]];n.spectrCc.fillStyle="rgba("+c[0]*256+", "+c[1]*256+", "+c[2]*256+","+c[3]+")",n.spectrCc.fillRect(o,r-l*s,1,s)}}getFrequencies(t){const n=this.fftSamples,r=this.buffer=this.wavesurfer.backend.buffer,i=r.getChannelData(0);r.length;const s=r.sampleRate,o=[];if(!r){this.fireEvent("error","Web Audio buffer is not available");return}let l=this.noverlap;if(!l){const d=r.length/this.canvas.width;l=Math.max(0,Math.round(n-d))}const c=new Ew(n,s,this.windowFunc,this.alpha);let u=0;for(;u+n<i.length;){const d=i.slice(u,u+n),f=c.calculateSpectrum(d),h=new Uint8Array(n/2);let g;for(g=0;g<n/2;g++)h[g]=Math.max(-255,Math.log10(f[g])*45);o.push(h),u+=n-l}t(o,this)}loadFrequenciesData(t){const n=this.util.fetchFile({url:t});return n.on("success",r=>this.drawSpectrogram(JSON.parse(r),this)),n.on("error",r=>this.fireEvent("error",r)),n}freqType(t){return t>=1e3?(t/1e3).toFixed(1):Math.round(t)}unitType(t){return t>=1e3?"KHz":"Hz"}loadLabels(t,n,r,i,s,o,l,c){const u=this.height;t=t||"rgba(68,68,68,0)",n=n||"12px",r=r||"10px",i=i||"Helvetica",s=s||"#fff",o=o||"#fff",l=l||"center";const d=55,f=u||512,h=5*(f/256),g=0,m=(this.wavesurfer.backend.ac.sampleRate/2-g)/h,y=this.labelsEl.getContext("2d");this.labelsEl.height=this.height,this.labelsEl.width=d,y.fillStyle=t,y.fillRect(0,0,d,f),y.fill();let P;for(P=0;P<=h;P++){y.textAlign=l,y.textBaseline="middle";const x=g+m*P;Math.round(x/(this.sampleRate/2)*this.fftSamples);const p=this.freqType(x),v=this.unitType(x),C=2,b=16;let E;P==0?(E=f+P-10,y.fillStyle=o,y.font=r+" "+i,y.fillText(v,b+24,E),y.fillStyle=s,y.font=n+" "+i,y.fillText(p,b,E)):(E=f-P*50+C,y.fillStyle=o,y.font=r+" "+i,y.fillText(v,b+24,E),y.fillStyle=s,y.font=n+" "+i,y.fillText(p,b,E))}}updateScroll(t){this.wrapper&&(this.wrapper.scrollLeft=t.target.scrollLeft)}resample(t){const n=this.width,r=[],i=1/t.length,s=1/n;let o;for(o=0;o<n;o++){const l=new Array(t[0].length);let c;for(c=0;c<t.length;c++){const f=c*i,h=f+i,g=o*s,m=g+s,y=h<=g||m<=f?0:Math.min(Math.max(h,g),Math.max(m,f))-Math.max(Math.min(h,g),Math.min(m,f));let P;if(y>0)for(P=0;P<t[0].length;P++)l[P]==null&&(l[P]=0),l[P]+=y/s*t[c][P]}const u=new Uint8Array(t[0].length);let d;for(d=0;d<t[0].length;d++)u[d]=l[d];r.push(u)}return r}}var AH=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pf=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ja=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wg=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ug=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},LH=function(){Ja(e,null,[{key:"create",value:function(n){return{name:"timeline",deferInit:n&&n.deferInit?n.deferInit:!1,params:n,instance:e}}}]);function e(t,n){var r=this;if(pf(this,e),IH.call(this),this.container=typeof t.container=="string"?document.querySelector(t.container):t.container,!this.container)throw new Error("No container for wavesurfer timeline");this.wavesurfer=n,this.util=n.util,this.params=Object.assign({},{height:20,notchPercentHeight:90,labelPadding:5,unlabeledNotchColor:"#c0c0c0",primaryColor:"#000",secondaryColor:"#c0c0c0",primaryFontColor:"#000",secondaryFontColor:"#000",fontFamily:"Arial",fontSize:10,duration:null,zoomDebounce:!1,formatTimeCallback:this.defaultFormatTimeCallback,timeInterval:this.defaultTimeInterval,primaryLabelInterval:this.defaultPrimaryLabelInterval,secondaryLabelInterval:this.defaultSecondaryLabelInterval,offset:0},t),this.canvases=[],this.wrapper=null,this.drawer=null,this.pixelRatio=null,this.maxCanvasWidth=null,this.maxCanvasElementWidth=null,this._onZoom=this.params.zoomDebounce?this.wavesurfer.util.debounce(function(){return r.render()},this.params.zoomDebounce):function(){return r.render()}}return Ja(e,[{key:"init",value:function(){this.wavesurfer.isReady?this._onReady():this.wavesurfer.once("ready",this._onReady)}},{key:"destroy",value:function(){this.unAll(),this.wavesurfer.un("redraw",this._onRedraw),this.wavesurfer.un("zoom",this._onZoom),this.wavesurfer.un("ready",this._onReady),this.wavesurfer.drawer.wrapper.removeEventListener("scroll",this._onScroll),this.wrapper&&this.wrapper.parentNode&&(this.wrapper.removeEventListener("click",this._onWrapperClick),this.wrapper.parentNode.removeChild(this.wrapper),this.wrapper=null)}},{key:"createWrapper",value:function(){var n=this.wavesurfer.params;this.container.innerHTML="",this.wrapper=this.container.appendChild(document.createElement("timeline")),this.util.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:this.params.height+"px"}),(n.fillParent||n.scrollParent)&&this.util.style(this.wrapper,{width:"100%",overflowX:"hidden",overflowY:"hidden"}),this.wrapper.addEventListener("click",this._onWrapperClick)}},{key:"render",value:function(){this.wrapper||this.createWrapper(),this.updateCanvases(),this.updateCanvasesPositioning(),this.renderCanvases()}},{key:"addCanvas",value:function(){var n=this.wrapper.appendChild(document.createElement("canvas"));this.canvases.push(n),this.util.style(n,{position:"absolute",zIndex:4})}},{key:"removeCanvas",value:function(){var n=this.canvases.pop();n.parentElement.removeChild(n)}},{key:"updateCanvases",value:function(){for(var n=Math.round(this.drawer.wrapper.scrollWidth),r=Math.ceil(n/this.maxCanvasElementWidth);this.canvases.length<r;)this.addCanvas();for(;this.canvases.length>r;)this.removeCanvas()}},{key:"updateCanvasesPositioning",value:function(){var n=this,r=this.canvases.length;this.canvases.forEach(function(i,s){var o=s===r-1?n.drawer.wrapper.scrollWidth-n.maxCanvasElementWidth*(r-1):n.maxCanvasElementWidth;i.width=o*n.pixelRatio,i.height=(n.params.height+1)*n.pixelRatio,n.util.style(i,{width:o+"px",height:n.params.height+"px",left:s*n.maxCanvasElementWidth+"px"})})}},{key:"renderCanvases",value:function(){var n=this,r=this.wavesurfer.timeline.params.duration||this.wavesurfer.backend.getDuration();if(!(r<=0)){var i=this.wavesurfer.params,s=this.params.fontSize*i.pixelRatio,o=parseInt(r,10)+1,l=i.fillParent&&!i.scrollParent?this.drawer.getWidth():this.drawer.wrapper.scrollWidth*i.pixelRatio,c=this.params.height*this.pixelRatio,u=this.params.height*(this.params.notchPercentHeight/100)*this.pixelRatio,d=l/r,f=this.params.formatTimeCallback,h=function(E){return typeof E=="function"?E(d):E},g=h(this.params.timeInterval),m=h(this.params.primaryLabelInterval),y=h(this.params.secondaryLabelInterval),P=d*this.params.offset,x=0,p=void 0,v=[];for(p=0;p<o/g;p++)v.push([p,x,P]),x+=g,P+=d*g;var C=function(E){v.forEach(function(j){E(j[0],j[1],j[2])})};this.setFillStyles(this.params.primaryColor),this.setFonts(s+"px "+this.params.fontFamily),this.setFillStyles(this.params.primaryFontColor),C(function(b,E,j){b%m===0&&(n.fillRect(j,0,1,c),n.fillText(f(E,d),j+n.params.labelPadding*n.pixelRatio,c))}),this.setFillStyles(this.params.secondaryColor),this.setFonts(s+"px "+this.params.fontFamily),this.setFillStyles(this.params.secondaryFontColor),C(function(b,E,j){b%y===0&&(console.log(),n.fillRect(j,0,1,c),n.fillText(f(E,d),j+n.params.labelPadding*n.pixelRatio,c))}),this.setFillStyles(this.params.unlabeledNotchColor),C(function(b,E,j){b%y!==0&&b%m!==0&&n.fillRect(j,0,1,u)})}}},{key:"setFillStyles",value:function(n){this.canvases.forEach(function(r){r.getContext("2d").fillStyle=n})}},{key:"setFonts",value:function(n){this.canvases.forEach(function(r){r.getContext("2d").font=n})}},{key:"fillRect",value:function(n,r,i,s){var o=this;this.canvases.forEach(function(l,c){var u=c*o.maxCanvasWidth,d={x1:Math.max(n,c*o.maxCanvasWidth),y1:r,x2:Math.min(n+i,c*o.maxCanvasWidth+l.width),y2:r+s};d.x1<d.x2&&l.getContext("2d").fillRect(d.x1-u,d.y1,d.x2-d.x1,d.y2-d.y1)})}},{key:"fillText",value:function(n,r,i){var s=void 0,o=0;this.canvases.forEach(function(l){var c=l.getContext("2d"),u=c.canvas.width;o>r+s||(o+u>r&&(s=c.measureText(n).width,c.fillText(n,r-o,i)),o+=u)})}},{key:"defaultFormatTimeCallback",value:function(n,r){if(n/60>1){var i=parseInt(n/60,10);return n=parseInt(n%60,10),n=n<10?"0"+n:n,i+":"+n}return Math.round(n*1e3)/1e3}},{key:"defaultTimeInterval",value:function(n){return n>=25?1:n*5>=25?5:n*15>=25?15:Math.ceil(.5/n)*60}},{key:"defaultPrimaryLabelInterval",value:function(n){return n>=25?10:n*5>=25?6:(n*15>=25,4)}},{key:"defaultSecondaryLabelInterval",value:function(n){return n>=25?5:(n*5>=25||n*15>=25,2)}}]),e}(),IH=function(){var t=this;this._onScroll=function(){t.wrapper&&t.drawer.wrapper&&(t.wrapper.scrollLeft=t.drawer.wrapper.scrollLeft)},this._onRedraw=function(){return t.render()},this._onReady=function(){var n=t.wavesurfer;t.drawer=n.drawer,t.pixelRatio=n.drawer.params.pixelRatio,t.maxCanvasWidth=n.drawer.maxCanvasWidth||n.drawer.width,t.maxCanvasElementWidth=n.drawer.maxCanvasElementWidth||Math.round(t.maxCanvasWidth/t.pixelRatio),n.drawer.wrapper.addEventListener("scroll",t._onScroll),n.on("redraw",t._onRedraw),n.on("zoom",t._onZoom),t.render()},this._onWrapperClick=function(n){n.preventDefault();var r="offsetX"in n?n.offsetX:n.layerX;t.fireEvent("click",r/t.wrapper.scrollWidth||0)}};function lc(e,t,n){e.on(t,n)}function ka(e,t,n){if(t instanceof window.HTMLElement)e.loadMediaElement(t,n);else if(typeof t=="string")e.load(t,n);else if(t instanceof window.Blob||t instanceof window.File)e.loadBlob(t,n);else throw new Error(`Wavesurfer._loadAudio expects prop audioFile
        to be either HTMLElement, string or file/blob`)}function N0(e){return e.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join("")}function Ti(e,t,n){var r=e[t];return r!==void 0&&(typeof r!="number"||r!==parseInt(r,10)||r<0)?new Error("Invalid "+t+" supplied to "+n+`,
      expected a positive integer`):null}function $H(e,t){return 1/e*t}function DH(e,t){var n=e.getDuration()||t.duration,r=$H(n,t.pos);r&&!isNaN(r)?t.autoCenter?e.seekAndCenter(r):e.seekTo(r):n&&t.pos&&e.seekTo(t.pos)}function Mh(e,t,n){if(t instanceof window.HTMLElement)ka(e,t,n);else{if(!window.document.querySelector(t))throw new Error("Media Element not found!");ka(e,window.document.querySelector(t),n)}}var Pt=["audioprocess","destroy","error","finish","interaction","loading","mute","pause","play","ready","scroll","seek","volume","waveform-ready","zoom"],cc={AUDIO_PROCESS:Pt[0],DESTROY:Pt[1],ERROR:Pt[2],FINISH:Pt[3],INTERACTION:Pt[4],LOADING:Pt[5],MUTE:Pt[6],PAUSE:Pt[7],PLAY:Pt[8],READY:Pt[9],SCROLL:Pt[10],SEEK:Pt[11],VOLUME:Pt[12],WAVEFORM_READY:Pt[13],ZOOM:Pt[14]},BH=["region-in","region-out","region-removed","region-updated","region-mouseenter","region-mouseleave","region-click","region-dblclick","region-update-end","region-play"],Th=["in","out","remove","update","update-end","click","dbclick","over","leave"],FH=function(e){Wg(t,e);function t(n){pf(this,t);var r=Ug(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));if(r.state={isReady:!1},(typeof Rh>"u"?"undefined":AH(Rh))===void 0)throw new Error("WaveSurfer is undefined!");return r}return Ja(t,[{key:"componentDidMount",value:function(){var r=this,i=this.props,s=i.options,o=i.spectrogramOptions,l=i.timelineOptions;s.plugins=[Vg.create()],this.props.micCallback&&s.plugins.push(Fg.create()),o&&s.plugins.push(Hg.create({container:o.container,colorMap:o.colorMap,pixelRatio:o.pixelRatio,fftSamples:o.fftSamples,noverlap:o.noverlap,windowFunc:o.windowFunc,alpha:o.alpha,deferInit:o.deferInit,labels:o.labels})),l&&s.plugins.push(LH.create({container:l.container,pixelRatio:l.pixelRatio,zoomDebounce:l.zoomDebounce,height:l.height||50,duration:l.duration,notchPercentHeight:l.notchPercentHeight,timeInterval:l.timeInterval,primaryLabelInterval:l.primaryLabelInterval,secondaryLabelInterval:l.secondaryLabelInterval,offset:l.offset,primaryColor:l.primaryColor,fontSize:l.fontSize,fontFamily:l.fontFamily,primaryFontColor:l.primaryFontColor,labelPadding:l.labelPadding,unlabeledNotchColor:l.unlabeledNotchColor})),this._wavesurfer=Rh.create(z0({},s,{container:this.wavesurferEl})),this.props.micCallback&&(this._wavesurfer.microphone.on("deviceReady",function(c){r.props.micCallback({stream:c})}),this._wavesurfer.microphone.on("deviceError",function(c){r.props.micCallback({error:c})}),this.props.micCallback({micInstance:this._wavesurfer.microphone})),lc(this._wavesurfer,cc.AUDIO_PROCESS,function(c){Math.ceil(c)!==Math.ceil(r.props.pos)&&r.props.onPosChange({wavesurfer:r._wavesurfer,originalArgs:[Math.ceil(c)]})}),lc(this._wavesurfer,cc.SEEK,function(c){var u=r._wavesurfer.getDuration();Math.ceil(u*c)!==Math.ceil(r.props.pos)&&r.props.onPosChange({wavesurfer:r._wavesurfer,originalArgs:[Math.ceil(u*c)]})}),lc(this._wavesurfer,cc.READY,function(){r.setState({isReady:!0}),r.props.micCallback||DH(r._wavesurfer,r.props),r._wavesurfer.setVolume(r.props.volume),r.props.playing&&r._wavesurfer.play(),r._wavesurfer.zoom(r.props.zoom)}),Pt.forEach(function(c){var u=N0(c),d=r.props["on"+u];d&&lc(r._wavesurfer,c,function(){for(var f=arguments.length,h=Array(f),g=0;g<f;g++)h[g]=arguments[g];if(c===cc.SEEK){var m=r._wavesurfer.getDuration();d({wavesurfer:r._wavesurfer,pos:Math.ceil(m*h)})}else d(z0({wavesurfer:r._wavesurfer},h))})}),this.props.audioFile&&ka(this._wavesurfer,this.props.audioFile,this.props.audioPeaks),this.props.mediaElt&&Mh(this._wavesurfer,this.props.mediaElt,this.props.audioPeaks)}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){this.props.audioFile!==r.audioFile&&(this.setState({isReady:!1}),ka(this._wavesurfer,r.audioFile,r.audioPeaks)),this.props.mediaElt!==r.mediaElt&&(this.setState({isReady:!1}),Mh(this._wavesurfer,r.mediaElt,r.audioPeaks)),this.props.audioPeaks!==r.audioPeaks&&(r.mediaElt?Mh(this._wavesurfer,r.mediaElt,r.audioPeaks):ka(this._wavesurfer,r.audioFile,r.audioPeaks)),r.playing?this._wavesurfer.play():this._wavesurfer.pause(),this.props.volume!==r.volume&&this._wavesurfer.setVolume(r.volume),this.props.zoom!==r.zoom&&this._wavesurfer.zoom(r.zoom),this.props.options.audioRate!==r.options.audioRate&&this._wavesurfer.setPlaybackRate(r.options.audioRate)}},{key:"componentWillUnmount",value:function(){delete this._wavesurfer.backend.buffer,this._wavesurfer.unAll(),this._wavesurfer.destroy()}},{key:"render",value:function(){var r=this,i=this.props.children?I.Children.map(this.props.children,function(s){return I.cloneElement(s,{wavesurfer:r._wavesurfer,isReady:r.state.isReady})}):!1;return I.createElement("div",{className:"waveform"},I.createElement("div",{className:"wave",ref:function(o){r.wavesurferEl=o}}),this._wavesurfer&&this.state.isReady&&i)}}]),t}(I.Component);function VH(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var HH=`.styles_reactWaves__1M36F {
  width: 85%;
  display: inline-block;
  text-align: center;
  margin: 2em auto;
  padding: 4px 15px 0 40px;
  /* width */
  /* Track */
  /* Handle */
  /* Handle on hover */ }
  .styles_reactWaves__1M36F ::-webkit-scrollbar {
    margin-top: 20px;
    width: 8px;
    height: 8px; }
  .styles_reactWaves__1M36F ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
    border-radius: 10px; }
  .styles_reactWaves__1M36F ::-webkit-scrollbar-thumb {
    background: #4F49E2;
    border-radius: 10px; }
  .styles_reactWaves__1M36F ::-webkit-scrollbar-thumb:hover {
    background: rgba(79, 73, 226, 0.85); }
`,WH={reactWaves:"styles_reactWaves__1M36F"};VH(HH);var Rk=function(e){Wg(t,e);function t(){return pf(this,t),Ug(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Ja(t,[{key:"componentDidMount",value:function(){this.props.isReady&&this._init.call(this),this.props.wavesurfer.on("ready",this._init.bind(this))}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){if(this.props.isReady){var i=Object.create(this.props.wavesurfer.regions.list),s=void 0,o=void 0;for(s in r.regions)if({}.hasOwnProperty.call(r.regions,s)){var l=r.regions[s];delete i[s],!this.props.wavesurfer.regions.list[s]&&r.wavesurfer&&r.wavesurfer.addRegion?this._hookUpRegionEvents(r.wavesurfer.addRegion(l)):i[s]&&(i[s].start!==l.start||i[s].end!==l.end)&&r.wavesurfer.regions.list[s].update({start:l.start,end:l.end})}for(o in i)({}).hasOwnProperty.call(i,o)&&r.wavesurfer.regions.list[o].remove()}}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var r=this;Th.forEach(function(i){r.props.wavesurfer.un(i)})}},{key:"_init",value:function(){var r=this,i=this.props,s=i.wavesurfer,o=i.regions,l=void 0;BH.forEach(function(c){var u=r.props["on"+N0(c)];u&&s.on(c,function(){for(var d=arguments.length,f=Array(d),h=0;h<d;h++)f[h]=arguments[h];u({wavesurfer:s,originalArgs:f})})});for(l in o)({}).hasOwnProperty.call(o,l)&&s&&s.addRegion&&this._hookUpRegionEvents(s.addRegion(o[l]))}},{key:"_hookUpRegionEvents",value:function(r){var i=this;Th.forEach(function(s){var o=i.props["onSingleRegion"+N0(s)],l=i.props.wavesurfer;o&&r.on(s,function(){for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];o({wavesurfer:l,originalArgs:u,region:r})})}),r.on("remove",function(){Th.forEach(function(s){r.un(s)})})}},{key:"render",value:function(){return!1}}]),t}(I.Component);Rk.propTypes={isReady:z.bool,regions:z.object,wavesurfer:z.object};Rk.defaultProps={regions:[]};var Mk=function(e){Wg(t,e);function t(n){pf(this,t);var r=Ug(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.onPosChange=function(i){var s=i.originalArgs&&i.originalArgs[0],o=i.wavesurfer&&i.wavesurfer.getDuration();r.props.onPosChange&&r.props.onPosChange(s,i.wavesurfer),s&&s!==r.state.pos&&r.setState({pos:s,duration:o})},r.state={pos:r.props.pos,duration:r.props.duration},r}return Ja(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(r){this.props.audioFile&&r.audioFile&&this.setState({pos:r.pos,duration:r.duration})}},{key:"render",value:function(){return I.createElement("div",{className:WH.reactWaves+(this.props.className?" "+this.props.className:"")},I.createElement(FH,z0({},this.props,{pos:this.state.pos,duration:this.state.duration,onPosChange:this.onPosChange,playing:this.props.playing})))}}]),t}(I.Component);Mk.propTypes={playing:z.bool,pos:z.number,audioFile:function(t,n,r){var i=t[n];return i&&typeof i!="string"&&!(i instanceof window.Blob)&&!(i instanceof window.File)?new Error("Invalid "+n+" supplied to "+r+`
        expected either string or file/blob`):null},mediaElt:z.oneOfType([z.string,z.instanceOf(window.HTMLElement)]),audioPeaks:z.array,volume:z.number,zoom:z.number,onPosChange:z.func,children:z.oneOfType([z.element,z.array]),options:z.shape({audioRate:z.number,audioContext:z.object,audioScriptProcessor:z.object,autoCenter:z.bool,backend:z.oneOf(["WebAudio","MediaElement","MediaElementWebAudio"]),barGap:Ti,barHeight:Ti,barRadius:Ti,barWidth:function(t,n,r){var i=t[n];return i!==void 0&&typeof i!="number"?new Error("Invalid "+n+" supplied to "+r+`
          expected either undefined or number`):null},closeAudioContext:z.bool,cursorColor:z.string,cursorWidth:Ti,fillParent:z.bool,forceDecode:z.bool,height:Ti,hideScrollbar:z.bool,interact:z.bool,loopSelection:z.bool,maxCanvasWidth:Ti,mediaControls:z.bool,mediaType:z.oneOf(["audio","video"]),minPxPerSec:Ti,normalize:z.bool,partialRender:z.bool,pixelRatio:z.number,progressColor:z.string,removeMediaElementOnDestroy:z.bool,renderer:z.object,responsive:z.bool,scrollParent:z.bool,skipLength:z.number,splitChannels:z.bool,waveColor:z.oneOfType([z.string,z.instanceOf(window.CanvasGradient)]),xhr:z.object}),spectrogramOptions:z.object,timelineOptions:z.object};Mk.defaultProps={audioFile:"",volume:1,zoom:1,options:{barGap:0,barHeight:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},pos:0,playing:!1};function UH(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",clipRule:"evenodd"}}]})(e)}function qH(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}}]})(e)}function GH(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"}}]})(e)}const KH=({sendAction:e,userText:t,setText:n})=>{const[[r,i],s]=w.useState([!1,!1]),[o,l]=w.useState("0:00");return a.jsxs("div",{className:"chatInput",children:[i?a.jsx(XH,{setIsRecordAudio:s,audioTime:o}):r?a.jsx(YH,{audioTime:o}):a.jsx(ZH,{userText:t,setUserText:n}),!i&&(t.length>0?a.jsx(QH,{onCLick:e}):a.jsx(JH,{setIsRecordAudio:s}))]})},ZH=({userText:e,setUserText:t})=>a.jsxs("div",{className:"inputBox",children:[a.jsx("button",{children:a.jsx(yB,{size:18,color:"#CED4DA"})}),a.jsx("input",{type:"text",placeholder:"Mensagem",value:e,onChange:n=>t(n.target.value)}),a.jsx("button",{children:a.jsx(UH,{size:16,color:"#DEE2E6"})}),a.jsx("button",{children:a.jsx(dB,{size:16,color:"#DEE2E6"})})]}),YH=({audioTime:e})=>a.jsxs(H.div,{initial:{scaleX:.2,opacity:0},animate:{scaleX:1,opacity:1},transition:{ease:"easeIn",duration:.4},className:"audioDrag",children:[a.jsxs("div",{className:"left",children:[a.jsx(G5,{color:"#D73628",size:14}),a.jsx("p",{children:e})]}),a.jsxs("div",{className:"right",children:[a.jsx(XS,{size:12,color:"#DEE2E6"}),a.jsx("p",{children:"deslize para cancelar"})]})]}),XH=({setIsRecordAudio:e,audioTime:t})=>a.jsxs("div",{className:"RecorderAudio",children:[a.jsx("button",{className:"CancelAudio",type:"button",onClick:()=>e([!1,!1]),children:a.jsx(G5,{size:14})}),a.jsx("strong",{children:t}),a.jsx("p",{children:"......."}),a.jsx("button",{className:"PauseAudio",type:"button",children:a.jsx(ZD,{color:"white",size:16})}),a.jsx("button",{className:"SubmitAudio",type:"button",children:a.jsx(oB,{color:"white",size:14})})]}),QH=({onCLick:e})=>a.jsx("button",{className:"sendbtn",onClick:()=>e(),children:a.jsx(qH,{size:16,color:"#f8faf9",style:{rotate:"90deg"}})}),JH=({setIsRecordAudio:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(1.5),s=po(0),o=po(0),l=ju(s,[0,-64],[1.5,1]),c=ju(o,[0,-180],[1.5,1]),u=(f,h)=>{n(!1),e([!1,!1]),s.getPrevious()===-64&&(console.log("lock"),e([!0,!0]))},d=f=>{i(f==="y"?l:c)};return a.jsxs("button",{className:"audioBtn",children:[a.jsx(H.div,{className:"mic",onPointerDown:()=>{n(!0),e([!0,!1])},onPointerUp:()=>{n(!1),e([!1,!1])},onDragEnd:(f,h)=>u(),style:{scale:t?r:1,y:s,x:o},drag:!0,dragDirectionLock:!0,onDirectionLock:f=>d(f),dragConstraints:{bottom:0,top:-64,right:0,left:-180},dragElastic:0,dragSnapToOrigin:!0,children:a.jsx(Z5,{size:16,color:"#f8faf9"})}),t&&a.jsxs(H.div,{initial:{scaleY:.2,opacity:0},animate:{scaleY:1,opacity:1},transition:{ease:"easeIn",duration:.2},className:"drag",children:[a.jsx(eB,{size:14,color:"#f8faf9"}),a.jsx(HT,{size:12,color:"#ADB5BD"})]})]})},eW=()=>{const{SistemDispatch:e}=w.useContext(J),{addEventListener:t}=$r(),{whats:n,setInitialWhatsApp:r,addMessageToChatbox:i}=Dr(),{id:s}=J4(),[o,l]=w.useState(),[c,u]=w.useState(""),{socket:d}=ng(),f=K(),h=()=>{if(o){const y={from:n==null?void 0:n._id,to:o.data.id,content:c,createdAt:Date.now()};dn("execSendWhatsAppMessage",y),t("execSendWhatsAppMessage",P=>{d==null||d.emit("whats:onNewMessage",o==null?void 0:o.data.phoneId,P)})}u("")},g=()=>{if(s){const y=n==null?void 0:n.chatboxes.find(P=>P.data.id===Number(s));y!==void 0&&l(y)}};w.useEffect(()=>{o&&g()},[n]),w.useEffect(()=>{if(e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#121515",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#1F2C34",color:"#f2f2f2"}}),g(),o){const y=P=>{i(o.data.id,P)};return d==null||d.once("whats:onNewMessage",y),()=>{d==null||d.off("whats:onNewMessage",y)}}},[d,o]);const m=w.useRef(null);return w.useEffect(()=>{var y;o!=null&&o.messages.length&&((y=m.current)==null||y.scrollIntoView({behavior:"smooth",block:"end"}))},[o==null?void 0:o.messages.length]),a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(TH,{children:[a.jsxs("div",{className:"head",children:[a.jsxs("button",{className:"left",onClick:()=>f("/whats/chat"),children:[a.jsx(Z1,{color:"#F8F9FA",size:18}),a.jsx(ce,{id:o==null?void 0:o.data.picture,size:24})]}),a.jsx("div",{className:"name",children:a.jsx("h4",{children:o==null?void 0:o.data.name})}),a.jsxs("div",{className:"right",children:[a.jsx("button",{children:a.jsx(W5,{size:12,color:"#F8F9FA"})}),a.jsx("button",{children:a.jsx(DD,{size:12,color:"#F8F9FA"})}),a.jsx("button",{children:a.jsx(q5,{size:14,color:"#F8F9FA"})})]})]}),a.jsx("div",{className:"messagesList",children:a.jsxs("div",{className:"wrap",children:[o==null?void 0:o.messages.sort((y,P)=>new Date(y.createdAt).getTime()-new Date(P.createdAt).getTime()).map((y,P)=>a.jsx(tW,{message:y.content,hour:y.createdAt,isMe:(o==null?void 0:o.data.id)!=(y.from||y.to),isread:!0},P)),a.jsx("div",{ref:m})]})}),a.jsx(KH,{userText:c,setText:u,sendAction:h})]})})},tW=({isMe:e,message:t,hour:n,isread:r})=>a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},className:`chatBox ${e&&"isMe"} ${!1}`,children:[a.jsx("p",{children:t}),e&&a.jsxs("div",{className:"foot",children:[a.jsx("span",{children:Pk(n)}),r?a.jsx(E$,{color:"#34B7F1",size:14}):a.jsx(R$,{size:14})]})]}),nW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
    padding: 8px 16px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #000000;
    z-index: 2;
  }

  .center {
    width: 100%;
    flex-grow: 1;
    position: relative;
  }

  .center::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 0 16px #000000;
    z-index: 1;
  }

  .closeCamera {
    font-size: 20px;
  }

  .flashIcon {
    font-size: 20px;
  }

  .bottom {
    width: 100%;
    padding: 8px 0 4px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background: #000000;
    z-index: 2;
  }

  .cameraButton {
    margin: 0px 25px;

    width: 45px;
    height: 45px;

    border: 3px solid #e7e7e7;
    border-radius: 100%;
  }

  .cameraIcon {
    margin-top: 9px;
    font-size: 24px;
  }

  .imageIcon {
    margin-top: 9px;
    font-size: 24px;
  }

  .bottomText {
    margin-top: 13px;
    font-weight: 400;
    font-size: 9px;
  }
`,rW=()=>{const{SistemDispatch:e}=w.useContext(J);w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#000000",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#000000",color:"#f2f2f2"}})},[]);const t=K(),n=()=>{t(-1)},[r,i]=w.useState(!1),s=()=>{i(!r)};return a.jsx(H.div,{initial:{height:0},animate:{height:"100%"},transition:{ease:"easeIn",duration:10.2},children:a.jsxs(nW,{children:[a.jsxs("div",{className:"top",children:[a.jsx(ig,{onClick:n,className:"closeCamera"}),r?a.jsx(rF,{onClick:s,className:"flashIcon"}):a.jsx(WT,{onClick:s,className:"flashIcon"})]}),a.jsx("div",{className:"center"}),a.jsxs("div",{className:"bottom",children:[a.jsx(iF,{className:"imageIcon"}),a.jsx("div",{className:"cameraButton"}),a.jsx(eF,{className:"cameraIcon"}),a.jsx("h3",{className:"bottomText",children:"Segure para video, clique para foto"})]})]})})},iW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #121B22;

  .topArrowIcon {
    margin-left: 10px;
    font-size: 20px;
  }

  .userInfos {
    display: flex;
    flex-direction: row;
  }

  .divisor {
    margin-bottom: 2px;
    width: 100%;
    height: 2px;
    background-color: #232E34;
  }
`,sW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #121b22;

  .settingsTop {
    width: 100%;
    position: absolute;
    top: 38px;
  }

  .infosTop {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .topArrowIcon {
    font-size: 19px;
  }

  .infosTopText {
    margin-left: 12px;
    font-size: 13px;
    font-weight: 500;
  }

  .userInfos {
    margin-top: 14px;
    margin-left: 16px;
    position: relative;
  }

  .rightInfos {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .userName {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: #f5fcff;
  }

  .userStatus {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;

    color: #9aa7ad;
  }

  .userStatus::placeholder {
    color: #9aa7ad;
  }
`,oW=e=>{const{whats:t}=Dr(),n=K(),r=()=>{n(-1)};return a.jsx(sW,{children:a.jsxs("div",{className:"settingsTop",children:[a.jsxs("div",{className:"infosTop",children:[a.jsx(Z1,{onClick:r,className:"topArrowIcon"}),a.jsx("h3",{className:"infosTopText",children:"Settings"})]}),a.jsxs("div",{className:"userInfos",children:[a.jsx(ce,{id:t==null?void 0:t.picture,size:44}),a.jsxs("div",{className:"rightInfos",children:[a.jsx("h3",{className:"userName",children:"Character"}),a.jsx("h3",{className:"userStatus",children:t==null?void 0:t.about})]})]})]})})},aW=W.div`
  //height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
  margin-left: -12px;

  background: #121B22;

  .menuContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
      color: #84959C;
    }

    .item {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }


    .rightInfos {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 17px;

        color: #F5FCFF;
      }

      .description {
        width: 150px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 15px;

        color: #9AA7AD;
      }
    }
  }

  .appVersion {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 85%;	

    position: absolute;
    bottom: 44px;
    
    .versionTop {
      opacity: 0.5;
      font-family: 'Helvetica';
      font-weight: 400;
      margin-bottom: 2px;

      font-size: 9px;
      color: #9AA7AD;
    }

    .versionBottom {
      font-family: 'Helvetica';
      font-weight: bold;
      font-size: 11px;
      color: #4AD199;
    }
  }
`,lW=e=>{const t=K(),n=()=>{t("/whats/profile")};return a.jsx(aW,{children:a.jsxs("div",{className:"menuContainer",children:[a.jsxs("div",{className:"item",children:[a.jsx(KD,{}),a.jsxs("div",{onClick:n,className:"rightInfos",children:[a.jsx("p",{className:"title",children:"Account"}),a.jsx("p",{className:"description",children:"Privacy, security, change number"})]})]}),a.jsxs("div",{className:"item",children:[a.jsx(U5,{size:16}),a.jsxs("div",{className:"rightInfos",children:[a.jsx("p",{className:"title",children:"Chats"}),a.jsx("p",{className:"description",children:"Theme, wallpapers, chat history"})]})]}),a.jsxs("div",{className:"item",children:[a.jsx(BD,{}),a.jsxs("div",{className:"rightInfos",children:[a.jsx("p",{className:"title",children:"Notifications"}),a.jsx("p",{className:"description",children:"Message, group & call tones"})]})]}),a.jsxs("div",{className:"item",children:[a.jsx(mB,{}),a.jsxs("div",{className:"rightInfos",children:[a.jsx("p",{className:"title",children:"Storage and data"}),a.jsx("p",{className:"description",children:"Network usage, auto-download"})]})]}),a.jsxs("div",{className:"item",children:[a.jsx(XD,{}),a.jsxs("div",{className:"rightInfos",children:[a.jsx("p",{className:"title",children:"Help"}),a.jsx("p",{className:"description",children:"Help center, contact us, privacy police"})]})]}),a.jsxs("div",{className:"item",children:[a.jsx(bH,{}),a.jsx("div",{className:"rightInfos",children:a.jsx("p",{className:"title",children:"Invite a friend"})})]}),a.jsxs("div",{className:"appVersion",children:[a.jsx("p",{className:"versionTop",children:"From"}),a.jsx("p",{className:"versionBottom",children:"Rocket Community"})]})]})})},cW=()=>{const{SistemDispatch:e}=w.useContext(J);return w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#121B22",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#121B22",color:"#f2f2f2"}})},[]),a.jsxs(iW,{children:[a.jsx(oW,{}),a.jsx("span",{className:"divisor"}),a.jsx(lW,{})]})},uW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #4F7655;

  .top {
    position: absolute;
    top: 40px;

    padding: 8px 16px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #4F7655;
    z-index: 2;
  }

  .closeCamera {
    color: #c9c9c9;
    font-size: 20px;
  }

  .flashIcon {
    color: #c9c9c9;
    font-size: 20px;
  }

  .statusText {
    width: auto;
    max-width: 200px;
    
    font-size: 25px;
    font-weight: 500;

    color: #FFFFFF;
    opacity: 0.3;
  }

  .nextIcon {
    position: absolute;
    bottom: 45px;
    right: 20px;
    
    font-size: 23px;
    color: #c9c9c9;
  }

  .textIcon {
    color: #c9c9c9;
    margin-right: 13px;
  }

  .colorIcon {
    color: #c9c9c9;
  }
`,dW=()=>{const[e,t]=w.useState("#fff"),{SistemDispatch:n}=w.useContext(J);w.useEffect(()=>{n({type:"showStatusbar"}),n({type:"showBottomNav"}),n({type:"setBottomNavStyles",values:{background:"#000000",color:"#f2f2f2"}}),n({type:"setStatusBarStyle",values:{background:"#000000",color:"#f2f2f2"}})},[]);const r=K(),i=()=>{r(-1)},s=[{color:"#4F7655"},{color:"#F56040"},{color:"#3030A4"}],o=()=>{const c=Math.floor(Math.random()*s.length);t(s[c].color)},l=()=>{r(-1)};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsx(uW,{style:{background:e},children:a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{background:e},className:"top",children:[a.jsx(ig,{onClick:i,className:"closeCamera"}),a.jsxs("div",{className:"topRight",children:[a.jsx(M$,{className:"textIcon"}),a.jsx(tF,{onClick:o,className:"colorIcon"})]})]}),a.jsx("div",{className:"center",children:a.jsx("input",{className:"statusText",placeholder:"Type a status",maxLength:14,draggable:"true",type:"text"})}),a.jsx(ND,{onClick:l,className:"nextIcon"})]})})})},fW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: url("../../../src/assets/whatsCall&MsgBg.svg");

  .center {
    margin-bottom: 40px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .userAvatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .userName {
    font-size: 20px;
    font-weight: 600;
    margin-top: 17px;
    color: #e3e3e3;
  }

  .callStatus {
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
    color: #e3e3e3;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 35px;

    width: 100%;
    height: 40px;

    background-color: #1F2C34;
  }

  .soundIcon {
    position: relative;
    left: 7px;

    font-size: 15px;
  }

  .cameraIcon {
    position: relative;
    left: 7px;

    font-size: 15px;
    border-radius: 100%;
  }

  .microphoneIcon {
    position: relative;
    left: 7px;
  }

  .hangUpIcon {
    font-size: 28px;
    padding: 7px;
    border-radius: 21px;
    background-color: #E91C43;
  }
`;function hW(e){return U({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.897 9c0.125 0.867 0.207 2.053-0.182 2.507-0.643 0.751-4.714 0.751-4.714-0.751 0-0.756 0.67-1.252 0.027-2.003-0.632-0.738-1.766-0.75-3.027-0.751s-2.394 0.012-3.027 0.751c-0.643 0.751 0.027 1.247 0.027 2.003 0 1.501-4.071 1.501-4.714 0.751-0.389-0.454-0.307-1.64-0.182-2.507 0.096-0.579 0.339-1.203 1.118-2 0-0 0-0 0-0 1.168-1.090 2.935-1.98 6.716-2v-0c0.021 0 0.042 0 0.063 0s0.041-0 0.063-0v0c3.781 0.019 5.548 0.91 6.716 2 0 0 0 0 0 0 0.778 0.797 1.022 1.421 1.118 2z"}}]})(e)}const pW=()=>{const{SistemDispatch:e}=w.useContext(J);w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#1F2C34",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#0B1B24",color:"#f2f2f2"}})},[]);const[t,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),l=K(),c=()=>{l(-1)},u=()=>{o(!s)},d=()=>{i(!r)},f=()=>{n(!t)};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(fW,{children:[a.jsxs("div",{className:"center",children:[a.jsx("img",{src:"https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048",className:"userAvatar"}),a.jsx("h2",{className:"userName",children:"Vitor"}),a.jsx("h2",{className:"callStatus",children:"Calling"})]}),a.jsxs("div",{className:"bottom",children:[s?a.jsxs("svg",{onClick:u,className:"soundIcon",width:"17",height:"13",viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M21 5.8L15.4 13M15.4 5.8L21 13M1 5.8V13H5L11.4 17.8V1L5 5.8H1Z",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M1 13V5.8H5L11.4 1V17.8L5 13H1Z",fill:"white",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}):a.jsxs("svg",{onClick:u,className:"soundIcon",width:"17",height:"13",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M16.3846 1.76923C19.4615 3.30769 21 5.61538 21 9.07692C21 12.5385 19.4615 14.8462 16.3846 16.3846M1 5.61538V12.5385H4.84615L11 17.1538V1L4.84615 5.61538H1ZM14.8462 6.38462C14.8462 6.38462 16.3846 7.15385 16.3846 9.07692C16.3846 11 14.8462 11.7692 14.8462 11.7692V6.38462Z",stroke:"#FFFEFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M1 12.5385V5.61538H4.84615L11 1V17.1538L4.84615 12.5385H1Z",fill:"white",stroke:"#FFFEFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),t?a.jsx(LD,{className:"cameraIcon",onClick:f}):a.jsx(W5,{className:"cameraIcon",onClick:f}),r?a.jsx(rB,{className:"soundIcon",onClick:d}):a.jsx(Z5,{className:"soundIcon",onClick:d}),a.jsx(hW,{onClick:c,className:"hangUpIcon"})]})]})})},mW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #000000;

  .center {
    margin-bottom: 40px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .userAvatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .userName {
    font-size: 20px;
    font-weight: 600;
    margin-top: 17px;
    color: #e3e3e3;
  }

  .callStatus {
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
    color: #e3e3e3;
  }

  .bottom {
    margin-bottom: 10px;
    width: 70%;

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;


      .acceptButton {
        margin-top: -10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #09D260;

        width: 30px;
        height: 30px;
        border-radius: 100%;
        
        .callAcceptedIcon {
          font-size: 13px;
          color: #fff;
          transform: rotate(90deg);
        }
      }

      .rejectButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #161a1e;
        
        width: 30px;
        height: 30px;
        border-radius: 100%;

        .callRejectedIcon {
          font-size: 13px;
          color: #ED5774;
          transform: rotate(223deg);
        }
      }

      .chatButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #161a1e;

        width: 30px;
        height: 30px;
        border-radius: 100%;

        .chatIcon {
          font-size: 13px;
        }
      }

    }
  }

.bottomText {
    margin-bottom: 10px;
    font-size: 10px;
    color: #84898C;
  }
`,gW=()=>{const{SistemDispatch:e}=w.useContext(J);return w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#000000",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#000000",color:"#f2f2f2"}})},[]),a.jsxs(mW,{children:[a.jsxs("div",{className:"center",children:[a.jsx("img",{src:"https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048",className:"userAvatar"}),a.jsx("h2",{className:"userName",children:"Vitor"}),a.jsx("h2",{className:"callStatus",children:"Whatsapp Voice Call"})]}),a.jsx("div",{className:"bottom",children:a.jsxs("div",{className:"buttons",children:[a.jsx("div",{className:"rejectButton",children:a.jsx(O0,{className:"callRejectedIcon"})}),a.jsx("div",{draggable:"true",className:"acceptButton",children:a.jsx(O0,{className:"callAcceptedIcon"})}),a.jsx("div",{className:"chatButton",children:a.jsx(U5,{className:"chatIcon"})})]})}),a.jsx("h3",{className:"bottomText",children:"Swipe to accept"})]})},yW=W.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  background: #121B22;

  .divisor {
    margin-top: 10px;
    width: 93%;
    height: 1px;
    background-color: #383B3C;
  }

  .infosTop {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 10px;

    .infosTopText {
        margin-left: 12px;
        font-weight: 600;
        font-size: 14px;
    }

    .topArrowIcon {
        font-size: 19px;
    }
  }

  .infosMid {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,vW=W.div`
.infosMidBottom {


    .userInfos {
        margin-top: 25px;
        padding-left: 15px;

        .nameInfo {
            display: flex;
            flex-direction: row;
    
            .userIcon {
                color: #8F9090;
                font-size: 35px;
                height: 18px;
            }

            .userInfoName {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }
        
                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }
                
                .secondText::placeholder {
                    color: #E3E4E4;
                }
        
                .tagDesc {
                    margin-top: 3px;
                    font-weight: 400;
                    font-size: 9px;
                    color: #8A8D8E;
                }
            }
        }
    
        .aboutInfo {
            margin-top: 10px;

            display: flex;
            flex-direction: row;

            .infoIcon {
                color: #8F9090;
                font-size: 19px;
                height: 18px;
            }

            .userInfoAbout {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }
        
                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }

                .secondText::placeholder {
                    color: #E3E4E4;
                }
            }
        }

        .phoneInfo {
            margin-top: 10px;
            margin-left: 4px;

            display: flex;
            flex-direction: row;

            .phoneIcon {
                color: #8F9090;
                font-size: 13.5px;
                height: 18px;

                transform: rotate(88deg);
            }

            .userInfoPhone {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }

                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }
            }
        }
    }

  }
`;function xW(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"}}]})(e)}const wW=e=>{const{whats:t}=Dr();return a.jsx(vW,{children:a.jsx("div",{className:"infosMidBottom",children:a.jsxs("div",{className:"userInfos",children:[a.jsxs("div",{className:"nameInfo",children:[a.jsx(T$,{className:"userIcon"}),a.jsxs("div",{className:"userInfoName",children:[a.jsx("h3",{className:"infoTag",children:"Nome"}),a.jsx("input",{className:"secondText",type:"text",placeholder:"Character",maxLength:28}),a.jsx("h3",{className:"tagDesc",children:"Esse é o seu nome de usuário. Seu nome só será visível para o seus contatos."})]})]}),a.jsx("div",{className:"divisor"}),a.jsxs("div",{className:"aboutInfo",children:[a.jsx(xW,{className:"infoIcon"}),a.jsxs("div",{className:"userInfoAbout",children:[a.jsx("h3",{className:"infoTag",children:"Sobre"}),a.jsx("input",{className:"secondText",type:"text",placeholder:t==null?void 0:t.about,maxLength:28})]})]}),a.jsx("div",{className:"divisor"}),a.jsxs("div",{className:"phoneInfo",children:[a.jsx(O0,{className:"phoneIcon"}),a.jsxs("div",{className:"userInfoPhone",children:[a.jsx("h3",{className:"infoTag",children:"Telefone"}),a.jsx("h3",{className:"secondText",children:"777-666"})]})]})]})})})},bW=W.div`
  .infosMidTop {
    .avatar {
    }

    .cameraIconDiv {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 10px;

      background-color: #00a884;
      border-radius: 100%;

      position: absolute;
      left: 147px;
      bottom: 270px;
      width: 30px;
      height: 32px;
      font-size: 14px;
    }
  }
`,SW=e=>{const{whats:t}=Dr();return a.jsx(bW,{children:a.jsxs("div",{className:"infosMidTop",children:[a.jsx(ce,{id:t==null?void 0:t.picture,size:130}),a.jsx("div",{className:"cameraIconDiv",children:a.jsx(VD,{className:"cameraIcon"})})]})})},CW=()=>{Dr();const{SistemDispatch:e}=w.useContext(J);w.useEffect(()=>{e({type:"showStatusbar"}),e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#121B22",color:"#f2f2f2"}}),e({type:"setStatusBarStyle",values:{background:"#121B22",color:"#f2f2f2"}})},[]);const t=K(),n=()=>{t(-1)};return a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},children:a.jsxs(yW,{children:[a.jsxs("div",{className:"infosTop",children:[a.jsx(Z1,{onClick:n,className:"topArrowIcon"}),a.jsx("h3",{className:"infosTopText",children:"Perfil"})]}),a.jsxs("div",{className:"infosMid",children:[a.jsx(SW,{}),a.jsx(wW,{})]})]})})},kW=W.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #121b22;
  padding-bottom: 10px;

  & > nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .top {
    padding: 8px 12px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #8b9ca3;
    }

    .icons {
      height: 18px;

      svg {
        margin-left: 10px;
        font-size: 17px;
        color: #6d767c;
      }
    }
  }

  .nav {
    padding: 0 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: #8b9ca3;
    font-size: 9px;

    a {
      width: 60px;
      font-size: 10px;
      font-weight: 600;
      text-align: center;
    }

    .camera {
      height: 16px;
      font-size: 16px;
      margin-left: 4px;
      margin-right: auto;
    }

    .active {
      color: #00a884;
    }
  }

  .bar {
    width: 100%;
    height: 2px;
    position: relative;
    display: flex;

    span {
      width: 56px;
      height: 100%;
      border-bottom: #00a884 2px solid;
      position: absolute;
      left: 44px;
      transition: ease-in;
    }
  }

  .mainContent {
    height: 100%;
    overflow-y: auto;
  }
`,jW=e=>{const t=K(),n=Lr(),{SistemDispatch:r}=w.useContext(J);return w.useEffect(()=>{r({type:"showStatusbar"}),r({type:"showBottomNav"}),r({type:"setBottomNavStyles",values:{background:"#121B22",color:"#f2f2f2"}}),r({type:"setStatusBarStyle",values:{background:"#121B22",color:"#f2f2f2"}})},[]),a.jsxs(kW,{children:[a.jsxs("nav",{initial:{opacity:0},animate:{opacity:1},children:[a.jsxs("div",{className:"top",children:[a.jsx("h2",{children:"LowApp"}),a.jsxs("div",{className:"icons",children:[a.jsx(R5,{size:14}),a.jsx(QD,{size:14,onClick:()=>t("/whats/settings")})]})]}),a.jsxs("div",{className:"nav",children:[a.jsx("div",{className:"camera",onClick:()=>t("/whats/camera"),children:a.jsx(xB,{})}),a.jsx(Ln,{to:"/whats/chat",className:"chats",children:"CHATS"}),a.jsx(Ln,{to:"/whats/status",className:"status",children:"STATUS"}),a.jsx(Ln,{to:"/whats/calls",className:"calls",children:"CALLS"})]}),a.jsx("div",{className:"bar",children:a.jsx(H.span,{initial:{scaleX:0},animate:{scaleX:1},transition:{ease:"easeIn",duration:.2},style:{left:n.pathname==="/whats/chat"?42:n.pathname==="/whats/status"?102:n.pathname==="/whats/calls"?164:0}})})]}),a.jsx("main",{className:"mainContent",children:a.jsx(_m,{})})]})},PW=()=>a.jsxs(bo,{children:[a.jsx(G,{path:"/",element:a.jsx(MH,{})}),a.jsx(G,{path:"/inCall",element:a.jsx(pW,{})}),a.jsx(G,{path:"/onCall",element:a.jsx(gW,{})}),a.jsx(G,{path:"/story",element:a.jsx(EH,{})}),a.jsx(G,{path:"/profile",element:a.jsx(CW,{})}),a.jsx(G,{path:"/dmChat/:id",element:a.jsx(eW,{})}),a.jsx(G,{path:"/camera",element:a.jsx(rW,{})}),a.jsx(G,{path:"/storyMaker",element:a.jsx(dW,{})}),a.jsx(G,{path:"/settings",element:a.jsx(cW,{})}),a.jsxs(G,{element:a.jsx(jW,{}),children:[a.jsx(G,{path:"chat",element:a.jsx(mH,{})}),a.jsx(G,{path:"calls",element:a.jsx(dH,{})}),a.jsx(G,{path:"status",element:a.jsx(jH,{})})]})]}),EW=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    z-index: 10;
  }

  h1 {
    color: #6638a6;
    text-align: center;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fcf8f4;
  }

  .rocket {
    position: absolute;
    bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: ${({theme:e})=>e.text10};
    p:nth-child(2) {
      color: #552e8c;
      font-weight: 600;
    }
  }
`,Tk=w.createContext(void 0),_t=()=>{const e=w.useContext(Tk);if(!e)throw new Error("useBank must be used within a BankContext");return e},RW=({children:e})=>{const[t,n]=w.useState(),[r,i]=w.useState(),[s,o]=w.useState({firstname:"",lastname:"",password:"",confirm:""}),l=c=>{n({...t,contacts:t==null?void 0:t.contacts.filter(u=>u.id!==c)})};return a.jsx(Tk.Provider,{value:{bank:t,transfer:r,setTransferData:i,removeContact:l,setRegistrationData:o,registrationData:s,setInitialBank:n},children:e})},MW=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),{setInitialBank:n}=_t(),{addEventListener:r}=$r();return w.useEffect(()=>(t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"transparent",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"transparent",color:"#101011"}}),dn("execRequestBank",{}),r("execRequestBank",i=>{i?(n(i),e("/bank/login")):e("/bank/onboard")}),()=>{}),[]),a.jsx(H.div,{initial:{opacity:0,scale:.6,borderRadius:"40%"},animate:{opacity:1,scale:1,borderRadius:"32px"},transition:{duration:.4,ease:"easeIn"},children:a.jsxs(EW,{children:[a.jsx("div",{className:"background"}),a.jsx("h1",{children:"Bank of Rocket"}),a.jsxs("div",{className:"rocket",children:[a.jsx("p",{children:"from"}),a.jsx("p",{children:"Rocket Community"})]})]})})},TW=W.div`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: #fcf8f4;

  .illustration {
    width: 104px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;

    .row1 {
      display: flex;
      gap: 4px;
      align-items: center;

      span {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background: #341959;
        flex-shrink: 0;
      }

      h2 {
        font-size: 16px;
        color: #341959;
      }
    }

    .row2 {
      width: 100%;
      padding-right: 8px;
      p {
        font-size: 10px;
      }
    }
  }

  .submit {
    width: 136px;
    padding: 6px 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2f2fa;
    background: #552e8c;
    font-size: 10px;
  }
`,_W=()=>{const{SistemDispatch:e}=w.useContext(J),t=K();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsx(H.div,{initial:{filter:"blur(1px)"},animate:{filter:"blur(0px)"},transition:{ease:"easeInOut",duration:.4},children:a.jsxs(TW,{children:[a.jsx("img",{className:"illustration",src:"src/assets/Bank-illustration1.png",alt:"cards"}),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"row1",children:[a.jsx("span",{}),a.jsx("h2",{children:"Sobre nosso banco"})]}),a.jsx("div",{className:"row2",children:a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac iaculis dui. Aenean arcu turpis, vehicula id euismod ut, mattis eu elit. Pellentesque consequat nisi sit amet maximus posuere. Maecenas lacinia vitae nulla eu lobortis. Nam ante nunc, efficitur nec dictum vel, luctus sagittis enim."})})]}),a.jsx("button",{onClick:()=>t("/bank/auth"),className:"submit",children:"Abrir conta"})]})})},OW=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({hideBg:e})=>e?"none":"#fcf8f4"};

  & > header {
    width: 100%;
    padding: 8px 16px 20px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #8b3ac2;
    border-radius: 0 0 20px 20px;
    transform-origin: top;

    p {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: #f2f2fa;
    }

    img {
      width: 40px;
    }
  }

  main {
    width: 100%;
    flex-grow: 1;
  }

  .form {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .profile {
      width: 56px;
      position: relative;

      button {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #fff;
        padding: 2px;
        border-radius: 50%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
    }

    input {
      width: 100%;
      padding: 4px 0;
      font-size: 10px;
      border-bottom: 1px solid #7c7c8a;
      ::placeholder {
        color: #8d8d99;
      }
    }

    .submit {
      margin-top: 32px;
    }
  }

  .password {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .field {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px 8px;

      label {
        width: 168px;
        font-size: 12px;
        font-weight: 500;
        color: #29292e;
      }

      input {
        width: 36px;
        height: 36px;
        border: 2px solid #8d8d99;
        border-radius: 4px;
        padding: 4px;
        text-align: center;
        -webkit-text-security: disc;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          display: none;
        }

        &.filled {
          background: #ddd7d1;
        }
      }
    }

    .submit {
      margin-top: 12px;
    }
  }
`,zW=({title:e})=>a.jsxs(H.header,{initial:{opacity:.8},animate:{opacity:1},transition:{ease:"easeInOut",duration:.4},children:[a.jsx("p",{children:e}),a.jsx("img",{src:"src/assets/Bank-secureImg.png",alt:"shield"})]}),NW=W.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 24px;
  background: #6638a6;
  color: #f2f2fa;
  border-radius: 4px;
  font-size: 12px;

  .spinner {
    animation: 1s spin linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,qg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M6.804 15a1 1 0 0 0-1.366-.366l-1.732 1a1 1 0 0 0 1 1.732l1.732-1A1 1 0 0 0 6.804 15ZM3.706 8.366l1.732 1a1 1 0 1 0 1-1.732l-1.732-1a1 1 0 0 0-1 1.732ZM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm11.196-3a1 1 0 0 0 1.366.366l1.732-1a1 1 0 1 0-1-1.732l-1.732 1A1 1 0 0 0 17.196 9ZM15 6.804a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 1 0-1.732-1l-1 1.732A1 1 0 0 0 15 6.804Zm5.294 8.83-1.732-1a1 1 0 1 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732Zm-3.928 1.928a1 1 0 1 0-1.732 1l1 1.732a1 1 0 1 0 1.732-1ZM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-9 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-3-.804a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 1.732 1l1-1.732A1 1 0 0 0 9 17.196ZM12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"}))};qg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};qg.defaultProps={color:"currentColor",size:"24"};const AW=qg,wt=({title:e,loading:t,onClick:n})=>a.jsx(NW,{className:"submit",onClick:n,children:t?a.jsx(AW,{className:"spinner",size:14,color:"#f2f2fa"}):e}),LW=({registrationData:e,setPassword:t,handleSubmit:n})=>{K();const r=()=>{e.password.length<4?document.getElementById(`password${e.password.length}`).focus():document.getElementById("password3").focus()},i=()=>{e.confirm.length<4?document.getElementById(`confirmPass${e.confirm.length}`).focus():document.getElementById("confirmPass3").focus()};w.useEffect(()=>{e.confirm.length<4&&i()},[e.confirm]),w.useEffect(()=>{e.password.length<4&&r()},[e.password]);const s=l=>{l.key==="Backspace"&&t({...e,password:e.password.slice(0,-1)})},o=l=>{l.key==="Backspace"&&t({...e,confirm:e.confirm.slice(0,-1)})};return a.jsxs(H.div,{className:"password",initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{onClick:r,children:"Senha"}),a.jsx("input",{id:"password0",type:"number",className:`${e.password.length>0&&"filled"}`,maxLength:1,onFocus:r,value:e.password.charAt(0),onChange:l=>{t({...e,password:l.target.value})},onKeyUp:l=>s(l)}),a.jsx("input",{id:"password1",type:"number",className:`${e.password.length>1&&"filled"}`,maxLength:1,onFocus:r,value:e.password.charAt(1),onChange:l=>{t({...e,password:e.password.concat(l.target.value)})},onKeyUp:l=>s(l)}),a.jsx("input",{id:"password2",type:"number",className:`${e.password.length>2&&"filled"}`,maxLength:1,onFocus:r,value:e.password.charAt(2),onChange:l=>{t({...e,password:e.password.concat(l.target.value)})},onKeyUp:l=>s(l)}),a.jsx("input",{id:"password3",type:"number",className:`${e.password.length>3&&"filled"}`,maxLength:1,onFocus:r,value:e.password.charAt(3),onChange:l=>{e.password.length===3&&t({...e,password:e.password.concat(l.target.value)})},onKeyUp:l=>s(l)})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{onClick:()=>i(),children:"Confirmar senha"}),a.jsx("input",{id:"confirmPass0",type:"number",className:`${e.confirm.length>0&&"filled"}`,maxLength:1,onFocus:i,value:e.confirm.charAt(0),onChange:l=>{t({...e,confirm:l.target.value})},onKeyUp:l=>o(l)}),a.jsx("input",{id:"confirmPass1",type:"number",className:`${e.confirm.length>1&&"filled"}`,maxLength:1,onFocus:i,value:e.confirm.charAt(1),onChange:l=>{t({...e,confirm:e.confirm.concat(l.target.value)})},onKeyUp:l=>o(l)}),a.jsx("input",{id:"confirmPass2",type:"number",className:`${e.confirm.length>2&&"filled"}`,maxLength:1,onFocus:i,value:e.confirm.charAt(2),onChange:l=>{t({...e,confirm:e.confirm.concat(l.target.value)})},onKeyUp:l=>o(l)}),a.jsx("input",{id:"confirmPass3",type:"number",className:`${e.confirm.length>3&&"filled"}`,maxLength:1,onFocus:i,value:e.confirm.charAt(3),onChange:l=>{e.confirm.length===3&&t({...e,confirm:e.confirm.concat(l.target.value)})},onKeyUp:l=>o(l)})]}),a.jsx(wt,{title:"Criar conta",onClick:n})]})},IW=()=>{const{registrationData:e,setRegistrationData:t}=_t(),[n,r]=w.useState(0),i=K(),s=()=>{(e.firstname.length>1||e.lastname.length>1)&&r(1)},o=()=>i("/bank/auth/camera");return a.jsxs(a.Fragment,{children:[n==0&&a.jsxs(H.div,{className:"form",initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:[a.jsx("div",{className:"profile"}),a.jsx("input",{type:"text",onChange:l=>t({...e,firstname:l.target.value}),placeholder:"Nome"}),a.jsx("input",{type:"text",onChange:l=>{t({...e,lastname:l.target.value})},placeholder:"Sobrenome"}),a.jsx(wt,{title:"Continuar",onClick:s})]}),n==1&&a.jsx(a.Fragment,{children:a.jsx(LW,{registrationData:e,setPassword:t,handleSubmit:o})})]})},$W=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    padding: 16px 16px 20px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    transform-origin: top;
    background: #140726;

    p {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: #f2f2fa;
    }

    img {
      width: 40px;
    }
  }

  .cam {
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 48px;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0);

    ::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 8px;
      box-shadow: 0 0 0 16px #140726;
      z-index: 1;
    }

    div {
      width: 64px;
      height: 64px;
      position: relative;

      span {
        background: #f2f2fa;
        border-radius: 4px;
        position: absolute;
      }
    }

    .top {
      width: 100%;
      height: 4px;
      top: 0;
    }
    .bottom {
      width: 100%;
      height: 4px;
      bottom: 0;
    }
    .left {
      width: 4px;
      height: 100%;
      left: 0;
    }
    .right {
      width: 4px;
      height: 100%;
      right: 0;
    }
  }

  .action {
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #140726;

    & > button {
      padding: 8px;
      border-radius: 50%;
      background: #f2f2fa;
      color: #403d3b;
    }
  }
`,Gg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M19.07,4.93A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM18.23,7H12.76l2.35-2.35A8.14,8.14,0,0,1,18.23,7ZM9,4.6a8.15,8.15,0,0,1,3.87-.54L9,7.93ZM7,5.77v5.47L5.19,9.43l-.54-.54A8.14,8.14,0,0,1,7,5.77ZM4.6,15a8.12,8.12,0,0,1-.54-3.87L7.93,15Zm1.17,2h5.47L8.89,19.35A8.14,8.14,0,0,1,5.77,17ZM15,19.4a8.13,8.13,0,0,1-3.87.54L15,16.07Zm0-6.16L13.24,15H10.75L9,13.24V10.76L10.76,9h2.48L15,10.76Zm2,5V12.76l2.35,2.35A8.14,8.14,0,0,1,17,18.23ZM16.07,9H19.4a8.13,8.13,0,0,1,.54,3.87Z"}))};Gg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Gg.defaultProps={color:"currentColor",size:"24"};const DW=Gg,BW=()=>{const e=K(),t=ik(FW),{registrationData:n}=_t(),r=()=>{t("34"),i(),e("/bank/review")};w.useEffect(()=>{dn("execHandleCameraInit",{})},[]);const i=()=>{dn("execBankRegistration",n)};return a.jsxs($W,{children:[a.jsxs("div",{className:"header",children:[a.jsx("p",{children:"Registre uma foto para aprovação de abertura de conta"}),a.jsx("img",{src:"src/assets/Bank-secureImg.png",alt:"shield"})]}),a.jsx("div",{className:"cam"}),a.jsx("div",{className:"action",children:a.jsx("button",{onClick:()=>r(),children:a.jsx(DW,{size:32})})})]})},FW=new bl({key:"bankAvatar",default:"0"}),VW=()=>{const{SistemDispatch:e}=w.useContext(J),t=Lr();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#8B3AC2",color:"#f2f2fa"}})},[]),w.useEffect(()=>{t.pathname==="/bank/auth/camera"?(e({type:"setStatusBarStyle",values:{background:"#140726",color:"#f2f2fa"}}),e({type:"setBottomNavStyles",values:{background:"#140726",color:"#f2f2fa"}})):(e({type:"setStatusBarStyle",values:{background:"#8B3AC2",color:"#f2f2fa"}}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}))},[t.pathname]),a.jsxs(OW,{hideBg:t.pathname==="/bank/auth/camera",children:[t.pathname!=="/bank/auth/camera"&&a.jsx(zW,{title:t.pathname==="/bank/auth"?"Para continuarmos precisamos validar sua identificação":t.pathname==="/bank/auth/password"?"Crie sua senha para operações dentro do app":null}),a.jsx("main",{children:a.jsxs(bo,{children:[a.jsx(G,{path:"/",element:a.jsx(IW,{})}),a.jsx(G,{path:"/camera",element:a.jsx(BW,{})})]})})]})},HW=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  & > img {
    width: 80px;
    margin-bottom: -8px;
  }

  h4 {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  p {
    width: 90%;
    font-size: 10px;
    text-align: center;
    color: #505059;
    font-family: "Poppins", sans-serif;
  }
`,WW=()=>{const{SistemDispatch:e}=w.useContext(J);return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(HW,{children:[a.jsx("img",{src:"src/assets/Bank-reviewImg.png",alt:"desktop"}),a.jsx("h4",{children:"Em análise"}),a.jsx("p",{children:"Recebemos seus dados e estamos analisando seu pedido, em breve enviaremos uma notificação com o resultado."})]})},UW=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcf8f4;

  .bankLogo {
    width: 40px;
    position: absolute;
    top: 80px;
  }

  .form {
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;

    h3 {
      font-size: 20px;
      color: #6638a6;
    }

    p {
      font-size: 10px;
      color: #8d8d99;
    }
  }

  .field {
    margin-bottom: 16px;
    width: 160px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0px 8px;

    label {
      padding-left: 4px;
      width: 100%;
      font-size: 10px;
      font-weight: 600;
      color: #29292e;
      text-align: start;
    }

    input {
      width: 32px;
      height: 32px;
      border: 2px solid #8d8d99;
      border-radius: 4px;
      padding: 4px;
      text-align: center;
      -webkit-text-security: disc;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }

      &.filled {
        background: #ddd7d1;
      }
    }
  }
`,qW=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t}=_t(),n=K(),[r,i]=w.useState("");w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]);const s=()=>{r.length<4?document.getElementById(`password${r.length}`).focus():document.getElementById("password3").focus()};w.useEffect(()=>{r.length<4&&s()},[r]);const o=c=>{c.key==="Backspace"&&i(r.slice(0,-1))},l=()=>{(t==null?void 0:t.password)==r&&n("/bank/init")};return a.jsxs(UW,{children:[a.jsx("img",{className:"bankLogo",src:"src/assets/Bank-logoTransparent.png",alt:"bank"}),a.jsxs("div",{className:"form",children:[a.jsx(ce,{url:t==null?void 0:t.picture,size:56}),a.jsxs("div",{className:"Account",children:[a.jsx("h3",{children:t==null?void 0:t.firstname}),a.jsxs("p",{children:["Conta ",t==null?void 0:t.agency]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{onClick:s,children:"Senha"}),a.jsx("input",{id:"password0",type:"number",className:`${r.length>0&&"filled"}`,maxLength:1,onFocus:s,value:r.charAt(0),onChange:c=>{i(c.target.value)},onKeyUp:c=>o(c)}),a.jsx("input",{id:"password1",type:"number",className:`${r.length>1&&"filled"}`,maxLength:1,onFocus:s,value:r.charAt(1),onChange:c=>i(r.concat(c.target.value)),onKeyUp:c=>o(c)}),a.jsx("input",{id:"password2",type:"number",className:`${r.length>2&&"filled"}`,maxLength:1,onFocus:s,value:r.charAt(2),onChange:c=>i(r.concat(c.target.value)),onKeyUp:c=>o(c)}),a.jsx("input",{id:"password3",type:"number",className:`${r.length>3&&"filled"}`,maxLength:1,onFocus:s,value:r.charAt(3),onChange:c=>{r.length===3&&i(r.concat(c.target.value))},onKeyUp:c=>o(c)})]}),a.jsx(wt,{title:"Entrar",onClick:l})]})]})},GW=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2fa;
  color: #29292e;

  header {
    width: 100%;
    padding: 8px 12px 40px 12px;
    display: flex;
    justify-content: space-between;
    background: #8b3ac2;
    color: #f2f2fa;

    h3 {
      font-size: 14px;
      font-weight: 300;
    }

    p {
      font-size: 12px;
      font-weight: 500;
    }

    .ballanceSkeleton {
      width: 100%;
      height: 14px;
      background: #dbdbdb;
      border-radius: 4px;
      opacity: 0.6;
    }

    .balance {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }

  .navs {
    width: 100%;
    margin-top: -28px;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;

    & > .navButton {
      width: 31%;
      height: 52px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      background: #fcf8f4;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);

      &.disabled {
        background: rgba(200, 200, 200, 0.2);
      }
    }

    .icon {
      display: flex;
      padding: 6px;
      background: rgba(225, 225, 230, 0.6);
      border-radius: 50%;
      img {
        width: 14px;
      }

      &.disabled {
        fill: rgba(200, 200, 200, 0.5);
        background: rgba(200, 200, 200, 0.5);
      }
    }

    p {
      font-size: 8px;
      font-weight: 500;
    }
  }

  .sections {
    width: 100%;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  section.card {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fcf8f4;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.25);

    .head {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #8d8d99;
      }
    }

    .infos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
    }

    .values {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      h4 {
        font-size: 10px;
        font-weight: 500;
      }

      p {
        font-size: 10px;
        font-weight: 600;
      }

      li:nth-child(1) > p {
        color: #165dff;
      }
      li:nth-child(2) > p {
        color: #8b3ac2;
      }
    }

    .bars {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      border-left: 2px solid #8d8d99;
      gap: 8px;

      .bar {
        margin-left: -1px;
        height: 10px;
        border-radius: 0 2px 2px 0;
      }

      .invoice {
        background: #165dff;
      }

      .limit {
        background: #8b3ac2;
      }
    }
  }

  section.pix {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fcf8f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.25);

    .icon {
      width: 32px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        font-size: 12px;
        font-weight: 600;
      }

      p {
        width: 90%;
        font-size: 8px;
        font-weight: 500;
      }
    }
  }

  footer {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    background: #fcf8f4;

    ul {
      display: flex;
      justify-content: space-between;
      gap: 4px;
    }

    li {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      button {
        padding: 6px;
        background: rgba(225, 225, 230, 0.6);
        border-radius: 50%;
      }

      p {
        font-size: 8px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`,Kg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"}))};Kg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Kg.defaultProps={color:"currentColor",size:"24"};const Zg=Kg,Yg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M7,15h3a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2ZM19,5H5A3,3,0,0,0,2,8v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,12a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20Zm0-8H4V8A1,1,0,0,1,5,7H19a1,1,0,0,1,1,1Z"}))};Yg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Yg.defaultProps={color:"currentColor",size:"24"};const _k=Yg,uc={limit:1e3,invoice:500},KW=()=>{const e=K(),t=n=>{let r=uc.limit+uc.invoice;return`${(n/r*100).toFixed(0)}%`};return a.jsxs(H.section,{className:"card",initial:{opacity:.2},animate:{opacity:1},transition:{ease:"backIn",duration:.4,delay:.2},children:[a.jsxs("button",{onClick:()=>e("/bank/card"),className:"head",children:[a.jsx(_k,{size:18,color:"#6638A6"}),a.jsx("p",{children:"Credito"})]}),a.jsxs("div",{className:"infos",children:[a.jsxs("div",{className:"bars",children:[a.jsx(H.div,{className:"bar invoice",initial:{width:0},animate:{width:t(uc.invoice)},transition:{ease:"easeIn",duration:.2,delay:.25}}),a.jsx(H.div,{className:"bar limit",initial:{width:0},animate:{width:t(uc.limit)},transition:{ease:"easeIn",duration:.2,delay:.25}})]}),a.jsxs("ul",{className:"values",children:[a.jsxs("li",{children:[a.jsx("h4",{children:"Fatura atual"}),a.jsx("p",{children:"$ 0"})]}),a.jsxs("li",{children:[a.jsx("h4",{children:"Limite disponivel"}),a.jsx("p",{children:"$ 0"})]})]})]})]})},ZW=()=>{const e=K();return a.jsxs(H.section,{initial:{opacity:.2},animate:{opacity:1},transition:{ease:"backIn",duration:.4,delay:.4},className:"pix",children:[a.jsx("img",{className:"icon",src:"src/assets/Bank-pixHand.png",alt:"deposit"}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"Pagar com pix"}),a.jsx("p",{children:"Faça seu pagamento de forma rapida e segura"})]}),a.jsx("button",{onClick:()=>e("/bank/pix"),children:a.jsx(Du,{size:24,color:"#6638A6"})})]})},Xg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M21,4.41l.71-.7a1,1,0,1,0-1.42-1.42L18.89,3.7h0L16.06,6.53h0L9.75,12.83a5,5,0,1,0,1.42,1.42l5.59-5.6,2.12,2.13a1,1,0,1,0,1.41-1.42L18.17,7.24l1.42-1.41.7.7a1,1,0,1,0,1.42-1.41ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z"}))};Xg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Xg.defaultProps={color:"currentColor",size:"24"};const Qg=Xg,Jg=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"}))};Jg.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};Jg.defaultProps={color:"currentColor",size:"24"};const YW=Jg,ey=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"}))};ey.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ey.defaultProps={color:"currentColor",size:"24"};const XW=ey,QW=()=>{const e=K();return a.jsx(H.footer,{initial:{opacity:.2},animate:{opacity:1},transition:{ease:"backIn",duration:.4,delay:.6},children:a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("button",{onClick:()=>e("/bank/pix/keys"),children:a.jsx(Qg,{size:24,color:"#6638A6"})}),a.jsx("p",{children:"Minhas chaves pix"})]}),a.jsxs("li",{children:[a.jsx("button",{onClick:()=>e("/bank/loan/simulate"),children:a.jsx(YW,{size:24,color:"#6638A6"})}),a.jsx("p",{children:"Simular emprestimo"})]}),a.jsxs("li",{children:[a.jsx("button",{onClick:()=>e("/bank/profile"),children:a.jsx(XW,{size:24,color:"#6638A6"})}),a.jsx("p",{children:"Conta"})]})]})})},JW=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t}=_t(),n=K(),[r,i]=w.useState(!1);return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#8B3AC2",color:"#f2f2fa"}})},[]),a.jsxs(GW,{children:[a.jsxs("header",{children:[a.jsxs("div",{className:"balance",children:[a.jsx("h3",{children:"Saldo em conta"}),a.jsxs("div",{children:[r?a.jsx("p",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t==null?void 0:t.balance)}):a.jsx("span",{className:"ballanceSkeleton"}),a.jsx("button",{onClick:()=>i(!r),children:r?a.jsx(Zg,{size:16,color:"#f2f2fa"}):a.jsx(Cl,{size:16,color:"#f2f2fa"})})]})]}),a.jsx(ce,{url:t==null?void 0:t.picture,size:24})]}),a.jsxs("div",{className:"navs",children:[a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},className:"navButton",transition:{ease:"backIn",duration:.4,delay:.1},onClick:()=>n("/bank/pix"),children:[a.jsx("div",{className:"icon",children:a.jsx("img",{src:"src/assets/Bank-pixIcon.png",alt:"icon"})}),a.jsx("p",{children:"Pix"})]}),a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},className:"navButton disabled",transition:{ease:"backIn",duration:.4,delay:.2},children:[a.jsx("div",{className:"icon disabled",children:a.jsx("img",{src:"src/assets/Bank-cardIcon.png",alt:"icon"})}),a.jsx("p",{children:"Cartão"})]}),a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},className:"navButton disabled",transition:{ease:"backIn",duration:.4,delay:.3},children:[a.jsx("div",{className:"icon disabled",children:a.jsx("img",{src:"src/assets/Bank-loanIcon.png",alt:"icon"})}),a.jsx("p",{children:"Empréstimos"})]})]}),a.jsxs("div",{className:"sections",children:[a.jsx(KW,{}),a.jsx(ZW,{})]}),a.jsx(QW,{})]})},eU=W.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  position: relative;
  animation: fade 0.4s ease-in;

  & > button:first-child {
    position: absolute;
    left: 8px;
  }

  & > button:last-child {
    position: absolute;
    right: 8px;
  }

  svg {
    color: #6638a6;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`,bt=({title:e,left:t})=>{const n=K();return a.jsxs(eU,{children:[t.type==="close"?a.jsx("button",{onClick:t.action,children:a.jsx(Hn,{size:20})}):a.jsx("button",{onClick:()=>n(-1),children:a.jsx(Rg,{size:24})}),a.jsx("h2",{children:e})]})},tU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcf8f4;
  color: #121214;
  overflow-y: hidden !important;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .btns {
    /* margin-bottom: 16px; */
  }

  .btns .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 30%;
      background: rgba(225, 225, 230, 0.6);
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);

      .icon {
        display: flex;
        background: #fcf8f4;
        padding: 6px;
        border-radius: 50%;
      }

      p {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }

  .others ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      width: 100%;
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid #c4c4cc;

      p {
        font-size: 12px;
        font-weight: 500;
        flex-grow: 1;
      }
    }
  }

  .statement {
    overflow: hidden;
  }

  .statement--list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;

    svg,
    p {
      flex-shrink: 0;
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;

      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          font-size: 10px;
          font-weight: 500;
        }

        span {
          color: #125050;
          font-size: 10px;
        }
      }

      .value {
        font-size: 10px;
        font-weight: 600;
        color: #341959;
      }
    }
  }
`,ty=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M10.46,6,11,5.41V9a1,1,0,0,0,2,0V5.41l.54.55A1,1,0,0,0,15,6a1,1,0,0,0,0-1.42L12.71,2.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21L9,4.54A1,1,0,0,0,10.46,6ZM12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16ZM5,15a1,1,0,1,0,1-1A1,1,0,0,0,5,15Zm14,0a1,1,0,1,0-1,1A1,1,0,0,0,19,15Zm1-7H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8A1,1,0,0,0,8,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V11A3,3,0,0,0,20,8Z"}))};ty.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ty.defaultProps={color:"currentColor",size:"24"};const nU=ty,ny=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M14.81,12.28a3.73,3.73,0,0,0,1-2.5,3.78,3.78,0,0,0-7.56,0,3.73,3.73,0,0,0,1,2.5A5.94,5.94,0,0,0,6,16.89a1,1,0,0,0,2,.22,4,4,0,0,1,7.94,0A1,1,0,0,0,17,18h.11a1,1,0,0,0,.88-1.1A5.94,5.94,0,0,0,14.81,12.28ZM12,11.56a1.78,1.78,0,1,1,1.78-1.78A1.78,1.78,0,0,1,12,11.56ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"}))};ny.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ny.defaultProps={color:"currentColor",size:"24"};const Ok=ny,rU=()=>{const{bank:e}=_t(),t=n=>{const r=new Date(n*1e3),i=r.getDate().toString().padStart(2,"0"),s=(r.getMonth()+1).toString().padStart(2,"0"),o=r.getFullYear();return`${i}/${s}/${o}`};return a.jsx("ul",{className:"statement--list",children:e==null?void 0:e.extract.map(n=>a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsxs("p",{children:[n.from===e._id?"Enviado":"Recebido",n.to==e._id&&a.jsxs(a.Fragment,{children:[" - ",n.name]})]}),a.jsx("span",{children:t(n.createdAt)})]}),a.jsx("p",{className:"value",children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.value)})]}))})},iU=()=>{const{SistemDispatch:e}=w.useContext(J),t=K();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(tU,{children:[a.jsx(bt,{title:"Pix",left:{type:"close",action:()=>t("/bank/init")}}),a.jsxs("section",{className:"btns",children:[a.jsx("h4",{children:"Meu pix"}),a.jsx("div",{className:"actions",children:a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"backIn",duration:.4},onClick:()=>t("/bank/pix/transfer"),children:[a.jsx("div",{className:"icon",children:a.jsx(nU,{size:16,color:"#6638A6"})}),a.jsx("p",{children:"Tranferir"})]})})]}),a.jsx("section",{className:"others",children:a.jsxs("ul",{children:[a.jsxs(H.li,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"backIn",duration:.4,delay:.2},onClick:()=>t("/bank/pix/keys"),children:[a.jsx(Qg,{size:16,color:"#6638A6"}),a.jsx("p",{children:"Minhas chaves"}),a.jsx(Du,{size:20,color:"#6638A6"})]}),a.jsxs(H.li,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"backIn",duration:.4,delay:.3},onClick:()=>t("/bank/pix/contacts"),children:[a.jsx(Ok,{size:16,color:"#6638A6"}),a.jsx("p",{children:"Meus Contatos"}),a.jsx(Du,{size:20,color:"#6638A6"})]})]})}),a.jsxs("section",{className:"statement",children:[a.jsx("h4",{children:"Extrato"}),a.jsx(rU,{})]})]})},sU=W.div`
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #8d8d99;
  border-radius: 4px;
  color: #575761;

  & > p {
    font-size: 10px;
    font-weight: 500;
  }

  .value {
    max-width: 50%;
    display: flex;
    align-items: center;
    gap: 4px;

    p {
      font-size: 10px;
    }

    span {
      width: 64px;
      height: 12px;
      background: #8d8d99;
      border-radius: 4px;
      opacity: 0.6;
    }
  }
`,mf=({ballance:e})=>{const[t,n]=w.useState(!1);return a.jsxs(sU,{children:[a.jsx("p",{children:"Saldo em conta"}),a.jsxs("div",{className:"value",children:[t?a.jsx("p",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}):a.jsx("span",{}),a.jsx("button",{onClick:()=>n(!t),children:t?a.jsx(Zg,{size:16,color:"#575761"}):a.jsx(Cl,{size:16,color:"#575761"})})]})]})},oU=({pixKey:e,keyType:t})=>{K();const{bank:n,setTransferData:r}=_t(),{addEventListener:i}=$r(),[s,o]=w.useState(e||""),[l,c]=w.useState(),[u,d]=w.useState(""),[f,h]=w.useState(!1),g=m=>{h(!0),dn("execGetBankByKey",{key:m}),i("execGetBankByKey",y=>{y||h(!1),r({bank:y._id,firstname:y.firstname,lastname:y.lastname,description:u,key:m,agency:y.agency,value:l})})};return a.jsxs("div",{className:"form",children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"key",children:[t," ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"key",type:"text",value:s,onChange:m=>o(m.target.value),placeholder:"Insira a chave do jogador"})]}),a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"value",children:["Valor ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"value",type:"number",value:l,onChange:m=>c(Number(m.target.value)),placeholder:"Valor à transferir"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"descrição",children:"Descrição"}),a.jsx("textarea",{rows:4,id:"descrição",value:u,onChange:m=>d(m.target.value),placeholder:"Descrição"})]}),a.jsx(wt,{title:"Continuar",loading:f,onClick:()=>g(s)})]})},aU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fcf8f4;

  .wrap {
    width: 100%;
    padding: 0 8px;
  }

  .navs {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    button {
      width: 32%;
      font-size: 12px;
      text-align: center;
      display: block;
    }

    span {
      position: absolute;
      width: 30%;
      height: 2px;
      bottom: 4px;
      left: 8px;
      background: #6638a6;
      transition: 0.2s ease;

      &.Rg {
        left: 8px;
        transform: translate(0);
      }

      &.phone {
        left: 5%;
        transform: translateX(50%);
      }
    }
  }

  .form {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-size: 12px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    label {
      font-size: 10px;
      font-weight: 500;

      span {
        color: #ff5343;
      }
    }

    input,
    textarea {
      border: none;
      resize: none;
      width: 100%;
      padding: 8px;
      background: rgb(216, 216, 216, 0.6);
      font-size: 10px;
      border-radius: 4px;
      &::placeholder {
        color: #575761;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }
    }
  }
`,Rw=()=>{const{id:e}=J4(),{SistemDispatch:t}=w.useContext(J),[n,r]=w.useState("Chave"),{bank:i}=_t();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(aU,{children:[a.jsx(bt,{left:{type:"back"},title:"Transferir"}),a.jsx("div",{className:"wrap",children:a.jsx(mf,{ballance:i==null?void 0:i.balance})}),a.jsxs("div",{className:"navs",children:[a.jsx("button",{onClick:()=>r("Chave"),children:"Infos"}),a.jsx("span",{className:`${n}`})]}),a.jsx(oU,{keyType:n,pixKey:e,setKeyType:r})]})},lU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;
  color: #202024;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h3 {
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .name {
        color: #696975;
      }
    }

    .col {
      display: flex;
      flex-direction: column;

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }

  .MuiCheckbox-root {
    padding: 0;
    padding-left: 8px;
    color: #6638a6;
    &.Mui-checked {
      color: #6638a6;
    }
  }

  .MuiSvgIcon-root {
    font-size: 16px;
  }

  .MuiTypography-root {
    font-size: 10px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    align-self: end;
  }

  .submit {
    margin-top: 32px;
  }
`,cU=()=>{const{bank:e,transfer:t,setInitialBank:n}=_t(),{SistemDispatch:r}=w.useContext(J),[i,s]=w.useState(!1),[o,l]=w.useState(!1),{addEventListener:c}=$r();K(),w.useEffect(()=>{r({type:"showBottomNav"}),r({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),r({type:"showStatusbar"}),r({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]);const u=()=>{s(!0),dn("execBankTransfer",{...t,save:o}),c("execBankTransfer",d=>{if(!d)return s(!1);n({...e,balance:d.balance}),d.contact&&n({...e,contacts:[...e.contacts,d.contact]}),d.transaction&&n({...e,extract:[...e==null?void 0:e.extract,d.transaction]})})};return a.jsxs(lU,{children:[a.jsx(bt,{left:{type:"back"},title:"Transferir"}),a.jsxs("section",{children:[a.jsx("h3",{children:"Transferência"}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Pagador"}),a.jsxs("p",{children:[e==null?void 0:e.firstname," ",e==null?void 0:e.lastname]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"RG"})," ",a.jsx("p",{children:"1"})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Data"}),a.jsx("p",{children:"23/07/22"})]}),a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Hora"}),a.jsx("p",{children:"20:48"})]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Valor"}),a.jsx("p",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t==null?void 0:t.value)})]}),a.jsx("div",{className:"row",children:a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Descrição"}),a.jsx("p",{children:t==null?void 0:t.description})]})})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"Recebedor"}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Nome"}),a.jsxs("p",{children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"RG"}),a.jsx("p",{children:"01"})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Chave pix"}),a.jsx("p",{children:t==null?void 0:t.key})]}),a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Conta"}),a.jsx("p",{children:t==null?void 0:t.agency})]})]})]}),!(e!=null&&e.contacts.some(d=>d.id==(t==null?void 0:t.bank)))&&a.jsx("section",{className:"save",children:a.jsx(AC,{control:a.jsx(NC,{onChange:d=>{l(d.target.checked)}}),label:"Salvar contato"})}),a.jsx(wt,{loading:i,title:"Confirmar",onClick:()=>u()})]})},uU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      width: 80%;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .form {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-size: 12px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    label {
      font-size: 10px;
      font-weight: 500;

      span {
        color: #ff5343;
      }
    }

    input,
    textarea {
      border: none;
      resize: none;
      width: 100%;
      padding: 8px;
      background: rgb(216, 216, 216, 0.6);
      font-size: 10px;
      border-radius: 4px;
      &::placeholder {
        color: #575761;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }
    }

    .submit {
      margin-top: 16px;
    }
  }
`,dU=()=>{const e=K(),{bank:t}=_t(),{SistemDispatch:n}=w.useContext(J);return w.useEffect(()=>{n({type:"showBottomNav"}),n({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),n({type:"showStatusbar"}),n({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(uU,{children:[a.jsx(bt,{title:"Cobrar",left:{type:"back"}}),a.jsxs("section",{children:[a.jsx(mf,{ballance:t==null?void 0:t.balance}),a.jsx("h3",{children:"Informe ao pagador o valor do seu serviço"})]}),a.jsxs("div",{className:"form",children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"value",children:["Valor ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"value",type:"number",placeholder:"Valor à transferir"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"descrição",children:"Descrição"}),a.jsx("textarea",{rows:4,id:"descrição",placeholder:"Descrição"})]}),a.jsx(wt,{title:"Gerar Pagamento",onClick:()=>e("/bank/pix/pay/infos")})]})]})},fU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      width: 90%;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .form {
    position: absolute;
    top: 42%;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-size: 12px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    label {
      font-size: 10px;
      font-weight: 500;

      span {
        color: #ff5343;
      }
    }

    input,
    textarea {
      border: none;
      resize: none;
      width: 100%;
      padding: 8px;
      background: rgb(216, 216, 216, 0.6);
      font-size: 10px;
      border-radius: 4px;
      &::placeholder {
        color: #575761;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }
    }

    .submit {
      margin-top: 16px;
    }
  }
`,hU=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),{bank:n}=_t();return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(fU,{children:[a.jsx(bt,{title:"Pagar",left:{type:"back"}}),a.jsxs("section",{children:[a.jsx(mf,{ballance:n==null?void 0:n.balance}),a.jsx("h3",{children:"Faça um pagamento usando um código gerado por um jogador"})]}),a.jsxs("section",{className:"form",children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"code",children:["Código ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"code",type:"number",placeholder:"Código do pagamento"})]}),a.jsx(wt,{title:"Continuar",onClick:()=>e("/bank/pix/pay/infos")})]})]})},pU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h3 {
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .name {
        color: #696975;
      }
    }

    .col {
      display: flex;
      flex-direction: column;

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }

  .MuiCheckbox-root {
    padding: 0;
    padding-left: 8px;
    color: #6638a6;
    &.Mui-checked {
      color: #6638a6;
    }
  }

  .MuiSvgIcon-root {
    font-size: 16px;
  }

  .MuiTypography-root {
    font-size: 10px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    align-self: end;
  }

  .submit {
    margin-top: 64px;
  }
`,mU=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),[n,r]=w.useState("Pagar"),[i,s]=w.useState("Copiar código"),[o,l]=w.useState(!1),c={owner:"sow",isPaid:!1},u=()=>{switch(c.owner){case"evol":r("Cobrar"),s("Copiar código");break;default:r("Pagar"),s("Confirmar");break}},d=()=>{l(!0);let f=setTimeout(()=>{e("/bank/confirmPay"),clearTimeout(f)},1e3)};return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}}),u()},[]),a.jsxs(pU,{children:[a.jsx(bt,{title:n,left:{type:"back"}}),a.jsxs("section",{children:[a.jsx("h3",{children:"Pagamento"}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Pagador"})," ",a.jsx("p",{children:"Evol"})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Rg"})," ",a.jsx("p",{children:"56456rgfdf23"})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Data"}),a.jsx("p",{children:"23/07/22"})]}),a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Hora"}),a.jsx("p",{children:"20:48"})]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Valor"})," ",a.jsx("p",{children:"R$ 12.000,00"})]}),a.jsx("div",{className:"row",children:a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Descrição"}),a.jsx("p",{children:"Pagamento de tal item para o cara la"})]})})]}),a.jsx("section",{className:"save",children:a.jsx(AC,{control:a.jsx(NC,{}),label:"Salvar contato"})}),a.jsx(wt,{title:i,loading:o,onClick:()=>d()})]})},gU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  .middle {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    img {
      width: 160px;
    }

    h2 {
      width: 80%;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }
  }

  .submit {
    margin-top: 8px;
  }
`,yU=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(gU,{children:[a.jsx(bt,{title:"Transação",left:{type:"close",action:()=>e("/bank/init")}}),a.jsxs("div",{className:"middle",children:[a.jsx(H.img,{initial:{opacity:.4,scale:.6},animate:{opacity:1,scale:1},transition:{ease:"easeIn",duration:.4},src:"src/assets/bank-confirmPayImg.svg",alt:"certificate illustration"}),a.jsx("h2",{children:"Transferência realizada com sucesso!"})]}),a.jsx(wt,{title:"Inicio",onClick:()=>e("/bank/init")})]})},vU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h4 {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .card {
    width: 100%;
    padding: 8px;
    background: rgba(225, 225, 230, 0.4);
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.2);

    svg,
    button {
      flex-shrink: 0;
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 12px;
      gap: 2px;
    }

    & > p {
      color: #202024;
      font-weight: 500;
    }

    span {
      display: flex;
      column-gap: 2px;
      flex-wrap: wrap;
      color: #575761;
      font-size: 10px;
    }

    strong {
      font-weight: 500;
    }

    button {
      padding: 6px;
      border-radius: 50%;
      background: #fff;
      box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    }
  }
`,xU=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t}=_t();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(vU,{children:[a.jsx(bt,{title:"Minhas chaves",left:{type:"back"}}),t&&a.jsxs("section",{children:[a.jsx("h4",{children:"Gerenciar chaves"}),t.keys.map(n=>a.jsxs("div",{className:"card",children:[a.jsx(Ok,{size:20,color:"#6638A6"}),a.jsxs("div",{children:[a.jsx("p",{children:n.title}),a.jsxs("span",{children:[a.jsx("p",{children:"Chave: "}),a.jsx("strong",{children:n.key})]})]}),a.jsx("button",{children:a.jsx(nF,{size:16,color:"#6638A6"})})]}))]})]})},wU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #e1e1e6;
  color: #121214;

  & > .head {
    width: 100%;
    display: flex;
    padding: 0 0 48px 0;
    background: #8b3ac2;

    svg,
    h2 {
      color: #f2f2fa;
      font-weight: 500;
    }
  }

  .main {
    margin-top: -44px;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .card {
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      background: #fcf8f4;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      align-items: center;
      gap: 6px;

      img {
        width: 40%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }

      p {
        font-size: 12px;
        font-weight: 500;
        text-align: start;
      }

      span {
        font-size: 10px;
      }
    }
  }

  .limit {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background: #fcf8f4;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h4 {
      font-size: 12px;
      font-weight: 500;
      color: #552e8c;
    }

    .bar {
      width: 100%;
      height: 8px;
      display: flex;
      justify-content: flex-start;
      background: #d9d9d9;
      border-radius: 2px;
      overflow: hidden;

      .fill {
        height: 100%;
        background: #8b3ac2;
      }
    }

    .values {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        font-size: 10px;
        font-weight: 500;
      }

      div:last-child {
        align-items: flex-end;
      }

      p {
        font-size: 12px;
      }

      .used p {
        color: #341959;
      }

      .free p {
        color: #8d8d99;
      }
    }
  }

  .invoice {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background: #fcf8f4;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h4 {
      font-size: 12px;
      font-weight: 500;
      color: #552e8c;
    }

    .values {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        font-size: 10px;
        font-weight: 500;
      }

      div:last-child {
        align-items: flex-end;
      }

      p {
        font-size: 12px;
      }

      .actual p {
        color: #341959;
      }

      .next p {
        color: #8d8d99;
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btn {
      width: 40%;
      padding: 8px;
      border-radius: 4px;
      background: #fcf8f4;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #202024;
      }
    }
  }

  .password {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    .card {
      padding: 8px;
      background: #fcf8f4;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p {
        color: #575761;
        font-size: 14px;
      }

      .value {
        display: flex;
        align-items: center;
        gap: 4px;

        p {
          font-size: 12px;
          font-weight: 500;
        }

        span {
          width: 45px;
          height: 12px;
          background: #8d8d99;
          border-radius: 4px;
          opacity: 0.6;
        }
      }

      .submit {
        margin-top: 8px;
      }
    }
  }
`,ry=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"}))};ry.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ry.defaultProps={color:"currentColor",size:"24"};const iy=ry,sy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"}))};sy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};sy.defaultProps={color:"currentColor",size:"24"};const zk=sy,bU=({setViewPasscard:e})=>{const[t,n]=w.useState(!0);return a.jsx(H.div,{initial:{background:"rgba(0, 0, 0, 0)"},animate:{background:"rgba(0, 0, 0, 0.4)"},exit:{opacity:0},transition:{ease:"easeInOut",duration:.6},className:"password",children:a.jsx(OC,{onClickAway:()=>e(!1),children:a.jsxs(H.div,{initial:{scale:.6},animate:{scale:1},transition:{ease:"easeIn",duration:.4,delay:.2},className:"card",children:[a.jsx(zk,{size:32,color:"#341959"}),a.jsx("p",{children:"Sua senha:"}),a.jsxs("div",{className:"value",children:[t?a.jsx("p",{children:"564897"}):a.jsx("span",{}),a.jsx("button",{onClick:()=>n(!t),children:t?a.jsx(Zg,{size:18,color:"#341959"}):a.jsx(Cl,{size:18,color:"#341959"})})]}),a.jsx(wt,{title:"Fechar",onClick:()=>e(!1)})]})})})},SU=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),[n,r]=w.useState(!1);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#e1e1e6",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#8B3AC2",color:"#f2f2fa"}})},[]),a.jsxs(wU,{children:[a.jsx(cr,{children:n&&a.jsx(bU,{setViewPasscard:r})}),a.jsx("div",{className:"head",children:a.jsx(bt,{title:"Cartão",left:{type:"close",action:()=>e("/bank/init")}})}),a.jsxs("section",{className:"main",children:[a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2},className:"card",children:[a.jsx("img",{src:"src/assets/Bank-BlackCard.png",alt:"credit card"}),a.jsxs("div",{children:[a.jsx("p",{children:"Soweto Chesterfield"}),a.jsx("span",{children:"2901-1090-1232"})]})]}),a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2,delay:.1},className:"limit",children:[a.jsx("h4",{children:"Limite"}),a.jsx("div",{className:"bar",children:a.jsx("span",{className:"fill",style:{width:"70%"}})}),a.jsxs("div",{className:"values",children:[a.jsxs("div",{className:"used",children:[a.jsx("span",{children:"Usado"}),a.jsx("p",{children:"R$ 8.000,00"})]}),a.jsxs("div",{className:"free",children:[a.jsx("span",{children:"Disponível"}),a.jsx("p",{children:"R$ 4.000,00"})]})]})]}),a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2,delay:.2},className:"invoice",children:[a.jsxs("button",{className:"head",onClick:()=>e("/bank/card/invoice"),children:[a.jsx("h4",{children:"Fatura"}),a.jsx(iy,{color:"#552E8C",size:16})]}),a.jsxs("div",{className:"values",children:[a.jsxs("div",{className:"actual",children:[a.jsx("span",{children:"Atual"}),a.jsx("p",{children:"R$ 2.000,00"})]}),a.jsxs("div",{className:"next",children:[a.jsx("span",{children:"Próxima"}),a.jsx("p",{children:"R$ 0,00"})]})]})]}),a.jsxs("div",{className:"buttons",children:[a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2,delay:.3},onClick:()=>e("/bank/card/limitAdjust"),className:"btn",children:[a.jsx(_k,{size:28,color:"#341959"}),a.jsx("p",{children:"Pedir limite"})]}),a.jsxs(H.button,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.2,delay:.4},className:"btn",onClick:()=>r(!0),children:[a.jsx(zk,{size:28,color:"#341959"}),a.jsx("p",{children:"Senha"})]})]})]})]})},CU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #f2f2fa;
  overflow: hidden !important;

  .graph {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    font-size: 10px;
    text-align: center;
    position: relative;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      p {
        font-weight: 500;
      }

      .bar {
        width: 8px;
        max-height: 64px;
        border-radius: 2px 2px 0 0;
        background: #8b3ac2;
      }

      small {
        margin-top: -2px;
        font-size: 10px;
      }
    }

    .border {
      width: 84%;
      height: 1px;
      position: absolute;
      bottom: 14px;
      left: 8%;
      background: #8d8d99;
    }
  }

  .invoices {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .invoices--card {
      width: 100%;
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: #fcf8f4;
      border-radius: 8px;
      box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      h4 {
        font-size: 12px;
        font-weight: 500;
        width: 100%;
        color: #552e8c;
      }

      p {
        font-size: 10px;
        text-align: center;
      }

      .value {
        font-size: 14px;
        font-weight: 600;
        color: #341959;
      }

      small {
        font-size: 10px;
        color: #7c7c8a;
      }
    }
  }

  .statement {
    overflow: hidden;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .statement--list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;

    svg,
    p {
      flex-shrink: 0;
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;

      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          font-size: 10px;
          font-weight: 500;
        }

        span {
          color: #125050;
          font-size: 10px;
        }
      }

      .value {
        font-size: 10px;
        font-weight: 600;
        color: #341959;
      }
    }
  }

  .submit {
    flex-shrink: 0;
  }
`,kU=()=>a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},className:"graph",children:[a.jsxs("div",{className:"item",children:[a.jsx("p",{children:"R$ 1.000,00"}),a.jsx("span",{className:"bar",style:{height:"calc(64px * 1 / 4)"}}),a.jsx("small",{children:"jul"})]}),a.jsxs("div",{className:"item",children:[a.jsx("p",{children:"R$ 4.000,00"}),a.jsx("span",{className:"bar",style:{height:"calc(64px * 3 / 4)"}}),a.jsx("small",{children:"ago"})]}),a.jsxs("div",{className:"item",children:[a.jsx("p",{children:"R$ 2.000,00"}),a.jsx("span",{className:"bar",style:{height:"calc(64px * 2 / 4)"}}),a.jsx("small",{children:"set"})]}),a.jsx("div",{className:"border"})]}),jU={enter:e=>({x:e>0?200:-200,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({x:e<0?100:-100,opacity:0})},PU=({page:e,direction:t,setPage:n})=>a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4,delay:.1},className:"invoices",children:[a.jsx("button",{onClick:()=>n([e-1,-1]),children:a.jsx(xk,{size:20,color:"#341959"})}),a.jsx(cr,{initial:!1,custom:t,exitBeforeEnter:!0,children:a.jsxs(H.div,{custom:t,variants:jU,initial:"enter",animate:"center",exit:"exit",transition:{x:{duration:.2,ease:"easeIn"},opacity:{duration:.2}},className:"invoices--card",children:[a.jsx("h4",{children:"Fatura aberta"}),a.jsxs("div",{children:[a.jsx("p",{children:"agosto - 2022"}),a.jsx("p",{className:"value",children:"R$ 1.600,00"})]}),a.jsx("small",{children:"Vencimento: 24/08/2022"})]},e)}),a.jsx("button",{onClick:()=>n([e+1,1]),children:a.jsx(iy,{size:20,color:"#341959"})})]}),EU=()=>a.jsxs(H.section,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4,delay:.2},className:"statement",children:[a.jsx("h4",{children:"Extrato da fatura"}),a.jsxs("ul",{className:"statement--list",children:[a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Mercado"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 400,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Mecânica"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 200,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Combustível"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 50,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Concessionária"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 100,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Mecânica"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 2400,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Combustivel"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 80,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Mercado"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 20,00"})]}),a.jsxs("li",{children:[a.jsxs("div",{children:[a.jsx("p",{children:"Mercado"}),a.jsx("span",{children:"03/07/22"})]}),a.jsx("p",{className:"value",children:"R$ 80,00"})]})]})]}),RU=()=>{const e=K(),[[t,n],r]=w.useState([0,0]),{SistemDispatch:i}=w.useContext(J);return w.useEffect(()=>{i({type:"showBottomNav"}),i({type:"setBottomNavStyles",values:{background:"#F2F2FA",color:"#101011"}}),i({type:"showStatusbar"}),i({type:"setStatusBarStyle",values:{background:"#F2F2FA",color:"#101011"}})},[]),a.jsxs(CU,{children:[a.jsx(bt,{title:"Faturas",left:{type:"back"}}),a.jsx(kU,{}),a.jsx(PU,{page:t,direction:n,setPage:r}),a.jsx(EU,{}),a.jsx(wt,{title:"Pagar",onClick:()=>e("/bank/confirmPay")})]})},MU=({newLimit:e,setNewLimit:t,limitRange:n})=>{const r=i=>{const s=Math.min(n.max,Number(i.target.value));t(s)};return a.jsxs("div",{className:"input",children:[a.jsxs("label",{htmlFor:"value",children:["Limite ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"value",type:"number",maxLength:4,value:e,onChange:i=>r(i),placeholder:"Novo limite desejado"})]})},TU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fcf8f4;

  & > h3 {
    width: 100%;
    padding: 0 36px 0 12px;
    font-size: 10px;
    font-weight: 500;
  }

  .limit {
    margin-top: 32px;
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;

    small {
      margin-bottom: 2px;
      width: 100%;
      text-align: end;
      font-size: 10px;
      color: #7c7c8a;
    }

    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;

      label {
        font-size: 10px;
        font-weight: 500;

        span {
          color: #ff5343;
        }
      }

      input,
      textarea {
        border: none;
        resize: none;
        width: 100%;
        padding: 8px;
        background: rgb(216, 216, 216, 0.6);
        font-size: 10px;
        border-radius: 4px;
        &::placeholder {
          color: #575761;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          display: none;
        }
      }
    }

    .feedbacks {
      margin-top: 64px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      font-weight: 500;

      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      span {
        width: 12px;
        height: 12px;
        background: #7c7c8a;
        border-radius: 4px;
      }

      .new {
        color: #552e8c;
        font-weight: 600;

        span {
          background: #552e8c;
        }
      }

      .max {
        color: #7c7c8a;
      }
    }
  }

  .submit {
    margin-top: 56px;
  }
`,Mw={max:8e3},_U=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J),[n,r]=w.useState(0);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(TU,{children:[a.jsx(bt,{left:{type:"back"},title:"Ajuste de limite"}),a.jsx("h3",{children:"Escolha o valor que você quer e ajuste o limite total do seu cartão"}),a.jsxs("div",{className:"limit",children:[a.jsx(MU,{newLimit:n,setNewLimit:r,limitRange:Mw}),a.jsxs("div",{className:"feedbacks",children:[a.jsxs("div",{className:"new",children:[a.jsx("span",{}),a.jsxs("p",{children:["Novo limite:"," ",n>0?`R$ ${n.toFixed(2)}`:"R$ 0,00"]})]}),a.jsxs("div",{className:"max",children:[a.jsx("span",{}),a.jsxs("p",{children:["Máximo: R$ ",Mw.max.toFixed(2)]})]})]})]}),a.jsx(wt,{title:"Pedir limite",onClick:()=>e("/bank/card/limitReview")})]})},OU=W.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  & > img {
    width: 80px;
    margin-bottom: -8px;
  }

  h4 {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  p {
    width: 90%;
    font-size: 10px;
    text-align: center;
    color: #505059;
    font-family: "Poppins", sans-serif;
  }
`,zU=()=>{const e=K(),{SistemDispatch:t}=w.useContext(J);return w.useEffect(()=>{t({type:"showBottomNav"}),t({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),t({type:"showStatusbar"}),t({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(OU,{children:[a.jsx("img",{src:"src/assets/Bank-reviewImg.png",alt:"desktop"}),a.jsx("h4",{children:"Em análise"}),a.jsx("p",{children:"Recebemos seu pedido e estamos analisando seus dados, em breve enviaremos uma notificação com seu novo limite."}),a.jsx(wt,{title:"Inicio",onClick:()=>e("/bank/init")})]})},NU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  main {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .head {
    width: 100%;
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-end;
    border-bottom: 2px solid #8d8d99;

    h4 {
      width: 100%;
      text-align: start;
      font-size: 10px;
      font-weight: 500;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: #341959;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-height: 240px;
    overflow-y: auto;

    .item {
      width: 100%;
      padding: 8px;
      background: rgba(225, 225, 230, 0.8);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      align-items: center;
      gap: 8px;

      .infos {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
      }

      svg,
      button {
        flex-shrink: 0;
      }

      p {
        font-weight: 500;
      }

      span {
        font-size: 10px;
        color: #575761;
      }

      button {
        background: #fff;
        padding: 2px;
        border-radius: 50%;
      }
    }

    .empty {
      width: 100%;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .submit {
    position: absolute;
    top: 400px;
  }
`,oy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M9.5,10.5H12a1,1,0,0,0,0-2H11V8A1,1,0,0,0,9,8v.55a2.5,2.5,0,0,0,.5,4.95h1a.5.5,0,0,1,0,1H8a1,1,0,0,0,0,2H9V17a1,1,0,0,0,2,0v-.55a2.5,2.5,0,0,0-.5-4.95h-1a.5.5,0,0,1,0-1ZM21,12H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Z"}))};oy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};oy.defaultProps={color:"currentColor",size:"24"};const AU=oy,ay=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"}))};ay.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ay.defaultProps={color:"currentColor",size:"24"};const LU=ay,Tw=[{value:5e3,date:"jan/22"},{value:3e3,date:"out/22"}],IU=()=>{const{SistemDispatch:e}=w.useContext(J),t=K();return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(NU,{children:[a.jsx(bt,{title:"Empréstimos",left:{type:"close",action:()=>t("/bank/init")}}),a.jsxs(H.main,{initial:{opacity:.4},animate:{opacity:1},transition:{ease:"easeIn",duration:.4},children:[a.jsxs("div",{className:"head",children:[a.jsx("h4",{children:"Crédito disponível para empréstimos:"}),a.jsx("p",{children:"R$ 10.000,00"})]}),a.jsx("ul",{className:"list",children:Tw.length>0?Tw.map((n,r)=>a.jsx($U,{value:n.value,date:n.date},r)):a.jsx(DU,{})})]}),a.jsx(wt,{title:"Novo empréstimo",onClick:()=>t("/bank/loan/simulate")})]})},$U=({value:e,date:t})=>{const n=K(),r=i=>{let s=i.toString().split(".");return s[0]=s[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),s.join(",")};return a.jsxs("li",{className:"item",children:[a.jsx(AU,{size:20,color:"#6638A6"}),a.jsxs("div",{className:"infos",children:[a.jsxs("p",{children:["R$ ",r(e.toFixed(2))]}),a.jsx("span",{children:t})]}),a.jsx("button",{onClick:()=>n("/bank/loan/pay"),children:a.jsx(iy,{size:20,color:"#6638A6"})})]})},DU=()=>a.jsxs("div",{className:"empty",children:[a.jsx(LU,{size:28,color:"#8B3AC2"}),a.jsx("p",{children:"Você não possui nenhum empréstimo ativo"})]}),BU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background: #fcf8f4;
  color: #29292e;

  main {
    margin-top: 24px;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

    label {
      font-size: 10px;
      font-weight: 500;

      span {
        color: #ff5343;
      }
    }

    input,
    textarea {
      border: none;
      resize: none;
      width: 100%;
      padding: 6px 8px;
      background: rgb(216, 216, 216, 0.6);
      font-size: 10px;
      border-radius: 4px;
      &::placeholder {
        color: #575761;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }
    }
  }

  .portion {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    strong {
      font-weight: 500;
    }
  }

  .total {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    p {
      font-size: 10px;
      font-weight: 500;
    }

    h4 {
      font-size: 20px;
      color: #140726;
      font-weight: 600;
    }

    small {
      font-size: 10px;
      color: #7c7c8a;
    }
  }
`,ly=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"}))};ly.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};ly.defaultProps={color:"currentColor",size:"24"};const FU=ly,cy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"}))};cy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};cy.defaultProps={color:"currentColor",size:"24"};const VU=cy,HU=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t}=_t();K();const[n,r]=w.useState(0),[i,s]=w.useState(4),o=d=>{let f=d.toString().split(".");return f[0]=f[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),f.join(",")},l=()=>o((n/i+n*.032).toFixed(2)),c=()=>o(((n/i+n*.032)*i).toFixed(2)),u=()=>{dn("execSimulate",{})};return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(BU,{children:[a.jsx(bt,{title:"Simular empréstimo",left:{type:"back"}}),a.jsxs("main",{children:[a.jsx(mf,{ballance:t==null?void 0:t.balance}),a.jsxs("div",{className:"input",children:[a.jsxs("label",{htmlFor:"value",children:["Valor desejado ",a.jsx("span",{children:"*"})]}),a.jsx("input",{onChange:d=>r(d.target.value),id:"value",type:"number",placeholder:"Valor"})]}),a.jsxs("div",{className:"portion",children:[a.jsxs("p",{children:[a.jsx("strong",{children:n>0?i:"0"})," parcelas de"," ",a.jsxs("strong",{children:["R$ ",l()]})]}),a.jsxs("div",{className:"btns",children:[a.jsx("button",{onClick:()=>s(i+1),children:a.jsx(FU,{size:20,color:"#6638A6"})}),a.jsx("button",{onClick:()=>s(i-1),children:a.jsx(VU,{size:20,color:"#6638A6"})})]})]}),a.jsxs("div",{className:"total",children:[a.jsx("p",{children:"Total a pagar"}),a.jsxs("h4",{children:["$ ",n>0?c():"0,00"]}),a.jsx("small",{children:"3.2 % ao mês"})]}),a.jsx(wt,{title:"Continuar",onClick:()=>u()})]})]})},WU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    h3 {
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .name {
        color: #696975;
      }
    }

    .col {
      display: flex;
      flex-direction: column;

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }

  .submit {
    margin-top: 48px;
  }
`,UU=()=>{const{SistemDispatch:e}=w.useContext(J);return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(WU,{children:[a.jsx(bt,{title:"Empréstimos",left:{type:"back"}}),a.jsxs("section",{children:[a.jsx("h3",{children:"Resumo do seu empréstimo"}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"A receber"})," ",a.jsx("p",{children:"R$ 5.000,00"})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Parcelas"})," ",a.jsx("p",{children:"8 x R$ 785,00"})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Pagador"}),a.jsx("p",{children:"Evol"})]}),a.jsxs("div",{className:"col",children:[a.jsx("p",{className:"name",children:"Conta"}),a.jsx("p",{children:"1596-0"})]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Forma de Pagamento"}),a.jsx("p",{children:"Debito em conta"})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Total a pagar:"})," ",a.jsx("p",{children:"R$ 6.280,00"})]})]}),a.jsx(wt,{title:"Confirmar"})]})},qU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fcf8f4;
  color: #29292e;

  main {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  main > h3 {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 0;
    border-bottom: 1px solid #8d8d99;

    span {
      color: #6638a6;
      font-weight: 600;
    }
  }

  .loanList {
    width: 100%;
    max-height: 240px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 8px;
      background: rgba(225, 225, 230, 0.6);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    }

    .mark {
      width: 16px;
      height: 16px;
      border: 2px solid #505059;
      border-radius: 4px;
      flex-shrink: 0;
      display: flex;
      transition: 0.2s ease-in-out;

      &.check {
        background: #552e8c;
      }

      svg {
        margin: -2px;
      }
    }

    .infos {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;

      p {
        font-size: 12px;
        font-weight: 500;
      }

      small {
        font-size: 10px;
        color: #575761;
      }
    }

    .price {
      width: 100%;
      text-align: end;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .total {
    width: 100%;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #8d8d99;

    p {
      font-size: 12px;
      font-weight: 600;
      color: #6638a6;
    }

    .submit {
      width: 80px;
    }
  }
`,GU=()=>{const{SistemDispatch:e}=w.useContext(J),[t,n]=w.useState(!1),r=K(),i=()=>{n(!0);const s=setTimeout(()=>{r("/bank/confirmPay"),clearTimeout(s)},3e3)};return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(qU,{children:[a.jsx(bt,{title:"Empréstimos",left:{type:"back"}}),a.jsxs("main",{children:[a.jsxs("h3",{children:["Parcelas referentes ao empréstimo de ",a.jsx("span",{children:"R$ 5.960,00"})]}),a.jsxs("ul",{className:"loanList",children:[a.jsx(Uo,{num:"1",venc:"16/jan/23"}),a.jsx(Uo,{num:"2",venc:"16/fev/23"}),a.jsx(Uo,{num:"3",venc:"16/mar/23"}),a.jsx(Uo,{num:"4",venc:"16/abr/23"}),a.jsx(Uo,{num:"5",venc:"16/mai/23"})]}),a.jsxs("div",{className:"total",children:[a.jsx("p",{children:"R$ 2.384,00"}),a.jsx(wt,{title:"Pagar",loading:t,onClick:()=>i()})]})]})]})},Uo=({num:e,venc:t})=>{const[n,r]=w.useState(!1);return a.jsxs("li",{onClick:()=>r(!n),children:[a.jsx("span",{className:`mark ${n&&"check"}`,children:n&&a.jsx(Sl,{size:18,color:"#f2f2fa"})}),a.jsxs("div",{className:"infos",children:[a.jsxs("p",{children:[e,"° parcela"]}),a.jsxs("small",{children:["venc: ",t]})]}),a.jsx("p",{className:"price",children:"R$ 1.192,00"})]})},KU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcf8f4;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .wrap {
      width: 100%;
      max-height: 320px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    h4 {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .card {
    width: 100%;
    padding: 4px 8px;
    background: rgba(225, 225, 230, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.2);

    h5 {
      font-size: 12px;
      font-weight: 500;
    }

    .key {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        font-size: 10px;
      }
    }

    strong {
      font-weight: 500;
    }

    .next {
      padding: 4px;
      border-radius: 50%;
      background: #f2f2fa;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  .card--col1,
  .card--col2 {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: flex-start;
  }

  .card--col2 {
    gap: 4px;
    align-items: flex-end;
  }
`,uy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"}))};uy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};uy.defaultProps={color:"currentColor",size:"24"};const ZU=uy,dy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"}))};dy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};dy.defaultProps={color:"currentColor",size:"24"};const YU=dy,XU=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t,removeContact:n}=_t(),r=i=>{n(i),dn("execDeleteBankContact",{id:i})};return w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#FCF8F4",color:"#101011"}})},[]),a.jsxs(KU,{children:[a.jsx(bt,{title:"Meus contatos",left:{type:"back"}}),a.jsxs("section",{children:[a.jsx("h4",{children:"Gerenciar contatos"}),a.jsx("div",{className:"wrap",children:a.jsx(cr,{children:(t==null?void 0:t.contacts)&&(t==null?void 0:t.contacts.map((i,s)=>a.jsx(QU,{id:i.id,name:`${i.bank.firstname} ${i.bank.lastname}`,pixKey:i.key.key,index:s,handleRemoveContact:r},s)))})})]})]})},QU=({id:e,name:t,pixKey:n,index:r,handleRemoveContact:i})=>{const s=K();return a.jsxs(H.div,{initial:{opacity:.4},animate:{opacity:1},exit:{translateX:200,opacity:0},transition:{ease:"backIn",duration:.4,delay:.1*r},className:"card",children:[a.jsxs("div",{className:"card--col1",children:[a.jsx("h5",{children:t}),a.jsxs("div",{className:"key",children:[a.jsx(Qg,{size:14,color:"#6638A6"}),a.jsxs("p",{children:["Chave: ",a.jsx("strong",{children:n})]})]})]}),a.jsxs("div",{className:"card--col2",children:[a.jsx("button",{className:"trash",onClick:()=>i(e),children:a.jsx(ZU,{size:14,color:"#E91C1C"})}),a.jsx("button",{className:"next",onClick:()=>s("/bank/pix/transfer/"+n),children:a.jsx(YU,{size:18,color:"#6638A6"})})]})]})},JU=W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fcf8f4;
  color: #101011;

  header {
    background: #8b3ac2;
    color: #fcf8f4;
    padding-bottom: 16px;
    border-radius: 0 0 12px 12px;

    svg {
      color: #fcf8f4;
    }

    .user {
      width: 100%;
      padding: 0 12px;
      display: flex;
      gap: 8px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        font-size: 12px;
      }

      span {
        font-size: 10px;
        font-weight: 300;
      }
    }

    .avatar {
      border: 2px solid white;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 16px;
  }

  .nick {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    gap: 4px;
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: 1px solid #c4c4cc;

    span {
      color: #696975;
    }

    p {
      width: 100%;
      text-align: end;
    }

    input {
      width: 100%;
      text-align: end;
      font-size: 12px;
      background: rgba(225, 225, 230, 0.8);
      padding: 2px 4px;
      border-radius: 4px;
    }

    svg {
      flex-shrink: 0;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h3 {
      width: 100%;
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #c4c4cc;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .name {
        color: #696975;
      }
    }

    .col {
      display: flex;
      flex-direction: column;

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }

  .version {
    margin-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    font-weight: 500;
    padding: 4px 0;
    border-bottom: 1px solid #c4c4cc;
  }
`,fy=e=>{const{color:t,size:n,...r}=e;return I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},I.createElement("path",{d:"M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"}))};fy.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};fy.defaultProps={color:"currentColor",size:"24"};const eq=fy,tq=()=>{const{SistemDispatch:e}=w.useContext(J),{bank:t}=_t();w.useEffect(()=>{e({type:"showBottomNav"}),e({type:"setBottomNavStyles",values:{background:"#FCF8F4",color:"#101011"}}),e({type:"showStatusbar"}),e({type:"setStatusBarStyle",values:{background:"#8B3AC2",color:"#FCF8F4"}})},[]);const n=r=>{const i=new Date(r*1e3),s=i.getDate().toString().padStart(2,"0"),o=(i.getMonth()+1).toString().padStart(2,"0"),l=i.getFullYear();return`${s}/${o}/${l}`};return a.jsxs(JU,{children:[a.jsxs("header",{children:[a.jsx(bt,{title:"Meu perfil",left:{back:"back"}}),a.jsxs("div",{className:"user",children:[a.jsx(ce,{url:t==null?void 0:t.picture,size:32}),a.jsxs("div",{children:[a.jsxs("p",{children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]}),a.jsx("span",{children:t==null?void 0:t.agency})]})]})]}),a.jsxs("main",{children:[a.jsxs("section",{children:[a.jsx("h3",{children:"Cadastro"}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Nome"}),a.jsxs("p",{children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Conta"})," ",a.jsx("p",{children:t==null?void 0:t.agency})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"RG"})," ",a.jsx("p",{children:"1"})]}),a.jsxs("div",{className:"row",children:[a.jsx("p",{className:"name",children:"Ativo desde"}),a.jsx("p",{children:n(t==null?void 0:t.createdAt)})]})]}),a.jsxs("div",{className:"version",children:[a.jsx(eq,{size:14,color:"#341959"}),a.jsx("p",{children:"V 1.0"})]})]})]})},nq=()=>a.jsxs(bo,{children:[a.jsx(G,{path:"/",element:a.jsx(MW,{})}),a.jsx(G,{path:"/onboard",element:a.jsx(_W,{})}),a.jsx(G,{path:"/auth/*",element:a.jsx(VW,{})}),a.jsx(G,{path:"/review",element:a.jsx(WW,{})}),a.jsx(G,{path:"/login",element:a.jsx(qW,{})}),a.jsx(G,{path:"/init",element:a.jsx(JW,{})}),a.jsx(G,{path:"/pix",element:a.jsx(iU,{})}),a.jsx(G,{path:"/pix/transfer",element:a.jsx(Rw,{})}),a.jsx(G,{path:"/pix/transfer/:id",element:a.jsx(Rw,{})}),a.jsx(G,{path:"/pix/transfer/infos",element:a.jsx(cU,{})}),a.jsx(G,{path:"/pix/charge",element:a.jsx(dU,{})}),a.jsx(G,{path:"/pix/pay",element:a.jsx(hU,{})}),a.jsx(G,{path:"/pix/pay/infos",element:a.jsx(mU,{})}),a.jsx(G,{path:"/confirmPay",element:a.jsx(yU,{})}),a.jsx(G,{path:"/pix/contacts",element:a.jsx(XU,{})}),a.jsx(G,{path:"/pix/keys",element:a.jsx(xU,{})}),a.jsx(G,{path:"/card",element:a.jsx(SU,{})}),a.jsx(G,{path:"/card/invoice",element:a.jsx(RU,{})}),a.jsx(G,{path:"/card/limitAdjust",element:a.jsx(_U,{})}),a.jsx(G,{path:"/card/limitReview",element:a.jsx(zU,{})}),a.jsx(G,{path:"/loan",element:a.jsx(IU,{})}),a.jsx(G,{path:"/loan/simulate",element:a.jsx(HU,{})}),a.jsx(G,{path:"/loan/generate",element:a.jsx(UU,{})}),a.jsx(G,{path:"/loan/pay",element:a.jsx(GU,{})}),a.jsx(G,{path:"/profile",element:a.jsx(tq,{})})]}),rq=W.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: left;

  p {
    font-size: 14px;
  }
`,iq=()=>{const[e,t]=w.useState([]),{addEventListener:n}=$r();return n("onRefreshContacts",r=>{t(r)}),a.jsx(H.div,{style:{height:"100%",overflowY:"auto"},initial:{backgroundColor:"transparent"},animate:{backgroundColor:"#09090a"},exit:{backgroundColor:"#000000"},transition:{ease:"easeInOut",duration:.4},children:a.jsxs(rq,{children:[a.jsx("h1",{children:"Lista de Contatos"}),a.jsx("p",{children:"___________________"}),a.jsx("br",{}),(e==null?void 0:e.length)>0?e==null?void 0:e.map((r,i)=>a.jsx("div",{children:a.jsxs("p",{children:["Nome: ",a.jsx("b",{children:r.name})," Numero: ",a.jsx("b",{children:r.number})]})})):a.jsx("p",{children:"Nenhum contato encontrado"}),a.jsx("div",{})]})})},Nk=w.createContext(void 0),Ak=()=>{const e=w.useContext(Nk);if(!e)throw new Error("useNotifications must be used within a NotificationsProvider");return e},sq=new bl({key:"pushNotifies",default:{new:!1,type:"",user:"",message:"",handleRemoveCard:()=>{}}}),oq=({children:e})=>{const[t,n]=w.useState([{type:"bank",user:"Soweto336",message:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa odio iste maiores adipisci in",id:3}]),[r,i,s]=rk(sq),o=u=>{n(d=>[...d,{...u,id:d.length+1}]),i({new:!0,...u,handleRemoveCard:()=>{}})},l=u=>{n(t.filter(d=>d.id!==u))},c=()=>{n([])};return w.useEffect(()=>{const u=setTimeout(()=>{s(),clearTimeout(u)},4e3)},[r]),a.jsx(Nk.Provider,{value:{notifications:t,addNotification:o,removeNotification:l,removeAllNotifications:c},children:e})},aq=()=>{const e=Lr(),t=K(),{addEventListener:n}=$r(),{setInitialBank:r}=_t(),{addNotification:i,removeNotification:s,removeAllNotifications:o}=Ak();return w.useEffect(()=>{dn("onNUILoaded",{})},[]),n("setPhoneRoute",l=>t(l.route)),n("addPushNotification",l=>{i(l)}),n("removePushNotification",l=>{s(l)}),n("removeAllPushNotifications",()=>{o()}),n("execBankUpdateData",l=>{r(l)}),a.jsx(cr,{mode:"wait",children:a.jsxs(bo,{location:e,children:[a.jsx(G,{path:"/",element:a.jsx(PD,{})}),a.jsx(G,{path:"/onboarding/*",element:a.jsx(rA,{})}),a.jsx(G,{path:"/home",element:a.jsx(N$,{})}),a.jsx(G,{path:"/instagram/*",element:a.jsx(kw,{})}),a.jsx(G,{path:"/instagram/*",element:a.jsx(kw,{})}),a.jsx(G,{path:"/whats/*",element:a.jsx(PW,{})}),a.jsx(G,{path:"/bank/*",element:a.jsx(nq,{})}),a.jsx(G,{path:"/contacts/*",element:a.jsx(iq,{})})]},e.pathname)})},lq=pE`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
  user-select: none;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
}

#root {
  width: 100vw;
  height: 100vh;
  position: relative;
}

a {
  color: inherit;
  -webkit-user-drag: none;
}

img {
  display: block;
  width: 100%;
  -webkit-user-drag: none;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
}

input {
  background: none;
  outline: none;
  border: none;
}

p {
  word-break: break-word;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}

`,cq=W.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background: ${({statusbarstyle:e})=>e.background};
  transition: all 0.4s ease-in-out;
  z-index: 100;

  * {
    z-index: 100;
  }

  svg {
    font-size: 13px;
    color: ${({statusbarstyle:e})=>e.color};
  }

  .left {
    max-width: 48%;
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    font-size: 10px;
    font-weight: 600;
    color: ${({statusbarstyle:e})=>e.color};
  }

  .right {
    max-width: 48%;
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    gap: 2px;
  }

  .notifications {
    z-index: 20;
    .handle {
      width: 100%;
      height: 38px;
    }
  }

  .NotifyCard {
    width: 90%;
    margin: 0 auto;
    padding: 8px;
    background-color: rgba(80, 81, 79, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    color: #f6f6f6;

    & > section {
      display: flex;
      gap: 8px;
    }

    .head {
      flex-shrink: 0;
      display: flex;
      align-items: flex-start;
      position: relative;

      .avatar img {
        border-radius: 8px !important;
      }

      .appIcon {
        position: absolute;
        top: 20px;
        right: -4px;
        width: 16px;
        border-radius: 50%;
      }
    }

    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      p {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .content--head {
        display: flex;
        align-items: center;
        gap: 4px;

        h5 {
          font-size: 9px;
          font-weight: 500;
        }

        small {
          font-size: 8px;
          font-weight: 300;
        }
      }

      .content--msg {
        display: flex;
        align-items: flex-start;
        max-height: 32px;
        font-size: 8px;
        font-weight: 400;
        overflow-y: hidden;
      }
    }

    .btns {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      button {
        color: #38eed8;
        font-size: 9px;
        font-weight: 600;
      }

      span.divider {
        width: 1px;
        height: 100%;
        background: #38eed8;
      }
    }

    &.card {
      gap: 4px;
      .app {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          font-size: 12px;
          color: #f6f6f6;
        }

        p {
          font-size: 10px;
        }
      }

      .content--msg {
        flex-direction: column;
        max-height: none;
        gap: 2px;

        h5 {
          font-size: 9px;
          font-weight: 500;
        }

        p {
          font-size: 8px;
          max-height: 32px;
        }
      }

      .content {
        flex-direction: row;
        gap: 8px;
      }
    }

    .configBtn {
      position: absolute;
      right: 8px;
      top: 4px;

      svg {
        font-size: 10px;
        color: #7c7c8a;
      }
    }
  }
`,uq=W.div`
  width: 100%;
  height: 100%;
  padding: 40px 8px 48px;
  background-color: rgba(16, 16, 17, 0.8);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 110;
  color: #f6f6f6;
  font-size: 11px;
  font-weight: 500;
  overflow: hidden;

  .date {
    font-size: 10px;
  }

  .btnsContainer {
    width: 100%;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    flex-shrink: 0;
    svg {
      font-size: 16px;
    }
  }

  .light {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 18px;
      color: #c4c4cc;
      flex-shrink: 0;
    }

    .lightBar {
      width: 100%;
      height: 4px;
      border-radius: 8px;
      background-color: rgba(124, 124, 138, 1);

      .controll {
        margin-top: -8px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #f6f6f6;
        transition: linear;
      }

      .fillbar {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #2a66ff;
        transform-origin: 0% 50%;
        transition: linear;
      }
    }
  }

  .notifies {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    overflow-y: auto;

    .NotifyCard {
      width: 100%;
      padding: 8px;
      background-color: rgba(124, 124, 138, 0.4);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: relative;

      & > section {
        display: flex;
        gap: 8px;
      }

      .head {
        flex-shrink: 0;
        display: flex;
        align-items: flex-start;
        position: relative;

        .avatar img {
          border-radius: 8px !important;
        }

        .appIcon {
          position: absolute;
          top: 20px;
          right: -4px;
          width: 16px;
          border-radius: 50%;
        }
      }

      .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        p {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .content--head {
          display: flex;
          align-items: center;
          gap: 4px;

          h5 {
            font-size: 9px;
            font-weight: 500;
          }

          small {
            font-size: 8px;
            font-weight: 300;
          }
        }

        .content--msg {
          display: flex;
          align-items: flex-start;
          max-height: 32px;
          font-size: 8px;
          font-weight: 400;
          overflow-y: hidden;
        }
      }

      .btns {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        button {
          color: #38eed8;
          font-size: 9px;
          font-weight: 600;
        }

        span.divider {
          width: 1px;
          height: 100%;
          background: #38eed8;
        }
      }

      &.card {
        gap: 4px;
        .app {
          display: flex;
          align-items: center;
          gap: 8px;

          svg {
            font-size: 12px;
            color: #f6f6f6;
          }

          p {
            font-size: 10px;
          }
        }

        .content--msg {
          flex-direction: column;
          max-height: none;
          gap: 2px;

          h5 {
            font-size: 9px;
            font-weight: 500;
          }

          p {
            font-size: 8px;
            max-height: 32px;
          }
        }

        .content {
          flex-direction: row;
          gap: 8px;
        }
      }

      .configBtn {
        position: absolute;
        right: 8px;
        top: 4px;

        svg {
          font-size: 10px;
          color: #7c7c8a;
        }
      }
    }
  }

  .actions {
    margin-top: -8px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    button {
      font-size: 9px;
      font-weight: 500;
      color: #f6f6f6;
    }
  }
`,dq=W.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({active:e})=>e?"#2A66FF":"#7c7c8a"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s linear;

  svg {
    font-size: 16px;
    color: #f2f2f2;
  }
`;function fq(e){return U({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,96H24L128,32Z",opacity:"0.2"}},{tag:"path",attr:{d:"M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z"}}]})(e)}const Lk=({type:e,id:t,User:n,Message:r,hanldeRemoveCard:i,push:s})=>{const o=(l,c)=>{i(t)};return e=="bank"?a.jsxs(H.div,{drag:"x",onDragEnd:(l,c)=>o(),dragConstraints:{left:0,right:80},dragMomentum:!1,initial:{opacity:0,y:s?-120:"none"},animate:{opacity:1,x:0,y:s?0:"none"},exit:{opacity:.5,x:220},transition:{duration:.4,ease:"easeOut"},className:"NotifyCard card",children:[a.jsxs("div",{className:"app",children:[a.jsx(fq,{}),a.jsx("p",{children:"Low Bank"})]}),a.jsx("div",{className:"content",children:a.jsx("div",{className:"content--msg",children:a.jsx("p",{children:r})})}),a.jsx(_h,{})]}):e==="chat"?a.jsxs(H.div,{drag:"x",onDragEnd:(l,c)=>o(),dragConstraints:{left:0,right:80},dragMomentum:!1,initial:{opacity:.5,x:-220},animate:{opacity:1,x:0},exit:{opacity:.5,x:220},transition:{duration:.4,ease:"easeOut"},className:"NotifyCard",children:[a.jsxs("section",{children:[a.jsxs("div",{className:"head",children:[a.jsx(ce,{size:32}),a.jsx("img",{className:"appIcon",src:"src/assets/WhatsIcon.png"})]}),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"content--head",children:[a.jsx("h5",{children:n}),a.jsx("small",{children:"12:50"})]}),a.jsx("p",{className:"content--msg",children:r})]})]}),!s&&a.jsxs("div",{className:"btns",children:[a.jsx("button",{children:"Responder"}),a.jsx("span",{className:"divider"}),a.jsx("button",{onClick:()=>i(t),children:"Marcar como lido"})]}),a.jsx(_h,{})]}):a.jsxs(H.div,{drag:"x",onDragEnd:(l,c)=>o(),dragConstraints:{left:0,right:80},dragMomentum:!1,initial:{opacity:0,y:s?-120:"none"},animate:{opacity:1,x:0,y:s?0:"none"},exit:{opacity:.5,x:220},transition:{duration:.4,ease:"easeOut"},className:"NotifyCard card",children:[a.jsxs("div",{className:"app",children:[a.jsx(GD,{}),a.jsx("p",{children:"Instagram"})]}),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"content--msg",children:[a.jsx("h5",{children:n}),a.jsx("p",{children:r})]}),a.jsx(ce,{size:32})]}),a.jsx(_h,{})]})},_h=()=>a.jsx("button",{className:"configBtn",children:a.jsx(ID,{})}),hq=()=>a.jsxs("div",{className:"btnsContainer",children:[a.jsx(_i,{active:!0,IconOn:a.jsx(hB,{}),IconOff:a.jsx(fB,{})}),a.jsx(_i,{active:!0,IconOn:a.jsx(CH,{}),IconOff:a.jsx(SH,{})}),a.jsx(_i,{IconOn:a.jsx(aB,{}),IconOff:a.jsx(lB,{})}),a.jsx(_i,{IconOn:a.jsx(iB,{}),IconOff:a.jsx(sB,{})}),a.jsx(_i,{IconOn:a.jsx(kh,{}),IconOff:a.jsx(Ch,{})}),a.jsx(_i,{IconOn:a.jsx(kh,{}),IconOff:a.jsx(Ch,{})}),a.jsx(_i,{IconOn:a.jsx(kh,{}),IconOff:a.jsx(Ch,{})})]}),_i=({active:e,IconOn:t,IconOff:n})=>{const[r,i]=w.useState(e);return a.jsx(dq,{onClick:()=>i(!r),active:String(r),children:r?t:n})},pq=()=>{const e=po(0),t=KS(),n=ju(e,[0,175],[0,1]),r=i=>{t.start(i,{snapToCursor:!0})};return a.jsxs("div",{className:"lightBar",onPointerDown:r,children:[a.jsx(H.div,{className:"fillbar",style:{scaleX:n}}),a.jsx(H.div,{className:"controll",drag:"x",dragControls:t,dragConstraints:{left:0,right:175},dragMomentum:!1,dragElastic:0,style:{x:e}})]})},mq=()=>{const e={dia:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],mes:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},t=new Date,n=`${e.dia[t.getDay()]}., ${t.getDate()} de ${e.mes[t.getMonth()]}`;return a.jsx("div",{className:"date",children:n})},gq=new bl({key:"pushNotifies",default:{new:!1,type:"",user:"",message:"",hanldeRemoveCard:()=>{}}}),yq=({controls:e})=>{const{notifications:t,removeAllNotifications:n,removeNotification:r}=Ak();return a.jsxs(uq,{children:[a.jsx(mq,{}),a.jsx(hq,{}),a.jsxs("div",{className:"light",children:[a.jsx(GH,{}),a.jsx(pq,{})]}),a.jsx(H.div,{className:"notifies",children:a.jsx(cr,{initial:!1,children:t.map(i=>a.jsx(Lk,{User:i.user,Message:i.message,id:i.id,hanldeRemoveCard:r,type:i.type,push:!1},i.id))})}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{children:"Configurações"}),a.jsx("button",{onClick:()=>n(),children:"Limpar"})]})]})},vq=()=>{const{SistemState:e,notificationsHanldes:t}=w.useContext(J),n=lg(gq),r=()=>{const u=new Date,d=f=>("0"+f).slice(-2);return`${u.getHours()}:${d(u.getMinutes())}`},[i,s]=w.useState(r()),{HandleY:o,controls:l}=t(),c=(u,d)=>{o.get()>=-400?l.start("open"):l.start("hidden")};return w.useEffect(()=>{setInterval(()=>{s(r())},1e3)},[]),a.jsxs(cq,{statusbarstyle:e.statusbarstyle,children:[a.jsx("div",{className:"left",children:i}),a.jsxs("div",{className:"right",children:[a.jsx(uB,{}),a.jsx(pB,{}),a.jsx(cB,{})]}),a.jsxs(H.div,{drag:!n.new&&"y",initial:"hidden",animate:l,transition:{type:"spring",damping:40,stiffness:400},variants:{hidden:{y:-500},open:{y:0}},onDragEnd:c,dragConstraints:{top:-500,bottom:0},dragElastic:0,dragMomentum:!1,style:{position:"absolute",width:"100%",height:"100%",left:0,top:0,y:o},className:"notifications",children:[a.jsx(yq,{controls:l}),a.jsx("div",{className:"handle"}),a.jsx(cr,{mode:"wait",children:n.new&&a.jsx(Lk,{User:n.user,type:n.type,Message:n.message,hanldeRemoveCard:n.hanldeRemoveCard,push:!0,id:!0})})]})]})},xq=W.div`
  width: 100%;
  padding: 12px 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  * {
    z-index: 100;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background: ${({bottomstyles:e})=>e.background};
  }

  .bars {
    transform: rotate(90deg);
  }
  svg {
    color: ${({bottomstyles:e})=>e.color};
    font-size: 12px;
  }
`,wq=()=>{const{SistemState:e,notificationsHanldes:t}=w.useContext(J),{controls:n,HandleY:r}=t(),i=K(),s=()=>{if(r.get()>-250){n.start("hidden");return}i(-1)},o=()=>{r.get()>-250&&n.start("hidden"),i("/home")};return a.jsxs(xq,{bottomstyles:e.bottomNavStyles,children:[a.jsx("div",{className:"background"}),a.jsx("button",{children:a.jsx(xH,{className:"bars"})}),a.jsx("button",{onClick:()=>o(),children:a.jsx(kH,{})}),a.jsx("button",{onClick:()=>s(),children:a.jsx(wH,{})})]})},bq=()=>{const{SistemState:e}=w.useContext(J),t=Lr();return a.jsxs(a.Fragment,{children:[a.jsx(lq,{}),a.jsx(yE,{path:t.pathname,children:a.jsxs(oq,{children:[e.showStatusbar&&a.jsx(vq,{}),a.jsx(jD,{children:a.jsx(nA,{children:a.jsx(RW,{children:a.jsx(pH,{children:a.jsx(aq,{})})})})}),e.showBottomNav&&a.jsx(wq,{})]})})]})},Sq=W.div`
  width: 228px;
  height: 493px;
  position: absolute;
  left: 0px;
  top: 0px;

  .frame {
    position: absolute;
    width: 250px;
    height: 522px;
    top: -8px;
    left: -9px;
    z-index: 1000;
    background: url("src/assets/frame.png") no-repeat;
    background-size: contain;
    pointer-events: none;
  }

  .move {
    position: absolute;
    width: 25px;
    height: 25px;
    right: -45px;
    top: -20px;
    opacity: 0.5;
    transition: 0.6s;
  }

  .move:hover {
    opacity: 1;
  }
`,Cq=W.div`
  width: 100%;
  height: 100vh;
`,kq=()=>{const[e,t]=I.useState({x:20,y:20,margin:0});return I.useState(null),a.jsx(Cq,{children:a.jsx(tA,{children:a.jsxs(Sq,{style:{left:e.x+"px",top:e.y+"px"},children:[a.jsx("div",{className:"frame"}),a.jsx(bq,{})]})})})};zh.createRoot(document.getElementById("root")).render(a.jsx(iP,{children:a.jsx(kq,{})}));
