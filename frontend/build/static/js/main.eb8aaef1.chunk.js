(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),l=n.n(c),i=(n(10),n(4)),r=n(1),s=(n(11),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({id:null,title:"",completed:!1}),s=Object(r.a)(l,2),u=s[0],d=s[1],m=Object(a.useState)(!1),f=Object(r.a)(m,2),p=f[0],h=f[1];Object(a.useEffect)((function(){b()}),[]);var v=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var o=n[a].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t},b=function(){console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/task-list/").then((function(e){return e.json()})).then((function(e){return c(e)}))};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"task-container"},o.a.createElement("div",{id:"form-wrapper"},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log("ITEM:",u);var t=v("csrftoken"),n="http://127.0.0.1:8000/api/task-create/";p&&(n="http://127.0.0.1:8000/api/task-update/".concat(u.id,"/"),h(!1)),fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":t},body:JSON.stringify(u)}).then((function(e){b(),d({id:null,title:"",completed:!1})})).catch((function(e){console.log("ERROR:",e)}))}(e)},id:"form"},o.a.createElement("div",{className:"flex-wrapper"},o.a.createElement("div",{style:{flex:6}},o.a.createElement("input",{onChange:function(e){return function(e){console.log("called handleChange"),e.preventDefault();var t=e.target.name,n=e.target.value;console.log("Name:",t),console.log("Value:",n),d(Object(i.a)({},u,{title:n}))}(e)},className:"form-control",id:"title",value:u.title,type:"text",name:"title",placeholder:"Add task.."})),o.a.createElement("div",{style:{flex:1}},o.a.createElement("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"}))))),o.a.createElement("div",{id:"list-wrapper"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"task-wrapper flex-wrapper"},o.a.createElement("div",{onClick:function(){return function(e){e.completed=!e.completed;var t=v("csrftoken"),n="http://127.0.0.1:8000/api/task-update/".concat(e.id,"/");fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":t},body:JSON.stringify({completed:e.completed,title:e.title})}).then((function(){b()})),console.log("TASK:",e.completed)}(e)},style:{flex:7}},!1===e.completed?o.a.createElement("span",null,e.title):o.a.createElement("strike",null,e.title)),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{onClick:function(){return function(e){d(e),h(!0)}(e)},className:"btn btn-sm btn-outline-info"},"Edit")),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{onClick:function(){return function(e){var t=v("csrftoken");fetch("http://127.0.0.1:8000/api/task-delete/".concat(e.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":t}}).then((function(e){b()}))}(e)},className:"btn btn-sm btn-outline-dark delete"},"-")))})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.eb8aaef1.chunk.js.map