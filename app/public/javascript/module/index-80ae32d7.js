var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var f=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,f,a=l(e),c=1;c<arguments.length;c++){for(var i in r=Object(arguments[c]))o.call(r,i)&&(a[i]=r[i]);if(n){f=n(r);for(var s=0;s<f.length;s++)u.call(r,f[s])&&(a[f[s]]=r[f[s]])}}return a},a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,y=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,m=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,h=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,_=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,S="function"==typeof Symbol&&Symbol.iterator;function w(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||E}function C(){}function k(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||E}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw w(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=j.prototype;var R=k.prototype=new C;R.constructor=k,f(R,j.prototype),R.isPureReactComponent=!0;var x={current:null},P={suspense:null},$={current:null},I=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n=void 0,o={},u=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)I.call(t,n)&&!L.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),i=0;i<f;i++)a[i]=arguments[i+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:c,type:e,key:u,ref:l,props:o,_owner:$.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var U=/\/+/g,F=[];function M(e,t,r,n){if(F.length){var o=F.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>F.length&&F.push(e)}function q(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case c:case i:l=!0}}if(l)return n(o,t,""===r?"."+D(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var a=r+D(u=t[f],f);l+=e(u,a,n,o)}else if(a=null===t||"object"!=typeof t?null:"function"==typeof(a=S&&t[S]||t["@@iterator"])?a:null,"function"==typeof a)for(t=a.call(t),f=0;!(u=t.next()).done;)l+=e(u=u.value,a=r+D(u,f++),n,o);else if("object"===u)throw n=""+t,w(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function V(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,n,r,function(e){return e}):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(U,"$&/")+"/")+r)),n.push(e))}function z(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(U,"$&/")+"/"),q(e,B,t=M(t,u,n,o)),N(t)}function H(){var e=x.current;if(null===e)throw w(Error(321));return e}var W={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return z(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,V,t=M(null,null,t,r)),N(t)},count:function(e){return q(e,function(){return null},null)},toArray:function(e){var t=[];return z(e,t,null,function(e){return e}),t},only:function(e){if(!T(e))throw w(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:m,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:_,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:s,Profiler:y,StrictMode:p,Suspense:h,unstable_SuspenseList:v,createElement:A,cloneElement:function(e,t,r){if(null==e)throw w(Error(267),e);var n=void 0,o=f({},e.props),u=e.key,l=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,a=$.current),void 0!==t.key&&(u=""+t.key);var i=void 0;for(n in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)I.call(t,n)&&!L.hasOwnProperty(n)&&(o[n]=void 0===t[n]&&void 0!==i?i[n]:t[n])}if(1===(n=arguments.length-2))o.children=r;else if(1<n){i=Array(n);for(var s=0;s<n;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:c,type:e.type,key:u,ref:l,props:o,_owner:a}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=P.suspense;P.suspense=void 0===t?null:t;try{e()}finally{P.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:P,ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:f}},Y={default:W},G=Y&&W||Y,J=G.default||G,K=r(function(e){e.exports=J}),Q=(K.Children,K.createRef,K.Component,K.PureComponent,K.createContext,K.forwardRef,K.lazy),X=K.memo,Z=(K.useCallback,K.useContext),ee=K.useEffect,te=(K.useImperativeHandle,K.useDebugValue,K.useLayoutEffect,K.useMemo,K.useReducer),re=(K.useRef,K.useState),ne=K.Fragment,oe=(K.Profiler,K.StrictMode,K.Suspense),ue=(K.unstable_SuspenseList,K.createElement,K.cloneElement);K.createFactory,K.isValidElement,K.version,K.unstable_withSuspenseConfig,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;export{K as R,ee as a,re as b,r as c,te as d,Q as e,oe as f,K as g,e as h,Z as i,ue as j,ne as k,f as m,X as r,t as u};