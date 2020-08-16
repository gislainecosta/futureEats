import React, { useState, useEffect, useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { Text } from "./styles";
import { useForm, autorização } from "../../functions";
import "./EditarCadastro.css";
import { upDateProfile, getProfile } from "../../functions/integracao";
import { useHistory } from "react-router-dom";
import Loading from './../../Components/Loading/Loading';
import CardContext from "../../functions/CardContext";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

const EditarCadastro = () => {
  const history = useHistory();
  const loadContexto = useContext(CardContext);
  const { form, onChange, resetForm } = useForm({
    cpf: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    autorização(history);
    // getProfile().then((res) => {
    //   form.cpf = res.cpf;
    //   form.email = res.email;
    //   form.name = res.name;
    // });
  }, []);

  const handleInput = (event) => {
    onChange(event.target.name, event.target.value);
  };

  const onClickBotao = (event) => {
    event.preventDefault();

    const body = {
      cpf: form.cpf,
      email: form.email,
      name: form.name,
    };
    upDateProfile(body, loadContexto.dispatch);
  };

  const teste = () => {
    console.log(form);
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <div className={"telatoda"}>
        <Header title={"Editar"} back />
        <button onClick={teste}>teste</button>
        <form onSubmit={onClickBotao}>
          <Text
            label={"Nome"}
            value={form.name}
            name={"name"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Text
            label={"Email"}
            value={form.email}
            name={"email"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Text
            label={"CPF"}
            value={form.cpf}
            name={"cpf"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Button
            id={"submit-button"}
            type={"submit"}
            title={"Salvar"}
            active={true}
          />
        </form>

        <Loading openLoading={loadContexto.loadIsOpen} />
      </div>
    </ThemeProvider>
  );
};

export default EditarCadastro;
