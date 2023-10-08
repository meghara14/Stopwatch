import styles from './Button.module.scss';

const Button = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div>
      <button className={styles.btn} onClick={startTimer}>Start</button>
      <button className={styles.btn} onClick={stopTimer}>Stop</button>
      <button className={styles.btn} onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Button;
