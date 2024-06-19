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
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickMember()"
            >
              {{ total_member }}
            </p>
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
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickCreators()"
            >
              {{ total_creators }}
            </p>
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
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickPayment()"
            >
              {{ total_payment_request }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Pending Member Requests</p>
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickMember()"
            >
              {{ pending_member }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Pending Creators</p>
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickCreators()"
            >
              {{ pending_creators }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Total Diamonds This Month</p>
            <p
              class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
              @click="clickCreators()"
            >
              {{ 0 }}
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">Top 5 Diamonds Members this Month</div>
            <div
              class="d-flex flex-column flex-sm-row align-items-center mb-3"
              v-for="(value, index) in popular_cars"
              :key="index"
            >
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class="">
                  <a href="">{{ value.carId__brand }}- {{ value.no }}</a>
                </h5>
                <!-- <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p> -->
                <!-- <p class="text-small text-danger m-0">
                  $ 450 <del class="text-muted">$ 500</del>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">Top 5 Earnings Members This Month ($)</div>
            <div
              class="d-flex flex-column flex-sm-row align-items-center mb-3"
              v-for="(value, index) in popular_cars"
              :key="index"
            >
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class="">
                  <a href="">{{ value.carId__brand }} - {{ value.no }}$</a>
                </h5>
                <!-- <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p> -->
                <!-- <p class="text-small text-danger m-0">
                  $ 450 <del class="text-muted">$ 500</del>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </b-col>

      <b-col md="6">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">
              Top 5 Creators Most Diamonds This Month
            </div>
            <div
              class="d-flex flex-column flex-sm-row align-items-center mb-3"
              v-for="(value, index) in popular_cars"
              :key="index"
            >
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class="">
                  <a href="">{{ value.carId__brand }} - {{ value.no }}</a>
                </h5>
                <!-- <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p> -->
                <!-- <p class="text-small text-danger m-0">
                  $ 450 <del class="text-muted">$ 500</del>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </b-col>

      <b-col md="6">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">Top 5 Member with Most Creators</div>
            <div
              class="d-flex flex-column flex-sm-row align-items-center mb-3"
              v-for="(value, index) in popular_cars"
              :key="index"
            >
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class="">
                  <a href="">{{ value.carId__brand }} - {{ value.no }}</a>
                </h5>
                <!-- <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p> -->
                <!-- <p class="text-small text-danger m-0">
                  $ 450 <del class="text-muted">$ 500</del>
                </p> -->
              </div>
            </div>
          </div>
        </div>
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
      total_member: 0,
      total_creators: 0,
      total_payment_request: 0,
      pending_creators: 0,
      pending_member: 0,
      popular_cars: [
        { carId__brand: 'Afsda asgdj', no: 7 },
        { carId__brand: 'AKAsh', no: 3 },

        { carId__brand: 'NAJHDH', no: 5 },

        { carId__brand: 'WEIR', no: 9 },
        { carId__brand: '435345', no: 7 }
      ]
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
        const response = await this.$apiService.getCall('auth/dashboard-count/')
        console.log(response)
        if (response.error || !response.apidata) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error while getting data')
        } else {
          this.total_member = response.apidata.membes
          this.pending_creators = response.apidata.pending_creators
          this.total_creators = response.apidata.creators
          this.total_payment_request = response.apidata.payment_request

          this.loader = false
        }
      } catch (error) {
        this.loader = false
        console.error('Server error:', error)
      }
    },
    clickPayment () {
      this.$router.push('/app/setting/payment')
    },
    clickCreators () {
      this.$router.push('/app/setting/publisher')
    },
    clickMember () {
      this.$router.push('/app/mydesk/users')
    }
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
