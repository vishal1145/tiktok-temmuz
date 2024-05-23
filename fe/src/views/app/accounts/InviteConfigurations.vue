<template>
  <div class="main-content">
    <breadcumb :page="'Invite Configurations'" :folder="'Accounts'" />
    <b-card title="Invite Configurations">
      <b-form>
        <b-row>
          <b-col>
            <span class="section-info">
              Change your Department-wide Reviewer settings here!
            </span>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <div style="margin: 0 auto">
            <div class="spinner spinner-primary mr-3" v-if="isLoading"></div>
          </div>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enable Reviewer role for organization
                <i
                  class="i-Lock-2 ml-1"
                  v-if="isHide"
                ></i
              >
              </span>
              <input
                type="checkbox"
                v-model="inviteData.enableReviewerRoleForOrganisation"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enable Group Invitees for organization<i
                  class="i-Lock-2 ml-1" v-if="isHide"
                ></i
              ></span>
              <input
                type="checkbox"
                v-model="inviteData.enableGroupInviteesForOrganisation"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enable CC notifications for organization<i
                  class="i-Lock-2 ml-1" v-if="isHide"
                ></i>
              </span>
              <input
                type="checkbox"
                v-model="inviteData.enableCcNotificationsForOrganisation"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enable Coordinate Picker role for organization<i
                  class="i-Lock-2 ml-1" v-if="isHide"
                ></i
              ></span>
              <input
                type="checkbox"
                v-model="inviteData.enableCoordinatePickerRoleForOrganisation"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span>Enable Rejection in Signing Journeys</span>
              <input
                type="checkbox"
                v-model="inviteData.enableRejectionInSigningJourneys"
              />
              <span class="slider"></span>
            </label>
          </b-col>
          <!-- <b-col md="12 mb-30">
            <label class="switch switch-primary mr-3">
              <span
                >Enable Contact Book for organization<i
                  class="i-Lock-2 ml-1" v-if="isHide"
                ></i>
              </span>
              <input
                type="checkbox"
                v-model="inviteData.enableContactBookForOrganisation"
              />
              <span class="slider"></span>
            </label>
          </b-col> -->
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="spinner spinner-primary mr-3" v-if="updateloader"></div>
            <b-button
              v-if="!updateloader"
              variant="primary ripple"
              class="col-md-1 mb-3"
              @click="updateStamp()"
              >Update</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import message from "../../../message";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "InviteConfigurations",
  },
  data() {
    return {
      inviteData: {},
      updateloader: false,
      isLoading: false,
      isHide: false
    };
  },
  created() {
    this.getInviteDetails();
  },
  methods: {
    getInviteDetails() {
      this.isLoading = true;
      this.$apiService
        .getCall("getCompanyData")
        .then((res) => {
          if (res.apidata.data.inviteConfigurations) {
            this.inviteData = res.apidata.data.inviteConfigurations;
          }
      this.isLoading = false;

        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
        });
    },

    updateStamp() {
      
      this.updateloader = true;
      var requestData = {
        inviteConfigurations: this.inviteData,
      };
      this.$apiService;
      this.$apiService
        .postCall("invite_Configurations", requestData)
        .then((res) => {
          this.$toaster.makeToast("success", message.EDIT_DOCUMENT_MESSAGE);
          this.updateloader = false;
          this.getInviteDetails();
        });
    },
  },
};
</script>
