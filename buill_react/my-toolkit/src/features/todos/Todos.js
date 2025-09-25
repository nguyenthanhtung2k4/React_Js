import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./todosSlice";

function Todos() {
  const [text, setText] = useState("");
  console.log('text: ', text);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập việc cần làm"
      />
      <button
        onClick={() => {
          if (text) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => dispatch(toggleTodo(todo.id))}
              id={todo.id}
            >
                  {/* {todo.id} */}
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
