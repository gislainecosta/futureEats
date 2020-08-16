import React, {useReducer, useEffect} from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Carrinho";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Registro from "./pages/registro/Registro";
import Restaurante from "./pages/restaurante";
import Inicial from "./pages/PaginaInicial/PaginaInicial";
import EditarCadastro from "./pages/editarCadastro/EditarCadastro";
import EditarEndereco from "./pages/editarEndereco/EditarEndereco";
import Busca from "./pages/busca/Busca";
import Endereco from "./pages/endereco";
import PlaceholderCarrinho from "./pages/placeholderCarrinho";
import { CardReducer, initialState,  } from "./functions/CardReducer";
import CardContext from './functions/CardContext';
import { pegaRestaurantes } from './functions/integracao'
import { pegaEndereço } from './functions/integracao'


const urlBase= "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

const App = () => {
  const [state, dispatch] = useReducer(CardReducer, initialState);

  useEffect(() => {
    pegaRestaurantes(dispatch);
    pegaEndereço(dispatch)
  }, [])

//  console.log(state.andamentoPedido)

  return (
    <CardContext.Provider value={{
      endereco: state.enderecoUser,
      pedido: state.andamentoPedido[0],
      restaurantes: state.restaurants, 
      cart: state.cart[0].restaurant, 
      produtos: state.products, 
      mostraAlert: state.mostraAlertAndamento,
      loadIsOpen: state.abreLoading,
      dispatch: dispatch 
    }}>
      <BrowserRouter>
        <Switch>
          <Route urlBase={urlBase} exact path="/">
            <Inicial />
          </Route>
          <Route urlBase={urlBase} exact path="/Login">
            <Login />
          </Route>
          <Route urlBase={urlBase} exact path="/home">
            <Home />
          </Route>
          <Route urlBase={urlBase} exact path="/registro">
            <Registro />
          </Route>
          <Route urlBase={urlBase} exact path="/cadastro-endereco">
            <Endereco />
          </Route>
          <Route urlBase={urlBase} exact path="/perfil">
            <Perfil />
          </Route>
          <Route urlBase={urlBase} exact path="/perfil/cadastro">
            <EditarCadastro />
          </Route>
          <Route urlBase={urlBase} exact path="/perfil/endereco">
            <EditarEndereco />
          </Route>
          <Route urlBase={urlBase} exact path="/carrinho">
            <Cart />
          </Route>
          <Route urlBase={urlBase} exact path="/restaurante/:pageID">
            <Restaurante />
          </Route>
          <Route urlBase={urlBase} exact path="/busca">
            <Busca />
          </Route>
          <Route urlBase={urlBase} exact path="/placeholder">
            <PlaceholderCarrinho />
          </Route>
        </Switch>
      </BrowserRouter>
    </CardContext.Provider>
  );
};

export default App;
