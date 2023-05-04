import './productlisting.style.css'

import ProductListingCard from '../../cards/productlistingcard/ProductListingCard'

import { useContext } from 'react'

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
        <div className='product-listing-container'>
            <div className='container'>
                <h2>Here are some <span className='text-primary'>books</span> that you might like</h2>
                <div className='listing-container'>
                    {results.map(book => <div key={book.id} className='grid-item'>
                        <ProductListingCard book={book} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ProductListing