import { useContext } from 'react'
import Navbar from '../navbar/Navbar'

import './showcase.style.css'

import SearchInputForm from '../../forms/searchinputform/SearchInputForm'

// import services
import BooksServices from '../../../services/BooksServices'
import { BookContext } from '../../../contexts/BookContext'
import { useNavigate } from 'react-router-dom'
const Showcase = () => {
    const navigate = useNavigate()

    const {setBooks} = useContext(BookContext)

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

    function handleFiltersChange(newFilters) {
        BooksServices.search(newFilters.searchTerm)
            .then(response => {
                console.log(response.data)
                setBooks(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            <div className='overlay'></div>
            <div className="showcase-content">
                <h1>Best <span className='text-primary'>Books</span> Available</h1>
                <p>Buy quality books at cheaper price</p>
                <SearchInputForm onClick={handleClickSearch} onSubmit={handleFiltersChange} darkTheme={true}/>
            </div>

        </section>
    )
}

export default Showcase