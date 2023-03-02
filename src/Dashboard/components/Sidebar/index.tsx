// import npm libs
import { useState } from "react";
// import local libs
import Account from "../Account";
import Head from "../Head";
import GroupList from "../GroupList/idnex";
// import styles and img
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
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
        setCurrentState={setSidebarActive}
      />
      <Account />
      <GroupList count={5} title="Account" />
      <GroupList count={12} title="Groups" />
    </aside>
  );
};

export default Sidebar;
