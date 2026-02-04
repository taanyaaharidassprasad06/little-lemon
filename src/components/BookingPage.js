import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";


// reducer function
export function updateTimes(state, action) {
    // returns all times except selected time
    if(action.type === 'remove_time') {
        return state.filter(time => time !== action.time)
    }
    
    // returns times available based on date
    if(action.type === 'update_times') {
        const selectedDate = new Date(action.date);
        const newTimes = window.fetchAPI(selectedDate);
        return newTimes;
    }
    return state;
}

// returns time for today
const fetchData = () => {
    const newTimes = window.fetchAPI(new Date());
    return newTimes;
}

// initial state
export function initializeTimes() {
    return fetchData();
}


function BookingPage( { submitForm } ) {
    // availableTimes starts as intializeTimes()
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const removeTime = (timeChosen) => {
        dispatch({ type: 'remove_time', time: timeChosen})
    }

    return (
        <BookingForm times={availableTimes} removeTime={removeTime} dispatch={dispatch} submitForm={submitForm}/>
    ); 
}

export default BookingPage;