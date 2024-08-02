import React, { useRef, useState } from 'react'

const TestuseRef = () => {
    const [num,setNum]=useState(0);
    const refState=useRef(0);
  return (
    <div>
        <button onClick={()=>{
            setNum(num+1);
            console.log(num);
        }}>num+</button>
        <button onClick={()=>{
            refState.current+=1;
            console.log(refState);
        }}>click</button>
    </div>
  )
}
export default TestuseRef