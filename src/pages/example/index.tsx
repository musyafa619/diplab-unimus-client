import DiplabLogo from "../../assets/images/logo.png";
import styles from "./style.module.css";

function Example() {
  return (
    <div className={styles.container}>
      <div>
        <img src={DiplabLogo} className={styles.logo} alt="Diplab Logo" />
      </div>
      <p className={styles.comingSoon}>Coming soon...</p>
    </div>
  );
}

export default Example;
