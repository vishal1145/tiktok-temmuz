<template>
  <div class="">
    <top-nav></top-nav>
    <div class="text-left mt-3 hide-on-large px-4">
      <b-button
        variant="primary"
        @click="toggleCardVisibility"
        class="btnhide hideButton"
      >
        {{ showCard ? "Hide Filter" : "Filter" }}
        <!-- <i class="fa fa-eye-slash" aria-hidden="true"></i> -->
      </b-button>
    </div>
    <b-modal
      id="modal-attachment-alert"
      size="lg"
      centered
      scrollable
    
      hide-footer
      title="Please select your travel date"
    >
      <b-row
        class="px-3 pt-2 d-flex flex-column  align-content-center align-items-center for-first-div"
      >
        <div>For confirm the booking please selected dates.</div>

        <div class="align-self-center">
          <date-range-picker
            ref="picker"
            :singleDatePicker="false"
            v-model="dateRange"
            :min-date="minDate"
            @start-selection="handleStartSelection"
            @finish-selection="handleFinishSelection"
            :showWeekNumbers="false"
          >
            <template #input="picker">
              <div class="pb-4">
                <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                <!-- {{ formatDate(picker.startDate) }} -
                {{ formatDate(picker.endDate) }} -->
                {{ picker.startDate | date }} -
                {{ picker.endDate | date }}
              </div>
            </template>

            <div
              slot="footer"
              slot-scope="data"
              class="slot d-flex flex-column"
            >
              <div class="d-flex w-100 my-2">
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
              <div class="d-flex w-100 mt-4">
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

              <!-- <div>
                <b class="text-black">Start Date - End Date</b>
                {{ data.rangeText }}
              </div> -->
              <div class="my-2 w-100">
                <a
                  id="btns"
                  @click="clickApplyAndGetCar(data)"
                  v-if="!data.in_selection"
                  class="btn btn-primary bg-primary text-white w-100"
                  >Check availability
                </a>
              </div>
            </div>
          </date-range-picker>
        </div>
      </b-row>
      <b-row class="for-btn-div bg-gray-200 for-sec-div">
        <b-col md="12">
          <div class="d-flex flex-column">
            <div class="d-flex w-100 my-2">
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
            <div class="d-flex w-100 mt-4">
              <div class="text-dark text-12 pb-2 w-25">End time</div>
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
            <button
              @click="activateClickApplyAndGetCar()"
              class="btn btn-primary"
            >
              Check availability
            </button>
          </div>
        </b-col>
      </b-row>

      <!-- <div class="d-flex justify-content-end px-3">
        <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
        <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
        <b-button
          v-if="!updateloader"
          variant="primary ripple"
          class="mb-2"
          @click="clickGetCar()"
          >Get Car</b-button
        >
      </div> -->
      <!-- <b-row class="px-3 py-2">
        <b-col md="12">
          <date-range-picker
                      ref="endpicker"
                      :time-picker="true"
                      :time-picker24-hour="false"
                      :singleDatePicker="true"
                      v-model="dateRange"
                      :min-date="minDate"
                    >
                      <template #input="picker">
                        <div class="pb-4">
                          <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                          {{ picker.endDate | datePopupEnd }} 
                        </div>
                      </template>
                    </date-range-picker>
        </b-col>
      </b-row> -->
    </b-modal>
    <b-modal
      id="modal-attachment-carAvailables"
      size="md"
      hide-footer
      hide-header
    >
      <div class="row p-3">
        <div class="col-md-12">
          <ul>
            <li>
              This car isn't available now, consider booking it after
              {{ this.isAvailable }}
              or explore other options to find the right fit. Choose a different
              date for car availability.
            </li>
          </ul>
        </div>
        <div class="col-md-12">
          <b-button
            @click="clickCancel()"
            variant="primary"
            class="col-md-12 mb-3"
          >
            OK, GOT IT!
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
          <b-button @click="clickCancel()" variant="primary" class="col-md-12">
            OK
          </b-button>
        </div>
      </div>
    </b-modal>
    <!-- <breadcumb :page="'Products'" :folder="'Ecomerce'" /> -->
    <div class="px-4 py-3">
      <b-row>
        <b-col
          md="3"
          class="marginForlaap position-sticky gap-between paddingTop height87"
          :class="{ 'height-auto': showCard, 'height-0': !showCard }"
          style="overflow-y: auto; scrollbar-width: none"
        >
          <div class="">
            <b-card v-show="showCard">
              <b-form-group class="hidexx">
                <!-- <div class="text-center">
                <b-button block variant="primary mb-30">
                  Filter Data
                  <b-badge
                  variant="warning"
                  class="float-right pr-2 pl-2 text-11"
                  >{{ getAddToCarts.length }}</b-badge
                >
                </b-button>
              </div> -->
                <!-- <div class="text-center">
              <b-button block variant="primary mb-30" @click="redirectCheckout">
                View Cart
                <b-badge
                  variant="warning"
                  class="float-right pr-2 pl-2 text-11"
                  >{{ getAddToCarts.length }}</b-badge
                >
              </b-button>
            </div> -->
                <!-- <label>
                <h5 class="font-weight-600">Price</h5>
              </label>
              <b-form-radio
                name="some-radios"
                @change="ascendingOrderCartPage()"
                >Low to High</b-form-radio
              >
              <b-form-radio
                name="some-radios"
                @change="descendingOrderCartPage()"
                >High to Low</b-form-radio
              > -->

                <div class="textColour pb-3">
                  <div
                    class="font-weight-bold pb-40 d-flex justify-content-between"
                  >
                    Price
                    <b-button
                      variant="primary ripple"
                      class="btn-outline-primary btnClear"
                      @click="clickClear()"
                      :class="{ active: true }"
                      >Clear All</b-button
                    >
                  </div>

                  <div class="px-2">
                    <vue-slider
                      v-model="value_2"
                      :min="1000"
                      :max="100000"
                      :interval="1000"
                    ></vue-slider>
                  </div>

                  <div class="d-flex flex-row justify-content-between px-2">
                    <div>Minimum</div>
                    <div>Maximum</div>
                  </div>
                </div>
                <label>
                  <h5 class="font-weight-600 textColour">Choose seat</h5>
                </label>
                <!-- <b-form-checkbox
                v-model="selectedSeatingCapacities"
                class="textColour"
                value="all"
                name="seatingCapacity"
                @change="filterBySeatingCapacity(null)"
                >All</b-form-checkbox
              >
              <b-form-checkbox
                v-model="selectedSeatingCapacities"
                class="textColour"
                value="6"
                name="seatingCapacity"
                @change="filterBySeatingCapacity(6)"
                >6 Seater</b-form-checkbox
              >
              <b-form-checkbox
                v-model="selectedSeatingCapacities"
                value="4"
                class="textColour"
                name="seatingCapacity"
                @change="filterBySeatingCapacity(4)"
                >4 Seater</b-form-checkbox
              > -->

                <div class="d-flex flex-row gap-between flex-wrap">
                  <!-- Button for selecting all -->
                  <b-button
                    v-for="(seatingCapacity, index) in seatingCapacities"
                    :key="index"
                    variant="outline-primary"
                    @click="selectButton(seatingCapacity, index)"
                    :class="{
                      'btnChip btn-outline-primary2': true,
                      'bg-primary':
                        selectedSeatingCapacity.includes(seatingCapacity),
                      'text-white':
                        selectedSeatingCapacity.includes(seatingCapacity),
                      active: isActive === index,
                    }"
                    class="btnChip btn-outline-primary2"
                  >
                    {{ seatingCapacity }} Seater
                  </b-button>
                </div>

                <label>
                  <h5 class="font-weight-600 mt-3 textColour">Colors</h5>
                </label>
                <div class="d-flex flex-row gap-between flex-wrap">
                  <!-- Button for selecting all -->
                  <!-- <div
                    v-for="(color, index) in colorCode"
                    :key="index"
                    variant="outline-primary"
                    @click="selectColor(color, index)"
                    :class="{
                      active: isActiveBtn === index,
                      'bg-danger': getColorClass(color) === 'bg-danger',
                      'bg-warning': getColorClass(color) === 'bg-warning',
                      'bg-success': getColorClass(color) === 'bg-success',
                      'bg-info': getColorClass(color) === 'bg-info',
                      'bg-dark': getColorClass(color) === 'bg-dark',
                    }"
                    class="for-btn-color ul-cursor--pointer d-flex justify-content-center align-items-center"
                  >
                    <i
                      v-if="selectedColors.includes(color)"
                      class="fa fa-check text-white"
                      aria-hidden="true"
                    ></i> 
                  </div> -->
                  <div
                 
                  v-for="(color, index) in colorCode"
                  :key="index"
                  :style="{ backgroundColor: color.value }"
                  class="for-btn-color border ul-cursor--pointer d-flex justify-content-center align-items-center"
                  @click="selectColor(color.value, index)"
                >
                  <i
                  v-if="selectedColors.includes(color.value)"
                    class="fa fa-check text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                </div>

                <label>
                  <h5 class="font-weight-600 mt-3 textColour">Fuel Type</h5>
                </label>
                <!-- <b-form-radio name="engineOil" @change="filterByEngineOil(null)"
                >All</b-form-radio
              > -->
                <div>
                  <b-form-checkbox
                    v-for="(fuelType, index) in [...fuelTypes]"
                    :key="index"
                    v-model="selectedFuelTypes"
                    :value="fuelType"
                    @change="filterByEngineOil"
                    >{{ fuelType }}</b-form-checkbox
                  >
                </div>

                <!-- <label>
                <h5 class="font-weight-600">Brand</h5>
              </label>
              <b-form-radio
                name="some-radios"
                @change="ascendingOrderCartPage()"
                >All brand</b-form-radio
              > -->

                <label>
                  <h5 class="font-weight-600 mt-3 textColour">Body Type</h5>
                </label>
                <div>
                  <b-form-checkbox
                    v-for="(bodyType, index) in [...bodyTypes]"
                    :key="index"
                    class="textColour"
                    v-model="selectedBodyType"
                    :value="bodyType"
                    @change="handleBodyTypeChange"
                    >{{ bodyType }}</b-form-checkbox
                  >
                </div>

                <label>
                  <h5 class="font-weight-600 mt-3 textColour">
                    Models + brands
                  </h5>
                </label>
                <div class="mb-2">
                  <b-form-input
                    v-model="searchModel"
                    type="text"
                    placeholder="Search"
                  ></b-form-input>
                </div>
                <div>
                  <!-- <b-form-checkbox v-on:change="onModalSelect"
                  v-for="(bodyType, index) in [...modelTypes]"
                  :key="index"
                  class="textColour"
                  v-model="selectedModelType"
                  :value="bodyType.value"
                  @change="clickModelTypes"
                  >{{ bodyType.value }}</b-form-checkbox
                > -->
                  <div
                    class="d-flex justify-content-between"
                    v-for="(bodyType, index) in sortedProducts.allModelData"
                    :key="index"
                  >
                    <b-form-checkbox
                      v-on:change="onModalSelect"
                      class="textColour custom-control-label2"
                      v-model="selectedModelType"
                      :value="bodyType.value"
                      @change="clickModelTypes(bodyType.value)"
                      ><div class="d-flex">
                        {{ bodyType.value }}
                        <p class="m-0 p-0">
                          ({{ getLength(bodyType, index) }})
                        </p>
                      </div>

                      <div>
                        <b-form-checkbox
                          v-for="(brand, brandIndex) in bodyType.brands"
                          :key="brandIndex"
                          v-if="
                            checkboxStates[index] ||
                            (brand.value
                              .toLowerCase()
                              .includes(searchModel.toLowerCase()) &&
                              searchModel &&
                              searchModel.length > 0)
                          "
                          v-model="selectedBrandType"
                          :value="brand.value"
                          @change="clickBrandType"
                        >
                          {{ brand.value }} ({{ getSubLength(brand) }})
                        </b-form-checkbox>
                      </div>
                    </b-form-checkbox>
                    <div
                      @click="toggleCheckboxes(index)"
                      class="ul-cursor--pointer text-gray-500"
                    >
                      <i :class="iconClass(index)" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <label>
                  <h5 class="font-weight-600 mt-3 textColour">Make Years</h5>
                </label>
                <div>
                  <b-form-checkbox
                    v-for="(bodyType, index) in [...makeYear]"
                    :key="index"
                    class="textColour"
                    v-model="selectedMakeYear"
                    :value="bodyType"
                    @change="clickMakeYear"
                    >{{ bodyType }}</b-form-checkbox
                  >
                </div>
                <label>
                  <h5 class="font-weight-600 mt-3 textColour">Transmission</h5>
                </label>
                <!-- <b-form-radio name="some-radios" @change="clickAutomatic(null)"
                >All transmissionType</b-form-radio
              > -->
                <!-- <div>
                <b-form-checkbox
                  v-for="(bodyType, index) in ['All', ...transmissionType]"
                  :key="index"
                  class="textColour"
                  v-model="selectedTransmissionType"
                  :value="bodyType"
                  @change="clickAutomatic"
                  >{{ bodyType }}</b-form-checkbox
                >
              </div> -->
                <div class="d-flex flex-row flex-wrap gap-between">
                  <!-- Button for selecting all -->

                  <!-- Button for selecting 6-seater -->
                  <b-button
                    v-for="(value, index) in ['All', ...transmissionType]"
                    :key="index"
                    variant="outline-primary"
                    @click="clickAutomatic(value, index)"
                    :class="{
                      'btnChip btn-outline-primary2': true,
                      'bg-primary': transmissionValue.includes(value),
                      'text-white': transmissionValue.includes(value),
                      active: allActiveButton === index,
                    }"
                    class="btnChip btn-outline-primb-12mary2"
                  >
                    {{ value }}
                  </b-button>
                  <!-- Add more hard-coded buttons as needed -->
                </div>
              </b-form-group>
            </b-card>
          </div>
        </b-col>
        <b-col md="9" class="offset">
          <b-row class="gapping6 paddingTop mb-two pb-2">
            <b-col
              md="6"
              class="d-flex text-center align-content-center justify-content-center align-content-cente"
            >
              <!-- for-time-div -->
              <!-- <div class="d-flex flex-row flex-xl-row gappingSmall">
                <div class="for-time position-relative" style="cursor: pointer">
                  <!-- <div
                    class="d-flex flex-row justify-content-between rounded-lg-sm align-center align-items-center smallScreen borderRadius"
                  >
                    <date-range-picker
                      ref="picker"
                      :time-picker="true"
                      :time-picker24-hour="false"
                      :singleDatePicker="false"
                      v-model="dateRange"
                      :min-date="minDate"
                    >
                      <template #input="picker">
                        <div class="pb-4">
                          <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                          {{ picker.startDate | date }} -
                          {{ picker.endDate | date }}
                        </div>
                      </template>
                    </date-range-picker>
                  </div> -->
              <!-- </div>
                <b-button
                  @click="clickGetCar()"
                  class="borderRadius classForborder getCAr position-relative"
                  variant="success"
                  style="right: 3px; height: 33.4px"
                  >Get Car</b-button
                >
              </div> -->
              <div
                class="btn btn-secondary miniHeight text-left h-auto"
                @click="clickOpenAlert()"
              >
                <div class="d-flex flex-row flex-wrap">
                  <div>
                    <span class="font-weight-bold">From : </span>
                    <span class="font-italic text-12"
                      >{{ this.formateStartDate() }}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                  <!-- <i class="fa px-3 fa-long-arrow-right" aria-hidden="true"></i> -->
                  <div>
                    <span class="font-weight-bold">To : </span>
                    <span class="font-italic text-12"
                      >{{ this.formateEndDate() }}
                    </span>
                  </div>

                  <div
                    class="align-self-end"
                    style="position: absolute; right: 2em"
                  >
                    <i
                      @click="clickOpenAlert()"
                      class="fa fa-calendar align-self-center text-gray-500 pl-4 ul-cursor--pointer"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <!-- <div class="miniHeights d-flex">
                <i
                  @click="clickOpenAlert()"
                  class="fa align-self-center fa-calendar ml-2 text-gray-500 ul-cursor--pointer"
                  aria-hidden="true"
                ></i>
              </div> -->
            </b-col>

            <b-col md="3">
              <b-form-input
                v-model="search"
                type="text"
                class="for-hight"
                placeholder="Search by brand name"
              ></b-form-input>
            </b-col>
            <b-col md="3">
              <b-form-group class="pattingInSelect" label-for="input-1">
                <b-form-select
                  v-model="selectedOption"
                  required
                  placeholder="sort by price"
                  @change="handleSelectionChange"
                  ><b-form-select-option disabled value=""
                    >Sort by price</b-form-select-option
                  >
                  <b-form-select-option value="lowToHigh"
                    >Low to High</b-form-select-option
                  >
                  <b-form-select-option value="highToLow"
                    >High to Low</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              md="12"
              style="
                height: 79vh;
                overflow-y: auto;
                scrollbar-width: none;
                position: sticky;
              "
            >
              <!-- <ul v-for="(product, key) in getAddToCarts" :key="key">
            <li><span>{{ product }}</span></li>
          </ul> -->
              <section
                class="product-cart"
                v-if="sortedProducts.allCarData.length > 0"
              >
                <div
                  ref="rowView"
                  class="row"
                  :class="{
                    'list-grid': isListView,
                    'list-horizontal': !isListView,
                  }"
                >
                  <!-- loop LIST Shop -->
                  <div
                    :class="{
                      'col-md-4': isListView,
                      'col-md-12': !isListView,
                    }"
                    class="list-item m-0"
                    v-for="(item, carouselIndex) in sortedProducts.allCarData"
                    :key="carouselIndex"
                  >
                    <div
                      class="card o-hidden mb-4 d-flex position-relative ul-cursor--pointer"
                      :class="{
                        'flex-column': isListView,
                        'flex-row': !isListView,
                      }"
                    >
                      <div class="list-thumb d-flex">
                        <div
                          :id="'carouselExampleIndicators-' + carouselIndex"
                          class="carousel slide w-100 h-100"
                          data-ride="carousel"
                        >
                          <ol class="carousel-indicators">
                            <li
                              v-for="(image, index) in item.images"
                              :key="index"
                              :data-target="
                                '#carouselExampleIndicators-' + carouselIndex
                              "
                              :data-slide-to="index"
                              :class="{ active: currentIndex === index }"
                            ></li>
                          </ol>
                          <div
                            class="carousel-inner"
                            @click="viewProduct(item.id, item.available)"
                          >
                            <div
                              class="carousel-item"
                              :class="{ active: currentIndex === index }"
                              v-for="(image, index) in item.images"
                              :key="index"
                            >
                              <img
                                class="d-block w-100 img-fluid rounded-top"
                                :src="image"
                                :alt="'Slide ' + index"
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
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
                            class="carousel-control-next"
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
                      <div @click="viewProduct(item.id, item.available)">
                        <div
                          class="d-flex flex-row justify-content-between font-weight-bold px-3 pt-3 pb-2 textColour"
                        >
                          <div>
                            {{
                              (
                                " " +
                                item.brand +
                                " " +
                                item.model +
                                " . . ."
                              ).slice(0, 26)
                            }}
                          </div>
                          <!-- <div><i class="fa fa-heart-o" aria-hidden="true"></i></div> -->
                        </div>
                        <div>
                          <ul
                            class="d-flex flex-row mb-0 pb-2 textColourSecond flex-wrap"
                          >
                            <!-- <li class="marginForLi">
                              {{ item.meter_reading }} Km
                            </li> -->
                            <li class="marginForLi">{{ item.fuel_type }}</li>
                            <li class="ml-4">{{ item.transmission_type }}</li>
                          </ul>
                        </div>
                        <div
                          class="d-flex flex-row justify-content-between px-3 textColour pb-2 flex-wrap"
                        >
                          <div class="font-weight-bold text-16">
                            <i class="fa fa-car" aria-hidden="true"></i>
                            {{ item.seating_capacity }} Seater
                          </div>
                          <div class="pt-1">₹ {{ formatPrice(item.price) }}/Day</div>
                        </div>
                        <div
                          v-if="item.available !== 'null'"
                          class="d-flex flex-row justify-content-between px-3 textColour bg-gray-100 py-1 position-absolute"
                          style="width: 100%; top: 100px"
                        >
                          <div class="font-weight-bold text-12">
                            Car is available after {{ item.available }}
                          </div>
                          <!-- <div class="pt-1">₹ {{ item.price }}/Day's</div> -->
                        </div>

                        <div class="d-flex flex-column px-3">
                          <div
                            class="textColourSecond"
                            style="font-size: 0.713rem"
                          >
                            Allowed Km/day - {{ item.allowed_km_per_day }} Kms
                          </div>
                          <div
                            class="textColourSecond pb-3"
                            style="font-size: 0.713rem"
                          >
                            Excess Km Charge - ₹ {{ formatPrice(item.excess_KM_charges) }}
                          </div>
                        </div>
                        <div class="hr px-3 m-0 py-1"></div>
                        <div class="d-flex flex-row px-3">
                          <div>
                            <i
                              class="fa fa-location-arrow"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div
                            class="text-gray-600 pb-3 pl-2"
                            style="font-size: 0.713rem"
                          >
                            Zoomba Car Hub, {{ location }}
                          </div>
                        </div>
                      </div>
                      <div class="position-absolute">
                        <span
                          class="badge badge-success"
                          :style="{
                            marginTop: '20px',
                            marginLeft: '10px',
                            backgroundColor:
                              item.available === 'null' ? 'green' : 'red',
                            color:
                              item.available === 'null' ? 'white' : 'white',
                          }"
                        >
                          {{
                            item.available === "null"
                              ? "Available"
                              : " Not available"
                          }}
                        </span>
                        <span v-if="item.car_label!==null" class="badge badge-dark ml-2">{{ item.car_label }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- </transition-group>
            -->
                </div>
              </section>
              <section v-if="sortedProducts.allCarData.length === 0 && !loader">
                <div
                  class="w-100 d-flex flex-column justify-content-center align-content-center align-items-center h-100 py-12"
                >
                  <p class="w-100 text-center pt-48">
                    There is no car available according to your criteria
                  </p>

                  <!-- <div class="for-empty">
                    <i
                      class="fa fa-frown-o fa-5x text-warning"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>Opps ! Car is not available</div> -->
                </div>
              </section>
            </b-col>
          </b-row>

          <!-- <vue-instantsearch> </vue-instantsearch> -->
        </b-col>

        <!-- <b-col md="3">
        <b-form-select
          v-model="featured"
          :options="featuredOptions"
        ></b-form-select>
      </b-col> -->
      </b-row>
      <b-row> </b-row>
    </div>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import StarRating from "vue-star-rating";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import message from "../../../message";
import moment from "moment";
import TopNav from "../../../containers/layouts/largeSidebar/TopNav.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
// import 'vue-slider-component/theme/default.css'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Search-Car",
  },
  components: {
    DateRangePicker,
    StarRating,
    TopNav,
    VueSlider,
  },
  data() {
    return {
      // bodyTypes: [
      //   "All",
      //   "Coupe",
      //   "Convertible",
      //   "Jeep",
      //   "Minivan",
      //   "Hatchback",
      //   "Pickup",
      //   "Saloon",
      //   "Wagon",
      //   "Sports car",
      //   "Van",
      //   "SUV",
      //   "	Sedan",
      //   "4x4",
      // ],
      selectedColors: [],
      isActiveBtn: null,
      colorCode: [],
      colorClassMap: {
        Red: "bg-danger",
        Yellow: "bg-warning",
        Green: "bg-success",
        Blue: "bg-info",
        // Add more mappings if needed
      },

      picStartdate: null,
      picEnddate: null,
      sliderValue: 6,
      sliderPosition: 6,
      sliderValueSec: 8,
      sliderPositionSec: 18,

      bookCarsInfo: [],
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
      },
      minDate: new Date(),
      booking_status: false,
      showCheckboxes: false,
      checkboxStates: [],
      location: "",
      brandType: [],
      isAvailable: "",
      bodyTypes: [],
      fuelTypes: [],
      modelTypes: [],
      makeYear: [],
      selectedFuelTypes: [],
      brandValue: null,
      selectedModelType: [],
      selectedBrandType: [],
      selectedMakeYear: [],
      transmissionType: [],
      selectedBodyType: [],
      selectedOption: "",
      currentIndex: 0,
      // startDate: "",
      // endDate: "",
      rating: 4,
      carData: [],
      // selectedSeatingCapacity: null,
      engineOilValue: null,
      selectedSeatingCapacity: [],
      isActive: null,
      allActiveButton: null,
      selectedBodyvalue: null,
      transmissionValue: [],
      modelValue: null,
      makeYearValue: null,
      allMakeYear: [],
      search: "",
      searchModel: "",
      isProduct: true,
      filterBrand: "",
      priceValue: 500,
      selectedFilter: "",
      selectPriceRange: "",
      priceRange: 1,
      value: 1,
      items: "",
      referral: "",
      startDateShow: "",
      endDateShow: "",
      paginatedItems: "",
      currentPage: 1,
      perPage: 9,
      // totalRows: '',
      isFirst: false,
      loader: false,
      // button
      ascending: null,
      isListView: true,
      // isGridVIew:false,
      selected: [], // Must be an array reference!
      // options: [
      //   { text: 'Orange', value: 'orange' },
      //   { text: 'Apple', value: 'apple' },
      //   { text: 'Pineapple', value: 'pineapple' },
      //   { text: 'Grape', value: 'grape' }
      // ],
      featured: null,
      featuredOptions: [
        { value: null, text: "Featured" },
        { value: "a", text: "Highest Price" },
        { value: "b", text: "Lowest Price" },
      ],

      // selectedSeatingCapacities: [],
      value_2: [1000, 60000],
      seatingCapacities: ["All", "4", "5", "6", "7"],
      selectedIndices: [],
      selectedIndexType: -1,
      // selectedIndex: -1,
      // selectedSeatingCapacity: null,
      showCard: true,

      // brandsCount: this.$store.getters.brandsCount,
      // brands: this.$store.state.brands
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
  created() {
    if (this.$route.query.ref) {
      this.referral = this.$route.query.ref;
    } else {
      this.referral = "";
    }

    this.minDate.setDate(this.minDate.getDate() - 1);
    this.fetchBodyTypes();
    // this.startDateShow = this.$route.query.startDate;

    // this.endDateShow = this.$route.query.endDate;
    this.location = "Chennai";
    // this.startDate = moment(this.startDateShow).format("DD MMM YYYY h:mm A");
    // this.endDate = moment(this.endDateShow).format("DD MMM YYYY h:mm A");

    this.getAllCarData("", "");
    var storedUser = localStorage.getItem("userInfo");

    var parsedUser = JSON.parse(storedUser);

    if (parsedUser && parsedUser.data && parsedUser.data.id !== null) {
      this.userId = parsedUser.data.id;
      this.booking_status = parsedUser.data.booking_status;
      this.getAllTransaction();
    }
  },
  computed: {
    formattedTime() {
      return moment()
        .startOf("day")
        .add(this.sliderValue, "hours")
        .format("HH:mm");
        // .format("h:mm A");
    },
    formattedTimeSec() {
      return moment()
        .startOf("day")
        .add(this.sliderValue, "hours")
        .format("HH:mm");
        // .format("h:mm A");
    },

    sortedProducts() {
      const searchTerm = this.search.toLowerCase();
      const searchModel = this.searchModel.toLowerCase();
      const minPrice = this.value_2[0];
      const maxPrice = this.value_2[1];
      const allCarData = this.carData.filter((car) => {
        const brandMatch =
          car.brand && car.brand.toLowerCase().includes(searchTerm);
        // const seatingCapacityMatch =
        //   this.selectedSeatingCapacity === null ||
        //   car.seating_capacity === this.selectedSeatingCapacity;
        const seatingCapacityMatch =
          this.selectedSeatingCapacity.length === 0 ||
          this.selectedSeatingCapacity.includes(car.seating_capacity);
        // const engineOilMatch =
        //   this.engineOilValue === null ||
        //   car.fuel_type === this.engineOilValue;
        const engineOilMatch =
          this.engineOilValue === null ||
          this.engineOilValue.includes(car.fuel_type);

        const bodyTypeMatch =
          this.selectedBodyvalue === null ||
          this.selectedBodyvalue.includes(car.body_type);
        // const transmissionTypeMatch =
        //   car.transmission_type === this.transmissionValue ||
        //   this.transmissionValue === null;
        const transmissionTypeMatch =
          this.transmissionValue.length === 0 ||
          this.transmissionValue.includes(car.transmission_type);
        const modelTypeMatch =
          this.modelValue === null || this.modelValue.includes(car.model);

        // const modelTypeMatch =
        //   this.modelValue === null || car.model === this.modelValue;
        const brandTypeMatch =
          this.brandValue === null || this.brandValue.includes(car.brand);

        const priceMatch = car.price >= minPrice && car.price <= maxPrice;
        const makeYearMatch =
          this.makeYearValue === null || this.makeYearValue.includes(car.make);
          const colorCodeMatch= this.selectedColors.length === 0 || this.selectedColors.includes(car.color_code)
        return (
          brandMatch &&
          seatingCapacityMatch &&
          engineOilMatch &&
          bodyTypeMatch &&
          transmissionTypeMatch &&
          modelTypeMatch &&
          brandTypeMatch &&
          priceMatch &&
          makeYearMatch &&
          colorCodeMatch
        );
      });
      // .sort((a, b) => {
      //   if (this.ascending) {
      //     return a.price - b.price;
      //   } else {
      //     return b.price - a.price;
      //   }
      // });

      const allModelData = this.modelTypes.filter(
        (item) =>
          //  item.value && item.value.toLowerCase().includes(searchModel)
          (item.value && item.value.toLowerCase().includes(searchModel)) ||
          (item.brands &&
            item.brands.some(
              (brand) =>
                brand.value && brand.value.toLowerCase().includes(searchModel)
            ))
      );
      // const filteredByValue = {};
      // this.modelTypes.forEach((item) => {
      //   const key = item.value;
      //   const value = data.filter((i) => i.value === item.value);
      //   filteredByValue[key] = value;
      // });

      return {
        allCarData: allCarData,
        allModelData: allModelData,
      };
    },
  },
  mounted() {
    this.addCssRule();
    this.$bvModal.show("modal-attachment-alert");
    this.checkDeviceType();
    window.addEventListener("resize", this.checkDeviceType);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDeviceType);
  },

  // computed: {

  //   ...mapGetters([
  //     "getItems",
  //     "brandsCount",
  //     "getBrandsItem",
  //     "getFilterProducts",
  //     "getCategoryItem",
  //     "getAddToCarts",
  //   ]),
  //   totalRows() {
  //     return this.getFilterProducts.length;
  //   },
  //   filterItems() {
  //     return this.getFilterProducts;
  //   },
  //   // searchProducts(){
  //   //   return this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase()))
  //   // }
  //   filterProducts() {
  //     // return this.getItems.filter((filterSearch) => {
  //     //     return filterSearch.toLowerCase().match(this.search.toLowerCase());
  //     // });

  //     return this.getFilterProducts.filter((item) =>
  //       item.title.toLowerCase().match(this.search.toLowerCase())
  //     );
  //   },
  // },
  // created: function() {
  //   this.getAllCarData();
  //   // this.items = this.getItems;
  // },
  methods: {
    // ...mapActions([
    //   "addCart",
    //   "addBrandToFilter",
    //   "addCategoryItem",
    //   "ascendingOrderCart",
    //   "descendingOrderCart",
    // ]),
    // formatDate(date) {
    //   return date ? moment(date).format("DD MMM  h:mm A") : "";
    // },
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
    getColorClass(color) {
      // Return corresponding CSS class for the color code
      return this.colorClassMap[color];
    },
    selectColor(color, i) {
      const index = this.selectedColors.indexOf(color);
      if (index === -1) {
        this.selectedColors.push(color); // Add selection if not already present
      } else {
        this.selectedColors.splice(index, 1); // Remove selection if already present
      }
    
      // this.isActiveBtn=index;c
    },
    updateSlider() {
      this.updateDateRange(this.sliderValue, this.sliderValue);
      this.sliderPosition = (this.sliderValue / 23) * 100;
    },
    updateSliderSec() {
      // this.updateDateRange(this.sliderValue, this.sliderValueSec);
      this.updateDateRange(this.sliderValue, this.sliderValue);
      this.sliderPositionSec = (this.sliderValueSec / 23) * 100;
    },
    handleStartSelection(event) {
      this.picStartdate = event;
      // console.log("Start selection event:", event);
    },
    handleFinishSelection(event) {
      this.picEnddate = event;
      // console.log("Finish selection event:", event);
    },

    getLength(bodyType) {
      try {
        const allCar = this.carData || [];

        var filteres = allCar.filter((cr) => cr.model == bodyType.value);

        return filteres.length;
      } catch (e) {
        console.log("err");
        return "";
      }
      //sortedProducts.allCarData.length
    },
    getSubLength(brand) {
      try {
        const allCar = this.carData || [];

        var filteres = allCar.filter((cr) => cr.brand == brand.value);
        return filteres.length;
      } catch (e) {
        console.log("err");
        return "";
      }
      //sortedProducts.allCarData.length
    },
    onModalSelect(option) {
      var mid = (this.modelTypes || []).find((key) => key.value == option).id;
      this.brandType = (this.allBrandType || []).filter(
        (key) => key.master_id == mid
      );
    },
    activateClickApplyAndGetCar() {
      const fileInput = document.getElementById("btns");
      fileInput.click();
    },
    clickApplyAndGetCar(data) {
      if (typeof data.clickApply === "function") {
        data.clickApply();
        this.clickGetCar(); // Call your custom clickGetCar method
      } else {
        console.error("clickApply is not a function");
      }
      // this.clickGetCar();
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
    addCssRule() {
      const style = document.createElement("style");
      style.type = "text/css";
      const cssRule =
      "@media only screen and (max-width: 700px) {" +
      "  #modal-attachment-alert .slot {" +
      "    display: none !important;" +
      "  }" +
      "} " +
        "#modal-attachment-alert .daterangepicker {" +
        " position: relative !important;" +
        "}" +
        ".vue-daterange-picker .dropdown-menu[data-v-267f4ee2] {" +
        "  position: relative !important;" +
        "  top: 0 !important;" +
        "}";
      style.appendChild(document.createTextNode(cssRule));
      document.head.appendChild(style);
    },
    iconClass(index) {
      return this.checkboxStates[index]
        ? "fa fa-2x fa-angle-up"
        : "fa fa-2x fa-angle-down";
    },
    toggleCheckboxes(index) {
      this.$set(this.checkboxStates, index, !this.checkboxStates[index]); // Toggle checkbox state for the clicked item
    },
    clickCancle() {
      this.$bvModal.hide("modal-attachment-alert");
    },
    clickOpenAlert() {
      this.$bvModal.show("modal-attachment-alert");
    },
    clickGetCar() {
      this.$bvModal.hide("modal-attachment-alert");

      // endDateDefault.setHours(endDateDefault.getHours() + 5);
      const isDateSelected =
        new Date(this.dateRange.endDate) > new Date(this.dateRange.startDate);
      // this.dateRange.endDate.getDate() !== this.dateRange.startDate.getDate();

      // const isDateSelected =this.dateRange.endDate !== null;
      if (isDateSelected) {
        this.getAllCarData(this.formateStartDate(), this.formateEndDate());
        // this.$router.push(
        //   "/app/sessions/searchCar?startDate=" +
        //     this.dateRange.startDate.toLocaleString() +
        //     "&endDate=" +
        //     this.dateRange.endDate.toLocaleString() +
        //     "&location=" +
        //     "Chennai"
        // );
      } else {
        this.$bvModal.show("modal-attachment-alert");
      }
    },
    formateStartDate() {
      return moment(this.dateRange.startDate).format("DD MMM YYYY h:mm A");
    },
    formateEndDate() {
      return moment(this.dateRange.endDate).format("DD MMM YYYY h:mm A");
    },

    getAllCarData(startDate, endDate) {
      this.loader = true;
      this.$apiService
        .getCall(`getCarSearch/?startDate=${startDate}&endDate=${endDate}`)
        .then((res) => {
          if (!res.error) {
            this.carData = res.apidata;
            // this.bodyTypes = this.carData.map((res) => res.body_type);
            // this.items =res.apidata;
            this.carData.forEach((value) => {
              // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
              value.images = value.images
                ? (value.images = JSON.parse(value.images))
                : (value.images = "");
            });

            // this.carData = res.apidata;

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
    setRating: function (rating) {
      this.rating = rating;
    },
    handleSelectionChange(e) {
      if (this.selectedOption === "lowToHigh") {
        this.ascendingOrderCartPage();
      } else {
        this.descendingOrderCartPage();
      }
    },
    handleBodyTypeChange() {
      const selectedTypes = this.selectedBodyType.filter(
        (type) => type !== "All"
      );
      if (selectedTypes.length === 0) {
        this.selectedBodyvalue = null;
      } else {
        this.selectedBodyvalue = selectedTypes;
      }
      // if (this.selectedBodyType === "All") {
      //   this.selectedBodyvalue = null;
      // } else {
      //   this.selectedBodyvalue = this.selectedBodyType;
      // }

      // You can perform any action based on the selected body type here
    },
    async fetchBodyTypes() {
      try {
        const response = await this.$apiService.getCall("bodyType");

        let allBodyTypes = (response.apidata || []).filter(
          (key) => key.type == "body type"
        );
        this.bodyTypes = allBodyTypes.map((res) => res.value);

        let allFuelType = (response.apidata || []).filter(
          (key) => key.type == "fuel type"
        );
        this.fuelTypes = allFuelType.map((res) => res.value);
        this.modelTypes = (response.apidata || []).filter(
          (key) => key.type == "model"
        );
        this.colorCode = (response.apidata || []).filter(
          (key) => key.type == "color"
        );
       
        // this.labelData = (response.apidata || []).filter(
        //   (key) => key.type == "label"
        // );
        // this.modelTypes = [
        //   { value: "All" },
        //   ...response.apidata.filter((item) => item.type === "model"),
        //   // .map((item) => ({ value: item.value }))
        // ];

        // this.modelTypes = allModelTypes.map((res) => res.value);

        const allMakeYear = (response.apidata || []).filter(
          (key) => key.type == "make year"
        );
        allMakeYear.sort((a, b) => b.value - a.value);
        this.makeYear = allMakeYear.slice(0, 6).map((res) => res.value);
        //   const currentYear = new Date().getFullYear();
        // for (let i = 0; i < 5; i++) {
        //   this.makeYear.push(currentYear - i);
        // }
        this.resMonth = (response.apidata || []).filter(
          (key) => key.type == "registration_month"
        );
        this.resYear = (response.apidata || []).filter(
          (key) => key.type == "registration_year"
        );

        this.allBrandType = (response.apidata || []).filter(
          (key) => key.type == "brand"
        );
        this.carFeaturesOptions = (response.apidata || []).filter(
          (key) => key.type == "car features"
        );
        let allTransmissionType = (response.apidata || []).filter(
          (key) => key.type == "transmission type"
        );
        this.transmissionType = allTransmissionType.map((res) => res.value);
        for (var m = 0; m < this.modelTypes.length; m++) {
          var brands = response.apidata.filter(
            (d) => d.type == "brand" && d.master_id == this.modelTypes[m].id
          );

          this.modelTypes[m].brands = brands;
        }
      } catch (error) {
        console.error("Error fetching body types:", error);
      }
    },

    addCartPage(item) {
      this.addCart(item);
      this.$bvToast.toast(`${item.qty} item added to the cart successfully`, {
        title: "Click View Cart",
        variant: "primary",
        solid: true,
        autoHideDelay: 700,
      });
      // this.$swal({

      //   toast: true,
      //   position: "top-end",
      //   showConfirmButton: false,
      //   timer: 1000,
      //   type: "success",
      //   title: `${ item.qty } item added to the cart successfully`
      // });

      // this.$router.push("/app/apps/checkout");
    },
    viewProduct(carId, available) {
      if (available !== "null") {
        this.isAvailable = available;
        this.$bvModal.show("modal-attachment-carAvailables");
        // setTimeout(() => {
        //   this.$router.push(
        //     "/app/sessions/bookCars?id=" +
        //       carId +
        //       "&startDate=" +
        //       this.startDateShow +
        //       "&endDate=" +
        //       this.endDateShow
        //   );
        // }, 10000);
      } else {
        const isDateSelected =
          this.dateRange.endDate.getDate() !==
          this.dateRange.startDate.getDate();
        // const isDateSelected =this.dateRange.endDate !== null;
        // if(!booking_status){
        //   this.$toaster.makeToast("success", "Your car booked successfully");
        //   this.$toaster.makeToast("warning", "Please first ride");
        // }

        if (this.bookCarsInfo.some((car) => car.bookUserId == this.userId)) {
          // this.$toaster.makeToast("warning", "Please first ride");
          this.$bvModal.show("modal-forcarbook-info");
        } else {
          if (isDateSelected) {
            this.$router.push(
              "/app/sessions/bookCars?id=" +
                carId +
                "&startDate=" +
                this.formateStartDate() +
                "&endDate=" +
                this.formateEndDate() +
                "&ref=" +
                this.referral
            );
          } else {
            this.$bvModal.show("modal-attachment-alert");
          }
        }
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    clickCancel() {
      this.$bvModal.hide("modal-attachment-carAvailables");
      this.$bvModal.hide("modal-forcarbook-info");
    },
    clickClear() {
      this.checkboxStates = [];
      this.search = "";
      this.searchModel = "";
      (this.value_2 = [1000, 60000]), (this.selectedSeatingCapacity = []);
      this.isActive = null;
      this.allActiveButton = null;
      this.selectedFuelTypes = [];
      this.selectedBodyType = [];
      this.selectedModelType = [];
      this.selectedMakeYear = [];
      this.selectedBodyType = [];
      this.selectedBrandType = [];
      this.engineOilValue = null;
      this.selectedBodyvalue = null;
      this.transmissionValue = [];
      this.modelValue = null;
      this.brandValue = null;
      this.makeYearValue = null;
      // this.ascending = true;
    },

    addBrandToFilterPage(checkedArray) {
      checkedArray = this.$refs.checkFilter;
      checkedArray = checkedArray
        .filter((element) => element.checked)
        .map((element) => element.value);

      this.addBrandToFilter(checkedArray);
      this.paginatePerPage();
    },
    paginatePerPage() {
      this.paginate(this.perPage, 0);
    },
    addCategoryItemPage(data) {
      this.addCategoryItem(data);
      this.paginatePerPage();
    },
    ascendingOrderCartPage() {
      // this.sortedProducts.allCarData.sort((a, b) => a.price - b.price);
      this.carData.sort((a, b) => a.price - b.price);
      // this.carData.sort((a, b) => a.price - b.price);
      // this.ascending = true;
      // this.ascendingOrderCart();
      // this.paginatePerPage();
    },
    descendingOrderCartPage() {
      // this.sortedProducts.allCarData.sort((a, b) => b.price - a.price);
      this.carData.sort((a, b) => b.price - a.price);

      // this.carData.sort((a, b) => b.price - a.price);
      // this.ascending = false;
      // this.descendingOrderCart();
      // this.paginatePerPage();
    },
    selectButton(res, i) {
      // if (res === "All") {
      //   this.selectedSeatingCapacity = null;
      // } else {
      //   this.selectedSeatingCapacity = res;
      // }

      if (res === "All") {
        this.selectedSeatingCapacity = [];
        this.isActive = i;

        // Clear all selections
      } else {
        this.isActive = null;
        const index = this.selectedSeatingCapacity.indexOf(res);
        if (index === -1) {
          this.selectedSeatingCapacity.push(res); // Add selection if not already present
        } else {
          this.selectedSeatingCapacity.splice(index, 1); // Remove selection if already present
        }
      }
    },

    filterBySeatingCapacity(res) {
      this.selectedSeatingCapacity = res;

      // Perform filtering based on selected seating capacities
    },
    filterByEngineOil() {
      // Filter out 'All' if it's selected
      const selectedTypes = this.selectedFuelTypes.filter(
        (type) => type !== "All"
      );
      if (selectedTypes.length === 0) {
        this.engineOilValue = null;
      } else {
        this.engineOilValue = selectedTypes;
      }
    },

    // filterByEngineOil(engineOil) {
    //   if (engineOil === "All") {
    //     this.engineOilValue = null;
    //   } else {
    //     this.engineOilValue = engineOil;
    //   }
    // },
    // clickAutomatic(res) {
    //   if (res === "All") {
    //     this.transmissionValue = null;
    //   } else {
    //     this.transmissionValue = res;
    //   }
    // },
    clickAutomatic(res, i) {
      if (res === "All") {
        this.transmissionValue = [];
        this.allActiveButton = i;
        // Clear all selections
      } else {
        this.allActiveButton = null;
        const index = this.transmissionValue.indexOf(res);
        if (index === -1) {
          this.transmissionValue.push(res); // Add selection if not already present
        } else {
          this.transmissionValue.splice(index, 1); // Remove selection if already present
        }
      }
    },
    isTransmissionSelected(res) {
      return this.transmissionValue.includes(res);
    },
    // clickModelTypes(res) {
    //   const selectedTypes = this.selectedModelType.filter(
    //     (type) => type !== "All"
    //   );
    //   if (selectedTypes.length === 0) {
    //     this.modelValue = null;
    //   } else {
    //     this.modelValue = selectedTypes;
    //   }
    //   // if (res === "All") {
    //   //   this.modelValue = null;
    //   // } else {
    //   //   this.modelValue = res;
    //   // }
    // },
    clickModelTypes(selectedType) {
      const selectedTypes = this.selectedModelType.filter(
        (type) => type !== "All"
      );
      // const selectedTypes = this.selectedModelType.filter(
      //   (type) => type !== selectedType
      // );
      if (selectedTypes.length === 0) {
        this.modelValue = null;
      } else {
        this.modelValue = selectedTypes;
      }
      // if (selectedType === "All") {
      //   this.modelValue = null;
      //   this.selectedBrandType = [];
      //   // window.location.reload();
      //   this.clickBrandType();
      // } else {
      //   this.modelValue = selectedType;
      //   this.selectedBrandType = [];
      //   this.clickBrandType();
      // }
      // this.modelValue = selectedType=== "All"? null : selectedType;
      // this.modelValue = selectedType;
    },

    clickBrandType(selectedType) {
      const selectedTypes = this.selectedBrandType.filter(
        (type) => type !== selectedType
      );
      if (selectedTypes.length === 0) {
        this.brandValue = null;
      } else {
        this.brandValue = selectedTypes;
      }
    },
    clickMakeYear(res) {
      const selectedTypes = this.selectedMakeYear.filter(
        (type) => type !== "All"
      );
      if (selectedTypes.length === 0) {
        this.makeYearValue = null;
      } else {
        this.makeYearValue = selectedTypes;
      }
    },

    redirectCheckout() {
      this.$router.push("/app/apps/checkout");
    },
    onRadioButtonChange(data) {
      if (data == "asc") {
        // console.log("Working", this.ascendingOrderCart());
      }
    },

    viewCart() {
      this.$router.push("./product-detail");
    },
    // button
    listView() {
      this.isListView = true;
    },
    gridView() {
      this.isListView = false;
    },

    // end-button
    paginate(pageSize, pageNumber) {
      let itemsToParse = this.filterProducts;
      this.paginatedItems = itemsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },

    checkDeviceType() {
      // Detect device type based on screen width
      const isMobile = window.innerWidth < 768; // Adjust this value based on your breakpoint for mobile devices

      // Set showCard based on device type
      this.showCard = !isMobile;
    },
    toggleCardVisibility() {
      this.showCard = !this.showCard;
    },
    checkScreenSize() {
      const isLargeScreen = window.innerWidth >= 992; // Adjust this value based on your breakpoints
      const hideButtonElement = document.querySelector(".hide-on-large");
      if (hideButtonElement) {
        hideButtonElement.style.display = isLargeScreen ? "none" : "block";
      }
    },
    onStartDateSelected() {
      this.dateRange.startDate = moment(this.startDate).format("YYYY-MM-DD");
    },
    onEndDateSelected(date) {
      this.dateRange.endDate = moment(this.endDate).format("YYYY-MM-DD");
    },
    // selectButton(index) {
    //   this.selectedIndex = index;
    // },
  },
  // mounted() {
  //   this.paginate(this.perPage, 0);
  // },
};
</script>
<style>
.icon-size {
  font-size: 30px;
}
/* .vue-daterange-picker .dropdown-menu {
  position: relative;
  top: 0;
} */
/* .modal-content {
  min-height: 10vh;
  overflow-y: scroll;
} */
.card-img-top {
  height: 250px;
  object-fit: cover;
}
/* #dropdown-1__BV_toggle_ {
  padding-left: 0;
} */
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
.for-btn-color {
  width: 30px;
  height: 30px;
  border-radius: 50%;

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

#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}

.main-header {
  position: sticky;
  top: 0;
}
.for-empty {
  animation-name: example;
  animation-duration: 4s;
}
@keyframes example {
  from {
    color: red;
  }
  to {
    transform: rotateZ(180deg);
    color: red;
  }
}
.card-margin {
  margin-top: 8px;
}
.carousel-control-prev {
  height: 5rem;
  width: 5rem;
  border: none;
  position: absolute;
  top: 25%;
  background: none;
}

.carousel-control-next {
  height: 5rem;
  width: 5rem;
  border: none;
  position: absolute;
  top: 25%;
  background: none;
}
.marginForLi {
  margin-left: -23px;
  list-style: none;
}
.textColour {
  color: #23004e;
}
.textColourSecond {
  color: #23004ecd;
}
.for-time-div {
  width: 100%;
  height: 2.7em;
  display: flex;
  border: 1px solid gray;
  /* border: 1px black; */
  border-radius: 3px;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* align-items: baseline; */
  padding: 0 5px;
}
.gappingSmall {
  height: 3em;
}
.borderRadius {
  border-radius: 16px;
}
/* .for-time {
  border: 0.5px solid gray;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 2px 16px;
  background-color: #fff;
} */
.miniHeight {
  width: 100%;
}
.for-time {
  /* border: 0.5px solid gray; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  background-color: #fff;
}

@media only screen and (min-width: 1800px) {
  .list-grid .list-item .list-thumb img {
    width: 100%;
    height: 331px;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

@media only screen and (min-width: 700px) {
  .hideButton {
    display: none;
  }
}

/* @media only screen and (max-width: 700px) {
  
} */
@media only screen and (min-width: 1000px) {
  .hidexx {
    display: inline !important;
  }

  .paddingTop {
    padding-top: 0.78rem !important;
  }
  .height87 {
    height: 87vh !important;
  }
}

@media only screen and (max-width: 700px) {
  .gapping6 {
    gap: 9px;
  }
  .for-first-div{
    height: 70vh;
    overflow-y: scroll;

  }
  /* .for-sec-div{
    height: 20vh;

  } */
  .for-btn-div {
    display: block !important;
    position: fixed;
    bottom: 0;
    height: 20vh;
    left: 0;
    right: 0;
    z-index: 9999 !important;
    padding: 1em 1.5em;
    /* background-color: aliceblue; */
  }
  .slot {
    display: none !important;
  }
  /* .slot {
    display: none;
    position: relative;
    bottom: -15.5rem;
    
    padding: 0.5rem;
  } */
  .daterangepicker.show-ranges .ranges[data-v-1ebd09d2] {
    display: none;
  }
  .daterangepicker .drp-calendar.right {
    padding: 0px !important;
    margin-top: 224px;
  }

  #modal-attachment-alert .modal-header .daterangepicker {
    width: min-content;
  }
  
  #modal-attachment-alert .button.close {
    position: absolute;
    top:0.5em !important;
    right: 0.5em !important;
    font-size:2em !important;
  }
 

  /* .daterangepicker[data-v-267f4ee2] {
    width: 19em !important;
  } */
  .modal-dialog-centered {
    align-items: stretch;
    /* min-height: calc(100% - (0.5rem * 2)); */
  }
  .modal-dialog {
    margin: 0;
  }
  #modal-attachment-alert .modal-content {
    height: 100vh;
    /* scroll-behavior: smooth; */
    /* overflow: scroll; */
  }
  [data-v-267f4ee2] {
    font-size: 12px !important;
  }
}

@media screen and (max-width: 980px) {
  /* .smallScreen {
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  } */
  .gappingSmall {
    height: 3em;
  }
  .for-hight {
    height: 3em;
  }
  .borderRadius {
    border-radius: 16px;
  }
  /* .for-time {
    border-radius: 16px;

    background-color: #fff;
  } */
  /* .gappingSmall {
    gap: 12px;
  } */

  /* [data-v-267f4ee2] {
    border: none !important;
    font-size: 9px;
  } */
}
/* [data-v-267f4ee2] {
    border: none !important;
    font-size: 9px;
    text-align: center;
  } */

@media (min-width: 992px) {
  .hide-on-large {
    display: none !important;
  }
  .marginForlaap {
    margin-bottom: 15px !important;
  }
  .paddingForGet {
    padding-right: 3rem;
  }
}

@media (min-width: 1194px) {
  .miniHeight {
    width: 100%;
    height: calc(1.9695rem + 2px) !important;
    padding: 0.375rem 0.75rem;
    font-size: 0.813rem;
    line-height: 1.5;
  }
  .miniHeights {
    width: fit-content;
    height: calc(1.9695rem + 2px) !important;
  }
}

@media (max-width: 792px) {
  .pattingInSelect {
    padding-top: 3px;
  }
  .mb-two {
    margin-bottom: 1rem !important;
    /* padding-right: 3.1000000000000014rem; */
  }
  .classForborder {
  }

  [data-v-267f4ee2] {
    font-size: 9px !important;
  }
  /* .modal-content {
    min-height: 10vh;
    scroll-behavior: smooth;
    overflow: scroll;
  } */
}

#__BVID__39 {
  border: 2px solid #80808017;
  color: #23004e;
}
#__BVID__37 {
  border: 2px solid #80808017;
  color: #23004e;
}
#__BVID__40 {
  padding-bottom: 11px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  /* display: inline-block; */
  width: 16px;
  height: 20px;
  /* background: transparent no-repeat center center; */
  background-size: 100% 100%;
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

.vue-slider-dot-tooltip {
  position: absolute;
  visibility: visible;
}
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
.calendar-time {
  display: none;
}
.for-btn-div {
  display: none;
}
.btnChip {
  padding: 0.1rem 0.6rem;
}
.selected {
  display: none;
  background-color: #a855f7 !important; /* Change to your desired color */
  color: white !important;
  border-color: #a855f7 !important;
}
.slot {
  /* background-color: #aaa; */
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* .slider-container {
  position: absolute;
  width: 100%;
} */

.slider-value {
  min-height: 20px;
  width: 6.5em;
  background-color: #a855f7;
  position: relative;
  top: 0;
  transform: translateX(-50%);
}
.slider input[type="range"] {
  width: 100vh;
}

.btn2 {
  padding: 2px;
  background-color: transparent;
}

.btn-outline-primary2 {
  color: #0000009f;
  background-color: transparent;
  background-image: none;
  border-color: #000000ad;
}

.custom-control-label2::before {
  /* border-radius: 0.25rem; */
  width: 21px !important;
  height: 21px !important;
  display: none;
}

.dropdown-toggle::after {
  position: absolute;
  top: calc(50% - 4px);
  right: -4px !important;
}
/* .daterangepicker {
  position: relative;
} */

.height-auto {
  height: 75vh;
}
.height-0 {
  height: 0vh; /* Set the height to 0 when the card is not showing */
}

.btnhide {
  padding: 0.1rem 1.25rem !important
    ;
}

.text-dangero {
  color: #a855f7 !important;
}
.bg-dangero {
  background-color: #a855f7 !important;
}

.bg-warningo {
  background-color: #a855f70d !important;
}

.getCAr {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: green;

  border: none;
  font-size: 12px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
#profilelogo {
  max-width: fit-content;
}
.btnClear {
  padding: 0.1rem 0.75rem;
}

.dropdown-toggle::after {
  position: absolute;
  top: calc(50% - 2px);
  right: 6px !important;
}

.dropdown-menu {
  left: -30px;
}

.btn-secondary,
.btn-outline-secondary {
  border-color: #1f293761 !important;
}
</style>
