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
    <div>
      <vue-good-table
        :columns="columns"
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
          <span v-if="props.column.field === 'earning_show'">
            <div>{{ props.row.earning }}$</div>
          </span>
          <span v-else-if="props.column.field === 'diamond_show'">
            <div>
              <i class="fa fa-diamond mr-1" aria-hidden="true"></i>
              {{ props.row.diamonds_this_month }}
            </div>
          </span>
          <span v-else-if="props.column.field === 'status_show'">
            <div v-if="props.row.status === 'Approved'">
              <span class="badge badge-success">{{ props.row.status }}</span>
            </div>
            <div v-else-if="props.row.status === 'Rejected'">
              <span class="badge badge-danger">{{ props.row.status }}</span>
            </div>
            <div v-else-if="props.row.status === 'Waiting Approval'">
              <span class="badge border border-warning text-warning p-1">{{
                props.row.status
              }}</span>
            </div>
            <div v-else-if="props.row.status === 'Pending Registration'">
              <span class="badge border-warning text-warning border p-1">{{
                props.row.status
              }}</span>
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
      creatorId: '',
      userId: '',
      userimage: '',
      loader: false,

      rows: [],
      columns: [
        {
          label: 'Affiliated With',
          field: 'affiliated_with'
        },
        {
          label: 'Diamonds This Month',
          field: 'diamond_show'
        },

        {
          label: 'Earnings This Month',
          field: 'earning_show'
        },
        { label: 'Date', field: 'as_of_date' }
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
    this.userId = this.$route.query.uid
    this.creatorId = this.$route.query.cid

    this.getCreatorsData()
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
    getCreatorsData () {
      this.loader = true
      var reqData = {
        creator_id: this.creatorId,
        user_id: this.userId
      }
      this.$apiService
        .postCall(`publisher/get-creator-details`, reqData)
        .then(res => {
          console.log(res)
          let rowData = []

          if (res.apidata.length > 0) {
            rowData = res.apidata
            rowData.forEach(value => {
              value.as_of_date = value.as_of_date
                ? moment(value.as_of_date).format('DD MMM YYYY')
                : ''
            })
          }
          this.rows = rowData

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

.marginForCArd {
  margin-left: 2.57rem !important;
  text-align: start;
}
</style>
