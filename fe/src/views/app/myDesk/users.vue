<template>
  <div class="main-content">
    <div class="font-weight-bold fa-2x text-light">Users</div>
    <hr class="mt-1" />
    <!-- <div class="wrapper"> -->
    <b-modal id="modal-lg" size="lg" title="Documents" style="height: 100px">
      <!-- <div style="position: absolute; right: 10px" class="dropdown">
            <i class="fa fa-bars fa-2x" aria-hidden="true">
              <div class="dropdown-content">
                <a :href="pdfsrc"
                  ><span
                    ><i class="fa fa-download" style="margin-right: 0.3rem"></i
                    >Download</span
                  ></a
                >
              </div>
            </i>
          </div> -->

      <b-row>
        <b-col md="6">
          <h5 style="font-weight: 800; font-size: 18px">Aadhar Card</h5></b-col
        >
        <!-- <b-col><b-button @click="clickDownload">download</b-button></b-col> -->
      </b-row>
      <b-row class="my-4" v-if="aadharFront">
        <b-col md="6">
          <a download :href="aadharFront" title="aadharFront" target="_blank">
            <img
              :src="aadharFront"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>

        <b-col md="6">
          <a download :href="aadharBack" title="aadharBack" target="_blank">
            <img
              v-if="aadharBack"
              :src="aadharBack"
              style="max-height: 120px !important; width: auto"
          /></a>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5 style="font-weight: 800; font-size: 18px">
            Driving Licence
          </h5></b-col
        >
      </b-row>
      <b-row class="my-4" v-if="divinglicense">
        <b-col md="6">
          <a
            download
            :href="divinglicense"
            title="divinglicense"
            target="_blank"
          >
            <img
              v-if="divinglicense"
              :src="divinglicense"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
        <b-col md="6">
          <a
            download
            :href="divinglicenseBack"
            title="divinglicenseBack"
            target="_blank"
          >
            <img
              v-if="divinglicenseBack"
              :src="divinglicenseBack"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5 style="font-weight: 800; font-size: 18px">Passport</h5></b-col
        >
      </b-row>
      <b-row class="my-4" v-if="passport">
        <b-col md="6">
          <a download :href="passport" title="passport" target="_blank">
            <img
              v-if="passport"
              :src="passport"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
        <b-col md="6">
          <a download :href="passportBack" title="passportBack" target="_blank">
            <img
              v-if="passportBack"
              :src="passportBack"
              style="max-height: 120px !important; width: auto"
            />
          </a>
        </b-col>
      </b-row>
    </b-modal>
 <div  class="d-flex flex-row justify-content-between pb-2">
     <b-col md="3" style="
    padding-right: 0px !important;
    padding-left: 0px !important;
">
        <multiselect @input="handleChange" v-model="selected" placeholder="Select users" :options="[...allUsers]"
          :multiple="false" :limit="1"></multiselect>
      </b-col>
      <div class="for-gap">
      <button @click="clearFilters" class="btn btn-primary">Clear Filter</button>
    </div>

 </div>
 
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <vue-good-table
      :columns="columns"
      :line-numbers="false"
      :search-options="{
        enabled: true,
        placeholder: 'Search User',
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
      :rows="getfilterdata"
    >
      <!-- <div slot="table-actions" class="mb-3">
        <i class="i-Align-Justify-All mr-3"></i>
        <i class="i-Windows-Microsoft mr-3"></i>
        <b-button
          variant="primary"
          v-b-modal.modal-lg
          class="btn-rounded"
          @click="generateID()"
        >
          New Template
        </b-button>
      </div> -->

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'img'">
          <img
            :src="props.row.image!=null?props.row.image:logo"
            
            alt="Image"
            class="circular-image"
            
          />
        </span>
        <!-- <span v-else-if="props.column.field === 'documents'">
          <template v-if="props.row.aadhar_card">
            <img :src="props.row.aadhar_card" height="40" width="40" />
          </template>
          <template v-if="props.row.driving_lincense">
            <img
              class="mx-3"
              :src="props.row.driving_lincense"
              height="35"
              width="50"
            />
          </template>
          <template v-if="props.row.passport">
            <img :src="props.row.passport" height="35" width="50" />
          </template>
          
        </span> -->
        <span v-else-if="props.column.field === 'button'">
          <!-- <template>
            <a
              v-b-modal.modal-lg
              @click="openModal(props.row)"
              class="mr-3"
              variant="primary ripple"
              style="text-decoration: underline !important; cursor: pointer"
              >Documents</a
            >
          </template> -->
          <template>
            <b-button
              v-if="props.row.accessStatus == false"
              variant="primary ripple"
              @click="clickBlock(props.row.id)"
              style="height: 33px; width: 7em"
              class="mr-3"
              >Block</b-button
            >
            <b-button
              class="mr-3"
              style="height: 33px; width: 7em"
              v-else
              variant="primary ripple"
              @click="clickUnBlock(props.row.id)"
            >
              Unblock</b-button
            >
          </template>
          <template>
            <a
              @click="clickViewUsers(props.row.id)"
              class="mr-3"
              variant="primary ripple"
              style="font-size: 16px; cursor: pointer"
              ><i class="fa fa-eye" aria-hidden="true"></i
            ></a>
          </template>
        </span>
        <span v-else-if="props.column.field === 'information'">
          <template>
            <div class="d-flex flex-column">
              <div class="d-flex">
                {{ props.row.email }}
                <span
                  v-if="props.row.is_verified"
                  class="text-success pl-1 m-0"
                  style="font-size: 11px"
                >
                  <span class="badge badge-primary blueVerfiy"
                    >verified<i
                      class="fa fa-check-circle blueVerfiy2"
                      aria-hidden="true"
                      style="padding-left: 4px"
                    ></i
                  ></span>
                </span>
                <span
                  v-else
                  class="text-success pl-1 m-0"
                  style="font-size: 11px"
                >
                  <span class="badge badge-primary blueVerfiyred"
                    >not verified<i
                      class="fa fa-check-circle blueVerfiy2red"
                      aria-hidden="true"
                      style="padding-left: 4px"
                    ></i
                  ></span>
                </span>
              </div>
              <div>{{ props.row.phone }}</div>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'balance_show'">
          <template>
            <div class="dropdown">
              <b-dropdown
                id="dropdown-6"
                :text="`Current - ₹ ${formatPrice(totalBalance)}`"
                class="m-md-2"
                toggle-class=""
                style="
                  border: 1px solid rgba(0, 0, 0, 0.265);
                  color: black;
                  border-radius: 5px;

                  /* text-underline-offset: unset; */
                "
              >
                <div class="dropdown-item d-flex justify-content-between px-3">
                  <div>Wallet</div>
                  <div>₹ {{ formatPrice(userBalance) }}</div>
                </div>
                <div class="dropdown-item d-flex justify-content-between px-3">
                  <div>Security</div>
                  <div>₹ {{ formatPrice(securityBalance) }}</div>
                </div>
                <div class="dropdown-item d-flex justify-content-between px-3">
                  <div>
                    Bonus & <br />
                    Rewards
                  </div>
                  <div>₹ {{ formatPrice(referralBalance) }}</div>
                </div>
              </b-dropdown>
            </div>
          </template>
        </span>
      </template>

      <!-- <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'button'">
          <i
            class="fa fa-edit"
            style="font-size: 24px; cursor: pointer"
            @click="editTemplate(props.row._id)"
          ></i>

          <i
            class="fa fa-trash"
            style="
              font-size: 24px;
              color: red;
              margin-left: 10px;
              cursor: pointer;
            "
            @click="deleteTemplate(props.row._id)"
          ></i>
        </span>
      </template> -->
    </vue-good-table>
  </div>
</template>

<script>
import moment from "moment";
import message from "../../../message";
import Multiselect from "vue-multiselect";

// import { VueEditor } from "vue2-editor";
// import VueDocumentEditor from 'vue-document-editor'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Users",
  },
  components: {
    // VueEditor,
    // VueDocumentEditor
    multiselect: Multiselect,

  },
  computed: {
  getfilterdata() {
    const matchedRows = this.rows.filter((row) => row.id == this.use_id);
    if(this.use_id!=null) {
      return matchedRows;
    } else {
      console.log("hkdshkchsdjk",this.rows)
      return this.rows;
    }
  },
},

  data() {
    return {
      logo: require("@/assets/images/faces/17.jpg"),
      use_id:null,
      matchUser: "",
      allUsers: [],
      role: "",
      selected: null,
      aadharFront: null,
      aadharBack: null,
      divinglicense: null,
      divinglicenseBack: null,
      passportBack: null,
      passport: null,
      isView: false,
      // userBalance: "",
      // referralBalance: "",
      // totalBalance: "",
      // securityBalance: "",
      isModalOpen: false,

      columns: [
        {
          label: "",
          field: "img",
        },
        {
          label: "Name",
          field: "full_name",
        },
        {
          label: "Email/Mobile",
          field: "information",
        },
        {
          label: "Created at",
          field: "date_joined",
        },
        // {
        //   label: "FAS Tag",
        //   field: "fastag",
        // },
        {
          label: "Action",
          field: "button",
        },

        // {
        //   label: "Balance",
        //   field: "balance_show",
        // }, 
        // {
        //   label: "Local address",
        //   field: "local_address",
        // },
        // {
        //   label: "passport",
        //   field: "passport",
        // },
        // {
        //   label: "Residential address",
        //   field: "residential_Address",
        // },
        // {
        //   label: "Actions",
        //   field: "button",
        // },
      ],
      rows: [],
      originalRows:[],
      form: {
        templateId: "",
        name: "",
        content: "",
      },
      generateIDloader: false,
      submitloader: false,
      isEdit: false,
      loader: false,
      isHide: false,
      matchUser:""
    };
  },
  created() {
    // this.getAllUsers();
    this.getAllTransaction();
    this.role = parsedUser.data.role;
    this.originalRows = [...this.rows];
   
  },
  methods: {
    openModal(rowData) {
      this.aadharFront = rowData.aadhar_card;
      this.aadharBack = rowData.back_aadhar_card;
      this.divinglicense = rowData.driving_lincense;
      this.divinglicenseBack = rowData.back_driving_lincense;
      this.passportBack = rowData.back_passport;
      this.passport = rowData.passport;

      this.isModalOpen = true;
    },
    vueDocuments(rowData) {
      this.popUpWindow = true;
    },
    // getAllUsers() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("account/")
    //     .then((res) => {
    //       let rowData = [];

    //       if (res.apidata.length > 0) {
    //         rowData = res.apidata;
    //         rowData = res.apidata.filter((value) => !value.is_superuser);
    //         rowData = res.apidata.filter(
    //           (value) => value.first_name !== null && value.last_name !== null
    //         );
    //         // rowData.forEach((element) => {
    //         //   element.time = element.time
    //         //     ? moment(element.time).format("DD/MM/YYYY")
    //         //     : "";
    //         // });
    //         rowData.forEach((value) => {
    //           // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
    //           value.full_name =
    //             value.first_name || value.last_name
    //               ? value.first_name + " " + value.last_name
    //               : "";
    //         });
    //       }
    //       this.allUsers = rowData.map((e) => e.full_name);
    //       this.usersInfo = rowData.map((user) => ({
    //         id: user.id,
    //         fullName: user.full_name,
    //       }));
        



    //       console.log("jjkkj",rowData)
    //       this.rows = rowData;


    //       this.loader = false;
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //     });
    // },

//     handleChange(user) {
//     if (user) { //Ensure user is not null or undefined 
//         // Assuming `user` is an object with an `id` property
//         const userId = user.id; // Extract the ID of the selected option
//         this.getAllTransaction(
//             this.startDate,
//             this.endDate,
//             userId, // Pass the user ID to getAllTransaction
//             this.selectCar
//         );
//     }
// },

// handleChange(user) {
//   console.log(user);
//   const use_id = this.usersInfo.find((e) => e.fullName == user);
//   console.log(use_id);
//   if (use_id) {
//     const matchedRows = this.rows.filter((row) => row.id === use_id.id);
//     console.log(matchedRows);
//     this.rows = matchedRows;

//   }
// },



handleChange(user) {
  console.log(user);
  const use_id1 = this.usersInfo.find((e) => e.fullName == user);
  console.log(use_id1);
  if (use_id1) {
   this.use_id =use_id1.id;
  }

},







//   getAllTransaction(startDate, endDate, uId, carId) {
//   this.loader = true;
//   let query = ``;
//   if (startDate) {
//     query = query + `startDate=${startDate}`;
//   }
//   if (endDate) {
//     query = query + `&endDate=${endDate}`;
//   }
//   if (uId) { // Use uId instead of id
//     query += `id=${uId}`; // Append user ID to the query
//   }
//   if (carId) {
//     query = query + `&reg_number=${carId}`;
//   }
//   this.$apiService
//     .getCall(`account/?${query}`)
//     .then((res) => {
//       let rowData = [];

      
//         // if (this.role === "Admin") {
//         //   this.allDate = res.apidata.map((e) => e.time);
//         //   rowData = res.apidata.filter((value) => value.userId == this.userId);
//         // } else {
//         //   this.allUsers = res.apidata.map((e) => e.full_name);
//         //   this.usersInfo = res.apidata.map((user) => ({
//         //     id: user.id,
//         //     fullName: user.full_name,
//         //   }));
//         //   rowData = res.apidata;
//         // }
//         rowData =res.apidata;
        
//         rowData.forEach((element) => {
//           element.date_joined = element.date_joined
//             ? moment(element.date_joined).format("DD MMM YYYY h:mm A")
//             : "";
//             element.full_name =
//             element.first_name || element.last_name
//                   ? element.first_name + " " + element.last_name
//                   : "";
//         });
//         this.allUsers = rowData.map((e) => e.full_name);
//           this.usersInfo = rowData.map((user) => ({
//             id: user.id,
//             fullName: user.full_name,
//           }));
      
      
        
//       this.rows = rowData;
//       console.log("rowData", rowData);

//       this.loader = false;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
//       this.loader = false;
//     });
// },
    // formatPrice(value) {
    //   let val = (value / 1).toFixed(0).replace(".", ",");
    //   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // },
    
    clickViewUsers(id) {
      this.$router.push("/app/myDesk/usersProfile?id=" + id);
    },
    // clickDownload() {
    //   const url='https://c8.alamy.com/comp/EE0F4R/crying-baby-with-dummy-EE0F4R.jpg';
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.download = "Aadhar.png";
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // },

    clickUnBlock(userId) {
      this.loader = true;
      const reqData = {
        accessStatus: "False",
      };
      this.$apiService
        .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
        .then((res) => {
          if (!res.apidata.isError) {
            this.$toaster.makeToast("success", "User  successfully unblocked");
            this.getAllUsers();
            this.loader = false;
          }
        })
        .catch((error) => {
          this.loader = false;
          this.$toaster.makeToast("warning", "Have Server error");
        });
    },
    // getAllUsers() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("account/")
    //     .then((res) => {
    //       let rowData = [];

    //       if (res.apidata.length > 0) {
    //         // rowData = res.apidata;
    //         rowData = res.apidata.filter((value) => !value.is_superuser);
    //         // rowData.forEach((element) => {
    //         //   element.time = element.time
    //         //     ? moment(element.time).format("DD/MM/YYYY")
    //         //     : "";
    //         // });
    //         rowData.forEach((value) => {
    //           value.date_joined = value.date_joined
    //             ? moment(value.date_joined).format("DD/MM/YYYY")
    //             : "";
    //           value.full_name =
    //             value.first_name || value.last_name
    //               ? value.first_name + " " + value.last_name
    //               : "";
    //         });
    //       }
    //       this.rows = rowData;

    //       this.loader = false;
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       this.loader = false;
    //     });
    // },
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
    clickBlock(userId) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to block this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, blocked it!",
      })
        .then((result) => {
          if (result.value) {
            this.$swal("User Blocked!", "User has been Blocked.", "success");
            const reqData = {
              accessStatus: "True",
            };
            this.$apiService
              .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
              .then((res) => {
                if (!res.apidata.isError) {
                  this.$toaster.makeToast(
                    "success",
                    "User successfully blocked"
                  );
                  this.getAllUsers();
                  this.loader = false;
                }
              });
          }
        })
        .catch((error) => {
          this.$toaster.makeToast(
            "warning",
            "User can't blocked! Srever failed"
          );
        });
    },
    clearform() {
      this.form = {};
      this.isEdit = false;
      this.submitloader = false;
      this.generateIDloader = false;
      this.$bvModal.hide("modal-lg");
    },
    clearFilters() {
  this.selected ="Select User"
  this.use_id = null;
},

  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.circular-image {
  height:40px;
  width:40px;
  border-radius: 50%;
  max-width: fit-content !important;
}
.for-document {
  border-radius: 50%;
}
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
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

.popup-Container {
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 110;
}

.pop_up {
  position: absolute;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-height: 60%;
  background-color: white;
  z-index: 110;
  overflow-y: auto;
}
.closePopup {
  position: absolute;
  top: 0;
  right: 20px;
  height: 50;
  width: 50;
  border-radius: 50%;
  background: grey;
}

.blueVerfiy {
  background-color: #3b82f6;
  /* color: #3b82f6; */
}
.blueVerfiy2[data-v-6cdc9553] {
  background-color: #3b82f6;
  color: #ffffff;
  padding-left: 3px;
}

.blueVerfiyred {
  background-color: #f63b3b;
  /* color: #3b82f6; */
}
.blueVerfiy2red[data-v-6cdc9553] {
  background-color: #f63b3b;
  color: #ffffff;
  padding-left: 3px;
}


.col-md-3 {
    position: relative;
    width: 100%;
    min-height: 1px;
   padding-right: 0px !important;
     padding-left: 0px !important;
    
    
    }




</style>
