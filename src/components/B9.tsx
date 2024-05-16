import React, { useState } from 'react'

export default function B9() {
    const [gender,setGender]=useState<string>('Nam');
    const handle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        setGender(value)
    }
    const submit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
  return (
    <div>
      <p>Bài 9</p>
      <p>Giới tính:{gender}</p>
      <form action="" onSubmit={submit}>
      <input onChange={handle} type="radio" value='Nam' checked={gender=='Nam'}/>Nam
      <input onChange={handle} type="radio" value='Nữ'checked={gender=='Nữ'} />Nữ
      <input onChange={handle} type="radio" value='Khác' checked={gender=='Khác'}/>Khác
      </form>
    </div>
  )
}
