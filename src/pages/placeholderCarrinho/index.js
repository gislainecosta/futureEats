import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import CartCard from "../../Components/CartCard";
import { getProducts } from "../../functions/integracao.js";

function PlaceholderCarrinho() {
  return (
    <Container>
      <CartCard />;
    </Container>
  );
}

export default PlaceholderCarrinho;
