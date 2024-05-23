<template>
  <div>
    <!-- <breadcumb :page="'Company'" :folder="isEdit ? 'Edit Company' : 'Add Company'" /> -->
    <b-col md="12 mb-30">
      <b-card :title="isEdit ? 'Edit Type/Value' : 'Add Type/Value'">
        <hr class="my-2" />
        <b-form>
           <b-row>
            <b-form-group
              v-if="modelTypesData.length > 0"
              class="col-md-4 mb-3"
              label="Add type"
              label-for="input-type"
            >
              <b-form-select v-model="type" required>
                <b-form-select-option
                  v-for="(value, index) in modelTypesData"
                  :key="index"
                  :value="value"
                >
                  <div>{{ value }}</div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
            <b-form-group
              v-else
              class="col-md-4 mb-3"
              label="Add type"
              label-for="input-type"
            >
              <b-form-select @change="handleTypeChange"  required>
                <b-form-select-option
                  v-for="(value, index) in typeData"
                  :key="index"
                  :value="value"
                >
                  <div>{{ value }}</div>
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-row>
          <b-row v-if="type=='model' && !isEdit">
            <b-col md="4">
              <div v-for="(value) in modelTypes" :key="value.id"
                  :value="value.value">{{ value.value }}</div>
            </b-col>
          </b-row>
          <b-row v-if="type=='brand' && !isEdit">
            <b-form-group
              class="col-md-4 mb-3"
              label="Brand"
              label-for="input-1"
            >
              <b-form-select v-model="model" required v-on:change="onModalSelect">
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
            <b-col md="4">
              <div v-for="(value) in brandType" :key="value.id"
                  :value="value.value">{{ value.value }}</div>
            </b-col>
          </b-row>
         
          <!-- <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Add type"
              label-for="input-type"
            >
              <b-form-input
                v-model="type"
                required
                placeholder="Enter type"
              ></b-form-input>
            </b-form-group>
          </b-row> -->
          <b-row>
            <b-form-group
              class="col-md-4 mb-3"
              label="Add value"
              label-for="input-value"
            >
              <b-form-input
                v-model="value"
                required
                placeholder="Enter new value"
              ></b-form-input>
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
            <!-- <b-button
                class="mt-3 ml-2"
                type="button"
                variant="primary"
                @click="clickCancelBtn()"
                >Cancel</b-button
              > -->
          </b-col>
        </b-form>
      </b-card>
    </b-col>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      value: "",
      getId: "",
      isEdit: false,
      type: "",
      model:null,
      loader: false,
      typeData: ["model", "brand"],
      allBrandType: [],
      selectedBrandId:0,
      brandType:[],
      modelTypes: [],
      modelTypesData:[],
      modelValue: "",
      ModelBrand: [],
    };
  },

  created() {
    this.getId = this.$route.query.id;
   
    if (this.getId) {
      this.isEdit = true;
      this.fetchBodyTypes();
    }else{
      this.fetchBodyTypes();
    }
  },
  methods: {
    validateInput() {
      const hasLetter = /[a-zA-Z]/.test(this.registration_number);
      const hasNumber = /[0-9]/.test(this.registration_number);
      this.isAlphanumeric = hasLetter && hasNumber;
    },
    handleTypeChange(event) {
      if(event=='brand'){
        this.type='model';
      }else {
        this.type='brand';
      }
      
    },
    onModalSelect(option) {
      var mid = (this.modelTypes || []).find((key) => key.value == option).id;
      this.selectedBrandId=mid;
      this.brandType = (this.allBrandType || []).filter(
        (key) => key.master_id == mid
      );
      // localStorage.setItem("filteredBrandType", JSON.stringify(this.brandType));
    },
    // editTemplate(id) {
    //   this.$router.push("editModelBrand?id=" + id);
    //   this.isDivVisible = true;
    // },
    // deleteTemplate(id) {
    //   console.log(id);
    // },
    addModelBrand() {
      this.isDivVisible = !this.isDivVisible;
    },
    clickCancelBtn() {
      this.isDivVisible = false;
    },

    async fetchBodyTypes() {
      this.loader = true;
     
      if (this.isEdit) {
     
        try {
          const response = await this.$apiService.getCall(
            "bodyType/?id=" + this.getId
          );
          if (response.error) {
            this.$toaster.makeToast("warning", "Error while getting data");
            // this.clearForm(); // Uncomment this line if you have a clearForm method
          } else {
            // this.ModelBrand=response.apidata;
            this.type = response.apidata.type;
            this.value = response.apidata.value;
            this.modelTypesData.push(response.apidata.type);
            this.modelValue = response.apidata.value;
          
            this.loader = false;
            // this.rows = response.apidata;
          }
        } catch (error) {
          this.loader = false;
          console.error("Error fetching body types:", error);
        }
      } else {
        try {
          const response = await this.$apiService.getCall(
            "bodyType"
          );
          if (response.error) {
            this.$toaster.makeToast("warning", "Error while getting data");
            // this.clearForm(); // Uncomment this line if you have a clearForm method
          } else {
            this.modelTypes = (response.apidata || []).filter(
          (key) => key.type == "model"
        );
        this.allBrandType = (response.apidata || []).filter(
          (key) => key.type == "brand"
        );
        this.loader = false;
          }
        } catch (error) {
          this.loader = false;
          console.error("Error fetching body types:", error);
        }
       

        
        
      }
    },
    async saveData() {
      // if (!this.type || !this.value) {
      //   this.$toaster.makeToast(
      //     "warning",
      //     "Please fill in all the required fields"
      //   );
      //   setTimeout(() => (this.errorMessage = ""), 2000);
      //   return;
      // }

      if (this.isEdit) {
        this.updateCarDetails();
      } else {
        this.loader = true;
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            type: this.type,
            value: this.value,
            master_id:this.selectedBrandId
          };

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall("bodyType/", requestData);

          if (res.error) {
            this.$toaster.makeToast("warning", "Error during add data");
            // this.clearForm(); // Uncomment this line if you have a clearForm method
          } else {
            this.$toaster.makeToast("success", "Details added successfully");
            this.$router.push("addBackEndData");
          }
        } catch (error) {
          this.loader = false;
          console.error(error);
        }
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
          `bodyType/?id=${this.getId}`,
          updateObj
        );

        if (res.error) {
          this.$toaster.makeToast("warning", "Error during add data");
          // this.clearForm(); // Uncomment this line if you have a clearForm method
        } else {
          this.loader = false;
          this.$toaster.makeToast("success", "Details Edit successfully");
          this.$router.push("addBackEndData");
        }
      } catch (error) {
        this.loader = false;
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
