import React, { useState } from 'react'

export default function B3() {
    const [isClick,setClick]=useState<boolean>(false);
    const handleClick=()=>{
        setClick(!isClick);
    }
  return (
    <div>
        <p>Bài 3</p>
      <p style={{color:isClick?'red':''}}>Tiêu đề văn bản</p>
      <button onClick={handleClick}>Thay đổi màu</button>
    </div>
  )
}
