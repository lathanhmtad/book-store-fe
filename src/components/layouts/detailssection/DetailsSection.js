import './detailssection.style.css'

import BookDetailImg from '../../../img/1984.webp'
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
        if(!slideRef.current || !width) return;
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
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }

    const { description, price, languages, name, author, imageUrls, length } = book


    function plusSlides(n) {
        setSlideIndex(prev => prev + n)
        slideShow(slideIndex + n)
    }

    function slideShow(n) {
        if (n > imageUrls.length) {
            setSlideIndex(1)
        }
        if (n < 1) {
            setSlideIndex(imageUrls.length)
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
                            imageUrls.map((imageUrl, index) => (
                                <div key={index} className='mySlides' style={{ display: (index + 1) === slideIndex ? 'block' : 'none' }}>
                                    <div className='numbertext'>{index + 1} / {imageUrls.length}</div>
                                    <img src={imageUrl} alt='image' />
                                </div>

                            ))
                        }
                        <a href='#!' className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a href='#!' className='next' onClick={() => plusSlides(1)}>&#10095;</a>

                        <div className='slider-img' draggable={true} ref={slideRef} onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
                            {
                                imageUrls.map((imageUrl, index) => (
                                    <div onClick={() => setSlideIndex(index + 1)} key={index} className={`slider-box ${index + 1 === slideIndex && 'active'}`}>
                                        <img src={imageUrl} alt='image' />
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