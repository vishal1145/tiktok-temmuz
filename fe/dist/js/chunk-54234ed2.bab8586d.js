(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54234ed2"],{"0cb2":function(e,t,r){var a=r("e330"),s=r("7b0b"),n=Math.floor,i=a("".charAt),l=a("".replace),c=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,d,f){var E=r+e.length,p=a.length,v=o;return void 0!==d&&(d=s(d),v=u),l(f,v,(function(s,l){var u;switch(i(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,E);case"<":u=d[c(l,1,-1)];break;default:var o=+l;if(0===o)return s;if(o>p){var f=n(o/10);return 0===f?s:f<=p?void 0===a[f-1]?i(l,1):a[f-1]+i(l,1):s}u=a[o-1]}return void 0===u?"":u}))}},"107c":function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp;e.exports=a((function(){var e=n("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1148:function(e,t,r){"use strict";var a=r("5926"),s=r("577e"),n=r("1d80"),i=RangeError;e.exports=function(e){var t=s(n(this)),r="",l=a(e);if(l<0||l==1/0)throw i("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(r+=t);return r}},"1e5d":function(e,t,r){"use strict";var a=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer_wrap"},[t("div",{staticClass:"flex-grow-1"}),t("div",{staticClass:"app-footer"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-9"},[t("p",[t("strong",[e._v("Credin - eSign")])])])]),t("div",{staticClass:"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"},[t("div",{staticClass:"d-flex align-items-center"},[t("img",{staticClass:"logo",attrs:{src:r("9d64"),alt:""}}),t("div",[t("div",[t("p",{staticClass:"m-0"},[e._v("© 2019-2022 UI-Lib")]),t("p",{staticClass:"m-0"},[e._v("All rights reserved")])])]),t("span",{staticClass:"flex-grow-1"}),t("a",{staticClass:"btn btn-primary text-white btn-rounded",staticStyle:{display:"none"},attrs:{href:"https://themeforest.net/item/gull-vuejs-admin-dashboard-template/24497287?ref=ui-lib",target:"_blank"}},[e._v("Buy Gull Vue")])])])])])}],n={data:function(){return{}},methods:{}},i=n,l=r("2877"),c=Object(l["a"])(i,a,s,!1,null,"6b127052",null);t["a"]=c.exports},5319:function(e,t,r){"use strict";var a=r("2ba4"),s=r("c65b"),n=r("e330"),i=r("d784"),l=r("d039"),c=r("825a"),u=r("1626"),o=r("5926"),d=r("50c4"),f=r("577e"),E=r("1d80"),p=r("8aa5"),v=r("dc4a"),S=r("0cb2"),I=r("14c3"),g=r("b622"),_=g("replace"),A=Math.max,x=Math.min,h=n([].concat),T=n([].push),m=n("".indexOf),b=n("".slice),y=function(e){return void 0===e?e:String(e)},D=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),O=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var n=M?"$":"$0";return[function(e,r){var a=E(this),n=void 0==e?void 0:v(e,_);return n?s(n,e,a,r):s(t,f(a),e,r)},function(e,s){var i=c(this),l=f(e);if("string"==typeof s&&-1===m(s,n)&&-1===m(s,"$<")){var E=r(t,i,l,s);if(E.done)return E.value}var v=u(s);v||(s=f(s));var g=i.global;if(g){var _=i.unicode;i.lastIndex=0}var D=[];while(1){var M=I(i,l);if(null===M)break;if(T(D,M),!g)break;var O=f(M[0]);""===O&&(i.lastIndex=p(l,d(i.lastIndex),_))}for(var R="",w=0,N=0;N<D.length;N++){M=D[N];for(var C=f(M[0]),L=A(x(o(M.index),l.length),0),G=[],P=1;P<M.length;P++)T(G,y(M[P]));var U=M.groups;if(v){var $=h([C],G,L,l);void 0!==U&&T($,U);var k=f(a(s,void 0,$))}else k=S(C,l,L,G,U,s);L>=w&&(R+=b(l,w,L)+k,w=L+C.length)}return R+b(l,w)}]}),!O||!D||M)},6533:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-admin-wrap layout-sidebar-large clearfix"},[t("top-nav"),e.shouldDisplaySidebar?t("sidebar"):e._e(),t("main",[t("div",{staticClass:"main-content-wrap d-flex flex-column flex-grow-1 print-area",class:{"sidenav-open":e.getSideBarToggleProperties.isSideNavOpen}},[t("transition",{attrs:{name:"page",mode:"out-in"}},[t("router-view")],1),t("div",{staticClass:"flex-grow-1"})],1)])],1)},s=[],n=r("5530"),i=r("a9cb"),l=r("389a"),c=r("1e5d"),u=r("2f62"),o={components:{Sidebar:i["a"],TopNav:l["a"],appFooter:c["a"]},data:function(){return{isAdmin:""}},watch:{shouldDisplaySidebar:function(){return!("User"===this.isAdmin&&window.innerWidth<=768)}},created:function(){var e=localStorage.getItem("userInfo"),t=JSON.parse(e);this.isAdmin=t.data.role},computed:Object(n["a"])(Object(n["a"])({},Object(u["c"])(["getSideBarToggleProperties"])),{},{shouldDisplaySidebar:function(){return!("User"===this.isAdmin&&window.innerWidth<=768)}}),methods:{}},d=o,f=r("2877"),E=Object(f["a"])(d,a,s,!1,null,null,null);t["default"]=E.exports},9263:function(e,t,r){"use strict";var a=r("c65b"),s=r("e330"),n=r("577e"),i=r("ad6d"),l=r("9f7f"),c=r("5692"),u=r("7c73"),o=r("69f3").get,d=r("fce3"),f=r("107c"),E=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,S=s("".charAt),I=s("".indexOf),g=s("".replace),_=s("".slice),A=function(){var e=/a/,t=/b*/g;return a(p,e,"a"),a(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=l.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],T=A||h||x||d||f;T&&(v=function(e){var t,r,s,l,c,d,f,T=this,m=o(T),b=n(e),y=m.raw;if(y)return y.lastIndex=T.lastIndex,t=a(v,y,b),T.lastIndex=y.lastIndex,t;var D=m.groups,M=x&&T.sticky,O=a(i,T),R=T.source,w=0,N=b;if(M&&(O=g(O,"y",""),-1===I(O,"g")&&(O+="g"),N=_(b,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==S(b,T.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,w++),r=new RegExp("^(?:"+R+")",O)),h&&(r=new RegExp("^"+R+"$(?!\\s)",O)),A&&(s=T.lastIndex),l=a(p,M?r:T,N),M?l?(l.input=_(l.input,w),l[0]=_(l[0],w),l.index=T.lastIndex,T.lastIndex+=l[0].length):T.lastIndex=0:A&&l&&(T.lastIndex=T.global?l.index+l[0].length:s),h&&l&&l.length>1&&a(E,l[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)})),l&&D)for(l.groups=d=u(null),c=0;c<D.length;c++)f=D[c],d[f[0]]=l[f[1]];return l}),e.exports=v},"9f7f":function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp,i=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=i||a((function(){return!n("a","y").sticky})),c=i||a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:l,UNSUPPORTED_Y:i}},ac1f:function(e,t,r){"use strict";var a=r("23e7"),s=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},b654:function(e,t){e.exports=messages={VALIDATION_MESSAGE:"Please enter the details first",EDIT_COMPANY_MESSAGE:"Company edited successfully",ERROR_MESSAGE:"Error occurred",EDIT_LOGO_MESSAGE:"Logo edited successfully",EDIT_SECURITY_MESSAGE:"Security details edited successfully",EDIT_STAMP_MESSAGE:"Stamp details edited successfully",EDIT_BRAND_MESSAGE:"Brand details edited successfully",FILE_UPLOAD:"File uploaded successfully",EDIT_ESIGN_MESSAGE:"Esign details edited successfully",EDIT_INVITE_MESSAGE:"Invite details edited successfully",REFRESH_TOKEN_MESSAGE:"Refresh token successfully",ADD_TEMPLATE_MESSAGE:"Template added successfully",EDIT_TEMPLATE_MESSAGE:"Template edited successfully",ERROR_TEMPLATE_MESSAGE:"Name already exists",DELETE_TEMPLATE_MESSAGE:"Template deleted successfully",EMAIL_VERIFICATION_MESSAGE:"Please verify your email",EMAIL_DUPLICATE_ERROR:"Email already exists",CODY_COPY:"Token copied successfully",SALT_COPY:"Salt copied successfully",EDIT_DOCUMENT_MESSAGE:"Details updated successfully",SALT_MESSAGE:"Private salt refresh successfully",SENT_MAIL:"Otp successully sent on email",NOT_FOUND:"Email not found",DELETE_DATA:"Deleted successfully",SUCCESS_MESSAGE:"Sent successfully",UPDATE_MESSAGE:"Updated successfully",MISMATCH_ERROR:"Mismatched password",VALIDATION_ERROR:"Mismatched confirm password",DELETE_VALIDATION_MESSAGE:"Atleast one invitee is required.",DUPLICATE_MESSAGE:"Invitee detials already present",INVITEE_DETAILS:"Invitee details updated successfully",INVITEE_INFO:"Please fill the details",LINK_EXPIRED:"Link expired",SIGNATURE_VALIDATION:"Select atleast one signature type",SIGNED_ALREADY:"Document is already signed",IP_VALIDATION_MESSAGE:"Invalid IP address",PASSWORDNOT_OK:"You have to enter at least 5 digit!",ADDIP_MESSAGE:"Add IPs First",MAIL_SENT:"Details Sent"}},b680:function(e,t,r){"use strict";var a=r("23e7"),s=r("e330"),n=r("5926"),i=r("408a"),l=r("1148"),c=r("d039"),u=RangeError,o=String,d=Math.floor,f=s(l),E=s("".slice),p=s(1..toFixed),v=function(e,t,r){return 0===t?r:t%2===1?v(e,t-1,r*e):v(e*e,t/2,r)},S=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},I=function(e,t,r){var a=-1,s=r;while(++a<6)s+=t*e[a],e[a]=s%1e7,s=d(s/1e7)},g=function(e,t){var r=6,a=0;while(--r>=0)a+=e[r],e[r]=d(a/t),a=a%t*1e7},_=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var a=o(e[t]);r=""===r?a:r+f("0",7-a.length)+a}return r},A=c((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!c((function(){p({})}));a({target:"Number",proto:!0,forced:A},{toFixed:function(e){var t,r,a,s,l=i(this),c=n(e),d=[0,0,0,0,0,0],p="",A="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return o(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=S(l*v(2,69,1))-69,r=t<0?l*v(2,-t,1):l/v(2,t,1),r*=4503599627370496,t=52-t,t>0){I(d,0,r),a=c;while(a>=7)I(d,1e7,0),a-=7;I(d,v(10,a,1),0),a=t-1;while(a>=23)g(d,1<<23),a-=23;g(d,1<<a),I(d,1,1),g(d,2),A=_(d)}else I(d,0,r),I(d,1<<-t,0),A=_(d)+f("0",c);return c>0?(s=A.length,A=p+(s<=c?"0."+f("0",c-s)+A:E(A,0,s-c)+"."+E(A,s-c))):A=p+A,A}})},fce3:function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp;e.exports=a((function(){var e=n(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);