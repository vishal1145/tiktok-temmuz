(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f213aec6"],{"00cf":function(t,a,s){},"1e5d":function(t,a,s){"use strict";var i=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer_wrap"},[a("div",{staticClass:"flex-grow-1"}),a("div",{staticClass:"app-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("p",[a("strong",[t._v("Credin - eSign")])])])]),a("div",{staticClass:"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"},[a("div",{staticClass:"d-flex align-items-center"},[a("img",{staticClass:"logo",attrs:{src:s("9d64"),alt:""}}),a("div",[a("div",[a("p",{staticClass:"m-0"},[t._v("© 2019-2022 UI-Lib")]),a("p",{staticClass:"m-0"},[t._v("All rights reserved")])])]),a("span",{staticClass:"flex-grow-1"}),a("a",{staticClass:"btn btn-primary text-white btn-rounded",staticStyle:{display:"none"},attrs:{href:"https://themeforest.net/item/gull-vuejs-admin-dashboard-template/24497287?ref=ui-lib",target:"_blank"}},[t._v("Buy Gull Vue")])])])])])}],r={data:function(){return{}},methods:{}},l=r,o=s("2877"),c=Object(o["a"])(l,i,e,!1,null,"6b127052",null);a["a"]=c.exports},"1ef9":function(t,a,s){"use strict";s("00cf")},"3d03":function(t,a,s){"use strict";var i=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,a=t._self._c;return a("span",{staticClass:"icon-arrow"},[a("span",{staticClass:"when-opened"},[a("i",{staticClass:"dd-arrow i-Arrow-Up"})]),a("span",{staticClass:"when-closed"},[a("i",{staticClass:"dd-arrow i-Arrow-Down"})])])}],r=(s("1ef9"),s("2877")),l={},o=Object(r["a"])(l,i,e,!1,null,null,null);a["a"]=o.exports},9758:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"app-admin-wrap layout-sidebar-vertical clearfix sidebar-full"},[a("verticalSidebar"),a("main",[a("div",{staticClass:"main-content-wrap mt-0 bg-off-white d-flex flex-column flex-grow-1",class:{"vertical-sidebar":t.getVerticalSidebar.isVerticalSidebar,compact:t.getVerticalSidebar.isVerticalCompact}},[a("verticalTopbar"),a("transition",{attrs:{name:"page",mode:"out-in"}},[a("router-view")],1),a("div",{staticClass:"flex-grow-1"})],1)])],1)},e=[],r=s("5530"),l=function(){var t=this,a=t._self._c;return a("vue-perfect-scrollbar",{staticClass:"sidebar-panel rtl-ps-none ps scroll",class:{"vertical-sidebar-compact":t.getVerticalCompact.isSidebarCompact,"sidebar-full-collapse":t.getVerticalSidebar.isMobileCompact},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}},nativeOn:{mouseleave:function(a){t.sidebarCompact(),t.returnSelectedParentMenu()},mouseenter:function(a){return t.removeSidebarCompact.apply(null,arguments)}}},[a("div",[a("div",{staticClass:"gull-brand text-center d-flex align-items-center pl-2 mb-2 justify-content-between"},[a("div",[a("img",{attrs:{src:s("9d64")}})]),a("div",{staticClass:"toggle-sidebar-compact"},[a("label",{staticClass:"switch ul-switch switch-primary ml-auto"},[a("input",{attrs:{type:"checkbox"},on:{click:t.switchSidebar}}),a("span",{staticClass:"ul-slider o-hidden"})])])]),a("div",{staticClass:"close-mobile-menu",on:{click:t.mobileSidebar}},[a("i",{staticClass:"text-16 text-primary i-Close-Window font-weight-bold"})]),a("div",{staticClass:"mt-4 main-menu"},[a("ul",{staticClass:"ul-vertical-sidebar pl-4",attrs:{id:"menu"}},[a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"dashboards"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"i-Bar-Chart text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Dashboards")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-1"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",[a("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v1"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",[t._v("Dashboard v1")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v2"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Dashboard v2")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v3"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Dashboard v3")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v4",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Dashboard v4")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"ui-kits"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"i-Library text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("UI Kits")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-2"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/alerts"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Alerts")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/accordion"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Accordion")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/badges"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Badges")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/buttons"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Buttons")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/cards"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Cards")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/carousel"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Carousels")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/list"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Lists")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/pagination"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Paginations")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/popover"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Popover")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/progressbar"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Progressbar")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/bootstrap-tab"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Tabs")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/modals"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Modals")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/collapsible"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Collapsible")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/ui-kits/typography"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Typography")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"extrakits"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"i-Suitcase text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Extra Kits")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-3"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/dropdown"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Dropdown")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/imageCropper"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Image Cropper")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/loaders"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Loaders")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/toasts"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Toastr")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/sweetAlerts"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Sweet Alerts")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/extraKits/tour"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("User Tour")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"apps"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Computer-Secure text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Apps")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-4"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4-1-inner",modifiers:{"collapse-4-1-inner":!0}}]},[a("a",{staticClass:"has-arrow",attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-File mr-2"}),a("span",{class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Invoice")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-4-1-inner"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/apps/invoice",href:"#"}},[a("i",{staticClass:"nav-icon i-File mr-2"}),a("span",{},[t._v("Invoice List")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/createInvoice",href:"#"}},[a("i",{staticClass:"nav-icon i-File mr-2"}),a("span",{},[t._v("Create Invoice")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/printInvoice",href:"#"}},[a("i",{staticClass:"nav-icon i-File mr-2"}),a("span",{},[t._v("Print Invoice")])])],1)])])],1),a("li",[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4-2-inner",modifiers:{"collapse-4-2-inner":!0}}]},[a("a",{staticClass:"has-arrow",attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-File-CSV mr-2"}),a("span",{class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Contacts")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-4-2-inner"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/apps/contact-list",href:"#"}},[a("i",{staticClass:"i-File-CSV mr-2"}),a("span",{},[t._v("Contact List")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/contact-grid",href:"#"}},[a("i",{staticClass:"i-File-CSV mr-2"}),a("span",{},[t._v("Contact Grid")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/contact-details",href:"#"}},[a("i",{staticClass:"i-File-CSV mr-2"}),a("span",{},[t._v("Contact Details")])])],1)])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/products",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("E-commerce")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/taskManager",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Task Manager")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/calendar",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Calendar")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/inbox",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Inbox")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/apps/chat",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Chat")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"charts"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Pie-Chart-2 text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Charts")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-5"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5-1-inner",modifiers:{"collapse-5-1-inner":!0}}]},[a("a",{staticClass:"has-arrow",attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart mr-2"}),a("span",{class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Apex Charts")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-5-1-inner"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexAreaChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Area Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexBarChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Bar Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexMixChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Mix Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexColumnChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Column Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexPieDonutsChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Pie Donut Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexRadarChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Radar Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexRadialBarChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Radial Bar Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexScatterChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Scatter Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexSparklineChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Sparkline Chart")])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/apexAreaChart",href:"#"}},[a("i",{staticClass:"nav-icon i-Line-Chart-2 mr-2"}),a("span",{},[t._v("Apex Area Chart")])])],1)])])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/app/charts/eChart",href:"#"}},[a("i",{staticClass:"i-Line-Chart-2 mr-2"}),a("span",{},[t._v("EChart")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"widgets"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Windows-2 text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Widgets")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-6"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetCard",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Widget Card")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetStatistics",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Widget Statistics")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/widgets/weatherApp",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Weather App")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetApp",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("App Widgets")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetList",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Widget List")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-7",modifiers:{"collapse-7":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"forms"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-File-Clipboard-File--Text text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Forms")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-7"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/basicForms"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Basic Elements")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/formLayouts",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Form Layouts")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/basicActionBar",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Basic Action Bar")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/formComponent",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Form Validation")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/formWizard",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Form Wizard")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/tagInput",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Tag Input")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/forms/mask",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Form Mask")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-8",modifiers:{"collapse-8":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"datatables"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-File-Horizontal-Text text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Datatables")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-8"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/datatables/paging",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Paging")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/datatables/filter",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Filter")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/datatables/list",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("List")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/datatables/vue-good-table",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Vue Good Table")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-9",modifiers:{"collapse-9":!0}}]},[a("a",{staticClass:"has-arrow",attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Administrator text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Sessions")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-9"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/sessions/signIn",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Sign In")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/sessions/signUp",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Sign Up")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/sessions/forgot",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Forgot")])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-10",modifiers:{"collapse-10":!0}}]},[a("a",{staticClass:"has-arrow",class:{active:"pages"==t.selectedParentMenu},attrs:{href:"#"}},[a("i",{staticClass:"nav-icon i-Double-Tap text-20 mr-2"}),a("span",{staticClass:"text-15",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Pages")]),a("arrowIcon")],1)]),a("b-collapse",{attrs:{id:"collapse-10"}},[a("ul",{staticClass:"Ul_collapse",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/error",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("Not Found")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/profile",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("User Profile")])])],1),a("li",{staticClass:"item-name"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/icons",href:"#"}},[a("i",{staticClass:"i-Circular-Point mr-2"}),a("span",{},[t._v("icons")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/search-result"}},[a("i",{staticClass:"nav-icon i-File-Search"}),a("span",{staticClass:"item-name"},[t._v(" Search Result "),a("span",{staticClass:"badge badge-pill badge-danger"},[t._v("New")])])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/pricing-table"}},[a("i",{staticClass:"nav-icon i-Billing"}),a("span",{staticClass:"item-name"},[t._v(" Pricing Table "),a("span",{staticClass:"badge badge-pill badge-danger"},[t._v("New")])])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{tag:"a",to:"/app/pages/faq"}},[a("i",{staticClass:"nav-icon i-Billing"}),a("span",{staticClass:"item-name"},[t._v(" Faq "),a("span",{staticClass:"badge badge-pill badge-danger"},[t._v("New")])])])],1)])])],1),a("li",{staticClass:"Ul_li--hover"},[a("a",{staticClass:"has-arrow",attrs:{href:"http://demos.ui-lib.com/gull-vue-doc/"}},[a("i",{staticClass:"nav-icon i-Safe-Box1 text-20 mr-2 text-muted"}),a("span",{staticClass:"text-15 text-muted",class:{"vertical-item-name":t.getVerticalCompact.isItemName}},[t._v("Doc")])])])])])])])},o=[],c=(s("4de4"),s("d3b7"),s("2f62")),n=s("3d03"),p={components:{arrowIcon:n["a"]},computed:Object(r["a"])({},Object(c["c"])(["getVerticalCompact","getVerticalSidebar"])),data:function(){return{selectedParentMenu:""}},mounted:function(){this.toggleSelectedParentMenu(),document.addEventListener("click",this.returnSelectedParentMenu)},beforeDestroy:function(){document.removeEventListener("click",this.returnSelectedParentMenu)},methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["switchSidebar","sidebarCompact","removeSidebarCompact","mobileSidebar"])),{},{toggleSelectedParentMenu:function(){var t=this.$route.path.split("/").filter((function(t){return""!==t}))[1];this.selectedParentMenu=void 0!==t||null!==t?t.toLowerCase():"dashboards"},returnSelectedParentMenu:function(){this.toggleSelectedParentMenu()}})},m=p,d=s("2877"),C=Object(d["a"])(m,l,o,!1,null,null,null),u=C.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mb-30"},[a("header",{staticClass:"main-header vertical-header bg-white d-flex justify-content-between"},[a("div",{staticClass:"menu-toggle vertical-toggle",on:{click:t.mobileSidebar}},[a("div"),a("div"),a("div")]),a("div",{staticClass:"header-toggle"},[a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"i-Add-UserStar mr-3 text-20 cursor-pointer",attrs:{title:"User"}}),a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"i-Speach-Bubble-3 mr-3 text-20 cursor-pointer",attrs:{title:"Chat"}}),a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"i-Email mr-3 text-20 cursor-pointer",attrs:{title:"Inbox"}}),a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"i-Calendar-4 mr-3 text-20 cursor-pointer",attrs:{title:"Calendar"}}),a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"i-Checkout-Basket mr-3 text-20 cursor-pointer",attrs:{title:"Cart"}})]),a("div",{staticStyle:{margin:"auto"}}),a("div",{staticClass:"header-part-right"},[a("i",{staticClass:"i-Full-Screen header-icon d-none d-sm-inline-block",on:{click:t.handleFullScreen}}),a("div",{staticClass:"dropdown"},[a("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[a("template",{slot:"button-content"},[a("i",{staticClass:"i-Safe-Box text-muted header-icon",attrs:{role:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),a("div",{staticClass:"menu-icon-grid"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-Shop-4"}),t._v(" Home ")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-Library"}),t._v(" UI Kits ")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-Drop"}),t._v(" Apps ")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-File-Clipboard-File--Text"}),t._v(" Forms ")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-Checked-User"}),t._v(" Sessions ")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"i-Ambulance"}),t._v(" Support ")])])],2)],1),a("div",{staticClass:"dropdown"},[a("b-dropdown",{staticClass:"m-md-2 badge-top-container",attrs:{id:"dropdown-1",right:"",text:"Right align","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[a("template",{slot:"button-content"},[a("span",{staticClass:"badge badge-primary"},[t._v("3")]),a("i",{staticClass:"i-Bell text-muted header-icon"})]),a("vue-perfect-scrollbar",{ref:"myData",staticClass:"dropdown-menu-right rtl-ps-none notification-dropdown ps scroll",class:{open:t.getSideBarToggleProperties.isSideNavOpen},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[a("div",{staticClass:"dropdown-item d-flex"},[a("div",{staticClass:"notification-icon"},[a("i",{staticClass:"i-Speach-Bubble-6 text-primary mr-1"})]),a("div",{staticClass:"notification-details flex-grow-1"},[a("p",{staticClass:"m-0 d-flex align-items-center"},[a("span",[t._v("New message")]),a("span",{staticClass:"flex-grow-1"}),a("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 sec ago")])]),a("p",{staticClass:"text-small text-muted m-0"},[t._v(" James: Hey! are you busy? ")])])]),a("div",{staticClass:"dropdown-item d-flex"},[a("div",{staticClass:"notification-icon"},[a("i",{staticClass:"i-Receipt-3 text-success mr-1"})]),a("div",{staticClass:"notification-details flex-grow-1"},[a("p",{staticClass:"m-0 d-flex align-items-center"},[a("span",[t._v("New order received")]),a("span",{staticClass:"flex-grow-1"}),a("span",{staticClass:"text-small text-muted ml-auto"},[t._v("2 hours ago")])]),a("p",{staticClass:"text-small text-muted m-0"},[t._v("1 Headphone, 3 iPhone x")])])]),a("div",{staticClass:"dropdown-item d-flex"},[a("div",{staticClass:"notification-icon"},[a("i",{staticClass:"i-Empty-Box text-danger mr-1"})]),a("div",{staticClass:"notification-details flex-grow-1"},[a("p",{staticClass:"m-0 d-flex align-items-center"},[a("span",[t._v("Product out of stock")]),a("span",{staticClass:"flex-grow-1"}),a("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 hours ago")])]),a("p",{staticClass:"text-small text-muted m-0"},[t._v(" Headphone E67, R98, XL90, Q77 ")])])]),a("div",{staticClass:"dropdown-item d-flex"},[a("div",{staticClass:"notification-icon"},[a("i",{staticClass:"i-Data-Power text-success mr-1"})]),a("div",{staticClass:"notification-details flex-grow-1"},[a("p",{staticClass:"m-0 d-flex align-items-center"},[a("span",[t._v("Server Up!")]),a("span",{staticClass:"flex-grow-1"}),a("span",{staticClass:"text-small text-muted ml-auto"},[t._v("14 hours ago")])]),a("p",{staticClass:"text-small text-muted m-0"},[t._v(" Server rebooted successfully ")])])])])],2)],1),a("div",{staticClass:"dropdown"},[a("b-dropdown",{staticClass:"m-md-2 user col align-self-end",attrs:{id:"dropdown-1",right:"",text:"Right align","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[a("template",{slot:"button-content"},[a("img",{attrs:{src:s("6f92"),id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),a("div",{staticClass:"dropdown-menu-right",attrs:{"aria-labelledby":"userDropdown"}},[a("div",{staticClass:"dropdown-header"},[a("i",{staticClass:"i-Lock-User mr-1"}),t._v(" Timothy Carlson ")]),a("a",{staticClass:"dropdown-item"},[t._v("Account settings")]),a("a",{staticClass:"dropdown-item"},[t._v("Billing history")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logoutUser.apply(null,arguments)}}},[t._v("Sign out")])])],2)],1)])])])},g=[],h=s("ed08"),b={computed:Object(r["a"])({},Object(c["c"])(["getVerticalCompact","getVerticalSidebar","getSideBarToggleProperties"])),data:function(){return{}},methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["switchSidebar","sidebarCompact","removeSidebarCompact","mobileSidebar"])),{},{handleFullScreen:function(){h["a"].toggleFullScreen()}})},f=b,_=Object(d["a"])(f,v,g,!1,null,null,null),w=_.exports,x=s("1e5d"),k={components:{verticalSidebar:u,verticalTopbar:w,appFooter:x["a"]},computed:Object(r["a"])({},Object(c["c"])(["getVerticalSidebar"])),data:function(){return{}},methods:{}},P=k,S=Object(d["a"])(P,i,e,!1,null,null,null);a["default"]=S.exports},"9d64":function(t,a,s){t.exports=s.p+"img/logo.e6608349.png"},ed08:function(t,a,s){"use strict";var i=function(){var t=window.document,a=t.documentElement,s=a.requestFullscreen||a.mozRequestFullScreen||a.webkitRequestFullScreen||a.msRequestFullscreen,i=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen;t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement?i.call(t):s.call(a)};a["a"]={toggleFullScreen:i}}}]);