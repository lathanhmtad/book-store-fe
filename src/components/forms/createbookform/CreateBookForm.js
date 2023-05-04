import { useState, useEffect, useContext } from 'react'

import FormInput from '../forminput/FormInput'

import './createbookform.style.css'
import BooksServices from '../../../services/BooksServices';

import FullPageLoading from '../../loading/fullpageloading/FullPageLoading';
import Alert from '../../alert/Alert';
import CategoryService from '../../../services/CategoryService';

import { BookContext } from '../../../contexts/BookContext'

const CreateBookForm = (props) => {
    const [categories, setCategories] = useState([])

    const { addBook } = useContext(BookContext)

    const [formData, setFormData] = useState({
        name: "",
        author: "",
        publisher: "",
        amount: "",
        category: "",
        price: '',
        languages: "",
        length: '',
        images: [],
        description: "",
    });

    useEffect(() => {
        CategoryService.getAll()
            .then(response => {
                setCategories(response.data)
            })
            .catch(err => {

            })
    }, []);

    const [isLoading, setIsLoading] = useState(false)
    const [apiStatus, setApiStatus] = useState({
        status: '',
        msg: ''
    })
    const [alert, setAlert] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData()
        data.append('name', formData.name)
        data.append('author', formData.author)
        data.append('publisher', formData.publisher)
        if(formData.category === '') {
            data.append('category', categories[0].id)
        } else  {
            data.append('category', formData.category)
        }
        data.append('price', formData.price)
        data.append('amount', formData.amount)
        data.append('languages', formData.languages)
        data.append('length', formData.length)


        for (let i = 0; i < formData.images.length; i++) {
            data.append('images', formData.images[i]);
        }
        data.append('description', formData.description)

        BooksServices.createBook(data)
            .then(response => {
                setApiStatus({
                    status: 'success',
                    msg: 'Tạo sách thành công.'
                })
                setAlert(true)
                setIsLoading(false)
                window.scrollTo(0, 0);
                addBook(response.data)
                setFormData({
                    name: "",
                    author: "",
                    publisher: "",
                    amount: "",
                    category: "",
                    price: '',
                    languages: "",
                    length: '',
                    images: [],
                    description: "",
                })
            })
            .catch(err => {
                if (err.response) {

                }
                else {
                    setApiStatus({
                        status: 'error',
                        msg: 'Lỗi kết nối đến máy chủ vui lòng thử lại sau.'
                    })
                }
                setAlert(true)
                setIsLoading(false)
                window.scrollTo(0, 0);
            })
    }

    const inputs = [
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Book title',
            id: 'name',
            name: 'name',
            type: 'text',
            className: 'formbold-form-input',
            placeholder: 'Enter book title',
            required: true
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Author',
            id: 'author',
            name: 'author',
            type: 'text',
            className: 'formbold-form-input',
            placeholder: 'Enter author',
            required: true
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Nhà xuất bản',
            id: 'publisher',
            name: 'publisher',
            type: 'text',
            className: 'formbold-form-input',
            placeholder: 'Enter publisher',
            required: true
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Price',
            id: 'price',
            name: 'price',
            type: 'number',
            className: 'formbold-form-input',
            placeholder: 'Enter price',
            required: true,
            min: 0
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Languages',
            id: 'languages',
            name: 'languages',
            type: 'text',
            className: 'formbold-form-input',
            placeholder: 'Enter languages',
            required: true
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Number of pages',
            id: 'length',
            name: 'length',
            type: 'number',
            className: 'formbold-form-input',
            placeholder: 'Enter page number',
            required: true,
            min: 0
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Amount',
            id: 'amount',
            name: 'amount',
            type: 'number',
            className: 'formbold-form-input',
            placeholder: 'Enter amount',
            required: true,
            min: 0
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Photos (can choose multiple)',
            id: 'images',
            name: 'images',
            type: 'file',
            className: 'formbold-form-input',
            required: true,
            multiple: "multiple"
        }
    ]

    const onChange = (e) => {
        if (e.target.files != null) {
            const images = []
            for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files[i];
                images.push(file);
            }
            setFormData({ ...formData, [e.target.name]: images })
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    return (
        <div className='create-book-form-container'>
            {isLoading && <FullPageLoading />}
            <div className='container'>
                <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                        {/* create book form */}
                        <form id='createBook' onSubmit={handleSubmit}>

                            <div className="formbold-form-title text-center">
                                <h2 className="">CREATE YOUR BOOK</h2>
                                {alert && <Alert apiStatus={apiStatus} setAlert={setAlert} />}
                            </div>

                            <div className="formbold-mb-3">
                                <label htmlFor="description" className="formbold-form-label">Category</label>
                                <select className='formbold-form-input' onChange={onChange} value={formData.category} name='category' id="category">
                                    {categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))}
                                </select>
                            </div>


                            {inputs.map(input => <FormInput key={input.id} onChange={onChange} value={input.type === 'file' ? formData[input.name].name : formData[input.name]} {...input} />)}


                            <div className="formbold-mb-3">
                                <label htmlFor="description" className="formbold-form-label">Mô tả</label>
                                <textarea onChange={onChange} id='description' rows="8" value={formData.description} name='description' className='formbold-form-input'></textarea>
                            </div>

                            <button type='submit' className="formbold-btn">Book Creation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBookForm