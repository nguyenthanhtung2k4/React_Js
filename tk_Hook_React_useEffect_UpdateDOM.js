import {useState,useEffect} from 'react';

function App() {
  const [title,setTile ]=useState('');
  useEffect(()=>{  // su dung uesEffect de thay doi  gia tri
    console.log(title);
    document.getElementById('titles').innerHTML=title; // cho hien ra ben duoi 
    document.title=title; // thay foi  title  tren thanh tim kiem.
  })
 
  return (
    <div className="App" style={{padding:30}}>
      <h1>Hello, World!</h1>
      <label for="title">Title</label>
      <input id='title' value={title} onChange={e=> setTile(e.target.value)}/>
      <div id='titles'>Thay doi title DOM ben tren <br></br></div>
    </div>
  )
}
export default App;