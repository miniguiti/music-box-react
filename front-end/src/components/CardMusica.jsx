import React from "react";
import deletarIcone from '../html-css-template/imgs/delete-icon.png'
import editarIcone from '../html-css-template/imgs/edit-icon.png'

function CardMusica(props) {

  const capaMusica = {
    backgroundImage: `url(${props.url})`
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
            <img src={editarIcone} alt="" />
            <img src={deletarIcone} alt="" />
          </p>
        </div>
      </div>
    </>
  );
}

export default CardMusica;
