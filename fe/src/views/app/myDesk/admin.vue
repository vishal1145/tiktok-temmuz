<template>
    <div class="main-content">
        <breadcumb :page="'Admin'" :folder="'Home'" />
     
      <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
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
        :rows="rows"
      >
  
        <template slot="table-row" slot-scope="props">
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
      title: "Admin",
    },
    components: {
      // VueEditor,
      // VueDocumentEditor
    },
    data() {
      return {
        columns: [
          {
            label: "Name",
            field: "name",
          },
          {
            label: "Template ID",
            field: "templateId",
          },
          {
            label: "Created At",
            field: "time",
          },
          {
            label: "Actions",
            field: "button",
          },
        ],
        rows: [],
        form: {
          templateId: "",
          name: "",
          content: "",
        },
        generateIDloader: false,
        submitloader: false,
        isEdit: false,
        loader: false,
        isHide: false,
       
      };
    },
    created() {
      // this.getTemplateData();
    },
    methods: {
      getTemplateData() {
        this.loader = true;
        this.$apiService
          .getCall("get-by-company")
          .then((res) => {
            let rowData = [];
            if (res.apidata.length > 0) {
              rowData = res.apidata;
              rowData.forEach((element) => {
                element.time = element.time
                  ? moment(element.time).format("DD/MM/YYYY")
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
  <style>
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
  </style>
  