(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd4eecee"],{"33cc":function(a,t,e){"use strict";e("fc61")},"99af":function(a,t,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),n=e("861d"),o=e("7b0b"),d=e("07fa"),c=e("3511"),l=e("8418"),u=e("65f0"),p=e("1dde"),m=e("b622"),f=e("2d00"),b=m("isConcatSpreadable"),_=f>=51||!r((function(){var a=[];return a[b]=!1,a.concat()[0]!==a})),g=function(a){if(!n(a))return!1;var t=a[b];return void 0!==t?!!t:i(a)},h=!_||!p("concat");s({target:"Array",proto:!0,arity:1,forced:h},{concat:function(a){var t,e,s,r,i,n=o(this),p=u(n,0),m=0;for(t=-1,s=arguments.length;t<s;t++)if(i=-1===t?n:arguments[t],g(i))for(r=d(i),c(m+r),e=0;e<r;e++,m++)e in i&&l(p,m,i[e]);else c(m+1),l(p,m++,i);return p.length=m,p}})},dd22:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a._self._c;return t("div",{staticClass:"main-content"},[t("div",{staticClass:"font-weight-bold fa-2x text-light d-flex justify-content-between"},[a._v(" Member ")]),t("hr",{staticClass:"mt-1"}),a.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):a._e(),t("div",{staticClass:"card user-profile o-hidden mb-30"},[t("div",{}),t("div",{staticClass:"user-info"},[t("img",{staticClass:"profile-picture avatar-lg mb-2",attrs:{src:this.userimage,alt:""}}),t("p",{staticClass:"m-0 text-24"},[a._v(a._s(a.fullName))]),t("div",{staticClass:"d-flex px-4 flex-wrap"},[t("p",{staticClass:"text-muted m-0"},[t("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),a._v(" : "+a._s(a.phoneNumber)+" ")])])]),t("div",{staticClass:"card-body"},[t("div",[t("b-tabs",{attrs:{"content-class":"mt-3",align:"center"}},[t("b-tab",{attrs:{title:"Creators",active:""}},[t("vue-good-table",{attrs:{columns:a.commonColumns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:a.faqs},scopedSlots:a._u([{key:"table-row",fn:function(e){return["audio_url"===e.column.field?t("span",[t("audio",{staticStyle:{height:"36px !important"},attrs:{controls:""}},[t("source",{attrs:{src:e.row.audio_url,type:"audio/mpeg"}}),a._v(" Your browser does not support the audio tag. ")])]):"user_name_show"===e.column.field?t("span",[t("div",[a._v(" "+a._s(e.row.user_info.first_name)+" "+a._s(e.row.user_info.last_name)+" ")])]):"status_show"===e.column.field?t("span",["Approved"===e.row.status?t("div",[t("span",{staticClass:"badge badge-success"},[a._v(a._s(e.row.status))])]):"Rejected"===e.row.status?t("div",[t("span",{staticClass:"badge badge-danger"},[a._v(a._s(e.row.status))])]):"Waiting Approval"===e.row.status?t("div",[t("span",{staticClass:"badge border border-warning text-warning p-1"},[a._v(a._s(e.row.status))])]):"Pending Registration"===e.row.status?t("div",[t("span",{staticClass:"badge border-warning text-warning border p-1"},[a._v(a._s(e.row.status))])]):a._e()]):"payment_status"===e.column.field?t("span",[["Paid"===e.row.payment_status?t("b-badge",{attrs:{variant:"success"}},[a._v("Paid")]):t("b-badge",{attrs:{variant:"danger"}},[a._v("Unpaid")])]],2):a._e()]}}])})],1),t("b-tab",{attrs:{title:"Bank Details"}},[t("b-row",[t("b-col",{attrs:{md:"6"}},[a._v("Name - "+a._s(a.userFullName))]),t("b-col",{attrs:{md:"6"}},[a._v("Citizenship No - "+a._s(a.citizenshipNo))]),t("b-col",{attrs:{md:"6"}},[a._v("Bank Name - "+a._s(a.bankName))]),t("b-col",{attrs:{md:"6"}},[a._v("IDBN - "+a._s(a.idbnNo))])],1)],1)],1)],1)])])])},r=[],i=e("c7eb"),n=e("1da1"),o=(e("99af"),e("b0c0"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("159b4"),e("c1df")),d=e.n(o),c=e("b654"),l=e.n(c),u=(e("5873"),e("a29f"),{metaInfo:{title:"Profile"},components:{},data:function(){return{userimage:"",loader:!1,faqs:[],commonColumns:[{label:"Date",field:"createdAt"},{label:"Tik Tok Name",field:"tiktok_username"},{label:"Contact Number",field:"contact_number"},{label:"Diamonds This Month",field:"diamonds"},{label:"Partner",field:"affiliate"},{label:"Status",field:"status_show"},{label:"Reason",field:"reason"}],backgroundImage:e("1419"),fullName:"",tictocName:"",phoneNumber:"",userFullName:"",bankName:"",idbnNo:"",citizenshipNo:""}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.backgroundImage,")")}}},created:function(){this.userId=this.$route.query.id,this.fetchPublisher(),this.getProfileDetails()},methods:{formatPrice:function(a){var t=(a/1).toFixed(0).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},fetchPublisher:function(){var a=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var e,s,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.loader=!0,t.prev=1,a.role=localStorage.getItem("role"),e={user_id:a.userId},console.log("id",a.user_id),t.next=7,a.$apiService.postCall("/publisher/get-all",e);case 7:s=t.sent,s.error?a.$toaster.makeToast("warning",s.message):s.apidata.msg?a.faqs=[]:(console.log("Start of script"),r=s.apidata.data,console.log("paymetBefore",r),r.reverse(),r.forEach((function(a,t){console.log("Processing index ".concat(t),a),d()(a.createdAt).isValid()?(a.createdAt=d()(a.createdAt).format("DD MMM YYYY h:mm A"),console.log("Formatted createdAt for index ".concat(t),a.createdAt)):console.error("Invalid date at index ".concat(t),a.createdAt),a.user_id&&a.user_id.tiktok_username&&(a.affiliate=a.user_id.tiktok_username)})),a.faqs=r),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.error(t.t0),a.$toaster.makeToast("warning","Error: Server Error");case 15:return t.prev=15,a.loader=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,11,15,18]])})))()},getProfileDetails:function(){var a=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(t){if(t.error)return a.loader=!1,void a.$toaster.makeToast("success",t.message);a.fullName="".concat(t.apidata.data.name," ").concat(t.apidata.data.surname),a.userimage=t.apidata.data.image,a.tictocName=t.apidata.data.tiktok_username,a.phoneNumber=t.apidata.data.contact_number,t.apidata.data.bank&&(a.userFullName=t.apidata.data.bank.full_name,a.citizenshipNo=t.apidata.data.bank.identity_citizenship_no,a.bankName=t.apidata.data.bank.bank_name,a.idbnNo=t.apidata.data.bank.iban),t.apidata.data.image&&(a.selectedLogo=t.apidata.data.image),a.loader=!1})).catch((function(t){a.loader=!1,a.$toaster.makeToast("warning","Error fetch profile data")}))},getAllUsers:function(){var a=this;this.loader=!0,this.$apiService.getCall("account/?id=".concat(this.userId)).then((function(t){console.log(t);var e=[];t.apidata.length>0&&(e=t.apidata,e.forEach((function(a){a.full_name=a.first_name||a.last_name?a.first_name+" "+a.last_name:""}))),a.userName=t.apidata.first_name+" "+t.apidata.last_name,a.emailPhone=t.apidata.email,a.is_verified=t.apidata.is_verified,a.phone=t.apidata.phone,a.userimage=t.apidata.image,a.aadharFront=t.apidata.aadhar_card,a.aadharBack=t.apidata.back_aadhar_card,a.divinglicense=t.apidata.driving_lincense,a.divinglicenseBack=t.apidata.back_driving_lincense,a.passportBack=t.apidata.back_passport,a.passport=t.apidata.passport,a.loader=!1})).catch((function(t){a.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),a.loader=!1}))}}}),p=u,m=(e("33cc"),e("2877")),f=Object(m["a"])(p,s,r,!1,null,"b49be6c6",null);t["default"]=f.exports},fc61:function(a,t,e){}}]);