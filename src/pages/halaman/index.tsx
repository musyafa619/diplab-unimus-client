import styles from "./style.module.css";

export const Halaman = () => {
  return (
    <div className={styles.body}>
      <div className={styles["step-header"]}>
        <div className={styles["step-wrapper"]}>
          <div className={styles.step}>1</div>
          Pilih Tanggal
        </div>

        <div className={styles["step-wrapper"]}>
          <div className={styles.step}>2</div>
          Pilih Barang
        </div>

        <div className={styles["step-wrapper"]}>
          <div className={styles.step}>3</div>
          Identitas
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles["form-title"]}>Identitas</h2>
        <p className={styles["form-subtitle"]}>
          Mohon lengkapi identitas Anda demi kelancaran proses verifikasi
        </p>

        <form className={styles["form-identitas"]}>
          <div className={styles.grid}>
            <div className={styles["input-nama"]}>
              <label>Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div className={styles["input-nim"]}>
              <label>NIM</label>
              <input type="text" id="nim" placeholder="Masukkan NIM Anda" />
            </div>

            <div className={styles["input-nomor-telepon"]}>
              <label>Nomor Telepon</label>
              <input
                type="number"
                id="nomor-telepon"
                placeholder="Masukkan nomor telepon Anda"
              />
            </div>

            <div className={styles["input-email"]}>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div className={styles["input-program-studi"]}>
              <label>Program Studi</label>
              <input
                type="text"
                id="program-studi"
                placeholder="Pilih program studi Anda"
              />
            </div>

            <div className={styles["input-semester"]}>
              <label>Semester</label>
              <select id="semester">
                <option>Pilih semester Anda</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className={styles["input-keterangan"]}>
              <label>Keterangan</label>
              <textarea
                id="keterangan"
                placeholder="Tulis keterangan keperluan Anda"
              ></textarea>
            </div>
          </div>

          <div className={styles.agreement}>
            <input
              className={styles["checkbox-agreement"]}
              type="checkbox"
              id="setuju"
            />
            <span>
              Jika ada pelanggaran, sistem mencatat sanksi administrasi ataupun
              akademik sesuai aturan laboratorium informatika. Sistem mencatat
              kondisi barang yang rusak atau hilang serta menerapkan aturan
              sanksi bagi mahasiswa yang bersangkutan.
            </span>
          </div>

          <button type="submit" className={styles["submit-btn"]}>
            Submit
          </button>
        </form>

        <div id="popup-berhasil" className={styles.popup}>
          <div className={styles["popup-content"]}>
            <div className={`${styles["popup-icon"]} ${styles.success}`}>✔</div>
            <h2>Pendaftaran Berhasil!</h2>
            <p>Silahkan cek email anda untuk info selanjutnya</p>
            <button id="btn-beranda-sukses">Beranda</button>
          </div>
        </div>

        <div id="popup-gagal" className={styles.popup}>
          <div className={styles["popup-content"]}>
            <div className={`${styles["popup-icon"]} ${styles.failed}`}>✖</div>
            <h2>Pendaftaran Gagal!</h2>
            <p>Silahkan cek email anda untuk info selanjutnya</p>
            <button id="btn-beranda-gagal">Beranda</button>
          </div>
        </div>
      </div>
    </div>
  );
};
