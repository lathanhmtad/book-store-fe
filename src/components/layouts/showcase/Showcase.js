import Navbar from '../navbar/Navbar'

import './showcase.style.css'

import SearchInputForm from '../../forms/searchinputform/SearchInputForm'

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            <div className='overlay'></div>
            <div className="showcase-content">
                <h1>Best <span className='text-primary'>Books</span> Available</h1>
                <p>Buy quality books at cheaper price</p>
                <SearchInputForm darkTheme={true}/>
            </div>

        </section>
    )
}

export default Showcase