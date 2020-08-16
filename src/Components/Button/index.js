import React from 'react';
import { ButtonContainer, ButtonElement } from './styles';

const Button = (props) => {

    
    const handleSubmit = props.active ? props.onClick : null;
    return (
        <ButtonContainer>
            <ButtonElement active={props.active} onClick={handleSubmit}>{props.title}</ButtonElement>
        </ButtonContainer>
    )
}

export default Button;