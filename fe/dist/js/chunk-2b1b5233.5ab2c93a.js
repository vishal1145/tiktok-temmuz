(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b1b5233"],{"00b4":function(e,a,t){"use strict";t("ac1f");var s=t("23e7"),r=t("c65b"),i=t("e330"),o=t("1626"),n=t("861d"),c=function(){var e=!1,a=/[ac]/;return a.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===a.test("abc")&&e}(),l=TypeError,d=i(/./.test);s({target:"RegExp",proto:!0,forced:!c},{test:function(e){var a=this.exec;if(!o(a))return d(this,e);var t=r(a,this,e);if(null!==t&&!n(t))throw new l("RegExp exec method returned something other than an Object or null");return!!t}})},"107c":function(e,a,t){var s=t("d039"),r=t("da84"),i=r.RegExp;e.exports=s((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2514:function(e,a,t){"use strict";t("3b05")},"3b05":function(e,a,t){},9263:function(e,a,t){"use strict";var s=t("c65b"),r=t("e330"),i=t("577e"),o=t("ad6d"),n=t("9f7f"),c=t("5692"),l=t("7c73"),d=t("69f3").get,u=t("fce3"),p=t("107c"),h=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,m=f,g=r("".charAt),b=r("".indexOf),k=r("".replace),v=r("".slice),E=function(){var e=/a/,a=/b*/g;return s(f,e,"a"),s(f,a,"a"),0!==e.lastIndex||0!==a.lastIndex}(),I=n.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],S=E||_||I||u||p;S&&(m=function(e){var a,t,r,n,c,u,p,S=this,A=d(S),y=i(e),T=A.raw;if(T)return T.lastIndex=S.lastIndex,a=s(m,T,y),S.lastIndex=T.lastIndex,a;var w=A.groups,x=I&&S.sticky,C=s(o,S),D=S.source,L=0,R=y;if(x&&(C=k(C,"y",""),-1===b(C,"g")&&(C+="g"),R=v(y,S.lastIndex),S.lastIndex>0&&(!S.multiline||S.multiline&&"\n"!==g(y,S.lastIndex-1))&&(D="(?: "+D+")",R=" "+R,L++),t=new RegExp("^(?:"+D+")",C)),_&&(t=new RegExp("^"+D+"$(?!\\s)",C)),E&&(r=S.lastIndex),n=s(f,x?t:S,R),x?n?(n.input=v(n.input,L),n[0]=v(n[0],L),n.index=S.lastIndex,S.lastIndex+=n[0].length):S.lastIndex=0:E&&n&&(S.lastIndex=S.global?n.index+n[0].length:r),_&&n&&n.length>1&&s(h,n[0],t,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n&&w)for(n.groups=u=l(null),c=0;c<w.length;c++)p=w[c],u[p[0]]=n[p[1]];return n}),e.exports=m},"99af":function(e,a,t){"use strict";var s=t("23e7"),r=t("d039"),i=t("e8b5"),o=t("861d"),n=t("7b0b"),c=t("07fa"),l=t("3511"),d=t("8418"),u=t("65f0"),p=t("1dde"),h=t("b622"),f=t("2d00"),m=h("isConcatSpreadable"),g=f>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),b=p("concat"),k=function(e){if(!o(e))return!1;var a=e[m];return void 0!==a?!!a:i(e)},v=!g||!b;s({target:"Array",proto:!0,arity:1,forced:v},{concat:function(e){var a,t,s,r,i,o=n(this),p=u(o,0),h=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],k(i))for(r=c(i),l(h+r),t=0;t<r;t++,h++)t in i&&d(p,h,i[t]);else l(h+1),d(p,h++,i);return p.length=h,p}})},"9f7f":function(e,a,t){var s=t("d039"),r=t("da84"),i=r.RegExp,o=s((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n=o||s((function(){return!i("a","y").sticky})),c=o||s((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:n,UNSUPPORTED_Y:o}},ac1f:function(e,a,t){"use strict";var s=t("23e7"),r=t("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b654:function(e,a){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},eacd:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"main-content"},[a("b-row",[a("b-col",{attrs:{md:"9"}},[a("div",{staticClass:"font-weight-bold fa-2x text-light"},[e._v("Profile")])])],1),a("hr",{staticClass:"mt-1"}),a("div",{staticClass:"main-div"},[a("b-card",{staticClass:"for-profile",attrs:{title:"Profile"}},[a("b-form",[a("b-row",{staticClass:"my-3"},[a("b-col",{attrs:{md:"12"}},[e._v(" Basic Deatils: ")]),a("div",[a("div",[a("b-col",{attrs:{md:"12"}},[a("img",{staticClass:"mb-3",staticStyle:{border:"1px solid #111827",padding:"4px","border-radius":"3%","object-fit":"fill",width:"8rem",height:"8rem"},attrs:{id:"logo",src:e.selectedLogo}})]),a("b-col",{attrs:{md:"6"}},[a("input",{staticStyle:{display:"none"},attrs:{id:"chooseLogo",type:"file",name:"image",accept:".png,.jpg,.jpeg"},on:{change:e.setImage}}),e.logoloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.logoloader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(a){return e.chooseImage()}}},[e._v(" Change Picture")])],1)],1),a("div")])],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"First Name",formatter:e.formatYear},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.form.fName,callback:function(a){e.$set(e.form,"fName",a)},expression:"form.fName"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Last Name","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Last Name",formatter:e.formatYear},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.form.lName,callback:function(a){e.$set(e.form,"lName",a)},expression:"form.lName"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6 mb-25"}},[a("b-form-group",{attrs:{label:" Email Address","label-for":"input-3"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Enter Address"},model:{value:e.form.address,callback:function(a){e.$set(e.form,"address",a)},expression:"form.address"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[e.updateloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.updateloader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(a){return e.updateUser()}}},[e._v("Update")])],1)],1)],1)],1),a("b-card",{staticClass:"for-profile",attrs:{title:"Document"}},[a("b-form",[a("div",[a("div",[a("b-col",{attrs:{md:"12"}})],1),a("div")]),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Bank Account No","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Bank Account No",formatter:e.formatYear},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.form.fName,callback:function(a){e.$set(e.form,"fName",a)},expression:"form.fName"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Pan Card No","label-for":"input-1"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Pan Card No",formatter:e.formatYear},on:{keypress:function(a){return e.isLetter(a)}},model:{value:e.form.lName,callback:function(a){e.$set(e.form,"lName",a)},expression:"form.lName"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6 mb-25"}},[a("b-form-group",{attrs:{label:"Paypal No","label-for":"input-3"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:"Paypal No"},model:{value:e.form.address,callback:function(a){e.$set(e.form,"address",a)},expression:"form.address"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[e.updateloader?a("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),e.updateloader?e._e():a("b-button",{attrs:{variant:"primary ripple"},on:{click:function(a){return e.updateUser()}}},[e._v("Update")])],1)],1)],1)],1)],1),e.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e()],1)},r=[],i=(t("ac1f"),t("00b4"),t("99af"),t("d3b7"),t("25f0"),t("caad"),t("2532"),t("b654")),o=t.n(i),n={metaInfo:{title:"Profile"},components:{},data:function(){return{referralLink:"",clickOtp:!1,verified:null,isOtp:null,imgSrc:null,aadharFrontCheckbox:!1,aadharBackCheckbox:!1,drivingLincenseBackCheckbox:!1,passportFrontCheckbox:!1,passportBackCheckbox:!1,drivingLincenseFrontCheckbox:!1,selectedImage:!1,passportImage:!1,passportImageBack:!1,drivinglincenseImage:!1,drivinglincenseImageBack:!1,forOtp:"",updateloader:!1,logoloader:!1,docloader:!1,loader:!1,form:{fName:"",lName:"",address:"",url:"",city:"",state:"",pin_code:""},back_aadhar_card:"",image:"",aadhar_card:"",driving_lincense:"",back_driving_lincense:"",haspassport:"True",passport:"",back_passport:"",emailUser:"",phoneUser:"",email:"",isLoading:!1,showMail:!1,isGetotpHide:!1,newpassword:"",oldpassword:"",confirmpassword:"",submitloader:!1,id:null}},created:function(){var e=localStorage.getItem("userInfo"),a=JSON.parse(e);this.id=a.data.id,this.emailUser=a.data.email,this.phoneUser=a.data.phone,this.id&&this.getProfileDetails()},methods:{isLetter:function(e){var a=String.fromCharCode(e.keyCode);if(/^[A-Za-z]+$/.test(a))return!0;e.preventDefault()},formatYear:function(e){return String(e).substring(0,250)},copyReferralLink:function(){var e=document.createElement("textarea");e.value=this.referralLink,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$toaster.makeToast("success","Referral link copied to clipboard!")},viaEmail:function(){this.showMail=!0,this.clearModalForm()},clickBookCar:function(){this.$router.push("/app/sessions/searchCar")},clickAddAmount:function(){this.$router.push("/app/mydesk/transaction")},clickOtpVarified:function(){var e=this;this.clickOtp=!0,this.loader=!0,this.$apiService.getCall("phone/verify/?userId=".concat(this.id,"&phone=").concat(this.phoneUser)).then((function(a){a.apidata.isError||(e.$toaster.makeToast("success","Otp sent successfully"),e.loader=!1)})).catch((function(a){e.loader=!1,e.$toaster.makeToast("warning","Some think error")}))},handelForOtp:function(e){var a=this;4==this.forOtp.length&&(this.loader=!0,this.clickOtp=!1,this.$apiService.getCall("otp/verify/?userId=".concat(this.id,"&otp=").concat(this.forOtp)).then((function(e){e.apidata.isError||(a.$toaster.makeToast("success","Verify successfully"),window.location.reload(),a.loader=!1)})).catch((function(e){a.loader=!1,a.$toaster.makeToast("warning","Some think error")})))},clickEmailVarified:function(){var e=this;this.loader=!0;var a={email:this.emailUser};this.$apiService.postCall("email/verify/",a).then((function(a){a.apidata.isError||(e.$toaster.makeToast("success","Email verification link sent successfully"),e.loader=!1)})).catch((function(a){e.loader=!1,e.$toaster.makeToast("warning","Some think error")}))},checkLength:function(e){this.form.pin_code.toString().length>=6&&8!==e.keyCode&&(this.form.pin_code=this.form.pin_code.toString().substring(0,5))},viaOldPassword:function(){this.showMail=!1},setPassport:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.passport=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Passport front has been uploaded successfully"),a.passportFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Passport back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.passportImage=r.result},r.readAsDataURL(s)}else this.passportImage=null,this.passportFrontCheckbox=!1},setPassportBack:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_passport=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Passport back has been uploaded successfully"),a.passportBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Passport back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.passportImageBack=r.result},r.readAsDataURL(s)}else this.passportImageBack=null,this.passportBackCheckbox=!1},setDrivingLincense:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.driving_lincense=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Driving license front has been uploaded successfully"),a.drivingLincenseFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Driving license back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.drivinglincenseImage=r.result},r.readAsDataURL(s)}else this.drivinglincenseImage=null,this.drivingLincenseFrontCheckbox=!1},setDrivingLincenseBack:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_driving_lincense=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Driving lincense back has been uploaded successfully"),a.drivingLincenseBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Driving lincense back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.drivinglincenseImageBack=r.result},r.readAsDataURL(s)}else this.drivinglincenseImageBack=null,this.drivingLincenseBackCheckbox=!1},setAadhar:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.aadhar_card=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Aadhar front has been uploaded successfully"),a.aadharFrontCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Aadhar front has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.selectedImage=r.result},r.readAsDataURL(s)}else this.selectedImage=null,this.aadharFrontCheckbox=!1},chooseAadhar:function(){var e=document.getElementById("aadhar");e.files.length>0?this.aadharFrontCheckbox=!0:this.aadharFrontCheckbox=!1,e.click()},setAadharback:function(e){var a=this;this.loader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.back_aadhar_card=e.apidata.path,a.loader=!1,a.$toaster.makeToast("success","Aadhar back has been uploaded successfully"),a.aadharBackCheckbox=!0})).catch((function(){a.loader=!1,a.$toaster.makeToast("warning","Aadhar back has been uploaded error")})),s){var r=new FileReader;r.onload=function(){a.selectedImageBack=r.result},r.readAsDataURL(s)}else this.selectedImageBack=null,this.aadharBackCheckbox=!1},setImage:function(e){var a=this;this.logoloader=!0;var t=new FormData,s=e.target.files[0];if(t.append("picture",s),this.$apiService.postFileCall("uploadimage/",t).then((function(e){a.form.url=e.apidata.path,a.logoloader=!1,a.$toaster.makeToast("success","Photo has been updated")})).catch((function(){a.logoloader=!1,a.$toaster.makeToast("warning","Photo has been update failed")})),s.type.includes("image/"))if("function"===typeof FileReader){var r=new FileReader;r.onload=function(e){a.imgSrc=e.target.result,document.getElementById("logo").src=a.imgSrc},r.readAsDataURL(s)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},chooseAadharBack:function(){var e=document.getElementById("aadharback");e.files.length>0?this.aadharBackCheckbox=!0:this.aadharBackCheckbox=!1,e.click()},chooseDrivingLincenseBack:function(){var e=document.getElementById("drivinglincenseback");e.files.length>0?this.drivingLincenseBackCheckbox=!0:this.drivingLincenseBackCheckbox=!1,e.click()},chooseDrivingLincense:function(){var e=document.getElementById("drivinglincense");e.files.length>0?this.drivingLincenseFrontCheckbox=!0:this.drivingLincenseFrontCheckbox=!1,e.click()},choosePassport:function(){var e=document.getElementById("passport");e.files.length>0?this.passportFrontCheckbox=!0:this.passportFrontCheckbox=!1,e.click()},choosePassportBack:function(){var e=document.getElementById("passportback");e.files.length>0?this.passportBackCheckbox=!0:this.passportBackCheckbox=!1,e.click()},chooseImage:function(){document.getElementById("chooseLogo").click()},updateUser:function(){var e=this;this.updateloader=!0;var a=new FormData;if(a.append("first_name",this.form.fName),a.append("last_name",this.form.lName),a.append("local_address",this.form.address),a.append("image",this.form.url||this.selectedLogo),a.append("city",this.form.city),a.append("state",this.form.state),a.append("pin_code",this.form.pin_code),!this.form.fName&&!this.form.lName)return this.$toaster.makeToast("warning",o.a.VALIDATION_MESSAGE),void(this.updateloader=!1);this.$apiService.putCall("account/updateUserAPIView/".concat(this.id),a).then((function(a){e.updateloader=!1,e.$toaster.makeToast("success","Details updated successfully"),setTimeout((function(){window.location.reload()}),500)})).catch((function(a){e.updateloader=!1,e.$toaster.makeToast("warning","Details updated error")}))},updateDocuments:function(){var e=this;this.docloader=!0;var a=new FormData;null!=this.selectedImage&&a.append("aadhar_card",this.aadhar_card||this.selectedImage),null!=this.drivinglincenseImage&&a.append("driving_lincense",this.driving_lincense||this.drivinglincenseImage),a.append("haspassport",this.haspassport),null!=this.passportImage&&a.append("passport",this.passport||this.passportImage),null!=this.selectedImageBack&&a.append("back_aadhar_card",this.back_aadhar_card||this.selectedImageBack),null!=this.drivinglincenseImageBack&&a.append("back_driving_lincense",this.back_driving_lincense||this.drivinglincenseImageBack),null!=this.passportImageBack&&a.append("back_passport",this.back_passport||this.passportImageBack),a.has("aadhar_card")&&a.has("back_aadhar_card")&&a.has("driving_lincense")&&a.has("back_driving_lincense")?this.$apiService.putCall("account/updateDocumentAPIView/".concat(this.id),a).then((function(t){!t.isError&&a?(e.docloader=!1,e.$toaster.makeToast("success","Documents updated successfully")):(e.docloader=!1,e.$toaster.makeToast("warning","Documents updated failed"))})).catch((function(a){e.docloader=!1,e.$toaster.makeToast("warning","Documents updated failed")})):(this.docloader=!1,this.$toaster.makeToast("warning","Aadhar Card,Driving Lincense is mandatory "))},getCompanyData:function(){var e=this;this.isLoading=!0,this.$apiService.getCall("getCompanyData").then((function(a){e.form=a.apidata.data,e.form.logo&&e.$apiService.postCall("download",{urlPath:e.form.logo}).then((function(a){document.getElementById("logo").src="data:image/jpeg;base64,"+a.apidata.fileData,e.isLoading=!1})).catch((function(a){e.$toaster.makeToast("warning",o.a.ERROR_MESSAGE),e.isLoading=!1})),e.isLoading=!1})).catch((function(a){e.isLoading=!1,console.log(a)}))},changePassword:function(){var e=this;if(this.submitloader=!0,this.newpassword&&this.oldpassword&&this.confirmpassword){if(this.newpassword!=this.confirmpassword)return this.$toaster.makeToast("warning",o.a.VALIDATION_ERROR),void(this.submitloader=!1);if(this.newpassword.length<5)return this.$toaster.makeToast("warning",o.a.PASSWORDNOT_OK),void(this.submitloader=!1);if(this.confirmpassword.length<5)return this.$toaster.makeToast("warning",o.a.PASSWORDNOT_OK),void(this.submitloader=!1);var a={newpassword:this.newpassword,oldpassword:this.oldpassword,confirmpassword:this.confirmpassword};this.$apiService.postCall("change-password",a).then((function(a){if(a.error)return e.$toaster.makeToast("warning",o.a.MISMATCH_ERROR),void(e.submitloader=!1);e.$toaster.makeToast("success",o.a.UPDATE_MESSAGE),e.clearModalForm(),e.$bvModal.hide("modal-center"),e.submitloader=!1})).catch((function(a){e.$toaster.makeToast("warning",o.a.ERROR_MESSAGE),e.submitloader=!1}))}else this.$toaster.makeToast("warning",o.a.VALIDATION_MESSAGE),this.submitloader=!1},clearModalForm:function(){this.newpassword="",this.confirmpassword="",this.oldpassword=""},reset:function(){var e=this;this.submitloader=!0,this.$apiService.postCall("forget-password",{email:this.form.email}).then((function(a){a.error?(e.notFound=!0,e.$toaster.makeToast("warning",o.a.NOT_FOUND),e.submitloader=!1):(e.$toaster.makeToast("success",o.a.EMAIL_VERIFICATION_MESSAGE),e.notFound=!1,e.submitloader=!1,e.$bvModal.hide("modal-center"),setTimeout((function(){e.$router.push("/app/sessions/signIn")}),3e3))})).catch((function(a){e.$toaster.makeToast("warning",o.a.ERROR_MESSAGE),e.submitloader=!1,console.log(a)}))}}},c=n,l=(t("2514"),t("2877")),d=Object(l["a"])(c,s,r,!1,null,"eb4bb7fe",null);a["default"]=d.exports},fce3:function(e,a,t){var s=t("d039"),r=t("da84"),i=r.RegExp;e.exports=s((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);