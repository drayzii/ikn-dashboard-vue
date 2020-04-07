export default {
  populateError: ({ commit }, error) => {
    commit('addError', error);
    setTimeout(() => commit('removeError'), 3000);
  },
};
