import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from "../api";
import Botao from "../components/Botao";
import Menu from "../components/Menu";
import circles from "../html-css-template/imgs/half-circles-pink-blue.png";

function Editar() {
  //esse useParams recupera algo que veio como parametro na url
  const { id } = useParams();

  const history = useHistory();


  const [nome, setNome] = useState("");
  const [artista, setArtista] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [url, setUrl] = useState("");

  //Esse useEffect busca uma música pelo id passado na url, 
  //e "seta" os valores do useState, que são jogados nos inputs
  //do html
  useEffect(() => {
    async function getById() {
      const resposta = await api
        .get(`/${id}`)
        .then((resposta) => {
          setAno(resposta.data.lancamento);
          setArtista(resposta.data.artista);
          setGenero(resposta.data.categoria);
          setNome(resposta.data.nome);
          setUrl(resposta.data.url);
        })
        .catch((erro) => {
          console.log("Erro ao buscar música pelo id");
        });
    }

    getById();
  }, []);

  //essa função faz o PUT com os novos valores digitados nos inputs
  function atualizarMusica(e){
    e.preventDefault();

    api.put(`${id}`,{
      nome: nome,
      artista: artista,
      categoria: genero,
      lancamento: ano,
      url:url
    }).then((resposta) => {
      history.push("/musicas")
    }).catch((erro) => {
      alert("Erro ao alterar música!")
    })
  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>editar</h1>

            <br />

            <form onSubmit={atualizarMusica}>
              <label>
                Música: <br />
                <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
              </label>
              <br />
              <label>
                Artista: <br />
                <input type="text" onChange={e => setArtista(e.target.value)} value={artista}  />
              </label>
              <br />
              <label>
                Categoria: <br />
                <input type="text" onChange={e => setGenero(e.target.value)} value={genero} />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input type="text" onChange={e => setAno(e.target.value)} value={ano} />
              </label>
              <br />
              <label>
                Imagem (url): <br />
                <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
              </label>
              <br />
              
              <button className="btn" type="submit"> ATUALIZAR </button>

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
