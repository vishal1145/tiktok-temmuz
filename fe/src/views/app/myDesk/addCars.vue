<template>
  <div>
    <!-- <breadcumb :page="'Company'" :folder="isEdit ? 'Edit Company' : 'Add Company'" /> -->
    <b-col md="12 mb-30">
      <b-card :title="isEdit ? 'Edit Cars' : 'Add Cars'">
        <hr class="my-2" />
        <b-form>
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Brand"
              label-for="input-1"
            >
              <b-form-select
                v-model="model"
                required
                v-on:change="onModalSelect"
              >
                <b-form-select-option
                  v-for="option in modelTypes"
                  :key="option.id"
                  :value="option.value"
                >
                  <div v-if="option.type == 'model'">{{ option.value }}</div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Model"
              label-for="input-1"
            >
              <b-form-select
                v-if="brandType.length > 0"
                v-model="brand"
                required
              >
                <b-form-select-option
                  v-for="option in brandType"
                  :key="option.id"
                  :value="option.value"
                >
                  <div v-if="option.type == 'brand'">
                    {{ option.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
              <b-form-select v-else v-model="brand">
                <b-form-select-option
                  v-for="(option, index) in filteredBrandType"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Car label"
              label-for="input-label"
            >
              <b-form-select v-model="label" required>
                <b-form-select-option
                  v-for="(value, index) in labelData"
                  :key="index"
                  :value="value.value"
                >
                  <div v-if="value.type == 'label'">
                    {{ value.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <!-- <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Car label"
              label-for="input-label"
            >
              <b-form-input
                v-model="label"
                required
                placeholder="Add label"
              ></b-form-input>
            </b-form-group>
          </b-row> -->

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Make Year"
              label-for="input-2"
            >
              <b-form-select v-model="make" required>
                <b-form-select-option
                  v-for="option in makeYear"
                  :key="option.id"
                  :value="option.value"
                >
                  <div v-if="option.type == 'make year'">
                    {{ option.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-2 mb-3"
              label="Resistration Month"
              label-for="input-2"
            >
              <b-form-select v-model="registration_month" required>
                <b-form-select-option
                  v-for="option in resMonth"
                  :key="option.id"
                  :value="option.value"
                >
                  <div v-if="option.type == 'registration_month'">
                    {{ option.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
            <b-form-group
              class="col-md-2 mb-3"
              label="Resistration Year"
              label-for="input-2"
            >
              <b-form-select v-model="registration_year" required>
                <b-form-select-option
                  v-for="option in resYear"
                  :key="option.id"
                  :value="option.value"
                >
                  <div v-if="option.type == 'registration_year'">
                    {{ option.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Registration number"
              label-for="input-2"
            >
              <b-form-input
                v-model="registration_number"
                type="text"
                required
                @input="validateInput"
                placeholder="Enter registration number"
              ></b-form-input>
              <span v-if="!isAlphanumeric" class="text-danger"
                >Please enter only alphanumeric characters</span
              >
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Body Type"
              label-for="input-1"
            >
              <b-form-select v-model="body_type" required>
                <b-form-select-option
                  v-for="option in bodyTypes"
                  :key="option.id"
                  :value="option.value"
                >
                  <!-- {{ option.type }} -->
                  <div v-if="option.type == 'body type'">
                    {{ option.value }}
                  </div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Seating Capacity"
              label-for="seating-capacity"
            >
              <b-form-select
                v-model="seating_capacity"
                :options="seatingCapacityOptions"
                required
              >
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Fuel Type"
              label-for="input-1"
            >
              <b-form-select v-model="fuel_type" required>
                <b-form-select-option
                  v-for="option in fuelTypes"
                  :key="option.id"
                  :value="option.value"
                >
                  <div>{{ option.value }}</div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Power (cc)"
              label-for="input-2"
            >
              <b-form-input
                v-model="power"
                required
                placeholder="Power"
              ></b-form-input>
            </b-form-group>
          </b-row>

          <!-- <b-row>
            <b-form-group class="col-md-4 mb-3" label="Transmission type" label-for="input-2">
              <b-form-input v-model="transmission_type" required placeholder="Transmission type"></b-form-input>
            </b-form-group>
          </b-row> -->

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Transmission type"
              label-for="input-1"
            >
              <b-form-select v-model="transmission_type" required>
                <b-form-select-option
                  v-for="option in transmissionType"
                  :key="option.id"
                  :value="option.value"
                >
                  <div>{{ option.value }}</div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Car Features"
              label-for="input-2"
            >
              <div v-for="(feature, index) in carFeaturesOptions" :key="index">
                <b-form-checkbox
                  v-model="car_features[feature.value]"
                  :value="true"
                >
                  {{ feature.value }}
                </b-form-checkbox>
              </div>
            </b-form-group>
          </b-row>

          <!-- <b-row>
            <b-form-group class="col-md-4 mb-3" label="Car Pickup Location" label-for="input-3">
              <b-form-select v-model="car_pickup_location" required>
                <b-form-select-option v-for="location in pickupLocations" :key="location" :value="location">
                  {{ location }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row> -->

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Car Images"
              label-for="input-images"
            >
              <b-form-file
                v-model="images"
                @input="handleImageSelection"
                placeholder="Choose files or drop them here"
                drop-placeholder="Drop files here..."
                multiple
              ></b-form-file>
            </b-form-group>
          </b-row>

          <div class="display_row">
            <div v-for="(image, index) in imageURLs" :key="index" class="mb-3">
              <div @click="removeImage(index)" class="remove-icon">&times;</div>
              <img :src="image" alt="Selected Image" class="img-fluid" />
            </div>
          </div>
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Select colors"
              label-for="input-colors"
            >
              <div class="d-flex w-100 for-color">
                <div
                  v-for="(color, index) in colors"
                  :key="index"
                  :style="{ backgroundColor: color.value }"
                  class="color-div ul-cursor--pointer border d-flex justify-content-center align-items-center"
                  @click="selectColor(color.value, index)"
                >
                  <i
                    v-if="selectedColors == color.value"
                    class="fa fa-check text-white"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <!-- <b-form-select v-model="color" required>
                
                <b-form-select-option
                  v-for="(value, index) in colors"
                  :key="index"
                  :value="value"
                >
                <div v-if="value.type == 'color'">
                    {{ value.value }}
                  </div>
                </b-form-select-option>
              </b-form-select> -->
            </b-form-group>
          </b-row>
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Price"
              label-for="input-2"
            >
              <b-form-input
                v-model="price"
                type="number"
                required
                placeholder="Price"
              ></b-form-input>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Meter Reading"
              label-for="input-2"
            >
              <b-form-input
                v-model="meter_reading"
                type="number"
                required
                placeholder="Meter Reading"
              ></b-form-input>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Last Service Date"
              label-for="service-date-picker"
            >
              <b-form-datepicker
                v-model="service_Date"
                id="service-date-picker"
                required
                placeholder="Last Service Date"
                :max="currentDate"
              ></b-form-datepicker>
            </b-form-group>
          </b-row>

          <!-- <b-row>
            <b-form-group class="col-md-4 mb-3" label="Description" label-for="input-2">
              <b-form-textarea v-model="description" required placeholder="description"
                style="height: 100px;"></b-form-textarea>
            </b-form-group>
          </b-row> -->
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Allowed Km/Day"
              label-for="input-2"
            >
              <b-form-input
                v-model="allowed_day"
                type="number"
                required
                placeholder="Km"
              ></b-form-input>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Excess Km Charges"
              label-for="input-2"
            >
              <b-form-input
                v-model="excess_charges"
                type="number"
                required
                placeholder="Enter Amount"
              ></b-form-input>
            </b-form-group>
          </b-row>

          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="About the car"
              label-for="input-2"
            >
              <b-form-textarea
                v-model="about_car"
                required
                placeholder="About the car"
                style="height: 100px"
              ></b-form-textarea>
            </b-form-group>
          </b-row>

          <b-col md="12" class="padding-none">
            <b-button
              class="mt-3"
              type="button"
              variant="primary"
              @click="saveData()"
              >Submit</b-button
            >
          </b-col>
        </b-form>
      </b-card>
    </b-col>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedColors: null,
      colors: [],
      labelData: [],
      currentDate: new Date().toISOString().split("T")[0],
      brandType: [],
      images: [],
      imageURLs: [],
      registration_number: "",
      brand: null,
      isAlphanumeric: true,
      carFeatures: "",
      carFeaturesOptions: [],
      filteredBrandType: [],
      car_features: {},
      errorMessage: null,
      model: null,
      seating_capacity: "",
      seatingCapacityOptions: [4, 5, 6, 7, 8],
      agreement_policy: "",
      cancellation_policy: "",
      about_car: "",
      apiId: null,
      transmission_type: null,
      color: null,
      isEdit: false,
      companyId: "",
      loader: false,
      body_type: null,
      fuel_type: null,
      bodyTypes: [],
      make: null,
      label: null,
      registration_month: null,
      registration_year: null,
      description: "",
      price: "",
      meter_reading: "",
      allowed_day: "",
      excess_charges: "",
      service_Date: null,
    };
  },

  mounted() {
    this.fetchBodyTypes();
  },

  // watch: {
  //   images: {
  //     handler: 'updateImageURLs',
  //     deep: true,
  //   },
  // },
  created() {
    this.companyId = this.$route.query.id;
    // if (localStorage.getItem("filteredBrandType")) {
    //   this.filteredBrandType = JSON.parse(
    //     localStorage.getItem("filteredBrandType")
    //   );
    // }

    if (this.companyId) {
      this.isEdit = true;
      this.getCarDetails();
    }
  },
  methods: {
    onModalSelect(option) {
      var mid = (this.modelTypes || []).find((key) => key.value == option).id;
      this.brandType = (this.allBrandType || []).filter(
        (key) => key.master_id == mid
      );
      // localStorage.setItem("filteredBrandType", JSON.stringify(this.brandType));
    },
    selectColor(color, i) {
      this.selectedColors = color;
      this.color = color;

      // console.log(this.selectedColors)
    },
    async handleImageSelection() {
      // Use Promise.all to asynchronously get image URLs
      // const newImageURLs = await Promise.all(this.images.map(async (image) => {
      //   return await this.getImageURL(image);
      // }));
      // this.images = [];

      for (var i = 0; i < (this.images || []).length; i++) {
        var url = await this.uploadImage(this.images[i]);

        this.imageURLs.push(url);
      }
    },
    validateInput() {
      const hasLetter = /[a-zA-Z]/.test(this.registration_number);
      const hasNumber = /[0-9]/.test(this.registration_number);
      this.isAlphanumeric = hasLetter && hasNumber;
    },
    async getImageURL(image) {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        if (image) {
          reader.readAsDataURL(image);
        }
      });
    },
    removeImage(index) {
      this.imageURLs.splice(index, 1);
    },
    async fetchBodyTypes() {
      try {
        const response = await this.$apiService.getCall("bodyType");

        this.bodyTypes = (response.apidata || []).filter(
          (key) => key.type == "body type"
        );
        this.fuelTypes = (response.apidata || []).filter(
          (key) => key.type == "fuel type"
        );
        this.modelTypes = (response.apidata || []).filter(
          (key) => key.type == "model"
        );

        this.makeYear = (response.apidata || []).filter(
          (key) => key.type == "make year"
        );
        this.colors = (response.apidata || []).filter(
          (key) => key.type == "color"
        );
        this.labelData = (response.apidata || []).filter(
          (key) => key.type == "label"
        );

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
        this.transmissionType = (response.apidata || []).filter(
          (key) => key.type == "transmission type"
        );
      } catch (error) {
        console.error("Error fetching body types:", error);
      }
    },
    async saveData() {
      if (
        !this.make ||
        !this.model ||
        !this.body_type ||
        !this.fuel_type ||
        !this.power ||
        !this.seating_capacity
      ) {
        this.$toaster.makeToast(
          "warning",
          "Please fill in all the required fields"
        );
        setTimeout(() => (this.errorMessage = ""), 2000);
        return;
      }

      this.loader = false;

      if (this.isEdit) {
        this.updateCarDetails();
      } else {
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            model: this.model,
            make: this.make,
            car_label: this.label,
            seating_capacity: this.seating_capacity,
            registration_number: this.registration_number,
            body_type: this.body_type,
            brand: this.brand,
            registration_month: this.registration_month,
            registration_year: this.registration_year,
            fuel_type: this.fuel_type,
            transmission_type: this.transmission_type,
            color_code: this.color,
            power: this.power,
            car_features: JSON.stringify(this.car_features),
            // car_pickup_location: this.car_pickup_location,
            images: JSON.stringify(this.imageURLs),
            description: this.description,
            price: this.price,
            meter_reading: this.meter_reading,
            allowed_km_per_day: this.allowed_day,
            excess_KM_charges: this.excess_charges,
            service_Date: this.service_Date,
            about_car: this.about_car,
            agreement_policy: this.agreement_policy,
            cancellation_policy: this.cancellation_policy,
            // Include all other fields from your form
          };

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall(
            "carsAPIView/",
            requestData
          );

          this.loader = true;

          if (res.error) {
            this.$toaster.makeToast("warning", "Data already exists");
            // this.clearForm(); // Uncomment this line if you have a clearForm method
          } else {
            this.$toaster.makeToast(
              "success",
              "Car details added successfully"
            );
            this.$router.push("cars");
          }
        } catch (error) {
          this.loader = false;
          console.error(error);
        }
      }
    },
    async uploadImages() {
      let prs = this.images.map((image) => this.uploadImage(image));
      // Use Promise.all to asynchronously upload images and get URLs
      return Promise.all(prs);
    },

    async uploadImage(image) {
      return new Promise(async (resolve, reject) => {
        try {
          const formData = new FormData();
          formData.append("picture", image);

          const response = await this.$apiService.postFileCall(
            "uploadimage/",
            formData
          );

          if (response.apidata && response.apidata.path) {
            resolve(response.apidata.path);
          } else {
            reject("Image upload failed");
          }
        } catch (error) {
          reject(error);
        }
      });
    },
    async getCarDetails() {
      try {
        this.loader = true;
        let response = await this.$apiService.getCall(
          `carsAPIView/?id=${this.companyId}`
        );
        this.model = response.apidata.model;
        this.make = response.apidata.make;
        this.label = response.apidata.car_label;
        this.seating_capacity = response.apidata.seating_capacity;
        (this.registration_number = response.apidata.registration_number),
          (this.body_type = response.apidata.body_type);
        this.brand = response.apidata.brand;
        this.registration_month = response.apidata.registration_month;
        this.registration_year = response.apidata.registration_year;
        this.fuel_type = response.apidata.fuel_type;
        this.transmission_type = response.apidata.transmission_type;
        this.color = response.apidata.color_code;
        this.power = response.apidata.power;
        this.filteredBrandType = [response.apidata.brand];
        
        this.car_features = JSON.parse(response.apidata.car_features);
        // this.car_pickup_location = response.apidata.car_pickup_location;
        if (
          response.apidata.images &&
          typeof response.apidata.images === "string"
        ) {
          // Parse the stringified JSON array and extract the image URLs
          this.imageURLs = JSON.parse(response.apidata.images);
        } else {
          console.error("Images data is not in the expected format");

          // Optionally, handle this case by setting a default value for imageURLs or displaying a message to the user
        }
        this.description = response.apidata.description;
        (this.price = response.apidata.price),
          (this.meter_reading = response.apidata.meter_reading),
          (this.allowed_day = response.apidata.allowed_km_per_day),
          (this.excess_charges = response.apidata.excess_KM_charges),
          (this.service_Date = response.apidata.service_Date);
        this.about_car = response.apidata.about_car;
        this.agreement_policy = response.apidata.agreement_policy;
        this.cancellation_policy = response.apidata.cancellation_policy;
        // this.textareaValue = response.apidata.company_Id;
        this.loader = false;
      } catch (error) {
        this.loader = false;
        console.log(error);
      }
    },
    async updateCarDetails() {
      this.loader = false;
      let updateObj = {
        model: this.model,
        make: this.make,
        car_label: this.label,
        seating_capacity: this.seating_capacity,
        registration_number: this.registration_number,
        body_type: this.body_type,
        brand: this.brand,
        registration_month: this.registration_month,
        registration_year: this.registration_year,
        fuel_type: this.fuel_type,
        transmission_type: this.transmission_type,
        color_code: this.color,
        power: this.power,
        car_features: JSON.stringify(this.car_features),
        // car_pickup_location: this.car_pickup_location,
        description: this.description,
        price: this.price,
        meter_reading: this.meter_reading,
        service_Date: this.service_Date,
        about_car: this.about_car,
        allowed_km_per_day: this.allowed_day,
        excess_KM_charges: this.excess_charges,
        agreement_policy: this.agreement_policy,
        cancellation_policy: this.cancellation_policy,
      };

      // if (this.images.length > 0) {
      //   const newImageUrls = await this.uploadImages();
      //   const allImageUrls = this.imageURLs.concat(newImageUrls);
      //   console.log("imageUrls", allImageUrls)
      //   updateObj.images = JSON.stringify(allImageUrls);
      // } else {
      // No new images uploaded, use existing image URLs
      updateObj.images = JSON.stringify(this.imageURLs);
      //}

      try {
        const res = await this.$apiService.putCall(
          `carsAPIView/${this.companyId}`,
          updateObj
        );

        this.loader = true;
        this.$toaster.makeToast("success", "Car details updated successfully");

        this.$router.push("cars");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}

.error-message {
  margin-top: 5px;
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.img-fluid {
  width: 100px;
  height: 70px;
  object-fit: cover;
}
.for-color {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
.color-div {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  /* margin: 5px; Add margin for spacing */
}

.display_row {
  display: flex;
  gap: 8px;
}

.remove-icon {
  cursor: pointer;
  color: red;
  font-size: 20px;
  top: 5px;
  right: 5px;
}

.padding-none {
  padding: 0px;
}
</style>
