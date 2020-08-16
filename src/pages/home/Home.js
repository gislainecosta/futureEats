import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import { useHistory } from "react-router";
import styled from "styled-components";
import "./Home.css";
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import CardRestaurant from "../../Components/FeedCard/index";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { autorização } from "../../functions";
import CardContext from "../../functions/CardContext";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Loading from '../../Components/Loading/Loading';
import Alerta from './../../Components/Alert/Alert';
import { pegaAndamentoPedido } from '../../functions/integracao'
import axios from "axios";

const Abas = withStyles({
  root: {
    boxShadow: "none",
    height: "100%",
    textTransform: "none",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.39px",
    textAlign: "center",
  },
})(Tabs);

const Aba = styled(Tab)`
  span {
    color: ${(props) => props.cor};
  }
`;

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '91.111vw',
    height: '8.75vh',
    marginTop: '1.25vh',
  },
}));

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cb646",
      contrastText: "#000000",
      light: "rgba(92, 182, 70, 0.5)",
    },
  },
});

const ContainerAbas = styled.div`
  width: 100vw;
  height: 42px;
  padding-left: 16px;
`;

const Home = (props) => {
  let history = useHistory();
  const [pedidoAndamento, setPedidoEmAndamento] = useState();
  const classes = useStyles();
  const [tipoSelecionado, setTipoSelecionado] = useState("todos");
  const homeContexto = useContext(CardContext);
  const [openLoad, setOpenLoad] = useState(true);

  useEffect(() => {
    autorização(history);
  }, []);


  useEffect(() => {
    homeContexto.restaurantes.length !== 0 ? 
    setOpenLoad(false):
    setOpenLoad(true)
  }, [homeContexto.restaurantes]);

  useEffect(() =>{
    pegaAndamentoPedido()
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      if (pedidoAndamento !== undefined && pedidoAndamento !== null){
        const Date = Date.now()
        const DataExp = pedidoAndamento.expiresAt
        if (Date >= DataExp ){
          clearInterval( interval );
          setPedidoEmAndamento(null)
        }
      }else{
        console.log(pedidoAndamento)
      }
    }, 60000);
    return () => clearInterval(interval);
  }, []);
    

  const pegaAndamentoPedido = async (dispatch) => {
    let token = window.localStorage.getItem("token")
    try {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/active-order`, {
      headers: {
        auth: token,
      },
      });
      setPedidoEmAndamento(response.data.order);
    } catch (err) {
      console.log(err);
    }
  };


  const goToBuscar = () => {
    history.push("/busca");
  };

  const handleChange = (event, value) => {
    tipoSelecionado === value
      ? setTipoSelecionado("todos")
      : setTipoSelecionado(value);
  };

  const restaurantesFiltrados = homeContexto.restaurantes
    .filter((restaurante) => {
      return restaurante.category === tipoSelecionado;
    })
    .map((restaurante) => {
      return (
        <CardRestaurant
          foto={restaurante.logoUrl}
          idRest={restaurante.id}
          nome={restaurante.name}
          demora={restaurante.deliveryTime}
          frete={restaurante.shipping.toFixed(2).replace(".", ",")}
        />
      );
    });

  const restaurantesTotais = homeContexto.restaurantes.map((restaurante) => {
    return (
      <CardRestaurant
        foto={restaurante.logoUrl}
        idRest={restaurante.id}
        nome={restaurante.name}
        demora={restaurante.deliveryTime}
        frete={restaurante.shipping.toFixed(2).replace(".", ",")}
      />
    );
  });

  const listaTipos = homeContexto.restaurantes
    .map((restaurante) => {
      return restaurante.category;
    })
    .filter(function (elem, index, self) {
      return index === self.indexOf(elem); /*Retira os duplicados */
    })
    .map((restaurant) => {
      return (
        <Aba
          cor={restaurant === tipoSelecionado ? "#5cb646" : "#000000"}
          label={restaurant}
          value={restaurant}
          key={restaurant}
        />
      );
    });

  return (
    <ThemeProvider theme={MyTheme}>
      <div id="tela-toda">
        <Header title={"FutureEats"} />
        
        <OutlinedInput
          className={clsx(classes.textField)}
          variant="outlined"
          placeholder="Restaurantes..."
          onClick={goToBuscar}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <section>
          <ContainerAbas position="static">
            <Abas
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {listaTipos}
            </Abas>
          </ContainerAbas>
        </section>

        <section id="lista-restaurantes">
          {tipoSelecionado === "todos"
            ? restaurantesTotais
            : restaurantesFiltrados}
        </section>

        {pedidoAndamento !== null && pedidoAndamento !== undefined ? <Alerta preco={pedidoAndamento.totalPrice} nome={pedidoAndamento.restaurantName}/> : ''}

        <Footer page={"home"} />

        <Loading openLoading={openLoad}/>
      </div>
    </ThemeProvider>
  );
};

export default Home;
