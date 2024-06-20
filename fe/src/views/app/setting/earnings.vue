<template>
  <div class="main-content">
    <!-- <div class="font-weight-bold fa-2x text-light">Earning</div>
    <hr class="mt-1" /> -->
    <b-modal
      v-model="showAddModal"
      id="modal-add"
      size="md"
      title="Add Publisher"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Add Creators
      </label>
      <b-row class="px-3">
        <b-col md="12">
          <b-form-group label="Enter publisher name" label-for="input-title">
            <b-form-input
              v-model="publisherName"
              required
              placeholder="Enter name"
              style="height: 34px"
              type="text"
              @change="handelUserField"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-input
              v-model="phoneNumber"
              required
              placeholder="Phone number"
              style="height: 34px"
              type="number"
              @keydown="checkLength"
              id="input-phoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Agency center code" label-for="input-title">
            <b-form-input
              v-model="centerCode"
              required
              placeholder="Agency center code"
              style="height: 34px"
              type="number"
              @keydown="checkLengthCode"
              id="input-agency"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Select Images" label-for="input-images">
            <b-form-file
              v-model="images"
              @input="handleImageSelection"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
              accept=".png,.jpg,.jpeg"
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col md="6" class="justify-content-end d-flex align-items-center">
          <img
            v-if="uplodedImages"
            :src="this.uplodedImages"
            alt=""
            class="img-fluid"
            height="50"
            width="50"
          />
        </b-col>

        <!-- <b-form-group label="" label-for="input-description">
            <b-form-textarea
              v-model="description"
              required
              placeholder="Description"
              style="height: 60px"
              type="text"
              id="input-description"
            ></b-form-textarea>
          </b-form-group> -->

        <b-col>
          <div class="d-flex justify-content-end">
            <!-- <div class="spinner spinner-primary mr-3" v-if="loader"></div> -->
            <b-button v-if="!imgLoader" class="mb-2 mr-2" @click="closeModal()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="addPublisher()"
              >Add</b-button
            >
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      v-model="showAddModalEdit"
      id="modal-add"
      size="md"
      title="Add Publisher"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Edit publisher
      </label>
      <b-row class="px-3">
        <b-col md="12">
          <b-form-group label="Enter publisher name" label-for="input-title">
            <b-form-textarea
              disabled
              v-model="getpublisherName"
              required
              placeholder="Enter name"
              style="height: 34px"
              type="text"
              id="input-name"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-textarea
              v-model="getphoneNumber"
              required
              placeholder="Phone number"
              style="height: 34px"
              type="number"
              id="input-phoneNumber"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Agency center code" label-for="input-title">
            <b-form-textarea
              v-model="getcenterCode"
              required
              placeholder="Agency center code"
              style="height: 34px"
              type="number"
              id="input-agency"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Select Images" label-for="input-images">
            <b-form-file
              v-model="getImages"
              @input="handleImageSelection"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
              accept=".png,.jpg,.jpeg"
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          class="justify-content-end d-flex align-items-center py-2"
        >
          <img
            :src="this.uplodedImages"
            alt=""
            class="img-fluid"
            height="50"
            width="50"
          />
        </b-col>

        <!-- <b-form-group label="" label-for="input-description">
            <b-form-textarea
              v-model="description"
              required
              placeholder="Description"
              style="height: 60px"
              type="text"
              id="input-description"
            ></b-form-textarea>
          </b-form-group> -->

        <b-col>
          <div class="d-flex justify-content-end">
            <!-- <div class="spinner spinner-primary mr-3" v-if="loader"></div> -->
            <b-button
              v-if="!imgLoader"
              class="mb-2 mr-2"
              @click="closeModalEdit()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="editPublisher()"
              >Edit</b-button
            >
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-cancelReason"
      size="md"
      title="Reason for cancellation:"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <b-row class="p-3">
        <b-col md="12">
          <i
            class="fa fa-exclamation-triangle text-danger mb-3"
            aria-hidden="true"
          >
            Reason for cancellation:
          </i>
        </b-col>

        <b-col md="12">
          <b-form-group label="" label-for="input-2">
            <b-form-textarea
              v-model="cancelReasonText"
              required
              placeholder="Reason for cancellation"
              style="height: 100px"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <!-- <div class="spinner spinner-primary mr-3" v-if="updateloader"></div> -->
            <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class="mb-2"
              variant="primary ripple"
              @click="clickRejectButton()"
              >ok</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <div class="d-flex flex-column gap-5" style="gap: 13px">
      <div>
        <div class="">
          <div no-body class="">
            <div header-bg-variant="transparent">
              <b-row style="align-items: center">
                <div>
                  <div class="ul-card-widget__head-label">
                    <h5 class="card-title px-3 pb-2 mb-0">Earning Summary</h5>
                  </div>
                </div>
                <!-- <b-col md="6" class="text-md-right">
                  <b-button variant="outline-primary">Summary View</b-button>
                </b-col> -->
              </b-row>
            </div>
            <div>
              <b-row class="px-1">
                <!-- <b-col md="6 " class="mb-4 mb-md-0">
                  <h3 class="text-muted text-14 font-weight-500">
                  <i class="fa fa-diamond" aria-hidden="true"></i>  Diamonds Revenue
                  </h3>
                  <span class="text-muted text-18 font-weight-600"
                    > <i class="fa fa-diamond" aria-hidden="true"></i> {{totalDiamondData}}</span
                  >
                </b-col> -->

                <b-col md="4" sm="12">
                  <b-card
                    class="card-icon-bg card-icon-bg-primary mb-10 text-center"
                  >
                    <i class="i-Money-2"></i>
                    <div class="content">
                      <p class="text-muted mt-2 mb-0" style="width: 120px">
                        Diamonds Revenue
                      </p>
                      <p
                        class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
                      >
                        {{ totalDiamondData }}
                      </p>
                    </div>
                  </b-card>
                </b-col>
                <!-- <b-col md="6" class="mb-4 mb-md-0">
                  <h3 class="text-muted text-14 font-weight-500">
                    Earnings Revenue
                  </h3>
                  <span class="text-muted text-18 font-weight-600"
                    >${{ totalEarningData }}</span
                  >
                </b-col> -->

                <b-col md="4" sm="12">
                  <b-card
                    class="card-icon-bg card-icon-bg-primary mb-10 text-center"
                  >
                    <i class="i-Wallet"></i>
                    <div class="content">
                      <p class="text-muted mt-2 mb-0" style="width: 112px">
                        Earnings Revenue
                      </p>
                      <p
                        class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
                      >
                        $&nbsp;{{ totalEarningData }}
                      </p>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </div>
            <div v-if="showChart" id="basicArea-chart" class="mt-2">
              <apexchart
                type="area"
                height="160"
                :options="yearAreaWidget.chartOptions"
                :series="yearAreaWidget.series"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card pb-2">
        <div
          class="card-header d-flex flex-row justify-content-between"
          style="background-color: white"
        >
          <h4
            class="card-title"
            style="margin: 0px; background-color: white; color: #000000c4"
          >
            Filters
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <div class="heading-elements">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <li>
                <a data-action="collapse pe-auto" @click="toggleFlexDiv"
                  ><i
                    class="fa fa-chevron-circle-down"
                    aria-hidden="true"
                    style="cursor: pointer"
                  ></i
                ></a>
              </li>
              <li>
                <a data-action=" pe-auto" @click="clearFilters"
                  ><i
                    class="fa fa-refresh"
                    aria-hidden="true"
                    style="cursor: pointer"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <b-row class="w-100 px-3 pb-3">
          <b-col md="3">
            <label for="users-list-search">Search</label>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control"
                id="users-list-search"
                placeholder="Search..."
                style="
                  color: grey;
                  padding-bottom: 7px;
                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="searchTerm"
              />
            </fieldset>
          </b-col>
          <b-col md="3" class="col-sm-6 col-lg-3 d-flex flex-column">
            <label for="users-list-search">Select start date</label>

            <v2-datepicker
              class="for-date-picker"
              lang="en"
              ref="startDate"
              v-model="startDate"
              :picker-options="{
                disabledDate: time => time.getTime() > new Date().getTime()
              }"
              @change="changeStartDate"
              placeholder="Select Start date"
            ></v2-datepicker>
          </b-col>
          <b-col md="3" class="d-flex flex-column">
            <label for="users-list-search">Select end date</label>

            <v2-datepicker
              class="for-date-picker"
              lang="en"
              ref="endDate"
              v-model="endDate"
              :picker-options="{
                disabledDate: time => time.getTime() > new Date().getTime()
              }"
              @change="changeEndDate"
              placeholder="Select End date"
            ></v2-datepicker>
          </b-col>
        </b-row>

        <div
          v-if="showChart"
          class="col-12 col-sm-6 col-lg-3 paddingzero"
          style="padding-right: 0px"
        >
          <label for="users-list-verified">Select User</label>
          <fieldset class="form-group">
            <multiselect
              v-model="selectedName"
              placeholder="Select User"
              :options="[...allUsers]"
              :multiple="false"
              :limit="1"
              label="creator_inf"
            ></multiselect>
          </fieldset>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 paddingzero" style="display: none">
          <label for="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            v-model="startDate"
            class="form-control"
          />
        </div>

        <div class="col-12 col-sm-6 col-lg-3 paddingzero" style="display: none">
          <label for="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            v-model="endDate"
            class="form-control"
          />
        </div>
      </div>
    </div>

    <div class="d-flex flex-column gap-5 card" style="gap: 13px">
      <div class="card-body">
        <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :pagination-options="paginationOptions"
          styleClass="tableOne vgt-table"
          :rows="filteredRows"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'actions'">
              <div
                v-if="
                  role == 'user' &&
                  props.row.status != 'Approved' &&
                  props.row.status != 'Rejected'
                "
              >
                <span @click="clickEdit(props.row)" class="btn p-0"
                  ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
                ></span>

                <span @click="clickDelete(props.row)" class="btn pl-3"
                  ><i class="fa fa-trash" aria-hidden="true"></i
                ></span>
              </div>

              <div
                class="d-flex"
                v-else-if="
                  role == 'admin' &&
                  props.row.status != 'Approved' &&
                  props.row.status != 'Rejected'
                "
              >
                <div
                  class="badge badge-success border mr-2 bg-success text-white ul-cursor--pointer p-2"
                  @click="clickAccept(props.row._id)"
                >
                  Approve
                </div>
                <div
                  class="badge badge-danger border bg-danger text-white ul-cursor--pointer p-2"
                  @click="clickReject(props.row._id)"
                >
                  Reject
                </div>

                <!-- <div v-else>
                <span class="badge badge-warning ">{{ props.row.status }}</span>
              </div> -->
              </div>
              <div>
                <div v-if="props.row.status === 'Approved'">
                  <span class="badge badge-success">{{
                    props.row.status
                  }}</span>
                </div>
                <div v-else-if="props.row.status === 'Rejected'">
                  <span class="badge badge-danger">{{ props.row.status }}</span>
                </div>
              </div>
            </span>
            <span v-else-if="props.column.field === 'reason_show'">
              <div v-if="props.row.reason">{{ props.row.reason }}</div>
              <div v-else>......</div>
            </span>
            <span v-else-if="props.column.field === 'show_img'">
              <div>
                <img
                  :src="props.row.icon"
                  alt=""
                  :style="{
                    width: '50px',
                    height: '50px',
                    borderRadius: '197px'
                  }"
                />
              </div>
            </span>
          </template>
        </vue-good-table>
      </div>

      <!-- <div v-if="loader" class="loader">No data is available</div> -->
    </div>
  </div>
  <!-- <div class="spinner spinner-primary" v-if="loader" id="loader"></div> -->
</template>

<script>
import Multiselect from 'vue-multiselect'
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
  components: {
    // VueEditor,
    // VueDocumentEditor
    multiselect: Multiselect
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Earning'
  },
  props: {
    title: {
      type: String,
      default: 'Awesome Wizard'
    }
  },
  data () {
    return {
      selectedName: '',
      allUsers: [],
      startDate: '',
      endDate: '',
      selected: 'x',
      options: [
        { value: 'x', text: ' select an option' },
        { value: 'a', text: 'January' },
        { value: 'b', text: 'February' }
      ],
      splineAreaWidget,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,
      splineAreaWidgetFour,
      dashboardFive,
      spark3,
      yearAreaWidget: {},
      totalDiamondData: 0,
      totalEarningData: 0,
      sparkData: {
        // series: [
        //   {
        //     name: 'series2',
        //     data: [
        //       45, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,
        //       93, 53, 61, 27, 54, 43, 19, 46
        //     ]
        //   }
        // ]
      },
      // spark3: {
      //   series: [
      //     {
      //       name: 'series2',
      //       data: [
      //         47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,
      //         93, 53, 61, 27, 54, 43, 19, 46
      //       ]
      //     }
      //   ],

      //   chartOptions: {
      //     chart: {
      //       type: 'area',
      //       height: 160,
      //       sparkline: {
      //         enabled: true
      //       }
      //     },
      //     dataLabels: {
      //       enabled: false
      //     },

      //     stroke: {
      //       curve: 'straight',
      //       width: 1
      //     },
      //     fill: {
      //       opacity: 0.3
      //     },
      //     series: [
      //       {
      //         data: randomizeArray(sparklineData)
      //       }
      //     ],
      //     yaxis: {
      //       min: 0
      //     },
      //     colors: ['#A855F7']
      //   }
      // },

      values: [30, 20],
      max: 100,

      rows: [],
      flexDivDisplay: 'flex!important',
      startDate: '',
      endDate: '',
      searchTerm: '',
      filterStatus: '',
      faqs: [],
      role: '',
      showAddModal: false,
      showAddModalEdit: false,
      editFAQData: {
        id: null,
        title: '',
        description: '',
        category: 'Please Selected Category'
      },
      category: 'Please Selected Category',
      loader: false,
      imgLoader: false,
      centerCode: '',
      rejectedId: '',
      phoneNumber: '',
      publisherName: '',
      getcenterCode: '',
      getphoneNumber: '',
      getpublisherName: '',
      searchUser: [],
      getImages: null,
      cancelReasonText: '',
      user_id: '',
      updateId: '',
      getUserName: '',
      uplodedImages: '',
      images: null,
      isEdit: false,
      columns: [
        // {
        //   label: 'Icons',
        //   field: 'show_img'

        // },
        {
          label: 'Date',
          field: 'as_of_date',
          filterOptions: { enabled: true, placeholder: 'Search...' }
        },

        {
          label: 'TikTok username',
          field: 'creator_inf',
          filterOptions: {
            enabled: true,
            placeholder: 'TikTok username'
          }
        },
        {
          label: 'Valid days this month',
          field: 'valid_days_this_month',
          filterOptions: {
            enabled: true,
            placeholder: 'Search...'
          }
        },
        {
          label: 'Live duration this month',
          field: 'live_duration_this_month',
          filterOptions: { enabled: true, placeholder: 'Search...' }
        },

        {
          label: 'Diamonds this month',
          field: 'diamonds_this_month',
          filterOptions: {
            enabled: true,
            placeholder: 'Search...'
          }
        },
        {
          label: 'Earning',
          field: 'earning',
          filterOptions: {
            enabled: true,
            placeholder: 'Search...'
          }
        },

        {
          label: 'Achieved (%)',
          field: 'percentage_achieved',
          filterOptions: {
            enabled: true,
            placeholder: 'Search...'
          }
        }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'recordsPerPage', // Set pagination mode to 'recordsPerPage'
        perPageDropdown: [10, 20, 50], // Set options for number of records per page
        nextLabel: 'Next', // Custom label for the next button
        prevLabel: 'Previous' // Custom label for the previous button
      }
    }
  },
  // mounted () {
  //   this.clearFilters()
  // },
  computed: {
    //     isDataEmpty() {
    //       const { dates, diamonds, earnings } = this.yearAreaWidget;
    //       return dates.length === 0 && diamonds.length === 0 && earnings.length === 0;
    //     }
    // ,
    filteredRows () {
      const query = this.searchTerm.toLowerCase().trim()
      const selectName = this.selectedName

      return this.rows.filter(row => {
        // Check if each field matches the query
        const matchesQuery = query
          ? (row.creator_inf &&
              row.creator_inf.toLowerCase().includes(query)) ||
            (row.as_of_date && row.as_of_date.toLowerCase().includes(query)) ||
            (row.diamonds_this_month &&
              row.diamonds_this_month.toLowerCase().includes(query)) ||
            (row.valid_days_this_month &&
              row.valid_days_this_month.toLowerCase().includes(query)) ||
            (row.earning &&
              row.earning.toString().toLowerCase().includes(query)) ||
            (row.percentage_achieved &&
              row.percentage_achieved.toLowerCase().includes(query))
          : true

        // Check if the selected name matches the creator_inf
        const matchName = selectName
          ? row.creator_inf === selectName.creator_inf
          : true
        const itemDate = row.createdAt
        const matchesDate =
          (this.startDate ? itemDate >= this.startDate : true) &&
          (this.endDate ? itemDate <= this.endDate + 1 : true)

        // Return true if both conditions are met
        return matchesQuery && matchName && matchesDate
      })
    },

    showChart () {
      return this.totalEarningData != 0.0
    },
    //         isDataEmpty() {
    //       const { dates, diamonds, earnings } = this.yearAreaWidget;
    //       return dates.length === 0 && diamonds.length === 0 && earnings.length === 0;
    //     }
    // ,
    containerClasses () {
      return {
        'large-container': this.isLarge,
        'important-container': this.isImportant
      }
    }
  },
  created () {
    this.user_id = localStorage.getItem('user_id')
    this.role = localStorage.getItem('role')
    this.getEarningData()
    this.getGraphData()
  },
  methods: {
    // handleChange (user) {
    //   this.selectedUserId = user._id

    // },

    toggleFlexDiv () {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
    },
    getGraphData () {
      this.loader = true
      const user_id = localStorage.getItem('user_id')
      const userRole = localStorage.getItem('role')
      let requestBody = {}

      if (userRole === 'user') {
        requestBody = {
          _id: user_id
        }
      }

      this.$apiService
        .postCall(`user/creators-earnings-graph`, requestBody)
        .then(res => {
          if (res.isError) {
            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          } else {
            var graphData = res.apidata.dates.map(date =>
              moment(date).format('YYYY-MM-DDTHH:mm:ss')
            )

            var diamondData = res.apidata.diamonds
            var earningData = res.apidata.earnings

            this.totalDiamondData = diamondData.reduce(
              (acc, current) => acc + Number(current),
              0
            )
            this.totalDiamondData = this.totalDiamondData.toFixed(2)

            this.totalEarningData = earningData.reduce(
              (acc, current) => acc + current,
              0
            )
            this.totalEarningData = this.totalEarningData.toFixed(2)
            console.log(this.totalEarningData)

            this.sparkData = {
              series: [
                {
                  name: 'Diamonds',
                  data: diamondData
                }
              ]
            }

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

          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    },

    //     async getGraphData() {
    //       debugger
    //   try {
    //     const user_id = localStorage.getItem('user_id')
    //     this.role = localStorage.getItem('role')
    //     var req = {
    //           _id: user_id
    //         }

    //     const response = await this.$apiService.postCall(
    //       `getcreators-earnings-graph`,req
    //     );
    //     console.log(req)

    //     if (response.isError) {

    //         this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
    //     }  else {
    //             var graphData = res.apidata.dates
    //             graphData = graphData.map(date =>
    //               moment(date).format('YYYY-MM-DDTHH:mm:ss')
    //             )
    //             var diamondData = res.apidata.diamonds;
    //             var earningData = res.apidata.earnings;
    //              diamondData.forEach((e) => {
    //               this.totalDiamondData += Number(e);
    //              });
    //              this.totalDiamondData = this.totalDiamondData.toFixed(2);
    //             earningData.forEach((e) => {
    //               this.totalEarningData += e;
    //             });
    //              this.totalEarningData = this.totalEarningData.toFixed(2);
    //             this.sparkData = {
    //               series: [
    //                 {
    //                   name: 'Diamonds',
    //                   data: diamondData
    //                 }
    //               ]
    //             };
    //             this.yearAreaWidget = {
    //               series: [
    //                 {
    //                   name: 'Diamonds',
    //                   data: diamondData
    //                 },
    //                 {
    //                   name: 'Earnings',
    //                   data: earningData
    //                 }
    //               ],

    //               chartOptions: {
    //                 chart: {
    //                   width: '100%',
    //                   height: 100,
    //                   toolbar: {
    //                     show: false
    //                   },
    //                   sparkline: {
    //                     enabled: true
    //                   }
    //                 },
    //                 dataLabels: {
    //                   enabled: false
    //                 },
    //                 stroke: {
    //                   curve: 'smooth'
    //                 },
    //                 legend: {
    //                   show: false
    //                 },

    //                 xaxis: {
    //                   type: 'datetime',
    //                   categories: graphData,
    //                   labels: {
    //                     show: false
    //                   },
    //                   axisTicks: {
    //                     show: false
    //                   },
    //                   axisBorder: {
    //                     show: false
    //                   }
    //                 },
    //                 yaxis: {
    //                   show: false
    //                 },
    //                 grid: {
    //                   show: false
    //                 },
    //                 tooltip: {
    //                   enabled: true,
    //                   x: {
    //                     format: 'dd/MM/yy HH:mm'
    //                   }
    //                 },
    //                 colors: ['#A855F7', '#4caf50'],
    //                 stroke: {
    //                   curve: 'straight',
    //                   width: 1
    //                 }
    //               }
    //             }
    //           }
    //   } catch (error) {
    //     console.log(error)
    //     this.$toaster.makeToast('warning', 'Error: Server Error');
    //     console.error('Error deleting FAQ:', error);
    //   } finally {
    //     this.loader = false;
    //   }
    // },

    onSearchTermChange (event) {
      this.searchTerm = event.target.value
      this.filterData()
    },
    onStatusChange (event) {
      this.filterStatus = event.target.value
      this.filterData()
    },
    clearFilters () {
      this.searchTerm = ''
      this.filterStatus = ''
      this.selectedName = ''
      this.getEarningData()
    },
    onSearchTermChange (event) {
      this.searchTerm = event.target.value
      this.filterData()
    },
    onStatusChange (event) {
      this.filterStatus = event.target.value
      this.filterData()
    },
    checkLength (event) {
      if (this.phoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    clickCancle () {
      this.$bvModal.hide('modal-cancelReason')
    },
    checkLengthCode (event) {
      if (this.centerCode.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    handelUserField () {
      this.searchUser = this.faqs.filter(user =>
        user.user_name.toLowerCase().includes(this.publisherName.toLowerCase())
      )
    },
    async fetchUser () {
      this.loader = true

      try {
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall(`auth/user/${this.user_id}`)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.loader = false
          this.getUserName = response.apidata.data.user_name
        }
      } catch (error) {
        this.loader = false
        console.error(error)
        this.$toaster.makeToast(
          'warning',
          'An error occurred while fetching the user'
        )
      }
    },
    getEarningData () {
      const user_id = localStorage.getItem('user_id')
      const userRole = localStorage.getItem('role')
      let requestBody = {}

      if (userRole === 'user') {
        requestBody = {
          _id: user_id
        }
      }
      this.loader = true
      this.$apiService
        .postCall(`user/creators-earnings`, requestBody)
        .then(response => {
          this.loader = false
          if (response.isError) {
            // this.$toaster.makeToast('warning', 'Error fetching earning data')
            console.log('Error fetching earning data')
          }
          // else if (response.apidata.data === 'User do not have Creators') {
          //   this.$toaster.makeToast('warning', response.apidata.data)
          // }
          else {
            const userData = response.apidata.data
            userData.forEach(e => {
              e.as_of_date = moment(e.as_of_date).format('DD MMM YYYY')
            })
            this.rows = userData
            console.log(userData)
            this.allUsers = userData
          }
        })
        .catch(error => {
          this.loader = false
          console.error('Error fetching user data:', error)
          // this.$toaster.makeToast('warning', 'Error fetching earning data')
        })
    },

    gethandleImageSelection () {},
    async handleImageSelection () {
      this.imgLoader = true

      try {
        const formData = new FormData()
        if (this.images) {
          formData.append('image', this.images)
        }
        if (this.getImages) {
          formData.append('image', this.getImages)
        }

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .postCall('util/image/', formData)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.imgLoader = false
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.imgLoader = false
          this.uplodedImages = response.apidata.url
          this.$toaster.makeToast('success', 'Image upload successfully')
        }
      } catch (error) {
        this.imgLoader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // confirm.log(error)
      }
    },

    truncateDescription (description) {
      const words = description.split(' ')
      if (words.length > 13) {
        return words.slice(0, 13).join(' ') + '...'
      } else {
        return description
      }
    },

    async clickAccept (id) {
      try {
        var req = {
          status: 'Approved'
        }

        const res = await this.$apiService.postCall(
          `publisher/update-publisher-status/${id}`,
          req
        )

        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.loader = false
          this.$toaster.makeToast('success', 'Status Approved successfully')
          this.fetchPublisher()
        }
      } catch (error) {
        this.loader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
      }
    },
    async clickReject (id) {
      this.$bvModal.show('modal-cancelReason')
      this.rejectedId = id
    },

    async addPublisher () {
      if (
        !this.images ||
        !this.phoneNumber ||
        !this.centerCode ||
        !this.publisherName
      ) {
        this.$toaster.makeToast(
          'warning',
          'Please fill in all the required fields'
        )
        setTimeout(() => (this.errorMessage = ''), 2000)
        return
      }

      if (this.searchUser.length > 0) {
        this.$toaster.makeToast('warning', 'Publisher Name already exist')
      } else {
        this.loader = true
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            user_name: this.publisherName,
            contact_number: this.phoneNumber,
            agency_center_code: this.centerCode,
            icon: this.uplodedImages,
            // icon: 'https://tiktok.algofolks.com/download.png',
            user_id: this.user_id
          }

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall(
            'publisher/create/',
            requestData
          )

          if (res.error) {
            this.loader = false
            this.$toaster.makeToast('warning', res.message)
          } else {
            this.fetchPublisher()
            this.isEdit = false
            this.showAddModal = false
            this.loader = false
            ;(this.publisherName = ''),
              (this.centerCode = ''),
              (this.phoneNumber = ''),
              this.$toaster.makeToast('success', 'Data added successfully')
          }
        } catch (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: Server Error')
          // console.error(error)
        }
      }
    },
    async editPublisher () {
      this.loader = true
      try {
        //const imageUrls = await this.uploadImages();
        let requestData = {
          // user_name: this.publisherName,
          contact_number: this.getphoneNumber,
          agency_center_code: this.getcenterCode,
          icon: this.uplodedImages
          // userId: this.user_id
        }

        // Assuming you want to make a POST request
        const res = await this.$apiService.postCall(
          `publisher/update/${this.updateId}`,
          requestData
        )

        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.fetchPublisher()

          this.closeModalEdit()

          this.loader = false
          this.$toaster.makeToast('success', 'Data update successfully')
        }
      } catch (error) {
        this.loader = false
        // console.error(error)
        this.$toaster.makeToast('warning', 'Error: Server Error')
      }
    },
    clickEdit (data) {
      this.updateId = data._id
      this.getcenterCode = data.agency_center_code
      this.getphoneNumber = data.contact_number
      this.getpublisherName = data.user_name
      this.images = data.icon
      this.uplodedImages = data.icon

      this.showAddModalEdit = true
    },

    clickRejectButton () {
      if (this.cancelReasonText && this.cancelReasonText.length >= 10) {
        this.deletePublisher()
      } else {
        this.$toaster.makeToast(
          'warning',
          'Please enter a cancel reason with at least 10 characters'
        )
      }
    },
    async deletePublisher () {
      this.loader = true
      try {
        var req = {
          status: 'Rejected',
          reason: this.cancelReasonText
        }

        const res = await this.$apiService.postCall(
          `publisher/update-publisher-status/${this.rejectedId}`,
          req
        )

        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.loader = false
          this.$toaster.makeToast('success', 'Status Rejected successfully')
          this.$bvModal.hide('modal-cancelReason')
          this.fetchPublisher()
        }
      } catch (error) {
        this.$bvModal.hide('modal-cancelReason')
        this.loader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // console.error(error)
      }
    },
    async clickDelete (data) {
      try {
        // Show confirmation dialog
        const result = await this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })

        // If user confirms deletion
        if (result.value) {
          const response = await this.$apiService.postCall(
            `publisher/delete/${data._id}`
          )

          if (!response.isError) {
            this.loader = false
            this.fetchPublisher()
            this.$toaster.makeToast(
              'success',
              'Your Publisher has been deleted'
            )
            this.loader = false
          } else {
            this.$toaster.makeToast('warning', 'Failed to delete publisher ')
          }
        } else {
          this.loader = false
          // User canceled the deletion, do nothing or show a message
        }
      } catch (error) {
        this.$toaster.makeToast('warning', 'Error: Server Error')
        this.loader = false
        console.error('Error deleting FAQ:', error)
      }
    },
    closeModal () {
      this.isEdit = false
      this.showAddModal = false // Set showAddModal to false to hide the modal
    },
    closeModalEdit () {
      this.showAddModalEdit = false // Set showAddModal to false to hide the modal
    },

    addCssRule () {
      const style = document.createElement('style')
      style.type = 'text/css'
      const cssRule =
        '#modal-add .modal-content,' +
        '#modal-add___BV_modal_content_ .modal-content {' +
        '  padding: 1em !important;' +
        '}'

      style.appendChild(document.createTextNode(cssRule))
      document.head.appendChild(style)
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.multiselect__tags {
  min-height: 34px !important;
  display: block !important;
  padding: 5px 3px 0px 8px !important;
  border-radius: 5px !important;
  border: 1px solid #d8d8d8 !important;
  background: #fff;
  font-size: 14px !important;
}

/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
}
imgloader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}

/* Modal content */

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
/* 
#modal-add___BV_modal_content_ {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 331%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(13, 1, 25, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  right: 0px !important;
} */

.mt-4 {
  margin-top: 26px !important;
}

.fa-chevron-circle-down {
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}

.fa-refresh {
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}

.fa-times {
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}

@media only screen and (max-width: 600px) {
  .paddingzero {
    padding-right: 0px;
    padding-left: 0px;
  }
}

.d-none {
  display: none;
}
</style>
