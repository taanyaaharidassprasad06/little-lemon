import logo from '../images/navLogo.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return(
        <nav className="navigation">
            <a className="logo-container" href="/home">
                <img className="logo" src={logo} alt="little lemon logo"/>
            </a>
            <ul className="nav-link-container">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><a href="/#">About</a></li>
                <li className="nav-link"><a href="/#">Menu</a></li>
                <li className="nav-link"><Link to="/booking">Reservations</Link></li>
                <li className="nav-link"><a href="/#">Order Online</a></li>
                <li className="nav-link"><a href="/#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;