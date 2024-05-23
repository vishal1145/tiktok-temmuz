<template>
  <div class="main-content">
    <breadcumb :page="'Activity Logs'" :folder="'Home'" />
    <!-- <div class="wrapper"> -->
    <b-row class="mb-2">
      <b-col class="mt-4 col-3">
        <b-form-input
          v-model="search"
          style="width: 100%"
          type="text"
          class="col-12"
          placeholder="Search"
          @keyup="filterData()"
        ></b-form-input>
      </b-col>
      <b-col class="mt-4 mr-3 col-2">
        <v2-datepicker
          lang="en"
          v-model="fromDate"
          ref="startDate"
          :picker-options="{
            disabledDate: (time) => disabledStartDate(time, toDate),
          }"
          @change="getTemplateData()"
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
          @change="getTemplateData()"
          ref="endDate"
          placeholder="To Date"
        ></v2-datepicker>
      </b-col>
      <b-col class="mt-4 mr-5 col-2">
        <select
          @change="filterReportData($event)"
          id="select"
          style="width: 200px; height: 35px"
        >
          <option value="" disabled selected>Please Select Report Type</option>
          <option value="Document Added">Document Added</option>
          <option value="Invitee Added">Invitee Added</option>
          <option value="Invitee Signed">Invitee Signed</option>
        </select>
      </b-col>
      <b-col class="mt-4 col-1">
        <b-button
          variant="primary"
          size="sm"
          @click="clearDate()"
          style="float: right"
        >
          Clear
        </b-button>
      </b-col>
    </b-row>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <vue-good-table
      :columns="columns"
      :line-numbers="false"
      :totalRows="totalRecords"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: perPage,
        setCurrentPage: currentPage,
      }"
      @on-page-change="onPageChange"
      @on-per-page-change="onPerPageChange"
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
</template>

<script>
import moment from "moment";
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Activity Log",
  },
  data() {
    return {
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
      searchReport: "",
      fromDate: "",
      toDate: "",
      loader: false,
    };
  },
  created() {
    this.getTemplateData();
  },
  methods: {
    disabledRange: function (date) {
      return date < new Date(2019, 10, 2) || date > new Date(2019, 10, 6);
    },
    getTemplateData(reporttype) {
      debugger;
      this.loader = true;
      let requestData = {
        perPage: this.serverParams.perPage,
        page: this.serverParams.page,
      };
      if (this.search) {
        requestData.search = this.search;
      }
      if (reporttype) {
        requestData.searchReport = reporttype;
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
    onPageChange(params) {
      this.updateParams({ page: params.currentPage });
      this.getTemplateData();
    },

    onPerPageChange(params) {
      this.updateParams({ perPage: params.currentPerPage });
      this.getTemplateData();
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    filterData() {
      debugger;
      this.getTemplateData();
    },
    filterReportData(event) {
      this.getTemplateData(event.target.value);
    },
    clearDate() {
      this.search = "";
      document.getElementById("select").value = "";
      this.$refs.startDate.clearDate();
      this.$refs.endDate.clearDate();
      this.getTemplateData();
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
</style>
