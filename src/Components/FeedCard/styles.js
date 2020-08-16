import styled from "styled-components";
import { Typography } from "@material-ui/core";

//usarei px nas alturas porque foi pedido que não importasse o tamanho da tela, que a altura deveria ser sempre a mesma

export const FeedCardContainer = styled.div`
  border: solid 1px #b8b8b8;
  width: 91.111vw;
  height: 188px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ProductImg = styled.img`
  object-fit: fill;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const ContainerImg = styled.div`
  width: 100%;
  overflow: hidden;
  height: 60%;
`;

export const StoreName = styled(Typography)`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.10833vw;
  color: #5cb646;
  grid-area: 1/1/2/2;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 12px 4.444vw 0 4.444vw;
  row-gap: 4px;
`;

export const OrderDetailsDem = styled.span`
  color: #b8b8b8;
  grid-area: 2/1/3/2;
`;

export const OrderDetailsFre = styled.span`
  color: #b8b8b8;
  grid-area: 2/2/3/3;
  text-align: end;
`;
