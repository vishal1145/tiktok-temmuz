(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a57181d2"],{1276:function(t,e,a){"use strict";var i=a("2ba4"),n=a("c65b"),s=a("e330"),r=a("d784"),o=a("44e7"),l=a("825a"),c=a("1d80"),d=a("4840"),u=a("8aa5"),p=a("50c4"),m=a("577e"),f=a("dc4a"),h=a("4dae"),v=a("14c3"),b=a("9263"),g=a("9f7f"),_=a("d039"),y=g.UNSUPPORTED_Y,w=4294967295,C=Math.min,x=[].push,k=s(/./.exec),D=s(x),A=s("".slice),S=!_((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));r("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=m(c(this)),r=void 0===a?w:a>>>0;if(0===r)return[];if(void 0===t)return[s];if(!o(t))return n(e,s,t,r);var l,d,u,p=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,f+"g");while(l=n(b,g,s)){if(d=g.lastIndex,d>v&&(D(p,A(s,v,l.index)),l.length>1&&l.index<s.length&&i(x,p,h(l,1)),u=l[0].length,v=d,p.length>=r))break;g.lastIndex===l.index&&g.lastIndex++}return v===s.length?!u&&k(g,"")||D(p,""):D(p,A(s,v)),p.length>r?h(p,0,r):p}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:n(e,this,t,a)}:e,[function(e,a){var i=c(this),r=void 0==e?void 0:f(e,t);return r?n(r,e,i,a):n(s,m(i),e,a)},function(t,i){var n=l(this),r=m(t),o=a(s,n,r,i,s!==e);if(o.done)return o.value;var c=d(n,RegExp),f=n.unicode,h=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(y?"g":"y"),b=new c(y?"^(?:"+n.source+")":n,h),g=void 0===i?w:i>>>0;if(0===g)return[];if(0===r.length)return null===v(b,r)?[r]:[];var _=0,x=0,k=[];while(x<r.length){b.lastIndex=y?0:x;var S,T=v(b,y?A(r,x):r);if(null===T||(S=C(p(b.lastIndex+(y?x:0)),r.length))===_)x=u(r,x,f);else{if(D(k,A(r,_,x)),k.length===g)return k;for(var I=1;I<=T.length-1;I++)if(D(k,T[I]),k.length===g)return k;x=_=S}}return D(k,A(r,_)),k}]}),!S,y)},"13d5":function(t,e,a){"use strict";var i=a("23e7"),n=a("d58f").left,s=a("a640"),r=a("2d00"),o=a("605d"),l=s("reduce"),c=!o&&r>79&&r<83;i({target:"Array",proto:!0,forced:!l||c},{reduce:function(t){var e=arguments.length;return n(this,t,e,e>1?arguments[1]:void 0)}})},"14c3":function(t,e,a){var i=a("c65b"),n=a("825a"),s=a("1626"),r=a("c6b6"),o=a("9263"),l=TypeError;t.exports=function(t,e){var a=t.exec;if(s(a)){var c=i(a,t,e);return null!==c&&n(c),c}if("RegExp"===r(t))return i(o,t,e);throw l("RegExp#exec called on incompatible receiver")}},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},d32e:function(t,e,a){"use strict";a.r(e);var i=a("2909"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("b-row",[e("b-col",{attrs:{md:"10"}},[e("div",{staticClass:"font-weight-bold fa-2x text-light"},[t._v("Food Order History")])])],1),e("hr",{staticClass:"mt-1"}),e("b-modal",{staticStyle:{height:"200px"},attrs:{id:"modal-add",size:"sm",title:"Update Order","hide-footer":""}},[e("div",[e("div",[e("b-button",{staticClass:"mb-2 mr-2 btnSmall2 btn-primary",attrs:{disabled:t.isNameWarning},on:{click:t.addRow}},[t._v("Add Item")]),e("hr",{staticClass:"mt-2 mb-2"}),e("table",{staticClass:"tableOne vgt-table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{staticStyle:{width:"30%"},attrs:{scope:"col"}},[t._v("Item")]),e("th",{attrs:{scope:"col"}},[t._v("Item Quantity")]),e("th",{attrs:{scope:"col"}},[t._v("Item Price")]),e("th",{attrs:{scope:"col"}},[t._v("Total Price")]),e("th",{attrs:{scope:"col"}},[t._v("Actions")])])]),e("tbody",t._l(t.item,(function(a,i){return e("tr",{key:i},[e("td",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.item,expression:"item.item"}],staticClass:"inputttt",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Enter item name",required:"",min:"0",oninput:"validity.valid||(value='');"},domProps:{value:a.item},on:{input:function(e){e.target.composing||t.$set(a,"item",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.quantity,expression:"item.quantity",modifiers:{number:!0}}],staticClass:"inputttt",staticStyle:{width:"50%"},attrs:{type:"number",placeholder:"Enter quantity",min:"0",oninput:"validity.valid||(value='');"},domProps:{value:a.quantity},on:{input:[function(e){e.target.composing||t.$set(a,"quantity",t._n(e.target.value))},function(e){return t.calculateTotal(i)}],blur:function(e){return t.$forceUpdate()}}})]),e("td",{},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.item_price,expression:"item.item_price",modifiers:{number:!0}}],staticClass:"inputttt",staticStyle:{width:"50%"},attrs:{type:"number",placeholder:"Enter price",min:"0",oninput:"validity.valid||(value='');"},domProps:{value:a.item_price},on:{input:[function(e){e.target.composing||t.$set(a,"item_price",t._n(e.target.value))},function(e){return t.calculateTotal(i)}],blur:function(e){return t.$forceUpdate()}}})]),e("td",[e("b-row",[e("b-col",[t._v("₹ "+t._s(a.price)+"-/")])],1)],1),e("td",[e("span",{staticClass:"btn",on:{click:function(e){return t.deleteRow(i)}}},[e("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])})),0),e("tfoot",[e("tr",[e("td",[e("div",[e("b-form-group",{attrs:{"label-for":"input-1"}},[e("b-form-select",{attrs:{required:""},on:{change:t.handleSelectionChangeDriver},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[e("b-form-select-option",{attrs:{disabled:"",value:""}},[t._v("Select Driver")]),t._l(t.allDriverName,(function(a){return e("b-form-select-option",{key:a.id,attrs:{value:a.id}},[t._v(t._s(a.fullName))])}))],2)],1)],1)]),e("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("Discount :")]),e("td",[e("div",{staticClass:"d-flex flex-row justify-content-center align-items-center"},[e("div",{staticClass:"pt-2"},["Absolute"===t.discountType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.absoluteDiscount,expression:"absoluteDiscount"}],staticClass:"inputttt76",attrs:{type:"number",placeholder:"Enter discount",min:"0",oninput:"validity.valid||(value='');"},domProps:{value:t.absoluteDiscount},on:{input:function(e){e.target.composing||(t.absoluteDiscount=e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.discount,expression:"discount",modifiers:{number:!0}}],staticClass:"inputttt76",attrs:{type:"number",placeholder:"Enter discount ",min:"0",oninput:"validity.valid||(value='');"},domProps:{value:t.discount},on:{input:function(e){e.target.composing||(t.discount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"pt-2"},[e("b-form-select",{staticClass:"selectBorderless",attrs:{options:["Absolute","%"]},model:{value:t.discountType,callback:function(e){t.discountType=e},expression:"discountType"}})],1),"Absolute"!=t.discountType?e("div",{staticClass:"pt-2"},[t._v(" ₹ "+t._s(t.percentageAmount))]):t._e()])])]),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[e("b-row",[e("b-col",[t._v(" Sub Total : ")])],1)],1),e("td",[t._v(" ₹ "+t._s(t.subtotal)+"-/ ")])]),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[e("b-row",[e("b-col",[t._v(" GST : ")])],1)],1),e("td",[t._v(" ₹ "+t._s(null!=t.gstAmount?t.gstAmount:0)+"-/ ")])]),e("tr",[e("td",{staticClass:"text-right inputtttNone",attrs:{colspan:"4"}},[t._v(" Delivery Charge : ")]),e("td",[e("b-form-group",{staticClass:"col-md-6",attrs:{"label-for":"input-food-delivery"}},[e("b-form-input",{attrs:{required:"",placeholder:"00"},model:{value:t.food_delivery_charge,callback:function(e){t.food_delivery_charge=e},expression:"food_delivery_charge"}})],1)],1)]),e("tr",[e("td",{staticClass:"text-right inputtttNone",attrs:{colspan:"4"}},[e("b-row",[e("b-col",[t._v(" Total Amount : ")])],1)],1),e("td",[e("b-row",[e("b-col",[t._v(" ₹ "+t._s(t.totalAmount)+"-/ ")])],1)],1)])])])],1),e("div",{staticClass:"d-flex justify-content-end pt-2"},[t.updateloader?e("div",{staticClass:"spinner spinner-primary mr-3"}):t._e(),e("b-row",[e("b-col",[e("b-button",{staticClass:"mb-2 btnSmall",on:{click:t.clickCancelAmount2}},[t._v("Cancel")]),t.updateloader?t._e():e("b-button",{staticClass:"mb-2 btnSmall ml-2",attrs:{variant:"primary ripple",disabled:t.isNameWarning||""===t.selectedOption},on:{click:function(e){return t.clickUpdateAmount()}}},[t._v("Update order & send notification")])],1)],1)],1)])]),e("b-modal",{staticStyle:{height:"200px"},attrs:{id:"modal-item-view",size:"lg",title:"Update Order","hide-header":""}},[e("b-row",[e("b-col",[e("vue-good-table",{attrs:{columns:t.getitemColumns,"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:t.getitemRows},scopedSlots:t._u([{key:"table-row",fn:function(a){return["show-price"===a.column.field?e("span",[e("div",{on:{click:function(e){return t.clickViewProfile(a.row.userId)}}},[e("p",{staticClass:"m-0 ul-cursor--pointer text-primary",staticStyle:{"text-decoration":"underline"}},[t._v(" "+t._s(a.row.user_name)+" ")])])]):t._e()]}}])})],1),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("div",{staticClass:"d-flex justify-content-between px-2"},[t.selectedOption?e("b-form-group",{attrs:{label:"Assigned Driver","label-for":"input-1"}},[e("b-form-select",{attrs:{disabled:"",required:""},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[e("b-form-select-option",{attrs:{disabled:"",value:t.selectedOption}},[t._v(t._s(t.selectedOption))]),t._l(t.allDriverName,(function(a){return e("b-form-select-option",{key:a.id,attrs:{value:a.id}},[t._v(t._s(a.fullName))])}))],2)],1):t._e(),e("div",{staticClass:"d-flex flex-column"},[e("span",[t._v("Delivery charge : ₹ +"+t._s(t.getDeliveryCharge)+"-/")]),e("span",[t._v("GST : ₹ +"+t._s(t.getGsttax)+"-/")]),1==this.getdiscountType?e("span",[t._v("Discount : ₹ -"+t._s(t.getDiscount)+"-/")]):e("span",[t._v(" Discount : -"+t._s(t.getDiscount)+"%")]),e("span",[t._v("Total : ₹ "+t._s(t.getTotalPrice)+"-/")])])],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-cancelReason",size:"md",title:"Reason for cancellation:","hide-footer":"","hide-header":"",centered:""}},[e("b-row",{staticClass:"p-3"},[e("b-col",{attrs:{md:"12"}},[e("i",{staticClass:"fa fa-exclamation-triangle text-danger mb-3",attrs:{"aria-hidden":"true"}},[t._v(" Reason for cancellation: ")])]),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"","label-for":"input-2"}},[e("b-form-textarea",{staticStyle:{height:"100px"},attrs:{required:"",placeholder:"Reason for cancellation"},model:{value:t.cancelReasonText,callback:function(e){t.cancelReasonText=e},expression:"cancelReasonText"}})],1)],1),e("b-col",[e("div",{staticClass:"d-flex justify-content-end px-2"},[t.updateloader?e("div",{staticClass:"spinner spinner-primary mr-3"}):t._e(),e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.clickCancle()}}},[t._v("Cancel")]),e("b-button",{staticClass:"mb-2 mr-2",attrs:{variant:"primary ripple"},on:{click:function(e){return t.clickCancleButton()}}},[t._v("ok")])],1)])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-asign-driver",size:"md",title:"Asign Driver","hide-header":"","hide-footer":"",centered:""}},[e("b-row",{staticClass:"p-2"},[e("b-col",{attrs:{md:"12"}},[e("i",{staticClass:"fa fa-exclamation-triangle text-danger mb-3",attrs:{"aria-hidden":"true"}},[t._v(" Asign Driver: ")])]),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{staticClass:"pattingInSelect",attrs:{"label-for":"input-1"}},[e("b-form-select",{attrs:{required:""},on:{change:t.handleSelectionChangeDriver},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[e("b-form-select-option",{attrs:{disabled:"",value:""}},[t._v("Select Driver")]),t._l(t.allDriverName,(function(a){return e("b-form-select-option",{key:a.id,attrs:{value:a.id}},[t._v(t._s(a.fullName))])}))],2)],1)],1),e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"d-flex justify-content-end px-2"},[t.updateloader?e("div",{staticClass:"spinner spinner-primary mr-3"}):t._e(),e("b-button",{staticClass:"mb-2 mr-2",on:{click:function(e){return t.clickCancle()}}},[t._v("Cancel")]),e("b-button",{staticClass:"mb-2",attrs:{variant:"primary ripple"},on:{click:function(e){return t.clickUpdateAsignDriver()}}},[t._v("Update")])],1)])],1)],1),e("b-row",{staticClass:"my-2"},["Admin"===this.role?e("b-col",{staticStyle:{"padding-right":"15px !important","padding-left":"15px !important"},attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Select users",options:Object(i["a"])(t.allUsers),multiple:!1,limit:1},on:{input:t.handleChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1):t._e(),e("b-col",{staticClass:"for-gap",attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Payment Status",options:["All","Paid","Unpaid"],multiple:!1,limit:1},on:{input:t.handleChangeCar},model:{value:t.payment_status,callback:function(e){t.payment_status=e},expression:"payment_status"}})],1),e("b-col",{attrs:{md:"2"}},[e("v2-datepicker",{ref:"startDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:"Select Start date"},on:{change:function(e){return t.onDateSelected()}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),e("b-col",{staticClass:"for-gaps",attrs:{md:"2"}},[e("v2-datepicker",{ref:"endDate",staticClass:"for-date-picker",attrs:{lang:"en","picker-options":{disabledDate:function(t){return t.getTime()>(new Date).getTime()}},placeholder:"Select End date"},on:{change:function(e){return t.onEndDateSelected()}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),e("div",{staticClass:"col-md-2 d-flex flex-row for-gap justify-content-end"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.clearFilters()}}},[t._v(" Clear Filter ")])])],1),e("vue-good-table",{attrs:{columns:t.getDynamicColumns(),"line-numbers":!1,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},"sort-options":{enabled:!1},rows:"all"===t.payment_status.toLowerCase()?t.rows:t.filteredRows},scopedSlots:t._u([{key:"table-row",fn:function(a){return["user_name_show"===a.column.field?e("span",[e("div",{on:{click:function(e){return t.clickViewProfile(a.row.userId)}}},[e("p",{staticClass:"m-0 ul-cursor--pointer text-primary",staticStyle:{"text-decoration":"underline"}},[t._v(" "+t._s(a.row.user_info.first_name)+" "+t._s(a.row.user_info.last_name)+" ")])])]):"show_more_data_admin"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"d-flex"},[t._v(" "+t._s(a.row.registration_number)+" ")]),e("div",[e("ul",{staticClass:"d-flex mb-0 pb-2 pl-0 ml-0 flex-wrap list-unstyled"},[e("li",{staticClass:"p-0 m-0"},[t._v(" "+t._s(a.row.brand)+" ("+t._s(a.row.model)+") ")])])])])]],2):"show_more_data"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-column"},[e("div",[e("ul",{staticClass:"d-flex mb-0 pb-2 pl-0 ml-0 flex-wrap list-unstyled"},[e("li",{staticClass:"p-0 m-0"},[t._v(" "+t._s(a.row.brand)+" ("+t._s(a.row.model)+") ")])])])])]],2):"for_driver_show"===a.column.field?e("span",[[a.row.assign_driver_id?e("b-badge",{staticClass:"p-2",attrs:{variant:"success"}},[t._v(" "+t._s(a.row.assign_driver_id))]):e("b-button",{attrs:{variant:"primary",ripple:""},on:{click:function(e){return t.clickAsignDriver(a.row)}}},[t._v("Asign driver")])]],2):"show_date"===a.column.field?e("span",[[e("div",[e("div",[e("b",[t._v("From :")]),t._v(" "+t._s(a.row.booking_date))]),e("div",[e("b",[t._v("To :")]),t._v(" "+t._s(a.row.end_date))])])]],2):"payment_status"===a.column.field?e("span",[["Paid"===a.row.payment_status?e("b-badge",{attrs:{variant:"success"}},[t._v(t._s(a.row.payment_status))]):"Unpaid"===a.row.payment_status?e("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(a.row.payment_status))]):"COD"===a.row.payment_status?e("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(a.row.payment_status))]):t._e()]],2):"show_action"===a.column.field?e("span",[[0===a.row.price?e("b-button",{attrs:{variant:"primary",ripple:""},on:{click:function(e){return t.clickCancleBookingAmount(a.row.id)}}},[t._v("Amount")]):t._e(),a.row.price>0?e("b-button",{attrs:{variant:"primary",ripple:""},on:{click:function(e){return t.clickItemInfo(a.row)}}},[t._v("See Update Order")]):e("b-button",{attrs:{variant:"primary",ripple:""},on:{click:function(e){return t.clickCancleBookingAmount(a.row)}}},[t._v("Update Order")])]],2):"show_Status"===a.column.field?e("span",[[t.formData.fName&&t.formData.lName&&t.formData.aadharImage&&t.formData.drivingLicenseImage?e("div",[e("span",{staticClass:"text-white m-0",staticStyle:{"font-size":"14px"}},[e("span",{staticClass:"badge bg-success p-2 blueVerfiyred"},[t._v("Booking Confirmed"),e("i",{staticClass:"fa fa-check-circle blueVerfiy2red",staticStyle:{"padding-left":"4px"},attrs:{"aria-hidden":"true"}})])])]):e("div",[e("span",{staticClass:"text-white m-0",staticStyle:{"font-size":"14px"}},[e("span",{staticClass:"badge bg-danger p-2 blueVerfiyred"},[t._v("Profile Update Pending"),e("i",{staticClass:"fa fa-check-circle blueVerfiy2red",staticStyle:{"padding-left":"4px"},attrs:{"aria-hidden":"true"}})])])])]],2):"show_more_days"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"8px"}},t._l(a.row.audio_url,(function(i,n){return e("span",{key:n},[e("i",{staticClass:"fa fa-volume-up fa-2x",staticStyle:{color:"grey",opacity:"0.5"},attrs:{id:"playPauseIcon_"+a.row.id+"_"+n},on:{click:function(e){return t.toggleAudio(n,a.row.id)}}}),e("audio",{key:n,staticStyle:{height:"36px !important"},attrs:{id:"audio_"+a.row.id+"_"+n,controls:"",hidden:""}},[e("source",{attrs:{src:i,type:"audio/mp3"}}),t._v(" Your browser does not support the audio tag. ")])])})),0)]],2):"fasTag"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"d-flex"},[t._v(" Fastag - "),a.row.fast_tag_amount?e("p",{staticClass:"text-success p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" ₹ "+t._s(a.row.fast_tag_amount)+"/- ")]):e("p",{staticClass:"text-danger p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" No ")])]),e("div",{staticClass:"d-flex"},[t._v(" Incidental Coverage - "),a.row.trip_insurance_amount?e("p",{staticClass:"text-success p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" ₹ "+t._s(a.row.trip_insurance_amount)+"/- ")]):e("p",{staticClass:"text-danger p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" No ")])])])]],2):"door_pickup_show"===a.column.field?e("span",[[e("div",{staticClass:"d-flex flex-column"},[a.row.door_pickup_amount>0?e("div",{staticClass:"d-flex"},[t._v(" Door Pickup - "),e("p",{staticClass:"text-success p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" ₹ "+t._s(a.row.door_pickup_amount)+"/- ")])]):e("div",{staticClass:"d-flex"},[t._v(" Self Pickup - "),e("p",{staticClass:"text-success p-0 mb-0 ml-2",attrs:{variant:"primary ripple"}},[t._v(" "+t._s(a.row.self_pickup)+" ")])])])]],2):"price_show"===a.column.field?e("span",[[e("p",[t._v(t._s(a.row.price))])]],2):t._e()]}}])}),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e()],1)},s=[],r=a("5530"),o=a("ade3"),l=(a("13d5"),a("d3b7"),a("b680"),a("fb6a"),a("a434"),a("ac1f"),a("5319"),a("25f0"),a("d81d"),a("7db0"),a("4de4"),a("99af"),a("159b4"),a("1276"),a("c1df")),c=a.n(l),d=a("b654"),u=a.n(d),p=a("8e5f"),m=a.n(p),f=a("2ef0"),h=a.n(f),v={metaInfo:{title:"Car-Booking"},components:{multiselect:m.a},props:["row"],data:function(){var t;return t={getitemColumns:[{label:"Item Name",field:"item"},{label:"Item Price",field:"item_price"},{label:"Quantity",field:"quantity"},{label:"Price",field:"price"}],getitemRows:[],getTotalPrice:"",getDiscount:"",getdiscountType:"",getGsttax:"",getDeliveryCharge:"",maxDate:new Date,selected:null,allUsers:[],formData:{fName:"",lName:"",aadharImage:"",drivingLicenseImage:""},allCars:[],selectCar:null,startDate:"",endDate:"",book_id:"",updateloader:!1,amount:"",transactionId:"",types:"",userId:"",role:"",cancelReasonText:"",cancelReason:["first resion","second resion","third resion"],usersInfo:[],carsInfo:[],matchUser:"",rows:[],form:{templateId:"",name:"",content:""},selectedOption:"",generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1,isPlaying:!1,audio:null},Object(o["a"])(t,"isPlaying",!1),Object(o["a"])(t,"amount",null),Object(o["a"])(t,"payment_status","All"),Object(o["a"])(t,"filteredRows",[]),Object(o["a"])(t,"filteredData",[]),Object(o["a"])(t,"item",[{BookingId:this.order_id,item:"",quantity:0,item_price:0,price:0}]),Object(o["a"])(t,"previousData",[]),Object(o["a"])(t,"updateloader",!1),Object(o["a"])(t,"discount",0),Object(o["a"])(t,"absoluteDiscount",0),Object(o["a"])(t,"gstAmount",null),Object(o["a"])(t,"totalAmountsub",0),Object(o["a"])(t,"food_delivery_charge",0),Object(o["a"])(t,"getOrderId",0),Object(o["a"])(t,"allDriverName",[]),Object(o["a"])(t,"discountType","Absolute"),Object(o["a"])(t,"percentageAmount",0),t},computed:{totalPrice:function(){return this.item.quantity*this.item_price},totalAmount:function(){var t=this.item.reduce((function(t,e){return t+e.price}),0);if(this.discount>0){var e=t*(this.discount/100);return this.percentageAmount=parseFloat(e.toFixed(2)),this.percentageAmount=this.subtotal<=this.percentageAmount?this.subtotal:this.percentageAmount,t-=this.percentageAmount,t+=this.gstAmount>0?this.gstAmount:0,t+parseInt(this.food_delivery_charge)}return this.percentageAmount=0,t-=this.absoluteDiscount,t+=this.gstAmount>0?this.gstAmount:0,t+parseInt(this.food_delivery_charge)},subtotal:function(){var t=this.item.reduce((function(t,e){return t+e.price}),0);return t},isNameWarning:function(){return this.item.some((function(t){return!t.item}))}},mounted:function(){this.addCssRule()},watch:{item:{handler:function(t){},deep:!0},discountType:function(t){"Absolute"===t?this.discount=0:"%"===t&&(this.absoluteDiscount=0)}},created:function(){var t=localStorage.getItem("userInfo"),e=JSON.parse(t);this.role=e.data.role,this.getProfileDetails(),this.getAllTransaction(),this.getGstAmount(),this.getAllUsers(),addCssRule(),this.filteredRows=this.rows},methods:{calculateTotal:function(t){var e=this.item[t];e.price=e.quantity*e.item_price},clickAsignDriver:function(t){this.getOrderId=t.id,this.$bvModal.show("modal-asign-driver"),this.getAllUsers(t)},handleSelectionChangeDriver:function(t){console.log(t)},clickUpdateAsignDriver:function(){var t=this;this.loader=!0;var e={driver_id:this.selectedOption,order_id:this.getOrderId};this.$apiService.postCall("driverAssign/",e).then((function(e){e.error?(t.loader=!1,t.$toaster.makeToast("warning","Update driver asign failed")):(t.$toaster.makeToast("success","Update driver asign successfully"),t.$bvModal.hide("modal-asign-driver"),t.getAllTransaction(),t.loader=!1)})).catch((function(e){t.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),t.loader=!1}))},addRow:function(){this.previousData.push(this.item.slice()),this.item.push({BookingId:this.order_id,item:"",quantity:0,item_price:0,price:0})},deleteRow:function(t){this.item.splice(t,1),this.recalculateTotal()},recalculateTotal:function(){this.totalAmount=this.item.reduce((function(t,e){return t+e.price}),0),this.applyDiscount()},applyDiscount:function(){var t=this.totalAmount*(this.discountPercentage/100);this.totalAmount-=t},clearFilters:function(){this.startDate=null,this.endDate=null,this.matchUser="Select Users",this.selectCar=null,this.payment_status="All",window.location.reload()},openModal:function(t){this.$bvModal.show("modal-attachment")},formatPrice:function(t){var e=(t/1).toFixed(0).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},cancelReasonChange:function(t){this.cancelReasonText=t},clickCancle:function(){this.$bvModal.hide("modal-cancelReason"),this.$bvModal.hide("modal-asign-driver"),this.$bvModal.hide("modal-attachment")},clickCancelAmount2:function(){this.item=[],this.item_price=0,this.quantity=0,this.discount=0,this.absoluteDiscount=0,this.$bvModal.hide("modal-add"),this.$bvModal.hide("modal-attachment")},clickCancleButton:function(){this.cancelReasonText&&this.cancelReasonText.length>=10?this.cancleYourBooking():this.$toaster.makeToast("warning","Please enter a cancel reason with at least 10 characters")},clickCancleButtonAmount:function(){},clickUpdateAmount:function(){var t=this;this.loader=!0;var e=this.order_id;if(!this.totalAmount||isNaN(this.totalAmount)||this.totalAmount<0||this.item.some((function(t){return!t.price||isNaN(t.price)})))return this.$toaster.makeToast("warning","Please enter valid discount amount"),void(this.loader=!1);var a=this.gstAmount>0?this.gstAmount:0,i=this.absoluteDiscount>0?"True":"False",n={orderId:e,final_amount:this.totalAmount,delivery_charge:this.food_delivery_charge,discount:this.discount>0?this.discount:this.absoluteDiscount>0?this.absoluteDiscount:0,gst_tax:a,sub_total:this.subtotal,discount_type:i,orders:this.item.map((function(t,a){return Object(r["a"])(Object(r["a"])({},t),{},{BookingId:e})}))};this.$apiService.postCall("updateOrder/",n).then((function(e){t.getAllTransaction(),t.amount="",t.clickCancelAmount2(),t.clickSendNotification(),t.clickUpdateAsignDriver(),t.$toaster.makeToast("success","Order Is Updated")})).catch((function(e){console.error(e),t.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),t.loader=!1,t.loader=!1}))},clickViewProfile:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},getGstAmount:function(){var t=this;this.loader=!0,this.$apiService.getCall("appSetting/?key=gst_tax").then((function(e){if(e.error)t.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),t.loader=!1;else{var a=e.apidata;t.gstAmount=a.value,t.loader=!1}})).catch((function(e){t.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),t.loader=!1}))},clickCancleBooking:function(t){this.book_id=t,this.$bvModal.show("modal-cancelReason")},clickCancleBookingAmount:function(t){this.userId=t.userId,this.order_id=t.id,this.$bvModal.show("modal-add"),this.getOrderId=t.id,this.getAllUsers(t)},cancleBooking:function(t,e,a,i){var n=this;this.$swal({title:"Are you sure?",text:"You won't to cancel this booking!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Cancel it!"}).then((function(e){if(n.loader=!0,e.value){n.$swal("Cancel Booking!","Your car Booking has been Cancel.","success");n.$apiService.getCall("cancel/?book_id="+t).then((function(t){t.apidata.isError||(n.$toaster.makeToast("success","This car booking cancel successfully"),setTimeout((function(){window.location.reload()}),700),n.loader=!1)}))}})).catch((function(t){n.$toaster.makeToast("warning","User can't Cancel! Srever failed"),n.loader=!1}))},downloadPDF:function(t){var e="payment_summary.pdf",a=document.createElement("a");a.href=t,a.download=e,a.target="_blank",a.click()},clickBookCar:function(){this.$router.push("/app/sessions/searchCar")},getSearchOptions:function(){return"Admin"===this.role?{enabled:!0,placeholder:"Search"}:{enabled:!1}},handleStartDate:function(){},onDateSelected:function(t){},onEndDateSelected:function(t){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.getAllTransaction(this.startDate,this.endDate,this.matchUser.id,this.selectCar)},handleChange:function(t){this.matchUser=this.usersInfo.find((function(e){return e.fullName==t})),null!==this.matchUser&&this.getAllTransaction(this.startDate,this.endDate,this.matchUser.id,this.selectCar)},handleChangeCar:function(t){t||(t="all"),"all"===t.toLowerCase()?this.filteredRows=this.rows:this.filteredRows=this.rows.filter((function(e){return e.payment_status.toLowerCase()===t.toLowerCase()}))},handleTextInput:h.a.debounce((function(){this.getAllTransaction(this.startDate)}),700),getDynamicColumns:function(){var t=[{label:"Ordered date",field:"created_at"},{label:"Ordered ID",field:"id"},{label:"Audio File",field:"show_more_days"},{label:"Amount",field:"price_show"},{label:"Status",field:"show_action"},{label:"Payment Status",field:"payment_status"}];return"User"===this.role?[{label:"Model(brand)",field:"show_more_data"}].concat(t,[{label:"Status",field:"show_Status"}]):[{label:"User name",field:"user_name_show"}].concat(t)},clickPay:function(){window.location.href=this.$apiService.getAppendedUrl("depositApiView/?userId=".concat(this.userId,"&amount=").concat(this.amount))},clickDeposit:function(){this.$bvModal.show("modal-attachment")},getAllUsers:function(t){var e=this;this.loader=!0,this.$apiService.getCall("account/").then((function(a){var i=[];if(a.apidata.length>0&&(i=a.apidata,i=a.apidata.filter((function(t){return!t.is_superuser})),i=a.apidata.filter((function(t){return null!==t.first_name&&null!==t.last_name})),i.forEach((function(t){t.full_name=t.first_name||t.last_name?t.first_name+" "+t.last_name:""}))),t){var n=a.apidata.filter((function(t){return"Driver"===t.role}));n=n.filter((function(t){return null!==t.first_name&&null!==t.last_name})),e.allDriverName=n.map((function(t){return{id:t.id,fullName:t.full_name}}))}e.allUsers=i.map((function(t){return t.full_name})),e.usersInfo=i.map((function(t){return{id:t.id,fullName:t.full_name}})),e.loader=!1})).catch((function(t){e.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),e.loader=!1}))},getAllTransaction:function(t,e,a,i){var n=this;this.loader=!0;var s="";t&&(s+="startDate=".concat(t)),e&&(s+="&endDate=".concat(e)),a&&(s+="&userId=".concat(a)),i&&(s+="&reg_number=".concat(i)),this.$apiService.getCall("bookingHistory/?".concat(s)).then((function(t){var e=[];t.apidata.length>0&&("User"===n.role?(n.allDate=t.apidata.map((function(t){return t.time})),e=t.apidata.filter((function(t){if(t.userId==n.userId)return t.userId}))):e=t.apidata,e.forEach((function(t){t.created_at=t.created_at?c()(t.created_at).format("DD MMM YYYY h:mm A"):""}))),n.rows=e,n.loader=!1})).catch((function(t){n.$toaster.makeToast("warning",u.a.ERROR_MESSAGE),n.loader=!1}))},clickItemInfo:function(t){this.$bvModal.show("modal-item-view"),this.getitemRows=t.orderItem,this.getTotalPrice=t.price,this.getDiscount=t.discount,this.getGsttax=t.gst_tax,this.getDeliveryCharge=t.door_pickup_amount,this.getdiscountType=t.discount_type,this.selectedOption="".concat(t.driver.first_name," ").concat(t.driver.last_name)},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")},togglePlay:function(t){this.audio&&this.audio.src===t?this.audio.paused?this.audio.play():this.audio.pause():(this.audio_url=t,this.audio=new Audio(t),this.audio.play())},toggleAudio:function(t,e){var a=document.querySelectorAll("audio");document.querySelectorAll('[id^="playPauseIcon_"]');a.forEach((function(a){if(a.id!=="audio_".concat(e,"_").concat(t)&&!a.paused){a.pause();var i=document.querySelector("#playPauseIcon_".concat(a.id.split("_")[1],"_").concat(a.id.split("_")[2]));i&&(i.style.opacity=".5")}}));var i=document.getElementById("audio_".concat(e,"_").concat(t)),n=document.querySelector("#playPauseIcon_".concat(e,"_").concat(t));i.paused?(i.play(),n.style.opacity="1"):(i.pause(),n.style.opacity=".5")},addCssRule:function(){var t=document.createElement("style");t.type="text/css";var e="#modal-add___BV_modal_content_{  right: 330px !important;}";t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},clickSendNotification:function(){var t=this;if(!this.totalAmount||isNaN(this.totalAmount)||this.totalAmount<0||this.item.some((function(t){return!t.price||isNaN(t.price)})))return this.$toaster.makeToast("warning","Please enter valid discount amount"),void(this.loader=!1);this.loader=!0,this.$apiService.getCall("sendNotification/?user_id=".concat(this.userId)).then((function(e){t.loader=!0,e.data&&e.data.success,t.$toaster.makeToast("success","Notification is send successfully"),t.loader=!1})).catch((function(e){t.$toaster.makeToast("error","Failed to send notification"),t.loader=!1}))}}},b=v,g=(a("8498"),a("dd89"),a("2877")),_=Object(g["a"])(b,n,s,!1,null,null,null);e["default"]=_.exports},d58f:function(t,e,a){var i=a("59ed"),n=a("7b0b"),s=a("44ad"),r=a("07fa"),o=TypeError,l=function(t){return function(e,a,l,c){i(a);var d=n(e),u=s(d),p=r(d),m=t?p-1:0,f=t?-1:1;if(l<2)while(1){if(m in u){c=u[m],m+=f;break}if(m+=f,t?m<0:p<=m)throw o("Reduce of empty array with no initial value")}for(;t?m>=0:p>m;m+=f)m in u&&(c=a(c,u[m],m,d));return c}};t.exports={left:l(!1),right:l(!0)}},d784:function(t,e,a){"use strict";a("ac1f");var i=a("e330"),n=a("cb2d"),s=a("9263"),r=a("d039"),o=a("b622"),l=a("9112"),c=o("species"),d=RegExp.prototype;t.exports=function(t,e,a,u){var p=o(t),m=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),f=m&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!m||!f||a){var h=i(/./[p]),v=e(p,""[t],(function(t,e,a,n,r){var o=i(t),l=e.exec;return l===s||l===d.exec?m&&!r?{done:!0,value:h(e,a,n)}:{done:!0,value:o(a,e,n)}:{done:!1}}));n(String.prototype,t,v[0]),n(d,p,v[1])}u&&l(d[p],"sham",!0)}},dd89:function(t,e,a){"use strict";a("f50e")},f50e:function(t,e,a){}}]);