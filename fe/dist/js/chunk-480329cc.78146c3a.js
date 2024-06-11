(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-480329cc"],{"00c3":function(e,t,a){},"65ea":function(e,t,a){"use strict";a("00c3")},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},c1d8:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:"Setting",folder:"eSignature"}}),t("b-card",[t("b-form",[t("div",{staticClass:"ml-4"},[t("div",{staticClass:"mt-5"},[t("div",{staticClass:"row"},[t("h3",{staticClass:"text-info auth_tokens"},[e._v("VIRTUAL SIGNATURE")])]),t("b-col",[t("b-button",{staticClass:"btn btn text-set",attrs:{type:"submit",variant:"default"},model:{value:e.virtualSignature,callback:function(t){e.virtualSignature=t},expression:"virtualSignature"}},[e._v("SET UP")])],1)],1),t("div",{staticStyle:{"text-align":"center"}},[e.isLoading?t("div",{staticClass:"spinner spinner-primary mr-3"}):e._e()]),t("hr"),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"row"},[t("h3",{staticClass:"text-info auth_tokens"},[e._v("DEFAULT ESIGNATURE SEAL")])]),t("div",{staticClass:"dropdown"},[t("b-button",{staticClass:"btn btn-secondary dropdown-toggle text-button",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(t){return e.chooseImage()}},model:{value:e.defaultEsignatureSeal,callback:function(t){e.defaultEsignatureSeal=t},expression:"defaultEsignatureSeal"}},[e._v(" CUSTOM UPLOADS ")]),t("input",{staticStyle:{display:"none"},attrs:{id:"chooseLogo",type:"file",name:"image",accept:".png,.jpg,.jpeg"},on:{change:e.setImage}})],1),t("div",[t("h4",{staticClass:"text-preview mt-3"},[e._v("PREVIEW")]),t("b-col",{attrs:{md:"12 mb-30"}},[t("img",{staticClass:"col-md-6 mb-3",staticStyle:{border:"1px solid #111827",padding:"20px","border-radius":"3%"},attrs:{id:"logo",src:"https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"}})])],1)])]),t("b-row",[t("b-col",[e.updateloader?t("div",{staticClass:"spinner spinner-primary mt-3 ml-4"}):e._e(),e.updateloader?e._e():t("b-button",{staticClass:"col-md-1 mt-3 ml-4",attrs:{variant:"primary ripple"},on:{click:function(t){return e.updateCheck()}}},[e._v("Update")])],1)],1),t("div",{staticClass:"text-loader"},[e.loading?t("div",{staticClass:"sk-chase"},[t("div",{staticClass:"sk-chase-dot"}),t("div",{staticClass:"sk-chase-dot"}),t("div",{staticClass:"sk-chase-dot"}),t("div",{staticClass:"sk-chase-dot"}),t("div",{staticClass:"sk-chase-dot"}),t("div",{staticClass:"sk-chase-dot"})]):e._e()])],1)],1)],1)},i=[],l=(a("caad"),a("2532"),a("b654")),n=a.n(l),c={metaInfo:{title:"eSignature"},data:function(){return{loading:!0,updateloader:!1,isLoading:!1}},mounted:function(){this.eSignatureData()},methods:{setImage:function(e){var t=this;this.logoloader=!0;var a=new FormData,s=e.target.files[0];if(a.append("file",s),s.type.includes("image/")){if("function"===typeof FileReader){var i=new FileReader;i.onload=function(e){t.imgSrc=e.target.result,document.getElementById("logo").src=t.imgSrc},i.readAsDataURL(s)}else alert("Sorry, FileReader API not supported");this.$apiService.postFileCall("upload",a).then((function(e){t.form.brandLogo=e.apidata.urlPath,t.$toaster.makeToast("success",n.a.FILE_UPLOAD),t.logoloader=!1})).catch((function(){t.logoloader=!1,t.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)}))}else alert("Please select an image file")},chooseImage:function(){document.getElementById("chooseLogo").click()},eSignatureData:function(){var e=this;this.isLoading=!0,this.$apiService.getCall("getCompanyData").then((function(t){e.authToken=t.apidata.data.authToken})).catch((function(t){e.$toaster.makeToast("warning",n.a.ERROR_MESSAGE)})),this.isLoading=!1},updateCheck:function(){var e=this;this.$apiService.postCall("edit-eSignatureAndSeal",{virtualSignature:this.virtualSignature,defaultEsignatureSeal:this.defaultEsignatureSeal}).then((function(t){e.$toaster.makeToast("success",n.a.EDIT_DOCUMENT_MESSAGE),e.eSignatureData()}))}}},d=c,o=(a("65ea"),a("2877")),r=Object(o["a"])(d,s,i,!1,null,"556fe836",null);t["default"]=r.exports}}]);