import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL: 'http://localhost:5001/api/v1/notebookapp/'
});

export default BACKEND_URL;