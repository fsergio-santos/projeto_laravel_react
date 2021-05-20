
import http from '../util/banco';

export const findAllAutors = async () => {
    return (
        http.get('/autor/listar')
            .then( response => {
                return response.data;
            })
    )
} 


export const createAutor = async ( autor ) => {
    console.log(" passando pela rotina de inclusão do autor ");
    return (
        http({
            method:'post',
            url:'/autor/salvar',
            data:autor,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            console.log(res.data);
            return res.data
        })

    )
}