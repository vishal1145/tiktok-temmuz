<template>
  <div class="">
    <!-- <div class="font-weight-bold fa-2x text-light">Creators</div>
    <hr class="mt-1" /> -->
    <b-modal
      v-model="showAddModal"
      id="modal-add"
      size="md"
      title="Add Publisher"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Add Creators
      </label>
      <b-row class="px-3">
        <b-col md="12" v-if="role == 'admin'">
          <b-form-group label="Select Member" label-for="input-title">
            <!-- <b-form-select
              v-model="selectedUserId"
              :options="userNames"
              required
              placeholder="Select User Name"
              id="input-name"
            >
            </b-form-select> -->

            <multiselect
          @input="handleChange"
          v-model="selectedName"
        
          placeholder="Select Member"
          :options="[...allUsers]"
          :multiple="false"
          :limit="1"
          label="name"
     
        ></multiselect>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="First Name" label-for="input-first-name">
            <b-form-input
              v-model="first_name"
              required
              placeholder="First name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-first-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Last Name" label-for="input-last-name">
            <b-form-input
              v-model="last_name"
              required
              placeholder="Last name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-last-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="TikTok Username"
            label-for="input-tiktok-username"
          >
            <b-form-input
              v-model="tiktok_username"
              required
              placeholder="TikTok username"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-tiktok-username"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Contact Number" label-for="input-contact-number">
            <b-form-input
              v-model="contact_number"
              required
              placeholder="Contact number"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="number"
      @keydown="checkLengthPhone"
              id="input-contact-number"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="Agency Center Code"
            label-for="input-agency-center-code"
          >
            <b-form-input
              v-model="agency_center_code"
              required
              placeholder="Agency center code"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="number"
      @keydown="checkLengthPhone2"
              id="input-agency-center-code"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Select Images" label-for="input-images">
            <b-form-file
              v-model="images"
              @input="handleImageSelection"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
              accept=".png,.jpg,.jpeg"
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col md="6" class="justify-content-end d-flex align-items-center py-2">
          <img
            v-if="uplodedImages"
            :src="uplodedImages"
            alt=""
            class="img-fluid"
            height="50"
            width="50"
          />
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <b-button v-if="!imgLoader" class="mb-2 mr-2" @click="closeModal()">
              Close
            </b-button>
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="addPublisher()"
            >
              Add
            </b-button>
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      v-model="showAddModalEdit"
      id="modal-add"
      size="md"
      title="Add Publisher"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Update publisher
      </label>
      <b-row class="px-3">

        <b-col md="12">
          <b-form-group label="First Name" label-for="input-first-name">
            <b-form-input
              v-model="getFirstName"
              required
              placeholder="First name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-first-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Last Name" label-for="input-last-name">
            <b-form-input
              v-model="getLastName"
              required
              placeholder="Last name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-last-name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-form-group label="TikTok User Name" label-for="input-last-name">
            <b-form-input
              v-model="getTikTok"
              required
              placeholder="Last name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-last-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- <b-col md="12">
          <b-form-group label="Name" label-for="input-title">
            <b-form-input
              disabled
              v-model="getpublisherName"
              required
              placeholder="First Name"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="text"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col> -->
        <b-col md="12">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-input
              v-model="getphoneNumber"
              required
              placeholder="Contact number"
                @keydown="checkLengthPhoneEdt"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="number"
              id="input-phoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Agency center code" label-for="input-title">
            <b-form-input
              v-model="getcenterCode"
              required
              placeholder="Agency center code"
           style="height: 43px;background-color: white;border: 1px solid #80808038;"
              type="number"
              id="input-agency"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Select Images" label-for="input-images">
            <b-form-file
              v-model="getImages"
              @input="handleImageSelection"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
              accept=".png,.jpg,.jpeg"
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          class="justify-content-end d-flex align-items-center py-2"
        >
          <img
            :src="this.uplodedImages"
            alt=""
            class="img-fluid"
            height="50"
            width="50"
          />
        </b-col>

        <!-- <b-form-group label="" label-for="input-description">
            <b-form-textarea
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
            <!-- <div class="spinner spinner-primary mr-3" v-if="loader"></div> -->
            <b-button
              v-if="!imgLoader"
              class="mb-2 mr-2"
              @click="closeModalEdit()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="editPublisher()"
              >Update</b-button
            >
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    
    <b-modal
      id="modal-cancelReason"
      size="md"
      title="Reason for cancellation:"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <b-row class="p-3">
        <b-col md="12">
          <i
            class="fa fa-exclamation-triangle text-danger mb-3"
            aria-hidden="true"
          >
            Reason for cancellation:
          </i>
        </b-col>

        <b-col md="12">
          <b-form-group label="" label-for="input-2">
            <b-form-textarea
              v-model="cancelReasonText"
              required
              placeholder="Reason for cancellation"
              style="height: 100px"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class="mb-2"
              variant="primary ripple"
              @click="clickRejectButton()"
              >ok</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>
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
            Filters
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
              <!-- <li><a data-action="close pe-auto"><i class="fa fa-times" aria-hidden="true" style="
    cursor: pointer;
"></i></a></li> -->
            </ul>
          </div>
        </div>
        <div
          class="d-flex flex-row card-body flex-wrap"
          :style="{ display: flexDivDisplay }"
        >
          <div
            class="col-12 col-sm-6 col-lg-3"
            style="padding-right: 0px; padding-left: 0px"
          >
            <label for="users-list-search">Search</label>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control"
                id="users-list-search"
                placeholder="Search..."
                style="
                  color: grey;
                  padding-bottom: 7px;
                  border: 1px solid rgba(128, 128, 128, 0.32) !important;
                  background-color: rgb(135 131 131 / 0%);
                "
                v-model="searchTerm"
                @input="onSearchTermChange"
              />
            </fieldset>
          </div>

          <div class="col-12 col-sm-6 col-lg-3 paddingzero">
            <label for="users-list-verified">Action</label>
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
                @change="onStatusChange"
              >
                <option value="">All</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Under Review">Under Review</option>
              </select>
            </fieldset>
          </div>

          <!-- <div class="col-12 col-sm-6 col-lg-3">
    <button
      class="btn btn-primary mt-4"
      @click="clearFilters"
      style="padding: 7px; border: 1px solid #80808052 !important;"
    >
      Clear Filters
    </button>
  </div> -->
        </div>
      </div>
      <div class="d-flex flex-column gap-5 card" style="gap: 13px">
        <div
          class="card-header d-flex flex-row justify-content-between"
          style="background-color: white"
        >
          <h4
            class="card-title"
            style="margin: 0px; background-color: white; color: #000000c4"
          >
            Creators
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <div class="heading-elements">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <button
                @click="showAddModal = true"
                class="btn btn-primary mb-3"
                style="
                  padding-top: 2px;
                  padding-bottom: 2px;
                  background: white;
                  color: #000000a8;
                  border: 1px solid gray;
                "
              >
                Add New
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
              <span v-if="props.column.field === 'actions'">
                <div
                  v-if="
                    role == 'user' &&
                    props.row.status != 'Approved' &&
                    props.row.status != 'Rejected'
                  "
                >
                  <span @click="clickEdit(props.row)" class="btn p-0"
                    ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
                  ></span>

                  <span @click="clickDelete(props.row)" class="btn pl-3"
                    ><i class="fa fa-trash" aria-hidden="true"></i
                  ></span>
                </div>

                <div
                  class="d-flex"
                  v-else-if="
                    role == 'admin' &&
                    props.row.status != 'Approved' &&
                    props.row.status != 'Rejected'
                  "
                >
                  <div
                    class="badge border mr-2 bg-success text-white ul-cursor--pointer p-2"
                    @click="clickAccept(props.row._id)"
                  >
                    Approve
                  </div>
                  <div
                    class="badge border bg-danger text-white ul-cursor--pointer p-2"
                    @click="clickReject(props.row._id)"
                  >
                    Reject
                  </div>

                  <!-- <div v-else>
                <span class="badge badge-warning ">{{ props.row.status }}</span>
              </div> -->
                </div>
                <div>
                  <div v-if="props.row.status === 'Approved'">
                    <span class="badge badge-success">{{
                      props.row.status
                    }}</span>
                  </div>
                  <div v-else-if="props.row.status === 'Rejected'">
                    <span class="badge badge-danger">{{
                      props.row.status
                    }}</span>
                  </div>
                </div>
              </span>
       
              <span v-else-if="props.column.field === 'reason'">
              <div>{{ props.row.reason }}</div>
           
            </span>
              <span v-else-if="props.column.field === 'show_img'">
                <div>
                  <img
                    :src="props.row.icon"
                    alt=""
                    :style="{ width: '50px', height: '50px', borderRadius: '197px', objectFit:'cover' }"
                  />
                </div>
              </span>

              <span v-else-if="props.column.field === 'first_name'">
                <div>
                  <div>
                    {{ props.row.first_name }} {{ props.row.last_name }}
                  </div>
                </div>
              </span>

              <span v-else-if="props.column.field === 'tiktok_username'">
                <div>
                  <div>{{ props.row.tiktok_username }}</div>
                </div>
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- <div v-if="loader" class="loader">No data is available</div> -->
      </div>
    </div>
    <!-- <div class="spinner spinner-primary" v-if="loader" id="loader"></div> -->
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {

  components: {
    // VueEditor,
    // VueDocumentEditor
    multiselect: Multiselect
  },
  data () {
    return {
      selectedName:"",
      allUsers: [],
      rows: [],
      updateloader:false,
      selectedUserName: null,
      getphoneNumber: '',
      getcenterCode: '',
      getImages: null,
      uplodedImages: '',
      imgLoader: false,
      userNames: [],
      flexDivDisplay: 'flex!important',
      filteredFaqs: [],
      filterStatus: '',
      faqs: [],
      role: '',
      showAddModal: false,
      showAddModalEdit: false,
      editFAQData: {
        id: null,
        title: '',
        description: '',
        category: 'Please Selected Category'
      },
      category: 'Please Selected Category',
      loader: false,
      imgLoader: false,
      centerCode: '',
      rejectedId: '',
      phoneNumber: '',
      publisherName: '',
      getcenterCode: '',
      getphoneNumber: '',
      getpublisherName: '',
      searchUser: [],
      getImages: null,
      cancelReasonText: '',
      user_id: '',
      updateId: '',
      getUserName: '',
      uplodedImages: '',
      images: null,
      isEdit: false,
      columns: [
        {
          label: 'Icons',
          field: 'show_img',
          sortable: false
        },
        {
          label: 'Name',
          field: 'first_name',
          filterOptions: {
            enabled: true,
            placeholder: 'User Name'
          }
        },
        {
          label: 'TikTok Name',
          field: 'tiktok_username',
          filterOptions: {
            enabled: true,
            placeholder: 'User Name'
          }
        },
        {
          label: 'Contact number',
          field: 'contact_number',
          filterOptions: {
            enabled: true,
            placeholder: 'Contact Number'
          }
        },
        {
          label: 'Agency code',
          field: 'agency_center_code',
          filterOptions: {
            enabled: true,
            placeholder: 'Agency Code'
          }
        },
        {
          label: 'Reason',
          field: 'reason',
          filterOptions: {
            enabled: true,
            placeholder: 'Reason'
          }
        },
        {
          label: 'Actions',
          sortable: false,
          field: 'actions',
          width: '150px',
          formatFn: () => {
            return `
              <span class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
              <span class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
            `
          }
        }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'recordsPerPage', // Set pagination mode to 'recordsPerPage'
        perPageDropdown: [10, 20, 50], // Set options for number of records per page
        nextLabel: 'Next', // Custom label for the next button
        prevLabel: 'Previous' // Custom label for the previous button
      },
      first_name: '',
      last_name: '',
      tiktok_username: '',
      contact_number: '',
      agency_center_code: '',
      icon: '',
      ForDropwDow: [],
      getFirstName:"",
      getLastName:"",
      getTikTok:"",
      tiktokres:{},
      selectedStatus:"",
      searchTerm:""


    }
  },
  mounted () {
    this.clearFilters()
    this.filterData()
    this.addCssRule()
    this.fetchUserNames()
    this.getAllUsers()

    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);
  },
  computed: {
    containerClasses () {
      return {
        'large-container': this.isLarge,
        'important-container': this.isImportant
      }
    },
    filteredRows () {
      const query = this.searchTerm.toLowerCase().trim()
      const select_status = this.selectedStatus

      return this.faqs.filter(row => {
        const matchesQuery = query
          ? row.first_name && row.first_name.toLowerCase().includes(query)
          : true
          const matchesStatus = select_status
          ? row.status === select_status
          : true
        return matchesQuery && matchesStatus
      })
    },

  },
  created () {
    this.fetchUserNames()
    this.getAllUsers()

    this.filterData()

    this.clearFilters()

    // const accessToken = localStorage.getItem('accesstoken');
    this.user_id = localStorage.getItem('user_id')
    this.role = localStorage.getItem('role')

    // this.fetchUser()

    this.fetchPublisher()

    // if (!localStorage.getItem('pageReloaded')) {
    //   localStorage.setItem('pageReloaded', 'true')
    //   window.location.reload()
    // } else {
    //   localStorage.removeItem('pageReloaded')
    // }
  },

  methods: {
    handleChange(user) {

      this.selectedUserId=user._id;


      // // Filter the rows based on the user_name
      // const matchedRows = this.rows.filter(row => row.first_name === user);

      // // Update the rows with the filtered results
      // this.rows = matchedRows;

      // Log the matched rows to the console
      
    },
    checkLengthPhone (event) {
      if (this.contact_number.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    checkLengthPhone2 (event) {
      if (this.agency_center_code.toString().length >= 13 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },

    checkLengthPhoneEdt (event) {
      if (this.getphoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    checkLengthPhoneEdit2 (event) {
      if (this.getcenterCode.toString().length >= 13 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
               
    async fetchUserNames () {
 
      await this.getAllUsers()
      this.userNames = this.rows.map(row => ({
        value: row._id,
        text: row.name
      }))
    },
    async getAllUsers () {


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
          this.rows = userData
          this.allUsers = userData;
          
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

    toggleFlexDiv () {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
    },
    filterData () {
      this.filteredFaqs = this.faqs.filter(faq => {
        // Check search term
        const matchesSearchTerm =
          faq.user_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          faq.contact_number.includes(this.searchTerm) ||
          faq.agency_center_code.includes(this.searchTerm) ||
          (faq.reason &&
            faq.reason.toLowerCase().includes(this.searchTerm.toLowerCase()))

      

        // Check filter status
        const matchesStatus =
          this.filterStatus === '' || faq.status === this.filterStatus

       

        return matchesSearchTerm && matchesStatus
      })
    },

    onSearchTermChange (event) {
      this.searchTerm = event.target.value
      this.filterData()
    },
    onStatusChange (event) {
      this.filterStatus = event.target.value
      this.filterData()
    },
    clearFilters () {
      this.searchTerm = ''
      this.selectedStatus = ''
   this.getAllUsers()
    },
    onSearchTermChange (event) {
      this.searchTerm = event.target.value
      this.filterData()
    },
    onStatusChange (event) {
      this.filterStatus = event.target.value
      this.filterData()
    },
    checkLength (event) {
      if (this.phoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    clickCancle () {
      this.$bvModal.hide('modal-cancelReason')
    },
    checkLengthCode (event) {
      if (this.centerCode.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    async fetchPublisher () {
      this.loader = true
      try {
        var url = ''

        if (this.role == 'admin') {
          url = 'publisher/get-all'
        } else {
          url = 'user/get-all-members-publishers'
        }

        // url = 'publisher/get-all'

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall(url)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          // this.faqs = response.apidata.data;

          this.faqs = response.apidata.data
          this.filteredFaqs = this.faqs
          this.ForDropwDow = this.faqs

          // this.faqs = this.faqs.filter(e => e._id == this.user_id)

          // this.$toaster.makeToast('success', 'publisher data get successfully');
        }
        this.loader = false
      } catch (error) {
        this.loader = false
        console.error(error)
        this.$toaster.makeToast('warning', 'Error: Server Error')
      }
    },
    handelUserField () {
      this.searchUser = this.faqs.filter(user =>
        user.user_name.toLowerCase().includes(this.publisherName.toLowerCase())
      )
      // console.log(myData);
    },
    async fetchUser () {
      this.loader = true

      try {
        // Create headers object and add the token
        // const headers = {
        //   Authorization: `Bearer ${token}`,
        //   'Content-Type': 'application/json' // Adjust this if your API expects a different content type
        // }

        // Make the API GET call with the headers
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall(`auth/user/${this.user_id}`)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        // const response = this.$apiService.getCall(`user/user-by-id/${this.user_id}`)
    
        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.loader = false
          this.getUserName = response.apidata.data.user_name
        }
      } catch (error) {
        this.loader = false
        console.error(error)
        this.$toaster.makeToast(
          'warning',
          'An error occurred while fetching the user'
        )
      }
    },
    gethandleImageSelection () {},
    async handleImageSelection () {
      this.imgLoader = true

      try {
        const formData = new FormData()
        if (this.images) {
          formData.append('image', this.images)
        }
        if (this.getImages) {
          formData.append('image', this.getImages)
        }

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .postCall('util/image/', formData)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
     
        if (response.error) {
          this.imgLoader = false
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.imgLoader = false
          this.uplodedImages = response.apidata.url
          this.$toaster.makeToast('success', 'Image upload successfully')
        }
      } catch (error) {
        this.imgLoader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // confirm.log(error)
      }
    },

    truncateDescription (description) {
      const words = description.split(' ')
      if (words.length > 13) {
        return words.slice(0, 13).join(' ') + '...'
      } else {
        return description
      }
    },

    async clickAccept (id) {
      try {
        var req = {
          status: 'Approved'
        }

        const res = await this.$apiService.postCall(
          `publisher/update-publisher-status/${id}`,
          req
        )
      
        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.loader = false
          this.$toaster.makeToast('success', 'Status Approved successfully')
          this.fetchPublisher()
        }
      } catch (error) {
        this.loader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // console.error(error)
      }
    },
    async clickReject (id) {
      this.$bvModal.show('modal-cancelReason')
      this.rejectedId = id
    },
    async addPublisher () {
      // Check if all required fields are filled
      // var matchData = this.faqs.filter((e) =>  e.tiktok_username.toString().includes(this.tiktok_username) );
      if (
        !this.first_name ||
        !this.last_name ||
        !this.tiktok_username ||
        !this.contact_number ||
        !this.agency_center_code ||
        !this.images
      ) {
        this.$toaster.makeToast(
          'warning',
          'Please fill in all the required fields'
        )
        setTimeout(() => (this.errorMessage = ''), 2000)
        return
      }
      // if (matchData.length > 0) {
      //   this.$toaster.makeToast(
      //     'warning',
      //     'TikTok Username All Ready exist, Please Try Again'
      //   )
      // } else {
         this.loader = true
      try {
        let requestData = {
          user_id:
            this.role === 'admin'
              ? this.selectedUserId
              : localStorage.getItem('user_id'),
          first_name: this.first_name,
          last_name: this.last_name,
          tiktok_username: this.tiktok_username,
          contact_number: this.contact_number,
          agency_center_code: this.agency_center_code,
          icon: this.uplodedImages
        }
        if (this.role === 'admin') {
          ;(requestData.status = 'Approved'),
            (requestData.reason = 'Added By Admin')
        }
        const res = await this.$apiService.postCall(
          'publisher/create/',
          requestData
        )

        this.tiktokres = res;
        console.log("res",res)
        // Handle the response
        if (res.error) {
          if (this.tiktokres.response.data.message.keyPattern.keyPattern.tiktok_username === 1) {
    this.$toaster.makeToast('warning', 'TikTok username already exists');
} else {
    this.$toaster.makeToast('warning', res.response.data.message.keyPattern.keyPattern.tiktok_username);
}
        } else {
          this.fetchPublisher();
          this.isEdit = false;
          this.showAddModal = false;
          this.loader = false;
          this.first_name = '';
          this.last_name = '';
          this.tiktok_username = '';
          this.uplodedImages = '';
          this.contact_number = '';
          this.agency_center_code = '';
          this.icon = null;
          this.$toaster.makeToast('success', 'Data added successfully');
        }
      } catch (error) {
        console.log("eroot",error)
        this.loader = false
        if (this.tiktokres.error.response.data.message.keyPattern.tiktok_username === 1) {
    this.$toaster.makeToast('warning', 'TikTok username already exists');
} 
else
{
     this.$toaster.makeToast('warning', 'Error: Server Error')
        console.error(error) // Added console log to catch block
}
     
      }
      
    },


    async editPublisher () {
      this.loader = true
      try {
        //const imageUrls = await this.uploadImages();
        let requestData = {



          

    first_name:this.getFirstName,
    last_name: this.getLastName,
    tiktok_username:this.getTikTok,
    contact_number: this.getphoneNumber,
          agency_center_code: this.getcenterCode,
          icon: this.uplodedImages

          // userId: this.user_id
        }

        // Assuming you want to make a POST request
        const res = await this.$apiService.postCall(
          `publisher/update/${this.updateId}`,
          requestData
        )

        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.fetchPublisher()

          this.closeModalEdit()

          this.loader = false
          this.$toaster.makeToast('success', 'Data update successfully')
        }
      } catch (error) {
        this.loader = false
        // console.error(error)
        this.$toaster.makeToast('warning', 'Error: Server Error')
      }
    },
    clickEdit (data) {
      this.updateId = data._id
      this.getcenterCode = data.agency_center_code
      this.getphoneNumber = data.contact_number
      this.getpublisherName = data.user_name
      this.getFirstName = data.first_name
      this.getLastName = data.last_name
      this.images = data.icon
      this.uplodedImages = data.icon
      this.getTikTok=data.tiktok_username
  

      this.showAddModalEdit = true
    },

    // editFAQ (faq) {
    //   console.log('FAQcategory:', faq.category) // Log the category value
    //   this.editFAQData.id = faq.id
    //   this.editFAQData.title = faq.title
    //   this.editFAQData.description = faq.description
    //   this.editFAQData.category = faq.category
    //   this.showAddModalEdit = true
    // },

    // async updateFAQ () {
    //   try {
    //     const response = await this.$apiService.putCall(
    //       `faq/?id=${this.editFAQData.id}`,
    //       {
    //         title: this.editFAQData.title,
    //         description: this.editFAQData.description,
    //         category: this.editFAQData.category
    //       }
    //     )
    //     if (!response.isError) {
    //       // Handle success, such as updating the UI or fetching FAQs again
    //       console.log('FAQ updated successfully')

    //       this.fetchFAQs()
    //       this.closeModalEdit()
    //       this.editFAQData.category = ''
    //       this.$toaster.makeToast('success', 'FAQ updated successfully')
    //     } else {
    //       console.error('Failed to update FAQ')
    //       // Handle error, such as displaying an error message
    //     }
    //   } catch (error) {
    //     console.error('Error updating FAQ:', error)
    //     // Handle error, such as displaying an error message
    //   }
    // },
    clickRejectButton () {
      if (this.cancelReasonText && this.cancelReasonText.length >= 10) {
        this.deletePublisher()
      } else {
        this.$toaster.makeToast(
          'warning',
          'Please enter a cancel reason with at least 10 characters'
        )
      }
    },
    async deletePublisher () {
      this.loader = true
      try {
        var req = {
          status: 'Rejected',
          reason: this.cancelReasonText
        }

        const res = await this.$apiService.postCall(
          `publisher/update-publisher-status/${this.rejectedId}`,
          req
        )
       
        if (res.error) {
          this.loader = false
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.loader = false
          this.$toaster.makeToast('success', 'Status Rejected successfully')
          this.$bvModal.hide('modal-cancelReason')
          this.fetchPublisher()
        }
      } catch (error) {
        this.$bvModal.hide('modal-cancelReason')
        this.loader = false
        this.$toaster.makeToast('warning', 'Error: Server Error')
        // console.error(error)
      }
    },
    async clickDelete (data) {
      try {
        // Show confirmation dialog
        const result = await this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })

        // If user confirms deletion
        if (result.value) {
          const response = await this.$apiService.postCall(
            `publisher/delete/${data._id}`
          )

          if (!response.isError) {
            this.loader = false
            this.fetchPublisher()
            this.$toaster.makeToast(
              'success',
              'Your Publisher has been deleted'
            )
            this.loader = false
          } else {
            this.$toaster.makeToast('warning', 'Failed to delete publisher ')
          }
        } else {
          this.loader = false
        
        }
      } catch (error) {
        this.$toaster.makeToast('warning', 'Error: Server Error')
        this.loader = false
        console.error('Error deleting FAQ:', error)
      }
    },
    closeModal () {
      this.isEdit = false
      this.phoneNumber = ''
      this.centerCode = ''
      this.publisherName = ''
      this.uplodedImages = null
      this.showAddModal = false // Set showAddModal to false to hide the modal
    },
    closeModalEdit () {
      this.showAddModalEdit = false // Set showAddModal to false to hide the modal
    },

    addCssRule () {
      const style = document.createElement('style')
      style.type = 'text/css'
      const cssRule =
        '#modal-add .modal-content,' +
        '#modal-add___BV_modal_content_ .modal-content {' +
        '  padding: 1em !important;' +
        '}'

      style.appendChild(document.createTextNode(cssRule))
      document.head.appendChild(style)
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
}

imgloader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}

#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10;
}

/* Modal content */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  /* Adjust as needed */
  max-width: 600px;
  /* Maximum width */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

#modal-add___BV_modal_content_ {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 331%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(13, 1, 25, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  right: 0px !important;
}

.mt-4 {
  margin-top: 26px !important;
}

.fa-chevron-circle-down {
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
@media only screen and (max-width: 600px) {
  .paddingzero {
    padding-right: 0px;
    padding-left: 0px;
  }
}

.badge-success {
  color: #10b981;
  background-color: #ffffff !important;
  border: 1px solid #10b981;
}

.badge-danger {
  color: #ef4444;
  background-color: #fcfbfb !important;
  border: 1px solid #ef4444;
}
</style>
