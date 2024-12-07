import { useState, useEffect } from 'react';

function App() {
  const  options=['posts', 'comments','albums']
  const  [type,setType]=useState('posts');
  const  [data,setData]=useState([]);
  const  [show,setShow]=useState(false);
  //  useEffect bên dưới dùng  lấy api
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res=>res.json())
    .then(posts=>{
      setData(posts);
    });
  },[type])
  //  useEffect bên dưới dùng để lắng nghe  sự kiện 
  useEffect (()=>{
    const handleScroll=()=>{
      //  cach1 
      if(window.scrollY>=300){
        setShow(true)
      }else{
        setShow(false)
      }

      //  cach 2
      // setShow(window.scrollY>=300);
    }
    window.addEventListener('scroll',handleScroll)
    //  dọn  dẹp  addEvent
    window.removeEventListener('scroll',handleScroll)
  },[]);
//  go to top
  const GotoTop = () => {
    window.scrollTo({
      top: 0, // Vị trí cuộn ve  khong 
      behavior: 'smooth', // Cuộn mượt
    });
  };
  return(
    <div class='Tung' style={{padding:30}}>
      <h1>Hello Word</h1>
      {options.map(op=>(
        <button 
          type='button'
          value={op}
          style={type== op ? {
            color: '#fff',
            background:' #333'
          } :{}}

          onClick={e=>setType(op)}
        >{op}</button>
      ))}
        <ul >
          {data.map(d=>(
            <li type={1} key={d.id}>{d.title || d.body}</li>
          ))}
        </ul>
        {show && (
          <button type="button"
              style={{
                position:'fixed',
                right:30,
                bottom:70,
              }}
              onClick={e=>GotoTop()}
          >Go to top</button>
        )}          
    </div>
  );
}
export default App;