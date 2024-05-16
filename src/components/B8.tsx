import React, { useState } from 'react'

export default function B8() {
    const [city,setCity]=useState<string>('Nam Định');
    const handle=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        let value=e.target.value;
        setCity(value);
    }
  return (
    <div>
      <p>Bài 8</p>
      <p>Thành phố:{city}</p>
      <select name="" id="" defaultValue='Chọn thành phố' onChange={handle}>
        <option value="Nam Định">Nam Định</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Ninh Bình">Ninh Bình</option>
      </select>
    </div>
  )
}
