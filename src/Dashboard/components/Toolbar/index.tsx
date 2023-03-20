// import npm libs
import { useContext } from "react";
// import local libs
import { ToolbarProps } from "../../types";
import Head from "../Head";
import { ToolbarVisible } from "../../index";
// import styles
import styles from "./Toolbar.module.scss";

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
        currentState={value}
        setCurrentState={() => setValue(!value)}
      />
      {props.children}
    </aside>
  ) : (
    <button
      className={styles.toolbarBtn}
      onClick={() => setToolbarActive(true)}
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
          d="M10.7699 19.7747C10.463 20.0751 9.96554 20.0751 9.6587 19.7747L0.230132 10.5439C-0.0767093 10.2435 -0.0767093 9.75647 0.230132 9.45607L9.6587 0.225301C9.96554 -0.0751016 10.463 -0.0751015 10.7699 0.225302C11.0767 0.525706 11.0767 1.01275 10.7699 1.31316L1.89688 10L10.7699 18.6868C11.0767 18.9872 11.0767 19.4743 10.7699 19.7747Z"
        />
      </svg>
    </button>
  );
};

export default Toolbar;
