(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aecb0c0"],{"0ed9":function(t,e,a){t.exports=a.p+"img/photo-wide-3.b6a0740a.jpg"},"13d5":function(t,e,a){"use strict";var s=a("23e7"),r=a("d58f").left,o=a("a640"),i=a("2d00"),n=a("605d"),l=!n&&i>79&&i<83,d=l||!o("reduce");s({target:"Array",proto:!0,forced:d},{reduce:function(t){var e=arguments.length;return r(this,t,e,e>1?arguments[1]:void 0)}})},"25f0":function(t,e,a){"use strict";var s=a("5e77").PROPER,r=a("cb2d"),o=a("825a"),i=a("577e"),n=a("d039"),l=a("90d8"),d="toString",c=RegExp.prototype,p=c[d],m=n((function(){return"/a/b"!==p.call({source:"a",flags:"b"})})),u=s&&p.name!==d;(m||u)&&r(c,d,(function(){var t=o(this),e=i(t.source),a=i(l(t));return"/"+e+"/"+a}),{unsafe:!0})},"3886d":function(t,e,a){"use strict";a("583a")},"4d91":function(t,e,a){},"583a":function(t,e,a){},"72f4":function(t,e,a){"use strict";a("4d91")},"903f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("b-modal",{attrs:{id:"modal-addMember",size:"md","hide-footer":"","hide-header":"",centered:""}},[e("b-row",{},[e("b-col",{attrs:{md:"12"}},[e("label",{staticClass:"pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(" Add Creators ")])]),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"TikTok Username","label-for":"input-tiktok-username"}},[e("b-form-input",{attrs:{required:"",placeholder:"TikTok username",type:"text",id:"input-tiktok-username"},model:{value:t.tiktok_username,callback:function(e){t.tiktok_username=e},expression:"tiktok_username"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Agency Center Code","label-for":"input-agency-center-code"}},[e("b-form-input",{attrs:{required:"",placeholder:"Agency center code",type:"number",id:"input-agency-center-code"},on:{keydown:t.checkLengthCode},model:{value:t.center_code,callback:function(e){t.center_code=e},expression:"center_code"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"d-flex justify-content-end"},[t.popupLoader?e("div",{staticClass:"spinner spinner-primary"}):t._e(),t.popupLoader?t._e():e("b-button",{staticClass:"mr-2",on:{click:function(e){return t.clickCancle()}}},[t._v("Cancel")]),t.popupLoader?t._e():e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.clickAddMember()}}},[t._v("Add")])],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-show-referralUrl",size:"md","hide-footer":"","hide-header":"",centered:""}},[e("b-row",{},[e("b-col",{attrs:{md:"12"}},[e("h4",{staticClass:"mb-2"},[t._v("Referral Url")])]),e("b-col",{attrs:{md:"12"}},[e("span",[e("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:t.referralUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.referralUrl))])])]),e("b-col",[e("div",{staticClass:"d-flex justify-content-end mt-2"},[e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.clickCancle()}}},[t._v("Cancel")])],1)])],1)],1),e("b-row",[e("b-col",[e("div",{staticClass:"card",staticStyle:{"margin-bottom":"1rem"}},[e("Referal")],1)]),e("b-col",{staticStyle:{display:"none"},attrs:{lg:"6",xl:"6",md:"6",sm:"6"}},[e("b-card",{staticClass:"mb-30 o-hidden",attrs:{"no-body":"",title:""}},[e("div",{staticClass:"ul-widget__chart-info"},[e("h5",{staticClass:"text-muted text-10"},[e("i",{staticClass:"fa fa-diamond",attrs:{"aria-hidden":"true"}}),t._v(" Diamond")]),e("div",{staticClass:"ul-widget__chart-number"},[e("h2",{staticClass:"t-font-boldest"},[e("i",{staticClass:"fa fa-diamond",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.totalDiamondData))])])]),e("b-card-body",{staticClass:"ul-card__widget-chart"},[e("div",{attrs:{id:"basicArea-chart"}},[e("apexchart",{attrs:{type:"area",height:"150",options:t.yearAreaWidget.chartOptions,series:t.diamondsDataGraph.series}})],1)])],1)],1),e("b-col",{staticStyle:{display:"none"},attrs:{lg:"6",xl:"6",md:"6",sm:"6"}},[e("b-card",{staticClass:"mb-30 o-hidden",attrs:{"no-body":"",title:""}},[e("div",{staticClass:"ul-widget__chart-info"},[e("h5",{staticClass:"text-muted text-10"},[t._v("Earning")]),e("div",{staticClass:"ul-widget__chart-number"},[e("h2",{staticClass:"t-font-boldest"},[t._v("$"+t._s(t.totalEarningData))])])]),e("b-card-body",{staticClass:"ul-card__widget-chart"},[e("div",{attrs:{id:"basicArea-chart"}},[e("apexchart",{attrs:{type:"area",height:"150",options:t.earningsDataGraph.chartOptions,series:t.earningsDataGraph.series}})],1)])],1)],1),e("b-col",{staticClass:"mb-30",attrs:{xl:"12",md:"12"}},[e("div",{staticClass:"o-hidden",attrs:{"no-body":""}},[e("div",{attrs:{"header-bg-variant":"transparent"}},[e("b-row",{staticStyle:{"align-items":"center"}},[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"ul-card-widget__head-label"},[e("h5",{staticClass:"card-title"},[t._v("Finance Summary")])])])],1)],1),e("div",[e("b-row",{staticClass:"px-1"},[e("b-col",{attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-10 text-center"},[e("i",{staticClass:"i-Money-2"}),e("div",{staticClass:"content"},[e("p",{staticClass:"text-muted mt-2 mb-0",staticStyle:{width:"120px"}},[t._v("Diamonds Revenue")]),e("p",{staticClass:"text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"},[t._v(t._s(t.totalDiamondData))])])])],1),e("b-col",{attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-10 text-center"},[e("i",{staticClass:"i-Wallet"}),e("div",{staticClass:"content"},[e("p",{staticClass:"text-muted mt-2 mb-0",staticStyle:{width:"112px"}},[t._v("Earnings Revenue")]),e("p",{staticClass:"text-primary text-24 line-height-1 mb-2 ul-cursor--pointer",staticStyle:{width:"78px"}},[t._v("$  "+t._s(t.totalEarningData))])])])],1)],1)],1),e("div",{staticClass:"mt-2",attrs:{id:"basicArea-chart"}},[e("apexchart",{attrs:{type:"area",height:"150",options:t.yearAreaWidget.chartOptions,series:t.yearAreaWidget.series}})],1)])]),e("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"4",md:"12"}},[e("b-card",{staticClass:"o-hidden",attrs:{title:"Stacked Pie Chart"}},[e("apexchart",{attrs:{type:"polarArea",height:"254",options:t.dashboardFive.chartOptions,series:t.dashboardFive.series}})],1)],1),e("b-col",{staticClass:"mb-30 d-none",attrs:{md:"12",xl:"8"}},[e("b-card",{staticClass:"wrapper o-hidden h-100",attrs:{title:""}},[e("vue-good-table",{attrs:{"fixed-header":!0,columns:t.columns,styleClass:"tableOne text-left vgt-table","row-style-class":"text-left",rows:t.rows},scopedSlots:t._u([{key:"table-row",fn:function(a){return["img"==a.column.field?e("span",[e("img",{staticClass:"rounded",staticStyle:{width:"50px",height:"50px"},attrs:{src:a.row.img,alt:"corrupted img"}})]):t._e()]}}])})],1)],1),e("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"4",md:"6"}},[e("div",{staticClass:"card o-hidden"},[e("img",{staticClass:"card-img-top",attrs:{src:a("0ed9"),alt:""}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Card title")]),e("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[t._v("Cras justo odio")]),e("li",{staticClass:"list-group-item"},[t._v("Dapibus ac facilisis in")]),e("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])])])]),e("b-col",{staticClass:"mb-30 d-none",attrs:{md:"6",xl:"6"}},[e("b-card",{attrs:{"bg-variant":"defualt","text-variant":"black"}},[e("div",{staticClass:"d-flex align-items-center mb-30"},[e("i",{staticClass:"i-ID-Card text-22 mr-2"}),e("h5",{staticClass:"card-title m-0"},[t._v("Card Information")])]),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("CPF")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["###.###.###-##"],placeholder:"999.999.999-99"}})],1),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("Zip Code")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["#####-###"],placeholder:"99999-999"}})],1),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("Phone")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["+# (###) ###-####"],placeholder:"+9 (999) 999-9999"}})],1),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("Master Card")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["#### #### #### ####"],placeholder:"9999 9999 9999 9999"}})],1),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("Date")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["##/##/####"],placeholder:"mm/dd/yy"}})],1),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("p",{staticClass:"font-weight-400 mb-2"},[t._v("CPF/CNPJ")]),e("the-mask",{staticClass:"form-control",attrs:{mask:["###.###.###-##","##.###.###/####-##"],placeholder:"99.999.999/9999-99"}})],1)],1),e("b-button",{staticClass:"float-right",attrs:{variant:"danger"}},[t._v("Submit")])],1)],1),e("b-col",{staticClass:"mb-30 d-none",attrs:{xl:"6",md:"6"}},[e("b-card",{staticClass:"o-hidden",attrs:{"no-body":"",title:"Payment Form #2"}},[e("b-tabs",{attrs:{pills:"",card:"","content-class":"mt-3",fill:""}},[e("b-tab",{attrs:{active:""}},[e("template",{slot:"title"},[e("i",{staticClass:"i-Credit-Card-2 text-16 mr-2 align-middle"}),t._v(" Credit Card ")]),e("b-form",[e("b-form-group",{attrs:{label:"Full Name"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Male-21 text-18"})])]),e("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),e("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Credit-Card-2 text-18"})])]),e("b-input",{attrs:{placeholder:"card number"}})],1)],1),e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Expiration"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{staticStyle:{"margin-top":"25px"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"CVV"}},[e("b-form-input")],1)],1)],1),e("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary "}},[t._v("Confirm")])],1)],2),e("b-tab",[e("template",{slot:"title"},[e("i",{staticClass:"i-Paypal text-16 mr-2 align-middle"}),t._v(" Paypal ")]),e("b-form",[e("b-form-group",{attrs:{label:"Full Name"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Male-21 text-18"})])]),e("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),e("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Credit-Card-2 text-18"})])]),e("b-input",{attrs:{placeholder:"card number"}})],1)],1),e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Expiration"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{staticStyle:{"margin-top":"25px"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"CVV"}},[e("b-form-input")],1)],1)],1),e("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary"}},[t._v("Confirm")])],1)],2),e("b-tab",[e("template",{slot:"title"},[e("i",{staticClass:"i-Bank text-16 mr-2 align-middle"}),t._v("Bank Transaction ")]),e("b-form",[e("b-form-group",{attrs:{label:"Full Name"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Male-21 text-18"})])]),e("b-input",{attrs:{placeholder:"Full Name"}})],1)],1),e("b-form-group",{staticClass:"mt-4",attrs:{label:"Card Number"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"i-Credit-Card-2 text-18"})])]),e("b-input",{attrs:{placeholder:"card number"}})],1)],1),e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Expiration"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{staticStyle:{"margin-top":"25px"}},[e("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"CVV"}},[e("b-form-input")],1)],1)],1),e("b-button",{staticClass:"mt-3",attrs:{block:"",variant:"primary"}},[t._v("Confirm")])],1)],2)],1)],1)],1)],1),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e()],1)},r=[],o=a("ade3"),i=a("c7eb"),n=a("1da1"),l=(a("d81d"),a("13d5"),a("b0c0"),a("a9e3"),a("b680"),a("d3b7"),a("25f0"),a("c1df")),d=a.n(l),c=a("bcfa"),p=a("b40f"),m=a("f64f"),u={metaInfo:{title:"Dashboard v4"},props:{title:{type:String,default:"Awesome Wizard"}},components:{Referal:m["a"]},data:function(){return{columns:[],rows:[],loader:!1,totalDiamondData:0,totalEarningData:0,yearAreaWidget:{},isCopied:!1,selected:"x",options:[{value:"x",text:" select an option"},{value:"a",text:"January"},{value:"b",text:"February"}],splineAreaWidget:p["i"],splineAreaWidgetData:{series:[{name:"series1",data:[90,40,28,51,42,109,100]},{name:"series2",data:[11,90,45,32,34,52,41]}]},splineAreaWidgetTwo:p["p"],splineAreaWidgetTwoData:{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]},splineAreaWidgetThree:p["o"],splineAreaWidgetFour:p["l"],dashboardFive:p["d"],radialBar:c["G"],earningsDataGraph:{},diamondsDataGraph:{},sparkData:{series:[{name:"series2",data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46]}]},spark3:c["Q"],values:[30,20],max:100,tiktok_username:"",center_code:"",referralUrl:"",tiktokres:{},role:"",loginUserName:"",popupLoader:!1}},mounted:function(){},created:function(){this.userId=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.getGraphData(),this.getProfileDetails()},methods:{getProfileDetails:function(){var t=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(e){console.log(e),e.error?(t.loader=!1,t.$toaster.makeToast("warning","Fail to fetch user data")):(t.loginUserName=e.apidata.data.name+" "+e.apidata.data.surname,t.loader=!1)})).catch((function(e){t.loader=!1,t.$toaster.makeToast("warning","Server Error")}))},copyUrl:function(){var t=this,e="https://temmuz.algofolks.com/app/sessions/affiliate";navigator.clipboard.writeText(e).then((function(){t.$emit("notify","URL copied to clipboard!")})).catch((function(t){console.error("Could not copy text: ",t)}))},checkLengthCode:function(t){this.center_code.toString().length>=7&&8!==t.keyCode&&t.preventDefault()},clickAddMember:function(){var t=this;return Object(n["a"])(Object(i["a"])().mark((function e(){var a,s;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.popupLoader=!0,t.tiktok_username&&t.center_code){e.next=6;break}t.popupLoader=!1,t.$toaster.makeToast("warning","Please fill in all the required fields"),e.next=19;break;case 6:return e.prev=6,a={user_id:t.userId,tiktok_username:t.tiktok_username,agency_center_code:t.center_code,status:"Pending Registration"},e.next=10,new Promise((function(e,s){t.$apiService.postCall("publisher/create/",a).then((function(t){return e(t)})).catch((function(t){return s(t)}))}));case 10:s=e.sent,t.tiktokres=s,s.error?1===t.tiktokres.response.data.message.keyPattern.tiktok_username?(t.popupLoader=!1,t.$toaster.makeToast("warning","TikTok username already exists")):t.$toaster.makeToast("warning",s.response.data.message.keyPattern.keyPattern.tiktok_username):(t.popupLoader=!1,t.tiktok_username="",t.center_code="",t.referralUrl=s.apidata.referral_url,t.$bvModal.hide("modal-addMember"),t.$bvModal.show("modal-show-referralUrl"),t.$toaster.makeToast("success","Referral create successfully")),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](6),t.popupLoader=!1,1===t.tiktokres.error.response.data.message.keyPattern.tiktok_username?t.$toaster.makeToast("warning","TikTok username already exists"):t.$toaster.makeToast("warning","Error: Server Error");case 19:case"end":return e.stop()}}),e,null,[[6,15]])})))()},clickCancle:function(){this.$bvModal.hide("modal-show-referralUrl"),this.$bvModal.hide("modal-addMember"),this.tiktok_username="",this.center_code=""},clickShowPopup:function(){this.$bvModal.show("modal-addMember")},getGraphData:function(){var t=this;this.loader=!0;var e=localStorage.getItem("user_id"),a=localStorage.getItem("role"),s={};"user"===a&&(s={_id:e}),this.$apiService.postCall("user/creators-earnings-graph",s).then((function(e){if(e.isError)t.$toaster.makeToast("warning",message.ERROR_MESSAGE);else{var a=e.apidata.dates.map((function(t){return d()(t).format("YYYY-MM-DDTHH:mm:ss")})),s=e.apidata.diamonds,r=e.apidata.earnings;t.totalDiamondData=s.reduce((function(t,e){return t+Number(e)}),0),t.totalDiamondData=t.totalDiamondData.toFixed(2),t.totalEarningData=r.reduce((function(t,e){return t+e}),0),t.totalEarningData=t.totalEarningData.toFixed(2),t.sparkData={series:[{name:"Diamonds",data:s}]},t.earningsDataGraph={series:[{name:"earnings",data:r}],chartOptions:Object(o["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:a,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#4caf50"]},"stroke",{curve:"straight",width:1})},t.yearAreaWidget={series:[{name:"Diamonds",data:s},{name:"Earnings",data:r}],chartOptions:Object(o["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:a,labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#A855F7","#4caf50"]},"stroke",{curve:"straight",width:1})}}t.loader=!1})).catch((function(e){t.$toaster.makeToast("warning",message.ERROR_MESSAGE),t.loader=!1}))},onComplete:function(){this.$swal({position:"top-end",type:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},copyToClipboard:function(){var t=this;navigator.clipboard.writeText(this.referralURL).then((function(){t.isCopied=!0}),(function(t){console.error("Could not copy text: ",t)}))},rowStyleClassFn:function(t){return t.age>18?"green":"red"}}},h=u,b=(a("3886d"),a("2877")),f=Object(b["a"])(h,s,r,!1,null,null,null);e["default"]=f.exports},"90d8":function(t,e,a){"use strict";var s=a("c65b"),r=a("1a2d"),o=a("3a9b"),i=a("ad6d"),n=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in n||r(t,"flags")||!o(n,t)?e:s(i,t)}},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},b40f:function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"i",(function(){return o})),a.d(e,"p",(function(){return i})),a.d(e,"o",(function(){return n})),a.d(e,"l",(function(){return l})),a.d(e,"k",(function(){return d})),a.d(e,"n",(function(){return c})),a.d(e,"m",(function(){return p})),a.d(e,"j",(function(){return m})),a.d(e,"q",(function(){return u})),a.d(e,"v",(function(){return h})),a.d(e,"w",(function(){return b})),a.d(e,"u",(function(){return f})),a.d(e,"s",(function(){return g})),a.d(e,"r",(function(){return k})),a.d(e,"t",(function(){return w})),a.d(e,"e",(function(){return x})),a.d(e,"h",(function(){return v})),a.d(e,"g",(function(){return C})),a.d(e,"f",(function(){return y})),a.d(e,"a",(function(){return T})),a.d(e,"c",(function(){return _})),a.d(e,"b",(function(){return S}));var s=a("ade3"),r={series:[42,47,52,58,65],chartOptions:{chart:{width:"100%",type:"polarArea"},labels:["Rose A","Rose B","Rose C","Rose D","Rose E"],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{show:!1},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},theme:{monochrome:{enabled:!0,color:"#8b5cf6",shadeTo:"light",shadeIntensity:.6}}}},o={series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6ed3cf","#4caf50"]},"stroke",{curve:"straight",width:1})},i={series:[{name:"series1",data:[90,40,28,51,42,109,100]},{name:"series2",data:[11,90,45,32,34,52,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6ed3cf","#9068be"]},"stroke",{curve:"smooth",width:1})},n={series:[{name:"series1",data:[11,40,28,51,42,109,100]},{name:"series2",data:[100,40,45,32,34,0,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#fae596","#3fb0ac"]},"stroke",{curve:"smooth",width:1})},l={series:[{name:"series1",data:[11,40,28,51,42,109,100]},{name:"series2",data:[100,40,45,32,34,0,41]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#f44336","#e05038"]},"stroke",{curve:"smooth",width:1})},d={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#A855F7","#e97d23"]},"stroke",{curve:"straight",width:1})},c={series:[{name:"series1",data:[60,20,28,51,15,40,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#98dafc"]},"stroke",{curve:"straight",width:1})},p={series:[{name:"series1",data:[30,20,90,2,15,40,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:"100px",toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#bcd5d1"]},"stroke",{curve:"straight",width:1})},m={series:[{name:"series1",data:[65,90,10,45,15,75,50]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#6534ff"]},"stroke",{curve:"straight",width:1})},u={series:[{name:"Inflation",data:[60,20,28,51,15,40,50,60,20,28,51,15,40,50]}],chartOptions:{chart:{height:350,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},tooltip:{enabled:!0,offsetY:-35}},colors:["#98dafc"]}},h={series:[{name:"Inflation",data:[12,14,2,47,-42,-15,47,75,65,19,-14,30,50]}],chartOptions:{chart:{height:350,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{enabled:!1},colors:["#e05038"]}},b={series:[{name:"Desktops",data:[25,66,41,89,63,25,44,12,36,9,54]}],chartOptions:{chart:{height:350,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},f={series:[{name:"Inflation",data:[5,15,25,35,55,75,100,75,55,35,25,15,5]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#A855F7"]}},g={series:[{name:"Inflation",data:[5,15,15,35,35,75,90,75,35,35,15,15,5]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#f44336"]}},k={series:[{name:"Inflation",data:[5,15,25,35,25,15,5,10,20,30,45,65,45,30,20,10]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#7d6cbb"]}},w={series:[{name:"Inflation",data:[100,85,75,55,35,25,15,5,15,25,35,55,75,85,90,100]}],chartOptions:{chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{crosshairs:{width:1}},colors:["#7566b5"]}},x={series:[75],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#ABE5A1"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Choice"]}},v={series:[55],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e6af4b"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Pending"]}},C={series:[12],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e05038"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Profit"]}},y={series:[100],chartOptions:{chart:{toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(t){return parseInt(t)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#c0dfd9"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Revenue"]}},T={series:[{name:"series1",data:[10,20,28,51,15,40,20]}],chartOptions:{chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!0},axisTicks:{show:!1},axisBorder:{show:!1}},colors:["#e62739"],stroke:{curve:"smooth",width:1}}},_={series:[{name:"series1",data:[50,20,0,51,15,30,70]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#ffeb3b"]},"stroke",{curve:"smooth",width:1})},S={series:[{name:"series1",data:[100,20,20,51,35,10,70]}],chartOptions:Object(s["a"])({chart:{width:"100%",height:100,toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1},tooltip:{enabled:!0,x:{format:"dd/MM/yy HH:mm"}},colors:["#4caf50"]},"stroke",{curve:"smooth",width:1})}},d58f:function(t,e,a){"use strict";var s=a("59ed"),r=a("7b0b"),o=a("44ad"),i=a("07fa"),n=TypeError,l="Reduce of empty array with no initial value",d=function(t){return function(e,a,d,c){var p=r(e),m=o(p),u=i(p);if(s(a),0===u&&d<2)throw new n(l);var h=t?u-1:0,b=t?-1:1;if(d<2)while(1){if(h in m){c=m[h],h+=b;break}if(h+=b,t?h<0:u<=h)throw new n(l)}for(;t?h>=0:u>h;h+=b)h in m&&(c=a(c,m[h],h,p));return c}};t.exports={left:d(!1),right:d(!0)}},f64f:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("b-col",{attrs:{sm:"12",md:"12",xl:"12",lg:"12"}},[e("div",[e("div",{staticClass:"d-flex align-items-end row"},[e("div",{staticClass:"col-7"},[e("div",{staticClass:"card-body text-nowrap"},[e("h5",{staticClass:"card-title mb-0"},[t._v(" Congratulations "+t._s(this.loginUserName)+"! 🎉 ")]),e("p",[t._v(" Thank you for being awesome and sharing our platform with others! Below is your unique referral link: ")]),e("div",{staticClass:"bg-white text-gray d-flex w-59",staticStyle:{"overflow-wrap":"anywhere"},attrs:{"data-v-0307aa70":""}},[e("a",{staticClass:"referral-link align-self-center",class:{"text-white":t.copied,"text-blue":!t.copied},attrs:{href:t.url,target:"_blank"}},[t._v(" "+t._s(t.url)+" ")]),e("p",{staticClass:"px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end",on:{click:t.copyUrl}},[e("i",{staticClass:"fa fa-clone",class:{"text-white":t.copied,"text-blue":!t.copied},attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-5 text-center text-sm-left d-none"},[e("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[e("img",{attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])])])])},r=[],o=(a("b0c0"),{data:function(){return{tiktok_username:"",loginUserName:"",url:"",copied:!1}},mounted:function(){},created:function(){this.userId=localStorage.getItem("user_id"),this.role=localStorage.getItem("role"),this.getProfileDetails()},methods:{getProfileDetails:function(){var t=this;this.loader=!0,this.$apiService.getCall("auth/user/".concat(this.userId)).then((function(e){console.log(e),e.error?(t.loader=!1,t.$toaster.makeToast("warning","Fail to fetch user data")):(t.loginUserName=e.apidata.data.name+" "+e.apidata.data.surname,t.tiktok_username=e.apidata.data.tiktok_username,t.loader=!1,t.url="https://"+window.location.host+"/app/sessions/affiliate?u="+t.tiktok_username)})).catch((function(e){t.loader=!1,t.$toaster.makeToast("warning","Server Error")}))},copyUrl:function(){var t=this;navigator.clipboard.writeText(this.url).then((function(){t.copied=!0,t.$emit("notify","URL copied to clipboard!")})).catch((function(t){console.error("Could not copy text: ",t)}))}}}),i=o,n=(a("72f4"),a("2877")),l=Object(n["a"])(i,s,r,!1,null,"3f28d5eb",null);e["a"]=l.exports}}]);