import React, { useReducer } from "react";
import {
  CartCardContainer,
  CardImg,
  ProductName,
  TextContainer,
  ProductDetails,
  Price,
  ActionButton,
  BottomContainer,
  UpperContainer,
  ContainerImg,
  CabecalhoCard,
  ContainerQuant,
  ProductQuant,
} from "./styles";


function CartCard(props) {
  return (
    <CartCardContainer>
      <ContainerImg>
        <CardImg src={props.foto} alt="Foto Produto" />
      </ContainerImg>
      <TextContainer>
        <UpperContainer>
          <CabecalhoCard>
            <ProductName>{props.nome}</ProductName>
            <ContainerQuant display={props.tituloBotao === 'adicionar' ? 'none' : 'flex'}>
              <ProductQuant>{props.quantidade}</ProductQuant>
            </ContainerQuant>
          </CabecalhoCard>
          <ProductDetails>{props.descricao}</ProductDetails>
        </UpperContainer>
        <BottomContainer>
          <Price>R${props.preco}</Price>
          <ActionButton 
            borda={props.borda} 
            cor={props.tituloBotao === 'adicionar' ? '#5cb646' : '#e02020'} 
            onClick={props.onClick}
          >
            {props.tituloBotao}
          </ActionButton>
        </BottomContainer>
      </TextContainer>
    </CartCardContainer>
  );
}

export default CartCard;
