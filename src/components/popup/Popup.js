import { useState } from 'react'
import './popup.style.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Popup = ({setPopup}) => {

    const handleClose = () => {
        setPopup(false)
    }

    return (
        <div oncClick={handleClose} id="xmas-popup" class={`popup show`} href="#">
            <div class="popup-content">
                <a onClick={handleClose} class="popup-close">x</a>
                <AiOutlineCheck className='popup-check'/>
                <p className='popup-message'>Sản phẩm đã được thêm vào giỏ hàng</p>
            </div>
        </div>
    )
}

export default Popup