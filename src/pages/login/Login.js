import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router";

import {
  Container,
  Imagem,
  ContainerInput,
  Paragrafo,
  Input,
  Botao,
  Paragrafo2,
  Senha,
} from "./styles";
import Button from "../../Components/Button";
import logo from "../../img/logo-invertido.png";
import { Linki } from "./styles";
import { login } from "../../functions/integracao";
import Loading from "./../../Components/Loading/Loading";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b8b8b8",
      contrastText: "#b8b8b8",
    },
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [botaoAtivo, setBotaoAtivo] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (email !== "" && senha !== "") {
      setBotaoAtivo(true);
    } else {
      setBotaoAtivo(false);
    }
  }, [email, senha]);

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviarInputs = () => {
    setOpen(true);
    const body = {
      email: email,
      password: senha,
    };
    login(body, history);
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <Container>
        <Imagem src={logo} />

        <Paragrafo>Entrar</Paragrafo>

        <ContainerInput>
          <Input
            onChange={inputEmail}
            placeholder="email@email.com"
            type="text"
            value={email}
            required
            label="E-mail"
            variant="outlined"
          />
          <Senha
            onChange={inputSenha}
            label="Senha"
            value={senha}
            placeholder="Minimo 6 caracteres"
          />

          <Button
            active={botaoAtivo}
            title={"Entrar"}
            onClick={enviarInputs}
            type="submit"
          >
            Entrar
          </Button>
        </ContainerInput>

        <Paragrafo2>
          Nao possui cadastro?<Linki to="/registro">&nbsp; Clique aqui</Linki>
        </Paragrafo2>
        <Loading openLoading={open} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
