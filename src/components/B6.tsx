import React, { useState } from 'react'

export default function B6() {
    const [cnt,setCnt]=useState<number>(0);
    const handle=()=>{
        setCnt(cnt+1);
    }
  return (
    <div>
      <p>Bài 6</p>
      <p>Bạn đã click {cnt} lần</p>
      <button onClick={handle}>Click để tăng số lần</button>
    </div>
  )
}
