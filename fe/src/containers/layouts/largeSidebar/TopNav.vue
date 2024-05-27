<template>
  <div
    class="main-header smallflex  align-content-around d-flex flex-row justify-content-between"
  >
    <div class="nav-logo" @click="clickLogo()" style="cursor: pointer">
      <img src="@/assets/images/food_nav.png" style="
    width: 89px!important;
"/>
    </div>

 



    <!-- <div
      class="onlyFormobileView"
      
    >
      <b-dropdown
        id="dropdown-1"
        text="Dropdown Button"
        class="m-md-2 user align-self-end"
        toggle-class="text-decoration-none"
        no-caret
        variant="link"
        ref="dropdown"
      >
        <template slot="button-content">
          <img
            :src="userLogo"
            style="
              object-fit: cover;
              width: 35px;
              height: 35px;
              border-radius: 50%;
             
            "
            alt
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </template>

        <div class="dropdown-menu-right" aria-labelledby="userDropdown">
          <div class="dropdown-header">
            <i class="fa fa-user" aria-hidden="true"
              ><span class="ml-2" style="font-size: 0.813rem">{{
                this.userName
              }}</span></i
            >
          </div>
          
          <a class="dropdown-item">
            <li class="nav-item" data-item="profiledata" :data-submenu="false">
              <router-link
                tag="a"
                class
                to="/app/profiledata/profile"
                @click.prevent="hideDropdown()"
              >
                <a class="nav-item-hold" href="#" @click="hideDropdown()">
                 
                  <span class="nav-text" style="color: black">{{
                    $t("Profile")
                  }}</span>
                </a>
                <div class="triangle"></div>
              </router-link></li
          ></a>

          <div >
            <a
              @click.prevent="moveNext"
              class="dropdown-item"
              style="cursor: pointer"
              >Transaction</a
            >

            <a class="dropdown-item" href="#" @click.prevent="clickBookingCar()"
              >Booking</a
            >
            
          </div>

          <a class="dropdown-item" href="#" @click.prevent="logoutUser"
            >Sign out <i class="fa fa-sign-out pl-2" aria-hidden="true"></i
          ></a>
        </div>
      </b-dropdown>
    </div>  -->
    <!-- <div class="onlyFormobileView">
      <div
        v-if="
          userName !== null &&
          userName !== undefined &&
          role !== 'Admin' &&
          notificationData
        "
        @click="clickNotification()"
        class="position-relative ul-cursor--pointer mr-2"
      >
        <i class="fa fa-bell fa-2x text-warning" aria-hidden="true"></i>
        <div class="for-icon position-absolute text-center">
          <strong class="text-10 text-white">{{
            notificationData.length
          }}</strong>
        </div>
      </div>
    </div> -->
   
 

    <div>
        <a class="dropdown-item" href="#" @click.prevent="logoutUser"
            >Sign out <i class="fa fa-sign-out pl-2" aria-hidden="true"></i
          ></a>
  </div>
    <!-- <div
      v-if="userName == null && userName == undefined"
      class="dropdown pt-2 onlyFormobileView"
    >
      <a
        @click="openPopup"
        class="btn btn-primary w-100 text-white d-flex flex-row"
      >
        <div>
          <i class="fa fa-sign-in" aria-hidden="true"></i>
        </div>
        <div class="ml-2">Sign In</div>
      </a>
    </div> -->
    <!-- <div
      class="onlyFormobileView"
      style="padding-top: 0.5em"
      v-if="userName !== null && userName !== undefined && role !== 'Admin'"
    >
      <b-button variant="primary ripple" @click="clickBookCar()">
        <i class="fa fa-car text-white" aria-hidden="true"></i> Book
        Car</b-button
      >
    </div> -->

    <b-modal
      id="modal-attachment-notification"
      size="md"
      hide-footer
      title="Notification"
      scrollable
    >
      <template #modal-title>
        <div class="d-flex justify-content-between">
          Notification
          <p
            class="text-primary ul-cursor--pointer text-decoration-underline ml-12"
            style="text-decoration: underline"
            @click="clickSeeMore()"
          >
            See more
          </p>
        </div>
      </template>
      <b-row class="p-2">
        <b-col v-if="notificationData.length > 0">
          <div
            v-for="(data, index) in notificationData"
            :key="index"
            class="mt-2 paddingNoti"
          >
            <b-row>
              <b-col>
                <div class="d-flex flex-column border-bottom">
                  <div>
                    <!-- <p
                      class="font-weight-600 text-14 m-0 textColour text-gray-600"
                    >
                      {{ data.title }}
                    </p> -->
                    <!-- {{
                        data.body.length > 42
                          ? data.body.slice(0, 42) + "..."
                          : data.body
                      }} -->
                    <p class="font-weight-300 text-12 m-0 text-gray-800">
                      {{ data.body }}
                    </p>
                  </div>

                  <div class="align-self-end text-gray-500 text-10 pb-1">
                    {{ data.created_at }}
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col v-else class="text-center">
          <div>No notification</div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-signIn"
      title="Sign In"
      size="sm"
      style="height: 100px"
      hide-footer
      hide-header
    >
      <div class="card">
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
                  @click="openSignUpPopup()"
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
      id="modal-signUp"
      size="sm"
      title="Sign Up"
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
                    type="number"
                    v-model="phone"
                    @keydown="checkLength"
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
    </b-modal>
    <b-modal
      id="modal-attachment"
      size="md"
      title="Account Suspended"
      style="height: 100px"
    >
      <b-row class="p-3">
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
                  v-if="resetloader"
                ></div>
                <button
                  v-if="!resetloader"
                  type="button"
                  class="btn btn-primary btn-block btn-rounded mt-3"
                  @click="reset()"
                >
                  Send mail
                </button>
              </form>
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
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- <div class="spinner spinner-primary" v-if="loader" id="loader"></div> -->

    <!-- <div class="d-flex align-items-center"> -->
      <!-- Mega menu -->
      <!-- <div
        :class="{ show: isMegaMenuOpen }"
        class="dropdown mega-menu d-none d-md-block"
        v-on-clickaway="closeMegaMenu"
      >
        <a
          href="#"
          class="btn text-muted dropdown-toggle mr-3"
          id="dropdownMegaMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleMegaMenu"
          v-if="isHide"
          >Mega Menu</a
        >
        <div
          class="dropdown-menu text-left"
          :class="{ show: isMegaMenuOpen }"
          aria-labelledby="dropdownMenuButton"
        >
          <div class="row m-0">
            <div class="col-md-4 p-4 text-left bg-img">
              <h2 class="title">
                Mega Menu
                <br />Sidebar
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores natus laboriosam fugit, consequatur.
              </p>
              <p class="mb-30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem odio amet eos dolore suscipit placeat.
              </p>
              <button class="btn btn-lg btn-rounded btn-outline-warning">
                Learn More
              </button>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Features
              </p>
              <div class="menu-icon-grid w-auto p-0">
                <a href="#"> <i class="i-Shop-4"></i> Home </a>
                <a href="#"> <i class="i-Library"></i> UI Kits </a>
                <a href="#"> <i class="i-Drop"></i> Apps </a>
                <a href="#">
                  <i class="i-File-Clipboard-File--Text"></i> Forms
                </a>
                <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
                <a href="#"> <i class="i-Ambulance"></i> Support </a>
              </div>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Components
              </p>
              <ul class="links">
                <li>
                  <a href="accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="badges.html">Badges</a>
                </li>
                <li>
                  <a href="carousel.html">Carousels</a>
                </li>
                <li>
                  <a href="lists.html">Lists</a>
                </li>
                <li>
                  <a href="popover.html">Popover</a>
                </li>
                <li>
                  <a href="tables.html">Tables</a>
                </li>
                <li>
                  <a href="datatables.html">Datatables</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="nouislider.html">Sliders</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> -->
      <!-- / Mega menu -->
      <!-- <div class="search-bar" @click="toggleSearch" v-if="isHide">
        <input type="text" placeholder="Search" />
        <i class="search-icon text-muted i-Magnifi-Glass1"></i>
      </div> -->
    <!-- </div> -->

 

    <!-- <div
      class="header-part-right pr-3 hiddenWallet"
      :class="{ admin: role === 'User' || role == undefined }"
    > -->
      <!-- Full screen toggle -->

      <!-- <i
        class="i-Full-Screen header-icon d-none d-sm-inline-block"
        @click="handleFullScreen"
      ></i> -->
      <!-- <i class="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i> -->
      <!-- Grid menu Dropdown -->

      <!-- <div class="dropdown">
        <b-dropdown
          id="dropdown"
          text="Dropdown Button"
          class="m-md-2"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">
            <i
              class="i-Safe-Box text-muted header-icon"
              role="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></i>
          </template>
          <div class="menu-icon-grid">
            <router-link tag="a" class to="/app/homes/home.v1">
              <a href="#" style="color: black">
                <i class="nav-icon i-Clock-3"></i> Home
              </a>
            </router-link>

            <router-link tag="a" class to="/app/mydesk/mydesk">
              <a href="#" style="color: black; width: 100px">
                <i class="nav-icon i-Shop-4"></i> My Desk
              </a>
            </router-link>

            <router-link tag="a" class to="/app/mydesk/template">
              <a href="#" style="color: black">
                <i class="nav-icon i-Shop-4"></i>Template
              </a>
            </router-link>

            <router-link tag="a" class to="/app/accounts/Branding">
              <a href="#" style="color: black">
                <i class="nav-icon i-Library"></i>Account
              </a>
            </router-link>

            <router-link tag="a" class to="/app/setting/api">
              <a href="#" style="color: black">
                <i class="nav-icon i-Library"></i>Setting
              </a>
            </router-link>

            <router-link tag="a" class to="/app/mydesk/activitylogs">
              <a href="#" style="color: black; width: px">
                <i class="nav-icon i-Library"></i>Activity Logs
              </a>
            </router-link>
            <router-link tag="a" class to="/app/mydesk/activitylogs">
              <a class="nav-item-hold" href="#">
                <i class="nav-icon i-Shop-4"></i>
                <span class="nav-text">{{ $t("Activity Logs") }}</span>
              </a>

              <div class="triangle"></div>
            </router-link>

            <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
            <a href="#"> <i class="i-Ambulance"></i> Support </a>
          </div>
        </b-dropdown>
      </div> -->
<!-- 
      <div
        v-if="
          userName !== null &&
          userName !== undefined &&
          role !== 'Admin' &&
          notificationData
        "
        @click="clickNotification()"
        class="position-relative ul-cursor--pointer mr-2"
      >
        <i class="fa fa-bell fa-2x text-warning" aria-hidden="true"></i>
        <div class="for-icon position-absolute text-center">
          <strong class="text-10 text-white">{{
            notificationData.length
          }}</strong>
        </div>
      </div> -->
      <!-- <div
        class="d-flex justify-content-center align-content-center"
        v-if="userName !== null && userName !== undefined && role !== 'Admin'"
      >
        <div class="mr-2 align-self-center"> -->
          <!-- <i class="fa fa-car mr-2 text-primary" aria-hidden="true"></i> -->
          <!-- <a
            class="text-primary"
            @click="clickBookCar()"
            style="text-decoration: underline !important; cursor: pointer"
          >
          Book Car</a
          > -->
          <!-- <b-button variant="primary ripple" @click="clickBookCar()">
            <i class="fa fa-car mr-2 text-white" aria-hidden="true"></i> Book
            Car</b-button
          >
        </div> -->
        <!-- <div class=""> -->
          <!-- <i class="fa fa-car mr-2 text-p    <b-button variant="primary ripple" @click="clickAddAmount()">
            Wallet</b-button
          > rimary" aria-hidden="true"></i> -->
          <!-- <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Current -&nbsp;
              <span style=""> ₹ {{ totalBalance }}/- &nbsp;</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div class="dropdown-item d-flex justify-content-between">
                <div>Wallet</div>
                <div>₹ {{ userBalance }}</div>
              </div>
              <div class="dropdown-item d-flex justify-content-between">
                <div>Security</div>
                <div>₹ {{ securityBalance }}</div>
              </div>
              <div
                class="dropdown-item ul-cursor--pointer"
                style="text-decoration: underline"
                @click="clickAddAmount()"
              >
                See more
              </div>
            </div>
          </div> -->

          <!-- <div class="dropdown">
            <b-dropdown
              id="dropdown-6"
              :text="`Current - ₹ ${formatPrice(totalBalance)}`"
              class="m-md-2"
              toggle-class=""
              no-caret
              style="
                border: 1px solid rgba(0, 0, 0, 0.265);
                color: black;

                border-radius: 5px;
                /* text-underline-offset: unset; */
              "
            >
              <div class="dropdown-item d-flex justify-content-between px-3">
                <div>Wallet</div>
                <div>₹ {{ formatPrice(userBalance) }}</div>
              </div>
              <div class="dropdown-item d-flex justify-content-between px-3">
                <div>Security</div>
                <div>₹ {{ formatPrice(securityBalance) }}</div>
              </div>
              <div class="dropdown-item d-flex justify-content-between px-3">
                <div>
                  Bonus & <br />
                  Rewards
                </div>
                <div>₹ {{ formatPrice(referral_balance) }}</div>
              </div>

              <div
                class="dropdown-item ul-cursor--pointer px-3"
                style="text-decoration: underline"
                @click="clickAddAmount()"
              >
                See more
              </div>
            </b-dropdown>
          </div> -->
        <!-- </div> -->
      <!-- </div> -->

      <!-- Notificaiton -->

      <!-- <div class="dropdown"> -->
        <!-- <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 badge-top-container"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
          v-if="scrollHide"
        > -->
          <!-- <template slot="button-content" v-if="scrollHide">
            <span class="badge badge-primary">3</span>
            <i class="i-Bell text-muted header-icon"></i>
          </template> -->
          <!-- Notification dropdown -->
          <!-- <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
            ref="myData"
            class="dropdown-menu-right rtl-ps-none notification-dropdown ps scroll"
            v-if="scrollHide"
          > -->
            <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
            <!-- <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center"> -->
                  <!-- <span>New message</span> -->
                  <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                  <!-- <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">10 sec ago</span> -->
                <!-- </p>
                <p class="text-small text-muted m-0">
                  James: Hey! are you busy?
                </p>
              </div> -->
            <!-- </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Receipt-3 text-success mr-1"></i>
              </div> -->
              <!-- <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>New order received</span> -->
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">new</span> -->
                  <!-- <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto">2 hours ago</span>
                </p>
                <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Empty-Box text-danger mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Product out of stock</span> -->
                  <!-- <span class="badge badge-pill badge-danger ml-1 mr-1">3</span> -->
                  <!-- <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >10 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Headphone E67, R98, XL90, Q77
                </p>
              </div>
            </div>
            <div class="dropdown-item d-flex">
              <div class="notification-icon">
                <i class="i-Data-Power text-success mr-1"></i>
              </div>
              <div class="notification-details flex-grow-1">
                <p class="m-0 d-flex align-items-center">
                  <span>Server Up!</span> -->
                  <!-- <span class="badge badge-pill badge-success ml-1 mr-1">3</span> -->
                  <!-- <span class="flex-grow-1"></span>
                  <span class="text-small text-muted ml-auto"
                    >14 hours ago</span
                  >
                </p>
                <p class="text-small text-muted m-0">
                  Server rebooted successfully
                </p> -->
              <!-- </div> -->
            <!-- </div> -->
            <!-- </div> -->
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <!-- <div v-if="userName == null && userName == undefined" class="dropdown"> -->
        <!-- <a
          @click="openPopup"
          class="btn btn-primary w-100 text-white d-flex flex-row"
        >
          <div>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </div>
          <div class="ml-2">Sign In</div>
        </a> -->
      <!-- </div> -->

     
    </div>

  </div>

  <!-- header top menu end -->
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
// import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import message from "../../../message";
import img from "../../../assets/images/zoombacar.png";
import Util from "@/utils";
import Sidebar from "./Sidebar";
import searchComponent from "../common/search";
import { isMobile } from "mobile-device-detect";
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {
    Sidebar,
    searchComponent,
  },

  data() {
    return {
      img: img,
      data: [
        {
          id: 1,
          message:
            "1 hii this mass inf. you for jhkkh fdh kjdf hsdhkjf sdfjhfd djhf kdhkfj sdfhf ..",
        },
        {
          id: 2,
          message:
            "2 hii this mass inf. you for ... you for jhkkh fdh kjdf hsdhkjf sdfjhfd djhf kdhkfj sdfhf ..",
        },
        {
          id: 4,
          message:
            "3 hii this mass inf. you for jhkkh fdh kjdf hsdhkjf sdfjhfd djhf kdhkfj sdfhf ..",
        },
        {
          id: 3,
          message:
            "4 hii this mass inf. you for jhkkh fdh kjdf hsdhkjf sdfjhfd djhf kdhkfj sdfhf ..",
        },
      ],
      referral: "",
      notificationData: [],
      userBalance: "",
      totalBalance: "",
      securityBalance: "",
      referral_balance: "",
      role: null,
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      isHide: false,
      userName: null,
      scrollHide: false,
      resetloader: false,
      showPassword: false,
      // otp: "",
      ueserFName:'',
      userFullName:'',
      userlName:'',
      phone: "",
      email: "",
      password: "",
      referralLink: "",
      // userId: "",
      userLogo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      logo: require("@/assets/images/food_img.png"),

      imgs: null,
      Referal: false,
      isLoading: false,
      // role: "",
      // fName: "",
      // email: "",
      loader: false,
      // password: "",
      // phone: "",
      repeatPassword: "",
      submitStatus: null,
      alertShow: false,
      isLoading: false,
      // showPassword: false,
      rows: [],
      // userName: null,
      userEmail: "",
      // password: "",
      // loader: false,
      notFound: false,
      id: null,
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
  // watch: {
  //   $route(to) {
  //     if (to.path === "/app/mydesk/transaction") {

  //     }
  //   },
  // },
  mounted() {
    this.addCssRule();
    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);
  },
  created() {
    this.referral = this.$route.query.ref;
    var storedUser = localStorage.getItem("userInfo");

    var parsedUser = JSON.parse(storedUser);

    if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
      
      this.userName = parsedUser.data.email.replace("@gmail.com", "");
      this.role = parsedUser.data.role;
      this.id = parsedUser.data.id;
      this.getProfileDetails();
      this.getNotificationData();
      if (this.role !== "Admin") {
        this.getTotalBalance();
      }
    }
    // if (this.role === "Admin") {
    //   this.$router.push("/");
    // } 

    // var storedUser = localStorage.getItem("userInfo");

    // var parsedUser = JSON.parse(storedUser);

    // this.userName = parsedUser.data.email.replace("@gmail.com", "");

    // this.role = parsedUser.data.role;
    // console.log(this.role);
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },

  methods: {
    ...mapActions(["login"]),
    moveNext() {
      this.$router.push("/app/mydesk/transaction");
      this.$refs.dropdown.hide();
    },
    handleCheckBoxReferal() {
      if (this.Referal) {
        this.Referal = false;
      } else {
        this.Referal = true;
      }
    },
    // addCssRule() {
    //   const style = document.createElement("style");
    //   style.type = "text/css";
    //   const cssRule =
    //     ".modal-content {" +
    //     "  padding: 0em !important;" +
    //     "}";
    //   style.appendChild(document.createTextNode(cssRule));
    //   document.head.appendChild(style);
    // },
    addCssRule() {
      const style = document.createElement("style");
      style.type = "text/css";
      const cssRule =
        "#modal-signIn .modal-content," +
        "#modal-signUp .modal-content," +
        "#modal-forget-passwords .modal-content {" +
        "  padding: 0em !important;" +
        "}";
      style.appendChild(document.createTextNode(cssRule));
      document.head.appendChild(style);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    clickLogo() {
      console.log("clock cancel")
      // this.$router.push("/app/sessions/searchCar");
    },
    clickAddAmount() {
      this.$router.push("/app/mydesk/transaction");
    },
    clickBookCar() {
      this.$router.push("/app/sessions/searchCar");
    },
    clickNotification() {
      // this.$router.push("/app/myDesk/notification");
      this.$bvModal.show("modal-attachment-notification");
    },
    clickSeeMore() {
      this.$bvModal.hide("modal-attachment-notification");
      this.$router.push("/app/myDesk/notification");
    },
    getNotificationData() {
      this.loader = true;
      this.$apiService
        .getCall("notification/?userId=" + this.id)
        .then((res) => {
          this.notificationData = res.apidata;
          this.notificationData.forEach((element) => {
            element.created_at = element.created_at
              ? moment(element.created_at).format("DD MMM YYYY h:mm A")
              : "";
          });
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    openPopup() {
      // (this.imgs = require("@/assets/images/zoombacar.png")),
        this.$bvModal.show("modal-signIn");
      this.$bvModal.hide("modal-signUp");
    },
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
    checkLength(event) {
      if (this.phone.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault();
      }
    },
    getTotalBalance() {
      this.$apiService
        .getCall(`totalBalance/?userId=${this.id}`)
        .then((res) => {
          if (!res.apidata.isError) {
            if (res.apidata.total_balance >= 0) {
              this.totalBalance = res.apidata.total_balance;
            } else {
              this.totalBalance = 0.0;
            }
            if (res.apidata.security_balance >= 0) {
              this.securityBalance = res.apidata.security_balance;
            } else {
              this.securityBalance = 0.0;
            }
            if (res.apidata.wallet_balance >= 0) {
              this.userBalance = res.apidata.wallet_balance;
            } else {
              this.userBalance = 0.0;
            }
            if (res.apidata.referral_balance >= 0) {
              this.referral_balance = res.apidata.referral_balance;
            } else {
              this.referral_balance = 0.0;
            }
          } else {
            this.userBalance = 0.0;
            this.securityBalance = 0.0;
            (this.referral_balance = 0.0), (this.totalBalance = 0.0);
          }
        })
        .catch((error) => {
          this.userBalance = 0.0;
          this.securityBalance = 0.0;
          (this.referral_balance = 0.0), (this.totalBalance = 0.0);
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    clickGoWallet() {
      this.$router.push("/app/mydesk/transaction");
      
    },
    signUpSubmit() {
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
          referral: this.referral,
        };

        this.$apiService
          .postCall("account/", requestData)
          .then((user) => {
            // this.$router.push("signIn");
            // this.$store.commit("setLoading", false);
            if (!user.error) {
              this.referralLink = user.apidata.referral_url;
              // this.referralLink = user.apidata.referral_url;
              localStorage.setItem("accesstoken", user.apidata.token);
              const newUser = { data: user.apidata.data };
              localStorage.setItem("userInfo", JSON.stringify(newUser));
              // this.$bvModal.show("modal-congratulations");
              // this.$bvModal.hide("modal-signUp");
              // setTimeout(() => {
              //   // this.submitStatus = "OK";
              //   // window.location.reload();
              //   this.$router.push("/");
              // }, 7000);
              this.$toaster.makeToast(
                "success",
                "User successfully registered, Verification link sent to your mail"
              );
              this.isLoading = false;
              return;
            }
            if (
              user.error.response.data.email ==
              "user with this email already exists."
            ) {
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
    // async getProfileDetails() {
    //   try {
    //     let response = await this.$apiService.getCall(`account/?id=${this.id}`);

    //     let userData = response.apidata;
    //     this.ueserFName = userData.first_name;
    //     this.userlName = userData.last_name;
    //     this.userFullName=this.ueserFName+" "+this.userlName;
    //     console.log(this.userlName )
    //     // this.form.address = userData.local_address;
    //     // this.form.state = userData.state;
    //     // this.form.city = userData.city;
    //     // this.form.pin_code = userData.pin_code;
    //     this.verified = userData.is_verified;
    //     this.isOtp = userData.otp;
    //     // Update images
    //     this.userLogo = userData.image;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    reset() {
      this.resetloader = true;
      var reqData = {
        email: this.userEmail,
      };
      if (!this.userEmail) {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.resetloader = false;
        return;
      }

      this.$apiService
        .postCall("forgetPassword/", reqData)
        .then((res) => {
          if (res.error) {
            // this.notFound = true;
            this.$toaster.makeToast("warning", message.NOT_FOUND);
            this.resetloader = false;
            return;
          } else {
            this.$toaster.makeToast(
              "success",
              "Mail send successfully! check your mail"
            );
            // this.notFound = false;
            this.$bvModal.hide("modal-forget-passwords");
            // if (requestData) {
            setTimeout(() => {
              this.submitStatus = "OK";
              // this.$router.push("/app/sessions/searchCar");
            }, 3000);
            // }
          }
          this.resetloader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.resetloader = false;
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
    // logoutUser() {
    //   localStorage.removeItem("userInfo");
    //   localStorage.removeItem("accesstoken");
    //   this.$router.push("/app/sessions/signIn");
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 500);
    // },

    logoutUser() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("role");
    localStorage.removeItem("token");


    
    this.$router.push("/app/sessions/signIn");

  
    this.deleteCookie("accesstoken");

    setTimeout(() => {
        window.location.reload();
    }, 500);
},

deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; path=/;';
},

    hideDropdown() {
      // Hide the dropdown manually
      this.$refs.dropdown.hide();
    },
    formSubmit() {
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
            if (user.error.response.data.error == "Invalid credentials.") {
              this.isLoading = false;

              this.$toaster.makeToast(
                "warning",
                "User email or password is incorrect"
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
              // window.location.reload();
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
    openSignUpPopup() {
      this.$bvModal.show("modal-signUp");
      this.$router.push('userSignUp')
      this.$router.push("userSignUp");
      this.$bvModal.hide("modal-signIn");
      this.$bvModal.hide("modal-forget-passwords");
    },
    openforgetPasswordPopup() {
      this.$bvModal.show("modal-forget-passwords");
      this.$bvModal.hide("modal-signUp");
      this.$bvModal.hide("modal-signIn");
    },
    getCompanyData() {
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          this.form = res.apidata.data;
          if (this.form.logo) {
            this.$apiService
              .postCall("download", { urlPath: this.form.logo })
              .then((res) => {
                document.getElementById("profilelogo").src =
                  "data:image/jpeg;base64," + res.apidata.fileData;
              })
              .catch((error) => {
                this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions([
      "changeSecondarySidebarProperties",

      "changeSidebarProperties",
      "changeThemeMode",
      "signOut",
    ]),

    // megaMenuToggle() {
    //   this.isMegaMenuOpen = false;

    //   console.log("work");
    // },

    handleFullScreen() {
      Util.toggleFullScreen();
    },
    // copyReferralLink() {
    //   const el = document.createElement("textarea");
    //   el.value = this.referralLink;
    //   document.body.appendChild(el);
    //   el.select();
    //   document.execCommand("copy");
    //   document.body.removeChild(el);
    //   this.$toaster.makeToast("success", "Referral link copied to clipboard!");
    // },
    clickBookingCar() {
      this.$router.push("/app/myDesk/carBookingHistory");
      this.$refs.dropdown.hide();
    },
    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    sideBarToggle(el) {
      if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        // console.log("4");

        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
        // console.log("4");
      }
    },
  },
};
</script>

<style>
.main-header {
  height: 56px !important;
}
.referral-link {
  font-style: italic;
  color: blue; /* Set link color to blue */
  text-decoration: underline; /* Add underline to the link */
}
.logo {
  /* width: 40px !important; */
  /* height: 20px !important ; */
  /* height: 47px !important; */
}
.for-eye {
  right: 12px;
  top: 7px;
  cursor: pointer;
}
/* .modal-body {
  padding: 0px;
} */
.modal-body {
  padding: 0;
}
#modal-attachment-notification.modal .modal-dialog {
  position: fixed !important;
  top: 3em !important;
  right: 35px ;
  bottom: 0 !important;
  left: auto !important;
  z-index: 1050 !important;
  overflow-y: scroll !important;
  outline: 0 !important;
  height: 70vh !important;
  width: 40%;
}
#modal-attachment-notification.modal .modal-dialog::-webkit-scrollbar {
  width: 0;
}
.for-icon {
  height: 15px;
  width: 15px;
  /* position: absolute; */
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 0;

  display: flex;
  justify-content: 12px;
  border-radius: 50%;
  background: red;
}
.gradient-div {
  background-image: linear-gradient(
    to left,
    rgb(233, 97, 50),
    rgb(0, 174, 238) 70%
  );
}
.for-insta {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 2.5em;
  color: white;
  background-image: linear-gradient(
    to top,
    rgb(246, 194, 98),
    rgb(208, 46, 131),
    rgb(72, 99, 207)
  );
}
.for-facebbok {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 2.5em;
  color: white;
  background-color: rgb(30, 66, 151);
}
.for-whatsup {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 2.5em;
  color: white;
  background-color: rgb(48, 210, 78);
}
/* .main-header .nav-logo{
  width: 50%;
  height: 20px;

} */
.main-header .nav-logo img {
  margin-left: 1.5em !important;
  /* width: 111px !important; */

  height: 28px !important;
}

#dropdown-1__BV_toggle_ {
  /* padding-left: 80px; */
  /* margin-right: 90px; */
}

.dropdown-toggle::after {
  position: absolute;
  top: calc(50% - 4px);
  right: 7px !important;
}

.layout-sidebar-large .main-header button.dropdown-toggle {
  padding: 9px !important;
}
.layout-sidebar-large .sidebar-left {
  top: 56px !important;
}
.dropdown-toggle::after {
  position: absolute;
  top: calc(50% - 2px);
  right: 6px !important;
}

@media screen and (max-width: 768px) {
  .hiddenWallet {
    margin-top: 1em;
    /* height: 30px; */
    /* display: none !important; */
  }
  .hiddenWallet.admin {
    /* margin-top: 1em; */
    /* height: 30px; */
    display: none !important;
  }
  /* .dropdown {
    padding-bottom: 1em;
  } */
  .onlyFormobileView {
    display: block !important;
  }
  .dropdown-toggle.btn {
    /* padding-right: 0; */
  }
  #dropdown-1__BV_toggle_ {
    padding: 0;
    padding-left: 1em;
  }
  .smallflex {
    flex-direction: column;
  }
  .main-header .nav-logo img {
    /* margin-left: 1.5em !important; */
    width: 111px !important;
    object-fit: scale-down;
    height: 40px !important;
  }
  #modal-attachment-notification.modal .modal-dialog {
    position: fixed !important;
    top: 3em !important;
    right: 0 ;
    bottom: 0 !important;
    left: auto !important;
    z-index: 1050 !important;
    overflow-y: scroll !important;
    outline: 0 !important;
    height: 70vh !important;
    width: 90% !important;
    left: 0 ;
  }
}
@media screen and (min-width: 768px) {
  .onlyFormobileView {
    display: none !important;
  }
  #modal-attachment-notification.modal {
    position: fixed !important;
    top: 3em !important;
    right: 35px !important;
    bottom: 0 !important;
    left: 20px !important;
    z-index: 1050 !important;
    overflow-y: scroll !important;
    outline: 0 !important;
    height: 70vh !important;
    width: 100% !important;
  }
}

@media screen and (max-width: 578px) {
  .main-header .nav-logo img {
    margin-left: 0 !important;
  }
 
}

.textColour {
  color: #23004e;
}
.paddingNoti {
  padding-right: 0.8rem;
  padding-left: 0.8rem;
}
</style>
