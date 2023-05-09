import axios from "axios"

import API_BASE_URL from './BaseURL'

axios.defaults.withCredentials = true;

class CartService {
    addToCart(data) {
        return axios.post(API_BASE_URL + '/cart', data)
    }

    removeFromCart(data) {
        return axios.post(API_BASE_URL + '/cart-delete', data)
    }

    updateQuantityForCart(data) {
        return axios.post(API_BASE_URL + '/cart-update', data)
    }

    getCartFromDatabase(data) {
        return axios.get(API_BASE_URL + '/cart-get', {
            params: {
                id: data
            }
        })
    }
    
}

export default new CartService()