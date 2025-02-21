import React from 'react'
import facebook_logo from '../assets/square-facebook.svg'
import instagram_logo from '../assets/square-instagram.svg'
import x_logo from '../assets/square-x-twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div>
                <div className='left-side'>
                    <span className='logo'>scoot</span>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/scooters'>Scooters</Link></li>
                    </ul>
                </div>
                <div className="right-side">
                    <img src={facebook_logo} alt="facebook" />
                    <img src={instagram_logo} alt="instagram" />
                    <img src={x_logo} alt="x" />
                </div>
            </div>
        </footer>
    )
}

export default Footer