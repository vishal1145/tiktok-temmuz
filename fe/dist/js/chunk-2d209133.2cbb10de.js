(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209133"],{a806:function(t,a,l){"use strict";l.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Calendar",folder:"Extra Kits"}}),a("b-row",[a("b-col",{staticClass:"mb-30",attrs:{md:"6"}},[a("b-card",{attrs:{title:"Bootstrap Basic Calendar"}},[a("b-row",[a("b-col",{attrs:{md:"auto"}},[a("b-calendar",{attrs:{locale:"en-US"},on:{context:t.onContext},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),a("b-col",[a("p",[t._v("Value: "),a("b",[t._v("'"+t._s(t.value)+"'")])]),a("p",{staticClass:"mb-0"},[t._v("Context:")]),a("pre",{staticClass:"small"},[t._v(t._s(t.context))])])],1)],1)],1),a("b-col",{staticClass:"mb-30",attrs:{md:"6"}},[a("b-card",{attrs:{title:"Styling Variant Color"}},[[a("b-calendar",{attrs:{"selected-variant":"success","today-variant":"info"}})]],2)],1),a("b-col",{staticClass:"mb-30",attrs:{md:"12"}},[a("b-card",{attrs:{title:"Width"}},[[a("b-calendar",{attrs:{block:"",locale:"en-US"}})]],2)],1),a("b-col",{staticClass:"mb-30",attrs:{md:"4"}},[a("b-card",{attrs:{title:"Default Slot"}},[[a("b-calendar",{attrs:{"value-as-date":"",locale:"en"},model:{value:t.dSlot,callback:function(a){t.dSlot=a},expression:"dSlot"}},[a("div",{staticClass:"d-flex",attrs:{dir:"ltr"}},[t.dSlot?a("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:t.clearDate}},[t._v(" Clear date ")]):t._e(),a("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-primary"},on:{click:t.setToday}},[t._v(" Set Today ")])],1)])]],2)],1)],1)],1)},s=[],n={data:function(){return{value:"",context:null,dSlot:null}},methods:{onContext:function(t){this.context=t},setToday:function(){var t=new Date;this.dSlot=new Date(t.getFullYear(),t.getMonth(),t.getDate())},clearDate:function(){this.dSlot=""}}},o=n,c=l("2877"),r=Object(c["a"])(o,e,s,!1,null,null,null);a["default"]=r.exports}}]);