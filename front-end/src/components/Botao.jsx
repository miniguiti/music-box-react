import React from "react";
import { Link } from "react-router-dom";

function BotaoAzul(props) {
  return (
    <>
    <Link to={props.destino}>
      <button class="btn">{props.texto}</button>
    </Link>
    </>
  );
}

export default BotaoAzul;
