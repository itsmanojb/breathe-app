import React, { useState } from 'react';
import WatchFace from './components/WatchFace';
import BreathingText from './components/BreathingText';
import PlayIcon from './play-outline.svg';
import RestartIcon from './refresh-sharp.svg';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [init, setInit] = useState(false);
  const [reset, setReset] = useState(false);

  function start() {
    setInit(true);

    setTimeout(() => {
      setTimer(70);
    }, 5000);
  }

  function resetTimer() {
    setTimer(0);
    setReset(true);
    setInit(false);
  }

  return (
    <div className="App">
      {timer > 0 ? (
        <WatchFace {...{ timer }} onComplete={resetTimer} />
      ) : (
        <button
          type="button"
          className={init ? 'animate fadeOut' : ''}
          style={reset ? {} : { paddingLeft: '10px' }}
          onClick={() => start()}
        >
          <img src={reset ? RestartIcon : PlayIcon} alt="" />
        </button>
      )}
      <div className="text">{init && <BreathingText {...{ timer }} />}</div>
    </div>
  );
}

export default App;
