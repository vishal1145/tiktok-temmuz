<template>
  <div>
    <router-view></router-view>

    <customizer></customizer>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    themeName() {
      return this.getThemeMode.dark ? "dark-theme" : " ";
    },
    rtl() {
      return this.getThemeMode.rtl ? "rtl" : " ";
    }
  },
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: " TikTok Ajans TikTok Türkiye Resmi Ajansı - Temmuz Ajans",
      description:"TikTok Ajans Temmuz Agency - TikTok LIVE Türkiye Resmi Ajansı'na dahil olan yayıncılar, kazançlarını ve izlenmelerini 10 kata kadar yükseltiyor.",
      // all titles will be injected into this template
      titleTemplate: "TikTok Ajans TikTok Türkiye Resmi Ajansı - Temmuz Ajans ",
      bodyAttrs: {
        class: [this.themeName, "text-left"]
      },
      htmlAttrs: {
        dir: this.rtl
      }
    };
  }
};
</script>

<style>
</style>


