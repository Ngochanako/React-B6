import React, { useState } from 'react'

export default function B5() {
    const [text,setText]=useState<string>('');
    const handle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        setText(value);
    }
  return (
    <div>
        <p>Bài 5</p>
      <input type="text" onChange={handle} />
      <p>{text}</p>
    </div>
  )
}
