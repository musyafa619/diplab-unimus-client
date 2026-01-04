import { useState } from "react";
import styles from "./style.module.css";
import DataMahasiswa from "../../components/DataMahasiswa/DataMahasiswa";
import Modal from "../../components/Modal/Modal";

function IdentitasNew() {
  const [search, setSearch] = useState("");
  const [showDataMahasiswa, setShowDataMahasiswa] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className={styles["stepHeader"]}>
        <div className={styles["stepWrapper"]}>
          <div className={styles["step"]}>1</div>
          Pilih Tanggal
        </div>
        <div className={styles["stepWrapper"]}>
          <div className={styles["step"]}>2</div>
          Pilih Barang
        </div>
        <div className={styles["stepWrapper"]}>
          <div className={styles["step"]}>3</div>
          Identitas
        </div>
      </div>

      <div className={styles["container"]}>
        <h2 className={styles["formTitle"]}>Masukan Data Mahasiswa</h2>
        <p className={styles["formSubtitle"]}>
          Masukan NIM anda untuk menampilkan data mahasiswa
          <p>secara otomatis</p>
        </p>

        {/* CONTAINER */}
        <div className={styles.container}>
          {/* SEARCH */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Masukan NIM anda"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={() => setShowDataMahasiswa(true)}>
              <span className="materialSymbolsOutlined">Cari</span>
            </button>
          </div>
          {search.length > 0 && showDataMahasiswa && (
            <DataMahasiswa
              data={{
                nama: "Dummy",
                semester: 5,
                telp: "08123456789",
                email: "test@gmail.com",
                jurusan: "Informatika",
                alamat: "Kedungmundu Semarang",
              }}
              setShowModal={setShowModal}
            />
          )}
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            type="sukses"
          />
        </div>
      </div>
    </div>
  );
}

export default IdentitasNew;
