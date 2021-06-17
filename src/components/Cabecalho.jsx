import React from 'react';
import { Link } from 'react-router-dom';


class Cabecalho extends React.Component {

    constructor(props){
        super(props)
    }

    render() { 
        return ( 
          <div className="pt-3">  
            <div className="app-title">
            <h1>
              <i className="fa fa-edit">{this.props.tituloPagina}</i>
            </h1>
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-search fa-lg"></i>
              </li>
              <li className="breadcrumb-item">
                <Link to={this.props.path}>{this.props.tituloPesquisa}</Link>
              </li>
            </ul>
          </div>
          </div>
         );
    }
}
 
export default Cabecalho;