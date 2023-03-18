// import npm libs
import { useState } from "react";
// import local libs
import { SidebarProps } from "../../types";
import Head from "../Head";
// import styles and img
import styles from "./Sidebar.module.scss";

const Sidebar = (props: SidebarProps) => {
  const [sidebarActive, setSidebatActive] = useState(true);
  // You can use other methods of change state
  // use var names: sidebarActive: boolean, setSidebatActive(boolean)

  console.log("Sidebar --> rendered");
  // useMedia
  return sidebarActive ? (
    <aside className={styles.sidebar + " " + styles.sidebarActive}>
      <Head
        logo={true}
        icon={true}
        currentState={sidebarActive}
        setCurrentState={setSidebatActive}
      />
      {props.children}
    </aside>
  ) : (
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
  );
};

export default Sidebar;
