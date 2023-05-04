import { useContext, useState } from 'react';

// import css
import './productlistingall.style.css'

// import components
import ProductListingCard from '../../cards/productlistingcard/ProductListingCard'
import Pagination from '../../layouts/pagination/Pagination'

// import contexts
import { BookContext } from '../../../contexts/BookContext'



const ProductListingAll = () => {

    const { books, filters, setFilters } = useContext(BookContext)


    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage
        })
    }

    return (
        <section className='product-listing-all-container grid wide'>
            <div className='row'>
                {books.map(book => <div key={book.id} className='col l-3 m-6 c-12'>
                    <ProductListingCard book={book} />
                </div>)}

                <Pagination 
                    pagination={filters}
                    onPageChange={handlePageChange}
                />
            </div>
        </section>
    )
}

export default ProductListingAll