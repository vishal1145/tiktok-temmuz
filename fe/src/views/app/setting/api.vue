<template>
  <div class="main-content">
    <breadcumb :page="'Setting'" :folder="'API'" />
    <b-card>
      <b-form>
        <div class="ml-4">
          <div class="ml-3">
            <div>
              <span class="text-info auth_tokens">AUTH TOKEN</span>
              <!-- <i class="i-Upload ml-3 mt-2" style="cursor: pointer"></i>
              <span class="learn_text ml-2 mt-2">Learn More</span> -->
              <p>
                Auth token is the unique identifier which lets Leegality
                validate the API Calls.
              </p>
            </div>

            <div class="row">
              <b-form-input
                value="Hello World"
                id="myInput"
                type="text"
                v-model="authToken"
                required
                disabled
                placeholder=""
                class="text-input"
              ></b-form-input>
              <i
                class="i-Data-Copy ml-3 mt-1 text-20"
                title="Copy"
                @click="myFunction()"
                style="cursor: pointer"
              ></i>
              <i
                class="i-Reload ml-3 mt-1 text-20"
                title="Regenerate"
                @click="reloadPage()"
                style="cursor: pointer"
              ></i>
            </div>
            <hr />
          </div>
          <div class="mt-5 ml-3">
            <div>
              <span class="text-info auth_tokens">PRIVATE SALT</span>
              <!-- <i class="i-Upload ml-3 mt-2" style="cursor: pointer"></i>
              <span class="learn_text ml-2 mt-2">Learn More</span> -->
              <p>
                Private salt can be used to be verify the webhook calls made by
                Leegality.
              </p>
            </div>

            <div class="row">
              <b-form-input
                v-model="privateSalt"
                @click="privateSa"
                value="RadheShyam"
                id="myCopyInput"
                type="text"
                required
                placeholder=""
                class="text-input"
                :formatter="formatYear"
              ></b-form-input>
              <i
                class="i-Data-Copy ml-3 mt-1 text-20"
                title="Copy"
                @click="dataCopy()"
                style="cursor: pointer"
              ></i>
              <!-- <i
                class="i-Upload-Window ml-3 mt-1 text-20"
                title="Update"
                @click="refreshPage()"
                style="cursor: pointer"
              ></i> -->
              <b-button
                @click="refreshPage()"
                style="cursor: pointer"
                type="button"
                class="ml-2"
                variant="default"
              >
                Update
              </b-button>
            </div>
          </div>
          <hr />
          <div style="text-align: center">
            <div class="spinner spinner-primary mr-3" v-if="isLoading"></div>
          </div>
          <div class="mt-5">
            <div>
              <label class="switch switch-info ml-3">
                <span class="text-info auth_tokens">WHITELIST IPs</span>
                <input
                  type="checkbox"
                  checked
                  v-model="isWhiteListIps"
                  @click="isSwitch()"
                />
                <span class="slider"></span>
              </label>
              <!-- <i class="i-Upload ml-3 mt-2"></i>
              <span class="learn_text ml-2 mt-2">Learn More</span> -->
              <p class="ml-3">
                Enabling IP White-listing will restrict IP address that can make
                API Calls to Leegality.
              </p>
            </div>

            <b-row>
              <b-col md="3" class="mb-3">
                <b-form-input
                  type="text"
                  required
                  placeholder=""
                  class="text-input"
                  v-model="whiteListIp"
                  :disabled="isenable"
                ></b-form-input>
              </b-col>
              <b-col md="3" class="mb-3">
                <div>
                  <div
                    class="spinner spinner-primary"
                    v-if="addIpLoader"
                    id="loader"
                  ></div>
                  <b-button
                    v-if="!addIpLoader"
                    class=""
                    type="button"
                    variant="default"
                    @click="addIP()"
                  >
                    + ADD
                  </b-button>
                </div>
              </b-col>
            </b-row>
            <b-row
              md="12"
              class="mb-3"
              v-for="(x, index) in whiteListIps"
              :key="x.id"
            >
              <b-col md="3">
                <b-form-input
                  type="text"
                  readonly
                  placeholder=""
                  v-model="x.ip"
                  class="text-input"
                ></b-form-input>
              </b-col>
              <b-col md="3">
                <b-button
                  class=""
                  type="submit"
                  variant="default"
                  @click="deleteIP(index)"
                  >DELETE</b-button
                >
              </b-col>
            </b-row>
          </div>
        </div>
        <hr />
        <div class="mt-3">
          <b-row>
            <b-col class="ml-3">
              <div
                class="spinner spinner-primary mt-3 ml-4"
                v-if="updateloader"
              ></div>
              <b-button
                v-if="!updateloader"
                variant="primary ripple"
                class="col-md-1 mt-3 ml-4"
                @click="updateCheck()"
                >Update</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    title: "API",
  },
  data() {
    return {
      checked: false,
      updateloader: false,
      form: {
        name: "",
        email: "",
        fName: "",
        lName: "",
        phone: "",
      },
      authToken: "",
      privateSalt: "",
      whiteListIp: "",
      isWhiteListIps: false,
      whiteListIps: [],
      addIpLoader: false,
      isLoading: false,
      isenable: true,
      addIpLoader: false,
    };
  },

  mounted() {
    this.loadUI();
  },
  methods: {
    isSwitch() {
      if (this.isWhiteListIps) {
        this.whiteListIp = "";
        this.isenable = true;
      } else {
        this.isenable = false;
      }
    },
    formatYear(e) {
      return String(e).substring(0, 32);
    },
    privateSa() {
      if (this.privateSalt.length > 32) {
        return alert("32 letters only");
      }
    },
    loadUI() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        //  this. reloadPage()
        .then((res) => {
          if (res.apidata.data.authToken) {
            this.authToken = res.apidata.data.authToken;
          }
          if (res.apidata.data.privateSalt) {
            this.privateSalt = res.apidata.data.privateSalt;
          }
          if (res.apidata.data.whiteListIps) {
            this.whiteListIps = res.apidata.data.whiteListIps;
          }
          if (res.apidata.data.isWhiteListIps) {
            this.isWhiteListIps = res.apidata.data.isWhiteListIps;
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    async reloadPage() {
      this.isLoading = true;
      this.$apiService.postCall("authToken_refresh").then((res) => {
        this.$toaster.makeToast("success", message.REFRESH_TOKEN_MESSAGE);
        this.isLoading = false;
        this.loadUI();
      });
    },

    refreshPage() {
      this.isLoading = true;
      this.$apiService
        .postCall("private_salt", {
          privateSalt: this.privateSalt,
        })

        .then((res) => {
          this.$toaster.makeToast("success", message.SALT_MESSAGE);
          this.isLoading = false;
          this.loadUI();
        });
    },

    updateCheck() {
      debugger;
      this.updateloader = true;
      if (this.isWhiteListIps && this.whiteListIps.length <= 0) {
        this.$toaster.makeToast("warning", message.ADDIP_MESSAGE);
        this.updateloader = false;
        return;
      }
      this.$apiService
        .postCall("whitelist_Ips", {
          whiteListIps: this.whiteListIps,
          isWhiteListIps: this.isWhiteListIps,
        })
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);
          this.updateloader = false;
          this.loadUI();
        });
    },

    myFunction() {
      /* Get the text field */
      var copyText = document.getElementById("myInput");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      this.$toaster.makeToast("success", message.CODY_COPY);
    },
    dataCopy() {
      /* Get the text field */
      var copyText = document.getElementById("myCopyInput");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      this.$toaster.makeToast("success", message.SALT_COPY);
    },
    addIP() {
      this.addIpLoader = true;
      if (!this.whiteListIp) {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.addIpLoader = false;
        return;
      }
      let isIp = this.ValidateIPaddress(this.whiteListIp);
      if (isIp) {
        this.whiteListIps.push({ ip: this.whiteListIp });
        this.whiteListIp = "";
        this.addIpLoader = false;
      } else {
        this.$toaster.makeToast("warning", message.IP_VALIDATION_MESSAGE);
        this.whiteListIp = "";
        this.addIpLoader = false;
      }
    },
    ValidateIPaddress(ipaddress) {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          ipaddress
        )
      ) {
        return true;
      }
      return false;
    },
    deleteIP(index) {
      this.whiteListIps.splice(index, 1);
      this.$toaster.makeToast("success", message.DELETE_DATA);
    },
  },
};
</script>
<style lang="scss" scoped>
.auth_tokens {
  font-size: 18px;
  // color: #1f7eae;
  font-weight: bolder;
}
.refresh_icon {
  width: 20px;
}
.redirect_icon {
  width: 10px;
}
.learn_text {
  font-size: 8px;
  color: #1f7eae;
}
.text-input {
  width: 15rem;
  margin-left: 16px;
}
</style>