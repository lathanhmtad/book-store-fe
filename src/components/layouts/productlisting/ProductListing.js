import { useContext } from 'react'


import './productlisting.style.css'

import ProductListingCard from '../../cards/productlistingcard/ProductListingCard'

// import context
import { BookContext } from '../../../contexts/BookContext'


const ProductListing = () => {
    const { books } = useContext(BookContext)

    // random books
    const booksCopy = [...books]
    const n = 4
    const results = []
    for (let i = 1; i <= n; i++) {
        const index = Math.floor(Math.random() * booksCopy.length)
        results.push(booksCopy[index])
        booksCopy.splice(index, 1)
    }


    return (
        <div className='grid wide'>
            <h2 className='product-listing-container'>Here are some <span className='text-primary'>books</span> that you might like</h2>
            <div className='row'>
                {results.map(book => book && <div key={book.id} className='col l-3 m-6 c-12'>
                    <ProductListingCard book={book} />
                </div>)}
            </div>
        </div>
    )
}

export default ProductListing