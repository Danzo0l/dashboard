// import npm libs
import { useState } from "react";
// import local libs
import Account from "../Account";
import GroupList from "../GroupList/idnex";
// import styles and img
import list from "../../assets/img/list.svg";
import logo from "../../assets/img/logotype.svg";
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
      <div className={styles.head}>
        {<a className={styles.logotype} href="/">
          <img src={logo} alt="logo" />
        </a>}
        <button
          onClick={() => setSidebarActive(!sidebarActive)}
          className={styles.btnToogleSidebar}
        >
          <img src={list} alt="list" />
        </button>
      </div>
      <Account/>
      <GroupList count={5} title="Account"/>
      <GroupList count={12} title="Groups"/>
    </aside>
  );
};

export default Sidebar;
