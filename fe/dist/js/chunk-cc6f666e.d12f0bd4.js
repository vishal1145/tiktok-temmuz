(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc6f666e"],{"107c":function(e,t,a){var r=a("d039"),n=a("da84"),s=n.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,a){"use strict";var r=a("2ba4"),n=a("c65b"),s=a("e330"),o=a("d784"),i=a("44e7"),l=a("825a"),c=a("1d80"),d=a("4840"),u=a("8aa5"),p=a("50c4"),h=a("577e"),m=a("dc4a"),f=a("4dae"),b=a("14c3"),g=a("9263"),v=a("9f7f"),x=a("d039"),w=v.UNSUPPORTED_Y,C=4294967295,k=Math.min,y=[].push,_=s(/./.exec),S=s(y),j=s("".slice),I=!x((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));o("split",(function(e,t,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var s=h(c(this)),o=void 0===a?C:a>>>0;if(0===o)return[];if(void 0===e)return[s];if(!i(e))return n(t,s,e,o);var l,d,u,p=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,v=new RegExp(e.source,m+"g");while(l=n(g,v,s)){if(d=v.lastIndex,d>b&&(S(p,j(s,b,l.index)),l.length>1&&l.index<s.length&&r(y,p,f(l,1)),u=l[0].length,b=d,p.length>=o))break;v.lastIndex===l.index&&v.lastIndex++}return b===s.length?!u&&_(v,"")||S(p,""):S(p,j(s,b)),p.length>o?f(p,0,o):p}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:n(t,this,e,a)}:t,[function(t,a){var r=c(this),o=void 0==t?void 0:m(t,e);return o?n(o,t,r,a):n(s,h(r),t,a)},function(e,r){var n=l(this),o=h(e),i=a(s,n,o,r,s!==t);if(i.done)return i.value;var c=d(n,RegExp),m=n.unicode,f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(w?"g":"y"),g=new c(w?"^(?:"+n.source+")":n,f),v=void 0===r?C:r>>>0;if(0===v)return[];if(0===o.length)return null===b(g,o)?[o]:[];var x=0,y=0,_=[];while(y<o.length){g.lastIndex=w?0:y;var I,O=b(g,w?j(o,y):o);if(null===O||(I=k(p(g.lastIndex+(w?y:0)),o.length))===x)y=u(o,y,m);else{if(S(_,j(o,x,y)),_.length===v)return _;for(var E=1;E<=O.length-1;E++)if(S(_,O[E]),_.length===v)return _;y=x=I}}return S(_,j(o,x)),_}]}),!I,w)},"14c3":function(e,t,a){var r=a("c65b"),n=a("825a"),s=a("1626"),o=a("c6b6"),i=a("9263"),l=TypeError;e.exports=function(e,t){var a=e.exec;if(s(a)){var c=r(a,e,t);return null!==c&&n(c),c}if("RegExp"===o(e))return r(i,e,t);throw l("RegExp#exec called on incompatible receiver")}},8592:function(e,t,a){"use strict";a.r(t);a("d81d"),a("4de4"),a("d3b7");var r,n=function(){var e=this,t=e._self._c;return t("div",{},[t("div",{staticClass:"font-weight-bold fa-2x text-light"},[e._v("Creators")]),t("hr",{staticClass:"mt-1"}),t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModal,callback:function(t){e.showAddModal=t},expression:"showAddModal"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Add Creators ")]),t("b-row",{staticClass:"px-3"},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter publisher name","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Enter name",type:"text",id:"input-name"},on:{change:e.handelUserField},model:{value:e.publisherName,callback:function(t){e.publisherName=t},expression:"publisherName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Phone number",type:"number",id:"input-phoneNumber"},on:{keydown:e.checkLength},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Agency center code","label-for":"input-title"}},[t("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency"},on:{keydown:e.checkLengthCode},model:{value:e.centerCode,callback:function(t){e.centerCode=t},expression:"centerCode"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Select Images","label-for":"input-images"}},[t("b-form-file",{attrs:{placeholder:"Choose files or drop them here","drop-placeholder":"Drop files here...",accept:".png,.jpg,.jpeg"},on:{input:e.handleImageSelection},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}})],1)],1),t("b-col",{staticClass:"justify-content-end d-flex align-items-center",attrs:{md:"6"}},[e.uplodedImages?t("img",{staticClass:"img-fluid",attrs:{src:this.uplodedImages,alt:"",height:"50",width:"50"}}):e._e()]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModal()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.addPublisher()}}},[e._v("Add")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:e.showAddModalEdit,callback:function(t){e.showAddModalEdit=t},expression:"showAddModalEdit"}},[t("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[e._v(" Edit publisher ")]),t("b-row",{staticClass:"px-3"},[t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Enter publisher name","label-for":"input-title"}},[t("b-form-textarea",{staticStyle:{height:"34px"},attrs:{disabled:"",required:"",placeholder:"Enter name",type:"text",id:"input-name"},model:{value:e.getpublisherName,callback:function(t){e.getpublisherName=t},expression:"getpublisherName"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Contact number","label-for":"input-title"}},[t("b-form-textarea",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Phone number",type:"number",id:"input-phoneNumber"},model:{value:e.getphoneNumber,callback:function(t){e.getphoneNumber=t},expression:"getphoneNumber"}})],1)],1),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"Agency center code","label-for":"input-title"}},[t("b-form-textarea",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency"},model:{value:e.getcenterCode,callback:function(t){e.getcenterCode=t},expression:"getcenterCode"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Select Images","label-for":"input-images"}},[t("b-form-file",{attrs:{placeholder:"Choose files or drop them here","drop-placeholder":"Drop files here...",accept:".png,.jpg,.jpeg"},on:{input:e.handleImageSelection},model:{value:e.getImages,callback:function(t){e.getImages=t},expression:"getImages"}})],1)],1),t("b-col",{staticClass:"justify-content-end d-flex align-items-center py-2",attrs:{md:"6"}},[t("img",{staticClass:"img-fluid",attrs:{src:this.uplodedImages,alt:"",height:"50",width:"50"}})]),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.imgLoader?e._e():t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.closeModalEdit()}}},[e._v("Close")]),e.imgLoader?e._e():t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.editPublisher()}}},[e._v("Edit")]),e.imgLoader?t("div",{staticClass:"spinner spinner-primary imgloader"}):e._e()],1)])],1)],1),t("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-cancelReason",size:"md",title:"Reason for cancellation:","hide-footer":"","hide-header":"",centered:""}},[t("b-row",{staticClass:"p-3"},[t("b-col",{attrs:{md:"12"}},[t("i",{staticClass:"fa fa-exclamation-triangle text-danger mb-3",attrs:{"aria-hidden":"true"}},[e._v(" Reason for cancellation: ")])]),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:"","label-for":"input-2"}},[t("b-form-textarea",{staticStyle:{height:"100px"},attrs:{required:"",placeholder:"Reason for cancellation"},model:{value:e.cancelReasonText,callback:function(t){e.cancelReasonText=t},expression:"cancelReasonText"}})],1)],1),t("b-col",[t("div",{staticClass:"d-flex justify-content-end"},[e.updateloader?t("div",{staticClass:"spinner spinner-primary mr-3"}):e._e(),t("b-button",{staticClass:"mb-2 mr-2",on:{click:function(t){return e.clickCancle()}}},[e._v("Cancel")]),t("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(t){return e.clickRejectButton()}}},[e._v("ok")])],1)])],1)],1),e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("div",{},["admin"!=e.role?t("button",{staticClass:"btn btn-primary mb-3",on:{click:function(t){e.showAddModal=!0}}},[e._v(" Add New ")]):e._e(),t("div",{staticClass:"d-flex flex-column gap-5",staticStyle:{gap:"13px"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between px-32",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Filters ")]),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("li",[t("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[t("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),t("li",[t("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[t("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),t("div",{staticClass:"d-flex flex-row card-body",style:{display:e.flexDivDisplay}},[t("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[t("label",{attrs:{for:"users-list-search"}},[e._v("Search")]),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"gray","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"#87838317"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},e.onSearchTermChange]}})])]),t("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[t("label",{attrs:{for:"users-list-verified"}},[e._v("Action")]),t("fieldset",{staticClass:"form-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterStatus,expression:"filterStatus"}],staticClass:"form-control",staticStyle:{color:"gray","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"#87838317"},attrs:{id:"users-list-verified"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filterStatus=t.target.multiple?a:a[0]},e.onStatusChange]}},[t("option",{attrs:{value:""}},[e._v("All")]),t("option",{attrs:{value:"Approved"}},[e._v("Approved")]),t("option",{attrs:{value:"Rejected"}},[e._v("Rejected")]),t("option",{attrs:{value:"Under Review"}},[e._v("Under Review")])])])])])]),t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":e.paginationOptions,styleClass:"tableOne vgt-table",rows:e.filteredFaqs},scopedSlots:e._u([{key:"table-row",fn:function(a){return["actions"===a.column.field?t("span",["user"==e.role&&"Approved"!=a.row.status&&"Rejected"!=a.row.status?t("div",[t("span",{staticClass:"btn p-0",on:{click:function(t){return e.clickEdit(a.row)}}},[t("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"btn pl-3",on:{click:function(t){return e.clickDelete(a.row)}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]):"admin"==e.role&&"Approved"!=a.row.status&&"Rejected"!=a.row.status?t("div",{staticClass:"d-flex"},[t("div",{staticClass:"badge badge-success border mr-2 bg-success text-white ul-cursor--pointer p-2",on:{click:function(t){return e.clickAccept(a.row._id)}}},[e._v(" Approve ")]),t("div",{staticClass:"badge badge-danger border bg-danger text-white ul-cursor--pointer p-2",on:{click:function(t){return e.clickReject(a.row._id)}}},[e._v(" Reject ")])]):e._e(),t("div",["Approved"===a.row.status?t("div",[t("span",{staticClass:"badge badge-success"},[e._v(e._s(a.row.status))])]):"Rejected"===a.row.status?t("div",[t("span",{staticClass:"badge badge-danger"},[e._v(e._s(a.row.status))])]):e._e()])]):"reason_show"===a.column.field?t("span",[a.row.reason?t("div",[e._v(e._s(a.row.reason))]):t("div",[e._v("......")])]):"show_img"===a.column.field?t("span",[t("div",[t("img",{style:{width:"50px",height:"50px",borderRadius:"197px"},attrs:{src:a.row.icon,alt:""}})])]):e._e()]}}])})],1)])],1)},s=[],o=a("ade3"),i=a("c7eb"),l=a("1da1"),c=(a("caad"),a("2532"),a("25f0"),a("ac1f"),a("1276"),a("a15b"),a("fb6a"),{data:function(){return{flexDivDisplay:"flex!important",filteredFaqs:[],searchTerm:"",filterStatus:"",faqs:[],role:"",showAddModal:!1,showAddModalEdit:!1,editFAQData:{id:null,title:"",description:"",category:"Please Selected Category"},category:"Please Selected Category",loader:!1,imgLoader:!1,centerCode:"",rejectedId:"",phoneNumber:"",publisherName:"",getcenterCode:"",getphoneNumber:"",getpublisherName:"",searchUser:[],getImages:null,cancelReasonText:"",user_id:"",updateId:"",getUserName:"",uplodedImages:"",images:null,isEdit:!1,columns:[{label:"Icons",field:"show_img"},{label:"UserName",field:"user_name"},{label:"Contact number",field:"contact_number"},{label:"Agency code",field:"agency_center_code"},{label:"Reason",field:"reason_show"},{label:"Actions",sortable:!1,field:"actions",width:"150px",formatFn:function(){return'\n              <span class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>\n              <span class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>\n            '}}],paginationOptions:{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:"Next",prevLabel:"Previous"}}},mounted:function(){this.clearFilters(),this.filterData(),this.addCssRule()},computed:{containerClasses:function(){return{"large-container":this.isLarge,"important-container":this.isImportant}}},created:function(){this.filterData(),this.clearFilters(),this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.fetchPublisher(),localStorage.getItem("pageReloaded")?localStorage.removeItem("pageReloaded"):(localStorage.setItem("pageReloaded","true"),window.location.reload())},methods:(r={toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},filterData:function(){var e=this;this.filteredFaqs=this.faqs.filter((function(t){var a=t.user_name.toLowerCase().includes(e.searchTerm.toLowerCase())||t.contact_number.includes(e.searchTerm)||t.agency_center_code.includes(e.searchTerm)||t.reason&&t.reason.toLowerCase().includes(e.searchTerm.toLowerCase());console.log("matchesSearchTerm:",a);var r=""===e.filterStatus||t.status===e.filterStatus;return console.log("matchesStatus:",r),a&&r}))},onSearchTermChange:function(e){this.searchTerm=e.target.value,this.filterData()},onStatusChange:function(e){this.filterStatus=e.target.value,this.filterData()},clearFilters:function(){this.searchTerm="",this.filterStatus="",this.filterData()}},Object(o["a"])(r,"onSearchTermChange",(function(e){this.searchTerm=e.target.value,this.filterData()})),Object(o["a"])(r,"onStatusChange",(function(e){this.filterStatus=e.target.value,this.filterData()})),Object(o["a"])(r,"checkLength",(function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()})),Object(o["a"])(r,"clickCancle",(function(){this.$bvModal.hide("modal-cancelReason")})),Object(o["a"])(r,"checkLengthCode",(function(e){this.centerCode.toString().length>=10&&8!==e.keyCode&&e.preventDefault()})),Object(o["a"])(r,"fetchPublisher",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a="",a="admin"==e.role?"publisher/get-all":"user/get-all-members-publishers",t.next=6,new Promise((function(t,r){e.$apiService.getCall(a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 6:r=t.sent,r.error?e.$toaster.makeToast("warning",r.message):(e.faqs=r.apidata.data,e.filteredFaqs=e.faqs),e.loader=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","Error: Server Error");case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()})),Object(o["a"])(r,"handelUserField",(function(){var e=this;this.searchUser=this.faqs.filter((function(t){return t.user_name.toLowerCase().includes(e.publisherName.toLowerCase())}))})),Object(o["a"])(r,"fetchUser",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,new Promise((function(t,a){e.$apiService.getCall("auth/user/".concat(e.user_id)).then((function(e){return t(e)})).catch((function(e){return a(e)}))}));case 4:a=t.sent,console.log(a),a.error?e.$toaster.makeToast("warning",a.message):(e.loader=!1,e.getUserName=a.apidata.data.user_name),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","An error occurred while fetching the user");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()})),Object(o["a"])(r,"gethandleImageSelection",(function(){})),Object(o["a"])(r,"handleImageSelection",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.imgLoader=!0,t.prev=1,a=new FormData,e.images&&a.append("image",e.images),e.getImages&&a.append("image",e.getImages),t.next=7,new Promise((function(t,r){e.$apiService.postCall("util/image/",a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 7:r=t.sent,console.log("Image upload failed",r),r.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",r.message)):(e.imgLoader=!1,e.uplodedImages=r.apidata.url,e.$toaster.makeToast("success","Image upload successfully")),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),e.imgLoader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()})),Object(o["a"])(r,"truncateDescription",(function(e){var t=e.split(" ");return t.length>13?t.slice(0,13).join(" ")+"...":e})),Object(o["a"])(r,"clickAccept",(function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var r,n;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r={status:"Approved"},a.next=4,t.$apiService.postCall("publisher/update-publisher-status/".concat(e),r);case 4:n=a.sent,console.log(n),n.error?(t.loader=!1,t.$toaster.makeToast("warning",n.message)):(t.loader=!1,t.$toaster.makeToast("success","Status Approved successfully"),t.fetchPublisher()),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),t.loader=!1,t.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()})),Object(o["a"])(r,"clickReject",(function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$bvModal.show("modal-cancelReason"),t.rejectedId=e;case 2:case"end":return a.stop()}}),a)})))()})),Object(o["a"])(r,"addPublisher",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.images&&e.phoneNumber&&e.centerCode&&e.publisherName){t.next=4;break}return e.$toaster.makeToast("warning","Please fill in all the required fields"),setTimeout((function(){return e.errorMessage=""}),2e3),t.abrupt("return");case 4:if(!(e.searchUser.length>0)){t.next=8;break}e.$toaster.makeToast("warning","Publisher Name already exist"),t.next=21;break;case 8:return e.loader=!0,t.prev=9,a={user_name:e.publisherName,contact_number:e.phoneNumber,agency_center_code:e.centerCode,icon:e.uplodedImages,user_id:e.user_id},t.next=13,e.$apiService.postCall("publisher/create/",a);case 13:r=t.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.fetchPublisher(),e.isEdit=!1,e.showAddModal=!1,e.loader=!1,e.publisherName="",e.centerCode="",e.phoneNumber="",e.uplodedImages=null,e.$toaster.makeToast("success","Data added successfully")),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](9),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 21:case"end":return t.stop()}}),t,null,[[9,17]])})))()})),Object(o["a"])(r,"editPublisher",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a={contact_number:e.getphoneNumber,agency_center_code:e.getcenterCode,icon:e.uplodedImages},t.next=5,e.$apiService.postCall("publisher/update/".concat(e.updateId),a);case 5:r=t.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.fetchPublisher(),e.closeModalEdit(),e.loader=!1,e.$toaster.makeToast("success","Data update successfully")),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()})),Object(o["a"])(r,"clickEdit",(function(e){this.updateId=e._id,this.getcenterCode=e.agency_center_code,this.getphoneNumber=e.contact_number,this.getpublisherName=e.user_name,this.images=e.icon,this.uplodedImages=e.icon,console.log(e.icon),this.showAddModalEdit=!0})),Object(o["a"])(r,"clickRejectButton",(function(){this.cancelReasonText&&this.cancelReasonText.length>=10?this.deletePublisher():this.$toaster.makeToast("warning","Please enter a cancel reason with at least 10 characters")})),Object(o["a"])(r,"deletePublisher",(function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,a={status:"Rejected",reason:e.cancelReasonText},t.next=5,e.$apiService.postCall("publisher/update-publisher-status/".concat(e.rejectedId),a);case 5:r=t.sent,console.log(r),r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.loader=!1,e.$toaster.makeToast("success","Status Rejected successfully"),e.$bvModal.hide("modal-cancelReason"),e.fetchPublisher()),t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](1),e.$bvModal.hide("modal-cancelReason"),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 15:case"end":return t.stop()}}),t,null,[[1,10]])})))()})),Object(o["a"])(r,"clickDelete",(function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var r,n;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 3:if(r=a.sent,!r.value){a.next=11;break}return a.next=7,t.$apiService.postCall("publisher/delete/".concat(e._id));case 7:n=a.sent,n.isError?t.$toaster.makeToast("warning","Failed to delete publisher "):(t.loader=!1,t.fetchPublisher(),t.$toaster.makeToast("success","Your Publisher has been deleted"),t.loader=!1),a.next=13;break;case 11:t.loader=!1,console.log("Deletion canceled by user");case 13:a.next=20;break;case 15:a.prev=15,a.t0=a["catch"](0),t.$toaster.makeToast("warning","Error: Server Error"),t.loader=!1,console.error("Error deleting FAQ:",a.t0);case 20:case"end":return a.stop()}}),a,null,[[0,15]])})))()})),Object(o["a"])(r,"closeModal",(function(){this.isEdit=!1,this.phoneNumber="",this.centerCode="",this.publisherName="",this.uplodedImages=null,this.showAddModal=!1})),Object(o["a"])(r,"closeModalEdit",(function(){this.showAddModalEdit=!1})),Object(o["a"])(r,"addCssRule",(function(){var e=document.createElement("style");e.type="text/css";var t="#modal-add .modal-content,#modal-add___BV_modal_content_ .modal-content {  padding: 1em !important;}";e.appendChild(document.createTextNode(t)),document.head.appendChild(e)})),r)}),d=c,u=(a("dddb"),a("2877")),p=Object(u["a"])(d,n,s,!1,null,"5917351d",null);t["default"]=p.exports},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("c65b"),n=a("e330"),s=a("577e"),o=a("ad6d"),i=a("9f7f"),l=a("5692"),c=a("7c73"),d=a("69f3").get,u=a("fce3"),p=a("107c"),h=l("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,f=m,b=n("".charAt),g=n("".indexOf),v=n("".replace),x=n("".slice),w=function(){var e=/a/,t=/b*/g;return r(m,e,"a"),r(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=i.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],y=w||k||C||u||p;y&&(f=function(e){var t,a,n,i,l,u,p,y=this,_=d(y),S=s(e),j=_.raw;if(j)return j.lastIndex=y.lastIndex,t=r(f,j,S),y.lastIndex=j.lastIndex,t;var I=_.groups,O=C&&y.sticky,E=r(o,y),T=y.source,R=0,A=S;if(O&&(E=v(E,"y",""),-1===g(E,"g")&&(E+="g"),A=x(S,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==b(S,y.lastIndex-1))&&(T="(?: "+T+")",A=" "+A,R++),a=new RegExp("^(?:"+T+")",E)),k&&(a=new RegExp("^"+T+"$(?!\\s)",E)),w&&(n=y.lastIndex),i=r(m,O?a:y,A),O?i?(i.input=x(i.input,R),i[0]=x(i[0],R),i.index=y.lastIndex,y.lastIndex+=i[0].length):y.lastIndex=0:w&&i&&(y.lastIndex=y.global?i.index+i[0].length:n),k&&i&&i.length>1&&r(h,i[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&I)for(i.groups=u=c(null),l=0;l<I.length;l++)p=I[l],u[p[0]]=i[p[1]];return i}),e.exports=f},"9f7f":function(e,t,a){var r=a("d039"),n=a("da84"),s=n.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=o||r((function(){return!s("a","y").sticky})),l=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:i,UNSUPPORTED_Y:o}},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},d362:function(e,t,a){},d784:function(e,t,a){"use strict";a("ac1f");var r=a("e330"),n=a("cb2d"),s=a("9263"),o=a("d039"),i=a("b622"),l=a("9112"),c=i("species"),d=RegExp.prototype;e.exports=function(e,t,a,u){var p=i(e),h=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=h&&!o((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return t=!0,null},a[p](""),!t}));if(!h||!m||a){var f=r(/./[p]),b=t(p,""[e],(function(e,t,a,n,o){var i=r(e),l=t.exec;return l===s||l===d.exec?h&&!o?{done:!0,value:f(t,a,n)}:{done:!0,value:i(a,t,n)}:{done:!1}}));n(String.prototype,e,b[0]),n(d,p,b[1])}u&&l(d[p],"sham",!0)}},dddb:function(e,t,a){"use strict";a("d362")},fce3:function(e,t,a){var r=a("d039"),n=a("da84"),s=n.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);