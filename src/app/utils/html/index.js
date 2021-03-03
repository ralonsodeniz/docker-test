import axios from 'axios'

const config = {
    baseURL: 'http://localhost:8080/api',
}

export default axios.create(config);
