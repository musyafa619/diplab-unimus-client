import styles from './style.module.css';
import LogoDiplab from '../../assets/images/logo.png'
import Icon from '../../assets/images/icon.png'

export const Notifikasi = () => {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.logo}>
        <img src={LogoDiplab} alt="Logo" />
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>Hallo, Norma Sukmawati</p>
        <h2>
          Penyewaan Berhasil<br />
          Disetujui!
        </h2>
      </div>

      <div className={styles.details}>
        <h3>Detail Penyewaan Barang</h3>

        <div className={styles.detailItems}>
          <div className={styles.detailRow}>
            <div className={styles.detailCol}>
              <strong>Barang yang disewa:</strong>
            </div>
            <div className={styles.detailCol}>
              Laptop Acer × 1, Camera Canon × 2, 
              Laptop Lenovo × 1
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailCol}>
              <strong>Tanggal pengambilan:</strong>
            </div>
            <div className={styles.detailCol}>12 Oktober 2025</div>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.divider}></div>

        <div className={styles.icon}>
          <img src={Icon} alt="icon" />
        </div>

        <div className={styles.content}>
          <strong>Informasi Pengambilan</strong>
          <br />
          Lokasi pengambilan di ruang B209, bertemu dengan admin (Ilham).
          Sebelum ambil bisa menghubungi admin terlebih dahulu di
          <b> 089518953020</b>.
        </div>
      </div>
    </div>
  )
}
