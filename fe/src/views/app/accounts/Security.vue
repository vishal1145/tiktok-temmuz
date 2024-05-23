<template>
  <div class="main-content">
    <breadcumb :page="'Security'" :folder="'Accounts'" />
    <b-card title="Security">
      <b-form>
        <b-row>
          <b-col>
            <span class="section-info">
              Control your Department-wide Securtiy Settings here!
            </span>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enforce 1 - Factor Authentication before document preview</span
              >
              <input
                type="checkbox"
                v-model="securityData.enforce1FactorAuthentication"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enforce Raw Document URL with OTP Verification Message</span
              >
              <input
                type="checkbox"
                v-model="securityData.enforceRawDocumentUrlWithOtp"
              />
              <span class="slider"></span>
            </label>
             <div style="text-align: center">
            <div
              class="spinner spinner-primary mr-3"
              v-if="isLoading"
              style="position: fixed"
            ></div>
          </div>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enforce auto-delete after 7 days of Document Completion
              </span>
              <input
                type="checkbox"
                v-model="securityData.enforceAuthDeleteAfter7Days"
              />
              <span class="slider"></span>
            </label>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button
              v-if="!updateloader"
              variant="primary ripple"
              class="col-md-1 mb-3"
              @click="updateSecurity()"
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
    title: "Security",
  },
  data() {
    return {
      securityData: {},
      updateloader: false,
      isLoading: false
      
    };
  },
  created() {
    this.getSecurityDetails();
  },
  methods: {
    updateSecurity() {
      this.updateloader = true;
      var requestData = {
        security: this.securityData,
      };
      this.$apiService
        .postCall("security", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_SECURITY_MESSAGE);
          this.updateloader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.updateloader = false;
        });
    },
    getSecurityDetails() {
      this.isLoading = true
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if(res.apidata.data.security)
          {
          this.securityData = res.apidata.data.security;
          }
        this.isLoading = false

        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
  },
};
</script>
