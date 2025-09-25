import Counter from "./features/counter/Counter";
import Search from "./features/search/Search";
import Todos from "./features/todos/Todos";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Demo</h1>
      <Counter />
      <hr />
      <Todos />
      <hr/>
      <Search/>
    </div>
  );
}

export default App;
