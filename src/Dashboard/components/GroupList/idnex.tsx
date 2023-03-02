// import npm libs
import { useState } from "react";
// import styles
import btnExtraxt from "../../assets/img/btnExtract.svg";
import styles from "./GroupList.module.scss";

interface Props {
  title: string;
  count: number;
}

const GroupList = (props: Props) => {
  const [listVisible, setListVisible] = useState<boolean>(false);

  let lis: Array<JSX.Element> = [];

  for (var i = 0; i < props.count; i++) {
    lis.push(<li>Component {i + 1}</li>);
  }

  return (
    <>
      <section>
        <span className={styles.title}>{props.title}</span>
        <button
          onClick={() => setListVisible(!listVisible)}
          className={listVisible ? styles.toggled : ""}
        >
          <img src={btnExtraxt} alt="extract" />
        </button>
      </section>
      <ul className={styles.list}>{listVisible ? lis : null}</ul>
    </>
  );
};

export default GroupList;
