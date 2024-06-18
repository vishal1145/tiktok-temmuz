<template>


    <b-col sm="12" md="12" xl="12" lg="12" >
        <div >
            <div class="d-flex align-items-end row">
                <div class="col-7">
                    <div class="card-body text-nowrap px-0">
                        <h5 class="card-title mb-0">
                            Congratulations {{ this.loginUserName }}! 🎉
                        </h5>

                        <p>
                            Thank you for being awesome and sharing our platform with
                            others! Below is your unique referral link:
                        </p>


                        <div data-v-0307aa70="" 
     class="bg-white text-gray d-flex w-59" 
     style="overflow-wrap: anywhere">
    <a :href="url"
       target="_blank" 
       class="referral-link align-self-center text-blue" 
       
      >
        {{url}}
    </a>
    <p class="px-3 py-1 ml-2 mb-0 ul-cursor--pointer align-self-end" @click="copyUrl">
        <i   class="fa fa-clone text-blue" aria-hidden="true"></i>
    </p>
</div>

                    </div>
                </div>
                <div class="col-5 text-center text-sm-left d-none">
                    <div class="card-body pb-0 px-0 px-md-4">
                        <img src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-advance-sale.png"
                            height="140" alt="view sales" />
                    </div>
                </div>
            </div>
        </div>
    </b-col>

</template>

<script>
export default {
    data() {
        return {
            tiktok_username: '',
            loginUserName: '',
            url: '',
            copied: false
        }
    },
    mounted() {
        // this.$bvModal.show('modal-show-referralUrl');
    },
    created() {
        this.userId = localStorage.getItem('user_id')
        this.role = localStorage.getItem('role')
        this.getProfileDetails()
    },
    methods: {
        getProfileDetails() {
            this.loader = true
            this.$apiService
                .getCall(`auth/user/${this.userId}`)
                .then(res => {
                    console.log(res)
                    if (res.error) {
                        this.loader = false
                        this.$toaster.makeToast('warning', 'Fail to fetch user data')
                    } else {
                        this.loginUserName = res.apidata.data.name + ' ' + res.apidata.data.surname
                        this.tiktok_username = res.apidata.data.tiktok_username;
                        this.loader = false
                        this.url =  'https://' + window.location.host + "/app/sessions/affiliate?u="+ this.tiktok_username
                    }
                })
                .catch(error => {
                    this.loader = false
                    this.$toaster.makeToast('warning', 'Server Error')
                })
        },
        copyUrl() {
      navigator.clipboard
        .writeText(this.url)
        .then(() => {
          this.copied = true;
          this.$emit('notify', 'URL copied to clipboard!');
          this.$toaster.makeToast('success', 'URL copied to clipboard!')
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    }
    }
}



</script>

<style scoped>


.text-blue {
    color: #3b82f6 !important;
}
</style>
