(this["webpackJsonpcomic-radom-app"]=this["webpackJsonpcomic-radom-app"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(16),o=c.n(i),a=c(4),s=c(7),r=c.n(s),l=(c(41),c(18)),u=(c(42),c(17)),j=c(0);function b(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1],o=Object(n.useState)(null),s=Object(a.a)(o,2),r=s[0],b=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"title-rating",children:"Rating"}),Object(j.jsxs)("div",{children:[Object(l.a)(Array(5)).map((function(e,t){var n=t+=1;return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"rating",value:n,onClick:function(){return i(n)}}),Object(j.jsx)(u.a,{className:"star",color:n<=(r||c)?"#ffc107":"#e4e5e9",size:40,onMouseEnter:function(){return b(n)},onMouseLeave:function(){return b(null)}})]})})),Object(j.jsxs)("div",{children:["The rating is: ",c]})]})]})}function d(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){r.a.get("https://thingproxy.freeboard.io/fetch/https://xkcd.com/info.0.json").then((function(e){return i(e.data)})).catch((function(e){return console.log("Request failed \ud83d\ude22",e)}))}),[]);if(console.log(c),!c)return Object(j.jsx)("div",{children:"loading..."});return Object(j.jsxs)("div",{className:"comics-container",children:[Object(j.jsx)("h1",{className:"logo",children:"RANDOM COMICS"}),Object(j.jsx)("img",{className:"comic-image",src:c.img,alt:""}),Object(j.jsxs)("h1",{className:"comic-title",children:["Title: ",Object(j.jsx)("br",{}),c.title]}),Object(j.jsx)("label",{className:"rate-component",children:Object(j.jsx)(b,{})}),Object(j.jsx)("button",{className:"comic-button",onClick:function(){var e;e=Math.round(Math.random()*(c.num-1)+1),r.a.get("https://thingproxy.freeboard.io/fetch/https://xkcd.com/".concat(e,"/info.0.json")).then((function(e){return i(e.data)})).catch((function(e){return console.log("Request failed \ud83d\ude22",e)}))},children:"Next comic!"})]})}c(44);function h(){return Object(j.jsx)("div",{className:"Comic-home",children:Object(j.jsx)(d,{})})}o.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2619d531.chunk.js.map