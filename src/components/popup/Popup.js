import './popup.style.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Popup = ({setPopup}) => {

    const handleClose = () => {
        setPopup(false)
    }

    return (
        <div onClick={handleClose} id="xmas-popup" className={`popup show`} href="#">
            <div className="popup-content">
                <a onClick={handleClose} className="popup-close">x</a>
                <AiOutlineCheck className='popup-check'/>
                <p className='popup-message'>Sản phẩm đã được thêm vào giỏ hàng</p>
            </div>
        </div>
    )
}

export default Popup