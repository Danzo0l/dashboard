// import npm libs
import { useState } from "react";
// import local libs
// import styles
import layers from '../../assets/img/layers.svg';
import styles from "./Toolbar.module.scss";
import GroupList from "../GroupList/idnex";

const Toolbar = () => {
  const [toolbarActive, setToolbarActive] = useState<boolean>(true);
  
  return (
    <aside className={toolbarActive
      ? styles.toolbar + " " + styles.toolbarActive
      : styles.toolbar}>
      <div className={styles.head}>
        <button
          onClick={() => setToolbarActive(!toolbarActive)}
          className={styles.btnToogleSidebar}
        >
          <img src={layers} alt="layers" />
        </button>
      </div>
      <GroupList count={8} title="Tools"/>
    </aside>
  );
};

export default Toolbar;
