import { useContext } from 'react';

import './cartitemcard.style.css';

import { CartContext } from '../../../contexts/CartContext'

import {IoMdRemove, IoMdAdd } from 'react-icons/io'


const CartItemCard = ({ book }) => {
    console.log(book)
    const { removeFromCart, decreaseAmount, increaseAmount } = useContext(CartContext)

    return (

        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={`data:${book.images[0].type};base64, ${book.images[0].data}`} alt={`${book.images[0].name}`} className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <div>
                    <h2>{book.bookName || book.name}</h2>
                    <h6>{book.author}</h6>
                </div>

                <div>
                    <p className='text-primary'>Loại sách</p>
                    <p>{book.category.name}</p>
                </div>

                <div>
                    <div>
                        <div className='text-primary'>Giá sách</div>
                        <div>{(book.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                </div>
                <div className='quantity'>
                    <div>Số lượng</div>
                    <div className='flex align-center justify-center'>
                        <IoMdRemove onClick={() => decreaseAmount(book,book.id)} className='cart-btn-decrease'/>
                        {book.amount}
                        <IoMdAdd onClick={() => increaseAmount(book.id)} className='cart-btn-increase'/>
                    </div>
                </div>
                <div>
                    <div>Thành tiền</div>
                    <div>
                        {(book.price * book.amount).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                    </div>
                </div>
                <button onClick={() => removeFromCart(book.id)} className='delete_btn'>Remove</button>
            </div>
        </section>
    )
}

export default CartItemCard;