import {useState} from 'react';
const courses = [
  {
    id: 1,
    name: 'Html'
  },
  {
    id: 2,
    name: 'Python'
  },
  {
    id: 3,
    name: 'JavaScript'
  }
];

function App() {
  const [checked, setCheck] = useState([]);
  const handleSubmit = (check) => {
    setCheck(check);
    console.log(checked);
  }

  const  handleCheck= (id) =>{
    const checkId=checked.includes(id);
    if(checkId){
      setCheck(checked.filter(item=>item!==id));
    }else{
      setCheck(pver=> [...pver, id]);
      
    }
    console.log(checked);
  }

  console.log(checked);

  return (
    <div>
      <div>Thanhtung</div>
      {courses.map((course, index) => (
        <div key={course.id}>
          <input 
            type="checkbox" 
            id={course.id} 
            name="courses" 
            value={course.id} 
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          <label>{course.name}</label>
        </div>
      ))}
      <p>Selected CheckBox: {checked}</p>
    </div>
  )
}
export default App;