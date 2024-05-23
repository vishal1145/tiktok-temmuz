<template>
  <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <nav
      class="navbar for-nav container-fluid"
     
    >
      <div class="container-fluid d-flex justify-content-between">
       
          <img
          :src="logo"
            alt=""
            width="70"
          height="70"
            class="d-inline-block align-text-top"
          />
          <a @click="openPopup()" style="text-decoration: underline; cursor: pointer;" class=" text-primary">Forget Password</a>
          
       
      </div>
    </nav>
    <b-modal
      id="modal-attachment"
      size="sm"
      title="Account Suspended"
      style="height: 100px"
      hide-footer
      hide-header
    >
    <div
        class="card o-hidden "
        
      >
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30"> <img :src="logo" /></div>
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
                  <!-- <input
                    id="email"
                    v-model="phone"
                    placeholder="abc@gmail.com"
                    class="form-control form-control-rounded"
                    type="number"
                  /> -->
                  <!-- <label for="email">New Password</label>
                  <input
                   
                    id="password"
                    v-model="password"
                    placeholder="Reset password"
                    class="form-control form-control-rounded"
                    type="password"
                  /> -->
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
          <!-- <div
            class="col-md-6 text-center "
            style="background-size: cover"
            :style="{ backgroundImage: 'url(' + formImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <a
                class="btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded"
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </a>
              <a
                class="btn btn-outline-primary btn-outline-google btn-block btn-icon-text btn-rounded"
              >
                <i class="i-Google-Plus"></i> Sign in with Google
              </a>
              <a
                class="btn btn-outline-primary btn-outline-facebook btn-block btn-icon-text btn-rounded"
              >
                <i class="i-Facebook-2"></i> Sign in with Facebook
              </a>
            </div>
          </div> -->
        </div>
      </div>
      
    </b-modal>
    
    
    <div class="auth-content">
      
    </div>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Forgot Password",
  },
  data() {
    return {
      
      userEmail:'',
      password:'',
      bgImage: require("@/assets/images/car_sec.png"),
      logo: require("@/assets/images/zoombacar.png"),
      formImage: require("@/assets/images/photo-long-3.jpg"),
      // form: {
      //   email: "admin@gmail.com",
      // },
      loader: false,
      notFound: false,
    };
  },
  created() {
    var storedUser = localStorage.getItem("userInfo");

    var parsedUser = JSON.parse(storedUser);
    this.userEmail = parsedUser.data.email;
  },
  methods: {
    openPopup() {
      this.$bvModal.show("modal-attachment");
    },
    reset() {
      this.loader = true;
      var reqData={
        email:this.userEmail,
      }
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
  },
};
</script>

<style>

.for-nav{
    width: 100%;
    height: 80px;
    -webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
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
.for-card{
  width: 50%;
  margin-left: 11rem;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
  
 
}
@media screen and (max-width: 1024px){
  .for-card{
  width: 100%;
  margin-left: 0;
  box-shadow: 0 1px 15px grey, 0 1px 6px rgba(0, 0, 0, 0.04);
}
}

</style>
