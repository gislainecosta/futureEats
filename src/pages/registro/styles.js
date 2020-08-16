import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vw;
    margin-left: auto;
    margin-right: auto;
`
export const Imagem = styled.img`
   width: 28.8vw;
    margin: 3.75vh auto 4.375vh auto;
    width: 104px;
    height: 58px;
`
export const Paragrafo = styled.p`
    display: flex;
    justify-content:center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.108px;
    text-align: center;
    color: #000000;
    margin-bottom: 5vh;
`
export const ContainerInput = styled.div`
    display: grid;
    justify-items: center;
    align-items: start;
    grid-auto-columns: 1fr;
    grid-gap: 2.50vh;

`
export const Input = styled(TextField)`
   width: 91.11vw;
   height: 8.75vh;
`
export const Botao = styled.button`
    display: flex;
    justify-content: center;
    margin-left: 4.44vw;
    margin-right: 4.44vw;
    width: 91.11vw;
    background-color: #5cb646;
    border: 0px;
    text-align: center;
    font-size: 1em;
    padding: 12px;
`

