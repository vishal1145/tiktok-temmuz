(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6067ed"],{"498a":function(t,e,a){"use strict";var s=a("23e7"),r=a("58a8").trim,i=a("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},b654:function(t,e){t.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},bfcd:function(t,e,a){},c8d2:function(t,e,a){"use strict";var s=a("5e77").PROPER,r=a("d039"),i=a("5899"),o="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||o[t]()!==o||s&&i[t].name!==t}))}},dce3:function(t,e,a){"use strict";a("bfcd")},fcdd:function(t,e,a){"use strict";a.r(e);var s=a("2909"),r=(a("4de4"),a("d81d"),a("d3b7"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("b-modal",{ref:"withdrawModal",staticStyle:{height:"auto"},attrs:{id:"modal-add",size:"md",title:"Create Payment","hide-footer":"","hide-header":"",centered:""},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(" Withdraw ")]),e("b-row",{staticClass:"px-3"},[e("b-col",{staticClass:"d-none",attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"User Name","label-for":"input-user-name"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"User Name",type:"text",id:"input-user-name"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Amount","label-for":"input-amount"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Amount",type:"number",id:"input-amount"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),e("b-col",{staticClass:"d-none",attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Status","label-for":"input-status"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Status",type:"text",id:"input-status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Notes","label-for":"input-notes"}},[e("b-form-textarea",{staticStyle:{height:"44px"},attrs:{required:"",placeholder:"Notes",id:"input-notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1),e("b-col",{staticClass:"pb-3",attrs:{md:"12"}},[e("div",[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isSubmitting},on:{click:t.createUser}},[t._v(" Submit ")])])])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-lg",size:"lg",title:"Documents"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Aadhar Card")])])],1),t.aadharFront?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharFront,title:"aadharFront",target:"_blank"}},[e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharFront}})])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharBack,title:"aadharBack",target:"_blank"}},[t.aadharBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Driving Licence")])])],1),t.divinglicense?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicense,title:"divinglicense",target:"_blank"}},[t.divinglicense?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicense}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicenseBack,title:"divinglicenseBack",target:"_blank"}},[t.divinglicenseBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicenseBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Passport")])])],1),t.passport?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passport,title:"passport",target:"_blank"}},[t.passport?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passport}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passportBack,title:"passportBack",target:"_blank"}},[t.passportBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passportBack}}):t._e()])])],1):t._e()],1),e("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[e("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(t.allUsers),multiple:!1,limit:1},on:{input:t.handleChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("div",{staticClass:"for-gap d-none"},[e("button",{staticClass:"btn btn-primary",on:{click:t.clearFilters}},[t._v(" Clear Filter ")])])],1),e("div",{staticClass:"pb-2"},[e("div",[t.isAdmin?e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Filters ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[e("li",[e("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:t.toggleFlexDiv}},[e("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),e("li",[e("a",{attrs:{"data-action":" pe-auto"},on:{click:t.clearFilters}},[e("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),e("div",{staticClass:"card-content collapse show",style:{display:t.flexDivDisplay}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"users-list-filter"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-search"}},[t._v("User Name")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})])]),e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-status"}},[t._v("Status")]),e("fieldset",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-status"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStatus=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("All")]),e("option",{attrs:{value:"Approved"}},[t._v("Approved")]),e("option",{attrs:{value:"Reject"}},[t._v("Reject")]),e("option",{attrs:{value:"Pending"}},[t._v("Pending")])])])]),e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-verified"}},[t._v("Amount")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAmount,expression:"searchAmount"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount",placeholder:"Search amount"},domProps:{value:t.searchAmount},on:{input:function(e){e.target.composing||(t.searchAmount=e.target.value)}}})])])])])])])])])]):e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex align-items-end row"},[e("div",{staticClass:"col-7"},[e("div",{staticClass:"card-body text-nowrap"},[e("h5",{staticClass:"card-title mb-0"},[t._v("Congratulations John! 🎉")]),e("p",{},[t._v("Best seller of the month")]),e("h4",{staticClass:"text-primary mb-1"},[t._v("$48.9k")]),e("a",{staticClass:"btn btn-primary waves-effect waves-light",staticStyle:{color:"white","padding-top":"3px","padding-bottom":"3px"},on:{click:t.openWithdrawModal}},[t._v("Withdraw")])])]),t._m(0)])])])])]),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Payment ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"===t.isAdmin?e("button",{staticClass:"btn btn-primary mb-3",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(e){t.showAddModal=!0}}},[t._v(" Add New ")]):t._e()])])]),e("div",{staticClass:"card-body"},[e("vue-good-table",{attrs:{columns:t.visibleColumns,"line-numbers":!1,"pagination-options":t.paginationOptions,styleClass:"tableOne vgt-table",rows:t.filteredRows},scopedSlots:t._u([{key:"table-row",fn:function(a){return["full_name"===a.column.field?e("span",[e("div",[t._v(t._s(a.row.full_name?a.row.full_name:""))])]):"request_date"===a.column.field?e("span",[e("div",[t._v(t._s(t.formatDate(a.row.request_date)))])]):"amount"===a.column.field?e("span",[e("div",[t._v(t._s(a.row.amount))])]):"notes"===a.column.field?e("span",[e("div",[t._v(t._s(a.row.notes))])]):"action"===a.column.field?e("span",["user"==t.role&&"Approved"!=a.row.status&&"Canceled"!=a.row.status?e("div",[e("div",{staticClass:"badge border mr-2 bg-success text-white ul-cursor--pointer p-2",on:{click:function(e){return t.clickPaid(a.row._id)}}},[t._v(" Paid ")])]):"admin"==t.role&&"Approved"!=a.row.status&&"Reject"!=a.row.status?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"badge border mr-2 bg-success text-white ul-cursor--pointer p-2",on:{click:function(e){return t.clickAccept(a.row._id)}}},[t._v(" Approve ")]),e("div",{staticClass:"badge border bg-primary text-white ul-cursor--pointer p-2",on:{click:function(e){return t.clickPaid(a.row._id)}}},[t._v(" Reject ")])]):t._e(),e("div",["Approved"===a.row.status?e("div",[e("div",{staticClass:"p-1 badge badge-success",on:{click:function(e){return t.clickPaid(a.row._id)}}},[t._v(" Paid ")])]):"Reject"===a.row.status?e("div",[e("span",{staticClass:"badge border bg-primary text-white ul-cursor--pointer p-1"},[t._v(t._s(a.row.status))])]):t._e()])]):t._e()]}}])})],1)])],1)}),i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-5 text-center text-sm-left"},[e("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[e("img",{attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])}],o=a("c7eb"),l=a("1da1"),n=a("ade3"),c=(a("caad"),a("14d9"),a("b0c0"),a("25f0"),a("2532"),a("498a"),a("159b4"),a("c1df"),a("b654")),d=a.n(c),u=a("8e5f"),p=a.n(u),m={metaInfo:{title:"Users"},components:{multiselect:p.a},data:function(){var t;return t={selectedStatus:"",searchAmount:"",searchTerm:"",isSubmitting:!1,pageReloaded:!1,modalVisible:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columnsForAdmin:[{label:"User Name",field:"full_name",filterOptions:{enabled:!0,placeholder:"User Name"}},{label:"Request Date",field:"request_date",filterOptions:{enabled:!0,placeholder:"Request Date"}},{label:"Amount",field:"amount",filterOptions:{enabled:!0,placeholder:"Amount"}},{label:"Status",field:"status",filterOptions:{enabled:!0,placeholder:"Status"}},{label:"Notes",field:"notes",filterOptions:{enabled:!0,placeholder:"Notes"}},{label:"Action",field:"action"}],columnsForRegularUser:[{label:"Request Date",field:"request_date",filterOptions:{enabled:!0,placeholder:"Request Date"}},{label:"Amount",field:"amount",filterOptions:{enabled:!0,placeholder:"Amount"}},{label:"Status",field:"status",filterOptions:{enabled:!0,placeholder:"Status"}},{label:"Notes",field:"notes",filterOptions:{enabled:!0,placeholder:"Notes"}}],rows:[],originalRows:[],form:{templateId:"",name:"",content:""},generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1,flexDivDisplay:"flex!important"},Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(t,"matchUser",""),"name",""),"contact_number",""),"email",""),"userName",""),"amount",""),"status",""),"notes",""),"loader",!1),"UserID",""),Object(n["a"])(Object(n["a"])(t,"filteredFaqs",[]),"paginationOptions",{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:"Next",prevLabel:"Previous"})},computed:{filteredRows:function(){var t=this.searchTerm.toLowerCase().trim(),e=this.searchAmount.trim(),a=this.selectedStatus;return this.rows.filter((function(s){var r=!t||s.full_name&&s.full_name.toLowerCase().includes(t),i=!a||s.status===a,o=!e||s.amount.toString().includes(e);return r&&i&&o}))},isAdmin:function(){var t=localStorage.getItem("role");return this.UserID=localStorage.getItem("user_id"),"admin"===t},visibleColumns:function(){return this.isAdmin?this.columnsForAdmin:this.columnsForRegularUser}},created:function(){this.getAllUsers(),this.getAllTransaction(),this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.originalRows=Object(s["a"])(this.rows)},methods:{formatDate:function(t){var e={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};return new Date(t).toLocaleDateString(void 0,e)},clickAccept:function(t){var e=this;return Object(l["a"])(Object(o["a"])().mark((function a(){var s,r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loader=!0,a.prev=1,s={status:"Approved"},a.next=5,e.$apiService.postCall("transition/update-payment-status/".concat(t),s);case 5:r=a.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.loader=!1,e.$toaster.makeToast("success"," Payment status Approved successfully"),e.getAllUsers()),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](1),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))()},clickPaid:function(t){var e=this;return Object(l["a"])(Object(o["a"])().mark((function a(){var s,r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loader=!0,a.prev=1,s={status:"Reject"},a.next=5,e.$apiService.postCall("transition/update-payment-status/".concat(t),s);case 5:r=a.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.loader=!1,e.$toaster.makeToast("success"," Payment status Rejected successfully"),e.getAllUsers()),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](1),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))()},getAllUsers:function(){var t=this;this.UserID=localStorage.getItem("user_id"),this.role=localStorage.getItem("role");var e="";if("admin"==this.role)this.loader=!0,e="user/all-payments",this.$apiService.getCall(e).then((function(e){if(e.error)t.loader=!1,t.$toaster.makeToast("warning","Error fetching payment data");else{t.loader=!1;var a=e.apidata;a.forEach((function(t){t.full_name=t.user_id?t.user_id.name+" "+t.user_id.surname:""})),t.rows=a}})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching payment data")})).finally((function(){t.loader=!1}));else{e="transition/payment_user";var a={user_id:this.UserID};this.$apiService.postCall(e,a).then((function(e){var a=e.apidata.data;t.rows=a})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching user data")})).finally((function(){t.loader=!1}))}},createUser:function(){var t=this;this.isSubmitting=!0,this.loader=!0;var e={user_id:this.UserID,amount:this.amount,notes:this.notes,request_date:new Date};this.loader=!0,this.$apiService.postCall("transition/payments",e).then((function(e){e&&!1===e.isError?(t.$toaster.makeToast("success","Payment Request Sent Successfully"),t.closeModal12(),t.loader=!1,t.amount="",t.notes="",t.getAllUsers()):t.$toaster.makeToast("warning","Payment Request Sent Fail")})).catch((function(e){console.error("Error creating user:",e),t.$toaster.makeToast("warning","Error Server Error")})).finally((function(){t.loader=!1,t.isSubmitting=!1}))},deleteUser:function(t){var e=this;this.loader=!0,this.$apiService.deleteCall("transition/payments/".concat(t)).then((function(t){t&&!1===t.isError?e.$toaster.makeToast("success","User deleted successfully"):e.$toaster.makeToast("warning","Failed to delete user")})).catch((function(t){console.error("Error deleting user:",t),e.$toaster.makeToast("error","Error deleting user")})).finally((function(){e.loader=!1}))},getUserById:function(t){var e=this;this.loader=!0,this.$apiService.getCall("transition/payments/".concat(t)).then((function(t){if(t&&!1===t.isError&&t.apidata&&t.apidata.data)t.apidata.data;else e.$toaster.makeToast("warning","Failed to fetch user")})).catch((function(t){console.error("Error fetching user:",t),e.$toaster.makeToast("error","Error fetching user")})).finally((function(){e.loader=!1}))},updateUser:function(t,e){var a=this;this.loader=!0,this.$apiService.putCall("transition/payments/".concat(t),e).then((function(t){t&&!1===t.isError?a.$toaster.makeToast("success","User updated successfully"):a.$toaster.makeToast("warning","Failed to update user")})).catch((function(t){console.error("Error updating user:",t),a.$toaster.makeToast("error","Error updating user")})).finally((function(){a.loader=!1}))},openWithdrawModal:function(){this.$refs.withdrawModal.show()},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.getAllUsers(),this.selected="Select User"},openModal12:function(){this.modalVisible=!0},closeModal12:function(){this.modalVisible=!1},openModal:function(t){this.aadharFront=t.aadhar_card,this.aadharBack=t.back_aadhar_card,this.divinglicense=t.driving_lincense,this.divinglicenseBack=t.back_driving_lincense,this.passportBack=t.back_passport,this.passport=t.passport,this.isModalOpen=!0},vueDocuments:function(t){this.popUpWindow=!0},handleChange:function(t){var e=this.rows.filter((function(e){return e.name===t}));this.rows=e},clickViewUsers:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},clickUnBlock:function(t){var e=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),a).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User  successfully unblocked"),e.getAllUsers(),e.loader=!1)})).catch((function(t){e.loader=!1,e.$toaster.makeToast("warning","Have Server error")}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.form.templateId=t,this.generateIDloader=!1},submit:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",d.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(e){e.apidata.status?(t.$toaster.makeToast("warning",d.a.ERROR_TEMPLATE_MESSAGE),t.submitloader=!1):(t.$toaster.makeToast("success",d.a.ADD_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform())})).catch((function(e){t.$toaster.makeToast("warning",d.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",d.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(e){t.$toaster.makeToast("success",d.a.EDIT_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform()})).catch((function(e){t.$toaster.makeToast("warning",d.a.ERROR_MESSAGE)}))},editTemplate:function(t){var e=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:t}).then((function(t){e.form=t.apidata,e.$bvModal.show("modal-lg")})).catch((function(t){e.$toaster.makeToast("warning",d.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){e.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};e.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),s).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User successfully blocked"),e.getAllUsers(),e.loader=!1)}))}})).catch((function(t){e.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}},f=m,h=(a("f0ed"),a("dce3"),a("2877")),g=Object(h["a"])(f,r,i,!1,null,null,null);e["default"]=g.exports}}]);