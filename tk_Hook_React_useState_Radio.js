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
  const [checked, setChecked] = useState(2); // checked  BanDau= 2
  const [result, setResult] = useState();

  const handleSubmit = () => {
    // Call API
    const api={
      id: checked,
      name: courses.find(course => course.id === checked).name
    }
    console.log(api); /// requesrt ve  phia api 
    ///  setResult: dùng để  in ra màn hình
    setResult({
      id: checked,
      name: courses.find(course => course.id === checked).name
    });
  };

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
      <p>Selected Course: {result ? "Id: "+result.id +"Name:"+result.name  : ''}</p>
    </div>
  );
}
export default App;