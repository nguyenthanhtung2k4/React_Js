import { useState } from 'react';

function App() {
  const [state, setState] = useState(1);
  const handleClick = () => {
    setState(state + 1);
  }
  return (
    <div className="App">
      <p>Thanh tung</p>
      <h1>{state}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;