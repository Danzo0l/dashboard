// import npm lib
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
// import local lib
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Dashboard from "./Dashboard";
import { store } from "./redux/store";
// import styles
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("Index");
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard>
        <App />
      </Dashboard>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
