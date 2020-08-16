import React, { useState } from "react";
import { useHistory } from "react-router";
import "./PaginaInicial.css";
import FutureEatsLogo from '../../img/Logo.png'

const PaginaInicial = (props) => {
  
  const history = useHistory()
  
  const goToLoginPage = () => {
    history.push("/Login")
  }
  return (
            <div className="PageWrapper">
              <div className="logoWrapper"> <img id="logo" src={FutureEatsLogo} alt="FutureEats Logo" onClick={goToLoginPage}></img></div>           
            </div>
        )
};

export default PaginaInicial;