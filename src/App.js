import React, { useEffect, useRef, useState } from 'react';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import './styles/global.scss';

function App() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      handleTime();
    }

    return () => clearInterval(id.current);
  }, [isRunning]);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec === 59) {
          if (prev.min === 59) {
            return { hr: prev.hr + 1, min: 0, sec: 0 };
          } else {
            return { ...prev, min: prev.min + 1, sec: 0 };
          }
        } else {
          return { ...prev, sec: prev.sec + 1 };
        }
      });
    }, 1000);
  }

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(id.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(id.current);
    setIsRunning(false);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  return (
    <div className="container">
      <Timer time={time} />
      <Button startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
    </div>
  );
}

export default App;
