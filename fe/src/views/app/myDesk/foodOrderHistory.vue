<template>
  <div class="main-content">
    <b-row>
      <b-col md="10">
        <div class="font-weight-bold fa-2x text-light">Food Order History</div>
      </b-col>
      <!-- <b-col v-if="this.role === 'User'">
      <div>
        <i class="fa fa-car mr-2 text-primary" aria-hidden="true"></i>
        <a
          class="text-primary"
          @click="clickBookCar()"
          style="text-decoration: underline !important; cursor: pointer"
        >
          Book Car</a
        >
      </div></b-col
    > -->
    </b-row>

    <hr class="mt-1" />

    <b-modal
      id="modal-add"
      size="sm"
      title="Update Order"
      style="height: 200px"
      hide-footer
    >
      <div>
        <div>
          <b-button
            class="mb-2 mr-2 btnSmall2 btn-primary"
            @click="addRow"
            :disabled="isNameWarning"
            >Add Item</b-button
          >

          <hr class="mt-2 mb-2" />
          <table class="tableOne vgt-table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" style="width: 30%">Item</th>
                <th scope="col">Item Quantity</th>
                <th scope="col">Item Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in item" :key="index">
                <td class="">
                  <input
                    v-model="item.item"
                    type="text"
                    placeholder="Enter item name"
                    class="inputttt"
                    style="width: 100%"
                    required
                    min="0"
                    oninput="validity.valid||(value='');"
                  />
                  <!-- <span v-if="!item.item" class="warning"
                    >Item name is required</span
                  > -->
                </td>
                <td>
                  <input
                    v-model.number="item.quantity"
                    type="number"
                    placeholder="Enter quantity"
                    @input="calculateTotal(index)"
                    class="inputttt"
                    style="width: 50%"
                    min="0"
                    oninput="validity.valid||(value='');"
                  />
                </td>
                <td class="">
                  <input
                    v-model.number="item.item_price"
                    type="number"
                    placeholder="Enter price"
                    @input="calculateTotal(index)"
                    class="inputttt"
                    style="width: 50%"
                    min="0"
                    oninput="validity.valid||(value='');"
                  />
                </td>
                <td>
                  <b-row
                    ><b-col>₹ {{ item.price }}-/</b-col></b-row
                  >
                  <!-- <input
                    v-model.number="item.price"
                    type="number"
                    placeholder="Total price"
                    readonly
                    class="inputtttNone" 
                  /> -->
                </td>
                <td>
                  <span @click="deleteRow(index)" class="btn"
                    ><i class="fa fa-trash" aria-hidden="true"></i
                  ></span>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <!-- <td></td>
                <td></td>
                <td></td> -->

                <td>
                  <div>
                    <b-form-group class="" label-for="input-1">
                      <b-form-select
                        v-model="selectedOption"
                        required
                        @change="handleSelectionChangeDriver"
                        ><b-form-select-option disabled value=""
                          >Select Driver</b-form-select-option
                        >
                        <b-form-select-option
                          v-for="user in allDriverName"
                          :key="user.id"
                          :value="user.id"
                          >{{ user.fullName }}</b-form-select-option
                        >
                      </b-form-select>
                    </b-form-group>
                  </div>
                </td>

                <td colspan="3" class="text-right">Discount :</td>

                <td>
                  <div
                    class="d-flex flex-row justify-content-center align-items-center"
                  >
                    <div class="pt-2">
                      <input
                        v-if="discountType === 'Absolute'"
                        v-model="absoluteDiscount"
                        type="number"
                        placeholder="Enter discount"
                        class="inputttt76"
                        min="0"
                        oninput="validity.valid||(value='');"
                      />

                      <input
                        v-else
                        v-model.number="discount"
                        type="number"
                        placeholder="Enter discount "
                        class="inputttt76"
                        min="0"
                        oninput="validity.valid||(value='');"
                      />
                    </div>

                    <div class="pt-2">
                      <b-form-select
                        v-model="discountType"
                        class="selectBorderless"
                        :options="['Absolute', '%']"
                      ></b-form-select>
                    </div>

                    <div class="pt-2" v-if="discountType != 'Absolute'">
                      ₹ {{ percentageAmount }}
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td colspan="4" class="text-right">
                  <b-row>
                    <b-col> Sub Total : </b-col>
                  </b-row>
                </td>
                <td>
                  ₹ {{ subtotal }}-/
                  <!-- Display subtotal here -->
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">
                  <b-row>
                    <b-col> GST : </b-col>
                  </b-row>
                </td>
                <td>
                  ₹ {{ gstAmount != null ? gstAmount : 0 }}-/
                  <!-- <input
                    v-model.number="discount"
                    type="number"
                    placeholder="Enter discount %"
                    class="inputttt"
                    @input="applyDiscount"
                  /> -->
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right inputtttNone">
                  Delivery Charge :
                </td>
                <td>
                  <b-form-group
                    class="col-md-6"
                    label-for="input-food-delivery"
                  >
                    <b-form-input
                      v-model="food_delivery_charge"
                      required
                      placeholder="00"
                    ></b-form-input>
                  </b-form-group>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right inputtttNone">
                  <b-row>
                    <b-col> Total Amount : </b-col>
                  </b-row>
                </td>
                <td>
                  <b-row>
                    <b-col> ₹ {{ totalAmount }}-/ </b-col></b-row
                  >
                  <!-- <input
                    type="number"
                    class="inputtttNone"
                    v-model="totalAmount"
                    readonly
                  /> -->
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="d-flex justify-content-end pt-2">
          <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
          <b-row>
            <b-col>
              <b-button class="mb-2 btnSmall" @click="clickCancelAmount2"
                >Cancel</b-button
              >

              <b-button
                v-if="!updateloader"
                variant="primary ripple"
                class="mb-2 btnSmall ml-2"
                @click="clickUpdateAmount()"
                :disabled="isNameWarning || selectedOption === ''"
                >Update order & send notification</b-button
              >
            </b-col>
          </b-row>

          <!-- <b-button class="mb-2 mr-2 btnSmall" @click="addRow" :disabled="isNameWarning">Add Item</b-button> -->
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-item-view"
      size="lg"
      title="Update Order"
      style="height: 200px"
      hide-header
      ><b-row>
        <b-col>
          <vue-good-table
            :columns="getitemColumns"
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
            :sort-options="{
              enabled: false
            }"
            :rows="getitemRows"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'show-price'">
                <div @click="clickViewProfile(props.row.userId)">
                  <p
                    class="m-0 ul-cursor--pointer text-primary"
                    style="text-decoration: underline"
                  >
                    {{ props.row.user_name }}
                  </p>
                </div>
              </span>
            </template>
          </vue-good-table>
        </b-col>

        <b-col md="12" class="mt-3">
          <div class="d-flex justify-content-between px-2">
            <b-form-group
              class=""
              label="Assigned Driver"
              label-for="input-1"
              v-if="selectedOption"
            >
              <b-form-select disabled v-model="selectedOption" required>
                <b-form-select-option disabled :value="selectedOption">{{
                  selectedOption
                }}</b-form-select-option>
                <b-form-select-option
                  v-for="user in allDriverName"
                  :key="user.id"
                  :value="user.id"
                  >{{ user.fullName }}</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
            <div class="d-flex flex-column">
              <span>Delivery charge : ₹ +{{ getDeliveryCharge }}-/</span>
              <span>GST : ₹ +{{ getGsttax }}-/</span>
              <span v-if="this.getdiscountType == true"
                >Discount : ₹ -{{ getDiscount }}-/</span
              ><span v-else> Discount : -{{ getDiscount }}%</span>

              <span>Total : ₹ {{ getTotalPrice }}-/</span>
            </div>
          </div>
          <!-- <div class=""></div> -->
        </b-col>
      </b-row>
    </b-modal>

    <!-- <b-modal id="modal-add" size="md" title="amount" style="height: 100px" hide-footer hide-header centered>
    <b-row class="p-3">
      <b-col md="12">
        <i class="mb-3" aria-hidden="true">
          Enter The Amount:
        </i>
      </b-col>
      <b-col md="12">
        <b-form-group label="" label-for="input-2">
          <b-form-input v-model="amount" required placeholder="Enter The Amount" style="height: 34px"
            type="number"></b-form-input>
        </b-form-group>
      </b-col>

      <b-col>
        <div class="d-flex justify-content-end px-2">
          <div class="spinner spinner-primary mr-3" v-if="loader"></div>
          <b-button class="mb-2 mr-2" @click="clickCancelAmount2()">Cancel</b-button>
          <b-button class="mb-2 mr-2" variant="primary ripple" @click="clickUpdateAmount()">Update Order</b-button>
        </div>







      </b-col>
    </b-row>
  </b-modal> -->

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
          <div class="d-flex justify-content-end px-2">
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class="mb-2 mr-2"
              variant="primary ripple"
              @click="clickCancleButton()"
              >ok</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-asign-driver"
      size="md"
      title="Asign Driver"
      style="height: 100px"
      hide-header
      hide-footer
      centered
    >
      <b-row class="p-2">
        <b-col md="12">
          <i
            class="fa fa-exclamation-triangle text-danger mb-3"
            aria-hidden="true"
          >
            Asign Driver:
          </i>
        </b-col>
        <b-col md="6">
          <b-form-group class="pattingInSelect" label-for="input-1">
            <b-form-select
              v-model="selectedOption"
              required
              @change="handleSelectionChangeDriver"
              ><b-form-select-option disabled value=""
                >Select Driver</b-form-select-option
              >
              <b-form-select-option
                v-for="user in allDriverName"
                :key="user.id"
                :value="user.id"
                >{{ user.fullName }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <div class="d-flex justify-content-end px-2">
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button class="mb-2 mr-2" @click="clickCancle()">Cancel</b-button>
            <b-button
              class="mb-2"
              variant="primary ripple"
              @click="clickUpdateAsignDriver()"
              >Update</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <b-row class="my-2">
      <b-col
        md="3"
        v-if="this.role === 'Admin'"
        style="padding-right: 15px !important; padding-left: 15px !important"
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
      <b-col md="3" class="for-gap">
        <multiselect
          @input="handleChangeCar"
          v-model="payment_status"
          placeholder="Payment Status"
          :options="['All', 'Paid', 'Unpaid']"
          :multiple="false"
          :limit="1"
        ></multiselect>
      </b-col>

      <b-col md="2"
        ><v2-datepicker
          class="for-date-picker"
          lang="en"
          ref="startDate"
          v-model="startDate"
          :picker-options="{
            disabledDate: time => time.getTime() > new Date().getTime()
          }"
          @change="onDateSelected()"
          placeholder="Select Start date"
        ></v2-datepicker
      ></b-col>
      <b-col md="2" class="for-gaps">
        <v2-datepicker
          class="for-date-picker"
          lang="en"
          ref="endDate"
          v-model="endDate"
          :picker-options="{
            disabledDate: time => time.getTime() > new Date().getTime()
          }"
          @change="onEndDateSelected()"
          placeholder="Select End date"
        ></v2-datepicker>
      </b-col>

      <div class="col-md-2 d-flex flex-row for-gap justify-content-end">
        <button @click="clearFilters()" class="btn btn-primary">
          Clear Filter
        </button>
      </div>
    </b-row>
    <!-- <vue-good-table :columns="getDynamicColumns()" :line-numbers="false" :search-options="getSearchOptions()" -->
    <vue-good-table
      :columns="getDynamicColumns()"
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
      :sort-options="{
        enabled: false
      }"
      :rows="payment_status.toLowerCase() === 'all' ? rows : filteredRows"
    >
      <template slot="table-row" slot-scope="props">
        <!-- <span v-if="props.column.field === 'img'">
        <img
          :src="props.row.image"
          alt="Image"
          height="40"
          width="40"
          class="circular-image"
        />
      </span> -->
        <span v-if="props.column.field === 'user_name_show'">
          <div @click="clickViewProfile(props.row.userId)">
            <p
              class="m-0 ul-cursor--pointer text-primary"
              style="text-decoration: underline"
            >
              {{ props.row.user_info.first_name }}
              {{ props.row.user_info.last_name }}
            </p>
          </div>
        </span>
        <span v-else-if="props.column.field === 'show_more_data_admin'">
          <template>
            <div class="d-flex flex-column">
              <div class="d-flex">
                {{ props.row.registration_number }}
              </div>
              <div>
                <ul class="d-flex mb-0 pb-2 pl-0 ml-0 flex-wrap list-unstyled">
                  <li class="p-0 m-0">
                    {{ props.row.brand }} ({{ props.row.model }})
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'show_more_data'">
          <template>
            <div class="d-flex flex-column">
              <div>
                <ul class="d-flex mb-0 pb-2 pl-0 ml-0 flex-wrap list-unstyled">
                  <li class="p-0 m-0">
                    {{ props.row.brand }} ({{ props.row.model }})
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'for_driver_show'">
          <template>
            <b-badge
              v-if="props.row.assign_driver_id"
              variant="success"
              class="p-2"
            >
              {{ props.row.assign_driver_id }}</b-badge
            >

            <b-button
              v-else
              variant="primary"
              ripple
              @click="clickAsignDriver(props.row)"
              >Asign driver</b-button
            >
          </template>
        </span>
        <span v-else-if="props.column.field === 'show_date'">
          <template>
            <div>
              <div><b>From :</b> {{ props.row.booking_date }}</div>
              <div><b>To :</b> {{ props.row.end_date }}</div>
            </div>
          </template>
        </span>

        <span v-else-if="props.column.field === 'payment_status'">
          <template>
            <b-badge
              v-if="props.row.payment_status === 'Paid'"
              variant="success"
              >{{ props.row.payment_status }}</b-badge
            >
            <b-badge
              v-else-if="props.row.payment_status === 'Unpaid'"
              variant="danger"
              >{{ props.row.payment_status }}</b-badge
            >
            <b-badge
              v-else-if="props.row.payment_status === 'COD'"
              variant="warning"
              >{{ props.row.payment_status }}</b-badge
            >

            <!-- <i
              class="fa fa-eye ml-2 ul-cursor--pointer"
              aria-hidden="true"
              @click="clickItemInfo(props.row)"
            ></i> -->
          </template>
        </span>

        <span v-else-if="props.column.field === 'show_action'">
          <template>
            <b-button
              v-if="props.row.price === 0"
              variant="primary"
              ripple
              @click="clickCancleBookingAmount(props.row.id)"
              >Amount</b-button
            >
            <b-button
              v-if="props.row.price > 0"
              variant="primary"
              ripple
              @click="clickItemInfo(props.row)"
              >See Update Order</b-button
            >
            <b-button
              v-else
              variant="primary"
              ripple
              @click="clickCancleBookingAmount(props.row)"
              >Update Order</b-button
            >
          </template>
        </span>
        <span v-else-if="props.column.field === 'show_Status'">
          <template>
            <div
              v-if="
                formData.fName &&
                formData.lName &&
                formData.aadharImage &&
                formData.drivingLicenseImage
              "
            >
              <span class="text-white m-0" style="font-size: 14px">
                <span class="badge bg-success p-2 blueVerfiyred"
                  >Booking Confirmed<i
                    class="fa fa-check-circle blueVerfiy2red"
                    aria-hidden="true"
                    style="padding-left: 4px"
                  ></i
                ></span>
              </span>
            </div>
            <div v-else>
              <span class="text-white m-0" style="font-size: 14px">
                <span class="badge bg-danger p-2 blueVerfiyred"
                  >Profile Update Pending<i
                    class="fa fa-check-circle blueVerfiy2red"
                    aria-hidden="true"
                    style="padding-left: 4px"
                  ></i
                ></span>
              </span>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'show_more_days'">
          <template>
            <div class="d-flex flex-row" style="gap: 8px">
              <span v-for="(url, index) in props.row.audio_url" :key="index">
                <i
                  :id="'playPauseIcon_' + props.row.id + '_' + index"
                  class="fa fa-volume-up fa-2x"
                  style="color: grey; opacity: 0.5"
                  @click="toggleAudio(index, props.row.id)"
                ></i>
                <audio
                  :key="index"
                  :id="'audio_' + props.row.id + '_' + index"
                  controls
                  style="height: 36px !important"
                  hidden
                >
                  <source :src="url" type="audio/mp3" />
                  Your browser does not support the audio tag.
                </audio>
              </span>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'fasTag'">
          <template>
            <div class="d-flex flex-column">
              <div class="d-flex">
                Fastag -
                <p
                  v-if="!props.row.fast_tag_amount"
                  class="text-danger p-0 mb-0 ml-2"
                  variant="primary ripple"
                >
                  No
                </p>

                <p
                  v-else
                  class="text-success p-0 mb-0 ml-2"
                  variant="primary ripple"
                >
                  ₹ {{ props.row.fast_tag_amount }}/-
                </p>
              </div>
              <div class="d-flex">
                Incidental Coverage -
                <p
                  v-if="!props.row.trip_insurance_amount"
                  class="text-danger p-0 mb-0 ml-2"
                  variant="primary ripple"
                >
                  No
                </p>

                <p
                  v-else
                  class="text-success p-0 mb-0 ml-2"
                  variant="primary ripple"
                >
                  ₹ {{ props.row.trip_insurance_amount }}/-
                </p>
              </div>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'door_pickup_show'">
          <template>
            <div class="d-flex flex-column">
              <div class="d-flex" v-if="props.row.door_pickup_amount > 0">
                Door Pickup -

                <p class="text-success p-0 mb-0 ml-2" variant="primary ripple">
                  ₹ {{ props.row.door_pickup_amount }}/-
                </p>
              </div>
              <div class="d-flex" v-else>
                Self Pickup -
                <p class="text-success p-0 mb-0 ml-2" variant="primary ripple">
                  {{ props.row.self_pickup }}
                </p>
              </div>
            </div>
          </template>
        </span>
        <span v-else-if="props.column.field === 'price_show'">
          <template>
            <p>{{ props.row.price }}</p>
          </template>
        </span>
      </template>
    </vue-good-table>

    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
  </div>
</template>

<script>
import moment from 'moment'
import message from '../../../message'
import Multiselect from 'vue-multiselect'
import _ from 'lodash'
export default {
  metaInfo: {
    title: 'Car-Booking'
  },
  components: {
    multiselect: Multiselect
  },
  props: ['row'],
  data () {
    return {
      getitemColumns: [
        {
          label: 'Item Name',
          field: 'item'
        },

        {
          label: 'Item Price',
          field: 'item_price'
        },
        {
          label: 'Quantity',
          field: 'quantity'
        },
        {
          label: 'Price',
          field: 'price'
        }
      ],
      getitemRows: [],
      getTotalPrice: '',
      getDiscount: '',
      getdiscountType: '',
      getGsttax: '',
      getDeliveryCharge: '',
      maxDate: new Date(),
      selected: null,
      allUsers: [],
      formData: {
        fName: '',
        lName: '',
        aadharImage: '',
        drivingLicenseImage: ''
      },
      allCars: [],
      selectCar: null,
      startDate: '',
      endDate: '',
      book_id: '',
      updateloader: false,
      amount: '',
      transactionId: '',
      types: '',
      userId: '',
      role: '',
      cancelReasonText: '',
      cancelReason: ['first resion', 'second resion', 'third resion'],
      usersInfo: [],
      carsInfo: [],
      matchUser: '',
      rows: [],
      form: {
        templateId: '',
        name: '',
        content: ''
      },
      selectedOption: '',
      generateIDloader: false,
      submitloader: false,
      isEdit: false,
      loader: false,
      isHide: false,
      // audio_url: 'https://res.cloudinary.com/dktazkvvo/video/upload/v1712663251/audios/bibasvr7c3yn6qgck5zq.mp3',
      isPlaying: false,
      audio: null,
      isPlaying: false,
      amount: null,
      payment_status: 'All',
      filteredRows: [],
      filteredData: [],
      item: [
        {
          BookingId: this.order_id,
          item: '',
          quantity: 0,
          item_price: 0,
          price: 0
        }
      ],
      previousData: [],
      updateloader: false,
      discount: 0,
      absoluteDiscount: 0,
      gstAmount: null,
      totalAmountsub: 0,
      food_delivery_charge: 0,
      getOrderId: 0,
      allDriverName: [],
      discountType: 'Absolute',
      percentageAmount: 0
    }
  },

  computed: {
    totalPrice () {
      return this.item.quantity * this.item_price
    },
    totalAmount () {
      // if(absoluteDiscount>0){

      // }
      let total = this.item.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      )
      if (this.discount > 0) {
        const discount2 = total * (this.discount / 100)
        this.percentageAmount = parseFloat(discount2.toFixed(2))
        this.percentageAmount =
          this.subtotal <= this.percentageAmount
            ? this.subtotal
            : this.percentageAmount
        total -= this.percentageAmount
        total += this.gstAmount > 0 ? this.gstAmount : 0
        return total + parseInt(this.food_delivery_charge)
      } else {
        this.percentageAmount = 0
        total -= this.absoluteDiscount
        total += this.gstAmount > 0 ? this.gstAmount : 0
        return total + parseInt(this.food_delivery_charge)
      }
      // return total;
    },

    subtotal () {
      let total = this.item.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      )
      return total
    },

    isNameWarning () {
      return this.item.some(item => !item.item)
    }
  },

  mounted () {
    this.addCssRule()
    // this.$bvModal.show("modal-congratulations");
    // document.addEventListener("click", this.closeMegaMenu);
  },

  watch: {
    item: {
      handler (newRows) {
        // console.log("Updated Rows:", newRows);
      },
      deep: true
    },

    discountType (newValue) {
      if (newValue === 'Absolute') {
        this.discount = 0
      } else if (newValue === '%') {
        this.absoluteDiscount = 0
      }
    }
  },
  created () {
    var storedUser = localStorage.getItem('userInfo')
    var parsedUser = JSON.parse(storedUser)
    this.role = parsedUser.data.role
    // this.userId = parsedUser.data.id;
    this.getProfileDetails()
    this.getAllTransaction()
    this.getGstAmount()
    this.getAllUsers()
    addCssRule()
    // this.getAllCarData();
    this.filteredRows = this.rows
  },
  methods: {
    calculateTotal (index) {
      const item = this.item[index]
      item.price = item.quantity * item.item_price
    },

    clickAsignDriver (data) {
      this.getOrderId = data.id
      this.$bvModal.show('modal-asign-driver')
      this.getAllUsers(data)
    },
    handleSelectionChangeDriver (e) {
      console.log(e)
    },
    clickUpdateAsignDriver () {
      this.loader = true
      let reqData = {
        driver_id: this.selectedOption,
        order_id: this.getOrderId
      }
      this.$apiService
        .postCall('driverAssign/', reqData)
        .then(res => {
          if (!res.error) {
            this.$toaster.makeToast(
              'success',
              'Update driver asign successfully'
            )
            this.$bvModal.hide('modal-asign-driver')
            this.getAllTransaction()
            this.loader = false
          } else {
            this.loader = false
            this.$toaster.makeToast('warning', 'Update driver asign failed')
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)

          this.loader = false
        })
    },
    addRow () {
      this.previousData.push(this.item.slice())
      this.item.push({
        BookingId: this.order_id,
        item: '',
        quantity: 0,
        item_price: 0,
        price: 0
      })
    },
    deleteRow (index) {
      this.item.splice(index, 1)
      this.recalculateTotal()
    },
    recalculateTotal () {
      this.totalAmount = this.item.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      )
      this.applyDiscount()
    },
    applyDiscount () {
      const discount = this.totalAmount * (this.discountPercentage / 100)
      this.totalAmount -= discount
    },
    // applyAbsoluteDiscount(){
    //  console.log(this.totalAmount)
    //   this.totalAmount =this.totalAmount -this.absoluteDiscount;
    // },
    clearFilters () {
      debugger
      this.startDate = null
      this.endDate = null
      this.matchUser = 'Select Users'
      this.selectCar = null
      this.payment_status = 'All'
      // this.getAllTransaction();
      window.location.reload()
    },
    openModal (rowData) {
      this.$bvModal.show('modal-attachment')
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    cancelReasonChange (text) {
      this.cancelReasonText = text
      // this.$bvModal.hide("modal-cancelReason");
      // this.cancelReasonCall();
      // this.cancleYourBooking()
    },
    clickCancle () {
      this.$bvModal.hide('modal-cancelReason')
      this.$bvModal.hide('modal-asign-driver')
      this.$bvModal.hide('modal-attachment')
    },
    clickCancelAmount2 () {
      this.item = []
      this.item_price = 0
      this.quantity = 0
      this.discount = 0
      this.absoluteDiscount = 0
      this.$bvModal.hide('modal-add')
      this.$bvModal.hide('modal-attachment')
    },

    clickCancleButton () {
      if (this.cancelReasonText && this.cancelReasonText.length >= 10) {
        this.cancleYourBooking()
      } else {
        this.$toaster.makeToast(
          'warning',
          'Please enter a cancel reason with at least 10 characters'
        )
      }
    },
    clickCancleButtonAmount () {
      // if (this.cancelReasonText && this.cancelReasonText.length >= 10) {
      //   this.cancleYourBooking();
      // } else {
      //   this.$toaster.makeToast(
      //     "warning",
      //     "Please enter a cancel reason with at least 10 characters"
      //   );
      // }
    },
    clickUpdateAmount () {
      this.loader = true

      const orderId = this.order_id

      if (
        !this.totalAmount ||
        isNaN(this.totalAmount) ||
        this.totalAmount < 0 ||
        this.item.some(item => !item.price || isNaN(item.price))
      ) {
        this.$toaster.makeToast('warning', 'Please enter valid discount amount')
        this.loader = false
        return
      }

      let gst_amount = this.gstAmount > 0 ? this.gstAmount : 0
      const type = this.absoluteDiscount > 0 ? 'True' : 'False'
      const requestBody = {
        orderId: orderId,
        final_amount: this.totalAmount,
        delivery_charge: this.food_delivery_charge,
        discount:
          this.discount > 0
            ? this.discount
            : this.absoluteDiscount > 0
            ? this.absoluteDiscount
            : 0,
        gst_tax: gst_amount,
        sub_total: this.subtotal,
        discount_type: type,
        orders: this.item.map((order, index) => ({
          ...order,
          BookingId: orderId
        }))
      }

      this.$apiService

        .postCall('updateOrder/', requestBody)
        .then(response => {
          this.getAllTransaction()
          this.amount = ''
          this.clickCancelAmount2()
          this.clickSendNotification()
          this.clickUpdateAsignDriver()
          this.$toaster.makeToast('success', 'Order Is Updated')
        })
        .catch(error => {
          console.error(error)
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false

          this.loader = false
        })
    },

    clickViewProfile (rowUserId) {
      this.$router.push('/app/myDesk/usersProfile?id=' + rowUserId)
    },
    getGstAmount () {
      this.loader = true
      this.$apiService
        .getCall(`appSetting/?key=gst_tax`)
        .then(res => {
          if (!res.error) {
            let resData = res.apidata
            this.gstAmount = resData.value
            this.loader = false
          } else {
            this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
            this.loader = false
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)

          this.loader = false
        })
    },
    // getProfileDetails() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall(`account/?id=${this.userId}`)
    //     .then((res) => {
    //       if (!res.error) {
    //         let userData = res.apidata;
    //         this.formData.fName = userData.first_name;

    //         this.formData.lName = userData.last_name;
    //         this.formData.aadharImage = userData.aadhar_card;
    //         this.formData.drivingLicenseImage = userData.driving_lincense;
    //         this.loader = false;
    //       } else {
    //         this.loader = false;
    //         // this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //       }
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);

    //       this.loader = false;
    //     });
    // },
    clickCancleBooking (book_id) {
      this.book_id = book_id
      this.$bvModal.show('modal-cancelReason')
    },

    clickCancleBookingAmount (order_id) {
      this.userId = order_id.userId
      this.order_id = order_id.id
      this.$bvModal.show('modal-add')
      this.getOrderId = order_id.id
      this.getAllUsers(order_id)
    },

    cancleBooking (
      book_id,
      door_pickup_amount,
      fast_tag_amount,
      total_trip_amount
    ) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't to cancel this booking!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      })
        .then(result => {
          this.loader = true
          if (result.value) {
            this.$swal(
              'Cancel Booking!',
              'Your car Booking has been Cancel.',
              'success'
            )
            const reqData = {
              accessStatus: 'True'
            }
            this.$apiService.getCall('cancel/?book_id=' + book_id).then(res => {
              // if (!res.error) {
              if (!res.apidata.isError) {
                this.$toaster.makeToast(
                  'success',
                  'This car booking cancel successfully'
                )
                setTimeout(function () {
                  window.location.reload()
                }, 700)
                this.loader = false
              }
            })
          }
        })
        .catch(error => {
          this.$toaster.makeToast('warning', "User can't Cancel! Srever failed")
          this.loader = false
        })
    },
    downloadPDF (pdfUrl) {
      // const pdfUrl = 'https://www.clickdimensions.com/links/TestPDFfile.pdf'; // Replace with your PDF URL
      const fileName = 'payment_summary.pdf' // Replace with your desired filename
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = fileName
      link.target = '_blank' // Optional: Open the PDF in a new tab
      link.click()
    },
    clickBookCar () {
      // this.$router.push(
      //   "/app/sessions/searchCar?startDate=" +
      //     new Date() +
      //     "&endDate=" +
      //     new Date()
      // );
      this.$router.push('/app/sessions/searchCar')
    },

    getSearchOptions () {
      if (this.role === 'Admin') {
        return {
          enabled: true,
          placeholder: 'Search'
        }
      } else {
        return {
          enabled: false
        }
      }
    },
    handleStartDate () {},
    onDateSelected (date) {},
    onEndDateSelected (date) {
      this.startDate = moment(this.startDate).format('YYYY-MM-DD')
      this.endDate = moment(this.endDate).format('YYYY-MM-DD')
      this.getAllTransaction(
        this.startDate,
        this.endDate,
        this.matchUser.id,
        this.selectCar
      )
    },
    handleChange (user) {
      this.matchUser = this.usersInfo.find(e => e.fullName == user)

      if (this.matchUser !== null) {
        this.getAllTransaction(
          this.startDate,
          this.endDate,
          this.matchUser.id,
          this.selectCar
        )
        // this.getAllTransaction();
      }
    },
    handleChangeCar (paymentStatus) {
      // If paymentStatus is not provided, default to 'all'
      if (!paymentStatus) {
        paymentStatus = 'all'
      }

      // Filter the rows based on the selected payment status
      if (paymentStatus.toLowerCase() === 'all') {
        // Show all rows
        this.filteredRows = this.rows
      } else {
        // Filter rows based on payment status
        this.filteredRows = this.rows.filter(
          row =>
            row.payment_status.toLowerCase() === paymentStatus.toLowerCase()
        )
      }
    },

    // getAllCarData() {
    //   this.loader = true;
    //   this.$apiService
    //     .getCall("carsAPIView/")
    //     .then((res) => {
    //       let rowData = [];
    //       if (res.apidata.length > 0) {
    //         rowData = res.apidata;
    //         this.allCars = rowData.map((e) => e.registration_number);
    //       }

    //       // rowData = rowData.map((res) => {
    //       //   res.created_at = moment(res.created_at).format(
    //       //     "DD MMM YYYY h:mm A"
    //       //   );

    //       //   return res;
    //       // });
    //       // rowData = res.apidata;
    //       // this.rows = rowData;
    //       this.loader = false;
    //     })
    //     .catch((error) => {

    //       this.loader = false;
    //     });
    // },
    handleTextInput: _.debounce(function () {
      this.getAllTransaction(this.startDate)
    }, 700),
    // clickCancle() {
    //   this.$bvModal.hide("modal-attachment");
    // },
    getDynamicColumns () {
      const commonColumns = [
        {
          label: 'Ordered date',
          field: 'created_at'
        },
        {
          label: 'Ordered ID',
          field: 'id'
        },

        {
          label: 'Audio File',
          field: 'show_more_days'
        },

        // {
        //   label: "Travelling Date",
        //   field: "show_date",
        // },

        {
          label: 'Amount',
          field: 'price_show'
        },
        {
          label: 'Status',
          field: 'show_action'
        },
        {
          label: 'Payment Status',
          field: 'payment_status'
        }
        // {
        //   label: "Asign Driver",
        //   field: "for_driver_show",
        // },
        // {
        //   label: "Delivery",
        //   field: "door_pickup_show",
        // },

        // {
        //   label: "Extra day",
        //   field: "extra_days",
        // },
        // {
        //   label: "Deliver charge",
        //   field: "car_delivery_charge",
        // },
        // {
        //   label: "Transaction id",
        //   field: "transcation_id",
        // },
        // {
        //   label: "Term and condition",
        //   field: "terms_and_condition",
        // },
      ]

      if (this.role === 'User') {
        // Exclude the 'User name' column for 'User' role
        return [
          {
            label: 'Model(brand)',
            field: 'show_more_data'
          },
          ...commonColumns,

          {
            label: 'Status',
            field: 'show_Status'
          }
        ]
      } else {
        // Include the 'User name' column for other roles
        return [
          {
            label: 'User name',
            field: 'user_name_show'
          },
          // {
          //   label: "Registration number(brand)",
          //   field: "show_more_data_admin",
          // },
          ...commonColumns

          // {
          //   label: "Status",
          //   field: "show_Status",
          // },
        ]
        // { label: "User name", field: "user_name" },
      }
    },
    clickPay () {
      window.location.href = this.$apiService.getAppendedUrl(
        `depositApiView/?userId=${this.userId}&amount=${this.amount}`
      )
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
    clickDeposit () {
      this.$bvModal.show('modal-attachment')
    },
    getAllUsers (forDriver) {
      this.loader = true
      this.$apiService
        .getCall('account/')
        .then(res => {
          let rowData = []

          if (res.apidata.length > 0) {
            rowData = res.apidata
            rowData = res.apidata.filter(value => !value.is_superuser)
            rowData = res.apidata.filter(
              value => value.first_name !== null && value.last_name !== null
            )

            rowData.forEach(value => {
              // value.date_joined=value.date_joined?moment(value.date_joined).format("DD/MM/YYYY"):"";
              value.full_name =
                value.first_name || value.last_name
                  ? value.first_name + ' ' + value.last_name
                  : ''
            })
          }
          if (forDriver) {
            let forDriver = res.apidata.filter(value => value.role === 'Driver')
            forDriver = forDriver.filter(
              value => value.first_name !== null && value.last_name !== null
            )

            this.allDriverName = forDriver.map(user => ({
              id: user.id,
              fullName: user.full_name
            }))
          }
          this.allUsers = rowData.map(e => e.full_name)
          this.usersInfo = rowData.map(user => ({
            id: user.id,
            fullName: user.full_name
          }))

          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    },
    getAllTransaction (startDate, endDate, uId, carId) {
      this.loader = true
      let query = ``
      if (startDate) {
        query = query + `startDate=${startDate}`
      }
      if (endDate) {
        query = query + `&endDate=${endDate}`
      }
      if (uId) {
        query = query + `&userId=${uId}`
      }
      if (carId) {
        query = query + `&reg_number=${carId}`
      }
      this.$apiService
        .getCall(`bookingHistory/?${query}`)
        .then(res => {
          let rowData = []

          if (res.apidata.length > 0) {
            // rowData = res.apidata;

            if (this.role === 'User') {
              this.allDate = res.apidata.map(e => e.time)

              rowData = res.apidata.filter(value => {
                if (value.userId == this.userId) {
                  return value.userId
                }
              })
            } else {
              rowData = res.apidata
              // this.allCars = rowData.map((e) => e.registration_number);
              // this.carsInfo = rowData.map((car) => ({
              //   id: car.carId,
              //   carName: car.car_model,
              // }));
            }

            rowData.forEach(element => {
              // element.price = element.price
              //   ? "₹" + "  " + element.price + "/-"
              //   : "";
              element.created_at = element.created_at
                ? moment(element.created_at).format('DD MMM YYYY h:mm A')
                : ''
              // element.booking_date = element.booking_date
              //   ? moment(element.booking_date).format("DD MMM YYYY h:mm A")
              //   : "";
              // element.end_date = element.end_date
              //   ? moment(element.end_date).format("DD MMM YYYY h:mm A")
              //   : "";
            })
          }
          this.rows = rowData
          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('warning', message.ERROR_MESSAGE)
          this.loader = false
        })
    },
    clickItemInfo (itemData) {
      this.$bvModal.show('modal-item-view')
      this.getitemRows = itemData.orderItem
      this.getTotalPrice = itemData.price
      this.getDiscount = itemData.discount
      this.getGsttax = itemData.gst_tax
      this.getDeliveryCharge = itemData.door_pickup_amount
      this.getdiscountType = itemData.discount_type
      this.selectedOption = `${itemData.driver.first_name} ${itemData.driver.last_name}`
    },

    // submit() {
    //   this.submitloader = true;
    //   if (!this.form.name || !this.form.content || !this.form.templateId) {
    //     this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
    //     this.submitloader = false;
    //     return;
    //   }
    //   this.$apiService
    //     .postCall("add_by_company", this.form)
    //     .then((res) => {
    //       if (res.apidata.status) {
    //         this.$toaster.makeToast("warning", message.ERROR_TEMPLATE_MESSAGE);
    //         this.submitloader = false;
    //       } else {
    //         this.$toaster.makeToast("success", message.ADD_TEMPLATE_MESSAGE);
    //         this.getTemplateData();
    //         this.clearform();
    //       }
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    // },

    // update() {
    //   this.submitloader = true;
    //   if (!this.form.name || !this.form.content || !this.form.templateId) {
    //     this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
    //     this.submitloader = false;
    //     return;
    //   }
    //   this.$apiService
    //     .postCall("editTemplate", this.form)
    //     .then((res) => {
    //       this.$toaster.makeToast("success", message.EDIT_TEMPLATE_MESSAGE);
    //       this.getTemplateData();
    //       this.clearform();
    //     })
    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    // },

    // editTemplate(id) {
    //   this.isEdit = false;

    //   this.$apiService
    //     .postCall("getTemplate", { _id: id })
    //     .then((res) => {
    //       this.form = res.apidata;
    //       this.$bvModal.show("modal-lg");
    //     })

    //     .catch((error) => {
    //       this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
    //     });
    //   this.isEdit = true;
    // },

    clearform () {
      this.form = {}
      this.isEdit = false
      this.submitloader = false
      this.generateIDloader = false
      this.$bvModal.hide('modal-lg')
    },
    togglePlay (audio_url) {
      if (this.audio && this.audio.src === audio_url) {
        if (this.audio.paused) {
          this.audio.play()
        } else {
          this.audio.pause()
        }
      } else {
        this.audio_url = audio_url
        this.audio = new Audio(audio_url)
        this.audio.play()
      }
    },

    // toggleAudio(index) {
    //   const audioElement = document.getElementById('audio_' + index);
    //   const iconElement = event.target;
    //   if (audioElement.paused) {
    //     audioElement.play();
    //     iconElement.style.opacity = "1";
    //   } else {
    //     audioElement.pause();
    //     iconElement.style.opacity = ".5";
    //   }
    // }
    toggleAudio (index, rowId) {
      const audioElements = document.querySelectorAll(`audio`)
      const iconElements = document.querySelectorAll(`[id^="playPauseIcon_"]`)

      // Pause all audio elements except the one being toggled
      audioElements.forEach(audioElement => {
        if (
          audioElement.id !== `audio_${rowId}_${index}` &&
          !audioElement.paused
        ) {
          audioElement.pause()
          const associatedIcon = document.querySelector(
            `#playPauseIcon_${audioElement.id.split('_')[1]}_${
              audioElement.id.split('_')[2]
            }`
          )
          if (associatedIcon) {
            associatedIcon.style.opacity = '.5'
          }
        }
      })

      const audioElement = document.getElementById(`audio_${rowId}_${index}`)
      const iconElement = document.querySelector(
        `#playPauseIcon_${rowId}_${index}`
      )

      if (audioElement.paused) {
        audioElement.play()
        iconElement.style.opacity = '1'
      } else {
        audioElement.pause()
        iconElement.style.opacity = '.5'
      }
    },

    addCssRule () {
      const style = document.createElement('style')
      style.type = 'text/css'
      const cssRule =
        '#modal-add___BV_modal_content_{' + '  right: 330px !important;' + '}'
      style.appendChild(document.createTextNode(cssRule))
      document.head.appendChild(style)
    },
    clickSendNotification () {
      if (
        !this.totalAmount ||
        isNaN(this.totalAmount) ||
        this.totalAmount < 0 ||
        this.item.some(item => !item.price || isNaN(item.price))
      ) {
        this.$toaster.makeToast('warning', 'Please enter valid discount amount')
        this.loader = false
        return
      }
      this.loader = true
      this.$apiService
        .getCall(`sendNotification/?user_id=${this.userId}`)
        .then(res => {
          this.loader = true
          if (res.data && res.data.success === 1) {
            this.$toaster.makeToast(
              'success',
              'Notification is send successfully'
            )
          } else {
            this.$toaster.makeToast(
              'success',
              'Notification is send successfully'
            )
          }
          this.loader = false
        })
        .catch(error => {
          this.$toaster.makeToast('error', 'Failed to send notification')
          this.loader = false
        })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  */
.circular-image {
  border-radius: 50%;
}

.for-document {
  border-radius: 50%;
}

#loader {
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 10000000;
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
/* .vgt-wrap__footer .foote isButtonActive: falser__navigation__page-info {
font-size: 0.9rem;
} */

.v2-picker-trigger {
  padding-top: 5px;
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

.for-date-picker {
  width: 100%;
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

@media screen and (max-width: 768px) {
  .for-gap {
    margin: 12px 0;
  }

  .for-gaps {
    margin-top: 12px;
  }

  .v2-picker-trigger {
    padding-top: 0;
  }
}

.vgt-global-search__input .input__icon {
  display: none;
  /* Hide the search icon */
}

.vgt-global-search__input {
  padding-left: 0;
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
  right: 330px !important;
}

.table th,
.table td {
  padding: 0.2rem;
  vertical-align: top;
  border-top: 1px solid #d1d5db;
}

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem !important;
}

p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.btnSmall2 {
  padding: 0.2rem 1em;
  background-color: #a855f7 !important;
  color: white !important;
  border-color: #a855f7 !important;
}
.inputttt {
  border-radius: 6px;
  border: 1px solid #8080802b !important;
  padding: 3.2px;
}

.warning {
  color: red;
}
.custom-audio-controls button {
  background: none;
  border: none;
  padding: 0;
  position: relative;
  width: 30px;
  height: 30px;
}

.play-icon,
.pause-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.play-icon::before {
  content: '\25B6';
}
.pause-icon::before {
  content: '\II';
}

.playing .play-icon::before {
  display: none;
}

.playing .pause-icon::before {
  display: inline-block;
}
.hidden {
  display: none;
}

.inputtttNone {
  border-radius: 6px;
  border: none;
  padding: 3.2px;
}

.gapping {
  gap: 0px;
}

.selectBorderless {
  border: 1px solid #80808000;
  padding-top: 7.18px;
}
.vgt-table {
  padding: 0.75em 0.75em 0.75em 0.75em;
  vertical-align: top;
  border-bottom: 1px solid #a855f70f !important;
  color: #606266;
}

.inputttt76 {
  border-radius: 6px;
  border: 1px solid #8080802b !important;
  padding: 3.2px;
  width: 76px;
  padding-top: 7px;
}

.badge-warning {
  color: #fff;
  background-color: #f59e0b;
}
</style>
