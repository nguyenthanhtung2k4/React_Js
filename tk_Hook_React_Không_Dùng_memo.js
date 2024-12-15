import React, { useState } from "react";

function Child({ count }) {
  console.log("Child Rendered");
  return <div>Count: {count}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
//  Trong truòng hợp này nếu không dùng memo  
// thì  dù không thay đổi Chidl trong DOM nhưng nó vẫn console.log() ra thay đổi
  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Increment Other</button>
    </div>
  );
}

export default App;
