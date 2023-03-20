// import npm libs
import { BrowserRouter } from "react-router-dom";
// import local libs
import { DashboardProps } from "./types";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
// import styles
import "./Dashboard.scss";

const Dashboard = (props: DashboardProps) => {
  return (
    <div className="root">
      <BrowserRouter>{props.children}</BrowserRouter>
    </div>
  );
};

export default Dashboard;
export { Sidebar, Toolbar, Content };
