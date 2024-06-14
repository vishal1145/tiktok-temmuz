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
        <!-- <a @click="openPopup" style="text-decoration: underline; cursor: pointer;" class=" text-primary">Sign Up</a> -->
      </div>
    </nav>

    <div
      class="main-div d-flex flex-row justify-content-between overflow-hidden"
    >
      <div class="row pt-2">
        <b-col
          class="col-md-4 pw px-0"
          lg="4"
          xl="4"
          mt="3"
          style="background-color: #f3f4f6"
        >
          <div class="">
            <div class="card-body">
              <div class="pb-3">
                <h2 class="my-0">Chat with us</h2>
                <p class="mb-2">
                  Would you like to get live support from our team?
                </p>
                <p class="my-1">
                  <span style="color: gray !important"
                    ><i class="fa fa-envelope-o pr-1" aria-hidden="true"></i
                  ></span>
                  <a
                    href="mailto:info@temmuzajans.com"
                    style="color: gray !important"
                    ><strong> Send an email</strong></a
                  >
                </p>
                <p>
                  <span
                    ><i class="fa fa-whatsapp pr-2" aria-hidden="true"></i
                  ></span>
                  <a
                    href="https://wa.me/905310133151"
                    style="color: gray !important"
                    ><strong>Send a WhatsApp message</strong></a
                  >
                </p>
              </div>
              <div class="pb-3">
                <h2 class="my-0">Call us</h2>
                <p class="my-1">
                  You can call us every weekday between 10:00-17:00
                </p>
                <p>
                  <span
                    ><i class="fa fa-phone pr-2" aria-hidden="true"></i>
                  </span>
                  <a href="tel:+905310133151" style="color: gray !important">
                    <strong>+90 (531) 013 3151</strong></a
                  >
                </p>
              </div>
              <div class="pb-3">
                <h2 class="my-0">Visit us</h2>
                <p class="">
                  Come and meet us face-to-face every weekday between
                  10:00-17:00
                </p>
                <address>
                  <div>
                    <div
                      class="d-flex flex-row align-items-baseline"
                      style="gap: 8px"
                    >
                      <div>
                        <span
                          ><i class="fa fa-map-marker" aria-hidden="true"></i
                        ></span>
                      </div>
                      <div>
                        <p class="m-0">
                          <strong> Gazi Mh. Fatih Sultan Mehmet Blvd.</strong>
                        </p>
                        <p>Yenimahalle Ankara</p>
                      </div>
                    </div>
                    <div class="d-flex flex-row" style="gap: 8px">
                      <div>
                        <span
                          ><i class="fa fa-map-marker" aria-hidden="true"></i
                        ></span>
                      </div>
                      <div>
                        <p class="m-0">
                          <strong> Gazi Mh. Fatih Sultan Mehmet Blvd.</strong>
                        </p>
                        <p>Yenimahalle Ankara</p>
                      </div>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="col-md-8 pw" lg="8" xl="8" mt="3">
          <div class="card">
            <div class="card-body">
              <h2>Let's get started!</h2>
              <p>
                If you are a TikTok broadcaster or want to become one, you can
                attract the attention of millions of people with Temmuz Agency
                and increase your earnings up to ten times.
              </p>

              <div class="d-flex flex-row">
                <div class="w-50">
                  <div class="mb-3 pr-2">
                    <label for="firstName" class="form-label">First Name</label>
                    <input
                      type="text"
                      v-model="userFirstName"
                      class="form-control"
                      id="firstName"
                    />
                  </div>
                  <div class="mb-3 pr-2">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input
                      type="text"
                      v-model="userLastName"
                      class="form-control"
                      id="lastName"
                    />
                  </div>
                  <div class="mb-3 pr-2">
                    <label for="phoneNumber" class="form-label"
                      >Phone Number</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="phoneNumber"
                      @keydown="checkLength"
                      v-model="phoneNumber"
                    />
                  </div>
                </div>
                <div class="w-50">
                  <div class="mb-3 pl-2">
                    <label for="tiktokName" class="form-label"
                      >Tiktok User Name</label
                    >
                    <input
                      type="text"
                      v-model="tiktokName"
                      class="form-control"
                      id="tiktokName"
                    />
                  </div>
                  <div class="mb-3 pl-2">
                    <label for="tiktokCode" class="form-label"
                      >TikTok Agency Code</label
                    >
                    <input
                      type="number"
                      v-model="centerCode"
                      @keydown="checkLengthCode"
                      class="form-control"
                      id="tiktokCode"
                    />
                  </div>

                  <div class="d-flex justify-content-between">
                    <div class="mb-3 w-50">
                      <label for="img-btn" class="form-label"
                        >Select Image</label
                      >
                      <b-form-group label-for="input-images">
                        <b-form-file
                          v-model="images"
                          @input="handleImageSelection"
                          placeholder="Choose image"
                          drop-placeholder="Drop files here..."
                          accept=".png,.jpg,.jpeg"
                        ></b-form-file>
                      </b-form-group>
                    </div>

                    <div
                      class="spinner spinner-primary imgloader"
                      v-if="imgLoader"
                    ></div>
                    <b-col
                      md="6"
                      class="justify-content-end d-flex align-items-center pb-2"
                    >
                      <img
                        v-if="uplodedImages"
                        :src="this.uplodedImages"
                        alt=""
                        class="img-fluid"
                        height="50"
                        width="50"
                      />
                    </b-col>
                  </div>
                </div>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="agree" />
                <label class="form-check-label" for="agree">
                  Click for the Information Text about Personal Data. By
                  applying, you accept the terms of use.
                </label>
              </div>

              <button class="btn btn-primary" @click="addPublisher()">
                Complete Application
              </button>
            </div>
          </div>
        </b-col>
      </div>
    </div>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>

<!-- <script>


  export default {
    name: "ContactForm"
  };
  
  </script> -->

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import message from '../../../message'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'SignUp'
  },

  data () {
    return {
      fName: '',
      email: '',
      bgImage: require('@/assets/images/back_ground.png'),
      logo: require('@/assets/images/zoombacar.png'),
      signInImage: require('@/assets/images/photo-long-3.jpg'),
      password: '',
      phone: '',
      repeatPassword: '',
      submitStatus: null,
      alertShow: false,
      isLoading: false,
      showPassword: false,
      imgLoader: false,
      loader: false,
      userId: '',
      userFirstName: '',
      userLastName: '',
      tiktokName: '',
      phoneNumber: '',
      centerCode: '',
      uplodedImages: '',
      images: null,
      tikTokUser: '',
      memberTikTokUser: '',
      canUpdateData: ''
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

  computed: {
    ...mapGetters(['loggedInUser', 'loading', 'error'])
  },
  created () {
    this.tikTokUser = this.$route.query.name
    this.memberTikTokUser = this.$route.query.u
    //this.getTikTokUser();
    this.getMemberTikTokUser()
  },

  methods: {
    ...mapActions(['signUserUp']),
    //   validate form
    async handleImageSelection () {
      this.imgLoader = true

      try {
        const formData = new FormData()
        if (this.images) {
          formData.append('image', this.images)
        }

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .postCall('util/image/', formData)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.imgLoader = false
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.imgLoader = false
          this.uplodedImages = response.apidata.url
          this.$toaster.makeToast('success', 'Image upload successfully')
        }
      } catch (error) {
        this.imgLoader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // confirm.log(error)
      }
    },
    async getMemberTikTokUser () {
      this.loader = true
      try {
        const response = await this.$apiService.getCall(
          `publisher/get-member?name=${this.memberTikTokUser}`
        )
        if (response.isError === false) {
          if (response.apidata.data.length > 0) {
            this.userId = response.apidata.data[0]._id
            this.loader = false
          } else {
            this.loader = false
            this.$toaster.makeToast('warning', 'Empty Data')
          }
          //this.centerCode = response.apidata.data[0].agency_center_code;
          //this.tiktokName = response.apidata.data[0].tiktok_username;
          //   this.userId= response.apidata.data[0]._id;

          // this.loader = false
        } else {
          this.loader = false
          this.$toaster.makeToast('warning', 'Failed to fetch tiktok user data')
        }
      } catch (error) {
        this.$toaster.makeToast('error', 'Error fetching tiktok data')
      } finally {
        this.loader = false
      }
    },
    async getTikTokUser () {
      this.loader = true
      try {
        const response = await this.$apiService.getCall(
          `publisher/get-creator?name=${this.tikTokUser}`
        )
        if (response.isError === false) {
          this.centerCode = response.apidata.data[0].agency_center_code
          this.tiktokName = response.apidata.data[0].tiktok_username
          this.userId = response.apidata.data[0]._id

          this.loader = false
        } else {
          this.loader = false
          this.$toaster.makeToast('warning', 'Failed to fetch tiktok user data')
        }
      } catch (error) {
        this.$toaster.makeToast('error', 'Error fetching tiktok data')
      } finally {
        this.loader = false
      }
    },
    async canUpdate () {
      try {
        let requestData1 = {
          tiktok_username: this.tiktokName,
          userId: this.userId
        }
        var resp = await this.$apiService.postCall(
          `publisher/can-update`,
          requestData1
        )

        if (response.error) {
          this.$toaster.makeToast('error', 'Error update')

          this.loader = false
        } else {
          this.loader = false
          this.canUpdateData = resp.apidata.canUpdate
        }
      } catch (error) {
        this.$toaster.makeToast('error', 'Error server Error')
      }
    },
    async addPublisher () {
      if (
        !this.phoneNumber ||
        !this.centerCode ||
        !this.userFirstName ||
        !this.userLastName ||
        !this.tiktokName
      ) {
        this.$toaster.makeToast('warning', 'All fields are required')
      }
      let requestData1 = {
          tiktok_username: this.tiktokName,
          userId: this.userId
        }
        var resp = await this.$apiService.postCall(
          `publisher/can-update`,
          requestData1
        )
      var canUpdateData = resp.apidata.canUpdate;
      if (canUpdateData==true) {
        this.loader = true

        try {
          //const imageUrls = await this.uploadImages();

          let requestData = {
            first_name: this.userFirstName,
            last_name: this.userLastName,
            contact_number: this.phoneNumber,
            agency_center_code: this.centerCode,
            tiktok_username: this.tiktokName,
            icon: this.uplodedImages || null
          }
          // Assuming you want to make a POST request
          const res = await new Promise((resolve, reject) => {
            this.$apiService
              .postCall(`publisher/update/${resp.apidata.result._id}`, requestData)
              .then(data => resolve(data))
              .catch(error => reject(error))
          })
          await this.addStatus(resp.apidata.result._id)

          if (res.error) {
            this.loader = false
            this.$toaster.makeToast('warning', res.message)
          } else {
            this.$toaster.makeToast(
              'success',
              'Your data has been recorded, and you will be notified shortly.'
            )
            this.$router.push('/app/sessions/signIn')
            this.loader = false
            this.userFirstName = ''
            this.userLastName = ''
            this.tiktokName = ''
            this.centerCode = ''
            this.phoneNumber = ''
            this.uplodedImages = null
            // this.$toaster.makeToast('success', 'Data added successfully');
          }
        } catch (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: Server Error')
          // console.error(error)
        }
      } else {
        this.$toaster.makeToast(
          'warning',
          'you are not allowed to fill the application '
        )
      }
    },
    async addStatus (recordId) {

      // if (this.searchUser.length > 0) {
      //   this.$toaster.makeToast('warning', 'Publisher Name already exist')
      // } else {
      this.loader = true
      try {
        //const imageUrls = await this.uploadImages();
        let requestData = {
          status: 'Waiting Approval'
        }

        // Assuming you want to make a POST request
        const res = await new Promise((resolve, reject) => {
          this.$apiService
            .postCall(
              `publisher/update-publisher-status/${recordId}`,
              requestData
            )
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.$toaster.makeToast(
            'success',
            'Your data has been recorded, and you will be notified shortly.'
          )
          this.$router.push('/app/sessions/signIn')
          this.loader = false
          this.userFirstName = ''
          this.userLastName = ''
          this.tiktokName = ''
          this.centerCode = ''
          this.phoneNumber = ''
          this.uplodedImages = null
          // this.$toaster.makeToast('success', 'Data added successfully');
        }
      } catch (error) {
        this.loader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // console.error(error)
      }
      // }
    },
    checkLength (event) {
      if (this.phoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    checkLengthCode (event) {
      if (this.centerCode.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.isLoading = true
        // this.$store.commit("setLoading", true);
        // this.$store.commit("clearError");
        const requestData = {
          email: this.email,
          password: this.password,
          // "first_name": this.fName,
          phone: this.phone
        }

        this.$apiService
          .postCall('account/', requestData)
          .then(user => {
            // this.$router.push("signIn");
            // this.$store.commit("setLoading", false);
            if (!user.error) {
              setTimeout(() => {
                // this.submitStatus = "OK";
                this.$router.push('/')
              }, 2000)
              this.$toaster.makeToast(
                'success',
                'User successfully registered, Verification link sent to your mail'
              )
              localStorage.setItem('accesstoken', user.apidata.access_token)
              const newUser = { data: user.apidata.data }
              localStorage.setItem('userInfo', JSON.stringify(newUser))
              this.isLoading = false
              return
            }
            if (
              user.error.response.data.email ==
              'user with this email already exists.'
            ) {
              this.$toaster.makeToast('warning', 'User email already exists')
              this.isLoading = false
              return
            } else if (
              user.error.response.data.phone ==
              'user with this phone already exists.'
            ) {
              this.$toaster.makeToast('warning', 'User phone already exists')
              this.isLoading = false
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
            this.isLoading = false
            // this.$store.commit("setLoading", false);
            localStorage.removeItem('userInfo')
            this.$store.commit('setError', { message: error })

            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          })
        // this.signUserUp({ email: this.email, password: this.password });
        // this.submitStatus = "PENDING";
      }
    },

    openPopup () {
      this.$bvModal.show('modal-attachment')
    },

    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    },
    makeToast (variant = null) {
      this.$bvToast.toast('Please fill the form correctly.', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    },
    makeToastTwo (variant = null) {
      this.$bvToast.toast('Successfully Created Account', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    },

    inputSubmit () {
      // console.log("submitted");
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
h2 {
  font-weight: bold;
}
form {
  background-color: #f8f9fa00;
  padding-right: 20px;
  padding-left: 20px;

  border-radius: 5px;
}

.form-control {
  border: initial;
  outline: initial !important;
  background: #f3f4f6;
  /* border: 1px solid #9CA3AF; */
  color: #111827;
}

.container[data-v-8a9f1160] {
  max-width: 1294px;
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

.padding {
  padding-left: 20px;
  padding-right: 20px;
}
.imgloader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 100;
}
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 100;
}

.pw {
  margin-top: 4px !important;

  color: #6f6b7d;
  font-size: 0.9375rem;
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

/* Media query for laptop screens and larger */
@media (min-width: 1400px) {
  .padding {
    padding-left: 80px;
    padding-right: 80px;
  }
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-left: 21px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.card-title,
.text-title {
  color: #05070bc2;
}

.fa-envelope-o:before {
  content: '\f003';
  color: gray;
}

.fa-whatsapp:before {
  content: '\f232';
  color: gray;
}

.fa-phone:before {
  content: '\f095';
  color: gray;
}
</style>
