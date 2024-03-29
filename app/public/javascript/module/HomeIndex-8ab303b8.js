import{a as e,R as t,b as n,k as a}from"./index-80ae32d7.js";import{n as r,L as l}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import{_ as c}from"./slicedToArray-e1941acd.js";import{_ as m}from"./toConsumableArray-0ed5356c.js";import{checkBalance as o,getFormData as u}from"./common-27892a1c.js";import{a as i}from"./api-17772ac6.js";import{t as s}from"./actionTypes-edbc1405.js";import{u as d}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import{_ as p}from"./objectWithoutProperties-234758e1.js";import{P as E}from"./Pager-96b949a7.js";import{D as f}from"./Dialog-550d8283.js";import{H as h,L as y,T as v,A as b,N as g,E as N}from"./index-307e5487.js";import{P as T,M as A,A as C,b as M}from"./Icons-5efe7a19.js";import{A as _}from"./Animate-9feb1866.js";import{a as S,b as k,c as D,d as w,e as B,f as j,A as x}from"./index-0d44c75a.js";import q from"./PagerRouter-1bb02afb.js";import{M as L}from"./Menu-52e8819c.js";import{T as V,a as I,b as P,c as O}from"./TabRouter-c3f5dbdd.js";import{A as F}from"./Link-304e0d41.js";import{b as H,m as R}from"./DataSets-5c0a33f1.js";var Y=d(function(e){return{balance:e.balance,activities:e.activities}})(function(n){var a=n.balance,l=(n.activities,n.dispatch);p(n,["balance","activities","dispatch"]);return e(function(){S(i.getBalance).then(function(e){return l({type:s.SET_BALANCE,payload:e})}),S(i.getActivities).then(function(e){return l({type:s.SET_ACTIVTIES,payload:e})})},[]),t.createElement("div",{className:"home"},t.createElement("div",{className:"status"},t.createElement("div",null,t.createElement("a",{onClick:function(){return r("/home?tab=home#/addcash")},className:"topup"},t.createElement(T,null)),t.createElement("div",{className:"balance"},t.createElement("h2",null,"¢",k(a.balance))),t.createElement("a",{onClick:function(){return r("/home?tab=home#/withdraw")},className:"topup"},t.createElement(A,null)))),t.createElement("div",null))}),W=d(function(e){return{activities:e.activities}})(function(r){var l=r.activities,o=r.dispatch,u=n([]),d=c(u,2),p=d[0],f=d[1],h=n([]),y=c(h,2),v=y[0],b=y[1],g=n((new Date).getMonth()),N=c(g,2),T=N[0],A=N[1],C=n(),M=c(C,2),j=M[0],x=M[1],q=n(0),L=c(q,2),V=L[0],I=L[1],P=n(0),O=c(P,2),F=O[0],H=O[1],R=[],Y=D(".balance"),W=c(Y,1)[0],U=B(),G=U.getTime,Z=U.getDate,$=U.getWeekDay,z=U.getMonth,K=U.getFullYear,J=w(function(){setTimeout(function(){b(function(e){return[].concat(m(e),m(p.slice(e.length,e.length+9)))}),ee(!1)},500)}),Q=c(J,2),X=Q[0],ee=Q[1];e(function(){S(i.getBalance).then(function(e){return o({type:s.SET_BALANCE,payload:e})}),S(i.getActivities).then(function(e){return o({type:s.SET_ACTIVTIES,payload:e})})},[]),e(function(){var e=[],t=0,n=0;if(I(0),H(0),l.length>0)for(var a=0;a<l.length;a++)l[a].created&&new Date(l[a].created).getMonth()==T&&(e.push(l[a]),"debit"===l[a].transaction_activity?t+=Number(l[a].amount):n+=Number(l[a].amount));I(t),H(n),b(e.slice(0,10)),f(e)},[l,T]),e(function(){A((new Date).getMonth()+W.count)},[W]),e(function(){var e=new Date;e.setMonth(T),x(z(e)+" "+K(e))},[T]);return t.createElement(E,{classname:"activity"},t.createElement("div",{className:"month"},j),t.createElement("div",{className:"balance"},t.createElement("div",null,t.createElement("h2",null,"¢",k(V)),t.createElement("span",null,"Total Spending")),t.createElement("div",null,t.createElement("h2",null,"¢",k(F)),t.createElement("span",null,"Top ups"))),t.createElement("div",{className:"list width-100"},function(e){if(e)return e.map(function(e,n){var r;!R.includes(new Date(e.created).getDate())&&R.push(new Date(e.created).getDate())&&(r=!0);var l=r&&$(e.created)+" "+Z(e.created);return t.createElement(a,{key:n},r&&t.createElement("span",{className:"date"},t.createElement("span",null,l)),t.createElement(_,null,t.createElement("div",{className:"item"},t.createElement("div",null,t.createElement("li",null,e.name),t.createElement("li",null,e.desc),t.createElement("span",null,G(e.created))),t.createElement("span",null,"debit"==e.transaction_activity?"-":"","¢",e.amount))))})}(v),p.length===v.length?null:X&&t.createElement("h5",{className:"load"},"loading ...")))}),U=d(function(e){return{paymentMethods:e.paymentMethods}})(function(a){var l=a.paymentMethods,m=a.dispatch,o=n([]),u=c(o,2),d=u[0],p=u[1],E=n("card"),h=c(E,2),y=h[0],v=h[1],b=n(!1),g=c(b,2),N=g[0],A=g[1],k=n(!1),D=c(k,2),w=D[0],B=D[1];e(function(){S(i.getPaymentMethods).then(function(e){return m({type:s.SET_PAYMENT_METHODS,payload:e})})},[]),e(function(){for(var e=[],t=0;t<l.length;t++)l[t].method===y&&e.push(l[t]);p(e)},[y,l]);var j=function(e){v(e),B(!1)},x=function(e){A(!1),r("/home?tab=payments#/"+e)};return t.createElement(t.Fragment,null,t.createElement("div",{className:"paymentMethods"},t.createElement("div",{className:"mid-header width-90"},t.createElement("h5",{onClick:function(){return B(!0)}},y,t.createElement(C,null)),t.createElement("a",{className:"plus",onClick:function(){return A(!0)}},t.createElement(T,null))),t.createElement("div",{className:"list width-100"},function(e){if(e)return e.map(function(e,n){return"card"===e.method?t.createElement(M,{key:n,num:e.desc}):t.createElement("a",{key:n},t.createElement("div",{className:"item"},t.createElement("div",null,t.createElement("li",null,e.desc),t.createElement("span",null,e.processor_type))))})}(d))),N&&t.createElement(f,{onClick:A},t.createElement(_,{onClick:function(){return x("addmomo")}},t.createElement("li",null,"Mobile Money")),t.createElement(_,{onClick:function(){return x("addcard")}},t.createElement("li",null,"Card")),t.createElement(_,{onClick:function(){return x("addbank")}},t.createElement("li",null,"Bank"))),w&&t.createElement(f,{onClick:B},t.createElement(_,{onClick:function(){return j("momo")}},t.createElement("li",null,"Mobile Money")),t.createElement(_,{onClick:function(){return j("card")}},t.createElement("li",null,"Card")),t.createElement(_,{onClick:function(){return j("bank")}},t.createElement("li",null,"Bank"))))}),G=d(function(e){return{balance:e.balance,paymentMethods:e.paymentMethods}})(function(a){var m=a.balance,o=a.paymentMethods,u=a.dispatch,d=n(""),p=c(d,2),g=p[0],N=p[1],T=n(!1),A=c(T,2),C=A[0],M=A[1],k=n(!1),D=c(k,2),w=D[0],B=D[1],q=n([]),L=c(q,2),V=L[0],I=L[1],P=j(m.balance),O=c(P,2),H=O[0],R=O[1],Y=function(e){N(e),M(!1),B(!0)},W=function(e){B(!1),u({type:s.SET_VODA_TOKEN,payload:{status:!0,proceed:function(){return G(e)}}})},U=function(e){B(!1),u({type:s.SET_CARD_CVV,payload:{status:!0,proceed:function(){return G(e)}}})},G=function(e){u({type:s.SET_BUTTON,payload:!0});var t=document.querySelector("#addcash"),n=new FormData(t);n.append("payment_uid",e.uid);var a=document.querySelector("input[name=vdf_token]"),l=document.querySelector("input[name=cvv]");return a?n.append("vdf_token",a.value):l?n.append("cvv",l.value):B(!1),S(i.addCash,n).then(function(t){if(t)return u({type:s.SET_TRANSACTION,payload:{status:!0,amount:n.get("amount"),note:"Transfer Complete",processor:e.processor_type,desc:e.desc,redirect:"/home"}}),u({type:s.ADD_BALANCE,payload:n.get("amount")}),r("/home")})};return e(function(){setTimeout(function(){document.getElementsByTagName("input")[0].focus()},1e3),S(i.getBalance).then(function(e){return u({type:s.SET_BALANCE,payload:e})}).then(function(){return S(i.getPaymentMethods).then(function(e){return u({type:s.SET_PAYMENT_METHODS,payload:e})})})},[]),e(function(){for(var e=[],t=0;t<o.length;t++){var n=o[t].method;g===n?e.push(o[t]):g===n&&e.push(o[t])}I(e)},[g,o]),t.createElement(t.Fragment,null,t.createElement(E,{classname:"overlays"},t.createElement("div",{className:"header"},t.createElement(l,{to:"/home",className:"exit"},"Cancel"),t.createElement("h6",null,"¢",H+" "," ",t.createElement("span",null,"Bal"))),t.createElement("div",null,t.createElement("form",{id:"addcash",onSubmit:function(e){return e.preventDefault(),Number(document.querySelector("input[name=amount]").value)?M(!0):x("Enter amount!")}},h({name:"method",defaultValue:g}),t.createElement(y,{id:"amount"},v({name:"amount",onChange:function(e){return R(e.target.value)},defaultValue:"0.00",required:!0}),"GHS"),t.createElement(y,null,t.createElement(b,{default:!0},"AddCash"))))),C?t.createElement(f,{onClick:M},t.createElement(_,{onClick:function(){return Y("momo")}},t.createElement("li",null,"Mobile Money")),t.createElement(_,{onClick:function(){return Y("card")}},t.createElement("li",null,"Card"))):"",w?t.createElement(f,{onClick:B},t.createElement(F,{to:"/home?tab=home#/add".concat(g)},t.createElement("li",{className:"new"},"New ",g)),function(e){return e.map(function(e,n){return t.createElement(_,{key:e.uid,onClick:function(){return function(e){var t=e.processor_type;"VDF"===t?W(e):"MAS"===t||"VIS"===t?U(e):G(e)}(e)}},t.createElement("li",null,e.desc),t.createElement("span",null,e.method))})}(V)):"")}),Z=d(function(e){return{balance:e.balance,paymentMethods:e.paymentMethods}})(function(a){var m=a.balance,u=a.paymentMethods,d=a.dispatch,p=n(""),g=c(p,2),N=g[0],T=g[1],A=n(!1),C=c(A,2),M=C[0],k=C[1],D=n(!1),w=c(D,2),B=w[0],q=w[1],L=n([]),V=c(L,2),I=V[0],P=V[1],O=j(m.balance,"debit"),H=c(O,2),R=H[0],Y=H[1],W=function(e){T(e),k(!1),q(!0)},U=function(e){var t=document.querySelector("form"),n=new FormData(t);return n.append("payment_uid",e.uid),n.append("processor",e.processor_type),n.append("desc",e.desc),q(!1),d({type:s.SET_AUTHORIZE,payload:{status:!0,proceed:function(){return G(n)}}})},G=function(e){return e.append("password",document.querySelector("input[name=password]").value),d({type:s.SET_AUTHORIZE,payload:{status:!1}}),d({type:s.SET_BUTTON,payload:!0}),S(i.withdraw,e).then(function(t){if(d({type:s.WITHDRAW_BALANCE,payload:e.get("amount")}),"bank"===e.get("method")&&t){if(t.resp.reference_id)return d({type:s.SET_REFERENCE_AND_TRANSACTION,payload:{reference:t,transaction:{redirect:"/home"}}}),r("/authorize/bank/".concat(t.resp.reference_id))}else if(t&&"completed"===t.status)return d({type:s.SET_TRANSACTION,payload:{status:!0,amount:e.get("amount"),contact:e.get("contact"),note:"Transfer Complete",redirect:"/home"}}),r("/home")})};return e(function(){S(i.getBalance).then(function(e){return d({type:s.SET_BALANCE,payload:e})}).then(function(){return S(i.getPaymentMethods).then(function(e){return d({type:s.SET_PAYMENT_METHODS,payload:e})})})},[]),e(function(){for(var e=[],t=0;t<u.length;t++){var n=u[t].method;N===n?e.push(u[t]):N===n&&e.push(u[t])}P(e)},[N,u]),t.createElement(t.Fragment,null,t.createElement(E,{classname:"overlays"},t.createElement("div",{className:"header"},t.createElement(l,{to:"/home",className:"exit"},"Cancel"),t.createElement("h6",null,"¢",R+" "," ",t.createElement("span",null,"Bal"))),t.createElement("div",null,t.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var t=!Number(document.querySelector("input[name=amount]").value);return t?x("Enter amount!"):o(t,m.balance)?k(!0):x("Insufficient Balance")}},h({name:"method",defaultValue:N}),t.createElement(y,{id:"amount"},v({name:"amount",onChange:function(e){return Y(e.target.value)},defaultValue:"0.00",required:!0}),"GHS"),t.createElement(y,null,t.createElement(b,{default:!0},"Withdraw"))))),M?t.createElement(f,{onClick:k},t.createElement(_,{onClick:function(){return W("momo")}},t.createElement("li",null,"Mobile Money")),t.createElement(_,{onClick:function(){return W("bank")}},t.createElement("li",null,"Bank"))):"",B?t.createElement(f,{onClick:q},t.createElement(F,{to:"/home?tab=home#/add".concat(N)},t.createElement("li",{className:"new"},"New ",N)),function(e){return e.map(function(e,n){return t.createElement(_,{key:e.uid,onClick:function(){return U(e)}},t.createElement("li",null,e.desc),t.createElement("span",null,e.method))})}(I)):"")}),$=d()(function(e){var a=e.dispatch,m=(p(e,["dispatch"]),n("Access Bank LTD")),o=c(m,2),d=o[0],f=o[1],v=n(""),N=c(v,2),T=N[0],A=N[1];return t.createElement(E,{classname:"paymentMethods"},t.createElement("div",{className:"header"},t.createElement(l,{to:"/home?tab=payments",className:"exit"},"Cancel"),t.createElement("h5",null,"Add Bank")),t.createElement("div",null,t.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("form"),n=new FormData(t);return a({type:s.ADD_PAYMENT_METHODS,payload:u(n)}),r("/home?tab=payments"),S(i.addBank,n)}},t.createElement(y,null,"Banks",t.createElement("select",{name:"processor_type",id:"processor_type",onChange:function(e){f(e.target[e.target.selectedIndex].text)}},H.map(function(e,n){var a=e.code,r=e.name;return t.createElement("option",{key:n,value:a},r)}))),h({name:"name",defaultValue:d}),h({name:"desc",defaultValue:T}),t.createElement(y,null,"Bank Account Number",g({pattern:"[0-9].{8,}",minLength:"8",title:"Enter Account Number",name:"number",onChange:function(e){return(t=e.target.value).length>=5?A(t.substr(0,5)):"";var t},required:!0})),t.createElement(y,null,t.createElement(b,null,"Add Bank")))))}),z=d()(function(e){var a=e.dispatch,m=(p(e,["dispatch"]),n("")),o=c(m,2),d=o[0],f=o[1],T=n(""),A=c(T,2),C=A[0],M=A[1],_=n(""),k=c(_,2),D=k[0],w=k[1];return t.createElement(E,{classname:"paymentMethods"},t.createElement("div",{className:"header"},t.createElement(l,{to:"/home?tab=payments",className:"exit"},"Cancel"),t.createElement("h5",null,"Add card")),t.createElement("div",null,t.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("form"),n=new FormData(t);return a({type:s.ADD_PAYMENT_METHODS,payload:u(n)}),r("/home?tab=payments"),S(i.addCard,n)}},t.createElement(y,null,"Card number",g({name:"pan",pattern:"[0-9]{16}",title:"Enter correct card number",minLength:"16",maxLength:"16",onChange:function(e){return t=e.target.value,n=function(e){var t={Visa:/^4[0-9]{12}(?:[0-9]{3})?$/,Mastercard:/^5[1-5][0-9]{14}$/};for(var n in t)if(t[n].test(e))return n}(t),f("Visa"===n?"VIS":"MAS"),M(n),16==t.length?w(t.substr(12,16)):"";var t,n},required:!0})),h({name:"processor_type",defaultValue:d}),h({name:"name",defaultValue:C}),h({name:"desc",defaultValue:D}),t.createElement("div",{className:"cardDetails"},t.createElement(y,null,"MM",g({name:"date_mm",minLength:"2",maxLength:"2",placeholder:"00",pattern:"[0-9]{2}",title:"Enter correct month",required:!0})),t.createElement(y,null,"YY",g({name:"date_yy",minLength:"2",maxLength:"2",placeholder:"00",pattern:"[0-9]{2}",title:"Enter correct year",required:!0}))),t.createElement(y,null,"Cardholder name",v({name:"card_holder",required:!0})),t.createElement(y,null,"Email",N({name:"email",required:!0})),t.createElement(y,null,"Address line",v({name:"address",required:!0})),t.createElement(y,null,"City",v({name:"city",required:!0})),t.createElement(y,null,t.createElement(b,null,"Add Card")))))}),K=d()(function(e){var a=e.dispatch,m=(p(e,["dispatch"]),n("Access Bank LTD")),o=c(m,2),d=o[0],f=o[1],v=n(""),N=c(v,2),T=N[0],A=N[1];return t.createElement(E,{classname:"paymentMethods"},t.createElement("div",{className:"header"},t.createElement(l,{to:"/home?tab=payments",className:"exit"},"Cancel"),t.createElement("h5",null,"Add Momo")),t.createElement("div",null,t.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("form"),n=new FormData(t);return a({type:s.ADD_PAYMENT_METHODS,payload:u(n)}),r("/home?tab=payments"),S(i.addMoMo,n)}},t.createElement(y,null,"Select Mobile Money",t.createElement("select",{name:"processor_type",onChange:function(e){f(e.target[e.target.selectedIndex].text)}},R.map(function(e,n){var a=e.code,r=e.name;return t.createElement("option",{key:n,value:a},r)}))),h({name:"name",defaultValue:d}),h({name:"desc",defaultValue:T}),t.createElement(y,null,"Mobile Money Number",g({pattern:"[0-9]{10}",minLength:"10",maxLength:"10",title:"Enter tel number",name:"number",onChange:function(e){return(t=e.target.value).length>=10?A(t.substr(5,10)):"";var t},required:!0})),t.createElement(y,null,t.createElement(b,null,"Add MoMo")))))});export default function(e){return t.createElement(t.Fragment,null,t.createElement(q,{location:e.location},t.createElement(G,{path:"#/addcash",up:!0}),t.createElement(Z,{path:"#/withdraw",up:!0}),t.createElement($,{path:"#/addbank",up:!0}),t.createElement(z,{path:"#/addcard",up:!0}),t.createElement(K,{path:"#/addmomo",up:!0})),t.createElement(L,null,t.createElement(V,null,t.createElement("section",{className:"header"},t.createElement(I,{location:e.location},t.createElement(P,{path:"/home?tab=home",index:!0},t.createElement("h2",null,"Today")),t.createElement(P,{path:"/home?tab=activity"},t.createElement("h2",null,"Activity")),t.createElement(P,{path:"/home?tab=payments"},t.createElement("h2",null,"Link Payment")))),t.createElement(O,{location:e.location},t.createElement(Y,{path:"home",index:!0}),t.createElement(W,{path:"activity"}),t.createElement(U,{path:"payments"})))))}
