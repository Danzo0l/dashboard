// import npm libs
import { useState } from "react";
// import local libs
import Head from "../Head";
// import styles
import styles from "./Toolbar.module.scss";
import GroupList from "../GroupList/idnex";

const Toolbar = () => {
  const [toolbarActive, setToolbarActive] = useState<boolean>(true);
  console.log("Toolbar --> rendered");

  return (
    <aside
      className={
        toolbarActive
          ? styles.toolbar + " " + styles.toolbarActive
          : styles.toolbar
      }
    >
      <Head
        logo={false}
        icon={false}
        currentState={toolbarActive}
        setCurrentState={setToolbarActive}
      />
      <GroupList count={8} title="Tools" />
    </aside>
  );
};

export default Toolbar;
