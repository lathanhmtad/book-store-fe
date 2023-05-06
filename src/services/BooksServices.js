import axios from "axios"

import API_BASE_URL from './BaseURL'

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