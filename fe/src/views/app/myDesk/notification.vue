<template>

  
  <div class="maim-container">
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>


    <div class="d-flex flex-column gap-5" style="gap: 13px">
      <div class="card">
        <div
          class="card-header d-flex flex-row justify-content-between"
          style="background-color: white"
        >
          <h4
            class="card-title"
            style="margin: 0px; background-color: white; color: #000000c4"
          >
            {{ $t('Filters') }}
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <div class="heading-elements">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <li>
                <a data-action="collapse pe-auto" @click="toggleFlexDiv"
                  ><i
                    class="fa fa-chevron-circle-down"
                    aria-hidden="true"
                    style="cursor: pointer"
                  ></i
                ></a>
              </li>
              <li>
                <a data-action=" pe-auto" @click="clearFilters"
                  ><i
                    class="fa fa-refresh"
                    aria-hidden="true"
                    style="cursor: pointer"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <b-row class="px-3 pb-3 pt-2 mt-1" :style="{ display: flexDivDisplay }">
          <b-col md="3" class="">
         
            <label for="users-list-search">   {{ $t('Search') }} </label>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control"
                id="users-list-search"
:placeholder="$t('Search...')" 
                style="
                  color: grey;
                  padding-bottom: 7px;
                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="searchTerm"
              />
            </fieldset>
          </b-col>
          <b-col md="3" class="d-none">
            <label for="users-list-verified">  {{ $t('Action') }}</label>
            <fieldset class="form-group">
              <select
                class="form-control"
                id="users-list-verified"
                style="
                  color: grey;
                  padding-bottom: 7px;
                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="selectedStatus"
              >
                <option value="">{{ $t('All') }}</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Waiting Approval">Waiting Approval</option>
                <option value="Pending Registration">
                  Pending Registration
                </option>
              </select>
            </fieldset>
          </b-col>

          <b-col md="3" class="d-none flex-column">
            <label for="users-list-search"> {{ $t('Select Start Date') }}</label>

            <v2-datepicker
              class="for-date-picker"
              lang="en"
              ref="startDate"
              v-model="startDate"
              :picker-options="{
                disabledDate: time => time.getTime() > new Date().getTime()
              }"
              @change="changeStartDate"

:placeholder="$t('Select Start Date')" 

            ></v2-datepicker>
          </b-col>
          <b-col md="3" class="d-none flex-column">
            <label for="users-list-search">{{ $t('Select End Date') }}</label>

            <v2-datepicker
              class="for-date-picker"
              lang="en"
              ref="endDate"
              v-model="endDate"
              :picker-options="{
                disabledDate: time =>
                  time.getTime() < new Date(this.startDate).getTime()
              }"
              :disabled="this.startDate ? false : true"
              @change="changeEndDate"
              :placeholder="$t('Select End Date')" 

            ></v2-datepicker>
          </b-col>
            <b-col md="3" class="d-none">
            <label for="users-list-verified"> {{ $t('Min Earnings') }}</label>
            <fieldset class="form-group">
              <input
                type="number"
                class="form-control"
                id="users-list-amount"
              :placeholder="$t('Min Earnings')" 

                style="
                  color: grey;

                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="searchAmount"
              /></fieldset
          ></b-col>
          <b-col md="3" class="d-none">
            <label for="users-list-verified">{{ $t('Max Earnings') }}</label>
            <fieldset class="form-group">
              <input
                type="number"
                class="form-control"
                id="users-list-amount-max"
              :placeholder="$t('Max Earnings')" 

             
                style="
                  color: grey;

                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="searchMaxAmount"
              /></fieldset
          ></b-col>
        </b-row>
      </div>
      <div class="d-flex flex-column gap-5 card">
        <div
          class="card-header d-flex flex-row justify-content-between"
          style="background-color: white"
        >
          <h4
            class="card-title"
            style="margin: 0px; background-color: white; color: #000000c4"
          >
               {{ $t('Notification') }}
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <div class="heading-elements"  v-if="role != 'user'">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <button
             @click="clickNotificationAdd()"
                class="btn btn-primary mb-3"
                style="
                  padding-top: 2px;
                  padding-bottom: 2px;
                  background: white;
                  color: #000000a8;
                  border: 1px solid gray;
                "
              > 
                   {{ $t('Add New') }}
              </button>
              <!-- <li><a data-action="close pe-auto"><i class="fa fa-times" aria-hidden="true" style="
    cursor: pointer;
"></i></a></li> -->
            </ul>
          </div>
        </div>
        <div class="card-body">
          <vue-good-table
            :columns="columns"
            :line-numbers="false"
            :pagination-options="paginationOptions"
            styleClass="tableOne vgt-table"
            :rows="filteredRows"
          >
            <template slot="table-row" slot-scope="props">
        

              <span v-if="props.column.field === 'body'">
                <div>
                  <div>
                    {{ props.row.body }}
                  </div>
                </div>
              </span>

              <span v-else-if="props.column.field === 'title'">
                <div>
                  <div>{{ props.row.title }}</div>
                </div>
              </span>
              <span v-else-if="props.column.field === 'createdAt'">
                <div>
                  <div>{{ props.row.createdAt }}</div>
                </div>
              </span>
        
            </template>
          </vue-good-table>
        </div>

        <!-- <div v-if="loader" class="loader">No data is available</div> -->
      </div>
    </div>


    <b-modal
      id="modal-attachment-notification-Add-Notification"
      size="md"
      hide-footer
      title="Notification"
      scrollable
    >
    <b-row class="">
        <b-col md="12">
          <b-form-group   :label="$t('Title')" label-for="input-name">
            <b-form-input
              v-model="title"
              required
     
               :placeholder="$t('Title')"
              style="height: 34px"
              type="text"
              id="input-name"
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group    :label="$t('Body')" label-for="input-title">
            <b-form-input
              v-model="body"
              required
           
              :placeholder="$t('Body')"
    
              style="height: 34px"
              type="text"
              id="input-name"
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group    label-for="input-title">
            <div><label class="typo__label">Select Member</label>
              <!-- <multiselect
              @input="handleChange"
      v-model="selectedName"
      placeholder="Select Member"
      :options="allUsers"
      :multiple="true"
      :limit="1"
      label="fullName"
            ></multiselect> -->

            <div>
    <multiselect
      v-model="selectedUsers"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="fullName"
      track-by="_id"
      :options="allUsers"
      :multiple="true"
      :taggable="true"
      @tag="addTag">
    </multiselect>
    <div v-if="selectedUsers.length" >
      <span class="d-none">{{ displaySelectedUsers }}</span>
    </div>
  </div>
  </div>
          </b-form-group>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <!-- <div class="spinner spinner-primary mr-3" v-if="loader"></div> -->
            <b-button v-if="!imgLoader" class="mr-2" @click="closeModal()"
              >  {{ $t('Close') }}</b-button
            >
            <b-button
              v-if="!imgLoader"
              
              variant="primary ripple"
              @click="formSubmitAddMember()"
              >  {{ $t('Add') }}</b-button
            >
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-modal>



    <!-- <b-card v-for="(data, index) in data" :key="index" class="mt-2 bg-gray-300">
      <b-row>
        <b-col>{{ data }}</b-col>
      </b-row>
    </b-card> -->
    <!-- <div class="auth-content">
        <div class="card o-hidden">
          <div class="row">
            <b-col md="12">
              hii
              
            </b-col>
          </div>
        </div>
      </div> -->
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'

import moment from "moment";
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Notification Page",
  },

  components: {

    Multiselect
  },

  data() {
    return {
      title:'',
      body:'',
      selectedUsers: [],
      selectedIds: [],
  
      allUsers:[],
 
      validationId: "",
      email: "",
      // bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      password: "",
      repeatPassword: "",
      data: [
        "1 hii this mass inf. you for ghjghjgh..",
        " 2 hii this mass inf. you forhjhj ..",
        "3 hii this mass inf. you forjjg ..",
        "4 hii this mass inf. you for jhghj..",
      ],
      columns: [
     


        {

label: this.$t('Title'),

field: 'title',
filterOptions: {
  enabled: true,

  placeholder: this.$t('Title'),

}
},
{

label: this.$t('Notifications'),


field: 'body',
filterOptions: {
  enabled: true,

  placeholder: this.$t('Notifications'),

}
},
{

label: this.$t('Date/time'),


field: 'createdAt',
filterOptions: {
  enabled: true,

  placeholder: this.$t('Date/time'),

}
},


      ],
      paginationOptions: {
        enabled: true,
        mode: 'recordsPerPage', // Set pagination mode to 'recordsPerPage'
        perPageDropdown: [10, 20, 50], // Set options for number of records per page
 

        nextLabel: this.$t('Next'),
        prevLabel: this.$t('Previous'),
      },
      loader: false,
      rows: [],
      userId: "",
      submitStatus: null,
      successMessage: false,
      errorMessage: false,
      user_id:'',
      role:'',

      searchTerm:'',
      flexDivDisplay: 'flex!important',
      IdS:[],

    };
  },
  computed:
  {
    filteredRows() {

      const query = this.searchTerm.toLowerCase().trim()
     
      return this.rows.filter(row => {
        const matchesQuery = query
          ? (row.body && row.body.toLowerCase().includes(query)) ||
            (row.title &&
              row.title.toLowerCase().includes(query))
          : true


        return matchesQuery 
      })
    },
    displaySelectedUsers() {
      // Debugging logs for selectedUsers
      debugger
      console.log("Selected Users:", this.selectedUsers);

      // Get all keys of the selectedUsers object
      const keys = Object.keys(this.selectedUsers);

      // Case when only one user is selected
      if (keys.length === 1) {
        const user = this.selectedUsers[keys[0]];
        return user.id; // Assuming id is directly accessible
      } 
      // Case when multiple users are selected
      else if (keys.length > 1) {
        const firstUser = this.selectedUsers[keys[0]];
        return `${firstUser.id} + ${keys.length - 1} others`;
      }


      const ids = this.selectedUsers.map(obj => obj._id);
      // Logging extracted ids
      console.log("Extracted Ids:", ids);

      // Return an empty string if no users are selected or handled above cases
      return '';
    }
,
    selectedUserIds() {
      return this.selectedUsers.map(user => user._id);
     
    },

    

  },
  created() {    
    this.getAllUsers();
    var storedUser = localStorage.getItem("userInfo");
    var parsedUser = JSON.parse(storedUser);
    // this.role = parsedUser.data.role;
    this.userId = parsedUser.data.id;
    // this.validationId = this.$route.query._id;
    this.AllNotification();

  },

  mounted() {   

    this.AllNotification();
 

  },
  methods: {

    
    handleChange(user) {
      this.selectedIds = user._id

      // // Filter the rows based on the user_name
      // const matchedRows = this.rows.filter(row => row.first_name === user);

      // // Update the rows with the filtered results
      // this.rows = matchedRows;

      // Log the matched rows to the console
    },

    async getAllUsers() {
      console.log("Id",this.selectedUsers)
      this.loader = true
      try {
        const response = await this.$apiService.getCall('user/get-all-members')
        if (
          response &&
          response.isError === false &&
          response.apidata &&
          response.apidata.data
        ) {
          const userData = response.apidata.data
      
          this.allUsers = userData

          const usersWithFullName = userData.map(user => ({
            ...user,
            fullName: `${user.name} ${user.surname}`
          }))

          this.allUsers = usersWithFullName
        } else {
          this.$toaster.makeToast('warning', 'Failed to fetch user data')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        this.$toaster.makeToast('error', 'Error fetching user data')
      } finally {
        this.loader = false
      }
    },

    addTag(newTag) {
      const tag = {
        _id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
        fullName: newTag
      };
      this.allUsers.push(tag);
      this.selectedUsers.push(tag);
      console.log("Id",this.selectedUsers._id)

    },


    formSubmitAddMember() {
  debugger
  this.user_id = localStorage.getItem('user_id');
  this.role = localStorage.getItem('role');

  const userData = this.selectedUsers;
  const IdHai = userData ? userData.map(user => user._id) : [];

  console.log("IdHai", IdHai);
  this.imgLoader = true;

  let requestData = {
    title: this.title,
    body: this.body,
    sender_id: this.user_id,
    target_id: IdHai,
    for_all: IdHai.length === 0
  };

  this.$apiService
    .postCall("group_messages/create", requestData)
    .then((user) => {
      this.imgLoader = false;
      if (user.error) {
        this.$toaster.makeToast("warning", user.message);
      } else {
        this.$bvModal.hide("modal-attachment-notification-Add-Notification");
        this.$toaster.makeToast("success", this.$t("Notification created successfully"));

        this.title = "";
        this.body = "";
        this.selectedUsers = [];
        this.AllNotification();
        this.getAllUsers();
      }
    })
    .catch((error) => {
      this.$toaster.makeToast("warning", "Error: server error");
      this.imgLoader = false;
      this.$store.commit("setError", { message: error });
    });
}
,
    clickNotificationAdd() {
      // this.$router.push("/app/myDesk/notification");
      this.$bvModal.show("modal-attachment-notification-Add-Notification");

    },

    closeModal(){
      this.$bvModal.hide("modal-attachment-notification-Add-Notification");
      this.title = "";
        this.body = "";
        this.selectedUsers = [];

    },
    
    async AllNotification() {
    
  this.loader = true;
  this.user_id = localStorage.getItem('user_id');
  this.role = localStorage.getItem('role');
  

  let requestData = {};

  if (this.role === 'user') {
    requestData.user_id = this.user_id;
  } else if (this.role === 'admin') {
    requestData.user_id = ''; 
  }


  try {
    const res = await this.$apiService.postCall(
      `group_messages/all-messages`,
      requestData
    );

    if (res.error) {
      this.loader = false;
      this.$toaster.makeToast("warning", res.message);
    } else {
      this.loader = false;
      console.log("notificationInner", res); 
      const paymentData = res.apidata.data; 
      paymentData.forEach(e => {
              
                e.createdAt = moment(e.createdAt).format(
                  'DD MMM YYYY h:mm A'
                )
              })

              this.rows = paymentData
      
    }
  } catch (error) {
    this.loader = false;
    this.$toaster.makeToast("warning", "Error: server error");
    this.$store.commit("setError", { message: error });
  }
}

,
toggleFlexDiv() {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
    },
    clearFilters() {
      this.searchTerm = ''
    
      this.fetchPublisher()
    },

  },
};



</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}
.spinner.sm {
  height: 2em;
  width: 2em;
}
.fa-chevron-circle-down
{
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}
.fa-refresh {
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}

.fa-times {
  content: '\f13a';
  color: #808080cf;
  width: 20px;
}
</style>
