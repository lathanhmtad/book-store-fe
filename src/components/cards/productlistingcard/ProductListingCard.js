import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './productlistingcard.style.css'

import Popup from '../../popup/Popup'

import {CartContext} from '../../../contexts/CartContext'


const ProductListingCard = ({book}) => {

    // popup state
    const [popup, setPopup] = useState(false)

    const {addToCart} = useContext(CartContext)
    
    const {id, name, author, price, images} = book


    const handleClick = () => {
        addToCart(book, id)
        setPopup(true)
    }

    return (
        <div className='product-listing-card'>
            {popup && <Popup setPopup={setPopup}/>}
            <div className='product-listing-img-container'>
                <img src={`data:${images[0].type};base64, ${images[0].data}`} alt={`${images[0].name}`} className='product-listing-image' />
            </div>
            <div className='product-listing-details-container'>
                <h3>{name}</h3>
                <p className='author-name'>{author}</p>
                <p className='pricing'>{price} vnđ</p>
            </div>
            <div className='card-btn-container'>
                <Link to={`/book-details/${id}`} className='product-listing-button button-green'>Details</Link>
                <button onClick={handleClick} className='product-listing-button'>Add To Cart</button>
            </div>
        </div>
    )

}

export default ProductListingCard