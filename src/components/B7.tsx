import React, { useState } from 'react'

export default function B7() {
    const [cnt,setCnt]=useState<number>(0);
    const handle=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        let value=e.target.value.replace(/\s/g, '');
        setCnt(value.length);
    }
  return (
    <div>
      <p>Bài 7</p>
      <textarea name="" id="" onChange={handle}></textarea>
      <p>Số ký tự :{cnt}</p>
    </div>
  )
}
