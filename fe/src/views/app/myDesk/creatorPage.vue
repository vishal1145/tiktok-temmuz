<template>
  <div class="main-content">
    <!-- <breadcumb :page="'User Profile'" :folder="'Pages'" /> -->
    <div
      class="font-weight-bold fa-2x text-light d-flex justify-content-between"
    >
      Creators
    </div>
    <hr class="mt-1" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <div class="card user-profile o-hidden mb-30">
      <div class="header-cover bg-gray-300"></div>
      <div class="user-info">
        <img
          class="profile-picture avatar-lg mb-2"
          :src="this.userimage"
          alt=""
        />
        <p class="m-0 text-24">{{ userName }}hfgh</p>
        <div class="d-flex px-4 flex-wrap">
          <p class="text-muted m-0">
            <i class="fa fa-user-circle" aria-hidden="true"></i> : tfgfg |
            <i class="fa fa-phone" aria-hidden="true"></i> : {{ phone }}46456456
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
        <b-row>
          <b-col md="4" sm="12">
            <b-card
              class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
            >
              <i class="i-Coins"></i>
              <div class="content marginForCArd" >
                <p class="text-muted mt-2 mb-0" style="
    width: 116px;
">Monthly diamonds</p>
                <p
                  class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
                >
                  {{ total_member }}56
                </p>
              </div>
            </b-card>
          </b-col>
          <b-col md="4" sm="12">
            <b-card
              class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
            >
              <i class="i-Money-2"></i>
              <div class="content marginForCArd">
                <p class="text-muted mt-2 mb-0" style="
    width: 122px;
">monthly $ earnings</p>
                <p
                  class="text-primary text-24 line-height-1 mb-2 ul-cursor--pointer"
                >
                  {{ total_member }}5$
                </p>
              </div>
            </b-card>
          </b-col>
        </b-row>
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
          label: 'User name',
          field: 'user_name_show'
        },
        {
          label: 'Orderd date',
          field: 'created_at'
        },
        {
          label: 'Orderd ID',
          field: 'id'
        },

        {
          label: 'Audio File',
          field: 'audio_url'
        },

        {
          label: 'Amount',
          field: 'price'
        },

        {
          label: 'Status',
          field: 'payment_status'
        }
      ],
      backgroundImage: require('@/assets/images/food.png')
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
    this.getAllUsers()
  },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
              this.referralBalance = res.apidata.referral_balance
            } else {
              this.referralBalance = 0.0
            }
          } else {
            this.securityBalance = 0.0
            this.totalBalance = 0.0
            this.userBalance = 0.0
            this.referralBalance = 0.0
          }

          this.loader = false
        })
        .catch(error => {
          this.userBalance = 0.0
          this.securityBalance = 0.0
          this.totalBalance = 0.0
          this.referralBalance = 0.0
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false
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

.marginForCArd
{
  margin-left: 2.57rem !important;
  text-align: start;
}
</style>
