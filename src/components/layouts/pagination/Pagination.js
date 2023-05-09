import './pagination.style.css'

import ReactPaginate from 'react-paginate';

const Pagination = ({ onPageChange, pagination }) => {

    const {size, bookAmount } = pagination
    const totalPages = Math.ceil(parseInt(bookAmount) / parseInt(size));

    
    function handlePageChange(newPage) {
        onPageChange(newPage + 1)
    }

    return (
        <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={0}
                onPageChange={(selectedItem) => handlePageChange(selectedItem.selected)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
    );
};

export default Pagination;
