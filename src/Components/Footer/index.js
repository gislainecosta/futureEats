import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { FooterContainer } from "./styles";

import home from "../../img/home.svg";
import homeSelected from "../../img/home-selected.svg";
import carrinho from "../../img/carrinho.svg";
import carrinhoSelected from "../../img/carrinho-selected.svg";
import perfil from "../../img/perfil.svg";
import perfilSelected from "../../img/perfil-selected.svg";

const Footer = (props) => {
  const [homeTabImage, setHomeTabImage] = useState(home);
  const [cartTabImage, setCartTabImage] = useState(carrinho);
  const [profileTabImage, setProfileTabImage] = useState(perfil);

  useEffect(() => {
    switch (props.page) {
      case "carrinho":
        setCartTabImage(carrinhoSelected);
        break;
      case "perfil":
        setProfileTabImage(perfilSelected);
        break;
      default:
        setHomeTabImage(homeSelected);
    }
  }, [props.page]);

  let history = useHistory();

  return (
    <FooterContainer>
      <Tabs variant={"fullWidth"} textColor={"primary"} value={props.page}>
        <Tab
          value={"home"}
          icon={<img src={homeTabImage} alt={"Ícone Home"} />}
          onClick={() => history.push("/home")}
        />
        <Tab
          value={"carrinho"}
          icon={<img src={cartTabImage} alt={"Ícone Carrinho"} />}
          onClick={() => history.push("/carrinho")}
        />
        <Tab
          value={"perfil"}
          icon={<img src={profileTabImage} alt={"Ícone Perfil"} />}
          onClick={() => history.push("/perfil")}
        />
      </Tabs>
    </FooterContainer>
  );
};

export default Footer;
