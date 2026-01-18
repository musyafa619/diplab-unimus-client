import DatePicker from 'react-datepicker';
import BookingStepper from '../../components/booking-stepper';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './style.module.css';
import { useNavigate } from 'react-router';
import { useBookingStore } from '../../store/itemStore';

export default function SelectDates() {
  const navigate = useNavigate();
  const { startDate, endDate, setStartDate, setEndDate } = useBookingStore(
    (state) => state
  );

  // Calculate date range: tomorrow to 4 weeks ahead
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const maxDate = new Date(tomorrow);
  maxDate.setDate(maxDate.getDate() + 27); // 4 weeks from tomorrow

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const handleSelectItems = () => {
    navigate('/select-items');
  };

  return (
    <div className={styles.selectDateContainer}>
      <BookingStepper step={1} />
      <div className={styles.calenderContainer}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          minDate={tomorrow}
          maxDate={maxDate}
          calendarClassName={styles.calender}
        />
      </div>
      <button onClick={handleSelectItems} className={styles.btnPrimary}>
        Selanjutnya
      </button>
    </div>
  );
}
