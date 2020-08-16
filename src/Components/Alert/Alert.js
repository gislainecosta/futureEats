import React from 'react';
import Relogio from '../../img/clock.png';
import { 
    AlertaContainer, 
    IconeRelogio,
    Pedido,
    Restaurante,
    Total
} from './styles';




const Alerta= (props) => {

    return (
        <AlertaContainer>
            <IconeRelogio src={Relogio} alt="Ícone relógio"/>
            <div>
                <Pedido>Pedido em Andamento</Pedido>
                <Restaurante>{props.nome}</Restaurante>
                <Total><b>SUBTOTAL R${props.preco.toFixed(2).replace(".", ",")}</b></Total> 
            </div>

        </AlertaContainer>
    );
}

export default Alerta