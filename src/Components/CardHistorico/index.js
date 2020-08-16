import React from "react";
import { HistoricoContainer, StoreName, Data, Valor } from "./styles";

function CardHistorico() {
  return (
    <HistoricoContainer>
      <StoreName variant="h6">Ravel Café</StoreName>
      <Data variant="caption">12 outubro 2020</Data>
      <Valor variant="h6">SUBTOTAL R$ 25,00</Valor>
    </HistoricoContainer>
  );
}

export default CardHistorico;
