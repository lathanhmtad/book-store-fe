
import React, { useEffect, useState } from 'react'

import { NavLink, Link } from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import './navbar.style.css'


const Navbar = ({ darkTheme, darkText }) => {
    const [isActive, setIsActive] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        // Xóa thông tin đăng nhập khỏi localStorage
        localStorage.removeItem('customer');

        // Cập nhật trạng thái đăng nhập của khách hàng
        setIsLoggedIn(false);
    }


    // event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 120 ? setIsActive(true) : setIsActive(false)
        })
    })

    useEffect(() => {
        // check if login information is stored in localStorage
        const customerInfo = localStorage.getItem('customer');
        if (customerInfo) {
            setIsLoggedIn(true);
        }
    }, []) 

    const showLoggedInNav = (
        <nav className='nav-links-container flex'>
            <NavLink to='/' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Home</NavLink>
            <NavLink to='/books' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Books</NavLink>
            <Link to={'/'} onClick={handleLogout} className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Logout</Link>
            <NavLink to='/cart' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'} flex align-center text-xl`}><AiOutlineShoppingCart /></NavLink>
        </nav>
    )

    const showLoggedOutNav = (
        <nav className='nav-links-container flex'>
            <NavLink to='/' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Home</NavLink>
            <NavLink to='/books' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Books</NavLink>
            <NavLink to='/create-book' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Create book</NavLink>
            <NavLink to='/login' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Login</NavLink>
            <NavLink to='/register' activeclassname="active" className={`${darkText ? 'nav-link-dark' : 'nav-link'}`}>Register</NavLink>
        </nav>
    )

    return (
        <section className={`${(darkTheme || isActive) ? 'background-dark' : 'background-transparent'} navbar-container`}>
            <div className='container flex justify-between align-center'>
                <Link to={'/'} className='logo text-primary'>Book<span className='text-white'>Stores</span></Link>

                {isLoggedIn ? showLoggedInNav : showLoggedOutNav}
            </div>
        </section>
    )
}

export default Navbar