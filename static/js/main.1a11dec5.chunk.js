(this.webpackJsonptodohook=this.webpackJsonptodohook||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=(n(13),n(4)),l=n(7),s=n(3);var d=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useReducer)((function(e,t){switch(t.type){case"start":return t.payload.data;case"add":return[].concat(Object(l.a)(e),[(n=t.payload.title,{id:Date.now(),title:n,completed:!1})]);case"toggle":return e.map((function(e){return e.id===t.payload.id?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}));case"delete":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}var n}),[]),d=Object(s.a)(c,2),u=d[0],p=d[1];function f(e){var t=e.todo,n=e.dispatch;return a.a.createElement("div",{className:"todo"},a.a.createElement("input",{type:"checkbox",className:"check",onClick:function(){return n({type:"toggle",payload:{id:t.id}})}}),a.a.createElement("span",{style:{color:t.completed?"brown":"green",textDecoration:t.completed?"line-through":""}},t.title),a.a.createElement("input",{type:"submit",className:"del",onClick:function(){n({type:"delete",payload:{id:t.id}})},value:"x"}))}return Object(o.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){return p({type:"start",payload:{data:e}})}))}),[]),a.a.createElement("div",{className:"todoList"},u.map((function(e){return a.a.createElement(f,{key:Math.random(),todo:e,dispatch:p})})),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p({type:"add",payload:{title:n}}),r("")}},a.a.createElement("input",{type:"text",placeholder:"Add New Todo Here...",className:"addTodo",value:n,onChange:function(e){return r(e.target.value)}})))},u=(n(14),function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"header"},"Todo App Using React Hooks"),a.a.createElement(d,null),a.a.createElement("footer",{className:"footer"},"Made by @Mankind_ Copyright \xa9 2020"))}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TodoList-App---ReactHoks",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TodoList-App---ReactHoks","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a11dec5.chunk.js.map