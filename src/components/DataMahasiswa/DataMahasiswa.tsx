import styles from "./style.module.css";

type Mahasiswa = {
  nama: string;
  semester: number;
  telp: string;
  email: string;
  jurusan: string;
  alamat: string;
};

interface Props {
  data: Mahasiswa;
  setShowModal: (val: boolean) => void;
}

function DataMahasiswa({ data, setShowModal }: Props) {
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
          <span className={styles.label}>Semester</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.semester}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>No. Telepon</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.telp}</span>
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

        <div className={styles.row}>
          <span className={styles.label}>Alamat</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}>{data.alamat}</span>
        </div>

        <div className={styles.inputKeterangan}>
          <textarea id="keterangan" placeholder="Keterangan" />
        </div>
      </div>

      <div className={styles.agreement}>
        <input
          className={styles.checkboxAgreement}
          type="checkbox"
          id="setuju"
        />
        <label htmlFor="setuju" className={styles.labelAgreement}>
          Jika ada pelanggaran, sistem mencatat sanksi administrasi ataupun
          akademik sesuai aturan laboratorium informatika. Sistem mencatat
          kondisi barang yang rusak atau hilang serta menerapkan aturan sanksi
          bagi mahasiswa yang bersangkutan.
        </label>
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        onClick={() => setShowModal(true)}
      >
        Ajukan Peminjaman
      </button>
    </>
  );
}

export default DataMahasiswa;

