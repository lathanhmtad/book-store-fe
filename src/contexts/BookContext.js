import { useState, useEffect, createContext } from "react";

// import services
import BooksServices from "../services/BooksServices";

// create context
export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        page: 1,
        size: 5,
        totalRows: 1
    })

    const [books, setBooks] = useState([])

    const addBook = (newBook) => {
        setBooks([...books, newBook])
    }


    // fetch books
    useEffect(() => {
        BooksServices.getPage(filters.page, filters.size)
            .then(response => {
                const books = response.data.data
                setBooks(books)
            })
            .catch(err => {
                console.log(err)
            })
    }, [filters])



    return <BookContext.Provider value={{ books, addBook, filters, setFilters }}>
        {children}
    </BookContext.Provider>
}

export default BookProvider