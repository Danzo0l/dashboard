// import npm libs
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import local libs
import { DashboardProps } from "./types";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
// import styles
import "./Dashboard.scss";
import { useTheme } from "../hooks/useTheme";

const Dashboard = (props: DashboardProps) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(true);
  });

  console.log(window.getComputedStyle(document.body).content);

  return (
    <div className="root">
      <BrowserRouter>{props.children}</BrowserRouter>
    </div>
  );
};

export default Dashboard;
export { Sidebar, Toolbar, Content };
