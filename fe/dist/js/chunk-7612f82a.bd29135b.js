(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7612f82a"],{"003b":function(t,e,a){"use strict";a.r(e);var s=a("2909"),i=(a("d81d"),a("4de4"),a("d3b7"),a("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticClass:"font-weight-bold fa-2x text-light"},[t._v("Members")]),e("hr",{staticClass:"mt-1"}),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:t.showAddModal,callback:function(e){t.showAddModal=e},expression:"showAddModal"}},[e("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(" Add Members ")]),e("b-row",{staticClass:"px-3"},[e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Enter name","label-for":"input-title"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter name",type:"text",id:"input-name"},on:{change:t.handelUserField},model:{value:t.publisherName,callback:function(e){t.publisherName=e},expression:"publisherName"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Phone number",type:"number",id:"input-phoneNumber"},on:{keydown:t.checkLength},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"TikTok Name","label-for":"input-title"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"TikTok Name",type:"number",id:"input-agency"},on:{keydown:t.checkLengthCode},model:{value:t.centerCode,callback:function(e){t.centerCode=e},expression:"centerCode"}})],1)],1),e("b-col",[e("div",{staticClass:"d-flex justify-content-end"},[t.imgLoader?t._e():e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.closeModal()}}},[t._v("Close")]),t.imgLoader?t._e():e("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(e){return t.addPublisher()}}},[t._v("Add")]),t.imgLoader?e("div",{staticClass:"spinner spinner-primary imgloader"}):t._e()],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(t._s((t.isEdit,"In Progress")))]),e("b-row",{staticClass:"px-3"},[e("b-col",[e("div",{staticClass:"d-flex justify-content-end"},[e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.closeModal12()}}},[t._v("Close")])],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-lg",size:"lg",title:"Documents"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Aadhar Card")])])],1),t.aadharFront?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharFront,title:"aadharFront",target:"_blank"}},[e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharFront}})])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharBack,title:"aadharBack",target:"_blank"}},[t.aadharBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v(" Driving Licence ")])])],1),t.divinglicense?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicense,title:"divinglicense",target:"_blank"}},[t.divinglicense?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicense}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicenseBack,title:"divinglicenseBack",target:"_blank"}},[t.divinglicenseBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicenseBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Passport")])])],1),t.passport?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passport,title:"passport",target:"_blank"}},[t.passport?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passport}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passportBack,title:"passportBack",target:"_blank"}},[t.passportBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passportBack}}):t._e()])])],1):t._e()],1),e("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[e("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(t.allUsers),multiple:!1,limit:1},on:{input:t.handleChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("div",{staticClass:"for-gap d-none"},[e("button",{staticClass:"btn btn-primary",on:{click:t.clearFilters}},[t._v("Clear Filter")])])],1),e("div",{staticClass:"pb-2"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Filters ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[e("li",[e("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:t.toggleFlexDiv}},[e("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),e("li",[e("a",{attrs:{"data-action":" pe-auto"},on:{click:t.clearFilters}},[e("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),e("div",{staticClass:"card-content collapse show",style:{display:t.flexDivDisplay}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"users-list-filter"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-search"}},[t._v("Search")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},function(e){t.filteredRows=t.getfilterdata}]}})])]),e("div",{staticClass:"col-12 col-sm-6 col-lg-3 paddingzero"},[e("label",{attrs:{for:"users-list-verified"}},[t._v("Action")]),e("fieldset",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterStatus,expression:"filterStatus"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-verified"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterStatus=e.target.multiple?a:a[0]},t.onStatusChange]}},[e("option",{attrs:{value:""}},[t._v("All")]),e("option",{attrs:{value:"Approved",selected:""}},[t._v("Block")]),e("option",{attrs:{value:"Rejected"}},[t._v("UnBlock")])])])])])])])])])])]),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Members ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"!=t.role?e("button",{staticClass:"btn btn-primary mb-3",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(e){t.showAddModal=!0}}},[t._v(" Add New ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:t.getfilterdata},scopedSlots:t._u([{key:"table-row",fn:function(a){return["img"===a.column.field?e("span",[e("img",{staticClass:"circular-image",attrs:{src:a.row.image?a.row.image:t.logo,alt:"Image"}})]):"name"===a.column.field?e("span",[e("div",{staticClass:"d-flex"},[t._v(" "+t._s(a.row.name)+"  "+t._s(a.row.surname)+" ")])]):"tiktok_username"===a.column.field?e("span",[e("div",{staticClass:"d-flex"},[t._v(" "+t._s(a.row.tiktok_username)+" ")])]):"contact_number"===a.column.field?e("span",[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"d-flex"},[t._v(" "+t._s(a.row.contact_number)+" ")])])]):"button"===a.column.field?e("span",[e("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"12px"}},[e("div",[e("button",{staticClass:"btn btn-primary"},[t._v("Block")])]),e("div",[e("span",{staticClass:"btn p-0",on:{click:function(e){return t.clickEdit(a.row)}}},[e("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),e("span",{staticClass:"btn pl-3",on:{click:function(e){return t.clickDelete(a.row)}}},[e("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])]):t._e()]}}])})],1)])],1)}),r=[],o=a("ade3"),l=(a("caad"),a("2532"),a("c1df"),a("b654")),n=a.n(l),c=a("8e5f"),d=a.n(c),u={metaInfo:{title:"Users"},components:{multiselect:d.a},computed:{getfilterdata:function(){if(!this.searchTerm)return this.rows;var t=this.searchTerm.toLowerCase();return this.rows.filter((function(e){return e.name.toLowerCase().includes(t)||e.surname.toLowerCase().includes(t)||e.contact_number.toLowerCase().includes(t)||e.otp.toLowerCase().includes(t)||e.role.toLowerCase().includes(t)||e.tiktok_username.toLowerCase().includes(t)}))}},data:function(){var t;return t={filterStatus:"Approved",searchTerm:"",rows:[],filteredRows:[],showAddModal:!1,pageReloaded:!1,modalVisible:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columns:[{label:"Contact Number",field:"contact_number",filterOptions:{enabled:!0,placeholder:"Search Number"}},{label:"TikTok Name",field:"tiktok_username",filterOptions:{enabled:!0,placeholder:"Search TikTok"}},{label:"Name",field:"name",filterOptions:{enabled:!0,placeholder:"Search name"}},{label:"Action",field:"button",filterOptions:{enabled:!1}}]},Object(o["a"])(t,"rows",[]),Object(o["a"])(t,"originalRows",[]),Object(o["a"])(t,"form",{templateId:"",name:"",content:""}),Object(o["a"])(t,"generateIDloader",!1),Object(o["a"])(t,"submitloader",!1),Object(o["a"])(t,"isEdit",!1),Object(o["a"])(t,"loader",!1),Object(o["a"])(t,"isHide",!1),Object(o["a"])(t,"flexDivDisplay","flex!important"),Object(o["a"])(t,"matchUser",""),Object(o["a"])(t,"name",""),Object(o["a"])(t,"contact_number",""),Object(o["a"])(t,"email",""),t},created:function(){this.getAllUsers(),this.getAllTransaction(),this.role=parsedUser.data.role,this.originalRows=Object(s["a"])(this.rows),this.reloadPageOnce()},methods:{closeModal:function(){this.isEdit=!1,this.phoneNumber="",this.centerCode="",this.publisherName="",this.uplodedImages=null,this.showAddModal=!1},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.getAllUsers(),this.selected="Select User"},openModal12:function(){this.modalVisible=!0},closeModal12:function(){this.modalVisible=!1},openModal:function(t){this.aadharFront=t.aadhar_card,this.aadharBack=t.back_aadhar_card,this.divinglicense=t.driving_lincense,this.divinglicenseBack=t.back_driving_lincense,this.passportBack=t.back_passport,this.passport=t.passport,this.isModalOpen=!0},vueDocuments:function(t){this.popUpWindow=!0},handleChange:function(t){var e=this.rows.filter((function(e){return e.name===t}));this.rows=e,console.log("Matched Rows:",e)},clickViewUsers:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},clickUnBlock:function(t){var e=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),a).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User  successfully unblocked"),e.getAllUsers(),e.loader=!1)})).catch((function(t){e.loader=!1,e.$toaster.makeToast("warning","Have Server error")}))},getfilterdata:function(){if(!this.searchTerm)return this.rows;var t=this.searchTerm.toLowerCase();return this.rows.filter((function(e){return e.name.toLowerCase().includes(t)||e.surname.toLowerCase().includes(t)||e.contact_number.toLowerCase().includes(t)||e.otp.toLowerCase().includes(t)||e.role.toLowerCase().includes(t)||e.tiktok_username.toLowerCase().includes(t)}))},getAllUsers:function(){var t=this;this.loader=!0,this.$apiService.getCall("user/get-all-members").then((function(e){if(e&&!1===e.isError&&e.apidata&&e.apidata.data){var a=e.apidata.data;t.rows=a,t.filteredRows=a}else t.$toaster.makeToast("warning","Failed to fetch user data");t.loader=!1})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching user data"),t.loader=!1}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.form.templateId=t,this.generateIDloader=!1},submit:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",n.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(e){e.apidata.status?(t.$toaster.makeToast("warning",n.a.ERROR_TEMPLATE_MESSAGE),t.submitloader=!1):(t.$toaster.makeToast("success",n.a.ADD_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform())})).catch((function(e){t.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",n.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(e){t.$toaster.makeToast("success",n.a.EDIT_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform()})).catch((function(e){t.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)}))},editTemplate:function(t){var e=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:t}).then((function(t){e.form=t.apidata,e.$bvModal.show("modal-lg")})).catch((function(t){e.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){e.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};e.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),s).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User successfully blocked"),e.getAllUsers(),e.loader=!1)}))}})).catch((function(t){e.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}},m=u,p=(a("8498"),a("e255"),a("2877")),h=Object(p["a"])(m,i,r,!1,null,null,null);e["default"]=h.exports},5112:function(t,e,a){},e255:function(t,e,a){"use strict";a("5112")}}]);