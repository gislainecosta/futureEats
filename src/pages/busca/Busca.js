import React, { useState, useEffect, useContext } from "react";
import "./Busca.css";
import CardRestaurant from "../../Components/FeedCard/index";
import CardContext from "../../functions/CardContext"
import Header from "../../Components/Header/index";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";



/*comentario de teste*/

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '91.111vw',
    marginTop: '1.25vh',
    marginLeft: '4.44vw'
  },
}));

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
      light: "rgba(92, 182, 70, 0.5)",
    },
  },
});

const Busca = (props) => {

    const buscaContext = useContext(CardContext)
    /*Estado para atualização e armazenamento do valor recebido via input*/
    const [inputValue, setInputValue] = useState('')
    /*Estado para atualização e armazenamento do valor recebido via input*/
    const classes = useStyles();
    /*Captura de dados recebidos via input*/
    const onChangePegaInputValue = (event) => {
        setInputValue(event.target.value)
    }
    /*Captura de dados recebidos via input*/

    /*Lógica de busca*/
    const searchResult = buscaContext.restaurantes
      .filter((restaurantes) => {
          return restaurantes.name.toLocaleLowerCase().includes(inputValue);
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
  /*Lógica de busca*/
  return (
  <ThemeProvider theme={MyTheme}>
    <div className='telatoda'>
     <Header title={'Busca'} back/>
      
        <OutlinedInput
            className={clsx(classes.textField)}
            variant="outlined"
            placeholder="Restaurantes..."
            type="text"
            value={inputValue}
            onChange={onChangePegaInputValue}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            }
          />
     <div className="Result-Wrapper">
       { inputValue!==""? searchResult : <div className="Result-Wrapper"><p>Busque por nome do restaurante</p></div> }
     </div>
    </div>
  </ThemeProvider>
  );
};

/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/

/*AAAAAAAAAAAAAAAAAA*/
export default Busca;