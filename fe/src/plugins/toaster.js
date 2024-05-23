export default {
    install(Vue) {
        let app = new Vue({
            methods: {
                async makeToast(variant = null, msg) {
                    this.$bvToast.toast(msg, {
                        title: ` ${variant || "default"}`,
                        variant: variant,
                        solid: true,
                    });
                }
            }
        });
        Vue.prototype.$toaster = app;
    }
};