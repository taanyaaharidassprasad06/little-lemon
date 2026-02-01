import { useState, useEffect } from "react";
import reviews from '../userRatings.json';
import RatingCard from "./RatingCard.js";

function CustomersSays() {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        setRatings(reviews);
    }, []);

    return (
        <div className="reviews">
            <div>
                <h1 className="review-heading">What Our Guests Say</h1>
            </div>
            <section className="reviews-container">
                {ratings.map((rating) => (
                    <RatingCard key={rating.id} review={rating}/>
                ))}
            </section>
        </div>
    );
}

export default CustomersSays;