import './searchinputform.style.css'

const SearchInputForm = ({darkTheme}) => {
    return (
        <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
            <input type="text" className="search-input" placeholder='Search Books'/>
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchInputForm