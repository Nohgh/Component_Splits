import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Board = () => {
    const [message,setMassage]=useState("");

    useEffect(()=>{
        axios.get('http://localhost:8080/api/hello')
        .then(response=>{
            console.log(response.data)
            setMassage(response.data.message);
        })
        .catch(error=>{
            console.log(error)});
            },[])
            
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default Board