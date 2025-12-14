import { useState, useMemo } from "react";
import styles from "./style.module.css";
// import images barang from "../../assets/images/kameraDslr.png";

const itemsData = [
  {
    name: "Kamera DSLR",
    desc: "EOS 1500D Kit (EF S18-55)",
    img: "assets/images/kameraDslr.png",
    available: true,
  },
  {
    name: "Laptop Acer",
    desc: "Acer Swift Lite 14 Air",
    img: "images/laptop.webp",
    available: false,
  },
  {
    name: "Router TP Link",
    desc: "TL-WR840N",
    img: "images/laptop.webp",
    available: true,
  },
  {
    name: "Switch Hub TP Link",
    desc: "TL-SG 1006D 4 port",
    img: "images/laptop.webp",
    available: true,
  },
  {
    name: "Laptop Lenovo",
    desc: "ThinkPad (seri bisnis)",
    img: "images/laptop.webp",
    available: true,
  },
  {
    name: "Kamera Canon",
    desc: "Canon 1D X",
    img: "images/laptop.webp",
    available: true,
  },
  {
    name: "Switch Hub TP Link",
    desc: "TL-SG 1008B 8 port",
    img: "images/laptop.webp",
    available: false,
  },
  {
    name: "LAN Tester",
    desc: "LAN tester",
    img: "images/laptop.webp",
    available: true,
  },
];

const PER_PAGE = 8;

export default function PilihBarang() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<number, number>>(
    {}
  );

  // 🔍 Filter + Search
  const filteredItems = useMemo(() => {
    return itemsData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
  const pageItems = filteredItems.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  // ➕➖ Quantity Handler
  const changeQty = (index: number, change: number) => {
    setSelectedItems((prev) => {
      console.log(prev);
      const qty = (prev[index] || 0) + change;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[index];
        return copy;
      }
      return { ...prev, [index]: qty };
    });
  };

  return (
    <div>
      {/* STEP HEADER */}
      <div className={styles.stepHeader}>
        <div className={styles.stepActive}>
          <div className={`${styles.stepWrapper} ${styles.step1}`}>
            <div className={styles.step}>1</div>
            Pilih Tanggal
          </div>
          <div className={`${styles.stepWrapper} ${styles.step2}`}>
            <div className={styles.step}>2</div>
            Pilih Barang
          </div>
        </div>
        <div className={`${styles.stepWrapper} ${styles.step3}`}>
          <div className={styles.step}>3</div>
          Identitas
        </div>
      </div>

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

        {/* GRID */}
        <div className={styles.grid}>
          {pageItems.map((item, index) => {
            const globalIndex = (currentPage - 1) * PER_PAGE + index;
            const qty = selectedItems[globalIndex];

            return (
              <div
                key={globalIndex}
                className={`${styles.card} ${qty ? styles.selected : ""}`}
              >
                <img src={item.img} alt={item.name} />

                <div className={styles.cardDescription}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>

                  {item.available ? (
                    qty ? (
                      <div className={styles.quantity}>
                        <button
                          onClick={() => changeQty(globalIndex, -1)}
                          className={styles.qtyBtn}
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{qty}</span>
                        <button
                          onClick={() => changeQty(globalIndex, 1)}
                          className={styles.qtyBtn}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className={styles.btn}
                        onClick={() => changeQty(globalIndex, 1)}
                      >
                        Pinjam
                      </button>
                    )
                  ) : (
                    <button className={styles.btn} disabled>
                      Tidak tersedia
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={i + 1 === currentPage ? styles.active : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button className={styles.nextBtn}>Selanjutnya</button>
        </div>
      </div>
    </div>
  );
}
