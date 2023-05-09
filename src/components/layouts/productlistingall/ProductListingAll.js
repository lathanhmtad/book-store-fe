import { useContext } from 'react';

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
        <section className='grid wide'>
            <div className='product-listing-container row'>
                {books.map(book => <div key={book.id} className='col l-3 m-6 c-12'>
                    <ProductListingCard book={book} />
                </div>)}

            </div>
            <Pagination
                pagination={filters}
                onPageChange={handlePageChange}
            />

            
        </section>
    )
}

export default ProductListingAll