function BookingSlot( { timeSelected } ) {
    return (
        <option key={timeSelected} value={timeSelected}>{timeSelected}</option>
    );
}

export default BookingSlot;