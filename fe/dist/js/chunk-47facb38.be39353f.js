(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47facb38"],{"22ac":function(e,a,t){"use strict";t("64c2")},"25f0":function(e,a,t){"use strict";var s=t("5e77").PROPER,r=t("cb2d"),i=t("825a"),o=t("577e"),n=t("d039"),c=t("90d8"),l="toString",d=RegExp.prototype,u=d[l],p=n((function(){return"/a/b"!==u.call({source:"a",flags:"b"})})),h=s&&u.name!==l;(p||h)&&r(d,l,(function(){var e=i(this),a=o(e.source),t=o(c(e));return"/"+a+"/"+t}),{unsafe:!0})},"64c2":function(e,a,t){},"90d8":function(e,a,t){"use strict";var s=t("c65b"),r=t("1a2d"),i=t("3a9b"),o=t("ad6d"),n=RegExp.prototype;e.exports=function(e){var a=e.flags;return void 0!==a||"flags"in n||r(e,"flags")||!i(n,e)?a:s(o,e)}},"99af":function(e,a,t){"use strict";var s=t("23e7"),r=t("d039"),i=t("e8b5"),o=t("861d"),n=t("7b0b"),c=t("07fa"),l=t("3511"),d=t("8418"),u=t("65f0"),p=t("1dde"),h=t("b622"),m=t("2d00"),f=h("isConcatSpreadable"),g=m>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),b=function(e){if(!o(e))return!1;var a=e[f];return void 0!==a?!!a:i(e)},k=!g||!p("concat");s({target:"Array",proto:!0,arity:1,forced:k},{concat:function(e){var a,t,s,r,i,o=n(this),p=u(o,0),h=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],b(i))for(r=c(i),l(h+r),t=0;t<r;t++,h++)t in i&&d(p,h,i[t]);else l(h+1),d(p,h++,i);return p.length=h,p}})},ad6d:function(e,a,t){"use strict";var s=t("825a");e.exports=function(){var e=s(this),a="";return e.hasIndices&&(a+="d"),e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.dotAll&&(a+="s"),e.unicode&&(a+="u"),e.unicodeSets&&(a+="v"),e.sticky&&(a+="y"),a}},b654:function(e,a){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},eacd:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"main-content"},[a("div",{},[a("div",{staticClass:"card",staticStyle:{"margin-bottom":"1rem"}},[a("Referal")],1),a("b-card",{staticClass:"for-profile",attrs:{title:"Profile"}},[a("b-form",[a("b-row",{staticClass:"my-3"},[a("b-col",{staticClass:"pb-2",attrs:{md:"12"}}),a("div",[a("div",[a("b-col",{staticClass:"pb-2",attrs:{md:"12"}},[a("img",{staticClass:"mb-3",staticStyle:{border:"1px solid #111827",padding:"4px","border-radius":"3%","object-fit":"cover",width:"8rem",height:"8rem","max-width":"100%"},attrs:{src:this.selectedLogo}})]),a("b-col",{attrs:{md:"6"}},[a("input",{staticStyle:{display:"none"},attrs:{id:"chooseLogo",type:"file",name:"image",accept:".png,.jpg,.jpeg"},on:{change:e.setImage}}),e.logoloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.loader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(a){return e.chooseImage()}}},[e._v(" Change Picture")])],1)],1),a("div")])],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",required:"",maxlength:"20",placeholder:"First Namedfdf"},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Last Name","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",maxlength:"20",required:"",placeholder:"Last Name"},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.surName,callback:function(a){e.surName=a},expression:"surName"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6 mb-25"}},[a("b-form-group",{attrs:{label:"Tiktok Name","label-for":"input-3"}},[a("b-form-input",{attrs:{type:"text",disabled:"",required:"",placeholder:"Enter tictoc user name"},model:{value:e.tictocName,callback:function(a){e.tictocName=a},expression:"tictocName"}})],1)],1),a("b-col",{attrs:{md:"6 mb-25"}},[a("b-form-group",{attrs:{label:"Phone Number","label-for":"input-3"}},[a("b-form-input",{attrs:{type:"number",disabled:"",required:"",placeholder:"Enter phone number"},on:{keydown:e.checkLength},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[e.updateloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.updateloader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:e.updateUser}},[e._v("Update")])],1)],1)],1)],1),a("b-card",{staticClass:"for-profile",staticStyle:{display:"none"},attrs:{title:"Bank Account"}},[a("b-form",[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Bank Account No","label-for":"bank-account-no"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Bank Account No"},model:{value:e.form.bankAccountNo,callback:function(a){e.$set(e.form,"bankAccountNo",a)},expression:"form.bankAccountNo"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"IFSC Code","label-for":"ifsc-code"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"IFSC Code"},model:{value:e.form.ifscCode,callback:function(a){e.$set(e.form,"ifscCode",a)},expression:"form.ifscCode"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Bank Name","label-for":"bank-name"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Bank Name"},model:{value:e.form.bankName,callback:function(a){e.$set(e.form,"bankName",a)},expression:"form.bankName"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"PAN Card No","label-for":"pan-card-no"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"PAN Card No"},model:{value:e.form.panCardNo,callback:function(a){e.$set(e.form,"panCardNo",a)},expression:"form.panCardNo"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[e.updateloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.updateloader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:e.updateUser}},[e._v(" Update ")])],1)],1)],1)],1)],1),e.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e()])},r=[],i=t("c7eb"),o=t("1da1"),n=t("ade3"),c=(t("99af"),t("14d9"),t("b0c0"),t("d3b7"),t("25f0"),t("b654")),l=t.n(c),d=t("f64f"),u={metaInfo:{title:"Profile"},components:{Referal:d["a"]},data:function(){return Object(n["a"])({referralLink:"",clickOtp:!1,verified:null,userName:"",surName:"",tictocName:"",phoneNumber:"",isOtp:null,imgSrc:null,aadharFrontCheckbox:!1,aadharBackCheckbox:!1,drivingLincenseBackCheckbox:!1,passportFrontCheckbox:!1,passportBackCheckbox:!1,drivingLincenseFrontCheckbox:!1,selectedImage:!1,passportImage:!1,passportImageBack:!1,drivinglincenseImage:!1,drivinglincenseImageBack:!1,forOtp:"",updateloader:!1,logoloader:!1,docloader:!1,loader:!1,selectedLogo:"https://tiktok.algofolks.com/Screenshot%20from%202024-06-10%2017-46-41.png",form:{fName:"",lName:"",address:"",url:"",city:"",state:"",pin_code:""},back_aadhar_card:"",image:"",aadhar_card:"",driving_lincense:"",back_driving_lincense:"",haspassport:"True",passport:"",back_passport:"",emailUser:"",phoneUser:"",email:"",isLoading:!1,showMail:!1,isGetotpHide:!1,newpassword:"",oldpassword:"",confirmpassword:"",submitloader:!1,id:null,user_id:"",role:""},"imgSrc","")},created:function(){this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.user_id&&this.getProfileDetails()},methods:{getProfileDetails:function(){var e=this;this.isLoading=!0,this.$apiService.getCall("auth/user/".concat(this.user_id)).then((function(a){e.userName=a.apidata.data.name,e.surName=a.apidata.data.surname,e.tictocName=a.apidata.data.tiktok_username,e.phoneNumber=a.apidata.data.contact_number,a.apidata.data.image&&(e.selectedLogo=a.apidata.data.image),e.isLoading=!1})).catch((function(a){e.isLoading=!1}))},copyReferralLink:function(){var e=document.createElement("textarea");e.value=this.referralLink,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$toaster.makeToast("success","Referral link copied to clipboard!")},viaEmail:function(){this.showMail=!0,this.clearModalForm()},clickOtpVarified:function(){var e=this;this.clickOtp=!0,this.loader=!0,this.$apiService.getCall("phone/verify/?userId=".concat(this.id,"&phone=").concat(this.phoneUser)).then((function(a){a.apidata.isError||(e.$toaster.makeToast("success","Otp sent successfully"),e.loader=!1)})).catch((function(a){e.loader=!1,e.$toaster.makeToast("warning","Some think error")}))},clickEmailVarified:function(){var e=this;this.loader=!0;var a={email:this.emailUser};this.$apiService.postCall("email/verify/",a).then((function(a){a.apidata.isError||(e.$toaster.makeToast("success","Email verification link sent successfully"),e.loader=!1)})).catch((function(a){e.loader=!1,e.$toaster.makeToast("warning","Some think error")}))},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},viaOldPassword:function(){this.showMail=!1},setPassport:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.passport=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Passport front has been uploaded successfully"),a.passportFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Passport back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.passportImage=r.result},r.readAsDataURL(s)}else this.passportImage=null,this.passportFrontCheckbox=!1},setPassportBack:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_passport=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Passport back has been uploaded successfully"),a.passportBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Passport back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.passportImageBack=r.result},r.readAsDataURL(s)}else this.passportImageBack=null,this.passportBackCheckbox=!1},setDrivingLincense:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.driving_lincense=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Driving license front has been uploaded successfully"),a.drivingLincenseFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Driving license back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.drivinglincenseImage=r.result},r.readAsDataURL(s)}else this.drivinglincenseImage=null,this.drivingLincenseFrontCheckbox=!1},setDrivingLincenseBack:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_driving_lincense=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Driving lincense back has been uploaded successfully"),a.drivingLincenseBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Driving lincense back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.drivinglincenseImageBack=r.result},r.readAsDataURL(s)}else this.drivinglincenseImageBack=null,this.drivingLincenseBackCheckbox=!1},setAadhar:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.aadhar_card=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Aadhar front has been uploaded successfully"),a.aadharFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Aadhar front has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.selectedImage=r.result},r.readAsDataURL(s)}else this.selectedImage=null,this.aadharFrontCheckbox=!1},chooseAadhar:function(){var e=document.getElementById("aadhar");e.files.length>0?this.aadharFrontCheckbox=!0:this.aadharFrontCheckbox=!1,e.click()},setAadharback:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_aadhar_card=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Aadhar back has been uploaded successfully"),a.aadharBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Aadhar back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.selectedImageBack=r.result},r.readAsDataURL(s)}else this.selectedImageBack=null,this.aadharBackCheckbox=!1},setImage:function(e){var a=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var s,r,o;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.logoloader=!0,s=e.target.files[0],t.prev=2,r=new FormData,s&&r.append("image",s),t.next=7,new Promise((function(e,t){a.$apiService.postCall("util/image/",r).then((function(a){return e(a)})).catch((function(e){return t(e)}))}));case 7:if(o=t.sent,!o.error){t.next=13;break}a.logoloader=!1,a.$toaster.makeToast("warning",o.message),t.next=18;break;case 13:return a.logoloader=!1,a.selectedLogo=o.apidata.url,t.next=17,a.setImageAfter();case 17:a.$toaster.makeToast("success","Profile update successfully");case 18:t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](2),a.logoloader=!1,a.$toaster.makeToast("warning","Error: Server Error");case 24:case"end":return t.stop()}}),t,null,[[2,20]])})))()},setImageAfter:function(e){var a=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var t,s;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.logoloader=!0,e.prev=1,t={_id:a.user_id,image:a.selectedLogo},e.next=5,new Promise((function(e,s){a.$apiService.postCall("auth/member-update-profile",t).then((function(a){return e(a)})).catch((function(e){return s(e)}))}));case 5:s=e.sent,s.error?(a.logoloader=!1,a.$toaster.makeToast("warning",s.message)):a.logoloader=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),a.logoloader=!1,a.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},chooseAadharBack:function(){var e=document.getElementById("aadharback");e.files.length>0?this.aadharBackCheckbox=!0:this.aadharBackCheckbox=!1,e.click()},chooseDrivingLincenseBack:function(){var e=document.getElementById("drivinglincenseback");e.files.length>0?this.drivingLincenseBackCheckbox=!0:this.drivingLincenseBackCheckbox=!1,e.click()},chooseDrivingLincense:function(){var e=document.getElementById("drivinglincense");e.files.length>0?this.drivingLincenseFrontCheckbox=!0:this.drivingLincenseFrontCheckbox=!1,e.click()},choosePassport:function(){var e=document.getElementById("passport");e.files.length>0?this.passportFrontCheckbox=!0:this.passportFrontCheckbox=!1,e.click()},choosePassportBack:function(){var e=document.getElementById("passportback");e.files.length>0?this.passportBackCheckbox=!0:this.passportBackCheckbox=!1,e.click()},chooseImage:function(){document.getElementById("chooseLogo").click()},updateUser:function(){var e=this;this.updateloader=!0;var a={};if(this.userName&&(a.name=this.userName),this.surName&&(a.surname=this.surName),this.phoneNumber&&(a.contact_number=this.phoneNumber),this.tictocName&&(a.tiktok_username=this.tictocName),a._id=this.user_id,!this.userName&&!this.surName)return this.$toaster.makeToast("warning",l.a.VALIDATION_MESSAGE),void(this.updateloader=!1);this.$apiService.postCall("auth/member-update",a).then((function(a){e.updateloader=!1,e.$toaster.makeToast("success","Details updated successfully")})).catch((function(a){e.updateloader=!1,e.$toaster.makeToast("warning","Details update error")}))},updateDocuments:function(){var e=this;this.docloader=!0;var a=new FormData;null!=this.selectedImage&&a.append("aadhar_card",this.aadhar_card||this.selectedImage),null!=this.drivinglincenseImage&&a.append("driving_lincense",this.driving_lincense||this.drivinglincenseImage),a.append("haspassport",this.haspassport),null!=this.passportImage&&a.append("passport",this.passport||this.passportImage),null!=this.selectedImageBack&&a.append("back_aadhar_card",this.back_aadhar_card||this.selectedImageBack),null!=this.drivinglincenseImageBack&&a.append("back_driving_lincense",this.back_driving_lincense||this.drivinglincenseImageBack),null!=this.passportImageBack&&a.append("back_passport",this.back_passport||this.passportImageBack),a.has("aadhar_card")&&a.has("back_aadhar_card")&&a.has("driving_lincense")&&a.has("back_driving_lincense")?this.$apiService.putCall("account/updateDocumentAPIView/".concat(this.id),a).then((function(t){!t.isError&&a?(e.docloader=!1,e.$toaster.makeToast("success","Documents updated successfully")):(e.docloader=!1,e.$toaster.makeToast("warning","Documents updated failed"))})).catch((function(a){e.docloader=!1,e.$toaster.makeToast("warning","Documents updated failed")})):(this.docloader=!1,this.$toaster.makeToast("warning","Aadhar Card,Driving Lincense is mandatory "))},changePassword:function(){var e=this;if(this.submitloader=!0,this.newpassword&&this.oldpassword&&this.confirmpassword){if(this.newpassword!=this.confirmpassword)return this.$toaster.makeToast("warning",l.a.VALIDATION_ERROR),void(this.submitloader=!1);if(this.newpassword.length<5)return this.$toaster.makeToast("warning",l.a.PASSWORDNOT_OK),void(this.submitloader=!1);if(this.confirmpassword.length<5)return this.$toaster.makeToast("warning",l.a.PASSWORDNOT_OK),void(this.submitloader=!1);var a={newpassword:this.newpassword,oldpassword:this.oldpassword,confirmpassword:this.confirmpassword};this.$apiService.postCall("change-password",a).then((function(a){if(a.error)return e.$toaster.makeToast("warning",l.a.MISMATCH_ERROR),void(e.submitloader=!1);e.$toaster.makeToast("success",l.a.UPDATE_MESSAGE),e.clearModalForm(),e.$bvModal.hide("modal-center"),e.submitloader=!1})).catch((function(a){e.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),e.submitloader=!1}))}else this.$toaster.makeToast("warning",l.a.VALIDATION_MESSAGE),this.submitloader=!1},clearModalForm:function(){this.newpassword="",this.confirmpassword="",this.oldpassword=""},reset:function(){var e=this;this.submitloader=!0,this.$apiService.postCall("forget-password",{email:this.form.email}).then((function(a){a.error?(e.notFound=!0,e.$toaster.makeToast("warning",l.a.NOT_FOUND),e.submitloader=!1):(e.$toaster.makeToast("success",l.a.EMAIL_VERIFICATION_MESSAGE),e.notFound=!1,e.submitloader=!1,e.$bvModal.hide("modal-center"),setTimeout((function(){e.$router.push("/app/sessions/signIn")}),3e3))})).catch((function(a){e.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),e.submitloader=!1}))}}},p=u,h=(t("22ac"),t("2877")),m=Object(h["a"])(p,s,r,!1,null,"8c06340e",null);a["default"]=m.exports},f64f:function(e,a,t){"use strict";var s=function(){var e=this,a=e._self._c;return a("b-col",{attrs:{sm:"12",md:"12",xl:"12",lg:"12"}},[a("div",[a("div",{staticClass:"d-flex align-items-end row"},[a("div",{staticClass:"col-7"},[a("div",{staticClass:"card-body text-nowrap"},[a("h5",{staticClass:"card-title mb-0"},[e._v(" Congratulations "+e._s(this.loginUserName)+"! 🎉 ")]),a("p",[e._v(" Thank you for being awesome and sharing our platform with others! Below is your unique referral link: ")]),a("div",{staticClass:"bg-white text-gray d-flex w-59",staticStyle:{"overflow-wrap":"anywhere"},attrs:{"data-v-0307aa70":""}},[a("a",{staticClass:"referral-link align-self-center",attrs:{"data-v-0307aa70":"",href:e.url,target:"_blank"}},[e._v(" "+e._s(e.url))]),a("p",{staticClass:"px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end",on:{click:e.copyUrl}},[a("i",{staticClass:"fa fa-clone",attrs:{"aria-hidden":"true"}})])])])]),a("div",{staticClass:"col-5 text-center text-sm-left d-none"},[a("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[a("img",{attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])])])])},r=[],i=(t("b0c0"),{data:function(){return{tiktok_username:"",loginUserName:"",url:""}},mounted:function(){},created:function(){this.userId=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.getProfileDetails()},methods:{getProfileDetails:function(){var e=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(a){console.log(a),a.error?(e.loader=!1,e.$toaster.makeToast("warning","Fail to fetch user data")):(e.loginUserName=a.apidata.data.name+" "+a.apidata.data.surname,e.tiktok_username=a.apidata.data.tiktok_username,e.loader=!1,e.url="https://"+window.location.host+"/app/sessions/affiliate?u="+e.tiktok_username)})).catch((function(a){e.loader=!1,e.$toaster.makeToast("warning","Server Error")}))},copyUrl:function(){var e=this;navigator.clipboard.writeText(this.url).then((function(){e.$emit("notify","URL copied to clipboard!")})).catch((function(e){console.error("Could not copy text: ",e)}))}}}),o=i,n=t("2877"),c=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=c.exports}}]);