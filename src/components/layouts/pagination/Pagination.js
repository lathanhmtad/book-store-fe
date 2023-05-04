import { useState, useContext } from "react";

import {BookContext} from '../../../contexts/BookContext'

import './pagination.style.css'

const Pagination = ({ booksPerPage }) => {
    const {totalBooks} = useContext(BookContext)

    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(30 / booksPerPage);

    const pageNumbers = []
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination-container">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => setCurrentPage(number)}
                            className={currentPage === number ? "active-page" : ""}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
