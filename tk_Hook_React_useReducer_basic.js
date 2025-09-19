import { useReducer } from "react";

// 1. State khởi tạo
const initialState = { count: 0 };

// 2. Các action types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// 3. Reducer function
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error("Unknown action");
  }
}

export default function Counter() {
  // 4. Dùng useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
}
