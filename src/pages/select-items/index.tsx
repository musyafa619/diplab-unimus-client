import { useState, useEffect, useCallback } from 'react';
import styles from './style.module.css';
import type { ItemListResponse } from '../../types/item';
import { getAvailableItems } from '../../api/services';
import { useBookingStore } from '../../store/itemStore';
import { useNavigate } from 'react-router';
import BookingStepper from '@/components/booking-stepper';

export default function SelectItems() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const { selectedItems, setSelectedItems, startDate, endDate, reset } =
    useBookingStore((state) => state);

  const [itemList, setItemList] = useState<ItemListResponse>({
    data: [],
    meta: {
      page: 1,
      limit: 5,
      total: 0,
      totalPages: 0,
    },
  });

  // ➕➖ Quantity Handler
  const changeQty = (id: string, change: number) => {
    const selectedItem = selectedItems?.find((item) => item.id === id);
    if (selectedItem) {
      // Update existing item quantity
      const newQty = selectedItem.quantity + change;
      if (newQty <= 0) {
        // Remove item if quantity is zero or less
        setSelectedItems(selectedItems.filter((item) => item.id !== id));
      } else {
        setSelectedItems(
          selectedItems.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
          )
        );
      }
    } else if (change > 0) {
      // Add new item with initial quantity
      setSelectedItems([...selectedItems, { id, quantity: change }]);
    }
  };

  const fetchAvailableItems = useCallback(async () => {
    const res: ItemListResponse = await getAvailableItems({
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
      page: currentPage,
      limit: 8,
    });
    setItemList(res);
  }, [startDate, endDate, currentPage]);

  const handleSelectStudent = () => {
    navigate('/select-student');
  };

  useEffect(() => {
    fetchAvailableItems();
  }, [fetchAvailableItems]);

  useEffect(() => {
    if (!startDate || !endDate) {
      navigate('/select-dates');
      reset();
    }
  }, [startDate, endDate, navigate, reset]);

  return (
    <div>
      {/* STEP HEADER */}
      <BookingStepper step={2} />

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
          {itemList?.data?.map((item) => {
            const qty =
              selectedItems.find((i) => i.id === item.id)?.quantity || 0;

            return (
              <div
                key={item.id}
                className={`${styles.card} ${qty ? styles.selected : ''}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ objectFit: 'contain' }}
                />

                <div className={styles.cardDescription}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  {item.stock > 0 ? (
                    qty ? (
                      <div className={styles.quantity}>
                        <button
                          onClick={() => changeQty(item.id, -1)}
                          className={styles.qtyBtn}
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{qty}</span>
                        <button
                          disabled={qty === item.stock}
                          onClick={() => changeQty(item.id, 1)}
                          className={styles.qtyBtn}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className={styles.btn}
                        onClick={() => changeQty(item.id, 1)}
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
            {Array.from({ length: itemList?.meta?.totalPages }).map((_, i) => (
              <button
                key={i}
                className={i + 1 === currentPage ? styles.active : ''}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button onClick={handleSelectStudent} className={styles.nextBtn}>
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
