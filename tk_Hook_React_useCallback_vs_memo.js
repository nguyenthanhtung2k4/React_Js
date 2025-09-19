import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Click me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Hàm `handleClick` không thay đổi qua các lần render.

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
