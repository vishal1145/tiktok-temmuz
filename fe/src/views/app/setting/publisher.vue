<template>
  <div class="container">
    <div class="font-weight-bold fa-2x text-light">Publisher</div>
    <hr class="mt-1" />
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
      <label class="px-3 pt-2 pb-1" style="font-size: 20px; margin: 0px">{{
        isEdit ? 'Edit publisher' : 'Add publisher'
      }}</label>
      <b-row class="px-3">
        <b-col md="12">
          <b-form-group label="Enter publisher name" label-for="input-title">
            <b-form-textarea
              v-model="publisherName"
              required
              placeholder="Enter name"
              style="height: 34px"
              type="text"
              id="input-name"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Contact number" label-for="input-title">
            <b-form-textarea
              v-model="phoneNumber"
              required
              placeholder="Phone number"
              style="height: 34px"
              type="number"
              id="input-phoneNumber"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group label="Agency center code" label-for="input-title">
            <b-form-textarea
              v-model="centerCode"
              required
              placeholder="Agency center code"
              style="height: 34px"
              type="number"
              id="input-agency"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12" >
          <b-form-group label="Select Images" label-for="input-images" v-if="!imgLoader">
            <b-form-file
              v-model="images"
              @input="handleImageSelection"
              placeholder="Choose files or drop them here"
              drop-placeholder="Drop files here..."
               accept=".png,.jpg,.jpeg"
             
            ></b-form-file>
           
          </b-form-group>
           <div class="spinner spinner-primary loader" v-if="imgLoader"></div>
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
            <b-button class="mb-2 mr-2" @click="closeModal()">Close</b-button>
            <b-button
              class="mb-2"
              variant="primary ripple"
              @click="addPublisher()"
              >Add</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>

    <div>
      <!-- Add New FAQ modal -->
      <button @click="showAddModal = true" class="btn btn-primary mb-3">
        Add New
      </button>
      <div>
        <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :pagination-options="paginationOptions"
          styleClass="tableOne vgt-table"
          :rows="faqs"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'actions'">
              <span @click="clickEdit(props.row)" class="btn mr-2"
                ><i class="fa fa-pencil-square-o" aria-hidden="true"></i
              ></span>
              <span @click="clickDelete(props.row.id)" class="btn"
                ><i class="fa fa-trash" aria-hidden="true"></i
              ></span>
            </span>
          </template>
        </vue-good-table>
        <!-- <div v-if="loader" class="loader">No data is available</div> -->
      </div>
    </div>
    <!-- <div class="spinner spinner-primary" v-if="loader" id="loader"></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      faqs: [],

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
      imgLoader:false,
      centerCode: '',
      phoneNumber: '',
      publisherName: '',
      user_id: '',
      updateId: '',
      uplodedImages: '',
      images:null,
      isEdit: false,
      columns: [
        // {
        //   label: 'ID',
        //   field: 'id'
        // },
        {
          label: 'UserName',
          field: 'user_name'
        },
        {
          label: 'Contact number',
          field: 'contact_number'
        },
        {
          label: 'Agency code',
          field: 'agency_center_code'
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
      }
    }
  },
  mounted () {
    this.addCssRule()
    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);
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
    const accessToken = localStorage.getItem('accesstoken')

    // Check if the access token exists
    if (accessToken) {
      this.fetchUser(accessToken)
      // console.log('Access token:', accessToken);
    } else {
      console.log('No access token found in local storage')
    }
    this.fetchPublisher()

    this.addCssRule()
  },
  methods: {
    async fetchPublisher () {
      this.loader = true
      try {
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall('publisher/get-all/')
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
        // const response = this.$apiService.getCall('publisher/get-all/')
        console.log(response);
        if (response.error) {
          this.$toaster.makeToast('warning', response.message)
        } else {
          
          this.faqs = response.apidata.data;
        
          this.$toaster.makeToast('success', 'publisher data get successfully');
        }
        this.loader = false
      } catch (error) {
        this.loader = false
        console.error(error)
        this.$toaster.makeToast(
          'warning',
          'Error: Server Error'
        )
      }
    },
    async fetchUser (token) {
      this.loader = true

      try {
        // Create headers object and add the token
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // Adjust this if your API expects a different content type
        }

        // Make the API GET call with the headers
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall('user/user-by-id/', { headers })
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

        if (response.message === 'Invalid token') {
          this.$toaster.makeToast('warning', response.message)
        } else {
          this.loader = false
          this.user_id = response.apidata.data._id
          // console.log('User Data:', response.apidata.data._id);
          // this.$toaster.makeToast('success', 'User fetched successfully');
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
    async handleImageSelection() {
      this.imgLoader = true;
  
      try {
        const formData = new FormData()
         

        formData.append('image', this.images) 
      
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .postCall('util/image/',formData)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
        // const response = this.$apiService.postCall('util/image/', formData)
        console.log('Image upload failed', response)
        if (response.error) {
           this.imgLoader = false;
           this.$toaster.makeToast('warning', response.message)
        } else {
          this.imgLoader = false;
          this.uplodedImages = response.apidata.url;
          this.$toaster.makeToast('success', 'Image upload successfully');
      
        }
      } catch (error) {
        this.imgLoader = false;
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

    async addPublisher() {
    
      if (
        !this.images ||
        !this.phoneNumber ||
        !this.centerCode ||
        !this.publisherName
      ) {
        this.$toaster.makeToast(
          'warning',
          'Please fill in all the required fields'
        )
        setTimeout(() => (this.errorMessage = ''), 2000)
        return
      }


      if (this.isEdit) {
        this.editPublisher()
      } else {
         this.loader = true;
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            user_name: this.publisherName,
            contact_number: this.phoneNumber,
            agency_center_code: this.centerCode,
            icon: "this.uplodedImages",
            // icon: 'https://tiktok.algofolks.com/download.png',
            userId: this.user_id
          }
         
          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall(
            'publisher/create/',
            requestData
          )

        

          if (res.error) {
             this.loader = false;
            this.$toaster.makeToast('warning', res.message)
          } else {
            this.isEdit = false;
           this.showAddModal = false;
             this.loader = false;
            this.$toaster.makeToast('success', 'Data added successfully')
          }
        } catch (error) {
           this.fetchPublisher()
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: Server Error')
          // console.error(error)
        }
      }
    },
    async editPublisher() {
       this.loader = true;
      try {
        //const imageUrls = await this.uploadImages();
        let requestData = {
          user_name: this.publisherName,
          contact_number: this.phoneNumber,
          agency_center_code: this.centerCode,
          icon: this.uplodedImages
          // userId: this.user_id
        }

        // Assuming you want to make a POST request
        const res = await this.$apiService.putCall(
          `publisher/update-publisher-status/${this.updateId}`,
          requestData
        )

        

        if (res.error) {
           this.loader = false;
          this.$toaster.makeToast('warning', res.message)
        } else {
          this.isEdit = false;
           this.showAddModal = false;
           this.loader = false;
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
      this.centerCode = data.agency_center_code;
      this.phoneNumber= data.contact_number;
      this.publisherName = data.user_name;
      this.user_id = data._id;
      this.updateId = data._id;
      // this.uplodedImages = data._id;
      this.images = data.icon;
      this.showAddModal = true;
      this.isEdit = true;
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
          this.loader = true
          const response = await this.$apiService.deleteCall(
            `publisher/delete/${data._id}`,
            null
          )
          if (!response.isError) {
            // Remove the FAQ from the local data
            // this.faqs = this.faqs.filter(faq => faq.id !== id)

            this.$toaster.makeToast('success', 'Your Publisher has been deleted')
            this.loader = false
          } else {
            console.error(`Failed to delete publisher with `)
          }
        } else {
          // User canceled the deletion, do nothing or show a message
          console.log('Deletion canceled by user')
        }
      } catch (error) {
        console.error('Error deleting FAQ:', error)
      }
    },
    closeModal() {
       this.isEdit = false;
      this.showAddModal = false // Set showAddModal to false to hide the modal
    },
    closeModalEdit () {
      this.showAddModalEdit = false // Set showAddModal to false to hide the modal
    },

    addCssRule () {
      const style = document.createElement('style')
      style.type = 'text/css'
      const cssRule =
        '#modal-add___BV_modal_content_{' + '  right: 0em !important;' + '}'
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
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 60%; /* Adjust as needed */
  max-width: 600px; /* Maximum width */
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
</style>
