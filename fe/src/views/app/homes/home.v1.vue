<template>
  <div class="main-content">
    <breadcumb :page="'Home'" :folder="'eSigning Logs'" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="main-content">
      <!-- <b-row>
        <b-col md="12">
          <date-range-picker
            ref="picker"
            :singleDatePicker="false"
            v-model="dateRange"
          >
          </date-range-picker>
        </b-col>
      </b-row> -->
      <b-row class="mb-2">
        <b-col class="mt-4 mr-3 col-2">
          <v2-datepicker
            lang="en"
            v-model="fromDate"
            ref="startDate"
            :picker-options="{
              disabledDate: (time) => disabledStartDate(time, toDate),
            }"
            @change="getInvitationsData()"
            placeholder="From Date"
          ></v2-datepicker>
        </b-col>
        <b-col class="mt-4" style="margin-left: -40px">
          <v2-datepicker
            lang="en"
            v-model="toDate"
            :picker-options="{
              disabledDate: (time) => disabledEndDate(time, fromDate),
            }"
            @change="getInvitationsData()"
            ref="endDate"
            placeholder="To Date"
          ></v2-datepicker>
        </b-col>
        <b-col class="mt-4 col-1">
          <b-button
            variant="primary"
            size="sm"
            @click="clearDate()"
            class="float-right"
          >
            Clear
          </b-button>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col xl="4" md="6" sm="6">
          <b-card
            class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
          >
            <i class="i-Add-User"></i>
            <div class="ml-5">
              <p class="text-muted mt-2 mb-0">Invitations made</p>
              <p class="text-primary text-24 line-height-1 mb-2">
                {{ invitationsMade }}
              </p>
            </div>
          </b-card>
        </b-col>
        <b-col xl="4" md="6" sm="6">
          <b-card
            class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
          >
            <i class="i-Add-User"></i>
            <div class="ml-5">
              <p class="text-muted mt-2 mb-0">eSigns completed</p>
              <p class="text-primary text-24 line-height-1 mb-2">
                {{ eSignCompleted }}
              </p>
            </div>
          </b-card>
        </b-col>
        <b-col xl="4" md="6" sm="6">
          <b-card
            class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
          >
            <i class="i-Add-User"></i>
            <div class="ml-5">
              <p class="text-muted mt-2 mb-0">Documents completed</p>
              <p class="text-primary text-24 line-height-1 mb-2">
                {{ documentsCompleted }}
              </p>
            </div>
          </b-card>
        </b-col>
      </b-row>

      <div class="row mt-5">
        <div class="col-6">
          <h5>eSigning Logs</h5>
        </div>
        <div class="col-6" style="text-align: end">
          <b-button variant="primary ripple" @click="goToActivityLog()"
            >View All Logs</b-button
          >
        </div>
      </div>
      <div class="mt-5">
        <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :totalRows="totalRecords"
          :pagination-options="{
            enabled: false,
            mode: 'records',
          }"
          styleClass="tableOne vgt-table"
          :selectOptions="{
            enabled: false,
            selectionInfoClass: 'table-alert__box',
          }"
          :rows="rows"
        >
          <div slot="emptystate" class="text-center">No data found</div>
          <div slot="table-actions" class="mb-3">
            <!-- <i class="i-Download1 mr-4" @click="downloadExel()"></i> -->
            <!-- <i class="i-Repeat-3 mr-5"></i> -->
          </div>

          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'button'">
              <a href="">
                <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                {{ props.row.button }}</a
              >
              <a href="">
                <i class="i-Close-Window text-25 text-danger"></i>
                {{ props.row.button }}</a
              >
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import moment from "moment";

export default {
  components: { DateRangePicker },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
  },
  data() {
    return {
      dateRange: {
        startDate: "",
        endDate: "",
      },
      columns: [
        {
          label: "Date",
          field: "time",
        },
        {
          label: "Remarks",
          field: "remark",
        },
        {
          label: "Report Type",
          field: "reporttype",
        },
      ],
      rows: [],
      serverParams: {
        sort: [
          {
            field: "",
            type: "",
          },
        ],
        page: 1,
        perPage: 10,
      },
      currentPage: 1,
      perPage: 10,
      totalRecords: 0,
      search: "",
      fromDate: "",
      toDate: "",
      loader: false,
      invitationsMade: "",
      eSignCompleted: "",
      documentsCompleted: "",
    };
  },
  created() {
    this.getInvitationsData();
    this.getTemplateData();
  },
  methods: {
    getInvitationsData() {
      this.loader = true;
      let requestOption = {};
      if (this.fromDate && this.toDate) {
        (requestOption.fromDate = new Date(this.fromDate)),
          (requestOption.toDate = new Date(this.toDate));
      }
      this.$apiService
        .postCall("eSigningHome", requestOption)
        .then((res) => {
          this.invitationsMade = res.apidata.eSigningHome.invitationsMade;
          this.eSignCompleted = res.apidata.eSigningHome.eSignCompleted;
          this.documentsCompleted = res.apidata.eSigningHome.documentsCompleted;
         
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    goToActivityLog() {
      this.$router.push("/app/mydesk/activitylogs");
    },
    getTemplateData() {
      this.loader = true;
      let requestData = {
        perPage: this.serverParams.perPage,
        page: this.serverParams.page,
      };
      if (this.search) {
        requestData.search = this.search;
      }
      if (this.fromDate && this.toDate) {
        requestData.fromDate = this.fromDate;
        requestData.toDate = this.toDate;
      }
      this.$apiService
        .postCall("activity", requestData)
        .then((res) => {
          let rowData = [];
          if (res.apidata.length > 0) {
            rowData = res.apidata[0].rows;
            this.totalRecords = res.apidata[0].count;
            rowData.forEach((element) => {
              element.time = element.date
                ? moment(element.date).format("DD/MM/YYYY HH:mm:ss A")
                : "";
              element.remark = element.remarks ? element.remarks : "";
              element.reporttype = element.reportType ? element.reportType : "";
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
    disabledEndDate(time, startDate) {
      if (startDate) {
        return (
          time.getTime() < new Date(startDate) || time.getTime() > Date.now()
        );
      }
      return time.getTime() > Date.now();
    },
    disabledStartDate(time, toDate) {
      if (toDate) {
        return time.getTime() > new Date(toDate) || time.getTime() > Date.now();
      }
      return time.getTime() > Date.now();
    },
    clearDate() {
      this.$refs.startDate.clearDate();
      this.$refs.endDate.clearDate();
    },
  },
};
</script>

<style>
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}
</style>
