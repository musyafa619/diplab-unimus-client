import styles from './style.module.css';
import SewaBackground from '../../assets/images/sewa.png';
import LogoDiplab from '../../assets/images/logo.png';
import { useNavigate } from 'react-router';
import { useBookingStore } from '@/store/itemStore';
import { useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const { reset } = useBookingStore((state) => state);

  useEffect(() => {
    reset();
  }, [reset]);
  return (
    <div>
      <header>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={LogoDiplab} alt="Logo" />
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h2>
              Sewa peralatan lab informatika kini lebih mudah dan efisien.
            </h2>
            <p>
              Tanpa antre dan tanpa ribet, kini kamu bisa mengurus semuanya
              hanya dengan beberapa klik lewat Diplab. Proses yang dulu memakan
              waktu, sekarang jadi super praktis dan efisien!
            </p>
          </div>
          <button
            onClick={() => navigate('/select-dates')}
            className={styles.btnPrimary}
          >
            PINJAM SEKARANG
          </button>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.infoWrapper}>
          <h3>Sewa tanpa ribet</h3>

          <div className={styles.infoContent}>
            <div className={styles.infoImage}>
              <img src={SewaBackground} alt="Ilustrasi sewa" />
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.number}>1</div>
                <div className={styles.text}>
                  <h4>Pilih barang</h4>
                  <p>Pilih barang sesuai kebutuhan anda</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.number}>2</div>
                <div className={styles.text}>
                  <h4>Pilih tanggal</h4>
                  <p>Silakan pilih tanggal mulai...</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.number}>3</div>
                <div className={styles.text}>
                  <h4>Identitas</h4>
                  <p>Lengkapi data diri anda...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
