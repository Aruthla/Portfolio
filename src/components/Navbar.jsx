import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-text">L<span className="logo-accent">B</span></span>
        </div>
        
        <button 
          className={`burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</a></li>
          <li><a href="#apropos" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
          <li><a href="#competences" onClick={() => setIsMenuOpen(false)}>Compétences</a></li>
          <li><a href="#projets" onClick={() => setIsMenuOpen(false)}>Projets</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
