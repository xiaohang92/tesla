// authService.js
const isLoggedIn = () => {
  return Boolean(localStorage.getItem("userToken"));
};

export { isLoggedIn };
