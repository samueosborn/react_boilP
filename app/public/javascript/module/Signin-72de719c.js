import{a as e,R as t}from"./index-80ae32d7.js";import{L as a,n as o}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import"./common-27892a1c.js";import"./api-17772ac6.js";import"./actionTypes-edbc1405.js";import{u as r}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as n}from"./Pager-96b949a7.js";import{L as i,E as s,P as m,A as c}from"./index-307e5487.js";import"./Icons-5efe7a19.js";var l=r()(function(r){var l=r.dispatch;e(function(){import("./common-27892a1c.js").then(function(e){(0,e.autoSignin)()})},[]);return t.createElement(n,null,t.createElement("div",{className:"header"},t.createElement(a,{to:"/",className:"exit"},"Cancel"),t.createElement("h5",null,"Sign In")),t.createElement("div",null,t.createElement("form",{onSubmit:function(e){e.preventDefault(),import("./index-e62460c9.js").then(function(e){var t=e.api,a=e.types,r=new FormData(document.querySelector("form"));import("./index-d963c8b9.js").then(function(e){return(0,e.useFetch)(t.signin,r).then(function(e){import("./common-27892a1c.js").then(function(t){var n=t.setUserStore,i=t.saveCredentials;if(e)return n(e),l({type:a.SET_SESSION,payload:e}),i(e.email,r.get("password")),l({type:a.SET_BUTTON,payload:!1}),o("/home");l({type:a.SET_BUTTON,payload:!1})})})})})}},t.createElement(i,null,s({placeholder:"email",autoFocus:!0})),t.createElement(i,null,m({placeholder:"Password"})),t.createElement(c,null,"Sign In")),t.createElement(a,{to:"/reset"},"Forgot password?")))});export default l;
