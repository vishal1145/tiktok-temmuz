<template>
  <div class="main-content">
    <!-- <breadcumb :page="'User Profile'" :folder="'Pages'" /> -->
    <div
      class="font-weight-bold fa-2x text-light d-flex justify-content-between"
    >
      Member
    </div>
    <hr class="mt-1" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <div class="card user-profile o-hidden mb-30">
      <div :style="headerStyle" class="header-cover"></div>
      <div class="user-info">
        <img
          class="profile-picture avatar-lg mb-2"
          :src="this.userimage"
          alt=""
        />
        <p class="m-0 text-24">{{ fullName }}</p>
        <div class="d-flex px-4 flex-wrap">
          <p class="text-muted m-0">
            <!-- <i class="fa fa-envelope-o" aria-hidden="true"></i> :
            {{ emailPhone }} abc@gmai.com| -->
            <i class="fa fa-phone" aria-hidden="true"></i> :
            {{ phoneNumber }}
          </p>
          <!-- <p
            v-if="is_verified !== false"
            class="ml-2 p-0"
            style="color: #ffffff; font-size: 12px"
          >
            <span class="badge badge-primary blueVerfiy"
              >verified<i
                class="fa fa-check-circle blueVerfiy2"
                aria-hidden="true"
              ></i
            ></span>
          </p> -->
        </div>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="Creators" active>
              <vue-good-table
                :columns="commonColumns"
                :line-numbers="false"
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
                :rows="rows"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field === 'audio_url'">
                    <audio controls style="height: 36px !important">
                      <source :src="props.row.audio_url" type="audio/mpeg" />
                      Your browser does not support the audio tag.
                    </audio>
                  </span>
                  <span v-else-if="props.column.field === 'user_name_show'">
                    <div>
                      {{ props.row.user_info.first_name }}
                      {{ props.row.user_info.last_name }}
                    </div>
                  </span>
                  <span v-else-if="props.column.field === 'status_show'">
                    <div v-if="props.row.status === 'Approved'">
                      <span class="badge badge-success">{{
                        props.row.status
                      }}</span>
                    </div>
                    <div v-else-if="props.row.status === 'Rejected'">
                      <span class="badge badge-danger">{{
                        props.row.status
                      }}</span>
                    </div>
                    <div v-else-if="props.row.status === 'Waiting Approval'">
                      <span
                        class="badge border border-warning text-warning p-1"
                        >{{ props.row.status }}</span
                      >
                    </div>
                    <div
                      v-else-if="props.row.status === 'Pending Registration'"
                    >
                      <span
                        class="badge border-warning text-warning border p-1"
                        >{{ props.row.status }}</span
                      >
                    </div>
                  </span>

                  <span v-else-if="props.column.field === 'payment_status'">
                    <template>
                      <b-badge
                        v-if="props.row.payment_status === 'Paid'"
                        variant="success"
                        >Paid</b-badge
                      >
                      <b-badge v-else variant="danger">Unpaid</b-badge>
                    </template>
                  </span>
                </template>
              </vue-good-table>
            </b-tab>
            <b-tab title="Bank Details">
              <b-row>
                <b-col md="6">Name - {{ userFullName }}</b-col>
                <b-col md="6">Citizenship No - {{ citizenshipNo }}</b-col>

                <b-col md="6">Bank Name - {{ bankName }}</b-col>

                <b-col md="6">IDBN - {{ idbnNo }}</b-col>
              </b-row>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import message from '../../../message'
import { VueEditor } from 'vue2-editor'
import VueDocumentEditor from 'vue-document-editor'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Profile'
  },
  components: {
    // VueEditor,
    // VueDocumentEditor,
  },
  data () {
    return {
      userimage: '',
      loader: false,

      rows: [],
      commonColumns: [
        {
          label: 'Date',
          field: 'createdAt'
        },
        {
          label: 'Tik Tok Name',
          field: 'tiktok_username'
        },
        {
          label: 'Contact Number',
          field: 'contact_number'
        },

        {
          label: 'Diamonds This Month',
          field: 'diamond'
        },

        {
          label: 'Partner',
          field: 'price'
        },

        {
          label: 'Status',
          field: 'status_show'
        },
        { label: 'Reason', field: 'reason' }
      ],
      backgroundImage: require('@/assets/images/food.png'),
      fullName: '',
      tictocName: '',
      phoneNumber: '',
      userFullName: '',
      bankName: '',
      idbnNo: '',
      citizenshipNo: ''
    }
  },

  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  },
  created () {
    this.userId = this.$route.query.id
    //   this.getAllUsers();
    this.fetchPublisher()
    this.getProfileDetails()
  },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async fetchPublisher () {
      this.loader = true
      try {
        var url = ''

        url = 'user/get-all-members-publishers/' + this.userId

        // url = 'publisher/get-all'

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall(url)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          if (response.apidata.msg) {
            this.rows = []
          } else {
            const paymentData = response.apidata.data
            // this.filteredFaqs = response.apidata.data
            // this.filteredFaqs = this.faqs
            // this.ForDropwDow = this.faqs

            paymentData.forEach(e => {
              e.createdAt = moment(e.createdAt).format('DD MMM YYYY h:mm A')
            })
            this.rows = paymentData
          }
        }
        this.loader = false
      } catch (error) {
        this.loader = false
        console.error(error)
        this.$toaster.makeToast('warning', 'Error: Server Error')
      }
    },
    getProfileDetails () {
      this.loader = true
      this.$apiService
        .getCall(`auth/user/${this.userId}`)
        .then(res => {
          // this.form = res.apidata.data

          if (res.error) {
            this.loader = false
            this.$toaster.makeToast('success', res.message)
            return
          } else {
            // this.fullName = res.apidata.data.name + res.apidata.data.surname
            this.fullName = `${res.apidata.data.name} ${res.apidata.data.surname}`

            this.userimage = res.apidata.data.image

            this.tictocName = res.apidata.data.tiktok_username
            this.phoneNumber = res.apidata.data.contact_number
            if (res.apidata.data.bank) {
              this.userFullName = res.apidata.data.bank.full_name
              this.citizenshipNo = res.apidata.data.bank.identity_citizenship_no

              this.bankName = res.apidata.data.bank.bank_name

              this.idbnNo = res.apidata.data.bank.iban
            }

            if (res.apidata.data.image) {
              this.selectedLogo = res.apidata.data.image
            }

            this.loader = false
          }
        })
        .catch(error => {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error fetch profile data')
        })
    },
    getAllUsers () {
      this.loader = true
      this.$apiService
        .getCall(`account/?id=${this.userId}`)
        .then(res => {
          console.log(res)
          let rowData = []

          if (res.apidata.length > 0) {
            rowData = res.apidata
            // rowData = res.apidata.filter((value) => !value.is_superuser);

            rowData.forEach(value => {
              //   value.date_joined = value.date_joined
              //     ? moment(value.date_joined).format("DD/MM/YYYY")
              //     : "";
              value.full_name =
                value.first_name || value.last_name
                  ? value.first_name + ' ' + value.last_name
                  : ''
            })
          }
          this.userName = res.apidata.first_name + ' ' + res.apidata.last_name
          this.emailPhone = res.apidata.email
          this.is_verified = res.apidata.is_verified
          this.phone = res.apidata.phone
          this.userimage = res.apidata.image
          this.aadharFront = res.apidata.aadhar_card
          this.aadharBack = res.apidata.back_aadhar_card
          this.divinglicense = res.apidata.driving_lincense
          this.divinglicenseBack = res.apidata.back_driving_lincense
          this.passportBack = res.apidata.back_passport
          this.passport = res.apidata.passport

          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    }
  }
}
</script>
<style scoped>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
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
</style>
