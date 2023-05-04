
// import components
import Navbar from '../../components/layouts/navbar/Navbar'
import SearchInputForm from '../../components/forms/searchinputform/SearchInputForm'
import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll'
import Footer from '../../components/layouts/footer/Footer'

// import css
import './bookpage.style.css'


const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className='search-container'>
                <h2>Find the <span className='text-primary'>Books</span> that you want</h2>
                <SearchInputForm darkTheme={false} />
            </div>

            <ProductListingAll />

            <Footer />
        </section>
    )
}

export default BooksPage