// components/CountdownClock.js
"use client"
import { useEffect, useState } from 'react';
import styles from './CountdownClock.module.css';

const CountdownClock = ({ initialMinutes = 50, initialSeconds = 20 }) => {
  const [time, setTime] = useState({ minutes: initialMinutes, seconds: initialSeconds });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
        const newMinutes = prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;

        if (newMinutes < 0) {
          clearInterval(timerInterval);
          return { minutes: 0, seconds: 0 };
        }

        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock}>
        <div className={styles.progress}></div>
        <div className={styles.time}>
          {String(time.minutes).padStart(2, '0')} : {String(time.seconds).padStart(2, '0')}
        </div>
        <div className={styles.label}>min Sec</div>
      </div>
      <div className={styles.remainingTimeLabel}>Remaining Time</div>
    </div>
  );
};

export default CountdownClock;
