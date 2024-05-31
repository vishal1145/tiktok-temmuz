import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router
const routes = [
  // {
  //   path: "/",
  //   component: () => import("./views/app/homePage/home.vue"),

  // },

  // {
  //   path: "/home",
  //   component: () => import("./views/app/homePage/home.vue"),

  // },
  {
    path: "allCar",
    name: "allCar",
    component: () => import("./views/app/homePage/allCar.vue"),
  },
  {
    path: "footerPage",
    name: "footerPage",
    component: () => import("./views/app/homePage/footerPage.vue"),
  },

  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    beforeEnter: authenticate,
    // redirect: "/app/myDesk/users",

    children: [
      {
        path: "/app/mydesk",
        component: () => import("./views/app/myDesk"), //settings
        children: [
          {
            path: "mydesk",
            name: "mydesk",
            component: () => import("./views/app/myDesk/myDesk"),
          },
          {
            path: "users",
            name: "users",
            component: () => import("./views/app/myDesk/users"),
          },
          {
            path: "transaction",
            name: "transaction",
            component: () => import("./views/app/myDesk/transaction"),
          },
          {
            path: "foodOrderHistory",
            name: "foodOrderHistory",
            component: () => import("./views/app/myDesk/foodOrderHistory"),
          },
          {
            path: "cars",
            name: "cars",
            component: () => import("./views/app/myDesk/cars"),
          },
          {
            path: "editCars",
            name: "Edit Cars",
            component: () => import("./views/app/myDesk/addCars"),
          },
          {
            path: "addCars",
            name: "addCars",
            component: () => import("./views/app/myDesk/addCars"),
          },
          {
            path: "editTypeValue",
            name: "editTypeValue",
            component: () => import("./views/app/myDesk/addTypeValue"),
          },
          {
            path: "addTypeValue",
            name: "addTypeValue",
            component: () => import("./views/app/myDesk/addTypeValue"),
          },
          {
            path: "addBackEndData",
            name: "addBackEndData",
            component: () => import("./views/app/myDesk/addBackEndData"),
          },

          {
            path: "usersProfile",
            name: "usersProfile",
            component: () => import("./views/app/myDesk/usersProfile"),
          },
          {
            path: "admin",
            name: "admin",
            component: () => import("./views/app/myDesk/admin"),
          },
          {
            path: "activitylogs",
            name: "activitylogs",
            component: () => import("./views/app/myDesk/activitylogs"),
          },
          {
            path: "details",
            name: "details",
            component: () => import("./views/app/myDesk/details"),
          },
          {
            path: "notification",
            name: "notification",
            component: () => import("./views/app/myDesk/notification"),
          },
        ],
      },
      {
        path: "/app/accounts",
        component: () => import("./views/app/accounts"), //settings
        children: [
          {
            path: "branding",
            name: "branding",
            component: () => import("./views/app/accounts/Branding"),
          },
          {
            path: "security",
            name: "security",
            component: () => import("./views/app/accounts/Security"),
          },
          {
            path: "eSignature",
            name: "eSignature",
            component: () => import("./views/app/accounts/Esignature"),
          },
          {
            path: "stamp",
            name: "stamp",
            component: () => import("./views/app/accounts/Stamp"),
          },
          {
            path: "inviteConfigurations",
            name: "inviteConfigurations",
            component: () =>
              import("./views/app/accounts/InviteConfigurations"),
          },
          {
            path: "documentConfigurations",
            name: "documentConfigurations",
            component: () =>
              import("./views/app/accounts/documentConfigurations"),
          },
        ],
      },
      {
        path: "/app/profiledata",
        component: () => import("./views/app/profiledata"), //settings
        children: [
          {
            path: "profile",
            name: "profile",
            component: () => import("./views/app/profiledata/profile"),
          },
        ],
      },
      // {
      //   path: "/app/userScreen",
      //   component: () => import("./views/app/userScreen"), //settings
      //   children: [
      //     {
      //       path: "carView",
      //       name: "carView",
      //       component: () => import("./views/app/userScreen/carView"),
      //     },
      //   ],
      // },
      {
        path: "/app/setting",
        component: () => import("./views/app/setting"), //settings
        children: [
          {
            path: "api",
            name: "api",
            component: () => import("./views/app/setting/api"),
          },
          {
            path: "esignature",
            name: "esignature",
            component: () => import("./views/app/setting/esignature"),
          },
          {
            path: "settingRoute",
            name: "settingRoute",
            component: () => import("./views/app/setting/settingRoute"),
          },
          {
            path: "publisher",
            name: "publisher",
            component: () => import("./views/app/setting/publisher"),
          },
          {
            path: "Setting",
            name: "Setting",
            component: () => import("./views/app/setting/Setting"),
          },
          {
            path: "homepage",
            name: "homepage",
            component: () => import("./views/app/setting/homepage"),
          }, 
          {
            path: "myinformation",
            name: "myinformation",
            component: () => import("./views/app/setting/myinformation"),
          }, {
            path: "earnings",
            name: "earnings",
            component: () => import("./views/app/setting/earnings"),
          }, {
            path: "statistics",
            name: "statistics",
            component: () => import("./views/app/setting/statistics"),
          },
          {
            path: "payment",
            name: "payment",
            component: () => import("./views/app/setting/payment"),
          },
          {
            path: "documents",
            name: "documents",
            component: () => import("./views/app/setting/documents"),
          },
        ],
      },
      {
        path: "/app/homes",
        component: () => import("./views/app/homes"), //home
        children: [
          {
            path: "home.v1",
            name: "home.v1",
            component: () => import("./views/app/homes/home.v1"),
          },
          {
            path: "home.v2",
            name: "home.v2",
            component: () => import("./views/app/homes/home.v2"),
          },
        ],
      },
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"), //dashboard
        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/app/dashboards/dashboard.v1"),
          },
          {
            path: "userDashboard",
            name: "dashboard",
            component: () => import("./views/app/dashboards/userDashboard"),
          },
          {
            path: "adminDashboard",
            name: "dashboard",
            component: () => import("./views/app/dashboards/adminDashboard"),
          },
          {
            path: "dashboard.v2",
            name: "dashboard.v2",
            component: () => import("./views/app/dashboards/dashboard.v2"),
          },
          {
            path: "dashboard.v3",
            name: "dashboard.v3",
            component: () => import("./views/app/dashboards/dashboard.v3"),
          },
          {
            path: "dashboard.v4",
            name: "dashboard.v4",
            component: () => import("./views/app/dashboards/dashboard.v4"),
          },
        ],
      },

      //ui-kits
      {
        path: "/app/ui-kits",
        component: () => import("./views/app/ui-kits"),
        redirect: "/app/ui-kits/alerts",
        children: [
          {
            path: "alerts",
            name: "alerts",
            component: () => import("./views/app/ui-kits/alerts"),
          },
          {
            path: "accordion",
            name: "accordion",
            component: () => import("./views/app/ui-kits/accordion"),
          },
          {
            path: "badges",
            name: "badges",
            component: () => import("./views/app/ui-kits/badges"),
          },
          {
            path: "buttons",
            name: "buttons",
            component: () => import("./views/app/ui-kits/buttons"),
          },
          {
            path: "bootstrap-tab",
            name: "bootstrap-tab",
            component: () => import("./views/app/ui-kits/bootstrap-tab"),
          },
          {
            path: "cards",
            name: "cards",
            component: () => import("./views/app/ui-kits/cards"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/ui-kits/list"),
          },
          {
            path: "popover",
            name: "popover",
            component: () => import("./views/app/ui-kits/popover"),
          },
          {
            path: "progressbar",
            name: "progressbar",
            component: () => import("./views/app/ui-kits/progressbar"),
          },
          {
            path: "collapsible",
            name: "collapsible",
            component: () => import("./views/app/ui-kits/collapsible"),
          },
          {
            path: "modals",
            name: "modals",
            component: () => import("./views/app/ui-kits/modals"),
          },
          {
            path: "typography",
            name: "typography",
            component: () => import("./views/app/ui-kits/typography"),
          },
          {
            path: "carousel",
            name: "carousel",
            component: () => import("./views/app/ui-kits/carousel"),
          },
          {
            path: "pagination",
            name: "pagination",
            component: () => import("./views/app/ui-kits/pagination"),
          },
          // {
          //   path: "slider",
          //   component: () => import("./views/app/ui-kits/sliders")
          // }
        ],
      },

      //uiExtraKits
      {
        path: "/app/extraKits",
        component: () => import("./views/app/extraKits"),
        redirect: "/app/extraKits/dropdown",
        children: [
          {
            path: "dropdown",
            component: () => import("./views/app/extraKits/dropdown"),
          },
          {
            path: "loaders",
            component: () => import("./views/app/extraKits/loaders"),
          },
          {
            path: "sweetAlerts",
            component: () => import("./views/app/extraKits/sweetAlerts"),
          },
          {
            path: "toasts",
            component: () => import("./views/app/extraKits/toasts"),
          },
          {
            path: "tour",
            component: () => import("./views/app/extraKits/tour"),
          },
          {
            path: "calendar",
            component: () => import("./views/app/extraKits/calendar"),
          },
          {
            path: "rating",
            component: () => import("./views/app/extraKits/rating"),
          },
          {
            path: "spinButton",
            component: () => import("./views/app/extraKits/spinButton"),
          },
          {
            path: "datePicker",
            component: () => import("./views/app/extraKits/datePicker"),
          },
          {
            path: "timePicker",
            component: () => import("./views/app/extraKits/timePicker"),
          },
          {
            path: "imageCropper",
            component: () => import("./views/app/extraKits/imageCropper"),
          },
          {
            path: "vuedraggable",
            component: () => import("./views/app/extraKits/vuedraggable"),
          },
          {
            path: "avatar",
            component: () => import("./views/app/extraKits/avatar"),
          },
          {
            path: "sidebar",
            component: () => import("./views/app/extraKits/sidebar"),
          },
          {
            path: "spinners",
            component: () => import("./views/app/extraKits/spinners"),
          },
          {
            path: "vueTree",
            component: () => import("./views/app/extraKits/vueTree"),
          },
        ],
      },
      //  apps
      {
        path: "/app/apps",
        component: () => import("./views/app/apps"),
        redirect: "/app/apps/chat",
        children: [
          {
            path: "scrumboard",
            name: "scrumboard",
            component: () => import("./views/app/apps/scrumboard"),
          },
          {
            path: "add-scrumboard",
            name: "add-scrumboard",
            component: () => import("./views/app/apps/scrumboardAddBoard"),
          },
          {
            path: "edit-scrumboard",
            name: "edit-scrumboard",
            component: () =>
              import("./views/app/apps/scrumboard/editScrumBoard"),
          },
          // {
          //   path: "scrumboard-one",
          //   component: () => import("./views/app/apps/scrumboard/scrumboard-content-one")
          // },
          {
            path: "contact-list-table",
            name: "contact-list-table",
            component: () => import("./views/app/apps/contactListTable"),
          },
          {
            path: "todo-list",
            name: "todo-list",
            component: () => import("./views/app/apps/todo-list"),
          },
          {
            path: "invoice",
            name: "invoice",
            component: () => import("./views/app/apps/invoice"),
          },
          {
            path: "createInvoice",
            name: "createInvoice",
            component: () => import("./views/app/apps/createInvoice"),
          },
          {
            path: "edit-invoice",
            name: "edit-invoice",
            component: () => import("./views/app/apps/editInvoice"),
          },
          {
            path: "products",
            name: "products",
            component: () => import("./views/app/apps/products"),
          },
          {
            path: "product-detail",
            name: "product-detail",
            component: () => import("./views/app/apps/productDetails"),
          },
          {
            path: "checkout",
            name: "checkout",
            component: () => import("./views/app/apps/cart"),
          },
          {
            path: "checkout-address",
            name: "checkout-address",
            component: () => import("./views/app/apps/checkoutAddress"),
          },
          {
            path: "printInvoice",
            name: "printInvoice",
            component: () => import("./views/app/apps/printInvoice"),
          },
          {
            path: "taskManager",
            name: "taskManager",
            component: () => import("./views/app/apps/taskManager"),
          },
          {
            path: "calendar",
            name: "calendar",
            component: () => import("./views/app/apps/calendar"),
          },
          {
            path: "table",
            name: "table",
            component: () => import("./views/app/apps/table"),
          },
          {
            path: "vue-table",
            path: "vue-table",
            component: () => import("./views/app/apps/vue-tables"),
          },
          {
            path: "inbox",
            name: "inbox",
            component: () => import("./views/app/apps/inbox"),
          },
          {
            path: "chat",
            component: () => import("./views/app/apps/chat"),
          },
          {
            path: "contact-details",
            component: () => import("./views/app/apps/contact-details"),
          },
          {
            path: "contact-grid",
            component: () => import("./views/app/apps/contact-grid"),
          },
          {
            path: "contact-list",
            component: () => import("./views/app/apps/contact-list"),
          },
          {
            path: "payment-checkout",
            component: () => import("./views/app/apps/paymentCheckout"),
          },
        ],
      },

      // form
      {
        path: "/app/forms",
        component: () => import("./views/app/form"),
        redirect: "/app/form/basicForms",
        children: [
          {
            path: "basicForms",
            component: () => import("./views/app/form/basicForms"),
          },
          {
            path: "basicActionBar",
            component: () => import("./views/app/form/basicActionBar"),
          },
          {
            path: "formLayouts",
            component: () => import("./views/app/form/formLayouts"),
          },
          {
            path: "formWizard",
            component: () => import("./views/app/form/formWizard"),
          },
          {
            path: "tagInput",
            component: () => import("./views/app/form/tagInput"),
          },
          {
            path: "mask",
            component: () => import("./views/app/form/masks"),
          },
          {
            path: "formComponent",
            component: () => import("./views/app/form/formComponent"),
          },
          {
            path: "datepicker",
            component: () => import("./views/app/form/datepicker"),
          },
          {
            path: "V2Datepicker",
            component: () => import("./views/app/form/V2Datepicker"),
          },
        ],
      },
      // datatables
      {
        path: "/app/datatables",
        component: () => import("./views/app/datatables"),
        redirect: "/app/datatables/list",
        children: [
          {
            path: "paging",
            name: "paging",
            component: () => import("./views/app/datatables/paging"),
          },
          {
            path: "filter",
            name: "filter",
            component: () => import("./views/app/datatables/filter"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/datatables/list"),
          },
          {
            path: "vue-good-table",
            name: "vue-good-table",
            component: () => import("./views/app/apps/vue-good-table"),
          },
        ],
      },

      // widget
      {
        path: "/app/widgets",
        component: () => import("./views/app/widgets"),
        redirect: "/app/widgets/widgetCard",
        children: [
          {
            path: "widgetCard",
            component: () => import("./views/app/widgets/widgetCard"),
          },
          {
            path: "widgetStatistics",
            component: () => import("./views/app/widgets/widgetStatistics"),
          },
          {
            path: "weatherApp",
            component: () => import("./views/app/widgets/weatherApp"),
          },
          {
            path: "widgetApp",
            component: () => import("./views/app/widgets/widgetApp"),
          },
          {
            path: "widgetList",
            component: () => import("./views/app/widgets/widgetList"),
          },
        ],
      },
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/app/pages"),
        redirect: "/app/pages/profile",
        children: [
          {
            path: "profile",
            component: () => import("./views/app/pages/profile"),
          },

          {
            path: "error",
            component: () => import("./views/app/pages/notFound"),
          },
          {
            path: "icons",
            component: () => import("./views/app/pages/icons"),
          },

          {
            path: "search-result",
            component: () => import("./views/app/pages/search-result"),
          },
          {
            path: "pricing-table",
            component: () => import("./views/app/pages/pricingTable"),
          },
          // {
          //   path: "publisher",
          //   component: () => import("./views/app/pages/publisher"),
          // },
        ],
      },

      // chart_componnent//////////----------------------////////////////////////

      {
        path: "/app/charts",
        component: () => import("./views/app/chart"),
        redirect: "/app/charts/eChart",
        children: [
          {
            // problem
            path: "apexAreaChart",
            component: () => import("./views/app/chart/apexChart"),
          },
          {
            path: "apexBarChart",
            component: () => import("./views/app/chart/apexBarChart"),
          },
          // {
          //   path: "apexBasicChart",
          //   component: () => import("./views/app/chart/apexBasicChart")
          // },
          {
            path: "apexLineChart",
            component: () => import("./views/app/chart/apexLineChart"),
          },
          {
            path: "apexMixChart",
            component: () => import("./views/app/chart/apexMixChart"),
          },
          {
            path: "apexColumnChart",
            component: () => import("./views/app/chart/apexColumnChart"),
          },
          {
            path: "apexPieDonutsChart",
            component: () => import("./views/app/chart/apexPieDonutsChart"),
          },
          {
            path: "apexRadarChart",
            component: () => import("./views/app/chart/apexRadarChart"),
          },
          {
            path: "apexRadialBarChart",
            component: () => import("./views/app/chart/apexRadialBarChart"),
          },
          {
            path: "apexScatterChart",
            component: () => import("./views/app/chart/apexScatterChart"),
          },
          {
            path: "apexSparklineChart",
            component: () => import("./views/app/chart/apexSparklineChart"),
          },
        ],
      },
    ],
  },

  // sessions
  {
    path: "/app/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/app/sessions/home",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/sessions/signIn"),
      },
      {
        path: "independent",
        component: () => import("./views/app/sessions/independent"),
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp"),
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot"),
      },
      {
        path: "home",
        component: () => import("./views/app/sessions/carView"),
      },
      {
        path: "reset",
        component: () => import("./views/app/sessions/resetPassword"),
      },
      {
        path: "verification",
        component: () => import("./views/app/sessions/verification"),
      },
      {
        path: "DocumentSignIn",
        component: () => import("./views/app/sessions/pdfIn"),
      },
      {
        path: "searchCar",
        name: "searchCar",
        component: () => import("./views/app/sessions/searchCar"),
      },
      {
        path: "bookCars",
        name: "bookCars",
        component: () => import("./views/app/sessions/bookCars"),
      },
      {
        path: "signIn",
        name: "signIn",
        component: () => import("./views/app/sessions/signIn"),
      },

      {
        path: "walletoffers",
        name: "walletoffers",
        component: () => import("./views/app/sessions/walletoffers"),
      },
    ],
  },

  {
    path: "/vertical-sidebar",
    component: () => import("./containers/layouts/verticalSidebar"),
  },
  {
    path: "*",
    component: () => import("./views/app/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {

   const role = localStorage.getItem('role');

  // const localStorageValue = localStorage.getItem("userInfo");

  if (role) {
   
    try {
      // const userInfo = JSON.parse(localStorageValue);
      // const role = userInfo.data.role;

      if (role === "user" && to.path == "/") {
        NProgress.start();
        NProgress.set(0.1);

        this.$router.push('/app/setting/publisher')
      } else 
      if (role === "admin" && to.path == "/") {
        NProgress.start();
        NProgress.set(0.1);

        this.$router.push('/app/mydesk/users')
      } else {
        next();
      }
    } catch (error) {
      

      next();
    }
  } else {
    next();
  }

  // next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
