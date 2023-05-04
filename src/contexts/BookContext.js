import { useState, useEffect, createContext } from "react";

// import services
import BooksServices from "../services/BooksServices";

// create context
export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [totalBooks, setTotalBooks] = useState(0)

    const [books, setBooks] = useState([])

    const addBook = (newBook) => {
        setBooks([...books, newBook])
    }


    // fetch books
    useEffect(() => {
        BooksServices.getAll()
            .then(response => {
                const books = response.data
                setBooks(books)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        setTotalBooks(books.length)
    }, [books])


    return <BookContext.Provider value={{ books, addBook, totalBooks }}>
        {children}
    </BookContext.Provider>
}

export default BookProvider