import { useReducer } from "react";
import BookingForm from "./BookingForm";




function updateTimes(state, action) {
    if(action.type === 'remove_time') {
        return state.filter(time => time !== action.time)
    }
    return state;
}

function initializeTimes() {
    return [
        "17:00",
        "19:30",
        "22:00"
    ];
}

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleSubmit = (timeChosen) => {
        dispatch({ type: 'remove_time', time: timeChosen})
    }

    return (
        <BookingForm times={availableTimes} submit={handleSubmit} dispatch={dispatch}/>
    ); 
}

export default BookingPage;