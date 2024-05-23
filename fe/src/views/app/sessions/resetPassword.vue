<template>
  <div class="auth-layout-wrap">
    <nav class="navbar container-fluid for-nav">
      <div class="container-fluid">
       
          <img
          src="@/assets/images/Zoombacar_nav_logo.png"
            alt=""
            width="70"
          height="70"
            class="d-inline-block align-text-top"
          />
      
      </div>
    </nav>
    <div class="auth-content">
      <div
        class="card o-hidden for-card"
       
      >
        <div class="row">
          <b-col md="12">
            <div class="p-4" v-if="!errorMessage">
              <div class="auth-logo text-center mb-30">
               
               <img :src="logo" />
             </div>
              <h1 class="mb-3 text-18">Reset Password</h1>
              <b-form @submit.prevent="submit">
                <b-form-group label="Password">
                  <div
                    class="position-absolute for-eye"
                    @click="togglePasswordVisibility"
                  >
                    <i v-if="showPassword" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                  </div>
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    :type="showPassword ? 'text' : 'password'"
                    v-model.trim="$v.password.$model"
                    
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.minLength"
                    >Minimum
                    {{ $v.password.$params.minLength.min }} charaters.</b-alert
                  >
                </b-form-group>

                <b-form-group label="Confirm password">
                  <div
                    class="position-absolute for-eye"
                    @click="confirmpassword"
                  >
                    <i v-if="confirmpasswordShow" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                  </div>
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    :type="confirmpasswordShow ? 'text' : 'password'"
                    v-model.trim="$v.repeatPassword.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.repeatPassword.sameAsPassword"
                    >Passwords must be identical.</b-alert
                  >
                </b-form-group>

                <b-button
                  type="button"
                  block
                  variant="primary"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  @click="submit()"
                  >Submit</b-button
                >

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  {{ this.$router.push("/app/sessions/searchCar") }} 
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast("danger") }}
                </p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </b-form>
            </div>
            <div class="p-4" v-if="errorMessage">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <div class="mt-3 text-center">
                <h1 class="mb-3 text-18">Error</h1>
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
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Reset-Password",
  },

  data() {
    return {
      confirmpasswordShow:false,
      showPassword:false,
      validationId: "",
      email: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/zoombacar.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      repeatPassword: "",
      submitStatus: null,
      errorMessage: false,
    };
  },
  created() {
    this.validationId = this.$route.query.id;
  },

  validations: {
    password: {
      required,
      minLength: minLength(5),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },

  computed: {
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },
  methods: {
    ...mapActions(["signUserUp"]),
    //   validate form
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$store.commit("setLoading", true);
        this.$store.commit("clearError");
        const requestData = {
          password: this.password,
        };

        this.$apiService
          .putCall(`forgetPassword/?id=${this.validationId}`, requestData)
          .then((user) => {
            this.$store.commit("setLoading", false);
            if (user.error) {
              this.errorMessage = true;
              return;
            } else {
              this.$toaster.makeToast("success", "Password Reset Successfully");
            }
          })
          .catch((error) => {
            this.$store.commit("setLoading", false);
            this.$store.commit("setError", error);
            localStorage.removeItem("userInfo");
            console.log(error);
          });
        // this.signUserUp({ email: this.email, password: this.password });
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 1000);
      }
    },
    
    confirmpassword() {
      this.confirmpasswordShow = !this.confirmpasswordShow;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Created Account", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      // console.log("submitted");
    },
  },
};
</script>
<style>
.for-nav {
  width: 100%;
  height: 80px;
  -webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
    0 1px 6px rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
  z-index: 100;
}
.for-eye {
  right: 12px;
  top: 7px;
  cursor: pointer;
}
.spinner.sm {
  height: 2em;
  width: 2em;
}
.for-card{
  width: 50%;
  margin-left: 11rem;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
  /* style="width: 50%; margin-left: 11rem; box-shadow: 2px 6px 6px 3px grey" */
 
}
@media screen and (max-width: 1024px){
  .for-card{
  width: 100%;
  margin-left: 0;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
}
}
</style>
