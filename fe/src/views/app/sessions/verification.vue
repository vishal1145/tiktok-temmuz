<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden" style="width: 50%; margin-left: 11rem">
        <div class="row">
          <b-col md="12">
            <div class="p-4" v-if="successMessage">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <div class="mt-3 text-center">
                <h1 class="mb-3 text-18">Verification Done</h1>
              </div>
              <div class="mt-3 text-center">
                <router-link to="signIn" tag="a" class="text-muted">
                  <u>Sign In</u>
                </router-link>
              </div>
            </div>
            <div class="p-4" v-if="errorMessage">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <div class="mt-3 text-center">
                <h1 class="mb-3 text-18" style="text-align: center">
                  Link Expired
                </h1>
                <router-link to="signIn" tag="a" class="text-muted">
                  <u>Sign In</u>
                </router-link>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Verification Page",
  },

  data() {
    return {
      validationId: "",
      email: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      repeatPassword: "",
      submitStatus: null,
      successMessage: false,
      errorMessage: false,
    };
  },
  created() {
    this.validationId = this.$route.query._id;
    this.getValidationData();
  },
  methods: {
    getValidationData() {
      this.$apiService
        .getCall("verify-email?_id=" + this.validationId)
        .then((res) => {
         
          if (res.apidata.msg == "Verified") {
            this.successMessage = true;
          } else {
            this.errorMessage = true;
          }
        })
        .catch((error) => {
          this.errorMessage = true;
        });
    },
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
