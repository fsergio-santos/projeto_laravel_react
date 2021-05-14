
import http from '../util/banco';

export const findAllAutors = async () => {
    return (
        http.get('/autor/listar')
            .then( response => {
                return response.data;
            })
    )
} 