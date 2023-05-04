import './alert.style.css'

const Alert = (props) => {
    const {msg, status} = props.apiStatus

    const handleClose = (e) => {
        props.setAlert(false)
    }
    return (
        <div className={`alert ${status === 'error' ? 'error' : 'success'}`}>
            <span onClick={handleClose} className="closebtn">&times;</span>
            <strong>{msg}</strong>
        </div>
    )
}

export default Alert