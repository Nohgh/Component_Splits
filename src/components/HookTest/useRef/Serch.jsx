import React, { useState ,useRef} from 'react'
/**
 * 검색 창에 단어를 입력하고 serch를 누르면 서버로 찾는 단어의 post를 보낸다.
 * 문제는 입력값이 동일해도 검색을 누르면 서버로 post요청을 하기 때문에 서버에 부하가 간다.
 * 이를 해결하기 위해 현재 입력한 값과 이전에 입력한 값을 비교하여 다를 경우에만 post가 가능하게 로직을 구현한다.
 */
const Serch = () => {
    const [inputText,setInputText]=useState("");
    const saveText=useRef(""); //딘순히 전에 입력한 내용을 저장하는 기능 (ui표시될 변수 아님)

    const fetchSerch=()=>{
        if(saveText.current !==inputText){ //항상 ref로 접근할때는 .current로 접근하기 
            console.log(inputText);
            console.log("axios post");
            saveText.current=inputText;
            console.log("저장된 text",saveText);
        }
        
    }
  return (
    <div>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={fetchSerch}>검색</button>
    </div>  )
}

export default Serch