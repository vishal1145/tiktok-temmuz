(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2375892c"],{"0cb2":function(t,e,a){"use strict";var r=a("e330"),s=a("7b0b"),n=Math.floor,i=r("".charAt),o=r("".replace),c=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,r,d,p){var f=a+t.length,v=r.length,x=u;return void 0!==d&&(d=s(d),x=l),o(p,x,(function(s,o){var l;switch(i(o,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,a);case"'":return c(e,f);case"<":l=d[c(o,1,-1)];break;default:var u=+o;if(0===u)return s;if(u>v){var p=n(u/10);return 0===p?s:p<=v?void 0===r[p-1]?i(o,1):r[p-1]+i(o,1):s}l=r[u-1]}return void 0===l?"":l}))}},"107c":function(t,e,a){"use strict";var r=a("d039"),s=a("da84"),n=s.RegExp;t.exports=r((function(){var t=n("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,a){"use strict";var r=a("c65b"),s=a("825a"),n=a("1626"),i=a("c6b6"),o=a("9263"),c=TypeError;t.exports=function(t,e){var a=t.exec;if(n(a)){var l=r(a,t,e);return null!==l&&s(l),l}if("RegExp"===i(t))return r(o,t,e);throw new c("RegExp#exec called on incompatible receiver")}},"1ceb":function(t,e,a){"use strict";a.r(e);a("fb6a");var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"carousel slide",staticStyle:{"background-color":"white"},attrs:{id:"carouselExampleControls","data-ride":"carousel","data-interval":"false"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("div",{staticClass:"row mt-5 px-5 flex justify-content-center"},t._l(t.visibleRows,(function(a,r){return e("div",{key:r,staticClass:"col-lg-3 d mb-3"},[e("div",{staticClass:"card position-relative"},[e("div",{staticClass:"list-thumb d-flex"},[e("div",{staticClass:"carousel slide w-100 h-100",attrs:{id:"carouselExampleIndicators-"+r,"data-ride":"carousel"}},[e("ol",{staticClass:"carousel-indicators"},t._l(a.images,(function(a,s){return e("li",{key:s,class:{active:t.curIndex===s},attrs:{"data-target":"#carouselExampleIndicators-"+r,"data-slide-to":s}})})),0),e("div",{staticClass:"carousel-inner"},t._l(a.images,(function(r,s){return e("div",{key:s,staticClass:"carousel-item",class:{active:t.curIndex===s}},[e("div",{staticClass:"position-absolute"},[e("span",{staticClass:"badge badge-success",style:{marginTop:"10px",marginLeft:"10px",backgroundColor:"null"===a.available?"green":"red",color:"null"===a.available?"white":"black"}},[t._v(" "+t._s("null"===a.available?"Available":"Not available")+" ")])]),e("img",{staticClass:"card-img-top",attrs:{src:r,alt:"Car Image"}})])})),0),e("button",{staticClass:"carousel-control-prev for-inner-prev",attrs:{type:"button","data-target":"#carouselExampleIndicators-"+r,"data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),e("button",{staticClass:"carousel-control-next for-inner-next",attrs:{type:"button","data-target":"#carouselExampleIndicators-"+r,"data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])])]),e("div",{staticClass:"card-body ul-cursor--pointer",on:{click:function(e){return t.clickBookNow(a.id,a.price)}}},[e("div",{staticClass:"d-flex flex-row justify-content-between font-weight-bold px-3 pt-3 pb-2 textColour"},[e("div",[t._v(" "+t._s((a.make+" "+a.brand+" "+a.model+" . . .").slice(0,26))+" ")])]),e("div",[e("ul",{staticClass:"d-flex flex-row mb-0 pb-2 textColourSecond"},[e("li",{staticClass:"marginForLi"},[t._v(t._s(a.meter_reading)+" Km")]),e("li",{staticClass:"ml-4"},[t._v(t._s(a.fuel_type))]),e("li",{staticClass:"ml-4"},[t._v(t._s(a.transmission_type))])])]),e("div",{staticClass:"d-flex flex-row justify-content-between px-3 textColour"},[e("div",{staticClass:"font-weight-bold text-16"},[e("i",{staticClass:"fa fa-car",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(a.seating_capacity)+" Seater ")]),e("div",{staticClass:"pt-1"},[t._v("₹ "+t._s(a.price)+"/Day's")])]),"null"!==a.available?e("div",{staticClass:"d-flex flex-row justify-content-between px-3 textColour"},[e("div",{staticClass:"font-weight-bold text-14",staticStyle:{width:"100%",position:"absolute",top:"100px","background-color":"white",right:"0px","align-items":"center","text-align":"center"}},[t._v(" Car is available after "+t._s(a.available)+" ")])]):t._e(),e("div",{staticClass:"hr px-3"}),e("div",{staticClass:"d-flex flex-row px-3"},[t._m(0,!0),e("div",{staticClass:"text-gray-600 pb-3 pl-2",staticStyle:{"font-size":"0.713rem"}},[t._v(" "+t._s(a.car_pickup_location)+" Zoomba Car Hub, Chennai ")])])])])])})),0)])]),e("a",{staticClass:"carousel-control-prev ul-cursor--pointer NoDisplayShow",attrs:{role:"button","data-slide":"prev"},on:{click:function(e){return t.moveCarousel(-1)}}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),e("a",{staticClass:"carousel-control-next ul-cursor--pointer NoDisplayShow",attrs:{role:"button","data-slide":"next"},on:{click:function(e){return t.moveCarousel(1)}}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])]),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e()])},s=[function(){var t=this,e=t._self._c;return e("div",[e("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}})])}],n=(a("d81d"),a("14d9"),a("b64b"),a("d3b7"),a("ac1f"),a("5319"),a("159b4"),a("bbf5")),i=a.n(n),o=(a("0deb"),a("53b4"),a("c1df"),{props:{startDate:{type:Date,required:!0},endDate:{type:Date,required:!0}},components:{DateRangePicker:i.a},data:function(){return{dateRange:"",currentIndex:0,curIndex:0,numToShow:3,rows:[],allImages:[]}},created:function(){var t=localStorage.getItem("userInfo"),e=JSON.parse(t);e&&e.data&&null!==e.data.id&&(this.userName=e.data.email.replace("@gmail.com",""),this.role=e.data.role),"Admin"===this.role&&this.$router.push("/"),this.getAllCarData()},computed:{visibleRows:function(){return this.rows.slice(this.currentIndex,this.currentIndex+this.numToShow)}},methods:{getAllCarData:function(){var t=this;this.loader=!0,this.$apiService.getCall("carsAPIView/").then((function(e){e.error?(t.loader=!1,t.$toaster.makeToast("warning",message.ERROR_MESSAGE)):(t.rows=e.apidata,t.rows.forEach((function(t){t.images=t.images?t.images=JSON.parse(t.images):t.images=""})),t.allImages=t.rows.map((function(t){return t.images})),t.loader=!1)})).catch((function(e){console.log(e),t.$toaster.makeToast("warning",message.ERROR_MESSAGE),t.loader=!1}))},clickBookNow:function(t,e){this.carId=t,this.$toaster.makeToast("warning","Please select dates."),this.startDate&&this.endDate?this.$router.push("/app/sessions/bookCars?id="+t+"&startDate="+new Date+"&endDate="+new Date+"&location=Chennai"):this.$toaster.makeToast("warning","please select date")},moveCarousel:function(t){var e=this.currentIndex+t;e>=0&&e<=this.rows.length-this.numToShow&&(this.currentIndex=e)},parseImage:function(t){try{var e=JSON.parse(t)[0],a=new DOMParser,r=a.parseFromString("<!doctype html><body>".concat(e),"text/html"),s=r.body.textContent;return s}catch(n){return console.error("Error parsing image URL:",n),"https://example.com/default-image.jpg"}}}}),c=o,l=(a("aeff"),a("2877")),u=Object(l["a"])(c,r,s,!1,null,"43c500c6",null);e["default"]=u.exports},"29d6":function(t,e,a){},5319:function(t,e,a){"use strict";var r=a("2ba4"),s=a("c65b"),n=a("e330"),i=a("d784"),o=a("d039"),c=a("825a"),l=a("1626"),u=a("7234"),d=a("5926"),p=a("50c4"),f=a("577e"),v=a("1d80"),x=a("8aa5"),g=a("dc4a"),h=a("0cb2"),b=a("14c3"),m=a("b622"),C=m("replace"),w=Math.max,y=Math.min,_=n([].concat),I=n([].push),k=n("".indexOf),E=n("".slice),S=function(t){return void 0===t?t:String(t)},R=function(){return"$0"==="a".replace(/./,"$0")}(),$=function(){return!!/./[C]&&""===/./[C]("a","$0")}(),D=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,a){var n=$?"$":"$0";return[function(t,a){var r=v(this),n=u(t)?void 0:g(t,C);return n?s(n,t,r,a):s(e,f(r),t,a)},function(t,s){var i=c(this),o=f(t);if("string"==typeof s&&-1===k(s,n)&&-1===k(s,"$<")){var u=a(e,i,o,s);if(u.done)return u.value}var v=l(s);v||(s=f(s));var g,m=i.global;m&&(g=i.unicode,i.lastIndex=0);var C,R=[];while(1){if(C=b(i,o),null===C)break;if(I(R,C),!m)break;var $=f(C[0]);""===$&&(i.lastIndex=x(o,p(i.lastIndex),g))}for(var D="",A=0,N=0;N<R.length;N++){C=R[N];for(var T,O=f(C[0]),P=w(y(d(C.index),o.length),0),M=[],j=1;j<C.length;j++)I(M,S(C[j]));var J=C.groups;if(v){var B=_([O],M,P,o);void 0!==J&&I(B,J),T=f(r(s,void 0,B))}else T=h(O,o,P,M,J,s);P>=A&&(D+=E(o,A,P)+T,A=P+O.length)}return D+E(o,A)}]}),!D||!R||$)},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},9263:function(t,e,a){"use strict";var r=a("c65b"),s=a("e330"),n=a("577e"),i=a("ad6d"),o=a("9f7f"),c=a("5692"),l=a("7c73"),u=a("69f3").get,d=a("fce3"),p=a("107c"),f=c("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,x=v,g=s("".charAt),h=s("".indexOf),b=s("".replace),m=s("".slice),C=function(){var t=/a/,e=/b*/g;return r(v,t,"a"),r(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=o.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],_=C||y||w||d||p;_&&(x=function(t){var e,a,s,o,c,d,p,_=this,I=u(_),k=n(t),E=I.raw;if(E)return E.lastIndex=_.lastIndex,e=r(x,E,k),_.lastIndex=E.lastIndex,e;var S=I.groups,R=w&&_.sticky,$=r(i,_),D=_.source,A=0,N=k;if(R&&($=b($,"y",""),-1===h($,"g")&&($+="g"),N=m(k,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==g(k,_.lastIndex-1))&&(D="(?: "+D+")",N=" "+N,A++),a=new RegExp("^(?:"+D+")",$)),y&&(a=new RegExp("^"+D+"$(?!\\s)",$)),C&&(s=_.lastIndex),o=r(v,R?a:_,N),R?o?(o.input=m(o.input,A),o[0]=m(o[0],A),o.index=_.lastIndex,_.lastIndex+=o[0].length):_.lastIndex=0:C&&o&&(_.lastIndex=_.global?o.index+o[0].length:s),y&&o&&o.length>1&&r(f,o[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&S)for(o.groups=d=l(null),c=0;c<S.length;c++)p=S[c],d[p[0]]=o[p[1]];return o}),t.exports=x},"9f7f":function(t,e,a){"use strict";var r=a("d039"),s=a("da84"),n=s.RegExp,i=r((function(){var t=n("a","y");return t.lastIndex=2,null!==t.exec("abcd")})),o=i||r((function(){return!n("a","y").sticky})),c=i||r((function(){var t=n("^r","gy");return t.lastIndex=2,null!==t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:i}},ac1f:function(t,e,a){"use strict";var r=a("23e7"),s=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,a){"use strict";var r=a("825a");t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},aeff:function(t,e,a){"use strict";a("29d6")},d784:function(t,e,a){"use strict";a("ac1f");var r=a("c65b"),s=a("cb2d"),n=a("9263"),i=a("d039"),o=a("b622"),c=a("9112"),l=o("species"),u=RegExp.prototype;t.exports=function(t,e,a,d){var p=o(t),f=!i((function(){var e={};return e[p]=function(){return 7},7!==""[t](e)})),v=f&&!i((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!f||!v||a){var x=/./[p],g=e(p,""[t],(function(t,e,a,s,i){var o=e.exec;return o===n||o===u.exec?f&&!i?{done:!0,value:r(x,e,a,s)}:{done:!0,value:r(t,a,e,s)}:{done:!1}}));s(String.prototype,t,g[0]),s(u,p,g[1])}d&&c(u[p],"sham",!0)}},fce3:function(t,e,a){"use strict";var r=a("d039"),s=a("da84"),n=s.RegExp;t.exports=r((function(){var t=n(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))}}]);