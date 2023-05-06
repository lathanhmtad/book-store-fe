import { useContext, useEffect, useState } from 'react';

// import css
import './productlistingall.style.css'

// import components
import ProductListingCard from '../../cards/productlistingcard/ProductListingCard'
import Pagination from '../../layouts/pagination/Pagination'

// import contexts
import { BookContext } from '../../../contexts/BookContext'

import BooksServices from '../../../services/BooksServices';





const ProductListingAll = () => {

    const { books, setBooks, filters, setFilters } = useContext(BookContext)

    const [pagination, setPagination] = useState({
        page: 1,
        size: 5,
        bookAmount: 1
    })

    const handlePageChange = (newPage) => {
        console.log(newPage)
        setFilters({
            ...filters,
            page: newPage
        })
    }

    // fetch books
    useEffect(() => { // filters.page, filters.size
        BooksServices.getPage(filters.page, filters.size)
            .then(response => {
                const books = response.data.data
                const pagination = response.data.pagination
                // const books = response.data
                setBooks(books)
                setPagination(pagination)
            })
            .catch(err => {
                console.log(err)
            })
    }, [filters])

    return (
        <section className='product-listing-all-container grid wide'>
            <div className='row'>
                {books.map(book => <div key={book.id} className='col l-3 m-6 c-12'>
                    <ProductListingCard book={book} />
                </div>)}

            </div>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />

            
        </section>
    )
}

export default ProductListingAll