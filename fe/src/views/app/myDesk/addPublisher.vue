<template>
  <div>
    <b-col md="12 mb-30">
      <b-card :title="isEdit ? 'Edit publisher' : 'Add publisher'">
        <hr class="my-2" />

        <b-row>
          <b-col md="6">
            <b-form-group
              class="mb-3"
              label="Contact Number"
              label-for="input-2"
            >
              <b-form-input
                v-model="phoneNumber"
                type="number"
                required
                placeholder="Number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              class="mb-3"
              label="Agency center code"
              label-for="input-2"
            >
              <b-form-input
                v-model="agencyCode"
                type="number"
                required
                placeholder="Agency center code"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-form-group
            class="col-md-6 mb-3"
            label="Select Images"
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

        <b-col md="12" class="padding-none">
          <b-button
            class="mt-3"
            type="button"
            variant="primary"
            @click="saveData()"
            >Submit</b-button
          >
        </b-col>
      </b-card>
    </b-col>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      agencyCode: '',
      phoneNumber: '',
      selectedColors: null,
      colors: [],
      labelData: [],
      currentDate: new Date().toISOString().split('T')[0],
      brandType: [],
      images: [],
      imageURLs: [],
      registration_number: '',
      brand: null,
      isAlphanumeric: true,
      carFeatures: '',
      carFeaturesOptions: [],
      filteredBrandType: [],
      car_features: {},
      errorMessage: null,
      model: null,
      seating_capacity: '',
      seatingCapacityOptions: [4, 5, 6, 7, 8],
      agreement_policy: '',
      cancellation_policy: '',
      about_car: '',
      apiId: null,
      transmission_type: null,
      color: null,
      isEdit: false,
      companyId: '',
      loader: false,
      body_type: null,
      fuel_type: null,
      bodyTypes: [],
      make: null,
      label: null,
      registration_month: null,
      registration_year: null,
      description: '',
      price: '',
      meter_reading: '',
      allowed_day: '',
      excess_charges: '',
      service_Date: null
    }
  },

  mounted () {
    this.fetchBodyTypes()
  },

  // watch: {
  //   images: {
  //     handler: 'updateImageURLs',
  //     deep: true,
  //   },
  // },
  created () {
    this.companyId = this.$route.query.id
    // if (localStorage.getItem("filteredBrandType")) {
    //   this.filteredBrandType = JSON.parse(
    //     localStorage.getItem("filteredBrandType")
    //   );
    // }

    if (this.companyId) {
      this.isEdit = true
      this.getCarDetails()
    }
  },
  methods: {
    onModalSelect (option) {
      var mid = (this.modelTypes || []).find(key => key.value == option).id
      this.brandType = (this.allBrandType || []).filter(
        key => key.master_id == mid
      )
      // localStorage.setItem("filteredBrandType", JSON.stringify(this.brandType));
    },
    selectColor (color, i) {
      this.selectedColors = color
      this.color = color

      // console.log(this.selectedColors)
    },
    // async handleImageSelection() {
    //   // Use Promise.all to asynchronously get image URLs
    //   // const newImageURLs = await Promise.all(this.images.map(async (image) => {
    //   //   return await this.getImageURL(image);
    //   // }));
    //   // this.images = [];

    //   for (var i = 0; i < (this.images || []).length; i++) {
    //     var url = await this.uploadImage(this.images[i]);

    //     this.imageURLs.push(url);
    //   }
    // },
    validateInput () {
      const hasLetter = /[a-zA-Z]/.test(this.registration_number)
      const hasNumber = /[0-9]/.test(this.registration_number)
      this.isAlphanumeric = hasLetter && hasNumber
    },
    async getImageURL (image) {
      return new Promise(resolve => {
        const reader = new FileReader()

        reader.onload = () => {
          resolve(reader.result)
        }

        if (image) {
          reader.readAsDataURL(image)
        }
      })
    },
    removeImage (index) {
      this.imageURLs.splice(index, 1)
    },
    async fetchBodyTypes () {
      try {
        const response = await this.$apiService.getCall('bodyType')

        this.bodyTypes = (response.apidata || []).filter(
          key => key.type == 'body type'
        )
        this.fuelTypes = (response.apidata || []).filter(
          key => key.type == 'fuel type'
        )
        this.modelTypes = (response.apidata || []).filter(
          key => key.type == 'model'
        )

        this.makeYear = (response.apidata || []).filter(
          key => key.type == 'make year'
        )
        this.colors = (response.apidata || []).filter(
          key => key.type == 'color'
        )
        this.labelData = (response.apidata || []).filter(
          key => key.type == 'label'
        )

        this.resMonth = (response.apidata || []).filter(
          key => key.type == 'registration_month'
        )
        this.resYear = (response.apidata || []).filter(
          key => key.type == 'registration_year'
        )

        this.allBrandType = (response.apidata || []).filter(
          key => key.type == 'brand'
        )
        this.carFeaturesOptions = (response.apidata || []).filter(
          key => key.type == 'car features'
        )
        this.transmissionType = (response.apidata || []).filter(
          key => key.type == 'transmission type'
        )
      } catch (error) {
        console.error('Error fetching body types:', error)
      }
    },
    async saveData () {
      if (!this.images || !this.phoneNumber || !this.agencyCode) {
        this.$toaster.makeToast(
          'warning',
          'Please fill in all the required fields'
        )
        setTimeout(() => (this.errorMessage = ''), 2000)
        return
      }

      this.loader = false

      if (this.isEdit) {
        this.updateCarDetails()
      } else {
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            user_name: this.model,
            contact_number: this.phoneNumber,
            agency_center_code: this.agencyCode,
            icon: this.seating_capacity,
            userId: this.registration_number
          }

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall(
            'publisher/create/',
            requestData
          )

          this.loader = true

          if (res.error) {
            this.$toaster.makeToast('warning', 'Data already exists')
          } else {
            this.$toaster.makeToast('success', 'Car details added successfully')
            this.$router.push('cars')
          }
        } catch (error) {
          this.loader = false
          console.error(error)
        }
      }
    },
    // async uploadImages() {
    //   let prs = this.images.map((image) => this.uploadImage(image));
    //   // Use Promise.all to asynchronously upload images and get URLs
    //   return Promise.all(prs);
    // },

    async handleImageSelection (image) {
      console.log('Image upload failed')
      console.log('Image upload failed', this.images)
      try {
        const formData = new FormData()
        formData.append('image', image)

        const response = this.$apiService.postCall('util/image/', formData)
        console.log('Image upload failed', response)
        if (response.apidata) {
          console.log('Image upload failed')
        } else {
          console.log('Image upload failed')
        }
      } catch (error) {
        confirm.log(error)
      }
    },
    async getCarDetails () {
      try {
        this.loader = true
        let response = await this.$apiService.getCall(
          `carsAPIView/?id=${this.companyId}`
        )
        this.model = response.apidata.model
        this.make = response.apidata.make
        this.label = response.apidata.car_label
        this.seating_capacity = response.apidata.seating_capacity
        ;(this.registration_number = response.apidata.registration_number),
          (this.body_type = response.apidata.body_type)
        this.brand = response.apidata.brand
        this.registration_month = response.apidata.registration_month
        this.registration_year = response.apidata.registration_year
        this.fuel_type = response.apidata.fuel_type
        this.transmission_type = response.apidata.transmission_type
        this.color = response.apidata.color_code
        this.power = response.apidata.power
        this.filteredBrandType = [response.apidata.brand]

        this.car_features = JSON.parse(response.apidata.car_features)
        // this.car_pickup_location = response.apidata.car_pickup_location;
        if (
          response.apidata.images &&
          typeof response.apidata.images === 'string'
        ) {
          // Parse the stringified JSON array and extract the image URLs
          this.imageURLs = JSON.parse(response.apidata.images)
        } else {
          console.error('Images data is not in the expected format')

          // Optionally, handle this case by setting a default value for imageURLs or displaying a message to the user
        }
        this.description = response.apidata.description
        ;(this.price = response.apidata.price),
          (this.meter_reading = response.apidata.meter_reading),
          (this.allowed_day = response.apidata.allowed_km_per_day),
          (this.excess_charges = response.apidata.excess_KM_charges),
          (this.service_Date = response.apidata.service_Date)
        this.about_car = response.apidata.about_car
        this.agreement_policy = response.apidata.agreement_policy
        this.cancellation_policy = response.apidata.cancellation_policy
        // this.textareaValue = response.apidata.company_Id;
        this.loader = false
      } catch (error) {
        this.loader = false
        console.log(error)
      }
    },
    async updateCarDetails () {
      this.loader = false
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
        cancellation_policy: this.cancellation_policy
      }

      // if (this.images.length > 0) {
      //   const newImageUrls = await this.uploadImages();
      //   const allImageUrls = this.imageURLs.concat(newImageUrls);
      //   console.log("imageUrls", allImageUrls)
      //   updateObj.images = JSON.stringify(allImageUrls);
      // } else {
      // No new images uploaded, use existing image URLs
      updateObj.images = JSON.stringify(this.imageURLs)
      //}

      try {
        const res = await this.$apiService.putCall(
          `carsAPIView/${this.companyId}`,
          updateObj
        )

        this.loader = true
        this.$toaster.makeToast('success', 'Car details updated successfully')

        this.$router.push('cars')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
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
