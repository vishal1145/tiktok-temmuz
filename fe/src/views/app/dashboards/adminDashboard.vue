<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <breadcumb :page="'Version 1'" :folder="'Dashboard'" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <b-row>
      <!-- ICON BG -->

      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Add-User"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Total Users</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ total_user }}
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
            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Today Trip Amount </p>
              <p class="mb-0 text-primary pl-1"> ₹ {{ today_trip_amount }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Trip Amount </p>
              <p class="mb-0 text-primary pl-1"> ₹ {{ trip_amount }}</p>
            </div>
            <!-- <p class="text-muted mt-2 mb-0">Expense</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              ₹ {{ total_payments_today }}
            </p> -->
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Money-2"></i>
          <div class="content">
            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Today Security Amount </p>
              <p class="mb-0 text-primary pl-1"> ₹ {{ today_security_amount }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Security Amount </p>
              <p class="mb-0 text-primary pl-1"> ₹ {{ security_amount }}</p>
            </div>
           
            <!-- <p class="text-muted mt-2 mb-0">Total deposits today</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              ₹ {{ total_deposits_today }}
            </p> -->
          </div>
        </b-card>
      </b-col>

      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Taxi-2"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Total Car</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ total_car }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Taxi"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Unavailable Cars</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              ₹ {{ unavailable_cars }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Taxi-2"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Rented Out Cars</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              ₹ {{ rented_out_cars }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Car-Items"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">New Bookings Today</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              ₹ {{ new_bookings_today }}
            </p>
          </div>
        </b-card>
      </b-col>
      <b-col md="4" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Management"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Total Booking</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ active_bookings }}
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="8" md="12" sm="12">
        <b-card class="mb-30">
          <div class="d-flex justify-content-between">
            <h4 class="card-title m-0">Orderd graph</h4>
            <b-form>
              <b-row>
                <b-form-group class="col-md-12 mb-3" label-for="input-1">
                  <b-form-select
                    required
                    @change="handelRevenueChabge"
                    v-model="selectedrevenue"
                  >
                    <b-form-select-option
                      v-for="value in Dailyrevenue"
                      :key="value"
                      :value="value"
                      :disabled="value === 'Select Revenue'"
                    >
                      <div>
                        {{ value }}
                      </div>
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-row>
            </b-form>
          </div>

          <div class="chart-wrapper">
            <apexchart
              type="bar"
              height="350"
              :options="chartOptionsData"
              :series="seriesData"
            ></apexchart>
          </div>
        </b-card>
      </b-col>
      <b-col col lg="4" md="12" sm="12">
        <b-card class="mb-30">
          <h4 class="card-title m-0">Car Orderd</h4>
          <div class="chart-wrapper">
            <apexchart
              type="pie"
              height="350"
              :options="chartCircleData"
              :series="seriesCircleData"
            ></apexchart>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <div class="row">
      <div class="col-lg-6 col-xl-6 col-md-12">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="card card-chart-bottom o-hidden mb-30">
              <div class="card-body pb-0">
                <div class="text-muted">Last Month Booking</div>
                <p class="text-primary text-24 m-0">250</p>
              </div>
              <div class="chart-wrapper" style="height: 260px">
                <apexchart
                  type="area"
                  height="275"
                  :options="splineAreaWidgetTwo.chartOptions"
                  :series="splineAreaWidgetTwo.series"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="card card-chart-bottom o-hidden mb-30">
              <div class="card-body pb-0">
                <div class="text-muted">Last Week Booking</div>
                <p class="text-warning text-24 m-0">50</p>
              </div>
              <div class="chart-wrapper" style="height: 260px">
                <apexchart
                  type="area"
                  height="275"
                  :options="splineAreaWidgetThree.chartOptions"
                  :series="splineAreaWidgetThree.series"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="row">
            <div class="col-md-6">
              <b-card class="card-profile-1 mb-30 text-center">
                <div class="avatar box-shadow-2 mb-3">
                  <img src="@/assets/images/faces/16.jpg" alt />
                </div>
                <h5 class="m-0">Jassica Hike</h5>
                <p class="mt-0 text-muted">Top Seller</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae cumque. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum.
                </p>
                <button class="btn btn-primary btn-rounded">
                  Contact Jassica
                </button>
                <div class="card-socials-simple mt-4">
                  <a href>
                    <i class="i-Linkedin-2"></i>
                  </a>
                  <a href>
                    <i class="i-Facebook-2"></i>
                  </a>
                  <a href>
                    <i class="i-Twitter"></i>
                  </a>
                </div>
              </b-card>
            </div>
            <div class="col-md-6">
              <b-card class="card-profile-1 mb-30 text-center">
                <div class="avatar box-shadow-2 mb-3">
                  <img src="@/assets/images/faces/13.jpg" alt />
                </div>
                <h5 class="m-0">jhon doe</h5>
                <p class="mt-0 text-muted">Top Buyer</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae cumque. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum .
                </p>
                <button class="btn btn-primary btn-rounded">
                  Contact Jassica
                </button>
                <div class="card-socials-simple mt-4">
                  <a href>
                    <i class="i-Linkedin-2"></i>
                  </a>
                  <a href>
                    <i class="i-Facebook-2"></i>
                  </a>
                  <a href>
                    <i class="i-Twitter"></i>
                  </a>
                </div>
              </b-card>
            </div>
          </div> -->
      </div>
      <!-- start::top selling product -->
      <!-- <b-col col lg="6" md="12">
                      
                  </b-col> -->
      <!-- end::top-selling product -->

      <b-col lg="6" xl="6" md="12">
        <div class="card mb-30">
          <div class="card-body">
            <div class="card-title">Top Booking Product</div>
            <div
              class="d-flex flex-column flex-sm-row align-items-center mb-3"
              v-for="(value, index) in popular_cars"
              :key="index"
            >
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                :src="value.carId__images[0]"
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class="">
                  <a href="">{{ value.carId__brand }}</a>
                </h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $ 450 <del class="text-muted">$ 500</del>
                </p>
              </div>
              <!-- <div>
                <button
                  class="btn btn-outline-primary btn-rounded btn-sm m-3 m-sm-0"
                >
                  View details
                </button>
              </div> -->
            </div>
            <!-- <div class="d-flex flex-column flex-sm-row align-items-center mb-3">
              <img
                class="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3"
                src=""
                alt=""
              />
              <div class="flex-grow-1 text-center text-sm-left">
                <h5 class=""><a href="">Car Name</a></h5>
                <p class="m-0 text-small text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p class="text-small text-danger m-0">
                  $ 550 <del class="text-muted">$ 600</del>
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                >
                  View details
                </button>
              </div>
            </div> -->
          </div>
        </div>
        <!-- <div class="card mb-30">
          <div class="card-body p-0">
            <div class="card-title d-flex align-items-center mb-2 pb-0 p-3">
              <span>User activity</span>
              <span class="flex-grow-1"></span>
              <span class="badge badge-pill badge-warning">Updated daily</span>
            </div>
            <div class="d-flex border-bottom justify-content-between p-3">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">2065</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">465</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">23456</h5>
              </div>
            </div>
            <div class="d-flex border-bottom justify-content-between p-3">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">1829</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">735</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">92565</h5>
              </div>
            </div>
            <div class="d-flex justify-content-between p-3 mb-1">
              <div class="flex-grow-1">
                <span class="text-small text-muted">Pages / Visit</span>
                <h5 class="m-0">3165</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">New user</span>
                <h5 class="m-0">165</h5>
              </div>
              <div class="flex-grow-1">
                <span class="text-small text-muted">Last week</span>
                <h5 class="m-0">32165</h5>
              </div>
            </div>
          </div>
        </div> -->
      </b-col>

      <div class="col-md-12">
        <div class="card mb-30">
          <div class="card-body p-0">
            <h5 class="card-title border-bottom p-3 mb-2">Recent Orders</h5>

            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              styleClass="order-table vgt-table"
              :rows="rows"
            >
              <div slot="emptystate" class="text-center">No data found</div>
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'action'">
                  <button
                    class="btn btn-outline-primary text-black btn-rounded"
                  >
                    View
                  </button>
                </span>
                <span v-else-if="props.column.field == 'imges'">
                  <template>
                    <img
                      :src="props.row.car_images[0]"
                      class="rounded-circle avatar-sm"
                    />
                  </template>
                </span>
                <span v-else-if="props.column.field === 'show_date'">
                  <template>
                    <div>
                      <div><b>From :</b> {{ props.row.booking_date }}</div>
                      <div><b>To :</b> {{ props.row.end_date }}</div>
                    </div>
                  </template>
                </span>
                <span v-else-if="props.column.field === 'show_action'">
                  <template>
                    <div v-if="props.row.cancel_status !== 'Cancel'">
                      <span class="text-white m-0" style="font-size: 14px">
                        <span class="badge bg-success p-2 blueVerfiyred"
                          >{{ props.row.payment_status
                          }}<i
                            class="fa fa-check-circle blueVerfiy2red"
                            aria-hidden="true"
                            style="padding-left: 4px"
                          ></i
                        ></span>
                      </span>
                    </div>
                    <div v-else>
                      <span class="text-white m-0" style="font-size: 14px">
                        <span class="badge bg-danger p-2 blueVerfiyred"
                          >Booking Cancel<i
                            class="fa fa-check-circle blueVerfiy2red"
                            aria-hidden="true"
                            style="padding-left: 4px"
                          ></i
                        ></span>
                      </span>
                    </div>
                    <!-- <div
                      v-if="props.row.cancel_info !== null"
                      class="text-11 py-1 border px-2 mt-2 rounded"
                    >
                      {{ props.row.cancel_info }}
                    </div> -->
                  </template>
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============ Body content End ============= -->
</template>
<script>
// import { multipleYxis, basicColumnChart } from "@/data/apexChart";
import {
  dashboardOne,
  dashboardTwo,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
} from "@/data/dashboard1";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard",
  },
  data() {
    return {
      Dailyrevenue: [
        "Select Revenue",
        "Daily Revenue",
        "Weekly Revenue",
        "Monthly Revenue",
        "Yearly Revenue",
      ],
      seriesData: [],
      loader: false,
      selectedrevenue: "Daily Revenue",
      revenue: "",
      total_user: "",
      total_car: "",
      active_bookings: "",
      new_bookings_today: "",
      rented_out_cars: "",
      unavailable_cars: "",
      total_payments_today: "",
      today_security_amount: 0,
      trip_amount: 0,
      security_amount: 0,
      today_trip_amount: 0,
      recent_order: [],
      popular_cars: [],
      dashboardOne,
      dashboardTwo,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,

      columns: [
        {
          label: "Image",
          field: "imges",
          // html: true,
          // thClass: "text-left",
          // tdClass: "text-left",
        },
        {
          label: "Booking Id",
          field: "order_key",
          // thClass: "text-left pl-3",
          // tdClass: "text-left pl-3",
        },
        {
          label: "User Name",
          field: "user_name",
          // thClass: "text-left",
          // tdClass: "text-left",
        },

        {
          label: "Status",
          field: "show_action",
          // html: true,
          // thClass: "text-left",
          // tdClass: "text-left",
        },

        {
          label: "Travelling Date",
          field: "show_date",

          // html:true,
          // type: "percentage",
          // thClass: "text-left",
          // tdClass: "text-left",
        },
        // {
        //   label: "Date",
        //   field: "created_at",
        //   // type: "date",
        //   // dateInputFormat: "yyyy-mm-dd",
        //   // dateOutputFormat: "mmm Do yy",
        //   // thClass: "text-left",
        //   // tdClass: "text-left",
        // },
        // {
        //   label: "Action",
        //   field: "action",
        //   html: true,
        //   thClass: "text-left",
        //   tdClass: "text-left",
        // },
      ],
      rows: [],
      chartOptionsData: {
        // colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
        // chart: {
        //   type: "bar",
        //   height: 350,
        //   toolbar: {
        //     show: false,
        //   },
        // },
        // plotOptions: {
        //   bar: {
        //     horizontal: false,
        //     columnWidth: "55%",
        //     borderRadius: 10,
        //   },
        // },
        // dataLabels: {
        //   enabled: false,
        // },
        // stroke: {
        //   show: true,
        //   width: 2,
        //   colors: ["transparent"],
        // },
        // xaxis: {
        //   categories: [
        //     "Jan",
        //     "Feb",
        //     "Mar",
        //     "Apr",
        //     "May",
        //     "Jun",
        //     "Jul",
        //     "Aug",
        //     "Sep",
        //     "Oct",
        //     "Nov",
        //     "Dic",
        //   ],
        // },
        // fill: {
        //   opacity: 1,
        // },
        // tooltip: {
        //   y: {
        //     formatter: function (val) {
        //       return "$ " + val + " thousands";
        //     },
        //   },
        // },
      },
      chartCircleData: null,
      seriesCircleData: [],
    };
  },
  mounted() {
    this.getCircleData(); // Call the method when component is mounted
  },
  created() {
    this.getDashboardData();
    // this.getCircleData();
    this.getBarChartData();
  },
  methods: {
    async getDashboardData() {
      this.loader = true;

      try {
        const response = await this.$apiService.getCall("adminAnalytics/");
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
        } else {
          this.total_user = response.apidata.total_user;
          this.total_car = response.apidata.total_car;
          this.active_bookings = response.apidata.active_bookings;
          this.new_bookings_today = response.apidata.new_bookings_today;
          this.rented_out_cars = response.apidata.rented_out_cars;
          this.unavailable_cars = response.apidata.unavailable_cars;
          this.total_payments_today = response.apidata.total_payments_today;
          this.today_security_amount =
            response.apidata.today_security_amount || 0;
          this.security_amount = response.apidata.security_amount;
          this.today_trip_amount = response.apidata.today_trip_amount ||0;
          this.trip_amount = response.apidata.trip_amount;
          this.rows = response.apidata.recent_order;
          this.rows.forEach((value) => {
            // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
            value.car_images = value.car_images
              ? JSON.parse(value.car_images)
              : "";
          });

          this.popular_cars = response.apidata.popular_cars;
          this.popular_cars.forEach((value) => {
            // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
            value.carId__images = value.carId__images
              ? JSON.parse(value.carId__images)
              : "";
          });
          this.loader = false;
        }
      } catch (error) {
        this.loader = false;
        console.error("Server error:", error);
      }
    },
    async getBarChartData() {
      this.loader = true;
      // if (this.selectedrevenue == "Daily Revenue") {
      //   this.selectedrevenue = "daily_revenue";
      // }
      try {
        const response = await this.$apiService.getCall(
          "revenueFormet/?revenue_type=daily_revenue"
        );
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
        } else {
          this.seriesData = [
            { name: "Revenue", data: response.apidata.Daily_Revenue },
          ];
          function getAllWeekNames() {
            const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            const today = new Date();
            const todayIndex = today.getDay();
            const weekNames = [];

            for (let i = todayIndex; i > todayIndex - 7; i--) {
              const dayIndex = (i < 0 ? 7 + i : i) % 7; // Calculate index of current day in days array
              const date = new Date(today);
              date.setDate(today.getDate() + (i - todayIndex)); // Set date to current date plus i days
              const formattedDate = date.getDate();
              weekNames.unshift({ day: days[dayIndex], date: formattedDate }); // Adding to the beginning of the array
            }

            return weekNames;
          }

          const weekNames = getAllWeekNames();
          const categories = weekNames.map((day) => `${day.day} (${day.date})`);

          this.chartOptionsData = {
            colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
            xaxis: {
              categories: categories,
            },
          };

          this.loader = false;
        }
      } catch (error) {
        this.loader = false;
        console.error("Server error:", error);
      }
    },
    async getCircleData() {
      this.loader = true;

      try {
        const response = await this.$apiService.getCall("modelUserAnalytics/");
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
        } else {
          this.seriesCircleData = response.apidata.map((e) => {
            return e.total_revenue;
          });

          // console.log(this.seriesCircleData)
          this.chartCircleData = {
            fill: {
              colors: ["#EDE9FE", "#DDD6FE", "#8B5CF6", "#C4B5FD", "#A78BFA"],
            },
            chart: {
              width: "100%",
              type: "pie",
            },
            labels: response.apidata.map((e) => {
              return e.carId__brand;
            }),
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100%",
                    height: "200px",
                  },
                  legend: {
                    show: false,
                  },
                },
              },
            ],
          };
          this.loader = false;
        }
      } catch (error) {
        this.loader = false;
        console.error("Server error:", error);
      }
    },
    async handelRevenueChabge(value) {
      this.loader = true;
      if (value == "Daily Revenue") {
        this.revenue = "daily_revenue";
      } else if (value == "Weekly Revenue") {
        this.revenue = "weekly_revenue";
      } else if (value == "Monthly Revenue") {
        this.revenue = "monthly_revenue";
      } else {
        this.revenue = "yearly_revenue";
      }
      try {
        const response = await this.$apiService.getCall(
          "revenueFormet/?revenue_type=" + this.revenue
        );
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
        } else {
          if (this.revenue == "daily_revenue") {
            this.seriesData = [
              { name: "Revenue", data: response.apidata.Daily_Revenue },
            ];
            function getAllWeekNames() {
              const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ];
              const today = new Date();
              const todayIndex = today.getDay();
              const weekNames = [];

              for (let i = todayIndex; i > todayIndex - 7; i--) {
                const dayIndex = (i < 0 ? 7 + i : i) % 7; // Calculate index of current day in days array
                const date = new Date(today);
                date.setDate(today.getDate() + (i - todayIndex)); // Set date to current date plus i days
                const formattedDate = date.getDate();
                weekNames.unshift({ day: days[dayIndex], date: formattedDate }); // Adding to the beginning of the array
              }

              return weekNames;
            }

            const weekNames = getAllWeekNames();
            const categories = weekNames.map(
              (day) => `${day.day} (${day.date})`
            );

            this.chartOptionsData = {
              colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
              xaxis: {
                categories: categories,
              },
            };
          } else if (this.revenue == "weekly_revenue") {
            this.seriesData = [
              { name: "Revenue", data: response.apidata.Weekly_Revenue },
            ];
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1; // Adding 1 to get the month in the range 1-12

            function getWeekDates(year, month) {
              const weeks = [];
              const firstDayOfMonth = new Date(year, month - 1, 1); // Month is zero-based
              const lastDayOfMonth = new Date(year, month, 0); // Get the last day of the month

              let currentWeekStart = firstDayOfMonth;
              let weekCounter = 0;

              while (currentWeekStart <= lastDayOfMonth && weekCounter < 4) {
                const currentWeekEnd = new Date(currentWeekStart);
                currentWeekEnd.setDate(currentWeekEnd.getDate() + 6); // Add 6 days to get the end of the week
                const weekLabel = `${currentWeekStart.getDate()} - ${currentWeekEnd.getDate()}`;

                weeks.push(weekLabel);

                // Move to the start of the next week
                currentWeekStart = new Date(currentWeekEnd);
                currentWeekStart.setDate(currentWeekStart.getDate() + 1);

                weekCounter++;
              }

              return weeks;
            }

            // Example usage:
            const weekDates = getWeekDates(year, month);

            this.chartOptionsData = {
              colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
              xaxis: {
                categories: weekDates.reverse(),
              },
            };
            // this.chartOptionsData.xaxis.categories.push(
            //   "1 Week",
            //   "2 Week",
            //   "3 Week",
            //   "4 Week"
            // );
          } else if (this.revenue == "monthly_revenue") {
            this.seriesData = [
              { name: "Revenue", data: response.apidata.Monthly_Revenue },
            ];
            var monthName = new Array(
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec"
            );
            var months = [];
            var d = new Date();
            d.setDate(1);
            for (var i = 0; i <= 11; i++) {
              months.push(monthName[d.getMonth()]);
              d.setMonth(d.getMonth() - 1);
            }

            // months = months.reverse();
  
            this.chartOptionsData = {
              colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
              xaxis: {
                categories: months.reverse(),
              },
            };
            console.log(this.chartOptionsData);
          } else {
            this.seriesData = [
              { name: "Revenue", data: response.apidata.Yearly_Revenue },
            ];
            const currentYear = new Date().getFullYear();
            const lastFiveYears = [];

            for (let i = 0; i < 5; i++) {
              lastFiveYears.push(currentYear - i);
            }
            this.chartOptionsData = {
              colors: ["rgba(196, 181, 253, 1)", "#a78bfa"],
              xaxis: {
                categories: lastFiveYears.reverse(),
              },
            };
          }

          // this.rows.forEach((value) => {

          //   value.car_images = value.car_images
          //     ? JSON.parse(value.car_images)
          //     : "";
          // });

          this.loader = false;
        }
      } catch (error) {
        this.loader = false;
        console.error("Error fetching body types:", error);
      }
    },
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
.card-icon-bg .card-body .content {
  max-width: max-content !important;
}
</style>
