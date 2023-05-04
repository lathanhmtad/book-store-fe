import { useContext } from 'react';

// import css
import './productlistingall.style.css'

// import components
import ProductListingCard from '../../cards/productlistingcard/ProductListingCard'

// import contexts
import { BookContext } from '../../../contexts/BookContext'

const ProductListingAll = () => {

    const { books } = useContext(BookContext)

    return (
        <section className='product-listing-all-container'>
            <div className='container'>
                <div className='grid-container'>
                    {books.map(book => <div key={book.id} className='grid-item'>
                        <ProductListingCard book={book} />
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default ProductListingAll