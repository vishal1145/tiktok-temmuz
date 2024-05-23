<template>
  <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active bg-danger">hiii</div>
    <div class="carousel-item bg-red">hello</div>
    <div class="carousel-item bg-dark">my name</div>
    <div class="carousel-item bg">ayush</div>
  </div>
  <a class="carousel-control-prev ul-cursor--pointer" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next ul-cursor--pointer" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->
  <div>
    <!-- <date-range-picker
      ref="datePicker"
      :singleDatePicker="false"
      v-model="dateRange"
      class=""
      style="border: none !important"
    >
    </date-range-picker> -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style="background-color: white"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row mt-5 px-5 flex justify-content-center">
            <div
              v-for="(row, carouselIndex) in visibleRows"
              :key="carouselIndex"
              class="col-lg-3 d mb-3"
            >
              <div class="card position-relative">
                <!-- <img
                  :src="parseImage(row.images)"
                  class="card-img-top"
                  alt="Car Image"
                /> -->
                <div class="list-thumb d-flex">
                  <div
                    :id="'carouselExampleIndicators-' + carouselIndex"
                    class="carousel slide w-100 h-100"
                    data-ride="carousel"
                  >
                    <ol class="carousel-indicators">
                      <li
                        v-for="(image, index) in row.images"
                        :key="index"
                        :data-target="
                          '#carouselExampleIndicators-' + carouselIndex
                        "
                        :data-slide-to="index"
                        :class="{ active: curIndex === index }"
                      ></li>
                    </ol>
                    <div class="carousel-inner">
                      <div
                        class="carousel-item"
                        :class="{ active: curIndex === index }"
                        v-for="(image, index) in row.images"
                        :key="index"
                      >
                        <div class="position-absolute">
                          <span
                            class="badge badge-success"
                            :style="{
                              marginTop: '10px',
                              marginLeft: '10px',
                              backgroundColor:
                                row.available === 'null' ? 'green' : 'red',
                              color:
                                row.available === 'null' ? 'white' : 'black',
                            }"
                          >
                            {{
                              row.available === "null"
                                ? "Available"
                                : "Not available"
                            }}
                          </span>
                        </div>
                        <img
                          :src="image"
                          class="card-img-top"
                          alt="Car Image"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev for-inner-prev"
                      type="button"
                      :data-target="
                        '#carouselExampleIndicators-' + carouselIndex
                      "
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next for-inner-next"
                      type="button"
                      :data-target="
                        '#carouselExampleIndicators-' + carouselIndex
                      "
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </button>
                  </div>
                  <!-- <img alt :src="item.images[0]" /> -->
                </div>
                <div
                  class="card-body ul-cursor--pointer"
                  @click="clickBookNow(row.id, row.price)"
                >
                  <div
                    class="d-flex flex-row justify-content-between font-weight-bold px-3 pt-3 pb-2 textColour"
                  >


                  <div>
                            {{
                              (
                                row.make +
                                " " +
                                row.brand +
                                " " +
                                row.model +
                                " . . ."
                              ).slice(0, 26)
                            }}
                          </div>
                    <!-- <div>{{ row.make }} {{ row.brand }} {{ row.model }}</div> -->
                    <!-- <div><i class="fa fa-heart-o" aria-hidden="true"></i></div> -->
                  </div>
                  <div>
                    <ul class="d-flex flex-row mb-0 pb-2 textColourSecond">
                      <li class="marginForLi">{{ row.meter_reading }} Km</li>
                      <li class="ml-4">{{ row.fuel_type }}</li>
                      <li class="ml-4">{{ row.transmission_type }}</li>
                    </ul>
                  </div>
                  <div
                    class="d-flex flex-row justify-content-between px-3 textColour"
                  >
                    <div class="font-weight-bold text-16">
                      <i class="fa fa-car" aria-hidden="true"></i>
                      {{ row.seating_capacity }} Seater
                    </div>
                    <div class="pt-1">₹ {{ row.price }}/Day's</div>
                  </div>
                  <div
                    v-if="row.available !== 'null'"
                    class="d-flex flex-row justify-content-between px-3 textColour "
                  >
                    <div class="font-weight-bold text-14"
                    style="width: 100%;position: absolute;top: 100px;background-color: white;right: 0px;align-items: center;text-align: center;">
                      Car is available after {{ row.available }}
                    </div>
                    <!-- <div class="pt-1">₹ {{ item.price }}/Day's</div> -->
                  </div>
                  <div class="hr px-3"></div>
                  <div class="d-flex flex-row px-3">
                    <div>
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </div>
                    <div
                      class="text-gray-600 pb-3 pl-2"
                      style="font-size: 0.713rem"
                    >
                      {{ row.car_pickup_location }}
                      Zoomba Car Hub, Chennai
                    </div>
                  </div>

                  <!-- <div class="position-absolute">
                  <span
                    class="badge badge-success"
                    style="margin-top: 20px; margin-left: 10px"
                    >Available</span
                  >
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        @click="moveCarousel(-1)"
        class="carousel-control-prev ul-cursor--pointer NoDisplayShow"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        @click="moveCarousel(1)"
        class="carousel-control-next ul-cursor--pointer NoDisplayShow"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import { now } from "moment";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import $ from "jquery";

// Your Vue initialization code

export default {
  props: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  components: { DateRangePicker },
  data() {
    return {
      dateRange: "",
      currentIndex: 0,
      curIndex: 0,
      numToShow: 3,
      rows: [],
      allImages: [],
    };
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
    // validation() {
    //   return this.userId.length > 4 && this.userId.length < 13;
    // },
    visibleRows() {
      return this.rows.slice(
        this.currentIndex,
        this.currentIndex + this.numToShow
      );
    },

    // ...mapGetters(["loggedInUser", "loading", "error"]),
  },
  methods: {
    getAllCarData() {
      this.loader = true;
      this.$apiService
        .getCall("carsAPIView/")
        .then((res) => {
          if (!res.error) {
            this.rows = res.apidata;
            this.rows.forEach((value) => {
              // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
              value.images = value.images
                ? (value.images = JSON.parse(value.images))
                : (value.images = "");
            });
            this.allImages = this.rows.map((res) => res.images);
            // this.rows = res.apidata;
         
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
      this.carId = carId;
      // this.$refs.datePicker.showPicker();
      this.$toaster.makeToast("warning", "Please select dates.");
      if (this.startDate && this.endDate) {
        
        this.$router.push(
          "/app/sessions/bookCars?id=" +
            carId +
            "&startDate=" +
            new Date() +
            "&endDate=" +
            new Date() +
            "&location=" +
            "Chennai"
        );
      } else {
        this.$toaster.makeToast("warning", "please select date");
      }

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
    moveCarousel(direction) {
      const newIndex = this.currentIndex + direction;
      if (newIndex >= 0 && newIndex <= this.rows.length - this.numToShow) {
        this.currentIndex = newIndex;
      }
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
  },
};
</script>

<style scoped>
.icon-size {
  font-size: 30px;
}
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}
.card-img-top {
  height: 145px;
  object-fit: cover;
}

.registration_number {
  font-size: 14px;
  font-weight: bold;
}

.svg_icon {
  width: 16px;
}

.height25 {
  height: 12% !important;
  /* width: 12% !important; */
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
/* .for-btn {
  height: 33px;
} */
/* .carousel-item {
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
} */
/* .carousel {
  z-index: -1;
} */

/* 
.carousel-item.active { 
  opacity: 1;
} */
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
  font-size: 30px;
  font-weight: bold;
}
.carousel-control-next {
  right: 5rem;
  height: 6em;
  width: 6em;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}
.for-inner-next {
  right: 1.5em !important;
  /* height: 6em; */
  /* width: 6em; */
  height: 4em !important;
  width: 4em !important;
  bottom: 3em !important;
  top: 3em !important;
  border-radius: 50% !important;
  background-color: transparent !important;
}
.for-inner-prev {
  left: 1.5em !important;
  /* height: 6em; */
  /* width: 6em; */
  height: 4em !important;
  width: 4em !important;
  bottom: 3em !important;
  top: 3em !important;
  border-radius: 50% !important;
  background-color: transparent !important;
}
.carousel-control-prev {
  left: 5rem;
  height: 6em;
  width: 6em;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}
.carousel-control-next-icon {
  /* width: 50px;
  height: 47px; */
}
.carousel-control-prev-icon {
  /* width: 50px;
  height: 47px; */
}
/* @media screen and (max-width: 1000px) { */
/* .smallScreen {
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
  .blockCrousal {
    display: none;
  }
  .card-img-top {
    height: 147px;
    object-fit: contain;
  }
} */

@media screen and (max-width: 900px) {
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
  .blockCrousal {
    display: none;
  }
  .card-img-top {
    height: 147px;
    object-fit: cover;
  }
  .NoDisplayShow {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .card-img-top {
    height: 347px;
    object-fit: cover;
  }
  .blockCrousalR {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .card-img-top {
    height: 147px;
    object-fit: cover;
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

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0rem;
}

.carousel-control-prev[data-v-9968fb08] {
  left: 5rem;
  height: 4em;
  width: 4em;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}

.carousel-control-next[data-v-9968fb08] {
  /* left: 5rem; */
  height: 4em;
  width: 4em;
  border: 1px black;
  bottom: 10em;
  top: 10em;
  border-radius: 50%;
  background-color: gray;
}
</style>
