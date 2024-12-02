import {useState} from 'react';


function App() {
  const  [job,setJob]=useState('');
  const  [jobs,setJobs]=useState([]);
  const submit= ()=>{
    setJobs(prev => [...prev,job])
    setJob('');
  }
  return (
    <div className='Thanhtung' style={{padding:50}}>
      <input type='text'
      value={job}  // hien thi noi dung vua nhap
      //  bên dưới là lấy nội dung vưa nhập

      onChange={e=> setJob(e.target.value)}/> 
      <button onClick={submit}>Add Job</button>
      {/* in ra danh sach them vao */}
      <div className='list'>
        <ul >
          {jobs.map((job,index)=>(
            <li type ={1} key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App;

// học nốt  video  và xem html  DNu đã ghi
  // ol  Start  và type  chx nêuys chưa hãy update  nó lại cho tôi.

