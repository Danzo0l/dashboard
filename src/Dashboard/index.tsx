// import npm libs
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
// import local libs
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

// import styles
import "./Dashboard.scss";

interface Props {
  children: JSX.Element;
}

const Dashboard = (props: Props) => {
  return (
    <div className="root">
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
          <Routes>
            <Route path="" element={<main>{props.children}</main>}></Route>
          </Routes>
          <Toolbar />
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
