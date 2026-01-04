import DatePicker from 'react-datepicker';
import BookingStepper from '../../components/booking-stepper';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './style.module.css';
import { useNavigate } from 'react-router';

export default function SelectDates() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSelectItems = () => {
    console.log(startDate, endDate);
    // navigate('/select-items')
  };

  return (
    <div className={styles.selectDateContainer}>
      <BookingStepper />
      <div className={styles.calenderContainer}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          calendarClassName={styles.calender}
        />
      </div>
      <button onClick={handleSelectItems} className={styles.btnPrimary}>
        Selanjutnya
      </button>
    </div>
  );
}
