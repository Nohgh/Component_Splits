import React, { useRef } from 'react'

const ScrollTop = () => {
    const topref=useRef(null);
    const scrollUp=()=>{
        if(topref.current){
            topref.current.scrollIntoView({behavior:"smooth"});
        }
    }
  return (
    <div>
        <div ref={topref} style={{width:"100%", height:"300px", backgroundColor:"lightpink"}}>상단</div>
        <div style={{width:"100% ",height:"1000px", backgroundColor:"lightblue"}}>하단</div>
        <div><button onClick={scrollUp}>클릭하면 상단으로 이동</button></div>
    </div>
  )
}

export default ScrollTop