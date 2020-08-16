import React from "react";
import { useHistory } from "react-router-dom";
import {
  FeedCardContainer,
  ProductImg,
  StoreName,
  TextContainer,
  OrderDetailsDem,
  OrderDetailsFre,
  ContainerImg,
} from "./styles";

function FeedCard(props) {
  let history = useHistory();

  const goToRestaurante = (id) => {
    history.push(`/restaurante/${props.idRest}`);
  };

  return (
    <FeedCardContainer
      onClick={() => {
        goToRestaurante(props.idRest);
      }}
    >
      <ContainerImg>
        <ProductImg src={props.foto} />
      </ContainerImg>
      <TextContainer>
        <StoreName>{props.nome}</StoreName>
        <OrderDetailsDem>{props.demora} min</OrderDetailsDem>
        <OrderDetailsFre>
          {props.frete === "" ? "Frete Grátis" : `Frete R$${props.frete}`}
        </OrderDetailsFre>
      </TextContainer>
    </FeedCardContainer>
  );
}

export default FeedCard;
