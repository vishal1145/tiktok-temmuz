<template>
  <div>
    <!-- <b-card title="Wallet & Offers">
      <b-row class="my-3">
        <b-col md="12"> Processixsxsxsng </b-col>
        <b-col md="6"> </b-col>
      </b-row>

      <b-row>
        <b-col md="12" class="">
          <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
          <b-button
            v-if="!updateloader"
            variant="primary ripple"
            @click="updateUser()"
            >Login to continue</b-button
          >
        </b-col>
      </b-row>
    </b-card> -->

    <div class="card position-fixed dotShowDisplay" style="width: 23rem">
      <div class="p-3">
        <h5 class="card-title mb-0">Wallet & Offers</h5>
      </div>
      <!-- <div class="p-3">
        <div class="d-flex justify-content-between flex-row">
          <div class="d-flex flex-row align-center align-items-center">
            <div class="">
              <img
                class="w-50"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5UlEQVR4nO2aeYhXVRTHP5YtjiZmZtm0zFRYMlREVNgfGgTWH5ZZWVYERVQmrSL5h2JDJUqSkeHWHm2TRZtRRKvUkBWUIWHrtCOOLVMuzVT6ixPfC9fX2+77vXlO4hcu83vvnXPufXc553vOG9iFnRfnA58B3wHzgRExMnbvdmAd8DVwAX0MY4G/gZrX/gCWAM1qi3Wv5sna3zH0EewP/KCB3QgcCdwD9OjeX2r2uxtYBhwh2Zp0zcYORT/gBQ3oRV07HAC0Ar8Bm4C7gIMjus9K9yVgt6oGfRJwpdemAw9qIN8CQxP0hqnFYah0zcZ9snsJMAkYBxxe9kssiOx/v9m2OaUO26OBPxNsbwNmlfUS5mm2Al3AHcA8Nds2M4AJJfRhNmbK7kKdo+XA75qopBUNwnjNjhmuGs+o7zPKMDZDxm6metymvqeVYexhGTuP6nGh5wjqxgcyNorqcZz6frceI0d5e9SC2x5Uj728gGqOZkiI8oGiFi4adwJTMnQuAj4BtgCrgYkZ8ifK5Ro3y0KrR202AFcD/bOULAhtlNJmYA4wOEPnHPl73/9vlbdLwkrJWeDLg2bgKc/+R8BhaQodErQD3pizk/elYzFgJHC3rlelxAx73h6hNHlgBPND6T+RJLS7zoIRuz0DjLtld8RvuK5/iZG1LfGpVtAiehGMkv330oTekNCZAYYdJR+o64EejY9iagnBdZpsWFqQiCsk9HiAYXc+bEXRX8eTfOwDrNeK10MG22X/tDShfbW97KAPymnY5R0DdN3gJU0+5ui+ZY9F0ShHsiGP51qhDi2q5kGX5B2xG6brLZEB2OT8rMkqimtk+948ws9JeG5O46skP1vbZ7quzZs5PKB7N1AfHpMdy/tTcZYE16ckSlGM13JH84iz9fxYPf8i0BvGoUVbuUe/Y2Gz+X3gtnKYqIhu22cNMNl79opsnks5uNWLQ7Hp8UIvfy4L42TzHS/4hdKZKPYWtamJrmyH/cR9rEjQRDmw2fpY2+zkOuhMHE6Vnc7odm2S0Y6As5GFy2SzrQ46k4RDVJ3ZFjfe12V0dQl1pgbVq7pF+IrQmSQ0eZzwyTiBIUpgTGAtcBDFMSvBTTrvZi+aRWfi0Oy9xMteEP4PButg1nSg/IJaXgxX9eOnmEQoL52Jw9HAj5J/XklXKoyavJlFlVOwSLrXxTzrjtCZAQl0Jg5vSfbpkGx1spSsvhSaHltm+XlC8MtDZ5LgSrNWMM+Na6Vk5ZgQOHpjbrYonUnC/UUC6y1Suj4wezOdt+ugM2mYJ/ms+sF2WCyliwN0VmpbWbG7KJ1Jg1u9oFrwo1IyEtlXcFVe5utjppS65CUsczyU6jFSOcgKraCN6dJQYvZIzOe0tXrJ3sYCL/C51qOPRS4GBWGQChHmhr/xDqfNVG9hjDf4r9T3pNAqYxbuVAc2Y72FNvVxUy/28W91z7bbr175p0yMUDqxuUQWnhlh7Xtf9FyNVsBKqyD2VwZ6QgzVaC3IKArhdHX2pTK0pSpj+t8BlyesmCVwr3ly3Yr2lpdcrlqB3T+mihfp5xWh/bZR99clFJpb9PI1/ddDuzhW1E4bFaJB9GWu/HqL5xYbvUywU2npBFF7u/eqt/9tmx2vbWoOZOoO+g6TCMsVHoqZ7WV9baAhLLpDLYS37QL/d/wDEnuvaSgyz9gAAAAASUVORK5CYII="
              />
            </div>
            <div class="marginLeft">Apply Coupon</div>
          </div>

          <div>
            <img
              class="w-25"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div> -->
      <div class="p-3 bgColour">
        <!-- <h5 class="card-title mb-0">Wallet & Offers</h5> -->
        <div class="d-flex flex-row justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-column">
            <p class="mb-0">Trip Amount</p>
            <p class="mb-0">(this does not include fuel)</p>
          </div>

          <p class="card-text">{{ dataProp.price }}</p>
        </div>
        <div class="d-flex flex-row justify-content-between border-bottom pt-2">
          <p class="card-text">Trip Protection Fee</p>
          <p class="card-text" style="text-decoration: line-through">+ ₹239</p>
        </div>
        <div class="d-flex flex-row justify-content-between border-bottom pt-2">
          <p class="card-text">Convenience Fee</p>

          <p class="card-text" style="text-decoration: line-through">+ ₹99</p>
        </div>
        <div
          class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
        >
          <p class="card-text">Total Price</p>

          <p class="card-text">{{ dataProp.price }}</p>
        </div>
        <div class="d-flex flex-row justify-content-between border-bottom pt-2">
          <p class="">Refundable Deposit</p>

          <p class="card-text">₹0</p>
        </div>
        <div
          class="d-flex flex-row justify-content-between border-bottom pt-2 font-weight-bold"
        >
          <p class="">Final Amount</p>

          <p class="card-text">{{ dataProp.price }}</p>
        </div>
      </div>
      <!-- <div class="p-3">
        <div class="d-flex justify-content-between flex-row">
          <div class="d-flex flex-row align-center align-items-center">
            <div class="">
              <img
                class="w-50"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5UlEQVR4nO2aeYhXVRTHP5YtjiZmZtm0zFRYMlREVNgfGgTWH5ZZWVYERVQmrSL5h2JDJUqSkeHWHm2TRZtRRKvUkBWUIWHrtCOOLVMuzVT6ixPfC9fX2+77vXlO4hcu83vvnXPufXc553vOG9iFnRfnA58B3wHzgRExMnbvdmAd8DVwAX0MY4G/gZrX/gCWAM1qi3Wv5sna3zH0EewP/KCB3QgcCdwD9OjeX2r2uxtYBhwh2Zp0zcYORT/gBQ3oRV07HAC0Ar8Bm4C7gIMjus9K9yVgt6oGfRJwpdemAw9qIN8CQxP0hqnFYah0zcZ9snsJMAkYBxxe9kssiOx/v9m2OaUO26OBPxNsbwNmlfUS5mm2Al3AHcA8Nds2M4AJJfRhNmbK7kKdo+XA75qopBUNwnjNjhmuGs+o7zPKMDZDxm6metymvqeVYexhGTuP6nGh5wjqxgcyNorqcZz6frceI0d5e9SC2x5Uj728gGqOZkiI8oGiFi4adwJTMnQuAj4BtgCrgYkZ8ifK5Ro3y0KrR202AFcD/bOULAhtlNJmYA4wOEPnHPl73/9vlbdLwkrJWeDLg2bgKc/+R8BhaQodErQD3pizk/elYzFgJHC3rlelxAx73h6hNHlgBPND6T+RJLS7zoIRuz0DjLtld8RvuK5/iZG1LfGpVtAiehGMkv330oTekNCZAYYdJR+o64EejY9iagnBdZpsWFqQiCsk9HiAYXc+bEXRX8eTfOwDrNeK10MG22X/tDShfbW97KAPymnY5R0DdN3gJU0+5ui+ZY9F0ShHsiGP51qhDi2q5kGX5B2xG6brLZEB2OT8rMkqimtk+948ws9JeG5O46skP1vbZ7quzZs5PKB7N1AfHpMdy/tTcZYE16ckSlGM13JH84iz9fxYPf8i0BvGoUVbuUe/Y2Gz+X3gtnKYqIhu22cNMNl79opsnks5uNWLQ7Hp8UIvfy4L42TzHS/4hdKZKPYWtamJrmyH/cR9rEjQRDmw2fpY2+zkOuhMHE6Vnc7odm2S0Y6As5GFy2SzrQ46k4RDVJ3ZFjfe12V0dQl1pgbVq7pF+IrQmSQ0eZzwyTiBIUpgTGAtcBDFMSvBTTrvZi+aRWfi0Oy9xMteEP4PButg1nSg/IJaXgxX9eOnmEQoL52Jw9HAj5J/XklXKoyavJlFlVOwSLrXxTzrjtCZAQl0Jg5vSfbpkGx1spSsvhSaHltm+XlC8MtDZ5LgSrNWMM+Na6Vk5ZgQOHpjbrYonUnC/UUC6y1Suj4wezOdt+ugM2mYJ/ms+sF2WCyliwN0VmpbWbG7KJ1Jg1u9oFrwo1IyEtlXcFVe5utjppS65CUsczyU6jFSOcgKraCN6dJQYvZIzOe0tXrJ3sYCL/C51qOPRS4GBWGQChHmhr/xDqfNVG9hjDf4r9T3pNAqYxbuVAc2Y72FNvVxUy/28W91z7bbr175p0yMUDqxuUQWnhlh7Xtf9FyNVsBKqyD2VwZ6QgzVaC3IKArhdHX2pTK0pSpj+t8BlyesmCVwr3ly3Yr2lpdcrlqB3T+mihfp5xWh/bZR99clFJpb9PI1/ddDuzhW1E4bFaJB9GWu/HqL5xYbvUywU2npBFF7u/eqt/9tmx2vbWoOZOoO+g6TCMsVHoqZ7WV9baAhLLpDLYS37QL/d/wDEnuvaSgyz9gAAAAASUVORK5CYII="
              />
            </div>
            <div class="marginLeft">Apply Coupon</div>
          </div>

          <div>
            <img
              class="w-25"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div> -->

      <div class="pb-3 px-3 pt-1 justify-content-center align-content-center">
        <!-- <p class="card-text">login to see the final fare and offers</p>
        <div class="d-flex flex-row justify-content-between py-3">
          <div><p class="mb-0 font-weight-bold">₹2400</p></div>
          <div class="d-flex flex-row align-center align-items-center">
            <div class="">
              <img
                class="w-50"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqElEQVR4nO3YMQ6AIAyF4d7/WHYwnqoO6KZBimJp/i9hJb600KAI5mLBllu6IH8zghyoyMuM1vq4tTYRWTNUxBr3ta+CaOP9rw/2PffUyEGWhiDLyCBpWqsXQbyoSAWt5cUcEebIJebIieu3guvXK31rKe+RgveIV/oz0osgXlRkltZS5kjBHPHisFfoza/R6Qbi8O8wgrzLqMiB1oraWhZkuaUJAhlsB0+566uSDGYdAAAAAElFTkSuQmCC"
              />
            </div>
            <div class="marginLeft font-weight-bold">Fare Summary</div>
          </div>
        </div> -->

        <a href="#" @click="clickPay()" class="btn btn-primary w-50">Payment</a>
      </div>
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
  props: {
    dataProp: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      price: "",
      loader: false,
      // dataProp:'',
    };
  },
  created() {
    // var storedUser = localStorage.getItem("userInfo");

    // var parsedUser = JSON.parse(storedUser);
    // this.id = parsedUser.data.id;

    // var parsedUser = JSON.parse(storedUser);
    // this.id = parsedUser.data.id;
    //   if (this.id) {

    //     this.getProfileDetails();
    //   }
  },
  methods: {
    clickPay() {
      this.loader = true;
      const apiUrl = `carBooking/?userId=${this.dataProp.id}&amount=${this.dataProp.price}&carId=${this.dataProp.carId}&no_of_days=3`;

      window.location.href = this.$apiService.getAppendedUrl(apiUrl);
      this.loader = false;
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
.marginLeft {
  margin-left: -19px;
}
.bgColour {
  background-color: #ffffff;
}

.border-bottom {
  border-bottom: 1px solid #ac54f452 !important;
}

.stickyPositionLeft {
  right: 78px;
  position: sticky;
}

@media (max-width: 920px) {
  .dotShowDisplay {
    display: none;
  }
}
</style>
