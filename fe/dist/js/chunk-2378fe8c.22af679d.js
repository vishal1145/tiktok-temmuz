(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2378fe8c"],{"0be7":function(e,t,a){},1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},"25f0":function(e,t,a){"use strict";var r=a("5e77").PROPER,n=a("cb2d"),s=a("825a"),i=a("577e"),o=a("d039"),u=a("90d8"),l="toString",c=RegExp.prototype,d=c[l],f=o((function(){return"/a/b"!==d.call({source:"a",flags:"b"})})),p=r&&d.name!==l;(f||p)&&n(c,l,(function(){var e=s(this),t=i(e.source),a=i(u(e));return"/"+t+"/"+a}),{unsafe:!0})},2613:function(e,t,a){e.exports=a.p+"img/photo-long-3.f4e38da9.jpg"},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=n},"2ca0":function(e,t,a){"use strict";var r=a("23e7"),n=a("4625"),s=a("06cf").f,i=a("50c4"),o=a("577e"),u=a("5a34"),l=a("1d80"),c=a("ab13"),d=a("c430"),f=n("".slice),p=Math.min,m=c("startsWith"),b=!d&&!m&&!!function(){var e=s(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!b&&!m},{startsWith:function(e){var t=o(l(this));u(e);var a=i(p(arguments.length>1?arguments[1]:void 0,t.length)),r=o(e);return f(t,a,a+r.length)===r}})},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var e=this,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,a){return t&&a.apply(e,r)}),!0)}))};t.default=n},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("numeric",/^[0-9]*$/);t.default=n},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=n},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,s=(0,r.regex)("email",n);t.default=s},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=n},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=n},6417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"not"},(function(t,a){return!(0,r.req)(t)||!e.call(this,t,a)}))};t.default=n},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,r.regex)("url",n);t.default=s},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}});var r=n(a("8750"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===s(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var o=function(e){return Array.isArray(e)?e.length:"object"===s(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]};t.ref=u;var l=function(e,t){return(0,r.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=l},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,n=r;t.default=n},8791:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar for-nav container-fluid",on:{click:e.openPopup}},[t("div",{staticClass:"container-fluid d-flex justify-content-between"},[t("img",{staticClass:"d-inline-block align-text-top",attrs:{src:e.logo,alt:"",width:"104",height:"35"}})])]),t("div",{staticClass:"main-div d-flex flex-row justify-content-between overflow-hidden gifBody"},[t("div",{staticClass:"row pt-2"},[t("b-col",{staticClass:"col-md-4 pw px-0",staticStyle:{"background-color":"rgb(243, 244, 246)","border-radius":"8px"},attrs:{lg:"4",xl:"4",mt:"3"}},[t("div",{},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"pb-3"},[t("h2",{staticClass:"my-0"},[e._v("Chat with us")]),t("p",{staticClass:"mb-2"},[e._v(" Would you like to get live support from our team? ")]),t("p",{staticClass:"my-1"},[t("span",{staticStyle:{color:"gray !important"}},[t("i",{staticClass:"fa fa-envelope-o pr-1",attrs:{"aria-hidden":"true"}})]),t("a",{staticStyle:{color:"gray !important"},attrs:{href:"mailto:info@temmuzajans.com"}},[t("strong",[e._v(" Send an email")])])]),t("p",[t("span",[t("i",{staticClass:"fa fa-whatsapp pr-2",attrs:{"aria-hidden":"true"}})]),t("a",{staticStyle:{color:"gray !important"},attrs:{href:"https://wa.me/905310133151"}},[t("strong",[e._v("Send a WhatsApp message")])])])]),t("div",{staticClass:"pb-3"},[t("h2",{staticClass:"my-0"},[e._v("Call us")]),t("p",{staticClass:"my-1"},[e._v(" You can call us every weekday between 10:00-17:00 ")]),t("p",[t("span",[t("i",{staticClass:"fa fa-phone pr-2",attrs:{"aria-hidden":"true"}})]),t("a",{staticStyle:{color:"gray !important"},attrs:{href:"tel:+905310133151"}},[t("strong",[e._v("+90 (531) 013 3151")])])])]),t("div",{staticClass:"pb-3"},[t("h2",{staticClass:"my-0"},[e._v("Visit us")]),t("p",{},[e._v(" Come and meet us face-to-face every weekday between 10:00-17:00 ")]),t("address",[t("div",[t("div",{staticClass:"d-flex flex-row align-items-baseline",staticStyle:{gap:"8px"}},[t("div",[t("span",[t("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}})])]),t("div",[t("p",{staticClass:"m-0"},[t("strong",[e._v(" Gazi Mh. Fatih Sultan Mehmet Blvd.")])]),t("p",[e._v("Yenimahalle Ankara")])])]),t("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"8px"}},[t("div",[t("span",[t("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}})])]),t("div",[t("p",{staticClass:"m-0"},[t("strong",[e._v(" Gazi Mh. Fatih Sultan Mehmet Blvd.")])]),t("p",[e._v("Yenimahalle Ankara")])])])])])])])])]),t("b-col",{staticClass:"col-md-8 pw",attrs:{lg:"8",xl:"8",mt:"3"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("h2",[e._v("Let's get started!")]),t("p",[e._v(" If you are a TikTok broadcaster or want to become one, you can attract the attention of millions of people with Temmuz Agency and increase your earnings up to ten times. ")]),t("div",{staticClass:"d-flex flex-row"},[t("div",{staticClass:"w-50"},[t("div",{staticClass:"mb-3 pr-2"},[t("label",{staticClass:"form-label",attrs:{for:"firstName"}},[e._v("First Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userFirstName,expression:"userFirstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName"},domProps:{value:e.userFirstName},on:{input:function(t){t.target.composing||(e.userFirstName=t.target.value)}}})]),t("div",{staticClass:"mb-3 pr-2"},[t("label",{staticClass:"form-label",attrs:{for:"lastName"}},[e._v("Last Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userLastName,expression:"userLastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName"},domProps:{value:e.userLastName},on:{input:function(t){t.target.composing||(e.userLastName=t.target.value)}}})])]),t("div",{staticClass:"w-50"},[t("div",{staticClass:"mb-3 pl-2"},[t("label",{staticClass:"form-label",attrs:{for:"tiktokName"}},[e._v("Tiktok User Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.tiktokName,expression:"tiktokName"}],staticClass:"form-control",attrs:{type:"text",id:"tiktokName"},domProps:{value:e.tiktokName},on:{input:function(t){t.target.composing||(e.tiktokName=t.target.value)}}}),t("p",{staticClass:"text-danger"},[e._v(e._s(e.showErrorText))])]),t("div",{staticClass:"mb-3 pl-2"},[t("label",{staticClass:"form-label",attrs:{for:"phoneNumber"}},[e._v("Phone Number")]),t("div",{staticClass:"d-flex phone-input"},[t("input",{staticClass:"form-control",attrs:{id:"phone",type:"tel",name:"phone"}})])]),t("div",{staticClass:"mb-3 pl-2 d-none"},[t("label",{staticClass:"form-label",attrs:{for:"tiktokCode"}},[e._v("TikTok Agency Code")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.centerCode,expression:"centerCode"}],staticClass:"form-control",attrs:{type:"number",id:"tiktokCode"},domProps:{value:e.centerCode},on:{keydown:e.checkLengthCode,input:function(t){t.target.composing||(e.centerCode=t.target.value)}}})]),t("div",{staticClass:"justify-content-between d-none"},[t("div",{staticClass:"mb-3 w-50"},[t("label",{staticClass:"form-label",attrs:{for:"img-btn"}},[e._v("Select Image")]),t("b-form-group",{attrs:{"label-for":"input-images"}},[t("b-form-file",{attrs:{placeholder:"Choose image","drop-placeholder":"Drop files here...",accept:".png,.jpg,.jpeg"},on:{input:e.handleImageSelection},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}})],1)],1),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e(),t("b-col",{staticClass:"justify-content-end d-flex align-items-center pb-2",attrs:{md:"6"}},[e.uplodedImages?t("img",{staticClass:"img-fluid",attrs:{src:this.uplodedImages,alt:"",height:"50",width:"50"}}):e._e()])],1)])]),t("div",{staticClass:"form-check mb-3"},[t("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"agree"}}),t("label",{staticClass:"form-check-label",attrs:{for:"agree"}},[e._v(" Click for the Information Text about Personal Data. By applying, you accept the terms of use. ")])]),t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.addPublisher()}}},[e._v(" Complete Application ")])])])])],1)]),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e()])},n=[],s=a("c7eb"),i=a("1da1"),o=a("5530"),u=(a("14d9"),a("fb6a"),a("b0c0"),a("e9c4"),a("d3b7"),a("25f0"),a("2ca0"),a("b5ae")),l=a("2f62"),c=a("b654"),d=a.n(c),f={metaInfo:{title:"SignUp"},data:function(){return{fName:"",email:"",bgImage:a("f7bf"),logo:a("f5bc"),signInImage:a("2613"),password:"",phone:"",showErrorText:"",repeatPassword:"",submitStatus:null,alertShow:!1,isLoading:!1,showPassword:!1,imgLoader:!1,loader:!1,userId:"",userFirstName:"",userLastName:"",tiktokName:"",phoneNumber:"",centerCode:"",uplodedImages:"",images:null,tikTokUser:"",memberTikTokUser:"",canUpdateData:"",phoneInput:null}},validations:{phone:{required:u["required"],minLength:Object(u["minLength"])(10)},password:{required:u["required"],minLength:Object(u["minLength"])(5)}},computed:Object(o["a"])({},Object(l["c"])(["loggedInUser","loading","error"])),created:function(){this.tikTokUser=this.$route.query.name,this.memberTikTokUser=this.$route.query.u,this.getMemberTikTokUser()},mounted:function(){var e=document.querySelector("#phone");this.phoneInput=window.intlTelInput(e,{initialCountry:"in",utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"})},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["signUserUp"])),{},{handleImageSelection:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.imgLoader=!0,t.prev=1,a=new FormData,e.images&&a.append("image",e.images),t.next=6,new Promise((function(t,r){e.$apiService.postCall("util/image/",a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 6:r=t.sent,r.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",r.message)):(e.imgLoader=!1,e.uplodedImages=r.apidata.url,e.$toaster.makeToast("success","Image upload successfully")),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),e.imgLoader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getMemberTikTokUser:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,e.$apiService.getCall("publisher/get-member?name=".concat(e.memberTikTokUser));case 4:a=t.sent,!1===a.isError?a.apidata.data.length>0?(e.userId=a.apidata.data[0]._id,e.loader=!1):(e.loader=!1,e.$toaster.makeToast("warning","Empty Data")):(e.loader=!1,e.$toaster.makeToast("warning","Failed to fetch tiktok user data")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$toaster.makeToast("error","Error fetching tiktok data");case 11:return t.prev=11,e.loader=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},getTikTokUser:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,e.$apiService.getCall("publisher/get-creator?name=".concat(e.tikTokUser));case 4:a=t.sent,!1===a.isError?(e.centerCode=a.apidata.data[0].agency_center_code,e.tiktokName=a.apidata.data[0].tiktok_username,e.userId=a.apidata.data[0]._id,e.loader=!1):(e.loader=!1,e.$toaster.makeToast("warning","Failed to fetch tiktok user data")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$toaster.makeToast("error","Error fetching tiktok data");case 11:return t.prev=11,e.loader=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},canUpdate:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={tiktok_username:e.tiktokName,userId:e.userId},t.next=4,e.$apiService.postCall("publisher/can-update",a);case 4:r=t.sent,response.error?(e.$toaster.makeToast("error","Error update"),e.loader=!1):(e.loader=!1,e.canUpdateData=r.apidata.canUpdate),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$toaster.makeToast("error","Error server Error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addPublisher:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r,n,i,o;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.phoneInput.isValidNumber()){t.next=3;break}return e.$toaster.makeToast("warning","Invalid number"),t.abrupt("return");case 3:if(e.phoneNumber=e.phoneInput.getNumber(),e.phoneNumber.startsWith("+")&&(e.phoneNumber=e.phoneNumber.slice(1)),e.phoneNumber&&e.userFirstName&&e.userLastName&&e.tiktokName){t.next=9;break}e.$toaster.makeToast("warning","All fields are required"),t.next=36;break;case 9:return e.loader=!0,a={tiktok_username:e.tiktokName,userId:e.userId},t.next=13,e.$apiService.postCall("publisher/can-update",a);case 13:if(r=t.sent,n=r.apidata.canUpdate,1!=n){t.next=32;break}return t.prev=16,i={first_name:e.userFirstName,last_name:e.userLastName,contact_number:e.phoneNumber,agency_center_code:e.centerCode,tiktok_username:e.tiktokName,icon:e.uplodedImages||null},t.next=20,new Promise((function(t,a){e.$apiService.postCall("publisher/update/".concat(r.apidata.result._id),i).then((function(e){return t(e)})).catch((function(e){return a(e)}))}));case 20:return o=t.sent,t.next=23,e.addStatus(r.apidata.result._id);case 23:o.error?(e.loader=!1,e.$toaster.makeToast("warning",o.message)):(e.$toaster.makeToast("success","Your data has been recorded, and you will be notified shortly."),e.$router.push("/app/sessions/signIn"),e.loader=!1,e.userFirstName="",e.userLastName="",e.tiktokName="",e.centerCode="",e.phoneNumber="",e.uplodedImages=null),t.next=30;break;case 26:t.prev=26,t.t0=t["catch"](16),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 30:t.next=36;break;case 32:e.loader=!1,e.showErrorText="Keep the same username as TikTok.",setTimeout((function(){e.showErrorText=""}),1e4),e.$toaster.makeToast("warning","you are not allowed to fill the application");case 36:case"end":return t.stop()}}),t,null,[[16,26]])})))()},addStatus:function(e){var t=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r,n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r={status:"Waiting Approval"},a.next=4,new Promise((function(a,n){t.$apiService.postCall("publisher/update-publisher-status/".concat(e),r).then((function(e){return a(e)})).catch((function(e){return n(e)}))}));case 4:n=a.sent,n.error&&(t.loader=!1,t.$toaster.makeToast("warning",n.message)),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),t.loader=!1,t.$toaster.makeToast("warning","Error: Server Error");case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},checkLengthCode:function(e){this.centerCode.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},submit:function(){var e=this;if(this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR";else{this.isLoading=!0;var t={email:this.email,password:this.password,phone:this.phone};this.$apiService.postCall("account/",t).then((function(t){if(!t.error){setTimeout((function(){e.$router.push("/")}),2e3),e.$toaster.makeToast("success","User successfully registered, Verification link sent to your mail"),localStorage.setItem("accesstoken",t.apidata.access_token);var a={data:t.apidata.data};return localStorage.setItem("userInfo",JSON.stringify(a)),void(e.isLoading=!1)}return"user with this email already exists."==t.error.response.data.email?(e.$toaster.makeToast("warning","User email already exists"),void(e.isLoading=!1)):"user with this phone already exists."==t.error.response.data.phone?(e.$toaster.makeToast("warning","User phone already exists"),void(e.isLoading=!1)):void 0})).catch((function(t){e.isLoading=!1,localStorage.removeItem("userInfo"),e.$store.commit("setError",{message:t}),e.$toaster.makeToast("warning",d.a.ERROR_MESSAGE)}))}},openPopup:function(){this.$bvModal.show("modal-attachment")},togglePasswordVisibility:function(){this.showPassword=!this.showPassword},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},makeToastTwo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Created Account",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},inputSubmit:function(){}})},p=f,m=(a("e594"),a("2877")),b=Object(m["a"])(p,r,n,!1,null,null,null);t["default"]=b.exports},"90d8":function(e,t,a){"use strict";var r=a("c65b"),n=a("1a2d"),s=a("3a9b"),i=a("ad6d"),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||n(e,"flags")||!s(o,e)?t:r(i,e)}},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(s)}))};t.default=n;var s=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=n},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},b5ae:function(e,t,a){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}});var n=T(a("6235")),s=T(a("3a54")),i=T(a("45b8")),o=T(a("ec11")),u=T(a("5d75")),l=T(a("c99d")),c=T(a("91d3")),d=T(a("2a12")),f=T(a("5db3")),p=T(a("d4f4")),m=T(a("aa82")),b=T(a("e652")),v=T(a("b6cb")),h=T(a("772d")),g=T(a("d294")),y=T(a("3360")),_=T(a("6417")),k=T(a("eb66")),w=T(a("46bc")),E=T(a("1331")),S=T(a("c301")),x=P(a("78ef"));function O(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=s?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}function T(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,a){return t===(0,r.ref)(e,this,a)}))};t.default=n},c301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(s)}));t.default=n;var s=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,a){"use strict";(function(e){function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},n=function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))},s=r.vuelidate?r.vuelidate.withParams:n;t.withParams=s}).call(this,a("c8ba"))},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var e=this,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,a){return t||a.apply(e,r)}),!1)}))};t.default=n},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=n},e594:function(e,t,a){"use strict";a("0be7")},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=n},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=n},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a}))};t.default=n},f5bc:function(e,t,a){e.exports=a.p+"img/zoombacar.770a9b88.png"},f7bf:function(e,t){e.exports="data:image/png;base64,"}}]);