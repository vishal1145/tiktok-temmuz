<template>
  <div class="main-content">
    <!-- <div class="font-weight-bold fa-2x text-light">Members</div>
    <hr class="mt-1" />   -->
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
      <label class="pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Add Members
      </label>
      <b-row class="">
        <b-col md="12">
          <b-form-group label="First Name" label-for="input-name">
            <b-form-input
              v-model="userName"
              required
              placeholder="First Name"
              style="height: 34px"
              type="text"
              id="input-name"
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Last Name" label-for="input-title">
            <b-form-input
              v-model="userSurName"
              required
              placeholder="Last Name"
              style="height: 34px"
              type="text"
              id="input-name"
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="TikTok Name" label-for="input-title">
            <b-form-input
              v-model="tikTokUserName"
              required
              placeholder="TikTok Username"
              style="height: 34px"
              type="text"
              id="input-name"
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- <b-col md="12" class="px-0">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-input
              v-model="phoneNumber"
              required
              placeholder="Phone number"
              style="height: 34px"
              type="number"
              @keydown="checkLength"
              id="input-phoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col> -->

        <b-col md="12">
          <div class="phone-input">
            <b-form-group
              label="Contact Number"
              label-for="input-contact-number"
            >
              <!-- <b-form-input
           v-model="contact_number"
           required
           placeholder="Contact number"
           type="number"
           @keydown="checkLengthPhone"
           id="input-contact-number"
         ></b-form-input> -->
              <b-form-input
                class="form-control border-0"
                id="phone"
                type="tel"
                name="phone"
                maxlength="11"
              ></b-form-input>
            </b-form-group>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <!-- <div class="spinner spinner-primary mr-3" v-if="loader"></div> -->
            <b-button v-if="!imgLoader" class="mb-2 mr-2" @click="closeModal()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="formSubmitAddMember()"
              >Add</b-button
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
      v-model="showEditModal"
      id="modal-edit"
      size="md"
      hide-footer
      hide-header
      centered
    >
      <label class="pt-2 pb-1" style="font-size: 20px; margin: 0px">
        Update Members
      </label>
      <b-row class="">
        <b-col md="12">
          <b-form-group label="Enter name" label-for="input-title">
            <b-form-input
              v-model="getuserName"
              required
              placeholder="Enter name"
              style="height: 34px"
              type="text"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Enter surname" label-for="input-title">
            <b-form-input
              v-model="getuserSurName"
              required
              placeholder="Enter surname"
              style="height: 34px"
              type="text"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="TikTok Name" label-for="input-title">
            <b-form-input
              v-model="gettikTokUserName"
              required
              placeholder="Enter TikTok username"
              style="height: 34px"
              type="text"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- <b-col md="12" class="px-0">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-input
              v-model="getphoneNumber"
              required
              placeholder="Phone number"
              style="height: 34px"
              type="number"
              @keydown="getcheckLength"
              id="input-phoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col> -->

        <b-col md="12">
          <div class="phone-input">
            <b-form-group
              label="Contact Number"
              label-for="input-contact-number"
            >
              <!-- <b-form-input
           v-model="contact_number"
           required
           placeholder="Contact number"
           type="number"
           @keydown="checkLengthPhone"
           id="input-contact-number"
         ></b-form-input> -->
              <b-form-input
                class="form-control border-0"
                id="phone"
                type="tel"
                name="phone"
                v-model="getphoneNumber"
                maxlength="15"
              ></b-form-input>
            </b-form-group>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end px-0">
            <b-button v-if="!imgLoader" class="mr-2" @click="closeEditModal()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class=""
              variant="primary ripple"
              @click="formSubmitEditMember()"
              >Update</b-button
            >
            <div
              class="spinner spinner-primary imgloader"
              v-if="imgLoader"
            ></div>
          </div>
          <!-- <div class="d-flex justify-content-end">
            <b-button class="mb-2 mr-2" @click="closeEditModal()">Close</b-button>
          </div> -->
        </b-col>
      </b-row>
    </b-modal>
    <b-modal id="modal-add-rates" size="md" hide-footer hide-header centered>
      <b-row class="">
        <b-col md="12">
          <i class="fa mb-3" aria-hidden="true"> Default Commission Rates </i>
        </b-col>

        <b-col md="12">
          <b-form-group label="0-3.000.000 diamonds %" class="text-12">
            <b-form-input
              class="form-control"
              type="text"
              v-model="firstValue"
              @keydown="validateInput"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="3.000.000 - 5.000.000 diamonds %"
            class="text-12"
          >
            <b-form-input
              class="form-control"
              type="text"
              v-model="secondValue"
              @keydown="validateInputSec"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="5.000.000+ diamonds %" class="text-12">
            <b-form-input
              class="form-control"
              type="text"
              v-model="thirdValue"
              @keydown="validateInputThird"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button class="mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class=""
              variant="primary ripple"
              @click="clickAddButton()"
              >Update</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <div class="d-flex flex-row justify-content-between pb-2 d-none">
      <b-col
        class="d-none"
        md="3"
        style="
    padding-right: 0px !important;
    padding-left: 0px !important;
    clas
"
      >
        <multiselect
          @input="handleChange"
          v-model="selected"
          placeholder="Select users"
          :options="[...allUsers]"
          :multiple="false"
          :limit="1"
        ></multiselect>
      </b-col>
      <div class="for-gap d-none">
        <button @click="clearFilters" class="btn btn-primary">
          Clear Filter
        </button>
      </div>
    </div>

    <div class="pb-2">
      <div class="card">
        <div
          class="card-header d-flex flex-row justify-content-between flex-wrap"
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
            </ul>
          </div>
        </div>

        <div
          class="d-flex flex-row card-body flex-wrap gap-between"
          :style="{ display: flexDivDisplay }"
        >
          <div class="row w-100">
            <div class="col-12 col-sm-6 col-lg-3 pr-0">
              <label for="users-list-search">Search</label>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="users-list-search"
                  placeholder="Search..."
                  style="
                    color: grey !important;
                    padding-bottom: 7px !important;
                    border: 1px solid rgba(128, 128, 128, 0.32) !important;
                    background-color: rgb(135 131 131 / 0%) !important;
                  "
                  v-model="searchTerm"
                  @input="filteredRows = getfilterdata"
                />
              </fieldset>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 px-0 ml-3 paddingzero">
              <label for="users-list-verified">Action</label>
              <fieldset class="form-group">
                <select
                  class="form-control"
                  id="users-list-verified"
                  style="
                    color: grey !important;
                    padding-bottom: 7px !important;
                    border: 1px solid rgba(128, 128, 128, 0.32) !important;
                    background-color: rgb(135 131 131 / 0%) !important;
                  "
                  v-model="filterStatus"
                >
                  <option value="">All</option>
                  <option value="Approved" selected>Block</option>
                  <option value="Rejected">UnBlock</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="card">
      <div
        class="card-header d-flex flex-row justify-content-between"
        style="background-color: white"
      >
        <h4
          class="card-title"
          style="margin: 0px; background-color: white; color: #000000c4"
        >
          Members
        </h4>

        <div class="heading-elements">
          <ul
            class="list-inline mb-0 d-flex flex-row justify-content-around"
            style="gap: 9px"
          >
            <b-button
              v-if="role != 'admin'"
              @click="openAddModal"
              variant="primary ripple btn-icon m-1"
              style="
                padding-top: 2px;
                padding-bottom: 2px;
                background: white;
                color: rgba(0, 0, 0, 0.66);
                border: 1px solid gray;
              "
            >
              <span class="ul-btn__icon d-none"><i class="i-Gear-2"></i></span>
              <span class="ul-btn__text ml-1">Add New</span>
            </b-button>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :pagination-options="{
            enabled: true,
            mode: 'records'
          }"
          styleClass="tableOne vgt-table"
          :selectOptions="{
            enabled: false,
            selectionInfoClass: 'table-alert__box'
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
                {{ props.row.name }} {{ props.row.surname }}
              </div>
            </span>
            <span v-else-if="props.column.field === 'tiktok_username'">
              <div class="d-flex">
                {{ props.row.tiktok_username }}
              </div>
            </span>
            <span v-else-if="props.column.field === 'contact_number'">
              <div class="d-flex flex-row">
                {{ props.row.contact_number }}

                <!-- <div>{{ props.row.contact_number }}</div> -->
              </div>
            </span>
            <span v-else-if="props.column.field === 'diamonds'">
              <div class="d-flex flex-row">
                {{ props.row.diamonds }}

                <!-- <div>{{ props.row.contact_number }}</div> -->
              </div>
            </span>  <span v-else-if="props.column.field === 'earnings'">
              <div class="d-flex flex-row">
                {{ props.row.earnings }}

                <!-- <div>{{ props.row.contact_number }}</div> -->
              </div>
            </span>
            <span v-else-if="props.column.field === 'show_userName'">
              <div
                class="text-primary ul-cursor--pointer"
                @click="clickUserName(props.row._id)"
              >
                {{ props.row.tiktok_username }}
              </div>
            </span>

            <span v-else-if="props.column.field === 'show_commission'">
              <div class="d-flex" v-if="props.row.first_commission">
                0-3M = %{{ props.row.first_commission }} <br />3M-5M = %{{
                  props.row.second_commission
                }}
                <br />5M+ %{{ props.row.third_commission }}
              </div>
            </span>
            <span v-else-if="props.column.field === 'button'">
              <div class="d-flex flex-row" style="gap: 12px">
                <div>
                  <b-button
                    size="sm"
                    variant="outline-primary ripple m-1 btn-small"
                    @click="clickAddRates(props.row)"
                    >Update Rate</b-button
                  >
                  <!-- <b-button
                    size="sm"
                    variant="outline-primary ripple m-1 btn-small"
                    >Block</b-button
                  > -->
                </div>
                <div class="d-flex flex-column">
                  <span @click="clickEdit(props.row)" class="btn p-0"
                    ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
                  ></span>

                  <span @click="formSubmitDeleteMember(props.row)" class="btn"
                    ><i class="fa fa-trash" aria-hidden="true"></i
                  ></span>
                </div>
              </div>
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import message from '../../../message'
import Multiselect from 'vue-multiselect'

// import { VueEditor } from "vue2-editor";
// import VueDocumentEditor from 'vue-document-editor'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Users'
  },
  components: {
    // VueEditor,
    // VueDocumentEditor
    multiselect: Multiselect
  },
  computed: {
    getfilterdata () {
      if (!this.searchTerm) {
        return this.rows
      }

      const searchTermLower = this.searchTerm.toLowerCase()
      return this.rows.filter(row => {
        return (
          row.name.toLowerCase().includes(searchTermLower) ||
          row.surname.toLowerCase().includes(searchTermLower) ||
          row.contact_number.toLowerCase().includes(searchTermLower) ||
          row.diamonds.toLowerCase().includes(searchTermLower) ||
          row.earnings.toLowerCase().includes(searchTermLower) ||

          row.otp.toLowerCase().includes(searchTermLower) ||
          row.role.toLowerCase().includes(searchTermLower) ||
          row.tiktok_username.toLowerCase().includes(searchTermLower)
        )
      })
    }
  },

  data () {
    return {
      filterStatus: 'Approved',
      searchTerm: '',
      rows: [],
      filteredRows: [],
      showAddModal: false,
      pageReloaded: false,
      showEditModal: false,
      logo: require('@/assets/images/faces/17.jpg'),
      use_id: null,
      matchUser: '',
      allUsers: [],
      role: '',
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
          label: 'TikTok Name',
          field: 'show_userName',
          filterOptions: {
            enabled: true,
            placeholder: 'Search TikTok'
          }
        },
        {
          label: 'Name',
          field: 'name',
          filterOptions: {
            enabled: true,
            placeholder: 'Search name'
          }
        },
        {
          label: 'Contact Number',
          field: 'contact_number',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Number'
          }
        },
        {
          label: 'Diamonds This Month',
          field: 'diamonds',
          filterOptions: {
            enabled: true,
            placeholder: 'Diamonds This Month'
          }
        },  {
          label: 'Earnings This Month ($)',
          field: 'earnings',
          filterOptions: {
            enabled: true,
            placeholder: 'Earnings This Month ($)'
          }
        },
        {
          label: "Commission rate's",
          field: 'show_commission',
          filterOptions: {
            enabled: false
          }
        },

        {
          label: 'Action',
          field: 'button',
          filterOptions: {
            enabled: false
          }
        }
      ],
      rows: [],
      originalRows: [],
      form: {
        templateId: '',
        name: '',
        content: ''
      },
      phoneNumber: '',
      userName: '',
      userSurName: '',
      tikTokUserName: '',
      updateId: null,
      phoneNumberfield: null,
      getphoneNumber: null,
      getuserName: null,
      getuserSurName: null,
      gettikTokUserName: null,
      imgLoader: false,
      generateIDloader: false,
      submitloader: false,
      isEdit: false,
      loader: false,
      isHide: false,
      flexDivDisplay: 'flex!important',
      matchUser: '',

      name: '',
      contact_number: '',
      email: '',
      updateloader: false,
      secondValue: '',
      firstValue: '',
      thirdValue: '',
      getUid: '',
      getfirstValue: '',
      getsecondValue: ''
    }
  },
  created () {
    this.getAllUsers()
    this.getAllTransaction()

    this.role = parsedUser.data.role
    this.originalRows = [...this.rows]

    // this.reloadPageOnce();
  },
  methods: {
    openAddModal () {
      this.showAddModal = true
      setTimeout(() => {
        const phoneInputField = document.querySelector('#phone')
        this.phoneNumberfield = window.intlTelInput(phoneInputField, {
          initialCountry: 'in',
          utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
        })
      }, 200)
    },
    closeModal () {
      this.isEdit = false
      this.phoneNumber = ''

      this.userName = ''
      this.userSurName = ''
      this.tikTokUserName = ''
      this.showAddModal = false // Set showAddModal to false to hide the modal
    },
    reloadPageOnce () {
      if (!this.pageReloaded) {
        window.location.reload()
        this.pageReloaded = true
      }
    },

    clickEdit (data) {
      this.updateId = data._id
      this.getphoneNumber = data.contact_number

      this.getuserName = data.name
      this.getuserSurName = data.surname
      this.gettikTokUserName = data.tiktok_username

      this.showEditModal = true

      setTimeout(() => {
        const phoneInputField = document.querySelector('#phone')
        this.phoneNumberfield = window.intlTelInput(phoneInputField, {
          initialCountry: 'in',
          utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
        })
      }, 200)
    },

    checkLength (event) {
      if (this.phoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },
    getcheckLength (event) {
      if (this.getphoneNumber.toString().length >= 10 && event.keyCode !== 8) {
        event.preventDefault()
      }
    },

    clickAddRates (data) {
      this.getUid = data._id
      this.firstValue = data.first_commission
      this.secondValue = data.second_commission
      this.thirdValue = data.third_commission
      this.$bvModal.show('modal-add-rates')
    },
    clickCancle () {
      this.$bvModal.hide('modal-add-rates')
    },
    clickAddButton () {
      if (this.firstValue && this.secondValue && this.thirdValue) {
        this.updateloader = true
        let reqData = {
          first_commission: this.firstValue,
          second_commission: this.secondValue,
          third_commission: this.thirdValue,
          _id: this.getUid
        }
        this.$apiService
          .postCall('auth/member-update-commission/', reqData)
          .then(res => {
            if (!res.error) {
              this.$toaster.makeToast(
                'success',
                'Commission update successfully'
              )
              this.$bvModal.hide('modal-add-rates')
              this.firstValue = ''
              this.secondValue = ''
              this.thirdValue = ''
              this.getAllUsers()
              this.updateloader = false
            } else {
              this.updateloader = false
              this.$toaster.makeToast('warning', 'Commission update failed')
            }
          })
          .catch(error => {
            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)

            this.updateloader = false
          })
      } else {
        this.$toaster.makeToast('warning', 'All filed is required')
      }
    },
    validateInputSec (event) {
      const key = event.key
      const value = this.secondValue
      if (
        key === 'Backspace' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === 'Tab' ||
        key === 'Delete'
      ) {
        return
      }
      if (!/^\d$/.test(key)) {
        event.preventDefault()
        return
      }

      // Allow input if the current value plus the new digit is <= 100
      const newValue = parseInt(value + key, 10)
      if (newValue > 100) {
        event.preventDefault()
      }
    },
    validateInput (event) {
      const key = event.key
      const value = this.firstValue
      if (
        key === 'Backspace' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === 'Tab' ||
        key === 'Delete'
      ) {
        return
      }
      if (!/^\d$/.test(key)) {
        event.preventDefault()
        return
      }

      // Allow input if the current value plus the new digit is <= 100
      const newValue = parseInt(value + key, 10)
      if (newValue > this.secondValue) {
        event.preventDefault()
      }
    },

    validateInputThird (event) {
      const key = event.key
      const value = this.thirdValue
      if (
        key === 'Backspace' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === 'Tab' ||
        key === 'Delete'
      ) {
        return
      }
      if (!/^\d$/.test(key)) {
        event.preventDefault()
        return
      }

      // Allow input if the current value plus the new digit is <= 100
      const newValue = parseInt(value + key, 10)
      if (newValue > 100) {
        event.preventDefault()
      }
    },

    formSubmitEditMember () {
      if (!this.phoneNumberfield.isValidNumber()) {
        this.$toaster.makeToast('warning', 'Invalid number')
        return
      }
      this.getphoneNumber = this.phoneNumberfield.getNumber()

      if (this.getphoneNumber.startsWith('+')) {
        this.getphoneNumber = this.getphoneNumber.slice(1)
      }
      this.imgLoader = true
      let requestData = {
        contact_number: this.getphoneNumber,
        role: 'user',
        name: this.getuserName,
        surname: this.getuserSurName,
        tiktok_username: this.gettikTokUserName,
        _id: this.updateId
      }

      this.$apiService
        .postCall('auth/member-update', requestData)
        .then(user => {
          if (user.error) {
            this.imgLoader = false
            this.$toaster.makeToast('warning', user.message)
          } else {
            this.imgLoader = false
            this.$toaster.makeToast('success', 'User Update successfully')
            this.showEditModal = false
            this.getAllUsers()
          }
        })
        .catch(function (error) {
          this.$toaster.makeToast('warning', 'Error: server error')
          this.imgLoader = false

          this.$store.commit('setError', { message: error })
        })
    },
    formSubmitDeleteMember (data) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          this.loader = true

          this.$apiService
            .getCall(`auth/member-delete/${data._id}`)
            .then(user => {
              this.loader = false
              if (user.error) {
                this.$toaster.makeToast('warning', user.message)
              } else {
                this.showEditModal = false

                this.getAllUsers()
                setTimeout(() => {
                  this.$toaster.makeToast(
                    'success',
                    'User deleted successfully'
                  )
                }, 1000)
              }
            })
            .catch(error => {
              this.$toaster.makeToast('warning', 'Error: server error')
              this.loader = false
              this.$store.commit('setError', { message: error })
            })
        }
      })
    },

    formSubmitAddMember () {
      if (!this.phoneNumberfield.isValidNumber()) {
        this.$toaster.makeToast('warning', 'Invalid number')
        return
      }
      this.phoneNumber = this.phoneNumberfield.getNumber()

      if (this.phoneNumber.startsWith('+')) {
        this.phoneNumber = this.phoneNumber.slice(1)
      }
      if (!this.userName || !this.userSurName || !this.tikTokUserName) {
        this.$toaster.makeToast('warning', 'All Field is required')
        return
      }
      this.imgLoader = true

      let requestData = {
        contact_number: this.phoneNumber,
        role: 'user',
        name: this.userName,
        surname: this.userSurName,
        tiktok_username: this.tikTokUserName
      }

      this.$apiService
        .postCall('auth/tiktok-login', requestData)
        .then(user => {
          if (user.error) {
            this.imgLoader = false
            this.$toaster.makeToast('warning', user.message)
          } else {
            this.imgLoader = false
            this.$toaster.makeToast('success', 'User create successfully')
            this.phoneNumber = ''

            this.userName = ''
            this.userSurName = ''
            this.tikTokUserName = ''
            this.showAddModal = false
            this.getAllUsers()
          }
        })
        .catch(function (error) {
          this.$toaster.makeToast('warning', 'Error: server error')
          this.imgLoader = false

          this.$store.commit('setError', { message: error })
        })
    },

    toggleFlexDiv () {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
    },

    clearFilters () {
      this.getAllUsers()
      this.searchTerm = ''
    },
    openModal12 () {
      // Set the flag to true to show the modal
      this.showEditModal = true
    },
    clickUserName (id) {
      this.$router.push('/app/mydesk/memberPage?id=' + id)
    },

    closeEditModal () {
      // Set the flag to false to hide the modal
      this.showEditModal = false
    },
    openModal (rowData) {
      this.aadharFront = rowData.aadhar_card
      this.aadharBack = rowData.back_aadhar_card
      this.divinglicense = rowData.driving_lincense
      this.divinglicenseBack = rowData.back_driving_lincense
      this.passportBack = rowData.back_passport
      this.passport = rowData.passport

      this.isModalOpen = true
    },
    vueDocuments (rowData) {
      this.popUpWindow = true
    },

    handleChange (user) {
      debugger

      const matchedRows = this.rows.filter(row => row.name === user)

      this.rows = matchedRows
    },

    clickViewUsers (id) {
      this.$router.push('/app/myDesk/usersProfile?id=' + id)
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

    clickUnBlock (userId) {
      this.loader = true
      const reqData = {
        accessStatus: 'False'
      }
      this.$apiService
        .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
        .then(res => {
          if (!res.apidata.isError) {
            this.$toaster.makeToast('success', 'User  successfully unblocked')
            this.getAllUsers()
            this.loader = false
          }
        })
        .catch(error => {
          this.loader = false
          this.$toaster.makeToast('warning', 'Have Server error')
        })
    },
    getfilterdata () {
      if (!this.searchTerm) {
        return this.rows
      }

      const searchTermLower = this.searchTerm.toLowerCase()
      return this.rows.filter(row => {
        return (
          row.name.toLowerCase().includes(searchTermLower) ||
          row.surname.toLowerCase().includes(searchTermLower) ||
          row.contact_number.toLowerCase().includes(searchTermLower) ||
          row.otp.toLowerCase().includes(searchTermLower) ||
          row.role.toLowerCase().includes(searchTermLower) ||
          row.tiktok_username.toLowerCase().includes(searchTermLower)
        )
      })
    },
    getAllUsers () {
      this.loader = true
      this.$apiService
        .getCall('user/get-all-members')
        .then(response => {
          if (
            response &&
            response.isError === false &&
            response.apidata &&
            response.apidata.data
          ) {
            const userData = response.apidata.data
            this.rows = userData
            this.filteredRows = userData
          } else {
            this.$toaster.makeToast('warning', 'Failed to fetch user data')
          }
          this.loader = false
        })
        .catch(error => {
          console.error('Error fetching user data:', error)
          this.$toaster.makeToast('error', 'Error fetching user data')
          this.loader = false
        })
    },
    generateID () {
      this.clearform()
      this.generateIDloader = true
      let randomString = ''
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

      for (let i = 0; i < 7; i++) {
        randomString += characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
      }
      this.form.templateId = randomString
      this.generateIDloader = false
    },
    submit () {
      this.submitloader = true
      if (!this.form.name || !this.form.content || !this.form.templateId) {
        this.$toaster.makeToast('warning', message.VALIDATION_MESSAGE)
        this.submitloader = false
        return
      }
      this.$apiService
        .postCall('add_by_company', this.form)
        .then(res => {
          if (res.apidata.status) {
            this.$toaster.makeToast('warning', message.ERROR_TEMPLATE_MESSAGE)
            this.submitloader = false
          } else {
            this.$toaster.makeToast('success', message.ADD_TEMPLATE_MESSAGE)
            this.getTemplateData()
            this.clearform()
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
    },
    cancel () {
      this.clearform()
    },
    update () {
      this.submitloader = true
      if (!this.form.name || !this.form.content || !this.form.templateId) {
        this.$toaster.makeToast('warning', message.VALIDATION_MESSAGE)
        this.submitloader = false
        return
      }
      this.$apiService
        .postCall('editTemplate', this.form)
        .then(res => {
          this.$toaster.makeToast('success', message.EDIT_TEMPLATE_MESSAGE)
          this.getTemplateData()
          this.clearform()
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
    },
    editTemplate (id) {
      this.isEdit = false

      this.$apiService
        .postCall('getTemplate', { _id: id })
        .then(res => {
          this.form = res.apidata
          this.$bvModal.show('modal-lg')
        })

        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
        })
      this.isEdit = true
    },
    clickBlock (userId) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to block this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, blocked it!'
      })
        .then(result => {
          if (result.value) {
            this.$swal('User Blocked!', 'User has been Blocked.', 'success')
            const reqData = {
              accessStatus: 'True'
            }
            this.$apiService
              .postCall(`account/blockUnblockUserApi/?id=${userId}`, reqData)
              .then(res => {
                if (!res.apidata.isError) {
                  this.$toaster.makeToast(
                    'success',
                    'User successfully blocked'
                  )
                  this.getAllUsers()
                  this.loader = false
                }
              })
          }
        })
        .catch(error => {
          this.$toaster.makeToast(
            'warning',
            "User can't blocked! Srever failed"
          )
        })
    },
    clearform () {
      this.form = {}
      this.isEdit = false
      this.submitloader = false
      this.generateIDloader = false
      this.$bvModal.hide('modal-lg')
    }
    //     clearFilters() {
    //   this.selected ="Select User"
    //   this.use_id = null;
    // },
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.circular-image {
  height: 40px;
  width: 40px;
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

.multiselect__placeholder {
  color: #adadad;
  display: inline-block;
  margin-bottom: -4px !important;
  padding-top: 2px;
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

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem !important;
}

.form-control {
  border: initial;
  outline: initial !important;
  background: #f3f4f6;
  border: 1px solid #9ca3af00;
  color: #111827;
}

#phone {
  background: #f3f4f6;
  border: 1px solid #9ca3af;
  border-radius: 3px;
  color: #1f2937;
  padding-top: 5px;
  padding-bottom: 5px;
}

.phone-input .iti {
  width: 100%;
}
</style>
