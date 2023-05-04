import axios from "axios"

const API_BASE_URL = 'http://localhost:8080/book-store-be/api/v1'

axios.defaults.withCredentials = true;

class AuthenticationService {
    register(data) {
        return axios.post(API_BASE_URL + '/register', data)
    }

    verificationCode(data) {
        return axios.post(API_BASE_URL + '/verify', data)
    }

    login(data) {
        return axios.post(API_BASE_URL + '/login', data)
    }
}

export default new AuthenticationService()