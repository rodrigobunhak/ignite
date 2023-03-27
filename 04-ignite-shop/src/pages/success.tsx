import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import { useState } from "react"

export default function Success() {
  const [data, setDate] = useState('Meu valor inicial');

  if (true) {
    console.log(data);
  }
  
  return (
    <SuccessContainer>
      <h1>Compra efeatuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Rodrigo</strong>, sua <strong>Camiseta XPTO</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálago
      </Link>
    </SuccessContainer>
  )
}
