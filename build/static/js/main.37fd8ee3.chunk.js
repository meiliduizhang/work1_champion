(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),i=n.n(r),s=n(7),l=n(1),c=n(2),u=n(4),d=n(3),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.call(this)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"Input"},a.a.createElement("label",{htmlFor:"inp"},"todolist"),a.a.createElement("input",{ip:"inp",type:"text",value:this.props.inpValue,onChange:this.props.handleChange}),a.a.createElement("button",{onClick:this.props.addTodo},"\u6dfb\u52a0"))}}]),n}(o.Component),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.todos.filter((function(e){return!e.done})),t=this.props.todos.filter((function(e){return e.done}));return a.a.createElement("div",{className:"List"},a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",e.length),a.a.createElement("ul",null,this.props.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",t.length),a.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(o.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({inpValue:e.target.value})},o.addTodo=function(){""!=o.state.inpValue&&(o.setState({todos:[{title:o.state.inpValue,done:!1}].concat(Object(s.a)(o.state.todos))}),o.state.inpValue="")},o.deleteTodo=function(e){JSON.parse(JSON.stringify(o.state.todos)).splice(e,1),o.setState({todos:o.state.todos.filter((function(t,n){return n!=e}))})},o.toggle=function(e){var t=JSON.parse(JSON.stringify(o.state.todos));t[e].done=!t[e].done,o.setState({todos:t})},o.renderTodos=function(e){return o.state.todos.map((function(t,n){if(e==t.done)return a.a.createElement("li",null,a.a.createElement("input",{onClick:function(){return o.toggle(n)},checked:e,type:"checkbox"}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}}),a.a.createElement("button",{onClick:function(){return o.deleteTodo(n)}},"\u5220\u9664"))}))},o.state={inpValue:"",todos:[{title:"\u4eca\u5929\u5403\u996d\u4e86",done:!0},{title:"\u4eca\u5929\u5b66\u4e60\u4e86",done:!0},{title:"\u4eca\u5929\u7761\u89c9\u4e86",done:!1},{title:"\u4eca\u5929\u8dd1\u6b65\u4e86",done:!1}]},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.inpValue;t.filter((function(e){return!e.done})),t.filter((function(e){return e.done}));return a.a.createElement("div",{className:"TodoList"},a.a.createElement(p,{inpValue:n,todos:t,handleChange:this.handleChange,addTodo:this.addTodo}),a.a.createElement(h,{renderTodos:this.renderTodos,todos:t,arr1:this.arr1,arr2:this.arr2}))}}]),n}(o.Component);i.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.37fd8ee3.chunk.js.map