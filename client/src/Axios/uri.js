import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL: 'https://notebook-app-gi2h.onrender.com/api/v1/notebookapp/'
});

export default BACKEND_URL;