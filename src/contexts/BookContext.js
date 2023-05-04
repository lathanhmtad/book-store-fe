import { useState, useEffect, createContext } from "react";

// import services
import BooksServices from "../services/BooksServices";

// create context
export const BookContext = createContext()

const BookProvider = ({ children }) => {

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
        }, []);
        
       

    return <BookContext.Provider value={{ books, addBook }}>
        {children}
    </BookContext.Provider>
}

export default BookProvider