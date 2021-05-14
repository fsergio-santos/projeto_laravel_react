import React, { Component } from 'react';
import { findAllAutors } from '../service/AutorService';

class ListarAutor extends Component {

    constructor(){
        super()
        this.state = this.initState();
    }

  
    initState = () => ({
       autores:[], 
       paginaInicio:0,
       paginaFim:0,     
    })


    async componentDidMount(){
        const autores = await findAllAutors();   
        this.setState({
            autores:autores.data,
            paginaInicio:autores.current_page,
            paginaFim:autores.total,
        })
    }


    render() {

        const { autores } = this.state
   
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map( (autor) => (<tr key={autor.id}><td>{ autor.id }</td><td>{ autor.nome }</td></tr>))}
                        
                    </tbody>
                </table>

            </div>
        )
    }







}

export default ListarAutor;