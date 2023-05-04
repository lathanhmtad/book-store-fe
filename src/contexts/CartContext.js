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
        const newItem = {...book, amount: 1}

        // check if the item is already in the cart
        const cartItem = cart.find(item => {
            return item.id === id
        }) 

        // if cart item is already in the cart
        if(cartItem) {
            const newCart = [...cart].map(item => {
                if(item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                }
                else {
                    return item
                }
            })
            setCart(newCart)
        }
        else {
            setCart([...cart, newItem])
        }
    }


    return <CartContext.Provider value={{cart, addToCart, itemAmount}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider