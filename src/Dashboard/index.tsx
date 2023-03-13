// import npm libs
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
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
        <Sidebar />
        <main>
          <Routes>
            <Route path="" element={props.children}></Route>
          </Routes>
        </main>
        <Toolbar />
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
