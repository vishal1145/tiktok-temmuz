(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f597545"],{"4e65":function(t,e,a){},bb9c:function(t,e,a){"use strict";a("4e65")},f4ea:function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var i=function(){var t=this,e=t._self._c;return e("div",[e("breadcumb",{attrs:{page:"Add Board",folder:"Apps"}}),e("div",{staticClass:"mb-30"},[e("b-card",[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("b-button",{attrs:{variant:"outline-primary",size:"sm"},on:{click:t.back}},[t._v("Back")]),e("p",{staticClass:"m-0 card-title"},[t._v(t._s(t.getEditBoardList.title))]),e("b-button",{attrs:{variant:"outline-danger",size:"sm"}},[t._v("Delete ")])],1)])],1),e("div",{staticClass:"editScrumBoardContainer d-flex mb-30"},[t._l(t.getEditBoardList.list,(function(a,i){return e("div",{key:i,staticClass:"col-md-3 ul-board-item"},[e("b-card",{attrs:{title:a.title},scopedSlots:t._u([{key:"footer",fn:function(){return[t.selectedListId!=i?e("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.toggleCard(i)}}},[t._v("Add Card")]):t.selectedListId===i?e("b-input-group",{staticClass:"mt-3"},[e("b-input-group-append",[e("b-button",{attrs:{disabled:""==t.addBoard.cardList,variant:"primary",size:"sm"},on:{click:function(e){return t.addCard({list:a,cardListTitle:t.addBoard.cardList})}}},[t._v("Add")])],1),e("b-form-input",{staticClass:"ul-scrumboard-form-input",attrs:{type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCard({list:a,cardListTitle:t.addBoard.cardList})}},model:{value:t.addBoard.cardList,callback:function(e){t.$set(t.addBoard,"cardList",e)},expression:"addBoard.cardList"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:t.toggleCard}},[t._v("X")])],1)],1):t._e()]},proxy:!0}],null,!0)},[e("draggable",t._b({staticClass:"list-group",attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),[e("transition-group",{attrs:{type:"transition",name:t.drag?null:"flip-list"}},t._l(a.cardList,(function(a){return e("div",{key:a.id},[e("b-card",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"mb-30 cursor-pointer",attrs:{"img-src":a.coverImage,"img-top":""},on:{click:function(e){return t.editCardListPage(a)}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("small",{staticClass:"text-muted"})]},proxy:!0}],null,!0)},[e("b-card-text",[t._v(t._s(a.title))])],1)],1)})),0)],1)],1)],1)})),e("b-modal",{attrs:{id:"modal-center",size:"lg",centered:"",title:"Draggable 1","hide-footer":""}},[e("b-form",[e("b-form-group",{staticClass:"mb-4",attrs:{id:"input-group-1","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"title"},model:{value:t.getEditCardList.title,callback:function(e){t.$set(t.getEditCardList,"title",e)},expression:"getEditCardList.title"}})],1),e("b-form-group",{staticClass:"mb-4"},[e("b-form-textarea",{attrs:{id:"textarea",rows:"5",placeholder:"Description"},model:{value:t.getEditCardList.description,callback:function(e){t.$set(t.getEditCardList,"description",e)},expression:"getEditCardList.description"}})],1),e("b-form-group",{staticClass:"mb-4"},[e("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Write Comments...."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addComment(t.addBoard.comment)}},model:{value:t.addBoard.comment,callback:function(e){t.$set(t.addBoard,"comment",e)},expression:"addBoard.comment"}})],1),e("b-list-group",{staticClass:"mb-4"},t._l(t.getEditCardList.comments,(function(a){return e("div",{key:a.id,staticClass:"d-flex w-100 align-items-baseline"},[e("p",{staticClass:"ul-widget4__img todo-img"},[e("img",{staticClass:"rounded-circle",attrs:{src:a.image}})]),e("b-list-group-item",{staticClass:"mb-4 w-100"},[t._v(t._s(a.text))])],1)})),0),e("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.onSubmit(t.getEditCardList)}}},[t._v("Submit")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),e("b-col",{attrs:{md:"3"}},[e("b-card",{staticClass:"cursor-pointer"},[e("div",{staticClass:"card-title mb-0"},[t.isShow?e("b-button",{staticClass:"ul-scrum-btn d-flex align-items-center border-0",attrs:{tag:"div"},on:{click:function(e){t.isShow=!t.isShow}}},[e("i",{staticClass:"i-Add text-20 mr-2"}),e("p",{staticClass:"m-0 text-muted"},[t._v("Add Project List")])]):e("b-input-group",{staticClass:"mt-3"},[e("b-input-group-append",[e("b-button",{attrs:{disabled:""==t.addBoard.title,variant:"primary",size:"sm"},on:{click:function(e){return t.addList(t.addBoard.title)}}},[t._v("Add")])],1),e("b-form-input",{staticClass:"ul-scrumboard-form-input",attrs:{type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addList(t.addBoard.title)}},model:{value:t.addBoard.title,callback:function(e){t.$set(t.addBoard,"title",e)},expression:"addBoard.title"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.isShow=!t.isShow}}},[t._v("X")])],1)],1)],1)])],1)],2)],1)},r=[],d=a("5530"),s=(a("14d9"),a("b76a")),n=a.n(s),o=a("2f62"),c={name:"two-lists",display:"Two Lists",order:1,components:{draggable:n.a},data:function(){return{boardTitle:"untitle",addBoard:{title:"",cardList:"",comment:""},selectedListId:null,enabled:!0,isShow:!0,isCard:!1,drag:!1,projectList:""}},computed:Object(d["a"])(Object(d["a"])({},Object(o["c"])(["getBoardList","getEditBoardList","getEditCardList","getList"])),{},{dragOptions:function(){return{animation:200,group:"description",disabled:!1}}}),methods:Object(d["a"])(Object(d["a"])({},Object(o["b"])(["editCardList","addList","addCard","addComment","updateCardList","updateBoard"])),{},{onSubmit:function(t){this.updateCardList(t)},toggleCard:function(t){this.selectedListId=t},addProjectList:function(){},editCardListPage:function(t){this.editCardList(t)},back:function(){this.$router.push("/app/apps/scrumboard")}})},l=c,u=(a("bb9c"),a("2877")),p=Object(u["a"])(l,i,r,!1,null,null,null);e["default"]=p.exports}}]);