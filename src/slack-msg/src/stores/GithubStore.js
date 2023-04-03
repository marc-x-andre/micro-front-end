import { defineStore } from "pinia";
import { Octokit } from "@octokit/core";

export const useGithubStore = defineStore("githubStore", {
  state: () => ({
    octokit: new Octokit({ auth: localStorage.getItem("gh_token") }),
    token: localStorage.getItem("gh_token"),
    showModal: false,
    prInfo: {},
  }),
  actions: {
    setToken(v) {
      this.octokit.value = new Octokit({
        auth: localStorage.getItem("gh_token"),
      });
      localStorage.setItem("gh_token", v);
      this.token = v;
    },
    openModal() {
      this.showModal = true;
    },
    setPRInfo() {
      this.octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
        owner: "OWNER",
        repo: "REPO",
        pull_number: "PULL_NUMBER",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      // /repos/{owner}/{repo}/pulls/{pull_number}
    },
  },
});
