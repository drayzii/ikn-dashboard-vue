import axios from '@/config/axios';

const token = `Bearer ${localStorage.getItem('IKIRINGO_TOKEN')}`;
const config = {
  headers: {
    Authorization: token,
  },
};

export default {
  async uploadImages({ commit, dispatch }, data) {
    try {
      const result = await axios.post('/images', data, config);
      commit('addImagesToState', result.data);
      commit('isSaving', false);
    } catch (err) {
      commit('isSaving', false);
      const error = err.response ? err.response.data.message : err.message;
      dispatch('populateError', error);
    }
  },
  async getImages({ commit, dispatch }) {
    try {
      const result = await axios.get('/images', config);
      commit('addImagesToState', result.data);
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch('populateError', error);
    }
  },

  async deleteImages({ commit, dispatch }, data) {
    try {
      await axios.put('/images', { id: data }, config);
      commit('removeImagesfromState', data);
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch('populateError', error);
    }
  },
};
