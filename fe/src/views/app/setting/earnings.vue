<template>
  <div class="main-content">
    <!-- <div class="font-weight-bold fa-2x text-light">Earning</div>
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
        <b-col md="12">
          <b-form-group label="Enter publisher name" label-for="input-title">
            <b-form-input
              v-model="publisherName"
              required
              placeholder="Enter name"
              style="height: 34px"
              type="text"
              @change="handelUserField"
              id="input-name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
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
        </b-col>
        <b-col md="12">
          <b-form-group label="Agency center code" label-for="input-title">
            <b-form-input
              v-model="centerCode"
              required
              placeholder="Agency center code"
              style="height: 34px"
              type="number"
              @keydown="checkLengthCode"
              id="input-agency"
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
        <b-col md="6" class="justify-content-end d-flex align-items-center">
          <img
            v-if="uplodedImages"
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
            <b-button v-if="!imgLoader" class="mb-2 mr-2" @click="closeModal()"
              >Close</b-button
            >
            <b-button
              v-if="!imgLoader"
              class="mb-2"
              variant="primary ripple"
              @click="addPublisher()"
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
        Edit publisher
      </label>
      <b-row class="px-3">
        <b-col md="12">
          <b-form-group label="Enter publisher name" label-for="input-title">
            <b-form-textarea
              disabled
              v-model="getpublisherName"
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
              v-model="getphoneNumber"
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
              v-model="getcenterCode"
              required
              placeholder="Agency center code"
              style="height: 34px"
              type="number"
              id="input-agency"
            ></b-form-textarea>
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
              >Edit</b-button
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
            <!-- <div class="spinner spinner-primary mr-3" v-if="updateloader"></div> -->
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
      <div class="main-content">
        <b-row>
          <b-col lg="6" xl="3" md="6" sm="6" class="d-none">
            <b-card no-body title class="mb-30 o-hidden">
              <div class="ul-widget__chart-info">
                <h5 class="text-muted text-10">INCOME</h5>
                <div class="ul-widget__chart-number">
                  <h2 class="t-font-boldest">$1000</h2>
                  <small class="text-muted">46% compared to last year</small>
                </div>
              </div>
              <b-card-body class="ul-card__widget-chart">
                <div id="basicArea-chart">
                  <apexchart
                    type="area"
                    height="150"
                    :options="splineAreaWidget.chartOptions"
                    :series="splineAreaWidget.series"
                  />
                </div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6" xl="3" md="6" sm="6" class="d-none">
            <b-card no-body title class="mb-30 o-hidden">
              <div class="ul-widget__chart-info">
                <h5 class="text-muted text-10">APPROVE</h5>
                <div class="ul-widget__chart-number">
                  <h2 class="t-font-boldest">$500</h2>
                  <small class="text-muted">46% compared to last year</small>
                </div>
              </div>
              <b-card-body class="ul-card__widget-chart">
                <div id="basicArea-chart">
                  <apexchart
                    type="area"
                    height="150"
                    :options="splineAreaWidgetTwo.chartOptions"
                    :series="splineAreaWidgetTwo.series"
                  />
                </div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6" xl="3" md="6" sm="6" class="d-none">
            <b-card no-body title class="mb-30 o-hidden">
              <div class="ul-widget__chart-info">
                <h5 class="text-muted text-10">TRANSACTION</h5>
                <div class="ul-widget__chart-number">
                  <h2 class="t-font-boldest">$44,909</h2>
                  <small class="text-muted">46% compared to last year</small>
                </div>
              </div>
              <b-card-body class="ul-card__widget-chart">
                <div id="basicArea-chart">
                  <apexchart
                    type="area"
                    height="150"
                    :options="splineAreaWidgetThree.chartOptions"
                    :series="splineAreaWidgetThree.series"
                  />
                </div>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6" xl="3" md="6" sm="6" class="d-none">
            <b-card no-body title class="mb-30 o-hidden">
              <div class="ul-widget__chart-info">
                <h5 class="text-muted text-10">SALES</h5>
                <div class="ul-widget__chart-number">
                  <h2 class="t-font-boldest">$500</h2>
                  <small class="text-muted">46% compared to last year</small>
                </div>
              </div>
              <b-card-body class="ul-card__widget-chart">
                <div id="basicArea-chart">
                  <apexchart
                    type="area"
                    height="150"
                    :options="splineAreaWidgetFour.chartOptions"
                    :series="splineAreaWidgetFour.series"
                  />
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- form-wizard -->
          <b-col class="mb-30 d-none col">
            <b-card
              title="Create Your Company Profile And Get Started"
              class="o-hidden"
            >
              <!-- @on-complete="onComplete" -->
              <form-wizard title subtitle shape="circle" color="#A855F7">
                <tab-content title="Basic Info" icon="i-Information">
                  <b-form>
                    <b-row>
                      <b-form-group
                        id="input-group-1"
                        label="First Name:"
                        label-for="input-1"
                        class="col-md-6 mb-30"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Enter Your First Name"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Last Name:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Enter Your Last Name"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="email Address:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="email"
                          required
                          placeholder="Enter Your Email Address"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Phone Number:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="number"
                          required
                          placeholder="Enter Your Number"
                        ></b-form-input>
                      </b-form-group>
                    </b-row>
                  </b-form>
                </tab-content>
                <tab-content title="Company Info" icon="i-Business-Mens">
                  <b-row>
                    <b-col md="6">
                      <h6 class="mb-2">Employees</h6>
                      <label class="checkbox checkbox-primary">
                        <input type="checkbox" checked />
                        <span>Designer</span>
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkbox checkbox-secondary">
                        <input type="checkbox" checked />
                        <span>Coder</span>
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkbox checkbox-success">
                        <input type="checkbox" checked />
                        <span>QA</span>
                        <span class="checkmark"></span>
                      </label>
                    </b-col>
                    <b-col md="6">
                      <h6 class="mb-2">Company</h6>
                      <label class="radio radio-outline-primary">
                        <input
                          type="radio"
                          name="radio"
                          formcontrolname="radio"
                        />
                        <span>Less than 1 Year</span>
                        <span class="checkmark"></span>
                      </label>
                      <label class="radio radio-outline-success">
                        <input
                          type="radio"
                          name="radio"
                          formcontrolname="radio"
                        />
                        <span>1-5 years</span>
                        <span class="checkmark"></span>
                      </label>
                      <label class="radio radio-outline-warning">
                        <input
                          type="radio"
                          name="radio"
                          formcontrolname="radio"
                        />
                        <span>5+ years</span>
                        <span class="checkmark"></span>
                      </label>
                    </b-col>
                  </b-row>
                </tab-content>
                <tab-content title="Payment info" icon="i-Car-Coins">
                  <b-form>
                    <b-row>
                      <b-form-group
                        id="input-group-1"
                        label="Card Number:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Card Number"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Expires at:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Expires at"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Security code:"
                        label-for="input-1"
                        class="col-md-6"
                      >
                        <b-form-input
                          type="text"
                          required
                          placeholder="Security code"
                        ></b-form-input>
                      </b-form-group>
                    </b-row>
                  </b-form>
                </tab-content>
                <button
                  class="btn btn-outline-primary btn-rounded"
                  type="primary"
                  slot="prev"
                >
                  Back
                </button>
                <button
                  class="btn btn-outline-primary btn-rounded"
                  type="primary"
                  slot="next"
                >
                  Next
                </button>
                <button
                  class="btn btn-outline-success btn-rounded"
                  type="primary"
                  slot="finish"
                >
                  Finish
                </button>
              </form-wizard>
            </b-card>
          </b-col>

          <b-col sm="12" md="12" xl="4" class="mb-30 d-none">
            <b-row>
              <b-col md="6" xl="12">
                <b-card class="o-hidden mb-30">
                  <div class="user-profile mb-30">
                    <div class="ul-widget-card__user-info">
                      <img
                        class="profile-picture avatar-lg mb-2"
                        src="@/assets/images/faces/1.jpg"
                        alt
                      />
                      <p class="m-0 text-24">Timothy Carlson</p>
                      <p class="text-muted">Digital Marketer</p>
                    </div>
                    <div class="ul-widget-card--line mt-2">
                      <b-button variant="primary">Download</b-button>
                      <b-button variant="outline-success" class="float-right"
                        >Preview</b-button
                      >
                    </div>
                    <div class="ul-widget-card__rate-icon">
                      <span>
                        <i class="i-Add-UserStar text-warning"></i>
                        5.0
                      </span>
                      <span>
                        <i class="i-Bag text-primary"></i>
                        78 Projects
                      </span>
                    </div>
                  </div>
                </b-card>
              </b-col>
              <b-col md="6 " xl="12">
                <b-card
                  class="o-hidden card-icon-bg card-icon-bg-primary o-hidden text-center"
                >
                  <i class="i-Data-Upload"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Download</p>
                    <p class="text-primary text-24 line-height-1 mb-2">4021</p>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-col>

          <!-- finance-summary -->
          <b-col class="mb-30 col">
            <b-card no-body class="o-hidden">
              <b-card-header header-bg-variant="transparent">
                <b-row style="align-items: center">
                  <b-col md="6">
                    <div class="ul-card-widget__head-label">
                      <h5 class="card-title">Earning Summary</h5>
                    </div>
                  </b-col>
                  <b-col md="6" class="text-md-right">
                    <b-button variant="outline-primary">Summary View</b-button>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-card-body>
                <b-row>
                  <b-col md="6 " class="mb-4 mb-md-0">
                    <h3 class="text-muted text-14 font-weight-500">
                      Final Commission Revenue
                    </h3>
                    <span class="text-muted text-18 font-weight-600"
                      >$790,420</span
                    >
                  </b-col>
                  <b-col md="6" class="mb-4 mb-md-0">
                    <h3 class="text-muted text-14 font-weight-500">
                      Final Commission Revenue
                    </h3>
                    <span class="text-muted text-18 font-weight-600"
                      >July 25,2019</span
                    >
                  </b-col>
                </b-row>
              </b-card-body>
              <div id="basicArea-chart" class="mt-2">
                <apexchart
                  type="area"
                  height="160"
                  :options="spark3.chartOptions"
                  :series="spark3.series"
                />
              </div>
            </b-card>
          </b-col>
          <!-- echart-pie -->
          <b-col xl="4" md="12" class="mb-30 d-none">
            <b-card title="Stacked Pie Chart" class="o-hidden">
              <apexchart
                type="polarArea"
                height="254"
                :options="dashboardFive.chartOptions"
                :series="dashboardFive.series"
              ></apexchart>
            </b-card>
          </b-col>

          <!-- list -->
          <!-- <b-col md="12" xl="8" class="mb-30 d-none">
            <b-card title class="wrapper o-hidden h-100">
              <vue-good-table
                :fixed-header="true"
                :columns="columns"
                styleClass="tableOne text-left vgt-table"
                row-style-class="text-left"
                :rows="rows"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'img'">
                    <img
                      class="rounded"
                      :src="props.row.img"
                      style="width: 50px; height: 50px"
                      alt="corrupted img"
                    />
                  </span>
                </template>
              </vue-good-table>
            </b-card>
          </b-col> -->

          <b-col xl="4" md="6" class="mb-30 d-none">
            <div class="card o-hidden">
              <img
                class="card-img-top"
                src="@/assets/images/photo-wide-3.jpg"
                alt
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </b-col>

          <!-- mask -->
          <b-col md="6" xl="6" class="mb-30 d-none">
            <b-card bg-variant="defualt" text-variant="black">
              <div class="d-flex align-items-center mb-30">
                <i class="i-ID-Card text-22 mr-2"></i>
                <h5 class="card-title m-0">Card Information</h5>
              </div>

              <b-row>
                <b-col md="6">
                  <p class="font-weight-400 mb-2">CPF</p>
                  <the-mask
                    class="form-control"
                    :mask="['###.###.###-##']"
                    placeholder="999.999.999-99"
                  />
                </b-col>
                <b-col md="6" class="mb-3">
                  <p class="font-weight-400 mb-2">Zip Code</p>
                  <the-mask
                    class="form-control"
                    :mask="['#####-###']"
                    placeholder="99999-999"
                  />
                </b-col>
                <b-col md="6" class="mb-3">
                  <p class="font-weight-400 mb-2">Phone</p>
                  <the-mask
                    class="form-control"
                    :mask="['+# (###) ###-####']"
                    placeholder="+9 (999) 999-9999"
                  />
                </b-col>
                <b-col md="6" class="mb-3">
                  <p class="font-weight-400 mb-2">Master Card</p>
                  <the-mask
                    class="form-control"
                    :mask="['#### #### #### ####']"
                    placeholder="9999 9999 9999 9999"
                  />
                </b-col>
                <b-col md="6" class="mb-3">
                  <p class="font-weight-400 mb-2">Date</p>
                  <the-mask
                    class="form-control"
                    :mask="['##/##/####']"
                    placeholder="mm/dd/yy"
                  />
                </b-col>
                <b-col md="6" class="mb-3">
                  <p class="font-weight-400 mb-2">CPF/CNPJ</p>
                  <the-mask
                    class="form-control"
                    :mask="['###.###.###-##', '##.###.###/####-##']"
                    placeholder="99.999.999/9999-99"
                  />
                </b-col>
              </b-row>
              <b-button variant="danger" class="float-right">Submit</b-button>
            </b-card>
          </b-col>
          <!-- Sales-stats-1 -->
          <b-col xl="6" md="6" class="mb-30 d-none">
            <b-card no-body title="Payment Form #2" class="o-hidden">
              <b-tabs pills card content-class="mt-3" fill>
                <b-tab active>
                  <template slot="title">
                    <i class="i-Credit-Card-2 text-16 mr-2 align-middle"></i>
                    Credit Card
                  </template>

                  <b-form>
                    <b-form-group label="Full Name">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Male-21 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="Full Name"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-form-group label="Card Number" class="mt-4">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Credit-Card-2 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="card number"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-row class="mt-4">
                      <b-col md="4">
                        <b-form-group label="Expiration">
                          <b-form-select
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group style="margin-top: 25px">
                          <b-form-select
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group label="CVV">
                          <b-form-input></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-button block variant="primary " class="mt-3"
                      >Confirm</b-button
                    >
                  </b-form>
                </b-tab>
                <b-tab>
                  <template slot="title">
                    <i class="i-Paypal text-16 mr-2 align-middle"></i> Paypal
                  </template>

                  <b-form>
                    <b-form-group label="Full Name">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Male-21 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="Full Name"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-form-group label="Card Number" class="mt-4">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Credit-Card-2 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="card number"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-row class="mt-4">
                      <b-col md="4">
                        <b-form-group label="Expiration">
                          <b-form-select
                            class
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group style="margin-top: 25px">
                          <b-form-select
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group label="CVV">
                          <b-form-input></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-button block variant="primary" class="mt-3"
                      >Confirm</b-button
                    >
                  </b-form>
                </b-tab>
                <b-tab>
                  <template slot="title">
                    <i class="i-Bank text-16 mr-2 align-middle"></i>Bank
                    Transaction
                  </template>

                  <b-form>
                    <b-form-group label="Full Name">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Male-21 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="Full Name"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-form-group label="Card Number" class="mt-4">
                      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input-group-prepend>
                          <span class="input-group-text" id="basic-addon1">
                            <i class="i-Credit-Card-2 text-18"></i>
                          </span>
                        </b-input-group-prepend>
                        <b-input placeholder="card number"></b-input>
                      </b-input-group>
                    </b-form-group>

                    <b-row class="mt-4">
                      <b-col md="4">
                        <b-form-group label="Expiration">
                          <b-form-select
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group style="margin-top: 25px">
                          <b-form-select
                            v-model="selected"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group label="CVV">
                          <b-form-input></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-button block variant="primary" class="mt-3"
                      >Confirm</b-button
                    >
                  </b-form>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div class="card pb-2">
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

          <div class="col-12 col-sm-6 col-lg-3 paddingzero" style=" display:none">
            <label for="users-list-verified">Earning range</label>
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
                v-model="filterStatus"
                @change="onStatusChange"
              >
                <option value="">All</option>
                <option value="Approved">Maximum</option>
                <option value="Rejected">Minimum</option>
              </select>
            </fieldset>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 paddingzero" style=" display:none">
            <label for="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              v-model="startDate"
              class="form-control"
            />
          </div>

          <div class="col-12 col-sm-6 col-lg-3 paddingzero" style=" display:none">
            <label for="end-date">End Date</label>
            <input
              type="date"
              id="end-date"
              v-model="endDate"
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="d-flex flex-column gap-5 card" style="gap: 13px">
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
                    class="badge badge-success border mr-2 bg-success text-white ul-cursor--pointer p-2"
                    @click="clickAccept(props.row._id)"
                  >
                    Approve
                  </div>
                  <div
                    class="badge badge-danger border bg-danger text-white ul-cursor--pointer p-2"
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
import { spark3, radialBar } from '@/data/apexChart'
import {
  splineAreaWidget,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
  splineAreaWidgetFour,
  dashboardFive
} from '@/data/widgetStatistics'

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Earning'
  },
  props: {
    title: {
      type: String,
      default: 'Awesome Wizard'
    }
  },
  data () {
    return {
      startDate: '',
      endDate:'',
      selected: 'x',
      options: [
        { value: 'x', text: ' select an option' },
        { value: 'a', text: 'January' },
        { value: 'b', text: 'February' }
      ],
      splineAreaWidget,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,
      splineAreaWidgetFour,
      dashboardFive,
      radialBar,
      spark3,
      values: [30, 20],
      max: 100,

      
      rows: [],
      flexDivDisplay: 'flex!important',
      filteredFaqs: [
        {
          show_img: '...',
          user_name: 'John Doe',
          contact_number: '1234567890',
          agency_center_code: 'ABC123',
          reason_show: 'Some reason',
          earning: 5000, // Example value for earning
          period: 'Jan-Mar', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Jane Smith',
          contact_number: '0987654321',
          agency_center_code: 'XYZ456',
          reason_show: 'Another reason',
          earning: 6000, // Example value for earning
          period: 'Apr-Jun', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Alice Johnson',
          contact_number: '9876543210',
          agency_center_code: 'DEF789',
          reason_show: 'Yet another reason',
          earning: 7000, // Example value for earning
          period: 'Jul-Sep', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Bob Brown',
          contact_number: '4567890123',
          agency_center_code: 'GHI234',
          reason_show: 'Reason XYZ',
          earning: 8000, // Example value for earning
          period: 'Oct-Dec', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Sarah Wilson',
          contact_number: '2345678901',
          agency_center_code: 'JKL567',
          reason_show: 'Reason ABC',
          earning: 9000, // Example value for earning
          period: 'Jan-Mar', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Michael Brown',
          contact_number: '8901234567',
          agency_center_code: 'MNO890',
          reason_show: 'Another reason XYZ',
          earning: 10000, // Example value for earning
          period: 'Apr-Jun', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Emily Taylor',
          contact_number: '5678901234',
          agency_center_code: 'PQR123',
          reason_show: 'Reason 123',
          earning: 11000, // Example value for earning
          period: 'Jul-Sep', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'David Clark',
          contact_number: '6789012345',
          agency_center_code: 'STU456',
          reason_show: 'Reason 456',
          earning: 12000, // Example value for earning
          period: 'Oct-Dec', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Sophia Martinez',
          contact_number: '3456789012',
          agency_center_code: 'VWX789',
          reason_show: 'Another reason ABC',
          earning: 13000, // Example value for earning
          period: 'Jan-Mar', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'James Johnson',
          contact_number: '4567890123',
          agency_center_code: 'YZA234',
          reason_show: 'Reason DEF',
          earning: 14000, // Example value for earning
          period: 'Apr-Jun', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Olivia Smith',
          contact_number: '6789012345',
          agency_center_code: 'BCD567',
          reason_show: 'Reason GHI',
          earning: 15000, // Example value for earning
          period: 'Jul-Sep', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'William Brown',
          contact_number: '7890123456',
          agency_center_code: 'EFG890',
          reason_show: 'Another reason DEF',
          earning: 16000, // Example value for earning
          period: 'Oct-Dec', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Ava Davis',
          contact_number: '8901234567',
          agency_center_code: 'HIJ123',
          reason_show: 'Reason JKL',
          earning: 17000, // Example value for earning
          period: 'Jan-Mar', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Alexander Wilson',
          contact_number: '9012345678',
          agency_center_code: 'MNO456',
          reason_show: 'Reason PQR',
          earning: 18000, // Example value for earning
          period: 'Apr-Jun', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Emma Lee',
          contact_number: '1234567890',
          agency_center_code: 'STU789',
          reason_show: 'Another reason GHI',
          earning: 19000, // Example value for earning
          period: 'Jul-Sep', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Benjamin Taylor',
          contact_number: '2345678901',
          agency_center_code: 'VWX234',
          reason_show: 'Reason MNO',
          earning: 20000, // Example value for earning
          period: 'Oct-Dec', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Charlotte Clark',
          contact_number: '3456789012',
          agency_center_code: 'YZA567',
          reason_show: 'Reason STU',
          earning: 21000, // Example value for earning
          period: 'Jan-Mar', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Mia Martinez',
          contact_number: '4567890123',
          agency_center_code: 'BCD890',
          reason_show: 'Another reason PQR',
          earning: 22000, // Example value for earning
          period: 'Apr-Jun', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Ethan Johnson',
          contact_number: '5678901234',
          agency_center_code: 'EFG123',
          reason_show: 'Reason VWX',
          earning: 23000, // Example value for earning
          period: 'Jul-Sep', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        },
        {
          show_img: '...',
          user_name: 'Isabella Brown',
          contact_number: '6789012345',
          agency_center_code: 'HIJ456',
          reason_show: 'Another reason STU',
          earning: 24000, // Example value for earning
          period: 'Oct-Dec', // Example value for period
          actions: '...' // This should be your HTML for edit/delete buttons
        }
      ],

      searchTerm: '',
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
        // {
        //   label: 'Icons',
        //   field: 'show_img'

        // },
        {
          label: 'TikTok username',
          field: 'creator_inf',
          filterOptions: {
            enabled: true,
            placeholder: 'TikTok username'
          }
        },
        {
          label: 'Valid days this month',
          field: 'valid_days_this_month',
          filterOptions: {
            enabled: true,
            placeholder: 'Earning range'
          }
        },
        {
          label: 'Diamonds this month',
          field: 'diamonds_this_month',
          filterOptions: {
            enabled: true,
            placeholder: 'Earning range'
          }
        },
        {
          label: 'Live duration this month',
          field: 'live_duration_this_month',
          filterOptions: {
            enabled: true,
            placeholder: 'Earning range'
          }
        },
          {
          label: 'Achieved %',
          field: 'percentage_achieved',
          filterOptions: {
            enabled: true,
            placeholder: 'Earning range'
          }
          },
         {
          label: 'Date',
          field: 'as_of_date',
          filterOptions: {
            enabled: true,
            placeholder: 'Earning range'
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
  // mounted () {
  //   this.clearFilters()
  // },
  computed: {
     filteredRows () {
      const query = this.searchTerm.toLowerCase().trim();
      // const amount_data = this.searchAmount.trim();
      const select_status = this.selectedStatus

      return this.rows.filter(row => {
        const matchesQuery = query
          ?row.creator_inf.toLowerCase().includes(query)
          : true
        const matchesStatus = select_status
          ? row.status === select_status
          : true
        // const matchesAmount = amount_data
        //   ? row.amount.toString().includes(amount_data)
        //   : true

        return matchesQuery && matchesStatus 
      })
    },
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
    this.getEarningData();
   
  },
  methods: {
    toggleFlexDiv () {
      this.flexDivDisplay =
        this.flexDivDisplay === 'flex!important'
          ? 'none!important'
          : 'flex!important' // Toggle the display property
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
       handelUserField () {
      this.searchUser = this.faqs.filter(user =>
        user.user_name.toLowerCase().includes(this.publisherName.toLowerCase())
      )
    },
    async fetchUser () {
      this.loader = true

      try {
        const response = await new Promise((resolve, reject) => {
          this.$apiService
            .getCall(`auth/user/${this.user_id}`)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })

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
    getEarningData() {
      this.loader = true;
       this.$apiService
          .postCall('user/creators-earnings')
          .then(response => {
            if (response.isError) {
              this.$toaster.makeToast('warning', 'Error fetching earning data');
                this.loader = false 
            } else if (response.apidata.msg == "No Record Found") {
              this.$toaster.makeToast('warning', response.apidata.msg);
                this.loader = false 
            } else {
              const userData = response.apidata.data;
              userData.forEach((e) => {
                e.as_of_date=  moment(e.as_of_date).format("DD MMM YYYY h:mm A")
               })
              this.rows = userData;
            this.loader = false 
            }
           
           
           
          })
          .catch(error => {
            this.loader = false 
            console.error('Error fetching user data:', error)
            this.$toaster.makeToast('warning', 'Error fetching earning data')
          })
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
       
      }
    },
    async clickReject (id) {
      this.$bvModal.show('modal-cancelReason')
      this.rejectedId = id
    },

    async addPublisher () {
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

      if (this.searchUser.length > 0) {
        this.$toaster.makeToast('warning', 'Publisher Name already exist')
      } else {
        this.loader = true
        try {
          //const imageUrls = await this.uploadImages();
          let requestData = {
            user_name: this.publisherName,
            contact_number: this.phoneNumber,
            agency_center_code: this.centerCode,
            icon: this.uplodedImages,
            // icon: 'https://tiktok.algofolks.com/download.png',
            user_id: this.user_id
          }

          // Assuming you want to make a POST request
          const res = await this.$apiService.postCall(
            'publisher/create/',
            requestData
          )

          if (res.error) {
            this.loader = false
            this.$toaster.makeToast('warning', res.message)
          } else {
            this.fetchPublisher()
            this.isEdit = false
            this.showAddModal = false
            this.loader = false
            ;(this.publisherName = ''),
              (this.centerCode = ''),
              (this.phoneNumber = ''),
              this.$toaster.makeToast('success', 'Data added successfully')
          }
        } catch (error) {
          this.loader = false
          this.$toaster.makeToast('warning', 'Error: Server Error')
          // console.error(error)
        }
      }
    },
    async editPublisher () {
      this.loader = true
      try {
        //const imageUrls = await this.uploadImages();
        let requestData = {
          // user_name: this.publisherName,
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
      this.images = data.icon
      this.uplodedImages = data.icon

      this.showAddModalEdit = true
    },

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
          // User canceled the deletion, do nothing or show a message
        }
      } catch (error) {
        this.$toaster.makeToast('warning', 'Error: Server Error')
        this.loader = false
        console.error('Error deleting FAQ:', error)
      }
    },
    closeModal () {
      this.isEdit = false
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
</style>
