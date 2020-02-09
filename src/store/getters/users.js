export default {
  isLoggedIn: state => state.token || localStorage.IKIRINGO_TOKEN,
  authStatus: state => state.authStatus,
};
