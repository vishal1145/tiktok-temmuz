<template>
  <div class="full-body">
    <div class="download-icon">
      <a :href="pdfsrc">
        <span>
          <i class="fa fa-download fa-2x"></i>
        </span>
      </a>
    </div>
    <div class="left-half">
      <pdf
        style="width: 80%; margin: auto; margin-top: 100px"
        v-for="i in numPages"
        :key="i"
        :page="i"
        :src="pdfsrc"
      ></pdf>
    </div>
    <div class="right-half">
      <hr />
      <b-row class="md-6">
        <b-col class="md-6"> Document ID </b-col>
        <b-col class="md-6"> Document ID Value </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col class="md-6"> Name </b-col>
        <b-col class="md-6"> Name Value </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col class="md-6"> Last Activity Date </b-col>
        <b-col class="md-6"> Date Value </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col class="md-6"> Status </b-col>
        <b-col class="md-6"> Status Value </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col class="md-6"> Internal Reference No. </b-col>
        <b-col class="md-6"> Reference Value </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col class="md-6"> Actions </b-col>
        <b-col class="md-6"> Actions Icon </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Details",
  },
  components: {
    pdf,
  },
  data() {
    return {
      numPages: 12,
      pdfsrc: "",
    };
  },
  created() {
    this.getDocumentData();
  },
  methods: {
    getDocumentData() {
      this.loader = true;
      this.$apiService
        .getCall("getDocument?documentId=" + this.$route.query.documentId)
        .then((res) => {
          let rowData = [];
          if (res.apidata.length > 0) {
            rowData = res.apidata[0];
            this.rows = rowData;
            this.pdfsrc = rowData.documentURL?rowData.documentURL.url:"";
            this.loader = false;
          }
        })
        .catch((error) => {
          this.$toaster.makeToast("warning", message.ERROR_MESSAGE);
          this.loader = false;
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
  z-index: 10;
}
.icon-size {
  font-size: 30px;
}

.right-half {
  width: 50%;
  position: absolute;
  right: 70px;
  margin-top: 5rem;
}

.left-half {
  width: 50%;
  position: absolute;
  right: 700px;
}

.full-body {
  display: flex;
  max-width: 500px;
}

.download-icon {
  position: absolute;
  right: 60%;
}
</style>
