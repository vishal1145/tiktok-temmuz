(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6053cb08"],{"24da":function(t,a,e){},"294e":function(t,a,e){"use strict";e("24da")},"498a":function(t,a,e){"use strict";var s=e("23e7"),r=e("58a8").trim,i=e("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},"4a6f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content d-flex flex-column",staticStyle:{gap:"12px"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Filters ")]),a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[a("li",[a("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:t.toggleFlexDiv}},[a("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{"data-action":" pe-auto"},on:{click:t.clearFilters}},[a("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),a("b-row",{staticClass:"px-3 pb-3 pt-2 mt-1",style:{display:t.flexDivDisplay}},[a("b-col",{attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v("Search")]),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:function(a){a.target.composing||(t.searchTerm=a.target.value)}}})])]),a("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v("Select Start Date")]),a("v2-datepicker",{ref:"startDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:"Select Start date"},on:{change:t.changeStartDate},model:{value:t.startDate,callback:function(a){t.startDate=a},expression:"startDate"}})],1),a("b-col",{staticClass:"d-flex flex-column",attrs:{md:"3"}},[a("label",{attrs:{for:"users-list-search"}},[t._v("Select End Date")]),a("v2-datepicker",{ref:"endDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:"Select End date"},on:{change:t.changeEndDate},model:{value:t.endDate,callback:function(a){t.endDate=a},expression:"endDate"}})],1)],1)],1),a("div",{staticClass:"card"},[a("div",{staticClass:"font-weight-bold fa-2x text-light d-flex justify-content-between"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[a("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Creators ")]),a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[a("button",{staticClass:"btn btn-primary mb-3 d-none",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(a){return t.addnewcreator()}}},[t._v(" Add New ")])])])])]),t.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),a("div",{staticClass:"card-body"},[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:t.filteredRows},scopedSlots:t._u([{key:"table-row",fn:function(e){return["earning_show"===e.column.field?a("span",[a("div",[t._v(t._s(e.row.earning)+"$")])]):"diamond_show"===e.column.field?a("span",[a("div",[a("i",{staticClass:"fa fa-diamond mr-1",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e.row.diamonds_this_month)+" ")])]):"status_show"===e.column.field?a("span",["Approved"===e.row.status?a("div",[a("span",{staticClass:"badge badge-success"},[t._v(t._s(e.row.status))])]):"Rejected"===e.row.status?a("div",[a("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.row.status))])]):"Waiting Approval"===e.row.status?a("div",[a("span",{staticClass:"badge border border-warning text-warning p-1"},[t._v(t._s(e.row.status))])]):"Pending Registration"===e.row.status?a("div",[a("span",{staticClass:"badge border-warning text-warning border p-1"},[t._v(t._s(e.row.status))])]):t._e()]):"payment_status"===e.column.field?a("span",[["Paid"===e.row.payment_status?a("b-badge",{attrs:{variant:"success"}},[t._v("Paid")]):a("b-badge",{attrs:{variant:"danger"}},[t._v("Unpaid")])]],2):t._e()]}}])})],1)])])},r=[],i=(e("4de4"),e("caad"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("2532"),e("5319"),e("498a"),e("159b4"),e("c1df")),n=e.n(i),o=e("b654"),l=e.n(o),c=(e("5873"),e("a29f"),{metaInfo:{title:"Profile"},components:{},data:function(){return{startDate:"",endDate:"",searchTerm:"",creatorId:"",userId:"",userimage:"",loader:!1,flexDivDisplay:"flex!important",rows:[],columns:[{label:"Affiliated With",field:"affiliated_with"},{label:"Diamonds This Month",field:"diamond_show"},{label:"Earnings This Month",field:"earning_show"},{label:"Date",field:"as_of_date"}],backgroundImage:e("1419")}},computed:{filteredRows:function(){var t=this,a=this.searchTerm.toLowerCase().trim();return console.log("query",a),console.log("rowandar",this.rows),this.rows.filter((function(e){var s=!a||(e.as_of_date&&e.as_of_date.toLowerCase().includes(a)||e.creator_inf&&e.creator_inf.toLowerCase().includes(a)||e.diamonds_this_month&&String(e.diamonds_this_month).toLowerCase().includes(a)||e.earning&&String(e.earning).toLowerCase().includes(a)||e.affiliated_with&&e.affiliated_with.toLowerCase().includes(a)),r=e.as_of_date,i=(!t.startDate||r>=t.startDate)&&(!t.endDate||r<=t.endDate+1);return s&&i}))}},created:function(){this.userId=this.$route.query.uid,this.creatorId=this.$route.query.cid,this.getCreatorsData(),this.clearFilters()},methods:{clearFilters:function(){this.searchTerm="",this.startDate="",this.endDate=""},formatPrice:function(t){var a=(t/1).toFixed(0).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getTotalBalance:function(){var t=this;this.loader=!0,this.$apiService.getCall("totalBalance/?userId=".concat(this.userId)).then((function(a){a.apidata.isError?(t.securityBalance=0,t.totalBalance=0,t.userBalance=0,t.referralBalance=0):(a.apidata.total_balance>=0?t.totalBalance=a.apidata.total_balance:t.totalBalance=0,a.apidata.security_balance>=0?t.securityBalance=a.apidata.security_balance:t.securityBalance=0,a.apidata.wallet_balance>=0?t.userBalance=a.apidata.wallet_balance:t.userBalance=0,a.apidata.referral_balance>=0?t.referralBalance=a.apidata.referral_balance:t.referralBalance=0),t.loader=!1})).catch((function(a){t.userBalance=0,t.securityBalance=0,t.totalBalance=0,t.referralBalance=0,t.loader=!1}))},changeStartDate:function(t){this.startDate=n()(t).format("DD MMM YYYY")},changeEndDate:function(t){this.endDate=n()(t).format("DD MMM YYYY")},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},getCreatorsData:function(){var t=this;this.loader=!0;var a={creator_id:this.creatorId,user_id:this.userId};this.$apiService.postCall("publisher/get-creator-details",a).then((function(a){console.log(a);var e=[];a.apidata.length>0&&(e=a.apidata,e.forEach((function(t){t.as_of_date=t.as_of_date?n()(t.as_of_date).format("DD MMM YYYY"):""}))),t.rows=e,t.loader=!1})).catch((function(a){t.$toaster.makeToast("warning",l.a.ERROR_MESSAGE),t.loader=!1}))}}}),d=c,u=(e("294e"),e("2877")),f=Object(u["a"])(d,s,r,!1,null,"073344ef",null);a["default"]=f.exports},c8d2:function(t,a,e){"use strict";var s=e("5e77").PROPER,r=e("d039"),i=e("5899"),n="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||n[t]()!==n||s&&i[t].name!==t}))}}}]);