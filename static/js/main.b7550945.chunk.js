(this["webpackJsonpcomic-radom-app"]=this["webpackJsonpcomic-radom-app"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(21),i=c.n(a),o=c(5),s=c(9),r=c.n(s),l=(c(48),c(25)),j=(c(49),c(24)),u=c(1);function b(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(null),s=Object(o.a)(i,2),r=s[0],b=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"title-rating",children:"Rating"}),Object(u.jsxs)("div",{children:[Object(l.a)(Array(5)).map((function(e,t){var n=t+=1;return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"rating",value:n,onClick:function(){return a(n)}}),Object(u.jsx)(j.a,{className:"star",color:n<=(r||c)?"#ffc107":"#e4e5e9",size:40,onMouseEnter:function(){return b(n)},onMouseLeave:function(){return b(null)}})]})})),Object(u.jsxs)("div",{children:["The rating is: ",c]})]})]})}function d(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){r.a.get("https://thingproxy.freeboard.io/fetch/https://xkcd.com/info.0.json").then((function(e){return a(e.data)})).catch((function(e){return console.log("Request failed \ud83d\ude22",e)}))}),[]);if(console.log(c),!c)return Object(u.jsx)("div",{children:"loading..."});return Object(u.jsxs)("div",{className:"comics-container",children:[Object(u.jsx)("h1",{className:"logo",children:"RANDOM COMICS"}),Object(u.jsx)("img",{className:"comic-image",src:c.img,alt:""}),Object(u.jsxs)("h1",{className:"comic-title",children:["Title: ",Object(u.jsx)("br",{}),c.title]}),Object(u.jsx)("label",{className:"rate-component",children:Object(u.jsx)(b,{})}),Object(u.jsx)("button",{className:"comic-button",onClick:function(){var e;e=Math.round(Math.random()*(c.num-1)+1),r.a.get("https://thingproxy.freeboard.io/fetch/https://xkcd.com/".concat(e,"/info.0.json")).then((function(e){return a(e.data)})).catch((function(e){return console.log("Request failed \ud83d\ude22",e)}))},children:"Next comic!"})]})}var h=c(59);c(51);function m(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,{basename:"/random-comics",children:Object(u.jsx)("div",{className:"Comic-home",children:Object(u.jsx)(d,{})})})})}i.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.b7550945.chunk.js.map