import { useContext } from 'react';


import './cartitemcard.style.css';

import {CartContext} from '../../../contexts/CartContext'


const CartItemCard = ({ book }) => {
    const {removeFromCart} = useContext(CartContext)

    return (
        
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={`data:${book.images[0].type};base64, ${book.images[0].data}`} alt={`${book.images[0].name}`} className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <div>
                    <h2>{book.name}</h2>
                    <h6>{book.author}</h6>
                </div>
                <p>Loại sách</p>
                <div>
                    ₫{book.price} 
                </div>
                <div className='quantity'>
                    Số lượng    
                </div>
                <div>Tổng cộng</div>
                <button onClick={() => removeFromCart(book.id)} className='delete_btn'>Remove</button>
            </div>
        </section>
    )
}

export default CartItemCard;