import styles from "./style.module.css";
import LaptopImage from "../../assets/images/laptop.png";

export const DetailBarang = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        
        {/* BUTTON CLOSE */}
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <img
          src={LaptopImage}
          alt="Laptop Acer"
          className={styles.image}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Laptop Acer</h3>
          <p className={styles.subtitle}>Acer Swift Lite 14 Air</p>

          <p className={styles.description}>
            Deskripsi : Acer Swift Lite 14 Air Edition adalah laptop ultra-ringan
            dengan bobot hanya sekitar 999 gram, dirancang untuk pengguna yang
            mengutamakan mobilitas tinggi tanpa mengorbankan performa.
            Laptop ini ditenagai oleh Intel Core Ultra 5 115U,
            prosesor generasi terbaru yang didukung teknologi Intel AI Boost
            untuk menunjang performa harian serta fitur kecerdasan buatan (AI).
          </p>
          
          <p className={styles.color}>
            <strong>Warna :</strong> Hitam
          </p>
        </div>
      </div>
    </div>
  );
};
