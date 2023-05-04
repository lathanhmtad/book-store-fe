import './pagination.style.css'

const Pagination = ({ onPageChange, filters }) => {

    const { page, size, totalRows } = filters

    const totalPages = Math.ceil(totalRows / size);


    function handlePageChange(newPage) {
        onPageChange(newPage)
    }

    return (
        <div className="pagination-container">
            <button
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            >
                Prev
            </button>

            <button
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
