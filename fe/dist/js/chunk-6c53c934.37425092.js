(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c53c934"],{"26be":function(e,t,s){"use strict";s("f452")},9536:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:"Admin",folder:"Home"}}),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(s){return["button"==s.column.field?t("span",[t("i",{staticClass:"fa fa-edit",staticStyle:{"font-size":"24px",cursor:"pointer"},on:{click:function(t){return e.editTemplate(s.row._id)}}}),t("i",{staticClass:"fa fa-trash",staticStyle:{"font-size":"24px",color:"red","margin-left":"10px",cursor:"pointer"},on:{click:function(t){return e.deleteTemplate(s.row._id)}}})]):e._e()]}}])})],1)},a=[],i=(s("d3b7"),s("159b4"),s("c1df")),n=s.n(i),E=s("b654"),c=s.n(E),d={metaInfo:{title:"Admin"},components:{},data:function(){return{columns:[{label:"Name",field:"name"},{label:"Template ID",field:"templateId"},{label:"Created At",field:"time"},{label:"Actions",field:"button"}],rows:[],form:{templateId:"",name:"",content:""},generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1}},created:function(){},methods:{getTemplateData:function(){var e=this;this.loader=!0,this.$apiService.getCall("get-by-company").then((function(t){var s=[];t.apidata.length>0&&(s=t.apidata,s.forEach((function(e){e.time=e.time?n()(e.time).format("DD/MM/YYYY"):""}))),e.rows=s,e.loader=!1})).catch((function(t){e.$toaster.makeToast("warning",c.a.ERROR_MESSAGE),e.loader=!1}))}}},o=d,r=(s("26be"),s("2877")),u=Object(r["a"])(o,l,a,!1,null,null,null);t["default"]=u.exports},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},f452:function(e,t,s){}}]);