import { useState, useEffect } from 'react';

function App() {
  const [avata, setAvata] = useState(null);

  useEffect(() => {
    //  hàm này return dọn dẹp khi giá trị avata thay đổi
    return () => {
      avata && URL.revokeObjectURL(avata.preview)
    }
  },[avata]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);
    console.log(file);
    console.log(preview);
    setAvata({ file, preview });
  };

  return (
    <div className="Tung" style={{ padding: 30 }}>
      <h1>Hello World</h1>
      <input type='file' onChange={handleImage} />
      { avata &&  (
        <div>
          <img src={avata.preview} alt="img" width="50%"/> 
        </div>
      )}
    </div>
  );
}
export default App;