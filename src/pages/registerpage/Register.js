import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import './register.style.css'
import AuthBgImg from '../../img/auth-bg.jpg'

import Navbar from '../../components/layouts/navbar/Navbar'
import FormInput from '../../components/forms/forminput/FormInput'

import AuthenticationService from '../../services/AuthenticationService'
import FullPageLoading from '../../components/loading/fullpageloading/FullPageLoading'
import Alert from '../../components/alert/Alert'

const Register = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [apiStatus, setApiStatus] = useState({
        status: '',
        msg: ''
    })
    const [alert, setAlert] = useState(false)

    const navigate = useNavigate()

    const [valueForm, setValueForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const inputs = [
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Username',
            id: 'username',
            name: 'username',
            type: 'text',
            className: 'formbold-form-input',
            placeholder: 'Enter your username',
            required: true
        },
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
        },
        {
            formGroupClass: 'formbold-mb-3',
            labelClass: 'formbold-form-label',
            label: 'Confirm password',
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            className: 'formbold-form-input',
            placeholder: 'Enter your confirm password',
            pattern: valueForm.password,
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        const formData = new FormData()
        formData.append('username', valueForm.username)
        formData.append('email', valueForm.email)
        formData.append('password', valueForm.password)

        AuthenticationService.register(formData)
            .then(response => {
                navigate('/email-verification')
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

    const onChange = (e) => {
        setValueForm({ ...valueForm, [e.target.name]: e.target.value })
    }

    return (
        <React.Fragment>
            {isLoading && <FullPageLoading />}

            <Navbar darkText={true} />
            <div className='row signup-container'>
                <div className='signup-img-container col l-6 m-6 c-0'>
                    <img src={AuthBgImg} alt='background' />
                </div>
                <div className='signup-content-container col l-6 m-6 c-12'>
                    <div className='container'>
                        <div className='content-wrapper'>
                            <h2>Register</h2>
                            <p>Create a new account with email and password</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {alert && <Alert apiStatus={apiStatus} setAlert={setAlert} />}

                            {inputs.map(input => <FormInput key={input.id} {...input} onChange={onChange} value={valueForm[input.name]} />)}

                            <div className='form-group'>
                                <input
                                    type='submit'
                                    className='button-primary'
                                    value='Register'
                                />
                            </div>
                        </form>
                        <div>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to='/login'>Đăng nhập </Link>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register