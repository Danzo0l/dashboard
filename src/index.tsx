// import npm lib
import React from "react";
import ReactDOM from "react-dom/client";
// import local lib
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Dashboard, { Sidebar, Toolbar } from "./Dashboard";
import Content from "./Dashboard/components/Content";
import Account from "./Dashboard/components/Account";
import AccountList from "./Dashboard/components/AccountList";
import LinkList from "./Dashboard/components/LinkList/idnex";
import { store } from "./redux/store";
// import styles
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const lsit = [
  { name: "one", path: "/one" },
  { name: "two", path: "/two" },
  { name: "three", path: "/three" },
  { name: "four", path: "/four" },
];
console.log("Index");

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard>
        <Sidebar key={"sidebar"}>
          <Account />
          <AccountList />
        </Sidebar>
        <Content key={"content"}>
          <App />
        </Content>
        <Toolbar key={"toolbar"}>
          <LinkList title="Group 1" items={lsit} />
          <LinkList title="Group 2" items={lsit} />
          <LinkList title="Group 3" items={lsit} />
          <LinkList title="Group 4" items={lsit} />
        </Toolbar>
      </Dashboard>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
