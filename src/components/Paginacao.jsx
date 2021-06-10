
import React from 'react';

const Paginacao = ({ paginaAtual, pageSize, paginaFim, total, setRenderPaginaCorrente }) => {

let currentNumber = paginaAtual + 1;

let start = 0;
let size = 0;

let pageLength = pageSize > 5 ? 5 : pageSize;

const pages = [];

if ( total <= pageLength){
    start = 1;
    size = paginaFim
} else {
    if ( currentNumber <= pageLength - pageLength / 2){
        start = 1;
        size = pageLength;
    } else if ( currentNumber >= paginaFim - pageLength / 2){
        start = 1;
        size = pageLength;
    } else if ( currentNumber >= paginaFim - pageLength / 2){
        start = paginaFim - pageLength + 1;
        size = pageLength;
    } else {
        start = Math.ceil(currentNumber - pageLength / 2);
        size = pageLength;
    }
}


for ( let i = 0; i < size ; i++ ){
    pages.push(start+i)
}

const renderPrimeiraPagina = () =>{
    setRenderPaginaCorrente(1)
}

const renderPrevPagina =  ( pagina ) => {
    setRenderPaginaCorrente(pagina);
}

const renderPaginaCorrente = (pagina) => {
    setRenderPaginaCorrente(pagina);
}

const renderProximaPagina = (pagina) => {
    setRenderPaginaCorrente(pagina);
}

const renderUltimaPagina = () => {
    setRenderPaginaCorrente(paginaFim - 1);
}

return (
        <React.Fragment>
             <div className="box-footer clearfix">
                 <div className="row">
                     <div className="col-xs-12 col-md-4">
                         <div className="pagination">
                             <p>
                                 Mostrando { pageSize * paginaAtual + 1}
                                 <span className="badge badge-secondary"></span>
                                 de {Math.ceil(total / pageSize)} Páginas 
                                 <span className="badge badge-secondary"></span>
                                 de { total }
                                 <span className="badge badge-secondary"></span>
                                 Registros de cadastrados  
                             </p>
                         </div>
                     </div>
                 </div>
                 <div className="col-xs-12 col-md-8">
                     <ul className="pagination pull-right">

                        <li className={ paginaAtual === 0 ? "page-item disabled" : "page-item"}>
                            <button onClick={() => renderPrevPagina()}
                              className="page-link btn btn-sm">
                              Primeira
                            </button>
                        </li>  
                        <li className={ paginaAtual === 0 ? "page-item disabled" : "page-item"}>
                            <button onClick={() => renderPrimeiraPagina(paginaAtual)}
                              className="page-link btn btn-sm">
                              <i className="fa fa-angle-left"></i> 
                            </button>
                        </li>
                        
                        {
                            pages.map((pagina) =>{
                                return (
                                    <li>
                                        <a  onClick={() => renderPaginaCorrente(pagina)} 
                                            className="page-link">
                                            {pagina}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li className={ paginaAtual === paginaFim ? "page-item disabled" : "page-item"}>
                            <button onClick={() => renderProximaPagina(paginaAtual)}
                              className="page-link btn btn-sm">
                              <i className="fa fa-angle-right"></i> 
                            </button>
                        </li>
                        <li className={ paginaAtual === paginaFim ? "page-item disabled" : "page-item"}>
                            <button onClick={() => renderUltimaPagina(paginaAtual)}
                              className="page-link btn btn-sm">
                              Ultima
                            </button>
                        </li>

                     </ul>
                 </div>
             </div>

        </React.Fragment>
    )

}

export default Paginacao;