(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fa0012d"],{"003b":function(e,t,a){"use strict";a.r(t);var s=a("2909"),i=(a("d81d"),a("4de4"),a("d3b7"),a("b0c0"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModal,callback:function(t){e.showAddModal=t},expression:"showAddModal"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Add Members ")]),t("b-row",{staticClass:"px-3"},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter name",type:"text",id:"input-name"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter surname","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter surname",type:"text",id:"input-name"},model:{value:e.userSurName,callback:function(t){e.userSurName=t},expression:"userSurName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok Name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter TikTok username",type:"text",id:"input-name"},model:{value:e.tikTokUserName,callback:function(t){e.tikTokUserName=t},expression:"tikTokUserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Phone number",type:"number",id:"input-phoneNumber"},on:{keydown:e.checkLength},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModal()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.formSubmitAddMember()}}},[e._v("Add")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{attrs:{id:"modal-edit",size:"md","hide-footer":"","hide-header":"",centered:""},model:{value:e.showEditModal,callback:function(t){e.showEditModal=t},expression:"showEditModal"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Edit Members ")]),t("b-row",{staticClass:"px-3"},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter name",type:"text",id:"input-name"},model:{value:e.getuserName,callback:function(t){e.getuserName=t},expression:"getuserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter surname","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter surname",type:"text",id:"input-name"},model:{value:e.getuserSurName,callback:function(t){e.getuserSurName=t},expression:"getuserSurName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok Name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter TikTok username",type:"text",id:"input-name"},model:{value:e.gettikTokUserName,callback:function(t){e.gettikTokUserName=t},expression:"gettikTokUserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Phone number",type:"number",id:"input-phoneNumber"},on:{keydown:e.getcheckLength},model:{value:e.getphoneNumber,callback:function(t){e.getphoneNumber=t},expression:"getphoneNumber"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeEditModal()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.formSubmitEditMember()}}},[e._v("Edit")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{attrs:{id:"modal-add-rates",size:"md","hide-footer":"","hide-header":"",centered:""}},[t("b-row",{staticClass:"p-3"},[t("b-col",{attrs:{md:"12"}},[t("i",{staticClass:"fa mb-3",attrs:{"aria-hidden":"true"}},[e._v(" Default Commission Rates ")])]),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{staticClass:"text-12",attrs:{label:"0-2.000.000 diamonds %"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:""},on:{keydown:e.validateInput},model:{value:e.firstValue,callback:function(t){e.firstValue=t},expression:"firstValue"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{staticClass:"text-12",attrs:{label:"2.000.000+ diamonds %"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:""},on:{keydown:e.validateInputSec},model:{value:e.secondValue,callback:function(t){e.secondValue=t},expression:"secondValue"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.updateloader?t("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.clickCancle()}}},[e._v("Cancel")]),t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.clickAddButton()}}},[e._v("Add")])],1)])],1)],1),t("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[t("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[t("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(e.allUsers),multiple:!1,limit:1},on:{input:e.handleChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),t("div",{staticClass:"for-gap d-none"},[t("button",{staticClass:"btn btn-primary",on:{click:e.clearFilters}},[e._v(" Clear Filter ")])])],1),t("div",{staticClass:"pb-2"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Filters ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("li",[t("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[t("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),t("li",[t("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[t("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),t("div",{staticClass:"card-content collapse show",style:{display:e.flexDivDisplay}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"users-list-filter"},[t("form",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[t("label",{attrs:{for:"users-list-search"}},[e._v("Search")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},function(t){e.filteredRows=e.getfilterdata}]}})])]),t("div",{staticClass:"col-12 col-sm-6 col-lg-3 paddingzero"},[t("label",{attrs:{for:"users-list-verified"}},[e._v("Action")]),t("fieldset",{staticClass:"form-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterStatus,expression:"filterStatus"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-verified"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filterStatus=t.target.multiple?a:a[0]}}},[t("option",{attrs:{value:""}},[e._v("All")]),t("option",{attrs:{value:"Approved",selected:""}},[e._v("Block")]),t("option",{attrs:{value:"Rejected"}},[e._v("UnBlock")])])])])])])])])])])]),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Members ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"!=e.role?t("b-button",{staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"rgba(0, 0, 0, 0.66)",border:"1px solid gray"},attrs:{variant:"primary ripple btn-icon m-1"},on:{click:function(t){e.showAddModal=!0}}},[t("span",{staticClass:"ul-btn__icon d-none"},[t("i",{staticClass:"i-Gear-2"})]),t("span",{staticClass:"ul-btn__text ml-1"},[e._v("Add New")])]):e._e()],1)])]),t("div",{staticClass:"card-body"},[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:e.getfilterdata},scopedSlots:e._u([{key:"table-row",fn:function(a){return["img"===a.column.field?t("span",[t("img",{staticClass:"circular-image",attrs:{src:a.row.image?a.row.image:e.logo,alt:"Image"}})]):"name"===a.column.field?t("span",[t("div",{staticClass:"d-flex"},[e._v(" "+e._s(a.row.name)+"  "+e._s(a.row.surname)+" ")])]):"tiktok_username"===a.column.field?t("span",[t("div",{staticClass:"d-flex"},[e._v(" "+e._s(a.row.tiktok_username)+" ")])]):"contact_number"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row"},[e._v(" "+e._s(a.row.contact_number)+" ")])]):"show_commission"===a.column.field?t("span",[a.row.first_commission?t("div",{staticClass:"d-flex"},[e._v(" "+e._s(a.row.first_commission)+" | "+e._s(a.row.second_commission)+" ")]):e._e()]):"button"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"12px"}},[t("div",[t("b-button",{attrs:{size:"sm",variant:"outline-primary ripple m-1 btn-small"},on:{click:function(t){return e.clickAddRates(a.row)}}},[e._v("Update Rate")])],1),t("div",[t("span",{staticClass:"btn p-0",on:{click:function(t){return e.clickEdit(a.row)}}},[t("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"btn pl-3",on:{click:function(t){return e.formSubmitDeleteMember(a.row)}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])]):e._e()]}}])})],1)])],1)}),r=[],o=a("ade3"),l=(a("caad"),a("2532"),a("25f0"),a("ac1f"),a("00b4"),a("c1df"),a("b654")),n=a.n(l),c=a("8e5f"),d=a.n(c),u={metaInfo:{title:"Users"},components:{multiselect:d.a},computed:{getfilterdata:function(){if(!this.searchTerm)return this.rows;var e=this.searchTerm.toLowerCase();return this.rows.filter((function(t){return t.name.toLowerCase().includes(e)||t.surname.toLowerCase().includes(e)||t.contact_number.toLowerCase().includes(e)||t.otp.toLowerCase().includes(e)||t.role.toLowerCase().includes(e)||t.tiktok_username.toLowerCase().includes(e)}))}},data:function(){var e;return e={filterStatus:"Approved",searchTerm:"",rows:[],filteredRows:[],showAddModal:!1,pageReloaded:!1,showEditModal:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columns:[{label:"Contact Number",field:"contact_number",filterOptions:{enabled:!0,placeholder:"Search Number"}},{label:"TikTok Name",field:"tiktok_username",filterOptions:{enabled:!0,placeholder:"Search TikTok"}},{label:"Name",field:"name",filterOptions:{enabled:!0,placeholder:"Search name"}},{label:"Commission rate's",field:"show_commission",filterOptions:{enabled:!1}},{label:"Action",field:"button",filterOptions:{enabled:!1}}]},Object(o["a"])(e,"rows",[]),Object(o["a"])(e,"originalRows",[]),Object(o["a"])(e,"form",{templateId:"",name:"",content:""}),Object(o["a"])(e,"phoneNumber",""),Object(o["a"])(e,"userName",""),Object(o["a"])(e,"userSurName",""),Object(o["a"])(e,"tikTokUserName",""),Object(o["a"])(e,"updateId",null),Object(o["a"])(e,"getphoneNumber",null),Object(o["a"])(e,"getuserName",null),Object(o["a"])(e,"getuserSurName",null),Object(o["a"])(e,"gettikTokUserName",null),Object(o["a"])(e,"imgLoader",!1),Object(o["a"])(e,"generateIDloader",!1),Object(o["a"])(e,"submitloader",!1),Object(o["a"])(e,"isEdit",!1),Object(o["a"])(e,"loader",!1),Object(o["a"])(e,"isHide",!1),Object(o["a"])(e,"flexDivDisplay","flex!important"),Object(o["a"])(e,"matchUser",""),Object(o["a"])(e,"name",""),Object(o["a"])(e,"contact_number",""),Object(o["a"])(e,"email",""),Object(o["a"])(e,"updateloader",!1),Object(o["a"])(e,"secondValue",""),Object(o["a"])(e,"firstValue",""),Object(o["a"])(e,"getUid",""),Object(o["a"])(e,"getfirstValue",""),Object(o["a"])(e,"getsecondValue",""),e},created:function(){this.getAllUsers(),this.getAllTransaction(),this.role=parsedUser.data.role,this.originalRows=Object(s["a"])(this.rows)},methods:{closeModal:function(){this.isEdit=!1,this.phoneNumber="",this.userName="",this.userSurName="",this.tikTokUserName="",this.showAddModal=!1},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},clickEdit:function(e){this.updateId=e._id,this.getphoneNumber=e.contact_number,this.getuserName=e.name,this.getuserSurName=e.surname,this.gettikTokUserName=e.tiktok_username,this.showEditModal=!0},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},getcheckLength:function(e){this.getphoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},clickAddRates:function(e){this.getUid=e._id,this.firstValue=e.first_commission,this.secondValue=e.second_commission,this.$bvModal.show("modal-add-rates")},clickCancle:function(){this.$bvModal.hide("modal-add-rates")},clickAddButton:function(){var e=this;if(this.firstValue&&this.secondValue){this.updateloader=!0;var t={first_commission:this.firstValue,second_commission:this.secondValue,_id:this.getUid};this.$apiService.postCall("auth/member-update-commission/",t).then((function(t){t.error?(e.updateloader=!1,e.$toaster.makeToast("warning","Commission add failed")):(e.$toaster.makeToast("success","Commission add successfully"),e.$bvModal.hide("modal-add-rates"),e.firstValue="",e.secondValue="",e.getAllUsers(),e.updateloader=!1)})).catch((function(t){e.$toaster.makeToast("warning",n.a.ERROR_MESSAGE),e.updateloader=!1}))}else this.$toaster.makeToast("warning","All filed is required")},validateInputSec:function(e){var t=e.key,a=this.secondValue;if("Backspace"!==t&&"ArrowLeft"!==t&&"ArrowRight"!==t&&"Tab"!==t&&"Delete"!==t)if(/^\d$/.test(t)){var s=parseInt(a+t,10);s>100&&e.preventDefault()}else e.preventDefault()},validateInput:function(e){var t=e.key,a=this.firstValue;if("Backspace"!==t&&"ArrowLeft"!==t&&"ArrowRight"!==t&&"Tab"!==t&&"Delete"!==t)if(/^\d$/.test(t)){var s=parseInt(a+t,10);s>this.secondValue&&e.preventDefault()}else e.preventDefault()},formSubmitEditMember:function(){var e=this;this.imgLoader=!0;var t={contact_number:this.getphoneNumber,role:"user",name:this.getuserName,surname:this.getuserSurName,tiktok_username:this.gettikTokUserName,_id:this.updateId};this.$apiService.postCall("auth/member-update",t).then((function(t){t.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",t.message)):(e.imgLoader=!1,e.$toaster.makeToast("success","User Update successfully"),e.showEditModal=!1,e.getAllUsers())})).catch((function(e){this.$toaster.makeToast("warning","Error: server error"),this.imgLoader=!1,this.$store.commit("setError",{message:e})}))},formSubmitDeleteMember:function(e){var t=this;this.loader=!0,this.$apiService.getCall("auth/member-delete/".concat(e._id)).then((function(e){e.error?(t.loader=!1,t.$toaster.makeToast("warning",e.message)):(t.loader=!1,t.$toaster.makeToast("success","User delete successfully"),t.showEditModal=!1,t.getAllUsers())})).catch((function(e){this.$toaster.makeToast("warning","Error: server error"),this.loader=!1,this.$store.commit("setError",{message:e})}))},formSubmitAddMember:function(){var e=this;this.imgLoader=!0;var t={contact_number:this.phoneNumber,role:"user",name:this.userName,surname:this.userSurName,tiktok_username:this.tikTokUserName};this.$apiService.postCall("auth/tiktok-login",t).then((function(t){t.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",t.message)):(e.imgLoader=!1,e.$toaster.makeToast("success","User create successfully"),e.phoneNumber="",e.userName="",e.userSurName="",e.tikTokUserName="",e.showAddModal=!1,e.getAllUsers())})).catch((function(e){this.$toaster.makeToast("warning","Error: server error"),this.imgLoader=!1,this.$store.commit("setError",{message:e})}))},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.getAllUsers(),this.selected="Select User"},openModal12:function(){this.showEditModal=!0},closeEditModal:function(){this.showEditModal=!1},openModal:function(e){this.aadharFront=e.aadhar_card,this.aadharBack=e.back_aadhar_card,this.divinglicense=e.driving_lincense,this.divinglicenseBack=e.back_driving_lincense,this.passportBack=e.back_passport,this.passport=e.passport,this.isModalOpen=!0},vueDocuments:function(e){this.popUpWindow=!0},handleChange:function(e){var t=this.rows.filter((function(t){return t.name===e}));this.rows=t},clickViewUsers:function(e){this.$router.push("/app/myDesk/usersProfile?id="+e)},clickUnBlock:function(e){var t=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(e),a).then((function(e){e.apidata.isError||(t.$toaster.makeToast("success","User  successfully unblocked"),t.getAllUsers(),t.loader=!1)})).catch((function(e){t.loader=!1,t.$toaster.makeToast("warning","Have Server error")}))},getfilterdata:function(){if(!this.searchTerm)return this.rows;var e=this.searchTerm.toLowerCase();return this.rows.filter((function(t){return t.name.toLowerCase().includes(e)||t.surname.toLowerCase().includes(e)||t.contact_number.toLowerCase().includes(e)||t.otp.toLowerCase().includes(e)||t.role.toLowerCase().includes(e)||t.tiktok_username.toLowerCase().includes(e)}))},getAllUsers:function(){var e=this;this.loader=!0,this.$apiService.getCall("user/get-all-members").then((function(t){if(t&&!1===t.isError&&t.apidata&&t.apidata.data){var a=t.apidata.data;e.rows=a,e.filteredRows=a}else e.$toaster.makeToast("warning","Failed to fetch user data");e.loader=!1})).catch((function(t){console.error("Error fetching user data:",t),e.$toaster.makeToast("error","Error fetching user data"),e.loader=!1}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)e+=t.charAt(Math.floor(Math.random()*t.length));this.form.templateId=e,this.generateIDloader=!1},submit:function(){var e=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",n.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(t){t.apidata.status?(e.$toaster.makeToast("warning",n.a.ERROR_TEMPLATE_MESSAGE),e.submitloader=!1):(e.$toaster.makeToast("success",n.a.ADD_TEMPLATE_MESSAGE),e.getTemplateData(),e.clearform())})).catch((function(t){e.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var e=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",n.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(t){e.$toaster.makeToast("success",n.a.EDIT_TEMPLATE_MESSAGE),e.getTemplateData(),e.clearform()})).catch((function(t){e.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)}))},editTemplate:function(e){var t=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:e}).then((function(e){t.form=e.apidata,t.$bvModal.show("modal-lg")})).catch((function(e){t.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){t.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};t.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(e),s).then((function(e){e.apidata.isError||(t.$toaster.makeToast("success","User successfully blocked"),t.getAllUsers(),t.loader=!1)}))}})).catch((function(e){t.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}},m=u,p=(a("8498"),a("1e2a"),a("2877")),f=Object(p["a"])(m,i,r,!1,null,null,null);t["default"]=f.exports},"1e2a":function(e,t,a){"use strict";a("b3f3")},b3f3:function(e,t,a){},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}}}]);