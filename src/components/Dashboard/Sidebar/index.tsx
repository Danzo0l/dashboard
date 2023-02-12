// import npm libs
import { useState } from "react";
// import styles
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
      <h3>Sidebar</h3>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
      <p>block</p>
    </aside>
  );
};

export default Sidebar;
