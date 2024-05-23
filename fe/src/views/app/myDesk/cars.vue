<template>
  <div>
    <div class="font-weight-bold fa-2x text-light">Cars</div>
    <hr class="mt-1" />
    <div class="row">
      <div class="col-md-3">
        <b-form-group class="mb-3">
          <b-form-input
            v-model="searchQuery"
            placeholder="Search cars"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-9">
        <!-- Add Button -->
        <div class="mb-3 float-right">
          <b-button variant="primary" class="btn-rounded" @click="addData"
            >Add Cars</b-button
          >
        </div>
      </div>
    </div>
    <b-modal
      id="modal-carView"
      size="md"
      title="Car attachement"
      style="height: 100px"
      hide-footer
      hide-header
    >
      <div class="row">
        <div class="col-md-12">
          <div class="p-4">
            <h1 class="mb-3 text-18">Car Status</h1>
            <b-form-checkbox
              id="checkbox-InActive"
              name="checkbox-InActive"
              v-model="activeStatus"
              @change="toggleIsActive"
            >
              <p class="text-gray-600 font-italic m-0 p-0" v-if="activeStatus">
                Car InActive
              </p>

              <p class="text-gray-600 font-italic m-0 p-0" v-else>Car Active</p>
            </b-form-checkbox>
          </div>
        </div>
      </div>
    </b-modal>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="row" v-if="filteredRows.length > 0">
      <div
        v-for="(row, index) in filteredRows"
        :key="index"
        class="col-md-4 mb-3"
      >
        <div class="card">
          <img
            :src="parseImage(row.images)"
            class="card-img-top"
            alt="Car Image"
          />
          <div class="card-body">
            <div class="card-text">
              <div class="row">
                <div class="col">
                  <div class="registration_number">
                    {{ row.registration_number }}
                  </div>
                </div>
                <div class="float-right">
                  <div class="d-flex align-items-center">
                    <i
                      class="fa fa-edit"
                      style="font-size: 16px; cursor: pointer"
                      @click="editTemplate(row.id)"
                    ></i>
                    <i
                      class="fa fa-trash"
                      style="
                        font-size: 16px;
                        color: red;
                        margin-left: 10px;
                        cursor: pointer;
                      "
                      @click="deleteTemplate(row.id)"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-2">
                {{ row.model }} | {{ row.make }} | {{ row.body_type }}
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-2 gap-between">
                    <img
                      class="svg_icon"
                      src="https://www.mychoize.com/_next/static/media/pickup_vehical.c834bf16.svg"
                      alt=""
                    />
                    {{ row.seating_capacity }} Seater
                  </div>
                  <div class="d-flex align-items-center mb-2 gap-between">
                    <img
                      class="svg_icon"
                      src="https://www.mychoize.com/_next/static/media/petrol.95a6232f.svg"
                      alt=""
                    />
                    <div>{{ row.fuel_type }}</div>
                  </div>
                  <!-- <div class="d-flex align-items-center mb-2 gap-between"><img class="svg_icon blue_icon"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOHPJeBer0rc5sn-TjI7W8gmP2dJ4IlFusdmFYx9Clg&s"
                      alt="">
                    <div>{{ row.engine }}</div>
                  </div> -->
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="charge cursor-pointer active">
                        <div>
                          <b>₹&nbsp;{{ row.price }}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hr"></div>
              <div class="d-flex justify-content-between">
                {{ row.power }}
                <b-button @click="clickViewCar(row.id,row.availability_status)">View</b-button>
              </div>

              <!-- <div class=" d-flex justify-content-between"> <b-button>hello</b-button></div> -->

              <!-- , {{ row.car_features }} -->
            </div>
          </div>
          <div class="position-absolute">
            <span
            :class="{ 'badge':!row.availability_status , 'badge-success': !row.availability_status }"
              :style="{
                marginTop: '20px',
                marginLeft: '10px',
                backgroundColor: row.availability_status ? '' : (row.book ? 'red' : 'green') ,
                color: !row.book ? 'white' : 'white',
              }"
            >
              
              <div v-if="row.availability_status" class="badge badge-success"
              :style="{
               marginTop: '20px',
                marginLeft: '10px',
                backgroundColor: !row.availability_status ? 'green' : 'red',
                color: !row.book ? 'white' : 'white',
              }">
                {{ !row.availability_status ? "Available" : " Not available" }}
              </div>
              <div v-else>
                {{ !row.book  ? "Available" : " Not available" }}
              </div>
             
            </span>
          </div>
          <div
            v-if="row.book"
            class="d-flex flex-row justify-content-between px-3 textColour bg-gray-100 py-1 position-absolute"
            style="width: 100%; top: 110px"
          >
            <div class="font-weight-bold text-12">
              Car is available after {{ row.available }}
            </div>
            <!-- <div class="pt-1">₹ {{ item.price }}/Day's</div> -->
          </div>
          <div
            v-if="row.availability_status"
            class="d-flex flex-row justify-content-between px-3 textColour bg-gray-100 py-1 position-absolute"
            style="width: 100%; top: 110px"
          >
            <div class="font-weight-bold text-12">
              Car is Inactive by Owner
            </div>
            <!-- <div class="pt-1">₹ {{ item.price }}/Day's</div> -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="not_found">
        <h4>No record found</h4>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import message from "../../../message";
// import message from '@/src/message';

// import { ref } from "vue";
// import { VueEditor } from "vue2-editor";
// import VueDocumentEditor from 'vue-document-editor'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Company",
  },
  components: {
    // VueEditor,
    // VueDocumentEditor
  },
  data() {
    return {
      searchQuery: "",
      isActive: false,
      rowCarId: "",
      activeStatus:false,
      columns: [
        {
          label: "Model",
          field: "model",
          sortable: false,
        },
        {
          label: "Make",
          field: "make",
          sortable: false,
        },
        {
          label: "Body type",
          field: "body_type",
          sortable: false,
          // type: "number",
          // width: "10%",
          // sortable: true,
        },
        {
          label: "Seating capacity",
          field: "seating_capacity",
          width: "10%",
          sortable: false,
        },
        {
          label: "Fuel type",
          field: "fuel_type",
          sortable: false,
          width: "10%",
        },
        {
          label: "Engine",
          field: "engine",
          sortable: false,
          width: "10%",
        },
        {
          label: "Power",
          field: "power",
          sortable: false,
          width: "10%",
        },
        {
          label: "Car Features",
          field: "car_features",
          sortable: false,
          width: "10%",
        },
        {
          label: "Pickup Location",
          field: "car_pickup_location",
          sortable: false,
          width: "10%",
        },
        {
          label: "Agreement Policy",
          field: "agreement_policy",
          sortable: false,
          width: "10%",
        },
        {
          label: "Actions",
          field: "button",
          width: "10%",
          sortable: false,
        },
      ],
      rows: [],
      form: {
        templateId: "",
        name: "",
        content: "",
      },
      boockedCar: [],
      allCarRegNo: [],
      generateIDloader: true,
      submitloader: false,
      isEdit: false,
      loader: false,
      pageLoadId: null,
      apiId: null,
      isHide: false,
      // editorConfig: {
      //   toolbar: [
      //     ["Source"],
      //     ["Cut", "Copy"],
      //     ["Undo", "Redo"],
      //     [
      //       "Checkbox",
      //       "Radio",
      //       "TextField",
      //       "Textarea",
      //       "Select",
      //       "ImageButton",
      //     ],
      //     ["Margin", "Border"],
      //     ["Link", "Unlink"],
      //     ["Image", "Table", "HorizontalRule", "SpecialChar", "PageBreak"],
      //     ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript"],
      //     ["CopyFormatting", "RemoveFormat"],
      //     ["NumberedList", "BulletedList"],
      //     [
      //       "Outdent",
      //       "Indent",
      //       "JustifyLeft",
      //       "JustifyCenter",
      //       "JustifyRight",
      //       "JustifyBlock",
      //     ],
      //     ["Font", "FontSize", "lineheight", "TextColor", "BGColor"],
      //   ],
      // },
    };
  },

  created() {
    this.getAllCarData();
    // this.getAllTransaction();
    // this.convertToCSV();
  },
  computed: {
    sortedItems: function () {
      return this.rows.slice().sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    },

    filteredRows() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.rows;
      } else {
        return this.rows.filter((row) => {
          return (
            row.registration_number &&
            row.registration_number.toLowerCase().includes(query)
          );
        });
      }
    },
  },

  methods: {
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
    toggleIsActive() {
      this.$bvModal.hide("modal-carView");
      this.isActive = !this.isActive;
      var status='False'
      if (this.activeStatus) {
        status='True'
      } else {
        status='False'
      }
      this.loader = true;
      this.$apiService
        .getCall(
          "availabilityStatus/?carId=" +
            this.rowCarId +
            "&book_status=" +
            status
        )
        .then((res) => {
          if(!res.error){
            if (this.activeStatus) {
              this.$toaster.makeToast("success", 'This Car Inactive successfully');
              this.getAllCarData();
            } else {
              this.$toaster.makeToast("success", 'This Car Active successfully');
              this.getAllCarData();
            }
            
          this.loader = false;

          }
         
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    clickViewCar(rowCarId,status) {
      this.rowCarId = rowCarId;
      this.activeStatus=status;
      this.$bvModal.show("modal-carView");
    },
    objectToCsv(data) {
      const csvRows = [];
      let headers = Object.keys(data[0]);

      headers = headers.filter((h) => h != "password");
      headers = headers.filter((h) => h != "_id");
      headers = headers.filter((h) => h != "categories");
      headers = headers.filter((h) => h != "status");
      headers = headers.filter((h) => h != "__v");
      csvRows.push(headers.join(","));

      for (const row of data) {
        const values = headers.map((header) => {
          const val = row[header];
          return `"${val}"`;
        });

        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    },

    getAllCarData() {
      this.loader = true;
      this.$apiService
        .getCall("carsAPIView/")
        .then((res) => {
          let rowData = [];
          if (res.apidata.length > 0) {
            rowData = res.apidata;
          }
          this.allCarRegNo = rowData.map((e) => {
            return {
              id: e.id,
              registration_number: e.registration_number,
            };
          });

          rowData = rowData.map((res) => {
            res.created_at = moment(res.created_at).format(
              "DD MMM YYYY h:mm A"
            );
            //   let createdFirstName = res?.created_by?.first_name || "";
            //   let createdLastName = res?.created_by?.last_name || "";
            //   res.created_by = createdFirstName + " " + createdLastName;
            //   let updatedFirstName = res?.updated_by?.first_name || "";
            //   let updatedLastName = res?.updated_by?.last_name || "";
            //   res.updated_by = updatedFirstName + " " + updatedLastName;
            //   res.updated_at = moment(res.updated_at).format(
            //     "DD MMM YYYY h:mm A"
            //   );
            return res;
          });

          rowData = res.apidata;
          this.rows = rowData;
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
      this.$apiService
        .getCall(`bookingHistory/?${query}`)
        .then((res) => {
          let rowData = [];

          if (res.apidata.length > 0) {
            rowData = res.apidata;

            const paidRowData = rowData.filter(
              (item) => item.payment_status === "paid"
            );

            paidRowData.forEach((element) => {
              // let data=element.registration_number
              element.price = element.price
                ? "₹" + "  " + element.price + "/-"
                : "";
              element.updated_at = element.updated_at
                ? moment(element.updated_at).format("DD MMM YYYY h:mm A")
                : "";
              element.booking_date = element.booking_date
                ? moment(element.booking_date).format("DD MMM YYYY h:mm A")
                : "";
            });
          }
          this.boockedCar = paidRowData;

          // this.rows = rowData;
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
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
              "Car has been deleted successfully.",
              "success"
            );
            this.$apiService.deleteCall(`carsAPIView/${id}`).then((res) => {
              if (res.apidata.msg) {
                this.$toaster.makeToast(
                  "success",
                  message.DELETE_TEMPLATE_MESSAGE
                );
              }
              this.getAllCarData();
            });
            this.getAllCarData();
          }
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    editTemplate(id) {
      this.$router.push("editCars?id=" + id);
    },
    onClickMapp(id) {
      this.$router.push("/app/myDesk/mapping?id=" + id);
    },
    addData() {
      this.$router.push("addCars");
    },
  },

  generateID() {
    this.clearform();
    this.generateIDloader = true;
    let randomString = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 7; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    this.form.templateId = randomString;
    this.generateIDloader = false;
  },
  submit() {
    this.submitloader = true;
    if (!this.form.name || !this.form.content || !this.form.templateId) {
      this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
      this.submitloader = false;
      return;
    }
    this.$apiService
      .postCall("add_by_company", this.form)
      .then((res) => {
        if (res.apidata.status) {
          this.$toaster.makeToast("warning", message.ERROR_TEMPLATE_MESSAGE);
          this.submitloader = false;
        } else {
          this.$toaster.makeToast("success", message.ADD_TEMPLATE_MESSAGE);
          this.getTemplateData();
          this.clearform();
        }
      })
      .catch((error) => {
        this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
      });
  },
  cancel() {
    this.clearform();
  },
  update() {
    this.submitloader = true;
    if (!this.form.name || !this.form.content || !this.form.templateId) {
      this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
      this.submitloader = false;
      return;
    }
    this.$apiService
      .postCall("editTemplate", this.form)
      .then((res) => {
        this.$toaster.makeToast("success", message.EDIT_TEMPLATE_MESSAGE);
        this.getTemplateData();
        this.clearform();
      })
      .catch((error) => {
        this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
      });
  },
  editTemplate(id) {
    this.isEdit = false;

    this.$apiService
      .postCall("getTemplate", { _id: id })
      .then((res) => {
        this.form = res.apidata;
        this.$bvModal.show("modal-lg");
      })

      .catch((error) => {
        this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
      });
    this.isEdit = true;
  },
  clearform() {
    this.form = {};
    this.isEdit = false;
    this.submitloader = false;
    this.generateIDloader = false;
    this.$bvModal.hide("modal-lg");
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

.icon-size {
  font-size: 30px;
}

.vgt-wrap__footer .footer__row-count__label {
  font-size: 0.9rem;
  color: #606474;
}

.vgt-wrap__footer .footer__navigation__page-btn span {
  color: #606474;
  font-size: 0.9rem;
}

.vgt-wrap__footer .footer__row-count__select {
  font-size: 0.9rem;
}

.vgt-wrap__footer .footer__navigation__info,
.vgt-wrap__footer .footer__navigation__page-info {
  font-size: 0.9rem;
}

.vgt-right-align {
  text-align: left;
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}

.title-font {
  font-size: 14px;
}

.float-right {
  float: right;
}

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

.not_found {
  text-align: center;
}
</style>
