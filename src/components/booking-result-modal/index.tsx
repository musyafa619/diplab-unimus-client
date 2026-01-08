import styles from './style.module.css';
import ikonSukses from '../../assets/images/ikonSukses.png';
import ikonGagal from '../../assets/images/ikonGagal.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'failed';
}

const BookingResultModal = ({ isOpen, onClose, type }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {type === 'success' ? (
          <>
            <img className={styles.ikon} src={ikonSukses} alt="Sukses" />
            <h2>Pendaftaran Berhasil!</h2>
            <p>Silakan cek email anda untuk informasi selanjutnya</p>
            <button className={styles.btnPrimary} onClick={onClose}>
              Beranda
            </button>
          </>
        ) : (
          <>
            <img className={styles.ikon} src={ikonGagal} alt="Gagal" />

            <h2>Pendaftaran Gagal!</h2>
            <p>Silakan coba ulangi proses pendaftaran</p>
            <button className={styles.btnPrimary} onClick={onClose}>
              Beranda
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingResultModal;
