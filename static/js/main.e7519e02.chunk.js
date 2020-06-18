(this["webpackJsonpweek-10--react-app"]=this["webpackJsonpweek-10--react-app"]||[]).push([[0],{24:function(e,t,a){},37:function(e,t,a){e.exports=a(65)},42:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),u=(a(42),a(19)),i=a(7),o=(a(24),a(3)),m=a(4),s=a(6),d=a(5),b=function(e){var t=e.colour,a=e.selected,n=e.handleClick;return r.a.createElement("div",{className:"mb-4",onClick:n,style:{width:200,height:200,backgroundColor:a?"green":t}})};b.defaultProps={colour:"hotpink"};var h=b,p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selected:1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{selected:1===this.state.selected,handleClick:function(){return e.setState({selected:1})}}),r.a.createElement(h,{selected:2===this.state.selected,handleClick:function(){return e.setState({selected:2})}}))}}]),a}(n.Component),f=function(e){var t=e.label,a=e.value,n=e.passed,l=e.handleChange;return r.a.createElement("label",null,t,r.a.createElement("input",{value:a,onChange:l,type:"password",className:"form-control "+(n?"is-valid":"is-invalid")}))},E=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={input:"",confirm:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.minimumLength,a=this.state,n=a.input,l=a.confirm,c=n===l&&n.length>t;return r.a.createElement("form",{className:"form-group"},r.a.createElement(f,{label:"Password",value:n,passed:c,handleChange:function(t){return e.setState({input:t.currentTarget.value})}}),r.a.createElement(f,{label:"Confirm Password",value:l,passed:c,handleChange:function(t){return e.setState({confirm:t.currentTarget.value})}}))}}]),a}(n.Component);E.defaultProps={minimumLength:12};var v=E,g=a(8),O=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={count:0},n.handleClick=n.handleClick.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(){var e=this.state.count+1;this.setState({count:e}),(0,this.props.handleUpdate)(e)}},{key:"render",value:function(){var e=this.state.count;return r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},e)}}]),a}(n.Component),j=a(15),C=function(e){var t=e.counter,a=e.handleClickPlus,n=e.handleClickMinus,l=e.highlight;return r.a.createElement("div",{className:"mb-4"+(l?" alert-warning":"")},r.a.createElement("h5",null,"Counter: ",t," "),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{className:"btn-lg btn-success mb-4",onClick:a},"+"),r.a.createElement("button",{className:"btn-lg btn-danger mb-4",onClick:n},"-")))},y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={numbers:e.count.map((function(e){return e}))},n}return Object(m.a)(a,[{key:"handleChange",value:function(e,t){var a=this.state.numbers,n=this.props.max,r=a[e],l=r+t;a[e]=l<=n&&l>=0?l:r,this.setState({numbers:a})}},{key:"render",value:function(){var e=this,t=this.props.count,a=this.state.numbers,n=Math.max.apply(Math,Object(j.a)(a));return r.a.createElement(r.a.Fragment,null,t.map((function(t,l){return r.a.createElement(C,{key:l,counter:a[l],handleClickPlus:function(){return e.handleChange(l,1)},handleClickMinus:function(){return e.handleChange(l,-1)},highlight:a[l]===n})})))}}]),a}(n.Component);y.defaultProps={count:[5,10,15],max:30};var k=y,N=a(2),S=function(e){var t=e.label;return r.a.createElement("label",{htmlFor:t,style:{textTransform:"capitalize"}},t)},x=function(e){var t=e.field,a=e.type,n=e.input,l=e.handleChange;return r.a.createElement("input",{className:"form-control",id:t,name:t,type:a,value:n,onChange:l})},T=function(e){var t=e.handleSubmit;return r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:t},"Submit")},w=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",email:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleName=n.handleName.bind(Object(g.a)(n)),n.handleEmail=n.handleEmail.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleName",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.handleSubmit;t(Object(N.a)({},this.state)),this.setState({name:"",email:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement(S,{label:"name"}),r.a.createElement(x,{field:"name",type:"text",input:a,handleChange:function(t){return e.handleName(t)}}),r.a.createElement(S,{label:"email"}),r.a.createElement(x,{field:"email",type:"email",input:n,handleChange:function(t){return e.handleEmail(t)}})),r.a.createElement(T,{handleSubmit:function(t){return e.handleSubmit(t)}},"Submit"))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={inputs:e.fields.map((function(){return""}))},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleChange=n.handleChange.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e,t){var a=this.state.inputs.slice();a[t]=e.currentTarget.value,this.setState({inputs:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.handleSubmit;t(Object(N.a)({},this.state)),this.setState({inputs:this.props.fields.map((function(){return""}))})}},{key:"render",value:function(){var e=this,t=this.state.inputs,a=this.props.fields;return r.a.createElement("form",null,a.map((function(a,n){return r.a.createElement("div",{className:"form-group",key:n},r.a.createElement(S,{label:a.label}),r.a.createElement(x,{field:a.label,type:a.type,input:t[n],handleChange:function(t){return e.handleChange(t,n)}}))})),r.a.createElement(T,{handleSubmit:function(t){return e.handleSubmit(t)}},"Submit"))}}]),a}(n.Component);I.defaultProps={fields:[{label:"Name",name:"name",type:"text"},{label:"E-mail",name:"email",type:"email"},{label:"Telephone Number",name:"telephone",type:"tel"},{label:"Date of Birth",name:"dob",type:"date"}]};var F=I,D=a(1),M=function(){var e=Object(n.useState)(!1),t=Object(D.a)(e,2),a=t[0],l=t[1];return r.a.createElement("p",{onClick:function(){return l(!0)}},a?"Clicked":"Not Clicked")},P=function(e){var t=e.colour,a=Object(n.useState)(!0),l=Object(D.a)(a,2),c=l[0],u=l[1];return r.a.createElement("div",{className:"mb-4",onClick:function(){return u(!c)},style:{width:200,height:200,backgroundColor:c?"green":t}})};P.defaultProps={colour:"hotpink"};var A=P,L=function(e){var t=e.initial,a=e.alternate,l=Object(n.useState)(!0),c=Object(D.a)(l,2),u=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,u?t:a),r.a.createElement("button",{className:"btn-primary mb-4",onClick:function(){return i(!u)}},"Toggle"))};L.defaultProps={initial:"Hello",alternate:"World"};var _=L,H=function(e){var t=e.initial,a=e.max,l=Object(n.useState)(t),c=Object(D.a)(l,2),u=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Counter: ",u," "),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{className:"btn-success",onClick:function(){return i(u<a?u+1:u)}},"+"),r.a.createElement("button",{className:"btn-danger",onClick:function(){return i(u>0?u-1:u)}},"-")))};H.defaultProps={initial:50,max:100};var R=H,U=function(e){var t=e.max,a=e.step,l=Object(n.useState)(0),c=Object(D.a)(l,2),u=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Counter: ",u," "),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{className:"btn-success",onClick:function(){var e=u+a;i(e<=t?e:u)}},"+"),r.a.createElement("button",{className:"btn-danger",onClick:function(){var e=u-a;i(e>=0?e:u)}},"-")))};U.defaultProps={max:100,step:5};var G=U,B=function(e){var t=e.jump,a=Object(n.useState)(0),l=Object(D.a)(a,2),c=l[0],u=l[1];return r.a.createElement("button",{className:"btn-primary mb-2",onClick:function(){return u(c+t)},style:{transform:"translateY(".concat(c,"px)")}},"Jump")};B.defaultProps={jump:100};var K=B,W=function(e){var t=e.names,a=Object(n.useState)(0),l=Object(D.a)(a,2),c=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Name: ",t[c]),r.a.createElement("button",{className:"btn-primary mb-4",onClick:function(){return u(c<t.length-1?c+1:0)}},"Next"))};W.defaultProps={names:["Tom","Dick","Harry"]};var q=W,z=function(){var e,t=Object(n.useState)(""),a=Object(D.a)(t,2),l=a[0],c=a[1];return r.a.createElement("form",{className:"form-group"},r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:l,onChange:function(e){return c(e.currentTarget.value)},type:"password",style:{backgroundColor:(e=l.length,0===e?"":e<9?"red":e<16?"orange":"green")}})))},J=function(){var e=Object(n.useState)("32"),t=Object(D.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("0"),u=Object(D.a)(c,2),i=u[0],o=u[1];return r.a.createElement("form",{className:"form-group"},r.a.createElement("label",null,"Fahrenheit:"),r.a.createElement("input",{value:a,onChange:function(e){var t,a=+e.currentTarget.value;o((t=a,5*(t-32)/9).toFixed(2)),l("".concat(a))},type:"number"}),r.a.createElement("label",null,"Celsius:"),r.a.createElement("input",{value:i,onChange:function(e){var t,a=+e.currentTarget.value;l((t=a,1.8*t+32).toFixed(2)),o("".concat(a))},type:"number"}))},Q=function(){var e=Object(n.useState)(""),t=Object(D.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(D.a)(c,2),i=u[0],o=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:a,onChange:function(e){l(e.currentTarget.value)},type:"text",className:"mb-1"}),r.a.createElement("button",{className:"btn-primary",onClick:function(e){o([].concat(Object(j.a)(i),[a])),l("")}},"Add Item"),r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},V={clicked:!1},X=function(e,t){switch(t.type){case"BUTTON_CLICKED":return function(e){return Object(N.a)(Object(N.a)({},e),{},{clicked:!0})}(e);default:return e}},Y=function(){var e=Object(n.useReducer)(X,V),t=Object(D.a)(e,2),a=t[0].clicked,l=t[1];return r.a.createElement("p",{onClick:function(){return l({type:"BUTTON_CLICKED"})}},a?"Clicked":"Not Clicked")},Z={counter:0},$=function(e){var t=e.max,a=e.step,l=Object(n.useReducer)((function(e,n){switch(n.type){case"PLUS_CLICKED":return function(e){var n=e.counter+a;return Object(N.a)(Object(N.a)({},e),{},{counter:n<=t?n:e.counter})}(e);case"MINUS_CLICKED":return function(e){var t=e.counter-a;return Object(N.a)(Object(N.a)({},e),{},{counter:t>=0?t:e.counter})}(e);default:return e}}),Z),c=Object(D.a)(l,2),u=c[0].counter,i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Counter: ",u," "),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{className:"btn-success",onClick:function(){return i({type:"PLUS_CLICKED"})}},"+"),r.a.createElement("button",{className:"btn-danger",onClick:function(){return i({type:"MINUS_CLICKED"})}},"-")))};$.defaultProps={max:100,step:5};var ee=$,te={fahrenheit:"32",celsius:"0"},ae=function(e){return 5*(e-32)/9},ne=function(e){return 1.8*e+32},re=function(){var e=Object(n.useReducer)((function(e,t){switch(t.type){case"CELSIUS_CHANGE":return function(e,t){return Object(N.a)(Object(N.a)({},e),{},{fahrenheit:ne(+t).toFixed(2),celsius:"".concat(t)})}(e,t.value);case"FAHRENHEIT_CHANGE":return function(e,t){return Object(N.a)(Object(N.a)({},e),{},{celsius:ae(+t).toFixed(2),fahrenheit:"".concat(t)})}(e,t.value);default:return e}}),te),t=Object(D.a)(e,2),a=t[0],l=a.fahrenheit,c=a.celsius,u=t[1];return r.a.createElement("form",{className:"form-group"},r.a.createElement("label",null,"Fahrenheit:",r.a.createElement("input",{value:l,onChange:function(e){return u({type:"FAHRENHEIT_CHANGE",value:e.target.value})},type:"number"})),r.a.createElement("label",null,"Celsius:",r.a.createElement("input",{value:c,onChange:function(e){return u({type:"CELSIUS_CHANGE",value:e.target.value})},type:"number"})))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(O,{handleUpdate:console.log}),r.a.createElement(w,{handleSubmit:console.log}),r.a.createElement(F,{handleSubmit:console.log}),r.a.createElement(M,null),r.a.createElement(A,null),r.a.createElement(_,null),r.a.createElement(R,null),r.a.createElement(G,null),r.a.createElement(K,null),r.a.createElement(q,null),r.a.createElement(z,null),r.a.createElement(J,null),r.a.createElement(Q,null),r.a.createElement(Y,null),r.a.createElement(ee,null),r.a.createElement(re,null))},ce=a(35),ue=a.n(ce).a.create({baseURL:"https://restful.training/api/blog",headers:{Accept:"application/json",Authorization:"Bearer Oy97PZCqPTYVnqxZcehxcoydXp7W3zot3QgI5kLshvoMjOOUYXEXD2dHQKCIITFjocHQcR4hOq9Gm7mu"}}),ie=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loaded:!1,articles:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;ue.get("/articles").then((function(t){var a=t.data;e.setState({loaded:!0,articles:a.data})}))}},{key:"render",value:function(){var e=this.state,t=e.articles;return e.loaded?r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-3"},"Great Blog"),r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},r.a.createElement(u.b,{to:"/news/".concat(e.id)},e.title),e.tags.map((function(e,t){return r.a.createElement("span",{className:"float-right badge badge-primary badge-pill",key:t},e)})))})))):r.a.createElement("p",null,"Loading...")}}]),a}(n.Component),oe=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loaded:!1,comments:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.articleID;ue.get("/articles/".concat(t,"/comments")).then((function(t){var a=t.data;e.setState({loaded:!0,comments:a.data})}))}},{key:"render",value:function(){var e=this.state,t=e.comments;return e.loaded?r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"display-4"},"Comments"),r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("strong",null,e.email)),r.a.createElement("p",null,e.comment))})))):r.a.createElement("p",null,"Loading...")}}]),a}(n.Component),me=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",comment:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleEmail=n.handleEmail.bind(Object(g.a)(n)),n.handleComment=n.handleComment.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleEmail",value:function(e){this.setState({email:e.currentTarget.value})}},{key:"handleComment",value:function(e){this.setState({comment:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.email,r=a.comment,l=this.props.articleID;ue.post("/articles/".concat(l,"/comments"),{email:n,comment:r}).then((function(){t.setState({email:"",comment:""})}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.comment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-4",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-control",id:"email",name:"email",type:"text",value:t,onChange:this.handleEmail}),r.a.createElement("label",{htmlFor:"comment"},"Comment"),r.a.createElement("input",{className:"form-control",id:"comment",name:"comment",type:"text",value:a,onChange:this.handleComment})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Comment"))))}}]),a}(n.Component),se=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loaded:!1,article:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.articleID;ue.get("/articles/".concat(t)).then((function(t){var a=t.data;e.setState({loaded:!0,article:a.data})}))}},{key:"render",value:function(){var e=this.state,t=e.article;return e.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-3"},"Great Blog"),r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.content),t.tags.map((function(e,t){return r.a.createElement("span",{className:"float-right badge badge-primary badge-pill",key:t},e)}))),r.a.createElement(oe,{articleID:t.id}),r.a.createElement(me,{articleID:t.id})):r.a.createElement("p",null,"Loading...")}}]),a}(n.Component),de=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"",article:"",tags:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleTitle=n.handleTitle.bind(Object(g.a)(n)),n.handleArticle=n.handleArticle.bind(Object(g.a)(n)),n.handleTags=n.handleTags.bind(Object(g.a)(n)),n}return Object(m.a)(a,[{key:"handleTitle",value:function(e){this.setState({title:e.currentTarget.value})}},{key:"handleArticle",value:function(e){this.setState({article:e.currentTarget.value})}},{key:"handleTags",value:function(e){this.setState({tags:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.title,r=a.article,l=a.tags.split(/\s*,\s*/);console.log(l),ue.post("/articles",{title:n,content:r,tags:l}).then((function(){t.setState({title:"",article:"",tags:""})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.article,n=e.tags;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-3"},"Great Blog")),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-4",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"form-control",id:"title",name:"title",type:"text",value:t,onChange:this.handleTitle}),r.a.createElement("label",{htmlFor:"title"},"Article"),r.a.createElement("input",{className:"form-control",id:"article",name:"article",type:"text",value:a,onChange:this.handleArticle}),r.a.createElement("label",{htmlFor:"title"},"Tags"),r.a.createElement("input",{className:"form-control",id:"tags",name:"tags",type:"text",value:n,onChange:this.handleTags})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Create"))))}}]),a}(n.Component),be=function(e,t){switch(t.type){case"NEW_ITEM":return function(e,t){var a=t.value;return Object(N.a)(Object(N.a)({},e),{},{items:[].concat(Object(j.a)(e.items),[{task:a,completed:!1}])})}(e,t);case"REMOVE_ITEM":return function(e,t){var a=t.index;return Object(N.a)(Object(N.a)({},e),{},{items:e.items.filter((function(e,t){return t!==a}))})}(e,t);case"CHANGE_ITEM":return function(e,t){var a=t.index,n=t.value;return Object(N.a)(Object(N.a)({},e),{},{items:e.items.map((function(e,t){return t===a?Object(N.a)(Object(N.a)({},e),{},{task:n}):e}))})}(e,t);case"MARK_COMPLETED":return function(e,t){var a=t.index;return Object(N.a)(Object(N.a)({},e),{},{items:e.items.map((function(e,t){return t===a?Object(N.a)(Object(N.a)({},e),{},{completed:!0}):e}))})}(e,t);default:return e}},he={items:[]},pe=function(){var e=Object(n.useReducer)(be,he),t=Object(D.a)(e,2),a=t[0].items,l=t[1],c=Object(n.useState)(""),u=Object(D.a)(c,2),i=u[0],o=u[1],m=Object(n.useState)(!1),s=Object(D.a)(m,2),d=s[0],b=s[1],h=Object(n.useState)(""),p=Object(D.a)(h,2),f=p[0],E=p[1],v=function(){return b(!d)},g=function(e){return E(e)};return r.a.createElement("div",{className:"card"},r.a.createElement("form",{className:"card-header",onSubmit:function(e){e.preventDefault(),d?(o(""),b(!1),l({type:"CHANGE_ITEM",index:f,value:i})):(o(""),l({type:"NEW_ITEM",value:i}))}},r.a.createElement("input",{className:"form-control",onChange:function(e){o(e.currentTarget.value)},value:i})),r.a.createElement("div",{className:"card-body"},0===a.length?r.a.createElement("p",{className:"card-text"},"No list items"):r.a.createElement("ul",{className:"list-group list-group-flush"},a.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("span",{className:"flex-grow-1",style:{cursor:"pointer",textDecoration:e.completed?"line-through":"",border:d&&f===t?"2px solid red":""},onClick:function(){return l({type:"MARK_COMPLETED",index:t})}},e.task),r.a.createElement("button",{class:"btn btn-sm btn-primary mr-1",onClick:function(e){return function(e,t){e.preventDefault(),v(),g(t)}(e,t)}},"Edit"),r.a.createElement("button",{class:"btn btn-sm btn-danger",onClick:function(){return l({type:"REMOVE_ITEM",index:t})}},"\xd7"))})))))};var fe=function(){return r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:le}),r.a.createElement(i.a,{exact:!0,path:"/news/create",component:de}),r.a.createElement(i.a,{exact:!0,path:"/news",component:ie}),r.a.createElement(i.a,{path:"/news/:id",render:function(e){var t=e.match;return r.a.createElement(se,{articleID:t.params.id})}}),r.a.createElement(i.a,{exact:!0,path:"/list",component:pe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e7519e02.chunk.js.map