(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bda66ef6"],{"1c66":function(t,a,e){"use strict";e("7283")},"498a":function(t,a,e){"use strict";var r=e("23e7"),s=e("58a8").trim,i=e("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return s(this)}})},"4a6f":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=this,e=a._self._c;return e("div",{staticClass:"main-content d-flex flex-column",staticStyle:{gap:"12px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[a._v(" Filters ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[e("li",[e("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:a.toggleFlexDiv}},[e("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),e("li",[e("a",{attrs:{"data-action":" pe-auto"},on:{click:a.clearFilters}},[e("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),e("b-row",{staticClass:"px-3 pb-3 pt-2 mt-1",style:{display:a.flexDivDisplay}},[e("b-col",{attrs:{md:"3"}},[e("label",{attrs:{for:"users-list-search"}},[a._v("Search")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:a.searchTerm},on:{input:function(t){t.target.composing||(a.searchTerm=t.target.value)}}})])]),e("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[e("label",{attrs:{for:"users-list-search"}},[a._v("Select Start Date")]),e("v2-datepicker",{ref:"startDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:"Select Start date"},on:{change:a.changeStartDate},model:{value:a.startDate,callback:function(t){a.startDate=t},expression:"startDate"}})],1),e("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[e("label",{attrs:{for:"users-list-search"}},[a._v("Select End Date")]),e("v2-datepicker",{ref:"endDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(a){return a.getTime()<new Date(t.startDate).getTime()}},disabled:!this.startDate,placeholder:"Select End date"},on:{change:a.changeEndDate},model:{value:a.endDate,callback:function(t){a.endDate=t},expression:"endDate"}})],1),e("b-col",{attrs:{md:"3"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("label",{attrs:{for:"users-list-verified"}},[a._v("Min Earnings")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchAmount,expression:"searchAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount",placeholder:"Enter min earning"},domProps:{value:a.searchAmount},on:{input:function(t){t.target.composing||(a.searchAmount=t.target.value)}}})])]),e("b-col",{attrs:{md:"6"}},[e("label",{attrs:{for:"users-list-verified"}},[a._v("Max Earnings")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchMaxAmount,expression:"searchMaxAmount"}],staticClass:"form-control",staticStyle:{color:"grey",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"number",id:"users-list-amount-max",placeholder:"Enter max earning"},domProps:{value:a.searchMaxAmount},on:{input:function(t){t.target.composing||(a.searchMaxAmount=t.target.value)}}})])])],1)],1)],1)],1),e("div",{staticClass:"card"},[e("div",{staticClass:"font-weight-bold fa-2x text-light d-flex justify-content-between"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[a._v(" Creators ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[e("button",{staticClass:"btn btn-primary mb-3 d-none",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(t){return a.addnewcreator()}}},[a._v(" Add New ")])])])])]),a.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):a._e(),e("div",{staticClass:"card-body"},[e("vue-good-table",{attrs:{columns:a.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:a.filteredRows},scopedSlots:a._u([{key:"table-row",fn:function(t){return["earning_show"===t.column.field?e("span",[e("div",[a._v(a._s(t.row.earning)+"$")])]):"diamond_show"===t.column.field?e("span",[e("div",[e("i",{staticClass:"fa fa-diamond mr-1",attrs:{"aria-hidden":"true"}}),a._v(" "+a._s(t.row.diamonds_this_month)+" ")])]):"status_show"===t.column.field?e("span",["Approved"===t.row.status?e("div",[e("span",{staticClass:"badge badge-success"},[a._v(a._s(t.row.status))])]):"Rejected"===t.row.status?e("div",[e("span",{staticClass:"badge badge-danger"},[a._v(a._s(t.row.status))])]):"Waiting Approval"===t.row.status?e("div",[e("span",{staticClass:"badge border border-warning text-warning p-1"},[a._v(a._s(t.row.status))])]):"Pending Registration"===t.row.status?e("div",[e("span",{staticClass:"badge border-warning text-warning border p-1"},[a._v(a._s(t.row.status))])]):a._e()]):"payment_status"===t.column.field?e("span",[["Paid"===t.row.payment_status?e("b-badge",{attrs:{variant:"success"}},[a._v("Paid")]):e("b-badge",{attrs:{variant:"danger"}},[a._v("Unpaid")])]],2):a._e()]}}])})],1)])])},s=[],i=(e("4de4"),e("caad"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("2532"),e("5319"),e("498a"),e("159b4"),e("c1df")),n=e.n(i),o=e("b654"),l=e.n(o),c=(e("5873"),e("a29f"),{metaInfo:{title:"Profile"},components:{},data:function(){return{searchAmount:"",searchMaxAmount:"",startDate:"",endDate:"",searchTerm:"",creatorId:"",getUserName:"",userId:"",userimage:"",loader:!1,flexDivDisplay:"flex!important",rows:[],columns:[{label:"Affiliated With",field:"affiliated_with"},{label:"Diamonds This Month",field:"diamond_show"},{label:"Earnings This Month",field:"earning_show"},{label:"Date",field:"as_of_date"}],backgroundImage:e("1419")}},computed:{filteredRows:function(){var t=this,a=this.searchTerm.toLowerCase().trim(),e=this.searchAmount.trim(),r=this.searchMaxAmount.trim();return this.rows.filter((function(s){var i=!a||(s.as_of_date&&s.as_of_date.toLowerCase().includes(a)||s.creator_inf&&s.creator_inf.toLowerCase().includes(a)||s.diamonds_this_month&&String(s.diamonds_this_month).toLowerCase().includes(a)||s.earning&&String(s.earning).toLowerCase().includes(a)||s.affiliated_with&&s.affiliated_with.toLowerCase().includes(a)),n=s.earning,o=(!e||n>=e)&&(!r||n<=r),l=new Date(s.as_of_date),c=(!t.startDate||l>=new Date(t.startDate))&&(!t.endDate||l<=new Date(t.endDate));return i&&c&&o}))}},created:function(){this.getUserName=this.$route.query.userName,this.getCreatorsData(),this.clearFilters()},methods:{clearFilters:function(){this.searchTerm="",this.startDate="",this.endDate=""},formatPrice:function(t){var a=(t/1).toFixed(0).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getTotalBalance:function(){var t=this;this.loader=!0,this.$apiService.getCall("totalBalance/?userId=".concat(this.userId)).then((function(a){a.apidata.isError?(t.securityBalance=0,t.totalBalance=0,t.userBalance=0,t.referralBalance=0):(a.apidata.total_balance>=0?t.totalBalance=a.apidata.total_balance:t.totalBalance=0,a.apidata.security_balance>=0?t.securityBalance=a.apidata.security_balance:t.securityBalance=0,a.apidata.wallet_balance>=0?t.userBalance=a.apidata.wallet_balance:t.userBalance=0,a.apidata.referral_balance>=0?t.referralBalance=a.apidata.referral_balance:t.referralBalance=0),t.loader=!1})).catch((function(a){t.userBalance=0,t.securityBalance=0,t.totalBalance=0,t.referralBalance=0,t.loader=!1}))},changeStartDate:function(t){this.startDate=n()(t).format("DD MMM YYYY")},changeEndDate:function(t){this.endDate=n()(t).format("DD MMM YYYY")},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},getCreatorsData:function(){var t=this;this.loader=!0,this.$apiService.postCall("publisher/get-creator-details?username=".concat(this.getUserName)).then((function(a){console.log(a);var e=[];a.apidata.length>0&&(e=a.apidata,e.forEach((function(t){t.as_of_date=t.as_of_date?n()(t.as_of_date).format("DD MMM YYYY"):""}))),t.rows=e,t.loader=!1})).catch((function(a){t.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),t.loader=!1}))}}}),d=c,u=(e("1c66"),e("2877")),f=Object(u["a"])(d,r,s,!1,null,"3cec572b",null);a["default"]=f.exports},7283:function(t,a,e){},c8d2:function(t,a,e){"use strict";var r=e("5e77").PROPER,s=e("d039"),i=e("5899"),n="​᠎";t.exports=function(t){return s((function(){return!!i[t]()||n[t]()!==n||r&&i[t].name!==t}))}}}]);