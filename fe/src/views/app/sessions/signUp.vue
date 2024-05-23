<template>
  <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    
    <nav class="navbar for-nav container-fluid" @click="openPopup">
      <div class="container-fluid d-flex justify-content-between">
        <img
          :src="logo"
          alt=""
          width="70"
          height="70"
          class="d-inline-block align-text-top"
        />
        <a @click="openPopup" style="text-decoration: underline; cursor: pointer;" class=" text-primary">Sign Up</a>
      </div>
    </nav>
    <b-modal
      id="modal-attachment"
      size="sm"
      title="Sign Up"
      style="height: 100px; "
      hide-footer
      hide-header
    >
    <div
        class="card o-hidden "
        
      >
        <div class="row">
          <!-- <div class="auth-right">
            <div class="auth-logo text-center">
              <img :src="logo" alt="" />
            </div>
          </div> -->
          <!-- <div
            class="col-md-6 text-center"
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pl-3 auth-right">
              <div class="auth-logo text-center mt-4">
                <img :src="logo" alt="" />
              </div>
              <div class="flex-grow-1"></div>
              <div class="w-100 mb-30">
                <router-link
                  to="signIn"
                  class="
                    btn
                    btn-outline-primary
                    btn-outline-email
                    btn-block
                    btn-icon-text
                    btn-rounded
                  "
                  href="signin.html"
                >
                  <i class="i-Mail-with-At-Sign"></i> Sign in with Email
                </router-link>
                <a
                  class="
                    btn
                    btn-outline-primary
                    btn-outline-google
                    btn-block
                    btn-icon-text
                    btn-rounded
                  "
                >
                  <i class="i-Google-Plus"></i> Sign in with Google
                </a>
                <a
                  class="
                    btn
                    btn-outline-primary
                    btn-outline-facebook
                    btn-block
                    btn-icon-text
                    btn-rounded
                  "
                >
                  <i class="i-Facebook-2"></i> Sign in with Facebook
                </a>
              </div>
              <div class="flex-grow-1"></div>
            </div>
          </div> -->

          <b-col md="12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign Up</h1>
              <b-form @submit.prevent="submit">
                <!-- <b-form-group label="Your Name">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    v-model.trim="$v.fName.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.fName.minLength"
                    >Name must have at least
                    {{ $v.fName.$params.minLength.min }} letters.</b-alert
                  >
                </b-form-group> -->

                <b-form-group label="Phone">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Phone"
                    type="tel"
                    v-model="phone"
                    maxlength="10"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Email">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    maxlength="50"
                    type="email"
                    v-model="email"
                  >
                  </b-form-input>
                </b-form-group>

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
                    label="Password"
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

                <!-- <b-form-group label="Repeat Password">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="password"
                    v-model.trim="$v.repeatPassword.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-3"
                    v-if="!$v.repeatPassword.sameAsPassword"
                    >Passwords must be identical.</b-alert
                  >
                </b-form-group> -->

                <!-- <b-alert show variant="success" dismissible v-if="alertShow">
                  Verification link sent to your mail.
                </b-alert> -->
                <b-col md="12 ml-5" v-if="isLoading">
                  <div class="spinner spinner-primary ml-5"></div>
                </b-col>
                <b-button
                  type="submit"
                  block
                  variant="primary"
                  v-if="!isLoading"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  >Sign Up</b-button
                >

                <div class="mt-3 text-center">
                  <router-link to="signIn" tag="a" class="text-muted">
                    <u>Sign In</u>
                  </router-link>
                </div>

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  {{ this.$router.push("/") }}
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast("danger") }}
                </p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
                  <!-- <div class="spinner sm spinner-primary mt-3"></div> -->
                </div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    
   
      

      
    </b-modal>
    <div class="auth-content">
     
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignUp",
  },

  data() {
    return {
      fName: "",
      email: "",
      bgImage: require("@/assets/images/back_ground.png"),
      logo: require("@/assets/images/zoombacar.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      phone: "",
      repeatPassword: "",
      submitStatus: null,
      alertShow: false,
      isLoading: false,
      showPassword: false,
    };
  },

  validations: {
    phone: {
      required,
      minLength: minLength(10),
    },

    password: {
      required,
      minLength: minLength(5),
    },
    // repeatPassword: {
    //   sameAsPassword: sameAs("password"),
    // },

    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleName: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleName']
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
        this.isLoading = true;
        // this.$store.commit("setLoading", true);
        // this.$store.commit("clearError");
        const requestData = {
          email: this.email,
          password: this.password,
          // "first_name": this.fName,
          phone: this.phone,
        };
        
        this.$apiService
          .postCall("account/", requestData)
          .then((user) => {
          
            // this.$router.push("signIn");
            // this.$store.commit("setLoading", false);
            if (!user.error) {
              setTimeout(() => {
                // this.submitStatus = "OK";
                this.$router.push("/");
              }, 2000);
              this.$toaster.makeToast(
                "success",
                "User successfully registered, Verification link sent to your mail"
              );
              localStorage.setItem("accesstoken", user.apidata.access_token);
              const newUser = { data: user.apidata.data };
              localStorage.setItem("userInfo", JSON.stringify(newUser));
              this.isLoading = false;
              return;
            }
            if (
              user.error.response.data.email ==
              "user with this email already exists."
            ) {
              console.log("eror", user.error.response.data.email);
              this.$toaster.makeToast("warning", "User email already exists");
              this.isLoading = false;
              return;
            } else if (
              user.error.response.data.phone ==
              "user with this phone already exists."
            ) {
              this.$toaster.makeToast("warning", "User phone already exists");
              this.isLoading = false;
              return;
            }
            // else {
            //   this.$router.push("signIn");

            //   setTimeout(() => {
            //     this.submitStatus = "OK";
            //     this.$router.push("signIn");
            //   }, 2000);
            //   this.$toaster.makeToast("success", "User successfully registered");
            //   this.isLoading = false;
            //   this.alertShow = true;
            //   return;
            // }

            // if (requestData) {
            //   setTimeout(() => {
            //     this.submitStatus = "OK";
            //     this.$router.push("/app/sessions/signIn");
            //   }, 3000);
            //   this.$toaster.makeToast("success", "User successfully registered");
            //   this.isLoading = false;
            // }
            // this.alertShow = true;
          })
          .catch((error) => {
            this.isLoading = false;
            // this.$store.commit("setLoading", false);
            localStorage.removeItem("userInfo");
            this.$store.commit("setError", { message: error });

            console.log(error);
          });
        // this.signUserUp({ email: this.email, password: this.password });
        // this.submitStatus = "PENDING";
      }
    },
    openPopup() {
      this.$bvModal.show("modal-attachment");
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
<style scoped>
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
.auth-layout-wrap {
  /* position: relative; */
  backdrop-filter: blur(100px); /* You can adjust the blur amount as needed */
}
.spinner.sm {
  height: 2em;
  width: 2em;
}
/* .for-card{
  width: 50%;
  margin-left: 11rem;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
 
} */
.for-eye {
  right: 12px;
  top: 7px;
  cursor: pointer;
}
.modal-body {
  padding: 0;
}
/* @media screen and (min-width: 768px) {
  .modal.show .modal-dialog {
    width: 20rem;
    
  }
}

@media screen and (max-width: 768px) {
  
  .modal {
  top: 15%;
}
} */

/* @media screen and (max-width: 1024px){
  .for-card{
  width: 100%;
  margin-left: 0;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
}} */

</style>
