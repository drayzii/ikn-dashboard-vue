export default {
  login: (state, {
    token, firstName, lastName, type,
  }) => {
    localStorage.setItem('IKIRINGO_TOKEN', token);
    state.user = { firstName, lastName, type };
  },
};
