import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  const mockTimes = ["11:00am", "12:00pm", "5:00pm"]
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  render(<BookingForm times={mockTimes} submit={mockSubmit} dispatch={mockDispatch}/>);
  const headingElement = screen.getByText("Reserve");
  expect(headingElement).toBeInTheDocument();
});