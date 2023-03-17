// import npm libs
import { useContext } from "react";
// import local libs
import Head from "../Head";
import { ToolbarVisible } from "../../index";
// import styles
import styles from "./Toolbar.module.scss";
import GroupList from "../GroupList/idnex";

const Toolbar = () => {
  const { value, setValue } = useContext(ToolbarVisible);
  console.log("Toolbar --> rendered");

  return (
    <aside
      className={
        value ? styles.toolbar + " " + styles.toolbarActive : styles.toolbar
      }
    >
      <Head
        logo={false}
        icon={false}
        currentState={value}
        setCurrentState={() => setValue(!value)}
      />
      <GroupList count={8} title="Tools" />
    </aside>
  );
};

export default Toolbar;
