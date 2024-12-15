import { useState, useEffect } from 'react';

function App() {
  const options = ['posts', 'comments', 'albums'];
  const [type, setType] = useState('posts');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setData(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const GotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="Tung" style={{ padding: 30 }}>
      <h1>Hello Word</h1>
      {options.map(op => (
        <button
          type="button"
          value={op}
          style={type === op ? {
            color: '#fff',
            background: '#333'
          } : {}}
          onClick={e => setType(op)}
        >
          {op}
        </button>
      ))}
      <ul>
        {data.map(d => (
          <li key={d.id}>{d.title || d.body}</li>
        ))}
      </ul>
      {show && (
        <button
          type="button"
          style={{
            position: 'fixed',
            right: 30,
            bottom: 70,
          }}
          onClick={e => GotoTop()}
        >
          Go to top
        </button>
      )}
    </div>
  );
}
export default App;
