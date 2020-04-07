export default {
  addError(state, error) {
    state.error = error;
  },
  removeError(state) {
    state.error = '';
  },
};
