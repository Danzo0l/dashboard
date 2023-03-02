// import npm libs
import { SetStateAction } from "react";
// import local libs
// import styles
import styles from "./Head.module.scss";
import layers from "../../assets/img/layers.svg";
import list from "../../assets/img/list.svg";
import logo from "../../assets/img/logotype.svg";

interface Props {
  logo: boolean;
  icon: boolean; // TRUE - list FALSE - layers
  currentState: boolean;
  setCurrentState: React.Dispatch<SetStateAction<boolean>>;
}

const Head = (props: Props) => {
  return (
    <div className={styles.head}>
      {props.logo ? <img src={logo} alt="btn-icon" /> : <></>}
      <button
        onClick={() => props.setCurrentState(!props.currentState)}
        className={styles.btnToogleSidebar}
      >
        <img src={props.icon ? list : layers} alt="btn-icon" />
      </button>
    </div>
  );
};

export default Head;
