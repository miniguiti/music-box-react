import React, { useState } from "react";
import api from "../api";
import Botao from "../components/Botao";
import Menu from "../components/Menu";
import circles from "../html-css-template/imgs/half-circles-pink-blue.png";

function Adicionar() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [artistaDigitado, setArtistaDigitado] = useState("");
  const [generoDigitado, setGeneroDigitado] = useState("");
  const [anoDigitado, setAnoDigitado] = useState("");
  const [urlDigitada, setUrlDigitada] = useState("");

  function cadastrar(e){
    e.preventDefault();

    api.post("",{
nome: nomeDigitado,
artista: artistaDigitado,
categoria: generoDigitado,
lancamento: anoDigitado,
url: urlDigitada
    }).then((resposta) => {
      alert("Música cadastrada!")
    }).catch((erro) => {
      console.log("Erro ao cadastrar música!")
    });

  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input type="text" onChange={e => setNomeDigitado(e.target.value)}/>
              </label>
              <br />
              <label>
                Artista: <br />
                <input type="text" onChange={e => setArtistaDigitado(e.target.value)}/>
              </label>
              <br />
              <label>
                Genêro: <br />
                <input type="text" onChange={e => setGeneroDigitado(e.target.value)} />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input type="text" onChange={e => setAnoDigitado(e.target.value)}/>
              </label>
              <br />
              <label>            
                Imagem (url): <br />
                <input type="text" onChange={e => setUrlDigitada(e.target.value)}/>
              </label>
              <br />
             <button type="submit">Enviar</button>
             
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

export default Adicionar;
