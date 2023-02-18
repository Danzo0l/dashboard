// import local libs
import "./Dashboard.scss";
import Toolbar from "./Toolbar";
// import styles
import Sidebar from "./Sidebar";

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
