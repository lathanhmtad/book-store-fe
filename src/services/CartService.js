import axios from "axios"

const API_BASE_URL = 'http://localhost:8080/book-store-be/api/v1'
// const API_BASE_URL = 'http://192.168.1.98:8080/book-store-be/api/v1'

axios.defaults.withCredentials = true;

class CartService {
    addToCart(data) {
        return axios.post(API_BASE_URL + '/cart', data)
    }

    removeFromCart(data) {
        return axios.delete(API_BASE_URL + '/cart', data)
    }

    // updateQuatityForCart()
    
}

export default new CartService()