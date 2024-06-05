<template>
  <div class="main-content">

    <!-- <b-row>
      <b-cols m="12" md="12" xl="12" lg="12" class="mb-30 px-4 "
        ><div class="font-weight-bold fa-2x text-light">Profile</div></b-cols
      >
    </b-row>

    <hr class="mt-1" /> -->

    <b-col sm="12" md="12" xl="12" lg="12" class="mb-30 px-0">
      <div class="card">
    <div class="d-flex align-items-end row">
        <div class="col-7">
            <div class="card-body text-nowrap">
                <h5 class="card-title mb-0">Congratulations, John! 🎉</h5>
                <p>Thank you for being awesome and sharing our platform with others! Below is your unique referral link:</p>

                <div data-v-0307aa70="" class="bg-white text-gray d-flex w-59"
                    style="overflow-wrap: anywhere; ">
                    <a data-v-0307aa70=""  :href="`https://temmuz.algofolks.com/app/sessions/affiliate?uid=${user_id}`" target="_blank"
                        class="referral-link  align-self-center">
                        https://temmuz.algofolks.com/app/sessions/affiliate?uid={{this.user_id}}</a>
                        <p class="px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end" @click="copyUrl">
      <i class="fa fa-clone" aria-hidden="true"></i>
    </p>
                </div>

            </div>
        </div>
        <div class="col-5 text-center text-sm-left d-none">
            <div class="card-body pb-0 px-0 px-md-4">
                <img
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png"
                    height="140" alt="view sales" />
            </div>
        </div>
    </div>
</div>
       
        </b-col>

    
    <!-- <breadcumb :page="'Profile'" :folder="'Profile'" />   -->


    

    <div class="main-div">
      <b-card title="Profile" class="for-profile">


        
        
        <b-form>
          <b-row class="my-3">
            <!-- <img
                v-if="selectedLogo"
                :src="selectedLogo"
                style="
                  max-height: 120px !important;
                  width: auto;
                  margin: 0px 0px 8px;
                  object-fit: cover;s
                  padding: 20px;
                  border-radius: 3%;
                  border: 1px solid #111827;
                "
              /> -->

            <b-col md="12" class="pb-2">
              
              Basic Deatils:  &nbsp; <span class="text-12">{{ 7845961236 }}</span>
              <!-- <div class="d-flex justify-content-between flex-wrap">
                <div class="d-flex align-items-baseline">
                  <i class="fa fa-envelope mr-2 mb-0 p-0" aria-hidden="true"></i
                  >{{ emailUser }}
                  <p v-if="this.verified !== false" class="text-success ml-2">
                    <span class="badge badge-primary blueVerfiy"
                      >verified<i
                        class="fa fa-check-circle blueVerfiy2"
                        style="padding-left: 4px"
                        aria-hidden="true"
                      ></i
                    ></span>
                  </p>
                  <p
                    v-else
                    @click="clickEmailVarified()"
                    class="ml-2 ul-cursor--pointer blueFover"
                  >
                    verify now
                  </p>
                </div>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-baseline">
                    <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                    {{ phoneUser }}
                    <p v-if="isOtp !== null" class="text-success ml-2">
                      <span class="badge badge-primary blueVerfiy"
                        >verified<i
                          class="fa fa-check-circle blueVerfiy2"
                          aria-hidden="true"
                          style="padding-left: 4px"
                        ></i
                      ></span>
                    </p>
                    <p
                      @click="clickOtpVarified()"
                      v-else
                      class="ml-2 ul-cursor--pointer blueFover"
                    >
                      verify now
                    </p>
                  </div>

                  <b-form-group label-for="input-2" v-if="clickOtp">
                    <b-form-input
                      v-model="forOtp"
                      @input="handelForOtp"
                      type="number"
                      placeholder="Enter opt"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div> -->
            </b-col>
            <!-- <b-col md="12" class="mb-2">
              Referral Link:
              <div class="d-flex flex-row border rounded p-2">
                <a :href="referralLink" class="referral-link" target="_blank">{{
                  referralLink
                }}</a>
                <p
                  class="ul-card__border-radius border text-10 mb-0 px-2 py-0 ul-cursor--pointer ml-2 d-flex justify-content-center align-items-center"
                  @click="copyReferralLink()"
                  style="border-radius: 5px"
                >
                  Copy
                </p>
              </div>
            </b-col> -->

            <div>
              <div>  <b-col md="12" class="pb-2">
              <!-- <img
                id="logo"
                :src="selectedLogo"
                class="mb-3"
                style="
                  border: 1px solid #111827;
                  padding: 4px;
                  border-radius: 3%;
                  object-fit: fill;
                  width: 8rem;
                  height: 8rem;
                "
              /> -->
              <img id="logo" src="https://quotestime.in/wp-content/uploads/2024/01/sad-instagram-dp.jpg" alt="Uploaded Image" />

            </b-col>

            <b-col md="6">
              <input
                id="chooseLogo"
                type="file"
                name="image"
                accept=".png,.jpg,.jpeg"
                style="display: none"
                @change="setImage"
              />
              <div class="spinner spinner-primary mr-3" v-if="logoloader"></div>
              <b-button
                v-if="!logoloader"
                variant="primary ripple"
                @click="chooseImage()"
              >
                Change Picture</b-button
              >
            </b-col>

              </div>
              <div>

              </div>
            </div>
          
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label="First Name" label-for="input-1">
                <b-form-input
                  v-model="form.fName"
                  type="text"
                  required
                  placeholder="First Name"
                  :formatter="formatYear"
                  v-on:keypress="isLetter($event)"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Last Name" label-for="input-1">
                <b-form-input
                  v-model="form.lName"
                  type="text"
                  required
                  placeholder="Last Name"
                  :formatter="formatYear"
                  v-on:keypress="isLetter($event)"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6 mb-25">
              <b-form-group label=" Email Address" label-for="input-3">
                <b-form-input
                  v-model="form.address"
                  type="text"
                  required
                  placeholder="Enter Address"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

      
          <b-row>
            <b-col md="12" class="">
              <div
                class="spinner spinner-primary mr-3"
                v-if="updateloader"
              ></div>
              <b-button
                v-if="!updateloader"
                variant="primary ripple"
                @click="updateUser()"
                >Update</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-card>
      <b-card title="Bank Account" class="for-profile">
    <b-form>
      <b-row>
        <b-col md="6">
          <b-form-group label="Bank Account No" label-for="bank-account-no">
            <b-form-input
              v-model="form.bankAccountNo"
              type="text"
              required
              placeholder="Bank Account No"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="IFSC Code" label-for="ifsc-code">
            <b-form-input
              v-model="form.ifscCode"
              type="text"
              required
              placeholder="IFSC Code"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-form-group label="Bank Name" label-for="bank-name">
            <b-form-input
              v-model="form.bankName"
              type="text"
              required
              placeholder="Bank Name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="PAN Card No" label-for="pan-card-no">
            <b-form-input
              v-model="form.panCardNo"
              type="text"
              required
              placeholder="PAN Card No"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12">
          <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
          <b-button
            v-if="!updateloader"
            variant="primary ripple"
            @click="updateUser"
          >
            Update
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>

    </div>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <!-- <b-card title="Profile">
      <b-form>
       
        <hr />

        <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
        <b-row>
          <b-col md="12 mb-30" class="update">
            <b-button
              v-if="!updateloader"
              variant="primary ripple"
              class="col-md-1 mb-3"
              @click="updateUser()"
              >Update</b-button
            >

            <p style="position: absolute; right: 20px">
              <i class="text-primary i-Lock-2"></i>
              <a href="#" v-b-modal.modal-center style="font-size: 15px"
                >Change password</a
              >

              <b-modal id="modal-center" centered title="Change Password">
                <div v-if="showMail">
                  <h5>Email</h5>
                  <b-form-input
                    class="col-6"
                    v-model="form.email"
                    type="text"
                    required
                    disabled
                    placeholder="Enter Email"
                  ></b-form-input>
                </div>

                <div v-if="!showMail">
                  <h5>Old Password</h5>
                  <b-form-input
                    class="col-6"
                    type="password"
                    v-model="oldpassword"
                    required
                    placeholder="*****"
                  ></b-form-input>

                  <div class="mt-3">
                    <h5>New Password</h5>
                    <b-form-input
                      class="col-6"
                      type="password"
                      v-model="newpassword"
                      required
                      placeholder="*****"
                    ></b-form-input>
                  </div>

                  <div class="mt-3">
                    <h5>Confirm Password</h5>
                    <b-form-input
                      class="col-6"
                      type="password"
                      v-model="confirmpassword"
                      required
                      placeholder="*****"
                    ></b-form-input>
                  </div>
                </div>
                <div slot="modal-footer" class="w-100">
                  <div
                    class="spinner spinner-primary float-right"
                    v-if="submitloader"
                  ></div>
                  <b-button
                    variant="primary"
                    v-if="!showMail && !submitloader"
                    size="sm"
                    class="float-right"
                    @click="changePassword()"
                  >
                    Update
                  </b-button>
                  <b-button
                    variant="primary"
                    size="sm"
                    class="float-right mr-3"
                    @click="reset()"
                    v-if="showMail && !submitloader"
                  >
                    Send Mail
                  </b-button>
                  <div>
                    <a
                      href="#"
                      variant="primary"
                      @click="viaEmail()"
                      v-if="!showMail"
                      >Via Email</a
                    >
                    <a
                      href="#"
                      variant="primary"
                      @click="viaOldPassword()"
                      v-if="showMail"
                      >Via Old Password</a
                    >
                  </div>
                </div>
              </b-modal>
            </p>
          </b-col>
        </b-row>
      </b-form>

      <div></div>
    </b-card> -->
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    title: "Profile",
  },
  components: {},
  data() {
    return {
      referralLink: "",
      clickOtp: false,
      verified: null,
      isOtp: null,
      imgSrc: null,
      aadharFrontCheckbox: false,
      aadharBackCheckbox: false,
      drivingLincenseBackCheckbox: false,
      passportFrontCheckbox: false,
      passportBackCheckbox: false,
      drivingLincenseFrontCheckbox: false,
      selectedImage: false,
      passportImage: false,
      passportImageBack: false,
      drivinglincenseImage: false,
      drivinglincenseImageBack: false,
      forOtp: "",
      updateloader: false,
      logoloader: false,
      docloader: false,
      loader: false,
      form: {
        fName: "",
        lName: "",

        address: "",
        url: "",
        city: "",
        state: "",
        pin_code: "",
      },
      back_aadhar_card: "",
      image: "",
      aadhar_card: "",
      driving_lincense: "",
      back_driving_lincense: "",
      haspassport: "True",
      passport: "",
      back_passport: "",
      emailUser: "",
      phoneUser: "",
      email: "",
      isLoading: false,
      showMail: false,
      isGetotpHide: false,
      newpassword: "",
      oldpassword: "",
      confirmpassword: "",
      submitloader: false,
      id: null,
      user_id: '',
      role:'',
      imgSrc: '',
    };
  },
  created() {
    this.user_id = localStorage.getItem('user_id');
    this.role = localStorage.getItem('role');
    if (this.user_id) {
      // this.isEdit = true;
      this.getProfileDetails();
    }
    // this.getCompanyData();
  },
  // computed(){
  //   console.log(this.forOtp)
  //   if(this.forOtp.length==6){
  //     this.$apiService
  //       .getCall(`otp/verify/?userId=${this.id}&otp=${this.forOtp}`)
  //       .then((res) => {
  //         if (!res.apidata.isError) {
  //           this.$toaster.makeToast(
  //             "success",
  //             "Verify successfully"
  //           );
  //           window.location.reload();

  //           this.loader = false;
  //         }
  //       })
  //       .catch((error) => {
  //         this.loader = false;
  //         this.$toaster.makeToast("warning", "Some think error");
  //       });

  //   }
  // },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true;
      // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    },
    
    copyReferralLink() {
      const el = document.createElement("textarea");
      el.value = this.referralLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.$toaster.makeToast("success", "Referral link copied to clipboard!");
    },
    viaEmail() {
      this.showMail = true;
      this.clearModalForm();
    },
    clickBookCar() {
      this.$router.push("/app/sessions/searchCar");
    },
    clickAddAmount() {
      this.$router.push("/app/mydesk/transaction");
    },

    clickOtpVarified() {
      this.clickOtp = true;
      this.loader = true;

      this.$apiService
        .getCall(`phone/verify/?userId=${this.id}&phone=${this.phoneUser}`)
        .then((res) => {
          if (!res.apidata.isError) {
            this.$toaster.makeToast("success", "Otp sent successfully");

            this.loader = false;
          }
        })
        .catch((error) => {
          this.loader = false;
          this.$toaster.makeToast("warning", "Some think error");
        });
    },
    handelForOtp(e) {
      if (this.forOtp.length == 4) {
        this.loader = true;
        this.clickOtp = false;

        this.$apiService
          .getCall(`otp/verify/?userId=${this.id}&otp=${this.forOtp}`)
          .then((res) => {
            if (!res.apidata.isError) {
              this.$toaster.makeToast("success", "Verify successfully");
              window.location.reload();

              this.loader = false;
            }
          })
          .catch((error) => {
            this.loader = false;
            this.$toaster.makeToast("warning", "Some think error");
          });
      }
    },
    clickEmailVarified() {
      this.loader = true;
      const reqData = {
        email: this.emailUser,
      };
      this.$apiService
        .postCall(`email/verify/`, reqData)
        .then((res) => {
          if (!res.apidata.isError) {
            this.$toaster.makeToast(
              "success",
              "Email verification link sent successfully"
            );

            this.loader = false;
          }
        })
        .catch((error) => {
          this.loader = false;
          this.$toaster.makeToast("warning", "Some think error");
        });
    },
    checkLength(event) {
      if (this.form.pin_code.toString().length >= 6 && event.keyCode !== 8) {
        // event.preventDefault();
        this.form.pin_code = this.form.pin_code.toString().substring(0, 5);
      }
    
    },

    
    viaOldPassword() {
      this.showMail = false;
    },

    setPassport(event) {
      this.loader = true;
      let formData = new FormData();
      const file = event.target.files[0];

      formData.append("picture", file);

      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.passport = res.apidata.path;

          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Passport front has been uploaded successfully"
          );
          this.passportFrontCheckbox = true;
        })
        .catch(() => {
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Passport back has been uploaded error"
          );
        });

      if (file) {
        // Read the selected file and display it as an image
        const reader = new FileReader();
        reader.onload = () => {
          this.passportImage = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.passportImage = null;
        this.passportFrontCheckbox = false;
      }
    },

    setPassportBack(event) {
      this.loader = true;
      let formData = new FormData();
      const file = event.target.files[0];

      formData.append("picture", file);

      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.back_passport = res.apidata.path;

          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Passport back has been uploaded successfully"
          );
          this.passportBackCheckbox = true;
        })
        .catch(() => {
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Passport back has been uploaded error"
          );
        });

      if (file) {
        // Read the selected file and display it as an image
        const reader = new FileReader();
        reader.onload = () => {
          this.passportImageBack = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.passportImageBack = null;
        this.passportBackCheckbox = false;
      }
    },

    setDrivingLincense(event) {
      this.loader = true;
      let formData = new FormData();

      const file = event.target.files[0];
      formData.append("picture", file);

      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.driving_lincense = res.apidata.path;

          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Driving license front has been uploaded successfully"
          );
          this.drivingLincenseFrontCheckbox = true;
        })
        .catch(() => {
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Driving license back has been uploaded error"
          );
        });

      if (file) {
        // Read the selected file and display it as an image
        const reader = new FileReader();
        reader.onload = () => {
          this.drivinglincenseImage = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.drivinglincenseImage = null;
        this.drivingLincenseFrontCheckbox = false;
      }
    },
    setDrivingLincenseBack(event) {
      this.loader = true;
      let formData = new FormData();

      const file = event.target.files[0];
      formData.append("picture", file);

      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.back_driving_lincense = res.apidata.path;

          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Driving lincense back has been uploaded successfully"
          );
          this.drivingLincenseBackCheckbox = true;
        })
        .catch(() => {
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Driving lincense back has been uploaded error"
          );
        });

      if (file) {
        // Read the selected file and display it as an image
        const reader = new FileReader();
        reader.onload = () => {
          this.drivinglincenseImageBack = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.drivinglincenseImageBack = null;
        this.drivingLincenseBackCheckbox = false;
      }
    },

    setAadhar(event) {
      this.loader = true;
      let formData = new FormData();
      const file = event.target.files[0];
      formData.append("picture", file);
      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.aadhar_card = res.apidata.path;
          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Aadhar front has been uploaded successfully"
          );
          this.aadharFrontCheckbox = true;
        })
        .catch(() => {
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Aadhar front has been uploaded error"
          );
        });
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedImage = null;
        this.aadharFrontCheckbox = false;
      }
    },
    chooseAadhar() {
      const fileInput = document.getElementById("aadhar");
      if (fileInput.files.length > 0) {
        this.aadharFrontCheckbox = true;
      } else {
        this.aadharFrontCheckbox = false;
      }
      fileInput.click();
    },

    // setAadhar(event) {
    //   this.loader = true;
    //   let formData = new FormData();
    //   const file = event.target.files[0];
    //   formData.append("picture", file);
    //   console.log(file);

    //   this.$apiService
    //     .postFileCall("uploadimage/", formData)
    //     .then((res) => {
    //       this.aadhar_card = res.apidata.path;

    //       this.loader = false;
    //       this.$toaster.makeToast("success", "Aadhar  uploaded successfully");
    //     })
    //     .catch(() => {
    //       // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //       this.$toaster.makeToast("warning", "Aadhar  uploaded error");
    //     });
    //   debugger;
    //   if (file) {
    //     // Read the selected file and display it as an image
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       this.selectedImage = reader.result;
    //     };

    //     reader.readAsDataURL(file);
    //     debugger;
    //   } else {
    //     this.selectedImage = null;
    //   }
    // },

    setAadharback(event) {
      this.loader = true;
      let formData = new FormData();
      const file = event.target.files[0];
      formData.append("picture", file);

      this.$apiService
        .postFileCall("uploadimage/", formData)
        .then((res) => {
          this.back_aadhar_card = res.apidata.path;

          this.loader = false;
          this.$toaster.makeToast(
            "success",
            "Aadhar back has been uploaded successfully"
          );
          this.aadharBackCheckbox = true;
        })
        .catch(() => {
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
          this.$toaster.makeToast(
            "warning",
            "Aadhar back has been uploaded error"
          );
        });

      if (file) {
        // Read the selected file and display it as an image
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImageBack = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.selectedImageBack = null;
        this.aadharBackCheckbox = false;
      }
    },

    setImage(e) {
  this.logoloader = true;
  let formData = new FormData();
  const file = e.target.files[0];

  formData.append("picture", file);

  this.$apiService
    .postFileCall("uploadimage/", formData)
    .then((res) => {
      this.form.url = res.apidata.path;

      this.logoloader = false;
      this.$toaster.makeToast("success", "Photo has been updated");
    })
    .catch(() => {
      this.logoloader = false;
      this.$toaster.makeToast("warning", "Photo update failed");
    });

  if (!file.type.includes("image/")) {
    alert("Please select an image file");
    return;
  }
  if (typeof FileReader === "function") {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.imgSrc = "https://quotestime.in/wp-content/uploads/2024/01/sad-instagram-dp.jpg"; // Hardcoded image URL
      document.getElementById("logo").src = this.imgSrc;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Sorry, FileReader API not supported");
  }
},

    // setImage(e) {
    //   this.logoloader = true;
    //   let formData = new FormData();
    //   const file = e.target.files[0];

    //   formData.append("picture", file);

    //   this.$apiService
    //     .postFileCall("uploadimage/", formData)
    //     .then((res) => {
    //       this.form.url = res.apidata.path;
          

    //       this.logoloader = false;
    //       this.$toaster.makeToast("success", "Photo has been updated");
    //     })
    //     .catch(() => {
    //       // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.logoloader = false;
    //       this.$toaster.makeToast("warning", "Photo has been update failed");
    //     });

    //   if (!file.type.includes("image/")) {
    //     alert("Please select an image file");
    //     return;
    //   }
    //   if (typeof FileReader === "function") {
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //       this.imgSrc = event.target.result;
    //       document.getElementById("logo").src = this.imgSrc;
    //     };
    //     reader.readAsDataURL(file);
    //   } else {
    //     alert("Sorry, FileReader API not supported");
    //   }
    // },

    chooseAadharBack() {
      const fileGet = document.getElementById("aadharback");
      if (fileGet.files.length > 0) {
        this.aadharBackCheckbox = true;
      } else {
        this.aadharBackCheckbox = false;
      }
      fileGet.click();
    },
    // chooseAadhar() {
    //   document.getElementById("aadhar").click();
    // },
    chooseDrivingLincenseBack() {
      const getBack = document.getElementById("drivinglincenseback");
      if (getBack.files.length > 0) {
        this.drivingLincenseBackCheckbox = true;
      } else {
        this.drivingLincenseBackCheckbox = false;
      }
      getBack.click();
    },
    chooseDrivingLincense() {
      const getFront = document.getElementById("drivinglincense");
      if (getFront.files.length > 0) {
        this.drivingLincenseFrontCheckbox = true;
      } else {
        this.drivingLincenseFrontCheckbox = false;
      }
      getFront.click();
    },
    choosePassport() {
      const passportFront = document.getElementById("passport");
      if (passportFront.files.length > 0) {
        this.passportFrontCheckbox = true;
      } else {
        this.passportFrontCheckbox = false;
      }
      passportFront.click();
    },
    choosePassportBack() {
      const passportBack = document.getElementById("passportback");
      if (passportBack.files.length > 0) {
        this.passportBackCheckbox = true;
      } else {
        this.passportBackCheckbox = false;
      }
      passportBack.click();
    },
    chooseImage() {
      document.getElementById("chooseLogo").click();
    },
    updateUser() {
      this.updateloader = true;
      let formData = new FormData();
      formData.append("first_name", this.form.fName);
      formData.append("last_name", this.form.lName);
      formData.append("local_address", this.form.address);

      formData.append("image", this.form.url || this.selectedLogo);

      formData.append("city", this.form.city);
      formData.append("state", this.form.state);
      formData.append("pin_code", this.form.pin_code);

      if (!this.form.fName && !this.form.lName) {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.updateloader = false;
        return;
      }

      this.$apiService
        .putCall(`account/updateUserAPIView/${this.id}`, formData)
        .then((res) => {
          this.updateloader = false;
          this.$toaster.makeToast("success", "Details updated successfully");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch((error) => {
          this.updateloader = false;
          this.$toaster.makeToast("warning", "Details updated error");
        });
    },

    updateDocuments() {
      this.docloader = true;
      let formData = new FormData();
      if (this.selectedImage != null) {
        formData.append("aadhar_card", this.aadhar_card || this.selectedImage);
      }

      if (this.drivinglincenseImage != null) {
        formData.append(
          "driving_lincense",
          this.driving_lincense || this.drivinglincenseImage
        );
      }

      formData.append("haspassport", this.haspassport);
      if (this.passportImage != null) {
        formData.append("passport", this.passport || this.passportImage);
      }

      if (this.selectedImageBack != null) {
        formData.append(
          "back_aadhar_card",
          this.back_aadhar_card || this.selectedImageBack
        );
      }

      if (this.drivinglincenseImageBack != null) {
        formData.append(
          "back_driving_lincense",
          this.back_driving_lincense || this.drivinglincenseImageBack
        );
      }

      if (this.passportImageBack != null) {
        formData.append(
          "back_passport",
          this.back_passport || this.passportImageBack
        );
      }

      if (
        formData.has("aadhar_card") &&
        formData.has("back_aadhar_card") &&
        formData.has("driving_lincense") &&
        formData.has("back_driving_lincense")
      ) {
        this.$apiService
          .putCall(`account/updateDocumentAPIView/${this.id}`, formData)
          .then((res) => {
            if (!res.isError && formData) {
              this.docloader = false;
              this.$toaster.makeToast(
                "success",
                "Documents updated successfully"
              );
            } else {
              this.docloader = false;
              this.$toaster.makeToast("warning", "Documents updated failed");
            }
          })
          .catch((error) => {
            this.docloader = false;
            this.$toaster.makeToast("warning", "Documents updated failed");
          });
      } else {
        this.docloader = false;
        this.$toaster.makeToast(
          "warning",
          "Aadhar Card,Driving Lincense is mandatory "
        );
      }
    },
    getCompanyData() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          this.form = res.apidata.data;
          if (this.form.logo) {
            this.$apiService
              .postCall("download", { urlPath: this.form.logo })
              .then((res) => {
                document.getElementById("logo").src =
                  "data:image/jpeg;base64," + res.apidata.fileData;
                this.isLoading = false;
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
          console.log(error);
        });
    },
    // async getCarDetails() {
    //   try {
    //     this.loader = true;
    //     let response = await this.$apiService.getCall(`account/?id=${this.id}`);
    //     this.form.fName = response.apidata.form.fName;

    //     this.loader = false;
    //   } catch (error) {
    //     this.loader = false;
    //     console.log(error);
    //   }
    // },
    changePassword() {
      this.submitloader = true;
      if (this.newpassword && this.oldpassword && this.confirmpassword) {
        if (this.newpassword != this.confirmpassword) {
          this.$toaster.makeToast("warning", message.VALIDATION_ERROR);
          this.submitloader = false;
          return;
        }

        if (this.newpassword.length < 5) {
          this.$toaster.makeToast("warning", message.PASSWORDNOT_OK);
          this.submitloader = false;
          return;
        }

        if (this.confirmpassword.length < 5) {
          this.$toaster.makeToast("warning", message.PASSWORDNOT_OK);
          this.submitloader = false;
          return;
        }

        let requestData = {
          newpassword: this.newpassword,
          oldpassword: this.oldpassword,
          confirmpassword: this.confirmpassword,
        };
        this.$apiService
          .postCall("change-password", requestData)
          .then((res) => {
            if (res.error) {
              this.$toaster.makeToast("warning", message.MISMATCH_ERROR);
              this.submitloader = false;
              return;
            }

            this.$toaster.makeToast("success", message.UPDATE_MESSAGE);
            this.clearModalForm();
            this.$bvModal.hide("modal-center");
            this.submitloader = false;
          })
          .catch((error) => {
            this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
            this.submitloader = false;
          });
      } else {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.submitloader = false;
      }
    },
    clearModalForm() {
      this.newpassword = "";
      this.confirmpassword = "";
      this.oldpassword = "";
    },
    reset() {
      this.submitloader = true;
      // if (this.email) {
      //   this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
      //   this.submitloader = false;
      //   return;
      // }

      this.$apiService
        .postCall("forget-password", { email: this.form.email })
        .then((res) => {
          if (res.error) {
            this.notFound = true;
            this.$toaster.makeToast("warning", message.NOT_FOUND);
            this.submitloader = false;
          } else {
            this.$toaster.makeToast(
              "success",
              message.EMAIL_VERIFICATION_MESSAGE
            );
            this.notFound = false;
            this.submitloader = false;
            this.$bvModal.hide("modal-center");
            setTimeout(() => {
              this.$router.push("/app/sessions/signIn");
            }, 3000);
          }
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.submitloader = false;
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
#logo {
  /* max-width: 20.66667%;
  min-width: 25.66667%; */
  /* max-height: 10rem; */
  /* min-height: 10rem; */
}

/* #doc {
  max-width: 8.66667%;
  min-width: 8.66667%;
  max-height: 5rem;
  min-height: 5rem;
} */

#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}

.for-border {
  border: 1px solid rgb(156, 163, 175);
}

.update {
  display: flex;
  align-items: center;
}

.custom-checked {
  border-color: aqua;
  color: yellow;
}
.main-div {
  gap: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.for-profile {
  width: 49%;
}

@media (max-width: 768px) {
  .main-div {
    flex-direction: column;
  }

  .main-content-wrap {
    padding: 0 !important;
  }
  .for-profile {
    width: 100%;
  }
  .referral-link {
    overflow-wrap: break-word;
    color: blue; /* Set link color to blue */
    text-decoration: underline;
    font-size: 6.5px;
    /* Add underline to the link */
  }
}

.blueVerfiy {
  background-color: #3b82f6;
  /* color: #3b82f6; */
}
.blueVerfiy2[data-v-6cdc9553] {
  background-color: #3b82f6;
  color: #ffffff;
  padding-left: 3px;
}
.blueFover {
  color: #3b82f6;
}
.referral-link {
  overflow-wrap: break-word;
  color: blue; /* Set link color to blue */
  text-decoration: underline; /* Add underline to the link */
}

img {
    max-width: 26%;
    border-radius: 8px;
}

.w-59 {
    width: 59% !important;
}

/* Style for the container to improve readability and appearance */
</style>
