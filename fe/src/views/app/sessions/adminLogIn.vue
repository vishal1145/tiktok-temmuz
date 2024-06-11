<template>
  <div class="auth-layout-wrap">
    <!-- <top-nav></top-nav>  -->

    <b-modal
      id="modal-congratulations"
      size="md"
      title="Congratulations"
 
      hide-footer
      hide-header
      centered
    > <div class="for-cross  ul-cursor--pointer text-gray" @click="clickCancle()">x</div>
    <div
      class=" d-flex justify-content-center align-content-center align-items-center"
      
    >
      <!-- <button class="party" @click="startParty()">
      Party time 🥳 -->

      <span class="confetti" >
        <span v-for="index in confettiItems" :key="index"></span>
      </span>
      <!-- </button> -->
    </div>
      <b-row class="text-center p-3 mt-4">
       
        <b-col md="12"
          ><h3 class="text-30 font-weight-900 text-primary italianno-regular">
            Congratulations
          </h3></b-col
        >
        <b-col md="12"
          ><p class="m-0 text-25 font-weight-900" style="line-height: 0.5">
            You have just unlocked
          </p></b-col
        >
        <b-col md="12"
          ><p class="m-0 text-25 font-weight-900">
            Rs 500 as a bonus in your Wallet
          </p></b-col
        >
        <b-col md="12 " class="mt-2"
          ><div class="d-flex flex-column p-3 gradient-div rounded">
            <div
              class="p-2 bg-white text-gray d-flex w-100"
              style="
                overflow-wrap: anywhere;
                border: 1px solid rgba(13, 1, 25, 0.2);
                border-radius: 1.3rem;
              "
            >
              <a
                :href="this.referralLink"
                target="_blank"
                class="referral-link text-10"
                >{{ this.referralLink }}
              </a>
              <p
                class="border text-10 px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end"
                @click="copyReferralLink()"
                style="border-radius: 5px; width: 10em"
              >
                Copy
              </p>
            </div>

            <i class="text-18 font-weight-700 text-white mt-2" style=""
              >Get Rs 250 everytime someone signs from</i
            >
            <i
              class="m-0 text-18 font-weight-700 text-white"
              style="line-height: 0.7"
              >Your Unique Referral link above</i
            >
          </div></b-col
        >
        <b-col md="12 mt-2">
          <div class="d-flex text-center justify-content-center">
            <i class="m-0 text-16 font-weight-700 align-self-center"
              >Share it Now!</i
            >
            <div class="rounded-circle for-facebbok mx-3">
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </div>

            <div class="rounded-circle for-insta">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </div>
            <div class="rounded-circle for-whatsup mx-3">
              <i class="fa fa-whatsapp fa-2x mx-3" aria-hidden="true"></i>
            </div>
          </div>
        </b-col>
        <b-col md="12" class="mt-2">
          <b-button
            @click="clickGoWallet()"
            variant="primary"
            class="col-md-12"
          >
            Go to Wallet
          </b-button>
        </b-col>
      </b-row>
      <!-- <div class="row p-3">
        <div class="col-md-12">
          <ul>
            <li>
              Congratulations! You unlocked Rs 500 as a bonus in your Wallet,
              and now you can earn Rs 250 every time your unique referral link
              is used for Signup
            </li>
            <li>
              Unique Referral Link:
              <b-row>
                <b-col md="12" class="mb-2">
              
                  <div class="d-flex flex-row border rounded p-2">
                    <a
                      :href="referralLink"
                      class="referral-link"
                      target="_blank"
                      >{{ referralLink }} </a
                    >
                    <p
                      class="ul-card__border-radius border text-10 mb-0 px-2 py-0 ul-cursor--pointer ml-2 d-flex justify-content-center align-items-center"
                      @click="copyReferralLink()"
                      style="border-radius: 5px"
                    >
                      Copy
                    </p>
                  </div>
                </b-col>
              </b-row>
             
            </li>
          </ul>
        </div>
        <div class="col-md-12">
          <b-button
            @click="clickGoWallet()"
            variant="primary"
            class="col-md-12"
          >
            Go to Wallet
          </b-button>
        </div>
      </div> -->
      <!-- <div class="d-flex justify-content-end px-2">
        <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
        <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
       
      </div> -->
    </b-modal>
    <!-- <div
      class=" position-absolute d-flex justify-content-center align-content-center align-items-center"
      style="z-index: 200000"
    >
      <button class="party" @click="startParty()">
      Party time 🥳

      <span class="confetti">
        <span v-for="index in confettiItems" :key="index"></span>
      </span>
      </button>
    </div> -->
    <div class="d-flex flex-row gap-3" style="
    gap: 11px;
">    <button class="btn11 btn btn-primary" @click="changeLanguage('en')">English</button>
    <button  class="btn11 btn " @click="changeLanguage('tr')">Türkçe</button> </div>



    <div class="auth-contents">
      <div class="card o-hidden">
        <div class="row">
          <b-col md="12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">{{ $t('Sign In') }}</h1>

              <b-form @submit.prevent="signInSubmit" id="secondForm">
                <!-- <b-form-group label="Name">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    type="text"
                    placeholder="Enter full name"
                    v-model="name"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.name.minLength"
                    >Minimum
                    {{ $v.password.$params.minLength.min }} charaters.</b-alert
                  >
                </b-form-group>
                <b-form-group label="Phone">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Phone"
                    type="number"
                    v-model="phone"
                    @keydown="checkLength"
                  >
                  </b-form-input>
                </b-form-group> -->

                <b-form-group :label="$t('Email')">
    <b-form-input
      class="form-control form-control-rounded"
      maxlength="50"
      type="email"
      v-model="email"
    >
    </b-form-input>
  </b-form-group>

                <b-form-group :label="$t('Password')">
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
                <!-- <div class="mb-2">
                  <b-form-checkbox
                    id="checkbox-referal"
                    name="checkbox-referal"
                    @change="handleCheckBoxReferal"
                    unchecked-value="not_accepted"
                  >
                    <p class="text-gray-600 font-italic m-0">
                      Do you have referral
                    </p>
                  </b-form-checkbox>
                  <b-form-input
                    v-if="this.Referal"
                    class="form-control form-control-rounded"
                    label="Referal"
                    type="text"
                    v-model="referral"
                  >
                  </b-form-input>
                </div> --> 
      

                <b-col md="12 ml-5" v-if="isLoading">
                  <div class="spinner spinner-primary ml-5"></div>
                </b-col>

                <!-- <p>{{ $t('welcome') }}</p> -->
  
                <b-button
                  type="submit"
                  block
                  variant="primary"
                  v-if="!isLoading"
                  :disabled="submitStatus === 'PENDING' || $v.$invalid"
                  class="btn-rounded"
                  >{{ $t('Sign In') }}</b-button
                >

                <div class="mt-3 text-center">
                  <!-- <a
                    @click="openPopup"
                    style="text-decoration: underline; cursor: pointer"
                    class="text-primary"
                    >Sign In</a
                  > -->
                  <!-- <router-link to="signIn" tag="a" class="text-muted">
                    <u>Sign In</u>
                  </router-link> -->
                </div>

                <!-- <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo("success") }}
                  {{ this.$router.push("/") }}
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast("danger") }}
                </p>
                <div
                  v-once
                  class="typo__p"
                  v-if="submitStatus === 'PENDING'"
                ></div> -->
              </b-form>
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

import TopNav from "../../../containers/layouts/largeSidebar/TopNav.vue";
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignIn",
  },
  components: { TopNav },
  data() {
    return {
      confettiItems: [],
      name: "",
      referralLink:
        "",
      referral: "",
      email: "",
      bgImage: require("@/assets/images/back_ground.png"),
      logo: require("@/assets/images/food_img.png"),
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
    // phone: {
    //   required,
    //   minLength: minLength(10),
    // },
    // name: {
    //   required,
    //   minLength: minLength(5),
    // },
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
  mounted() {
    // this.startParty();
    // this.addCssRule();
    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);
  },
  computed: {
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },
  created() {
    // this.startParty();
    // setTimeout(() => {
    //   this.startParty();
    // }, 500);
    // window.addEventListener('click', this.handleClick);
    this.addCssRule();
    this.referral = this.$route.query.ref;
  },
  destroyed() {
    window.removeEventListener('click', this.handleClick);
  },
  methods: {
    ...mapActions(["signUserUp"]),
    //   validate form

    addCssRule() {
      const style = document.createElement("style");
      style.type = "text/css";
      const cssRule =
        "#modal-congratulations .modal-content {" +
        " border-radius: 1.3rem !important;" +
        "}" +
        style.appendChild(document.createTextNode(cssRule));
      document.head.appendChild(style);
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
    signInSubmit() {
      
      this.$store.commit("clearError");
      this.isLoading = true;
      this.$store.commit("setLoading", false);
      let requestData = {
        email: this.email,
        password: this.password,
      };

      this.$apiService
        .postCall("login", requestData)
        .then((user) => {
         
          if (user.error) {
            if (user.error.response.data.error == "Invalid credentials.") {
              this.isLoading = false;

              this.$toaster.makeToast(
                "warning",
                "Email or password is incorrect"
              );
              localStorage.removeItem("userInfo");
              this.$store.commit("setError", {
                message: user.error.response.data.msg,
              });
            } else {
              this.$bvModal.show("modal-attachment");
            }
          } else {
            this.$toaster.makeToast("success", "Successfully Logged In");
            this.$bvModal.hide("modal-signIn");
            const AdminRoles=user.apidata.data.role;
            
            localStorage.setItem("accesstoken", user.apidata.access_token);
            const newUser = { data: user.apidata.data };
            localStorage.setItem("userInfo", JSON.stringify(newUser));
            this.$store.commit("setUser", { uid: user.apidata.uid });
            if(AdminRoles=='Admin'){
              setTimeout(() => {
              this.$router.push("/");
            }, 500);
              
            }
            
          }
          this.isLoading = false;
        })
        .catch(function (error) {
          this.isLoading = false;
          localStorage.removeItem("userInfo");
          this.$store.commit("setError", { message: error });
          // ...
        });
    },

    // signUpSubmit() {
    //   this.$v.$touch();
    //   if (this.$v.$invalid) {
    //     this.submitStatus = "ERROR";
    //   } else {
    //     this.isLoading = true;
    //     const requestData = {
    //       email: this.email,
    //       password: this.password,
    //       first_name: this.name,
    //       phone: this.phone,
    //       referral: this.referral,
    //       role: "Admin"
    //     };

    //     this.$apiService
    //       .postCall("account/", requestData)
    //       .then((user) => {
    //         // this.$router.push("signIn");
    //         // this.$store.commit("setLoading", false);
    //         if (!user.error) {
    //           this.referralLink = user.apidata.referral_url;
    //           // this.referralLink = user.apidata.referral_url;
    //           localStorage.setItem("accesstoken", user.apidata.token);
    //           const newUser = { data: user.apidata.data };
    //           localStorage.setItem("userInfo", JSON.stringify(newUser));
    //           // this.$bvModal.show("modal-congratulations");
    //           this.$router.push("/");
    //           // setTimeout(() => {
    //           //   this.startParty();
    //           // }, 100);
    //           // this.startParty();
    //           // this.$bvModal.hide("modal-signUp");
    //           //   setTimeout(() => {
    //           //     // this.submitStatus = "OK";
    //           //     // window.location.reload();
    //           //     this.$router.push("/");
    //           //   }, 500);
    //           this.$toaster.makeToast(
    //             "success",
    //             "User successfully registered, Verification link sent to your mail"
    //           );
    //           this.isLoading = false;
    //           return;
    //         }
    //         if (
    //           user.error.response.data.email ==
    //           "user with this email already exists."
    //         ) {
    //           this.$toaster.makeToast("warning", "User email already exists");
    //           this.isLoading = false;
    //           return;
    //         } else if (
    //           user.error.response.data.phone ==
    //           "user with this phone already exists."
    //         ) {
    //           this.$toaster.makeToast("warning", "User phone already exists");
    //           this.isLoading = false;
    //           return;
    //         }
    //         // else {
    //         //   this.$router.push("signIn");

    //         //   setTimeout(() => {
    //         //     this.submitStatus = "OK";
    //         //     this.$router.push("signIn");
    //         //   }, 2000);
    //         //   this.$toaster.makeToast("success", "User successfully registered");
    //         //   this.isLoading = false;
    //         //   this.alertShow = true;
    //         //   return;
    //         // }

    //         // if (requestData) {
    //         //   setTimeout(() => {
    //         //     this.submitStatus = "OK";
    //         //     this.$router.push("/app/sessions/signIn");
    //         //   }, 3000);
    //         //   this.$toaster.makeToast("success", "User successfully registered");
    //         //   this.isLoading = false;
    //         // }
    //         // this.alertShow = true;
    //       })
    //       .catch((error) => {
    //         this.isLoading = false;
    //         // this.$store.commit("setLoading", false);
    //         localStorage.removeItem("userInfo");
    //         this.$store.commit("setError", { message: error });

    //         console.log(error);
    //       });
    //     // this.signUserUp({ email: this.email, password: this.password });
    //     // this.submitStatus = "PENDING";
    //   }
    // },
    startParty() {
      this.confettiItems = Array.from({ length: 300 }, (_, index) => index);

      // console.log(" gsdf", this.confettiItems);
      this.applyDynamicStyles();
    },
    applyDynamicStyles() {
      const confettiSpans = document.querySelectorAll(".confetti > span");

      confettiSpans.forEach((span) => {
        const shape = `calc((Math.random() - 0.5) * 60vw)`;
        const confettiSize = `${Math.random() * (20 - 5) + 5}px`;
        const hue = Math.random() * 360;
        const offsetY = `${(Math.random() - 0.5) * 100}vh`;
        const offsetX = `${(Math.random() - 0.5) * 100}vw`;
        const offsetZ = `${(Math.random() - 0.5) * 50}px`;
        const spin = `${Math.random() * 30}turn`;
        span.style.setProperty("--shape", shape);
        span.style.setProperty("--confetti-size", confettiSize);
        span.style.setProperty("--hue", hue);
        span.style.setProperty("--offsetY", offsetY);
        span.style.setProperty("--offsetX", offsetX);
        span.style.setProperty("--offsetZ", offsetZ);
        span.style.setProperty("--spin", spin);
      }); // Remove the semicolon here
    },

    clickGoWallet() {
      this.$router.push("/app/mydesk/transaction");
    },

    clickCancle() {
      this.$bvModal.hide("modal-congratulations");
      this.$router.push("/");
    },
    handleClick(event) {
      this.$router.push("/");
     
    },
    copyReferralLink() {
      const el = document.createElement("textarea");
      el.value = this.referralLink;
      document.body.appendChild(el);
      el.select();
      navigator.clipboard
        .writeText(this.referralLink)
        .then(() => {
          this.$toaster.makeToast(
            "success",
            "Referral link copied to clipboard!"
          );
        })
        .catch((error) => {
          // Error handling
          console.error("Unable to copy text to clipboard:", error);
        })
        .finally(() => {
          // Remove the temporary element
          document.body.removeChild(el);
        });
      // document.execCommand("copy");
      // document.body.removeChild(el);
    },
    checkLength(event) {
      if (this.phone.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault();
      }
    },
    // openPopup() {
    //   this.$bvModal.show("modal-attachment");
    // },

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
.auth-layout-wrap {
  /* position: relative; */
  align-items: end;
    padding: 10px;
  backdrop-filter: blur(100px); /* You can adjust the blur amount as needed */
}
.spinner.sm {
  height: 2em;
  width: 2em;
}
.italianno-regular {
  font-family: "Italianno", cursive;
  font-weight: 900;
  font-size: 4em;
  font-style: normal;
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

#modal-congratulations .modal-content {
  border-radius: 1.3rem !important;
}
.auth-layout-wrap .auth-contents {
  width: 350px !important;
  margin: auto;
}
.for-cross {
  position: absolute;
  top: 10px;
  text-align: center;
  right: 10px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid gray;
  border-radius: 50%;
  /* padding: 1em; */
  font-size: 13px;
  cursor: pointer;
  width: 30px;
}
/* .party {
  position: relative;
  font-size: 2rem;
  color: hsl(261, 0%, 100%);
  background-color: hsl(257, 93%, 58%);
  background-image: radial-gradient(hsl(263, 87%, 66%), transparent 75%);
  background-repeat: no-repeat;
  background-position: 0 100px;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 100vw;

  transition: background-position 200ms;
  transform-style: preserve-3d;
} */

/* .party:hover,
.party:focus {
  background-position: 0 35px;
} */

.party:active,
.party:active span {
  animation: none;
}
.confetti {
  position: absolute;
  inset: 50%;
  transform-style: preserve-3d;
  opacity: 0;
  z-index: 1000;
}
.confetti > span {
  --max-width: 20px;
  --min-width: 5px;
  --shape: 0.5;
  --horizontal-max: 80vw;
  --vertical-max: 35vh;
  --depth-max: 500px;
  --base-hue: 1;
  --hue-variation: 360;
  --max-spin: 10;

  position: absolute;
  
  width: 25px;
  aspect-ratio: 1;
  background-color: hsl(var(--hue), 100%, 50%);
  border-radius: var(--shape);
  width: max(var(--min-width), var(--confetti-size));

  /* @for $i from 1 through 50 {
    &:nth-child(#{$i}) {
      --shape: calc((Math.random() - var(--shape)) * 100vw);
      --confetti-size: calc(
        Math.random() * (var(--max-width) - var(--min-width)) + var(--min-width)
      );
      --hue: calc(var(--base-hue) + halfNegative(var(--hue-variation)));
      --offsetY: calc(halfNegative(var(--vertical-max)));
      --offsetX: calc(halfNegative(var(--horizontal-max)));
      --offsetZ: calc(halfNegative(var(--depth-max)));
      --spin: calc(Math.random() * var(--max-spin));
    }
  } */
}

.confetti {
  animation: confettiSettle var(--preloadDuration, 15s);
}

.confetti > span {
  animation: confettiSpread var(--preloadDuration, 6s)
    cubic-bezier(0, 0.85, 0, 1);
}

/* .party {
  animation: preventAnimationTrigger 0s;
} */

@keyframes confettiSpread {
  25% {
    transform: translateY(-90vh) translateX(45vh);
  }
  100% {
    transform: translateY(var(--offsetY)) translateX(var(--offsetX))
      translateZ(var(--offsetZ)) rotateX(var(--spin));
  }
}

@keyframes confettiSettle {
  0%,
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    /* opacity: 0; */
    transform: translateY(70vh);
  }
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

  .btn-primary {
    color: #fff;
    background-color: #a855f7ab;
    border-color: #a855f7ab !important;
}

.btn11 {
    padding: 0.15rem 0.25rem;
    font-size: 11px;
}
</style>
<style>
@import url("https://fonts.googleapis.com/css2?family=Italianno&display=swap");
</style>
