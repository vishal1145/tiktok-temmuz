const axios = require('axios');
export default {
  install(Vue) {
    let app = new Vue({
      data() {
        return {
          // apiUrl: 'http://localhost:8000/'
          apiUrl: 'https://deliveryapi.algofolks.com/' 
          // apiUrl:'https://bew.zoombacars.in/'
          
        };
      },
      methods: {
        getAppendedUrl(url) {
          return `${this.apiUrl + url}`;
        },
        getRazorpayKey() {
          return 'rzp_test_wQQru4jnFZS6Qb' ;
          // return 'rzp_test_BYpIyxYW1x6yWX' ;
          
        },
        async getCall(url) {
          try {
            const apidata = await axios.get(`${this.apiUrl + url}`, {
              headers: {
                accesstoken: localStorage.accesstoken,
              }
            });
            return { isError: false, apidata: apidata.data }
          } catch (error) {
            return { isError: true, error }
          }
        },
        async putCall(url, data) {
          try {
            const apidata = await axios.put(`${this.apiUrl + url}`, data, {
              headers: {
                accesstoken: localStorage.accesstoken,
              }
            });
            return { isError: false, apidata: apidata.data }
          } catch (error) {
            return { isError: true, error }
          }
        },

        async deleteCall(url, data) {
          try {
            const apidata = await axios.delete(`${this.apiUrl + url}`, {
              headers: {
                accesstoken: localStorage.accesstoken,
              },
              data: data // Pass data here
            });
            return { isError: false, apidata: apidata.data };
          } catch (error) {
            return { isError: true, error };
          }
        },

        async postCall(url, data) {
          try {
            const apidata = await axios.post(`${this.apiUrl + url}`, data, {
              headers: {
                accesstoken: localStorage.accesstoken,
              }
            });
            return { isError: false, apidata: apidata.data }
          } catch (error) {
            return { isError: true, error }
          }
        },
        async postFileCall(url, formData) {
          try {
            const apidata = await axios.post(`${this.apiUrl + url}`, formData, {
              headers: {
                accesstoken: localStorage.accesstoken,
                "Content-Type": "multipart/form-data",
              }
            });
            return { isError: false, apidata: apidata.data }
          } catch (error) {
            return { isError: true, error }
          }
        }
      }
    });
    Vue.prototype.$apiService = app;
  }
};