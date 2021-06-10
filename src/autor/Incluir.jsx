import React from "react";
import { Link } from "react-router-dom";
import { createAutor } from "../service/AutorService";
import { validarAutor } from "../validacao/ValidAutor";

class IncluirAutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
  }

  initState = () => ({
    id: undefined,
    nome: "",
    pseudonimo: "",
    data_nascimento: "",
    sexo: "",
    rg: "",
    cpf: "",
    endereco: "",
    cep: "",
    cidade: "",
    bairro: "",
    email: "",
    telefone_celular: "",
    telefone_fixo: "",

    toReturn:false,


    formValidation :{
      nome: [],
      pseudonimo: [],
      data_nascimento: [],
      sexo: [],
      rg: [],
      cpf: [],
      endereco: [],
      cep: [],
      cidade: [],
      bairro: [],
      email: [],
      telefone_celular: [],
      telefone_fixo: [],

      validNome: false,
      validPseudonimo: false,
      validData_nascimento:false,
      validSexo: false,
      validRg: false,
      validCpf: false,
      validEndereco: false,
      validCep: false,
      validCidade: false,
      validBairro: false,
      validEmail: false,
      validTelefone_celular: false,
      validTelefone_fixo: false,

    }

  });

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };


  validarDigitacaoAutor() {
    let state = validarAutor(this.state);
    this.setState({
      toReturn : state.toReturn,
      formValidation: state.formValidation,
    })
    return state.toReturn;
  }

  async handleSubimitAutor(e){
    e.preventDefault();  


    if ( this.validarDigitacaoAutor() === false ) {
      
          const {
              nome,
              pseudonimo,
              data_nascimento,
              sexo,
              rg,
              cpf,
              endereco,
              cep,
              cidade,
              bairro,
              email,
              telefone_celular,
              telefone_fixo,
            } = this.state;

        
          let autor = {
              nome:nome,
              pseudonimo:pseudonimo,
              data_nascimento:data_nascimento,
              sexo:sexo,
              rg:rg,
              cpf:cpf,
              endereco:endereco,
              cep:cep,
              cidade:cidade,
              bairro:bairro,
              email:email,
              telefone_celular:telefone_celular,
              telefone_fixo:telefone_fixo, 
          } 

          const resposta_servidor = await createAutor(autor); 

          this.setState({
              state:this.initState()
          }, this.listarAutor() )

    } 
  }


  listarAutor = () => {
      this.props.history.push('/autor/listar');
  }

  render() {
    const {
      nome,
      pseudonimo,
      data_nascimento,
      sexo,
      rg,
      cpf,
      endereco,
      cep,
      cidade,
      bairro,
      email,
      telefone_celular,
      telefone_fixo,
      formValidation,
    } = this.state;

    return (
      <div className="container pt-5">
        <div className="tile">
          <div className="tile-body">
            <form onSubmit={(e) => this.handleSubimitAutor(e)}> 
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="nome" className="control-label">
                      Nome:
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={nome}
                      onChange={(e) => this.onChange(e)}
                      id="nome"
                      className={formValidation.validNome === true ? "form-control is-invalid" : "form-control"}
                    />
                    {
                      formValidation.validNome && (
                         <div className="invalid-feedback">
                           {
                             formValidation.nome.map((erro, index ) => {
                               return (
                                   <p key={index} style={{ margin: "0"}}>
                                     <span>{erro}</span>
                                  </p>
                               )
                             })
                           }

                         </div> 
                      ) 
                    }


                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="pseudonimo" className="control-label">
                      Pseudônimo:
                    </label>
                    <input
                      type="text"
                      name="pseudonimo"
                      value={pseudonimo}
                      onChange={(e) => this.onChange(e)}
                      id="pseudonimo"
                      className="form-control "
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-3">
                  <div className="form-group">
                    <label htmlFor="data_nascimento" className="control-label">
                      Data Nascimento:
                    </label>
                    <input
                      type="text"
                      name="data_nascimento"
                      value={data_nascimento}
                      onChange={(e) => this.onChange(e)}
                      id="data_nascimento"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3">
                  <div className="form-group">
                    <label htmlFor="rg" className="control-label">
                      RG:
                    </label>
                    <input
                      type="text"
                      name="rg"
                      value={rg}
                      onChange={(e) => this.onChange(e)}
                      id="rg"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3">
                  <div className="form-group">
                    <label htmlFor="cpf" className="control-label">
                      CPF:
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={cpf}
                      onChange={(e) => this.onChange(e)}
                      id="cpf"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3">
                  <div className="form-group">
                    <label htmlFor="sexo" className="control-label">
                      SEXO:
                    </label>
                    <select
                      type="text"
                      name="sexo"
                      value={sexo}
                      onChange={(e) => this.onChange(e)}
                      id="sexo"
                      className="form-control "
                    >
                      <option value="">Selecione o Sexo</option>
                      <option value="F">Feminino</option>
                      <option value="M">Masculino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="endereco" className="control-label">
                      Endereço:
                    </label>
                    <input
                      type="text"
                      name="endereco"
                      value={endereco}
                      onChange={(e) => this.onChange(e)}
                      id="endereco"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="cidade" className="control-label">
                      Cidade:
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      value={cidade}
                      onChange={(e) => this.onChange(e)}
                      id="cidade"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="bairro" className="control-label">
                      Bairro:
                    </label>
                    <input
                      type="text"
                      name="bairro"
                      value={bairro}
                      onChange={(e) => this.onChange(e)}
                      id="bairro"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="cep" className="control-label">
                      Cep:
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={cep}
                      onChange={(e) => this.onChange(e)}
                      id="cep"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <label htmlFor="email" className="control-label">
                      E-mail:
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => this.onChange(e)}
                      id="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="telefone_celular" className="control-label">
                      Celular:
                    </label>
                    <input
                      type="text"
                      name="telefone_celular"
                      value={telefone_celular}
                      onChange={(e) => this.onChange(e)}
                      id="telefone_celular"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="telefone_fixo" className="control-label">
                      Fixo:
                    </label>
                    <input
                      type="text"
                      name="telefone_fixo"
                      value={telefone_fixo}
                      onChange={(e) => this.onChange(e)}
                      id="telefone_fixo"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="center">
                <button type="submit" className="btn btn-primary btn-lg" title="Incluir novo Registro">
                  Salvar Dados do Autor
                </button>
                <Link to="/autor/listar"  className="btn btn-secondary btn-lg ml-3" title="Cancelar a Inclusão">
                  Cancelar Inclusão do Autor
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default IncluirAutor;
