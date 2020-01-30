export default {
  status: '',
  token: localStorage.getItem('token') || '',
  currentUser: {
    uid: "",
    authenticated: true
  }
};
