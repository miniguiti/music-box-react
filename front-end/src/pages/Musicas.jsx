import React from "react";
import BotaoAzul from "../components/Botao";
import CardMusica from "../components/CardMusica";
import Menu from "../components/Menu";

function Musicas() {
  return (
    <>
      <Menu />

      <div class="container">
        <div class="filter">
          <BotaoAzul texto="Adicionar"/>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">
            <CardMusica musica="Nome Musica 1"  ano="2000" artista="Zé"/>
            <CardMusica musica="Nome Musica 2" categoria="Nome categoria" ano="0000" artista="Nickname"/>
            <CardMusica musica="Nome Musica 3" categoria="Nome categoria" ano="0000" artista="Nickname"/>
            <CardMusica musica="Nome Musica 4" categoria="Nome" ano="0000" artista="Nickname"/>
            <CardMusica musica="Nome Musica 5" categoria="Nome categoria" ano="1999" artista="Nickname"/>
            <CardMusica musica="Nome Musica 6" categoria="Nome categoria" ano="0000" artista="Nickname"/>
            <CardMusica musica="Nome Musica 7" categoria="Nome categoria" ano="0000" artista="Jão"/>
            <CardMusica musica="Nome Musica 8" categoria="Nome categoria" ano="0000" artista="Nickname"/>
            <CardMusica musica="Nome Musica 9" categoria="Nome categoria" ano="0000" artista="Nickname"/>   
        </div>
      </div>
    </>
  );
}

export default Musicas;
