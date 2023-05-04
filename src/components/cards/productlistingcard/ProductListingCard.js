import './productlistingcard.style.css'
import { Link } from 'react-router-dom'

const ProductListingCard = ({book}) => {
    
    const {id, name, author, price, images} = book

    return (
        <div className='product-listing-card'>
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
                <Link to={`/cart`} className='product-listing-button'>Add To Cart</Link>
            </div>
        </div>
    )

}

export default ProductListingCard