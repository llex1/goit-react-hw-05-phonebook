(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(1),c=a(9),s=a.n(c),o=a(11),l=a(2),i=a(3),u=a(5),b=a(4),h=a(34),j=(a(24),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"alert",children:Object(n.jsx)("p",{className:"alert-text",children:this.props.text})})}}]),a}(r.Component)),m=(a(25),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("p",{children:"Phonebook"})})}}]),a}(r.Component)),f=a(35),d=a(6),p=a.n(d),O=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={valueName:"",valueNumder:""},t.handleChange=function(e){switch(e.target.name){case"name":t.setState((function(t){return{valueName:e.target.value}}));break;case"number":t.setState((function(t){return{valueNumder:e.target.value}}));break;default:console.log("error form-name")}},t.handleSubmit=function(e){e.preventDefault();var a={id:Object(f.a)(),name:t.state.valueName,number:t.state.valueNumder};t.props.globalStateControl(a,"ADD"),t.setState((function(t){return{valueName:"",valueNumder:""}}))},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{className:p.a.label,htmlFor:"name",children:"Contact Name"}),Object(n.jsx)("input",{className:p.a.input,type:"text",name:"name",id:"name",value:this.state.valueName,onChange:this.handleChange}),Object(n.jsx)("label",{className:p.a.label,htmlFor:"number",children:"Contact Number"}),Object(n.jsx)("input",{className:p.a.input,type:"text",name:"number",id:"number",value:this.state.valueNumder,onChange:this.handleChange}),Object(n.jsx)("button",{className:p.a.btn,type:"submit",children:"new contact"})]})}}]),a}(r.Component),v=a(36),g=(a(26),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={},t.deleteContact=function(e){var a=e.target.dataset.id;t.props.globalStateControl({id:a},"DELETE")},t.contactList=function(){return(t.props.globalState.filter.length?t.props.globalState.filter:t.props.globalState.contacts).map((function(e,a){return Object(n.jsx)(h.a,{timeout:250,classNames:"contact-show-list-item",children:Object(n.jsxs)("li",{className:"contact-show-list-item",children:[Object(n.jsxs)("p",{className:"contact-show-list-text",children:[Object(n.jsx)("span",{children:e.name}),Object(n.jsx)("span",{children:e.number})]}),Object(n.jsx)("button",{"data-id":e.id,onClick:t.deleteContact,children:"delete"})]},e.id)},a)}))},t}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.contactList()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"contact-show",children:[this.props.children,Object(n.jsx)(v.a,{component:"ul",className:".contact-show-list",children:this.contactList()})]})}}]),a}(r.Component)),x=a(15),C=a.n(x),N=a(16),S=(a(30),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={value:""},t.handleChange=function(){var e=Object(N.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState((function(t){return{value:a.target.value}}));case 2:t.props.globalStateControl({name:t.state.value},"FILTER");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"filter",children:[Object(n.jsx)("label",{htmlFor:"filter",children:"Filter"}),Object(n.jsx)("input",{id:"filter",type:"text",name:"filter",value:this.state.value,onChange:this.handleChange})]})}}]),a}(r.Component)),y=(a(31),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",alert:!1,alertMessage:""},t.globalStateControl=function(e,a){var n=e.id,r=e.name,c=e.number;switch(a){case"ADD":r&&t.state.contacts.map((function(t){return t.name})).includes(r)?(t.setState((function(t){return{alert:!0,alertMessage:"\u0422\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454!"}})),setTimeout((function(){t.setState((function(t){return{alert:!1,alertMessage:""}}))}),4e3)):r&&t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{id:n,name:r,number:c}])}}));break;case"DELETE":if(t.state.filter.length){var s=0;t.state.filter.forEach((function(t,e){t.id===n&&(s=e)}));var l=Object(o.a)(t.state.filter);l.splice(s,1),t.setState((function(t){return{filter:Object(o.a)(l)}}))}var i=0;t.state.contacts.forEach((function(t,e){t.id===n&&(i=e)}));var u=Object(o.a)(t.state.contacts);u.splice(i,1),t.setState((function(t){return{contacts:Object(o.a)(u)}}));break;case"FILTER":var b=[];r?(t.state.contacts.forEach((function(t){return t.name.includes(r)&&b.push(t),{filter:b}})),t.setState((function(t){return{filter:[].concat(b)}}))):t.setState((function(t){return{filter:[].concat(b)}}));break;default:console.log("can't parth marker")}},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"phonebook",children:[Object(n.jsx)(h.a,{in:this.state.alert,classNames:"alert",timeout:300,unmountOnExit:!0,children:Object(n.jsx)(j,{text:this.state.alertMessage})}),Object(n.jsx)(h.a,{in:!0,appear:!0,classNames:"header",timeout:500,unmountOnExit:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(O,{globalStateControl:this.globalStateControl}),Object(n.jsx)(g,{globalStateControl:this.globalStateControl,globalState:this.state,children:Object(n.jsx)(h.a,{in:this.state.contacts.length>1,classNames:"filter",timeout:250,unmountOnExit:!0,children:Object(n.jsx)(S,{globalStateControl:this.globalStateControl})})})]})}}]),a}(r.Component));s.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))},6:function(t,e,a){t.exports={form:"ContactAdd_form__NRizT",label:"ContactAdd_label__3aJLR",input:"ContactAdd_input__1Fx51",btn:"ContactAdd_btn__1U505"}}},[[32,1,2]]]);
//# sourceMappingURL=main.81b0bb69.chunk.js.map