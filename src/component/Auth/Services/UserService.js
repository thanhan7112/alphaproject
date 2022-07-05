import axios from "axios";

export function register(data) {
    return axios.post(`http://localhost:9000/api/user`, data)
}