(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(4),a=e(1),i=(e(9),e(0)),s=function(t){var n=t.goods;return Object(i.jsx)("ul",{className:"list",children:n.map((function(t){return Object(i.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){var t=Object(a.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1];return Object(i.jsxs)("div",{className:"App panel",children:[Object(i.jsx)("h1",{className:"panel-heading",children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button",className:"button","data-cy":"all-button",onClick:function(){u().then((function(t){return o(t)}))},children:"Load all goods"}),Object(i.jsx)("button",{type:"button",className:"button","data-cy":"first-five-button",onClick:function(){u().then((function(t){return t})).then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)})).then((function(t){return o(t)}))},children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button",className:"button","data-cy":"red-button",onClick:function(){u().then((function(t){return t})).then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))},children:"Load red goods"}),Object(i.jsx)(s,{goods:e})]})};c.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.e73a95a5.chunk.js.map