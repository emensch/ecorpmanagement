import axios from 'axios';

export default function() {
    if(typeof window === 'undefined') {
        return axios.create({baseURL: 'http://localhost:1337/api'})
    } else {
        return axios.create({baseURL: '/api'})
    }
}