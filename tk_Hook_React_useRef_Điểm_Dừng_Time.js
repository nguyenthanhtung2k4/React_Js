import { useState, useRef, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(60);
  const stopTime = useRef(null);

  const start = () => {
    stopTime.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000)
  }

  const stop = () => {
    clearInterval(stopTime.current);
  }

  useEffect(() => {
    return () => {
      clearInterval(stopTime.current);
    }
  }, [])

  return (
    <div className="Tung" style={{ padding: 30 }}>
      <h1>Hello react</h1>
      <h1>{time}</h1>
      <button onClick={start}>Click start</button>
      <button onClick={stop}>Click stop</button>
    </div>
  );
}

export default App;