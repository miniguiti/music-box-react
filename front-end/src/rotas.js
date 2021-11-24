import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Adicionar from './pages/Adicionar';
import Editar from './pages/Editar';
import Musicas from './pages/Musicas';
import PaginaInicial from './pages/PaginaInicial';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

//BrowserRouter: da acesso para usar os recursos de rotas
//Switch: permite navegar entre as rotas
//Route : cria a rota em si

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
               <Route exact path="/" component={PaginaInicial}/> 
               <Route exact path="/adicionar" component={Adicionar}/>
               <Route exact path="/editar/:id" component={Editar}/>
               <Route exact path="/musicas" component={Musicas}/>
               <Route exact path="*" component={PaginaNaoEncontrada}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;