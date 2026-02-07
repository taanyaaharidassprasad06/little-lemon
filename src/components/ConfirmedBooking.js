import { useLocation, Link } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation(); // access navigation state to retreive booking details passed from form page
    const booking = location.state; // extract booking data from location state


    return (
        <div>
            <h1>Your Reservation Has Been Confirmed</h1>
            <h4>
                Thank you! Your reservation has been confirmed for {booking.date} at {booking.time} 
            </h4>
            <p>A confirmation has been sent to {booking.email}. Please print or save the reservation from your email.</p>

            <div>
                <h3>Reservation Details:</h3>
                <p><strong>{booking.name}'s party of {booking.guests}</strong></p>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Occasion: {booking.occasion}</p>
                <p>Preferred Seating: {booking.seat}</p>
            </div>

            <Link to="/">
                <button aria-label="On Click">Return to Home</button>
            </Link>
        </div>
    );
}

export default ConfirmedBooking;