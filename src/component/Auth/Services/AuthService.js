
import jwtDecode from 'jwt-decode'
import axios from 'axios'
export function login(data){
    return axios.post("http://localhost:9000/api/auth", data);
}

export function getCurrentUser() {
    try{
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    }catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
}