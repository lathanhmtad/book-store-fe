
// import components
import Navbar from '../../components/layouts/navbar/Navbar'
import SearchInputForm from '../../components/forms/searchinputform/SearchInputForm'
import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll'
import Footer from '../../components/layouts/footer/Footer'

// import css
import './bookpage.style.css'

// import services
import BooksServices from '../../services/BooksServices'


import { BookContext } from '../../contexts/BookContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const BooksPage = () => {
    const navigate = useNavigate()
    const {setBooks, filters, setFilters} = useContext(BookContext)

    function handleFiltersChange(newFilters) {
        BooksServices.search(newFilters.searchTerm)
            .then(response => {
                setBooks(response.data)
                setFilters({
                    ...filters,
                    page: 1
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleClickSearch = (values) => {
        BooksServices.search(values)
            .then(response => {
                setBooks(response.data)
                navigate('/books')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className='search-container'>
                <h2>Find the <span className='text-primary'>Books</span> that you want</h2>
                <SearchInputForm onClick={handleClickSearch} onSubmit={handleFiltersChange} darkTheme={false} />
            </div>

            <ProductListingAll />

            <Footer />
        </section>
    )
}

export default BooksPage