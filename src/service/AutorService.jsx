
import http from '../util/banco';

export const findAllAutors = async (paginaAtual,pageSize,dir,props,search) => {
    return (
        http.get('/autor/listar',{
           params:{
               paginaAtual,
               pageSize,
               dir,
               props,
               search
           }, 
        }).then( res => {
           return res.data;
        })
    )
} 


export const findAutorById = async ( id ) => {
    return (
        http.get(`/autor/alterar/${id}`)
            .then( res => { 
                return res.data; 
            }).catch( error => {
                return error.response;
            })
    )
}


export const createAutor = async ( autor ) => {
    return (
        http({
            method:'post',
            url:'/autor/salvar',
            data:autor,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            return res.data
        })

    )
}

export const updateAutor = async ( autor ) => {
    return (
        http({
            method:'post',
            url:`/autor/update/${autor.id}`,
            data:autor,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            console.log(res.data);
            return res.data
        }).catch(error => {
            return error.response
        })

    )
}