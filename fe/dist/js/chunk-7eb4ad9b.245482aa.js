(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb4ad9b"],{2613:function(e,t,a){e.exports=a.p+"img/photo-long-3.f4e38da9.jpg"},"498a":function(e,t,a){"use strict";var s=a("23e7"),r=a("58a8").trim,i=a("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},"605f":function(e,t,a){"use strict";a.r(t);a("4de4"),a("d81d"),a("d3b7");var s=function(){var e=this,t=this,a=t._self._c;return a("div",{staticClass:"maim-container"},[t.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),a("div",{staticClass:"d-flex flex-column gap-5",staticStyle:{gap:"13px"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" "+t._s(t.$t("Filters"))+" ")]),a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[a("li",[a("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:t.toggleFlexDiv}},[a("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{"data-action":" pe-auto"},on:{click:t.clearFilters}},[a("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),a("b-row",{staticClass:"px-3 pb-3 pt-2 mt-1",style:{display:t.flexDivDisplay}},[a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v(" "+t._s(t.$t("Search"))+" ")]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:t.$t("Search...")},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})])]),a("b-col",{staticClass:"d-none",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-verified"}},[t._v(" "+t._s(t.$t("Action")))]),a("fieldset",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-verified"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));t.selectedStatus=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("All")))]),a("option",{attrs:{value:"Approved"}},[t._v("Approved")]),a("option",{attrs:{value:"Rejected"}},[t._v("Rejected")]),a("option",{attrs:{value:"Waiting Approval"}},[t._v("Waiting Approval")]),a("option",{attrs:{value:"Pending Registration"}},[t._v(" Pending Registration ")])])])]),a("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v(" "+t._s(t.$t("Select Start Date")))]),a("v2-datepicker",{ref:"startDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(e){return e.getTime()>(new Date).getTime()}},placeholder:t.$t("Select Start Date")},on:{change:t.changeStartDate},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v(t._s(t.$t("Select End Date")))]),a("v2-datepicker",{ref:"endDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()<new Date(e.startDate).getTime()}},disabled:!this.startDate,placeholder:t.$t("Select End Date")},on:{change:t.changeEndDate},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("b-col",{staticClass:"d-none",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-verified"}},[t._v(" "+t._s(t.$t("Min Earnings")))]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchAmount,expression:"searchAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount",placeholder:t.$t("Min Earnings")},domProps:{value:t.searchAmount},on:{input:function(e){e.target.composing||(t.searchAmount=e.target.value)}}})])]),a("b-col",{staticClass:"d-none",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-verified"}},[t._v(t._s(t.$t("Max Earnings")))]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchMaxAmount,expression:"searchMaxAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount-max",placeholder:t.$t("Max Earnings")},domProps:{value:t.searchMaxAmount},on:{input:function(e){e.target.composing||(t.searchMaxAmount=e.target.value)}}})])])],1)],1),a("div",{staticClass:"d-flex flex-column gap-5 card"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" "+t._s(t.$t("Notification"))+" ")]),"user"!=t.role?a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[a("button",{staticClass:"btn btn-primary",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(e){return t.clickNotificationAdd()}}},[t._v(" "+t._s(t.$t("Add New"))+" ")])])]):t._e()]),a("div",{staticClass:"card-body"},[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!1,"pagination-options":t.paginationOptions,styleClass:"tableOne vgt-table",rows:t.filteredRows},scopedSlots:t._u([{key:"table-row",fn:function(e){return["body"===e.column.field?a("span",[a("div",[a("div",[t._v(" "+t._s(e.row.body)+" ")])])]):"title"===e.column.field?a("span",[a("div",[a("div",[t._v(t._s(e.row.title))])])]):"createdAt"===e.column.field?a("span",[a("div",[a("div",[t._v(t._s(e.row.createdAt))])])]):t._e()]}}])})],1)])]),a("b-modal",{attrs:{id:"modal-attachment-notification-Add-Notification",size:"md","hide-footer":"",title:"Notification",scrollable:""}},[a("b-row",{},[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Title"),"label-for":"input-name"}},[a("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:t.$t("Title"),type:"text",id:"input-name",maxlength:"20"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Body"),"label-for":"input-title"}},[a("b-textarea",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:t.$t("Body"),type:"text",id:"input-name",maxlength:"20"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{"label-for":"input-title"}},[a("div",[a("label",{staticClass:"typo__label"},[t._v("Select Member")]),a("div",[a("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"fullName","track-by":"_id",options:t.allUsers,multiple:!0,taggable:!0},on:{tag:t.addTag},model:{value:t.selectedUsers,callback:function(e){t.selectedUsers=e},expression:"selectedUsers"}}),t.selectedUsers.length?a("div",[a("span",{staticClass:"d-none"},[t._v(t._s(t.displaySelectedUsers))])]):t._e()],1)])])],1),a("b-col",[a("div",{staticClass:"d-flex justify-content-end"},[t.imgLoader?t._e():a("b-button",{staticClass:"mr-2",on:{click:function(e){return t.closeModal()}}},[t._v(" "+t._s(t.$t("Close")))]),t.imgLoader?t._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(e){return t.formSubmitAddMember()}}},[t._v(" "+t._s(t.$t("Add")))]),t.imgLoader?a("div",{staticClass:"spinner spinner-primary imgloader"}):t._e()],1)])],1)],1)],1)},r=[],i=a("c7eb"),l=a("5530"),o=a("1da1"),n=(a("99af"),a("caad"),a("14d9"),a("b0c0"),a("b64b"),a("2532"),a("498a"),a("159b4"),a("8e5f")),c=a.n(n),d=a("c1df"),u=a.n(d),f=(a("b654"),{metaInfo:{title:"Notification Page"},components:{Multiselect:c.a},data:function(){return{startDate:"",endDate:"",title:"",body:"",selectedUsers:[],selectedIds:[],allUsers:[],validationId:"",email:"",logo:a("9d64"),signInImage:a("2613"),password:"",repeatPassword:"",data:["1 hii this mass inf. you for ghjghjgh.."," 2 hii this mass inf. you forhjhj ..","3 hii this mass inf. you forjjg ..","4 hii this mass inf. you for jhghj.."],paginationOptions:{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:this.$t("Next"),prevLabel:this.$t("Previous")},loader:!1,rows:[],userId:"",submitStatus:null,successMessage:!1,errorMessage:!1,user_id:"",role:"",searchTerm:"",flexDivDisplay:"flex!important",IdS:[]}},computed:{columns:function(){return[{label:this.$t("Title"),field:"title",filterOptions:{enabled:!0,placeholder:this.$t("Title")}},{label:this.$t("Notifications"),field:"body",filterOptions:{enabled:!0,placeholder:this.$t("Notifications")}},{label:this.$t("Date/time"),field:"createdAt",filterOptions:{enabled:!0,placeholder:this.$t("Date/time"),All_ID_For_Message:[]}}]},filteredRows:function(){var e=this,t=this.searchTerm.toLowerCase().trim();return this.rows.filter((function(a){var s=!t||(a.body&&a.body.toLowerCase().includes(t)||a.title&&a.title.toLowerCase().includes(t)),r=new Date(u()(a.createdAt).format("DD MMM YYYY")),i=(!e.startDate||r>=new Date(e.startDate))&&(!e.endDate||r<=new Date(e.endDate));return s&&i}))},displaySelectedUsers:function(){console.log("Selected Users:",this.selectedUsers);var e=Object.keys(this.selectedUsers);if(1===e.length){var t=this.selectedUsers[e[0]];return t.id}if(e.length>1){var a=this.selectedUsers[e[0]];return"".concat(a.id," + ").concat(e.length-1," others")}var s=this.selectedUsers.map((function(e){return e._id}));return console.log("Extracted Ids:",s),""},selectedUserIds:function(){return this.selectedUsers.map((function(e){return e._id}))}},created:function(){this.getAllUsers();var e=localStorage.getItem("userInfo"),t=JSON.parse(e);this.userId=t.data.id,this.AllNotification()},mounted:function(){this.AllNotification()},methods:{handleChange:function(e){this.selectedIds=e._id},getAllUsers:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var a,s,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Id",e.selectedUsers),e.loader=!0,t.prev=2,t.next=5,e.$apiService.getCall("user/get-all-members");case 5:a=t.sent,a&&!1===a.isError&&a.apidata&&a.apidata.data?(s=a.apidata.data,e.allUsers=s,e.All_ID_For_Message=s.map((function(e){return e._id})),r=s.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{fullName:"".concat(e.name," ").concat(e.surname)})})),e.allUsers=r):e.$toaster.makeToast("warning","Failed to fetch user data"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),console.error("Error fetching user data:",t.t0),e.$toaster.makeToast("error","Error fetching user data");case 13:return t.prev=13,e.loader=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])})))()},addTag:function(e){var t={_id:e.substring(0,2)+Math.floor(1e7*Math.random()),fullName:e};this.allUsers.push(t),this.selectedUsers.push(t),console.log("Id",this.selectedUsers._id)},formSubmitAddMember:function(){var e=this;if(this.title&&this.body){this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role");var t=this.selectedUsers,a=t?t.map((function(e){return e._id})):[];console.log("IdHai",a),this.imgLoader=!0;var s={title:this.title,body:this.body,sender_id:this.user_id,target_id:0===a.length?this.All_ID_For_Message:a,for_all:0===a.length};this.$apiService.postCall("group_messages/create",s).then((function(t){e.imgLoader=!1,t.error?e.$toaster.makeToast("warning",t.message):(e.$bvModal.hide("modal-attachment-notification-Add-Notification"),e.$toaster.makeToast("success",e.$t("Notification created successfully")),e.title="",e.body="",e.selectedUsers=[],e.AllNotification(),e.getAllUsers())})).catch((function(t){e.$toaster.makeToast("warning","Error: server error"),e.imgLoader=!1,e.$store.commit("setError",{message:t})}))}else this.$toaster.makeToast("warning","All Field is required")},clickNotificationAdd:function(){this.$bvModal.show("modal-attachment-notification-Add-Notification")},closeModal:function(){this.$bvModal.hide("modal-attachment-notification-Add-Notification"),this.title="",this.body="",this.selectedUsers=[]},AllNotification:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var a,s,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,e.user_id=localStorage.getItem("user_id"),e.role=localStorage.getItem("role"),a={},"user"===e.role?a.user_id=e.user_id:"admin"===e.role&&(a.user_id=""),t.prev=5,t.next=8,e.$apiService.postCall("group_messages/all-messages",a);case 8:s=t.sent,s.error?(e.loader=!1,e.$toaster.makeToast("warning",s.message)):(e.loader=!1,console.log("notificationInner",s),r=s.apidata.data,r.forEach((function(e){e.createdAt=u()(e.createdAt).format("DD MMM YYYY h:mm A")})),e.rows=r),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](5),e.loader=!1,e.$toaster.makeToast("warning","Error: server error"),e.$store.commit("setError",{message:t.t0});case 17:case"end":return t.stop()}}),t,null,[[5,12]])})))()},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.searchTerm="",this.startDate="",this.endDate="",this.fetchPublisher()}}}),p=f,m=(a("f0ed"),a("ad8c"),a("2877")),g=Object(m["a"])(p,s,r,!1,null,null,null);t["default"]=g.exports},"99af":function(e,t,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),l=a("861d"),o=a("7b0b"),n=a("07fa"),c=a("3511"),d=a("8418"),u=a("65f0"),f=a("1dde"),p=a("b622"),m=a("2d00"),g=p("isConcatSpreadable"),h=m>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),b=function(e){if(!l(e))return!1;var t=e[g];return void 0!==t?!!t:i(e)},v=!h||!f("concat");s({target:"Array",proto:!0,arity:1,forced:v},{concat:function(e){var t,a,s,r,i,l=o(this),f=u(l,0),p=0;for(t=-1,s=arguments.length;t<s;t++)if(i=-1===t?l:arguments[t],b(i))for(r=n(i),c(p+r),a=0;a<r;a++,p++)a in i&&d(f,p,i[a]);else c(p+1),d(f,p++,i);return f.length=p,f}})},"9d64":function(e,t,a){e.exports=a.p+"img/logo.e6608349.png"},a0dd:function(e,t,a){},ad8c:function(e,t,a){"use strict";a("df37")},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},c8d2:function(e,t,a){"use strict";var s=a("5e77").PROPER,r=a("d039"),i=a("5899"),l="​᠎";e.exports=function(e){return r((function(){return!!i[e]()||l[e]()!==l||s&&i[e].name!==e}))}},df37:function(e,t,a){},f0ed:function(e,t,a){"use strict";a("a0dd")}}]);