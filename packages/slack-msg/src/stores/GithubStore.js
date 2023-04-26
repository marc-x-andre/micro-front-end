import { defineStore } from "pinia";
import { Octokit } from "@octokit/core";

const requestParams = {
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

export const useGithubStore = defineStore("githubStore", {
  state: () => ({
    octokit: undefined,
    token: undefined,
    showModal: false,
    prInfo: undefined,
    username: undefined,
    loading: false,
    error: false,
  }),
  actions: {
    initStore() {
      const previousToken = localStorage.getItem("gh_token");
      if (previousToken) {
        this.setToken(previousToken);
      }
    },
    openModal() {
      this.showModal = true;
    },
    setToken(token) {
      localStorage.setItem("gh_token", token);
      this.token = token;
      this.octokit = new Octokit({ auth: token });
      this.getUserInfo();
    },
    getUserInfo() {
      this.loading = true;
      this.error = false;
      this.octokit
        .request("GET /user", requestParams)
        .then((response) => {
          this.username = response.data.login;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    setPRInfo(url) {
      this.error = false;
      let simplifyUrl = url.replace("https://", "");
      simplifyUrl = simplifyUrl.replace("http://", "");
      const sections = simplifyUrl.split("/");
      if (sections[4]) {
        this.loading = true;
        this.octokit
          .request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
            owner: sections[1],
            repo: sections[2],
            pull_number: sections[4],
            ...requestParams,
          })
          .then((response) => {
            this.prInfo = {
              ticket: response.data.head.ref.split("/")[1],
              branch: response.data.base.ref,
              title: response.data.title,
              url,
            };
          })
          .catch(() => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.error = true;
        this.prInfo = undefined;
      }
    },
  },
});
