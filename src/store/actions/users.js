import axios from '@/config/axios';

export default {
  login: async ({ commit }, payload) => new Promise((resolve, reject) => {
    commit('auth_request');
    axios.post('/auth/login', payload)
      .then((resp) => {
        const {
          data: {
            data: {
              token, firstName, lastName, type,
            },
          },
        } = resp;
        localStorage.setItem('token', token);
        commit('login_success', token, { firstName, lastName, type });
        resolve(resp);
      })
      .catch((err) => {
        commit('login_error');
        const error = err.response ? err.response.data.message : err.message;
        reject(error);
      });
  }),
};
