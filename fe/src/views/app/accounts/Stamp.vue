<template>
  <div class="main-content">
    <breadcumb :page="'Stamp'" :folder="'Accounts'" />
    <b-card title="Stamp">
      <b-form>
        <b-row>
          <b-col>
            <span class="section-info"> Activate Stamp Access here! </span>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span>Activate Stamping</span>
              <input type="checkbox" v-model="stampData.activateStamping" />
              <span class="slider"></span>
            </label>
          </b-col>
           
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span>Activate Self-Upload(Series 00)</span>
              <input type="checkbox" v-model="stampData.activateSelfUpload" />
              <span class="slider"></span>
            </label>
          </b-col>
          <div style="margin: 0 auto;">
            <div
              class="spinner spinner-primary mr-3"
              v-if="isLoading"
            ></div>
          </div>
        </b-row>
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
    title: "Stamp",
  },
  data() {
    return {
      stampData: {},
      updateloader: false,
      isLoading: false
    };
  },
  created() {
    this.getStampDetails();
  },
  methods: {
    updateStamp() {
      this.updateloader = true;
      var requestData = {
        stamp: this.stampData,
      };
      this.$apiService
        .postCall("stamp", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_STAMP_MESSAGE);
          this.updateloader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.updateloader = false;
        });
    },
    getStampDetails() {
      this.isLoading = true
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if(res.apidata.data.stamp)
          {
          this.stampData = res.apidata.data.stamp;
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
