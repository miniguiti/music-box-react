import React from "react";
import BotaoAzul from "../components/Botao";
import Menu from "../components/Menu";

import waves from '../html-css-template/imgs/sound-waves-pink.png'

function PaginaInicial() {
  return (
    <>
      <Menu />
      <div className="container index">
        <div className="index-content">
          <div className="box-text-index">
            <div className="info-index">
              <p className="display">a música certa para o seu mood</p>
              <p className="subtitle">
                organize suas músicas preferidas por categorias e aproveite cada
                batida
              </p>
            </div>
            <div className="img-index"></div>
            <BotaoAzul destino="/musicas" texto="faça parte"/>
          </div>
          <img src={waves} alt="" className="index-img" />
        </div>
      </div>
    </>
  );
}

export default PaginaInicial;
