import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Paginacao from "../components/Paginacao";

import { findAllAutors } from "../service/AutorService";

class ListarAutor extends Component {
  constructor() {
    super();
    this.state = this.initState();
    this.setNumberPaginaAtual = this.setNumberPaginaAtual.bind(this);
  }

  initState = () => ({
    autores: [],
    paginaAtual:1,
    pageSize:5,
    dir:'asc',
    props:'id',
    total:0,
    paginaFim:0,
    search:'',
  });

  componentDidMount() {
    this.loadData();
  }

  async loadData(){
    const { paginaAtual, pageSize, dir, asc, search} = this.state;
    const autores = await findAllAutors(paginaAtual,pageSize,dir,asc,search);
    this.setState({
      autores: autores.data,
      paginaAtual:autores.paginaAtual,
      pageSize:autores.pageSize,
      paginaFim:autores.paginaFim,
      total:autores.total,
    });
  }


  setNumberPaginaAtual = (pagina) => {
    this.setState({
      paginaAtual:pagina
    }, () => this.updateState())
  }

  updateState = () => {
    this.loadData();
  } 


  render() {
    const { autores, paginaAtual, pageSize, paginaFim, total } = this.state;

    return (
      <div>
        <div className="container">
          <div className="app-title">
            <h1>
              <i className="fa fa-edit">Lista de usuários</i>
            </h1>
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-search fa-lg"></i>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Menu Principal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="tile">
            <div className="tile-body">
              <div id="no-more-tables">
                <table className="table table-striped table-bordered table-hover cf ">
                  <thead className="cf">
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {autores.map( (autor) => (
                    <tr key={autor.id}>
                      <td>{ autor.id }</td>
                      <td>{ autor.nome }</td>
                      <td>
                        <Link className="btn btn-info btn-sm" to={`/autor/alterar/${autor.id}`}>
                          <i className="fa fa-pencil"></i>
                        </Link>
                        <a className="btn btn-danger btn-sm" href="#">
                          <i className="fa fa-trash"></i>
                        </a>
                        <a className="btn btn-warning btn-sm" href="#">
                          <i className="fa fa-address-book"></i>
                        </a>
                      </td>
                    </tr>
                    ))}

                  </tbody>
                </table>
                <Paginacao paginaAtual={paginaAtual}
                           pageSize={pageSize}
                           paginaFim={paginaFim}
                           total={total}
                           setRenderPaginaCorrente={(pagina) => this.setNumberPaginaAtual(pagina)}/>
                <Link className="btn btn-success btn-lg" to="/autor/inserir" title="Incluir novo Registro">
                  <i className="fa fa-plus-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListarAutor;
