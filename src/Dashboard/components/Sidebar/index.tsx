// import npm libs
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import local libs
import { SidebarProps } from "../../types";
import Head from "../Head";
import GroupList from "../GroupList/idnex";
// import styles and img
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const sidebarActive = useSelector(
    (state: any) => state.filterSlice.sidebarIsVisible
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
        setCurrentState={(a) => dispatch(setSidebarIsVisible(a))}
      />
      {props.children}
    </aside>
  ) : (
    <div className={styles.wrapper}>
      <button
        className={styles.sidebarBtn}
        onClick={() => setSidebatActive(true)}
      >
        <svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.23013 0.225302C0.536971 -0.0751008 1.03446 -0.0751008 1.3413 0.225302L10.7699 9.45607C11.0767 9.75648 11.0767 10.2435 10.7699 10.5439L1.3413 19.7747C1.03446 20.0751 0.536971 20.0751 0.23013 19.7747C-0.0767101 19.4743 -0.0767101 18.9872 0.23013 18.6868L9.10312 10L0.23013 1.31316C-0.0767101 1.01276 -0.0767101 0.525706 0.23013 0.225302Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
