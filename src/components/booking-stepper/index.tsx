// import { useLocation } from 'react-router';
import styles from './style.module.css';

export default function BookingStepper() {
  // const { pathname } = useLocation();

  return (
    <div className={styles.stepHeader}>
      <div className={styles.stepActive}>
        <div className={`${styles.stepWrapper}`}>
          <div className={styles.step}>1</div>
          Pilih Tanggal
        </div>
      </div>
      <div className={`${styles.stepWrapper}`}>
        <div className={styles.step}>2</div>
        Pilih Barang
      </div>

      <div className={`${styles.stepWrapper}`}>
        <div className={styles.step}>3</div>
        Identitas
      </div>
    </div>
  );
}
