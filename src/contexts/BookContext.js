import React, { useState, useEffect, createContext } from "react";

// import services
import BooksServices from "../services/BooksServices";

// create context
export const BookContext = createContext()

const BookProvider = ({ children }) => {
    // books state
    const [books, setBooks] = useState([])


    const [filters, setFilters] = useState({
        page: 1,
        size: 8,
        bookAmount: 0,
    })

    

    // fetch books
    useEffect(() => {
        BooksServices.getPage(filters.page, filters.size)
            .then(response => {
                const books = response.data.data
                setBooks(books)
                setFilters(response.data.pagination)
            })
            .catch(err => {
                console.log(err)
            })
    }, [filters.page])
   
    const addBook = (newBook) => {
        setBooks([...books, newBook])
    }

    return <BookContext.Provider value={{ books, setBooks, addBook, filters, setFilters }}>
        {children}
    </BookContext.Provider>
}

export default BookProvider