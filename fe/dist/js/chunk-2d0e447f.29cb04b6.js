(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e447f"],{"900b":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t._self._c;return a("div",[a("breadcumb",{attrs:{page:"Scrumboard",folder:"App"}}),a("b-row",[a("b-col",{staticClass:"mb-30",attrs:{md:"3"}},[a("b-card",{staticClass:"text-center cursor-pointer",attrs:{"bg-variant":"primary","text-variant":"white"},on:{click:t.addBoardPage}},[a("div",{staticClass:"mb-30"},[a("i",{staticClass:"i-Add text-40"})]),a("b-card-text",{staticClass:"text-15"},[t._v("Create New Board")])],1)],1),t._l(t.getBoardList,(function(r,e){return a("b-col",{key:e,staticClass:"mb-30",attrs:{md:"3"},on:{click:function(a){return t.editBoardPage(r)}}},[a("b-card",{staticClass:"text-center cursor-pointer"},[a("div",{staticClass:"mb-30"},[a("i",{staticClass:"i-Bar-Chart-3 text-40"})]),a("b-card-text",{staticClass:"text-15"},[t._v(t._s(r.title))])],1)],1)}))],2)],1)},s=[],i=r("5530"),c=r("2f62"),d={computed:Object(i["a"])({},Object(c["c"])(["getBoardList"])),data:function(){return{}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["addBoard","editBoardList"])),{},{addBoardPage:function(){this.addBoard()},editBoardPage:function(t){this.editBoardList(t),this.$router.push("edit-scrumboard")}})},o=d,n=r("2877"),b=Object(n["a"])(o,e,s,!1,null,null,null);a["default"]=b.exports}}]);