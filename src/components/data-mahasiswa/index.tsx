import styles from './style.module.css';

type Mahasiswa = {
  nama: string;
  phoneNumber: string;
  email: string;
  jurusan: string;
};

interface Props {
  data: Mahasiswa;
}

function DataMahasiswa({ data }: Props) {
  return (
    <>
      <div className={styles.dataMahasiswa}>
        <h3 className={styles.title}>Data Mahasiswa</h3>

        <div className={styles.row}>
          <span className={styles.label}>Nama Lengkap</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.nama}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>No. Telepon</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.phoneNumber}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Email</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.email}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Jurusan</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.jurusan}</span>
        </div>
      </div>
    </>
  );
}

export default DataMahasiswa;
