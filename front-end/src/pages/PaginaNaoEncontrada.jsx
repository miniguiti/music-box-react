import React from "react";
import BotaoAzul from "../components/Botao";
import Menu from "../components/Menu";
import target from '../html-css-template/imgs/target-red.png'

function PaginaNaoEncontrada() {
  return (
    <>
      <Menu />
      <div class="container">
        <div class="add-music">

            <div class="formulario">

                <h1>404</h1>

                <p class="subtitle">se perdeu? nada para ver por aqui...</p>
                <BotaoAzul/>
            </div>

            <div class="img-lateral">
                <img src={target} alt="" />
            </div>

        </div>
    </div>
    </>
  );
}

export default PaginaNaoEncontrada;
