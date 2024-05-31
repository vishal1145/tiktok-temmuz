<template>
    <div>
        <nav class="navbar for-nav container-fluid" @click="openPopup">
      <div class="container-fluid d-flex justify-content-between">
        <img
          :src="logo"
          alt=""
          width="104"
          height="35"
          class="d-inline-block align-text-top"
        />
        <a @click="openPopup" style="text-decoration: underline; cursor: pointer;" class=" text-primary">Sign Up</a>
      </div>
    </nav>
  
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div>
              <h2>Chat with us</h2>
              <p>Would you like to get live support from our team?</p>
              <p>
                <a href="mailto:info@temmuzajans.com">Send an email</a>
              </p>
              <p>
                <a href="https://wa.me/905310133151">Send a WhatsApp message</a>
              </p>
            </div>
            <div>
              <h2>Call us</h2>
              <p>You can call us every weekday between 10:00-17:00</p>
              <p>
                <a href="tel:+905310133151">+90 (531) 013 3151</a>
              </p>
            </div>
            <div>
              <h2>Visit us</h2>
              <p>Come and meet us face-to-face every weekday between 10:00-17:00</p>
              <address>
                Gazi Mh. Fatih Sultan Mehmet Blvd.<br>
                Yenimahalle Ankara<br>
                Gazi Mh. Fatih Sultan Mehmet Blvd.<br>
                Yenimahalle Ankara
              </address>
            </div>
          </div>
          <div class="col-md-6">
            <h2>Let's get started!</h2>
            <p>
              If you are a TikTok broadcaster or want to become one, you can attract the attention of millions of people with Temmuz Agency and increase your earnings up to ten times.
            </p>
            <form>
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" />
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phoneNumber" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="tiktokCode" class="form-label">TikTok Agency Code</label>
                <input type="text" class="form-control" id="tiktokCode" />
              </div>
              <div class="mb-3">
                <label for="referenceCode" class="form-label">Reference Code</label>
                <input type="text" class="form-control" id="referenceCode" value="ahmetaltai" readonly />
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="agree" />
                <label class="form-check-label" for="agree">
                  Click for the Information Text about Personal Data. By applying, you accept the terms of use.
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Complete Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <!-- <script>


  export default {
    name: "ContactForm"
  };
  
  </script> -->

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
  .container {
    max-width: 800px;
  }
  h2 {
    font-weight: bold;
  }
  form {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
  }

  .container[data-v-8a9f1160] {
    max-width: 1294px;
}
  </style>
  