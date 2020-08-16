import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router";
import "./Carrinho.css";
import CartCard from "../../Components/CartCard/index";
import Button from "../../Components/Button/index";
import CardContext from "../../functions/CardContext";
import { autorização } from "../../functions";

const Carrinho = (props) => {
  const history = useHistory();
  const [formaPagamento, setFormaPagamento] = useState("");
  const [botaoAtivado, setBotaoAtivado] = useState("");
  const cartContexto = useContext(CardContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [valorFrete, setValorFrete] = useState(0);
  const [totalProdutos, setTotalProdutos] = useState(0);

  useEffect(() => {
    autorização(history);
  }, []);

  useEffect(() => {
    defineValores();
  }, [cartContexto.cart]);

  useEffect(() => {
    if (formaPagamento !== "" && cartContexto.cart.products.length !== 0) {
      setBotaoAtivado(true);
    } else {
      setBotaoAtivado(false);
    }
  }, [formaPagamento, cartContexto.cart.products.length]);

  const handleChange = (event) => {
    setFormaPagamento(event.target.value);
  };

  const confirmaPedido = () => {
    console.log("Funcionou Botão");
  };

  /*Calculo do valor da compra - APENAS PRODUTOS, SEM FRETE*/
  const defineValores = () => {
    if (cartContexto.cart.products.length !== 0) {
      setValorFrete(cartContexto.cart.shipping);

      const valores = cartContexto.cart.products.map((produto) => {
        return produto.price;
      });

      let total = 0.0;
      for (let i = 0; i < valores.length; i++) {
        total += valores[i];
        setTotalProdutos(total);
      }
    }
  };
/*Calculo do valor da compra - APENAS PRODUTOS, SEM FRETE*/

/*Calculo do valor total da compra - PRODUTOS + FRETE*/
  let totalCarrinho = valorFrete + totalProdutos;
/*Calculo do valor total da compra - PRODUTOS + FRETE*/

  let secaoMostrada;
  if (cartContexto.cart.products.length === 0) {
    secaoMostrada = <p id="carrinho-vazio">Carrinho Vazio</p>;
  } else {
    const produtosNatela = cartContexto.cart.products.map((produto) => {
      return (
        <CartCard
          quantidade={1} /*Colocar função que pega quantidade carrinho*/
          foto={produto.photoUrl}
          nome={produto.name}
          descricao={produto.description}
          preco={produto.price.toFixed(2).replace(".", ",")}
          tituloBotao={"remover"}
          onClick={() => {console.log("Tá faltando remover")}} 
          borda={"solid 2px #e02020"}
        />
      );
    });

    secaoMostrada = (
      <section>
        <section id="dados-restaurante-cart">
          <p>{cartContexto.cart.name}</p>
          <p>{cartContexto.cart.address}</p>
          <p>{cartContexto.cart.deliveryTime} min</p>
        </section>
        {produtosNatela}
      </section>
    );
  }

  return (
    <div className="telatoda">
      <Header title={"Meu Carrinho"} />
      <section id="endereco">
        <p>Endereço de Entrega</p>
        <p>
          {cartContexto.endereco.street}, {cartContexto.endereco.number}
        </p>
      </section>

      <section id="lista-carrinho">{secaoMostrada}</section>

      <section id="frete">
        <p>{valorFrete === 0 ? "Frete Grátis" : `Frete R$${valorFrete}`}</p>
        <p>SUBTOTAL</p>
        <p>R${totalCarrinho}</p>
      </section>

      <section id="pagamento">
        <p>Forma de Pagamento</p>
        <hr />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={formaPagamento}
            onChange={handleChange}
          >
            <FormControlLabel
              value="dinheiro"
              control={<Radio />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="cartao"
              control={<Radio />}
              label="Cartão de Crédito"
            />
          </RadioGroup>
        </FormControl>
      </section>

      <Button
        active={botaoAtivado}
        onClick={confirmaPedido}
        title={"Confirmar"}
      />
      <br />
      <br />
      <br />

      <Footer page={"carrinho"} />
    </div>
  );
};

export default Carrinho;
