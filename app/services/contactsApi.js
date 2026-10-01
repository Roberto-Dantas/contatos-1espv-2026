// utils/api.js
import axios from 'axios';

// Configuração base do axios
const contactsApi = axios.create({
    baseURL: ' https://6abc4106b2118ed7abb9a6aa.mockapi.io', // MockAPI
    timeout: 10000, // 10 segundos (API online pode ser mais lenta)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default contactsApi;