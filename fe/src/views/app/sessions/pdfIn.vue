<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="white">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <div class="mt-3" style="display: flex">
              <svg
                style="width: 25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                  fill="#E667E6"
                ></path>
                <path
                  d="M16.4795 10.9074L12 18.9704L7.52205 10.9101L8.09391 7.5H15.9471L16.4795 10.9074Z"
                  stroke="white"
                ></path>
                <path d="M12 13V18" stroke="white"></path>
                <path
                  d="M8.30775 7.50205L6.80571 4.49795H17.1943L15.6922 7.50205H8.30775Z"
                  stroke="white"
                  stroke-width="0.995907"
                ></path>
                <circle cx="12" cy="11" r="2" stroke="white"></circle>
              </svg>
              <h4 class="ml-2">
                <span style="font-size: 14px"> eSign Pdf ></span>
                <b style="font-size: 16px">{{ documentname }}</b>
              </h4>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="spinner spinner-primary" v-if="loader" id="loader"></div>
    <div class="auth-layout-wrap" v-if="showData">
      <b-col md="12" xl="12" lg="12">
        <b-row>
          <div class="verifyOtp_hide">
            <div class="mt-5" style="text-align: center">
              <b-button
                @click="sendOTP()"
                v-if="isHide"
                variant="outline-primary ripple m-1"
                v-b-modal.modal-sm
                class="text-verifyOtp"
                >Verify by OTP</b-button
              >
            </div>
            <div class="mt-4" style="text-align: center">
              <b-form-input
                type="number"
                placeholder="Enter OTP"
                v-if="isOtp"
                v-model="OTPvalue"
                required
              ></b-form-input>
            </div>
            <b-row>
              <b-col>
                <b-button
                  class="mt-4"
                  @click="verifyOTP()"
                  variant="outline-primary ripple m-1"
                  style="float: right; width: 110px"
                  v-if="isOtp"
                  >Verify</b-button
                >
              </b-col>
              <b-col>
                <p class="mt-2">
                  <a
                    href=""
                    class="t-font-bolder"
                    v-if="issendOtp && !verified"
                    style="color: black"
                    >Resend OTP</a
                  >
                </p>
              </b-col>
            </b-row>
          </div>
          <b-col
            lg="8"
            style="overflow-y: scroll; background: #e3e3e3; height: 542px"
          >
            <div style="width: 80%; margin: auto; margin-top: 3rem">
              <div @drop="onDrop($event)" @dragover="allowDrop($event)">
                <pdf
                  v-for="i in numPages"
                  :key="i"
                  :page="i"
                  :src="pdfsrc"
                ></pdf>
              </div>
            </div>
          </b-col>
          <b-col lg="3" xl="3" style="margin: 0 auto">
            <div v-if="showEmail && !hideSignatureDetails">
              <div class="mt-5">
                <b-button
                  variant="outline-primary ripple m-1"
                  v-b-modal.modal-sm
                  class="text-Signers"
                  >Invite Signers</b-button
                >
                <b-modal id="modal-sm" size="sm" title="Invite Signers">
                  <div>
                    <b-form-group label="Name" class="text-12">
                      <b-form-input
                        class="form-control-rounded"
                        type="text"
                        placeholder="Enter Name"
                        v-model="invitee.name"
                        email
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="mt-4">
                    <b-form-group label="Contact Info" class="text-12">
                      <b-form-input
                        class="form-control-rounded"
                        type="text"
                        placeholder="Enter Contact Info"
                        email
                        required
                        v-model="invitee.contact_info"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div slot="modal-footer" class="w-100">
                    <div
                      class="spinner spinner-primary mr-3 float-right"
                      v-if="isSpin"
                    ></div>
                    <b-button
                      variant="primary"
                      size="sm"
                      class="float-right"
                      @click="submit()"
                      v-if="!isSpin"
                    >
                      Submit
                    </b-button>
                  </div>
                </b-modal>
                <div style="display: flex; margin-top: 2rem">
                  <div>
                    <img :src="baseUrl" id="value" draggable="true" />
                  </div>
                  <div>
                    <i
                      class="fa fa-trash fa-2x"
                      style="color: red"
                      @click="removeSignature()"
                      :disabled="isremovable"
                      v-if="isremovable"
                    ></i>
                  </div>
                </div>
                <b-button
                  class="mt-4 text-signature"
                  variant="outline-primary m-1"
                  @click="openSignature()"
                  :disabled="isEnable"
                  v-if="signData"
                  >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style="float: left; width: 25px">
                    <path
                      fill="currentColor"
                      d="M16.5854 4.1259C17.2033 6.65657 16.0211 8.61635 13.1428 10.0076C12.942 10.8207 12.7336 11.7073 12.5177 12.6672C12.8096 12.5258 13.1195 12.3851 13.451 12.2421C13.8836 12.0555 14.1029 11.9655 15.1602 11.5367C16.5934 10.9554 17.4697 10.9456 17.3808 11.9599C17.3435 12.3851 17.0733 12.8111 16.3583 13.7605C16.3294 13.7989 16.3294 13.7989 16.3004 13.8373C15.9909 14.2473 15.9936 14.2438 15.8931 14.381C15.6456 14.7187 15.4015 15.0481 15.1604 15.3696C15.5823 15.1226 16.077 14.8257 16.6439 14.4792C18.001 13.6497 19.0296 13.2287 19.7805 13.2287C20.7216 13.2287 21.2275 13.8731 21.2045 14.9168L20.2048 14.8949C20.2163 14.3691 20.1061 14.2287 19.7805 14.2287C19.2648 14.2287 18.3761 14.5924 17.1654 15.3325C15.8712 16.1235 14.9444 16.6618 14.3778 16.9507C14.0535 17.1161 13.8396 17.2063 13.6762 17.2325C13.3734 17.2812 13.0407 17.1653 13.0262 16.7309C13.0199 16.5428 13.0835 16.4284 13.1985 16.2867C13.8039 15.5137 14.4333 14.6815 15.0864 13.79C15.1816 13.66 15.1879 13.6514 15.4241 13.3383L15.5595 13.1589C15.8668 12.7509 16.0854 12.4397 16.2201 12.2204C16.0408 12.2712 15.812 12.3514 15.5361 12.4634C14.4872 12.8888 14.2701 12.9779 13.8471 13.1603C13.2375 13.4233 12.7099 13.6754 12.237 13.9374C12.2177 14.0259 12.1984 14.1149 12.1791 14.2044C11.8171 15.6821 11.4369 16.9473 11.033 18.0006L21 18V19L10.6135 18.9996C9.862 20.6248 9.02892 21.5744 8.0829 21.8515C7.36828 22.0608 6.78327 21.9004 6.4975 21.3538C6.28021 20.9382 6.28523 20.3689 6.45651 19.6788C6.51033 19.4619 6.58071 19.2345 6.66552 19.0005L3 19V18L7.0962 17.9996C7.48393 17.2151 7.99001 16.4211 8.544 15.7516C8.70958 15.5515 8.8756 15.362 9.04283 15.1819C9.763 14.4066 10.4799 13.8193 11.3545 13.2923C11.5748 12.2894 11.7879 11.3584 11.9939 10.499C10.924 10.9046 9.67695 11.2505 8.2562 11.5366L8.05877 10.5563C9.75356 10.215 11.1601 9.79957 12.2859 9.31021C12.9021 6.86572 13.4511 5.10509 13.9365 4.02105C14.8551 1.96933 16.0622 1.98285 16.5854 4.1259ZM9.50182 18.9999L7.73823 19.0006C7.60398 19.3232 7.49791 19.6342 7.42706 19.9196C7.30926 20.3943 7.30619 20.7422 7.38368 20.8905C7.41837 20.9568 7.50179 20.9797 7.80179 20.8918C8.36971 20.7254 8.94292 20.0937 9.50182 18.9999ZM11.0145 14.7287C10.5787 15.0606 10.1781 15.4291 9.77552 15.8625C9.62143 16.0284 9.46797 16.2036 9.31441 16.3892C8.91346 16.8737 8.53873 17.4331 8.22509 17.9992L9.95583 18.0012C10.3192 17.1116 10.674 16.0204 11.0145 14.7287ZM6.33333 12L7 12.6667L5.66667 14L7 15.3333L6.33333 16L5 14.6667L3.66667 16L3 15.3333L4.33333 14L3 12.6667L3.66667 12L5 13.3333L6.33333 12ZM14.8492 4.4297C14.4466 5.32881 13.9878 6.75455 13.4746 8.70448C15.3536 7.57299 16.0442 6.12534 15.614 4.36308C15.3301 3.20032 15.3993 3.20109 14.8492 4.4297Z"
                    ></path></svg
                  >Your Signature<span class="text-add" v-if="isSigned"
                    >signed</span>
                  </b-button>
                <b-button
                  variant="outline-primary m-1"
                  class="text-signature"
                  @click="openTextSignature()"
                  v-if="initialData"
                  :disabled="isEnable"
                  ><svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    style="float: left; width: 25px"
                  >
                    <path
                      d="M5.856 12.152c.56-.08 1.076-.12 1.548-.12l-.12-2.796c-.192.344-.464.896-.816 1.656a31.444 31.444 0 01-.612 1.26zm3.588 4.296c.032.12 0 .236-.096.348a1.024 1.024 0 01-.396.252c-.16.072-.312.108-.456.108-.232 0-.364-.072-.396-.216-.288-1.144-.5-2.504-.636-4.08-.72-.008-1.436.06-2.148.204a373.77 373.77 0 01-2.1 3.468c-.064.112-.196.208-.396.288-.208.072-.4.108-.576.108-.224 0-.336-.06-.336-.18 0-.048.016-.1.048-.156.64-1.12 1.232-2.144 1.776-3.072l-.204.072a1.002 1.002 0 01-.348.072.358.358 0 01-.24-.072.217.217 0 01-.096-.18c0-.08.04-.16.12-.24a.862.862 0 01.324-.228c.376-.168.712-.3 1.008-.396a59.4 59.4 0 001.38-2.532c.56-1.08 1.032-1.924 1.416-2.532a.543.543 0 01.096-.096l-.012-.06c0-.144.1-.272.3-.384.208-.12.416-.18.624-.18.256 0 .388.096.396.288l.036.804c.072 1.928.164 3.552.276 4.872.12 1.312.332 2.552.636 3.72zm1.092.156a.211.211 0 01-.06-.156c0-.056.028-.12.084-.192a.85.85 0 01.108-.228c.064-.096.188-.18.372-.252a1.91 1.91 0 01.312-.06c.104 0 .196.024.276.072.08.048.124.12.132.216v.228l.06.072c.04.048.06.104.06.168 0 .12-.084.24-.252.36a.92.92 0 01-.516.168.616.616 0 01-.252-.048.51.51 0 01-.216-.132.46.46 0 01-.108-.216zm8.874-1.656c.28-.208.492-.44.636-.696.152-.264.228-.528.228-.792 0-.256-.076-.5-.228-.732-.152-.24-.38-.452-.684-.636a3.881 3.881 0 00-2.028-.552c-.624 0-1.212.132-1.764.396-.192.92-.464 2.308-.816 4.164v.024c1.024-.04 1.908-.136 2.652-.288a4.894 4.894 0 002.004-.888zM18.306 8.54c-.096-.52-.412-.78-.948-.78-.256 0-.552.06-.888.18-.152.624-.364 1.56-.636 2.808a5.126 5.126 0 001.704-.768c.528-.36.792-.772.792-1.236 0-.04-.008-.108-.024-.204zm1.572 2.604c.504.224.9.516 1.188.876.296.36.444.756.444 1.188 0 .416-.136.824-.408 1.224-.64.952-1.596 1.62-2.868 2.004-1.264.384-2.644.576-4.14.576-.4 0-.78-.012-1.14-.036-.184-.008-.276-.064-.276-.168 0-.112.096-.244.288-.396.2-.152.368-.236.504-.252.464-2.48 1-4.992 1.608-7.536-.096.024-.2.036-.312.036a.954.954 0 01-.324-.048c-.08-.032-.12-.084-.12-.156 0-.088.072-.196.216-.324a4.78 4.78 0 01.804-.54.38.38 0 01.024-.108c.04-.144.16-.268.36-.372a1.34 1.34 0 01.6-.156c.152 0 .248.032.288.096.44-.12.828-.18 1.164-.18.872 0 1.436.352 1.692 1.056a1.6 1.6 0 01.108.564c0 .408-.152.8-.456 1.176-.296.376-.692.72-1.188 1.032a5.085 5.085 0 011.944.444zm1.85 5.46a.211.211 0 01-.06-.156c0-.056.027-.12.084-.192a.85.85 0 01.108-.228c.064-.096.188-.18.372-.252a1.91 1.91 0 01.312-.06c.104 0 .195.024.276.072.08.048.123.12.131.216v.228l.06.072c.04.048.06.104.06.168 0 .12-.084.24-.252.36a.92.92 0 01-.515.168.616.616 0 01-.252-.048.51.51 0 01-.216-.132.46.46 0 01-.108-.216z"
                    ></path></svg
                  >Your Initials<span class="text-add" v-if="isSigned"
                    >signed</span
                  ></b-button
                >
              </div>
              <div style="margin-top: 7rem">
                <div
                  class="spinner spinner-primary mr-1 text-center"
                  v-if="isLoading"
                ></div>
                <b-button
                  variant="primary ripple m-1"
                  @click="finishSign('virtual')"
                  v-if="!isLoading && !loader"
                  :disabled="isEnableFinish"
                  style="
                    width: 20rem;
                    color: white;
                    font-size: 20px;
                    font-weight: 900;
                  "
                  >Finish & Sign</b-button
                >
              </div>
              <b-modal
                id="modal-open-signature"
                size="lg"
                v-bind:title="'Add Signature'"
              >
                <div class="full-modal">
                  <div class="left-modal">
                    <button class="button" disabled v-if="drawType">
                      Draw
                    </button>

                    <button
                      class="button"
                      disabled
                      @click="enabletext()"
                      v-if="textType"
                    >
                      Type
                    </button>

                    <button
                      class="button"
                      disabled
                      @click="enableupload()"
                      v-if="uploadType"
                    >
                      Upload
                    </button>
                  </div>
                  <div class="right-modal">
                    <div class="right-top"></div>
                    <div class="canvas">
                      <div class="drawType" v-if="drawType">
                        <!-- <VueSignature
                          ref="handWrite"
                          :canvasProps="{ class: 'sig-canvas'}"
                        /> -->
                        <VueSignaturePad
                          id="signature"
                          width="100%"
                          height="200px"
                          ref="signaturePad"
                          :options="{
                            onBegin: () => {
                              $refs.signaturePad.resizeCanvas();
                            },
                          }"
                        />
                      </div>
                      <div class="textType" v-if="textType">
                        <input
                          id="signature-text-input"
                          placeholder="start typing"
                          spellcheck="false"
                          value=""
                        />
                      </div>
                      <div class="uploadType" v-if="uploadType">
                        <p>Upload feature coming soon ...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div slot="modal-footer" class="w-100">
                  <div
                    class="spinner spinner-primary"
                    v-if="signingloader"
                    id="loader"
                  ></div>
                  <b-button
                    variant="primary"
                    size="sm"
                    class="float-right"
                    v-if="!signingloader"
                    @click="create()"
                  >
                    Create
                  </b-button>
                  <b-button
                    variant="primary"
                    size="sm"
                    class="float-right mr-2"
                    v-if="!signingloader"
                    @click="cancel()"
                  >
                    Cancel
                  </b-button>
                </div>
              </b-modal>
            </div>
            <div
              v-if="(showEmail || showSMS) && hideSignatureDetails"
              class="documentsigned"
            >
              <span class="signed">Document Signed Succesfully</span>

              <div style="margin-top: 2rem;">
                <b-row>
                <b-col> Name </b-col>
                <b-col class="text-left">
                  {{userName}}
                </b-col>
              </b-row>
              <b-row>
                <b-col> Document ID </b-col>
                <b-col> {{templateId}} </b-col>
                </b-row>
                <b-row>
                <b-col> Last Activity</b-col>
                <b-col> {{time }}</b-col>
              </b-row>
              <b-row>
                <b-col> Status </b-col>
                <b-col> {{ status }} </b-col>
              </b-row>
              </div>
            </div>
            <div v-if="showSMS && !hideSignatureDetails">
              <div class="verify_OTP">
                <div style="text-align: center; margin-top: 100px">
                  <b-button
                    @click="sendOTP()"
                    v-if="isHide"
                    variant="outline-primary ripple m-1"
                    v-b-modal.modal-sm
                    class="text-verify"
                    >Verify by OTP</b-button
                  >
                </div>
                <div style="text-align: center; margin-top: 100px">
                  <b-form-input
                    type="number"
                    placeholder="Enter OTP"
                    v-if="isOtp"
                    v-model="OTPvalue"
                    required
                  ></b-form-input>
                </div>
                <b-row>
                  <b-col>
                    <b-button
                      class="mt-4 mr-5"
                      @click="verifyOTP()"
                      variant="outline-primary ripple m-1"
                      style="float: right; width: 110px"
                      v-if="isOtp"
                      >Verify</b-button
                    >
                  </b-col>
                  <b-col>
                    <p class="mt-2 ml-3">
                      <a
                        href=""
                        class="t-font-bolder"
                        v-if="issendOtp && !verified"
                        style="color: black"
                        >Resend OTP</a
                      >
                    </p>
                  </b-col>
                </b-row>
              </div>
              <div class="text_finish">
                <div
                  class="spinner spinner-primary mr-1 text-center"
                  v-if="isLoading"
                ></div>
                <b-button
                  variant="primary ripple m-1"
                  v-if="!isLoading && !loader"
                  @click="aadharSign()"
                  style="
                    width: 20rem;
                    color: white;
                    font-size: 20px;
                    font-weight: 900;
              "
                  >Finish & Sign</b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </div>
    <div class="p-4" v-if="linkExpired">
      <div
        class="auth-layout-wrap"
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
        v-if="linkExpired"
      >
        <div class="auth-content">
          <div class="card o-hidden" style="width: 50%; margin-left: 11rem">
            <div class="row">
              <b-col md="12">
                <div class="p-4">
                  <div class="auth-logo text-center mb-30">
                    <img :src="logo" />
                  </div>
                  <div class="mt-3 text-center">
                    <h1 class="mb-3 text-18">Document Link Expired</h1>
                    <router-link to="signIn" tag="a" class="text-muted">
                      <u>Sign In</u>
                    </router-link>
                  </div>
                </div>
              </b-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import VueSignatureCanvas from "vue-signature-canvas";
import pdf from "vue-pdf";
import message from "../../../message";
import generateUniqueId from "generate-unique-id";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Invite Signers",
  },
  components: {
    pdf,
  },
  data() {
    return {
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      email: "",
      password: "",
      // // password: "vue006",
      userId: "",
      bgsImage: require("@/assets/images/resumeimage.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),

      invitee: {
        contact_info: "",
        name: "",
      },
      isLoading: false,
      signData: false,
      initialData: false,
      linkExpired: false,
      showData: false,
      loader: false,
      numPages: 2,
      pdfsrc: "",
      showEmail: false,
      showSMS: false,
      isOtp: false,
      issendOtp: false,
      isHide: true,
      OTPvalue: "",
      isVerified: false,
      drawType: false,
      textType: false,
      uploadType: false,
      options: {
        penColor: "#c0f",
      },
      baseUrl: "",
      documentname: "",
      document_id: "",
      signingloader: false,
      isSpin: false,
      isEnable: false,
      isSigned: false,
      isIntialEnable: false,
      hideSignatureDetails: false,
      oldurl: "",
      isremovable: false,
      contactNumber: "",
      isEnableFinish: true,
    };
  },
  created() {
    debugger;
    // this.getDocumentDetails(this.$route.query)
    // this.addAuditlogs();
    this.getTextSignDetails(this.$route.query._id);
    this.clearform();
  },
  methods: {
    getCompanyData() {
      this.$apiService
        .postCall("documents")
        .then((res) => {
          debugger
          let rowData = [];
          if (res.apidata.length > 0) {
            rowData = res.apidata;
            rowData.forEach((element) => {
              element.time = element.time
                ? moment(element.time).format("DD/MM/YYYY")
                : "";
            });
          }
          this.rows = rowData;
          this.loader = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
        });
    },
    clearform() {
      this.form = {};
      this.isEdit = false;
      this.submitloader = false;
      this.generateIDloader = false;
      this.$bvModal.hide("modal-sm");
    },
    sendOTP() {
      debugger;
      this.$apiService
        .postCall("sendSMS", {
          contact_info: this.contactNumber,
          _id: this.$route.query._id,
        })
        .then((res) => {
        
          debugger;
          if (res.apidata == "Success") {
            this.$toaster.makeToast("success", message.SUCCESS_MESSAGE);
          }
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.VALIDATION_ERROR);
          console.log(error);
        });
      this.isOtp = true;
      setTimeout(this.resendOTP, 30000);
      this.isHide = false;
    },
    resendOTP() {
      this.issendOtp = true;
    },
    // getDocumentDetails(data) {
    //   debugger;
    //   this.$apiService
    //     .getCall("getDocumentbyId?_id=" + data._id)
    //     .then((res) => {
    //       document.getElementById("inviteeDocument").src =
    //         res.apidata.documentURL.url;
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    getTextSignDetails(_id) {
      this.loader = true;
      this.$apiService
        .postCall("textSignature", { _id: _id })
        .then((res) => {
          if (res.error) {
            this.$toaster.makeToast("danger", message.ERROR_MESSAGE);
            this.loader = false;
            return;
          }
          debugger;
          if (new Date(res.apidata.expiryDate) > new Date()) {
            this.showData = true;
            if (res.apidata.linktype && res.apidata.linktype == "aadhar") {
              this.showSMS = true;
            } else if (
              res.apidata.linktype &&
              res.apidata.linktype == "virtual"
            ) {
              this.showEmail = true;
            } else {
              this.showSMS = false;
              this.showEmail = false;
            }
            if (res.apidata.signed) {
              this.hideSignatureDetails = true;
            }
            this.documentname = res.apidata.documentData.documentURL.name;
            this.document_id = res.apidata.documentData._id;
            this.templateId = res.apidata.documentData.templateId
            this.userName = res.apidata.documentData.name
            this.status = res.apidata.documentData.status
            this.time = moment(res.apidata.documentData.createdAt).format("YYYY-MM-DD");
            this.pdfsrc = res.apidata.url;
            this.signData = res.apidata.drawType;
            this.initialData = res.apidata.textType;
            this.contactNumber = res.apidata.contact_info;
            this.loader = false;
          } else {
            this.linkExpired = true;
            this.loader = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      debugger;
      var requestData = {
        name: this.invitee.name,
        contact_info: this.invitee.contact_info,
        _id: this.$route.query._id,
        uniqueId: generateUniqueId(),
      };
      if (!this.invitee.name || !this.invitee.contact_info) {
        this.$toaster.makeToast("warning", message.INVITEE_INFO);
        return;
      }
      // if (this.invitee.contact_info) {
      //   this.$toaster.makeToast("warning", message.EMAIL_DUPLICATE_ERROR);
      //   return;
      // }
      this.isSpin = true;
      debugger;
      this.$apiService
        .postCall("updateInviteeSigners", requestData)
        .then((res) => {
          debugger;
          if (res.error) {
            this.$toaster.makeToast("warning", message.EMAIL_DUPLICATE_ERROR);
            this.clearform();
            this.isSpin = false;
            return;
          }
          this.$toaster.makeToast("success", message.MAIL_SENT);
          this.clearform();
          this.isSpin = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.VALIDATION_MESSAGE);
        });
      this.isSpin = false;
      this.clearform();
    },
    finishSign(data) {
      var requestData = {
        inviteeId: this.$route.query.inviteeId,
        _id: this.$route.query._id,
      };
      if (data) {
        requestData.type = data;
        requestData.url = this.pdfsrc;
      }
      this.isLoading = true;
      this.initialData = false;
      this.signData = false;
      this.$apiService
        .postCall("finishAndSign", requestData)
        .then((res) => {
          if (res.apidata.msg == "Error") {
            this.$toaster.makeToast("warning", message.SIGNED_ALREADY);
            this.isLoading = false;
            return;
          }
          this.$toaster.makeToast("success", message.INVITEE_DETAILS);
          this.isLoading = false;
          this.getTextSignDetails(this.$route.query._id);
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.isLoading = false;
        });
    },
    aadharSign() {
      if (!this.isVerified) {
        this.$toaster.makeToast("warning", "Verify OTP first");
        return;
      }
      this.finishSign();
    },
    verifyOTP() {
      if (!this.OTPvalue) {
        this.isVerified = false;
        removeSignature();
        this.$toaster.makeToast("warning", "Enter OTP first");
        return;
      }
      this.$apiService
        .postCall("verifyOTP", {
          OTPvalue: this.OTPvalue,
          _id: this.$route.query._id,
        })
        .then((res) => {
          debugger;
          if (res.apidata == "OTP Matched") {
            this.isVerified = true;
            this.$toaster.makeToast("success", "OTP verified");
            this.isOtp = false;
            this.issendOtp = false;
          } else if (res.apidata == "OTP Mismatched") {
            this.isVerified = false;
            this.$toaster.makeToast("warning", "Mismatched OTP");
          }
          console.log(res);
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.VALIDATION_ERROR);
          console.log(error);
        });
      // if (JSON.parse(this.OTPvalue) === 222222) {
      //   this.isVerified = true;
      //   this.$toaster.makeToast("success", "OTP verified");
      //   this.isOtp = false;
      //   this.issendOtp = false;
      // } else {
      //   this.isVerified = false;
      //   this.$toaster.makeToast("warning", "Mismatched OTP");
      // }
    },
    openSignature() {
      debugger;
      this.drawType = true;
      this.textType = false;
      this.$bvModal.show("modal-open-signature");
    },
    openTextSignature() {
      this.drawType = false;
      this.textType = true;
      this.$bvModal.show("modal-open-signature");
    },
    enabledraw() {
      this.drawType = true;
      this.textType = false;
      this.uploadType = false;
    },
    enabletext() {
      this.drawType = false;
      this.textType = true;
      this.uploadType = false;
    },
    enableupload() {
      this.drawType = false;
      this.textType = false;
      this.uploadType = true;
    },
    cancel() {
      this.$bvModal.hide("modal-open-signature");
    },
    create() {
      debugger;
      if (this.drawType) {
        this.signingloader = true;
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        this.baseUrl = data;
        let requestData = {
          baseurl: this.baseUrl,
          documentUrl: this.pdfsrc,
          documentname: this.documentname,
          _id: this.document_id,
        };
        // this.$apiService
        //   .postCall("updateDocument", requestData)
        //   .then((res) => {
        // this.pdfsrc = res.apidata.urlPath;
        this.isEnable = true;
        this.isSigned = true;
        this.isIntialEnable = true;
        this.signingloader = false;
        this.$bvModal.hide("modal-open-signature");
        // })
        // .catch((error) => {
        //   this.signingloader = false;
        //   this.$bvModal.hide("modal-open-signature");
        // });
      } else {
      }
    },
    onDrop(event) {
      this.loader = true;
      const pdfurl = this.oldurl ? this.oldurl : this.pdfsrc;
      let requestData = {
        url: pdfurl,
        x: event.layerX,
        y: event.layerY,
        baseurl: this.baseUrl,
        documentname: this.documentname,
      };
      this.$apiService
        .postCall("getnewPDF", requestData)
        .then((res) => {
          console.log(res);
          this.pdfsrc = res.apidata.urlPath;
          this.oldurl = res.apidata.oldurl;
          this.isremovable = true;
          this.loader = false;
          this.isEnableFinish = false;
        })
        .catch((error) => {
          this.loader = false;
          console.log(error);
        });
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    removeSignature() {
      debugger;
      this.loader = true;
      this.pdfsrc = this.oldurl;
      this.baseUrl = "";
      this.isremovable = false;
      this.isEnable = false;
      this.isEnableFinish = true;
      this.isSigned = false;
      this.loader = false;
    },
    addAuditlogs() {
      debugger;
      this.$apiService
        .postCall("insertAuditLogs", { _id: this.$route.query._id })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#loader {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 999;
}

.button {
  border-width: 0px 0px 0px 4px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  border-image: initial;
  overflow: visible;
  text-decoration: inherit;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px 24px 0px calc(20px);
  height: 56px;
  border-left-style: solid;
  outline: 0px;
  user-select: none;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(26, 26, 26);
  cursor: pointer;
  background: rgb(232, 232, 232);
  border-left-color: #a855f7;
}

.button:hover {
  background-color: rgb(199, 195, 195);
}

.left-modal {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 192px;
  height: 100%;
  background-color: rgb(250, 250, 250);
  padding: 0px;
  margin: 0px;
}

.right-modal {
  flex: 1 1 0%;
  padding: 24px;
  background-color: rgb(255, 255, 255);
}

.full-modal {
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.sig-canvas {
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0);
  position: auto;
  z-index: 9;
}

.canvas {
  display: block;
  background-color: transparent;
  width: 100%;
  height: 100%;
}

.textType {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: rgb(244, 244, 244);
  border-radius: 4px;
}

.drawType {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: rgb(244, 244, 244);
  border-radius: 4px;
}

.uploadType {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: rgb(244, 244, 244);
  border-radius: 4px;
}

.right-top {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  height: 56px;
  padding-bottom: 16px;
}

#signature-text-input {
  font-family: Caveat, cursive;
  font-size: 110px;
  color: rgb(0, 0, 0);
  width: 100%;
  border: none;
  background-color: rgb(244, 244, 244);
}

#signature-text-input::placeholder {
  font: 15px sans-serif;
  text-align: center;
}

.text-signature {
  width: 20rem;
  background: #fafafa;
  letter-spacing: 0.5px;
  border-bottom: hidden;
  border-top: hidden;
  border-right: hidden;
  border-left: groove;
  border-left-color: #a855f7;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgb(26, 26, 26);
}
.text-add {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: rgb(117, 117, 117);
  float: right;
}
.text-Signers {
  width: 20rem;
  letter-spacing: 0.5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
}
.text-verify {
  width: 20rem;
  letter-spacing: 0.5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
}
.text-verifyOtp {
  width: 20rem;
  letter-spacing: 0.5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
}
.text_finish {
  margin-top: 20rem;
  text-align: center;
}
@media only screen and (max-width: 1300px) {
  .verify_OTP {
    display: none;
  }
}
@media only screen and (max-width: 350px) {
  .verify_OTP {
    display: block;
  }
}
@media only screen and (max-width: 2000px) {
  .verifyOtp_hide {
    display: none;
  }
}
@media only screen and (max-width: 770px) {
  .verifyOtp_hide {
    display: block;
    margin: 0 auto;
  }
  .text-verifyOtp {
    width: 22rem;
  }
  .text_finish {
    margin-top: 2rem;
  }
}

.documentsigned {
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2.5rem;
}
</style>
