import React, { useEffect, useState, useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  RestauranteContainer,
  UpperRestaurantContainer,
  ResturanteImg,
  RestaurantTitle,
  RestaurantDetails,
  RestaurantDetailsFrete,
  DetailsMidContainer,
  SectionText,
  ContainerImg,
  TituloDialog,
  SelecionaQtdade,
  Botao,
} from "./styles";
import CartCard from "../../Components/CartCard";
import { useParams, useHistory } from "react-router-dom";
import { autorização } from "../../functions";
import CardContext from "../../functions/CardContext";
import { pegaProdutos } from '../../functions/integracao';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Loading from '../../Components/Loading/Loading';
import Header from "../../Components/Header";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

function Restaurante(props) {
  const pathParams = useParams();
  const history = useHistory();
  const restContexto = useContext(CardContext);
  const [open, setOpen] = useState(false);
  const [idProduto, setIdProduto] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [openLoading, setOpenLoading] = useState(true)
  const [quantidade, setQuantidade] = useState(0)
  const [katiguria, setKatiguria] = useState()

  useEffect(() => {
    autorização(history);
  }, []);

  useEffect(() => {
    restContexto.produtos.length !== 0 ?
      setOpenLoading(false) :
      setOpenLoading(true)
  }, [restContexto.produtos]);

  useEffect(() => {
    pegaProdutos(pathParams.pageID, restContexto.dispatch)
  }, [])

  useEffect(() => {
    if (restContexto.produtos.products !== undefined) {
      const Novosprodutos = restContexto.produtos.products.map((produto) => {
        return Object.defineProperty(produto, "quantidade", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 0,
        });
      });
      setProdutos(Novosprodutos);
    }
  }, [restContexto.produtos.products]);

  useEffect(() => {
    if (restContexto.produtos.products !== undefined) {
      const listaKatiguria = restContexto.produtos.products.map((produto) => {
        return produto.category;})
        .filter(function (elem, index, self) {
    return index === self.indexOf(elem); /*Retira os duplicados */
  } )
  setKatiguria(listaKatiguria)
  }
  }, [restContexto.produtos.products]);
  
  console.log("OIA O RESULT: " + katiguria)

  const adicionarCarrinho = () => {
    setOpen(false);
    produtos.forEach((produto, i, arr) => {
      if (produto.id === idProduto) {
        return (produto.quantidade = quantidade);
      }
    });
    console.log("adicionado", produtos);
  };

  const abreDialog = (idProduct) => {
    setOpen(true);
    setIdProduto(idProduct);
  };

  const removerCarrinho = (idProduct) => {
    produtos.forEach((produto, i, arr) => {
      if (produto.id === idProduto) {
        return (produto.quantidade = 0);
      }
    });
    console.log("removido", produtos);
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <RestauranteContainer>
        <UpperRestaurantContainer>
          <ContainerImg>
            <ResturanteImg
              src={restContexto.produtos.logoUrl}
              alt="Logo Restaurante"
            />
          </ContainerImg>
          <RestaurantTitle>{restContexto.produtos.name}</RestaurantTitle>
        </UpperRestaurantContainer>
        <RestaurantDetails>{restContexto.produtos.category}</RestaurantDetails>
        <DetailsMidContainer>
          <RestaurantDetails>
            {restContexto.produtos.deliveryTime}mins
          </RestaurantDetails>
          <RestaurantDetailsFrete>
            Frete R$
            {restContexto.produtos.shipping === undefined
              ? "..."
              : restContexto.produtos.shipping.toFixed(2)}
          </RestaurantDetailsFrete>
        </DetailsMidContainer>
        <RestaurantDetails>{restContexto.produtos.address}</RestaurantDetails>
        {katiguria === undefined ? (
                <p>...</p>
              ) : (
                katiguria.map((categorias) => {
                  return (
                           <div>
                             <SectionText>{categorias}</SectionText>
                             {
                               produtos
                               .filter((product) => product.category === categorias)
                               .map((produto) => {
                                 return (
                                   <CartCard
                                     quantidade={
                                       produto.quantidade === 0 ? "" : produto.quantidade
                                     }
                                     foto={produto.photoUrl}
                                     nome={produto.name}
                                     descricao={produto.description}
                                     preco={produto.price.toFixed(2).replace(".", ",")}
                                     tituloBotao={
                                       produto.quantidade === 0 ? "adicionar" : "remover"
                                     }
                                     onClick={() => {
                                       produto.quantidade === 0
                                         ? abreDialog(produto.id)
                                         : removerCarrinho(produto.id);
                                     }}
                                     borda={
                                       produto.quantidade === 0
                                         ? "solid 2px #5cb646"
                                         : "solid 2px #e02020"
                                     }
                                   />
                                 );
                               })
                             }
                           </div>
                        )
                })
              )
        }

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => {
            setOpen(false);
          }}
        >
          <TituloDialog>Selecione a quantidade desejada</TituloDialog>
          <DialogContent>
            <FormControl variant="outlined">
              <SelecionaQtdade
                initialValue={0}
                value={quantidade}
                onChange={(e) => {
                  setQuantidade(e.target.value);
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </SelecionaQtdade>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Botao onClick={adicionarCarrinho}>ADICIONAR AO CARRINHO</Botao>
          </DialogActions>
        </Dialog>
      </RestauranteContainer>
      <Loading openLoading={openLoading} />
    </ThemeProvider>
  );
}

export default Restaurante;
