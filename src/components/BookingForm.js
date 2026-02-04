import { useState } from 'react';
import BookingSlot from './BookingSlot';

function BookingForm( { times, removeTime, dispatch, submitForm } ) {
    const today = new Date().toLocaleDateString("en-CA");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState(today);
    const [selectedTime, setSelectedTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [seat, setSeat] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            guests,
            date,
            selectedTime,
            occasion,
            seat
        };

        submitForm(formData);
        removeTime(selectedTime);

        setSelectedTime("");
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <h2>Reservation</h2>
            <fieldset>
                <label htmlFor="name">Full Name: </label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-required="true"
                />
                <label htmlFor="email">Email Address: </label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                />
                <label htmlFor="phone">Mobile Number: </label>
                <input 
                    id="phone" 
                    type="tel" 
                    placeholder="enter mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-required="true"
                />
                <label htmlFor="guests">Number of Guests: </label>
                <input 
                    id="guests" 
                    type="number" 
                    placeholder="enter number of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    aria-required="true"
                />
                <label htmlFor="date">Reservation Date: </label>
                <input 
                    id="date" 
                    type="date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value); dispatch({type: 'update_times', date: e.target.value})}}
                    aria-required="true"
                />
                <label htmlFor="time">Reservation Time: </label>
                <select 
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    aria-required="true"
                 >
                    {times.map((time => (
                        <BookingSlot key={time} timeSelected={time} />
                    )))}
                </select>
                <label htmlFor="occasion">Occasion: </label>
                <select 
                    id="occasion" 
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="none">No Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagment</option>
                </select>
                <legend>Seating Preference: </legend>
                <label>
                    <input 
                        type="radio"
                        name="seating"
                        value="indoor"
                        checked={seat === "indoor"}
                        onChange={(e) => setSeat(e.target.value)}
                    /> Indoor
                </label>
                <label>
                    <input 
                        type="radio"
                        name="seating"
                        value="outdoor"
                        checked={seat === "outdoor"}
                        onChange={(e) => setSeat(e.target.value)}
                    /> Outdoor
                </label>
                <label>
                    <input 
                        type="radio"
                        name="seating"
                        value="none"
                        checked={seat === "none"}
                        onChange={(e) => setSeat(e.target.value)}
                    /> No Preference
                </label>
                <button type="submit">Reserve</button>
            </fieldset>
        </form>
    );
}

export default BookingForm;