import { useReducer } from 'react';
import BookingForm from './BookingForm1';

export function initializeTimes() {
    const today = new Date();
    return window.fetchAPI(today);
}

export function updateTimes(state, action) {
    if(action.type === 'UPDATE_TIMES') {
        const selectedDate = new Date(action.date);
        return window.fetchAPI(selectedDate);
    }

    return state;
}

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes());

    return (
        <div>
            <BookingForm times={availableTimes}/>
        </div>
    );
}

export default BookingPage;