import { useState, useEffect } from "react";
import itemsData from '../specialsItems.json';
import SpecialsCard from "./SpecialsCard.js";

function Specials() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(itemsData);
    }, []);
    
    return (
        <div className="specials">
            <div className="specials-header">
                <h2 className="specials-title">This Week's Specials</h2>
                <button className="btn menu-btn">Online Menu</button>
            </div>
            <section className="specials-container">
                {items.map((item) => (
                    <SpecialsCard key={item.id} menuItem={item}/>
                ))}
            </section>
        </div>
        
    );
}

export default Specials;