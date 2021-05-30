

export const validarAutor = (state) => {

    let {
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
        toReturn,
        formValidation,
      } = state;


      if ( nome.trim().length > 100 ) {
          formValidation.nome.push("O nome do autor não pode ter mais do que 100 caracteres!");
          formValidation.validNome = true;
          toReturn = true;
      }

      if ( nome.trim().length === 0 ) {
        formValidation.nome.push("O nome do autor tem que ser informado!");
        formValidation.validNome = true;
        toReturn = true;
      }
      
      if ( nome.trim().length < 10 ) {
        formValidation.nome.push("O nome do autor não pode ter menos do que 10 caracteres!");
        formValidation.validNome = true;
        toReturn = true;
      }

      state = { toReturn, formValidation }

      return state;   

}