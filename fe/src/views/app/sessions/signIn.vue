<template>
  <div class="main-div d-flex flex-row justify-content-between overflow-hidden">
    <!-- :style="{ backgroundImage: 'url(' + bgImage + ')' }" -->
    <!-- <top-nav></top-nav> -->
    <!-- <nav class="navbar container-fluid for-nav">
      <div class="container-fluid d-flex justify-content-between"> -->
        <!-- <img
          :src="logo"
          alt=""
          width="100"
          height="40"
          class="d-inline-block align-text-top"
        /> -->
        <!-- <a
          v-if="userName == null && userName == undefined"
          @click="openPopup"
          style="cursor: pointer; text-decoration: underline"
          class="text-primary"
        >
        {{ $t('Sign In') }}
        </a> -->
        <!-- <div v-else class="dropdown">
          <b-dropdown
            id="dropdown-1"
            text="Dropdown Button"
            class="m-md-2 user col align-self-end"
            toggle-class="text-decoration-none"
            no-caret
            variant="link"
          >
            <template slot="button-content">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                id="profilelogo"
                alt
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                height="30"
                width="30"
                style="border-radius: 50%; object-fit: cover"
              />
            </template>

            <div class="dropdown-menu-right" aria-labelledby="userDropdown">
              <div class="dropdown-header" v-if="this.role">
                <i class="i-Lock-User mr-1"
                  ><span class="ml-2" style="font-size: 0.813rem">{{
                    this.userName
                  }}</span></i
                >
              </div>
              <<a class="dropdown-item">Account settings</a>
              <a
                class="dropdown-item"
                v-if="this.role !== 'Admin' && this.role"
              >
                <li
                  class="nav-item"
                  data-item="profiledata"
                  :data-submenu="false"
                >
                  <router-link tag="a" class to="/app/profiledata/profile">
                    <a class="nav-item-hold" href="#">
                      <i class="nav-icon i-Drop"></i> 
                      <span class="nav-text" style="color: black">{{
                        $t("Profile")
                      }}</span>
                    </a>
                    <div class="triangle"></div>
                  </router-link></li
              ></a>
              <a
                v-if="userName !== null && userName !== undefined"
                @click.prevent="moveNext"
                class="dropdown-item"
                style="cursor: pointer"
                >Transaction</a
              >
              <a
                v-if="userName !== null && userName !== undefined"
                class="dropdown-item"
                href="#"
                @click.prevent="logoutUser"
                >Sign out</a
              >
              <a
                v-else
                @click="openPopup"
                style="cursor: pointer"
                class="dropdown-item"
              >
                Sign In
              </a> 
            </div>
          </b-dropdown>
        </div>
        <p @click="redirectMainPage" class="cursor-pointer" v-if="userName !== null && userName !== undefined">{{ userName }}</p>
        <a v-else @click="openPopup" style="text-decoration: underline; cursor: pointer" class="text-primary">
          Sign In
        </a> 
      </div>
    </nav> -->

    <b-col lg="6" xl="6" mt="3" class="DisplayNone">
      <div
      class="auth-content px-5 backgroundNorepeat backgr"
   
    >
      <div
        class="d-flex flex-column justify-content-center  backgroundNorepeat align-content-center text-center for-img align-items-center"
      >
        <!-- <p class="fa-2x font-weight-900 p-0 m-0 for-ftext animasyonmetin">
          Temmuz Agency
        </p> -->
        <!-- <p class="for-text">TikTok LIVE Resmi Ajans Partneri</p> -->

        <img
        :src="'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png'"
          alt=""
          width="50vw"
          height="100vh"
          class="d-inline-block align-text-top"
        />
        <b-row>
          <b-col> </b-col>
        </b-row>
      </div>
    </div>

    
    </b-col>

    <b-col lg="6" xl="6" mt="3" class="align-self-center h-100">
     
  <div>
 
    <div
      id="modal-signIn"
      title="Sign In"
      size="sm"
      hide-footer
      hide-header
      v-if="activeChild === 1"
    >
      <div class="o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4 px-5 paddingLaptop">
              <div class="auth-logo text-left mb-30">
                <img :src="logo" />
              </div>

              <h3 class="mb-1 hw">Welcome to Temmuz! 👋</h3>
              <p class="mb-3 pw">Please sign-in to your account and start the adventure</p>
              <b-form @submit.prevent="formSubmit" id="firstForm">
                <b-form-group :label="$t('User Name')" class="text-12 pw">
                  <b-form-input
                    class="form-control-rounded pw"
                    type="text"
                    v-model="email"
                    email
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group :label="$t('Password')" class="text-12 pw my-2">
                  <div class="position-absolute for-eye" @click="togglePasswordVisibility">
                    <i v-if="showPassword" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                  </div>
                  <b-form-input
                    class="form-control-rounded pw"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                  ></b-form-input>
                </b-form-group>

                <div class="mb-2 d-flex flex-row justify-content-between" >
            <div class="form-check pw">
              <input class="form-check-input" type="checkbox" id="remember-me">
              <label class="form-check-label ml-1" for="remember-me">
                Remember Me
              </label>
            </div>

            <div>
              <div class="mt-3 text-center">
                <a
                  @click="showChild(3)"
                  style="text-decoration: underline; cursor: pointer"
                  class="text-primary"
                >
                  {{ $t('Forgot Password') }}
                </a>
              </div>
            </div>


          </div>
                <div>
                  <b-col md="12 ml-5" v-if="isLoading">
                    <div class="spinner spinner-primary ml-5"></div>
                  </b-col>
                  <b-button
                    type="submit"
                    tag="button"
                    class="btn-rounded btn-block mt-2 "
                    variant="primary mt-2"
                    :disabled="loading"
                    v-if="!isLoading"
                  >
                    {{ $t('Sign In') }}
                  </b-button>
                </div>
                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>


                <p class="pw text-center py-2">
      New on our platform? 
      <a href="#" @click.prevent="showChild(2)" class="text-primary text-decoration-underline">
        {{ $t('Create an account') }}
      </a>
    </p>

                <!-- New on our platform? Create an account
                <b-button
                  block
                  @click="showChild(2)"
                  variant="primary mt-2"
                  class="btn-rounded"
                >
                  {{ $t('Create an account') }}
                </b-button> -->
              </b-form>
      
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div
      id="modal-signUp"
      size="sm"
      :title="$t('Sign Up')"
      hide-header
      hide-footer
      v-else-if="activeChild === 2"
    >
      <div  class="o-hidden">
        <div class="row">
          <b-col md="12">
            <div class="p-4 px-5 paddingLaptop">
              <div class="auth-logo text-left mb-30">
                <img :src="logo" />
              </div>


              <h3 class="mb-1 hw">Adventure starts here 🚀</h3>
              <p class="mb-3 pw">Make your app management easy and fun!

</p>
        

              <b-form-group :label="$t('Username')" class="pw"> 
                  <b-form-input
                    class="form-control form-control-rounded pw"
                    :label="$t('User Name')"
                    v-model="user_name"
                    maxlength="20"
                  ></b-form-input>
                </b-form-group>   <b-form-group class="pw" :label="$t('Email')">
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Name"
                    maxlength="50"
                    type="email"
                    v-model="email"
                  ></b-form-input>
                </b-form-group>
              <b-form @submit.prevent="signUpSubmit" id="secondForm">
                <b-form-group  class="pw" :label="$t('Phone')">
                  <!-- <b-form-input
  class="form-control form-control-rounded"
  :label="$t('Phone')"
  type="tel"
  :value="phone"
  maxlength="10"
  @input="validatePhone"
/> -->

<input
                    type="number"
                    class="form-control form-control-rounded"

                    id="currentaddress1"
                    v-model="phone"
                    @input="enforceMaxLength"
                   
                    placeholder="Mobile Number"
                  />


                 
                </b-form-group>
             
                <b-form-group class="pw" :label="$t('Password')">
                  <div class="position-absolute for-eye" @click="togglePasswordVisibility">
                    <i v-if="showPassword" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                  </div>
                  <b-form-input
                    class="form-control form-control-rounded"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model.trim="$v.password.$model"
                  ></b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error col mt-1"
                    v-if="!$v.password.minLength"
                  >
                    Minimum {{ $v.password.$params.minLength.min }} charaters.
                  </b-alert>
                </b-form-group>

                <div class="form-check pw pb-2 py-1 pr-2">
              <input class="form-check-input marginTopSix" type="checkbox" id="remember-me">
              <label class="form-check-label ml-1" for="remember-me">
                <p class="pw text-center  ">
                  I agree to
      <a href="https://temmuzajans.com/tiktok-ajansi-nedir" class="text-decoration-underline">
        {{ $t(' privacy policy & terms') }}
      </a>
    </p>
              </label>
            </div>

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
                >
                  {{ $t('Sign Up ') }}
                </b-button>
                <div class="mt-3 text-center">
                  <!-- <a
                    @click="showChild(1)"
                    style="text-decoration: underline; cursor: pointer"
                    class="text-primary"
                  >
                    {{ $t('Sign In') }}
                  </a> -->

                  <p class="pw text-center pb-2">
                    Already have an account? 
      <a href="#" @click.prevent="showChild(1)" class="text-primary text-decoration-underline">
        {{ $t('Sign in instead') }}
      </a>
    </p>
                </div>
                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                  {{ makeToastTwo('success') }}
                  {{ this.$router.push('/') }}
                </p>
                <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
                  {{ makeToast('danger') }}
                </p>
                <div v-once class="typo__p" v-if="submitStatus === 'PENDING'"></div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    </div>

  
    <div
      id="modal-forget-passwords"
      size="sm"
      title="Forgot Password"
      hide-header
      hide-footer
      v-else-if="activeChild === 3"
    >
      <div class="o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4 paddingLaptop">
              <div class="auth-logo text-left mb-30">
                <img :src="logo" />
              </div>
              <h3 class="mb-1 hw">Forgot Password? 🔒</h3>
              <p class="mb-3 pw">Enter your email and we'll send you instructions to reset your password

</p>
<form>
  <div v-if="!otpSent">
    <div class="form-group">
      <label for="email">{{ $t('Email address') }}</label>
      <input
        id="email"
        v-model="userEmail"
        placeholder="abc@gmail.com"
        class="form-control form-control-rounded"
        type="email"
      />
      <b-alert
        show
        variant="danger"
        class="error col mt-1"
        v-if="notFound"
      >
        {{ $t('Email not found') }}
      </b-alert>
    </div>
    <button
      v-if="!loader"
      type="button"
      class="btn btn-primary btn-block btn-rounded mt-3"
      @click="reset"
    >
      {{ $t('Send Otp') }}
    </button>
  </div>

  <div v-else-if="otpSent && !otpVerified">
    <div class="form-group">
      <label for="otp">{{ $t('OTP') }}</label>
      <input
        id="otp"
        v-model="otp"
        :placeholder="$t('Enter OTP')"
        class="form-control form-control-rounded"
        type="number"
      />
      <b-alert
        show
        variant="danger"
        class="error col mt-1"
        v-if="otpInvalid"
      >
        {{ $t('Invalid OTP') }}
      </b-alert>
    </div>
    <button
      v-if="!loader"
      type="button"
      class="btn btn-primary btn-block btn-rounded mt-3"
      @click="verifyOtp"
    >
      {{ $t('Verify Otp') }}
    </button>
  </div>

  <div v-else-if="otpVerified">
    <div class="form-group">
      <label for="password">{{ $t('New Password') }}</label>
      <input
        id="password"
        v-model="newPassword"
        :placeholder="$t('Enter your new password')"
        class="form-control form-control-rounded"
        type="password"
      />
    </div>
    <button
      v-if="!loader"
      type="button"
      class="btn btn-primary btn-block btn-rounded mt-3"
      @click="updatePassword"
    >
      {{ $t('Update Password') }}
    </button>
  </div>
</form>

              <div class="mt-3 text-center">
                <router-link to="signIn" tag="a" class="text-muted" >
                  <u   @click="showChild(1)">{{ $t('Back To Login') }}</u>

                  
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </b-col>
 

    <!-- <b-modal
      id="modal-attachment"
      size="lg"
      title="Account Suspended"
      style="height: 100px"
    >
      <b-row>
        <b-col md="6">
          <i
            class="fa fa-exclamation-triangle text-danger fa-2x mb-3"
            aria-hidden="true"
          >
            Warning !</i
          >
        </b-col>
        <b-col md="12">
          Sorry, looks like your accout got suspended, if you think this is by
          mistake then please contact Zoomba Cars Customer Care via whatsapp on
          8790519679
        </b-col>
      </b-row>
    </b-modal> -->



    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
<!--  
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row mt-5 px-5">
            <div
              v-for="(row, index) in visibleRows"
              :key="index"
              class="col-md-4 mb-3"
            >
              <div class="card">
                <img
                  :src="parseImage(row.images)"
                  class="card-img-top"
                  alt="Car Image"
                />
                <div class="card-body">
                  <div class="card-text">
                    <div class="row mb-2 pl-3">
                      <div class="colX">
                        <div class="registration_number">
                          {{ row.registration_number }}
                        </div>
                      </div>
                      <div class="float-right">
                        <div class="d-flex align-items-center">
                          <b-button
                            variant="primary"
                            class="for-btn"
                            @click="clickBookNow(row.id, row.price)"
                            >Book Now</b-button
                          >

                        <i
                        class="fa fa-trash"
                        style="
                          font-size: 16px;
                          color: red;
                          margin-left: 10px;
                          cursor: pointer;
                        "
                        @click="deleteTemplate(row.id)"
                      ></i> 
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      {{ row.model }} | {{ row.make }} | {{ row.body_type }}
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="d-flex align-items-center mb-2 gap-between">
                          <img
                            class="svg_icon"
                            src="https://www.mychoize.com/_next/static/media/pickup_vehical.c834bf16.svg"
                            alt=""
                          />
                          {{ row.seating_capacity }} Seater
                        </div>
                        <div class="d-flex align-items-center mb-2 gap-between">
                          <img
                            class="svg_icon"
                            src="https://www.mychoize.com/_next/static/media/petrol.95a6232f.svg"
                            alt=""
                          />
                          <div>{{ row.fuel_type }}</div>
                        </div>
                         <div class="d-flex align-items-center mb-2 gap-between"><img class="svg_icon blue_icon"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOHPJeBer0rc5sn-TjI7W8gmP2dJ4IlFusdmFYx9Clg&s"
                      alt="">
                    <div>{{ row.engine }}</div>
                  </div> 
                      </div>
                      <div class="col-md-6">
                        <div class="card">
                          <div class="card-body">
                            <div class="charge cursor-pointer active">
                              <div>
                                <b>₹&nbsp;{{ row.price }}</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="hr"></div>
                    {{ row.power }}
            {{ row.car_features }} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev ul-cursor--pointer"
        role="button"
        data-slide="prev"
        @click="moveCarousel(-1)"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next ul-cursor--pointer"
        role="button"
        data-slide="next"
        @click="moveCarousel(1)"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->

    <!-- <b-modal
      id="modal-attachmentCar"
      size="sm"
      title="Car attachement"
      style="height: 100px"
      hide-footer
      hide-header
    >
    
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30"> <img :src="logo" /></div>
              <h1 class="mb-3 text-18">Forgot Password</h1>
             
              <div class="mt-3 text-center">
                <router-link to="signIn" tag="a" class="text-muted">
                  <u>Sign In</u>
                </router-link>
              </div>
            </div>
          </div>
          
        </div>
    
      
    </b-modal> -->
    <!-- <div class="for-heading">
        <h4 class="for-heading">Rent a car in you areas</h4>
        <h5 class="text-white sub_heading font-weight-600">
          Book your drive now!
        </h5>
      </div> -->
  </div>
</template>
<script>
// import TopNav from "./TopNav";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import message from "../../../message";
import TopNav from "../../../containers/layouts/largeSidebar/TopNav.vue";

export default {
  components: { TopNav, DateRangePicker },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignIn",
  },
  data() {
    return {
      otpVerified:false,
      otpSent: false,
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
      },
      currentIndex: 0,
      numToShow: 3,
      currentDate: new Date(),
      showPassword: false,
      otp: "",
      user_name:"",
      phone: "",
      email: "",
      password: "",
      // // password: "vue006",
      userId: "",
      bgImage: require("@/assets/images/car_sec.png"),
      logo: require("@/assets/images/zoombacar.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      isLoading: false,
      role: "",
      fName: "",
      email: "",
      loader: false,
      password: "",
      phone: "",
      repeatPassword: "",
      submitStatus: null,
      alertShow: false,
      isLoading: false,
      showPassword: false,
      rows: [],
      userName: null,
      userEmail: "",
      password: "",
      loader: false,
      notFound: false,
      id: null,

      selectedDate: null,
      firstSelectedDate: null,
      secondSelectedDate: null,
      isDatePickerVisible: false,
      activeChild: 1
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
  created() {
    var storedUser = localStorage.getItem("userInfo");

    var parsedUser = JSON.parse(storedUser);

    if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
      this.userName = parsedUser.data.email.replace("@gmail.com", "");
      this.role = parsedUser.data.role;
    }
    if (this.role === "Admin") {
      this.$router.push("/");
    }

    this.getAllCarData();

    // console.log(this.role);
    // console.log(storedUser);

    // this.getAllUsers();
  },

  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    visibleRows() {
      return this.rows.slice(
        this.currentIndex,
        this.currentIndex + this.numToShow
      );
    },

    ...mapGetters(["loggedInUser", "loading", "error"]),
  },

  methods: {
    ...mapActions(["login"]),

    // redirectMainPage() {
    //   this.$router.push("/");
    // },

    enforceMaxLength() {
      const inputString = this.phone.toString();
      const cleanedInput = inputString.replace(/^0+|[^0-9]+/g, "");

      if (cleanedInput.length > 10) {
        this.phone = parseInt(cleanedInput.slice(0, 10), 10);
      } else {
        this.phone = parseInt(cleanedInput, 10);
      }
    },

    verifyOtp() {
  debugger;
  this.loader = true;
  var reqData = {
    email: this.userEmail,
    otp: this.otp,
  };

  if (!this.userEmail || !this.otp) {
    this.$toaster.makeToast("warning", "Please fill in all fields.");
    this.loader = false;
    return;
  }

  this.$apiService
    .postCall("auth/verify-otp", reqData)
    .then((user) => {
      if (user.error) {
        this.$toaster.makeToast("warning", "Please enter a valid OTP.");
      } else {
        this.$toaster.makeToast("success", "OTP verified successfully!");
        this.otpVerified = true;
      }
      this.loader = false;
    })
    .catch((error) => {
      // Handle API call error
      this.$toaster.makeToast("warning", "An error occurred. Please try again.");
      console.error("API Error:", error);
      this.loader = false;
    });
}

,

updatePassword() {
  debugger;
  this.loader = true;
  var reqData = {
    email: this.userEmail,
    new_password: this.newPassword,
  };

  if (!this.newPassword) {
    this.$toaster.makeToast("warning", "Please fill in all fields.");
    this.loader = false;
    return;
  }

  this.$apiService
    .postCall("auth/update-password", reqData)
    .then((user) => {
      this.$toaster.makeToast("success", "Password is successfully updated!");

      this.loader = false;

    
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => {
    
      this.$toaster.makeToast("warning", "An error occurred. Please try again.");
      console.error("API Error:", error);
      this.loader = false;
    });
}
,
    // validatePhone(event) {
    //   const value = event.target.value;
    //   // Only keep numeric characters
    //   this.phone = value.replace(/\D/g, '');
    // },
    showChild(childNumber) {
      // debugger;
   
      this.activeChild = childNumber;  
      
    },
    moveNext() {
      this.$router.push("/app/mydesk/transaction");
    },
    moveCarousel(direction) {
      const newIndex = this.currentIndex + direction;
      if (newIndex >= 0 && newIndex <= this.rows.length - this.numToShow) {
        this.currentIndex = newIndex;
      }
    },
    showCalendar() {
      this.$refs.datePicker.togglePicker(true);
    },
    hideCalendar() {
      this.$refs.datePicker.togglePicker(false);
    },

    openDatePicker() {
      // this.$refs.datePicker.showPicker();
      this.$refs.datePicker.$el.click();
      // this.$refs.datePicker.openPicker();
    },

    formatSelectedDate(dateString) {
      if (!dateString) return ""; // Return empty string if no date is selected
      const date = new Date(dateString);
      const options = {
        day: "numeric",
        month: "short",
        year: "2-digit",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDate = date.toLocaleDateString("en-US", options);
      return formattedDate.replace(/(\d+:\d+)(:\d+ )?/, "$1 "); // Removing seconds and AM/PM part
    },
    getCalenderData() {
      if (!this.firstSelectedDate) {
        this.firstSelectedDate = this.selectedDate;
      } else if (!this.secondSelectedDate) {
        this.secondSelectedDate = this.selectedDate;
      }
      //  else {
      //   // Reset selection if both dates are already selected
      //   this.firstSelectedDate = null;
      //   this.secondSelectedDate = null;
      //   // Reassign the first selected date
      //   this.firstSelectedDate = date;
      // }
    },

    formSubmit() {
    // debugger;
    // this.login({ email: this.email, password: this.password });
    this.$store.commit("clearError");
    this.loader = true;
    this.$store.commit("setLoading", false);
    let requestData = {
        user_name: this.email,
        password: this.password,
        
    };

    this.$apiService
        .postCall("auth/login", requestData)
        .then((user) => {
            if (user.error) {
                console.log("error", user.error.response.data);
                if (
                    user.error ||
                    user.error.response ||
                    user.error.response.message === "Invalid user"
                ) {
                    this.loader = false;
                    console.log("Invalid user error detected");

                    this.makeToast(
                        "warning",
                        "User email or password is incorrect"
                    );

                    localStorage.removeItem("userInfo");

                    console.log(user.error.response.data.msg);

                    this.$store.commit("setError", {
                        message: user.error.response.data.msg,
                    });
                } else {
                    this.$bvModal.show("modal-attachment");
                    this.loader = false;
                }
            } else {
                this.loader = false;

                this.makeToast("success", "Successfully Logged In");
                this.$bvModal.hide("modal-signIn");

                
                const rememberMeChecked = document.getElementById("remember-me").checked;
              
                const expiryTime = rememberMeChecked ? 30 * 24 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000;

              

                localStorage.setItem("accesstoken", user.apidata.access_token);
                localStorage.setItem("role", user.apidata.role);
                localStorage.setItem("user_id", user.apidata.user_id);  
                
              if(user.apidata.role == "admin") 
              {
                    setTimeout(() => {
                    this.$router.push("/app/mydesk/users");
                    
                }, 500);
                
              }
              else{
                {
                    setTimeout(() => {
                    this.$router.push("/app/setting/publisher");
                }, 500);
              }
              }

            

                const newUser = { data: user.apidata.data };
                localStorage.setItem("userInfo", JSON.stringify(newUser));
                this.$store.commit("setUser", { uid: user.apidata.uid });

                // Set expiry time for the token in cookies
                this.setCookie("accesstoken", user.apidata.access_token, expiryTime);

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
            this.isLoading = false;
        })
        .catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // console.log(error);
            localStorage.removeItem("userInfo");
            this.$store.commit("setError", { message: error });
            // ...
        });
},

setCookie(name, value, milliseconds) {
    const date = new Date();
    date.setTime(date.getTime() + milliseconds);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
},



    signUpSubmit() {
      // debugger;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.loader = true;
        // this.$store.commit("setLoading", true);
        // this.$store.commit("clearError");
        const requestData = {
          role: "user",
          email: this.email,
          password: this.password,
          // "first_name": this.fName,
          contact_number: this.phone,
          user_name:this.user_name,
        };
      
      
        this.$apiService
          .postCall("auth/register", requestData)
          .then((user) => {
          
            // this.$router.push("signIn");
            // this.$store.commit("setLoading", false);
            if (!user.error) {
              setTimeout(() => {
                // this.submitStatus = "OK";
               this.$router.push("/app/setting/publisher");
              }, 2000);
              this.$toaster.makeToast(
                "success",
                "User successfully registered"
              );
              localStorage.setItem("role", "user");
              localStorage.setItem("accesstoken", user.apidata.access_token);

              const newUser = { data: user.apidata.data };
              localStorage.setItem("userInfo", JSON.stringify(newUser));
              this.loader = false;
              return;
            }this.loader = false;
            if (
              user.error.response.data.msg ==
              "User already exit"
            ) {
            //  alert("eror", user.error.response.data.msg);
              this.$toaster.makeToast("warning", "email already exists");
              
              return;
            } else if (
              user.error.response.data.message ==
              "Bad request"
            ) {
              this.$toaster.makeToast("warning", "User Name already exists");
              this.loader = false;
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
            this.loader = false;
            // this.$store.commit("setLoading", false);
            localStorage.removeItem("userInfo");
            this.$store.commit("setError", { message: error });

            console.log(error);
          });
        // this.signUserUp({ email: this.email, password: this.password });
        // this.submitStatus = "PENDING";
      }
    },
    reset() {
  this.loader = true;
  var reqData = {
    email: this.userEmail,
  };
  if (!this.userEmail) {
    this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
    this.loader = false;
    return;
  }

  this.$apiService
    .postCall("auth/forget-password", reqData)
    .then((res) => {
      if (res.error) {
        this.notFound = true;
        this.$toaster.makeToast("warning", message.NOT_FOUND);
        this.loader = false;
        return;
      } else {
        this.$toaster.makeToast(
          "success",
          "Mail send successfully! check your mail"
        );
        
        this.notFound = false;
        // Set otpSent to true to hide the email input and show the OTP input
        this.otpSent = true;
        // if (requestData) {
        setTimeout(() => {
          this.submitStatus = "OK";
          this.$router.push("/app/sessions/signIn");
        }, 3000);
        // }
      }
      this.loader = false;
    })
    .catch((error) => {
      this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
      this.loader = false;
      console.log(error);
    });
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
    logoutUser() {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accesstoken");
      this.$router.push("/app/sessions/signIn");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },

    openforgetPasswordPopup() {
      this.$bvModal.show("modal-forget-passwords");
      this.$bvModal.hide("modal-signUp");
      this.$bvModal.hide("modal-signIn");
    },
    clickBookNow(carId, amount) {
      this.carId = carId;
      var storedUser = localStorage.getItem("userInfo");

      var parsedUser = JSON.parse(storedUser);

      if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
        this.id = parsedUser.data.id;

        this.$router.push("/app/myDesk/bookCars?id=" + carId);
        // const apiUrl = `carBooking/?userId=${this.id}&amount=${amount}&carId=${carId}&no_of_days=3`;

        // window.location.href = this.$apiService.getAppendedUrl(apiUrl);
      } else {
        this.$bvModal.show("modal-signIn");
      }
    },
    openPopup() {
      this.$bvModal.show("modal-signIn");
      this.$bvModal.hide("modal-signUp");
    },
    openSignUpPopup() {
      this.$bvModal.show("modal-signUp");
      this.$bvModal.hide("modal-signIn");
    },
    // getAllCarData() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("carsAPIView/")
    //     .then((res) => {
    //       if (!res.error) {app
    //         this.rows = res.apidata;
            
    //         this.loader = false;
    //       } else {
    //         this.loader = false;
    //         this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //     });
    // },
    parseImage(imageString) {
      try {
        const imageUrl = JSON.parse(imageString)[0];
        const parser = new DOMParser();
        const doc = parser.parseFromString(
          `<!doctype html><body>${imageUrl}`,
          "text/html"
        );
        const decodedUrl = doc.body.textContent;
        return decodedUrl;
      } catch (error) {
        console.error("Error parsing image URL:", error);
        return "https://example.com/default-image.jpg";
      }
    },
    clickGetCar() {
      this.$router.push(
        "/app/myDesk/searchCar?startDate=" +
          this.dateRange.startDate +
          "&endDate=" +
          this.dateRange.endDate
      );
    },

    // formSubmits() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("account/")
    //     .then((res) => {
    //       if (res.apidata.length > 0) {
    //         res.apidata.filter((value) => {
    //           if (value.accessStatus) {
    //             this.finalSubmit();
    //           } else {
    //             console.log("user block");
    //           }
    //         });
    //       }

    //       this.loader = false;
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //     });
    // },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    makeToast(variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: ` ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
  watch: {
    loggedInUser(val) {
      if (val && val.uid && val.uid.length > 0) {
        this.makeToast("success", "Successfully Logged In");

        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      }
    },
    error(val) {
      if (val != null) {
        this.makeToast("warning", val.message);
      }
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
.modal-body {
  padding: 0;
}
.main-div {
  /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; */
  min-height: 100vh;
  background-size: cover;
}
/* .auth-layout-wrap{
 
    min-height: 100vh;
    background-size: cover;

} */
/* .modal.show .modal-dialog {
  width: 21rem;
} */
.spinner.sm {
  height: 2em;
  width: 2em;
}
.for-heading {
  font-size: 42px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: normal;
  color: #fff;
}
.sub_heading {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: normal;
  color: #fff;
}

.for-eye {
  right: 12px;
  top: 7px;
  cursor: pointer;
}

#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}

.icon-size {
  font-size: 30px;
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}

.v2-picker-panel-wrap {
  left: 434px !important;
  top: 369px !important;
  position: absolute;
  z-index: 1500;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
  -webkit-box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 5px 0px;
  padding: 0;
  overflow: hidden;
}

.registration_number {
  font-size: 14px;
  font-weight: bold;
}

.svg_icon {
  width: 14px;
}

.gap-between {
  gap: 12px;
}

.blue_icon {
  filter: brightness(0.8) sepia(1) hue-rotate(200deg) saturate(5);
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 0;
}
.for-btn {
  height: 33px;
}
.carousel-item {
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}
.carousel {
  z-index: -1;
  /* position: relative; */
}

/* .for-time:hover .show-calendar {
  display: block !important;
} */

.carousel-item.active {
  opacity: 1;
}
.for-img {
  width: 100%;
  height: 100vh;

}
.for-ftext {
  z-index: 100;
  font-size: 42px;
  color:#ffffff;
  letter-spacing: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.for-text {
  z-index: 100;
  font-size: 25px;
  font-weight: bold;
  color:#ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


}

.form-control {
  border: 5px solid rgba(255, 0, 0, 0) !important;
}
.carousel-control-next {
  right: 25px;
  width: 6%;
}
.carousel-control-prev {
  left: 25px;
  width: 6%;
}
.carousel-control-next-icon {
  width: 50px;
  height: 47px;
}
.carousel-control-prev-icon {
  width: 50px;
  height: 47px;
}
.for-time {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  background-color: #fff;
}

@media screen and (max-width: 700px) {
  .smallScreen {
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  }

  .v2-picker-panel-wrap {
    left: 61px !important;
    top: 369px !important;
    position: absolute;
    z-index: 1500;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-color: #fff;
    -webkit-box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 5px 0px;
    padding: 0;
    overflow: hidden;
  }

  .borderRadius {
    border-radius: 16px;
  }

  .for-time {
    border-radius: 16px;

    padding: 20px;
    background-color: #fff;
  }
  .DisplayNone
  {
    display: none;
  }
}


@media screen and (min-width: 1024px) {

.paddingLaptop {
  padding-left: 74px !important;
  padding-right: 74px !important;
}

}



.colX {
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 0.94;
  max-width: 100%;
  align-self: center;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 0px!important;
    padding-left: 0px!important;
}

/*
@media screen and (max-width: 768px) {
  
  .modal {
  top: 15%;
}
} */

@keyframes color-change {
  0% {
    color: #a53caa;
  }
  50% {
    color: #e1d5ee;
  }
  50%
  {
    color:#ab8dd3;
  }
  50%
  {
    color:#dc7ebd;
  }
  50%
  {
    color:#7972d4;
  }
  100% {
    color: #675cc8;
  }
}

.animasyonmetin {
  animation: color-change 5s ease-in-out infinite;
}

.hw {

    margin-top: 0;
    margin-bottom: 0rem;
    font-weight: 500;
    line-height: 1.37;
    color: #5d596c;
  font-size: 1.2475rem;


    font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
}

.pw
{ margin-top:4px;

  
  color:#6f6b7d;
  font-size: 0.9375rem;
  font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;

}
.form-check-input {
    --bs-form-check-bg: #fff;
    flex-shrink: 0;
    width: 1.01em;
    height: 1.3em;
    margin-top: 0.135em;
    vertical-align: top;
    /* appearance: none; */
    /* background-color: var(--bs-form-check-bg);
    background-image: var(--bs-form-check-bg-image); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 2px solid #dbdade;
    border-radius: 4.6px;
}

.marginTopSix
{    margin-top: 6px;}

.backgroundNorepeat
{
  background-repeat: no-repeat;
}

img {
   
    width: 42vw;
    height: 96vh;
}
</style>
