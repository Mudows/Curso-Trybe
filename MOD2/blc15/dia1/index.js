const Redux = require("redux");

const store = Redux.configureStore();

const reducer = (state = { login: false, email: "" }) => {
  return state;
};
