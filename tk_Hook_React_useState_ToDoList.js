import {useState} from 'react';

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);
  const submit = () => {
    if(job === ''){
      alert('Vui long nhap ten cong viec')
      return;  
    }else{
      setJobs([...jobs, job])
      setJob('');
    }
  }
  return (
    <div className='Thanhtung' style={{padding:50}}>
      <input type='text'
      value={job}  
      onChange={e=> setJob(e.target.value)}/> 
      <button onClick={submit}>Add Job</button>
      <div className='list'>
        <ul >
          {jobs.map((job,index)=>(
            <li key={index} type={1}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App;