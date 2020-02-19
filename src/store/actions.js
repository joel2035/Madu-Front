import axios from "axios";
export default {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      console.debug("login"); // eslint-disable-line
      commit("auth_request");
      console.debug(user); // eslint-disable-line
      axios({
        url: `${window.config.api_root_url}login/`,
        data: user,
        method: "POST"
      })
        .then(resp => {
          console.debug(resp); // eslint-disable-line
          const token = resp.data.accessToken;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("auth_success", token);
          resolve(resp);
        })
        .catch(err => {
          console.debug(err); // eslint-disable-line
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  fetchData(context, payload) {
    axios.get(
      `${window.config.api_root_url}${payload.modelName}/`,
      payload.filters
    );
  },
  postData(context, payload) {
    axios.post(payload.url, payload.params);
  },
  // createData(context, payload) {

  // }
};
