// import { useLocation } from 'react-router';
import { useMemo } from 'react';
import styles from './style.module.css';

const steps = [
  {
    id: 1,
    label: 'Pilih Tanggal',
  },
  {
    id: 2,
    label: 'Pilih Barang',
  },
  {
    id: 3,
    label: 'Identitas',
  },
];

type BookingStepperProps = {
  step: number;
};

export default function BookingStepper({ step }: BookingStepperProps) {
  const stepState = useMemo(() => {
    return {
      active: steps.filter((item) => item.id <= step),
      deactive: steps.filter((item) => item.id > step),
    };
  }, [step]);

  return (
    <div className={styles.stepHeader}>
      <div
        className={styles.stepActive}
        style={{ flex: stepState?.active.length }}
      >
        {stepState?.active.map((item) => (
          <div
            className={`${styles.stepWrapper}`}
            style={{ width: '100%', padding: 10 }}
          >
            <div className={styles.step}>{item.id.toString()}</div>
            {item.label}
          </div>
        ))}
      </div>

      {stepState?.deactive.map((item) => (
        <div className={`${styles.stepWrapper}`} style={{ flex: 1 }}>
          <div className={styles.step}>{item.id.toString()}</div>
          {item.label}
        </div>
      ))}
    </div>
  );
}
