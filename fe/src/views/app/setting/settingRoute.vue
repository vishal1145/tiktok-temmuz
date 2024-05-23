<template>
  <div class="main-content">
    <div class="font-weight-bold fa-2x text-light">App Setting</div>
    <hr class="mt-1" />
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="">
      <div class="">
        <div>
          <b-tabs content-class="mt-3" align="start">
            <b-tab title="Convenience Fees" active>
              <b-form>
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
                    label="Edit value"
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
            </b-tab>
            <!-- <b-tab title="Perform Data">
              <b-row>
                <b-col>
                  <vue-good-table
                    :columns="columns"
                    :line-numbers="false"
                    :search-options="{
                      enabled: true,
                      placeholder: 'Search Brand/Model',
                    }"
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
                </b-col>
              </b-row>
            </b-tab> -->
            <!-- <b-tab title="Transaction"> </b-tab> -->
          </b-tabs>
        </div>
      </div>
    </div>
    <!-- <b-col md="12 mb-30">
     <b-card
       :title="isEdit ? 'Edit Convenience Fees' : 'Add Convenience Fees'"
     >
       <hr class="my-2" />
       
     </b-card>
   </b-col> -->
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      key: "convenience fees",
      value: "",
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

  created() {
    this.fetchBodyTypes();
    // this.getId = this.$route.query.id;
    this.getConvenienceData();
  },
  methods: {
    validateInput() {
      const hasLetter = /[a-zA-Z]/.test(this.registration_number);
      const hasNumber = /[0-9]/.test(this.registration_number);
      this.isAlphanumeric = hasLetter && hasNumber;
    },

    // editTemplate(id) {
    //   this.$router.push("editModelBrand?id=" + id);
    //   this.isDivVisible = true;
    // },
    // deleteTemplate(id) {
    //   console.log(id);
    // },

    async getConvenienceData() {
      this.loader = true;

      try {
        const response = await this.$apiService.getCall(
          "appSetting/?key=" + this.key
        );
        if (response.error) {
          this.$toaster.makeToast("warning", "Error while getting data");
          // this.clearForm(); // Uncomment this line if you have a clearForm method
        } else {
          // this.ModelBrand=response.apidata;

          this.value = response.apidata.value;

          this.loader = false;
          // this.rows = response.apidata;
        }
      } catch (error) {
        this.loader = false;
        console.error("Error fetching body types:", error);
      }
    },
    async saveData() {
      if (!this.value) {
        this.$toaster.makeToast("warning", "Value is a required fields");
        setTimeout(() => (this.errorMessage = ""), 2000);
        return;
      }

      this.updateCarDetails();

      // else {
      //   this.loader = true;
      //   try {
      //     //const imageUrls = await this.uploadImages();
      //     let requestData = {
      //       key: this.key,
      //       value: this.value,
      //     };

      //     // Assuming you want to make a POST request
      //     const res = await this.$apiService.postCall(
      //       "appSetting/?key=" + this.key,
      //       requestData
      //     );

      //     if (res.error) {
      //       this.$toaster.makeToast("warning", "Error during add data");
      //       // this.clearForm(); // Uncomment this line if you have a clearForm method
      //     } else {
      //       this.$toaster.makeToast("success", "Details added successfully");
      //       //  window.location.reload();
      //     }
      //   } catch (error) {
      //     this.loader = false;
      //     console.error(error);
      //   }
      // }
    },

    async updateCarDetails() {
      this.loader = true;
      let updateObj = {
        key: this.key,
        value: this.value,
      };

      try {
        const res = await this.$apiService.putCall(
          "appSetting/?key=" + this.key,
          updateObj
        );

        if (res.error) {
          this.$toaster.makeToast("warning", "Error during add data");
          // this.clearForm(); // Uncomment this line if you have a clearForm method
        } else {
          this.$toaster.makeToast("success", "Details Edit successfully");
          setTimeout(() => {
            window.location.reload();
          }, 500);
          this.loader = false;
          // this.$router.push("addBackEndData");
        }
      } catch (error) {
        this.loader = false;
        console.error(error);
      }
    },
    editTemplate(id) {
      this.$router.push("/app/mydesk/editTypeValue?id=" + id);
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
      this.$router.push("/app/mydesk/addTypeValue");
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
