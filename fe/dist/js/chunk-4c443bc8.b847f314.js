(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c443bc8","chunk-2d0e5972"],{"6ad6":function(t,e,o){"use strict";o.r(e);o("a4d3"),o("e01a"),o("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Todo List",folder:"App"}}),e("div",{staticClass:"ul-todo-list-content"},[e("div",{staticClass:"ul-todo-sidebar",class:{"ul-todo-mobile-menu-open ":t.isOpenMobileMenu}},[e("div",{staticClass:"ul-todo-sidebar-overlay"}),e("b-card",{staticClass:"h-100",attrs:{"body-class":"p-2"}},[e("i",{staticClass:"todo-sidebar-close i-Close pb-3 float-right",on:{click:function(e){t.isOpenMobileMenu=!t.isOpenMobileMenu}}}),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{block:"",variant:"primary mb-30"}},[t._v("Add Task")]),e("b-modal",{attrs:{id:"modal-1",centered:"",title:"Add Task","hide-footer":""}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.todoFormSubmit("primary")}}},[e("b-form-group",{attrs:{id:"input-group-1","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"task name...."},model:{value:t.todoForm.name,callback:function(e){t.$set(t.todoForm,"name",e)},expression:"todoForm.name"}})],1),e("b-form-group",[e("b-form-input",{attrs:{id:"input-1",type:"date"},model:{value:t.todoForm.date,callback:function(e){t.$set(t.todoForm,"date",e)},expression:"todoForm.date"}})],1),e("b-form-group",[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Description...",rows:"3"},model:{value:t.todoForm.description,callback:function(e){t.$set(t.todoForm,"description",e)},expression:"todoForm.description"}})],1),e("b-form-group",[e("vue-tags-input",{staticClass:"border text-15",attrs:{"autocomplete-items":t.filteredItems,tags:t.todoForm.autocompleteTag,placeholder:"Type Developer Category"},on:{"tags-changed":function(e){return t.todoForm.autocompleteTag=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1),e("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[t._v("Submit")]),e("b-button",{attrs:{type:"reset",variant:"outline-danger"}},[t._v("Reset")])],1)],1),e("b-list-group",[e("b-list-group-item",{staticClass:"border-0",attrs:{href:"#"}},[e("a",{attrs:{href:""}},[e("i",{staticClass:"icon-regular i-Find-User mr-2"}),t._v(" Find ")])]),e("b-list-group-item",{staticClass:"border-0",attrs:{href:"#"}},[e("a",{attrs:{href:""}},[e("i",{staticClass:"icon-regular i-Favorite-Window mr-2"}),t._v(" Favourite ")])]),e("b-list-group-item",{staticClass:"border-0",attrs:{href:"#"}},[e("a",{attrs:{href:""}},[e("i",{staticClass:"icon-regular i-Delete-File mr-2"}),t._v(" Deleted ")])])],1)],1)],1),e("p",{staticClass:"ul-todo-content-right"},[e("b-card",{staticClass:"wrapper"},[e("i",{staticClass:"nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon mr-2",on:{click:function(e){t.isOpenMobileMenu=!t.isOpenMobileMenu}}}),e("vue-good-table",{attrs:{columns:t.columns,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.rows},scopedSlots:t._u([{key:"table-row",fn:function(o){return["name"==o.column.field?e("span",[e("div",{staticClass:"ul-todo-area d-flex"},[e("div",[e("label",{staticClass:"checkbox checkbox-primary"},[e("input",{attrs:{type:"checkbox"}}),e("span",{staticClass:"checkmark"})])]),e("div",[t._v(t._s(o.row.name))])])]):o.column.field==t.profileAction?e("span",[e("div",{staticClass:"ul-todo-tags d-flex justify-content-end align-items-center"},t._l(o.row.tags,(function(o,a){return e("span",{key:a,staticClass:"d-flex align-items-center ml-2"},[e("b-badge",{staticClass:"badge mr-2",class:o.badgeColor},[t._v(t._s(o.text))]),e("p",{staticClass:"ul-widget4__img mt-2 mb-2 todo-img"},[e("img",{staticClass:"rounded-circle",attrs:{src:o.img}})])],1)})),0)]):"action"==o.column.field?e("span",[e("b-dropdown",{attrs:{id:"dropdown-left",variant:"link",text:"Left align","toggle-class":"text-decoration-none",size:"sm",dropleft:"","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("span",{staticClass:"_dot _r_block-dot bg-dark"}),e("span",{staticClass:"_dot _r_block-dot bg-dark"}),e("span",{staticClass:"_dot _r_block-dot bg-dark"})]},proxy:!0}],null,!0)},[e("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-list-table-modal-2",modifiers:{"contact-list-table-modal-2":!0}}],staticClass:"dropdown-item",on:{click:function(e){return t.editTodo(o.row)}}},[e("i",{staticClass:"nav-icon i-Pen-2 text-success font-weight-bold mr-2"}),t._v("Edit ")]),e("b-dropdown-item",[e("a",{staticClass:"dropdown-item",on:{click:function(e){return t.deleteTodo(o.index)}}},[e("i",{staticClass:"nav-icon i-Close-Window text-danger font-weight-bold mr-2"}),t._v("Delete ")])])],1)],1):t._e()]}}])})],1)],1),e("div",{staticClass:"edit-modal"},[e("b-modal",{ref:"my-modal",attrs:{id:"contact-list-table-modal-2",centered:"",title:"BootstrapVue","hide-footer":""}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.onUpdateTodoList.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"input-group-1","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"task name...."},model:{value:t.editTodoList.name,callback:function(e){t.$set(t.editTodoList,"name",e)},expression:"editTodoList.name"}})],1),e("b-form-group"),e("b-form-group",[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Description...",rows:"3"},model:{value:t.editTodoList.description,callback:function(e){t.$set(t.editTodoList,"description",e)},expression:"editTodoList.description"}})],1),e("b-form-group",[e("b-form-input",{attrs:{id:"input-1",type:"date"},model:{value:t.editTodoList.date,callback:function(e){t.$set(t.editTodoList,"date",e)},expression:"editTodoList.date"}})],1),e("b-form-group",[e("vue-tags-input",{staticClass:"border text-15",attrs:{"autocomplete-items":t.filteredItems,tags:t.editTodoList.tags,placeholder:"Type Developer Category"},on:{"tags-changed":function(e){return t.editTodoList.tags=e}},model:{value:t.editedTag,callback:function(e){t.editedTag=e},expression:"editedTag"}})],1),e("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[t._v("Submit")]),e("b-button",{attrs:{type:"reset",variant:"outline-danger"}},[t._v("Reset")])],1)],1)],1)])],1)},i=[],s=o("ade3"),n=(o("4de4"),o("d81d"),o("14d9"),o("d3b7"),o("94ab"),{data:function(){return{isBadge:!0,isOpenMobileMenu:!1,editTodoList:"",tag:"",editedTag:"",tags:[],autocompleteTags:[{text:"Vue"}],autocompleteItems:[{text:"Vue",badgeColor:"badge-success",img:o("6f92")},{text:"Angular",badgeColor:"badge-danger",img:o("4972")},{text:"React",badgeColor:"badge-info",img:o("1290")},{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")},{text:"JS",badgeColor:"badge-warning",img:o("017f")}],todoForm:[{name:"",description:"",autocompleteTag:"",date:new Date}],foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],columns:[{label:"",field:"name"},{label:" ",field:this.profileAction,width:"150px"},{field:"action"}],rows:[{id:1,name:"Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",date:"2019-10-18",tags:[{text:"Vue",badgeColor:"badge-success",img:o("6f92")},{text:"React",badgeColor:"badge-info",img:o("1290")}]},Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:2,name:"Bluetooth Headphone"},"name","Bluetooth V4.0 Portable Speaker with HD Sound and Bass"),"description","Lorem Ipsum is simply dummy text of the printing and typesetting industry."),"date","2019-10-18"),"tags",[{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")},{text:"JS",badgeColor:"badge-warning",img:o("017f")}]),Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:3,name:"Bluetooth Headphone"},"name","Monitor V4.0 Portable Speaker with HD Sound and Bass"),"description","Lorem Ipsum is simply dummy text of the printing and typesetting industry."),"date","2019-10-18"),"tags",[{text:"Angular",badgeColor:"badge-danger",img:o("4972")},{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")}]),{id:4,name:"Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",date:"2019-10-18",tags:[{text:"Vue",badgeColor:"badge-success",img:o("6f92")},{text:"React",badgeColor:"badge-info",img:o("1290")}]},Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:5,name:"Bluetooth Headphone"},"name","Bluetooth V4.0 Portable Speaker with HD Sound and Bass"),"description","Lorem Ipsum is simply dummy text of the printing and typesetting industry."),"date","2019-10-18"),"tags",[{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")},{text:"JS",badgeColor:"badge-warning",img:o("017f")}]),Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:6,name:"Bluetooth Headphone"},"name","Monitor V4.0 Portable Speaker with HD Sound and Bass"),"description","Lorem Ipsum is simply dummy text of the printing and typesetting industry."),"date","2019-10-18"),"tags",[{text:"Angular",badgeColor:"badge-danger",img:o("4972")},{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")}]),Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({id:7,name:"Bluetooth Headphone"},"name","Bluetooth V4.0 Portable Speaker with HD Sound and Bass"),"description","Lorem Ipsum is simply dummy text of the printing and typesetting industry."),"date","2019-10-18"),"tags",[{text:"Jquery",badgeColor:"badge-danger",img:o("a4ec")},{text:"JS",badgeColor:"badge-warning",img:o("017f")}])]}},methods:{profileAction:function(t){return t},todoFormSubmit:function(){var t=this.todoForm.name,e=this.todoForm.description,o=this.todoForm.autocompleteTag,a=this.todoForm.date;this.rows.push({id:this.rows.length+1,name:t,tags:o,description:e,date:a}),this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,type:"success",title:"Data Inserted Successfully"})},deleteTodo:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&(e.$delete(e.rows,t),e.$swal("Deleted!","Your file has been deleted.","success"))}))},editTodo:function(t){this.editTodoList=t},onUpdateTodoList:function(){var t=this,e=this.rows.map((function(e){return t.$refs["my-modal"].hide(),t.$swal({position:"top-end",type:"warning",title:"Your work has been saved",showConfirmButton:!1,timer:1e3}),e.id==t.editTodoList.id?t.editTodoList:e}));this.rows=e}},computed:{filteredItems:function(){var t=this;return this.autocompleteItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.tag.toLowerCase())}))}}}),r=n,d=o("2877"),l=Object(d["a"])(r,a,i,!1,null,null,null);e["default"]=l.exports},"94ab":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Tag Input",folder:"Forms"}}),e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-card",{attrs:{title:"Tag Inputs"}},[e("vue-tags-input",{staticClass:"tag-custom text-15",attrs:{tags:t.tags,placeholder:"+ add"},on:{"tags-changed":function(e){return t.tags=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1)],1),e("b-col",{staticClass:"mt-4",attrs:{md:"12"}},[e("b-card",{attrs:{title:"Autocomplete"}},[e("vue-tags-input",{staticClass:"tag-custom text-15",attrs:{tags:t.autocompleteTags,"autocomplete-items":t.filteredItems,placeholder:"Type Country Name"},on:{"tags-changed":function(e){return t.autocompleteTags=e}},model:{value:t.autocompleteTag,callback:function(e){t.autocompleteTag=e},expression:"autocompleteTag"}})],1)],1)],1)],1)},i=[],s=(o("4de4"),o("d3b7"),{metaInfo:{title:"Tag Input"},data:function(){return{tag:"",tags:[{text:"Javascript"},{text:"Typescript"},{text:"add"}],autocompleteTag:"",autocompleteTags:[{text:"Bangladesh"}],autocompleteItems:[{text:"Spain"},{text:"France"},{text:"USA"},{text:"Germany"},{text:"China"}]}},computed:{filteredItems:function(){var t=this;return this.autocompleteItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.tag.toLowerCase())}))}}}),n=s,r=o("2877"),d=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=d.exports}}]);