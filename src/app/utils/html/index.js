import axios from 'axios'

const config = {
    baseURL: 'http://35.195.252.149:8080/api',
}

export default axios.create(config);
