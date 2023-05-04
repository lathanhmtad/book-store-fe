import React from "react";

import CartItemCard from "../../cards/cartitemcard/CartItemCard.js";
import './cartitemscontainer.style.css';

const CartItemsContainer = () => {

    const totalAmount = 5000
    return (
        <section className="cart-items-container">
            <div className="container">
                <React.Fragment>
                    <h2>Cart</h2>
                    <CartItemCard/>
                    <CartItemCard/>
                    <h2>Total Amount = &#8377;{totalAmount}</h2>
                    <button className="button-primary">Proceed to Checkout</button>
                </React.Fragment>
            </div>
        </section>
    )
}

export default CartItemsContainer;