import React, { useState } from 'react'
interface Item{
    id:number,
    name:string,
    price:number,
    quantity:number,
}
export default function B2() {
    const [item,setItem]=useState<Item>({
        id:1,
        name:'Coca',
        price:1000,
        quantity:10,
    })
  return (
    <div>
      <p>Bài 2</p>
      <h4>Thông tin sản phẩm</h4>
      <p>Id:{item.id}</p>
      <p>Tên:{item.name}</p>
      <p>Giá:{item.price}$</p>
      <p>Số lượng:{item.quantity}</p>
    </div>
  )
}
