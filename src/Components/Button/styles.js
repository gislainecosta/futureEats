import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 8vh;
`

export const ButtonElement = styled.button`
    background-color: ${props => props.active ? "#5cb646" : "rgba(92, 182, 70, 0.5)"};
    color: black;
    width: 91.11vw;
    height: 6.5625vh;
    border: none;
    border-radius: 5px;
    font-family: Roboto;
`