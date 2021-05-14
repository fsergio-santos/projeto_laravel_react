
import axios from 'axios'
import { SERVIDOR } from './config';

const http = axios.create({
    baseURL : SERVIDOR,
});


export default http;