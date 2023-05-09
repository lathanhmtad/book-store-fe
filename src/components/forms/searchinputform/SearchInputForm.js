import { useState } from 'react'
import './searchinputform.style.css'
import { useRef } from 'react'

const SearchInputForm = ({darkTheme, onSubmit, onClick}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)

    const handleSearchTermChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if(!onSubmit) return 

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
    
            onSubmit(formValues)
        }, 300)
        
        
    }

    const handleClick = () => {
        if(!onClick) return

        onClick(searchTerm)
    }

    return (
        <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
            <input onChange={handleSearchTermChange} type="text" className="search-input" placeholder='Search Books'/>
            <button onClick={handleClick} className="search-button">Search</button>
        </div>
    )
}

export default SearchInputForm