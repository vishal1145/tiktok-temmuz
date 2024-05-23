<template>
  <div class="app-admin-wrap layout-sidebar-large clearfix">
    <top-nav />

    <!-- <sidebar /> -->
    <sidebar v-if="shouldDisplaySidebar" />

    <!-- <main v-if="isAdmin == 'User'" >
      <div
        
        class="main-content-wrap d-flex flex-column flex-grow-1 print-area"
      >
        <transition name="page" mode="out-in">
          <router-view />
        </transition>

        <div class="flex-grow-1"></div>

      </div>
    </main> -->

    <main>
      <div
        :class="{ 'sidenav-open': getSideBarToggleProperties.isSideNavOpen }"
        class="main-content-wrap d-flex flex-column flex-grow-1 print-area"
      >
        <transition name="page" mode="out-in">
          <router-view />
        </transition>

        <div class="flex-grow-1"></div>
        <!-- <appFooter /> -->
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import appFooter from "../common/footer";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Sidebar,
    TopNav,
    appFooter,
  },
  data() {
    return { isAdmin: "", };
  },
  watch: {
    shouldDisplaySidebar() {
      
      if (this.isAdmin === "User" && window.innerWidth <= 768) {
        return false;
      } else{
        return true;
      }
    },

  },



  created() {
    
    var storedUser = localStorage.getItem("userInfo");
    
    var parsedUser = JSON.parse(storedUser);
    this.isAdmin = parsedUser.data.role;

    // this.isAdmin= "Admin";;
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
    shouldDisplaySidebar() {
     
      if (this.isAdmin === "User" && window.innerWidth <= 768) {
        return false;
      } else{
        return true;
      }
    },
  },
  methods: {
    
  },
};
</script>
<style></style>
