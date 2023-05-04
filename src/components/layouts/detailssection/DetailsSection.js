import './detailssection.style.css'

import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect, useRef } from 'react'

import { BookContext } from '../../../contexts/BookContext'

const DetailsSection = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const [width, setWidth] = useState(0)
    const [start, setStart] = useState(0)
    const [change, setChange] = useState(9)

    const slideRef = useRef()

    useEffect(() => {
        if (!slideRef.current) return

        const scrollWidth = slideRef.current.scrollWidth
        const childrenElementCount = slideRef.current.childElementCount
        const width = scrollWidth / childrenElementCount
        setWidth(width)
    })

    useEffect(() => {
        if (!slideRef.current || !width) return;
        let numOfThumb = Math.round(slideRef.current.offsetWidth / width)
        slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0
    }, [width, slideIndex])

    // get the book id from the url
    const { id } = useParams()

    const { books } = useContext(BookContext)

    // get the single book based on the id
    const book = books.find(item => {
        return item.id === parseInt(id)
    })

    // if book is not found
    if (!book) {
        return <section className='details-section-error'>Không tìm thấy sản phẩm</section>
    }

    const { description, price, languages, name, author, images, length, publisher } = book


    function plusSlides(n) {
        setSlideIndex(prev => prev + n)
        slideShow(slideIndex + n)
    }

    function slideShow(n) {
        if (n > images.length) {
            setSlideIndex(1)
        }
        if (n < 1) {
            setSlideIndex(images.length)
        }
    }

    // drag
    function dragStart(e) {
        setStart(e.clientX)
    }

    function dragOver(e) {
        let touch = e.clientX
        setChange(start - touch)
    }

    function dragEnd(e) {
        // drag left change > 0
        // drag right change < 0
        if (change > 0) {
            slideRef.current.scrollLeft += width
        }
        else {
            slideRef.current.scrollLeft -= width
        }
    }



    return (
        <section className='detail-section-container'>
            <div className='container'>
                <div className='book-detail-wrapper-container'>
                    <div className='book-img-container'>
                        {
                            images.map((image, index) => (
                                <div key={index} className='mySlides' style={{ display: (index + 1) === slideIndex ? 'block' : 'none' }}>
                                    <div className='numbertext'>{index + 1} / {images.length}</div>
                                    <img src={`data:${image.type};base64, ${image.data}`} alt={`${images.name}`} className='product-listing-image' />
                                </div>

                            ))
                        }
                        <a href='#!' className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a href='#!' className='next' onClick={() => plusSlides(1)}>&#10095;</a>

                        <div className='slider-img' draggable={true} ref={slideRef} onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
                            {
                                images.map((image, index) => (
                                    <div onClick={() => setSlideIndex(index + 1)} key={index} className={`slider-box ${index + 1 === slideIndex && 'active'}`}>
                                        <img src={`data:${image.type};base64, ${image.data}`} alt={`${images.name}`} className='product-listing-image' />
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                    <div className='book-detail-container'>
                        <h2>{name}</h2>
                        <p className='text-primary'>{author}</p>
                        <p className='book-description'>
                            {description}
                        </p>
                        <p><b>Category:</b> Sách võ</p>
                        <p><b>Publisher:</b> Kim đồng</p>
                        <p><b>Language:</b> {languages}</p>
                        <p><b>Book Length: </b>{length} pages</p>
                        <h3>{price} VNĐ</h3>

                        <a href='#' className='button-primary'>Add to Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection