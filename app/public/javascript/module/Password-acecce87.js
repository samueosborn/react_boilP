import{R as e}from"./index-80ae32d7.js";import{L as r,n as t}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import"./common-27892a1c.js";import{a}from"./api-17772ac6.js";import{t as s}from"./actionTypes-edbc1405.js";import{u as o}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as n}from"./Pager-96b949a7.js";import{L as m,P as c,A as l}from"./index-307e5487.js";import{B as i}from"./Icons-5efe7a19.js";import{A as p,a as d}from"./index-0d44c75a.js";var u=o()(function(o){var u=o.dispatch,f=function(e){return e.append("password",document.querySelector("input[name=password]").value),u({type:s.SET_AUTHORIZE,payload:{status:!1}}),d(a.updatePassword,e).then(function(){return u({type:s.SET_BUTTON,payload:!1}),t("#/security")})};return e.createElement(n,null,e.createElement("div",{className:"header"},e.createElement("div",{className:"back"},e.createElement(r,{to:"#/security"},e.createElement(i,null))),e.createElement("h5",null,"New ",e.createElement("br",null),"Password")),e.createElement("div",null,e.createElement("form",{onSubmit:function(e){e.preventDefault();var r=new FormData(document.querySelector("form"));return r.get("new_password")!==r.get("confirm_password")&&p("Password mismatch"),e.target.new_password.value="",e.target.confirm_password.value="",u({type:s.SET_AUTHORIZE,payload:{status:!0,proceed:function(){return f(r)}}})}},e.createElement(m,null,"New password",c({name:"new_password"})),e.createElement(m,null,"New password ( confirm )",c({name:"confirm_password"})),e.createElement(m,null,e.createElement(l,null,"Update Password")))))});export default u;
