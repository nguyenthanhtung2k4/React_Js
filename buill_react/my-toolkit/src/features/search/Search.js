// Search.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "./searchSlice";

function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos);
  const keyword = useSelector((state) => state.search);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchChange = () => {
    dispatch(searchItem(text)); // lưu keyword vào store
  };

  const filteredTodos = keyword
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(keyword.toLowerCase())
      )
    : todos;

  return (
    <div className="Search">
      <h2>Nhap tim kiem tu ben tren</h2>
      <input
        placeholder="Nhập từ khóa..."
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchChange}>Tìm kiếm</button>

      <p>Kết quả:</p>
      {filteredTodos.length > 0 ? (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy kết quả nào</p>
      )}
    </div>
  );
}

export default Search;