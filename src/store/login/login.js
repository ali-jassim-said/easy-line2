import { log } from "@/api/auth";
import router from "@/router";

export const login = {
  state: {
    
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    successLogin(state, res) {
      localStorage.setItem("token", res);
      let token = localStorage.getItem("token");
      if (token) {
        router.push({ name: "admin" });
      }
    },
    failedLogin(state, err) {
      console.log(err);
    }
  },
  actions: {
    doLogin({ state, commit }) {
      commit("setLoading", true);

      log()
        .then((res) => {
          if (res === null) {
            commit("failedLogin", res);
            console.log(state);
          }
          commit("successLogin", res.data);
        })
        .catch((error) => {
          commit("failedLogin", error);
        })
        .finally(() => {
          // Set loading state back to false after login process completes
          commit("setLoading", false);
        });
    }
  }
};
