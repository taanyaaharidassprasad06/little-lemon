import logo from './images/logo.png';

function Nav() {
    return(
        <nav>
            <ul>
                <a href="/home">
                    <img src={logo} alt="little lemon logo" style={{width: "120px", height: "auto" }}/>
                </a>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;