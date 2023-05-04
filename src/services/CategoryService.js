import axios from "axios"

// const API_BASE_URL = 'http://localhost:8080/book-store-be/api/v1'
const API_BASE_URL = 'http://192.168.1.98:8080/book-store-be/api/v1'

axios.defaults.withCredentials = true;

class CategoryService {
    getAll() {
        return axios.get(API_BASE_URL + '/category')
    }
}

export default new CategoryService()