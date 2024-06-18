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
          <div class="">
            <div class="row">
              <div class="col-md-12">
                <div class="p-4 px-5 paddingLaptop">
                  <div class="auth-logo text-left mb-30">
                    <img :src="logo" />
                  </div>

                  <h3 class="mb-1 hw">Welcome to Temmuz! 👋</h3>
                  <p class="mb-3 pw">Sign Up or Login to get started</p>
                  <b-form
                    @submit.prevent="formSubmit"
                    id="firstForm"
                    v-if="isShowPhone"
                  >
                    <b-form-group class="text-12 pw mb-1" >
                      <div class="phone-input">
                        <b-form-group
                          label="Contact Number"
                          label-for="input-contact-number"
                        >
                          <b-form-input
                            class="form-control"
                            id="phone"
                            type="tel"
                            
                            name="phone"
                             maxlength="11"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <!-- <div class="d-flex phone-input">
                        <input id="phonenumber" type="tel" name="phonenumber" />
                        <vSelect
                          v-model="CountryCode"
                          :options="countryOptions"
                          :reduce="option => option.value"
                          label="text"
                          class="pw rounded-start m-lg-0 border-end select-input"
                          required
                          style="width: 22%; background-color: #f3f4f6"
                        ></vSelect>
                        <b-form-input
                          class="pw rounded-end m-0 phone-input"
                          type="number"
                          @keydown="checkLengthPhone"
                          v-model="PhoneNumber"
                          placeholder="Enter phone number"
                          required
                        ></b-form-input>
                      </div> -->
                    </b-form-group>

                    <div>
                      <b-col md="12 ml-5" v-if="isLoading">
                        <div class="spinner spinner-primary ml-5"></div>
                      </b-col>
                      <b-button
                        type="submit"
                        tag="button"
                        class="btn-rounded btn-block w-100"
                        variant="primary"
                        :disabled="loading"
                        v-if="!isLoading"
                      >
                        {{ $t('Send Otp') }}
                      </b-button>
                    </div>
                  </b-form>

                  <p class="pw text-center pt-2 mb-0" v-if="isShowPhone">
                    By continue you are agree to Temmuz
                  </p>

                  <p class="text-center pw" v-if="isShowPhone">
                    <a href="auth-register-cover.html">
                      <span>Term of Use &nbsp;</span>
                    </a>
                    <span>and &nbsp;</span>
                    <a href="auth-register-cover.html">
                      <span>Privacy Policy</span>
                    </a>
                  </p>

                  <b-form
                    @submit.prevent="formSubmitOtp"
                    id="firstOtp"
                    v-if="isShowOtp"
                  >
                    <b-form-group :label="$t('Otp')" class="text-12 pw">
                      <div
                        id="app"
                        class="d-flex flex-row justify-content-between"
                      >
                        <div
                          class="verification-code--inputs d-flex flex-row"
                          style="gap: 20px"
                        >
                          <input
                            type="text"
                            maxlength="1"
                            v-model="phoneOtp1"
                            @input="moveFocus($event, 'phoneOtp2')"
                            @keydown="
                              checkBackspace($event, 'phoneOtp1', 'phoneOtp1')
                            "
                            ref="phoneOtp1"
                          />
                          <input
                            type="text"
                            maxlength="1"
                            v-model="phoneOtp2"
                            @input="moveFocus($event, 'phoneOtp3')"
                            @keydown="
                              checkBackspace($event, 'phoneOtp2', 'phoneOtp1')
                            "
                            ref="phoneOtp2"
                          />
                          <input
                            type="text"
                            maxlength="1"
                            v-model="phoneOtp3"
                            @input="moveFocus($event, 'phoneOtp4')"
                            @keydown="
                              checkBackspace($event, 'phoneOtp3', 'phoneOtp2')
                            "
                            ref="phoneOtp3"
                          />
                          <input
                            type="text"
                            maxlength="1"
                            v-model="phoneOtp4"
                            @keydown="
                              checkBackspace($event, 'phoneOtp4', 'phoneOtp3')
                            "
                            ref="phoneOtp4"
                          />
                        </div>
                        <input
                          type="hidden"
                          id="verificationCode"
                          v-model="concatenatedPhoneOtp"
                        />
                        <div class="d-flex flex-row d-none">
                          <!-- <Timer @repeat-clicked="handleRepeatClicked" /> -->
                        </div>
                      </div>
                    </b-form-group>

                    <div>
                      <b-col md="12 ml-5" v-if="isLoading">
                        <div class="spinner spinner-primary ml-5"></div>
                      </b-col>
                      <b-button
                        type="submit"
                        tag="button"
                        class="btn-rounded btn-block mt-3 w-100"
                        variant="primary mt-2"
                        :disabled="loading"
                        v-if="!isLoading"
                      >
                        {{ $t('Verify Otp') }}
                      </b-button>

                      <Timer
                        @repeat-clicked="handleRepeatClicked"
                        ref="timerComponent"
                      />
                    </div>
                  </b-form>

                  <!-- <b-form
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
                  </b-form> -->
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

                  <b-form
                    @submit.prevent="formSubmittikTokUser"
                    id="firstOtp22"
                    v-if="isShowName"
                  >
                    <b-form-group :label="$t('First Name')" class="text-12 pw">
                      <b-form-input
                        class="pw"
                        type="text"
                        placeholder="First Name"
                        max="30"
                        v-model="userName"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group :label="$t('Last Name')" class="text-12 pw">
                      <b-form-input
                        class="pw"
                        type="text"
                        placeholder="Last Name"
                        max="30"
                        v-model="userSurName"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      :label="$t('TikTok Username')"
                      class="text-12 pw"
                    >
                      <b-form-input
                        placeholder="TikTok Username"
                        class="pw"
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
                        class="btn-rounded btn-block mt-3 w-100"
                        variant="primary mt-2"
                        :disabled="loading"
                        v-if="!isLoading"
                      >
                        {{ $t('Next') }}
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
import Timer from '../sessions/timerComp.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
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
  components: { vSelect, Timer },
  data () {
    return {
      timerClass: 'd-none',
      timerClass: 'd-flex',

      CountryCode: '+91',
      PhoneNumber: '',
      countryOptions: [
        { value: '+93', text: '(+93)' }, // Afghanistan
        { value: '+355', text: '(+355)' }, // Albania
        { value: '+213', text: '(+213)' }, // Algeria
        { value: '+1-684', text: '(+1-684)' }, // American Samoa
        { value: '+376', text: '(+376)' }, // Andorra
        { value: '+244', text: '(+244)' }, // Angola
        { value: '+1-264', text: '(+1-264)' }, // Anguilla
        { value: '+672', text: '(+672)' }, // Antarctica
        { value: '+1-268', text: '(+1-268)' }, // Antigua and Barbuda
        { value: '+54', text: '(+54)' }, // Argentina
        { value: '+374', text: '(+374)' }, // Armenia
        { value: '+297', text: '(+297)' }, // Aruba
        { value: '+61', text: '(+61)' }, // Australia
        { value: '+43', text: '(+43)' }, // Austria
        { value: '+994', text: '(+994)' }, // Azerbaijan
        { value: '+1-242', text: '(+1-242)' }, // Bahamas
        { value: '+973', text: '(+973)' }, // Bahrain
        { value: '+880', text: '(+880)' }, // Bangladesh
        { value: '+1-246', text: '(+1-246)' }, // Barbados
        { value: '+375', text: '(+375)' }, // Belarus
        { value: '+32', text: '(+32)' }, // Belgium
        { value: '+501', text: '(+501)' }, // Belize
        { value: '+229', text: '(+229)' }, // Benin
        { value: '+1-441', text: '(+1-441)' }, // Bermuda
        { value: '+975', text: '(+975)' }, // Bhutan
        { value: '+591', text: '(+591)' }, // Bolivia
        { value: '+387', text: '(+387)' }, // Bosnia and Herzegovina
        { value: '+267', text: '(+267)' }, // Botswana
        { value: '+55', text: '(+55)' }, // Brazil
        { value: '+246', text: '(+246)' }, // British Indian Ocean Territory
        { value: '+1-284', text: '(+1-284)' }, // British Virgin Islands
        { value: '+673', text: '(+673)' }, // Brunei
        { value: '+359', text: '(+359)' }, // Bulgaria
        { value: '+226', text: '(+226)' }, // Burkina Faso
        { value: '+257', text: '(+257)' }, // Burundi
        { value: '+855', text: '(+855)' }, // Cambodia
        { value: '+237', text: '(+237)' }, // Cameroon
        { value: '+1', text: '(+1)' }, // Canada
        { value: '+238', text: '(+238)' }, // Cape Verde
        { value: '+1-345', text: '(+1-345)' }, // Cayman Islands
        { value: '+236', text: '(+236)' }, // Central African Republic
        { value: '+235', text: '(+235)' }, // Chad
        { value: '+56', text: '(+56)' }, // Chile
        { value: '+86', text: '(+86)' }, // China
        { value: '+61', text: '(+61)' }, // Christmas Island
        { value: '+61', text: '(+61)' }, // Cocos Islands
        { value: '+57', text: '(+57)' }, // Colombia
        { value: '+269', text: '(+269)' }, // Comoros
        { value: '+682', text: '(+682)' }, // Cook Islands
        { value: '+506', text: '(+506)' }, // Costa Rica
        { value: '+385', text: '(+385)' }, // Croatia
        { value: '+53', text: '(+53)' }, // Cuba
        { value: '+599', text: '(+599)' }, // Curacao
        { value: '+357', text: '(+357)' }, // Cyprus
        { value: '+420', text: '(+420)' }, // Czech Republic
        { value: '+243', text: '(+243)' }, // Democratic Republic of the Congo
        { value: '+45', text: '(+45)' }, // Denmark
        { value: '+253', text: '(+253)' }, // Djibouti
        { value: '+1-767', text: '(+1-767)' }, // Dominica
        { value: '+1-809', text: '(+1-809)' }, // Dominican Republic
        { value: '+1-829', text: '(+1-829)' }, // Dominican Republic
        { value: '+1-849', text: '(+1-849)' }, // Dominican Republic
        { value: '+670', text: '(+670)' }, // East Timor
        { value: '+593', text: '(+593)' }, // Ecuador
        { value: '+20', text: '(+20)' }, // Egypt
        { value: '+503', text: '(+503)' }, // El Salvador
        { value: '+240', text: '(+240)' }, // Equatorial Guinea
        { value: '+291', text: '(+291)' }, // Eritrea
        { value: '+372', text: '(+372)' }, // Estonia
        { value: '+251', text: '(+251)' }, // Ethiopia
        { value: '+500', text: '(+500)' }, // Falkland Islands
        { value: '+298', text: '(+298)' }, // Faroe Islands
        { value: '+679', text: '(+679)' }, // Fiji
        { value: '+358', text: '(+358)' }, // Finland
        { value: '+33', text: '(+33)' }, // France
        { value: '+689', text: '(+689)' }, // French Polynesia
        { value: '+241', text: '(+241)' }, // Gabon
        { value: '+220', text: '(+220)' }, // Gambia
        { value: '+995', text: '(+995)' }, // Georgia
        { value: '+49', text: '(+49)' }, // Germany
        { value: '+233', text: '(+233)' }, // Ghana
        { value: '+350', text: '(+350)' }, // Gibraltar
        { value: '+30', text: '(+30)' }, // Greece
        { value: '+299', text: '(+299)' }, // Greenland
        { value: '+1-473', text: '(+1-473)' }, // Grenada
        { value: '+1-671', text: '(+1-671)' }, // Guam
        { value: '+502', text: '(+502)' }, // Guatemala
        { value: '+44', text: '(+44)' }, // Guernsey
        { value: '+224', text: '(+224)' }, // Guinea
        { value: '+245', text: '(+245)' }, // Guinea-Bissau
        { value: '+592', text: '(+592)' }, // Guyana
        { value: '+509', text: '(+509)' }, // Haiti
        { value: '+504', text: '(+504)' }, // Honduras
        { value: '+852', text: '(+852)' }, // Hong Kong
        { value: '+36', text: '(+36)' }, // Hungary
        { value: '+354', text: '(+354)' }, // Iceland
        { value: '+91', text: '(+91)' }, // India
        { value: '+62', text: '(+62)' }, // Indonesia
        { value: '+98', text: '(+98)' }, // Iran
        { value: '+964', text: '(+964)' }, // Iraq
        { value: '+353', text: '(+353)' }, // Ireland
        { value: '+44', text: '(+44)' }, // Isle of Man
        { value: '+972', text: '(+972)' }, // Israel
        { value: '+39', text: '(+39)' }, // Italy
        { value: '+225', text: '(+225)' }, // Ivory Coast
        { value: '+1-876', text: '(+1-876)' }, // Jamaica
        { value: '+81', text: '(+81)' }, // Japan
        { value: '+44', text: '(+44)' }, // Jersey
        { value: '+962', text: '(+962)' }, // Jordan
        { value: '+7', text: '(+7)' }
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
      //PhoneNumber: "",
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
      activeChild: 1,
      phoneInput: null,
      enteredNumber: ''
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
  mounted () {
    setTimeout(() => {
      const phoneInputField = document.querySelector('#phone')
      
      this.phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: 'in',
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
      })
    }, 200)
    // const phoneInputField = document.querySelector("#phonenumber");
    // this.phoneInput = window.intlTelInput(phoneInputField, {
    //   utilsScript:
    //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    // });
  },
  watch: {
    concatenatedPhoneOtp: function (newValue) {
      document.getElementById('verificationCode').value = newValue
    }
  },

  computed: {
    concatenatedPhoneOtp: function () {
      return (
        this.phoneOtp1 +
        this.phoneOtp2 +
        this.phoneOtp3 +
        this.phoneOtp4 +
        this.phoneOtp5 +
        this.phoneOtp6
      )
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
    // TimerPause() {

    //     setTimeout(() => {
    //       this.timerClass = 'd-flex';
    //     }, );
    //   },
    handleResendClicked () {
      this.$refs.timerComponent.repeatTimer() // Call repeatTimer method of Timer component
    },
    moveFocus (event, nextField) {
      if (event.target.value.length === 1) {
        const nextInput = this.$refs[nextField]
        if (nextInput) {
          nextInput.focus()
        }
      }
    },

    NextMethod () {
      this.isShowOtp = false
      // this.timerClass22 = 'none';

      this.firstOtp = 'd-flex'
    },
    repeatTimer () {
      this.$refs.timer.repeatTimer()
    },
    checkBackspace (event, currentField, previousField) {
      if (event.key === 'Backspace' && event.target.value === '') {
        const prevInput = this.$refs[previousField]
        if (prevInput) {
          prevInput.focus()
          this[currentField] = ''
        }
      }
    },
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
      // this.PhoneNumber = this.phoneInput.getNumber();
     
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
      alert('in next method')
      ;(this.isShowName = false), (this.isShowOtp = true)
    },
    formSubmittikTokUser () {
      this.isShowOtp = true
      this.isShowName = false
      this.loader = true
      this.PhoneNumber = this.phoneInput.getNumber()
      if (this.PhoneNumber.startsWith('+')) {
        this.PhoneNumber = this.PhoneNumber.slice(1)
      }
      //var phoneNumberLocal = this.phoneInput.getNumber();
      let requestData = {
        //contact_number: phoneNumberLocal.replace('+', ''), // + this.PhoneNumber,
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
            //         setTimeout(() => {
            //   this.timerClass = 'd-flex';
            // },1000);
          } else {
            this.$toaster.makeToast('success', 'OTP sent successfully')
            //         setTimeout(() => {
            //   this.timerClass = 'd-flex';
            // }, 1000);
            this.isShowName = false

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
      this.PhoneNumber = this.phoneInput.getNumber();
       if (this.PhoneNumber.startsWith('+')) {
        this.PhoneNumber = this.PhoneNumber.slice(1)
      }
      let requestData = {
        contact_number: this.PhoneNumber,
        otp: this.concatenatedPhoneOtp
      }

      this.$apiService
        .postCall('auth/verify-otp', requestData)
        .then(user => {
          if (user.error) {
            this.loader = false
            this.$toaster.makeToast('warning', 'Invalid otp try again')
          } else {
            this.loader = false
            this.$toaster.makeToast('success', 'Login successfully')
            localStorage.setItem('accesstoken', user.apidata.access_token)
            localStorage.setItem('role', user.apidata.role)
            localStorage.setItem('user_id', user.apidata.user_id)
            if (user.apidata.role == 'admin') {
              setTimeout(() => {
                this.$router.push('/app/dashboards/adminDashboard')
              }, 500)
            } else {
              {
                setTimeout(() => {
                  this.$router.push('/app/profiledata/profile')
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
    resendOtp () {
      this.loader = true
      this.PhoneNumber = this.phoneInput.getNumber();
       if (this.PhoneNumber.startsWith('+')) {
        this.PhoneNumber = this.PhoneNumber.slice(1)
      }
      let requestData = {
        contact_number: this.PhoneNumber
      }

      this.$apiService
        .postCall('auth/resend-otp', requestData)
        .then(user => {
          if (user.error) {
            this.loader = false
            this.$toaster.makeToast('warning', 'otp send fail')
          } else {
            this.loader = false
            this.$toaster.makeToast('success', 'Otp send successfully')
          }
        })
        .catch(function (error) {
          this.$toaster.makeToast('warning', 'Error: server error')
          this.loader = false
        })
    },
    removeElementsByClass (className) {
      const elements = document.getElementsByClassName(className)
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
      }
    },
    formSubmit () {
      if (!this.phoneInput.isValidNumber()) {
        this.$toaster.makeToast('warning', 'Invalid number')
        return
      }

      this.PhoneNumber = this.phoneInput.getNumber()
      this.loader = true
 if (this.PhoneNumber.startsWith('+')) {
        this.PhoneNumber = this.PhoneNumber.slice(1)
      }
      let requestData = {
        //contact_number: enteredNumber.replace('+', '') //+ this.PhoneNumber,
        // 'role':"user"
        // password: this.password
        contact_number: this.PhoneNumber
      }

      this.$apiService
        .postCall('auth/check-member-exists', requestData)
        .then(user => {
          if (user.error) {
            this.loader = false
            this.$toaster.makeToast('warning', user.message)
          } else {
            this.loader = false
            // this.TimerPause()
            this.$toaster.makeToast('success', 'OTP sent successfully')
            this.timerClass = 'd-none'

            const isMemberExists = user.apidata.isMemberExists
            if (isMemberExists) {
              //this.removeElementsByClass("phone-input")
              this.isShowOtp = true
              this.isShowPhone = false
              this.isShowName = false
              this.loader = false
            } else {
              this.isShowName = true
              this.isShowPhone = false
              this.loader = false

              //           setTimeout(() => {
              //   this.timerClass = 'd-none';
              // }, 3000);
              // this.$toaster.makeToast(
              //   'warning',
              //   'User is not exist, fill all details'
              // )
            }
          }
          this.loader = false
        })
        .catch(function (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: ServerError')

          this.$store.commit('setError', { message: error })
        })
    },
    handleRepeatClicked () {
      this.resendOtp()
    },

    setCookie (name, value, milliseconds) {
      const date = new Date()
      date.setTime(date.getTime() + milliseconds)
      const expires = '; expires=' + date.toUTCString()
      document.cookie = name + '=' + (value || '') + expires + '; path=/'
    },

    signUpSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.loader = true

        const requestData = {
          role: 'user',
          email: this.email,
          password: this.password,
          contact_number: this.phone,
          user_name: this.user_name
        }

        this.$apiService
          .postCall('auth/register', requestData)
          .then(user => {
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
          })
          .catch(error => {
            this.loader = false

            localStorage.removeItem('userInfo')
            this.$store.commit('setError', { message: error })

            console.log(error)
          })
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

 .phone-input  .iti {
      width: 100%;
    }

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
  border: 2px solid rgba(255, 0, 0, 0);
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
  margin-top: 4px !important;

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

@media only screen and (max-width: 1000px) {
  img {
    height: 30vh;
  }
}

.select-input:focus,
.phone-input:focus {
  border-color: #007bff00; /* Bootstrap primary color, or any color you prefer */
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Optional: add shadow for better visibility */
}

.verification-code {
  max-width: 300px;
  position: relative;
  margin: 50px auto;
  text-align: center;
}
.control-label {
  display: block;
  margin: 40px auto;
  font-weight: 900;
}
.verification-code--inputs input[type='text'] {
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

#vs1__combobox {
  background-color: #f3f4f6;
  border: 1px solid transparent;
  border-right: 1px solid #8080804a;
}

.vs__selected {
  margin-top: 4px !important;
  color: #6f6b7d;
  font-size: 0.9375rem;
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.vs__clear {
  display: none;
}
.vs__actions {
  display: none;
}
.base-timer {
  position: relative;
  width: 49px;
  height: 49px;
}

.base-timer__svg {
  transform: scaleX(-1);
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
}

.base-timer__path-remaining.green {
  color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
  color: orange;
}

.base-timer__path-remaining.red {
  color: red;
}

/* .base-timer__label {
    position: absolute;
    width: 0px;
    height: 0px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    left:-15px;
    color: #a855f7;
   
  } */
.base-timer__label {
  position: absolute;
  width: 0px;
  height: 37px;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 15px;
  left: 29px;
  color: #a855f7;
}

.base-timer__svg[data-v-2fc7aa4a] {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  display: none;
}
</style>
