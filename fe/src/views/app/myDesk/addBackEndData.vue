<template>
  <div class="main-content">
    <div class="font-weight-bold fa-2x text-light">Model/Brand</div>
    <hr class="mt-1" />
    <vue-good-table
      :columns="columns"
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
      :rows="rows"
    >
      <div slot="table-actions" class="mr-2">
        <!-- <i class="i-Align-Justify-All mr-3"></i>
        <i class="i-Windows-Microsoft mr-3"></i> -->
        <b-button
          variant="primary"
          v-b-modal.modal-lg
          class="btn-rounded"
          @click="addModelBrand()"
        >
          Add Data
        </b-button>
      </div>

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'button'">
          <i
            class="fa fa-edit"
            style="font-size: 24px; cursor: pointer"
            @click="editTemplate(props.row.id)"
          ></i>

          <i
            class="fa fa-trash"
            style="
              font-size: 24px;
              color: red;
              margin-left: 10px;
              cursor: pointer;
            "
            @click="deleteTemplate(props.row.id)"
          ></i>
        </span>
      </template>
    </vue-good-table>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      isEdit: false,   
      loader: false,
      // isDivVisible: false,
      rows: [],
      bodyTypes: [],
      modelTypes: [],
      columns: [
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Value",
          field: "value",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
    };
  },

  mounted() {
    this.fetchBodyTypes();
  },

  created() {
    this.getId = this.$route.query.id;

    if (this.getId) {
      this.isEdit = true;
      this.getCarDetails();
    }
  },
  methods: {
    validateInput() {
      const hasLetter = /[a-zA-Z]/.test(this.registration_number);
      const hasNumber = /[0-9]/.test(this.registration_number);
      this.isAlphanumeric = hasLetter && hasNumber;
    },
    editTemplate(id) {
      this.$router.push("editTypeValue?id=" + id);
    },
    deleteTemplate(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then((result) => {
          if (result.value) {
            this.$toaster.makeToast(
              "warning",
              "This data has been deleted successfully.",
              "success"
            );
            this.$apiService.deleteCall(`bodyType/?id=${id}`).then((res) => {
              if (res.apidata.msg) {
                this.$toaster.makeToast(
                  "success",
                  message.DELETE_TEMPLATE_MESSAGE
                );
              }
              this.fetchBodyTypes();
            });
            this.fetchBodyTypes();
          }
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },

    addModelBrand() {
      this.$router.push("addTypeValue");
    },
    clickCancelBtn() {
      this.isDivVisible = false;
    },

    async fetchBodyTypes() {
      this.loader = true;
      try {
        const response = await this.$apiService.getCall("bodyType");
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
          // this.clearForm(); // Uncomment this line if you have a clearForm method
        } else {
          this.loader = false;
          // this.rows = response.apidata;
        }

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

        this.resMonth = (response.apidata || []).filter(
          (key) => key.type == "registration_month"
        );
        this.resYear = (response.apidata || []).filter(
          (key) => key.type == "registration_year"
        );

        this.allBrandType = (response.apidata || []).filter(
          (key) => key.type == "brand"
        );
        this.rows = this.allBrandType.concat(this.modelTypes);

        this.carFeaturesOptions = (response.apidata || []).filter(
          (key) => key.type == "car features"
        );
        this.transmissionType = (response.apidata || []).filter(
          (key) => key.type == "transmission type"
        );
        // this.loader=false;
      } catch (error) {
        this.loader = false;
        console.error("Error fetching body types:", error);
      }
    },
    async saveData() {
      if (!this.type || !this.value) {
        this.$toaster.makeToast(
          "warning",
          "Please fill in all the required fields"
        );
        setTimeout(() => (this.errorMessage = ""), 2000);
        return;
      }

      if (this.isEdit) {
        this.updateCarDetails();
      } else {
        this.loader = true;
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            type: this.type,
            value: this.value,
          };

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall("bodyType/", requestData);

          if (res.error) {
            this.$toaster.makeToast("warning", "Error during add data");
            // this.clearForm(); // Uncomment this line if you have a clearForm method
          } else {
            this.$toaster.makeToast("success", "Details added successfully");
            // this.$router.push("cars");
          }
        } catch (error) {
          this.loader = false;
          console.error(error);
        }
      }
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
      this.loader = true;
      let updateObj = {
        type: this.type,
        value: this.value,
      };

      try {
        const res = await this.$apiService.putCall(
          `bodyType/${this.companyId}`,
          updateObj
        );

        if (res.error) {
          this.$toaster.makeToast("warning", "Error during add data");
          // this.clearForm(); // Uncomment this line if you have a clearForm method
        } else {
          this.$toaster.makeToast("success", "Details Edit successfully");
          // this.$router.push("cars");
        }
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
