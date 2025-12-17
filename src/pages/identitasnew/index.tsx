import { useState } from "react";
import styles from "./style.module.css";

function IdentitasNew() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
        <h2 className={styles["formTitle"]}>Mohon Data Mahasiswa</h2>
        <p className={styles["formSubtitle"]}>
          Masukan NIM anda untuk menampilkan data mahasiswa secara otomatis
        </p>

        {/* CONTAINER */}
        <div className={styles.container}>
          {/* SEARCH */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Cari Barang..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button>
              <span className="materialSymbolsOutlined">search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentitasNew;
