(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44f1cf78"],{"54da":function(t,e,a){},e4cd:function(t,e,a){"use strict";a("54da")},fcdd:function(t,e,a){"use strict";a.r(e);var s,i=a("2909"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("b-modal",{ref:"withdrawModal",staticStyle:{height:"100px"},attrs:{id:"modal-add",size:"md",title:"Add Publisher","hide-footer":"","hide-header":"",centered:""},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("label",{staticClass:"px-3 pt-2 pb-1",staticStyle:{"font-size":"20px",margin:"0px"}},[t._v(" Withdraw Amount ")]),e("b-row",{staticClass:"px-3"},[e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Amount","label-for":"input-title"}},[e("b-form-input",{staticStyle:{height:"34px"},attrs:{required:"",placeholder:"Amount",type:"text",id:"input-name"},on:{change:t.handelUserField},model:{value:t.publisherName,callback:function(e){t.publisherName=e},expression:"publisherName"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{staticClass:"d-none",attrs:{label:"Status","label-for":"input-title "}},[e("b-form-input",{staticStyle:{height:"34px d-none"},attrs:{required:"",placeholder:"Status",type:"number",id:"input-phoneNumber"},on:{keydown:t.checkLength},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1)],1),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:"Notes","label-for":"input-notes"}},[e("b-form-textarea",{staticStyle:{height:"44px"},attrs:{required:"",placeholder:"Notes",id:"input-notes"},on:{keydown:t.checkLengthCode},model:{value:t.centerCode,callback:function(e){t.centerCode=e},expression:"centerCode"}})],1)],1),e("b-col",{staticClass:"pb-3",attrs:{md:"12"}},[e("div",[e("button",{staticClass:"btn btn-primary"},[t._v("Submit")])])])],1)],1),e("b-modal",{staticStyle:{height:"100px"},attrs:{id:"modal-lg",size:"lg",title:"Documents"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Aadhar Card")])])],1),t.aadharFront?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharFront,title:"aadharFront",target:"_blank"}},[e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharFront}})])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.aadharBack,title:"aadharBack",target:"_blank"}},[t.aadharBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.aadharBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Driving Licence")])])],1),t.divinglicense?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicense,title:"divinglicense",target:"_blank"}},[t.divinglicense?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicense}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.divinglicenseBack,title:"divinglicenseBack",target:"_blank"}},[t.divinglicenseBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.divinglicenseBack}}):t._e()])])],1):t._e(),e("b-row",[e("b-col",[e("h5",{staticStyle:{"font-weight":"800","font-size":"18px"}},[t._v("Passport")])])],1),t.passport?e("b-row",{staticClass:"my-4"},[e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passport,title:"passport",target:"_blank"}},[t.passport?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passport}}):t._e()])]),e("b-col",{attrs:{md:"6"}},[e("a",{attrs:{download:"",href:t.passportBack,title:"passportBack",target:"_blank"}},[t.passportBack?e("img",{staticStyle:{"max-height":"120px !important",width:"auto"},attrs:{src:t.passportBack}}):t._e()])])],1):t._e()],1),e("div",{staticClass:"d-flex flex-row justify-content-between pb-2 d-none"},[e("b-col",{staticClass:"d-none",staticStyle:{"padding-right":"0px !important","padding-left":"0px !important"},attrs:{md:"3"}},[e("multiselect",{attrs:{placeholder:"Select users",options:Object(i["a"])(t.allUsers),multiple:!1,limit:1},on:{input:t.handleChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("div",{staticClass:"for-gap d-none"},[e("button",{staticClass:"btn btn-primary",on:{click:t.clearFilters}},[t._v("Clear Filter")])])],1),e("div",{staticClass:"pb-2"},[e("div",[t.isAdmin?e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between flex-wrap",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v("Filters")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},[e("li",[e("a",{attrs:{"data-action":"collapse pe-auto"},on:{click:t.toggleFlexDiv}},[e("i",{staticClass:"fa fa-chevron-circle-down",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])]),e("li",[e("a",{attrs:{"data-action":" pe-auto"},on:{click:t.clearFilters}},[e("i",{staticClass:"fa fa-refresh",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"}})])])])])]),e("div",{staticClass:"card-content collapse show",style:{display:t.flexDivDisplay}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"users-list-filter"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-search"}},[t._v("User Name")]),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{type:"text",id:"users-list-search",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.onSearchTermChange]}})])]),t._m(0),t._m(1)])])])])])])]):e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex align-items-end row"},[e("div",{staticClass:"col-7"},[e("div",{staticClass:"card-body text-nowrap"},[e("h5",{staticClass:"card-title mb-0"},[t._v("Congratulations John! 🎉")]),e("p",{},[t._v("Best seller of the month")]),e("h4",{staticClass:"text-primary mb-1"},[t._v("$48.9k")]),e("a",{staticClass:"btn btn-primary waves-effect waves-light",staticStyle:{color:"white","padding-top":"3px","padding-bottom":"3px"},on:{click:t.openWithdrawModal}},[t._v("Withdraw")])])]),t._m(2)])])])])]),t.loader?e("div",{staticClass:"spinner spinner-primary",attrs:{id:"loader"}}):t._e(),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex flex-row justify-content-between",staticStyle:{"background-color":"white"}},[e("h4",{staticClass:"card-title",staticStyle:{margin:"0px","background-color":"white",color:"#000000c4"}},[t._v(" Payment ")]),e("div",{staticClass:"heading-elements"},[e("ul",{staticClass:"list-inline mb-0 d-flex flex-row justify-content-around",staticStyle:{gap:"9px"}},["admin"===t.isAdmin?e("button",{staticClass:"btn btn-primary mb-3",staticStyle:{"padding-top":"2px","padding-bottom":"2px",background:"white",color:"#000000a8",border:"1px solid gray"},on:{click:function(e){t.showAddModal=!0}}},[t._v(" Add New ")]):t._e()])])]),e("div",{staticClass:"card-body"},[e("vue-good-table",{attrs:{columns:t.visibleColumns,"line-numbers":!1,"pagination-options":t.paginationOptions,styleClass:"tableOne vgt-table",rows:t.filteredFaqs},scopedSlots:t._u([{key:"table-row",fn:function(a){return[e("div",[t.isAdmin&&"action"===a.column.field?e("div",{staticClass:"d-flex flex-row",staticStyle:{gap:"12px"}},[e("button",{staticClass:"btn btn-primary btn-success",on:{click:function(e){return t.approveRow(a.row)}}},[t._v("Approve")]),e("button",{staticClass:"btn btn-primary btn-danger",on:{click:function(e){return t.unapproveRow(a.row)}}},[t._v("Unapprove")])]):e("div",[e("span",{domProps:{textContent:t._s(a.formattedRow[a.column.field])}})])])]}}])})],1)])],1)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-status"}},[t._v("Status")]),e("fieldset",{staticClass:"form-group"},[e("select",{staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-status"}},[e("option",{attrs:{value:""}},[t._v("All")]),e("option",{attrs:{value:"Active"}},[t._v("Paid")]),e("option",{attrs:{value:"Blocked"}},[t._v("Unpaid")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-sm-6 col-lg-3"},[e("label",{attrs:{for:"users-list-verified"}},[t._v("Amount")]),e("fieldset",{staticClass:"form-group"},[e("select",{staticClass:"form-control",staticStyle:{color:"grey","padding-bottom":"7px",border:"1px solid rgba(128, 128, 128, 0.32) !important","background-color":"rgb(135 131 131 / 0%)"},attrs:{id:"users-list-verified"}},[e("option",{attrs:{value:""}},[t._v("100$")]),e("option",{attrs:{value:""}},[t._v("1000$")]),e("option",{attrs:{value:"true"}},[t._v("10000$")]),e("option",{attrs:{value:"false"}},[t._v("100000$")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-5 text-center text-sm-left"},[e("div",{staticClass:"card-body pb-0 px-0 px-md-4"},[e("img",{attrs:{src:"https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png",height:"140",alt:"view sales"}})])])}],n=a("ade3"),l=(a("4de4"),a("d3b7"),a("b0c0"),a("d81d"),a("c1df"),a("b654")),c=a.n(l),d=a("8e5f"),u=a.n(d),p=(s={metaInfo:{title:"Users"},components:{multiselect:u.a},computed:{getfilterdata:function(){var t=this,e=this.rows.filter((function(e){return e.id==t.use_id}));return null!=this.use_id?e:(console.log("hkdshkchsdjk",this.rows),this.rows)}},data:function(){var t;return t={pageReloaded:!1,modalVisible:!1,logo:a("aac9"),use_id:null,matchUser:"",allUsers:[],role:"",selected:null,aadharFront:null,aadharBack:null,divinglicense:null,divinglicenseBack:null,passportBack:null,passport:null,isView:!1,isModalOpen:!1,columnsForAdmin:[{label:"User Name",field:"user_name"},{label:"Request Date",field:"Request_Date"},{label:"Amount",field:"amount"},{label:"Status",field:"status"},{label:"Notes",field:"notes"},{label:"Action",field:"action"}],columnsForRegularUser:[{label:"Request Date",field:"Request_Date"},{label:"Amount",field:"amount"},{label:"Status",field:"status"},{label:"Notes",field:"notes"},{label:"Action",field:"action"}],rows:[],originalRows:[],form:{templateId:"",name:"",content:""},generateIDloader:!1,submitloader:!1,isEdit:!1,loader:!1,isHide:!1,flexDivDisplay:"flex!important"},Object(n["a"])(t,"matchUser",""),Object(n["a"])(t,"name",""),Object(n["a"])(t,"contact_number",""),Object(n["a"])(t,"email",""),Object(n["a"])(t,"filteredFaqs",[{user_name:"John Doe",Request_Date:"2024-05-01",amount:100,status:"Approved",notes:"Lorem ipsum",action:"Approved"},{user_name:"Alice Smith",Request_Date:"2024-05-02",amount:150,status:"Rejected",notes:"Dolor sit amet",action:"Approved"},{user_name:"Bob Johnson",Request_Date:"2024-05-03",amount:120,status:"Approved",notes:"Consectetur adipiscing elit",action:"Unapproved"},{user_name:"Emily Brown",Request_Date:"2024-05-04",amount:200,status:"Pending",notes:"Sed do eiusmod tempor incididunt",action:"Unapproved"},{user_name:"David Wilson",Request_Date:"2024-05-05",amount:180,status:"Approved",notes:"Ut labore et dolore magna aliqua",action:"Approved"},{user_name:"Emma Taylor",Request_Date:"2024-05-06",amount:90,status:"Rejected",notes:"Ut enim ad minim veniam",action:"Unapproved"},{user_name:"James Anderson",Request_Date:"2024-05-07",amount:110,status:"Approved",notes:"Quis nostrud exercitation ullamco",action:"Approved"},{user_name:"Olivia Martinez",Request_Date:"2024-05-08",amount:130,status:"Rejected",notes:"Laboris nisi ut aliquip ex ea commodo",action:"Approved"},{user_name:"William Thomas",Request_Date:"2024-05-09",amount:140,status:"Approved",notes:"Duis aute irure dolor in reprehenderit",action:"Unapproved"},{user_name:"Sophia Garcia",Request_Date:"2024-05-10",amount:160,status:"Pending",notes:"Voluptate velit esse cillum dolore",action:"Approved"},{user_name:"Alexander Hernandez",Request_Date:"2024-05-11",amount:170,status:"Approved",notes:"Eu fugiat nulla pariatur",action:"Unapproved"},{user_name:"Mia Lopez",Request_Date:"2024-05-12",amount:190,status:"Rejected",notes:"Excepteur sint occaecat cupidatat",action:"Approved"},{user_name:"Daniel Perez",Request_Date:"2024-05-13",amount:210,status:"Approved",notes:"Non proident, sunt in culpa qui officia",action:"Approved"},{user_name:"Isabella Gonzalez",Request_Date:"2024-05-14",amount:220,status:"Rejected",notes:"Deserunt mollit anim id est laborum",action:"Unapproved"},{user_name:"Benjamin Ramirez",Request_Date:"2024-05-15",amount:230,status:"Approved",notes:"Sed ut perspiciatis unde omnis iste",action:"Approved"},{user_name:"Charlotte Torres",Request_Date:"2024-05-16",amount:240,status:"Pending",notes:"Natus error sit voluptatem accusantium",action:"Unapproved"},{user_name:"Michael Flores",Request_Date:"2024-05-17",amount:250,status:"Approved",notes:"Doloremque laudantium, totam rem aperiam",action:"Approved"},{user_name:"Ava Gonzales",Request_Date:"2024-05-18",amount:260,status:"Rejected",notes:"Eaque ipsa quae ab illo inventore",action:"Unapproved"},{user_name:"Ethan Hill",Request_Date:"2024-05-19",amount:270,status:"Approved",notes:"Veritatis et quasi architecto beatae vitae",action:"Approved"},{user_name:"Madison Carter",Request_Date:"2024-05-20",amount:280,status:"Rejected",notes:"Nemo enim ipsam voluptatem quia voluptas",action:"Unapproved"},{user_name:"Noah Phillips",Request_Date:"2024-05-21",amount:290,status:"Approved",notes:"Sit aspernatur aut odit aut fugit",action:"Approved"}]),Object(n["a"])(t,"paginationOptions",{enabled:!0,mode:"recordsPerPage",perPageDropdown:[10,20,50],nextLabel:"Next",prevLabel:"Previous"}),t}},Object(n["a"])(s,"computed",{isAdmin:function(){var t=localStorage.getItem("role");return"admin"===t},visibleColumns:function(){return this.isAdmin?this.columnsForAdmin:this.columnsForRegularUser}}),Object(n["a"])(s,"created",(function(){this.getAllUsers(),this.getAllTransaction(),this.role=parsedUser.data.role,this.originalRows=Object(i["a"])(this.rows),this.reloadPageOnce()})),Object(n["a"])(s,"methods",{openWithdrawModal:function(){this.$refs.withdrawModal.show()},reloadPageOnce:function(){this.pageReloaded||(window.location.reload(),this.pageReloaded=!0)},toggleFlexDiv:function(){this.flexDivDisplay="flex!important"===this.flexDivDisplay?"none!important":"flex!important"},clearFilters:function(){this.getAllUsers(),this.selected="Select User"},openModal12:function(){this.modalVisible=!0},closeModal12:function(){this.modalVisible=!1},openModal:function(t){this.aadharFront=t.aadhar_card,this.aadharBack=t.back_aadhar_card,this.divinglicense=t.driving_lincense,this.divinglicenseBack=t.back_driving_lincense,this.passportBack=t.back_passport,this.passport=t.passport,this.isModalOpen=!0},vueDocuments:function(t){this.popUpWindow=!0},handleChange:function(t){var e=this.rows.filter((function(e){return e.name===t}));this.rows=e,console.log("Matched Rows:",e)},clickViewUsers:function(t){this.$router.push("/app/myDesk/usersProfile?id="+t)},clickUnBlock:function(t){var e=this;this.loader=!0;var a={accessStatus:"False"};this.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),a).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User  successfully unblocked"),e.getAllUsers(),e.loader=!1)})).catch((function(t){e.loader=!1,e.$toaster.makeToast("warning","Have Server error")}))},getAllUsers:function(){var t=this;this.loader=!0,this.$apiService.getCall("user/get-all-members").then((function(e){if(e&&!1===e.isError&&e.apidata&&e.apidata.data){var a=e.apidata.data;t.rows=a,t.allUsers=a.map((function(t){return t.name}))}else t.$toaster.makeToast("warning","Failed to fetch user data");t.loader=!1})).catch((function(e){console.error("Error fetching user data:",e),t.$toaster.makeToast("error","Error fetching user data"),t.loader=!1}))},generateID:function(){this.clearform(),this.generateIDloader=!0;for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=0;a<7;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.form.templateId=t,this.generateIDloader=!1},submit:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",c.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("add_by_company",this.form).then((function(e){e.apidata.status?(t.$toaster.makeToast("warning",c.a.ERROR_TEMPLATE_MESSAGE),t.submitloader=!1):(t.$toaster.makeToast("success",c.a.ADD_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform())})).catch((function(e){t.$toaster.makeToast("warning",c.a.ERROR_MESSAGE)}))},cancel:function(){this.clearform()},update:function(){var t=this;if(this.submitloader=!0,!this.form.name||!this.form.content||!this.form.templateId)return this.$toaster.makeToast("warning",c.a.VALIDATION_MESSAGE),void(this.submitloader=!1);this.$apiService.postCall("editTemplate",this.form).then((function(e){t.$toaster.makeToast("success",c.a.EDIT_TEMPLATE_MESSAGE),t.getTemplateData(),t.clearform()})).catch((function(e){t.$toaster.makeToast("warning",c.a.ERROR_MESSAGE)}))},editTemplate:function(t){var e=this;this.isEdit=!1,this.$apiService.postCall("getTemplate",{_id:t}).then((function(t){e.form=t.apidata,e.$bvModal.show("modal-lg")})).catch((function(t){e.$toaster.makeToast("warning",c.a.ERROR_MESSAGE)})),this.isEdit=!0},clickBlock:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to block this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, blocked it!"}).then((function(a){if(a.value){e.$swal("User Blocked!","User has been Blocked.","success");var s={accessStatus:"True"};e.$apiService.postCall("account/blockUnblockUserApi/?id=".concat(t),s).then((function(t){t.apidata.isError||(e.$toaster.makeToast("success","User successfully blocked"),e.getAllUsers(),e.loader=!1)}))}})).catch((function(t){e.$toaster.makeToast("warning","User can't blocked! Srever failed")}))},clearform:function(){this.form={},this.isEdit=!1,this.submitloader=!1,this.generateIDloader=!1,this.$bvModal.hide("modal-lg")}}),s),m=p,h=(a("8498"),a("e4cd"),a("2877")),f=Object(h["a"])(m,o,r,!1,null,null,null);e["default"]=f.exports}}]);