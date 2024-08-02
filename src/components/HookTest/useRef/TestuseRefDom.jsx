import React, { useRef } from 'react'
//useRef를 쓰는 두번째 이유는 Dom에 대한 직접적인 접근을 하기 위해서 
const TestuseRefDom = () => {
    const inputEl=useRef(null);

    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={()=>inputEl.current.focus()}>클릭하면 포커스</button>
        </div>
  )
}

export default TestuseRefDom