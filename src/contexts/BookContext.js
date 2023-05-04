import { useState, useEffect, createContext } from "react";

// import services
import BooksServices from "../services/BooksServices";

// create context
export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [books, setBooks] = useState([])

    const addBook = (newBook) => {
        const imageUrls = getAllImageUrlFromBookImage(newBook.images)
        newBook.imageUrls = imageUrls

        setBooks([...books, newBook])
    }

    function handleImageData(imageData, imageType) {
        // giải mã dữ liệu base64 thành dạng byte array
        const byteCharacters = atob(imageData);

        // chuyển đổi byte array sang dạng ArrayBuffer
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        // tạo đối tượng Blob để hiển thị ảnh
        const blob = new Blob([byteArray], { type: imageType });

        // tạo đường dẫn đến ảnh 
        const imageUrl = URL.createObjectURL(blob);

        // trả về đường dẫn ảnh
        return imageUrl
    }

    function getAllImageUrlFromBookImage(bookImages) {
        const imageUrls = []

        // xử lý hình ảnh của sách
        bookImages.forEach(bookImage => {
            const imageUrl = handleImageData(bookImage.imageData, bookImage.type)
            imageUrls.push(imageUrl)
        })

        return imageUrls
    }

    // fetch books
    useEffect(() => {
        BooksServices.getAll()
            .then(response => {
                const books = response.data
                // const output = []
                // books.forEach(book => {
                //     const bookImages = book.images

                //     const imageUrls = getAllImageUrlFromBookImage(bookImages)
                //     book.imageUrls = imageUrls
                //     output.push(book)
                // })

                setBooks(books)
            })
            .catch(err => {
                
            })
    }, []);


    return <BookContext.Provider value={{ books, addBook }}>
        {children}
    </BookContext.Provider>
}

export default BookProvider