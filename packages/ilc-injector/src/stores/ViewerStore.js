import { defineStore } from "pinia";

export const useViewerStore = defineStore("viewerStore", {
  state: () => ({
    json: { your: "json" },
    url: localStorage.getItem("ilc-injector-url"),
    iframeUrl: localStorage.getItem("ilc-injector-iframeUrl"),
    param: localStorage.getItem("ilc-injector-param"),
  }),
  actions: {
    refreshIframe() {
      let stringy;
      if (typeof this.json === "string") {
        stringy = JSON.stringify(JSON.parse(this.json));
      } else {
        stringy = JSON.stringify(this.json);
      }
      this.iframeUrl = `${this.url}?${this.param}=${btoa(stringy)}`;
      document.getElementById("iframe-ilc").src = this.iframeUrl;

      localStorage.setItem("ilc-injector-url", this.url);
      localStorage.setItem("ilc-injector-iframeUrl", this.iframeUrl);
      localStorage.setItem("ilc-injector-param", this.param);
    },
  },
});
