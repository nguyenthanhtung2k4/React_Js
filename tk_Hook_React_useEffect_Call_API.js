import { useState, useEffect } from 'react';

function App() {
  const [titles, setTitles] = useState([]); // Khởi tạo titles là mảng rỗng

  useEffect(() => {
    // Gọi API và cập nhật state
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json()) // Chú ý gọi res.json() với dấu ()
      .then(posts => {
        setTitles(posts); // Lưu toàn bộ danh sách bài viết
      })
      .catch(error => console.error('Lỗi khi gọi API:', error));
  },[]); // Mảng phụ thuộc rỗng để chỉ gọi useEffect một lần

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>Hello, World!</h1>
      <ul>
        {titles.map(post => (
          <li key={post.id}>{post.ida ?? post.title}</li> // Hiển thị từng bài viết
        ))}
      </ul>
    </div>
  );
}

export default App;
