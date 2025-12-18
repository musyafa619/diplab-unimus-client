import { useState } from "react";
import styles from "./style.module.css";
import DataMahasiswa from "../../components/DataMahasiswa/DataMahasiswa";

function IdentitasNew() {
  const [search, setSearch] = useState("");

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
            <button>
              <span className="materialSymbolsOutlined">Cari</span>
            </button>
          </div>
          <DataMahasiswa data={{
                      nama: "",
                      semester: 0,
                      telp: "",
                      email: "",
                      jurusan: "",
                      alamat: ""
                  }} />
        </div>
      </div>
    </div>
  );
}

export default IdentitasNew;
