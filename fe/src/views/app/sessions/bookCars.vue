<template>
  <div class="main-content">
    <top-nav></top-nav>
    <!-- <breadcumb :page="'Users'" :folder="'Users'" /> -->

    <div class="px-4 pt-4">
      <b-row class="rowgap">
        <b-col lg="8" class="for-firstDiv">
          <b-card class="">
            <!-- Carousel -->
            <div
              id="carouselExampleIndicators"
              class="carousel slide mt-2"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  v-for="(image, index) in images"
                  :key="index"
                  :data-target="'#carouselExampleIndicators'"
                  :data-slide-to="index"
                  :class="{ active: currentIndex === index }"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  :class="{ active: currentIndex === index }"
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img
                    class="d-block w-100 img-fluid"
                    :src="image"
                    :alt="'Slide ' + index"
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </button>
            </div>

            <!-- <div class="carousel">
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    :class="{ active: currentIndex === index }"
                    v-for="(image, index) in images"
                    :key="index"
                  >
                    <img
                      class="d-block m-auto"
                      :src="image"
                      :alt="image.alt"
                    />
                    
                  </div>
                </div>
                <button
                  class="carousel-control-prev text-dark"
                  @click="prevSlide"
                >
                  &lt;
                </button>
                <button
                  class="carousel-control-next text-dark"
                  @click="nextSlide"
                >
                  &gt;
                </button>
              </div> -->

            <div
              class="d-flex flex-row w-100 p-3 flex-wrap md:flex-column pt-4 gapping"
            >
              <!-- <div class="d-flex flex-column flex-wrap">
                <p class="mb-0 font-weight-bold pb-1">From</p>
                <p class="mb-0">
                  {{
                    dateRange && dateRange.startDate
                      ? dateFormate(dateRange.startDate)
                      : startDates
                  }}
                </p>
                
              </div> -->
              <!-- <div class="d-flex flex-column flex-wrap">
                <p class="mb-0 font-weight-bold pb-1">To</p>
                <p class="mb-0">
                  {{
                    dateRange && dateRange.startDate
                      ? dateFormate(dateRange.endDate)
                      : endDates
                  }}
                </p>

               
              </div> -->
              <p class="card-text text-14 text-gray-600 font-italic m-0">
                ₹ {{ formatPrice(price) }} / Day
              </p>
            </div>

            <div
              class="d-flex flex-row w-100 pl-3 flex-wrap md:flex-column gap-5"
            >
              <div class="d-flex flex-column flex-wrap border-bottom w-100">
                <p class="mb-0 font-weight-bold pb-1">{{ model }}</p>

                <b-row class="mb-2">
                  <div class="col-sm-4 col-lg-3 for-phone">
                    <span class="mr-1 text-gray-400">●</span>{{ brand }}</div
                  >
                  <div class="col-sm-4 col-lg-3 for-phone"
                    ><span class="mr-1 text-gray-400">●</span
                    >{{ transmission_type }}</div
                  >
                  <div class="col-sm-4 col-lg-3 for-phone">
                    <span class="mr-1 text-gray-400">●</span
                    >{{ fuel_type }}</div
                  >
                  <div class="col-sm-4 col-lg-3 for-phone"
                    ><span class="mr-1 text-gray-400">●</span
                    >{{ seating_capacity }} Seater</div
                  >
                  <div class="col-sm-4 col-lg-3 for-phone"
                    ><span class="mr-1 text-gray-400">●</span
                    >{{ power }} CC</div
                  >
                  <div class="col-sm-4 col-lg-3 for-phone"
                    ><span class="mr-1 text-gray-400">●</span
                    >{{ allowed_km_per_day }} Km/Day</div
                  >
                  <div class="col-sm-6 col-lg-6"
                    ><span class="mr-1 text-gray-400">●</span>Excess KM Charges
                    - {{ excess_KM_charges }}Rs</div
                  >
                </b-row>
                <!-- <ul class="text-gray-500 for-ul">
                  <li class="marginForLi">{{ brand }}</li>
                  <li class="">{{ transmission_type }}</li>
                  <li class="">{{ fuel_type }}</li>
                  <li class="">{{ seating_capacity }} Seater</li>
                  <li class="ml-4">Reg Years -{{ registration_year }}</li>
                  <li class="">{{ power }} CC</li>
                </ul>

                <ul class="for-ul text-gray-500 mb-2">
                  <li class="marginForLi">
                    Allowed - {{ allowed_km_per_day }} Km/Day
                  </li>
                  <li class="">
                    Excess KM Charges - {{ excess_KM_charges }}Rs
                  </li>
                </ul> -->
                <!-- <p class="mb-0 py-2 pl-3">Service Date - {{ service_Date }}</p> -->
                <!-- <p class="mb-0 py-2 pl-3">
                  <u>Meter Reading - {{ meter_reading }} kms driven</u>
                </p> -->
              </div>
            </div>

            <div
              class="d-flex flex-row w-100 flex-wrap md:flex-column pt-4 gap-5"
            >
              <div class="d-flex flex-column flex-wrap w-100">
                <div
                  class="d-flex flex-row flex-wrap justify-content-between align-items-center justify-content-center"
                >
                  <!-- <div>
                    <p class="mb-0 font-weight-bold pb-1">Booking time</p>
                    <p class="mb-0 pb-8" style="">select time</p>
                  </div> -->

                  <div class="d-flex pl-3 flex-row align-self-center">
                    <p
                      class="mb-0 font-weight-bold pb-1 align-self-center text-primary ul-cursor--pointer"
                      style="text-decoration: underline"
                      @click="toggleDatePicker()"
                    >
                      Edit date
                    </p>
                  </div>
                  <date-range-picker
                    ref="datePickerSec"
                    :singleDatePicker="false"
                    v-model="dateRange"
                    :minDate="minDate"
                    @click="toggleDatePicker()"
                    @toggle="togglePickerRef"
                    @start-selection="handleStartSelection"
                    @finish-selection="handleFinishSelection"
                    class="mb-2 ml-2"
                    :style="{ display: datePickerVisible ? 'block' : 'none' }"
                  >
                    <template #input="picker">
                      <div>
                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                        {{ picker.startDate | date }} -
                        {{ picker.endDate | date }}
                      </div>
                    </template>
                    <div
                      slot="footer"
                      slot-scope="data"
                      class="slot d-flex flex-column"
                    >
                      <div class="d-flex w-100 my-2 px-2">
                        <div class="text-dark text-12 w-25">Start time</div>
                        <div class="w-75">
                          <vue-slider
                            v-model="sliderValue"
                            :min="0"
                            :max="23"
                            :interval="0.5"
                            :tooltip-formatter="formattedTime"
                            @change="updateSlider()"
                          >
                          </vue-slider>
                        </div>
                      </div>
                      <div class="d-flex w-100 mt-4 px-2">
                        <div class="text-dark text-12 w-25">End time</div>
                        <div class="w-75">
                          <vue-slider
                            v-model="sliderValue"
                            :min="0"
                            :max="23"
                            :interval="0.5"
                            :tooltip-formatter="formattedTimeSec"
                            @change="updateSlider()"
                          >
                          </vue-slider>
                        </div>
                      </div>

                      <div class="my-2 px-2 for-apply w-100">
                        <a
                          id="btns"
                          @click="clickApplyButton(data)"
                          v-if="!data.in_selection"
                          class="btn btn-primary bg-primary text-white w-100"
                          >Apply
                        </a>
                      </div>
                    </div>
                  </date-range-picker>

                  <!-- <p class="mb-0 font-weight-bold pt-2 mr-48">Edit Now</p> -->

                  <div></div>
                </div>
                <div class="card p-3 bg-gray-100">
                  <div class="d-flex gapping justify-content-between">
                    <div class="d-flex flex-column justify-content-center">
                      <p class="text-gray-500 mb-0 pb-1">Pickup</p>
                      <p class="mb-0">
                        {{
                          dateRange && dateRange.startDate
                            ? dateFormate(dateRange.startDate)
                            : startDates
                        }}
                      </p>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <p class="mb-0 pb-1">
                        <!-- ({{ this.differenceInDays }}Days
                        {{ this.differenceInHours }}Hr) -->
                        {{
                          dateRange && dateRange.startDate
                            ? NumberOfDaysPick(
                                dateFormate(dateRange.startDate),
                                dateFormate(dateRange.endDate)
                              )
                            : numberOfDays
                        }}
                        Day's
                      </p>
                      <i
                        class="fa fa-chevron-right text-gray-500"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <p class="text-gray-500 mb-0 pb-1">Drop</p>
                      <p class="mb-0">
                        {{
                          dateRange && dateRange.endDate
                            ? dateFormate(dateRange.endDate)
                            : endDates
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div
              class="d-flex flex-row w-100 p-3 flex-wrap md:flex-column pt-4 gap-5"
            >
              <div class="d-flex flex-column flex-wrap border-bottom w-100">
                <p class="mb-0 font-weight-bold pb-1">Car Location</p>

                <p class="mb-0 pb-3">
                  Shri Sant Siromani Shri Guru Ravidas Ji Mandir
                  {{ car_pickup_location }}
                </p>
              </div>
            </div> -->

            <div
              class="d-flex flex-row w-100 p-3 flex-wrap md:flex-column pt-4 gap-5"
            >
              <div class="d-flex flex-column flex-wrap border-bottom w-100">
                <p class="mb-0 font-weight-bold pb-1">Cancellation Policy</p>

                <p class="mb-0 pb-3">
                  Cancellation charges will be applied as per the policy
                </p>
                <a
                  class="text-primary ul-cursor--pointer"
                  @click="clickCancellation()"
                  style="text-decoration: underline; width: fit-content"
                  >See Details</a
                >
              </div>
            </div>

            <div title="About" class="card p-3 bg-gray-100">
              <h4>About the car</h4>
              <pre>{{ about_car }}</pre>
              <b-row>
                <b-col
                  md="4"
                  v-for="(value, key) in parsedCarFeatures"
                  :key="key"
                >
                  <p>
                    <i
                      class="fa fa-check-circle text-success mr-2"
                      aria-hidden="true"
                    ></i
                    >{{ key }}
                  </p>
                </b-col>
              </b-row>
              <!-- <div v-for="(value, key) in parsedCarFeatures" :key="value">
            <p>{{ key }}</p>
          </div> -->

              <!-- <div class="row">
            <div class="col-md-4 col-6">
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Calendar text-16 mr-1"></i> Perfume
                </p>
                <span>1 Jan, 1994</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Edit-Map text-16 mr-1"></i> Birth Place
                </p>
                <span>Dhaka, DB</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Globe text-16 mr-1"></i> Speaker
                </p>
                <span>Dhaka, DB</span>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-MaleFemale text-16 mr-1"></i> Central locking with
                  Keyless entry
                </p>
                <span>1 Jan, 1994</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-MaleFemale text-16 mr-1"></i> Email
                </p>
                <span>example@ui-lib.com</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Cloud-Weather text-16 mr-1"></i> Dual Front
                  Airbags
                </p>
                <span>www.ui-lib.com</span>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Face-Style-4 text-16 mr-1"></i> ABS & EBD
                </p>
                <span>Digital Marketer</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Professor text-16 mr-1"></i> Rear Defogger
                </p>
                <span>8 Years</span>
              </div>
              <div class="mb-30">
                <p class="text-primary mb-1">
                  <i class="i-Home1 text-16 mr-1"></i> Rear Parking Sensors
                </p>
                <span>Digital Marketing</span>
              </div>
            </div>
          </div> -->

              <!-- <h4>Other Info</h4>
          <p class="mb-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            dolore labore reiciendis ab quo ducimus reprehenderit natus debitis,
            provident ad iure sed aut animi dolor incidunt voluptatem.
            Blanditiis, nobis aut.
          </p>
          <div class="row">
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Plane text-32 text-primary"></i>
              <p class="text-16 mt-1">Travelling</p>
            </div>
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Camera text-32 text-primary"></i>
              <p class="text-16 mt-1">Photography</p>
            </div>
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Car-3 text-32 text-primary"></i>
              <p class="text-16 mt-1">Driving</p>
            </div>
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Gamepad-2 text-32 text-primary"></i>
              <p class="text-16 mt-1">Gaming</p>
            </div>
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Music-Note-2 text-32 text-primary"></i>
              <p class="text-16 mt-1">Music</p>
            </div>
            <div class="col-md-2 col-sm-4 col-6 text-center">
              <i class="i-Shopping-Bag text-32 text-primary"></i>
              <p class="text-16 mt-1">Shopping</p>
            </div>
          </div> -->
            </div>
            <!-- <b-row class="mt-3">
          <b-col md="12">
            <h5>Choose how you want to get your car</h5>
          </b-col>
          <b-col md="12" class=" d-flex">
            
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p class="ml-2">Select the delivery option to confirm your delivery address.Host convenience fee of ₹200 will be added for delivery</p>
          </b-col>
        </b-row> -->

            <div
              class="d-flex flex-row w-100 p-3 flex-wrap md:flex-column pt-4 gap-5"
            >
              <div class="d-flex flex-column flex-wrap border-bottom w-100">
                <p class="mb-0 font-weight-bold pb-1">Agreement Policy</p>

                <p class="mb-0 pb-2">
                  I hereby agree to the terms and conditions of the Lease
                  Agreement with Host
                </p>
                <a
                  href="https://zoombacars.in/terms-conditions"
                  target="_blank"
                  style="text-decoration: underline"
                  class="for-mobile-vue-div"
                  >See Details</a
                >
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col lg="4" class="w-100 for-secDiv">
          <!-- :class="{ 'show-div': showDiv }" -->
          <b-card
            :title="`₹ ${formatPrice(finalBalance.tripPrice)}`"
            class="mb-0"
          >
            <b-row>
              <b-col md="12" class="">
                <!-- <div class="d-flex flex-row justify-content-between">
                  <p class="mb-0">Security Balance</p>
                  <p class="card-text">₹ {{ securityBalance }}/-</p>
                </div> -->
                <!-- <div class="d-flex justify-content-between pb-3 border-bottom">
                  <div class="d-flex flex-column">
                    <p class="mb-0">Current Wallet Balance</p>
                  </div>

                  <p class="card-text">₹ {{ userBalance }}/-</p>
                </div> -->
                <div class="d-flex justify-content-between py-3 border-bottom">
                  <div class="d-flex flex-column">
                    <p class="mb-0">Trip amount(this does not include fuel)</p>
                  </div>

                  <p class="card-text">
                    ₹ {{ formatPrice(finalBalance.tripBalance) }}/-
                  </p>
                </div>

                <div
                  class="d-flex flex-row text-12 justify-content-between py-3 border-bottom"
                >
                  <div
                    class="d-flex flex-row text-12 justify-content-between gap-between"
                  >
                    <div>
                      <span class="logged-in">●</span>
                      {{
                        dateRange && dateRange.startDate
                          ? dateFormate(dateRange.startDate)
                          : this.startDates
                      }}
                    </div>
                    <div>
                      <i
                        class="fa fa-long-arrow-right px-3"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <span class="logged-out">●</span>
                      {{
                        dateRange && dateRange.endDate
                          ? dateFormate(dateRange.endDate)
                          : this.endDates
                      }}
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <!-- <p class="card-text text-14 text-gray-600 font-italic m-0">
                    for&nbsp;
                  </p> -->
                  <!-- 
                  <p class="card-text text-14 text-gray-600 font-italic m-0">
                    {{
                      dateRange && dateRange.startDate
                        ? NumberOfDaysPick(
                            dateFormate(dateRange.startDate),
                            dateFormate(dateRange.endDate)
                          )
                        : numberOfDays
                    }}
                    days&nbsp;&nbsp;
                  </p> -->

                  <!-- <p class="card-text text-14 text-gray-600 font-italic m-0">
                    ( ₹ {{ price }} / Day )
                  </p> -->
                </div>
                <div class="d-flex justify-content-between py-3 border-bottom">
                  <!-- <div class="d-flex flex-column d-flex font-weight-bold">
                    <p class="mb-0">Include</p>
                    <ol>
                      <li>
                        <div
                          class="d-flex flex-row justify-content-between pt-2 font-weight-bold"
                        >
                          Fas Tag
                          <b-form-group class="lg9" label-for="input-1">
                            <b-form-select
                              v-model="selectedOption"
                              placeholder="Fas tag"
                              @change="handleFasTagChange"
                              ><b-form-select-option disabled value=""
                                >Choose price</b-form-select-option
                              >
                              <b-form-select-option value="500"
                                >500</b-form-select-option
                              >
                              <b-form-select-option value="1000"
                                >1000</b-form-select-option
                              >
                              <b-form-select-option value="1500"
                                >1500</b-form-select-option
                              >
                            </b-form-select>
                          </b-form-group>
                        </div>
                      </li>
                      <li>
                        <div
                          class="d-flex flex-row justify-content-between font-weight-bold"
                        >
                          <p class="">Trip Incurrence</p>

                          <b-form-radio name="some-radios" @change="clickYes()"
                            >Yes</b-form-radio
                          >
                          <b-form-radio name="some-radios" @change="clickNo()"
                            >No</b-form-radio
                          >
                        </div>
                      </li>
                    </ol>
                   
                  </div> -->
                  <div class="d-flex flex-column">
                    <div class="d-flex">
                      <b-form-checkbox
                        id="checkbox-1"
                        name="checkbox-1"
                        @change="handleCheckBox"
                        v-model="includeActiveFastTag"
                        unchecked-value="not_accepted"
                      >
                        <p class="text-gray-600 font-italic m-0">
                          Include Active Fasttag
                        </p>
                      </b-form-checkbox>
                      <i
                        class="ml-2 fa fa-info align-self-center ul-cursor--pointer"
                        aria-hidden="true"
                        @click="clickOnview()"
                      ></i>
                    </div>

                    <div class="d-flex flex-column">
                      <div
                        v-if="fasTag === 'True' || this.fasTagPrice > 0"
                        class="d-flex flex-row gap-betweenButton flex-wrap"
                      >
                        <!-- Button for selecting all -->
                        <!-- <b-button
                        v-for="(data, index) in fasTagAmount"
                        :key="index"
                        variant="outline-primary"
                        @click="fasTagChange(data, index)"
                        :class="{ active: fasActiveButton === index }"
                        class="btnChip btn-outline-primary2 btnex"
                      >
                        {{ data }}
                      </b-button> -->
                        <b-form-radio
                          v-for="(data, index) in fasTagAmount"
                          :key="index"
                          :value="data"
                          v-model="fasTagPrice"
                          @change="fasTagChange"
                          name="fasTagRadio"
                        >
                          Rs {{ formatPrice(data) }}
                          <!-- <b-tooltip
                            :target="'#fasTagRadio-' + index"
                            :show="showTooltip === 0"
                            triggers="hover"
                          >
                            hellofghfghghghgf
                          </b-tooltip> -->
                        </b-form-radio>
                      </div>
                      <!-- <div>
                        <p>
                          {{ formatAdditionalInfo(data, index) }}
                        </p>
                      </div> -->
                    </div>
                  </div>

                  <div v-if="fasTag === 'True' || this.fasTagPrice > 0">
                    + {{ formatPrice(this.fasTagPrice) }}
                  </div>

                  <!-- <div
                    class="d-flex mt-2 flex-row justify-content-between font-weight-bold"
                  >
                    <p class="">Trip Incurrence</p>

                    <b-form-radio name="some-radios" @change="clickYes()"
                      >Yes</b-form-radio
                    >
                    <b-form-radio name="some-radios" @change="clickNo()"
                      >No</b-form-radio
                    >
                  </div> -->
                </div>
                <div class="d-flex flex-column py-3 border-bottom">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column">
                      <div class="d-flex">
                        <b-form-checkbox
                          id="checkbox-incurrence"
                          name="checkbox-incurrence"
                          @change="handleCheckBoxIncurrence"
                          v-model="includeActiveInsureTrip"
                          unchecked-value="not_accepted"
                        >
                          <p class="text-gray-600 font-italic m-0">
                            Incidental Coverage
                          </p>
                        </b-form-checkbox>
                        <i
                          class="ml-2 fa fa-info align-self-center text-gray ul-cursor--pointer"
                          aria-hidden="true"
                          @click="clickInsureTrip()"
                        ></i>
                      </div>

                      <div
                        v-if="
                          tripIncurrence === 'True' ||
                          this.tripIncurrenceAmount > 0
                        "
                        class="d-flex flex-row gap-betweenButton flex-wrap pb-2"
                      >
                        <!-- Button for selecting all -->
                        <!-- <b-button
                      v-for="(data, index) in tripIncurrencePrice"
                      :key="index"
                      variant="outline-primary"
                      @click="tripIncurrenceChange(data, index)"
                      :class="{ active: activeButton === index }"
                      class="btnChip btn-outline-primary2 btnex"
                    >
                      {{ data }}
                    </b-button> -->
                        <b-form-radio
                          v-for="(data, index) in tripIncurrencePrice"
                          :key="index"
                          :value="data"
                          v-model="tripIncurrenceAmount"
                          name="insurenceRadio"
                          @change="tripIncurrenceChange(data, index)"
                        >
                          <div
                            @mouseover="openDiv(data, index)"
                            @mouseleave="closeDiv"
                            class="ul-cursor--pointer"
                          >
                            Rs {{ formatPrice(data) }}
                          </div>
                        </b-form-radio>
                      </div>
                    </div>

                    <div
                      v-if="
                        tripIncurrence === 'True' ||
                        this.tripIncurrenceAmount > 0
                      "
                    >
                      + {{ formatPrice(this.tripIncurrenceAmount) }}
                    </div>
                  </div>
                  <div
                    v-if="hoveredText !== '' || isOpen"
                    class="d-flex justify-content-between"
                    style="gap: 1em"
                  >
                    <p class="text-10 for-style">{{ hoveredText }}</p>
                  </div>

                  <!-- <div
                    v-if="tripIncurrence === 'True' && isOpen"
                    class="d-flex justify-content-between"
                    style="gap: 1em"
                  >
                    <div class="">
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 3499 and rest will be
                        taken care
                      </p>
                    </div>
                    <div>
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 2499 and rest will be
                        taken care
                      </p>
                    </div>
                    <div>
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 1499 and rest will be
                        taken care
                      </p>
                    </div>
                  </div> -->
                </div>
                <div class="d-flex flex-column py-3 border-bottom">
                  <div class="d-flex justify-content-between" style="gap: 2em">
                    <div
                      class="btn btn-outline-primary w-50"
                      @click="clickFree()"
                      :class="{ active: isButtonActiveFree }"
                    >
                      <div class="d-flex flex-column">
                        <p class="m-0 p-0 text-12 font-weight-600">
                          Self Pick-up
                        </p>
                        <p class="m-0 p-0 text-10">Free</p>
                      </div>
                    </div>
                    <div
                      class="btn btn-outline-primary w-50"
                      @click="clickDoorstep()"
                      :class="{ active: isButtonActive }"
                    >
                      <div class="d-flex flex-column">
                        <p class="m-0 p-0 text-12 flex-wrap font-weight-600">
                          Doorstep Pickup/Delivery
                        </p>
                        <p class="m-0 p-0 text-10">₹ 1000(within 15Kms)</p>
                      </div>
                    </div>

                    <!-- <b-form-checkbox
                        id="checkbox-doordelivery"
                        name="checkbox-incurrence"
                        @change="handleCheckDoorDelivery"
                        unchecked-value="not_accepted"
                      >
                        <p class="text-gray-600 font-italic m-0">
                          For Door Deliver & Pick up(within 15Kms) :
                        </p>
                      </b-form-checkbox> -->
                    <!-- <div
                        v-if="doorDelivery === 'True'"
                        class="d-flex flex-row gap-betweenButton flex-wrap pb-2"
                      >
                        <b-form-radio
                          v-for="(data, index) in doorDeliveryPrice"
                          :key="index"
                          :value="data"
                          name="insurenceRadio"
                          @change="doorDeliveryChange(data, index)"
                        >
                          <div>Rs {{ formatPrice(data) }}</div>
                        </b-form-radio>
                      </div> -->

                    <!-- <div v-if="doorDelivery === 'True'">
                      + {{ formatPrice(this.doorDeliveryAmount) }}
                    </div> -->
                  </div>
                </div>

                <div
                  class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                >
                  <p class="">Convinience Fee</p>

                  <p class="card-text">+ ₹ {{ 0 }}</p>
                </div>
                <div
                  v-if="userId"
                  class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                >
                  <p class="">Minus Current Wallet Balance</p>

                  <p class="card-text">
                    - ₹ {{ formatPrice(finalBalance.minusBalance) }}
                  </p>
                </div>
                <div
                  v-if="userId"
                  class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                >
                  <p class="w-50">
                    Minus 25% of rental duration from Bonus & Rewards
                  </p>

                  <p class="card-text">
                    - ₹ {{ formatPrice(finalBalance.referalamount) }}
                  </p>
                </div>
                <!-- <div
                  class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
                >
                  <p class="">Remaining Wallet Balance</p>
                  <p class="card-text">₹ {{ finalBalance.remaningBalance }}</p>

                  <p class="card-text">₹ {{ finalBalance.remaningBalance }}</p>
                </div> -->
                <div
                  v-if="this.finalBalance.tripPrice > 0 || !userId"
                  class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
                >
                  <p class="">Total Price</p>

                  <p class="card-text">
                    ₹ {{ formatPrice(this.finalBalance.finalAmount) }}
                  </p>
                </div>
                <div
                  class="d-flex flex-row justify-content-between pt-2 font-weight-bold"
                >
                  <div class="d-flex flex-column">
                    <p class="m-0">Refundable Security Deposit:</p>
                    <!-- <p class="p-0 m-0  text-danger" v-if="parseInt(this.securityBalance) < 5000">
                      Required to add: ₹ {{ this.finalBalance.securityPay }}
                    </p> -->
                  </div>

                  <p class="card-text">₹ {{ formatPrice(5000) }}</p>
                </div>
                <!-- <div class="d-flex font-weight-bold justify-content-between">
                  <p class="m-0">Minus Current Security Deposit:</p>

                  <p class="card-text">
                    - ₹ {{ formatPrice(this.securityBalance) }}
                  </p>
                </div> -->

                <div
                  class="d-flex flex-row justify-content-between pt-2 font-weight-bold for-mobile-vue-div"
                >
                  <p class="">Final Amount</p>

                  <p class="card-text">
                    ₹ {{ formatPrice(this.finalBalance.tripPrice) }}
                  </p>
                </div>
              </b-col>
            </b-row>
            <!-- <b-row class="mt-2">
              <b-col md="5">
                <div
                  class="spinner spinner-primary mr-3"
                  v-if="updateloader"
                ></div>
                 <b-button
              v-if="!updateloader"
              variant="primary ripple"
              @click="clickPay()"
              >Payment</b-button
            >
              </b-col>
            </b-row> -->
            <div
              class="justify-content-center align-content-center for-mobile-vue-btn"
              style=""
            >
              <!-- <div class="d-flex justify-content-end">
                <i
                  class="fa fa-2x fa-angle-double-up"
                  @click="toggleDiv()"
                  aria-hidden="true"
                ></i>
              </div> -->
              <a
                v-if="this.userId == null"
                href="#"
                @click="clickPay()"
                class="btn btn-primary w-100"
                >Signin to continue</a
              >

              <a
                v-else
                href="#"
                @click="clickPay()"
                class="btn btn-primary w-100"
                >Proceed to payment</a
              >
            </div>
          </b-card>
        </b-col>
      </b-row>

      <b-modal
        id="modal-cancellation"
        size="md"
        title="Cancellation Policy"
        style="min-height: 100px"
        hide-footer
      >
        <div class="row p-3">
          <div class="col-md-12">
            <ul>
              <li>
                Cancellations before 24 hours of Booking Time, will be charged
                ₹500/- Or 25% of the Total rent whichever is maximum.
              </li>
              <li>
                Cancellations within 24 hours of Booking Time, will be charged
                ₹1000/- Or one full day rent whichever is maximum.
              </li>
              <li>
                Cancellations within 2 hours of Booking Time, will be charged
                one full day rent.
              </li>
              <li>
                In case a booking is cancelled due to inability to produce valid
                proofs during car pickup, will be charged ₹1000/- Or 100% of
                full day rent whichever is maximum.
              </li>
              <li>
                The refund will be credited to the user's account within 48
                working hours.
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <b-button
              @click="clickCancel()"
              variant="primary"
              class="col-md-12"
            >
              OK, GOT IT!
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-booking-notification"
        size="md"
        title="Reason for cancellation:"
        style="height: 100px"
        hide-footer
        hide-header
        centered
      >
        <b-row class="p-3">
          <b-col md="12">
            Your Car has been reserved, To confirm your booking please update
            your profile.
          </b-col>
          <b-col md="12" class="mt-2 d-flex flex-centered">
            <b-button
              class="col-12"
              variant="primary ripple"
              @click="clickOnOkButton()"
              >Ok</b-button
            >
          </b-col>
        </b-row>
      </b-modal>
      <b-modal
        id="modal-fasttag"
        size="md"
        title="How Fast Tag Recharge works?"
        style="min-height: 100px"
        hide-footer
      >
        <div class="row p-3">
          <div class="col-md-12">
            <ul>
              <li>
                If selected, the fast tag for your selected car will be
                recharged as per the amount requested and will be kept ready so
                that you can focus more on your ride! Once the trip is completed
                we will transfer the remaining amount from Fast Tag to your
                account automatically!
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <b-button
              @click="clickCancel()"
              variant="primary"
              class="col-md-12"
            >
              OK
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-insure-trip"
        size="md"
        title="How Incidental Coverage Works?"
        style="min-height: 100px"
        hide-footer
      >
        <div class="row p-3">
          <div class="col-md-12">
            <ul>
              <li>
                Enjoy a worry-free journey as we handle any unexpected damages
                to the car throughout your trip.
              </li>
              <li>
                Your payment for damages or repairs is based solely on the
                chosen package, ensuring you pay only the minimum amount.
              </li>
              <li>
                Opt for a higher package to minimize your risk of incurring any
                damages.
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <b-button
              @click="clickCancel()"
              variant="primary"
              class="col-md-12"
            >
              OK
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-forcarbook-info"
        size="md"
        title="How Fast Tag Recharge works?"
        style="min-height: 100px"
        hide-footer
        hide-header
        centered
      >
        <div class="row p-3">
          <div class="col-md-12">
            <ul>
              <li>
                <span>
                  Uh Oh, Looks like you already have a booking with us, Please
                  retry once you have completed the current booking. In case you
                  want to make multiple bookings, please contact our customer
                  service centre at:
                  <i class="fa fa-phone" aria-hidden="true"></i> +91 87905
                  19679</span
                >
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <b-button
              @click="clickCancel()"
              variant="primary"
              class="col-md-12"
            >
              OK
            </b-button>
          </div>
        </div>
      </b-modal>
      <b-modal id="modal-payment-card" size="md" hide-footer centered>
        <div class="row">
          <div class="col-md-12">
            <b-card
              :title="`₹ ${formatPrice(finalBalance.tripPrice)}`"
              class="mb-0"
            >
              <b-row>
                <b-col md="12" class="">
                  <!-- <div class="d-flex flex-row justify-content-between">
                  <p class="mb-0">Security Balance</p>
                  <p class="card-text">₹ {{ securityBalance }}/-</p>
                </div> -->
                  <!-- <div class="d-flex justify-content-between pb-3 border-bottom">
                  <div class="d-flex flex-column">
                    <p class="mb-0">Current Wallet Balance</p>
                  </div>

                  <p class="card-text">₹ {{ userBalance }}/-</p>
                </div> -->
                  <div
                    class="d-flex justify-content-between py-3 border-bottom"
                  >
                    <div class="d-flex flex-column">
                      <p class="mb-0">
                        Trip amount(this does not include fuel)
                      </p>
                    </div>

                    <p class="card-text">
                      ₹ {{ formatPrice(finalBalance.tripBalance) }}/-
                    </p>
                  </div>

                  <div
                    class="d-flex flex-row text-12 justify-content-between py-3 border-bottom"
                  >
                    <div
                      class="d-flex flex-row text-12 justify-content-between gap-between"
                    >
                      <div>
                        <span class="logged-in">●</span>
                        {{
                          dateRange && dateRange.startDate
                            ? dateFormate(dateRange.startDate)
                            : this.startDates
                        }}
                      </div>
                      <div>
                        <i
                          class="fa fa-long-arrow-right px-3"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <span class="logged-out">●</span>
                        {{
                          dateRange && dateRange.endDate
                            ? dateFormate(dateRange.endDate)
                            : this.endDates
                        }}
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <!-- <p class="card-text text-14 text-gray-600 font-italic m-0">
                    for&nbsp;
                  </p> -->
                    <!-- 
                  <p class="card-text text-14 text-gray-600 font-italic m-0">
                    {{
                      dateRange && dateRange.startDate
                        ? NumberOfDaysPick(
                            dateFormate(dateRange.startDate),
                            dateFormate(dateRange.endDate)
                          )
                        : numberOfDays
                    }}
                    days&nbsp;&nbsp;
                  </p> -->

                    <!-- <p class="card-text text-14 text-gray-600 font-italic m-0">
                    ( ₹ {{ price }} / Day )
                  </p> -->
                  </div>
                  <div
                    class="d-flex justify-content-between py-3 border-bottom"
                  >
                    <!-- <div class="d-flex flex-column d-flex font-weight-bold">
                    <p class="mb-0">Include</p>
                    <ol>
                      <li>
                        <div
                          class="d-flex flex-row justify-content-between pt-2 font-weight-bold"
                        >
                          Fas Tag
                          <b-form-group class="lg9" label-for="input-1">
                            <b-form-select
                              v-model="selectedOption"
                              placeholder="Fas tag"
                              @change="handleFasTagChange"
                              ><b-form-select-option disabled value=""
                                >Choose price</b-form-select-option
                              >
                              <b-form-select-option value="500"
                                >500</b-form-select-option
                              >
                              <b-form-select-option value="1000"
                                >1000</b-form-select-option
                              >
                              <b-form-select-option value="1500"
                                >1500</b-form-select-option
                              >
                            </b-form-select>
                          </b-form-group>
                        </div>
                      </li>
                      <li>
                        <div
                          class="d-flex flex-row justify-content-between font-weight-bold"
                        >
                          <p class="">Trip Incurrence</p>

                          <b-form-radio name="some-radios" @change="clickYes()"
                            >Yes</b-form-radio
                          >
                          <b-form-radio name="some-radios" @change="clickNo()"
                            >No</b-form-radio
                          >
                        </div>
                      </li>
                    </ol>
                   
                  </div> -->
                    <div class="d-flex flex-column">
                      <div class="d-flex">
                        <b-form-checkbox
                          id="checkbox-1"
                          name="checkbox-1"
                          @change="handleCheckBox"
                          v-model="includeActiveFastTag"
                          unchecked-value="not_accepted"
                        >
                          <p class="text-gray-600 font-italic m-0">
                            Include Active Fasttag
                          </p>
                        </b-form-checkbox>
                        <i
                          class="ml-2 fa fa-info align-self-center ul-cursor--pointer"
                          aria-hidden="true"
                          @click="clickOnview()"
                        ></i>
                      </div>

                      <div class="d-flex flex-column">
                        <div
                          v-if="fasTag === 'True' || this.fasTagPrice > 0"
                          class="d-flex flex-row gap-betweenButton flex-wrap"
                        >
                          <!-- Button for selecting all -->
                          <!-- <b-button
                        v-for="(data, index) in fasTagAmount"
                        :key="index"
                        variant="outline-primary"
                        @click="fasTagChange(data, index)"
                        :class="{ active: fasActiveButton === index }"
                        class="btnChip btn-outline-primary2 btnex"
                      >
                        {{ data }}
                      </b-button> -->
                          <b-form-radio
                            v-for="(data, index) in fasTagAmount"
                            :key="index"
                            :value="data"
                            v-model="fasTagPrice"
                            @change="fasTagChange"
                            name="fasTagRadio"
                          >
                            Rs {{ formatPrice(data) }}
                            <!-- <b-tooltip
                            :target="'#fasTagRadio-' + index"
                            :show="showTooltip === 0"
                            triggers="hover"
                          >
                            hellofghfghghghgf
                          </b-tooltip> -->
                          </b-form-radio>
                        </div>
                        <!-- <div>
                        <p>
                          {{ formatAdditionalInfo(data, index) }}
                        </p>
                      </div> -->
                      </div>
                    </div>

                    <div v-if="fasTag === 'True' || this.fasTagPrice > 0">
                      + {{ formatPrice(this.fasTagPrice) }}
                    </div>

                    <!-- <div
                    class="d-flex mt-2 flex-row justify-content-between font-weight-bold"
                  >
                    <p class="">Trip Incurrence</p>

                    <b-form-radio name="some-radios" @change="clickYes()"
                      >Yes</b-form-radio
                    >
                    <b-form-radio name="some-radios" @change="clickNo()"
                      >No</b-form-radio
                    >
                  </div> -->
                  </div>
                  <div class="d-flex flex-column py-3 border-bottom">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-column">
                        <div class="d-flex">
                          <b-form-checkbox
                            id="checkbox-incurrence"
                            name="checkbox-incurrence"
                            @change="handleCheckBoxIncurrence"
                            v-model="includeActiveInsureTrip"
                            unchecked-value="not_accepted"
                          >
                            <p class="text-gray-600 font-italic m-0">
                              Incidental Coverage
                            </p>
                          </b-form-checkbox>
                          <i
                            class="ml-2 fa fa-info align-self-center text-gray ul-cursor--pointer"
                            aria-hidden="true"
                            @click="clickInsureTrip()"
                          ></i>
                        </div>

                        <div
                          v-if="
                            tripIncurrence === 'True' ||
                            this.tripIncurrenceAmount > 0
                          "
                          class="d-flex flex-row gap-betweenButton flex-wrap pb-2"
                        >
                          <!-- Button for selecting all -->
                          <!-- <b-button
                      v-for="(data, index) in tripIncurrencePrice"
                      :key="index"
                      variant="outline-primary"
                      @click="tripIncurrenceChange(data, index)"
                      :class="{ active: activeButton === index }"
                      class="btnChip btn-outline-primary2 btnex"
                    >
                      {{ data }}
                    </b-button> -->
                          <b-form-radio
                            v-for="(data, index) in tripIncurrencePrice"
                            :key="index"
                            :value="data"
                            v-model="tripIncurrenceAmount"
                            name="insurenceRadio"
                            @change="tripIncurrenceChange(data, index)"
                          >
                            <div
                              @mouseover="openDiv(data, index)"
                              @mouseleave="closeDiv"
                              class="ul-cursor--pointer"
                            >
                              Rs {{ formatPrice(data) }}
                            </div>
                          </b-form-radio>
                        </div>
                      </div>

                      <div
                        v-if="
                          tripIncurrence === 'True' ||
                          this.tripIncurrenceAmount > 0
                        "
                      >
                        + {{ formatPrice(this.tripIncurrenceAmount) }}
                      </div>
                    </div>
                    <div
                      v-if="hoveredText !== '' || isOpen"
                      class="d-flex justify-content-between"
                      style="gap: 1em"
                    >
                      <p class="text-10 for-style">{{ hoveredText }}</p>
                    </div>

                    <!-- <div
                    v-if="tripIncurrence === 'True' && isOpen"
                    class="d-flex justify-content-between"
                    style="gap: 1em"
                  >
                    <div class="">
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 3499 and rest will be
                        taken care
                      </p>
                    </div>
                    <div>
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 2499 and rest will be
                        taken care
                      </p>
                    </div>
                    <div>
                      <p class="text-10 for-style">
                        In case of accident just pay Rs 1499 and rest will be
                        taken care
                      </p>
                    </div>
                  </div> -->
                  </div>
                  <div class="d-flex flex-column py-3 border-bottom">
                    <div
                      class="d-flex justify-content-between"
                      style="gap: 2em"
                    >
                      <div
                        class="btn btn-outline-primary w-50"
                        @click="clickFree()"
                        :class="{ active: isButtonActiveFree }"
                      >
                        <div class="d-flex flex-column">
                          <p class="m-0 p-0 text-12 font-weight-600">
                            Self Pick-up
                          </p>
                          <p class="m-0 p-0 text-10">Free</p>
                        </div>
                      </div>
                      <div
                        class="btn btn-outline-primary w-50"
                        @click="clickDoorstep()"
                        :class="{ active: isButtonActive }"
                      >
                        <div class="d-flex flex-column">
                          <p class="m-0 p-0 text-12 font-weight-600">
                            Doorstep Pickup/Delivery
                          </p>
                          <p class="m-0 p-0 text-10">₹ 1000(within 15Kms)</p>
                        </div>
                      </div>

                      <!-- <b-form-checkbox
                        id="checkbox-doordelivery"
                        name="checkbox-incurrence"
                        @change="handleCheckDoorDelivery"
                        unchecked-value="not_accepted"
                      >
                        <p class="text-gray-600 font-italic m-0">
                          For Door Deliver & Pick up(within 15Kms) :
                        </p>
                      </b-form-checkbox> -->
                      <!-- <div
                        v-if="doorDelivery === 'True'"
                        class="d-flex flex-row gap-betweenButton flex-wrap pb-2"
                      >
                        <b-form-radio
                          v-for="(data, index) in doorDeliveryPrice"
                          :key="index"
                          :value="data"
                          name="insurenceRadio"
                          @change="doorDeliveryChange(data, index)"
                        >
                          <div>Rs {{ formatPrice(data) }}</div>
                        </b-form-radio>
                      </div> -->

                      <!-- <div v-if="doorDelivery === 'True'">
                      + {{ formatPrice(this.doorDeliveryAmount) }}
                    </div> -->
                    </div>
                  </div>

                  <div
                    class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                  >
                    <p class="">Convinience Fee</p>

                    <p class="card-text">+ ₹ {{ 0 }}</p>
                  </div>
                  <div
                    v-if="userId"
                    class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                  >
                    <p class="">Minus Current Wallet Balance</p>

                    <p class="card-text">
                      - ₹ {{ formatPrice(finalBalance.minusBalance) }}
                    </p>
                  </div>
                  <div
                    v-if="userId"
                    class="d-flex flex-row justify-content-between pt-2 font-weight-bold border-bottom"
                  >
                    <p class="w-50">
                      Minus 25% of rental duration from Bonus & Rewards
                    </p>

                    <p class="card-text">
                      - ₹ {{ formatPrice(finalBalance.referalamount) }}
                    </p>
                  </div>
                  <!-- <div
                  class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
                >
                  <p class="">Remaining Wallet Balance</p>
                  <p class="card-text">₹ {{ finalBalance.remaningBalance }}</p>

                  <p class="card-text">₹ {{ finalBalance.remaningBalance }}</p>
                </div> -->
                  <div
                    v-if="this.finalBalance.tripPrice > 0 || !userId"
                    class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
                  >
                    <p class="">Total Price</p>

                    <p class="card-text">
                      ₹ {{ formatPrice(this.finalBalance.finalAmount) }}
                    </p>
                  </div>
                  <div
                    class="d-flex flex-row justify-content-between pt-2 font-weight-bold"
                  >
                    <div class="d-flex flex-column">
                      <p class="m-0">Refundable Security Deposit:</p>
                      <!-- <p class="p-0 m-0  text-danger" v-if="parseInt(this.securityBalance) < 5000">
                      Required to add: ₹ {{ this.finalBalance.securityPay }}
                    </p> -->
                    </div>

                    <p class="card-text">₹ {{ formatPrice(5000) }}</p>
                  </div>
                  <!-- <div class="d-flex font-weight-bold justify-content-between">
                  <p class="m-0">Minus Current Security Deposit:</p>

                  <p class="card-text">
                    - ₹ {{ formatPrice(this.securityBalance) }}
                  </p>
                </div> -->

                  <div
                    class="d-flex flex-row justify-content-between pt-2 font-weight-bold for-mobile-vue-div"
                  >
                    <p class="">Final Amount</p>

                    <p class="card-text">
                      ₹ {{ formatPrice(this.finalBalance.tripPrice) }}
                    </p>
                  </div>
                </b-col>
              </b-row>
              <!-- <b-row class="mt-2">
              <b-col md="5">
                <div
                  class="spinner spinner-primary mr-3"
                  v-if="updateloader"
                ></div>
                 <b-button
              v-if="!updateloader"
              variant="primary ripple"
              @click="clickPay()"
              >Payment</b-button
            >
              </b-col>
            </b-row> -->
              <div
                class="justify-content-center align-content-center for-mobile-vue-btn"
                style=""
              >
                <!-- <div class="d-flex justify-content-end">
                <i
                  class="fa fa-2x fa-angle-double-up"
                  @click="toggleDiv()"
                  aria-hidden="true"
                ></i>
              </div> -->
                <a
                  v-if="this.userId == null"
                  href="#"
                  @click="clickPay()"
                  class="btn btn-primary w-100"
                  >Signin to continue</a
                >

                <a
                  v-else
                  href="#"
                  @click="clickPay()"
                  class="btn btn-primary w-100"
                  >Proceed to payment</a
                >
              </div>
            </b-card>
          </div>
          <!-- <div class="col-md-12">
            <b-button
              @click="clickCancel()"
              variant="primary"
              class="col-md-12"
            >
              OK
            </b-button>
          </div> -->
        </div>
      </b-modal>
      <b-row> </b-row>

      <!-- <walletoffers class="order-2 order-md-1 for-profile2"
        :dataProp="sendData"></walletoffers> -->
    </div>

    <div
      class="justify-content-center align-content-center px-3 py-1 bg-gray-200 for-mobile-vue"
    >
      <div class="d-flex justify-content-between py-2">
        <div class="d-flex flex-row justify-content-between font-weight-bold">
          <p class="card-text">
            ₹ {{ formatPrice(this.finalBalance.tripPrice) }}
          </p>
        </div>
        <p
          class="m-0 p-0 text-12 font-weight-900 ul-cursor--pointer"
          @click="toggleDiv()"
        >
          <i class="fa fa-book" aria-hidden="true"></i> Price Summary
        </p>
        <!-- <i
          class="fa fa-2x fa-angle-double-up"
          @click="toggleDiv()"
          aria-hidden="true"
        ></i> -->
      </div>
      <a
        v-if="this.userId == null"
        href="#"
        @click="clickPay()"
        class="btn btn-primary w-100"
        >Signin to continue</a
      >

      <a v-else href="#" @click="clickPay()" class="btn btn-primary w-100"
        >Proceed to payment</a
      >
    </div>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import moment from "moment";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
// import moment from 'moment';

// import $ from "jquery";
import TopNav from "../../../containers/layouts/largeSidebar/TopNav.vue";
// import { gmapApi } from "vue2-google-maps";
// import Walletoffers from "./walletoffers.vue";
// import bookCar from "./walletoffers.vue";
import message from "../../../message";
import transactionVue from "../myDesk/transaction.vue";
export default {
  metaInfo: {
    title: "Book-Car",
  },
  components: { TopNav, DateRangePicker, VueSlider },
  data() {
    return {
      picStartdate: null,
      picEnddate: null,
      sliderValue: 6,
      sliderPosition: 6,
      sliderValueSec: 8,

      showTooltip: 0,
      showDiv: false,
      fName: "",
      lName: "",
      aadharImage: "",
      drivingLicenseImage: "",

      isButtonActiveFree: false,
      isButtonActive: false,
      isOpen: false,
      differenceInDays: "",
      differenceInHours: "",
      differenceInMinutes: "",
      dateRange: { startDate: null, endDate: null },
      center: { lat: 37.7749, lng: -122.4194 }, // Default center is San Francisco
      zoom: 12,
      fasTagAmount: ["500", "1000", "1500"],
      tripIncurrencePrice: ["199", "499", "699"],
      doorDeliveryPrice: ["1000"],
      fasActiveButton: null,
      activeButton: null,
      fasTag: "False",
      doorDelivery: "False",
      doorDeliveryFree: "False",
      fasTagPrice: 0,
      tripIncurrence: "False",
      tripIncurrenceAmount: 0,
      doorDeliveryAmount: 0,
      userBalance: "",
      referralBalance: "",
      totalBalance: "",
      securityBalance: "",
      updateloader: false,
      // startDate: null,
      endDate: null,
      id: null,
      loader: false,
      carDetails: [],
      currentIndex: 0,
      userId: null,
      // currentIndex: 0,
      images: [],
      sendData: {},
      brand: "",
      model: "",
      make: "",
      registration_month: "",
      registration_year: "",
      body_type: "",
      seating_capacity: "",

      fuel_type: "",
      description: "",
      engine: "",
      selectedOption: "",
      power: "",
      carFeatures: "",
      parsedCarFeatures: {},
      car_pickup_location: "",
      price: "",
      transmission_type: "",
      imagess: [],
      about_car: "",
      meter_reading: "",
      service_Date: "",
      allowed_km_per_day: "",
      excess_KM_charges: "",
      registration_number: "",
      status: null,
      startDateShow: "",
      sDate: "",
      eDate: "",
      startDate: "",
      startDates: "",
      endDates: "",
      startDateSend: "",
      endDateSend: "",
      endDateShow: "",
      numberOfDays: 0,
      tripBalance: "",
      secTripBalance: "",
      remaningBalance: "",
      minDate: new Date(),
      datePickerRef: null,
      datePickerVisible: false,
      hoveredText: "",
      storedDoorDeliveryAmount: null,
      storedTripIncurrenceAmount: null,
      storedFasTagPrice: null,
      includeActiveFastTag: false,
      includeActiveInsureTrip: false,
      bookCarsInfo: [],
    };
  },
  filters: {
    // dateCell (value) {
    //   let dt = new Date(value)

    //   return dt.getDate()
    // },
    date(val) {
      return val ? moment(val).format("DD MMM  h:mm A") : "";
    },
  },
  computed: {
    formattedTime() {
      return moment()
        .startOf("day")
        .add(this.sliderValue, "hours")
        .format("h:mm A");
    },
    formattedTimeSec() {
      return moment()
        .startOf("day")
        .add(this.sliderValue, "hours")
        .format("h:mm A");
    },
    finalBalance() {
      // if (this.dateRange && this.dateRange.startDate) {
      //   this.tripBalance=this.NumberOfDaysPick(
      //       this.dateFormate(this.dateRange.startDate),
      //       this.dateFormate(this.dateRange.endDate)
      //     )*this.price;
      // }else{
      //   this.remaningBalance=this.tripBalance-(this.userBalance || 0);
      //   if(this.remaningBalance>=0){
      //     this.remaningBalance=this.remaningBalance;

      //   }else{
      //     this.remaningBalance=-(this.remaningBalance);

      //   }
      //   return {
      //   tripBalance: this.tripBalance,
      //   remaningBalance: this.remaningBalance
      // };

      // }
      var securityPay = 5000 - parseInt(this.securityBalance);
      let balance;
      if (this.dateRange && this.dateRange.startDate) {
        this.numberOfDays = this.NumberOfDaysPick(
          this.dateFormate(this.dateRange.startDate),
          this.dateFormate(this.dateRange.endDate)
        );
        this.startDateSend = this.dateRange.startDate;
        this.endDateSend = this.dateRange.endDate;
        // balance =
        //   this.NumberOfDaysPick(
        //     this.dateFormate(this.dateRange.startDate),
        //     this.dateFormate(this.dateRange.endDate)
        //   ) *
        //     this.price -
        //   (this.userBalance || 0);
        this.tripBalance =
          this.NumberOfDaysPick(
            this.dateFormate(this.dateRange.startDate),
            this.dateFormate(this.dateRange.endDate)
          ) * this.price;
        if (parseInt(this.userBalance) <= parseInt(this.tripBalance)) {
          balance = this.userBalance;
        } else {
          balance =
            this.NumberOfDaysPick(
              this.dateFormate(this.dateRange.startDate),
              this.dateFormate(this.dateRange.endDate)
            ) * this.price;
        }
        // balance =
        //   this.NumberOfDaysPick(
        //     this.dateFormate(this.dateRange.startDate),
        //     this.dateFormate(this.dateRange.endDate)
        //   ) *
        //     this.price -
        //   (this.userBalance || 0);
        // this.tripBalance =
        //   this.NumberOfDaysPick(
        //     this.dateFormate(this.dateRange.startDate),
        //     this.dateFormate(this.dateRange.endDate)
        //   ) * this.price;
      } else {
        this.startDateSend = this.sDate;
        this.endDateSend = this.eDate;
        this.numberOfDays = this.calculateNumberOfDays();
        this.tripBalance = this.numberOfDays * this.price;

        if (parseInt(this.userBalance) <= parseInt(this.tripBalance)) {
          balance = this.userBalance;
        } else {
          balance = this.numberOfDays * this.price;
        }
      }

      // totalTripBalance = 16000;
      //this.userBalance = 10000;
      var finalAmount = parseInt(this.tripBalance);
      var total_trip_amount = parseInt(this.tripBalance);
      let referalamount = 0;
      var trip_price = 0;
      var amountToPay = 0;
      var wallet_amount_to_pay = 0;
      if (this.userBalance <= this.tripBalance) {
        amountToPay = this.tripBalance - this.userBalance;

        if (this.referralBalance > 0) {
          referalamount = (parseInt(this.tripBalance) * 25) / 100;

          if (referalamount < this.referralBalance) {
            finalAmount -= referalamount + this.userBalance;
            if (finalAmount > 0) {
              amountToPay = finalAmount;
            } else {
              balance = this.tripBalance - referalamount;
              amountToPay = 0;
              finalAmount = 0;
            }

            // referalamount=this.referralBalance-referalamount;
          } else {
            referalamount = this.referralBalance;

            // amountToPay -= referalamount;
            finalAmount -= referalamount + this.userBalance;
            amountToPay = finalAmount;
            // amountToPay=this.amountToPay
          }
        }
        trip_price = this.tripBalance - this.userBalance;
        // amountToPay = this.tripBalance - this.userBalance;
        // finalAmount = finalAmount - this.userBalance;
        wallet_amount_to_pay = this.userBalance;
      } else {
        // amountToPay = 0;
        if (this.referralBalance > 0) {
          referalamount = (parseInt(this.tripBalance) * 25) / 100;
          finalAmount -= referalamount;
          // amountToPay -= referalamount;
          balance -= referalamount;
        }
        trip_price = this.tripBalance - this.userBalance;
        wallet_amount_to_pay = this.tripBalance;
      }

      if (
        (this.fasTag === "True" && this.tripIncurrence === "True") ||
        this.fasTagPrice > 0 ||
        this.tripIncurrenceAmount > 0
      ) {
        total_trip_amount +=
          parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
        finalAmount +=
          parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
        if (this.userBalance <= this.tripBalance) {
          // amountToPay +=
          //   parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
          balance +=
            parseInt(this.fasTagPrice) + parseInt(this.tripIncurrenceAmount);
          if (this.userBalance >= balance) {
            balance = balance;
            finalAmount = 0;
            amountToPay = 0;
            // amountToPay += parseInt(this.doorDeliveryAmount);
          } else {
            if (amountToPay > 0) {
              amountToPay +=
                parseInt(this.tripIncurrenceAmount) +
                parseInt(this.fasTagPrice);
              if (this.userBalance <= balance) {
                balance = this.userBalance;
              }
            } else {
              amountToPay = balance;

              balance = this.userBalance;
              amountToPay -= balance;
              finalAmount = amountToPay;
            }
            // amountToPay += parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
          }
          wallet_amount_to_pay = this.userBalance;
        } else {
          wallet_amount_to_pay +=
            parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
          if (this.userBalance <= wallet_amount_to_pay) {
            wallet_amount_to_pay = this.userBalance;
          }
          balance +=
            parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
          if (this.userBalance >= balance) {
            amountToPay = 0;
          } else {
            var myBalance = balance - this.userBalance;
            balance = this.userBalance;
            amountToPay += myBalance;
            finalAmount = amountToPay;
          }

          // amountToPay +=
          //   parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
        }
      } else if (this.fasTag === "True" || this.fasTagPrice > 0) {
        total_trip_amount += parseInt(this.fasTagPrice);
        finalAmount += parseInt(this.fasTagPrice);

        if (this.userBalance <= this.tripBalance) {
          // amountToPay += parseInt(this.fasTagPrice);
          wallet_amount_to_pay = this.userBalance;
          balance += parseInt(this.fasTagPrice);
          if (amountToPay > 0) {
            amountToPay += parseInt(this.fasTagPrice);
          } else {
            if (this.userBalance >= balance) {
              balance = balance;
              finalAmount = 0;
              amountToPay = 0;
              // amountToPay += parseInt(this.doorDeliveryAmount);
            } else {
              if (amountToPay > 0) {
                amountToPay += parseInt(this.fasTagPrice);
                if (this.userBalance <= balance) {
                  balance = this.userBalance;
                }
              } else {
                amountToPay = balance;

                balance = this.userBalance;
                amountToPay -= balance;
                finalAmount = amountToPay;
              }

              // amountToPay += parseInt(this.fasTagPrice);
            }
          }
        } else {
          wallet_amount_to_pay += parseInt(this.fasTagPrice);
          if (this.userBalance <= wallet_amount_to_pay) {
            wallet_amount_to_pay = this.userBalance;
          }
          balance += parseInt(this.fasTagPrice);
          if (this.userBalance >= balance) {
            amountToPay = 0;
          } else {
            var myBalance = balance - this.userBalance;
            balance = this.userBalance;
            amountToPay += myBalance;
          }
          // amountToPay +=parseInt(this.fasTagPrice);
        }
      } else if (
        this.tripIncurrence === "True" ||
        this.tripIncurrenceAmount > 0
      ) {
        total_trip_amount += parseInt(this.tripIncurrenceAmount);
        finalAmount += parseInt(this.tripIncurrenceAmount);

        if (this.userBalance <= this.tripBalance) {
          // amountToPay += parseInt(this.tripIncurrenceAmount);
          balance += parseInt(this.tripIncurrenceAmount);
          if (amountToPay > 0) {
            amountToPay += parseInt(this.tripIncurrenceAmount);
          } else {
            if (this.userBalance >= balance) {
              balance = balance;
              finalAmount = 0;
              amountToPay = 0;
              // amountToPay += parseInt(this.doorDeliveryAmount);
            } else {
              if (amountToPay > 0) {
                amountToPay += parseInt(this.tripIncurrenceAmount);
                if (this.userBalance <= balance) {
                  balance = this.userBalance;
                }
              } else {
                amountToPay = balance;

                balance = this.userBalance;
                amountToPay -= balance;
                finalAmount = amountToPay;
              }
            }
          }
        } else {
          wallet_amount_to_pay += parseInt(this.tripIncurrenceAmount);
          if (this.userBalance <= wallet_amount_to_pay) {
            wallet_amount_to_pay = this.userBalance;
          }
          balance += parseInt(this.tripIncurrenceAmount);
          if (this.userBalance >= balance) {
            amountToPay = 0;
          } else {
            var myBalance = balance - this.userBalance;
            balance = this.userBalance;
            amountToPay += myBalance;
          }
          // amountToPay +=parseInt(this.tripIncurrenceAmount);
        }
      }

      if (this.isButtonActive) {
        total_trip_amount += parseInt(this.doorDeliveryAmount);
        finalAmount += parseInt(this.doorDeliveryAmount);

        if (this.userBalance <= this.tripBalance) {
          // amountToPay += parseInt(this.doorDeliveryAmount);

          balance += parseInt(this.doorDeliveryAmount);

          if (this.userBalance >= balance) {
            balance = balance;
            finalAmount = 0;
            amountToPay = 0;
          } else {
            if (amountToPay > 0) {
              amountToPay += parseInt(this.doorDeliveryAmount);
              if (this.userBalance <= balance) {
                balance = this.userBalance;
              }
            } else {
              amountToPay = balance;
              balance = this.userBalance;
              amountToPay -= balance;
              finalAmount = amountToPay;
            }
            // amountToPay += parseInt(this.doorDeliveryAmount);
            // finalAmount = amountToPay;
          }
        } else {
          wallet_amount_to_pay += parseInt(this.doorDeliveryAmount);
          if (this.userBalance <= wallet_amount_to_pay) {
            wallet_amount_to_pay = this.userBalance;
          }
          balance += parseInt(this.doorDeliveryAmount);
          if (this.userBalance >= balance) {
            amountToPay = 0;
          } else {
            var myBalance = balance - this.userBalance;
            balance = this.userBalance;
            amountToPay += myBalance;
            finalAmount = amountToPay;
          }
          // amountToPay +=parseInt(this.tripIncurrenceAmount);
        }
      }
      // let referalamount = 0;
      // if (this.referralBalance > 0) {
      //   referalamount = (parseInt(this.tripBalance) * 25) / 100;
      //   finalAmount -= referalamount;
      //   amountToPay -= referalamount;
      // }

      //  var finalAmount = parseInt(this.tripBalance)+
      //   parseInt(this.tripIncurrenceAmount) + parseInt(this.fasTagPrice);
      // amount = amountToPay;
      // wallet_amount = wallet_amount_to_pay

      // if (balance >= 0) {
      //   balance = balance;
      // }

      return {
        tripBalance: this.tripBalance,
        tripPrice: amountToPay + securityPay,
        trip_price: trip_price,
        wallet_amount_to_pay: wallet_amount_to_pay,
        finalAmount: finalAmount,
        total_trip_amount: total_trip_amount,
        securityPay: securityPay,
        referalamount: referalamount,
        // tripPrice:
        //   this.tripBalance > this.userBalance
        //     ? this.tripBalance - this.userBalance
        //     : this.tripBalance,
        minusBalance: balance,
        remaningBalance: balance >= 0 ? 0 : -balance,
      };
      // return balance >= 0 ? balance : 0;
    },
  },
  mounted() {
    // this.$bvModal.show("modal-booking-notification");
    const firstData = sessionStorage.getItem("doorDeliveryAmount");
    const secData = sessionStorage.getItem("tripIncurrenceAmount");
    const thirdData = sessionStorage.getItem("fasTagPrice");
    const fasTagData = sessionStorage.getItem("fasTag");
    const insureTripData = sessionStorage.getItem("tripIncurrence");

    if (firstData) {
      this.doorDeliveryAmount = firstData;
    }
    if (fasTagData) {
      this.fasTag = fasTagData;
    }
    if (insureTripData) {
      this.tripIncurrence = insureTripData;
    }
    if (secData) {
      this.tripIncurrenceAmount = secData;
      this.includeActiveInsureTrip = true;
    }
    if (thirdData) {
      this.fasTagPrice = thirdData;
      this.includeActiveFastTag = true;
    }
    if (this.$route.path === "/app/sessions/bookCars") {
      // Current route matches, add the CSS rule dynamically
      this.addCssRule();
    }

    this.datePickerRef = this.$refs.datePickerSec; // Update with your actual ref name
  },

  created() {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.id = this.$route.query.id;
    this.sDate = this.$route.query.startDate;
    this.eDate = this.$route.query.endDate;
    this.startDateShow = this.$route.query.startDate;
    this.dateRange.startDate = this.sDate;
    this.dateRange.endDate = this.eDate;
    const [month, day] = this.startDateShow.split("-");
    this.startDateShow = moment(`${month}`).format("MMM DD");
    this.startDates = moment(this.sDate).format("DD MMM YYYY h:mm A");
    this.startDate = moment(`${month}`).format("MMM DD");
    this.endDateShow = this.$route.query.endDate;
    this.endDates = moment(this.eDate).format("DD MMM YYYY h:mm A");
    this.endDateShow = moment(this.endDateShow).format("MMM DD");

    const [months, days] = this.endDateShow.split("-");
    this.endDate = moment(`${months}`).format("MMM DD");
    var parsedUser;
    if (localStorage.getItem("userInfo")) {
      parsedUser = JSON.parse(localStorage.getItem("userInfo"));
    }

    if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
      this.userId = parsedUser.data.id;
      this.getAllTransaction();
      this.getProfileDetails();
    }
    this.getTotalBalance();
    // var parsedUser = JSON.parse(storedUser);
    // this.userId = parsedUser.data.id;

    if (this.id) {
      // this.calculateNumberOfDays();

      this.getAllCarData();
    }
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true;
      // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    },
    formatYear(e) {
      return String(e).substring(0, 250);
    },

    toggleDiv() {
      this.$bvModal.show("modal-payment-card");
      this.showDiv = !this.showDiv;
    },

    // openDatePickerPopup() {
    //   console.log("cilck");
    //   if (this.datePickerRef) {
    //     // Invert the current state and toggle the date picker
    //     this.datePickerRef.togglePicker(!this.open);
    //   }
    // },
    togglePickerRef() {
      // 'show' is the new state, 'event' indicates whether a new event should be raised
      if (this.datePickerRef) {
        this.datePickerRef.togglePicker(true);
        this.datePickerVisible = true;
      }
    },
    addCssRule() {
      const style = document.createElement("style");
      style.type = "text/css";
      const cssRule =
        "#modal-payment-card .modal-content {" +
        "  padding: 0 !important;" +
        "}" +
        ".slot{" +
        "display: block!important;" +
        "}" +
        ".vue-daterange-picker .dropdown-menu[data-v-267f4ee2] {" +
        "  position: absolute !important;" +
        "  top: 3em !important;" +
        "}";
      style.appendChild(document.createTextNode(cssRule));
      document.head.appendChild(style);
    },
    clickOnview() {
      this.$bvModal.show("modal-fasttag");
    },
    clickInsureTrip() {
      this.$bvModal.show("modal-insure-trip");
    },
    clickApplyButton(data) {
      data.clickApply();
      this.datePickerVisible = false;
      this.datePickerRef.togglePicker(false);
    },
    toggleDatePicker() {
      if (this.datePickerRef) {
        // this.togglePickerRef();
        const currentOpenState = this.datePickerRef.open;

        this.datePickerRef.togglePicker(!currentOpenState);
        this.datePickerVisible = !currentOpenState;
      }
    },
    applyAndClosePicker() {
      // Your logic for applying the date range

      // Close the date range picker
      this.togglePickerRef(false);
    },

    // openDiv() {
    //   console.log("Mouse over radio button");
    //   this.isOpen = true;
    // },
    openDiv(data, index) {
      switch (index) {
        case 0:
          this.hoveredText = `In case of accident just pay Rs ${this.formatPrice(
            3499
          )} and rest will be
                        taken care`;
          break;
        case 1:
          this.hoveredText = `In case of accident just pay Rs ${this.formatPrice(
            2499
          )} and rest will be
                        taken care`;
          break;
        case 2:
          this.hoveredText = `In case of accident just pay Rs ${this.formatPrice(
            1499
          )} and rest will be
                        taken care`;
          break;
      }
    },
    closeDiv() {
      this.hoveredText = "";
    },
    clickOnOkButton() {
      this.$bvModal.hide("modal-booking-notification");
      this.$router.push("/app/profiledata/profile");
    },
    clickDoorstep() {
      this.isButtonActive = true;
      this.isButtonActiveFree = false;
      this.doorDeliveryFree = "False";
      if (this.isButtonActive) {
        this.doorDelivery = "True";
        this.doorDeliveryAmount = 1000;
        sessionStorage.setItem("doorDeliveryAmount", this.doorDeliveryAmount);
        sessionStorage.removeItem(
          "isButtonActiveFree",
          this.isButtonActiveFree
        );
      }
      // this.doorDeliveryAmount=1000;
    },
    clickFree() {
      this.isButtonActiveFree = true;
      this.isButtonActive = false;
      this.doorDeliveryFree = "True";
      sessionStorage.setItem("isButtonActiveFree", this.isButtonActiveFree);
      sessionStorage.removeItem("doorDeliveryAmount");
    },
    handleFasTagChange(res) {},
    viaEmail() {
      this.showMail = true;
      this.clearModalForm();
    },

    getAllTransaction() {
      this.loader = true;

      this.$apiService
        .getCall(`bookingHistory/`)
        .then((res) => {
          let rowData = [];

          if (res.apidata.length > 0) {
            rowData = res.apidata.filter((value) => {
              if (
                value.userId == this.userId &&
                new Date(value.end_date) >= new Date()
              ) {
                return value.userId;
              }
            });
          }
          this.bookCarsInfo = rowData.map((car) => ({
            bookUserId: car.userId,
            end_date: car.end_date,
          }));

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
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
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    viaOldPassword() {
      this.showMail = false;
    },
    markerClicked() {},
    calculateNumberOfDays() {
      const startDate = new Date(this.startDates);
      const endDate = new Date(this.endDates);
      const diffDate = endDate - startDate;
      // console.log(diffDate);
      // const differenceInDays = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      // const iffHours=((diffDate/(60*60 * 1000)) % 60);
      // const differenceInMinutes = (diffDate / (1000 * 60))% 60;
      // const differenceInSeconds = (diffDate / 1000)% 60;
      const differenceInDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      this.differenceInDays = differenceInDay;
      this.differenceInHours = Math.floor((diffDate / (1000 * 60 * 60)) % 24);
      this.differenceInMinutes = Math.floor((diffDate / (1000 * 60)) % 60);
      const differenceInSeconds = Math.floor((diffDate / 1000) % 60);
      // console.log(differenceInDays);
      // console.log(differenceInHours);
      // console.log(differenceInMinutes);
      // console.log(differenceInSeconds);
      if (this.differenceInHours > 0) {
        return differenceInDay + 1;
      } else {
        return differenceInDay;
      }

      // return moment(this.endDate).diff(this.startDate, "days");
    },
    NumberOfDaysPick(startDates, endDates) {
      const startDate = new Date(startDates);
      const endDate = new Date(endDates);
      const diffDate = endDate - startDate;
      const differenceInDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      this.differenceInDays = differenceInDay;
      this.differenceInHours = Math.floor((diffDate / (1000 * 60 * 60)) % 24);
      this.differenceInMinutes = Math.floor((diffDate / (1000 * 60)) % 60);
      if (this.differenceInHours > 0) {
        return differenceInDay + 1;
      } else {
        return differenceInDay;
      }
      // return moment(endDate).diff(startDate, "days");
    },
    clickCancel() {
      this.$bvModal.hide("modal-cancellation");
      this.$bvModal.hide("modal-fasttag");
      this.$bvModal.hide("modal-insure-trip");
      this.$bvModal.hide("modal-forcarbook-info");
    },
    handleCheckBox() {
      if (this.fasTag === "True") {
        this.fasTagPrice = 0;
        sessionStorage.removeItem("fasTagPrice");
        sessionStorage.removeItem("fasTag");
        this.fasTag = "False";
      } else {
        this.fasTag = "True";
        sessionStorage.setItem("fasTag", this.fasTag);
      }
    },
    handleCheckBoxIncurrence() {
      if (this.tripIncurrence === "True") {
        this.tripIncurrenceAmount = 0;
        sessionStorage.removeItem("tripIncurrenceAmount");
        sessionStorage.removeItem("tripIncurrence");
        this.tripIncurrence = "False";
      } else {
        this.tripIncurrence = "True";
        sessionStorage.setItem("tripIncurrence", this.tripIncurrence);
      }
    },
    handleCheckDoorDelivery() {
      if (this.doorDelivery === "True") {
        this.doorDeliveryAmount = 0;
        sessionStorage.removeItem("doorDeliveryAmount");
        this.doorDelivery = "False";
      } else {
        this.doorDelivery = "True";
      }
    },
    handleStartSelection(event) {
      this.picStartdate = event;
      // console.log("Start selection event:", event);
    },
    handleFinishSelection(event) {
      this.picEnddate = event;
      // console.log("Finish selection event:", event);
    },
    updateSlider() {
      this.updateDateRange(this.sliderValue, this.sliderValue);
      this.sliderPosition = (this.sliderValue / 23) * 100;
    },
    updateSliderSec() {
      this.updateDateRange(this.sliderValue, this.sliderValue);
      this.sliderPositionSec = (this.sliderValueSec / 23) * 100;
    },
    updateDateRange(startTime, endTime) {
      const startDate = moment(
        this.picStartdate ? this.picStartdate : this.dateRange.startDate
      )
        .startOf("day")
        .add(startTime, "hours")
        .toDate();
      const endDate = moment(
        this.picEnddate ? this.picEnddate : this.dateRange.endDate
      )
        .startOf("day")
        .add(endTime, "hours")
        .toDate();
      this.dateRange = { startDate, endDate };
    },
    tripIncurrenceChange(data, index) {
      this.tripIncurrenceAmount = data;
      sessionStorage.setItem("tripIncurrenceAmount", data);
      this.openDiv(data, index);

      // this.tripIncurrenceAmount = data;

      // this.activeButton = index;
    },
    doorDeliveryChange(data, index) {
      this.doorDeliveryAmount = data;
      sessionStorage.setItem("doorDeliveryAmount", data);
    },
    fasTagChange(data) {
      this.fasTagPrice = data;
      sessionStorage.setItem("fasTagPrice", data);

      // this.fasActiveButton = index;
    },
    clickCancellation() {
      this.$bvModal.show("modal-cancellation");
    },
    // clickCancel(){
    //   this.$bvModal.hide("modal-forcarbook-info");
    // },
    async pro(order_id, amount, order) {
      const self = this;
      const url = self.$apiService.getAppendedUrl(`booking/payment/verify/`);
      var options = {
        key: order.razorpayKey, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Inter City Tours Travels and Car rentals",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            order_data: order,
          };

          const response1 = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const data1 = await response1.json();

          if (data1.message === true) {
            if (
              self.fName !== null &&
              self.lName !== null &&
              self.aadharImage !== null &&
              self.drivingLicenseImage !== null
            ) {
              self.$toaster.makeToast(
                "success",
                "Your car booked successfully"
              );
              self.$router.push("/app/myDesk/carBookingHistory");
              self.loader = false;
            } else {
              // self.$toaster.makeToast(
              //   "success",
              //   "Your Car has been reserved, To confirm your booking please update your profile"
              // );
              self.$bvModal.show("modal-booking-notification");
              // self.$router.push("/app/profiledata/profile");
              self.loader = false;
            }
          } else {
            self.$toaster.makeToast("warning", "Car booking failed");

            self.loader = false;
          }
        },
        prefill: {
          name: order.name,
          email: order.email,
          contact: order.mobile,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399CC",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", async function (response) {
        self.loader = false;
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        const data = {
          razorpay_order_id: response.error.metadata.order_id,
          razorpay_payment_id: response.error.metadata.payment_id,
          razorpay_error_code: response.error.code,
          razorpay_error_description: response.error.description,
        };
        const response1 = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        self.loader = false;
        const data1 = await response1.json();
      });
      // document.getElementById('rzp-button1').onclick = function (e) {
      rzp1.open();

      //   e.preventDefault();
      // }
    },
    async initiatePayment() {
      // const razorpayKey = this.$apiService.getRazorpayKey();
      // // const razorpayKey = "rzp_test_wQQru4jnFZS6Qb";
      // const rzp = new Razorpay({
      //   key: razorpayKey,
      // });
      // var wallet_balance = this.userBalance
      // var trip_balance = this.finalBalance.tripBalance

      // let amount = parseInt(this.finalBalance.tripPrice)+parseInt(this.securityBalance);
      //let securityPay=parseInt(this.securityBalance)==5000:0

      let amount = parseInt(this.finalBalance.tripPrice);

      // let total_walletAmount=
      // if (this.finalBalance.tripPrice > 0) {
      //   amount = this.finalBalance.tripPrice;
      // } else {
      //   amount = 0;
      // }

      // Construct the URL with query parameters
      const url = this.$apiService.getAppendedUrl(`booking/generate-order/`);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", this.userId);
      queryParams.append("carId", this.id);

      queryParams.append("start_date", this.formatSendDate());
      queryParams.append("end_date", this.formatSendDateEnd());
      queryParams.append("no_of_days", this.numberOfDays);
      queryParams.append("fast_tag", this.fasTag);
      queryParams.append("fast_tag_amount", this.fasTagPrice);
      queryParams.append("trip_insurance", this.tripIncurrence);
      queryParams.append("trip_insurance_amount", this.tripIncurrenceAmount);
      queryParams.append(
        "wallet_amount",
        this.finalBalance.wallet_amount_to_pay
      );
      queryParams.append("amount", amount);
      queryParams.append("trip_amount", this.finalBalance.tripBalance);
      queryParams.append("security_amount", this.finalBalance.securityPay);
      queryParams.append(
        "total_trip_amount",
        this.finalBalance.total_trip_amount
      );
      queryParams.append("self_pickup", this.doorDeliveryFree);
      queryParams.append("door_pickup", this.doorDelivery);
      queryParams.append("door_pickup_amount", this.doorDeliveryAmount);
      queryParams.append("bonus_amount", this.finalBalance.referalamount);
      queryParams.append("minus_amount", this.finalBalance.minusBalance);
      // const url = new URL('https://zoombacarapi.algofolks.com/payments/generate-order/');
      // url.searchParams.append('userId', this.userId);
      // url.searchParams.append('amount', amount);
      // Make a GET request with the constructed URL

      const response = await fetch(`${url}?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const order = await response.json();
      if (order.openRazorPay) {
        this.pro(order.id, order.amount, order);
        this.loader = false;
      } else {
        if (
          this.fName !== null &&
          this.lName !== null &&
          this.aadharImage !== null &&
          this.drivingLicenseImage !== null
        ) {
          this.$toaster.makeToast("success", "Your car booked successfully");
          this.$router.push("/app/myDesk/carBookingHistory");
          this.loader = false;
        } else {
          // this.$toaster.makeToast(
          //   "success",
          //   "Your car booking in pending, please complete your profile first"
          // );
          // this.$toaster.makeToast(
          //   "warning",
          //   "Please complete your profile first"
          // );
          this.$bvModal.show("modal-booking-notification");
          // this.$router.push("/app/profiledata/profile");
          this.loader = false;
        }
      }
    },
    async clickPay() {
      this.loader = true;

      localStorage.getItem("userInfo");

      var parsedUser;
      if (localStorage.getItem("userInfo")) {
        parsedUser = JSON.parse(localStorage.getItem("userInfo"));
      }

      if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
        if (this.isButtonActive || this.isButtonActiveFree) {
          sessionStorage.removeItem("doorDeliveryAmount");
          sessionStorage.removeItem("tripIncurrenceAmount");
          sessionStorage.removeItem("fasTagPrice");
          sessionStorage.removeItem("tripIncurrence");
          sessionStorage.removeItem("fasTag");
          if (this.fasTag === "True" && this.tripIncurrence === "True") {
            // Check if both fasTagPrice and tripIncurrenceAmount are greater than 0
            if (this.fasTagPrice > 0 && this.tripIncurrenceAmount > 0) {
              if (
                this.bookCarsInfo.some((car) => car.bookUserId == this.userId)
              ) {
                this.$bvModal.show("modal-forcarbook-info");
                this.loader = false;
              } else {
                this.initiatePayment();
              }
            } else {
              if (this.fasTagPrice <= 0) {
                this.$toaster.makeToast(
                  "warning",
                  "Include Active Fasttag Amount"
                );
              }
              if (this.tripIncurrenceAmount <= 0) {
                this.$toaster.makeToast(
                  "warning",
                  "Include Active Incidental Coverage Amount"
                );
              }
              this.loader = false;
            }
          } else if (this.fasTag === "True") {
            // Handle case when only fasTag is true
            if (this.fasTagPrice > 0) {
              if (
                this.bookCarsInfo.some((car) => car.bookUserId == this.userId)
              ) {
                this.$bvModal.show("modal-forcarbook-info");
                this.loader = false;
              } else {
                this.initiatePayment();
              }
            } else {
              this.$toaster.makeToast(
                "warning",
                "Include Active Fasttag Amount"
              );
              this.loader = false;
            }
          } else if (this.tripIncurrence === "True") {
            // Handle case when only tripIncurrence is true
            if (this.tripIncurrenceAmount > 0) {
              if (
                this.bookCarsInfo.some((car) => car.bookUserId == this.userId)
              ) {
                this.$bvModal.show("modal-forcarbook-info");
                this.loader = false;
              } else {
                this.initiatePayment();
              }
            } else {
              this.$toaster.makeToast(
                "warning",
                "Include Active Incidental Coverage Amount"
              );
              this.loader = false;
            }
          } else {
            if (
              this.bookCarsInfo.some((car) => car.bookUserId == this.userId)
            ) {
              // this.$toaster.makeToast("warning", "Please first ride");
              this.$bvModal.show("modal-forcarbook-info");
              this.loader = false;
            } else {
              this.initiatePayment();
            }
          }
        } else {
          this.$toaster.makeToast(
            "warning",
            "Specify self pickup or doorstep delivery preference before completing payment"
          );
          this.loader = false;
        }
        // this.initiatePayment();
        //   setTimeout(() => {
        //   window.location.reload();
        // }, 500);
        // this.$router.push("/app/myDesk/carBookingHistory");

        // this.id = parsedUser.data.id;

        // const apiUrl = `carBooking/?userId=${this.userId}&amount=${this.price}&carId=${this.id}&no_of_days=${this.numberOfDays}&start_date=${this.startDate}&end_date=${this.endDate}`;

        // window.location.href = this.$apiService.getAppendedUrl(apiUrl);
      } else {
        this.$bvModal.show("modal-signIn");
        this.loader = false;
      }
    },
    formatSendDate() {
      return moment(this.startDateSend).format("DD MMM YYYY h:mm A");
    },
    formatSendDateEnd() {
      return moment(this.endDateSend).format("DD MMM YYYY h:mm A");
    },

    getAllCarData() {
      this.loader = true;
      this.$apiService
        .getCall(`carsAPIView/?id=${this.id}`)
        .then((res) => {
          if (!res.error) {
            this.brand = res.apidata.brand;
            this.model = res.apidata.model;
            this.make = res.apidata.make;
            this.registration_month = res.apidata.registration_month;
            this.registration_year = res.apidata.registration_year;
            this.body_type = res.apidata.body_type;
            this.seating_capacity = res.apidata.seating_capacity;
            this.fuel_type = res.apidata.fuel_type;
            this.description = res.apidata.description;

            this.engine = res.apidata.engine;
            this.power = res.apidata.power;
            // this.car_features = res.apidata.car_features;

            this.car_pickup_location = res.apidata.car_pickup_location;
            this.price = res.apidata.price;
            this.transmission_type = res.apidata.transmission_type;
            this.images = JSON.parse(res.apidata.images);
            this.about_car = res.apidata.about_car;
            this.meter_reading = res.apidata.meter_reading;
            this.service_Date = moment(res.apidata.service_Date).format(
              "DD MMM YYYY h:mm A"
            );
            this.registration_number = res.apidata.registration_number;
            this.status = res.apidata.status;
            this.allowed_km_per_day = res.apidata.allowed_km_per_day;
            this.excess_KM_charges = res.apidata.excess_KM_charges;

            this.parsedCarFeatures = JSON.parse(res.apidata.car_features);
          } else {
            this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          }

          // rowData = rowData.map((res) => {
          //   res.created_at = moment(res.created_at).format(
          //     "DD MMM YYYY h:mm A"
          //   );

          //   return res;
          // });

          // rowData = res.apidata;
          // this.rows = rowData;
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);

          this.loader = false;
        });
    },

    getProfileDetails() {
      this.loader = true;
      this.$apiService
        .getCall(`account/?id=${this.userId}`)
        .then((res) => {
          if (!res.error) {
            let userData = res.apidata;
            this.fName = userData.first_name;

            this.lName = userData.last_name;

            this.aadharImage = userData.aadhar_card;

            this.drivingLicenseImage = userData.driving_lincense;

            this.loader = false;
          } else {
            this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          }

          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);

          this.loader = false;
        });
    },
    // nextSlide() {
    //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
    // },
    // prevSlide() {
    //   this.currentIndex =
    //     (this.currentIndex - 1 + this.images.length) % this.images.length;
    // },
    clearModalForm() {
      this.newpassword = "";
      this.confirmpassword = "";
      this.oldpassword = "";
    },
    dateFormate(date) {
      return moment(date).format("DD MMM YYYY h:mm A");
    },
    // dateFormate(date) {
    //   return moment(date).format("MMM DD");
    // },
  },
};
</script>
<style>
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}
.vue-daterange-picker .dropdown-menu[data-v-267f4ee2] {
  position: absolute !important;
}
.main-header {
  position: sticky;
  top: 0;
}
.slot {
  /* background-color: #aaa; */
  padding: 0.5rem;
  /* color: white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.for-border {
  border: 1px solid #9ca3af;
}

.update {
  display: flex;
  align-items: center;
}
.border-bottom {
  border-bottom: 1px solid #ac54f452 !important;
}

/* .heightForCrousal {
  height: 16.5%;
} */
.marginForLi {
  margin-left: -23px;
}

.custom-checked {
  border-color: aqua;
  color: yellow;
}
.vue-slider-process {
  background-color: #23004e;
  border-radius: 15px;
}

.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: #a855f7;
  background-color: #a855f7;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.main-div {
  gap: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.for-profile {
  width: 69%;
}

.for-wallet {
  width: 29%;
  max-height: fit-content;
}

.for-profile2 {
  width: 30%;
}

/* .carousel {
  position: relative;
  overflow: hidden;
} */

/* .carousel-inner {
  display: flex;
  transition: transform 5s;
} */

/* .carousel-item {
  flex: 0 0 auto;
  transition: transform 3s ease;
  transition-delay: 4s;
} */
.my-image {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

/* .carousel-item.active {
  transform: translateX(0);
} */

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
}

/* .carousel-control-prev {
  left: 10px;
} */
.for-ul {
  display: flex;
  flex-direction: row;
  gap: 28px;
}

.gapping {
  gap: 28px;
}
.for-style {
  border: 1px solid gray;
  margin: 0px;
  padding: 3px 10px;
  border-radius: 11px;
}

/* .carousel-control-next {
  right: 10px;
} */

/* @media (max-width: 968px) {
  .main-div {
    flex-direction: column;
  }

  .main-content-wrap {
    padding: 0 !important;
  }
  .for-profile {
    width: 100%;
  }

  .my-image {
    object-fit: contain;
    height: 140%;
    width: 100%;
  }

  .carousel-item {
    width: 100%;
    height: 110%;
  }

  .carousel-control-next {
    top: 48%;
  }
  .carousel-control-prev {
    top: 48%;
  }

  .dotShowDisplay {
    display: none;
  }
} */

.for-firstDiv {
  overflow-y: auto;
  max-height: 85vh;
  scrollbar-width: none;
}
.for-secDiv {
  overflow-y: auto;
  max-height: 85vh;
  scrollbar-width: none;
}
@media screen and (min-width: 960px) and (max-width: 1300px) {
  .btn {
    padding: 0.375rem 0.75rem !important;
    white-space: wrap;
  }
}
@media (max-width:578px){
  .for-phone{
    width: 50% !important;
  }
}
@media (max-width: 768px) {
  .carousel-control-prev-icon {
    width: 1.3rem !important;
    height: 2.5rem;
  }
  /* .daterangepicker.openscenter[data-v-1ebd09d2] {
    right: auto;
    left: 33%;
  } */
  .for-ul {
    /* text-decoration: underline; */
    gap: 0;
    display: flex;
    flex-direction: column;
  }
  .daterangepicker.show-ranges .ranges[data-v-1ebd09d2] {
    display: none;
  }
  .slot {
    position: relative;
    bottom: -15em;
    /* padding: 1em 1em; */
    left: 0;
    background-color: aliceblue;
    right: 0;
  }
  .slot .for-apply {
    width: 100%;
  }
  .btn {
    padding: 0.375rem 0.75rem !important;
    white-space: wrap;
  }
  .show-div {
    display: block !important; /* Override display property to show the div */
  }
  .for-firstDiv .for-secDiv {
    overflow: none; /* Setting overflow to none */
    max-height: 0;
  }
  .for-mobile-vue-btn {
    display: none;
  }
  .for-mobile-vue-div {
    padding-bottom: 2em;
  }

  .for-secDiv {
    display: none;
  }
  .carousel-control-next-icon {
    width: 1.3rem !important;
    height: 2.5rem;
  }
  [data-v-267f4ee2] {
    border: none !important;
    font-size: 9px;
  }
  .rowgap {
    gap: 26px;
  }
}
.for-mobile-vue {
  display: none;
}
@media (max-width: 700px) {
  #modal-payment-card .modal-content {
    padding: 0 !important;
  }
  .for-mobile-vue {
    display: block;
    position: fixed !important;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.carousel-control-prev {
  height: 5rem;
  width: 5rem;
  border: none;
  position: absolute;
  top: 50%;
  background: none;
}

.carousel-control-next {
  height: 5rem;
  width: 5rem;
  border: none;
  position: absolute;
  top: 50%;
  background: none;
}

.carousel-control-prev-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.carousel-control-next-icon {
  width: 2.5rem;
  height: 2.5rem;
}
.borderX {
  border-bottom: 1px dashed;
  border-color: #a855f7;
}
/* .btnex {
  padding: 0.1rem 1.25rem !important;
} */

.gap-betweenButton {
  gap: 4px;
}

.logged-in {
  color: green;
}

.logged-out {
  color: red;
}
</style>
