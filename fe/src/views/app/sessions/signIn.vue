<template>
  <div class="main-div">
    <!-- :style="{ backgroundImage: 'url(' + bgImage + ')' }" -->
    <!-- <top-nav></top-nav> -->
    <nav class="navbar container-fluid for-nav">
      <div class="container-fluid d-flex justify-content-between">
        <img
          :src="logo"
          alt=""
          width="70"
          height="70"
          class="d-inline-block align-text-top"
        />
        <a
          v-if="userName == null && userName == undefined"
          @click="openPopup"
          style="cursor: pointer; text-decoration: underline"
          class="text-primary"
        >
          Sign In
        </a>
        <div v-else class="dropdown">
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
              <!-- <a class="dropdown-item">Account settings</a> -->
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
                      <!-- <i class="nav-icon i-Drop"></i> -->
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
              <!-- <a
                v-else
                @click="openPopup"
                style="cursor: pointer"
                class="dropdown-item"
              >
                Sign In
              </a> -->
            </div>
          </b-dropdown>
        </div>
        <!-- <p @click="redirectMainPage" class="cursor-pointer" v-if="userName !== null && userName !== undefined">{{ userName }}</p>
        <a v-else @click="openPopup" style="text-decoration: underline; cursor: pointer" class="text-primary">
          Sign In
        </a> -->
      </div>
    </nav>
    <b-modal
      id="modal-signIn"
      title="Sign In"
      size="sm"
      style="height: 100px"
      hide-footer
      hide-header
    >
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign In</h1>
              <b-form @submit.prevent="formSubmit" id="firstForm">
                <b-form-group label="Email Address" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="text"
                    v-model="email"
                    email
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Password" class="text-12">
                  <div
                    class="position-absolute for-eye"
                    @click="togglePasswordVisibility"
                  >
                    <i v-if="showPassword" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                  </div>
                  <b-form-input
                    class="form-control-rounded"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                  ></b-form-input>
                </b-form-group>
                <!-- <b-form-group label="Phone" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="number"
                    v-model="phone"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Otp" class="text-12">
                  <b-form-input
                    class="form-control-rounded"
                    type="number"
                    v-model="otp"
                  ></b-form-input>
                </b-form-group> -->

                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                  >Sign In</b-button
                > -->
                <div>
                  <b-col md="12 ml-5" v-if="isLoading">
                    <div class="spinner spinner-primary ml-5"></div>
                  </b-col>
                  <b-button
                    type="submit"
                    tag="button"
                    class="btn-rounded btn-block mt-2"
                    variant="primary mt-2"
                    :disabled="loading"
                    v-if="!isLoading"
                  >
                    SignIn
                  </b-button>
                </div>

                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
                <b-button
                  block
                  @click="openSignUpPopup"
                  variant="primary mt-2"
                  class="btn-rounded"
                  >Create an account</b-button
                >
              </b-form>

              <div class="mt-3 text-center">
                <a
                  @click="openforgetPasswordPopup()"
                  style="text-decoration: underline; cursor: pointer"
                  class="text-primary"
                  >Forgot Password</a
                >
                <!-- <router-link to="forgot" tag="a" class="text-muted">
                  <u>Forgot Password?</u>
                </router-link> -->
              </div>
            </div>
          </div>

          <!-- <b-col
            md="6"
            class="text-center"
            style="backgroundsize: cover"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <router-link
                to="signUp"
                class="
                  btn
                  btn-rounded
                  btn-outline-primary
                  btn-outline-email
                  btn-block
                  btn-icon-text
                "
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </router-link>
              <a
                class="
                  btn
                  btn-rounded
                  btn-outline-primary
                  btn-outline-google
                  btn-block
                  btn-icon-text
                "
              >
                <i class="i-Google-Plus"></i> Sign up with Google
              </a>
              <a
                class="
                  btn
                  btn-rounded
                  btn-outline-primary
                  btn-block
                  btn-icon-text
                  btn-outline-facebook
                "
              >
                <i class="i-Facebook-2"></i> Sign up with Facebook
              </a>
            </div>
          </b-col> -->
        </div>
      </div>
    </b-modal>
    <b-modal
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
    </b-modal>
    <b-modal
      id="modal-signUp"
      size="sm"
      title="Sign Up"
      style="height: 100px"
      hide-header
      hide-footer
    >
      <div class="card o-hidden">
        <div class="row">
          <b-col md="12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign Up</h1>

              <b-form @submit.prevent="signUpSubmit" id="secondForm">
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
                  <a
                    @click="openPopup"
                    style="text-decoration: underline; cursor: pointer"
                    class="text-primary"
                    >Sign In</a
                  >
                  <!-- <router-link to="signIn" tag="a" class="text-muted">
                    <u>Sign In</u>
                  </router-link> -->
                </div>

                <p v-once class="typo__p" v-if="submitStatus === 'OK'">
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
                ></div>
              </b-form>
            </div>
          </b-col>
        </div>
      </div>
    </b-modal>
    <b-modal
      id="modal-forget-passwords"
      size="sm"
      title="Forgot Password"
      style="height: 100px"
      hide-header
      hide-footer
    >
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30"><img :src="logo" /></div>
              <h1 class="mb-3 text-18">Forgot Password</h1>
              <form>
                <div class="form-group">
                  <label for="email">Email address</label>
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
                    >Email not found</b-alert
                  >
                </div>
                <div
                  class="spinner spinner-primary"
                  style="margin-left: 7rem"
                  v-if="loader"
                ></div>
                <button
                  v-if="!loader"
                  type="button"
                  class="btn btn-primary btn-block btn-rounded mt-3"
                  @click="reset()"
                >
                  Send mail
                </button>
              </form>
              <div class="mt-3 text-center">
                <router-link to="signIn" tag="a" class="text-muted">
                  <u>Sign In</u>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div
      class="auth-content px-5"
      :style="{
        backgroundImage: 'url(' + bgImage + ')',
        objectFit: 'cover',
        opacity: '0.8',
      }"
    >
      <div
        class="d-flex flex-column justify-content-center align-content-center text-center for-img align-items-center"
      >
        <p class="fa-2x font-weight-900 p-0 m-0 for-ftext">
          Rent a car in Delhi
        </p>
        <p class="for-text">Book your drive now!</p>

        <div class="d-flex mt-2 smallScreen flex-column flex-sm-row">
          <div
            @mouseenter="openDatePicker"
            class="for-time"
            style="cursor: pointer"
          >
            <div
              class="d-flex flex-row justify-content-between rounded-lg-sm align-center align-items-center smallScreen borderRadius"
            >
              <div class="border-right px-3 p-1">
                {{ formatSelectedDate(dateRange.startDate) }}
              </div>
              <!-- <div v-if="dateRange">
                {{ dateRange }}
              </div> -->
              <div class="px-3 py-1">
                {{ formatSelectedDate(dateRange.endDate) }}
              </div>
              <date-range-picker
                ref="datePicker"
                :singleDatePicker="false"
                v-model="dateRange"
              >
              </date-range-picker>

              <!-- <v2-datepicker
                lang="en"
                ref="startDate"
                v-model="selectedDate"
                @change="getCalenderData()"
                placeholder="From Date"
                v-show="isDatePickerVisible"
              ></v2-datepicker> -->
            </div>
          </div>

          <b-button
            @click="clickGetCar()"
            class="borderRadius"
            variant="success"
            style="
              background-color: green;
              padding: 20px 60px;
              border: none;
              font-size: 14px;
              border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
            "
            >Get Car</b-button
          >
        </div>
        <b-row>
          <b-col> </b-col>
        </b-row>
      </div>
    </div>
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

                          <!-- <i
                        class="fa fa-trash"
                        style="
                          font-size: 16px;
                          color: red;
                          margin-left: 10px;
                          cursor: pointer;
                        "
                        @click="deleteTemplate(row.id)"
                      ></i> -->
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
                        <!-- <div class="d-flex align-items-center mb-2 gap-between"><img class="svg_icon blue_icon"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOHPJeBer0rc5sn-TjI7W8gmP2dJ4IlFusdmFYx9Clg&s"
                      alt="">
                    <div>{{ row.engine }}</div>
                  </div> -->
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
                    <!-- , {{ row.car_features }} -->
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
    </div>

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
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
      },
      currentIndex: 0,
      numToShow: 3,
      currentDate: new Date(),
      showPassword: false,
      otp: "",
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
      debugger;
      // this.login({ email: this.email, password: this.password });
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
            console.log("error", user.error.response.data);
            if (user.error.response.data.error == "Invalid credentials.") {
              this.isLoading = false;
              this.makeToast("warning", "User email or password is incorrect");
              localStorage.removeItem("userInfo");
              this.$store.commit("setError", {
                message: user.error.response.data.msg,
              });
            } else {
              this.$bvModal.show("modal-attachment");
            }
          } else {
            
            this.makeToast("success", "Successfully Logged In");
            this.$bvModal.hide("modal-signIn");

            // setTimeout(() => {
            //   this.$router.push("/");
            // }, 500);

            localStorage.setItem("accesstoken", user.apidata.access_token);
            const newUser = { data: user.apidata.data };
            localStorage.setItem("userInfo", JSON.stringify(newUser));
            this.$store.commit("setUser", { uid: user.apidata.uid });
            setTimeout(() => {
              window.location.reload();
            }, 500);
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

    signUpSubmit() {
      debugger;
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
        .postCall("forgetPassword/", reqData)
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
    getAllCarData() {
      this.loader = true;
      this.$apiService
        .getCall("carsAPIView/")
        .then((res) => {
          if (!res.error) {
            this.rows = res.apidata;
            
            this.loader = false;
          } else {
            this.loader = false;
            this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
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
  height: 400px;
}
.for-ftext {
  z-index: 100;
  font-size: 35px;
}
.for-text {
  z-index: 100;
  font-size: 25px;
  font-weight: bold;
}

.form-control {
  border: 5px solid red !important;
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
}

.colX {
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 0.94;
  max-width: 100%;
  align-self: center;
}

/*
@media screen and (max-width: 768px) {
  
  .modal {
  top: 15%;
}
} */
</style>
