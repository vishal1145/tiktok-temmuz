<template>
  <div class="main-content">
    <!-- <breadcumb :page="'User Profile'" :folder="'Pages'" /> -->
    <div
      class="font-weight-bold fa-2x text-light d-flex justify-content-between"
    >
      User Profile
      <!-- <div class="dropdown">
        <b-dropdown
          id="dropdown-6"
          :text="`Current - ₹ ${formatPrice(totalBalance)}`"
          class="m-md-2"
          toggle-class=""
          style="
            border: 1px solid rgba(0, 0, 0, 0.265);
            color: black;
            border-radius: 5px;

            text-underline-offset: unset;
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
            <div>₹ {{ formatPrice(referralBalance) }}</div>
          </div>
        </b-dropdown>
      </div> -->
    </div>
    <hr class="mt-1" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <div class="card user-profile o-hidden mb-30">
      <div :style="headerStyle" class="header-cover"></div>
      <div class="user-info">
        <img
          class="profile-picture avatar-lg mb-2"
          :src="this.userimage"
          alt=""
        />
        <p class="m-0 text-24">{{ userName }}</p>
        <div class="d-flex px-4 flex-wrap">
          <p class="text-muted m-0">
            <i class="fa fa-envelope-o" aria-hidden="true"></i> :
            {{ emailPhone }} | <i class="fa fa-phone" aria-hidden="true"></i> :
            {{ phone }}
          </p>
          <p
            v-if="is_verified !== false"
            class="ml-2 p-0"
            style="color: #ffffff; font-size: 12px"
          >
            <span class="badge badge-primary blueVerfiy"
              >verified<i
                class="fa fa-check-circle blueVerfiy2"
                aria-hidden="true"
              ></i
            ></span>
          </p>
        </div>
      </div>
      <div class="card-body">
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="Orders" active>
              <vue-good-table
                :columns="commonColumns"
                :line-numbers="false"
                :pagination-options="{
                  enabled: true,
                  mode: 'records',
                }"
                styleClass="tableOne vgt-table"
                :selectOptions="{
                  enabled: false,
                  selectionInfoClass: 'table-alert__box',
                }"
                :sort-options="{
                  enabled: false,
                }"
                :rows="allCarBooking"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field === 'audio_url'">
                    <audio controls style="height: 36px !important">
                      <source :src="props.row.audio_url" type="audio/mpeg" />
                      Your browser does not support the audio tag.
                    </audio>
                  </span>
                  <span v-else-if="props.column.field === 'user_name_show'">
                    <div >
                     
                        {{ props.row.user_info.first_name }}
                        {{ props.row.user_info.last_name }}
                     
                    </div>
                  </span>

                  <span v-else-if="props.column.field === 'payment_status'">
                    <template>
                      <b-badge
                        v-if="props.row.payment_status === 'Paid'"
                        variant="success"
                        >Paid</b-badge
                      >
                      <b-badge v-else variant="danger">Unpaid</b-badge>
                    </template>
                  </span>
                </template>
              </vue-good-table>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import message from "../../../message";
import { VueEditor } from "vue2-editor";
import VueDocumentEditor from "vue-document-editor";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Profile",
  },
  components: {
    // VueEditor,
    // VueDocumentEditor,
  },
  data() {
    return {
      car_images: null,
      usersId: null,
      userName: "",
      email: "",
      phone: "",
      is_verified: "",
      userimage: "",
      loader: false,
      aadharFront: null,
      aadharBack: null,
      divinglicense: null,
      divinglicenseBack: null,
      passportBack: null,
      passport: null,
      userBalance: "",
      referralBalance: "",
      totalBalance: "",
      securityBalance: "",
      allCarBooking: [],
      rows: [],
      commonColumns: [
        {
          label: "User name",
          field: "user_name_show",
        },
        {
          label: "Orderd date",
          field: "created_at",
        },
        {
          label: "Orderd ID",
          field: "id",
        },

        {
          label: "Audio File",
          field: "audio_url",
        },

        {
          label: "Amount",
          field: "price",
        },

        {
          label: "Status",
          field: "payment_status",
        },
      ],
      backgroundImage: require("@/assets/images/food.png"),
    };
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      };
    },
  },
  created() {
    this.userId = this.$route.query.id;
    this.getAllUsers();
    this.getAllTransaction();
    this.getAllCarBooking();
    this.getTotalBalance();
    // console.log(this.userId)
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getTotalBalance() {
      this.loader = true;
      this.$apiService
        .getCall(`totalBalance/?userId=${this.userId}`)
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
              this.referralBalance = res.apidata.referral_balance;
            } else {
              this.referralBalance = 0.0;
            }
          } else {
            this.securityBalance = 0.0;
            this.totalBalance = 0.0;
            this.userBalance = 0.0;
            this.referralBalance = 0.0;
          }

          this.loader = false;
        })
        .catch((error) => {
          this.userBalance = 0.0;
          this.securityBalance = 0.0;
          this.totalBalance = 0.0;
          this.referralBalance = 0.0;
          // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    getAllUsers() {
      this.loader = true;
      this.$apiService
        .getCall(`account/?id=${this.userId}`)
        .then((res) => {
          // console.log(res)
          //   let rowData = [];

          //   if (res.apidata.length > 0) {
          //     rowData = res.apidata;
          //     // rowData = res.apidata.filter((value) => !value.is_superuser);

          //     rowData.forEach((value) => {
          //     //   value.date_joined = value.date_joined
          //     //     ? moment(value.date_joined).format("DD/MM/YYYY")
          //     //     : "";
          //       value.full_name =
          //         value.first_name || value.last_name
          //           ? value.first_name + " " + value.last_name
          //           : "";
          //     });
          //   }
          this.userName = res.apidata.first_name + " " + res.apidata.last_name;
          this.emailPhone = res.apidata.email;
          this.is_verified = res.apidata.is_verified;
          this.phone = res.apidata.phone;
          this.userimage = res.apidata.image;
          this.aadharFront = res.apidata.aadhar_card;
          this.aadharBack = res.apidata.back_aadhar_card;
          this.divinglicense = res.apidata.driving_lincense;
          this.divinglicenseBack = res.apidata.back_driving_lincense;
          this.passportBack = res.apidata.back_passport;
          this.passport = res.apidata.passport;

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    getAllCarBooking() {
      this.loader = true;
      let query = ``;
      // if (startDate) {
      //   query = query + `startDate=${startDate}`;
      // }
      // if (endDate) {
      //   query = query + `&endDate=${endDate}`;
      // }
      if (this.userId) {
        query = query + `&userId=${this.userId}`;
      }
      // if (carId) {
      //   query = query + `&reg_number=${carId}`;
      // }
      this.$apiService
        .getCall(`bookingHistory/?${query}`)
        .then((res) => {
          let rowData = [];
          // this.allCarBooking = res.apidata;

          if (res.apidata.length > 0) {
            // rowData = res.apidata;
            rowData = res.apidata;
            // if (this.role === "User") {
            //   this.allDate = res.apidata.map((e) => e.time);

            //   console.log(this.allDate);

            //   rowData = res.apidata.filter((value) => {
            //     if (value.userId == this.userId) {
            //       return value.userId;
            //     }
            //   });
            // } else {
            //   rowData = res.apidata;
            //   // this.allCars = rowData.map((e) => e.registration_number);
            //   // this.carsInfo = rowData.map((car) => ({
            //   //   id: car.carId,
            //   //   carName: car.car_model,
            //   // }));
            // }
            // console.log(this.carsInfo),

            rowData.forEach((element) => {
              element.price = element.price
                ? "₹" + "  " + element.price + "/-"
                : "";
              element.updated_at = element.updated_at
                ? moment(element.updated_at).format("DD MMM YYYY h:mm A")
                : "";
              element.booking_date = element.booking_date
                ? moment(element.booking_date).format("DD MMM YYYY h:mm A")
                : "";
              element.car_images = element.car_images
                ? (element.car_images = JSON.parse(element.car_images))
                : (element.car_images = "");
            });
          }
          this.allCarBooking = rowData;

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    getAllTransaction() {
      this.loader = true;
      let query = ``;
      // if (startDate) {
      //   query = query + `startDate=${startDate}`;
      // }
      // if (endDate) {
      //   query = query + `&endDate=${endDate}`;
      // }
      if (this.userId) {
        query = query + `&userId=${this.userId}`;
      }
      this.$apiService
        .getCall(`transcation/?${query}`)
        .then((res) => {
          let rowData = [];

          if (res.apidata.length > 0) {
            rowData = res.apidata;

            // rowData = res.apidata.filter((value) => !value.is_superuser);

            rowData.forEach((element) => {
              element.amount = element.amount
                ? "₹" + "  " + element.amount + "/-"
                : "";
              element.updated_at = element.updated_at
                ? moment(element.updated_at).format("DD MMM YYYY h:mm A")
                : "";
            });
            // rowData.forEach((value) => {
            //   value.full_name =
            //     value.first_name || value.last_name
            //       ? value.first_name + " " + value.last_name
            //       : "";
            // });
          }
          this.rows = rowData;

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
  },
};
</script>
<style scoped>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
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
</style>
