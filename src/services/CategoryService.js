import axios from "axios"

import API_BASE_URL from './BaseURL'

axios.defaults.withCredentials = true;

class CategoryService {
    getAll() {
        return axios.get(API_BASE_URL + '/category')
    }
}

export default new CategoryService()