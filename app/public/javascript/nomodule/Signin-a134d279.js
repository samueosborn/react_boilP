System.register(["./index-b0513f57.js","./index-272f0464.js","./defineProperty-a1089ec5.js","./slicedToArray-4acdf83a.js","./toConsumableArray-62f8d598.js","./common-d400c37d.js","./api-79424633.js","./actionTypes-b0d14a88.js","./index-fbae8ffb.js","./extends-0c7a6a58.js","./objectWithoutProperties-6039c2e9.js","./Pager-f37bd16c.js","./index-e4d520eb.js","./Icons-c6c555dc.js"],function(e,n){"use strict";var t,o,c,i,a,r,s,u,f,l;return{setters:[function(e){t=e.a,o=e.R},function(e){c=e.L,i=e.n},function(){},function(){},function(){},function(){},function(){},function(){},function(e){a=e.u},function(){},function(){},function(e){r=e.P},function(e){s=e.L,u=e.E,f=e.P,l=e.A},function(){}],execute:function(){e("default",a()(function(e){var a=e.dispatch;t(function(){n.import("./common-d400c37d.js").then(function(e){(0,e.autoSignin)()})},[]);return o.createElement(r,null,o.createElement("div",{className:"header"},o.createElement(c,{to:"/",className:"exit"},"Cancel"),o.createElement("h5",null,"Sign In")),o.createElement("div",null,o.createElement("form",{onSubmit:function(e){e.preventDefault(),n.import("./index-2d74275c.js").then(function(e){var t=e.api,o=e.types,c=new FormData(document.querySelector("form"));n.import("./index-f2503f13.js").then(function(e){return(0,e.useFetch)(t.signin,c).then(function(e){n.import("./common-d400c37d.js").then(function(n){var t=n.setUserStore,r=n.saveCredentials;if(e)return t(e),a({type:o.SET_SESSION,payload:e}),r(e.email,c.get("password")),a({type:o.SET_BUTTON,payload:!1}),i("/home");a({type:o.SET_BUTTON,payload:!1})})})})})}},o.createElement(s,null,u({placeholder:"email",autoFocus:!0})),o.createElement(s,null,f({placeholder:"Password"})),o.createElement(l,null,"Sign In")),o.createElement(c,{to:"/reset"},"Forgot password?")))}))}}});