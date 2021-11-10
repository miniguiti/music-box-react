import React, { useEffect, useState } from "react";
import api from "../api";
import BotaoAzul from "../components/Botao";
import CardMusica from "../components/CardMusica";
import Menu from "../components/Menu";

function Musicas() {
  //guarda as músicas
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    async function buscarMusicas(){
      const resposta = await api.get("")
      setMusicas(resposta.data)
      console.log("olha o que veio da api!!!",resposta.data)
    }
    buscarMusicas()
  },[]);

  return (
    <>
      <Menu />

      <div className="container">
        <div className="filter">
          <BotaoAzul/>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
           {
             musicas.map((musica) =>(
               <CardMusica
                artista={musica.artista}
                ano={musica.lancamento}
                musica={musica.nome}
                categoria={musica.categoria}
               />
             ))
           }
        </div>
      </div>
    </>
  );
}

export default Musicas;
