<template>
  <div class="main-content">
    <b-row>
      <b-col md="8"
        ><div
          v-if="this.role === 'User'"
          class="font-weight-bold fa-2x text-light"
        >
          Wallet transaction
        </div>
        <div v-else class="font-weight-bold fa-2x text-light">
          Transaction history
        </div></b-col
      >
      <b-col
        v-if="this.role === 'User'"
        class="d-flex justify-content-end gappingwallet"
      >
        <!-- <div class="dropdown" ref="myDropdown">
          <button
            class="btntOTAL btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButtonSecond"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Current -
            <span> ₹ {{ totalBalance }}/- </span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item d-flex justify-content-between">
              <div>Wallet</div>
              <div>₹ {{ userBalance }}</div>
            </div>
            <div class="dropdown-item d-flex justify-content-between">
              <div>Security</div>
              <div>₹ {{ securityBalance }}</div>
            </div>
          </div>
        </div> -->
        <div class="dropdown">
          <b-dropdown
            id="dropdown-6"
            :text="`Current - ₹ ${formatPrice(totalBalance)}`"
            class="m-md-2"
            toggle-class=""
            style="
              border: 1px solid rgba(0, 0, 0, 0.265);
              color: black;
              border-radius: 5px;

              /* text-underline-offset: unset; */
            "
          >
            <div class="dropdown-item d-flex justify-content-between px-3">
              <div>Wallet</div>
              <div>₹ {{ formatPrice(userBalance) }}</div>
            </div>
            <div class="dropdown-item d-flex justify-content-between px-3">
              <div>Security</div>
              <div>₹ {{ formatPrice(securityBalance) }}</div>
            </div>
            <div class="dropdown-item d-flex justify-content-between px-3">
              <div>
                Bonus & <br />
                Rewards
              </div>
              <div>₹ {{ formatPrice(referral_balance) }}</div>
            </div>
          </b-dropdown>
        </div>
        <b-button
          @click="clickDeposit()"
          variant="btn btn-primary align-self-center"
          style="padding: 0px 13px; height: 39px"
        >
          <i class="fa fa-plus px-2" aria-hidden="true"></i>
          Add amount
        </b-button>

        <!-- <div>
          
          <a
            class="text-primary"
            @click="clickDeposit()"
            style="text-decoration: underline !important; cursor: pointer"
          >
            Add amount
          </a>
        </div> -->
      </b-col>
    </b-row>

    <hr class="mt-1" />

    <b-modal
      id="modal-attachment-deposit"
      size="md"
      title="Deposit"
      hide-footer
    >
      <b-row class="px-2 pt-2">
        <b-col
          >Thank you for your request! We are pleased to confirm that you have
          deposited into your wallet. It may take some time for the money to
          reflect in your account.
        </b-col>
      </b-row>
      <b-row class="mt-3 px-2">
        <b-col md="12">
          <b-form-group class="mb-3" label-for="input-1">
            <b-form-select
              v-model="amount"
              required
              placeholder="Chose amount"
              @change="handleChangeAmount"
              ><b-form-select-option disabled value=""
                >Select amount</b-form-select-option
              >
              <b-form-select-option
                v-for="(data, index) in showAmount"
                :key="index"
                :value="data"
                >{{ data }}</b-form-select-option
              >
              <!-- <b-form-select-option value="5000"
                    >5000</b-form-select-option
                  >
                  <b-form-select-option value="10000"
                    >10000</b-form-select-option
                  > -->
            </b-form-select>
          </b-form-group>
        </b-col>
        <!-- <b-col>
          <b-form-group
            label="Add amount"
            label-for="input-1"
            label-class="font-weight-bold text-dark fa-2x"
          >
            <b-form-input
              v-model="amount"
              type="number"
              required
              placeholder="Enter amount"
            ></b-form-input>
          </b-form-group>
        </b-col> -->
      </b-row>

      <div class="d-flex justify-content-end px-2">
        <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
        <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
        <b-button
          v-if="!updateloader"
          variant="primary ripple"
          class="mb-2"
          @click="clickPay()"
          >Deposit</b-button
        >
      </div>
    </b-modal>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <b-row class="my-2">
      <b-col md="3" v-if="this.role !== 'User'"
        ><multiselect
          class="for-user-div"
          @input="handleChange"
          v-model="selected"
          placeholder="Select Users"
          :options="[...allUsers]"
          :multiple="false"
          :limit="1"
        ></multiselect
      ></b-col>
      <b-col md="3" class="for-gap">
        <v2-datepicker
          class="for-date-picker"
          lang="en"
          ref="startDate"
          v-model="startDate"
          :picker-options="{
            disabledDate: time => time.getTime() > new Date().getTime()
          }"
          @change="onDateSelected()"
          placeholder="Select Start date"
        ></v2-datepicker
      ></b-col>
      <b-col md="3">
        <v2-datepicker
          class="for-date-picker"
          lang="en"
          ref="endDate"
          v-model="endDate"
          :picker-options="{
            disabledDate: time => time.getTime() > new Date().getTime()
          }"
          @change="onEndDateSelected()"
          placeholder="Select End date"
        ></v2-datepicker
      ></b-col>
      <b-col md="3" class="for-gap">
        <b-form-input
          class="for-date-picker"
          id="text-input-search"
          v-model="searchData"
          placeholder="Search transaction id"
        ></b-form-input>
      </b-col>
    </b-row>

    <!-- <div class="d-flex mb-2">
      <div v-if="this.role === 'Admin'" style="width: 20%;">
        <multiselect
          @input="handleChange"
          v-model="selected"
          placeholder="Select Users"
          :options="[...allUsers]"
          :multiple="false"
          :limit="1"
        ></multiselect>
      </div>
      <div style="" class="ml-2">
        <b-form-datepicker
          id="date-picker"
          v-model="startDate"
          placeholder="Starting date"
          :max="maxDate"
          @input="onDateSelected"
        ></b-form-datepicker>
      </div>
      <div style="" class="ml-2">
        <b-form-datepicker
          id="date-pickers"
          v-model="endDate"
          placeholder="Select End date"
          :max="maxDate"
          @input="onEndDateSelected"
        ></b-form-datepicker>
      </div>
      <div class="ml-2" style="width: 20%;">
        <v2-datepicker
        class="for-date-picker"
          lang="en"
          ref="startDate"
          v-model="startDate"
          :picker-options="{
            disabledDate: (time) => time.getTime() > new Date().getTime(),
          }"
          @change="onDateSelected()"
          placeholder="Select End date"
        ></v2-datepicker>
      </div>
      <div class="ml-2" style="width: 20%;">
        <v2-datepicker
        class="for-date-picker"
          lang="en"
          ref="endDate"
          v-model="endDate"
          :picker-options="{
            disabledDate: (time) => time.getTime() > new Date().getTime(),
          }"
          @change="onEndDateSelected()"
          placeholder="Select End date"
        ></v2-datepicker>
      </div>
      <div style="width: 15%" class="ml-2">
          <b-form-input
            id="text-input-search"
            v-model="endDate"
            placeholder="Enter end date"
            @input="handleTextInput"
          ></b-form-input>
        </div>
    </div> -->

    <vue-good-table
      :columns="getDynamicColumns()"
      :line-numbers="false"
      :search-options="getSearchOptions()"
      :pagination-options="{
        enabled: true,
        mode: 'records'
      }"
      styleClass="tableOne vgt-table"
      :selectOptions="{
        enabled: false,
        selectionInfoClass: 'table-alert__box'
      }"
      :sort-options="{
        enabled: false
      }"
      :rows="filteredRows"
    >
      <!-- <div slot="table-actions" class="mb-3">
          <i class="i-Align-Justify-All mr-3"></i>
          <i class="i-Windows-Microsoft mr-3"></i>
          <b-button
            variant="primary"
            v-b-modal.modal-lg
            class="btn-rounded"
            @click="generateID()"
          >
            New Template
          </b-button>
        </div> -->

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'user_name_show'">
          <div @click="clickViewProfile(props.row.userId)">
            <p
              class="m-0 ul-cursor--pointer text-primary"
              style="text-decoration: underline"
            >
              {{ props.row.user_name }}
            </p>
          </div>
        </span>

        <span v-else-if="props.column.field === 'transaction_type'">
          <template>
            <div class="d-flex">
              ₹ {{ formatPrice(props.row.amount) }}
              <p
                v-if="props.row.type === 'Debit'"
                class="ml-2 text-danger"
                variant="primary ripple"
              >
                Debit
              </p>
              <p v-else class="ml-2 text-success" variant="primary ripple">
                Credit
              </p>
            </div>
          </template>
          <!-- <template>
            <b-button
              v-if="props.row.accessStatus == false"
              variant="primary ripple"
              @click="clickBlock(props.row.id)"
              >Block</b-button
            >
            <b-button
              v-else
              variant="primary ripple"
              @click="clickUnBlock(props.row.id)"
            >
              Unblock</b-button
            >
          </template> -->
        </span>
      </template>

      <!-- <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <i
              class="fa fa-edit"
              style="font-size: 24px; cursor: pointer"
              @click="editTemplate(props.row._id)"
            ></i>
  
            <i
              class="fa fa-trash"
              style="
                font-size: 24px;
                color: red;
                margin-left: 10px;
                cursor: pointer;
              "
              @click="deleteTemplate(props.row._id)"
            ></i>
          </span>
        </template> -->
    </vue-good-table>
  </div>
</template>

<script>
import moment from 'moment'
import message from '../../../message'
import Multiselect from 'vue-multiselect'
import _ from 'lodash'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Transaction'
  },
  components: {
    multiselect: Multiselect
  },
  data () {
    return {
      showAmount: ['2000', '4000', '5000', '6000', '8000', '10000'],
      maxDate: new Date(),
      selected: '',
      fromDate: null,
      allUsers: [],
      usersInfo: [],
      startDate: '',
      endDate: null,
      userBalance: '',
      totalBalance: '',
      securityBalance: '',
      referral_balance: '',
      updateloader: false,
      amount: '',
      transactionId: '',
      types: '',
      userId: '',
      role: '',
      matchUser: '',
      rows: [],
      form: {
        templateId: '',
        name: '',
        content: ''
      },
      searchData: '',
      generateIDloader: false,
      submitloader: false,
      isEdit: false,
      loader: false,
      isHide: false
    }
  },
  mounted () {
    // Open the dropdown after the component is mounted
    this.$nextTick(() => {
      this.$refs.myDropdown.querySelector('.dropdown-toggle').click()
    })
  },
  created () {
    var storedUser = localStorage.getItem('userInfo')
    var parsedUser = JSON.parse(storedUser)
    this.role = parsedUser.data.role
    this.userId = parsedUser.data.id

    this.getAllTransaction()
    this.getAllUsers()
    this.getTotalBalance()
  },
  computed: {
    filteredRows () {
      // Implement your custom search logic here
      const searchTerm = this.searchData.toLowerCase()
      return this.rows.filter(row => {
        // Check each dynamic column for a match
        return Object.keys(row).some(key => {
          const value = row[key]
          return (
            value !== null &&
            value !== undefined &&
            value.toString().toLowerCase().includes(searchTerm)
          )
        })
      })
    }
  },
  methods: {
    async pro (order_id, amount, order) {
      const self = this
      const url = self.$apiService.getAppendedUrl(`payments/payment/verify/`)
      var options = {
        key: order.razorpayKey, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Inter City Tours Travels and Car rentals',
        description: 'Test Transaction',

        image: 'https://example.com/your_logo',
        order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            order_data: order
          }

          const response1 = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          const data1 = await response1.json()
          if (data1.message === true) {
            self.$toaster.makeToast('success', 'Payment add successfully')

            setTimeout(() => {
              window.location.reload()
            }, 100)
          } else {
            self.$toaster.makeToast('warning', 'Payment failed')
          }
        },
        prefill: {
          name: order.name,
          email: order.email,
          contact: order.mobile
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#3399CC'
        }
      }
      var rzp1 = new Razorpay(options)
      rzp1.on('payment.failed', async function (response) {
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        const data = {
          razorpay_order_id: response.error.metadata.order_id,
          razorpay_payment_id: response.error.metadata.payment_id,
          razorpay_error_code: response.error.code,
          razorpay_error_description: response.error.description
        }
        const response1 = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const data1 = await response1.json()
      })
      // document.getElementById('rzp-button1').onclick = function (e) {
      rzp1.open()
      //   e.preventDefault();
      // }
    },
    async initiatePayment () {
      // const razorpayKey = this.$apiService.getRazorpayKey();
      // const rzp = new Razorpay({
      //   key: razorpayKey,
      // });
      //document.getElementById("input_value").value;

      // Construct the URL with query parameters
      const url = this.$apiService.getAppendedUrl(`payments/generate-order/`)
      const queryParams = new URLSearchParams()
      queryParams.append('userId', this.userId)
      queryParams.append('amount', this.amount)
      // const url = new URL('https://zoombacarapi.algofolks.com/payments/generate-order/');
      // url.searchParams.append('userId', this.userId);
      // url.searchParams.append('amount', amount);
      // Make a GET request with the constructed URL
      const response = await fetch(`${url}?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const order = await response.json()
      this.pro(order.id, order.amount, order)
      this.$bvModal.hide('modal-attachment-deposit')
      this.loader = false
    },
    openModal (rowData) {
      this.$bvModal.show('modal-attachment')
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    getCompanyData (date) {},
    handleStartDate () {},
    onDateSelected (date) {},
    onEndDateSelected (date) {
      this.startDate = moment(this.startDate).format('YYYY-MM-DD')
      this.endDate = moment(this.endDate).format('YYYY-MM-DD')

      this.getAllTransaction(this.startDate, this.endDate)
    },
    getSearchOptions () {
      if (this.role === 'Admin' || this.role === 'User') {
        return {
          enabled: false,
          placeholder: 'Search transaction id'
        }
      } else {
        return {
          enabled: false // Disabling search for non-admins
        }
      }
    },
    handleChangeAmount () {
      if (this.amount === '2500') {
        // this.ascendingOrderCartPage();
      } else {
        // this.descendingOrderCartPage();
      }
    },
    clickViewProfile (rowUserId) {
      this.$router.push('/app/myDesk/usersProfile?id=' + rowUserId)
    },

    handleTextInput: _.debounce(function () {
      // this.getAllTransaction(this.startDate, this.endDate);
    }, 700),
    clickCancle () {
      this.$bvModal.hide('modal-attachment-deposit')
    },
    getDynamicColumns () {
      const commonColumns = [
        {
          label: 'Date/Time',
          field: 'updated_at'
        },
        {
          label: 'Transaction id',
          field: 'order_key'
        },
        {
          label: 'Amount',
          field: 'transaction_type'
        },

        // {
        //   label: "Transaction id",
        //   field: "transcation_id",
        // },
        {
          label: 'Details',
          field: 'details'
        }
      ]

      if (this.role === 'User') {
        // Exclude the 'User name' column for 'User' role
        return commonColumns
      } else {
        // Include the 'User name' column for other roles
        return [
          { label: 'User name', field: 'user_name_show' },
          ...commonColumns
        ]
      }
    },
    async clickPay () {
      // window.location.href = this.$apiService.getAppendedUrl(
      //   `payments/generate-order/?userId=${this.userId}&amount=${this.amount}`
      // );
      // );
      this.loader = true
      if (this.amount) {
        this.initiatePayment()
        this.$bvModal.hide('modal-attachment-deposit')
      } else {
        this.$toaster.makeToast('warning', 'Please select amount')
        this.loader = false
      }

      // this.$bvModal.hide("modal-attachment-deposit");
    },

    // clickDownload() {
    //   const url='https://c8.alamy.com/comp/EE0F4R/crying-baby-with-dummy-EE0F4R.jpg';
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.download = "Aadhar.png";
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // },
    clickDeposit () {
      this.$bvModal.show('modal-attachment-deposit')
    },
    getTotalBalance () {
      this.loader = true
      this.$apiService
        .getCall(`totalBalance/?userId=${this.userId}`)
        .then(res => {
          if (!res.apidata.isError) {
            if (res.apidata.total_balance >= 0) {
              this.totalBalance = res.apidata.total_balance
            } else {
              this.totalBalance = 0.0
            }
            if (res.apidata.security_balance >= 0) {
              this.securityBalance = res.apidata.security_balance
            } else {
              this.securityBalance = 0.0
            }
            if (res.apidata.wallet_balance >= 0) {
              this.userBalance = res.apidata.wallet_balance
            } else {
              this.userBalance = 0.0
            }
            if (res.apidata.referral_balance >= 0) {
              this.referral_balance = res.apidata.referral_balance
            } else {
              this.referral_balance = 0.0
            }
          } else {
            this.userBalance = 0.0
            this.securityBalance = 0.0
            this.totalBalance = 0.0
            this.referral_balance = 0.0
          }

          this.loader = false
        })
        .catch(error => {
          this.userBalance = 0.0
          this.securityBalance = 0.0
          this.totalBalance = 0.0
          this.referral_balance = 0.0
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false
        })
    },
    // getAllUsers() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("account/")
    //     .then((res) => {
    //       let rowData = [];

    //       if (res.apidata.length > 0) {
    //         rowData = res.apidata;
    //         rowData = res.apidata.filter((value) => !value.is_superuser);

    //         rowData = res.apidata.filter(
    //           (value) => value.first_name !== null && value.last_name !== null
    //         );
    //         // rowData.forEach((element) => {
    //         //   element.time = element.time
    //         //     ? moment(element.time).format("DD/MM/YYYY")
    //         //     : "";
    //         // });

    //         rowData.forEach((value) => {
    //           // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
    //           value.full_name =
    //             value.first_name || value.last_name
    //               ? value.first_name + " " + value.last_name
    //               : "";
    //         });
    //       }
    //       this.allUsers = rowData.map((e) => e.full_name);

    //       this.usersInfo = rowData.map((user) => ({
    //         id: user.id,
    //         fullName: user.full_name,
    //       }));

    //       this.loader = false;
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //     });
    // },
    handleChange (user) {
      this.matchUser = this.usersInfo.find(e => e.fullName == user)

      if (this.matchUser !== null) {
        this.getAllTransaction(this.startDate, this.endDate, this.matchUser.id)
        // this.getAllTransaction();
      }
    },
    getAllTransaction (startDate, endDate, uId) {
      this.loader = true
      let query = ``
      if (startDate) {
        query = query + `startDate=${startDate}`
      }
      if (endDate) {
        query = query + `&endDate=${endDate}`
      }
      if (uId) {
        query = query + `&userId=${uId}`
      }
      this.$apiService
        .getCall(`transcation/?${query}`)
        .then(res => {
          let rowData = []

          if (res.apidata.length > 0) {
            // rowData = res.apidata;

            // rowData = res.apidata.filter((value) => !value.is_superuser);
            if (this.role === 'User') {
              // this.allDate = res.apidata.map((e) => e.time);

              rowData = res.apidata.filter(value => {
                if (value.userId == this.userId) {
                  return value.userId
                }
              })
            } else {
              rowData = res.apidata
              // this.allDate = rowData.map(e => e.time);
            }

            rowData.forEach(element => {
              // element.amount = element.amount
              //   ? "₹" + "  " + element.amount + "/-"
              //   : "";
              element.updated_at = element.updated_at
                ? moment(element.updated_at).format('DD MMM YYYY h:mm A')
                : ''
            })
            // rowData.forEach((value) => {
            //   value.full_name =
            //     value.first_name || value.last_name
            //       ? value.first_name + " " + value.last_name
            //       : "";
            // });
          }
          this.rows = rowData
          // console.log(this.rows);
          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    },

    // submit() {
    //   this.submitloader = true;
    //   if (!this.form.name || !this.form.content || !this.form.templateId) {
    //     this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
    //     this.submitloader = false;
    //     return;
    //   }
    //   this.$apiService
    //     .postCall("add_by_company", this.form)
    //     .then((res) => {
    //       if (res.apidata.status) {
    //         this.$toaster.makeToast("warning", message.ERROR_TEMPLATE_MESSAGE);
    //         this.submitloader = false;
    //       } else {
    //         this.$toaster.makeToast("success", message.ADD_TEMPLATE_MESSAGE);
    //         this.getTemplateData();
    //         this.clearform();
    //       }
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    // },
    cancel () {
      this.clearform()
    },
    // update() {
    //   this.submitloader = true;
    //   if (!this.form.name || !this.form.content || !this.form.templateId) {
    //     this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
    //     this.submitloader = false;
    //     return;
    //   }
    //   this.$apiService
    //     .postCall("editTemplate", this.form)
    //     .then((res) => {
    //       this.$toaster.makeToast("success", message.EDIT_TEMPLATE_MESSAGE);
    //       this.getTemplateData();
    //       this.clearform();
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    // },

    // editTemplate(id) {
    //   this.isEdit = false;

    //   this.$apiService
    //     .postCall("getTemplate", { _id: id })
    //     .then((res) => {
    //       this.form = res.apidata;
    //       this.$bvModal.show("modal-lg");
    //     })

    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    //   this.isEdit = true;
    // },

    clearform () {
      this.form = {}
      this.isEdit = false
      this.submitloader = false
      this.generateIDloader = false
      this.$bvModal.hide('modal-lg')
    }
  }
}
</script>
<!-- <script src="../../../../public/checkout.js"></script> -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.circular-image {
  border-radius: 50%;
}
.for-document {
  border-radius: 50%;
}
.v2-picker-trigger {
  padding-top: 5px;
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
.for-date-picker {
  width: 100%;
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
.modal-content {
  padding: 1em;
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
@media screen and (max-width: 768px) {
  .for-gap {
    margin: 12px 0;
  }
  .v2-picker-trigger {
    padding-top: 0;
  }
  /* .hiddenWallet {
    display: none;
  } */
}
.vgt-global-search__input .input__icon {
  display: none; /* Hide the search icon */
}
.vgt-global-search__input {
  padding-left: 0;
}

.btntOTAL {
  padding: 0.7rem 1.25rem !important;
}

.gappingwallet {
  gap: 8px;
}

.btnFoDrowdown {
  padding: 0.1rem 1.1rem !important;
}
</style>
