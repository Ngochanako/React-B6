import React, { useState } from 'react'

export default function B10() {
    const [arr,setArr]=useState<string[]>([]);
    const submit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    const handle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        if(!e.target.checked){
            let newArr=arr.filter(item=>item!==value);
            setArr(newArr);
        }else{
            let newArr=[...arr,value];
            setArr(newArr);
        }
    }
  return (
    <div>
      <p>Bài 10</p>
      <p>Sở thích [{arr.join(',')}]</p>
      <form action="" onSubmit={submit}>
        <input onChange={handle} type="checkbox" value='Đi chơi' />Đi chơi
        <input onChange={handle} type="checkbox" value='Code' />Code
        <input onChange={handle} type="checkbox" value='Bơi lội' />Bơi lội
        <input onChange={handle} type="checkbox" value='Nhảy dây'/>Nhảy dây
      </form>
    </div>
  )
}
