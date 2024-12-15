import { useState, useEffect } from 'react';

function App() {
  const [time,setTime]  =useState(5);
  const [time2,setTime2]  =useState(5);
  const [status,setStatus] =useState(false);
//  cach1  Goi lai call back
useEffect(() => {
  const intervalId = setInterval(() => {
    if (time > 0) { //  kiem tra  neu  time  = 0 thi dung lai
      setTime(time - 1);
    } else {
      setStatus(true); //  khi time = 0 thi set status = true
      clearInterval(intervalId);
    }
  }, 1000);
  return () => clearInterval(intervalId);
}, [time]);

//  cach2  Khong goi  lai  call back trong useEffect
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime2(prev => prev>0 ?   prev -1 : setStatus(true)); //  kiem tra neu  time =0  thi dung lai
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); //  ham nay  khong goi lai  time


return (
  <div className="Tung" style={{ padding: 30 }}>
    <h1>Hello Word</h1>
    <h2>Time Remaining: {time} seconds</h2><br/>
    <h2>
      {status ? <h1 style={{padding: 30,color: 'red'}}>Time is up !</h1> : <h2>Time {time}</h2>}
    </h2><br/>
    <h2>Time2 Remaining: {time2} seconds</h2>
  </div>
);
}
export default App;