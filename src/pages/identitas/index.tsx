import styles from "./style.module.css";

function Identitas() {

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
      <h2 className={styles["formTitle"]}>Identitas</h2>
      <p className={styles["formSubtitle"]}>
        Mohon lengkapi identitas Anda demi kelancaran proses verifikasi
      </p>

      <form className={styles["formIdentitas"]}>
        <div className={styles["grid"]}>
          <div className={styles["inputNama"]}>
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          <div className={styles["inputNim"]}>
            <label htmlFor="nim">NIM</label>
            <input type="text" id="nim" placeholder="Masukkan NIM Anda" />
          </div>

          <div className={styles["inputNomorTelepon"]}>
            <label htmlFor="nomor-telepon">Nomor Telepon</label>
            <input
              type="number"
              id="nomor-telepon"
              placeholder="Masukkan nomor telepon Anda"
            />
          </div>

          <div className={styles["inputEmail"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Masukkan email Anda" />
          </div>

          <div className={styles["inputProgramStudi"]}>
            <label htmlFor="program-studi">Program Studi</label>
            <input
              type="text"
              id="program-studi"
              placeholder="Pilih program studi Anda"
            />
          </div>

          <div className={styles["inputSemester"]}>
            <label htmlFor="semester">Semester</label>
            <select id="semester">
              <option>Pilih semester Anda</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

          <div className={styles["inputKeterangan"]}>
            <label htmlFor="keterangan">Keterangan</label>
            <textarea
              id="keterangan"
              placeholder="Tulis keterangan keperluan Anda"
            ></textarea>
          </div>
          </div>
          <div className={styles["agreement"]}>
            <input className={styles["checkboxAgreement"]} type="checkbox" id="setuju" />
            <span>
              Jika ada pelanggaran, sistem mencatat sanksi administrasi ataupun
              akademik sesuai aturan laboratorium informatika. Sistem mencatat
              kondisi barang yang rusak atau hilang serta menerapkan aturan sanksi
              bagi mahasiswa yang bersangkutan.
            </span>
          </div>

          <button type="submit" className={styles["submitBtn"]}>Submit</button>
        </form>
      </div>
    </div>
  )
}


export default Identitas;