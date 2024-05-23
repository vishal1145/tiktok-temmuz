<template>
  <div class="main-content">
    <breadcumb :page="'Branding'" :folder="'Accounts'" />
    <b-card title="Branding">
      <b-form>
        <b-row>
          <b-col>
            <span class="section-info">
              Manage the branding for your Signing Pages here!
            </span>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col md="12 mb-30">
            <b-form-group label="Brand Name" label-for="input-1">
              <b-form-input
                class="col-6"
                v-model="form.brandName"
                type="text"
                required
                placeholder="Enter Brand Name"
              ></b-form-input>
              <b-alert
                show
                variant="danger"
                class="error col mt-1"
                style="width: 50%"
                v-if="isShowAlert"
                >Please enter brand Name</b-alert
              >
            </b-form-group>
            
            <div style="text-align: center">
              
              <div
                class="spinner spinner-primary mr-3"
                v-if="isLoading"
                style="position: fixed"
              ></div>
            </div>
          </b-col>
          <div>
            <b-button
              v-if="!logoloader"
              variant="primary"
              @click="chooseImage()"
              class="ml-3"
            >
              Upload brand logo</b-button
            >
            <div class="spinner spinner-primary" v-if="logoloader"></div>
          </div>
          
          <b-col md="6 mb-30 mt-4">
            <input
              id="chooseLogo"
              type="file"
              name="image"
              accept=".png,.jpg,.jpeg"
              style="display: none"
              @change="setImage"
            />
          </b-col>
          <b-col md="12 mb-30">
            <img
              id="logo"
              src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"
              class="col-md-6 mb-3"
              style="
                border: 1px solid #111827;
                padding: 20px;
                border-radius: 3%;
                object-fit: cover;
                width: 100%;
              "
            />
          </b-col>
          

          <b-alert
            show
            variant="danger"
            class="error col mt-1"
            style="width: 50%"
            v-if="isShowAlert"
            >Please upload logo</b-alert
          >
        </b-row>
        <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
        <b-row>
          <b-col md="12 mb-30" class="update mt-3">
            <b-button
              v-if="!updateloader"
              variant="primary ripple"
              class="col-md-1 mb-3"
              @click="updateBranding()"
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
    title: "Branding",
  },
  components: {},
  data() {
    return {
      updateloader: false,
      logoloader: false,
      logo: "",
      imgSrc: "",
      form: {
        brandName: "",
        brandLogo: "",
      },
      isLoading: false,
      isShowAlert: false,
    };
  },
  created() {
    this.getBrandData();
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
    updateBranding() {
      this.updateloader = true;
      if (!this.form.brandName || !this.form.brandLogo) {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.updateloader = false;
        this.isShowAlert = true;
        this.isShowAlert = false;
        return;
      }

      this.$apiService
        .postCall("branding", {
          branding: this.form,
        })
        .then((res) => {
          this.updateloader = false;
          this.$toaster.makeToast("success", message.EDIT_BRAND_MESSAGE);
        })
        .catch((error) => {
          this.updateloader = false;
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    getBrandData() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if (res.apidata.data.branding) {
            this.form = res.apidata.data.branding;
            this.$apiService
              .postCall("download", { urlPath: this.form.brandLogo })
              .then((res) => {
                document.getElementById("logo").src =
                  "data:image/jpeg;base64," + res.apidata.fileData;
              })
              .catch((error) => {
                this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
                this.isLoading = false;
              });
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
  },
};
</script>
<style scoped>
#logo {
  max-width: 32.875rem;
  max-height: 25rem;
  min-height: 25rem;
  min-width: 32.875rem;
}
</style>
