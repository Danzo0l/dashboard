// import npm libs
import { useContext } from "react";
// import local libs
import Account from "../Account";
import Head from "../Head";
import GroupList from "../GroupList/idnex";
import { SidebarVisible } from "../../index";
// import styles and img
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { value, setValue } = useContext(SidebarVisible);

  console.log("Sidebar --> rendered");
  // useMedia
  return (
    <aside
      className={
        value ? styles.sidebar + " " + styles.sidebarActive : styles.sidebar
      }
    >
      <Head
        logo={true}
        icon={true}
        currentState={value}
        setCurrentState={() => setValue(!value)}
      />
      <Account />
      <GroupList count={5} title="Account" />
      <GroupList count={12} title="Groups" />
    </aside>
  );
};

export default Sidebar;
