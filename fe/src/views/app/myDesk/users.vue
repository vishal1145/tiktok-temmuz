<template>
  <div class="main-content">
    <div class="font-weight-bold fa-2x text-light">Members</div>
    <hr class="mt-1" />  

    <b-modal
      v-model="modalVisible"
      id="modal-add"
      size="md"
      title="Add Publisher"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
    <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">{{
        isEdit ? 'In Progress' : 'In Progress'
      }}</label>
      <b-row class="px-3">
    
            <!-- <b-form-textarea
              v-model="description"
              required
              placeholder="Description"
              style="height: 60px"
              type="text"
              id="input-description"
            ></b-form-textarea>
          </b-form-group> -->

        <b-col>
          <div class="d-flex justify-content-end">
            <b-button class="mb-2 mr-2" @click="closeModal12()">Close</b-button>
       
          </div>
        </b-col>
      </b-row>
    </b-modal>
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

    
 <div  class="d-flex flex-row justify-content-between pb-2 d-none">
     <b-col class="d-none" md="3" style="
    padding-right: 0px !important;
    padding-left: 0px !important;
    clas
">
        <multiselect @input="handleChange" v-model="selected" placeholder="Select users" :options="[...allUsers]"
          :multiple="false" :limit="1"></multiselect>
      </b-col>
      <div class="for-gap d-none">
      <button @click="clearFilters" class="btn btn-primary">Clear Filter</button>
    </div>

 </div>



 <div class="pb-2">
      <div class="card">

        <div
            class="card-header d-flex flex-row justify-content-between flex-wrap"
            style="background-color: white;
"
          >
            <h4
              class="card-title"
              style="margin: 0px;background-color: white;color: #000000c4;"
            >
              Filters
            </h4>
            <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
            <div class="heading-elements">
              <ul
                class="list-inline mb-0 d-flex flex-row justify-content-around"
                style="gap: 9px;"
              >
                <li>
                  <a data-action="collapse pe-auto" @click="toggleFlexDiv"
                    ><i
                      class="fa fa-chevron-circle-down"
                      aria-hidden="true"
                      style="cursor: pointer;"
                    ></i
                  ></a>
                </li>
                <li>
                  <a data-action=" pe-auto" @click="clearFilters"
                    ><i
                      class="fa fa-refresh"
                      aria-hidden="true"
                      style="
    cursor: pointer;
"
                    ></i
                  ></a>
                </li>
                <!-- <li><a data-action="close pe-auto"><i class="fa fa-times" aria-hidden="true" style="
    cursor: pointer;
"></i></a></li> -->
              </ul>
            </div>
          </div>
                  
                        <div class="card-content collapse show"   :style="{ display: flexDivDisplay }">
                            <div class="card-body ">
                                <div class="users-list-filter">
                                    <form>
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-lg-3">
                                                <label for="users-list-role">Role</label>
                                                <fieldset class="form-group">
                                                  <multiselect @input="handleChange" v-model="selected" placeholder="Select users" :options="[...allUsers]"
          :multiple="false" :limit="1"></multiselect>
                                                </fieldset>
                                            </div>
                                            <div class="col-12 col-sm-6 col-lg-3">
                                                <label for="users-list-status">Status</label>
                                                <fieldset class="form-group">
                                                    <select class="form-control multiselect__tags" id="users-list-status" style="
    color: gray;
    padding-bottom: 7px;
">
                                                        <option value="">All</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Blocked">Blocked</option>
                                                        <option value="deactivated">Deactivated</option>
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <div class="col-12 col-sm-6 col-lg-3">
                                                <label for="users-list-verified">Verified</label>
                                                <fieldset class="form-group">
                                                    <select class="form-control multiselect__tags" id="users-list-verified" style="
    color: gray;
    padding-bottom: 7px;
">
                                                        <option value="">All</option>
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                </fieldset>
                                            </div>
                                        
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
         </div>

</div>





 
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
<div class="card"> <div class="card-body">  <vue-good-table
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
    :rows="getfilterdata"
  >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field === 'img'">
        <img
          :src="props.row.image ? props.row.image : logo"
          alt="Image"
          class="circular-image"
        />
      </span>
      <span v-else-if="props.column.field === 'name'">
        <div class="d-flex">
          {{ props.row.name }} &nbsp;{{ props.row.surname }}
        </div>
      </span>
      <span v-else-if="props.column.field === 'tiktok_username'">
        <div class="d-flex">
          {{ props.row.tiktok_username }}
        </div>
      </span>
      <span v-else-if="props.column.field === 'contact_number'">
        <div class="d-flex flex-column">
          <div class="d-flex">
            {{ props.row.contact_number }}
          </div>
          <!-- <div>{{ props.row.contact_number }}</div> -->
        </div>
      </span>
      <span v-else-if="props.column.field === 'button'">
        <div>
          <!-- Add your button actions here -->
        </div>
      </span>
    </template>
  </vue-good-table></div> </div>

 

  
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
    pageReloaded: false,
    modalVisible: false,
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
          label: "Name",
          field: "name",
          filterOptions: {
            enabled: true,
            placeholder: 'Search name',
          },
        },
        {
          label: "Contact Number",
          field: "contact_number",
          filterOptions: {
            enabled: true,
            placeholder: 'Search Number',
          },
        },
        {
          label: "TikTok Name",
          field: "tiktok_username",
          filterOptions: {
            enabled: true,
            placeholder: 'Search TikTok',
          },
        },
        {
          label: "Action",
          field: "button",
          filterOptions: {
            enabled: false,
          },
        },
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
      flexDivDisplay: "flex!important",
      matchUser:"",
     
            name: "",
            contact_number: "",
            email: "",
 
         

    };
  },
  created() {
    this.getAllUsers()
    this.getAllTransaction();
    this.role = parsedUser.data.role;
    this.originalRows = [...this.rows];

    this.reloadPageOnce();

  },
  methods: {

    reloadPageOnce() {
        if (!this.pageReloaded) {
          window.location.reload();
            this.pageReloaded = true;
        }
    },

    toggleFlexDiv() {
      this.flexDivDisplay =
        this.flexDivDisplay === "flex!important"
          ? "none!important"
          : "flex!important"; // Toggle the display property
    },

    clearFilters()
    {
      this.getAllUsers();
  this.selected ="Select User"

    },
    openModal12() {
      // Set the flag to true to show the modal
      this.modalVisible = true;
    },
    closeModal12() {
      // Set the flag to false to hide the modal
      this.modalVisible = false;
    },
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

handleChange(user) {
  debugger;

  // Filter the rows based on the user_name
  const matchedRows = this.rows.filter((row) => row.name === user);

  // Update the rows with the filtered results
  this.rows = matchedRows;


  // Log the matched rows to the console
  console.log("Matched Rows:", matchedRows);
},




// handleChange(user) {
//   console.log(user);
//   const use_id1 = this.usersInfo.find((e) => e.user_name == user);
//   console.log(use_id1);
//   if (use_id1) {
//    this.use_id =use_id1.id;
//   }

// },







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
//  getAllUsers() {
//       this.loader = true;
//       this.$apiService
//         .getCall("account/")
//         .then((res) => {
//           let rowData = [];

//           if (res.apidata.length > 0) {
//             // rowData = res.apidata;
//             rowData = res.apidata.filter((value) => !value.is_superuser);
//             // rowData.forEach((element) => {
//             //   element.time = element.time
//             //     ? moment(element.time).format("DD/MM/YYYY")
//             //     : "";
//             // });
//             rowData.forEach((value) => {
//               value.date_joined = value.date_joined
//                 ? moment(value.date_joined).format("DD/MM/YYYY")
//                 : "";
//               value.full_name =
//                 value.first_name || value.last_name
//                   ? value.first_name + " " + value.last_name
//                   : "";
//             });
//           }
//           this.rows = rowData;

//           this.loader = false;
//         })
//         .catch((error) => {
//           this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
//           this.loader = false;
//         });
//     },






  getAllUsers() {
  this.loader = true;
  this.$apiService
    .getCall("user/get-all-members")
    .then((response) => {
      // console.log("Response:", response);
      if (response && response.isError === false && response.apidata && response.apidata.data) {
        const userData = response.apidata.data;
        // console.log("User data:", userData);
        this.rows = userData;
        this.allUsers = userData.map((e) => e.name);
        

      
        //  this.$toaster.makeToast("success", "User data fetched successfully");
      } else {
        this.$toaster.makeToast("warning", "Failed to fetch user data");
      }
      this.loader = false;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      this.$toaster.makeToast("error", "Error fetching user data");
      this.loader = false;
    });
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
//     clearFilters() {
//   this.selected ="Select User"
//   this.use_id = null;
// },

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


    .multiselect__placeholder {
    color: #adadad;
    display: inline-block;
   margin-bottom: -4px!important;
    padding-top: 2px;
}


.fa-chevron-circle-down {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}

.fa-refresh {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}

.fa-times {
  content: "\f13a";
  color: #808080cf;
  width: 20px;
}



</style>
