<template>
  <div class="container">
    <div class="font-weight-bold fa-2x text-light">Food Ordered History</div>
    <hr class="mt-1" />
    <b-modal
      v-model="showAddModal"
      id="modal-add"
      size="md"
      title="Add FAQ"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label
        class="px-3 pt-2 pb-1"
        style="
    font-size: 20px;
    margin: 0px;
"
        >Add FAQ</label
      >
      <b-row class="px-3">
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Category:</i>
        </b-col>
        <b-col md="12 pb-2">
          <select
            v-model="category"
            id="input-category"
            style="padding: 5.600000000000001px;background-color: #e5e7eb63;color: #5b5757;border-radius: 5px;width: 230px;"
          >
            <option value="Please Selected Category" disabled>
              Please Selected Category
            </option>
            <option value="Services">Services</option>
            <option value="Delivery">Delivery</option>
            <option value="Menu">Menu</option>
            <option value="Misc">Misc</option>
          </select>
        </b-col>
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Title:</i>
        </b-col>
        <b-col md="12">
          <b-form-group label="" label-for="input-title">
            <b-form-textarea
              v-model="title"
              required
              placeholder="Title"
              style="height: 34px"
              type="text"
              id="input-title"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Description:</i>
        </b-col>
        <b-col md="12">
          <b-form-group label="" label-for="input-description">
            <b-form-textarea
              v-model="description"
              required
              placeholder="Description"
              style="height: 60px"
              type="text"
              id="input-description"
            ></b-form-textarea>
          </b-form-group>
        </b-col>

        <b-col>
          <div class="d-flex justify-content-end ">
            <div class="spinner spinner-primary mr-3" v-if="loader"></div>
            <b-button class="mb-2 mr-2" @click="closeModal()">Close</b-button>
            <b-button
              class="mb-2 "
              variant="primary ripple"
              @click="addNewFAQ()"
              >Add FAQ</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      v-model="showAddModalEdit"
      id="modal-add"
      size="md"
      title="Add FAQ"
      style="height: 100px"
      hide-footer
      hide-header
      centered
    >
      <label
        class="px-3 pt-2 pb-1"
        style="
    font-size: 20px;
    margin: 0px;
"
        >Update FAQ</label
      >
      <b-row class="px-3">
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Category:</i>
        </b-col>
        <b-col md="12 pb-2">
          <select
            v-model="editFAQData.category"
            id="input-category"
            style="padding: 5.600000000000001px;background-color: #e5e7eb63;color: #5b5757;border-radius: 5px;width: 230px;"
          >
            <option value="Services">Services</option>
            <option value="Delivery">Delivery</option>
            <option value="Menu">Menu</option>
            <option value="Misc">Misc</option>
          </select>
        </b-col>
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Title:</i>
        </b-col>
        <b-col md="12">
          <b-form-group label="" label-for="input-title">
            <b-form-textarea
              v-model="editFAQData.title"
              required
              placeholder="Title"
              style="height: 34px"
              type="text"
              id="input-title"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <i class="mb-3" aria-hidden="true">Description:</i>
        </b-col>
        <b-col md="12">
          <b-form-group label="" label-for="input-description">
            <b-form-textarea
              v-model="editFAQData.description"
              required
              placeholder="Description"
              style="height: 60px"
              type="text"
              id="input-description"
            ></b-form-textarea>
          </b-form-group>
        </b-col>

        <b-col>
          <div class="d-flex justify-content-end ">
            <div class="spinner spinner-primary mr-3" v-if="loader"></div>
            <b-button class="mb-2 mr-2" @click="closeModalEdit()"
              >Close</b-button
            >
            <b-button
              class="mb-2 "
              variant="primary ripple"
              @click="updateFAQ()"
              >Update FAQ</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <!-- <div class="spinner spinner-primary" v-if="loader" id="loader"></div> -->

    <div v-if="faqs.length === 0 && !loader">
      <button @click="showAddModal = true" class="btn btn-primary mb-3">
        Add New FAQ
      </button>

      <div>
        <vue-good-table
    :columns="columns"
    :line-numbers="false"
    :pagination-options="paginationOptions"
    styleClass="tableOne vgt-table"
    :rows="faqs"
  >
  <template v-slot:table-row="props">
      <td>{{ props.row.id }}</td>
      <td>{{ props.row.title }}</td>
      <td>{{ props.row.category }}</td>
      <td>{{ props.row.description }}</td>
      <td>
        <span @click="editFAQ(props.row)" class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
        <span @click="deleteFAQ(props.row.id)" class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
      </td>
    </template>
  </vue-good-table>
        <div v-if="loader" class="loader">No data is available</div>
      </div>
      <p>No data is available</p>
    </div>
    <div v-else>
      <!-- Add New FAQ modal -->
      <button @click="showAddModal = true" class="btn btn-primary mb-3">
        Add New FAQ
      </button>
      <div>
      <vue-good-table
    :columns="columns"
    :line-numbers="false"
    :pagination-options="paginationOptions"
    styleClass="tableOne vgt-table"
    :rows="faqs"
  >
  <template  slot="table-row" slot-scope="props">
    <span v-if="props.column.field === 'actions'">
          
          <span @click="editFAQ(props.row)" class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
        <span @click="deleteFAQ(props.row.id)" class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
     
        </span>
  </template>
  </vue-good-table>
        <div v-if="loader" class="loader">No data is available</div>
      </div>
    </div>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>

<script>
  export default {
    data() {
  return {
    faqs: [],

    showAddModal: false,
    showAddModalEdit: false,
    editFAQData: { id: null, title: '', description: '', category: 'Please Selected Category' } ,
    category: 'Please Selected Category',
    loader: true,
    columns: [
        {
          label: "ID",
          field: "id"
        },
        {
          label: "Title",
          field: "title"
        },
        {
          label: "Category",
          field: "category"
        },
        {
          label: "Description",
          field: "description"
        },
        {
          label: "Actions",
          sortable: false,
          field: "actions",
          width: "150px",
          formatFn: () => {
            return `
              <span class="btn mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
              <span class="btn"><i class="fa fa-trash" aria-hidden="true"></i></span>
            `;
          }
        }
      ],
      paginationOptions: {
  enabled: true,
  mode: 'recordsPerPage', // Set pagination mode to 'recordsPerPage'
  perPageDropdown: [10, 20, 50], // Set options for number of records per page
  nextLabel: 'Next', // Custom label for the next button
  prevLabel: 'Previous', // Custom label for the previous button
 
} ,faqs: []

  };
},
mounted() {
    this.addCssRule();
    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);

  },
computed:
{
  containerClasses() {
      return {
        'large-container': this.isLarge,
        'important-container': this.isImportant
      };
    },
},
    created() {
      this.fetchFAQs();
      this.addCssRule();
    },
    methods: {
      async fetchFAQs() {
     this.loader = true;

  try {
    const response = await fetch('https://deliveryapi.algofolks.com/faq');
    const faqs = await response.json();
 
    const faqsWithPlaceholders = faqs.map(faq => ({
      ...faq,
     
      description: faq.description || "N/A",
    }));
    this.faqs = faqsWithPlaceholders;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
  } finally {
    this.loader = false;
  }
}
,

// async fetchFAQs() {
//   this.loader = true;

//   try {
//     const response = await this.$apiService.getCall('faq');
//     const faqs = await response.json();
 
//     const faqsWithPlaceholders = faqs.map(faq => ({
//       ...faq,
//       description: faq.description || "N/A",
//     }));
    
//     this.faqs = faqsWithPlaceholders;
//   } catch (error) {
//     console.error('Error fetching FAQs:', error);
//   } finally {
//     this.loader = false;
//   }
// }



      truncateDescription(description) {
        const words = description.split(' ');
        if (words.length > 13) {
          return words.slice(0, 13).join(' ') + '...';
        } else {
          return description;
        }
      },
      async addNewFAQ() {
  try {
    const response = await fetch(`${this.$apiService.apiUrl}/faq/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify({
        title: this.title,
        description: this.description,
        category: this.category,
      }),
    });
    if (response.ok) {
      // Handle success, such as updating the UI or fetching FAQs again
      console.log('FAQ added successfully');

      this.fetchFAQs();
  // Fetch FAQs again to update the list
      this.closeModal();
      this.title = "";
      this.description = "";
      this.$toaster.makeToast(
          "success",
          "FAQ added successfully"
        );

     // Close the modal after adding FAQ
    } else {
      console.error('Failed to add FAQ');
      // Handle error, such as displaying an error message
    }
  } catch (error) {
    console.error('Error adding FAQ:', error);
    // Handle error, such as displaying an error message
  }
      },


editFAQ(faq) {
  console.log('FAQcategory:', faq.category); // Log the category value
  this.editFAQData.id = faq.id;
  this.editFAQData.title = faq.title;
  this.editFAQData.description = faq.description;
  this.editFAQData.category = faq.category;
  this.showAddModalEdit = true;
},


async updateFAQ() {
  try {
    const response = await this.$apiService.putCall(`faq/?id=${this.editFAQData.id}`, {
      title: this.editFAQData.title,
      description: this.editFAQData.description,
      category: this.editFAQData.category,
    });
    if (!response.isError) {
      // Handle success, such as updating the UI or fetching FAQs again
      console.log('FAQ updated successfully');

      this.fetchFAQs();
      this.closeModalEdit();
      this.editFAQData.category = '';
      this.$toaster.makeToast(
          "success",
          "FAQ updated successfully"
        );
    } else {
      console.error('Failed to update FAQ');
      // Handle error, such as displaying an error message
    }
  } catch (error) {
    console.error('Error updating FAQ:', error);
    // Handle error, such as displaying an error message
  }
},


async deleteFAQ(id) {
  try {
    // Show confirmation dialog
    const result = await this.$swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    // If user confirms deletion
    if (result.value) {this.loader = true;
      const response = await this.$apiService.deleteCall(`faq?id=${id}`, null);
      if (!response.isError) {
        // Remove the FAQ from the local data
        this.faqs = this.faqs.filter(faq => faq.id !== id);

        this.$toaster.makeToast(
          "success",
          "Your FAQ has been deleted"
        );
        this.loader = false;
      } else {
        console.error(`Failed to delete FAQ with ID ${id}.`);
      }
    } else {
      // User canceled the deletion, do nothing or show a message
      console.log('Deletion canceled by user');
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error);
  }
}
,
closeModal() {
      this.showAddModal = false; // Set showAddModal to false to hide the modal
    },
closeModalEdit() {
      this.showAddModalEdit = false; // Set showAddModal to false to hide the modal
    },


    addCssRule() {
      const style = document.createElement("style");
      style.type = "text/css";
      const cssRule =
        "#modal-add___BV_modal_content_{" +
        "  right: 0em !important;" +
        "}";
      style.appendChild(document.createTextNode(cssRule));
      document.head.appendChild(style);
    },
    }
  };
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

#modal-add___BV_modal_content_{
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
    right: 0px!important;
}
</style>
