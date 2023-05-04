import { NavLink } from "react-router-dom"

import { AiOutlineShoppingCart } from 'react-icons/ai'


import './carticon.style.css'

const CartIcon = ({cartCount, darkText}) => {
    return (
        <NavLink to='/cart' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'} flex align-center text-xl`}>
            <AiOutlineShoppingCart />
            <span className="cart-count">{cartCount}</span>
        </NavLink>
    )
}

export default CartIcon