import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { Text } from "./styles";
import { useForm, autorização } from "../../functions";
import "./EditarEndereco.css";
import { useHistory } from "react-router-dom";
import { pegaEndereço, upDateAddress } from "../../functions/integracao";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

const EditarCadastro = () => {
  const { form, onChange, resetForm } = useForm({
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    autorização(history);

    pegaEndereço().then((res) => {
      form.logradouro = res.street;
      form.numero = res.number;
      form.complemento = res.complement;
      form.bairro = res.neighbourhood;
      form.cidade = res.city;
      form.estado = res.state;
    });
  }, []);

  const handleInput = (event) => {
    onChange(event.target.name, event.target.value);
  };

  const history = useHistory();

  const onClickBotao = async (event) => {
    event.preventDefault();

    const body = {
      street: form.logradouro,
      number: form.numero,
      neighbourhood: form.bairro,
      city: form.cidade,
      state: form.estado,
      complement: form.complemento,
    };

    await upDateAddress(body);

    resetForm();
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <div className={"telatoda"}>
        <Header title={"Editar"} back />
  
        <form onSubmit={onClickBotao}>
          <Text
            label={"Logradouro"}
            value={form.logradouro}
            name={"logradouro"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Text
            label={"Número"}
            value={form.numero}
            name={"numero"}
            onChange={handleInput}
            min={1}
            variant={"outlined"}
            required
          />
          <Text
            label={"Complemento"}
            value={form.complemento}
            name={"complemento"}
            onChange={handleInput}
            variant={"outlined"}
          />
          <Text
            label={"Bairro"}
            value={form.bairro}
            name={"bairro"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Text
            label={"Cidade"}
            value={form.cidade}
            name={"cidade"}
            onChange={handleInput}
            variant={"outlined"}
            required
          />
          <Text
            label={"Estado"}
            value={form.estado}
            name={"estado"}
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
      </div>
    </ThemeProvider>
  );
};

export default EditarCadastro;
