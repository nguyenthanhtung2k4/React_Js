import React, { useState } from "react";

const Hello=  React.memo(()=>{
  console.log('co memo');
  return(
    <div>
      <h1>Co dung memo </h1>
    </div>
  )
})
const Hello2=()=>{
  console.log('Khong memo Hello2');
  return(
    <div>
      <h1>Khong dung memo</h1>
    </div>
  )
}
export  function MEMO(){
  const [state, setState]=useState(0); 
  const handleClick=()=>{
    setState(state + 1);
  }
  return(
    <div>
      {/* Khong chay lai re- render  */}
      <Hello/>
      <button onClick={handleClick}>Bam </button>
      <p>MEMO: {state}</p>
      {/* Chay lai re- render moi lan bam */}
      <Hello2/>
    </div>
  )
}

