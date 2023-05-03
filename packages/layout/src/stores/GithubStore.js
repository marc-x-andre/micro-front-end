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
  },
});
