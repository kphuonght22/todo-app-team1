(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/Team1.ed6b6100.jpg"},26:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),o=a.n(c),i=(a(31),a(32),a(3)),s=a(4),r=a(6),m=a(5),d=a(10),u=a(1),h=(a(33),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"lightgray",display:"flex",textAlign:"center",justifyContent:"space-around"}},l.a.createElement(d.b,{style:{fontWeight:"bold",fontSize:20,padding:"10px",color:"black"},to:"/"},"C\xf4ng Ngh\u1ec7 Ph\u1ea7n M\u1ec1m"),l.a.createElement("div",{style:{display:"flex",textAlign:"center",justifyContent:"space-around"}},l.a.createElement(d.b,{style:{fontWeight:"bold",fontSize:16,padding:"10px",color:"black"},to:"/"},"Todo-App"),l.a.createElement(d.b,{style:{fontWeight:"bold",fontSize:16,padding:"10px",color:"black"},to:"/team"},"Team"))))}}]),a}(n.Component)),p=a(25),f=a(17),b=a.n(f),E=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.type,n=e.handleChange,c=e.handleSubmit,o=e.editItem,i=e.handleSelect;return l.a.createElement("div",{className:"card card-body my-3"},l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text bg-info text-white"},l.a.createElement("i",{className:"fas fa-book"}))),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"New Todo",value:t,onChange:n}),l.a.createElement("select",{class:"form-control",value:a,onChange:i},l.a.createElement("option",{value:"Level"},"Level"),l.a.createElement("option",{value:"Do first"},"Do first"),l.a.createElement("option",{value:"Schedule"},"Schedule"),l.a.createElement("option",{value:"Delegate/Delay"},"Delegate/Delay"),l.a.createElement("option",{value:"Delete"},"Delete"))),l.a.createElement("button",{type:"submit",className:"btn btn-block mt-3 ".concat(o?"btn-success":"btn-info")},o?"Edit task":"Add new task")))}}]),a}(n.Component),v=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.level,c=e.handleDelete,o=e.handleEdit,i=e.handleDoneTask,s=e.completed;return l.a.createElement("li",{className:"list-group-item d-flex justify-content-between my-2"},l.a.createElement("h6",{className:"mt-1 mb-0 align-middle ".concat(s?"completed-task":"")},a),l.a.createElement("h6",{className:"mt-1 mb-0 align-middle ".concat(s?"completed-task":"")},n),l.a.createElement("div",{className:"todo-icon"},l.a.createElement("span",{className:"mx-2 ".concat(s?"text-success":"text-secondary"),onClick:function(){return i(t)}},l.a.createElement("i",{className:"".concat(s?"far fa-check-square":"far fa-square")})),l.a.createElement("span",{className:"mx-2 text-warning",onClick:o},l.a.createElement("i",{className:"fas fa-pen"})),l.a.createElement("span",{className:"mx-2 text-danger",onClick:c},l.a.createElement("i",{className:"fas fa-trash"}))))}}]),a}(n.Component),g=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.updateTodosToShow,c=e.clearList,o=e.handleDelete,i=e.handleEdit,s=e.handleDoneTask,r=e.handleDeleteDoneTasks;return l.a.createElement(n.Fragment,null,l.a.createElement("h3",{className:"text-center"},"TodoList"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("all")}},"All")),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("done")}},"Done")),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("todo")}},"Todo")),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{class:"dropdown open"},l.a.createElement("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Level"),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"triggerId"},l.a.createElement("button",{class:"dropdown-item",onClick:function(){return a("dofirst")}},"Do first"),l.a.createElement("button",{class:"dropdown-item",onClick:function(){return a("schedule")}},"Schedule"),l.a.createElement("button",{class:"dropdown-item",onClick:function(){return a("delegate")}},"Delegate/Delay"),l.a.createElement("button",{class:"dropdown-item",onClick:function(){return a("delete")}},"Delete"))))),0===t.length?"":l.a.createElement("ul",{className:"list-group my-5"},t.map(function(e){return l.a.createElement(v,{key:e.id,id:e.id,title:e.title,level:e.level,completed:e.completed,handleDelete:function(){return o(e.id)},handleEdit:function(){return i(e.id)},handleDoneTask:s})}),l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{type:"button",className:"btn btn-danger btn-block mt-1",onClick:r},"Delete done tasks")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{type:"button",className:"btn btn-danger btn-block mt-1",onClick:c},"Delete all tasks")))))}}]),a}(n.Component),y=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({item:e.target.value})},n.handleSelect=function(e){n.setState({type:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={id:n.state.id,title:n.state.item,level:n.state.type,completed:!1};if(""===n.state.type||""===n.state.item)alert("Nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!");else{var a=[].concat(Object(p.a)(n.state.items),[t]);n.state.item.length>0&&n.setState({items:a,id:b()(),item:"",type:"",editItem:!1})}},n.updateTodosToShow=function(e){n.setState({itemsToShow:e})},n.handleDoneTask=function(e,t){var a=n.state.items.map(function(t){return t.id===e&&(t.completed=!t.completed),t});n.setState({items:a})},n.handleDelete=function(e){var t=n.state.items.filter(function(t){return t.id!==e});n.setState({items:t})},n.handleEdit=function(e){var t=n.state.items.filter(function(t){return t.id!==e}),a=n.state.items.find(function(t){return t.id===e});n.setState({items:t,id:e,item:a.title,editItem:!0})},n.handleDeleteDoneTasks=function(){var e=n.state.items.filter(function(e){return!1===e.completed});n.setState({items:e})},n.clearList=function(){n.setState({items:[]})},n.state={items:[],itemsToShow:"all",id:b()(),item:"",type:"",editItem:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=[];return"all"===this.state.itemsToShow?e=this.state.items:"todo"===this.state.itemsToShow?e=this.state.items.filter(function(e){return!e.completed}):"done"===this.state.itemsToShow?e=this.state.items.filter(function(e){return e.completed}):"dofirst"===this.state.itemsToShow?e=this.state.items.filter(function(e){return"Do first"===e.level}):"schedule"===this.state.itemsToShow?e=this.state.items.filter(function(e){return"Schedule"===e.level}):"delegate"===this.state.itemsToShow?e=this.state.items.filter(function(e){return"Delegate/Delay"===e.level}):"delete"===this.state.itemsToShow&&(e=this.state.items.filter(function(e){return"Delete"===e.level})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 col-md-8 mx-auto mt-4"},l.a.createElement("h3",{className:"text-capitalize text-center"},"TodoInput"),l.a.createElement(E,{item:this.state.item,type:this.state.type,handleChange:this.handleChange,handleSelect:this.handleSelect,handleSubmit:this.handleSubmit}),l.a.createElement(g,{items:e,filterDoneTasks:this.filterDoneTasks,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleDoneTask:this.handleDoneTask,handleDeleteDoneTasks:this.handleDeleteDoneTasks,updateTodosToShow:this.updateTodosToShow}))))}}]),a}(n.Component),k=a(24),D=a.n(k),N=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("img",{style:{marginTop:"20px"},src:D.a,alt:"Th\xe0nh Vi\xean Nh\xf3m"}))}}]),a}(n.Component),S=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(u.a,{to:"/",exact:!0},l.a.createElement(h,null)),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0},l.a.createElement(y,null)),l.a.createElement(u.a,{path:"/team"},l.a.createElement(N,null))))}}]),a}(n.Component);o.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2bf987ce.chunk.js.map