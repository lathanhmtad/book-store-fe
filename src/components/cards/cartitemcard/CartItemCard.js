import ProductImg from '../../../img/mac-biec.jpg'

import './cartitemcard.style.css';

const CartItemCard = ({ bookData }) => {

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={ProductImg} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <div>
                    <h2>Mắt biết</h2>
                    <h6>Nguyễn Nhật Ánh</h6>
                </div>
                <p>Loại sách</p>
                <div>
                    Giá bán
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