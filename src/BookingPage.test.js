import { initializeTimes, updateTimes } from './components/BookingPage';

beforeEach(() => {
    window.fetchAPI = jest.fn((date) => {
        return ["17:00", "18:00", "19:00"];
    })
});

test('initializeTimes returns the correct expected value', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns the same value that is provided in the state', () => {
    const state = ["17:00", "18:00", "19:00"];
    const action = { type: "update_times", date: "2026-02-01"}

    const result = updateTimes(state, action);
    expect(result).toEqual(state);
});