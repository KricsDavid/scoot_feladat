import { useState } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);
  
  return (
    <nav>
    <button onClick={toggleMenu}>☰</button>
    <ul className={isOpen ? "open" : ""}>
      <li onClick={closeMenu}><a href="#home">Home</a></li>
      <li onClick={closeMenu}><a href="#about">About</a></li>
      <li onClick={closeMenu}><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar
