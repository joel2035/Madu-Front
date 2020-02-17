import axios from "axios";

export default {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      console.debug("login");// eslint-disable-line
      commit("auth_request");
      axios({
        url: `${window.config.api_root_url}login/`,
        data: user,
        method: "POST"
      })
        .then(resp => {
          console.debug(resp); // eslint-disable-line
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", token, user);
          resolve(resp);
        })
        .catch(err => {
          console.debug(err); // eslint-disable-line
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  }
};
