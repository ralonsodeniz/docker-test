import axios from 'axios'

const config = {
    baseURL: 'https://35.195.252.149:8080',
}

export default axios.create(config);
