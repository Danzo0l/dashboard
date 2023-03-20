// import npm libs
// import local libs
import { useTheme } from "../../../hooks/useTheme";
// import styles
import styles from "./Settings.module.scss";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.Settings}>
      <h3>Settings</h3>
      <button style={{ color: "#121212" }} onClick={() => setTheme(!theme)}>
        Toogle theme
      </button>
    </div>
  );
};

export default Settings;
