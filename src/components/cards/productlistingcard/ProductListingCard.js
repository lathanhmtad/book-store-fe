import './productlistingcard.style.css'
import { Link } from 'react-router-dom'

const ProductListingCard = ({book}) => {
    
    const {id, name, author, price, imageUrls} = book

    return (
        <div className='product-listing-card'>
            <div className='product-listing-img-container'>
                <img src={imageUrls[0]} alt='product-listing-image' className='product-listing-image' />
            </div>
            <div className='product-listing-details-container'>
                <h3>{name}</h3>
                <p className='author-name'>{author}</p>
                <p className='pricing'>{price} vnđ</p>
            </div>
            <div className='card-btn-container'>
                <Link to={`/book-details/${id}`} className='product-listing-button button-green'>Details</Link>
                <Link to={`/cart`} className='product-listing-button'>Add To Cart</Link>
            </div>
        </div>
    )

}

export default ProductListingCard