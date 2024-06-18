<template>
  <div class="main-content">
    <!-- <div class="font-weight-bold fa-2x text-light">Creators</div>
    <hr class="mt-1" /> -->

    <!-- <b-modal
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
    </b-modal> -->
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
            <!-- <span
              >Upload File
              <i
                class="fa fa-plus ml-2 ul-cursor--pointer"
                aria-hidden="true"
                @click="clickUploadFile()"
              ></i>
            </span> -->
            <span
              >Upload File <i class="fa fa-plus ml-2" aria-hidden="true"></i
            ></span>
            <!-- <input type="file" ref="fileInput" style="display:none;" @change="handleFileUpload" accept=".xlsx, .xls"> -->
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
        <div class="d-flex flex-row card-body flex-wrap">
          <b-form-group label="As Of Date" label-for="input-date">
            <b-form-input
              @change="handelDate"
              type="date"
              id="end-date"
              v-model="selectDate"
              class="form-control"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Select File"
            label-for="input-images"
            class="mx-4"
          >
            <b-form-file
              class="ul-cursor--pointer"
              @change="handleFileUpload"
              accept=".xlsx, .xls"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
            ></b-form-file>
          </b-form-group>
          <div class="d-flex justify-content-center align-items-center">
            <b-button
              variant="primary"
              @click="saveExcelData()"
              style="height: 33px;margin-top: 12px;"
              class="mt-2"
              >Upload</b-button
            >
          </div>

          <!-- <div class="col-12 col-sm-6 col-lg-3 paddingzero">
            <label for="end-date">Select Date</label>
            <input
              type="date"
              id="end-date"
              v-model="selectDate"
              class="form-control"
              @change="handelDate"
            />
          </div> -->
          <!-- <div
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
            Uploaded File
          </h4>
          <!-- <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a> -->
          <!-- <div class="heading-elements">
            <ul
              class="list-inline mb-0 d-flex flex-row justify-content-around"
              style="gap: 9px"
            >
              <button
                v-if="isAdmin === 'admin'"
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
             
            </ul>
          </div> -->
        </div>
        <div class="card-body">
          <vue-good-table
            :columns="columns"
            :line-numbers="false"
            :pagination-options="paginationOptions"
            styleClass="tableOne vgt-table"
            :rows="rowsData"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'actions'">
                <!-- <div v-if="role == 'user'">
                  <span @click="clickEdit(props.row)" class="btn p-0"
                    ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
                  ></span>

                  <span @click="clickDelete(props.row)" class="btn pl-3"
                    ><i class="fa fa-trash" aria-hidden="true"></i
                  ></span>
                </div> -->

                <div>
                  <i
                    class="fa fa-eye ul-cursor--pointer"
                    @click="clickView(props.row)"
                    aria-hidden="true"
                  ></i>
                </div>
                <!-- <div>
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
                </div> -->
              </span>
              <span v-else-if="props.column.field === 'excel_url_show'">
                <div>
                  <a
                    :href="props.row.excel_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    >View Uploaded File</a
                  >
                  <!-- <i
                    class="fa fa-eye ul-cursor--pointer"
                    @click="clickView(props.row)"
                    aria-hidden="true"
                  ></i> -->
                </div>
              </span>
              <span v-else-if="props.column.field === 'reason_show'">
                <div v-if="props.row.reason">{{ props.row.reason }}</div>
                <div v-else>......</div>
              </span>
              <span v-else-if="props.column.field === 'show_img'">
                <div>
                  <img
                    :src="props.row.icon"
                    alt=""
                    :style="{
                      width: '50px',
                      height: '50px',
                      borderRadius: '197px'
                    }"
                  />
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
import moment from 'moment'

export default {
  data () {
    return {
      flexDivDisplay: 'flex!important',
      role: '',
      user_id: '',
      loader: false,
      imgLoader: false,
      rowsData: [],
      selectExcelFile: null,
      uplodedFile: null,
      selectDate: null,
      columns: [
        {
          label: 'As Of Date',
          field: 'date',
          sortable: false
        },
        {
          label: 'File',
          field: 'excel_url_show',
          sortable: false
        }

        // {
        //   label: 'Actions',
        //   sortable: false,
        //   field: 'actions',
        //   width: '150px',
        //   formatFn: () => {
        //     return `
        //       <span class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
        //       <span class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
        //     `
        //   }
        // }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'recordsPerPage', // Set pagination mode to 'recordsPerPage'
        perPageDropdown: [10, 20, 50], // Set options for number of records per page
        nextLabel: 'Next', // Custom label for the next button
        prevLabel: 'Previous' // Custom label for the previous button
      }
    }
  },
  mounted () {
    // this.addCssRule()
  },
  computed: {
    containerClasses () {
      return {
        'large-container': this.isLarge,
        'important-container': this.isImportant
      }
    }
  },
  created () {
    this.user_id = localStorage.getItem('user_id')
    this.role = localStorage.getItem('role')

    // this.fetchUser()

    this.fetchExcelData()
  },
  methods: {
    clickUploadFile () {
      this.$refs.fileInput.click()
    },
    handelDate (e) {},
    handleFileUpload (event) {
      const file = event.target.files[0]
      this.selectExcelFile = file
    },
    async saveExcelData () {
      if (this.selectExcelFile && this.selectDate) {
        this.loader = true

        try {
          const formData = new FormData()

          formData.append('excel', this.selectExcelFile)
          formData.append('date', this.selectDate)
          const response = await new Promise((resolve, reject) => {
            this.$apiService
              .postCall('util/upload-excel/', formData)
              .then(data => resolve(data))
              .catch(error => reject(error))
          })

          if (response.error) {
            this.loader = false
            this.$toaster.makeToast('warning', response.message)
          } else {
            this.loader = false
            this.uplodedFile = response.apidata.url

            this.fetchExcelData()
            this.$toaster.makeToast('success', 'File upload successfully')
          }
        } catch (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: Server Error')
          // confirm.log(error)
        }

        // this.readFile(file)
      } else {
        this.$toaster.makeToast('warning', 'Please select a file and date')
      }
    },
    clickView (id) {},
    // readFile (file) {
    //   const reader = new FileReader()
    //   reader.onload = () => {
    //     // Process the file content, e.g., send it to the server or parse it
    //     const fileContent = reader.result
    //     console.log('Uploaded file content:', fileContent)
    //   }
    //   reader.readAsBinaryString(file)
    // },
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

    clearFilters () {
      this.searchTerm = ''
      this.filterStatus = ''
      this.filterData()
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
    async fetchExcelData () {
      this.loader = true
      try {
        // var url = ''

        // if (this.role == 'admin') {
        //   url = 'publisher/get-all'
        // } else {
        //   url = 'user/get-all-members-publishers'
        // }

        // url = 'publisher/get-all'

        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall('excel/')
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          // this.faqs = response.apidata.data;

          const paymentData = response.apidata.data

          this.rowsData = paymentData

          paymentData.forEach(e => {
            // Format the request_date
            e.date = moment(e.date).format('DD MMM YYYY')
          })
          console.log('paymentData', paymentData)
          this.rows = paymentData

          this.loader = false
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

<style scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
