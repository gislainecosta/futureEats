import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Password from "../../Components/InputPassword";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vw;
  margin-left: auto;
  margin-right: auto;
`;

export const Imagem = styled.img`
  display: flex;
  justify-content: center;
  margin-top: 13.75vh;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerInput = styled.div`
  display: grid;
  justify-items: center;
  grid-auto-columns: 1fr;
  grid-gap: 2.5vh;
`;

export const Paragrafo = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4.38vh;
  margin-bottom: 2.6vh;
  font-size: 1em;
  padding: 12px;
`;

export const Input = styled(TextField)`
  width: 91.11vw;
  height: 8.75vh;
  margin-top: 2.5vh;
  margin-right: 4.44vw;
  margin-left: 4.44vw;
`;
export const Paragrafo2 = styled.p`
  display: flex;
  margin-top: 4.38vh;
  justify-content: center;
`;
export const Senha = styled(Password)`
  width: 91.11vw;
  height: 8.75vh;
  margin-top: 2.5vh;
  margin-right: 4.44vw;
  margin-left: 4.44vw;
`;

export const Linki = styled(Link)`
  text-decoration: none;
`;
