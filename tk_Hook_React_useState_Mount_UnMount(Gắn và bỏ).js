import {useState} from 'react';

function App() {
  const [check,setCheck]= useState(false);
  function Counter() {
    return(<h1> Hien ra  mount</h1>)
  }
  //  kiểm tra xem  check bằng true thì hiện ra conuter 
  //  nếu bằng false thì không hiện ra.
  //  !check ( phủ định của check (nếu false thì  true |  true thì false))
  return (
    <div className="App" style={{padding:30}}>
      <h1>Hello, World!</h1>
      <button onClick={()=>setCheck(!check)}>
        Toggle Counter</button>  
      {check && <Counter />}
    </div>
  )
}
export default App;