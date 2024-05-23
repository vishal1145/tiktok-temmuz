<template>
    <div class="main-content">
     
      <div class="main-div">
        hii wellcom to hoem page
       
        
      </div>
      <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
      </div>
  </template>
  <script>
  import message from "../../../message";
  export default {
    metaInfo: {
      title: "Car-View",
    },
    components: {},
    data() {
      return {
        
      };
    },
    created() {
      // var storedUser = localStorage.getItem("userInfo");
  
      // var parsedUser = JSON.parse(storedUser);
      // this.id = parsedUser.data.id;
     
      
    },
    methods: {
    
  
     
      async getCarDetails() {
        try {
          this.loader = true;
          let response = await this.$apiService.getCall(`account/?id=${this.id}`);
          this.form.fName = response.apidata.form.fName;
       
  
          this.loader = false;
        } catch (error) {
          this.loader = false;
          console.log(error);
        }
      },

    
     
      
    },
  };
  </script>
  <style scoped>
  #loader {
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 10;
  }
  
  .for-border {
    border: 1px solid #9ca3af;
  }
  
  .update {
    display: flex;
    align-items: center;
  }
  
  
  .custom-checked {
    border-color: aqua;
    color: yellow;
  }
  .main-div {
    gap: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .for-profile {
    width: 49%;
  }
  @media  (max-width: 768px) {
    .main-div {
      flex-direction: column;
    }
    
    .main-content-wrap {
      padding: 0 !important;
    }
    .for-profile {
      width: 100%;
    }
  }
  </style>
  