<template>
  <div class="main-content">
    <!-- <div class="font-weight-bold fa-2x text-light">Payment Request</div>
    <hr class="mt-1" /> -->
    <b-modal
      v-model="modalVisible"
      id="modal-add"
      size="md"
      title="Create Payment"
      style="height: auto"
      hide-footer
      hide-header
      centered
      ref="withdrawModal"
    >
      <b-row class="">
        <b-col>
          <label style="font-size: 20px"> Withdraw </label>
        </b-col>
        <b-col md="12" class="d-none">
          <b-form-group label="User Name" label-for="input-user-name">
            <b-form-input
              v-model="userName"
              required
              placeholder="User Name"
              style="height: 34px"
              type="text"
              id="input-user-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Amount" label-for="input-amount">
            <b-form-input
              v-model="amount"
              required
              placeholder="Amount"
              style="height: 34px"
              type="number"
       
              id="input-amount"
            ></b-form-input>
          </b-form-group>
          <!-- @keydown="validateInputAmount" -->
        </b-col>
        <b-col md="12" class="d-none">
          <b-form-group label="Status" label-for="input-status">
            <b-form-input
              v-model="status"
              required
              placeholder="Status"
              style="height: 34px"
              type="text"
              id="input-status"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Notes" label-for="input-notes">
            <b-form-textarea
              v-model="notes"
              required
              placeholder="Notes"
              style="height: 44px"
              id="input-notes"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12" class="text-right">
          <div>
            <button
              @click="createUser"
              :disabled="isSubmitting"
              class="btn btn-primary mr-2"
            >
              Submit
            </button>
            <b-button v-if="!imgLoader" class="" @click="closeModal()">
              Close
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <!-- <div class="wrapper"> -->
    <b-modal id="modal-lg" size="lg" title="Documents" style="height: 100px">
      <!-- <div style="position: absolute; right: 10px" class="dropdown">
              <i class="fa fa-bars fa-2x" aria-hidden="true">
                <div class="dropdown-content">
                  <a :href="pdfsrc"
                    ><span
                      ><i class="fa fa-download" style="margin-right: 0.3rem"></i
                      >Download</span
                    ></a
                  >
                </div>
              </i>
      </div>-->

      <b-row>
        <b-col md="6">
          <h5 style="font-weight: 800; font-size: 18px">Aadhar Card</h5>
        </b-col>
        <!-- <b-col><b-button @click="clickDownload">download</b-button></b-col> -->
      </b-row>
      <b-row class="my-4" v-if="aadharFront">
        <b-col md="6">
          <a download :href="aadharFront" title="aadharFront" target="_blank">
            <img
              :src="aadharFront"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>

        <b-col md="6">
          <a download :href="aadharBack" title="aadharBack" target="_blank">
            <img
              v-if="aadharBack"
              :src="aadharBack"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5 style="font-weight: 800; font-size: 18px">Driving Licence</h5>
        </b-col>
      </b-row>
      <b-row class="my-4" v-if="divinglicense">
        <b-col md="6">
          <a
            download
            :href="divinglicense"
            title="divinglicense"
            target="_blank"
          >
            <img
              v-if="divinglicense"
              :src="divinglicense"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
        <b-col md="6">
          <a
            download
            :href="divinglicenseBack"
            title="divinglicenseBack"
            target="_blank"
          >
            <img
              v-if="divinglicenseBack"
              :src="divinglicenseBack"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5 style="font-weight: 800; font-size: 18px">Passport</h5>
        </b-col>
      </b-row>
      <b-row class="my-4" v-if="passport">
        <b-col md="6">
          <a download :href="passport" title="passport" target="_blank">
            <img
              v-if="passport"
              :src="passport"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
        <b-col md="6">
          <a download :href="passportBack" title="passportBack" target="_blank">
            <img
              v-if="passportBack"
              :src="passportBack"
              style="max-height: 120px !important; width: auto"
            />
          </a>
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
      <b-row class="">
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
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button class=" mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class=""
              variant="primary ripple"
              @click="clickRejectButton()"
              >ok</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <div class="d-flex flex-row justify-content-between pb-2 d-none">
      <b-col
        class="d-none"
        md="3"
        style="
      padding-right: 0px !important;
      padding-left: 0px !important;
      clas
  "
      >
        <multiselect
          @input="handleChange"
          v-model="selected"
          placeholder="Select users"
          :options="[...allUsers]"
          :multiple="false"
          :limit="1"
        ></multiselect>
      </b-col>
      <div class="for-gap d-none">
        <button @click="clearFilters" class="btn btn-primary">
          Clear Filter
        </button>
      </div>
    </div>

    <div class="pb-2">
      <div>
        <div v-if="isAdmin">
          <div class="card">
            <div
              class="card-header d-flex flex-row justify-content-between flex-wrap"
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
                    <a data-action="collapse pe-auto" @click="toggleFlexDiv">
                      <i
                        class="fa fa-chevron-circle-down"
                        aria-hidden="true"
                        style="cursor: pointer"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a data-action=" pe-auto" @click="clearFilters">
                      <i
                        class="fa fa-refresh"
                        aria-hidden="true"
                        style="cursor: pointer"
                      ></i>
                    </a>
                  </li>
                  <!-- <li><a data-action="close pe-auto"><i class="fa fa-times" aria-hidden="true" style="
      cursor: pointer;
              "></i></a></li>-->
                </ul>
              </div>
            </div>

            <div
              class="d-flex flex-row card-body flex-wrap gap-between"
              :style="{ display: flexDivDisplay }"
            >
              <div class="row w-100">
                <div class="col-12 col-sm-6 col-lg-3 pr-0">
                  <label for="users-list-search">User Name</label>
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
                </div>
                <div class="col-12 col-sm-6 col-lg-3 pr-0">
                  <label for="users-list-status">Status</label>
                  <fieldset class="form-group">
                    <select
                      v-model="selectedStatus"
                      class="form-control"
                      id="users-list-status"
                      style="
                        color: grey;
                        padding-bottom: 7px;
                        border: 1px solid rgba(128, 128, 128, 0.32) !important;
                        background-color: rgb(135 131 131 / 0%);
                      "
                    >
                      <option value>All</option>
                      <option value="Approved">Approved</option>
                      <option value="Reject">Reject</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </fieldset>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 ml-3 px-0">
                  <label for="users-list-verified">Amount</label>
                  <fieldset class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="users-list-amount"
                      placeholder="Search amount"
                      style="
                        color: grey;
                        padding-bottom: 7px;
                        border: 1px solid rgba(128, 128, 128, 0.32) !important;
                        background-color: rgb(135 131 131 / 0%);
                      "
                      v-model="searchAmount"
                    />
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="card">
            <div class="d-flex align-items-end row">
              <div class="col-7">
                <div class="card-body text-nowrap">
                  <h5 class="card-title mb-0"> Congratulations {{ this.loginUserName }}! 🎉</h5>
                  <p class="">Best seller of the month</p>
                  <h4 class="text-primary mb-1">$&nbsp;{{totalWithDraw}}</h4>
                  <a
                    class="btn btn-primary waves-effect waves-light"
                    style="color: white; padding-top: 3px; padding-bottom: 3px"
                    @click="openWithdrawModal"
                    >Withdraw</a
                  >
                </div>
              </div>
              <div class="col-5 text-center text-sm-left">
                <div class="card-body pb-0 px-0 px-md-4">
                  <img
                    class="sizeImage"
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png"
                    height="140"
                    alt="view sales"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="card">
      <div
        class="card-header d-flex flex-row justify-content-between"
        style="background-color: white"
      >
        <h4
          class="card-title"
          style="margin: 0px; background-color: white; color: #000000c4"
        >
          Payment
        </h4>
        <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
        <div class="heading-elements">
          <ul
            class="list-inline mb-0 d-flex flex-row justify-content-around"
            style="gap: 9px"
          >
            <button
              v-if="isAdmin === 'admin'"
              @click="showAddModal = true"
              class="btn btn-primary mb-3"
              style="
                padding-top: 2px;
                padding-bottom: 2px;
                background: white;
                color: #000000a8;
                border: 1px solid gray;
              "
            >
              Add New
            </button>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <vue-good-table
          :columns="visibleColumns"
          :line-numbers="false"
          :pagination-options="paginationOptions"
          styleClass="tableOne vgt-table"
          :rows="filteredRows"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'full_name'">
              <div>{{ props.row.full_name ? props.row.full_name : '' }}</div>
            </span>
            <span v-else-if="props.column.field === 'request_date'">
              <div>{{ (props.row.request_date) }}</div>
            </span>

            <span v-else-if="props.column.field === 'amount'">
              <div>${{ props.row.amount }}</div>
            </span>
            <span v-else-if="props.column.field === 'notes'">
              <div>{{ props.row.notes }}</div>
            </span>
            <span v-else-if="props.column.field === 'reason'">
              <div>{{ props.row.reason }}</div>
            </span>
            <span v-else-if="props.column.field === 'action'">
              <div
                v-if="
                  role == 'user' &&
                  props.row.status != 'Approved' &&
                  props.row.status != 'Canceled'
                "
              >
                <!-- <div
                  class="badge badge-success"
                  @click="clickPaid(props.row._id)"
                >
                  Paid
                </div> -->
              </div>

              <div
                class="d-flex"
                v-else-if="
                  role == 'admin' &&
                  props.row.status != 'Paid' &&
                  props.row.status != 'Reject'
                "
              >
                <div
                  class="badge border mr-2 bg-success text-white ul-cursor--pointer p-2"
                  @click="clickAccept(props.row._id)"
                >
                  Approve
                </div>
                <div
                  class="badge border bg-danger text-white ul-cursor--pointer p-2"
                  @click="clickReject(props.row._id)"
                >
                  Reject
                </div>

                <!-- <div v-else>
                <span class="badge badge-warning ">{{ props.row.status }}</span>
              </div> -->
              </div>
              <div>
                <div v-if="props.row.status === 'Paid'">
                  <div
                    class="badge badge-success"
                    @click="clickPaid(props.row._id)"
                  >
                    Paid
                  </div>
                </div>
                <div v-else-if="props.row.status === 'Reject'">
                  <span class="badge badge-danger">{{ props.row.status }}</span>
                </div>
              </div>
            </span>
            <span v-else-if="props.column.field === 'status'">
              <div>
                <div
                  v-if="props.row.status === 'Paid'"
                  class="badge badge-success"
                >
                  Paid
                </div>
                <div
                  v-else-if="props.row.status === 'Reject'"
                  class="badge badge-danger"
                >
                  Reject
                </div>
                <div
                  v-else-if="props.row.status === 'Pending'"
                  class="badge badge-yellow"
                >
                  Pending
                </div>

                <div v-else>{{ props.row.status }}</div>
              </div>
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import message from '../../../message'
import Multiselect from 'vue-multiselect'

// import { VueEditor } from "vue2-editor";
// import VueDocumentEditor from 'vue-document-editor'
export default {
  metaInfo: {
    title: 'Payment'
  },
  components: {
    // VueEditor,
    // VueDocumentEditor
    multiselect: Multiselect
  },

  data () {
    return {
      cancelReasonText: '',
      selectedStatus: '',
      searchAmount: '',
      searchTerm: '',
      totalWithDraw:0,
      isSubmitting: false,
      pageReloaded: false,
      modalVisible: false,
      logo: require('@/assets/images/faces/17.jpg'),
      use_id: null,
      matchUser: '',
      allUsers: [],
      role: '',
      selected: null,
      aadharFront: null,
      aadharBack: null,
      divinglicense: null,
      divinglicenseBack: null,
      passportBack: null,
      passport: null,
      isView: false,
      // userBalance: "",
      // referralBalance: "",
      // totalBalance: "",
      // securityBalance: "",
      isModalOpen: false,
      columnsForAdmin: [
        {
          label: 'User Name',
          field: 'full_name',
          filterOptions: {
            enabled: true,
            placeholder: 'User Name'
          }
        },
        {
          label: 'Request Date',
          field: 'request_date',
          filterOptions: {
            enabled: true,
            placeholder: 'Request Date'
          }
        },
        {
          label: 'Amount',
          field: 'amount',
          filterOptions: {
            enabled: true,
            placeholder: 'Amount'
          }
        },
        // {
        //   label: 'Status',
        //   field: 'status',
        //   filterOptions: {
        //     enabled: true,
        //     placeholder: 'Status'
        //   }
        // },
        {
          label: 'Notes',
          field: 'notes',
          filterOptions: {
            enabled: true,
            placeholder: 'Notes'
          }
        },
        {
          label: 'Reason',
          field: 'reason',
          filterOptions: {
            enabled: true,
            placeholder: 'reason'
          }
        },
        {
          label: 'Action',
          field: 'action'
        }
      ],
      columnsForRegularUser: [
        {
          label: 'Request Date',
          field: 'request_date',
          filterOptions: {
            enabled: true,
            placeholder: 'Request Date'
          }
        },
        {
          label: 'Amount',
          field: 'amount',
          filterOptions: {
            enabled: true,
            placeholder: 'Amount'
          }
        },

        {
          label: 'Notes',
          field: 'notes',
          filterOptions: {
            enabled: true,
            placeholder: 'Notes'
          }
        },
        
        {
          label: 'Reason',
          field: 'reason',
          filterOptions: {
            enabled: true,
            placeholder: 'reason'
          }
        },
        {
          label: 'Status',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Status'
          }
        },
        // {
        //   label: "Action",
        //   field: "action"
        // }
      ],

      rows: [],
      originalRows: [],
      form: {
        templateId: '',
        name: '',
        content: ''
      },
      generateIDloader: false,
      submitloader: false,
      isEdit: false,
      loader: false,
      isHide: false,
      flexDivDisplay: 'flex!important',
      matchUser: '',

      name: '',
      contact_number: '',
      email: '',

      userName: '', // Initialize userName variable
      amount: '',
      status: '',
      notes: '',
      UserID: '',
      rejectedId:'',

      filteredFaqs: [],
      loginUserName:"",
      paginationOptions: {
        enabled: true,
        mode: 'recordsPerPage',
        perPageDropdown: [10, 20, 50],
        nextLabel: 'Next',
        prevLabel: 'Previous'
      }
    }
  },

  computed: {
    filteredRows () {
      const query = this.searchTerm.toLowerCase().trim()
      const amount_data = this.searchAmount.trim()
      const select_status = this.selectedStatus

      return this.rows.filter(row => {
        const matchesQuery = query
          ? row.full_name && row.full_name.toLowerCase().includes(query)
          : true
        const matchesStatus = select_status
          ? row.status === select_status
          : true
        const matchesAmount = amount_data
          ? row.amount.toString().includes(amount_data)
          : true

        return matchesQuery && matchesStatus && matchesAmount
      })
    },

       isAdmin () {
      const userRole = localStorage.getItem('role')
      this.UserID = localStorage.getItem('user_id')
      return userRole === 'admin'
    },
    visibleColumns () {
      return this.isAdmin ? this.columnsForAdmin : this.columnsForRegularUser
    }
  },
  created () {
    this.getProfileDetails()
    this.getAllUsers()
    this.user_id = localStorage.getItem('user_id')
    this.role = localStorage.getItem('role')
    // this.role = parsedUser.data.role;
    this.originalRows = [...this.rows]
  },
  methods: {
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
    formatDate (dateString) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      return new Date(dateString).toLocaleDateString(undefined, options)
    },
    async clickAccept (id) {
      this.loader = true
      try {
        var req = {
          status: 'Paid'
        }

        const res = await this.$apiService.postCall(
          `transition/update-payment-status/${id}`,
          req
        )

        this.loader = false
        this.$toaster.makeToast(
          'success',
          ' Payment status Approved successfully'
        )
        this.getAllUsers()
      } catch (error) {
        this.loader = false
        // this.$toaster.makeToast('warning', 'Error: Server Error')
        console.error(error)
      }
    },
    async clickReject (id) {
      this.$bvModal.show('modal-cancelReason')
      this.rejectedId = id
    },
    async deletePublisher (id) {
   
      this.loader = true
      try {
        var req = {
          status: 'Reject',
          reason: this.cancelReasonText
        }

        const res = await this.$apiService.postCall(
          `transition/update-payment-status/${ this.rejectedId}`,
          req
        )

        this.loader = false
        this.$toaster.makeToast(
          'success',
          ' Payment status Rejected successfully'
        )
        this.$bvModal.hide('modal-cancelReason')
        this.cancelReasonText = "";
        this.getAllUsers()
      } catch (error) {
        this.loader = false
       this.$toaster.makeToast(error)
       this.$bvModal.hide('modal-cancelReason')
      }
    },

    clickCancle () {
      this.cancelReasonText ='';
      this.$bvModal.hide('modal-show-referralUrl')
      this.$bvModal.hide('modal-cancelReason')
    },

    getAllUsers () {
      this.loader = true
      this.UserID = localStorage.getItem('user_id')
      this.role = localStorage.getItem('role')
      let url = ''

      if (this.role == 'admin') {
        this.loader = true
        url = 'user/all-payments'
        this.$apiService.getCall(url).then(response => {
          if (response.error) {
            this.loader = false
            this.$toaster.makeToast('warning', 'Error fetching payment data')
          } else {
            this.loader = false
            const paymentData = response.apidata
            paymentData.forEach(value => {
              value.full_name = value.user_id
                ? value.user_id.name + ' ' + value.user_id.surname
                : ''
            })
            this.rows = paymentData;

paymentData.forEach((e) => {
  // Format the request_date
  e.request_date = moment(e.request_date).format("DD MMM YYYY h:mm A");

  if (e.status === "Approved") {
    e.status = "Paid";
  }
});
console.log("paymentData",paymentData)
this.rows = paymentData;


          }
        })
        this.rows = paymentData
          .catch(error => {
            console.error('Error fetching user data:', error)
            this.$toaster.makeToast('error', 'Error fetching payment data')
          })
          .finally(() => {
            this.loader = false // Set loader to false regardless of success or failure
          })
      } else {

        this.loader = true

        url = 'transition/payment_user'
        const user = {
          user_id: this.UserID
        }
        this.$apiService

          .postCall(url, user)

          .then(response => {
            if (response.isError) {
              this.$toaster.makeToast('warning', 'Error fetching payment data')
              this.loader = false
            } else if (response.apidata.msg == 'No Record Found') {
              // this.$toaster.makeToast('warning', response.apidata.msg)
              console.log("No Record Found")
              this.loader = false
            } else {
              const userData = response.apidata.data
              this.rows = userData
              this.totalWithDraw = response.apidata.total_withdraw;
              this.rows = userData


userData.forEach((e) => {
// Format the request_date
e.request_date = moment(e.request_date).format("DD MMM YYYY h:mm A");

if (e.status === "Approved") {
e.status = "Paid";
}
});
console.log("paymentData",userData)
this.rows = userData;




              this.loader = false
            }
          })

          .catch(error => {
            console.error('Error fetching user data:', error)
            this.$toaster.makeToast('error', 'Error fetching payment data')
            this.loader = false
          })
          .finally(() => {
            this.loader = false
          })
      }
    },
validateInputAmount(event) {
      const key = event.key;
      const value = this.amount;
      if (
        key === 'Backspace' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === 'Tab' ||
        key === 'Delete'
      ) {
        return;
      }
      if (!/^\d$/.test(key)) {
        event.preventDefault();
        return;
      }

      // Allow input if the current value plus the new digit is <= 100
      const newValue = parseInt(value + key, 10);
      if (newValue > this.totalWithDraw) {
        event.preventDefault();
      }
    },
    createUser () {
      this.isSubmitting = true
      this.loader = true // Set loader to true to indicate data loading
      const user = {
        user_id: this.UserID,
        amount: this.amount,
        // status: this.status,
        notes: this.notes,
        request_date: new Date()
      }
      this.$apiService
        .postCall('transition/payments', user) // Assuming the endpoint for creating a user is "transition/payments" and user data is passed as the payload
        .then(response => {
          if (response && response.isError === false) {
            this.$toaster.makeToast(
              'success',
              'Payment Request Sent Successfully'
            )
            this.closeModal12()
            this.loader = false
            this.amount = ''
            this.notes = ''
            this.getAllUsers()
            // Optionally, update UI or perform other actions if needed
          } else {
            this.$toaster.makeToast('warning', 'Payment Request Sent Fail')
          }
        })
        .catch(error => {
          console.error('Error creating user:', error)
          this.$toaster.makeToast('warning', 'Error Server Error')
        })
        .finally(() => {
          this.loader = false
          this.isSubmitting = false
          // Set loader to false regardless of success or failure
        })
    },
    deleteUser (userId) {
      this.loader = true // Set loader to true to indicate data loading

      this.$apiService
        .deleteCall(`transition/payments/${userId}`) // Assuming the endpoint for deleting a user by ID is "transition/payments/:id"
        .then(response => {
          if (response && response.isError === false) {
            this.$toaster.makeToast('success', 'User deleted successfully')
            // Optionally, update UI or perform other actions if needed
          } else {
            this.$toaster.makeToast('warning', 'Failed to delete user')
          }
        })
        .catch(error => {
          console.error('Error deleting user:', error)
          this.$toaster.makeToast('error', 'Error deleting user')
        })
        .finally(() => {
          this.loader = false // Set loader to false regardless of success or failure
        })
    },

    getUserById (userId) {
      this.loader = true // Set loader to true to indicate data loading

      // Make API call to get user by ID
      this.$apiService
        .getCall(`transition/payments/${userId}`) // Assuming the endpoint for getting a user by ID is "transition/payments/:id"
        .then(response => {
          if (
            response &&
            response.isError === false &&
            response.apidata &&
            response.apidata.data
          ) {
            const user = response.apidata.data
            // Optionally, do something with the user data
          } else {
            this.$toaster.makeToast('warning', 'Failed to fetch user')
          }
        })
        .catch(error => {
          console.error('Error fetching user:', error)
          this.$toaster.makeToast('error', 'Error fetching user')
        })
        .finally(() => {
          this.loader = false // Set loader to false regardless of success or failure
        })
    },

    updateUser (userId, updatedUserData) {
      this.loader = true // Set loader to true to indicate data loading

      // Make API call to update user by ID
      this.$apiService
        .putCall(`transition/payments/${userId}`, updatedUserData) // Assuming the endpoint for updating a user by ID is "transition/payments/:id" and updated user data is passed as the payload
        .then(response => {
          if (response && response.isError === false) {
            this.$toaster.makeToast('success', 'User updated successfully')
            // Optionally, update UI or perform other actions if needed
          } else {
            this.$toaster.makeToast('warning', 'Failed to update user')
          }
        })
        .catch(error => {
          console.error('Error updating user:', error)
          this.$toaster.makeToast('error', 'Error updating user')
        })
        .finally(() => {
          this.loader = false // Set loader to false regardless of success or failure
        })
    },
    openWithdrawModal () {
      this.$refs.withdrawModal.show()
    },
    reloadPageOnce () {
      if (!this.pageReloaded) {
        window.location.reload()
        this.pageReloaded = true
      }
    },

    toggleFlexDiv () {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
    },
    clearFilters () {

     this.searchTerm = '',
     this.searchAmount ='',
     this.selectedStatus=''
     this.getAllUsers()


   },

   closeModal () {

 this.notes = ''
 this.amount = ''

 this.modalVisible = false
},
    openModal12 () {
      // Set the flag to true to show the modal
      this.modalVisible = true
    },
    closeModal12 () {
      // Set the flag to false to hide the modal
      this.modalVisible = false
    },
    openModal (rowData) {
      this.aadharFront = rowData.aadhar_card
      this.aadharBack = rowData.back_aadhar_card
      this.divinglicense = rowData.driving_lincense
      this.divinglicenseBack = rowData.back_driving_lincense
      this.passportBack = rowData.back_passport
      this.passport = rowData.passport

      this.isModalOpen = true
    },
    vueDocuments (rowData) {
      this.popUpWindow = true
    },
      handleChange (user) {

      const matchedRows = this.rows.filter(row => row.name === user)
      this.rows = matchedRows

    },


    clickViewUsers (id) {
      this.$router.push('/app/myDesk/usersProfile?id=' + id)
    },

    clickUnBlock (userId) {
      this.loader = true
      const reqData = {
        accessStatus: 'False'
      }
      this.$apiService
        .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
        .then(res => {
          if (!res.apidata.isError) {
            this.$toaster.makeToast('success', 'User  successfully unblocked')
            this.getAllUsers()
            this.loader = false
          }
        })
        .catch(error => {
          this.loader = false
          this.$toaster.makeToast('warning', 'Have Server error')
        })
    },
     generateID () {
      this.clearform()
      this.generateIDloader = true
      let randomString = ''
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

      for (let i = 0; i < 7; i++) {
        randomString += characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
      }
      this.form.templateId = randomString
      this.generateIDloader = false
    },
    submit () {
      this.submitloader = true
      if (!this.form.name || !this.form.content || !this.form.templateId) {
        this.$toaster.makeToast('warning', message.VALIDATION_MESSAGE)
        this.submitloader = false
        return
      }
      this.$apiService
        .postCall('add_by_company', this.form)
        .then(res => {
          if (res.apidata.status) {
            this.$toaster.makeToast('warning', message.ERROR_TEMPLATE_MESSAGE)
            this.submitloader = false
          } else {
            this.$toaster.makeToast('success', message.ADD_TEMPLATE_MESSAGE)
            this.getTemplateData()
            this.clearform()
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
    },
    cancel () {
      this.clearform()
    },
    update () {
      this.submitloader = true
      if (!this.form.name || !this.form.content || !this.form.templateId) {
        this.$toaster.makeToast('warning', message.VALIDATION_MESSAGE)
        this.submitloader = false
        return
      }
      this.$apiService
        .postCall('editTemplate', this.form)
        .then(res => {
          this.$toaster.makeToast('success', message.EDIT_TEMPLATE_MESSAGE)
          this.getTemplateData()
          this.clearform()
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
    },
    editTemplate (id) {
      this.isEdit = false

      this.$apiService
        .postCall('getTemplate', { _id: id })
        .then(res => {
          this.form = res.apidata
          this.$bvModal.show('modal-lg')
        })

        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
      this.isEdit = true
    },
    clickBlock (userId) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to block this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, blocked it!'
      })
        .then(result => {
          if (result.value) {
            this.$swal('User Blocked!', 'User has been Blocked.', 'success')
            const reqData = {
              accessStatus: 'True'
            }
            this.$apiService
              .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
              .then(res => {
                if (!res.apidata.isError) {
                  this.$toaster.makeToast(
                    'success',
                    'User successfully blocked'
                  )
                  this.getAllUsers()
                  this.loader = false
                }
              })
          }
        })
        .catch(error => {
          this.$toaster.makeToast(
            'warning',
            "User can't blocked! Srever failed"
          )
        })
    },
    clearform () {
      this.form = {}
      this.isEdit = false
      this.submitloader = false
      this.generateIDloader = false
      this.$bvModal.hide('modal-lg')
    },
    getProfileDetails() {
      this.UserID = localStorage.getItem('user_id')
            this.loader = true
            this.$apiService
                .getCall(`auth/user/${this.UserID}`)
                .then(res => {
                    console.log(res)
                    if (res.error) {
                        this.loader = false
                        this.$toaster.makeToast('warning', 'Fail to fetch user data')
                    } else {
                        this.loginUserName = res.apidata.data.name + ' ' + res.apidata.data.surname
                        this.tiktok_username = res.apidata.data.tiktok_username;
                        this.loader = false
                        this.url =  'https://' + window.location.host + "/app/sessions/affiliate?u="+ this.tiktok_username
                    }
                })
                .catch(error => {
                    this.loader = false
                    this.$toaster.makeToast('warning', 'Server Error')
                })
        },
    //     clearFilters() {
    //   this.selected ="Select User"
    //   this.use_id = null;
    // },
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.form-control {
  color: #535151;
  padding-bottom: 7px;
  background-color: #ffe4c400 !important;
}
.circular-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  max-width: fit-content !important;
}
.for-document {
  border-radius: 50%;
}
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}
.icon-size {
  font-size: 30px;
}
.vgt-wrap__footer .footer__row-count__label {
  font-size: 0.9rem;
  color: #606474;
}
.vgt-wrap__footer .footer__navigation__page-btn span {
  color: #606474;
  font-size: 0.9rem;
}
.vgt-wrap__footer .footer__row-count__select {
  font-size: 0.9rem;
}
.vgt-wrap__footer .footer__navigation__info,
.vgt-wrap__footer .footer__navigation__page-info {
  font-size: 0.9rem;
}

.popup-Container {
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 110;
}

.pop_up {
  position: absolute;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-height: 60%;
  background-color: white;
  z-index: 110;
  overflow-y: auto;
}
.closePopup {
  position: absolute;
  top: 0;
  right: 20px;
  height: 50;
  width: 50;
  border-radius: 50%;
  background: grey;
}

.blueVerfiy {
  background-color: #3b82f6;
  /* color: #3b82f6; */
}
.blueVerfiy2[data-v-6cdc9553] {
  background-color: #3b82f6;
  color: #ffffff;
  padding-left: 3px;
}

.blueVerfiyred {
  background-color: #f63b3b;
  /* color: #3b82f6; */
}
.blueVerfiy2red[data-v-6cdc9553] {
  background-color: #f63b3b;
  color: #ffffff;
  padding-left: 3px;
}



.multiselect__placeholder {
  color: #adadad;
  display: inline-block;
  margin-bottom: -4px !important;
  padding-top: 2px;
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

.btn {
  padding: 0.2rem 1.1rem;
}

.badge-danger {
  color: #ef4444;
  background-color: #fcfbfb !important;
  border: 1px solid #ef4444;
}
.badge-success {
  color: #10b981;
  background-color: #ffffff !important;
  border: 1px solid #10b981;
}

.badge-yellow {
  color: #f59e0b;
  background-color: #fcfbfb !important;
  border: 1px solid #f59e0b;
}



.sizeImage {
  width: 25%;
  height: 100%;
}

.form-control {
  border: initial;
  outline: initial !important;
  background: #f3f4f6;
  border: 1px solid #9ca3af;
  color: #111827;
}


</style>
