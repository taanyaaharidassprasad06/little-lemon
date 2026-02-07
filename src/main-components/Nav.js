import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/navLogo.png';
import hamburgerIcon from '../images/hamburgerIcon.png';
import '../App.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="navigation">
            <Link className="logo-container" to="/">
                <img className="logo" src={logo} alt="little lemon logo"/>
            </Link>
            <ul className={`nav-link-container${isOpen ? "-open" : ""}`}>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><a href="/#">About</a></li>
                <li className="nav-link"><a href="/#">Menu</a></li>
                <li className="nav-link"><Link to="/booking">Reservations</Link></li>
                <li className="nav-link"><a href="/#">Order Online</a></li>
                <li className="nav-link"><a href="/#">Login</a></li>
            </ul>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <img  className="hamburger-icon" src={hamburgerIcon} alt="navigation menu icon"/>
            </div>
        </nav>
    );
}

export default Nav;