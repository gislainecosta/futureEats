import styled from "styled-components";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export const TituloDialog = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  text-align: center;
  color: #000000;
  margin: 6.719vh 9vw 4.844vh 9vw;
`;

export const Botao = styled(Button)`
  span {
    color: #5cb646;
  }
`;

export const SelecionaQtdade = styled(Select)`
  width: 68vw;
`;

export const RestauranteContainer = styled.div`
  overflow-x: hidden;
  padding: 0 4.444vw;
  max-width: 99vw;
`;

export const UpperRestaurantContainer = styled.div`
  margin: 2.656vh 0 1.875vh 0;
  border-radius: 8px;
`;

export const ContainerImg = styled.div`
  height: 18.75vh;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;
export const ResturanteImg = styled.img`
  object-fit: fill;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const RestaurantTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #5cb646;
  margin-top: 1.875vh;
`;

export const RestaurantDetails = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #b8b8b8;
`;

export const RestaurantDetailsFrete = styled.p`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.108px;
  color: #b8b8b8;
  margin-left: 5vw;
`;

export const DetailsMidContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 1.25vh 0;
`;

export const SectionText = styled.p`
  border-bottom: 1px solid black;
  margin-top: 2.5vh;
  padding-bottom: 1.25vh;
`;
