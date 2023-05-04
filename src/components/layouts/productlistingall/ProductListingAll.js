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
        <section className='product-listing-all-container grid wide'>
            <div className='row'>
                {books.map(book => <div key={book.id} className='col l-3 m-6 c-12'>
                    <ProductListingCard book={book} />
                </div>)}
            </div>
        </section>
    )
}

export default ProductListingAll