import styled from 'styled-components';

export const AlertaContainer = styled.div`
    width: 100vw;
    height: 18.438vh;
    background-color: #5cb646;
    position: fixed;
    z-index: 9998;
    bottom: 7vh;
    display: grid;
    grid-template-columns: 22% 78%;
`
export const IconeRelogio = styled.img`
    width: 5vh;
    height: 5vh;
    margin-left: 6.667vw;
    margin-top:6.875vh;
`
export const Pedido = styled.p`
    font-family: Roboto;
    margin-top:3.75vh;
    margin-bottom: 1.25vh;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.108px;
    color: #ffffff;
`
export const Restaurante = styled.p`
      font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.108px;
    color: #000000;
`
export const Total = styled.p`
    margin-top: 1.25vh;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.108px;
    color: #000000;
`