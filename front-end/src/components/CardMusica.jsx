import React from "react";

function CardMusica(props) {
  return (
    <>
      <div class="card-music">
        <div class="info-music">
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
          <p class="icons">
            <img src="../imgs/edit-icon.png" alt="" />
            <img src="../imgs/delete-icon.png" alt="" />
          </p>
        </div>
      </div>
    </>
  );
}

export default CardMusica;
