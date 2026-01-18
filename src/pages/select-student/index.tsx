import { useEffect, useState } from 'react';
import styles from './style.module.css';
import DataMahasiswa from '../../components/data-mahasiswa';
import BookingResultModal from '../../components/booking-result-modal';
import { type Student, type StudentDataResponse } from '../../types/student';
import { createBooking, getStudentData } from '../../api/services';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { useBookingStore } from '../../store/itemStore';
import BookingStepper from '@/components/booking-stepper';

function IdentitasNew() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState<{
    isOpen: boolean;
    type: 'success' | 'failed';
  }>({
    isOpen: false,
    type: 'success',
  });
  const [studentData, setStudentData] = useState<Student | null>(null);
  const { selectedItems, reset, startDate, endDate } = useBookingStore(
    (state) => state
  );
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchStudentData = async () => {
    try {
      const res: StudentDataResponse = await getStudentData(search);
      setStudentData(res.data);
      enqueueSnackbar('Data mahasiswa ditemukan', { variant: 'success' });
    } catch (error) {
      console.error('Error fetching student data:', error);
      enqueueSnackbar('Data mahasiswa gagal ditemukan', { variant: 'error' });
    }
  };

  const handleCreateBooking = async () => {
    if (!studentData) return null;

    const payload = {
      studentId: studentData.id,
      items: selectedItems,
      startDate,
      endDate,
      note,
    };

    try {
      setIsLoading(true);
      await createBooking(payload);
      setShowModal({ isOpen: true, type: 'success' });
    } catch (error) {
      console.error('Error creating booking:', error);
      enqueueSnackbar('Gagal mengajukan peminjaman', { variant: 'error' });
      setShowModal({ isOpen: true, type: 'failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    setShowModal({ isOpen: false, type: 'success' });
    reset();
    navigate('/');
  };

  useEffect(() => {
    if (selectedItems.length === 0) {
      navigate('/select-dates');
      reset();
    }
  }, [navigate, reset, selectedItems]);

  return (
    <div>
      <BookingStepper step={3} />

      <div className={styles['container']}>
        <h2 className={styles['formTitle']}>Masukan Data Mahasiswa</h2>
        <p className={styles['formSubtitle']}>
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
            <button onClick={fetchStudentData}>
              <span className="materialSymbolsOutlined">Cari</span>
            </button>
          </div>
          {search.length > 0 && studentData && (
            <DataMahasiswa
              data={{
                nama: studentData.name,
                phoneNumber: studentData.phoneNumber,
                email: studentData.email,
                jurusan: studentData.major.name,
              }}
            />
          )}

          {search.length > 0 && studentData && (
            <>
              <div className={styles.inputKeterangan}>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  id="keterangan"
                  placeholder="Keterangan"
                />
              </div>

              <div className={styles.agreement}>
                <input
                  onChange={(event) => setAgreeTerms(event.target.checked)}
                  checked={agreeTerms}
                  className={styles.checkboxAgreement}
                  type="checkbox"
                  id="setuju"
                />
                <label htmlFor="setuju" className={styles.labelAgreement}>
                  Jika ada pelanggaran, sistem mencatat sanksi administrasi
                  ataupun akademik sesuai aturan laboratorium informatika.
                  Sistem mencatat kondisi barang yang rusak atau hilang serta
                  menerapkan aturan sanksi bagi mahasiswa yang bersangkutan.
                </label>
              </div>

              <button
                disabled={!agreeTerms}
                type="submit"
                className={
                  !agreeTerms ? styles.submitBtnDisabled : styles.submitBtn
                }
                onClick={handleCreateBooking}
              >
                {isLoading ? 'Mengajukan Peminjaman...' : 'Ajukan Peminjaman'}
              </button>
            </>
          )}

          <BookingResultModal
            isOpen={showModal.isOpen}
            onClose={handleBackToHome}
            type={showModal.type}
          />
        </div>
      </div>
    </div>
  );
}

export default IdentitasNew;
