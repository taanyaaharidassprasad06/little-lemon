function RatingCard( { review } ) {
    return (
        <article className="rating-card">
            <h4 className="customer-name">{review.name}</h4>
            <p className="customer-stars">{review.rating}</p>
            <p className="customer-comment">{review.comment}</p>
        </article>
    );
}

export default RatingCard;