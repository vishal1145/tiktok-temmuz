(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41371254"],{"04d8":function(e,t,a){"use strict";a("316d")},"316d":function(e,t,a){},"498a":function(e,t,a){"use strict";var r=a("23e7"),s=a("58a8").trim,n=a("c8d2");r({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},8592:function(e,t,a){"use strict";a.r(t);var r=a("2909"),s=(a("4de4"),a("d81d"),a("d3b7"),function(){var e=this,t=e._self._c;return t("div",{},[t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModal,callback:function(t){e.showAddModal=t},expression:"showAddModal"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Add Creators ")]),t("b-row",{staticClass:"px-3"},["admin"==e.role?t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Select Member","label-for":"input-title"}},[t("multiselect",{attrs:{placeholder:"Select Member",options:Object(r["a"])(e.allUsers),multiple:!1,limit:1,label:"fullName"},on:{input:e.handleChange},model:{value:e.selectedName,callback:function(t){e.selectedName=t},expression:"selectedName"}})],1)],1):e._e(),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"First Name","label-for":"input-first-name"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"First name",type:"text",id:"input-first-name"},model:{value:e.first_name,callback:function(t){e.first_name=t},expression:"first_name"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Last Name","label-for":"input-last-name"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Last name",type:"text",id:"input-last-name"},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok Username","label-for":"input-tiktok-username"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"TikTok username",type:"text",id:"input-tiktok-username"},model:{value:e.tiktok_username,callback:function(t){e.tiktok_username=t},expression:"tiktok_username"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact Number","label-for":"input-contact-number"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Contact number",type:"number",id:"input-contact-number"},on:{keydown:e.checkLengthPhone},model:{value:e.contact_number,callback:function(t){e.contact_number=t},expression:"contact_number"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Agency Center Code","label-for":"input-agency-center-code"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency-center-code"},on:{keydown:e.checkLengthPhone2},model:{value:e.agency_center_code,callback:function(t){e.agency_center_code=t},expression:"agency_center_code"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Select Images","label-for":"input-images"}},[t("b-form-file",{attrs:{placeholder:"Choose files or drop them here","drop-placeholder":"Drop files here...",accept:".png,.jpg,.jpeg"},on:{input:e.handleImageSelection},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}})],1)],1),t("b-col",{staticClass:"justify-content-end d-flex align-items-center py-2",attrs:{md:"6"}},[e.uplodedImages?t("img",{staticClass:"img-fluid",attrs:{src:e.uplodedImages,alt:"",height:"50",width:"50"}}):e._e()]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModal()}}},[e._v(" Close ")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.addPublisher()}}},[e._v(" Add ")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModalEdit,callback:function(t){e.showAddModalEdit=t},expression:"showAddModalEdit"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Update publisher ")]),t("b-row",{staticClass:"px-3"},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"First Name","label-for":"input-first-name"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"First name",type:"text",id:"input-first-name"},model:{value:e.getFirstName,callback:function(t){e.getFirstName=t},expression:"getFirstName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Last Name","label-for":"input-last-name"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Last name",type:"text",id:"input-last-name"},model:{value:e.getLastName,callback:function(t){e.getLastName=t},expression:"getLastName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok User Name","label-for":"input-last-name"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Last name",type:"text",id:"input-last-name"},model:{value:e.getTikTok,callback:function(t){e.getTikTok=t},expression:"getTikTok"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Contact number",type:"number",id:"input-phoneNumber"},on:{keydown:e.checkLengthPhoneEdt},model:{value:e.getphoneNumber,callback:function(t){e.getphoneNumber=t},expression:"getphoneNumber"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Agency center code","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"43px","background-color":"white",border:"1px solid #80808038"},attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency"},model:{value:e.getcenterCode,callback:function(t){e.getcenterCode=t},expression:"getcenterCode"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Select Images","label-for":"input-images"}},[t("b-form-file",{attrs:{placeholder:"Choose files or drop them here","drop-placeholder":"Drop files here...",accept:".png,.jpg,.jpeg"},on:{input:e.handleImageSelection},model:{value:e.getImages,callback:function(t){e.getImages=t},expression:"getImages"}})],1)],1),t("b-col",{staticClass:"justify-content-end d-flex align-items-center py-2",attrs:{md:"6"}},[t("img",{staticClass:"img-fluid",attrs:{src:this.uplodedImages,alt:"",height:"50",width:"50"}})]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModalEdit()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.editPublisher()}}},[e._v("Update")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-cancelReason",size:"md",title:"Reason for cancellation:","hide-footer":"","hide-header":"",centered:""}},[t("b-row",{staticClass:"p-3"},[t("b-col",{attrs:{md:"12"}},[t("i",{staticClass:"fa fa-exclamation-triangle text-danger mb-3",attrs:{"aria-hidden":"true"}},[e._v(" Reason for cancellation: ")])]),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"","label-for":"input-2"}},[t("b-form-textarea",{staticStyle:{height:"100px"},attrs:{required:"",placeholder:"Reason for cancellation"},model:{value:e.cancelReasonText,callback:function(t){e.cancelReasonText=t},expression:"cancelReasonText"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.updateloader?t("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.clickCancle()}}},[e._v("Cancel")]),t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.clickRejectButton()}}},[e._v("ok")])],1)])],1)],1),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("div",{staticClass:"d-flex flex-column gap-5",staticStyle:{gap:"13px"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Filters ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("li",[t("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[t("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),t("li",[t("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[t("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),t("div",{staticClass:"d-flex flex-row card-body flex-wrap",style:{display:e.flexDivDisplay}},[t("div",{staticClass:"col-12 col-sm-6 col-lg-3",staticStyle:{"padding-right":"0px","padding-left":"0px"}},[t("label",{attrs:{for:"users-list-search"}},[e._v("Search")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},e.onSearchTermChange]}})])]),t("div",{staticClass:"col-12 col-sm-6 col-lg-3 paddingzero"},[t("label",{attrs:{for:"users-list-verified"}},[e._v("Action")]),t("fieldset",{staticClass:"form-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedStatus,expression:"selectedStatus"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-verified"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedStatus=t.target.multiple?a:a[0]},e.onStatusChange]}},[t("option",{attrs:{value:""}},[e._v("All")]),t("option",{attrs:{value:"Approved"}},[e._v("Approved")]),t("option",{attrs:{value:"Rejected"}},[e._v("Rejected")]),t("option",{attrs:{value:"Under Review"}},[e._v("Under Review")])])])])])]),t("div",{staticClass:"d-flex flex-column gap-5 card",staticStyle:{gap:"13px"}},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Creators ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("button",{staticClass:"btn btn-primary mb-3",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(t){e.showAddModal=!0}}},[e._v(" Add New ")])])])]),t("div",{staticClass:"card-body"},[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":e.paginationOptions,styleClass:"tableOne vgt-table",rows:e.doubledNumber},scopedSlots:e._u([{key:"table-row",fn:function(a){return["actions"===a.column.field?t("span",["user"==e.role&&"Approved"!=a.row.status&&"Rejected"!=a.row.status?t("div",[t("span",{staticClass:"btn p-0",on:{click:function(t){return e.clickEdit(a.row)}}},[t("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"btn pl-3",on:{click:function(t){return e.clickDelete(a.row)}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]):"admin"==e.role&&"Approved"!=a.row.status&&"Rejected"!=a.row.status?t("div",{staticClass:"d-flex"},[t("div",{staticClass:"badge border mr-2 bg-success text-white ul-cursor--pointer p-2",on:{click:function(t){return e.clickAccept(a.row._id)}}},[e._v(" Approve ")]),t("div",{staticClass:"badge border bg-danger text-white ul-cursor--pointer p-2",on:{click:function(t){return e.clickReject(a.row._id)}}},[e._v(" Reject ")])]):e._e(),t("div",["Approved"===a.row.status?t("div",[t("span",{staticClass:"badge badge-success"},[e._v(e._s(a.row.status))])]):"Rejected"===a.row.status?t("div",[t("span",{staticClass:"badge badge-danger"},[e._v(e._s(a.row.status))])]):e._e()])]):"reason"===a.column.field?t("span",[t("div",[e._v(e._s(a.row.reason))])]):"show_img"===a.column.field?t("span",[t("div",[t("img",{style:{width:"50px",height:"50px",borderRadius:"197px",objectFit:"cover"},attrs:{src:a.row.icon,alt:""}})])]):"first_name"===a.column.field?t("span",[t("div",[t("div",[e._v(" "+e._s(a.row.first_name)+" "+e._s(a.row.last_name)+" ")])])]):"tiktok_username"===a.column.field?t("span",[t("div",[t("div",[e._v(e._s(a.row.tiktok_username))])])]):e._e()]}}])})],1)])])],1)}),n=[],o=a("5530"),i=a("c7eb"),c=a("1da1"),l=a("ade3"),d=(a("99af"),a("caad"),a("a15b"),a("fb6a"),a("b0c0"),a("25f0"),a("2532"),a("498a"),a("8e5f")),u=a.n(d),p={components:{multiselect:u.a},data:function(){var e;return e={selectedName:"",allUsers:[],rows:[],updateloader:!1,selectedUserName:null,getphoneNumber:"",getcenterCode:"",getImages:null,uplodedImages:"",imgLoader:!1,userNames:[],flexDivDisplay:"flex!important",filteredFaqs:[],filterStatus:"",faqs:[],role:"",showAddModal:!1,showAddModalEdit:!1,editFAQData:{id:null,title:"",description:"",category:"Please Selected Category"},category:"Please Selected Category",loader:!1},Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(e,"imgLoader",!1),"centerCode",""),"rejectedId",""),"phoneNumber",""),"publisherName",""),"getcenterCode",""),"getphoneNumber",""),"getpublisherName",""),"searchUser",[]),"getImages",null),Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(e,"cancelReasonText",""),"user_id",""),"updateId",""),"getUserName",""),"uplodedImages",""),"images",null),"isEdit",!1),"columns",[{label:"Icons",field:"show_img",sortable:!1},{label:"Name",field:"first_name",filterOptions:{enabled:!0,placeholder:"User Name"}},{label:"TikTok Name",field:"tiktok_username",filterOptions:{enabled:!0,placeholder:"User Name"}},{label:"Contact number",field:"contact_number",filterOptions:{enabled:!0,placeholder:"Contact Number"}},{label:"Agency code",field:"agency_center_code",filterOptions:{enabled:!0,placeholder:"Agency Code"}},{label:"Reason",field:"reason",filterOptions:{enabled:!0,placeholder:"Reason"}},{label:"Actions",sortable:!1,field:"actions",width:"150px",formatFn:function(){return'\n              <span class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>\n              <span class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>\n            '}}]),"paginationOptions",{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:"Next",prevLabel:"Previous"}),"first_name",""),Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(e,"last_name",""),"tiktok_username",""),"contact_number",""),"agency_center_code",""),"icon",""),"ForDropwDow",[]),"getFirstName",""),"getLastName",""),"getTikTok",""),"tiktokres",{}),Object(l["a"])(Object(l["a"])(e,"selectedStatus",""),"searchTerm","")},mounted:function(){this.clearFilters(),this.addCssRule(),this.fetchUserNames(),this.getAllUsers()},computed:{containerClasses:function(){return{"large-container":this.isLarge,"important-container":this.isImportant}},doubledNumber:function(){return this.filteredRows32()}},created:function(){this.filteredRows32(),this.fetchUserNames(),this.getAllUsers(),this.clearFilters(),this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.fetchPublisher()},methods:{filteredRows32:function(){var e=this.searchTerm.toLowerCase().trim(),t=this.selectedStatus;return this.faqs.filter((function(a){var r=!e||a.first_name&&a.first_name.toLowerCase().includes(e),s=!t||a.status===t;return r&&s}))},handleChange:function(e){this.selectedUserId=e._id},checkLengthPhone:function(e){this.contact_number.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},checkLengthPhone2:function(e){this.agency_center_code.toString().length>=13&&8!==e.keyCode&&e.preventDefault()},checkLengthPhoneEdt:function(e){this.getphoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},checkLengthPhoneEdit2:function(e){this.getcenterCode.toString().length>=13&&8!==e.keyCode&&e.preventDefault()},fetchUserNames:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAllUsers();case 2:e.userNames=e.rows.map((function(e){return{value:e._id,text:e.name}}));case 3:case"end":return t.stop()}}),t)})))()},getAllUsers:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r,s;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,e.$apiService.getCall("user/get-all-members");case 4:a=t.sent,a&&!1===a.isError&&a.apidata&&a.apidata.data?(r=a.apidata.data,e.rows=r,e.allUsers=r,s=r.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{fullName:"".concat(e.name," ").concat(e.surname)})})),e.rows=s,e.allUsers=s):e.$toaster.makeToast("warning","Failed to fetch user data"),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error("Error fetching user data:",t.t0),e.$toaster.makeToast("error","Error fetching user data");case 12:return t.prev=12,e.loader=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})))()},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.searchTerm="",this.selectedStatus="",this.getAllUsers()},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},clickCancle:function(){this.$bvModal.hide("modal-cancelReason")},checkLengthCode:function(e){this.centerCode.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},fetchPublisher:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a="",a="admin"==e.role?"publisher/get-all":"user/get-all-members-publishers",t.next=6,new Promise((function(t,r){e.$apiService.getCall(a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 6:r=t.sent,r.error?e.$toaster.makeToast("warning",r.message):(e.faqs=r.apidata.data,e.filteredFaqs=r.apidata.data,e.filteredFaqs=e.faqs,e.ForDropwDow=e.faqs),e.loader=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","Error: Server Error");case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()},handelUserField:function(){var e=this;this.searchUser=this.faqs.filter((function(t){return t.user_name.toLowerCase().includes(e.publisherName.toLowerCase())}))},fetchUser:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,new Promise((function(t,a){e.$apiService.getCall("auth/user/".concat(e.user_id)).then((function(e){return t(e)})).catch((function(e){return a(e)}))}));case 4:a=t.sent,a.error?e.$toaster.makeToast("warning",a.message):(e.loader=!1,e.getUserName=a.apidata.data.user_name),t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","An error occurred while fetching the user");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},gethandleImageSelection:function(){},handleImageSelection:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.imgLoader=!0,t.prev=1,a=new FormData,e.images&&a.append("image",e.images),e.getImages&&a.append("image",e.getImages),t.next=7,new Promise((function(t,r){e.$apiService.postCall("util/image/",a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 7:r=t.sent,r.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",r.message)):(e.imgLoader=!1,e.uplodedImages=r.apidata.url,e.$toaster.makeToast("success","Image upload successfully")),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),e.imgLoader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},truncateDescription:function(e){var t=e.split(" ");return t.length>13?t.slice(0,13).join(" ")+"...":e},clickAccept:function(e){var t=this;return Object(c["a"])(Object(i["a"])().mark((function a(){var r,s;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r={status:"Approved"},a.next=4,t.$apiService.postCall("publisher/update-publisher-status/".concat(e),r);case 4:s=a.sent,s.error?(t.loader=!1,t.$toaster.makeToast("warning",s.message)):(t.loader=!1,t.$toaster.makeToast("success","Status Approved successfully"),t.fetchPublisher()),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),t.loader=!1,t.$toaster.makeToast("warning","Error: Server Error");case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()},clickReject:function(e){var t=this;return Object(c["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$bvModal.show("modal-cancelReason"),t.rejectedId=e;case 2:case"end":return a.stop()}}),a)})))()},addPublisher:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.first_name&&e.last_name&&e.tiktok_username&&e.contact_number&&e.agency_center_code&&e.images){t.next=4;break}return e.$toaster.makeToast("warning","Please fill in all the required fields"),setTimeout((function(){return e.errorMessage=""}),2e3),t.abrupt("return");case 4:return e.loader=!0,t.prev=5,a={user_id:"admin"===e.role?e.selectedUserId:localStorage.getItem("user_id"),first_name:e.first_name,last_name:e.last_name,tiktok_username:e.tiktok_username,contact_number:e.contact_number,agency_center_code:e.agency_center_code,icon:e.uplodedImages},"admin"===e.role&&(a.status="Approved",a.reason="Added By Admin"),t.next=10,e.$apiService.postCall("publisher/create/",a);case 10:r=t.sent,e.tiktokres=r,console.log("res",r),r.error?1===e.tiktokres.response.data.message.keyPattern.keyPattern.tiktok_username?e.$toaster.makeToast("warning","TikTok username already exists"):e.$toaster.makeToast("warning",r.response.data.message.keyPattern.keyPattern.tiktok_username):(e.fetchPublisher(),e.isEdit=!1,e.showAddModal=!1,e.loader=!1,e.first_name="",e.last_name="",e.tiktok_username="",e.uplodedImages="",e.contact_number="",e.agency_center_code="",e.icon=null,e.$toaster.makeToast("success","Data added successfully")),t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](5),console.log("eroot",t.t0),e.loader=!1,1===e.tiktokres.error.response.data.message.keyPattern.tiktok_username?e.$toaster.makeToast("warning","TikTok username already exists"):(e.$toaster.makeToast("warning","Error: Server Error"),console.error(t.t0));case 21:case"end":return t.stop()}}),t,null,[[5,16]])})))()},editPublisher:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a={first_name:e.getFirstName,last_name:e.getLastName,tiktok_username:e.getTikTok,contact_number:e.getphoneNumber,agency_center_code:e.getcenterCode,icon:e.uplodedImages},t.next=5,e.$apiService.postCall("publisher/update/".concat(e.updateId),a);case 5:r=t.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.fetchPublisher(),e.closeModalEdit(),e.loader=!1,e.$toaster.makeToast("success","Data update successfully")),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},clickEdit:function(e){this.updateId=e._id,this.getcenterCode=e.agency_center_code,this.getphoneNumber=e.contact_number,this.getpublisherName=e.user_name,this.getFirstName=e.first_name,this.getLastName=e.last_name,this.images=e.icon,this.uplodedImages=e.icon,this.getTikTok=e.tiktok_username,this.showAddModalEdit=!0},clickRejectButton:function(){this.cancelReasonText&&this.cancelReasonText.length>=10?this.deletePublisher():this.$toaster.makeToast("warning","Please enter a cancel reason with at least 10 characters")},deletePublisher:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a={status:"Rejected",reason:e.cancelReasonText},t.next=5,e.$apiService.postCall("publisher/update-publisher-status/".concat(e.rejectedId),a);case 5:r=t.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.loader=!1,e.$toaster.makeToast("success","Status Rejected successfully"),e.$bvModal.hide("modal-cancelReason"),e.fetchPublisher()),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$bvModal.hide("modal-cancelReason"),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},clickDelete:function(e){var t=this;return Object(c["a"])(Object(i["a"])().mark((function a(){var r,s;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 3:if(r=a.sent,!r.value){a.next=11;break}return a.next=7,t.$apiService.postCall("publisher/delete/".concat(e._id));case 7:s=a.sent,s.isError?t.$toaster.makeToast("warning","Failed to delete publisher "):(t.loader=!1,t.fetchPublisher(),t.$toaster.makeToast("success","Your Publisher has been deleted"),t.loader=!1),a.next=12;break;case 11:t.loader=!1;case 12:a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),t.$toaster.makeToast("warning","Error: Server Error"),t.loader=!1,console.error("Error deleting FAQ:",a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},closeModal:function(){this.isEdit=!1,this.phoneNumber="",this.centerCode="",this.publisherName="",this.uplodedImages=null,this.showAddModal=!1},closeModalEdit:function(){this.showAddModalEdit=!1},addCssRule:function(){var e=document.createElement("style");e.type="text/css";var t="#modal-add .modal-content,#modal-add___BV_modal_content_ .modal-content {  padding: 1em !important;}";e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}}},m=p,b=(a("f0ed"),a("04d8"),a("2877")),h=Object(b["a"])(m,s,n,!1,null,"6a69aa48",null);t["default"]=h.exports},"99af":function(e,t,a){"use strict";var r=a("23e7"),s=a("d039"),n=a("e8b5"),o=a("861d"),i=a("7b0b"),c=a("07fa"),l=a("3511"),d=a("8418"),u=a("65f0"),p=a("1dde"),m=a("b622"),b=a("2d00"),h=m("isConcatSpreadable"),f=b>=51||!s((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=function(e){if(!o(e))return!1;var t=e[h];return void 0!==t?!!t:n(e)},v=!f||!p("concat");r({target:"Array",proto:!0,arity:1,forced:v},{concat:function(e){var t,a,r,s,n,o=i(this),p=u(o,0),m=0;for(t=-1,r=arguments.length;t<r;t++)if(n=-1===t?o:arguments[t],g(n))for(s=c(n),l(m+s),a=0;a<s;a++,m++)a in n&&d(p,m,n[a]);else l(m+1),d(p,m++,n);return p.length=m,p}})},a15b:function(e,t,a){"use strict";var r=a("23e7"),s=a("e330"),n=a("44ad"),o=a("fc6a"),i=a("a640"),c=s([].join),l=n!==Object,d=l||!i("join",",");r({target:"Array",proto:!0,forced:d},{join:function(e){return c(o(this),void 0===e?",":e)}})},c8d2:function(e,t,a){"use strict";var r=a("5e77").PROPER,s=a("d039"),n=a("5899"),o="​᠎";e.exports=function(e){return s((function(){return!!n[e]()||o[e]()!==o||r&&n[e].name!==e}))}}}]);