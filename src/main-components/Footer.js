import logo from '../images/footerLogo.png';
import '../App.css';

function Footer() {

    return(
        <footer className="footer">
            <nav className="footer-navigation">
                <div className="footer-logo-container">
                    <img className="footer-logo" src={logo} alt="little lemon logo"/>
                </div>
                <div className="footer-section-container">
                    <section className="footer-section">
                        <h5 className="section-heading">Navigation</h5>
                        <ul className="footer-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/orderonline">Order Online</a></li>
                        </ul>
                    </section>
                    <section className="footer-section">
                        <h5 className="section-heading">Contact</h5>
                        <address>
                            <p>123 Lemon Street, Chicago, IL 54321</p>
                            <p>123-456-7890</p>
                            <p>littlelemon@email.com</p>
                        </address>
                    </section>
                    <section className="footer-section">
                        <h5 className="section-heading">Socials</h5>
                        <ul className="footer-links">
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://x.com/">X</a></li>
                            <li><a href="https://www.tiktok.com/">TikTok</a></li>
                            <li><a href="https://www.youtube.com/">YouTube</a></li>
                        </ul>
                    </section>
                </div>
                
            </nav> 
        </footer>
    );
}

export default Footer;