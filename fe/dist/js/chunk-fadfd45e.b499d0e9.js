(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fadfd45e"],{"00b4":function(t,e,a){"use strict";a("ac1f");var s=a("23e7"),r=a("c65b"),i=a("1626"),n=a("825a"),o=a("577e"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),c=/./.test;s({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=n(this),a=o(t),s=e.exec;if(!i(s))return r(c,e,a);var l=r(s,e,a);return null!==l&&(n(l),!0)}})},"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("ac1f"),a("00b4"),a("25f0"),a("3ca3");var s=a("6b75");function r(t,e){if(t){if("string"==typeof t)return Object(s["a"])(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(s["a"])(t,e):void 0}}},"107c":function(t,e,a){"use strict";var s=a("d039"),r=a("da84"),i=r.RegExp;t.exports=s((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"25f0":function(t,e,a){"use strict";var s=a("5e77").PROPER,r=a("cb2d"),i=a("825a"),n=a("577e"),o=a("d039"),l=a("90d8"),c="toString",d=RegExp.prototype,u=d[c],m=o((function(){return"/a/b"!==u.call({source:"a",flags:"b"})})),p=s&&u.name!==c;(m||p)&&r(d,c,(function(){var t=i(this),e=n(t.source),a=n(l(t));return"/"+e+"/"+a}),{unsafe:!0})},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a("6b75");function r(t){if(Array.isArray(t))return Object(s["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function i(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=a("06c5");a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||i(t)||Object(n["a"])(t)||o()}},"498a":function(t,e,a){"use strict";var s=a("23e7"),r=a("58a8").trim,i=a("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},"4df4":function(t,e,a){"use strict";var s=a("0366"),r=a("c65b"),i=a("7b0b"),n=a("9bdd"),o=a("e95a"),l=a("68ee"),c=a("07fa"),d=a("8418"),u=a("9a1f"),m=a("35a1"),p=Array;t.exports=function(t){var e=i(t),a=l(this),f=arguments.length,h=f>1?arguments[1]:void 0,b=void 0!==h;b&&(h=s(h,f>2?arguments[2]:void 0));var g,v,_,E,S,y,x=m(e),w=0;if(!x||this===p&&o(x))for(g=c(e),v=a?new this(g):p(g);g>w;w++)y=b?h(e[w],w):e[w],d(v,w,y);else for(v=a?new this:[],E=u(e,x),S=E.next;!(_=r(S,E)).done;w++)y=b?n(E,h,[_.value,w],!0):_.value,d(v,w,y);return v.length=w,v}},"6aab":function(t,e,a){"use strict";a("d79c")},"6b75":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=Array(e);a<e;a++)s[a]=t[a];return s}a.d(e,"a",(function(){return s}))},"90d8":function(t,e,a){"use strict";var s=a("c65b"),r=a("1a2d"),i=a("3a9b"),n=a("ad6d"),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||r(t,"flags")||!i(o,t)?e:s(n,t)}},9263:function(t,e,a){"use strict";var s=a("c65b"),r=a("e330"),i=a("577e"),n=a("ad6d"),o=a("9f7f"),l=a("5692"),c=a("7c73"),d=a("69f3").get,u=a("fce3"),m=a("107c"),p=l("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,h=f,b=r("".charAt),g=r("".indexOf),v=r("".replace),_=r("".slice),E=function(){var t=/a/,e=/b*/g;return s(f,t,"a"),s(f,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),S=o.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],x=E||y||S||u||m;x&&(h=function(t){var e,a,r,o,l,u,m,x=this,w=d(x),k=i(t),A=w.raw;if(A)return A.lastIndex=x.lastIndex,e=s(h,A,k),x.lastIndex=A.lastIndex,e;var D=w.groups,T=S&&x.sticky,$=s(n,x),C=x.source,I=0,R=k;if(T&&($=v($,"y",""),-1===g($,"g")&&($+="g"),R=_(k,x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==b(k,x.lastIndex-1))&&(C="(?: "+C+")",R=" "+R,I++),a=new RegExp("^(?:"+C+")",$)),y&&(a=new RegExp("^"+C+"$(?!\\s)",$)),E&&(r=x.lastIndex),o=s(f,T?a:x,R),T?o?(o.input=_(o.input,I),o[0]=_(o[0],I),o.index=x.lastIndex,x.lastIndex+=o[0].length):x.lastIndex=0:E&&o&&(x.lastIndex=x.global?o.index+o[0].length:r),y&&o&&o.length>1&&s(p,o[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&D)for(o.groups=u=c(null),l=0;l<D.length;l++)m=D[l],u[m[0]]=o[m[1]];return o}),t.exports=h},"9bdd":function(t,e,a){"use strict";var s=a("825a"),r=a("2a62");t.exports=function(t,e,a,i){try{return i?e(s(a)[0],a[1]):e(a)}catch(n){r(t,"throw",n)}}},"9f7f":function(t,e,a){"use strict";var s=a("d039"),r=a("da84"),i=r.RegExp,n=s((function(){var t=i("a","y");return t.lastIndex=2,null!==t.exec("abcd")})),o=n||s((function(){return!i("a","y").sticky})),l=n||s((function(){var t=i("^r","gy");return t.lastIndex=2,null!==t.exec("str")}));t.exports={BROKEN_CARET:l,MISSED_STICKY:o,UNSUPPORTED_Y:n}},a0dd:function(t,e,a){},a630:function(t,e,a){"use strict";var s=a("23e7"),r=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:n},{from:r})},ac1f:function(t,e,a){"use strict";var s=a("23e7"),r=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},b654:function(t,e){t.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},c8d2:function(t,e,a){"use strict";var s=a("5e77").PROPER,r=a("d039"),i=a("5899"),n="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||n[t]()!==n||s&&i[t].name!==t}))}},d79c:function(t,e,a){},f0ed:function(t,e,a){"use strict";a("a0dd")},fcdd:function(t,e,a){"use strict";a.r(e);var s=a("2909"),r=(a("4de4"),a("d81d"),a("d3b7"),function(){var t=this,e=this,a=e._self._c;return a("div",{staticClass:"main-content"},[a("b-modal",{ref:"withdrawModal",staticStyle:{height:"auto"},attrs:{id:"modal-add",size:"md",title:"Create Payment","hide-footer":"","hide-header":"",centered:""},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("b-row",{},[a("b-col",[a("label",{staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(e.$t("Withdraw")))])]),a("b-col",{staticClass:"d-none",attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("User Name"),"label-for":"input-user-name"}},[a("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:e.$t("User Name"),type:"text",id:"input-user-name"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("Amount"),"label-for":"input-amount"}},[a("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:e.$t("Amount"),type:"number",id:"input-amount"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1)],1),a("b-col",{staticClass:"d-none",attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Status","label-for":"input-status"}},[a("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Status",type:"text",id:"input-status"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("Notes"),"label-for":"input-notes"}},[a("b-form-textarea",{staticStyle:{height:"44px"},attrs:{required:"",placeholder:e.$t("Notes"),id:"input-notes"},model:{value:e.notes,callback:function(t){e.notes=t},expression:"notes"}})],1)],1),a("b-col",{staticClass:"text-right",attrs:{md:"12"}},[a("div",[a("button",{staticClass:"btn btn-primary mr-2",attrs:{disabled:e.isSubmitting},on:{click:e.createUser}},[e._v(" "+e._s(e.$t("Submit"))+" ")]),e.imgLoader?e._e():a("b-button",{on:{click:function(t){return e.closeModal()}}},[e._v(" "+e._s(e.$t("Close"))+" ")])],1)])],1)],1),a("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-lg",size:"lg",title:"Documents"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[e._v("Aadhar Card")])])],1),e.aadharFront?a("b-row",{staticClass:"my-4"},[a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.aadharFront,title:"aadharFront",target:"_blank"}},[a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.aadharFront}})])]),a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.aadharBack,title:"aadharBack",target:"_blank"}},[e.aadharBack?a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.aadharBack}}):e._e()])])],1):e._e(),a("b-row",[a("b-col",[a("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[e._v("Driving Licence")])])],1),e.divinglicense?a("b-row",{staticClass:"my-4"},[a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.divinglicense,title:"divinglicense",target:"_blank"}},[e.divinglicense?a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.divinglicense}}):e._e()])]),a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.divinglicenseBack,title:"divinglicenseBack",target:"_blank"}},[e.divinglicenseBack?a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.divinglicenseBack}}):e._e()])])],1):e._e(),a("b-row",[a("b-col",[a("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[e._v("Passport")])])],1),e.passport?a("b-row",{staticClass:"my-4"},[a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.passport,title:"passport",target:"_blank"}},[e.passport?a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.passport}}):e._e()])]),a("b-col",{attrs:{md:"6"}},[a("a",{attrs:{download:"",href:e.passportBack,title:"passportBack",target:"_blank"}},[e.passportBack?a("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:e.passportBack}}):e._e()])])],1):e._e()],1),a("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-bankDetails",size:"md","hide-footer":"","hide-header":"",centered:""}},[a("b-row",{},[a("b-col",[a("label",{staticStyle:{"font-size":"20px"}},[e._v(" Information ")])]),a("b-col",{attrs:{md:"12"}},[e._v(" Please update my bank account information after it send payment request ")]),a("b-col",{staticClass:"text-right",attrs:{md:"12"}},[a("div",{staticClass:"mt-2"},[a("button",{staticClass:"btn btn-primary mr-2",on:{click:function(t){return e.updateBankDetails()}}},[e._v(" Update Bank Account ")]),e.imgLoader?e._e():a("b-button",{on:{click:function(t){return e.clickCancle()}}},[e._v(" Close ")])],1)])],1)],1),a("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-cancelReason",size:"md",title:"Reason for cancellation:","hide-footer":"","hide-header":"",centered:""}},[a("b-row",{},[a("b-col",{attrs:{md:"12"}},[a("i",{staticClass:"fa fa-exclamation-triangle text-danger mb-3",attrs:{"aria-hidden":"true"}},[e._v(" "+e._s(e.$t("Reason for cancellation:"))+" ")])]),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"","label-for":"input-2"}},[a("b-form-textarea",{staticStyle:{height:"100px"},attrs:{required:"",placeholder:e.$t("Reason for cancellation")},model:{value:e.cancelReasonText,callback:function(t){e.cancelReasonText=t},expression:"cancelReasonText"}})],1)],1),a("b-col",[a("div",{staticClass:"d-flex justify-content-end"},[e.updateloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),a("b-button",{staticClass:"mr-2",on:{click:function(t){return e.clickCancle()}}},[e._v(" "+e._s(e.$t("Cancel")))]),a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(t){return e.clickRejectButton()}}},[e._v(" "+e._s(e.$t("ok"))+" ")])],1)])],1)],1),a("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[a("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[a("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(e.allUsers),multiple:!1,limit:1},on:{input:e.handleChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("div",{staticClass:"for-gap d-none"},[a("button",{staticClass:"btn btn-primary",on:{click:e.clearFilters}},[e._v(" Clear Filter ")])])],1),a("div",{staticClass:"pb-2"},[a("div",[e.isAdmin?a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" "+e._s(e.$t("Filters"))+" ")]),a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[a("li",[a("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[a("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[a("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),a("b-row",{staticClass:"w-100 px-3 pt-2 mt-1",style:{display:e.flexDivDisplay}},[a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[e._v(" "+e._s(e.$t("User Name")))]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:e.$t("Search user name")},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})])]),a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-status"}},[e._v(" "+e._s(e.$t("Status")))]),a("fieldset",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedStatus,expression:"selectedStatus"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-status"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));e.selectedStatus=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("All")]),a("option",{attrs:{value:"Paid"}},[e._v("Paid")]),a("option",{attrs:{value:"Reject"}},[e._v("Reject")]),a("option",{attrs:{value:"Pending"}},[e._v("Pending")])])])]),a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-verified"}},[e._v(e._s(e.$t("Min Amount")))]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchAmount,expression:"searchAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount",placeholder:e.$t("Enter min amount")},domProps:{value:e.searchAmount},on:{input:function(t){t.target.composing||(e.searchAmount=t.target.value)}}})])]),a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-verified"}},[e._v(e._s(e.$t("Max Amount")))]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchMaxAmount,expression:"searchMaxAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount-max",placeholder:e.$t("Enter max amount")},domProps:{value:e.searchMaxAmount},on:{input:function(t){t.target.composing||(e.searchMaxAmount=t.target.value)}}})])])],1),a("b-row",{staticClass:"w-100 px-3 pb-3",style:{display:e.flexDivDisplay}},[a("b-col",{staticClass:"col-sm-6 col-lg-3",attrs:{md:"3"}},[a("v2-datepicker",{ref:"startDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:e.$t("Select Start Date")},on:{change:e.changeStartDate},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),a("b-col",{attrs:{md:"3"}},[a("v2-datepicker",{ref:"endDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(e){return e.getTime()<new Date(t.startDate).getTime()}},disabled:!this.startDate,placeholder:e.$t("Select End Date")},on:{change:e.changeEndDate},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)],1)]):a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"d-flex align-items-end row"},[a("div",{staticClass:"col-7"},[a("div",{staticClass:"card-body text-nowrap"},[a("h5",{staticClass:"card-title mb-0"},[e._v(" "+e._s(e.$t("Congratulations"))+" "+e._s(this.loginUserName)+"! 🎉 ")]),a("p",{},[e._v(e._s(e.$t("Best seller of the month")))]),a("h4",{staticClass:"text-primary mb-1"},[e._v("$ "+e._s(e.totalWithDraw))]),a("a",{staticClass:"btn btn-primary waves-effect waves-light",staticStyle:{color:"white","padding-top":"3px","padding-bottom":"3px"},on:{click:e.openWithdrawModal}},[e._v(" "+e._s(e.$t("Withdraw"))+" ")])])]),e._m(0)])])])])]),e.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" "+e._s(e.$t("Payment"))+" ")]),a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"===e.isAdmin?a("button",{staticClass:"btn btn-primary mb-3",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(t){e.showAddModal=!0}}},[e._v(" Add New ")]):e._e()])])]),a("div",{staticClass:"card-body"},[a("vue-good-table",{attrs:{columns:e.visibleColumns,"line-numbers":!1,"pagination-options":e.paginationOptions,styleClass:"tableOne vgt-table",rows:e.filteredRows},scopedSlots:e._u([{key:"table-row",fn:function(t){return["full_name"===t.column.field?a("span",[a("div",[e._v(e._s(t.row.full_name?t.row.full_name:""))])]):"request_date"===t.column.field?a("span",[a("div",[e._v(e._s(t.row.request_date))])]):"amount"===t.column.field?a("span",[a("div",[e._v("$"+e._s(t.row.amount))])]):"notes"===t.column.field?a("span",[a("div",[e._v(e._s(t.row.notes))])]):"reason"===t.column.field?a("span",[a("div",[e._v(e._s(t.row.reason))])]):"action"===t.column.field?a("span",["user"==e.role&&"Approved"!=t.row.status&&"Canceled"!=t.row.status?a("div"):"admin"==e.role&&"Paid"!=t.row.status&&"Reject"!=t.row.status?a("div",{staticClass:"d-flex"},[a("div",{staticClass:"badge border mr-2 bg-success text-white ul-cursor--pointer p-2",on:{click:function(a){return e.clickAccept(t.row._id)}}},[e._v(" Approve ")]),a("div",{staticClass:"badge border bg-danger text-white ul-cursor--pointer p-2",on:{click:function(a){return e.clickReject(t.row._id)}}},[e._v(" Reject ")])]):e._e(),a("div",["Paid"===t.row.status?a("div",[a("div",{staticClass:"badge badge-success",on:{click:function(a){return e.clickPaid(t.row._id)}}},[e._v(" Paid ")])]):"Reject"===t.row.status?a("div",[a("span",{staticClass:"badge badge-danger"},[e._v(e._s(t.row.status))])]):e._e()])]):"status"===t.column.field?a("span",[a("div",["Paid"===t.row.status?a("div",{staticClass:"badge badge-success"},[e._v(" Paid ")]):"Reject"===t.row.status?a("div",{staticClass:"badge badge-danger"},[e._v(" Reject ")]):"Pending"===t.row.status?a("div",{staticClass:"badge badge-yellow"},[e._v(" Pending ")]):a("div",[e._v(e._s(t.row.status))])])]):e._e()]}}])})],1)])],1)}),i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-5 text-center text-sm-left"},[e("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[e("img",{staticClass:"sizeImage",attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])}],n=a("c7eb"),o=a("1da1"),l=a("ade3"),c=(a("caad"),a("14d9"),a("b0c0"),a("ac1f"),a("00b4"),a("2532"),a("498a"),a("159b4"),a("c1df")),d=a.n(c),u=a("b654"),m=a.n(u),p=a("8e5f"),f=a.n(p),h={metaInfo:{title:"Payment"},components:{multiselect:f.a},data:function(){var t;return t={startDate:"",endDate:"",updateloader:!1,userFullName:"",citizenshipNo:"",bankName:"",idbnNo:"",cancelReasonText:"",selectedStatus:"",searchAmount:"",searchMaxAmount:"",searchTerm:"",totalWithDraw:0,isSubmitting:!1,pageReloaded:!1,modalVisible:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,imgLoader:!1,isModalOpen:!1,columnsForAdmin:[{label:this.$t("User Name"),field:"full_name",filterOptions:{enabled:!0,placeholder:this.$t("User Name")}},{label:this.$t("Request Date"),field:"request_date",filterOptions:{enabled:!0,placeholder:this.$t("Request Date")}},{label:this.$t("Amount"),field:"amount",filterOptions:{enabled:!0,placeholder:this.$t("Amount")}},{label:this.$t("Notes"),field:"notes",filterOptions:{enabled:!0,placeholder:this.$t("Notes")}},{label:this.$t("Reason"),field:"reason",filterOptions:{enabled:!0,placeholder:this.$t("Reason")}},{label:this.$t("Action"),field:"action"}],columnsForRegularUser:[{label:this.$t("Request Date"),field:"request_date",filterOptions:{enabled:!0,placeholder:this.$t("Request Date")}},{label:this.$t("Amount"),field:"amount",filterOptions:{enabled:!0,placeholder:this.$t("Amount")}},{label:this.$t("Notes"),field:"notes",filterOptions:{enabled:!0,placeholder:this.$t("Notes")}},{label:this.$t("Reason"),field:"reason",filterOptions:{enabled:!0,placeholder:this.$t("Reason")}},{label:this.$t("Status"),field:"status",filterOptions:{enabled:!0,placeholder:this.$t("Status")}}],rows:[],originalRows:[],form:{templateId:"",name:"",content:""},generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1,flexDivDisplay:"flex!important"},Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(t,"matchUser",""),"name",""),"contact_number",""),"email",""),"userName",""),"amount",""),"status",""),"notes",""),"UserID",""),"rejectedId",""),Object(l["a"])(Object(l["a"])(Object(l["a"])(t,"filteredFaqs",[]),"loginUserName",""),"paginationOptions",{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:this.$t("Next"),prevLabel:this.$t("Previous")})},computed:{filteredRows:function(){var t=this,e=this.searchTerm.toLowerCase().trim(),a=this.searchAmount.trim(),s=this.searchMaxAmount.trim(),r=this.selectedStatus;return this.rows.filter((function(i){var n=!e||i.full_name&&i.full_name.toLowerCase().includes(e),o=!r||i.status===r,l=i.amount,c=(!a||l>=a)&&(!s||l<=s),u=new Date(d()(i.request_date).format("DD MMM YYYY")),m=(!t.startDate||u>=new Date(t.startDate))&&(!t.endDate||u<=new Date(t.endDate));return n&&o&&c&&m}))},isAdmin:function(){var t=localStorage.getItem("role");return this.UserID=localStorage.getItem("user_id"),"admin"===t},visibleColumns:function(){return this.isAdmin?this.columnsForAdmin:this.columnsForRegularUser}},created:function(){this.getProfileDetails(),this.getAllUsers(),this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.originalRows=Object(s["a"])(this.rows)},methods:{clickRejectButton:function(){this.cancelReasonText&&this.cancelReasonText.length>=10?this.deletePublisher():this.$toaster.makeToast("warning",this.$t("Please enter a cancel reason with at least 10 characters"))},changeStartDate:function(t){this.startDate=d()(t).format("DD MMM YYYY")},changeEndDate:function(t){this.endDate=d()(t).format("DD MMM YYYY"),console.log(this.endDate)},formatDate:function(t){var e={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};return new Date(t).toLocaleDateString(void 0,e)},clickAccept:function(t){var e=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var s;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loader=!0,a.prev=1,s={status:"Paid"},a.next=5,e.$apiService.postCall("transition/update-payment-status/".concat(t),s);case 5:a.sent,e.loader=!1,e.$toaster.makeToast("success",e.$t("Payment status Approved successfully")),e.getAllUsers(),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](1),e.loader=!1,console.error(a.t0);case 15:case"end":return a.stop()}}),a,null,[[1,11]])})))()},clickReject:function(t){var e=this;return Object(o["a"])(Object(n["a"])().mark((function a(){return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$bvModal.show("modal-cancelReason"),e.rejectedId=t;case 2:case"end":return a.stop()}}),a)})))()},deletePublisher:function(t){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a={status:"Reject",reason:e.cancelReasonText},t.next=5,e.$apiService.postCall("transition/update-payment-status/".concat(e.rejectedId),a);case 5:t.sent,e.loader=!1,e.$toaster.makeToast("success",e.$t("Payment status Rejected successfully")),e.$bvModal.hide("modal-cancelReason"),e.cancelReasonText="",e.getAllUsers(),t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](1),e.loader=!1,e.$toaster.makeToast(t.t0),e.$bvModal.hide("modal-cancelReason");case 18:case"end":return t.stop()}}),t,null,[[1,13]])})))()},clickCancle:function(){this.cancelReasonText="",this.$bvModal.hide("modal-show-referralUrl"),this.$bvModal.hide("modal-cancelReason"),this.$bvModal.hide("modal-bankDetails")},getAllUsers:function(){var t=this;this.loader=!0,this.UserID=localStorage.getItem("user_id"),this.role=localStorage.getItem("role");var e="";if("admin"==this.role)this.loader=!0,e="user/all-payments",this.$apiService.getCall(e).then((function(e){if(e.error)t.loader=!1,t.$toaster.makeToast("warning","Error fetching payment data");else{t.loader=!1;var a=e.apidata;a.forEach((function(t){t.full_name=t.user_id?t.user_id.name+" "+t.user_id.surname:""})),a.forEach((function(t){t.request_date=d()(t.request_date).format("DD MMM YYYY h:mm A"),"Approved"===t.status&&(t.status="Paid")})),t.rows=a}})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching payment data")})).finally((function(){t.loader=!1}));else{this.loader=!0,e="transition/payment_user";var a={user_id:this.UserID};this.$apiService.postCall(e,a).then((function(e){if(e.isError)t.$toaster.makeToast("warning","Error fetching payment data"),t.loader=!1;else if("No Record Found"==e.apidata.msg)console.log("No Record Found"),t.loader=!1;else{var a=e.apidata.data;t.rows=a,t.totalWithDraw=e.apidata.total_withdraw,t.rows=a,a.forEach((function(t){t.request_date=d()(t.request_date).format("DD MMM YYYY h:mm A"),"Approved"===t.status&&(t.status="Paid")})),console.log("paymentData",a),t.rows=a,t.loader=!1}})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching payment data"),t.loader=!1})).finally((function(){t.loader=!1}))}},validateInputAmount:function(t){var e=t.key,a=this.amount;if("Backspace"!==e&&"ArrowLeft"!==e&&"ArrowRight"!==e&&"Tab"!==e&&"Delete"!==e)if(/^\d$/.test(e)){var s=parseInt(a+e,10);s>this.totalWithDraw&&t.preventDefault()}else t.preventDefault()},createUser:function(){var t=this;this.isSubmitting=!0,this.loader=!0;var e={user_id:this.UserID,amount:this.amount,notes:this.notes,request_date:new Date};this.$apiService.postCall("transition/payments",e).then((function(e){e&&!1===e.isError?(t.$toaster.makeToast("success",t.$t("Payment Request Sent Successfully")),t.closeModal12(),t.loader=!1,t.amount="",t.notes="",t.getAllUsers()):t.$toaster.makeToast("warning",t.$t("Payment Request Sent Fail"))})).catch((function(e){console.error("Error creating user:",e),t.$toaster.makeToast("warning","Error Server Error")})).finally((function(){t.loader=!1,t.isSubmitting=!1}))},deleteUser:function(t){var e=this;this.loader=!0,this.$apiService.deleteCall("transition/payments/".concat(t)).then((function(t){t&&!1===t.isError?e.$toaster.makeToast("success",e.$t("User deleted successfully")):e.$toaster.makeToast("warning",e.$t("Failed to delete user"))})).catch((function(t){console.error("Error deleting user:",t),e.$toaster.makeToast("error","Error deleting user")})).finally((function(){e.loader=!1}))},getUserById:function(t){var e=this;this.loader=!0,this.$apiService.getCall("transition/payments/".concat(t)).then((function(t){if(t&&!1===t.isError&&t.apidata&&t.apidata.data)t.apidata.data;else e.$toaster.makeToast("warning","Failed to fetch user")})).catch((function(t){console.error("Error fetching user:",t),e.$toaster.makeToast("error","Error fetching user")})).finally((function(){e.loader=!1}))},updateUser:function(t,e){var a=this;this.loader=!0,this.$apiService.putCall("transition/payments/".concat(t),e).then((function(t){t&&!1===t.isError?a.$toaster.makeToast("success","User updated successfully"):a.$toaster.makeToast("warning","Failed to update user")})).catch((function(t){console.error("Error updating user:",t),a.$toaster.makeToast("error","Error updating user")})).finally((function(){a.loader=!1}))},openWithdrawModal:function(){this.userFullName&&this.idbnNo&&this.citizenshipNo&&this.bankName?this.$refs.withdrawModal.show():this.$bvModal.show("modal-bankDetails")},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.searchTerm="",this.searchAmount="",this.selectedStatus="",this.searchMaxAmount="",this.startDate="",this.endDate="",this.getAllUsers()},closeModal:function(){this.notes="",this.amount="",this.modalVisible=!1},openModal12:function(){this.$bvModal.show("modal-bankDetails")},closeModal12:function(){this.modalVisible=!1},openModal:function(t){this.aadharFront=t.aadhar_card,this.aadharBack=t.back_aadhar_card,this.divinglicense=t.driving_lincense,this.divinglicenseBack=t.back_driving_lincense,this.passportBack=t.back_passport,this.passport=t.passport,this.isModalOpen=!0},vueDocuments:function(t){this.popUpWindow=!0},handleChange:function(t){var e=this.rows.filter((function(e){return e.name===t}));this.rows=e},clickViewUsers:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},updateBankDetails:function(){this.$router.push("/app/profiledata/profile")},clickUnBlock:function(t){var e=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),a).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User  successfully unblocked"),e.getAllUsers(),e.loader=!1)})).catch((function(t){e.loader=!1,e.$toaster.makeToast("warning","Have Server error")}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.form.templateId=t,this.generateIDloader=!1},submit:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",m.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(e){e.apidata.status?(t.$toaster.makeToast("warning",m.a.ERROR_TEMPLATE_MESSAGE),t.submitloader=!1):(t.$toaster.makeToast("success",m.a.ADD_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform())})).catch((function(e){t.$toaster.makeToast("warning",m.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",m.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(e){t.$toaster.makeToast("success",m.a.EDIT_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform()})).catch((function(e){t.$toaster.makeToast("warning",m.a.ERROR_MESSAGE)}))},editTemplate:function(t){var e=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:t}).then((function(t){e.form=t.apidata,e.$bvModal.show("modal-lg")})).catch((function(t){e.$toaster.makeToast("warning",m.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){e.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};e.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),s).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User successfully blocked"),e.getAllUsers(),e.loader=!1)}))}})).catch((function(t){e.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")},getProfileDetails:function(){var t=this;this.UserID=localStorage.getItem("user_id"),this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.UserID)).then((function(e){console.log(e),e.error?(t.loader=!1,t.$toaster.makeToast("warning","Fail to fetch user data")):(t.loginUserName=e.apidata.data.name+" "+e.apidata.data.surname,t.tiktok_username=e.apidata.data.tiktok_username,e.apidata.data.bank&&(t.userFullName=e.apidata.data.bank.full_name,t.citizenshipNo=e.apidata.data.bank.identity_citizenship_no,t.bankName=e.apidata.data.bank.bank_name,t.idbnNo=e.apidata.data.bank.iban),t.loader=!1,t.url="https://"+window.location.host+"/app/sessions/affiliate?u="+t.tiktok_username)})).catch((function(e){t.loader=!1,t.$toaster.makeToast("warning","Server Error")}))}}},b=h,g=(a("f0ed"),a("6aab"),a("2877")),v=Object(g["a"])(b,r,i,!1,null,null,null);e["default"]=v.exports},fce3:function(t,e,a){"use strict";var s=a("d039"),r=a("da84"),i=r.RegExp;t.exports=s((function(){var t=i(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))}}]);