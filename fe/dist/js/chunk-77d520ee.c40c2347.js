(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d520ee"],{"25f0":function(e,t,a){"use strict";var r=a("5e77").PROPER,n=a("cb2d"),s=a("825a"),i=a("577e"),o=a("d039"),c=a("90d8"),l="toString",u=RegExp.prototype,d=u[l],f=o((function(){return"/a/b"!==d.call({source:"a",flags:"b"})})),p=r&&d.name!==l;(f||p)&&n(u,l,(function(){var e=s(this),t=i(e.source),a=i(c(e));return"/"+t+"/"+a}),{unsafe:!0})},"90d8":function(e,t,a){"use strict";var r=a("c65b"),n=a("1a2d"),s=a("3a9b"),i=a("ad6d"),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||n(e,"flags")||!s(o,e)?t:r(i,e)}},"9a28":function(e,t,a){},"9a4b":function(e,t,a){"use strict";a("9a28")},a15b:function(e,t,a){"use strict";var r=a("23e7"),n=a("e330"),s=a("44ad"),i=a("fc6a"),o=a("a640"),c=n([].join),l=s!==Object,u=l||!o("join",",");r({target:"Array",proto:!0,forced:u},{join:function(e){return c(i(this),void 0===e?",":e)}})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},d470:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[e.loader?t("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):e._e(),t("div",{staticClass:"d-flex flex-column gap-5",staticStyle:{gap:"13px"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e._m(0),t("div",{staticClass:"heading-elements"},[t("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[t("li",[t("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:e.toggleFlexDiv}},[t("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),t("li",[t("a",{attrs:{"data-action":" pe-auto"},on:{click:e.clearFilters}},[t("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),t("div",{staticClass:"d-flex flex-row card-body flex-wrap"},[t("b-form-group",{attrs:{label:"As Of Date","label-for":"input-date"}},[t("b-form-input",{staticClass:"form-control",attrs:{type:"date",id:"end-date"},on:{change:e.handelDate},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1),t("b-form-group",{staticClass:"mx-4",attrs:{label:"Select File","label-for":"input-images"}},[t("b-form-file",{staticClass:"ul-cursor--pointer",attrs:{accept:".xlsx, .xls",placeholder:"Choose files or drop them here","drop-placeholder":"Drop files here..."},on:{change:e.handleFileUpload}})],1),t("div",{staticClass:"d-flex justify-content-center align-items-center"},[t("b-button",{staticClass:"mt-2",staticStyle:{height:"34px"},attrs:{variant:"primary"},on:{click:function(t){return e.saveExcelData()}}},[e._v("Upload")])],1)],1)]),t("div",{staticClass:"d-flex flex-column gap-5 card",staticStyle:{gap:"13px"}},[e._m(1),t("div",{staticClass:"card-body"},[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!1,"pagination-options":e.paginationOptions,styleClass:"tableOne vgt-table",rows:e.rowsData},scopedSlots:e._u([{key:"table-row",fn:function(a){return["actions"===a.column.field?t("span",[t("div",[t("i",{staticClass:"fa fa-eye ul-cursor--pointer",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.clickView(a.row)}}})])]):"excel_url_show"===a.column.field?t("span",[t("div",[t("a",{attrs:{href:a.row.excel_url,target:"_blank",rel:"noopener noreferrer"}},[e._v("View Uploaded File")])])]):"reason_show"===a.column.field?t("span",[a.row.reason?t("div",[e._v(e._s(a.row.reason))]):t("div",[e._v("......")])]):"show_img"===a.column.field?t("span",[t("div",[t("img",{style:{width:"50px",height:"50px",borderRadius:"197px"},attrs:{src:a.row.icon,alt:""}})])]):e._e()]}}])})],1)])])])},n=[function(){var e=this,t=e._self._c;return t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t("span",[e._v("Upload File "),t("i",{staticClass:"fa fa-plus ml-2",attrs:{"aria-hidden":"true"}})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[t("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[e._v(" Uploaded File ")])])}],s=a("c7eb"),i=a("1da1"),o=(a("4de4"),a("caad"),a("a15b"),a("fb6a"),a("d3b7"),a("25f0"),a("2532"),a("159b4"),a("c1df")),c=a.n(o),l={data:function(){return{flexDivDisplay:"flex!important",role:"",user_id:"",loader:!1,imgLoader:!1,rowsData:[],selectExcelFile:null,uplodedFile:null,selectDate:null,columns:[{label:"As Of Date",field:"date",sortable:!1},{label:"File",field:"excel_url_show",sortable:!1}],paginationOptions:{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:"Next",prevLabel:"Previous"}}},mounted:function(){},computed:{containerClasses:function(){return{"large-container":this.isLarge,"important-container":this.isImportant}}},created:function(){this.user_id=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.fetchExcelData()},methods:{clickUploadFile:function(){this.$refs.fileInput.click()},handelDate:function(e){},handleFileUpload:function(e){var t=e.target.files[0];this.selectExcelFile=t},saveExcelData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.selectExcelFile||!e.selectDate){t.next=18;break}return e.loader=!0,t.prev=2,a=new FormData,a.append("excel",e.selectExcelFile),a.append("date",e.selectDate),t.next=8,new Promise((function(t,r){e.$apiService.postCall("util/upload-excel/",a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 8:r=t.sent,r.error?(e.loader=!1,e.$toaster.makeToast("warning",r.message)):(e.loader=!1,e.uplodedFile=r.apidata.url,e.fetchExcelData(),e.$toaster.makeToast("success","File upload successfully")),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](2),e.loader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 16:t.next=19;break;case 18:e.$toaster.makeToast("warning","Please select a file and date");case 19:case"end":return t.stop()}}),t,null,[[2,12]])})))()},clickView:function(e){},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},filterData:function(){var e=this;this.filteredFaqs=this.faqs.filter((function(t){var a=t.user_name.toLowerCase().includes(e.searchTerm.toLowerCase())||t.contact_number.includes(e.searchTerm)||t.agency_center_code.includes(e.searchTerm)||t.reason&&t.reason.toLowerCase().includes(e.searchTerm.toLowerCase()),r=""===e.filterStatus||t.status===e.filterStatus;return a&&r}))},clearFilters:function(){this.searchTerm="",this.filterStatus="",this.filterData()},onSearchTermChange:function(e){this.searchTerm=e.target.value,this.filterData()},onStatusChange:function(e){this.filterStatus=e.target.value,this.filterData()},checkLength:function(e){this.phoneNumber.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},clickCancle:function(){this.$bvModal.hide("modal-cancelReason")},checkLengthCode:function(e){this.centerCode.toString().length>=10&&8!==e.keyCode&&e.preventDefault()},fetchExcelData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,new Promise((function(t,a){e.$apiService.getCall("excel/").then((function(e){return t(e)})).catch((function(e){return a(e)}))}));case 4:a=t.sent,a.error?e.$toaster.makeToast("warning",a.message):(r=a.apidata.data,e.rowsData=r,r.forEach((function(e){e.date=c()(e.date).format("DD MMM YYYY")})),console.log("paymentData",r),e.rows=r,e.loader=!1),e.loader=!1,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","Error: Server Error");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},handelUserField:function(){var e=this;this.searchUser=this.faqs.filter((function(t){return t.user_name.toLowerCase().includes(e.publisherName.toLowerCase())}))},fetchUser:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.prev=1,t.next=4,new Promise((function(t,a){e.$apiService.getCall("auth/user/".concat(e.user_id)).then((function(e){return t(e)})).catch((function(e){return a(e)}))}));case 4:a=t.sent,a.error?e.$toaster.makeToast("warning",a.message):(e.loader=!1,e.getUserName=a.apidata.data.user_name),t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](1),e.loader=!1,console.error(t.t0),e.$toaster.makeToast("warning","An error occurred while fetching the user");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},gethandleImageSelection:function(){},handleImageSelection:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.imgLoader=!0,t.prev=1,a=new FormData,e.images&&a.append("image",e.images),e.getImages&&a.append("image",e.getImages),t.next=7,new Promise((function(t,r){e.$apiService.postCall("util/image/",a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}));case 7:r=t.sent,r.error?(e.imgLoader=!1,e.$toaster.makeToast("warning",r.message)):(e.imgLoader=!1,e.uplodedImages=r.apidata.url,e.$toaster.makeToast("success","Image upload successfully")),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),e.imgLoader=!1,e.$toaster.makeToast("warning","Error: Server Error");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},truncateDescription:function(e){var t=e.split(" ");return t.length>13?t.slice(0,13).join(" ")+"...":e},addCssRule:function(){var e=document.createElement("style");e.type="text/css";var t="#modal-add .modal-content,#modal-add___BV_modal_content_ .modal-content {  padding: 1em !important;}";e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}}},u=l,d=(a("9a4b"),a("2877")),f=Object(d["a"])(u,r,n,!1,null,"1fdebe57",null);t["default"]=f.exports}}]);