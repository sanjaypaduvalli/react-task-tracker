(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),a=n.n(o),i=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))}),s=n(10),l=n(3),d=n(2),u=n(4),j=n.n(u),b=n(0),h=function(e){var t=e.text,n=e.color,c=e.onClick;return Object(b.jsx)("button",{onClick:c,style:{backgroundColor:n},className:"btn",children:t})};h.defaultProps={text:"Add",color:"blue"},h.prototype={text:j.a.string,color:j.a.string,onClick:j.a.func.isRequired};var k=h,f=function(e){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)(k,{text:e.showAddTask?"Close":"Add",color:e.showAddTask?"red":"green",onClick:e.taskShow})]})};f.defaultProps={title:"Default Header"},f.prototype={title:j.a.string.isRequired};var O=f;var m=n(9),x=function(e){var t=e.task,n=e.onDelete,c=e.onDoubleClick;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""," "),onDoubleClick:function(){return c(t.id)},children:[Object(b.jsxs)("h3",{children:[t.name," ",Object(b.jsx)(m.a,{color:"red",cursor:"pointer",onClick:function(){return n(t.id)}})," "]}),Object(b.jsx)("p",{children:t.day})]})},p=function(e){return Object(b.jsx)("div",{children:e.tasks.map((function(t){return Object(b.jsx)(x,{task:t,onDelete:e.onDelete,onDoubleClick:e.onDoubleClick},t.id)}))})},g=function(e){var t=e.addTask,n=Object(c.useState)(""),r=Object(d.a)(n,2),o=r[0],a=r[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),l=s[0],u=s[1],j=Object(c.useState)(!1),h=Object(d.a)(j,2),k=h[0],f=h[1];return Object(b.jsxs)("form",{className:"form-control",onSubmit:function(e){e.preventDefault(),o?(t({name:o,day:l,reminder:k}),a(""),u(""),f(!1)):alert("Task not present")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){a(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Date and Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Date and time",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:k,value:k,onChange:function(e){return f(e.target.checked)}})]}),Object(b.jsx)("input",{type:"submit",className:"btn btn-block",value:"Submit"})]})},v=[{id:1,name:"Docter appoitment",day:"Feb 6th",reminder:!0},{id:2,name:"School ",day:"June 8th",reminder:!1},{id:3,name:"Pay Bill ",day:"Mar 6th",reminder:!0}],C=function(){var e=Object(c.useState)((function(){return v})),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(d.a)(o,2),i=a[0],u=a[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{title:"Task Tracker",taskShow:function(){return u(!i)},showAddTask:i}),i&&Object(b.jsx)(g,{addTask:function(e){console.log(e);var t=Math.floor(100*Math.random()),n=Object(l.a)({id:t},e);console.log(n),r((function(e){return[].concat(Object(s.a)(e),[n])}))}}),n.length>0?Object(b.jsx)(p,{tasks:n,onDelete:function(e){console.log("delete : "+e),r((function(t){return t.filter((function(t){return t.id!=e}))})),console.log("taskState : "+n)},onDoubleClick:function(e){console.log("Double clicked:: "+e),r((function(t){return t.map((function(t){return t.id==e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t}))}))}}):"No Task Present"]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),i()}},[[19,1,2]]]);
//# sourceMappingURL=main.d90c1c75.chunk.js.map