import React, {useContext} from "react";

import CartItemCard from "../../cards/cartitemcard/CartItemCard.js";
import './cartitemscontainer.style.css';

// import context
import { CartContext } from "../../../contexts/CartContext.js";

const CartItemsContainer = () => {

    const {cart, total} = useContext(CartContext)


    return (
        <section className="cart-items-container">
            <div className="container">
                <React.Fragment>
                    <h2>Cart</h2>
                    {cart.map(item => (
                        <CartItemCard key={item.id} book={item}/>
                    ))}
                    <h2>Total Amount =  {total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h2>
                    <button className="button-primary">Proceed to Checkout</button>
                </React.Fragment>
            </div>
        </section>
    )
}

export default CartItemsContainer;