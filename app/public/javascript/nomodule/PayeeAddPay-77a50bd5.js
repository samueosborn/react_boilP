System.register(["./index-b0513f57.js","./index-272f0464.js","./defineProperty-a1089ec5.js","./slicedToArray-4acdf83a.js","./toConsumableArray-62f8d598.js","./common-d400c37d.js","./api-79424633.js","./actionTypes-b0d14a88.js","./index-fbae8ffb.js","./extends-0c7a6a58.js","./objectWithoutProperties-6039c2e9.js","./Pager-f37bd16c.js","./Icons-c6c555dc.js","./index-21526502.js","./DataSets-87160df1.js"],function(e){"use strict";var t,n,a,c,l,o,u,r,i,m;return{setters:[function(e){t=e.R},function(e){n=e.L,a=e.n},function(){},function(){},function(){},function(){},function(e){c=e.a},function(){},function(e){l=e.u},function(){},function(){},function(e){o=e.P},function(e){u=e.E},function(e){r=e.a},function(e){i=e.m,m=e.b}],execute:function(){e("default",l()(function(e){var l=e.payee,d=e.uid,f=e.option,s=function(e){return e.map(function(e,n){var a=e.code,c=e.name;return t.createElement("option",{key:n,value:a},c)})};return t.createElement(o,null,t.createElement("div",{className:"header"},t.createElement(n,{to:"/pay?tab=pay&option=pay&payee=".concat(l,"&uid=").concat(d,"#/payee")},t.createElement(u,null)),t.createElement("h5",null,"New ",f," payment ")),t.createElement("div",null,t.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("form"),n=new FormData(t);r(c.addPayeeAccount,n).then(function(){return a("/payee/".concat(l,"/").concat(d))})}},"email"===f?t.createElement("label",null,t.createElement("input",{type:"email",name:"account",placeholder:"Email"})):"",t.createElement("input",{type:"hidden",name:"payee_uid",value:"".concat(d)}),t.createElement("input",{type:"hidden",name:"account_type",value:"option"}),"bank"===f?t.createElement(t.Fragment,null,t.createElement("label",null,t.createElement("select",{name:"account_processor"},s(m))),t.createElement("label",null,t.createElement("input",{type:"tel",name:"account",placeholder:"".concat(f)+" digit"}))):"","momo"===f?t.createElement(t.Fragment,null,t.createElement("label",null,t.createElement("select",{name:"account_processor"},s(i))),t.createElement("label",null,t.createElement("input",{type:"tel",name:"account",placeholder:"".concat(f)+" digit"}))):"",t.createElement("button",null,"Add to ","".concat(l)))))}))}}});
