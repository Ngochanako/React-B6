import React, { useState } from 'react'

export default function B4() {
    const [check,setCheck]=useState<boolean>(false);
    const handle=()=>{
        setCheck(!check);
    }
  return (
    <div>
        <p>Bài 4</p>
      <button onClick={handle}>{check?'Ẩn':'Hiện'}</button>
     {check && <p>Tiêu đề</p>}
    </div>
  )
}
