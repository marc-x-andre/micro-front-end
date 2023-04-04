import { defineStore } from "pinia";

export const useJiraStore = defineStore("jiraStore", {
  state: () => ({
    url: localStorage.getItem("jira_url"),
  }),
  actions: {
    setUrl(url) {
      this.url = url;
      localStorage.setItem("jira_url", url);
    },
  },
});
