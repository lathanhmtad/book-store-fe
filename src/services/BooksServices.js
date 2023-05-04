import axios from "axios"

const API_BASE_URL = 'http://localhost:8080/book-store-be/api/v1'

axios.defaults.withCredentials = true;

class BooksServices {
    createBook(data) {
        return axios.post(API_BASE_URL + '/books', data)
    }

    getAll() {
        return axios.get(API_BASE_URL + '/books')
    }
}

export default new BooksServices()