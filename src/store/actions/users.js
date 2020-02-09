import axios from '@/config/axios';

export default {
  login: async ({ commit }, payload) => {
    try {
      const { data } = await axios.post('/auth/login', payload);
      commit('login', data.data);
    } catch (error) {
      const err = error.response ? error.response.data.message : error.message;
      console.log('error', err);
    }
  },
};
