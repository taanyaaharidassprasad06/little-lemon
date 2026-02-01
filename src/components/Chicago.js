import img1 from '../images/restaurant.jpg';
import img2 from '../images/intro.jpg';

function Chicago() {
    return (
        <section className="introduction-container">
            <div className="intro-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="location">Chicago</h2>
                <p className="intro-description">
                    Little Lemon is a charming Mediterranean restaurant that brings the vibrant flavors of Greece to your table. Known for our signature dishes like fresh Greek salad with perfectly ripe tomatoes 
                    and creamy feta, crispy bruschetta with the finest toppings, and our must-try lemon dessert that perfectly balances sweet and tart notes. Our warm and welcoming atmosphere makes Little Lemon the 
                    ideal spot for any occasion - whether it's a cozy date night, a lively family gathering, or catching up with friends. With attentive service, reasonable prices, and food that never disappoints, we've 
                    become a beloved neighborhood gem where every guest is treated like family.
                </p>
            </div>
            <div className="intro-images">
                <div className="img-container employee-img-one">
                    <img className="employee-img img-one" src={img1} alt="outdoor dining area of Little Lemon"/>
                </div>
                <div className="img-container employee-img-two">
                    <img className="employee-img img-two" src={img2} alt="Mario and Adrian laughing"/>
                </div>
                
            </div>
        </section>
    );
}

export default Chicago;