import { useState } from "react";

const ComponentsUseState = ()=>{ 
      const [numbers,  setNumber] =   useState('10');
      const [text, setText] = useState([]);
      const [button,  setButton] =  useState('');
      const  handleInputChange = (e)=>{
            const input= (e.target.value);    
            console.log(input);
            setButton(input);
            setNumber(input);
      }     

      const handleClick=()=>{
            setText((pre)=> [...pre,numbers])
            setButton('');
      }
      return(
            <div>
                 <p>UseState</p> 
                 <input placeholder="Nhap di cu " onChange={handleInputChange} value={button}></input>
                  <button onClick={handleClick}>ADD</button>
                  <h3>Noi dung nhap hien ben duoi</h3>
                  <p>{numbers}</p>
                  <ul>
                        {text.map((item,  index)=>
                        <li id={index}>
                              {item}
                        </li>)}
                  </ul>
            </div>
            
      )
}

export default  ComponentsUseState;