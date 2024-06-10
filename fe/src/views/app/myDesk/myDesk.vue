<template>
  <div class="main-content">
    <breadcumb :page="'My Desk'" :folder="'Home'" />
    <!-- <div class="wrapper"> -->
    <div class="">
      <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
      <b-card class="card mb-30" header-bg-variant="transparent ">
        <b-tabs class="">
          <b-row class="mb-4">
            <b-col class="mt-4 col-3">
              <b-form-input
                v-model="search"
                type="text"
                class="col-12"
                placeholder="Search"
                @keyup="filterData()"
              ></b-form-input>
            </b-col>
            <b-col class="mt-4 ml-4">
              <v2-datepicker
                lang="en"
                ref="startDate"
                v-model="fromDate"
                :picker-options="{
                  disabledDate: (time) => disabledStartDate(time, toDate),
                }"
                @change="getCompanyData()"
                placeholder="From Date"
              ></v2-datepicker>
            </b-col>
            <b-col class="mt-4 mr-4">
              <v2-datepicker
                style="margin-left: -30px"
                ref="endDate"
                lang="en"
                v-model="toDate"
                :picker-options="{
                  disabledDate: (time) => disabledEndDate(time, fromDate),
                }"
                @change="getCompanyData()"
                placeholder="To Date"
              ></v2-datepicker>
            </b-col>
            <b-col class="mt-4">
              <div
                class="spinner spinner-primary ml-5"
                v-if="downloadloader"
              ></div>
              <b-button
                v-if="viewdownload && !downloadloader"
                variant="primary"
                size="sm"
                class="float-right"
                @click="download()"
              >
                Download Documents
              </b-button>
            </b-col>
            <b-col class="mt-4 col-1">
              <b-button
                variant="primary"
                size="sm"
                @click="clearDate()"
                class="float-right"
              >
                Clear
              </b-button>
            </b-col>
          </b-row>
          <!-- <b-tab title="My Desk" @click="changeTab('mydesk')">
            <vue-good-table
              :columns="columns"
              :line-numbers="true"
              :totalRows="totalRecords"
              :search-options="{
                enabled: false,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: true,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <a href="">
                    <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                    {{ props.row.button }}</a
                  >
                  <a href="">
                    <i class="i-Close-Window text-25 text-danger"></i>
                    {{ props.row.button }}</a
                  >
                </span>
              </template>
            </vue-good-table>
          </b-tab> -->
          <b-tab title="Action Required" @click="changeTab('action')">
            <vue-good-table
              ref="my-table"
              :columns="columns"
              :line-numbers="false"
              :totalRows="totalRecords"
              :search-options="{
                enabled: false,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: perPage,
                setCurrentPage: currentPage,
              }"
              @on-selected-rows-change="selectionChanged"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: true,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="emptystate" class="text-center">No data found</div>
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <div class="dropdown">
                    <i
                      class="i-Arrow-Down-in-Circle text-15 ml-3"
                      id="dropbtn"
                      style="cursor: pointer"
                    >
                      <div class="dropdown-content">
                        <a @click="Preview(props.row)"
                          ><span
                            ><i
                              class="fa fa-eye"
                              style="margin-right: 0.3rem"
                            ></i
                            >Preview</span
                          ></a
                        >
                        <a @click="Details(props.row)"
                          ><span
                            ><i
                              class="fa fa-clipboard"
                              style="margin-right: 0.3rem"
                            ></i
                            >Details</span
                          ></a
                        >
                        <a
                          @click="Open(props.row)"
                          v-if="props.row.status != 'Completed'"
                          ><span
                            ><i
                              class="fa fa-file"
                              style="margin-right: 0.3rem"
                            ></i
                            >Open</span
                          ></a
                        >
                        <a
                          @click="OpenDetails(props.row)"
                          v-if="props.row.status == 'Completed'"
                          ><span
                            ><i
                              class="fa fa-file"
                              style="margin-right: 0.3rem"
                            ></i
                            >Open Details</span
                          ></a
                        >
                        <a
                          :href="
                            props.row.documentURL
                              ? props.row.documentURL.url
                              : ''
                          "
                          ><span
                            ><i
                              class="fa fa-download"
                              style="margin-right: 0.3rem"
                            ></i
                            >Download</span
                          ></a
                        >
                        <a @click="openAudit(props.row._id)"
                          ><span
                            ><i
                              class="fa fa-download"
                              style="margin-right: 0.3rem"
                            ></i
                            >Audit Trail</span
                          ></a
                        >
                        <a
                          @click="Delete(props.row._id)"
                          v-if="props.row.status != 'Completed'"
                          ><span
                            ><i
                              class="fa fa-trash"
                              style="margin-right: 0.3rem"
                            ></i
                            >Delete</span
                          ></a
                        >
                        <a @click="Attachments(props.row)"
                          ><span
                            ><i
                              class="fa fa-file"
                              style="margin-right: 0.3rem"
                            ></i
                            >Attachments</span
                          ></a
                        >
                      </div>
                    </i>
                  </div>
                </span>
              </template>
            </vue-good-table>
          </b-tab>
          <b-tab title="Waiting for others" @click="changeTab('waiting')">
            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              :totalRows="totalRecords"
              :search-options="{
                enabled: false,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: false,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="emptystate" class="text-center">No data found</div>
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <div class="dropdown">
                    <i class="i-Arrow-Down-in-Circle text-15 ml-3" id="dropbtn">
                      <div class="dropdown-content">
                        <a @click="Preview(props.row)"
                          ><i class="fa fa-eye" style="margin-right: 0.3rem"></i
                          >Preview</a
                        >
                        <a @click="Details(props.row)"
                          ><i
                            class="fa fa-clipboard"
                            style="margin-right: 0.3rem"
                          ></i
                          >Details</a
                        >
                        <a @click="Edit(props.row._id)"
                          ><i
                            class="fa fa-edit"
                            style="margin-right: 0.3rem"
                          ></i
                          >Edit</a
                        >
                        <a @click="Complete(props.row._id)"
                          ><i
                            class="fa fa-handshake-o"
                            style="margin-right: 0.3rem"
                          ></i
                          >Complete</a
                        >
                        <a
                          :href="
                            props.row.documentURL
                              ? props.row.documentURL.url
                              : ''
                          "
                          ><span
                            ><i
                              class="fa fa-download"
                              style="margin-right: 0.3rem"
                            ></i
                            >Download</span
                          ></a
                        >
                        <a @click="Delete(props.row._id)"
                          ><i
                            class="fa fa-trash"
                            style="margin-right: 0.3rem"
                          ></i
                          >Delete</a
                        >
                        <a @click="Attachments(props.row)"
                          ><i
                            class="fa fa-file"
                            style="margin-right: 0.3rem"
                          ></i
                          >Attachments</a
                        >
                      </div>
                    </i>
                  </div>
                </span>
              </template>
            </vue-good-table>
          </b-tab>
          <b-tab title="Expiring Soon" @click="changeTab('expiring')">
            <vue-good-table
              :columns="expiryColumns"
              :line-numbers="false"
              :totalRows="totalRecords"
              :search-options="{
                enabled: false,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: false,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="emptystate" class="text-center">No data found</div>
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <div class="dropdown">
                    <i class="i-Arrow-Down-in-Circle text-15 ml-3" id="dropbtn">
                      <div class="dropdown-content">
                        <a @click="Preview(props.row)">Preview</a>
                        <a @click="Details(props.row._id)">Details</a>
                      </div>
                    </i>
                  </div>
                </span>
              </template>
            </vue-good-table>
          </b-tab>
          <b-tab title="Failed" @click="changeTab('failed')">
            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              :totalRows="totalRecords"
              :search-options="{
                enabled: false,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              @on-page-change="onPageChange"
              @on-per-page-change="onPerPageChange"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: false,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="emptystate" class="text-center">No data found</div>
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <div class="dropdown">
                    <i class="i-Arrow-Down-in-Circle text-15 ml-3" id="dropbtn">
                      <div class="dropdown-content">
                        <a @click="Preview(props.row)">Preview</a>
                        <a @click="Details(props.row._id)">Details</a>
                      </div>
                    </i>
                  </div>
                </span>
              </template>
            </vue-good-table>
          </b-tab>
        </b-tabs>
      </b-card>
      <div class="modal-dialog modal-dialog-scrollable">
        <b-modal
          id="modal-preview"
          size="lg"
          title="Preview"
          style="height: 100px"
        >
          <div style="position: absolute; right: 10px" class="dropdown">
            <i class="fa fa-bars fa-2x" aria-hidden="true">
              <div class="dropdown-content">
                <a :href="pdfsrc"
                  ><span
                    ><i class="fa fa-download" style="margin-right: 0.3rem"></i
                    >Download</span
                  ></a
                >
              </div>
            </i>
          </div>
          <div
            style="
              margin-top: 30px;
              overflow-y: scroll;
              min-height: 500px;
              max-height: 500px;
            "
          >
            <pdf
              style="width: 80%; margin: auto; margin-top: 100px"
              v-for="i in numPages"
              :key="i"
              :page="i"
              :src="pdfsrc"
            ></pdf>
          </div>
        </b-modal>
        <b-modal
          id="modal-attachment"
          size="lg"
          title="Supporting Documents"
          style="height: 100px"
        >
          <vue-good-table
            :columns="attachmentcolumns"
            :line-numbers="false"
            :search-options="{
              enabled: false,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: false,
              mode: 'records',
            }"
            styleClass="tableOne vgt-table"
            :selectOptions="{
              enabled: false,
              selectionInfoClass: 'table-alert__box',
            }"
            :rows="attachmentData"
          >
            <div slot="emptystate" class="text-center">No data found</div>
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'button'">
                <a :href="props.row ? props.row.url : ''"
                  ><span
                    ><i class="fa fa-download" style="margin-right: 0.3rem"></i
                    >Download</span
                  ></a
                >
              </span>
            </template>
          </vue-good-table>
        </b-modal>
        <b-modal id="modal-open" size="lg">
          <breadcumb :page="'My desk'" :folder="'Open'" />

          <form-wizard title subtitle shape="tab" ref="wizard" color="#9B59B6">
            <tab-content title="Create" class="create_content">
              <div class="header-div">
                <a href="#" style="cursor: pointer" @click="openUpload()"
                  >Upload</a
                >
                <a href="#" @click="openTemp()" style="cursor: pointer; margin-left: 15px;"
                  >Templates</a
                >
                <div class="spinner spinner-primary" v-if="openloader"></div>
              </div>
              <div
                v-if="tempHide"
                @click="chooseImage()"
                style="
                  width: 100%;
                  height: 150px;
                  border: 1px solid gray;
                  display: inline-block;
                  border: dashed 1px;
                  cursor: pointer;
                "
              >
                <input
                  type="file"
                  style="width: 100%; height: 150px; display: none"
                  name="inviteedocument"
                  id="inviteedocument"
                  accept="application/pdf"
                  @change="chooseFile()"
                />
                <h2 class="text-center mt-5">
                  Drop file here or click to upload
                </h2>
                <h5 class="text-center text-mute">Supported Format: pdf</h5>
              </div>
              <div v-else class="templatetable">
                <vue-good-table
                  :columns="tempcoloums"
                  :line-numbers="false"
                  :totalRows="totalRecords"
                  :search-options="{
                    enabled: false,
                    placeholder: 'Search this table',
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'records',
                  }"
                  @on-page-change="onPageChange"
                  @on-per-page-change="onPerPageChange"
                  styleClass="tableOne vgt-table"
                  :selectOptions="{
                    enabled: false,
                    selectionInfoClass: 'table-alert__box',
                  }"
                  :rows="rowData"
                >
                  <div slot="emptystate" class="text-center">No data found</div>
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'button'">
                      <div class="dropdown">
                        <i
                          class="i-Arrow-Down-in-Circle text-15 ml-3"
                          id="dropbtn"
                          style="cursor: pointer"
                        >
                          <div class="dropdown-content">
                            <a @click="Preview(props.row)"
                              ><span
                                ><i
                                  class="fa fa-eye"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Preview</span
                              ></a
                            >
                            <a @click="Details(props.row)"
                              ><span
                                ><i
                                  class="fa fa-clipboard"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Details</span
                              ></a
                            >
                            <a @click="Open(props.row._id)"
                              ><span
                                ><i
                                  class="fa fa-file"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Open</span
                              ></a
                            >
                            <a
                              :href="
                                props.row.documentURL
                                  ? props.row.documentURL.url
                                  : ''
                              "
                              ><span
                                ><i
                                  class="fa fa-download"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Download</span
                              ></a
                            >
                            <a @click="Delete(props.row._id)"
                              ><span
                                ><i
                                  class="fa fa-trash"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Delete</span
                              ></a
                            >
                            <a @click="Attachments(props.row)"
                              ><span
                                ><i
                                  class="fa fa-file"
                                  style="margin-right: 0.3rem"
                                ></i
                                >Attachments</span
                              ></a
                            >
                          </div>
                        </i>
                      </div>
                    </span>
                  </template>
                </vue-good-table>
              </div>
              <div class="mt-3">
                <h5>Name</h5>
                <b-form-input
                  v-model="openData.referenceName"
                  type="text"
                  class="col-12"
                  placeholder="Search"
                  @keyup="filterData()"
                  style="width: 50%"
                ></b-form-input>
              </div>
              <div class="mt-3">
                <h5>Internal reference number</h5>
                <b-form-input
                  v-model="openData.referenceNumber"
                  type="text"
                  class="col-12"
                  placeholder="Search"
                  @keyup="filterData()"
                  style="width: 50%"
                ></b-form-input>
              </div>
              <div class="mt-3">
                <label class="switch switch-primary mr-3">
                  <span>Use Stamp </span>
                  <input type="checkbox" v-model="openData.useStamp" />
                  <span class="slider"></span>
                </label>
              </div>
              <div class="mt-3">
                <label class="switch switch-primary mr-3">
                  <span>Upload Stamp </span>

                  <input type="checkbox" v-model="openData.uploadStamp" />
                  <span class="slider"></span>
                </label>
              </div>
              <br />
              <br />
            </tab-content>
            <tab-content title="Invite">
              <b-row class="md-2 ml-5 mt-5">
                <!-- <b-col md="12 mb-30 ml-5">
                  <label class="switch switch-primary mr-3">
                    <span>Request invitees to sign in fixed order</span>
                    <input type="checkbox" v-model="openData.requestInvitee" />
                    <span class="slider"></span>
                  </label>
                </b-col> -->
                <b-col md="12 mb-30 ml-5">
                  <label class="switch switch-primary mr-3">
                    <span>I want to sign this document</span>
                    <input
                      type="checkbox"
                      v-model="openData.signDocument"
                      :disabled="openData.disabled"
                      @change="addSelfInvitee()"
                    />
                    <span class="slider"></span>
                  </label>
                </b-col>
                <b-col md="12 mb-30 ml-5">
                  <h3 class="heading">Invitees (Signers & Reviewers)</h3>
                </b-col>
                <b-col
                  lg="10"
                  class="mb-30 ml-5"
                  v-for="(x, index) in inviteeData"
                  :key="index"
                >
                  <b-card
                    style="width: 105%; margin-left: -12px"
                    v-bind:class="{ disableCard: x.signed }"
                  >
                    <div>
                      <i
                        v-if="!x.signed"
                        class="fa fa-trash"
                        style="
                          font-size: 1.5rem;
                          color: red;
                          position: absolute;
                          right: 1.5rem;
                          cursor: pointer;
                        "
                        @click="deleteInvitee(index)"
                      ></i>
                    </div>
                    <div>
                      <b-row>
                        <b-col md="5 mb-30 mt-30">
                          <b-form-group label="Name" label-for="input-1">
                            <b-form-input
                              class="col-12"
                              v-model="x.name"
                              :disabled="x.disabled"
                              type="text"
                              required
                              placeholder="Enter Name"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="7 mb-30 mt-30">
                          <b-form-group
                            label="Primary Contact"
                            label-for="input-1"
                          >
                            <b-form-input
                              class="col-9"
                              type="text"
                              v-model="x.contact_info"
                              :disabled="x.disabled"
                              required
                              placeholder="Enter Email or Number"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </div>
                    <hr />
                    <div v-if="x.signed">
                      <b-row style="width: 23rem">
                        <b-col md="12 mb-2" v-if="!x.virtualsign">
                          <label class="switch switch-primary">
                            <span>Aadhar</span>
                            <input type="checkbox" v-model="x.aadhar" />

                            <span class="slider"></span>
                            <span class="ml-2" v-if="x.aadhar">{{ x.signed_date }}</span>
                          </label>
                        </b-col>
                        <b-col md="12" v-if="!x.aadhar">
                          <label class="switch switch-primary">
                            <span>Virtual Sign</span>
                            <span class="ml-2" v-if="x.virtualsign">{{ x.signed_date }}</span>
                            <input type="checkbox" v-model="x.virtualsign" />
                            <span class="slider"></span>
                          </label>
                        </b-col>
                      </b-row>
                    </div>
                    <div v-if="!x.signed">
                      <b-row>
                        <b-col class="md-10 col-8">
                          Signature type
                          <div class="dropdown">
                            <span id="dropbtn">
                              <i class="fa fa-caret-down text-15">
                                <div class="dropdown-content">
                                  <b-row style="width: 13rem">
                                    <div class="mt-30">
                                      <b-col
                                        md="12 mb-30 ml-4"
                                        v-if="aadharStatus"
                                      >
                                        <label
                                          class="switch switch-primary mr-3"
                                        >
                                          <span>Aadhar</span>
                                          <input
                                            type="checkbox"
                                            v-model="x.aadhar"
                                          />
                                          <span class="slider"></span>
                                        </label>
                                      </b-col>
                                      <b-col
                                        md="12 mb-30 ml-4"
                                        v-if="virtualSignStatus"
                                      >
                                        <label
                                          class="switch switch-primary mr-3"
                                        >
                                          <span>Virtual Sign</span>
                                          <input
                                            type="checkbox"
                                            v-model="x.virtualsign"
                                          />
                                          <span class="slider"></span>
                                        </label>
                                      </b-col>
                                      <b-col
                                        md="12 mb-30 ml-4"
                                        v-if="
                                          !virtualSignStatus && !aadharStatus
                                        "
                                      >
                                        <span>No Signature Type</span>
                                      </b-col>
                                    </div>
                                    <!-- <b-col md="12 mb-30 ml-4">
                                      <label class="switch switch-primary mr-3">
                                        <span>Cloud DSC</span>
                                        <input
                                          type="checkbox"
                                          v-model="x.cloud_dsc"
                                        />
                                        <span class="slider"></span>
                                      </label>
                                    </b-col> -->
                                  </b-row>
                                </div>
                              </i>
                            </span>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
              <b-row md="6 mb-5" style="margin-left: 6rem; margin-bottom: 3rem">
                <b-col md="6">
                  <b-button
                    variant="primary"
                    size="sm"
                    class="float-right"
                    @click="addInvitee()"
                  >
                    <span>
                      <i class="fa fa-plus" aria-hidden="true"></i> Add Invitee
                    </span>
                  </b-button>
                </b-col>
              </b-row>
            </tab-content>
            <tab-content title="Finalize">
              <div style="margin-left: 59rem" class="dropdown">
                <i class="fa fa-bars fa-2x" aria-hidden="true">
                  <div class="dropdown-content">
                    <a :href="pdfsrc"
                      ><span
                        ><i
                          class="fa fa-download"
                          style="margin-right: 0.3rem"
                        ></i
                        >Download</span
                      ></a
                    >
                  </div>
                </i>
              </div>
              <div>
                <pdf
                  style="width: 80%; margin: auto; margin-top: 100px"
                  v-for="i in numPages"
                  :key="i"
                  :page="i"
                  :src="pdfsrc"
                ></pdf>
              </div>
            </tab-content>
            <template slot="footer" slot-scope="props">
              <div class="wizard-footer-left" style="margin-left: 42rem">
                <wizard-button
                  v-if="props.activeTabIndex > 0 && !props.isLastStep"
                  @click.native="props.prevTab()"
                  :style="props.fillButtonStyle"
                  >Previous</wizard-button
                >
              </div>
              <div class="wizard-footer-right">
                <b-row>
                  <b-col md="mr-3">
                    <wizard-button
                      style="margin-right: 8rem"
                      v-if="props.isLastStep"
                      @click.native="viewInvitee()"
                      class="wizard-footer-right"
                      :style="props.fillButtonStyle"
                      >View Invitees</wizard-button
                    >
                  </b-col>
                  <b-col>
                    <wizard-button
                      style="margin-right: 67%"
                      v-if="!props.isLastStep"
                      @click.native="next()"
                      class="wizard-footer-right"
                      :style="props.fillButtonStyle"
                      >Next</wizard-button
                    >
                    <wizard-button
                      v-else
                      style="margin-right: 82%"
                      @click.native="send()"
                      class="wizard-footer-right finish-button"
                      :style="props.fillButtonStyle"
                    >
                      {{ props.isLastStep ? "Send" : "Next" }}</wizard-button
                    >
                  </b-col>
                </b-row>
              </div>
            </template>
          </form-wizard>
          <div slot="modal-footer" class="w-100"></div>
        </b-modal>
        <b-modal id="modal-details" size="lg" title="Details">
          <div class="row full-body">
            <div class="left-half col-6">
              <pdf v-for="i in numPages" :key="i" :page="i" :src="pdfsrc"></pdf>
            </div>
            <div class="right-half col-6">
              <b-row>
                <b-col> Document ID </b-col>
                <b-col style="margin-left: 48px;"> {{ detailsData.templateId }} </b-col>
                <b-col>
                  <div class="download-icon">
                    <a :href="pdfsrc">
                      <span><i class="fa fa-download fa-2x"></i></span>
                    </a>
                  </div>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col> Name </b-col>
                <b-col class="text-left">
                  {{
                    detailsData.documentURL ? detailsData.documentURL.name : ""
                  }}
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col> Last Activity Date </b-col>
                <b-col style="margin-right: 122px;"> {{ detailsData.createdAt }} </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col> Status </b-col>
                <b-col style="margin-right: 121px;"> {{ detailsData.status }} </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col> Internal Reference No. </b-col>
                <b-col> {{ detailsData.referenceNumber }} </b-col>
              </b-row>
              <hr />
              <b-row>
                <!-- <b-col> Actions </b-col> -->
                <b-col>
                  <div class="dropdown">
                    <!-- <i class="i-Arrow-Down-in-Circle text-15" id="dropbtn"> -->
                    <!-- <div class="dropdown-content"> -->
                    <a
                      @click="Open(detailsData)"
                      style="cursor: pointer"
                      class="ml-2"
                      ><span
                        ><i class="fa fa-file" style="margin-right: 0.3rem"></i
                        >Open</span
                      ></a
                    >
                    <a
                      :href="
                        detailsData.documentURL
                          ? detailsData.documentURL.url
                          : ''
                      "
                      style="cursor: pointer; color: black"
                      class="ml-3"
                      ><span
                        ><i
                          class="fa fa-download"
                          style="margin-right: 0.3rem"
                        ></i
                        >Download</span
                      ></a
                    >
                    <a
                      @click="Delete(detailsData)"
                      v-if="detailsData.status != 'Completed'"
                      style="cursor: pointer"
                      class="ml-3"
                      ><span
                        ><i class="fa fa-trash" style="margin-right: 0.3rem"></i
                        >Delete</span
                      ></a
                    >
                    <a
                      @click="Attachments(detailsData)"
                      style="cursor: pointer"
                      class="ml-3"
                      ><span
                        ><i class="fa fa-file" style="margin-right: 0.3rem"></i
                        >Attachments</span
                      ></a
                    >
                    <!-- </div> -->
                    <!-- </i> -->
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-modal>
        <b-modal id="modal-template" size="lg" title="" style="height: 100px">
          <div style="position: absolute; right: 10px" class="dropdown">
            <i class="fa fa-bars fa-2x" aria-hidden="true">
              <div class="dropdown-content">
                <a :href="pdfsrc"
                  ><span
                    ><i class="fa fa-download" style="margin-right: 0.3rem"></i
                    >Download</span
                  ></a
                >
              </div>
            </i>
          </div>

          <vue-good-table
            :columns="tempcoloums"
            :line-numbers="false"
            :totalRows="totalRecords"
            :search-options="{
              enabled: false,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
            @on-page-change="onPageChange"
            @on-per-page-change="onPerPageChange"
            styleClass="tableOne vgt-table"
            :selectOptions="{
              enabled: false,
              selectionInfoClass: 'table-alert__box',
            }"
            :rows="rows"
          >
            <div slot="emptystate" class="text-center">No data found</div>
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'button'">
                <div class="dropdown">
                  <i
                    class="i-Arrow-Down-in-Circle text-15 ml-3"
                    id="dropbtn"
                    style="cursor: pointer"
                  >
                    <div class="dropdown-content">
                      <a @click="Preview(props.row)"
                        ><span
                          ><i class="fa fa-eye" style="margin-right: 0.3rem"></i
                          >Preview</span
                        ></a
                      >
                      <a @click="Details(props.row)"
                        ><span
                          ><i
                            class="fa fa-clipboard"
                            style="margin-right: 0.3rem"
                          ></i
                          >Details</span
                        ></a
                      >
                      <a @click="Open(props.row)"
                        ><span
                          ><i
                            class="fa fa-file"
                            style="margin-right: 0.3rem"
                          ></i
                          >Open</span
                        ></a
                      >
                      <a
                        :href="
                          props.row.documentURL ? props.row.documentURL.url : ''
                        "
                        ><span
                          ><i
                            class="fa fa-download"
                            style="margin-right: 0.3rem"
                          ></i
                          >Download</span
                        ></a
                      >
                      <a @click="Delete(props.row._id)"
                        ><span
                          ><i
                            class="fa fa-trash"
                            style="margin-right: 0.3rem"
                          ></i
                          >Delete</span
                        ></a
                      >
                      <a @click="Attachments(props.row)"
                        ><span
                          ><i
                            class="fa fa-file"
                            style="margin-right: 0.3rem"
                          ></i
                          >Attachments</span
                        ></a
                      >
                    </div>
                  </i>
                </div>
              </span>
            </template>
          </vue-good-table>

          <div>
            <pdf
              style="width: 80%; margin: auto; margin-top: 100px"
              v-for="i in numPages"
              :key="i"
              :page="i"
              :src="pdfsrc"
            ></pdf>
          </div>
        </b-modal>
        <b-modal id="modal-view-invite" size="lm" title="Invitees">
          <b-row
            v-for="(x, index) in inviteeData"
            :key="index"
            style="padding: 0 2rem"
          >
            <!-- <b-card style="width: 30rem; margin-bottom: 2rem; background: beige">
              <b-col md="12">
                <h2>
                  {{ x.name }}
                  <span class="badge badge-warning-inverted">SIGNER</span>
                </h2>
              </b-col>
              <b-col md="12">
                <h5 class="text-mute">{{ x.contact_info }}</h5>
              </b-col>
            </b-card> -->
            <b-col md="12">
              <b-card class="mt-3">
                <div
                  class="
                    d-flex
                    flex-column flex-md-row
                    text-center text-md-left text-lg-left
                    flex-lg-row
                    align-items-center
                    border-bottom-dotted-dim
                    pb-3
                    mb-3
                  "
                >
                  <div class="flex-grow-1">
                    <h6>
                      {{ x.name }}
                    </h6>
                    <p class="m-0 text-small text-muted">
                      {{ x.contact_info }}
                    </p>
                  </div>
                  <span class="badge badge-warning-inverted">SIGNER</span>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-modal>
        <b-modal
          id="modal-audit"
          size="lg"
          title="Audit Trail"
          style="height: 100px"
        >
          <div v-if="userData.length > 0">
            <div style="position: absolute; right: 10px" class="dropdown">
              <i class="fa fa-bars fa-2x" aria-hidden="true">
                <div class="dropdown-content">
                  <a
                    ><span @click="downloadAudit()"
                      ><i
                        class="fa fa-download"
                        style="margin-right: 0.3rem"
                      ></i
                      >Download</span
                    ></a
                  >
                  <a
                    ><span @click="OpenSendAudit()" style="cursor: pointer"
                      ><i
                        class="fa fa-download"
                        style="margin-right: 0.3rem"
                      ></i
                      >Send</span
                    ></a
                  >
                </div>
              </i>
            </div>
            <div id="auditTable">
              <div
                style="margin: auto; width: 90%; font-size: 100%"
                id="fulldiv"
              >
                <div style="font-size: 100%">
                  <h4 style="text-align: left">Leegality</h4>
                  <h4
                    style="
                      text-decoration: underline;
                      text-align: center;
                      font-size: 24px;
                    "
                  >
                    AUDIT TRAIL
                  </h4>
                </div>
                <table
                  class="mt-5"
                  style="
                    text-align: left;
                    font-size: 90%;
                    border-collapse: collapse;
                  "
                >
                  <div>
                    <tr style="border-bottom: 1px solid lightgray">
                      <th style="padding: 10px">Document Name</th>
                      <td v-if="userData[0]" style="padding: 10px">
                        {{ userData[0].documentId.documentURL.name }}
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid lightgray">
                      <th style="padding: 10px">Document ID(s)</th>
                      <td v-if="userData[0]" style="padding: 10px">
                        {{ userData[0].documentId.templateId }}
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid lightgray">
                      <th style="padding: 10px">Document Hash</th>
                      <td style="padding: 10px">
                        b60f7f7facdab1a7a97eea0442a2e5d3447946df42583133e72b1caf068fd96f
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid lightgray">
                      <th style="padding: 10px">Status</th>
                      <td v-if="userData[0]" style="padding: 10px">
                        {{ userData[0].documentId.status }}
                      </td>
                    </tr>
                  </div>
                </table>
                <br /><br />
                <table
                  style="
                    text-align: left;
                    font-size: 90%;
                    border-collapse: collapse;
                  "
                >
                  <tr style="border-bottom: 1px solid lightgray">
                    <th style="padding: 10px">Sr. No.</th>
                    <th style="padding: 10px">Name</th>
                    <th style="padding: 10px">Date</th>
                    <th style="padding: 10px">Details</th>
                  </tr>
                  <tr
                    v-for="(x, index) in userData"
                    :key="x"
                    style="border-bottom: 1px solid lightgray"
                  >
                    <td style="padding: 10px">{{ index + 1 }}</td>
                    <td style="padding: 10px">{{ x.name ? x.name : "" }}</td>
                    <td style="padding: 10px">{{ x.createdAt }}</td>
                    <td style="padding: 10px">
                      <p style="margin: 10px 0">
                        <span v-if="x.ip"> <b> IP:</b> {{ x.ip }}<br /></span>
                        <b> Activity: </b>{{ x.activity }}<br />
                        <span v-if="x.activityBy"
                          >{{ x.activityBy }}<br
                        /></span>
                        <span v-if="x.notification"
                          ><b> Notification:</b> {{ x.notification }}<br
                        /></span>
                        <span v-if="x.signatureTransactionId"
                          ><b> Signature Transaction ID:</b>
                          {{ x.signatureTransactionId }}<br
                        /></span>
                        <span v-if="x.authenticationType"
                          ><b> Signature Transaction ID:</b>
                          {{ x.authenticationType }}<br
                        /></span>
                        <span v-if="x.device && x.os && x.browser">
                          <b> OS:</b> {{ x.os }}, <b> Browser: </b
                          >{{ x.browser }}, <b> Device: </b>{{ x.device }}</span
                        >
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div v-else style="text-align: center">No Data Found</div>
          <div
            class="spinner spinner-primary"
            id="auditloader"
            v-if="auditTrailloader"
          ></div>
        </b-modal>
        <b-modal
          id="modal-sendMail"
          size="lm"
          title="Send Audit Trail"
          style="height: 100px"
        >
          <div>
            <h5>Email</h5>
            <b-form-input
              class="col-6"
              v-model="email"
              type="text"
              required
              placeholder="Enter Email"
            ></b-form-input>
          </div>
          <div slot="modal-footer" class="w-100">
            <div
              class="spinner spinner-primary float-right"
              v-if="sendMailLoader"
            ></div>
            <b-button
              v-if="!sendMailLoader"
              variant="primary"
              size="sm"
              class="float-right mr-3"
              @click="sendmail()"
            >
              Send Mail
            </b-button>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import message from "../../../message";
import pdf from "vue-pdf";
import generateUniqueId from "generate-unique-id";
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Task Manager",
  },
  components: {
    pdf,
  },
  data() {
    return {
      userData: [],
      imgSrc: "",
      cropImg: "",
      pdfsrc: "",
      imgSrc: "",
      cropImg: "",
      // option: [
      //  'A' , 'x' ,'ddd'
      // ],
      // isOption: false,
      // value: 'B',
      tempcoloums: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "ID",
          field: "templateId",
        },
        {
          label: "Created At",
          field: "time",
        },
      ],
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Status",
          field: "status",
          html: true,
        },
        {
          label: "ID",
          field: "templateId",
        },
        {
          label: "Folder",
          field: "folder",
        },
        {
          label: "Owner",
          field: "owner",
        },
        {
          label: "Created At",
          field: "time",
        },
        {
          label: "Actions",
          field: "button",
        },
      ],
      attachmentcolumns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Email/Phone No.",
          field: "email",
        },
        {
          label: "Documents",
          field: "button",
        },
      ],
      expiryColumns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Status",
          field: "status",
          html: true,
        },
        {
          label: "ID",
          field: "templateId",
        },
        {
          label: "Folder",
          field: "folder",
        },
        {
          label: "Owner",
          field: "owner",
        },
        {
          label: "Created At",
          field: "time",
        },
        {
          label: "Expiry Time",
          field: "expiryTime",
        },
        {
          label: "Actions",
          field: "button",
        },
      ],
      rows: [],
      totalRecords: 0,
      serverParams: {
        sort: [
          {
            field: "",
            type: "",
          },
        ],
        page: 1,
        perPage: 10,
      },
      failed: [],
      loader: false,
      tabName: "action",
      toDate: "",
      fromDate: "",
      openloader: false,
      search: "",
      documentData: "",
      numPages: 12,
      attachmentData: [],
      detailsData: {},
      openData: {},
      aadharStatus: false,
      virtualSignStatus: false,
      inviteeData: [],
      tempHide: true,
      rowData: [],
      viewdownload: false,
      downloadloader: false,
      auditTrail: "",
      email: "",
      sendMailLoader: false,
      auditTrailloader: false,
    };
  },
  created() {
    this.getCompanyData();
    this.clearform();
    // this.getAuditTrailData();
  },
  methods: {
    openTemp() {
      this.openloader = true;
      this.$bvModal.show("modal-template");
      this.openloader = false;
    },
    getTemplateData() {
      this.loader = true;
      this.$apiService
        .getCall("get-by-company")
        .then((res) => {
          let rowData = [];
          if (res.apidata.length > 0) {
            rowData = res.apidata;
            rowData.forEach((element) => {
              element.time = element.time
                ? moment(element.time).format("DD/MM/YYYY")
                : "";
            });
          }
          this.rowData = rowData;
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    getCompanyData() {
      this.loader = true;
      let requestData = {
        perPage: this.serverParams.perPage,
        page: this.serverParams.page,
        filterStatus: this.tabName,
      };
      if (this.search) {
        requestData.search = this.search;
      }
      if (this.fromDate && this.toDate) {
        requestData.fromDate = moment(this.fromDate).format("YYYY-MM-DD");
        requestData.toDate = moment(this.toDate).format("YYYY-MM-DD");
      }
      this.$apiService
        .postCall("documents", requestData)
        .then((res) => {
          debugger
          let rowData = [];
          if (res.apidata.length > 0 && res.apidata[0].rows.length > 0) {
            rowData = res.apidata[0].rows;
            this.totalRecords = res.apidata[0].count;
            rowData.forEach((element) => {
              element.time = element.createdAt
                ? moment(element.createdAt).format("MMM DD,YYYY hh:mm")
                : "";
              element.expiryTime = element.expiryTime
                ? moment(element.expiryTime).format("MMM DD,YYYY hh:mm")
                : "";
              element.templateId = element.templates
                ? element.templates.templateId
                : "";
              element.owner = "";
            });
          } else {
            this.totalRecords = 0;
          }
          this.rows = rowData;
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    onPageChange(params) {
      this.updateParams({ page: params.currentPage });
      this.getCompanyData();
    },

    onPerPageChange(params) {
      this.updateParams({ perPage: params.currentPerPage });
      this.getCompanyData();
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    changeTab(value) {
      this.tabName = value;
      this.clearDate();
      this.getCompanyData();
    },
    filterData() {
      this.getCompanyData();
    },
    sendLink(id) {
      this.$apiService
        .postCall("sendLink", { _id: id })
        .then((res) => {
          this.$toaster.makeToast("success", message.SUCCESS_MESSAGE);
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    sendReminder(id) {
      this.$apiService
        .postCall("sendReminder", { _id: id })
        .then((res) => {
          this.$toaster.makeToast("success", message.SUCCESS_MESSAGE);
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    Preview(data) {
      this.pdfsrc = data.documentURL ? data.documentURL.url : "";
      this.$bvModal.show("modal-preview");
    },
    clearDate() {
      this.search = "";
      this.$refs.startDate.clearDate();
      this.$refs.endDate.clearDate();
    },
    Delete(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");

          this.$apiService
            .postCall("deleteDocument", { _id: id })
            .then((res) => {
              if (res.error) {
                this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
                return;
              }
              this.$toaster.makeToast("success", message.DELETE_DATA);
              this.getCompanyData();
              this.clearform();
            })

            .catch((error) => {
              this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
            });
        }
      });
    },
    clearform() {
      this.form = {};
      this.isEdit = false;
      this.submitloader = false;
      this.generateIDloader = false;
      this.$bvModal.hide("modal-details");
    },
    Attachments(data) {
      // detailsData;
      this.attachmentData = data.attachments;
      this.$bvModal.show("modal-attachment");
    },
    Details(data) {
      this.detailsData = data;
      this.detailsData.createdAt = moment(this.detailsData.createdAt).format(
        "MMM DD,YYYY hh:mm"
      );
      this.pdfsrc = data.documentURL ? data.documentURL.url : "";
      this.$bvModal.show("modal-details");
    },
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    Open(data) {
      debugger;
      this.openData = data;
      this.pdfsrc = data.documentURL ? data.documentURL.url : "";
      this.aadharStatus = data.company.eSignature
        ? data.company.eSignature.aadharStatus
        : false;
      this.virtualSignStatus = data.company.eSignature
        ? data.company.eSignature.virtualSignStatus
        : false;
      debugger;
      this.inviteeData =
        data.invitee && data.invitee.length > 0 ? data.invitee : [];
      this.inviteeData.forEach((element) => {
        element.signed_date = element.signed_date
          ? moment(element.signed_date).format("YYYY-MM-DD hh:mm:ss")
          : moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      });
      let index = this.inviteeData
        .map((e) => e.contact_info)
        .indexOf(this.openData.company.email);
      if (this.inviteeData[index] && this.inviteeData[index].signed) {
        this.openData.disabled = true;
      } else {
        this.openData.disabled = false;
      }
      this.$bvModal.show("modal-open");
    },
    addInvitee() {
      let inviteLength = this.inviteeData.length;
      let newData = this.inviteeData[inviteLength - 1];

      if (inviteLength > 0) {
        if (!newData || !newData.name || !newData.contact_info) {
          this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
          return;
        }
      }
      if (this.inviteeData.length > 1) {
        let response = this.inviteeData.filter((res) => {
          return (
            res.name === newData.name ||
            res.contact_info === newData.contact_info
          );
        });
        if (response.length > 1) {
          this.$toaster.makeToast("warning", message.DUPLICATE_MESSAGE);
          return;
        }
      }
      if (
        this.openData.company &&
        !this.openData.company.eSignature.aadharStatus &&
        !this.openData.company.eSignature.virtualSignStatus
      ) {
        this.$toaster.makeToast("warning", message.SIGNATURE_VALIDATION);
        return;
      }

      let pushData = {
        name: "",
        contact_info: "",
        aadhar: false,
        virtualsign: false,
        cloud_dsc: false,
        uniqueId: generateUniqueId(),
      };
      this.inviteeData.push(pushData);
    },
    deleteInvitee(index) {
      if (this.inviteeData && this.inviteeData.length <= 1) {
        this.$toaster.makeToast("warning", message.DELETE_VALIDATION_MESSAGE);
        return;
      }
      this.inviteeData.splice(index, 1);
    },
    next() {
      debugger;
      if (this.$refs.wizard.activeTabIndex === 0) {
        let requestData = {
          useStamp: this.openData.useStamp,
          uploadStamp: this.openData.uploadStamp,
          referenceNumber: this.openData.referenceNumber,
          referenceName: this.openData.referenceName,
          id: this.openData._id,
        };
        this.$apiService
          .postCall("reference_number", requestData)
          .then((res) => {})
          .catch((error) => {});
      }
      if (this.$refs.wizard.activeTabIndex === 1) {
        let inviteLength = this.inviteeData.length;
        for (let i = 0; i < inviteLength; i++) {
          if (!this.inviteeData[i].aadhar && !this.inviteeData[i].virtualsign) {
            this.$toaster.makeToast("warning", message.SIGNATURE_VALIDATION);
            return;
          }
        }
        let newData = this.inviteeData[inviteLength - 1];
        if (!newData || !newData.name || !newData.contact_info) {
          this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
          return;
        }
        if (this.inviteeData.length > 1) {
          let response = this.inviteeData.filter((res) => {
            return (
              res.name === newData.name ||
              res.contact_info === newData.contact_info
            );
          });
          if (response.length > 1) {
            this.$toaster.makeToast("warning", message.DUPLICATE_MESSAGE);
            return;
          }
        }
        let requestData = {
          inviteeData: this.inviteeData,
          requestInvitee: this.openData.requestInvitee ? true : false,
          signDocument: this.openData.signDocument ? true : false,
          id: this.openData._id,
        };
        this.$apiService
          .postCall("updateInvitee", requestData)
          .then((res) => {})
          .catch((error) => {});
          this.$toaster.makeToast("success", message.MAIL_SENT);
      }
      this.$refs.wizard.nextTab();
    },
    viewInvitee() {
      this.$bvModal.show("modal-view-invite");
    },
    openTemp() {
      this.tempHide = false;
      this.getTemplateData();
    },
    openUpload() {
      this.tempHide = true;
    },
    chooseImage() {
      document.getElementById("inviteedocument").click();
    },
    chooseFile() {
      
    },
    send() {
      let requestData = {
        newStatus: "Sent",
        _id: this.openData._id,
      };
      this.$apiService
        .postCall("updateDocumentStatus", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);
          this.$bvModal.hide("modal-open");
          this.getCompanyData();
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    addSelfInvitee() {
      if (this.openData.signDocument) {
        let pushData = {
          name: this.openData.company.name,
          contact_info: this.openData.company.email,
          aadhar: false,
          virtualsign: true,
          cloud_dsc: false,
          uniqueId: generateUniqueId(),
          disabled: true,
        };
        this.inviteeData.push(pushData);
      } else {
        let index = this.inviteeData
          .map((e) => e.contact_info)
          .indexOf(this.openData.company.email);
        if (index >= 0) this.inviteeData.splice(index, 1);
      }
    },

    download() {
      this.downloadloader = true;
      let data = this.$refs["my-table"].selectedPageRows;
      this.$apiService
        .postCall("downloadMultipleFile", data)
        .then((res) => {
          let url = res.apidata;
          const link = document.createElement("a");
          link.href = "data:application/zip;base64," + url;
          link.download = "document.zip";
          link.click();
          this.downloadloader = false;
          // console.log(url);
        })
        .catch((error) => {
          this.downloadloader = false;
           this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    selectionChanged() {
      if (this.$refs["my-table"].selectedPageRows.length > 0) {
        this.viewdownload = true;
      } else {
        this.viewdownload = false;
      }
    },
    openAudit(id) {
      this.getAuditTrailData(id);
      this.$bvModal.show("modal-audit");
    },
    sendAudit(id) {
      let requestData = {
        _id: id,
      };
      this.$apiService
        .postCall("generateAuditTrail", requestData)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    OpenSendAudit(id) {
      this.$bvModal.show("modal-sendMail");
    },
    getAuditTrailData(id) {
      this.auditTrailloader = true;
      this.$apiService.getCall("auditTrail_data?_id=" + id).then((res) => {
        this.userData = res.apidata.data;
        this.userData.forEach((element) => {
          element.createdAt = element.createdAt
            ? moment(element.createdAt).format("DD/MM/YYYY hh:mm:ss")
            : moment(new Date()).format("DD/MM/YYYY hh:mm:ss");
        });
        this.auditTrailloader = false;
      });
    },
    Complete(id) {
      this.loader = true;
      let requestData = {
        _id: id,
        newStatus: "Completed",
      };
      this.$apiService
        .postCall("updateDocumentStatus", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.UPDATE_MESSAGE);
          this.loader = false;
          this.getCompanyData();
         
        })
        .catch((error) => {
          this.loader = false;
          this.$$toaster.makeToast("warning", message.VALIDATION_ERROR);
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    downloadAudit() {
      this.auditTrailloader = true;
      document.getElementById("fulldiv").style =
        "font-size:60%;width:90%;margin:auto";
      let content = document.getElementById("auditTable").innerHTML;
      document.getElementById("fulldiv").style =
        "font-size:100%;width:90%;margin:auto";
      this.$apiService
        .postCall("downloadAuditTrail", { content: content })
        .then((res) => {
          this.auditTrail = res.apidata;
          window.open(this.auditTrail);
          this.auditTrailloader = false;
        })
        .catch((error) => {
          this.auditTrailloader = false;
          console.log(error);
        });
    },
    sendmail() {
      this.sendMailLoader = true;
      if (!this.email) {
        this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        this.sendMailLoader = false;
        return;
      }
      document.getElementById("fulldiv").style =
        "font-size:60%;width:90%;margin:auto";
      let content = document.getElementById("auditTable").innerHTML;
      document.getElementById("fulldiv").style =
        "font-size:100%;width:90%;margin:auto";
      this.$apiService
        .postCall("sendAuditTrail", { content: content, email: this.email })
        .then((res) => {
          this.$toaster.makeToast("success", "Audit Trail Sent");
          this.email = "";
          this.sendMailLoader = false;
          this.$bvModal.hide("modal-sendMail");
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.VALIDATION_ERROR);
          this.sendMailLoader = false;
          console.log(error);
        });
    },
    OpenDetails(data) {
      this.openData = data;
      this.inviteeData =
        data.invitee && data.invitee.length > 0 ? data.invitee : [];
      this.$bvModal.show("modal-view-invite");
    },
    disabledEndDate(time, startDate) {
      if (startDate) {
        return (
          time.getTime() < new Date(startDate) || time.getTime() > Date.now()
        );
      }
      return time.getTime() > Date.now();
    },
    disabledStartDate(time, toDate) {
      if (toDate) {
        return time.getTime() > new Date(toDate) || time.getTime() > Date.now();
      }
      return time.getTime() > Date.now();
    },
  },
};
</script>
<style>
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 10;
}

#dropbtn {
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.vgt-responsive {
  overflow: unset !important;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transform: translate3d(0, 100%, 0);
  color: black;
  padding: 1px;
  bottom: 5px;
  z-index: 10;
  right: 0;
  font-size: 0.8rem;
  text-align: left;
  min-width: 130px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

#modal-open .modal-dialog,
#modal-details .modal-dialog {
  max-width: 85% !important;
  /* margin: 0 !important; */
}

.modal-content {
  min-height: 100% !important;
  height: auto;
}

#modal-details .modal-content {
  min-height: 100% !important;
  height: 50rem;
}

.icon-size {
  font-size: 30px;
}

.right-half {
  width: 32%;
}

.left-half {
  width: 50%;
  overflow-y: scroll;
  height: 40rem;
}

.full-body {
  display: flex;
}

.download-icon {
  position: absolute;
  right: 55%;
  z-index: 999;
}

.wizard-nav,
.wizard-progress-with-circle {
  width: 80% !important;
  margin-left: 8rem;
}

/* .vue-form-wizard .wizard-card-footer{
  display:none
} */

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.badge-warning-inverted {
  background-color: #fff;
  border: 1px solid #f9d66f;
  color: #f8cf57;
  font-weight: 300;
}

.badge {
  font-size: 0.81rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  line-height: 1;
  text-align: center;
}

.create_content {
  width: 82%;
  margin: 0 auto;
}
.vue-form-wizard .wizard-nav-pills {
  margin-left: 116px;
  max-width: 79%;
}
.header-div {
  margin-left: 46.5rem;
  margin-bottom: 2rem;
  /* float: right; */
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

.disableCard {
  pointer-events: none;
  opacity: 0.8;
}

#auditloader {
  position: fixed;
  left: 50%;
  top: 50%;
}
</style>
