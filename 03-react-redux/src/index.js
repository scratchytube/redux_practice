import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// use the App and store from the exercises folder to check your work
import App from "./exercises/components/App";
import store from "./exercises/redux/store";

// use the App and store from the solutions folder to see a working example
// import App from "./solutions/components/App";
// import store from "./solutions/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
