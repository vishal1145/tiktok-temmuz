<template>
  <div class="main-div">
    <top-nav></top-nav>
    <b-modal
      id="modal-attachment-alert"
      size="sm"
      hide-footer
      title="Alert"
     
      
    >
      <b-row class="p-2">
        <b-col>
          <i class="fa fa-exclamation-triangle text-30 text-danger" aria-hidden="true"></i> First, select a date. Then, proceed with your task.
        </b-col>
      </b-row>
    </b-modal>
    <div
      class="auth-content px-5"
      :style="{
    width: '100%',
    height: '100%',
    backgroundImage: 'url(' + bgImage + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
    >
      <div
        class="d-flex flex-column justify-content-center align-content-center text-center for-img align-items-center"
      >
        <p class="fa-2x font-weight-900 p-0 m-0 for-ftext">
          Rent a car in Chennai
        </p>
        <p class="for-text">Book your drive now!</p>
        <div class="d-flex mt-2 flex-column flex-lg-row gappingSmall">
          <div class="for-time" style="cursor: pointer">
            <div
              class="d-flex flex-row justify-content-between rounded-lg-sm align-center align-items-center smallScreen borderRadius"
            >
              <!-- <div class="border-right px-3 p-1">
                {{ formatSelectedDate(dateRange.startDate) }}
              </div>
              <div class="px-3 py-1">
                {{ formatSelectedDate(dateRange.endDate) }}
              </div> -->
              <date-range-picker
                :time-picker="true"
                :time-picker24-hour="true"
                ref="datePicker"
                :singleDatePicker="false"
                v-model="dateRange"
                :min-date="minDate"
                class=""
                style="border: none !important"
              >
                <template #input="picker">
                  <div class="pb-4">
                    <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                    {{ picker.startDate | date }} - {{ picker.endDate | date }}
                  </div>
                </template>
              </date-range-picker>
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
      </div>
      
    </div>
    <!-- <all-car
      :startDate="dateRange.startDate"
      :endDate="dateRange.endDate"
    ></all-car> -->
    <!-- <footer-page></footer-page> -->
  </div>
</template>
<script>
// Your Vue initialization code
// import { ref } from "vue";
import TopNav from "../../../containers/layouts/largeSidebar/TopNav.vue";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { mapGetters, mapActions } from "vuex";
import AllCar from "./allCar.vue";
import FooterPage from "./footerPage.vue";
import moment from 'moment';


export default {
  components: { TopNav, DateRangePicker, AllCar, FooterPage },
  data() {
    return {
     
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
      },
      minDate: new Date(),
      // rows: [],
      bgImage: require("@/assets/images/car_sec.png"),
    };
  },
  filters: {
    // dateCell (value) {
    //   let dt = new Date(value)

    //   return dt.getDate()
    // },
    date(val) {
      return val ? val.toLocaleString() : "";
    },
  },
  created() {
    this.minDate.setDate(this.minDate.getDate() - 1);
    // var storedUser = localStorage.getItem("userInfo");
    // var parsedUser = JSON.parse(storedUser);
    // if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
    //   this.userName = parsedUser.data.email.replace("@gmail.com", "");
    //   this.role = parsedUser.data.role;
    // }
    // if (this.role === "Admin") {
    //   this.$router.push("/");
    // }
    // this.getAllCarData();
    // console.log(this.role);
    // console.log(storedUser);
    // this.getAllUsers();
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    // visibleRows() {
    //   return this.rows.slice(
    //     this.currentIndex,
    //     this.currentIndex + this.numToShow
    //   );
    // },
    ...mapGetters(["loggedInUser", "loading", "error"]),
  },
  methods: {
    ...mapActions(["login"]),
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
    clickBookNow(carId, amount) {
      this.$router.push("/app/myDesk/bookCars?id=" + carId);
      // this.carId=carId;
      // var storedUser = localStorage.getItem("userInfo");
      // var parsedUser = JSON.parse(storedUser);
      // if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
      //   this.id = parsedUser.data.id;
      //   this.$router.push("/app/myDesk/bookCars?id=" + carId);
      //   // const apiUrl = `carBooking/?userId=${this.id}&amount=${amount}&carId=${carId}&no_of_days=3`;
      //   // window.location.href = this.$apiService.getAppendedUrl(apiUrl);
      // } else {
      //   this.$bvModal.show("modal-signIn");
      // }
    },
    // moveCarousel(direction) {
    //   const newIndex = this.currentIndex + direction;
    //   if (newIndex >= 0 && newIndex <= this.rows.length - this.numToShow) {
    //     this.currentIndex = newIndex;
    //   }
    // },
    // parseImage(imageString) {
    //   try {
    //     const imageUrl = JSON.parse(imageString)[0];
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(
    //       `<!doctype html><body>${imageUrl}`,
    //       "text/html"
    //     );
    //     const decodedUrl = doc.body.textContent;
    //     return decodedUrl;
    //   } catch (error) {
    //     console.error("Error parsing image URL:", error);
    //     return "https://example.com/default-image.jpg";
    //   }
    // },
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
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    clickGetCar() {

      // endDateDefault.setHours(endDateDefault.getHours() + 5);
      const isDateSelected =this.dateRange.endDate.getDate()!==this.dateRange.startDate.getDate()
      // const isDateSelected =this.dateRange.endDate !== null;
      if(isDateSelected){
        this.$router.push(
        "/app/sessions/searchCar?startDate=" +
        (this.dateRange.startDate).toLocaleString() +
          "&endDate=" +
          (this.dateRange.endDate).toLocaleString() +
          "&location=" +
          "Chennai"
      );
      }else{
       
        this.$bvModal.show("modal-attachment-alert");
        
      

      }
      
    },

  },
};
</script>
<style scoped>
.spinner.sm {
  height: 2em;
  width: 2em;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: white;
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
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}
.for-img {
  width: 100%;
  height: calc(100vh - 60px);

}
.for-ftext {
  z-index: 100;
  font-size: 35px;
}
.main-header {
  position: sticky;
  top: 0;
  z-index: 999;
}
.for-text {
  z-index: 100;
  font-size: 25px;
  font-weight: bold;
}

.form-control {
  border: 5px solid red !important;
}
.for-time {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  background-color: #fff;
}
@media screen and (max-width: 980px) {
  .smallScreen {
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  }
  .borderRadius {
    border-radius: 16px;
  }
  .for-time {
    border-radius: 16px;
    padding: 20px;
    background-color: #fff;
  }
  .gappingSmall {
    gap: 12px;
  }

  [data-v-267f4ee2] {
    border: none !important;
    font-size: 9px;
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

/* des:nth-child(1) {
  border: 10px solid rgba(219, 219, 219, 0.389);
  border-radius: 100%;
} */

.carousel-control-prev[data-v-9968fb08][data-v-9968fb08] {
  left: 5rem !important;
  height: 4em !important;
  width: 4em !important;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}

.carousel-control-next[data-v-9968fb08][data-v-9968fb08] {
  /* left: 5rem; */
  height: 4em !important;
  width: 4em !important;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}
</style>

<style lang="scss">
.date-range-picker {
  &:first-child {
    border: none !important;
  }
}
</style>
