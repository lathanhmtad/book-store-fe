import React, { useState } from "react"

import { AiOutlineMail } from 'react-icons/ai'

import Navbar from '../../components/layouts/navbar/Navbar'
import AuthBgImg from '../../img/auth-bg.jpg'

import FormInput from '../../components/forms/forminput/FormInput'

import AuthenticationServices from '../../services/AuthenticationService'
import FullPageLoading from '../../components/loading/fullpageloading/FullPageLoading'

import Alert from '../../components/alert/Alert'


const EmailVerification = () => {
    const [code, setCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [apiStatus, setApiStatus] = useState({
        status: '',
        msg: ''
    })
    const [alert, setAlert] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)

        const data = new FormData()
        data.append('code', code)

        AuthenticationServices.verificationCode(data)
            .then(response => {
                setApiStatus({
                    status: 'success',
                    msg: response.data.success
                })
                setAlert(true)
                setIsLoading(false)
            })
            .catch(err => {
                if (err.response) {
                    setApiStatus({
                        status: 'error',
                        msg: err.response.data.error
                    })
                }
                else {
                    setApiStatus({
                        status: 'error',
                        msg: 'Lỗi kết nối đến máy chủ vui lòng thử lại sau.'
                    })
                }
                setAlert(true)
                setIsLoading(false)
            })

    }

    const input = {
        label: 'Enter your code',
        id: 'verificationCode',
        name: 'code',
        type: 'password',
        className: 'form-input',
        placeholder: 'Enter your code',
        required: true

    }

    const onChange = (event) => {
        setCode(event.target.value)
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
                            <h2>Thanks for subscribing to Book<span className="text-primary">Store</span></h2>
                            <AiOutlineMail className="text-xl text-primary" />
                            <p>We're happy you're here. Let's get your email address verified:</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {alert && <Alert apiStatus={apiStatus} setAlert={setAlert} />}

                            <FormInput {...input} onChange={onChange} value={code} />

                            <div className='form-group'>
                                <input
                                    type='submit'
                                    className='button-primary'
                                    value='Submit'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmailVerification