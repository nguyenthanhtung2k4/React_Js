import { useState, useEffect } from 'react';

function App() {
  const  options=['posts', 'comments','albums']
  const  [type,setType]=useState('posts');
  const  [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res=>res.json())
    .then(posts=>{
      setData(posts);
    });
  },[type])

  return(
    <div class='Tung' style={{padding:30}}>
      <h1>Hello Word</h1>
      {/*  sưe dụng vòng lặp */}
      {options.map(op=>( 
        <button 
          type='button'
          value={op}
          style={type== op ? {
            color: '#fff',
            background:' #333'
          } :{}}
          //  onclip de thay đổi type
          onClick={e=>setType(op)}
        >{op}</button>
      ))}
          <ul >
            {/* hiện ra tất cả các map hiện ra */}
            {data.map(d=>(
              <li type={1} key={d.id}>{d.title || d.body}</li>
            ))}
          </ul>

    </div>
  );
}

export default App;