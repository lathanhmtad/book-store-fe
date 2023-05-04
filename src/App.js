import { Routes, Route } from "react-router-dom"

// import pages
import HomePage from "./pages/homepage/HomePage"
import BooksPage from "./pages/bookspage/BooksPage"
import BookDetailsPage from "./pages/bookdetailspage/BookDetailsPage"
import Login from './pages/loginpage/Login'
import Register from './pages/registerpage/Register'
import CartPage from './pages/cartpage/CartPage'
import EmailVerification from './pages/emailverificationpage/EmailVerification'
import CreateBookPage from "./pages/createbookpage/CreateBookPage"

// import component
import ScrollToTop from './components/util/ScrollToTop'

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/book-details/:id' element={<BookDetailsPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verification' element={<EmailVerification />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/create-book' element={<CreateBookPage />} />
      </Routes>
    </ScrollToTop>
  )
}

export default App;
