import { useContext } from "react"

import { NavLink } from "react-router-dom"

import { AiOutlineShoppingCart } from 'react-icons/ai'

import './carticon.style.css'

import { CartContext } from "../../../contexts/CartContext"

const CartIcon = ({darkText}) => {
    const {itemAmount} = useContext(CartContext)


    return (
        <NavLink to='/cart' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'} flex align-center text-xl`}>
            <AiOutlineShoppingCart />
            <span className="cart-count">{itemAmount}</span>
        </NavLink>
    )
}

export default CartIcon