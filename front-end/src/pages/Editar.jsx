import React from "react";
import Botao from "../components/Botao";
import Menu from "../components/Menu";
import circles from '../html-css-template/imgs/half-circles-pink-blue.png'

function Editar() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="add-music">
            <div className="formulario">
                <h1>editar</h1>

                <br/>

                <form>
                    <label>Música: <br/><input type="text" /></label>
                    <br/>
                    <label>Artista: <br/><input type="text" /></label>
                    <br/>
                    <label>Categoria: <br/><input type="text" /></label>
                    <br/>
                    <label>Ano de Lançamento: <br/><input type="text" /></label>
                    <br/>
                    <label> Imagem (url): <br/><input type="text" /></label>
                    <br/>
                    <Botao texto="enviar"/>

                </form>
            </div>

            <div className="img-lateral">
                <img src={circles} alt="" />
            </div>
        </div>
    </div>
    </>
  );
}

export default Editar;
