// import npm libs
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
// import local libs
import Account from "../Account";
import Head from "../Head";
import GroupList from "../GroupList/idnex";
import { BarContext, SidebarVisible, ToolbarVisible } from "../../index";
// import styles and img
import styles from "./Sidebar.module.scss";
import { setSidebarIsVisible } from "../../../redux/slices/dashboardSlice";

const Sidebar = () => {

  const {value, setValue} = useContext(SidebarVisible)

  const sidebarActive = useSelector(
    (state: any) => state.dasboardSlice.sidebarIsVisible
  );
  const dispatch = useDispatch();

  console.log("Sidebar --> rendered");
  // useMedia
  return (
    <aside
      className={
        sidebarActive
          ? styles.sidebar + " " + styles.sidebarActive
          : styles.sidebar
      }
    >
      <Head
        logo={true}
        icon={true}
        currentState={sidebarActive}
        setCurrentState={(a) => setValue(false)}
      />
      <Account />
      <GroupList count={5} title="Account" />
      <GroupList count={12} title="Groups" />
    </aside>
  );
};

export default Sidebar;
