(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553d3a4c"],{"0ed9":function(t,a,e){t.exports=e.p+"img/photo-wide-3.b6a0740a.jpg"},"25f0":function(t,a,e){"use strict";var s=e("5e77").PROPER,r=e("cb2d"),o=e("825a"),i=e("577e"),n=e("d039"),l=e("90d8"),d="toString",c=RegExp.prototype,p=c[d],m=n((function(){return"/a/b"!==p.call({source:"a",flags:"b"})})),h=s&&p.name!==d;(m||h)&&r(c,d,(function(){var t=o(this),a=i(t.source),e=i(l(t));return"/"+a+"/"+e}),{unsafe:!0})},"903f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("b-modal",{attrs:{id:"modal-addMember",size:"md","hide-footer":"","hide-header":"",centered:""}},[a("b-row",{},[a("b-col",{attrs:{md:"12"}},[a("label",{staticClass:"pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(" Add Creators ")])]),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"TikTok Username","label-for":"input-tiktok-username"}},[a("b-form-input",{attrs:{required:"",placeholder:"TikTok username",type:"text",id:"input-tiktok-username"},model:{value:t.tiktok_username,callback:function(a){t.tiktok_username=a},expression:"tiktok_username"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Agency Center Code","label-for":"input-agency-center-code"}},[a("b-form-input",{attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency-center-code"},on:{keydown:t.checkLengthCode},model:{value:t.center_code,callback:function(a){t.center_code=a},expression:"center_code"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"d-flex justify-content-end"},[t.popupLoader?a("div",{staticClass:"spinner spinner-primary"}):t._e(),t.popupLoader?t._e():a("b-button",{staticClass:"mr-2",on:{click:function(a){return t.clickCancle()}}},[t._v("Cancel")]),t.popupLoader?t._e():a("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.clickAddMember()}}},[t._v("Add")])],1)])],1)],1),a("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-show-referralUrl",size:"md","hide-footer":"","hide-header":"",centered:""}},[a("b-row",{},[a("b-col",{attrs:{md:"12"}},[a("h4",{staticClass:"mb-2"},[t._v("Referral Url")])]),a("b-col",{attrs:{md:"12"}},[a("span",[a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:t.referralUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.referralUrl))])])]),a("b-col",[a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{staticClass:"mb-2 mr-2",on:{click:function(a){return t.clickCancle()}}},[t._v("Cancel")])],1)])],1)],1),a("b-row",[a("b-col",[a("div",{staticClass:"card",staticStyle:{"margin-bottom":"1rem"}},[a("Referal")],1)]),a("b-col",{staticStyle:{display:"none"},attrs:{lg:"6",xl:"6",md:"6",sm:"6"}},[a("b-card",{staticClass:"mb-30 o-hidden",attrs:{"no-body":"",title:""}},[a("div",{staticClass:"ul-widget__chart-info"},[a("h5",{staticClass:"text-muted text-10"},[a("i",{staticClass:"fa fa-diamond",attrs:{"aria-hidden":"true"}}),t._v(" Diamond")]),a("div",{staticClass:"ul-widget__chart-number"},[a("h2",{staticClass:"t-font-boldest"},[a("i",{staticClass:"fa fa-diamond",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.totalDiamondData))])])]),a("b-card-body",{staticClass:"ul-card__widget-chart"},[a("div",{attrs:{id:"basicArea-chart"}},[a("apexchart",{attrs:{type:"area",height:"150",options:t.yearAreaWidget.chartOptions,series:t.diamondsDataGraph.series}})],1)])],1)],1),a("b-col",{staticStyle:{display:"none"},attrs:{lg:"6",xl:"6",md:"6",sm:"6"}},[a("b-card",{staticClass:"mb-30 o-hidden",attrs:{"no-body":"",title:""}},[a("div",{staticClass:"ul-widget__chart-info"},[a("h5",{staticClass:"text-muted text-10"},[t._v("Earning")]),a("div",{staticClass:"ul-widget__chart-number"},[a("h2",{staticClass:"t-font-boldest"},[t._v("$"+t._s(t.totalEarningData))])])]),a("b-card-body",{staticClass:"ul-card__widget-chart"},[a("div",{attrs:{id:"basicArea-chart"}},[a("apexchart",{attrs:{type:"area",height:"150",options:t.earningsDataGraph.chartOptions,series:t.earningsDataGraph.series}})],1)])],1)],1),a("b-col",{staticClass:"mb-30",attrs:{xl:"12",md:"12"}},[a("div",{staticClass:"o-hidden",attrs:{"no-body":""}},[a("div",{attrs:{"header-bg-variant":"transparent"}},[a("b-row",{staticStyle:{"align-items":"center"}},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"ul-card-widget__head-label"},[a("h5",{staticClass:"card-title"},[t._v("Finance Summary")])])])],1)],1),a("div",[a("b-row",{staticClass:"px-1"},[a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-10 text-center"},[a("i",{staticClass:"i-Money-2"}),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0",staticStyle:{width:"120px"}},[t._v("Diamonds Revenue")]),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"},[t._v(t._s(t.totalDiamondData))])])])],1),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-10 text-center"},[a("i",{staticClass:"i-Wallet"}),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0",staticStyle:{width:"120px"}},[t._v("Earnings Revenue")]),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"},[t._v(t._s(t.totalEarningData))])])])],1)],1)],1),a("div",{staticClass:"mt-2",attrs:{id:"basicArea-chart"}},[a("apexchart",{attrs:{type:"area",height:"150",options:t.yearAreaWidget.chartOptions,series:t.yearAreaWidget.series}})],1)])]),a("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"4",md:"12"}},[a("b-card",{staticClass:"o-hidden",attrs:{title:"Stacked Pie Chart"}},[a("apexchart",{attrs:{type:"polarArea",height:"254",options:t.dashboardFive.chartOptions,series:t.dashboardFive.series}})],1)],1),a("b-col",{staticClass:"mb-30 d-none",attrs:{md:"12",xl:"8"}},[a("b-card",{staticClass:"wrapper o-hidden h-100",attrs:{title:""}},[a("vue-good-table",{attrs:{"fixed-header":!0,columns:t.columns,styleClass:"tableOne text-left vgt-table","row-style-class":"text-left",rows:t.rows},scopedSlots:t._u([{key:"table-row",fn:function(e){return["img"==e.column.field?a("span",[a("img",{staticClass:"rounded",staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.img,alt:"corrupted img"}})]):t._e()]}}])})],1)],1),a("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"4",md:"6"}},[a("div",{staticClass:"card o-hidden"},[a("img",{staticClass:"card-img-top",attrs:{src:e("0ed9"),alt:""}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Cras justo odio")]),a("li",{staticClass:"list-group-item"},[t._v("Dapibus ac facilisis in")]),a("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])])])]),a("b-col",{staticClass:"mb-30 d-none",attrs:{md:"6",xl:"6"}},[a("b-card",{attrs:{"bg-variant":"defualt","text-variant":"black"}},[a("div",{staticClass:"d-flex align-items-center mb-30"},[a("i",{staticClass:"i-ID-Card text-22 mr-2"}),a("h5",{staticClass:"card-title m-0"},[t._v("Card Information")])]),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("CPF")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["###.###.###-##"],placeholder:"999.999.999-99"}})],1),a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("Zip Code")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["#####-###"],placeholder:"99999-999"}})],1),a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("Phone")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["+# (###) ###-####"],placeholder:"+9 (999) 999-9999"}})],1),a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("Master Card")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["#### #### #### ####"],placeholder:"9999 9999 9999 9999"}})],1),a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("Date")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["##/##/####"],placeholder:"mm/dd/yy"}})],1),a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("p",{staticClass:"font-weight-400 mb-2"},[t._v("CPF/CNPJ")]),a("the-mask",{staticClass:"form-control",attrs:{mask:["###.###.###-##","##.###.###/####-##"],placeholder:"99.999.999/9999-99"}})],1)],1),a("b-button",{staticClass:"float-right",attrs:{variant:"danger"}},[t._v("Submit")])],1)],1),a("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"6",md:"6"}},[a("b-card",{staticClass:"o-hidden",attrs:{"no-body":"",title:"Payment Form #2"}},[a("b-tabs",{attrs:{pills:"",card:"","content-class":"mt-3",fill:""}},[a("b-tab",{attrs:{active:""}},[a("template",{slot:"title"},[a("i",{staticClass:"i-Credit-Card-2 text-16 mr-2 align-middle"}),t._v(" Credit Card ")]),a("b-form",[a("b-form-group",{attrs:{label:"Full Name"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Male-21 text-18"})])]),a("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),a("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Credit-Card-2 text-18"})])]),a("b-input",{attrs:{placeholder:"card number"}})],1)],1),a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Expiration"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{staticStyle:{"margin-top":"25px"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"CVV"}},[a("b-form-input")],1)],1)],1),a("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary "}},[t._v("Confirm")])],1)],2),a("b-tab",[a("template",{slot:"title"},[a("i",{staticClass:"i-Paypal text-16 mr-2 align-middle"}),t._v(" Paypal ")]),a("b-form",[a("b-form-group",{attrs:{label:"Full Name"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Male-21 text-18"})])]),a("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),a("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Credit-Card-2 text-18"})])]),a("b-input",{attrs:{placeholder:"card number"}})],1)],1),a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Expiration"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{staticStyle:{"margin-top":"25px"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"CVV"}},[a("b-form-input")],1)],1)],1),a("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary"}},[t._v("Confirm")])],1)],2),a("b-tab",[a("template",{slot:"title"},[a("i",{staticClass:"i-Bank text-16 mr-2 align-middle"}),t._v("Bank Transaction ")]),a("b-form",[a("b-form-group",{attrs:{label:"Full Name"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Male-21 text-18"})])]),a("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),a("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"i-Credit-Card-2 text-18"})])]),a("b-input",{attrs:{placeholder:"card number"}})],1)],1),a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Expiration"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{staticStyle:{"margin-top":"25px"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"CVV"}},[a("b-form-input")],1)],1)],1),a("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary"}},[t._v("Confirm")])],1)],2)],1)],1)],1)],1),t.loader?a("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e()],1)},r=[],o=e("ade3"),i=e("c7eb"),n=e("1da1"),l=(e("d81d"),e("b0c0"),e("a9e3"),e("b680"),e("d3b7"),e("25f0"),e("159b4"),e("c1df")),d=e.n(l),c=e("bcfa"),p=e("b40f"),m=e("f64f"),h={metaInfo:{title:"Dashboard v4"},props:{title:{type:String,default:"Awesome Wizard"}},components:{Referal:m["a"]},data:function(){return{columns:[],rows:[],loader:!1,totalDiamondData:0,totalEarningData:0,yearAreaWidget:{},isCopied:!1,selected:"x",options:[{value:"x",text:" select an option"},{value:"a",text:"January"},{value:"b",text:"February"}],splineAreaWidget:p["i"],splineAreaWidgetData:{series:[{name:"series1",data:[90,40,28,51,42,109,100]},{name:"series2",data:[11,90,45,32,34,52,41]}]},splineAreaWidgetTwo:p["p"],splineAreaWidgetTwoData:{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]},splineAreaWidgetThree:p["o"],splineAreaWidgetFour:p["l"],dashboardFive:p["d"],radialBar:c["G"],earningsDataGraph:{},diamondsDataGraph:{},sparkData:{series:[{name:"series2",data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46]}]},spark3:c["Q"],values:[30,20],max:100,tiktok_username:"",center_code:"",referralUrl:"",tiktokres:{},role:"",loginUserName:"",popupLoader:!1}},mounted:function(){},created:function(){this.userId=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.getGraphData(),this.getProfileDetails()},methods:{getProfileDetails:function(){var t=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(a){console.log(a),a.error?(t.loader=!1,t.$toaster.makeToast("warning","Fail to fetch user data")):(t.loginUserName=a.apidata.data.name+" "+a.apidata.data.surname,t.loader=!1)})).catch((function(a){t.loader=!1,t.$toaster.makeToast("warning","Server Error")}))},copyUrl:function(){var t=this,a="https://temmuz.algofolks.com/app/sessions/affiliate";navigator.clipboard.writeText(a).then((function(){t.$emit("notify","URL copied to clipboard!")})).catch((function(t){console.error("Could not copy text: ",t)}))},checkLengthCode:function(t){this.center_code.toString().length>=7&&8!==t.keyCode&&t.preventDefault()},clickAddMember:function(){var t=this;return Object(n["a"])(Object(i["a"])().mark((function a(){var e,s;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.popupLoader=!0,t.tiktok_username&&t.center_code){a.next=6;break}t.popupLoader=!1,t.$toaster.makeToast("warning","Please fill in all the required fields"),a.next=19;break;case 6:return a.prev=6,e={user_id:t.userId,tiktok_username:t.tiktok_username,agency_center_code:t.center_code,status:"Pending Registration"},a.next=10,new Promise((function(a,s){t.$apiService.postCall("publisher/create/",e).then((function(t){return a(t)})).catch((function(t){return s(t)}))}));case 10:s=a.sent,t.tiktokres=s,s.error?1===t.tiktokres.response.data.message.keyPattern.tiktok_username?(t.popupLoader=!1,t.$toaster.makeToast("warning","TikTok username already exists")):t.$toaster.makeToast("warning",s.response.data.message.keyPattern.keyPattern.tiktok_username):(t.popupLoader=!1,t.tiktok_username="",t.center_code="",t.referralUrl=s.apidata.referral_url,t.$bvModal.hide("modal-addMember"),t.$bvModal.show("modal-show-referralUrl"),t.$toaster.makeToast("success","Referral create successfully")),a.next=19;break;case 15:a.prev=15,a.t0=a["catch"](6),t.popupLoader=!1,1===t.tiktokres.error.response.data.message.keyPattern.tiktok_username?t.$toaster.makeToast("warning","TikTok username already exists"):t.$toaster.makeToast("warning","Error: Server Error");case 19:case"end":return a.stop()}}),a,null,[[6,15]])})))()},clickCancle:function(){this.$bvModal.hide("modal-show-referralUrl"),this.$bvModal.hide("modal-addMember"),this.tiktok_username="",this.center_code=""},clickShowPopup:function(){this.$bvModal.show("modal-addMember")},getGraphData:function(){var t=this;this.loader=!0,this.$apiService.getCall("user/creators-earnings-graph").then((function(a){if(a.isError)t.loader=!1,t.$toaster.makeToast("warning",message.ERROR_MESSAGE);else if(a.apidata.dates){var e=a.apidata.dates;e=e.map((function(t){return d()(t).format("YYYY-MM-DDTHH:mm:ss")}));var s=a.apidata.diamonds,r=a.apidata.earnings;s.forEach((function(a){t.totalDiamondData+=Number(a)})),t.totalDiamondData=t.totalDiamondData.toFixed(2),r.forEach((function(a){t.totalEarningData+=a})),t.totalEarningData=t.totalEarningData.toFixed(2),t.diamondsDataGraph={series:[{name:"diamonds",data:s}]},t.earningsDataGraph={series:[{name:"earnings",data:r}],chartOptions:Object(o["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:e,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#4caf50"]},"stroke",{curve:"straight",width:1})},t.yearAreaWidget={series:[{name:"Diamonds",data:s},{name:"Earnings",data:r}],chartOptions:Object(o["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:e,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#A855F7","#4caf50"]},"stroke",{curve:"straight",width:1})}}else t.loader=!1,t.$toaster.makeToast("warning","Empty Data");t.loader=!1})).catch((function(a){t.$toaster.makeToast("warning",message.ERROR_MESSAGE),t.loader=!1}))},onComplete:function(){this.$swal({position:"top-end",type:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},copyToClipboard:function(){var t=this;navigator.clipboard.writeText(this.referralURL).then((function(){t.isCopied=!0}),(function(t){console.error("Could not copy text: ",t)}))},rowStyleClassFn:function(t){return t.age>18?"green":"red"}}},b=h,u=(e("b0a7"),e("2877")),f=Object(u["a"])(b,s,r,!1,null,null,null);a["default"]=f.exports},"90d8":function(t,a,e){"use strict";var s=e("c65b"),r=e("1a2d"),o=e("3a9b"),i=e("ad6d"),n=RegExp.prototype;t.exports=function(t){var a=t.flags;return void 0!==a||"flags"in n||r(t,"flags")||!o(n,t)?a:s(i,t)}},"9a20":function(t,a,e){},ad6d:function(t,a,e){"use strict";var s=e("825a");t.exports=function(){var t=s(this),a="";return t.hasIndices&&(a+="d"),t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.unicodeSets&&(a+="v"),t.sticky&&(a+="y"),a}},b0a7:function(t,a,e){"use strict";e("9a20")},b40f:function(t,a,e){"use strict";e.d(a,"d",(function(){return r})),e.d(a,"i",(function(){return o})),e.d(a,"p",(function(){return i})),e.d(a,"o",(function(){return n})),e.d(a,"l",(function(){return l})),e.d(a,"k",(function(){return d})),e.d(a,"n",(function(){return c})),e.d(a,"m",(function(){return p})),e.d(a,"j",(function(){return m})),e.d(a,"q",(function(){return h})),e.d(a,"v",(function(){return b})),e.d(a,"w",(function(){return u})),e.d(a,"u",(function(){return f})),e.d(a,"s",(function(){return g})),e.d(a,"r",(function(){return k})),e.d(a,"t",(function(){return w})),e.d(a,"e",(function(){return x})),e.d(a,"h",(function(){return C})),e.d(a,"g",(function(){return v})),e.d(a,"f",(function(){return y})),e.d(a,"a",(function(){return T})),e.d(a,"c",(function(){return _})),e.d(a,"b",(function(){return O}));var s=e("ade3"),r={series:[42,47,52,58,65],chartOptions:{chart:{width:"100%",type:"polarArea"},labels:["Rose A","Rose B","Rose C","Rose D","Rose E"],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{show:!1},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},theme:{monochrome:{enabled:!0,color:"#8b5cf6",shadeTo:"light",shadeIntensity:.6}}}},o={series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6ed3cf","#4caf50"]},"stroke",{curve:"straight",width:1})},i={series:[{name:"series1",data:[90,40,28,51,42,109,100]},{name:"series2",data:[11,90,45,32,34,52,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6ed3cf","#9068be"]},"stroke",{curve:"smooth",width:1})},n={series:[{name:"series1",data:[11,40,28,51,42,109,100]},{name:"series2",data:[100,40,45,32,34,0,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#fae596","#3fb0ac"]},"stroke",{curve:"smooth",width:1})},l={series:[{name:"series1",data:[11,40,28,51,42,109,100]},{name:"series2",data:[100,40,45,32,34,0,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#f44336","#e05038"]},"stroke",{curve:"smooth",width:1})},d={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#A855F7","#e97d23"]},"stroke",{curve:"straight",width:1})},c={series:[{name:"series1",data:[60,20,28,51,15,40,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#98dafc"]},"stroke",{curve:"straight",width:1})},p={series:[{name:"series1",data:[30,20,90,2,15,40,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:"100px",toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#bcd5d1"]},"stroke",{curve:"straight",width:1})},m={series:[{name:"series1",data:[65,90,10,45,15,75,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6534ff"]},"stroke",{curve:"straight",width:1})},h={series:[{name:"Inflation",data:[60,20,28,51,15,40,50,60,20,28,51,15,40,50]}],chartOptions:{chart:{height:350,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},tooltip:{enabled:!0,offsetY:-35}},colors:["#98dafc"]}},b={series:[{name:"Inflation",data:[12,14,2,47,-42,-15,47,75,65,19,-14,30,50]}],chartOptions:{chart:{height:350,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{enabled:!1},colors:["#e05038"]}},u={series:[{name:"Desktops",data:[25,66,41,89,63,25,44,12,36,9,54]}],chartOptions:{chart:{height:350,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},f={series:[{name:"Inflation",data:[5,15,25,35,55,75,100,75,55,35,25,15,5]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#A855F7"]}},g={series:[{name:"Inflation",data:[5,15,15,35,35,75,90,75,35,35,15,15,5]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#f44336"]}},k={series:[{name:"Inflation",data:[5,15,25,35,25,15,5,10,20,30,45,65,45,30,20,10]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#7d6cbb"]}},w={series:[{name:"Inflation",data:[100,85,75,55,35,25,15,5,15,25,35,55,75,85,90,100]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#7566b5"]}},x={series:[75],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#ABE5A1"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Choice"]}},C={series:[55],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e6af4b"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Pending"]}},v={series:[12],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e05038"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Profit"]}},y={series:[100],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#c0dfd9"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Revenue"]}},T={series:[{name:"series1",data:[10,20,28,51,15,40,20]}],chartOptions:{chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!0},axisTicks:{show:!1},axisBorder:{show:!1}},colors:["#e62739"],stroke:{curve:"smooth",width:1}}},_={series:[{name:"series1",data:[50,20,0,51,15,30,70]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#ffeb3b"]},"stroke",{curve:"smooth",width:1})},O={series:[{name:"series1",data:[100,20,20,51,35,10,70]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#4caf50"]},"stroke",{curve:"smooth",width:1})}},f64f:function(t,a,e){"use strict";var s=function(){var t=this,a=t._self._c;return a("b-col",{attrs:{sm:"12",md:"12",xl:"12",lg:"12"}},[a("div",[a("div",{staticClass:"d-flex align-items-end row"},[a("div",{staticClass:"col-7"},[a("div",{staticClass:"card-body text-nowrap"},[a("h5",{staticClass:"card-title mb-0"},[t._v(" Congratulations "+t._s(this.loginUserName)+"! 🎉 ")]),a("p",[t._v(" Thank you for being awesome and sharing our platform with others! Below is your unique referral link: ")]),a("div",{staticClass:"bg-white text-gray d-flex w-59",staticStyle:{"overflow-wrap":"anywhere"},attrs:{"data-v-0307aa70":""}},[a("a",{staticClass:"referral-link align-self-center",attrs:{"data-v-0307aa70":"",href:t.url,target:"_blank"}},[t._v(" "+t._s(t.url))]),a("p",{staticClass:"px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end",on:{click:t.copyUrl}},[a("i",{staticClass:"fa fa-clone",attrs:{"aria-hidden":"true"}})])])])]),a("div",{staticClass:"col-5 text-center text-sm-left d-none"},[a("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[a("img",{attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])])])])},r=[],o=(e("b0c0"),{data:function(){return{tiktok_username:"",loginUserName:"",url:""}},mounted:function(){},created:function(){this.userId=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.getProfileDetails()},methods:{getProfileDetails:function(){var t=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(a){console.log(a),a.error?(t.loader=!1,t.$toaster.makeToast("warning","Fail to fetch user data")):(t.loginUserName=a.apidata.data.name+" "+a.apidata.data.surname,t.tiktok_username=a.apidata.data.tiktok_username,t.loader=!1,t.url="https://"+window.location.host+"/app/sessions/affiliate?u="+t.tiktok_username)})).catch((function(a){t.loader=!1,t.$toaster.makeToast("warning","Server Error")}))},copyUrl:function(){var t=this;navigator.clipboard.writeText(this.url).then((function(){t.$emit("notify","URL copied to clipboard!")})).catch((function(t){console.error("Could not copy text: ",t)}))}}}),i=o,n=e("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);a["a"]=l.exports}}]);