(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bac1303a"],{"003b":function(t,e,a){"use strict";a.r(e);var s=a("2909"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticClass:"font-weight-bold fa-2x text-light"},[t._v("Users")]),e("hr",{staticClass:"mt-1"}),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(t._s((t.isEdit,"In Progress")))]),e("b-row",{staticClass:"px-3"},[e("b-col",[e("div",{staticClass:"d-flex justify-content-end"},[e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.closeModal12()}}},[t._v("Close")])],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-lg",size:"lg",title:"Documents"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Aadhar Card")])])],1),t.aadharFront?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharFront,title:"aadharFront",target:"_blank"}},[e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharFront}})])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharBack,title:"aadharBack",target:"_blank"}},[t.aadharBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v(" Driving Licence ")])])],1),t.divinglicense?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicense,title:"divinglicense",target:"_blank"}},[t.divinglicense?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicense}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicenseBack,title:"divinglicenseBack",target:"_blank"}},[t.divinglicenseBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicenseBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Passport")])])],1),t.passport?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passport,title:"passport",target:"_blank"}},[t.passport?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passport}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passportBack,title:"passportBack",target:"_blank"}},[t.passportBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passportBack}}):t._e()])])],1):t._e()],1),e("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[e("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Select users",options:Object(s["a"])(t.allUsers),multiple:!1,limit:1},on:{input:t.handleChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("div",{staticClass:"for-gap d-none"},[e("button",{staticClass:"btn btn-primary",on:{click:t.clearFilters}},[t._v("Clear Filter")])])],1),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!1,"search-options":{enabled:!0,placeholder:"Search User"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:t.getfilterdata},scopedSlots:t._u([{key:"table-row",fn:function(a){return["img"===a.column.field?e("span",[e("img",{staticClass:"circular-image",attrs:{src:null!=a.row.image?a.row.image:t.logo,alt:"Image"}})]):"button"===a.column.field?e("span",[void 0,[e("a",{staticClass:"mr-3",staticStyle:{"font-size":"16px",cursor:"pointer"},attrs:{variant:"primary ripple"},on:{click:t.openModal12}},[e("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])]],2):"email"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"d-flex"},[t._v(" "+t._s(a.row.email)+" ")]),e("div",[t._v(t._s(a.row.contact_number))])])]],2):"balance_show"===a.column.field?e("span",[[e("div",{staticClass:"dropdown"},[e("b-dropdown",{staticClass:"m-md-2",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.265)",color:"black","border-radius":"5px","/* text-underline-offset":"unset"},attrs:{id:"dropdown-6",text:"Current - ₹ ".concat(t.formatPrice(t.totalBalance)),"toggle-class":""}},[e("div",{staticClass:"dropdown-item d-flex justify-content-between px-3"},[e("div",[t._v("Wallet")]),e("div",[t._v("₹ "+t._s(t.formatPrice(t.userBalance)))])]),e("div",{staticClass:"dropdown-item d-flex justify-content-between px-3"},[e("div",[t._v("Security")]),e("div",[t._v("₹ "+t._s(t.formatPrice(t.securityBalance)))])]),e("div",{staticClass:"dropdown-item d-flex justify-content-between px-3"},[e("div",[t._v(" Bonus & "),e("br"),t._v(" Rewards ")]),e("div",[t._v("₹ "+t._s(t.formatPrice(t.referralBalance)))])])])],1)]],2):t._e()]}}])}),t.modalVisible?e("div",[e("div",{staticClass:"modal-content"},[e("span",{staticClass:"close",on:{click:t.closeModal12}},[t._v("×")]),e("h2",[t._v("Modal Title")]),e("p",[t._v("This modal is still in progress...")])])]):t._e()],1)},l=[],r=a("ade3"),n=(a("4de4"),a("d3b7"),a("d81d"),a("b0c0"),a("c1df"),a("b654")),o=a.n(n),c=a("8e5f"),d=a.n(c),u={metaInfo:{title:"Users"},components:{multiselect:d.a},computed:{getfilterdata:function(){var t=this,e=this.rows.filter((function(e){return e.id==t.use_id}));return null!=this.use_id?e:(console.log("hkdshkchsdjk",this.rows),this.rows)}},data:function(){var t;return t={modalVisible:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columns:[{label:"Name",field:"user_name"},{label:"Email",field:"email"},{label:"Action",field:"button"}],rows:[],originalRows:[],form:{templateId:"",name:"",content:""},generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1},Object(r["a"])(t,"matchUser",""),Object(r["a"])(t,"user_name",""),Object(r["a"])(t,"contact_number",""),Object(r["a"])(t,"email",""),t},created:function(){this.getAllUsers(),this.getAllTransaction(),this.role=parsedUser.data.role,this.originalRows=Object(s["a"])(this.rows)},methods:{clearFilters:function(){this.getAllUsers(),this.selected="Select User"},openModal12:function(){this.modalVisible=!0},closeModal12:function(){this.modalVisible=!1},openModal:function(t){this.aadharFront=t.aadhar_card,this.aadharBack=t.back_aadhar_card,this.divinglicense=t.driving_lincense,this.divinglicenseBack=t.back_driving_lincense,this.passportBack=t.back_passport,this.passport=t.passport,this.isModalOpen=!0},vueDocuments:function(t){this.popUpWindow=!0},handleChange:function(t){var e=this.rows.filter((function(e){return e.user_name===t}));this.rows=e,console.log("Matched Rows:",e)},clickViewUsers:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},clickUnBlock:function(t){var e=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),a).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User  successfully unblocked"),e.getAllUsers(),e.loader=!1)})).catch((function(t){e.loader=!1,e.$toaster.makeToast("warning","Have Server error")}))},getAllUsers:function(){var t=this;this.loader=!0,this.$apiService.getCall("user/get-all-users").then((function(e){if(e&&!1===e.isError&&e.apidata&&e.apidata.data){var a=e.apidata.data;t.rows=a,t.allUsers=a.map((function(t){return t.user_name}))}else t.$toaster.makeToast("warning","Failed to fetch user data");t.loader=!1})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching user data"),t.loader=!1}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.form.templateId=t,this.generateIDloader=!1},submit:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",o.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(e){e.apidata.status?(t.$toaster.makeToast("warning",o.a.ERROR_TEMPLATE_MESSAGE),t.submitloader=!1):(t.$toaster.makeToast("success",o.a.ADD_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform())})).catch((function(e){t.$toaster.makeToast("warning",o.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",o.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(e){t.$toaster.makeToast("success",o.a.EDIT_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform()})).catch((function(e){t.$toaster.makeToast("warning",o.a.ERROR_MESSAGE)}))},editTemplate:function(t){var e=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:t}).then((function(t){e.form=t.apidata,e.$bvModal.show("modal-lg")})).catch((function(t){e.$toaster.makeToast("warning",o.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){e.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};e.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),s).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User successfully blocked"),e.getAllUsers(),e.loader=!1)}))}})).catch((function(t){e.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}},p=u,f=(a("8498"),a("d072"),a("2877")),h=Object(f["a"])(p,i,l,!1,null,null,null);e["default"]=h.exports},"107c":function(t,e,a){var s=a("d039"),i=a("da84"),l=i.RegExp;t.exports=s((function(){var t=l("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"3d30":function(t,e,a){},9263:function(t,e,a){"use strict";var s=a("c65b"),i=a("e330"),l=a("577e"),r=a("ad6d"),n=a("9f7f"),o=a("5692"),c=a("7c73"),d=a("69f3").get,u=a("fce3"),p=a("107c"),f=o("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,m=h,E=i("".charAt),_=i("".indexOf),g=i("".replace),b=i("".slice),S=function(){var t=/a/,e=/b*/g;return s(h,t,"a"),s(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=n.BROKEN_CARET,A=void 0!==/()??/.exec("")[1],x=S||A||v||u||p;x&&(m=function(t){var e,a,i,n,o,u,p,x=this,I=d(x),T=l(t),w=I.raw;if(w)return w.lastIndex=x.lastIndex,e=s(m,w,T),x.lastIndex=w.lastIndex,e;var k=I.groups,y=v&&x.sticky,M=s(r,x),C=x.source,D=0,R=T;if(y&&(M=g(M,"y",""),-1===_(M,"g")&&(M+="g"),R=b(T,x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==E(T,x.lastIndex-1))&&(C="(?: "+C+")",R=" "+R,D++),a=new RegExp("^(?:"+C+")",M)),A&&(a=new RegExp("^"+C+"$(?!\\s)",M)),S&&(i=x.lastIndex),n=s(h,y?a:x,R),y?n?(n.input=b(n.input,D),n[0]=b(n[0],D),n.index=x.lastIndex,x.lastIndex+=n[0].length):x.lastIndex=0:S&&n&&(x.lastIndex=x.global?n.index+n[0].length:i),A&&n&&n.length>1&&s(f,n[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n&&k)for(n.groups=u=c(null),o=0;o<k.length;o++)p=k[o],u[p[0]]=n[p[1]];return n}),t.exports=m},"9f7f":function(t,e,a){var s=a("d039"),i=a("da84"),l=i.RegExp,r=s((function(){var t=l("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n=r||s((function(){return!l("a","y").sticky})),o=r||s((function(){var t=l("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:o,MISSED_STICKY:n,UNSUPPORTED_Y:r}},ac1f:function(t,e,a){"use strict";var s=a("23e7"),i=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b654:function(t,e){t.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},d072:function(t,e,a){"use strict";a("3d30")},fce3:function(t,e,a){var s=a("d039"),i=a("da84"),l=i.RegExp;t.exports=s((function(){var t=l(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);