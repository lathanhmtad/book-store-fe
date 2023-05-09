import React, { useState, useContext } from 'react'

import AuthBgImg from '../../img/auth-bg.jpg'

import Navbar from '../../components/layouts/navbar/Navbar'
import FormInput from '../../components/forms/forminput/FormInput'

import AuthenticationService from '../../services/AuthenticationService'

import Alert from '../../components/alert/Alert'

import FullPageLoading from '../../components/loading/fullpageloading/FullPageLoading'
import { useNavigate, Link } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'

const Login = () => {

    const { getCartFromDatabase } = useContext(CartContext)

    const [isLoading, setIsLoading] = useState(false)
    const [apiStatus, setApiStatus] = useState({
        status: '',
        msg: ''
    })
    const [alert, setAlert] = useState(false)

    const navigate = useNavigate()


    const [valueForm, setValueForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData()
        formData.append('email', valueForm.email)
        formData.append('password', valueForm.password)

        AuthenticationService.login(formData)
            .then(response => {
                localStorage.setItem('customer', JSON.stringify(response.data))
                getCartFromDatabase(response.data.id)
                setIsLoading(false)
                navigate('/')
            })
            .catch(error => {
                if (error.response) {
                    setApiStatus({
                        status: 'error',
                        msg: error.response.data.error
                    })
                } else {
                    setApiStatus({
                        status: 'error',
                        msg: 'Lỗi kết nối đến máy chủ vui lòng thử lại sau.'
                    })
                }
                setAlert(true)
                setIsLoading(false)
            })
    }

    const inputs = [
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Email',
            id: 'email',
            name: 'email',
            type: 'email',
            className: 'formbold-form-input',
            placeholder: 'Enter your email',
            required: true
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Password',
            id: 'password',
            name: 'password',
            type: 'password',
            className: 'formbold-form-input',
            placeholder: 'Enter your password',
            required: true
        }
    ]

    const onChange = (e) => {
        setValueForm({ ...valueForm, [e.target.name]: e.target.value })
    }


    return (
        <React.Fragment>
            {isLoading && <FullPageLoading />}
            <Navbar darkText={true} />
            <div className='signup-container'>
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt='background' />
                </div>
                <div className='signup-content-container'>
                    <div className='container'>
                        <div className='content-wrapper'>
                            <h2>Login</h2>
                            <p>Login with email and password</p>
                        </div>

                        {/* form login */}
                        <form onSubmit={handleSubmit}>
                            {alert && <Alert apiStatus={apiStatus} setAlert={setAlert} />}
                            {inputs.map(input => <FormInput key={input.id} onChange={onChange} value={valueForm[input.name]} {...input} />)}

                            <div className='form-group'>
                                <input
                                    type='submit'
                                    className='button-primary'
                                    value='Login'
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <span>Bạn chưa có tài khoản?</span>
                        <Link to='/register'>Đăng ký</Link>
                    </div>
                </div>
               
            </div>
        </React.Fragment>
    )
}

export default Login