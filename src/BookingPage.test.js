import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/BookingPage';

test('initializeTimes returns the correct expected value', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns the same value that is provided in the state', () => {
    const state = ["11:00am", "12:00pm", "5:00pm"];
    const action = { type: "UPDATE_TIMES", date: "2026-02-01"}

    const result = updateTimes(state, action);
    expect(result).toEqual(state);
});