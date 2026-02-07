import { useState } from 'react';
import { validateEmail } from '../utils';
import BookingSlot from './BookingSlot';

function BookingForm( { times, removeTime, dispatch, submitForm } ) {
    const today = new Date().toLocaleDateString("en-CA");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [seat, setSeat] = useState("");

    const [errors, setErrors] = useState({});

    const getPhoneDigits = () => {
        return phone.replace(/\D/g, ''); // replaces all non digit characters with ''
    }

    const isFormValid = () => {
        return name.trim() && email && getPhoneDigits().length === 10 && (guests >= 1 && guests <= 10) && date && selectedTime && occasion && seat;
    }

    const validateForm = (fieldName, value) => {
        switch(fieldName) {
            case "name":
                if(!value.trim()) return "Name is required";
                break;
            case "email":
                if(!value) return "Email is required";
                if(!validateEmail(value)) return "Please enter a valid email!"
                break;
            case "phone":
                if(!value) return "Phone number is required";
                const digits = value.replace(/\D/g, '');
                if(!digits) return "Please double check phone number!"
                if(digits.length !== 10) return "Please enter a valid 10 digit phone number!";
                break;
            case "guests":
                if(!value) return "Number of guests is required";
                if(value < 1) return "At least 1 guest is required!"
                if(value > 10) return "Max number of guests is 10!"
                break;
            case "date":
                if(!value) return "Reservation date is required";
                if(value < today) return "Please select a date that is in the future!";
                break;
            case "selectedTime":
                if(!value) return "Please select a reservation time";
                break;
            case "occasion":
                if(!value) return "Please select an occasion";
                break;
            default:
                return "";
        }
    }

    const handleBlur = (fieldName, value) => {
        const errorMessage = validateForm(fieldName, value);
        setErrors(prev => ({...prev, [fieldName]: errorMessage}));
    }

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
            <h2 className="form-heading">Reservation</h2>
            <fieldset className="form-input-container">
                <label htmlFor="name" className="form-label">Full Name<span className="star">*</span>: </label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    required
                    aria-required="true"
                    className="form-input"
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
                <label htmlFor="email" className="form-label">Email Address<span className="star">*</span>: </label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                    aria-required="true"
                    required
                    className="form-input"
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <label htmlFor="phone" className="form-label">Mobile Number<span className="star">*</span>: </label>
                <input 
                    id="phone" 
                    type="tel" 
                    placeholder="enter mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) => handleBlur("phone", e.target.value)}
                    aria-required="true"
                    required
                    pattern="[0-9]{10}"
                    minLength="10"
                    maxLength="10"
                    className="form-input"
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
                <label htmlFor="guests" className="form-label">Number of Guests<span className="star">*</span>: </label>
                <h5 className="notice">Note: If you need a reservation for more than 10 people, please call us to arrange!</h5>
                <input 
                    id="guests" 
                    type="number" 
                    placeholder="enter number of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    onBlur={(e) => handleBlur("guests", e.target.value)}
                    aria-required="true"
                    required
                    min="1"
                    max="10"
                    className="form-input"
                />
                {errors.guests && <p className="error-message">{errors.guests}</p>}
                <label htmlFor="date" className="form-label">Reservation Date<span className="star">*</span>: </label>
                <input 
                    id="date" 
                    type="date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value); dispatch({type: 'update_times', date: e.target.value})}}
                    onBlur={(e) => handleBlur("date", e.target.value)}
                    aria-required="true"
                    required
                    min={today}
                    className="form-input"
                />
                {errors.date && <p className="error-message">{errors.date}</p>}
                <label htmlFor="time" className="form-label">Reservation Time<span className="star">*</span>: </label>
                <select 
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    onBlur={(e) => handleBlur("selectedTime", e.target.value)}
                    aria-required="true"
                    required
                    className="form-input"
                 >
                    <option value="" disabled>Select a time</option>
                    {times.map((time => (
                        <BookingSlot key={time} timeSelected={time} />
                    )))}
                </select>
                {errors.selectedTime && <p className="error-message">{errors.selectedTime}</p>}
                <label htmlFor="occasion" className="form-label">Occasion<span className="star">*</span>: </label>
                <select 
                    id="occasion" 
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    onBlur={(e) => handleBlur("occasion", e.target.value)}
                    aria-required="true"
                    required
                    className="form-input"
                >
                    <option value="" disabled>Select occasion</option>
                    <option value="none">No Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                </select>
                {errors.occasion && <p className="error-message">{errors.occasion}</p>}
                <fieldset className="form-label seating">
                    <legend>Seating Preference<span className="star">*</span>: </legend>
                    <div className="radio-container">
                        <label>
                            <input 
                                type="radio"
                                name="seating"
                                value="indoor"
                                checked={seat === "indoor"}
                                onChange={(e) => setSeat(e.target.value)}
                                required
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
                    </div>
                </fieldset>
                <button type="submit" className="reserve-btn" aria-label="On Click" disabled={!isFormValid()}>Reserve</button>
            </fieldset>
        </form>
    );
}

export default BookingForm;