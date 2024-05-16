import React, { useState } from 'react'

export default function B1() {
    const [name,setName]=useState<string>('Nguyễn Văn A')
  return (
    <div>
      <p>Bài 1</p>
      <p>Họ và tên:{name}</p>
    </div>
  )
}
