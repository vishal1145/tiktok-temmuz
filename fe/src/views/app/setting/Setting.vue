<template>
  <div class="main-content">
    <b-row>
      <b-col md="10">
        <div class="font-weight-bold fa-2x text-light">
          Default Commission Rates
        </div>
      </b-col>
    </b-row>
    <hr class="mt-1" />
    <b-row>
      <b-col md="4">
        <b-form-group label="0-2.000.000 diamonds" label-for="input-firstValue">
          <b-form-input
            v-model="firstValue"
            required
            placeholder="Enter value in %"
            type="text"
            id="input-firstValue"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label="2.000.000+ diamonds" label-for="input-secondValue">
          <b-form-input
            v-model="secondValue"
            required
            placeholder="Enter value in %"
            type="text"
            id="input-secondValue"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-button
          variant="primary ripple"
          class="mb-2 btnSmall"
          @click="clickCommission()"
          >Add commission</b-button
        >
      </b-col>
    </b-row>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data () {
    return {
      theme: 'light_theme',
      firstValue: '',
      secondValue: '',
      loader: false,
      user_id: '',
      role: ''
    }
  },
  created () {
    this.user_id = localStorage.getItem('user_id')
    this.role = localStorage.getItem('role')
    this.getCommissionData()
  },
  methods: {
    setThemePreference () {
      var d = new Date()
      var currentHour = d.getHours()
      if (currentHour >= 19 || currentHour <= 6) {
        this.theme = 'dark_theme'
      } else {
        this.theme = 'light_theme'
      }
    },
    getCommissionData () {
      this.loader = true
      this.$apiService
        .getCall('commission/')
        .then(res => {
          if (!res.error) {
            console.log(res);
            // const res = this.data.find(item => item._id === this.user_id)
            // if (res) {
            //   this.firstValue = res.first_commission
            //   this.secondValue = res.second_commission
            // }

            console.log(res)
            this.loader = false
          } else {
            this.loader = false
            this.$toaster.makeToast('warning', 'Commission get failed')
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)

          this.loader = false
        })
    },
    clickCommission () {
      if (this.firstValue && this.secondValue) {
        this.loader = true
        let reqData = {
          first_commission: this.firstValue,
          second_commission: this.secondValue,
          // uid: this.user_id
        }
        this.$apiService
          .postCall('commission/', reqData)
          .then(res => {
            if (!res.error) {
              this.$toaster.makeToast('success', 'Commission add successfully')
              this.$bvModal.hide('modal-asign-driver')

              this.loader = false
            } else {
              this.loader = false
              this.$toaster.makeToast('warning', 'Commission add failed')
            }
          })
          .catch(error => {
            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)

            this.loader = false
          })
      } else {
        this.$toaster.makeToast('warning', 'All filed is required')
      }
    }
  },
  mounted () {
    this.setThemePreference()
  }
}
</script>

<style scoped>
/* Primary theme colors */
[data-theme='light_theme'] {
  --white: #fff;
  --bg-color: #f8f8f8;
  --color: #333;
  --secondary-color: #ff7f57;
  --icon-bg-color: #333;
  --icon-color: #333;
}

body {
  background: var(--bg-color);
  color: var(--color);
  text-align: center;
}

[data-theme='dark_theme'] {
  --white: #fff;
  --bg-color: #000;
  --color: #fff;
  --secondary-color: #ff7f57;
  --icon-bg-color: #333;
  --icon-color: #fff;
}

@keyframes fadeIn {
  from {
    top: 20%;
    opacity: 0;
  }
  to {
    top: 100;
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  from {
    top: 20%;
    opacity: 0;
  }
  to {
    top: 100;
    opacity: 1;
  }
}
#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10000000;
}
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  animation: fadeIn 1000ms ease;
  -webkit-animation: fadeIn 1000ms ease;
}

h1 {
  font-size: 64px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
  line-height: 1;
  font-weight: 700;
}

.dot {
  color: #a855f7;
}

p {
  text-align: center;
  margin: 18px;
  font-family: 'Muli', sans-serif;
  font-weight: normal;
}

.icons {
  text-align: center;
}

.icons i {
  color: var(--white);
  background: var(--icon-bg-color);
  height: 15px;
  width: 15px;
  padding: 13px;
  margin: 0 10px;
  border-radius: 50px;
  border: 2px solid transparent;
  transition: all 200ms ease;
  text-decoration: none;
  position: relative;
}

.icons i:hover,
.icons i:active {
  color: var(--icon-color);
  background: none;
  border-color: var(--icon-bg-color);
  cursor: pointer !important;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  text-decoration: none;
}
</style>
