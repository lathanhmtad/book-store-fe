import axios from "axios"

const API_BASE_URL = 'http://localhost:8080/book-store-be/api/v1'
// const API_BASE_URL = 'http://192.168.1.98:8080/book-store-be/api/v1'

axios.defaults.withCredentials = true;

class BooksServices {
    createBook(data) {
        return axios.post(API_BASE_URL + '/books', data)
    }

    getAll() {
        return axios.get(API_BASE_URL + '/books')
    }

    getPage(page, size) {
        return axios.get(API_BASE_URL + '/books/pagination', {
            params: {
                page,
                size
            }
        })
    }
}

export default new BooksServices()