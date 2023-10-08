import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  return (
    <div className={styles.timer}>
      {time.hr.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:
      {time.min.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:
      {time.sec.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
    </div>
  );
};

export default Timer;
