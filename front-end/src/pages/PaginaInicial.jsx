import React from "react";
import BotaoAzul from "../components/Botao";
import Menu from "../components/Menu";

import waves from '../html-css-template/imgs/sound-waves-pink.png'

function PaginaInicial() {
  return (
    <>
      <Menu />
      <div class="container index">
        <div class="index-content">
          <div class="box-text-index">
            <div class="info-index">
              <p class="display">a música certa para o seu mood</p>
              <p class="subtitle">
                organize suas músicas preferidas por categorias e aproveite cada
                batida
              </p>
            </div>
            <div class="img-index"></div>
            <BotaoAzul/>
          </div>
          <img src={waves} alt="" class="index-img" />
        </div>
      </div>
    </>
  );
}

export default PaginaInicial;
