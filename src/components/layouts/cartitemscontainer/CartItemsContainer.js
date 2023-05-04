import React, {useContext} from "react";

import CartItemCard from "../../cards/cartitemcard/CartItemCard.js";
import './cartitemscontainer.style.css';

// import context
import { CartContext } from "../../../contexts/CartContext.js";

const CartItemsContainer = () => {

    const {cart} = useContext(CartContext)

    const totalAmount = 5000
    return (
        <section className="cart-items-container">
            <div className="container">
                <React.Fragment>
                    <h2>Cart</h2>
                    <CartItemCard/>
                    <CartItemCard/>
                    {cart.map(item => <CartItemCard key={item.id} item={item}/>)}
                    <h2>Total Amount = &#8377;{totalAmount}</h2>
                    <button className="button-primary">Proceed to Checkout</button>
                </React.Fragment>
            </div>
        </section>
    )
}

export default CartItemsContainer;