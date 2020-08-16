import styled from 'styled-components'
import { TextField } from '@material-ui/core'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
`
export const Paragrafo = styled.p`
    display: flex;
    justify-content:center;
    margin-top: 2.50vh;
    padding: 12px;

`


export const ContainerInput = styled.div`
    display: grid;
    justify-items: center;
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
    margin-top: 0px;
    margin-left: 4.44vw;
    margin-right: 4.44vw;
    width: 91.11vw;
    height: 6.56vh;
    background-color: #5cb646;
    border: 0px;
    text-align: center;
    font-size: 1em;
    padding: 12px;

`
