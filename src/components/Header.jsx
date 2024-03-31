import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2979FF' }}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Travel Website" style={{ height: 30 }} />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navbar Links and Search Box */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto" style={{ fontWeight: 'bold', fontSize: '20px', padding: '0 20px'}}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => document.getElementById('navbarNav').classList.remove('show')}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations" onClick={() => document.getElementById('navbarNav').classList.remove('show')}>Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => document.getElementById('navbarNav').classList.remove('show')}>Contact</Link>
              </li>
            </ul>
            <form className="d-flex ms-lg-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
