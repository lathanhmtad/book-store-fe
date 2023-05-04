import ProductImg from '../../../img/mac-biec.jpg'

import './cartitemcard.style.css';

const CartItemCard = ({ book }) => {

    

    return (
        
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={ProductImg} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <div>
                    <h2>{book.name}</h2>
                    <h6>{book.author}</h6>
                </div>
                <p>Loại sách</p>
                <div>
                    {book.price}
                </div>
                <div className='quantity'>
                    Số lượng    
                </div>
                <div>Tổng cộng</div>
                <button className='delete_btn'>Remove from Cart</button>
            </div>
        </section>
    )
}

export default CartItemCard;