import { useLocation, Link } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation(); // access navigation state to retreive booking details passed from form page
    const booking = location.state; // extract booking data from location state


    return (
        <div className="confirmation-container">
            <h1 className="confirmation-header">Your Reservation Has Been Confirmed</h1>
            <h4 className="confirmation-message">
                Thank you! Your reservation has been confirmed for {booking.date} at {booking.selectedTime} 
            </h4>
            <p className="confirm">A confirmation has been sent to {booking.email}. Please print or save the reservation from your email.</p>

            <div className="receipt">
                <h3>Reservation Details:</h3>
                <p><strong>{booking.name}'s party of {booking.guests}</strong></p>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.selectedTime}</p>
                <p>Occasion: {booking.occasion}</p>
                <p>Preferred Seating: {booking.seat}</p>
            </div>

            <Link to="/">
                <button className="home-btn" aria-label="On Click">Return to Home</button>
            </Link>
        </div>
    );
}

export default ConfirmedBooking;