<template>
  <div class="main-content">
    <breadcumb :page="'Accounts'" :folder="'Document configuration'" />
    <b-card>
      <b-form>
        <div>
          <span class="section-info">Change document level Settings here!</span>
        </div>
        <hr />
        <div class="row">
          <label class="switch switch-info ml-2">
            <input
              type="checkbox"
              checked
              v-model="
                documentData.enforceConversionOfEditablePDFsIntoUneditablePDFs
              "
            />
            <span class="slider"></span>
          </label>

          <span class="text-mute" style="font-size: 0.9rem">
            Enforce conversion of editable PDFs into uneditable PDFs.
          </span>
          <i class="i-Information ml-2 mt-1"></i>
        </div>
        <div class="row mt-3">
          <label class="switch switch-info ml-2">
            <input
             @click="isDgLimit()"
              type="checkbox"
              checked
              v-model="
                documentData.autodetectionofdraftfolderdocumentsafterdaysofsending
              "
            />
            <span class="slider"></span>
          </label>

          <span class="text-mute" style="font-size: 0.9rem">
            <div style="display: flex; align-item: center">
              <span
                >Auto detection of draft folder documents after
                <input
                  min="1"
                  max="365"
                  type="number"
                  v-model="detectionDays"
                  @input="dgLimit()"
                  :disabled = "isEnable"
                  :class="{ invalid: customValue < 1 || customValue > 365 }"
                />
                days of creation</span
              >
            </div>
            <p style="font-size: 13px">
              (The number of days can range from 1 to 365)
            </p>
          </span>
          <i class="i-Information ml-2 mt-1"></i>
        </div>

        <hr />

        <div style="text-align: center">
          <div
            class="spinner spinner-primary mr-3"
            v-if="isLoading"
            style="position: fixed"
          ></div>
        </div>
        <hr />
        <b-row>
          <b-col>
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button
              v-if="!updateloader"
              variant="primary ripple"
              class="col-md-1 mb-3"
              @click="updateStamp()"
              >Update</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "DocumentConfigurations",
  },
  data() {
    return {
      documentData: {
        enforceConversionOfEditablePDFsIntoUneditablePDFs: false,
        autodetectionofdraftfolderdocumentsafterdaysofsending: false,
      },

      detectionDays: "",
      updateloader: false,
      isLoading: false,
      isEnable: true
    };
  },
  created() {
    this.getDocumentDetails();
  },
  methods: {
    isDgLimit(){
      debugger
      if(this.documentData.autodetectionofdraftfolderdocumentsafterdaysofsending){
         this.detectionDays = "";
         this.isEnable = true;
      }else {
        this.isEnable = false;
      }
    },
    getDocumentDetails() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if (res.apidata.data.documentConfigurations) {
            this.documentData = res.apidata.data.documentConfigurations;
            this.detectionDays = res.apidata.data.detectionDays;
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    dgLimit() {
      const my_floar = parseInt(this.detectionDays);
      const max_char = 365;
      const min_char = 0;
      if (my_floar > max_char) {
      this.detectionDays = 0
      }
      if(min_char > my_floar){
        this.detectionDays = 0
      }
    },
    updateStamp() {
      this.updateloader = true;
      var requestData = {
        documentConfigurations: this.documentData,
        detectionDays: this.detectionDays,
      };

      this.$apiService;
      this.$apiService
        .postCall("document_Configurations", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);
          this.updateloader = false;
          this.getDocumentDetails();
        });
    },
  },
};
</script>