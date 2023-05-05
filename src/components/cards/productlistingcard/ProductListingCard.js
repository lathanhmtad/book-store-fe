import { useState, useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import './productlistingcard.style.css'

import Popup from '../../popup/Popup'

import { CartContext } from '../../../contexts/CartContext'


const ProductListingCard = ({ book }) => {
    const navigae = useNavigate()

    // popup state
    const [popup, setPopup] = useState(false)

    const { addToCart } = useContext(CartContext)

    const { id, name, author, price, images } = book


    const handleClick = () => {
        // check if login information is stored in localStorage
        const customerInfo = localStorage.getItem('customer');
        if (customerInfo) {
            addToCart(book, id)
            setPopup(true)
        }
        else{
            navigae('/login')
        }
    }

    return (
        <div className='product-listing-card'>
            {popup && <Popup setPopup={setPopup} />}
            <div className='product-listing-img-container'>
                <img src={`data:${images[0].type};base64, ${images[0].data}`} alt={`${images[0].name}`} className='product-listing-image' />
            </div>
            <div className='product-listing-details-container'>
                <h3>{name}</h3>
                <p className='author-name'>{author}</p>
                <p className='pricing'>{price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
            </div>
            <div className='card-btn-container'>
                <Link to={`/book-details/${id}`} className='product-listing-button button-green'>Details</Link>
                <button onClick={handleClick} className='product-listing-button'>Add To Cart</button>
            </div>
        </div>
    )

}

export default ProductListingCard