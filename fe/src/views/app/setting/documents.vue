<template>
  <div class="main-content">
    <breadcumb :page="'Setting'" :folder="'Documents'" />
    <b-card>
      <b-form>
        <div class="ml-4">
          <div class="row">
            <h3 class="text-info auth_tokens">ENFORCE INVITATION EXPIRY</h3>
            <!-- <i class="i-Upload ml-3 mt-2"></i>
            <span class="learn_text ml-2 mt-2">Learn More</span> -->
          </div>

          <b-col md="6" xl="4" class="mb-30">
            <div class="row">
              <b-list-group>
                <b-list-group-item
                  ><label class="radio radio-info">
                    <input
                      type="radio"
                      name="radio"
                      ref="fourtyFive"
                      value="45"
                      v-bind:checked="enforceInvitationExpiry == '45'"
                    />
                    <span>Expire after 45 minutes of sending</span>
                    <span class="checkmark"></span> </label
                ></b-list-group-item>
                <b-list-group-item
                  ><label class="radio radio-info">
                    <input
                      type="radio"
                      name="radio"
                      ref="EOD"
                      value="EOD"
                      v-bind:checked="enforceInvitationExpiry == 'EOD'"
                    />
                    <span>Expire at the end of day of sending</span>
                    <span class="checkmark"></span> </label
                ></b-list-group-item>
                <b-list-group-item>
                  <div style="display: flex; align-item: center">
                    <label class="radio radio-info">
                      <input
                        type="radio"
                        name="radio"
                        @click="isDgLimit()"
                        ref="XDAY"
                        value="XDAY"
                        v-bind:checked="enforceInvitationExpiry == 'XDAY'"
                      />
                      <span class="checkmark"></span>
                    </label>
                    <span
                      >Expire after
                      <input
                        min="1"
                        max="365"
                        type="number"
                        v-model="customValue"
                        @input="dgLimit()"
                        :disabled="isEnable"
                        :class="{
                          invalid: customValue < 1 || customValue > 365,
                        }"
                      />
                      days of sending</span
                    >
                  </div>
                  <p style="font-size: 10px; margin-left: 2rem">
                    The number of days can range from 1 to 365
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  ><label class="radio radio-info">
                    <input
                      type="radio"
                      name="radio"
                      ref="DISABLE"
                      value="DISABLE"
                      v-bind:checked="enforceInvitationExpiry == 'DISABLE'"
                    />
                    <span>Disable enforcment of document expiry</span>
                    <p style="font-size: 10px">
                      Document expiry can be set during the sending journey and
                      will be 10 days by default
                    </p>
                    <span class="checkmark"></span> </label></b-list-group-item
              ></b-list-group>
            </div>
          </b-col>
          <div style="text-align: center">
            <div class="spinner spinner-primary mr-3" v-if="isLoading"></div>
          </div>
          <hr />
          <div>
            <label class="switch switch-info mr-3">
              <div class="row">
                <h3 class="text-info auth_tokens">AUTO SAVE SIGNED DOCUMENT</h3>
                <!-- <i class="i-Upload ml-3 mt-2"></i>
                <span class="learn_text ml-2 mt-2">Learn More</span> -->
              </div>
              <p class="ml-2">
                Automatically save documents sent to you in your Leegality
                account under "my documents".
              </p>
              <input
                type="checkbox"
                checked
                v-model="eDocumentData.autoSaveSignedDocument"
              />
              <span class="slider"></span>
            </label>
            <hr />
            <label class="switch switch-info mr-3">
              <div class="row">
                <h3 class="text-info auth_tokens">
                  SEND INVITATION REMINDERS AND NOTIFICATION
                </h3>
                <!-- <i class="i-Upload ml-3 mt-2"></i>
                <span class="learn_text ml-2 mt-2">Learn More</span> -->
              </div>
              <p class="ml-2">
                Send Email/SMS reminders and notifications to invitees by
                default.
              </p>
              <input
                type="checkbox"
                checked
                v-model="eDocumentData.sendInvitationReminderAndNotification"
              />
              <span class="slider"></span>
            </label>
          </div>
          <b-row>
            <b-col>
              <div
                class="spinner spinner-primary mt-3 ml-4"
                v-if="updateloader"
              ></div>
              <b-button
                v-if="!updateloader"
                variant="primary ripple"
                class="col-md-1 mt-3 ml-4"
                @click="updateDocumentData()"
                >Update</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    title: "Document",
  },
  data() {
    return {
      loading: true,
      updateloader: false,
      eDocumentData: {
        autoSaveSignedDocument: false,
        sendInvitationReminderAndNotification: false,
      },
      isLoading: false,
      enforceInvitationExpiry: "",
      customValue: 0,
      detectionDays: "",
      isEnable: true,
      enforceInvitationExpirys: false
    };
  },

  created() {
    this.getdocumentDetails();
  },
  methods: {
    isDgLimit() {
      debugger
      if (this.enforceInvitationExpirys) {
        this.customValue = "";
        this.isEnable = true;
      }
      this.isEnable = false;
    },
    dgLimit() {
      debugger;
      const my_floar = parseInt(this.customValue);
      const max_char = 365;
      const min_char = 0;
      if (my_floar > max_char) {
        this.customValue = 0;
      }
      if (min_char > my_floar) {
        this.customValue = 0;
      }
    },
    getdocumentDetails() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if (res.apidata.data.autoSaveSignedDocument) {
            this.eDocumentData.autoSaveSignedDocument =
              res.apidata.data.autoSaveSignedDocument;
          }
          if (res.apidata.data.sendInvitationReminderAndNotification) {
            this.eDocumentData.sendInvitationReminderAndNotification =
              res.apidata.data.sendInvitationReminderAndNotification;
          }
          this.enforceInvitationExpiry = res.apidata.data
            .enforceInvitationExpiry
            ? res.apidata.data.enforceInvitationExpiry
            : "";
          if (
            this.enforceInvitationExpiry &&
            this.enforceInvitationExpiry == "XDAY"
          ) {
            this.customValue = res.apidata.data.customValue
              ? res.apidata.data.customValue
              : 0;
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },
    updateDocumentData() {
      debugger;
      this.updateloader = true;
      if (this.$refs.fourtyFive.checked) {
        this.enforceInvitationExpiry = "45";
      } else if (this.$refs.EOD.checked) {
        this.enforceInvitationExpiry = "EOD";
      } else if (this.$refs.XDAY.checked) {
        this.enforceInvitationExpiry = "XDAY";
      } else {
        this.enforceInvitationExpiry = "DISABLE";
      }
      var requestData = {
        autoSaveSignedDocument: this.eDocumentData.autoSaveSignedDocument,
        sendInvitationReminderAndNotification:
          this.eDocumentData.sendInvitationReminderAndNotification,
        enforceInvitationExpiry: this.enforceInvitationExpiry,
        customValue: this.customValue ? this.customValue : 0,
        detectionDays: this.customValue,
      };
      this.$apiService.postCall("editDocument", requestData).then((res) => {
        this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);
        this.updateloader = false;
      });
    },
  },
};
</script>
<style scoped>
.enforce-invit {
  border-radius: 11px;
  border: 1px solid;
  padding: 20px;
  max-width: 300px;
}
.auth_tokens {
  font-size: 18px;
  color: #1f7eae;
  font-weight: bolder;
  margin-left: 1.5rem;
}
.wnforce {
  font-size: 18px;
  /* color: #1f7eae; */
  font-weight: bolder;
  margin-left: 1.5rem;
}
.text-upod {
  margin-top: -30px;
  margin-left: 275px;
}
.learn_text {
  font-size: 8px;
  color: #1f7eae;
}
</style>
