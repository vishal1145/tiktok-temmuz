<template>
  <div class="main-content">
    <breadcumb :page="'eSignature'" :folder="'Accounts'" />
    <b-card title="eSignature">
      <b-form>
        <b-row>
          <b-col>
            <span class="section-info">
              Manage your Allowed eSignature here!
            </span>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span>Aadhar</span>
              <input
                type="checkbox"
                v-model="aadharStatus"
                @change="toggleAadhar()"
              />
              <span class="slider"></span>
            </label>
          </b-col>

          <b-col md="12 mb-30 mr-3">
            <label class="switch switch-primary mr-3 ml-5">
              <span>OTP</span>
              <input
                type="checkbox"
                v-model="aadharData.otp"
                @change="changeAadhar()"
              />
              <span class="slider"></span>
            </label>
            <label class="switch switch-primary mr-3 ml-5">
              <span>Default</span>
              <input type="checkbox" disabled />
              <span class="slider"></span>
            </label>
          </b-col>

          <b-col md="12 mb-30 mr-3 ml-5">
            <label class="switch switch-primary mr-3">
              <span>Biometric</span>
              <input
                type="checkbox"
                v-model="aadharData.biometric"
                @change="changeAadhar()"
              />
              <span class="slider"></span>
            </label>
            <label class="switch switch-primary mr-3 ml-3">
              <span>Default</span>
              <input type="checkbox" disabled />
              <span class="slider"></span>
            </label>
          </b-col>

          <b-col md="12 mb-30 mr-3 ml-5">
            <label class="switch switch-primary mr-3">
              <span>IRIS</span>
              <input
                type="checkbox"
                v-model="aadharData.iris"
                @change="changeAadhar()"
              />
              <span class="slider"></span>
            </label>
            <label class="switch switch-primary mr-3 ml-5">
              <span>Default</span>
              <input type="checkbox" disabled />
              <span class="slider"></span>
            </label>
          </b-col>

          <div style="margin: 0 auto">
            <div class="spinner spinner-primary mr-3" v-if="isLoading"></div>
          </div>
          <b-col md="12 mb-30 mr-3">
            <label class="switch switch-primary mr-3">
              <span>Virtual Sign</span>
              <input
                type="checkbox"
                v-model="virtualSignStatus"
                @change="toggleVirtual()"
              />
              <span class="slider"></span>
            </label>
            <label class="switch switch-primary mr-3 ml-5">
              <span>Default</span>
              <input type="checkbox" disabled />
              <span class="slider"></span>
            </label>
          </b-col>

          <b-col md="12 mb-30 mr-3 ml-5">
            <label class="switch switch-primary mr-3">
              <span>Draw Type</span>
              <input
                type="checkbox"
                v-model="virtualSign.drawType"
                @change="changeVirtual()"
              />
              <span class="slider"></span>
            </label>
          </b-col>

          <b-col md="12 mb-30 mr-3 ml-5">
            <label class="switch switch-primary mr-3">
              <span>Text Type</span>
              <input
                type="checkbox"
                v-model="virtualSign.textType"
                @change="changeVirtual()"
              />
              <span class="slider"></span>
            </label>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div>
              <div
                class="spinner spinner-primary"
                v-if="updateloader"
              ></div>
              <b-button
                variant="primary ripple"
                class="col-md-1 mb-3"
                @click="updateeSignature()"
                v-if="!updateloader"
                >Update</b-button
              >
            </div>
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
    title: "Esignature",
  },
  data() {
    return {
      aadharData: {},
      virtualSign: {},
      aadharStatus: false,
      virtualSignStatus: false,
      updateloader: false,
      isLoading: false,
    };
  },
  created() {
    this.getesignatureDetails();
  },
  methods: {
    updateeSignature() {
      this.updateloader = true;
      let esignData = {
        aadhar: this.aadharData,
        virtualSign: this.virtualSign,
        aadharStatus: this.aadharStatus,
        virtualSignStatus: this.virtualSignStatus,
      };
      let requestData = {
        eSignature: esignData,
      };
      this.$apiService
        .postCall("eSignature", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_ESIGN_MESSAGE);
          this.updateloader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.updateloader = false;
        });
    },
    getesignatureDetails() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if (res.apidata.data.eSignature) {
            this.aadharData = res.apidata.data.eSignature.aadhar;
            this.virtualSign = res.apidata.data.eSignature.virtualSign;
            this.aadharStatus = res.apidata.data.eSignature.aadharStatus;
            this.virtualSignStatus =
              res.apidata.data.eSignature.virtualSignStatus;
          }
          this.isLoading = false;
        })

        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    toggleAadhar() {
      if (this.aadharStatus) {
        this.aadharData.otp = true;
        this.aadharData.biometric = true;
        this.aadharData.iris = true;
      } else {
        this.aadharData.otp = false;
        this.aadharData.biometric = false;
        this.aadharData.iris = false;
      }
    },
    toggleVirtual() {
      if (this.virtualSignStatus) {
        this.virtualSign.drawType = true;
        this.virtualSign.textType = true;
      } else {
        this.virtualSign.drawType = false;
        this.virtualSign.textType = false;
      }
    },
    changeAadhar() {
      if (
        !this.aadharData.otp &&
        !this.aadharData.biometric &&
        !this.aadharData.iris
      ) {
        this.aadharStatus = false;
      } else {
        this.aadharStatus = true;
      }
    },
    changeVirtual() {
      if (!this.virtualSign.drawType && !this.virtualSign.textType) {
        this.virtualSignStatus = false;
      } else {
        this.virtualSignStatus = true;
      }
    },
  },
};
</script>
