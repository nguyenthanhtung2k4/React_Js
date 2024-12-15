import React, { useState } from "react";

const Child = React.memo(({ count }) => {
  console.log("Child Rendered");
  return <div>Count thay doi : {count}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div>Count khong thay doi : {other}</div>;
      <button onClick={() => setOther(other + 1)}>Increment Other</button>
    </div>
  );
}
// Tóm lại:
  //  Trong trường hợp nhiều file  mà chỉ thay đổi 1 function  commpoment nhỏ bên trong 
  // và các compoment khác không thay đổi có thể dùng memo để giúp giảm vấn đề hiệu năng
export default App;