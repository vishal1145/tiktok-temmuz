<template>
  <div class="maim-container">
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <vue-good-table
      :columns="columns"
      :line-numbers="false"
      :pagination-options="{
        enabled: true,
        mode: 'records',
      }"
      styleClass="tableOne vgt-table"
      :selectOptions="{
        enabled: false,
        selectionInfoClass: 'table-alert__box',
      }"
      :sort-options="{
        enabled: false,
      }"
      :rows="rows"
    ></vue-good-table>
    <!-- <b-card v-for="(data, index) in data" :key="index" class="mt-2 bg-gray-300">
      <b-row>
        <b-col>{{ data }}</b-col>
      </b-row>
    </b-card> -->
    <!-- <div class="auth-content">
        <div class="card o-hidden">
          <div class="row">
            <b-col md="12">
              hii
              
            </b-col>
          </div>
        </div>
      </div> -->
  </div>
</template>
<script>
import moment from "moment";
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Notification Page",
  },

  data() {
    return {
      validationId: "",
      email: "",
      // bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      repeatPassword: "",
      data: [
        "1 hii this mass inf. you for ghjghjgh..",
        " 2 hii this mass inf. you forhjhj ..",
        "3 hii this mass inf. you forjjg ..",
        "4 hii this mass inf. you for jhghj..",
      ],
      columns: [
        {
          label: "Title",
          field: "title",
        },
        {
          label: "Notifications",
          field: "body",
        },
        {
          label: "Date/time",
          field: "created_at",
        },
      ],
      loader: false,
      rows: [],
      userId: "",
      submitStatus: null,
      successMessage: false,
      errorMessage: false,
      user_id:'',
      role:''

    };
  },
  created() {
    var storedUser = localStorage.getItem("userInfo");
    var parsedUser = JSON.parse(storedUser);
    // this.role = parsedUser.data.role;
    this.userId = parsedUser.data.id;
    // this.validationId = this.$route.query._id;
    this.AllNotification();
  },

  mounted() {
    this.AllNotification();
  },
  methods: {
  
    
    async AllNotification() {
    
      this.loader = true;
  this.user_id = localStorage.getItem('user_id');
  this.role = localStorage.getItem('role');
  

  let requestData = {};

  if (this.role === 'user') {
    requestData.user_id = this.user_id;
  } else if (this.role === 'admin') {
    requestData.user_id = ''; 
  }


  try {
    const res = await this.$apiService.postCall(
      `group_messages/all-messages`,
      requestData
    );

    if (res.error) {
      this.loader = false;
      this.$toaster.makeToast("warning", res.message);
    } else {
      this.loader = false;
      console.log("notificationInner", res); // Log the response received
      this.rows = res.apidata.data; // Assign response data to a variable
    }
  } catch (error) {
    this.loader = false;
    this.$toaster.makeToast("warning", "Error: server error");
    this.$store.commit("setError", { message: error });
  }
}
  },
};



</script>
<style>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
