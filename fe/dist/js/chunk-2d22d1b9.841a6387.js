(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d1b9"],{f5a5:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Invoice",folder:"Apps"}}),e("div",{staticClass:"wrapper"},[e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table",selectionInfoClass:" flex-column flex-sm-row"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!1,selectionInfoClass:"table-alert__box"},rows:t.invoiceList},scopedSlots:t._u([{key:"table-row",fn:function(i){return["button"==i.column.field?e("span",[e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"Edit"},on:{click:function(e){return t.editInvoiceData(i.row)}}},[e("i",{staticClass:"i-Eraser-2 text-25 text-info mr-2"}),t._v(" "+t._s(i.row.button))]),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"View"},on:{click:function(e){return t.viewInvoicePage(i.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success mr-2"}),t._v(" "+t._s(i.row.button))]),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"o-hidden d-inline-block",attrs:{title:"Delete"},on:{click:function(e){return t.removeInvoice(i.row.invoiceId)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"}),t._v(" "+t._s(i.row.button))])]):t._e()]}}])},[e("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded d-sm-block d-none",attrs:{variant:"primary"},on:{click:t.createInvoice}},[t._v(" Create New Invoice ")])],1)])],1)],1)])},n=[],s=i("5530"),a=i("ade3"),l=i("2f62"),c={data:function(){return Object(a["a"])({input:[{name:""}],columns:[{label:"Bill From",field:"billFrom"},{label:"Bill To",field:"billTo"},{label:"Status",field:"status",html:!0},{label:"Button",field:"button",html:!0,tdClass:"text-right",thClass:"text-right"}],newTodo:""},"input",[{name:""}])},computed:Object(l["c"])(["invoiceList"]),methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["editInvoice","removeInvoice","viewInvoice"])),{},{editInvoiceData:function(t){this.editInvoice(t),this.$router.push("/app/apps/edit-invoice")},viewInvoicePage:function(t){this.viewInvoice(t),this.$router.push("/app/apps/printInvoice")},createInvoice:function(){this.$router.push("/app/apps/createInvoice")}})},r=c,d=i("2877"),u=Object(d["a"])(r,o,n,!1,null,null,null);e["default"]=u.exports}}]);