(this["webpackJsonpsosio-assignment"]=this["webpackJsonpsosio-assignment"]||[]).push([[0],{23:function(e,t,a){},41:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),s=a(36),m=a(29),i=a(16),o=a(69),u=a(66);a(23);function d(e){return r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement("h1",null,e.user),r.a.createElement("p",{style:{color:"grey"}},e.bio)),r.a.createElement(u.a,{item:!0,xs:9,className:"btn"},r.a.createElement(o.a,{className:"cont",variant:"contained"},r.a.createElement(i.b,{className:"no-link",to:"/create"},"create new"," ")))))}var E=a(67);function g(e){return r.a.createElement(u.a,{container:!0,alignItems:"center",spacing:10,className:"grid-container"},r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x100",alt:"img"})),r.a.createElement(u.a,{item:!0,xs:9,style:{textAlign:"left"}},r.a.createElement("p",{style:{color:"gray"}},e.title)))}function p(e){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"middle"}),r.a.createElement("h2",null,"Recent tweets of the user about a topic goes here"),e.list.map((function(e){return r.a.createElement(g,{key:e.id,title:e.tweet})})),r.a.createElement(E.a,{variant:"middle",className:"hr"}))}var h=a(3);function v(e){var t=Object(h.f)();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{container:!0,alignItems:"center",spacing:10,className:"grid-container"},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.addToList(e.message),e.setMessage(""),t.push("/")}},r.a.createElement("h1",null,"create your tweet"),r.a.createElement("textarea",{className:e.message.length>200?"error":"",value:e.message,onChange:function(t){e.setMessage(t.target.value)},required:!0}),"  ",r.a.createElement("div",null,e.message.length,"/200"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{variant:"contained",type:"submit"},"Submit"))))))}var b=a(68);function f(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([{id:Math.random(),tweet:"use our built in widgets"},{id:Math.random(),tweet:"or upload your own images"},{id:Math.random(),tweet:"copy and paste,undo and redo with familiar keyboard shortcuts"}]),i=Object(m.a)(l,2),o=i[0],u=i[1];return r.a.createElement("div",{className:"App"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(b.a,{maxWidth:"md"},r.a.createElement(d,{user:"User Name",bio:"User Bio lorem ipsum"}),r.a.createElement(p,{list:o}))),r.a.createElement(h.a,{path:"/create"},r.a.createElement(v,{message:a,list:o,addToList:function(e){u((function(t){return[].concat(Object(s.a)(t),[{id:Math.random(),tweet:e}])}))},setMessage:c}))))}var w=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(f,null))),w)}},[[41,1,2]]]);
//# sourceMappingURL=main.be1fd20b.chunk.js.map