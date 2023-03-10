// import npm libs
import { useState } from "react";
// import styles
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

  // console.log("GroupList --> rendered");

  return (
    <>
      <section>
        <span className={styles.title}>{props.title}</span>
        <button
          onClick={() => setListVisible(!listVisible)}
          className={listVisible ? styles.toggled : ""}
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
      </section>
      <ul className={styles.list}>{listVisible ? lis : null}</ul>
    </>
  );
};

export default GroupList;
