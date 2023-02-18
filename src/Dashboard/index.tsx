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
      <Sidebar />
      <main>{props.children}</main>
      <Toolbar />
    </div>
  );
};

export default Dashboard;
