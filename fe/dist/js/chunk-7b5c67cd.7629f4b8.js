(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b5c67cd"],{"003b":function(e,t,a){"use strict";a.r(t);var s=a("2909"),i=(a("b0c0"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModal,callback:function(t){e.showAddModal=t},expression:"showAddModal"}},[t("label",{staticClass:"pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Add Members ")]),t("b-row",{},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"First Name","label-for":"input-name"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"First Name",type:"text",id:"input-name",maxlength:"20"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Last Name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Last Name",type:"text",id:"input-name",maxlength:"20"},model:{value:e.userSurName,callback:function(t){e.userSurName=t},expression:"userSurName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok Name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"TikTok Username",type:"text",id:"input-name",maxlength:"20"},model:{value:e.tikTokUserName,callback:function(t){e.tikTokUserName=t},expression:"tikTokUserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("div",{staticClass:"phone-input"},[t("b-form-group",{attrs:{label:"Contact Number","label-for":"input-contact-number"}},[t("b-form-input",{staticClass:"form-control border-0",attrs:{id:"phone",type:"tel",name:"phone",placeholder:"Enter Mobile Number",maxlength:"11"}})],1)],1)]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModal()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.formSubmitAddMember()}}},[e._v("Add")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{attrs:{id:"modal-edit",size:"md","hide-footer":"","hide-header":"",centered:""},model:{value:e.showEditModal,callback:function(t){e.showEditModal=t},expression:"showEditModal"}},[t("label",{staticClass:"pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Update Members ")]),t("b-row",{},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter name",type:"text",id:"input-name"},model:{value:e.getuserName,callback:function(t){e.getuserName=t},expression:"getuserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter surname","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter surname",type:"text",id:"input-name"},model:{value:e.getuserSurName,callback:function(t){e.getuserSurName=t},expression:"getuserSurName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"TikTok Name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter TikTok username",type:"text",id:"input-name"},model:{value:e.gettikTokUserName,callback:function(t){e.gettikTokUserName=t},expression:"gettikTokUserName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("div",{staticClass:"phone-input"},[t("b-form-group",{attrs:{label:"Contact Number","label-for":"input-contact-number"}},[t("b-form-input",{staticClass:"form-control border-0",attrs:{id:"phone",type:"tel",name:"phone",placeholder:"Enter Mobile Number",maxlength:"15"},model:{value:e.getphoneNumber,callback:function(t){e.getphoneNumber=t},expression:"getphoneNumber"}})],1)],1)]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end px-0"},[e.imgLoader?e._e():t("b-button",{staticClass:"mr-2",on:{click:function(t){return e.closeEditModal()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{attrs:{variant:"primary ripple"},on:{click:function(t){return e.formSubmitEditMember()}}},[e._v("Update")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{attrs:{id:"modal-add-rates",size:"md","hide-footer":"","hide-header":"",centered:""}},[t("b-row",{},[t("b-col",{attrs:{md:"12"}},[t("i",{staticClass:"fa mb-3",attrs:{"aria-hidden":"true"}},[e._v(" Default Commission Rates ")])]),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{staticClass:"text-12",attrs:{label:"0-3.000.000 diamonds %"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:""},on:{keydown:e.validateInput},model:{value:e.firstValue,callback:function(t){e.firstValue=t},expression:"firstValue"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{staticClass:"text-12",attrs:{label:"3.000.000 - 5.000.000 diamonds %"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:""},on:{keydown:e.validateInputSec},model:{value:e.secondValue,callback:function(t){e.secondValue=t},expression:"secondValue"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{staticClass:"text-12",attrs:{label:"5.000.000+ diamonds %"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:""},on:{keydown:e.validateInputThird},model:{value:e.thirdValue,callback:function(t){e.thirdValue=t},expression:"thirdValue"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.updateloader?t("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),t("b-button",{staticClass:"mr-2",on:{click:function(t){return e.clickCancle()}}},[e._v("Cancel")]),t("b-button",{attrs:{variant:"primary ripple"},on:{click:function(t){return e.clickAddButton()}}},[e._v("Update")])],1)])],1)],1),t("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[t("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[t("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(e.allUsers),multiple:!1,limit:1},on:{input:e.handleChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),t("div",{staticClass:"for-gap d-none"},[t("button",{staticClass:"btn btn-primary",on:{click:e.clearFilters}},[e._v(" Clear Filter ")])])],1),t("div",{staticClass:"pb-2"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Filters ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("li",[t("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[t("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),t("li",[t("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[t("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),t("b-row",{staticClass:"px-3 pb-3 pt-2 mt-1",style:{display:e.flexDivDisplay}},[t("b-col",{attrs:{md:"3"}},[t("label",{attrs:{for:"users-list-search"}},[e._v("Search")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})])]),t("b-col",{attrs:{md:"3"}},[t("label",{attrs:{for:"users-list-verified"}},[e._v("Min Earnings")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchAmount,expression:"searchAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount",placeholder:"Enter min earning"},domProps:{value:e.searchAmount},on:{input:function(t){t.target.composing||(e.searchAmount=t.target.value)}}})])]),t("b-col",{attrs:{md:"3"}},[t("label",{attrs:{for:"users-list-verified"}},[e._v("Max Earnings")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchMaxAmount,expression:"searchMaxAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount-max",placeholder:"Enter max earning"},domProps:{value:e.searchMaxAmount},on:{input:function(t){t.target.composing||(e.searchMaxAmount=t.target.value)}}})])])],1)],1)]),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Members ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"!=e.role?t("b-button",{staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"rgba(0, 0, 0, 0.66)",border:"1px solid gray"},attrs:{variant:"primary ripple btn-icon m-1"},on:{click:e.openAddModal}},[t("span",{staticClass:"ul-btn__icon d-none"},[t("i",{staticClass:"i-Gear-2"})]),t("span",{staticClass:"ul-btn__text ml-1"},[e._v("Add New")])]):e._e()],1)])]),t("div",{staticClass:"card-body"},[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:e.filteredRows},scopedSlots:e._u([{key:"table-row",fn:function(a){return["img"===a.column.field?t("span",[t("img",{staticClass:"circular-image",attrs:{src:a.row.image?a.row.image:e.logo,alt:"Image"}})]):"name"===a.column.field?t("span",[t("div",{staticClass:"d-flex"},[e._v(" "+e._s(a.row.name)+" "+e._s(a.row.surname)+" ")])]):"contact_number"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row"},[e._v(" "+e._s(a.row.contact_number)+" ")])]):"diamonds"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row"},[e._v(" "+e._s(a.row.diamonds)+" ")])]):"earnings"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row"},[e._v(" "+e._s(a.row.earnings)+" ")])]):"tiktok_username"===a.column.field?t("span",[t("div",{staticClass:"text-primary ul-cursor--pointer",on:{click:function(t){return e.clickUserName(a.row._id)}}},[e._v(" "+e._s(a.row.tiktok_username)+" ")])]):"show_commission"===a.column.field?t("span",[a.row.first_commission?t("div",{staticClass:"d-flex"},[e._v(" 0-3M = %"+e._s(a.row.first_commission)+" "),t("br"),e._v("3M-5M = %"+e._s(a.row.second_commission)+" "),t("br"),e._v("5M+ %"+e._s(a.row.third_commission)+" ")]):e._e()]):"button"===a.column.field?t("span",[t("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"12px"}},[t("div",[t("b-button",{attrs:{size:"sm",variant:"outline-primary ripple m-1 btn-small"},on:{click:function(t){return e.clickAddRates(a.row)}}},[e._v("Update Rate")])],1),t("div",{staticClass:"d-flex flex-column"},[t("span",{staticClass:"btn p-0",on:{click:function(t){return e.clickEdit(a.row)}}},[t("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"btn",on:{click:function(t){return e.formSubmitDeleteMember(a.row)}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])]):e._e()]}}])})],1)])],1)}),r=[],o=a("ade3"),n=(a("4de4"),a("caad"),a("14d9"),a("fb6a"),a("d3b7"),a("ac1f"),a("00b4"),a("25f0"),a("2532"),a("2ca0"),a("498a"),a("c1df"),a("b654")),l=a.n(n),c=a("8e5f"),d=a.n(c),u={metaInfo:{title:"Users"},components:{multiselect:d.a},computed:{filteredRows:function(){var e=this.searchTerm.toLowerCase().trim(),t=this.searchAmount.trim(),a=this.searchMaxAmount.trim();return this.rows.filter((function(s){var i=!e||(s.tiktok_username&&s.tiktok_username.toLowerCase().includes(e)||s.name&&s.surname.toLowerCase().includes(e)||s.contact_number&&String(s.contact_number).toLowerCase().includes(e)||s.earnings&&String(s.earnings).toLowerCase().includes(e)||s.diamonds&&String(s.diamonds).toLowerCase().includes(e)),r=s.earnings,o=(!t||r>=t)&&(!a||r<=a);return i&&o}))}},data:function(){var e;return e={filterStatus:"Approved",searchTerm:"",rows:[],searchMaxAmount:"",searchAmount:"",showAddModal:!1,pageReloaded:!1,showEditModal:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columns:[{label:"TikTok Name",field:"tiktok_username",filterOptions:{enabled:!0,placeholder:"Search TikTok"}},{label:"Name",field:"name",filterOptions:{enabled:!0,placeholder:"Search name"}},{label:"Contact Number",field:"contact_number",filterOptions:{enabled:!0,placeholder:"Search Number"}},{label:"Diamonds This Month",field:"diamonds",filterOptions:{enabled:!0,placeholder:"Diamonds This Month"}},{label:"Earnings This Month ($)",field:"earnings",filterOptions:{enabled:!0,placeholder:"Earnings This Month ($)"}},{label:"Commission rate's",field:"show_commission",filterOptions:{enabled:!1}},{label:"Action",field:"button",filterOptions:{enabled:!1}}]},Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(e,"rows",[]),"originalRows",[]),"form",{templateId:"",name:"",content:""}),"phoneNumber",""),"userName",""),"userSurName",""),"tikTokUserName",""),"updateId",null),"phoneNumberfield",null),"getphoneNumber",null),Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(e,"getuserName",null),"getuserSurName",null),"gettikTokUserName",null),"imgLoader",!1),"generateIDloader",!1),"submitloader",!1),"isEdit",!1),"loader",!1),"isHide",!1),"flexDivDisplay","flex!important"),Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(e,"matchUser",""),"name",""),"contact_number",""),"email",""),"updateloader",!1),"secondValue",""),"firstValue",""),"thirdValue",""),"getUid",""),"getfirstValue",""),Object(o["a"])(e,"getsecondValue","")},created:function(){this.getAllUsers(),this.role=parsedUser.data.role,this.originalRows=Object(s["a"])(this.rows)},methods:{openAddModal:function(){var e=this;this.showAddModal=!0,setTimeout((function(){var t=document.querySelector("#phone");e.phoneNumberfield=window.intlTelInput(t,{initialCountry:"in",utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"})}),200)},closeModal:function(){this.isEdit=!1,this.phoneNumber="",this.userName="",this.userSurName="",this.tikTokUserName="",this.showAddModal=!1},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},clickEdit:function(e){var t=this;this.updateId=e._id,this.getphoneNumber=e.contact_number,this.getuserName=e.name,this.getuserSurName=e.surname,this.gettikTokUserName=e.tiktok_username,this.showEditModal=!0,setTimeout((function(){var e=document.querySelector("#phone");t.phoneNumberfield=window.intlTelInput(e,{initialCountry:"in",utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"})}),200)},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},getcheckLength:function(e){this.getphoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},clickAddRates:function(e){this.getUid=e._id,this.firstValue=e.first_commission,this.secondValue=e.second_commission,this.thirdValue=e.third_commission,this.$bvModal.show("modal-add-rates")},clickCancle:function(){this.$bvModal.hide("modal-add-rates")},clickAddButton:function(){var e=this;if(this.firstValue&&this.secondValue&&this.thirdValue){this.updateloader=!0;var t={first_commission:this.firstValue,second_commission:this.secondValue,third_commission:this.thirdValue,_id:this.getUid};this.$apiService.postCall("auth/member-update-commission/",t).then((function(t){t.error?(e.updateloader=!1,e.$toaster.makeToast("warning","Commission update failed")):(e.$toaster.makeToast("success","Commission update successfully"),e.$bvModal.hide("modal-add-rates"),e.firstValue="",e.secondValue="",e.thirdValue="",e.getAllUsers(),e.updateloader=!1)})).catch((function(t){e.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),e.updateloader=!1}))}else this.$toaster.makeToast("warning","All filed is required")},validateInputSec:function(e){var t=e.key,a=this.secondValue;if("Backspace"!==t&&"ArrowLeft"!==t&&"ArrowRight"!==t&&"Tab"!==t&&"Delete"!==t)if(/^\d$/.test(t)){var s=parseInt(a+t,10);s>100&&e.preventDefault()}else e.preventDefault()},validateInput:function(e){var t=e.key,a=this.firstValue;if("Backspace"!==t&&"ArrowLeft"!==t&&"ArrowRight"!==t&&"Tab"!==t&&"Delete"!==t)if(/^\d$/.test(t)){var s=parseInt(a+t,10);s>this.secondValue&&e.preventDefault()}else e.preventDefault()},validateInputThird:function(e){var t=e.key,a=this.thirdValue;if("Backspace"!==t&&"ArrowLeft"!==t&&"ArrowRight"!==t&&"Tab"!==t&&"Delete"!==t)if(/^\d$/.test(t)){var s=parseInt(a+t,10);s>100&&e.preventDefault()}else e.preventDefault()},formSubmitEditMember:function(){var e=this;if(this.phoneNumberfield.isValidNumber()){this.getphoneNumber=this.phoneNumberfield.getNumber(),this.getphoneNumber.startsWith("+")&&(this.getphoneNumber=this.getphoneNumber.slice(1)),this.imgLoader=!0;var t={contact_number:this.getphoneNumber,role:"user",name:this.getuserName,surname:this.getuserSurName,tiktok_username:this.gettikTokUserName,_id:this.updateId,bank:{full_name:"",identity_citizenship_no:"",bank_name:"",iban:""}};this.$apiService.postCall("auth/member-update",t).then((function(t){t.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",t.message)):(e.imgLoader=!1,e.$toaster.makeToast("success","User Update successfully"),e.showEditModal=!1,e.getAllUsers())})).catch((function(e){this.$toaster.makeToast("warning","Error: server error"),this.imgLoader=!1,this.$store.commit("setError",{message:e})}))}else this.$toaster.makeToast("warning","Invalid number")},formSubmitDeleteMember:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&(t.loader=!0,t.$apiService.getCall("auth/member-delete/".concat(e._id)).then((function(e){t.loader=!1,e.error?t.$toaster.makeToast("warning",e.message):(t.showEditModal=!1,t.getAllUsers(),setTimeout((function(){t.$toaster.makeToast("success","User deleted successfully")}),1e3))})).catch((function(e){t.$toaster.makeToast("warning","Error: server error"),t.loader=!1,t.$store.commit("setError",{message:e})})))}))},formSubmitAddMember:function(){var e=this;if(this.phoneNumberfield.isValidNumber())if(this.phoneNumber=this.phoneNumberfield.getNumber(),this.phoneNumber.startsWith("+")&&(this.phoneNumber=this.phoneNumber.slice(1)),this.userName&&this.userSurName&&this.tikTokUserName){this.imgLoader=!0;var t={contact_number:this.phoneNumber,role:"user",name:this.userName,surname:this.userSurName,tiktok_username:this.tikTokUserName};this.$apiService.postCall("auth/tiktok-login",t).then((function(t){t.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",t.message)):(e.imgLoader=!1,e.$toaster.makeToast("success","User create successfully"),e.phoneNumber="",e.userName="",e.userSurName="",e.tikTokUserName="",e.showAddModal=!1,e.getAllUsers())})).catch((function(e){this.$toaster.makeToast("warning","Error: server error"),this.imgLoader=!1,this.$store.commit("setError",{message:e})}))}else this.$toaster.makeToast("warning","All Field is required");else this.$toaster.makeToast("warning","Invalid number")},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.searchTerm="",this.getAllUsers()},openModal12:function(){this.showEditModal=!0},clickUserName:function(e){this.$router.push("/app/mydesk/memberPage?id="+e)},closeEditModal:function(){this.showEditModal=!1},openModal:function(e){this.aadharFront=e.aadhar_card,this.aadharBack=e.back_aadhar_card,this.divinglicense=e.driving_lincense,this.divinglicenseBack=e.back_driving_lincense,this.passportBack=e.back_passport,this.passport=e.passport,this.isModalOpen=!0},vueDocuments:function(e){this.popUpWindow=!0},handleChange:function(e){var t=this.rows.filter((function(t){return t.name===e}));this.rows=t},clickViewUsers:function(e){this.$router.push("/app/myDesk/usersProfile?id="+e)},clickUnBlock:function(e){var t=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(e),a).then((function(e){e.apidata.isError||(t.$toaster.makeToast("success","User  successfully unblocked"),t.getAllUsers(),t.loader=!1)})).catch((function(e){t.loader=!1,t.$toaster.makeToast("warning","Have Server error")}))},getAllUsers:function(){var e=this;this.loader=!0,this.$apiService.getCall("user/get-all-members").then((function(t){if(t&&!1===t.isError&&t.apidata&&t.apidata.data){var a=t.apidata.data;e.rows=a}else e.$toaster.makeToast("warning","Failed to fetch user data");e.loader=!1})).catch((function(t){console.error("Error fetching user data:",t),e.$toaster.makeToast("error","Error fetching user data"),e.loader=!1}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)e+=t.charAt(Math.floor(Math.random()*t.length));this.form.templateId=e,this.generateIDloader=!1},submit:function(){var e=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",l.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(t){t.apidata.status?(e.$toaster.makeToast("warning",l.a.ERROR_TEMPLATE_MESSAGE),e.submitloader=!1):(e.$toaster.makeToast("success",l.a.ADD_TEMPLATE_MESSAGE),e.getTemplateData(),e.clearform())})).catch((function(t){e.$toaster.makeToast("warning",l.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var e=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",l.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(t){e.$toaster.makeToast("success",l.a.EDIT_TEMPLATE_MESSAGE),e.getTemplateData(),e.clearform()})).catch((function(t){e.$toaster.makeToast("warning",l.a.ERROR_MESSAGE)}))},editTemplate:function(e){var t=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:e}).then((function(e){t.form=e.apidata,t.$bvModal.show("modal-lg")})).catch((function(e){t.$toaster.makeToast("warning",l.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){t.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};t.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(e),s).then((function(e){e.apidata.isError||(t.$toaster.makeToast("success","User successfully blocked"),t.getAllUsers(),t.loader=!1)}))}})).catch((function(e){t.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}},m=u,p=(a("f0ed"),a("36ae"),a("2877")),h=Object(p["a"])(m,i,r,!1,null,null,null);t["default"]=h.exports},"2ca0":function(e,t,a){"use strict";var s=a("23e7"),i=a("4625"),r=a("06cf").f,o=a("50c4"),n=a("577e"),l=a("5a34"),c=a("1d80"),d=a("ab13"),u=a("c430"),m=i("".slice),p=Math.min,h=d("startsWith"),f=!u&&!h&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();s({target:"String",proto:!0,forced:!f&&!h},{startsWith:function(e){var t=n(c(this));l(e);var a=o(p(arguments.length>1?arguments[1]:void 0,t.length)),s=n(e);return m(t,a,a+s.length)===s}})},"36ae":function(e,t,a){"use strict";a("8a86")},"498a":function(e,t,a){"use strict";var s=a("23e7"),i=a("58a8").trim,r=a("c8d2");s({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},"8a86":function(e,t,a){},a0dd:function(e,t,a){},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},c8d2:function(e,t,a){"use strict";var s=a("5e77").PROPER,i=a("d039"),r=a("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!r[e]()||o[e]()!==o||s&&r[e].name!==e}))}},f0ed:function(e,t,a){"use strict";a("a0dd")}}]);