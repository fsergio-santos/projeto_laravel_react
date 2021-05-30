
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ListarAutor from './autor/Listar';
import IncluirAutor from './autor/Incluir';
import AlterarAutor from './autor/Alterar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
             <Switch>
                <Route path="/autor/listar" component={ListarAutor}/>
                <Route path="/autor/inserir" component={IncluirAutor}/>
                <Route path="/autor/alterar/:id" component={AlterarAutor}/>
             </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
