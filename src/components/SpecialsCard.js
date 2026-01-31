import icon from '../images/delivery.jpg';

function SpecialsCard( { menuItem } ) {
    return (
        <article className="food-card-container">
            <div className="food-img-container">
                <img src={menuItem.img} alt={menuItem.description} className="food-img"/>
            </div>
            <div className="food-info-container">
                <div className="name-price">
                    <h3 className="food-name">{menuItem.name}</h3>
                    <h4 className="food-price">{menuItem.price}</h4>
                </div>
                <p className="food-description">{menuItem.description}</p>
            </div>
            <button className="delivery-btn">Order a delivery <span><img className="delivery-icon" src={icon} alt="icon of person on bike"/></span></button>
        </article>
    );
}

export default SpecialsCard;