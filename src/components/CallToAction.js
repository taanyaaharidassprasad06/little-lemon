import heroImg from '../images/heroImg.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-location">Chicago</h2>
                <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">
                    <button className="btn">Reserve a Table</button>
                </Link>
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src={heroImg} alt="waiter holding a dish"/>
            </div>
        </section>
    );
}

export default CallToAction;