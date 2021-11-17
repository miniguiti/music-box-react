import axios from 'axios'

const api = axios.create({
    baseURL : "sua url do mock api aqui"
});

export default api;