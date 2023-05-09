import React, { createContext, useState, useEffect } from 'react'

// create context 
import CartService from '../services/CartService'

// import services
export const CartContext = createContext()



const CartProvider = ({ children }) => {
    // cart state
    const [cart, setCart] = useState([])

    // item amount state
    const [itemAmount, setItemAmount] = useState(0)

    // total price state
    const [total, setTotal] = useState(0)

    // calculate total cart
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount, 0)
        setTotal(total)
    })

    // update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    })

    // add to cart
    const addToCart = (book, id) => {
        const values = new FormData()
        values.append('bookId', book.id)
        values.append('author', book.author)
        values.append('price', book.price)
        values.append('name', book.name)
        values.append('categoryId', book.category.id)
        const customer = localStorage.getItem('customer')
        values.append('customerId', JSON.parse(customer).id)

        const newItem = { ...book, amount: 1 }

        // check if the item is already in the cart
        const cartItem = cart.find(item => {
            return item.id === id
        })

        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                }
                else {
                    return item
                }
            })
            values.append('amount', cartItem.amount + 1)

            CartService.updateQuantityForCart(values)
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })

            setCart(newCart)
        }
        else {
            values.append('amount', 1)
            CartService.addToCart(values)
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })

            setCart([...cart, newItem])
        }
    }

    // remove from cart
    const removeFromCart = (id) => {
        const values = new FormData()
        const customer = localStorage.getItem('customer')
        values.append('bookId', id)
        values.append('customerId', JSON.parse(customer).id)
        
        CartService.removeFromCart(values)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })

        const newCart = cart.filter(item => {
            return item.id != id
        })
        setCart(newCart)
    }

    const getCartFromDatabase = (customerId) => {
        CartService.getCartFromDatabase(customerId)
            .then(response => {
                console.log(response.data)
                setCart(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        const customer = JSON.parse(localStorage.getItem('customer'))
        if(customer) {
            // get cart from database when user login
            getCartFromDatabase(customer.id)
        }
    }, [])

    // increase amount 
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id)
        addToCart(cartItem, id)
    }

    // decrease amount
    const decreaseAmount = (book, id) => {
        const values = new FormData()
        values.append('bookId', book.id)
        values.append('author', book.author)
        values.append('price', book.price)
        values.append('name', book.name)
        const customer = localStorage.getItem('customer')
        values.append('customerId', JSON.parse(customer).id)
        const cartItem = cart.find(item => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 }
                }
                else {
                    return item
                }
            })
            values.append('amount', cartItem.amount - 1)
            CartService.updateQuantityForCart(values)
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })

            setCart(newCart)
            setCart(newCart)
        }
        if (cartItem.amount < 2) {
            removeFromCart(id)
        }
    }


    return <CartContext.Provider value={{ cart, addToCart, itemAmount, removeFromCart, decreaseAmount, increaseAmount, total, getCartFromDatabase }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider