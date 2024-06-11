<template>
  <div class="main-content">
    <breadcumb :page="'TikTok'" :folder="'Ajans'" />

    <b-row>
      <b-col sm="12" md="12" xl="12" lg="12" class="mb-30">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-7">
              <div class="card-body text-nowrap">
                <h5 class="card-title mb-0">Congratulations, John! 🎉</h5>
                <p>
                  Thank you for being awesome and sharing our platform with
                  others! Below is your unique referral link:
                </p>

                <div
                  data-v-0307aa70=""
                  class="bg-white text-gray d-flex w-59"
                  style="overflow-wrap: anywhere"
                >
                  <a
                    data-v-0307aa70=""
                    href="https://temmuz.algofolks.com/app/sessions/affiliate"
                    target="_blank"
                    class="referral-link align-self-center"
                  >
                    https://temmuz.algofolks.com/app/sessions/affiliate</a
                  >
                  <p
                    class="px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end"
                    @click="copyUrl"
                  >
                    <i class="fa fa-clone" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-5 text-center text-sm-left d-none">
              <div class="card-body pb-0 px-0 px-md-4">
                <img
                  src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png"
                  height="140"
                  alt="view sales"
                />
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="6" xl="6" md="6" sm="6" class="">
        <b-card no-body title class="mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">INCOME</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$1000</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="yearAreaWidget.chartOptions"
                :series="yearAreaWidget.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6" xl="6" md="6" sm="6">
        <b-card no-body title class="mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">APPROVE</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$500</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="yearAreaWidget.chartOptions"
                :series="yearAreaWidget.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <!-- <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title class="mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">TRANSACTION</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$44,909</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidgetThree.chartOptions"
                :series="splineAreaWidgetThree.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="6" xl="3" md="6" sm="6">
        <b-card no-body title class="mb-30 o-hidden">
          <div class="ul-widget__chart-info">
            <h5 class="text-muted text-10">SALES</h5>
            <div class="ul-widget__chart-number">
              <h2 class="t-font-boldest">$500</h2>
              <small class="text-muted">46% compared to last year</small>
            </div>
          </div>
          <b-card-body class="ul-card__widget-chart">
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="150"
                :options="splineAreaWidgetFour.chartOptions"
                :series="splineAreaWidgetFour.series"
              />
            </div>
          </b-card-body>
        </b-card>
      </b-col> -->

      <!-- finance-summary -->
      <b-col xl="12" md="12" class="mb-30">
        <b-card no-body class="o-hidden">
          <b-card-header header-bg-variant="transparent">
            <b-row style="align-items: center">
              <b-col md="6">
                <div class="ul-card-widget__head-label">
                  <h5 class="card-title">Finance Summary</h5>
                </div>
              </b-col>
              <b-col md="6" class="text-md-right">
                <b-button variant="outline-primary">Summary View</b-button>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col md="6 " class="mb-4 mb-md-0">
                <h3 class="text-muted text-14 font-weight-500">
                  Final Commission Revenue
                </h3>
                <span class="text-muted text-18 font-weight-600">$790,420</span>
              </b-col>
              <b-col md="6" class="mb-4 mb-md-0">
                <h3 class="text-muted text-14 font-weight-500">
                  Final Commission Revenue
                </h3>
                <span class="text-muted text-18 font-weight-600"
                  >July 25,2019</span
                >
              </b-col>
            </b-row>
          </b-card-body>
          <div id="basicArea-chart" class="mt-2">
            <apexchart
              type="area"
              height="150"
              :options="yearAreaWidget.chartOptions"
              :series="yearAreaWidget.series"
            />
          </div>
        </b-card>
      </b-col>
      <!-- echart-pie -->
      <b-col xl="4" md="12" class="mb-30 d-none">
        <b-card title="Stacked Pie Chart" class="o-hidden">
          <apexchart
            type="polarArea"
            height="254"
            :options="dashboardFive.chartOptions"
            :series="dashboardFive.series"
          ></apexchart>
        </b-card>
      </b-col>

      <!-- list -->
      <b-col md="12" xl="8" class="mb-30 d-none">
        <b-card title class="wrapper o-hidden h-100">
          <vue-good-table
            :fixed-header="true"
            :columns="columns"
            styleClass="tableOne text-left vgt-table"
            row-style-class="text-left"
            :rows="rows"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'img'">
                <img
                  class="rounded"
                  :src="props.row.img"
                  style="width: 50px; height: 50px"
                  alt="corrupted img"
                />
              </span>
            </template>
          </vue-good-table>
        </b-card>
      </b-col>

      <b-col xl="4" md="6" class="mb-30 d-none">
        <div class="card o-hidden">
          <img
            class="card-img-top"
            src="@/assets/images/photo-wide-3.jpg"
            alt
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </b-col>

      <!-- mask -->
      <b-col md="6" xl="6" class="mb-30 d-none">
        <b-card bg-variant="defualt" text-variant="black">
          <div class="d-flex align-items-center mb-30">
            <i class="i-ID-Card text-22 mr-2"></i>
            <h5 class="card-title m-0">Card Information</h5>
          </div>

          <b-row>
            <b-col md="6">
              <p class="font-weight-400 mb-2">CPF</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##']"
                placeholder="999.999.999-99"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Zip Code</p>
              <the-mask
                class="form-control"
                :mask="['#####-###']"
                placeholder="99999-999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Phone</p>
              <the-mask
                class="form-control"
                :mask="['+# (###) ###-####']"
                placeholder="+9 (999) 999-9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Master Card</p>
              <the-mask
                class="form-control"
                :mask="['#### #### #### ####']"
                placeholder="9999 9999 9999 9999"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">Date</p>
              <the-mask
                class="form-control"
                :mask="['##/##/####']"
                placeholder="mm/dd/yy"
              />
            </b-col>
            <b-col md="6" class="mb-3">
              <p class="font-weight-400 mb-2">CPF/CNPJ</p>
              <the-mask
                class="form-control"
                :mask="['###.###.###-##', '##.###.###/####-##']"
                placeholder="99.999.999/9999-99"
              />
            </b-col>
          </b-row>
          <b-button variant="danger" class="float-right">Submit</b-button>
        </b-card>
      </b-col>
      <!-- Sales-stats-1 -->
      <b-col xl="6" md="6" class="mb-30 d-none">
        <b-card no-body title="Payment Form #2" class="o-hidden">
          <b-tabs pills card content-class="mt-3" fill>
            <b-tab active>
              <template slot="title">
                <i class="i-Credit-Card-2 text-16 mr-2 align-middle"></i> Credit
                Card
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="Full Name"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="card number"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top: 25px">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary " class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Paypal text-16 mr-2 align-middle"></i> Paypal
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="Full Name"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="card number"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        class
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top: 25px">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary" class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="i-Bank text-16 mr-2 align-middle"></i>Bank Transaction
              </template>

              <b-form>
                <b-form-group label="Full Name">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Male-21 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="Full Name"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Card Number" class="mt-4">
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input-group-prepend>
                      <span class="input-group-text" id="basic-addon1">
                        <i class="i-Credit-Card-2 text-18"></i>
                      </span>
                    </b-input-group-prepend>
                    <b-input placeholder="card number"></b-input>
                  </b-input-group>
                </b-form-group>

                <b-row class="mt-4">
                  <b-col md="4">
                    <b-form-group label="Expiration">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group style="margin-top: 25px">
                      <b-form-select
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group label="CVV">
                      <b-form-input></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button block variant="primary" class="mt-3"
                  >Confirm</b-button
                >
              </b-form>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
import moment from 'moment'
import { spark3, radialBar } from '@/data/apexChart'
import {
  splineAreaWidget,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
  splineAreaWidgetFour,
  dashboardFive
} from '@/data/widgetStatistics'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Dashboard v4'
  },
  props: {
    title: {
      type: String,
      default: 'Awesome Wizard'
    }
  },
  data () {
    return {
      columns: [],
      rows: [],
      loader: false,
      yearAreaWidget: {},
      isCopied: false,
      referralURL: 'https://temmuz.algofolks.com/app/setting/affiliate', // Replace with your actual referral URL
      selected: 'x',
      options: [
        { value: 'x', text: ' select an option' },
        { value: 'a', text: 'January' },
        { value: 'b', text: 'February' }
      ],
      splineAreaWidget,
      splineAreaWidgetData: {
        series: [
          {
            name: 'series1',
            data: [90, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [11, 90, 45, 32, 34, 52, 41]
          }
        ]
      },
      splineAreaWidgetTwo,
      splineAreaWidgetTwoData: {
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ]
      },
      splineAreaWidgetThree,
      splineAreaWidgetFour,
      dashboardFive,
      radialBar,
      sparkData: {
        series: [
          {
            name: 'series2',
            data: [
              47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,
              93, 53, 61, 27, 54, 43, 19, 46
            ]
          }
        ]
      },
      spark3,
      values: [30, 20],
      max: 100
    }
  },
  created () {
    this.getGraphData()
  },
  methods: {
    copyUrl () {
      const url = 'https://temmuz.algofolks.com/app/sessions/affiliate'
      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.$emit('notify', 'URL copied to clipboard!')
        })
        .catch(err => {
          console.error('Could not copy text: ', err)
        })
    },
    getGraphData () {
      this.loader = true

      this.$apiService
        .getCall(`user/creators-earnings-graph`)
        .then(res => {
          if (res.isError) {
            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          } else {
            var graphData = res.apidata.dates
            graphData = graphData.map(date =>
              moment(date).format('YYYY-MM-DDTHH:mm:ss')
            )

            // var dates = graphData;
            var diamondData = res.apidata.diamonds
            var earningData = res.apidata.earnings

            this.yearAreaWidget = {
              series: [
                {
                  name: 'Diamonds',
                  data: diamondData
                },
                {
                  name: 'Earnings',
                  data: earningData
                }
              ],

              chartOptions: {
                chart: {
                  width: '100%',
                  height: 100,
                  toolbar: {
                    show: false
                  },
                  sparkline: {
                    enabled: true
                  }
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'smooth'
                },
                legend: {
                  show: false
                },

                xaxis: {
                  type: 'datetime',
                  categories: graphData,
                  labels: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  }
                },
                yaxis: {
                  show: false
                },
                grid: {
                  show: false
                },
                tooltip: {
                  enabled: true,
                  x: {
                    format: 'dd/MM/yy HH:mm'
                  }
                },
                colors: ['#A855F7', '#4caf50'],
                stroke: {
                  curve: 'straight',
                  width: 1
                }
              }
            }
          }

          // console.log(res);

          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    },
    onComplete: function () {
      this.$swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },

    copyToClipboard () {
      navigator.clipboard.writeText(this.referralURL).then(
        () => {
          this.isCopied = true
        },
        err => {
          console.error('Could not copy text: ', err)
        }
      )
    },
    // for vue-good-table testing
    rowStyleClassFn (row) {
      return row.age > 18 ? 'green' : 'red'
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
.gull-border-none {
  border-bottom: none !important;
}
table.tableOne.vgt-table {
  border: none;
}
table.vgt-table td {
  padding: 8px;
}

.w-59 {
  width: 59% !important;
}
</style>
