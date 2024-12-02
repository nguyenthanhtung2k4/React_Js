import { useState } from 'react';

function App() {
  //  use state đơn giản
  const [state, setState] = useState(1);
  const handleClick = () => {
    setState(state + 1);
  }
  //  use state nâng cao
  const  [start, setAdd]=useState({
    name: 'Nguyễn Văn A',
    age: 20,
    address: 'Hà Nội'
  })
  const add=()=>{
    setAdd(
      {
        ...start, 
        age: start.age + 1,
        address2: 'Ha Nam',
    })
  }
  return (
    <div className="App">
      <p>Thanh tung</p>
      {/* userState  bassic */}
      <h1>{state}</h1>
      <button onClick={handleClick}>click + 1</button>
      {/* userState   nang cao */}
      <h2>{JSON.stringify(start)}</h2>
      <button onClick={add}>Click + Add</button>
    </div>
  );
}
//  Trường hợp 1 thêm biến + dần vào ( + 1)
//  trường hợp 2  Lấy giá trị cũ + với  giá trị mới ( Addrees 2 : ha Nam ) 
export default App;