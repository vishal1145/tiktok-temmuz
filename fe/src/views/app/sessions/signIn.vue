<template>
  <div class="main-div d-flex flex-row justify-content-between overflow-hidden">
    <b-col lg="6" xl="6" mt="3" class="DisplayNone">
      <div class="auth-content px-5 backgroundNorepeat backgr">
        <div
          class="d-flex flex-column justify-content-center backgroundNorepeat align-content-center text-center for-img align-items-center"
        >
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
        <div v-if="activeChild === 1">
          <div class="o-hidden">
            <div class="row">
              <div class="col-md-12">
                <div class="p-4 px-5 paddingLaptop">
                  <div class="auth-logo text-left mb-30">
                    <img :src="logo" />
                  </div>

                  <h3 class="mb-1 hw">Welcome to Temmuz! 👋</h3>
                  <p class="mb-3 pw">
                    Sign Up or Login to get started
                  </p>
                  <b-form
                    @submit.prevent="formSubmit"
                    @keyup.enter="formSubmit"
                    id="firstForm"
                    v-if="isShowPhone"
                  >
                  <b-form-group class="text-12 pw">
  <div class="d-flex">
    <b-form-select
      v-model="CountryCode"
      :options="countryOptions"
      class="pw rounded-start m-lg-0 border-end select-input"
      required
      style="width: 23%;background-color: #f3f4f6;border: 1px solid transparent; border-right: 1px solid #8080804a;"
    ></b-form-select>
    <b-form-input
      class="pw rounded-end m-0 phone-input"
      type="number"
      @keydown="checkLengthPhone"
      v-model="PhoneNumber"
      placeholder="Enter phone number"
   
      required
    ></b-form-input>
  </div>
</b-form-group>


                    <!-- <b-form-group
                      :label="$t('Password')"
                      class="text-12 pw my-2"
                    >
                      <div
                        class="position-absolute for-eye"
                        @click="togglePasswordVisibility"
                      >
                        <i v-if="showPassword" class="fa fa-eye"></i>
                        <i v-else class="fa fa-eye-slash"></i>
                      </div>
                      <b-form-input
                        class="form-control-rounded pw"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                      ></b-form-input>
                    </b-form-group>

                    <div class="mb-2 d-flex flex-row justify-content-between">
                      <div class="form-check pw">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="remember-me"
                        />
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
                    </div> -->
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
                        {{ $t('Send Otp') }}
                      </b-button>
                    </div>
                    <!-- <div v-once class="typo__p" v-if="loading">
                      <div class="spinner sm spinner-primary mt-3"></div>
                    </div>

                    <p class="pw text-center py-2">
                      New on our platform?
                      <a
                        href="#"
                        @click.prevent="showChild(2)"
                        class="text-primary text-decoration-underline"
                      >
                        {{ $t('Create an account') }}
                      </a>
                    </p> -->
                  </b-form>

                  <p class=" pw text-center pt-2 mb-0"    v-if="isShowPhone">
                   By continue you are agree to Temmuz
                  </p>

                  <p class="text-center pw"   v-if="isShowPhone">
        
          <a href="auth-register-cover.html" >
            <span>Term of Use &nbsp;</span>
          </a>
          <span>and &nbsp;</span>
          <a href="auth-register-cover.html">
            <span>Privacy Policy</span>
          </a>
        </p>

                  <b-form
                    @submit.prevent="formSubmitOtp"
                    @keyup.enter="formSubmitOtp"
                    id="firstOtp"
                    v-if="isShowOtp"
                  >
                    <b-form-group :label="$t('Otp')" class="text-12 pw">
                      <!-- <b-form-input
                        class="form-control-rounded pw"
                        type="number"
                        @keydown="checkLengthOtp"
                        v-model="phoneOtp"
                        required
                      ></b-form-input> -->


                      <div>

  <div class="verification-code--inputs d-flex flex-row" style="
    gap: 20px;
">
    <input type="text" maxlength="1"  v-model="phoneOtp1" />
    <input type="text" maxlength="1"  v-model="phoneOtp2" />
    <input type="text" maxlength="1"  v-model="phoneOtp3"/>
    <input type="text" maxlength="1"  v-model="phoneOtp4"/>
    <input type="text" maxlength="1"  v-model="phoneOtp5"/>
    <input type="text" maxlength="1"  v-model="phoneOtp6"/>
  </div>
  <input type="hidden" id="verificationCode" v-model="concatenatedPhoneOtp" />

</div>
                    </b-form-group>
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
                        {{ $t('Verify Otp') }}
                      </b-button>
                    </div>
                  </b-form>
                  <b-form
                    @submit.prevent="formSubmitName"
                    id="firstOtp"
                    v-if="isShowName"
                  >
                    <b-form-group :label="$t('User Name')" class="text-12 pw">
                      <b-form-input
                        class="form-control-rounded pw"
                        type="text"
                        placeholder="Enter name"
                        max="30"
                        v-model="userName"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      :label="$t('User Surname')"
                      class="text-12 pw"
                    >
                      <b-form-input
                        class="form-control-rounded pw"
                        type="text"
                        placeholder="Enter surname"
                        max="30"
                        v-model="userSurName"
                        required
                      ></b-form-input>
                    </b-form-group>
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
                        {{ $t('Next') }}
                      </b-button>
                    </div>
                  </b-form>
                  <b-form
                    @submit.prevent="formSubmittikTokUser"
                    id="tikTokUser"
                    v-if="isShowtikTokUser"
                  >
                    <b-form-group
                      :label="$t('TikTok Username')"
                      class="text-12 pw"
                    >
                      <b-form-input
                        class="form-control-rounded pw"
                        type="text"
                        v-model="tikTokUserName"
                        required
                      ></b-form-input>
                    </b-form-group>
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
                        {{ $t('Next') }}
                      </b-button>
                    </div>
                  </b-form>
                  <b-form
                    @submit.prevent="formSubmitGms"
                    id="firstOtp"
                    v-if="isShowGmsVerification"
                  >
                    <b-form-group
                      :label="$t('GSM Verification')"
                      class="text-12 pw"
                    >
                      <b-form-input
                        class="form-control-rounded pw"
                        type="number"
                        @keydown="checkLengthOtp"
                        v-model="gmsVerification"
                        required
                      ></b-form-input>
                    </b-form-group>
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
                        {{ $t('GSM Verification') }}
                      </b-button>
                    </div>
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
          <div class="o-hidden">
            <div class="row">
              <b-col md="12">
                <div class="p-4 px-5 paddingLaptop">
                  <div class="auth-logo text-left mb-30">
                    <img :src="logo" />
                  </div>

                  <h3 class="mb-1 hw">Adventure starts here 🚀</h3>
                  <p class="mb-3 pw">Make your app management easy and fun!</p>

                  <b-form-group :label="$t('Username')" class="pw">
                    <b-form-input
                      class="form-control form-control-rounded pw"
                      :label="$t('User Name')"
                      v-model="user_name"
                      maxlength="20"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group class="pw" :label="$t('Email')">
                    <b-form-input
                      class="form-control form-control-rounded"
                      label="Name"
                      maxlength="50"
                      type="email"
                      v-model="email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form @submit.prevent="signUpSubmit" id="secondForm">
                    <b-form-group class="pw" :label="$t('Phone')">
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
                      ></b-form-input>
                      <b-alert
                        show
                        variant="danger"
                        class="error col mt-1"
                        v-if="!$v.password.minLength"
                      >
                        Minimum
                        {{ $v.password.$params.minLength.min }} charaters.
                      </b-alert>
                    </b-form-group>

                    <div class="form-check pw pb-2 py-1 pr-2">
                      <input
                        class="form-check-input marginTopSix"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label class="form-check-label ml-1" for="remember-me">
                        <p class="pw text-center">
                          I agree to
                          <a
                            href="https://temmuzajans.com/tiktok-ajansi-nedir"
                            class="text-decoration-underline"
                          >
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
                        <a
                          href="#"
                          @click.prevent="showChild(1)"
                          class="text-primary text-decoration-underline"
                        >
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
                  <p class="mb-3 pw">
                    Enter your email and we'll send you instructions to reset
                    your password
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
                    <router-link to="signIn" tag="a" class="text-muted">
                      <u @click="showChild(1)">{{ $t('Back To Login') }}</u>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-col>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
// import TopNav from "./TopNav";
// import DateRangePicker from 'vue2-daterange-picker'

import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { required, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import message from '../../../message'
// import TopNav from '../../../containers/layouts/largeSidebar/TopNav.vue'

export default {
  // components: { TopNav, DateRangePicker },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'SignIn'
  },
  data () {
    return {
      CountryCode: '+91',
      PhoneNumber: '',
      countryOptions: [
        { value: '+91', text: 'IND (+91)' },
        { value: '+90', text: 'TUR (+90)' },
        { value: '+1', text: 'US (+1)' },
        { value: '+44', text: 'United Kingdom (+44)' },
        { value: '+61', text: 'Australia (+61)' },
      ],
      isShowName: false,
      userName: '',
      userSurName: '',
      isShowtikTokUser: false,
      tikTokUserName: '',
      isShowGmsVerification: false,
      gmsVerification: '',
      isShowOtp: false,
      isShowPhone: true,
      phoneOtp: '',
            phoneOtp1: '',
            phoneOtp2: '',
            phoneOtp3: '',
            phoneOtp4: '',
            phoneOtp5: '',
            phoneOtp6: '',
      otpVerified: false,
      otpSent: false,
      dateRange: {
        startDate: new Date(),
        endDate: new Date()
      },
      currentIndex: 0,
      numToShow: 3,
      currentDate: new Date(),
      showPassword: false,
      otp: '',
      user_name: '',
      phone: '',
      email: '',
      password: '',
      // // password: "vue006",
      userId: '',
      bgImage: require('@/assets/images/car_sec.png'),
      logo: require('@/assets/images/zoombacar.png'),
      signInImage: require('@/assets/images/photo-long-3.jpg'),
      isLoading: false,
      role: '',
      fName: '',
      PhoneNumber: '',
      loader: false,

      repeatPassword: '',
      submitStatus: null,
      alertShow: false,

      rows: [],

      userEmail: '',

      notFound: false,
      id: null,

      selectedDate: null,
      firstSelectedDate: null,
      secondSelectedDate: null,
      isDatePickerVisible: false,
      activeChild: 1
    }
  },
  validations: {
    phone: {
      required,
      minLength: minLength(10)
    },

    password: {
      required,
      minLength: minLength(5)
    }
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
  created () {},


  watch: {
  concatenatedPhoneOtp: function(newValue) {
    document.getElementById("verificationCode").value = newValue;
  }
},

  computed: {
    concatenatedPhoneOtp: function() {
    return this.phoneOtp1 + this.phoneOtp2 + this.phoneOtp3 + this.phoneOtp4 + this.phoneOtp5 + this.phoneOtp6;
  },
    validation () {
      return this.userId.length > 4 && this.userId.length < 13
    },
    visibleRows () {
      return this.rows.slice(
        this.currentIndex,
        this.currentIndex + this.numToShow
      )
    },

    ...mapGetters(['loggedInUser', 'loading', 'error'])
  },

  methods: {
    ...mapActions(['login']),

    enforceMaxLength () {
      const inputString = this.phone.toString()
      const cleanedInput = inputString.replace(/^0+|[^0-9]+/g, '')

      if (cleanedInput.length > 10) {
        this.phone = parseInt(cleanedInput.slice(0, 10), 10)
      } else {
        this.phone = parseInt(cleanedInput, 10)
      }
    },

    // verifyOtp () {
    //   this.loader = true
    //   var reqData = {
    //     email: this.userEmail,
    //     otp: this.otp
    //   }

    //   if (!this.userEmail || !this.otp) {
    //     this.$toaster.makeToast('warning', 'Please fill in all fields.')
    //     this.loader = false
    //     return
    //   }

    //   this.$apiService
    //     .postCall('auth/verify-otp', reqData)
    //     .then(user => {
    //       if (user.error) {
    //         this.$toaster.makeToast('warning', 'Please enter a valid OTP.')
    //       } else {
    //         this.$toaster.makeToast('success', 'OTP verified successfully!')
    //         this.otpVerified = true
    //       }
    //       this.loader = false
    //     })
    //     .catch(error => {
    //       // Handle API call error
    //       this.$toaster.makeToast(
    //         'warning',
    //         'An error occurred. Please try again.'
    //       )
    //       console.error('API Error:', error)
    //       this.loader = false
    //     })
    // },

    // updatePassword () {
    //   this.loader = true
    //   var reqData = {
    //     email: this.userEmail,
    //     new_password: this.newPassword
    //   }

    //   if (!this.newPassword) {
    //     this.$toaster.makeToast('warning', 'Please fill in all fields.')
    //     this.loader = false
    //     return
    //   }

    //   this.$apiService
    //     .postCall('auth/update-password', reqData)
    //     .then(user => {
    //       this.$toaster.makeToast(
    //         'success',
    //         'Password is successfully updated!'
    //       )

    //       this.loader = false

    //       setTimeout(() => {
    //         window.location.reload()
    //       }, 2000)
    //     })
    //     .catch(error => {
    //       this.$toaster.makeToast(
    //         'warning',
    //         'An error occurred. Please try again.'
    //       )
    //       console.error('API Error:', error)
    //       this.loader = false
    //     })
    // },
    // validatePhone(event) {
    //   const value = event.target.value;
    //   // Only keep numeric characters
    //   this.phone = value.replace(/\D/g, '');
    // },
    showChild (childNumber) {
      // debugger;

      this.activeChild = childNumber
    },

    checkLengthPhone (event) {
      if (this.PhoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    checkLengthOtp (event) {
      if (this.phoneOtp.toString().length >= 6 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },

    formSubmitName () {
      this.isShowName = false
      this.isShowtikTokUser = true
    },
    // formSubmittikTokUser () {
    //   this.isShowtikTokUser = false
    //   this.isShowGmsVerification = true
    // },
    formSubmittikTokUser () {
      // this.isShowGmsVerification = false

      this.loader = true
      let requestData = {
        contact_number: this.PhoneNumber,
        role: 'user',
        name: this.userName,
        surname: this.userSurName,
        tiktok_username: this.tikTokUserName
      }

      this.$apiService
        .postCall('auth/tiktok-login', requestData)
        .then(user => {
          if (user.error) {
            this.loader = false
            this.$toaster.makeToast('warning', user.message)
          } else {
            this.$toaster.makeToast('success', 'User create successfully')
            this.isShowtikTokUser = false
            this.isShowOtp = true
            this.loader = false

            // setTimeout(() => {
            //   this.$router.push('/')
            // }, 500)
          }
        })
        .catch(function (error) {
          this.$toaster.makeToast('warning', 'Error: server error')
          this.loader = false

          this.$store.commit('setError', { message: error })
        })
    },
    formSubmitOtp () {
      this.loader = true
      let requestData = {
        contact_number: this.PhoneNumber,
        otp: this.concatenatedPhoneOtp
      }

      this.$apiService
        .postCall('auth/verify-otp', requestData)
        .then(user => {
          if (user.error) {
            this.loader = false
            this.$toaster.makeToast('warning', 'invalid otp try again')
          } else {
            this.loader = false
            this.$toaster.makeToast('success', 'Otp match successfully')
            localStorage.setItem('accesstoken', user.apidata.access_token)
            localStorage.setItem('role', user.apidata.role)
            localStorage.setItem('user_id', user.apidata.user_id)
             if (user.apidata.role == 'admin') {
              setTimeout(() => {
                this.$router.push('/app/mydesk/users')
              }, 500)
            } else {
              {
                setTimeout(() => {
                  this.$router.push('/app/setting/publisher')
                }, 500)
              }
            }
            // setTimeout(() => {
            //   window.location.reload()
            // }, 3000)
            const rememberMeChecked =
              document.getElementById('remember-me').checked

            const expiryTime = rememberMeChecked
              ? 30 * 24 * 60 * 60 * 1000
              : 1 * 60 * 60 * 1000
            this.setCookie('accesstoken', user.apidata.access_token, expiryTime)
            

            // setTimeout(() => {
            //   this.$router.push('/')
            // }, 500)
          }
        })
        .catch(function (error) {
          this.$toaster.makeToast('warning', 'Error: server error')
          this.loader = false

          this.$store.commit('setError', { message: error })
        })
    },

    formSubmit () {
      this.loader = true

      let requestData = {
        contact_number: this.PhoneNumber
        // 'role':"user"
        // password: this.password
      }

      this.$apiService
        .postCall('auth/check-member-exists', requestData)
        .then(user => {
          if (user.error) {
            this.$toaster.makeToast('warning', user.message)
            this.loader = false
          } else {
            this.loader = false

            this.$toaster.makeToast('success', 'Otp send successfully')
            const isMemberExists = user.apidata.isMemberExists
            if (isMemberExists) {
              this.isShowOtp = true
              this.isShowPhone = false
            } else {
              this.$toaster.makeToast(
                'warning',
                'User is not exist, fill all details'
              )
              this.isShowName = true
              this.isShowPhone = false
            }

            // localStorage.setItem('accesstoken', user.apidata.access_token)
            // localStorage.setItem('role', user.apidata.role)
            // localStorage.setItem('user_id', user.apidata.user_id)

            // const rememberMeChecked =
            //   document.getElementById('remember-me').checked

            // const expiryTime = rememberMeChecked
            //   ? 30 * 24 * 60 * 60 * 1000
            //   : 1 * 60 * 60 * 1000

            // if (user.apidata.role == 'admin') {
            //   setTimeout(() => {
            //     this.$router.push('/app/mydesk/users')
            //   }, 500)
            // } else {
            //   {
            //     setTimeout(() => {
            //       this.$router.push('/app/setting/publisher')
            //     }, 500)
            //   }
            // }

            // Set expiry time for the token in cookies
            // this.setCookie('accesstoken', user.apidata.access_token, expiryTime)

            // setTimeout(() => {
            //   window.location.reload()
            // }, 3000)
          }
          this.loader = false
        })
        .catch(function (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: ServerError')
          // localStorage.removeItem('userInfo')
          this.$store.commit('setError', { message: error })
        })
    },

    setCookie (name, value, milliseconds) {
      const date = new Date()
      date.setTime(date.getTime() + milliseconds)
      const expires = '; expires=' + date.toUTCString()
      document.cookie = name + '=' + (value || '') + expires + '; path=/'
    },

    signUpSubmit () {
      // debugger;
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.loader = true
        // this.$store.commit("setLoading", true);
        // this.$store.commit("clearError");
        const requestData = {
          role: 'user',
          email: this.email,
          password: this.password,
          // "first_name": this.fName,
          contact_number: this.phone,
          user_name: this.user_name
        }

        this.$apiService
          .postCall('auth/register', requestData)
          .then(user => {
            // this.$router.push("signIn");
            // this.$store.commit("setLoading", false);
            if (!user.error) {
              setTimeout(() => {
                // this.submitStatus = "OK";
                this.$router.push('/app/setting/publisher')
              }, 2000)
              this.$toaster.makeToast('success', 'User successfully registered')
              localStorage.setItem('role', 'user')
              localStorage.setItem('accesstoken', user.apidata.access_token)

              const newUser = { data: user.apidata.data }
              localStorage.setItem('userInfo', JSON.stringify(newUser))
              this.loader = false
              return
            }
            this.loader = false
            if (user.error.response.data.msg == 'User already exit') {
              //  alert("eror", user.error.response.data.msg);
              this.$toaster.makeToast('warning', 'email already exists')

              return
            } else if (user.error.response.data.message == 'Bad request') {
              this.$toaster.makeToast('warning', 'User Name already exists')
              this.loader = false
              return
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
          .catch(error => {
            this.loader = false
            // this.$store.commit("setLoading", false);
            localStorage.removeItem('userInfo')
            this.$store.commit('setError', { message: error })

            console.log(error)
          })
        // this.signUserUp({ email: this.email, password: this.password });
        // this.submitStatus = "PENDING";
      }
    },
    reset () {
      this.loader = true
      var reqData = {
        email: this.userEmail
      }
      if (!this.userEmail) {
        this.$toaster.makeToast('warning', message.VALIDATION_MESSAGE)
        this.loader = false
        return
      }

      this.$apiService
        .postCall('auth/forget-password', reqData)
        .then(res => {
          if (res.error) {
            this.notFound = true
            this.$toaster.makeToast('warning', message.NOT_FOUND)
            this.loader = false
            return
          } else {
            this.$toaster.makeToast(
              'success',
              'Mail send successfully! check your mail'
            )

            this.notFound = false
            // Set otpSent to true to hide the email input and show the OTP input
            this.otpSent = true
            // if (requestData) {
            setTimeout(() => {
              this.submitStatus = 'OK'
              this.$router.push('/app/sessions/signIn')
            }, 3000)
            // }
          }
          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
          console.log(error)
        })
    },

    // makeToast (variant = null) {
    //   this.$bvToast.toast('Please fill the form correctly.', {
    //     title: `Variant ${variant || 'default'}`,
    //     variant: variant,
    //     solid: true
    //   })
    // },
    makeToastTwo (variant = null) {
      this.$bvToast.toast('Successfully Created Account', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    },
    logoutUser () {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('accesstoken')
      this.$router.push('/app/sessions/signIn')
      setTimeout(() => {
        window.location.reload()
      }, 500)
    },

    openforgetPasswordPopup () {
      this.$bvModal.show('modal-forget-passwords')
      this.$bvModal.hide('modal-signUp')
      this.$bvModal.hide('modal-signIn')
    },
    // clickBookNow (carId, amount) {
    //   this.carId = carId
    //   var storedUser = localStorage.getItem('userInfo')

    //   var parsedUser = JSON.parse(storedUser)

    //   if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
    //     this.id = parsedUser.data.id

    //     this.$router.push('/app/myDesk/bookCars?id=' + carId)
    //     // const apiUrl = `carBooking/?userId=${this.id}&amount=${amount}&carId=${carId}&no_of_days=3`;

    //     // window.location.href = this.$apiService.getAppendedUrl(apiUrl);
    //   } else {
    //     this.$bvModal.show('modal-signIn')
    //   }
    // },
    openPopup () {
      this.$bvModal.show('modal-signIn')
      this.$bvModal.hide('modal-signUp')
    },
    openSignUpPopup () {
      this.$bvModal.show('modal-signUp')
      this.$bvModal.hide('modal-signIn')
    }
  },
  watch: {
    loggedInUser (val) {
      if (val && val.uid && val.uid.length > 0) {
        this.makeToast('success', 'Successfully Logged In')

        setTimeout(() => {
          this.$router.push('/')
        }, 500)
      }
    },
    error (val) {
      if (val != null) {
        this.makeToast('warning', val.message)
      }
    }
  }
}
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
  color: #ffffff;
  letter-spacing: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.for-text {
  z-index: 100;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
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
  .DisplayNone {
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

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 0px !important;
  padding-left: 0px !important;
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
  50% {
    color: #ab8dd3;
  }
  50% {
    color: #dc7ebd;
  }
  50% {
    color: #7972d4;
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

  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.pw {
  margin-top: 4px!important;

  color: #6f6b7d;
  font-size: 0.9375rem;
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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

.marginTopSix {
  margin-top: 6px;
}

.backgroundNorepeat {
  background-repeat: no-repeat;
}

img {
  width: 42vw;
  height: 96vh;
}

.select-input:focus,
.phone-input:focus {
  border-color: #007bff; /* Bootstrap primary color, or any color you prefer */
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Optional: add shadow for better visibility */
}




.verification-code {
    max-width: 300px;
    position: relative;
    margin:50px auto;
    text-align:center;
}
.control-label{
  display:block;
  margin:40px auto;
  font-weight:900;
}
.verification-code--inputs input[type=text] {
    border: 2px solid #e1e1e1;
    width: 46px;
    height: 46px;
    padding: 10px;
    text-align: center;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 6px;
}
</style>
