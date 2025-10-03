import { useState, useEffect } from 'react';

// Component đầu tiên, đã sửa lỗi và tách riêng
export function NoCallBack() {
  const [title, setTitle] = useState('TUNG');

  useEffect(() => {
    document.title = title; 
    console.log('Chỉ chạy một lần sau khi render ban đầu.');
  }, []); 

  return (
    <div style={{ padding: 30 }}>
      <h1>Hello, World!</h1>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div>Nội dung của title: {title}</div>
    </div>
  );
}
// Component đầu tiên, đã sửa lỗi và tách riêng

export function SearchResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm !== '') {
      const mockResults = [
        { id: 1, title: `Kết quả 1 cho "${searchTerm}"` },
        { id: 2, title: `Kết quả 2 cho "${searchTerm}"` },
      ];
      setResults(mockResults);
      console.log('API đã được gọi!');
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Nhập từ khóa tìm kiếm..."
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}