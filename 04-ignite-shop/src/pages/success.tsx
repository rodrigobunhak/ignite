import { useState } from "react"

export default function Success() {
  const [data, setDate] = useState('Meu valor inicial');

  if (true) {
    console.log(data);
  }
  
  return (
    <h1>Success</h1>
  )
}
