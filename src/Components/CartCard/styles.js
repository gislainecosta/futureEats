import styled from "styled-components";
import { Typography } from "@material-ui/core";

//usarei px nas alturas porque foi pedido que não importasse o tamanho da tela, que a altura deveria ser sempre a mesma

export const CartCardContainer = styled.div`
  height: 112px;
  border: grey 1px solid;
  margin: 1vh auto;
  width: 91.111vw;
  margin: 8px auto;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
`;

export const ContainerImg = styled.div`
  height: 100%;
  width: 30%;
`;
export const CardImg = styled.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`;

export const ProductName = styled.p`
  margin-top: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 70%;
  justify-content: space-between;
  margin-left: 5%;
`;

export const ProductDetails = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const ActionButton = styled.button`
  border: ${(props) => props.borda};
  background-color: white;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 31px;
  width: 25vw;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: ${(props) => props.cor};
`;

export const ContainerQuant = styled.div`
  width: 9.167vw;
  height: 9.167vw;
  border-radius: 0 8px 0 8px;
  border: solid 2px #5cb646;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ProductQuant = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108vw;
  text-align: center;
  color: #5cb646;
`;

export const Price = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 7px;
`;

export const CabecalhoCard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const UpperContainer = styled.div`
  height: 65%;
`;
