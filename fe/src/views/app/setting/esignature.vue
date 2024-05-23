<template>
  <div class="main-content">
    <breadcumb :page="'Setting'" :folder="'eSignature'" />

    <b-card>
      <b-form>
        <div class="ml-4">
          <div class="mt-5">
            <div class="row">
              <h3 class="text-info auth_tokens">VIRTUAL SIGNATURE</h3>
              <!-- <i class="i-Upload ml-3 mt-2"></i>
              <span class="learn_text ml-2 mt-2">Learn More</span> -->
            </div>
            <b-col>
              <b-button
                class="btn btn text-set"
                type="submit"
                variant="default"
                v-model="virtualSignature"
                >SET UP</b-button
              >
            </b-col>
          </div>
          <div style="text-align: center;">
            <div class="spinner spinner-primary mr-3" v-if="isLoading"></div>
            </div>

          <hr />

          <div class="mt-5">
            <div class="row">
              <h3 class="text-info auth_tokens">DEFAULT ESIGNATURE SEAL</h3>
              <!-- <i class="i-Upload ml-3 mt-2"></i>
              <span class="learn_text ml-2 mt-2">Learn More</span> -->
            </div>
            <div class="dropdown">
              <b-button
                class="btn btn-secondary dropdown-toggle text-button"
                type="button"
                v-model="defaultEsignatureSeal"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="chooseImage()"
              >
                CUSTOM UPLOADS
              </b-button>
              <input
                id="chooseLogo"
                type="file"
                name="image"
                accept=".png,.jpg,.jpeg"
                style="display: none"
                @change="setImage"
              />
            </div>
            <div>
              <h4 class="text-preview mt-3">PREVIEW</h4>
              <b-col md="12 mb-30">
                <img
                  id="logo"
                  src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"
                  class="col-md-6 mb-3"
                  style="
                    border: 1px solid #111827;
                    padding: 20px;
                    border-radius: 3%;
                  "
                />
              </b-col>
            </div>
          </div>
        </div>
        <b-row>
          <b-col>
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
        <div class="text-loader">
          <div class="sk-chase" v-if="loading">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </div>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    title: "eSignature",
  },
  data() {
    return {
      loading: true,
      updateloader: false,
      isLoading: false
    };
  },
  mounted() {
    this.eSignatureData();
  },
  methods: {
    setImage(e) {
      this.logoloader = true;
      let formData = new FormData();
      const file = e.target.files[0];
      formData.append("file", file);
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          document.getElementById("logo").src = this.imgSrc;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
      this.$apiService
        .postFileCall("upload", formData)
        .then((res) => {
          this.form.brandLogo = res.apidata.urlPath;
          this.$toaster.makeToast("success", message.FILE_UPLOAD);
          this.logoloader = false;
        })
        .catch(() => {
          this.logoloader = false;
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },

    chooseImage() {
      document.getElementById("chooseLogo").click();
    },
    eSignatureData() {
      this.isLoading = true
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
         
          this.authToken = res.apidata.data.authToken;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
        this.isLoading = false


    },
    updateCheck() {
      this.$apiService
        .postCall("edit-eSignatureAndSeal", {
          virtualSignature: this.virtualSignature,
          defaultEsignatureSeal: this.defaultEsignatureSeal,
        })
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);

          this.eSignatureData();
        });
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
.text-preview {
  font-size: 12px;
  font-weight: bolder;
}
.text-set {
  margin-left: -30px;
}
.redirect_icon {
  width: 10px;
}
.learn_text {
  font-size: 8px;
  color: #1f7eae;
}
.text-button {
  margin-left: -15px;
}
.text-priew {
  width: 135px;
}
</style>