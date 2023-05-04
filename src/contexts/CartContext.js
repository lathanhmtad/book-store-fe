import React, {createContext, useState, useEffect} from 'react'

// create context 
export const CartContext = createContext()

const CartProvider = ({children}) => {
    // cart state
    const [cart, setCart] = useState([])

    // item amount state
    const [itemAmount, setItemAmount] = useState(0)

    // total price state
    const[total, setTotal] = useState(0)

    // add to cart
    const addToCart = (book, id) => {

    }

    return <CartContext.Provider value={{cart, addToCart, itemAmount}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider