import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import deletarIcone from '../html-css-template/imgs/delete-icon.png'
import editarIcone from '../html-css-template/imgs/edit-icon.png'

function CardMusica(props) {

  const capaMusica = {
    backgroundImage: `url(${props.url})`
  }

  function deletarMusica(){
    api.delete(`/${props.id}`)
    .then((resposta)=>{
      window.location.reload();
      console.log("DELETOU!!!")
    })
    .catch((erro) => {
      console.log("ERRO AO DELETAR!")
    })
  }

  return (
    <>
      <div className="card-music" style={capaMusica}>
        <div className="info-music">
          <p>
            <strong>música: </strong>{props.musica}
          </p>
          <p>
            <strong>artista: </strong>{props.artista}
          </p>
          <p>
            <strong>categoria: </strong>{props.categoria}
          </p>
          <p>
            <strong>ano: </strong>{props.ano}
          </p>
          <p className="icons">
            <Link to={`/editar/${props.id}`}>
              <img src={editarIcone} alt="" />
            </Link>
            <Link onClick={deletarMusica} to="/musicas">
              <img src={deletarIcone} alt="" />
            </Link>
              
          </p>
        </div>
      </div>
    </>
  );
}

export default CardMusica;
