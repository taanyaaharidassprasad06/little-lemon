import logo from './images/logo2.png';

function Footer() {

    return(
        <footer>
            <nav>
                <img src={logo} alt="little lemon logo" style={{width: "80px", height: "auto" }}/>
                <section>
                    <h5>Navigation</h5>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/orderonline">Order Online</a></li>
                    </ul>
                </section>
                <section>
                    <h5>Contact</h5>
                    <address>
                        <p>123 Lemon Street, Chicago, IL 54321</p>
                        <p>123-456-7890</p>
                        <p>littlelemon@email.com</p>
                    </address>
                </section>
                <section>
                    <ul>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://x.com/">X</a></li>
                        <li><a href="https://www.tiktok.com/">TikTok</a></li>
                        <li><a href="https://www.youtube.com/">YouTube</a></li>
                        <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                    </ul>
                </section>
            </nav>
            
            
        </footer>
    );
}

export default Footer;