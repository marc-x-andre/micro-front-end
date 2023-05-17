import { defineStore } from "pinia";

export const useViewerStore = defineStore("viewerStore", {
  state: () => ({
    url: "",
    json: { your: "json" },
    iframeUrl: "",
    param: "param",
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
    },
  },
});
