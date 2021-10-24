import React, { useState, useEffect } from 'react';
import style from './watch.module.css';

const WatchFace = ({ timer, onComplete }) => {
  const [seconds, setSeconds] = useState(timer);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
      setAnimated(false);
      onComplete();
    }
  }, [seconds]);

  return (
    <>
      <div className={animated ? style.watchface_on : style.watchface_off}>
        {[...Array(6)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </>
  );
};

export default WatchFace;
