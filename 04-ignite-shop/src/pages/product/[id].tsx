import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();
  
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit. Culpa aspernatur rerum doloribus ipsam minus, aut sed similique molestiae. Ratione et, tempore ipsum soluta doloribus nulla magnam dolorum modi?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
