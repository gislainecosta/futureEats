import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { HeaderContainer, BackButtonContainer } from './styles';

const Header = (props) => {
    let history = useHistory();
    const title = <p><strong>{props.title}</strong></p>;
    const backButton = (<BackButtonContainer>
                            <IconButton onClick={() => history.goBack()}>
                                <ArrowBackIosRoundedIcon />
                            </IconButton>
                        </BackButtonContainer>)
    /* A prop title até não precisaria dessa verificação, mas pra deixar o código mais claro fiz dessa maneira 
       Para que o botão apareça é preciso colocar "back" quando formos utilizar o componente
    */    
    return (
        <HeaderContainer>
            {props.title ? title : null}
            {props.back ? backButton : null}
        </HeaderContainer>
    )
}

export default Header;