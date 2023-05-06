import axios from "axios"

import API_BASE_URL from './BaseURL'

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