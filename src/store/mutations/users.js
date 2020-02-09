export default {
  login_success: (state, token, user) => {
    localStorage.setItem('IKIRINGO_TOKEN', token);
    state.authStatus = 'success';
    state.user = user;
  },
  login_error: (state) => {
    state.authStatus = 'error';
  },
};
