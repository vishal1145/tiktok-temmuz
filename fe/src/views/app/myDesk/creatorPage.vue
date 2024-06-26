<template>
  <div class="main-content d-flex flex-column" style="gap: 12px">
    <div class="card">
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
      <b-row class="px-3 pb-3 pt-2 mt-1" :style="{ display: flexDivDisplay }">
        <b-col md="3" class="">
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
        <!-- <b-col md="3" class="">
            <label for="users-list-verified">Action</label>
            <fieldset class="form-group">
              <select
                class="form-control"
                id="users-list-verified"
                style="
                  color: grey;
                  padding-bottom: 7px;
                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="selectedStatus"
              >
                <option value="">All</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Waiting Approval">Waiting Approval</option>
                <option value="Pending Registration">
                  Pending Registration
                </option>
              </select>
            </fieldset>
          </b-col> -->

        <b-col md="3" class="d-flex flex-column">
          <label for="users-list-search">Select Start Date</label>

          <v2-datepicker
            class="for-date-picker"
            lang="en"
            ref="startDate"
            v-model="startDate"
            :picker-options="{
              disabledDate: (time) => time.getTime() > new Date().getTime(),
            }"
            @change="changeStartDate"
            placeholder="Select Start date"
          ></v2-datepicker>
        </b-col>
        <b-col md="3" class="d-flex flex-column">
          <label for="users-list-search">Select End Date</label>

          <v2-datepicker
            class="for-date-picker"
            lang="en"
            ref="endDate"
            v-model="endDate"
            :picker-options="{
              disabledDate: (time) =>
                time.getTime() < new Date(this.startDate).getTime(),
            }"
            :disabled="this.startDate ? false : true"
            @change="changeEndDate"
            placeholder="Select End date"
          ></v2-datepicker>
        </b-col>

        <b-col md="3">
              <label for="users-list-verified">Min Earnings</label>
              <fieldset class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="users-list-amount"
                  placeholder="Enter min earning"
                  style="
                    color: grey;

                    border: 1px solid rgba(128, 128, 128, 0.32) !important;
                    background-color: rgb(135 131 131 / 0%);
                  "
                  v-model="searchAmount"
                /></fieldset
            ></b-col>
            <b-col md="3">
              <label for="users-list-verified">Max Earnings</label>
              <fieldset class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="users-list-amount-max"
                  placeholder="Enter max earning"
                  style="
                    color: grey;

                    border: 1px solid rgba(128, 128, 128, 0.32) !important;
                    background-color: rgb(135 131 131 / 0%);
                  "
                  v-model="searchMaxAmount"
                /></fieldset
            ></b-col>
   
       
      </b-row>
    </div>

    <div class="card">
      <div
        class="font-weight-bold fa-2x text-light d-flex justify-content-between"
      >
        <div
          class="card-header d-flex flex-row justify-content-between"
          style="background-color: white"
        >
          <h4
            class="card-title"
            style="margin: 0px; background-color: white; color: #000000c4"
          >
            Creators
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <div class="heading-elements">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <button
                @click="addnewcreator()"
                class="btn btn-primary mb-3 d-none"
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
              <!-- <li><a data-action="close pe-auto"><i class="fa fa-times" aria-hidden="true" style="
    cursor: pointer;
"></i></a></li> -->
            </ul>
          </div>
        </div>
      </div>

      <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
      <div class="card-body">
        <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :pagination-options="{
            enabled: true,
            mode: 'records',
          }"
          styleClass="tableOne vgt-table"
          :selectOptions="{
            enabled: false,
            selectionInfoClass: 'table-alert__box',
          }"
          :sort-options="{
            enabled: false,
          }"
          :rows="filteredRows"
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
    <!-- <breadcumb :page="'User Profile'" :folder="'Pages'" /> -->
  </div>
</template>

<script>
import moment from "moment";
import message from "../../../message";
import { VueEditor } from "vue2-editor";
import VueDocumentEditor from "vue-document-editor";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile",
  },
  components: {
    // VueEditor,
    // VueDocumentEditor,
  },
  data() {
    return {
      searchAmount: "",
      searchMaxAmount: "",
      startDate: "",
      endDate: "",
      searchTerm: "",
      creatorId: "",
      getUserName: "",
      userId: "",
      userimage: "",
      loader: false,
      flexDivDisplay: "flex!important",

      rows: [],
      columns: [
        {
          label: "Affiliated With",
          field: "affiliated_with",
        },
        {
          label: "Diamonds This Month",
          field: "diamond_show",
        },

        {
          label: "Earnings This Month",
          field: "earning_show",
        },
        { label: "Date", field: "as_of_date" },
      ],
      backgroundImage: require("@/assets/images/food.png"),
    };
  },

  computed: {
    // headerStyle () {
    //   return {
    //     backgroundImage: `url(${this.backgroundImage})`
    //   }
    // },
    filteredRows() {
      const query = this.searchTerm.toLowerCase().trim();
      const amount_data = this.searchAmount.trim();
      const amount_data_max = this.searchMaxAmount.trim();

      return this.rows.filter((row) => {
        const matchesQuery = query
          ? (row.as_of_date && row.as_of_date.toLowerCase().includes(query)) ||
            (row.creator_inf &&
              row.creator_inf.toLowerCase().includes(query)) ||
            (row.diamonds_this_month &&
              String(row.diamonds_this_month).toLowerCase().includes(query)) ||
            (row.earning &&
              String(row.earning).toLowerCase().includes(query)) ||
            (row.affiliated_with &&
              row.affiliated_with.toLowerCase().includes(query))
          : true;
        const itemAmount = row.earning;
        const matchesAmount =
          (amount_data ? itemAmount >= amount_data : true) &&
          (amount_data_max ? itemAmount <= amount_data_max : true);

        const itemDate = new Date(row.as_of_date);
        const matchesDate =
          (this.startDate ? itemDate >= new Date(this.startDate) : true) &&
          (this.endDate ? itemDate <= new Date(this.endDate) : true);

        return matchesQuery && matchesDate && matchesAmount;
      });
    },
  },
  created() {
    // this.userId = this.$route.query.uid
    // this.creatorId = this.$route.query.cid
    this.getUserName = this.$route.query.userName;

    this.getCreatorsData();
    
  },
  methods: {
    clearFilters() {
      // (this.searchTerm = ""), (this.startDate = ""), (this.endDate = "");
      window.location.reload();
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getTotalBalance() {
      this.loader = true;
      this.$apiService
        .getCall(`totalBalance/?userId=${this.userId}`)
        .then((res) => {
          if (!res.apidata.isError) {
            if (res.apidata.total_balance >= 0) {
              this.totalBalance = res.apidata.total_balance;
            } else {
              this.totalBalance = 0.0;
            }
            if (res.apidata.security_balance >= 0) {
              this.securityBalance = res.apidata.security_balance;
            } else {
              this.securityBalance = 0.0;
            }
            if (res.apidata.wallet_balance >= 0) {
              this.userBalance = res.apidata.wallet_balance;
            } else {
              this.userBalance = 0.0;
            }
            if (res.apidata.referral_balance >= 0) {
              this.referralBalance = res.apidata.referral_balance;
            } else {
              this.referralBalance = 0.0;
            }
          } else {
            this.securityBalance = 0.0;
            this.totalBalance = 0.0;
            this.userBalance = 0.0;
            this.referralBalance = 0.0;
          }

          this.loader = false;
        })
        .catch((error) => {
          this.userBalance = 0.0;
          this.securityBalance = 0.0;
          this.totalBalance = 0.0;
          this.referralBalance = 0.0;
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    changeStartDate(date) {
      this.startDate = moment(date).format("DD MMM YYYY"); //
    },
    changeEndDate(date) {
      this.endDate = moment(date).format("DD MMM YYYY");
    },
    toggleFlexDiv() {
      this.flexDivDisplay =
        this.flexDivDisplay === "flex!important"
          ? "none!important"
          : "flex!important"; // Toggle the display property
    },
    getCreatorsData() {
      this.loader = true;
      // var reqData = {
      //   creator_id: this.creatorId,
      //   user_id: this.userId
      // }
      this.$apiService
        .postCall(`publisher/get-creator-details?username=${this.getUserName}`)
        .then((res) => {
          console.log(res);
          let rowData = [];

          if (res.apidata.length > 0) {
            rowData = res.apidata;
            rowData.forEach((value) => {
              value.as_of_date = value.as_of_date
                ? moment(value.as_of_date).format("DD MMM YYYY")
                : "";
            });
          }
          this.rows = rowData;

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
  },
};
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

.fa-chevron-circle-down {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}

.fa-refresh {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}

.fa-times {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}

@media only screen and (max-width: 600px) {

.footer__navigation__page-info[data-v-347cbcfa] {
display:none;
}
.footer__row-count 
{
display:none;
}
.footer__navigation
{
  width: 100%;
justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin:0px;

}
.vgt-wrap__footer .footer__navigation > button:first-of-type {
   
    margin: 0px;
}

.paddingBottom{
    padding-bottom: 0.5rem !important;
}
}
</style>
