<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <!-- <breadcumb :page="'Version 1'" :folder="'Dashboard'" /> -->
    <div class="font-weight-bold fa-2x text-light">Dashboard</div>
    <hr class="mt-1" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <b-row>
      <!-- ICON BG -->

      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Member</p>
            <p class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer" @click="clickMember()">{{total_member}}</p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Creators</p>
            <p class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer" @click="clickCreators()">{{total_creators}}</p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Money-2"></i>
          <div class="content">
            <!-- <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Today Trip Amount</p>
              <p class="mb-0 text-primary pl-1">₹ {{ today_trip_amount }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Trip Amount</p>
              <p class="mb-0 text-primary pl-1">₹ {{ trip_amount }}</p>
            </div> -->
            <p class="text-muted mt-2 mb-0">Payment Request</p>
            <p class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer" @click="clickPayment()">
               {{ total_payment_request }}
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
  <!-- ============ Body content End ============= -->
</template>
<script>
// import { multipleYxis, basicColumnChart } from "@/data/apexChart";
import {
  dashboardOne,
  dashboardTwo,
  splineAreaWidgetTwo,
  splineAreaWidgetThree
} from '@/data/dashboard1'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Dashboard'
  },
  data () {
    return {
      loader: false,
      total_member: '',
      total_creators: '',
      total_payment_request:''
    }
  },
  mounted () {},
  created () {
    this.getDashboardData()
  },
  methods: {
    async getDashboardData () {
      this.loader = true

      try {
        const response = await this.$apiService.getCall('auth/dashboard-count/');
        console.log(response);
        if (response.error || !response.apidata) {
            this.loader = false
          this.$toaster.makeToast('warning', 'Error while getting data')
        } else {
          this.total_member = response.apidata.membes
          this.total_creators = response.apidata.creators
          this.total_payment_request = response.apidata.payment_request
          
         
          this.loader = false
        }
      } catch (error) {
        this.loader = false
        console.error('Server error:', error)
      }
    },
    clickPayment() { this.$router.push("/app/setting/payment"); },
    clickCreators() { this.$router.push("/app/setting/publisher");},
    clickMember(){this.$router.push("/app/mydesk/users");},
  }
}
</script>
<style>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}
.card-icon-bg .card-body .content {
  max-width: max-content !important;
}
</style>
