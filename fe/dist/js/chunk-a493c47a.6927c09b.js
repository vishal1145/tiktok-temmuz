(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a493c47a"],{2613:function(t,s,a){t.exports=a.p+"img/photo-long-3.f4e38da9.jpg"},"28be":function(t,s,a){},"44be":function(t,s,a){"use strict";a("28be")},"4ab7":function(t,s,a){t.exports=a.p+"img/photo-wide-4.2e142cde.jpg"},"67d7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"auth-layout-wrap",style:{backgroundImage:"url("+t.bgImage+")"}},[s("div",{staticClass:"auth-content"},[s("div",{staticClass:"card o-hidden",staticStyle:{width:"50%","margin-left":"11rem"}},[s("div",{staticClass:"row"},[s("b-col",{attrs:{md:"12"}},[t.successMessage?s("div",{staticClass:"p-4"},[s("div",{staticClass:"auth-logo text-center mb-30"},[s("img",{attrs:{src:t.logo}})]),s("div",{staticClass:"mt-3 text-center"},[s("h1",{staticClass:"mb-3 text-18"},[t._v("Verification Done")])]),s("div",{staticClass:"mt-3 text-center"},[s("router-link",{staticClass:"text-muted",attrs:{to:"signIn",tag:"a"}},[s("u",[t._v("Sign In")])])],1)]):t._e(),t.errorMessage?s("div",{staticClass:"p-4"},[s("div",{staticClass:"auth-logo text-center mb-30"},[s("img",{attrs:{src:t.logo}})]),s("div",{staticClass:"mt-3 text-center"},[s("h1",{staticClass:"mb-3 text-18",staticStyle:{"text-align":"center"}},[t._v(" Link Expired ")]),s("router-link",{staticClass:"text-muted",attrs:{to:"signIn",tag:"a"}},[s("u",[t._v("Sign In")])])],1)]):t._e()])],1)])])])},i=[],n={metaInfo:{title:"Verification Page"},data:function(){return{validationId:"",email:"",bgImage:a("4ab7"),logo:a("9d64"),signInImage:a("2613"),password:"",repeatPassword:"",submitStatus:null,successMessage:!1,errorMessage:!1}},created:function(){this.validationId=this.$route.query._id,this.getValidationData()},methods:{getValidationData:function(){var t=this;this.$apiService.getCall("verify-email?_id="+this.validationId).then((function(s){"Verified"==s.apidata.msg?t.successMessage=!0:t.errorMessage=!0})).catch((function(s){t.errorMessage=!0}))}}},o=n,c=(a("44be"),a("2877")),r=Object(c["a"])(o,e,i,!1,null,null,null);s["default"]=r.exports},"9d64":function(t,s,a){t.exports=a.p+"img/logo.e6608349.png"}}]);