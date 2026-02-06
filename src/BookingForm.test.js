import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

const mockTimes = ["17:00", "18:00", "19:00"];
const mockRemoveTime = jest.fn();
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const renderForm = () => {
    render(<BookingForm times={mockTimes} removeTime={mockRemoveTime} dispatch={mockDispatch} submitForm={mockSubmit}/>);
}

const validFormData = () => {
    fireEvent.change(screen.getByRole("textbox", { name: /full name/i}), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByRole("textbox", { name: /email/i}), { target: { value: "johndoe@example.com" } });
    fireEvent.change(screen.getByRole("textbox", { name: /mobile number/i}), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByRole("spinbutton", { name: /number of guests/i}), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/reservation date/i), { target: { value: "2026-02-12" } });
    fireEvent.change(screen.getByRole("combobox", { name: /reservation time/i}), { target: { value: "17:00" } });
    fireEvent.change(screen.getByRole("combobox", { name: /occasion/i}), { target: { value: "birthday" } });
}

describe("BookingForm HTML Validation", () => {
    test("Name input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /full name/i});
        expect(input).toBeRequired();
    });
    test("Email input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /email/i});
        expect(input).toBeRequired();
        expect(input).toHaveAttribute("type", "email");
    });
    test("Phone input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /mobile number/i});
        expect(input).toBeRequired();
        expect(input).toHaveAttribute("type", "tel");
        expect(input).toHaveAttribute("pattern", "[0-9]{10}");
        expect(input).toHaveAttribute("minLength", "10");
        expect(input).toHaveAttribute("maxLength", "10");
    });
    test("Guests input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("spinbutton", { name: /number of guests/i});
        expect(input).toBeRequired();
        expect(input).toHaveAttribute("type", "number");
        expect(input).toHaveAttribute("min", "1");
        expect(input).toHaveAttribute("max", "10");
    });
    test("Date input has required attributes", () => {
        renderForm();
        const input = screen.getByLabelText(/reservation date/i);
        expect(input).toBeRequired();
        expect(input).toHaveAttribute("type", "date");
        expect(input).toHaveAttribute("min", new Date().toLocaleDateString("en-CA"));
    });
    test("Time input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /reservation time/i});
        expect(input).toBeRequired();
    });
    test("Occasion input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /occasion/i});
        expect(input).toBeRequired();
    });
    test("Seating input has required attributes", () => {
        renderForm();
        const input = screen.getByRole("radio", { name: /indoor/i});
        expect(input).toBeRequired();
        expect(input).toHaveAttribute("type", "radio");

    });
});

describe("BookingForm Validation: Valid States", () => {
    test("Valid name does not show error", () => {
         renderForm();
         const input = screen.getByRole("textbox", { name: /full name/i});
         fireEvent.change(input, { target: { value: "John Doe" } });
         fireEvent.blur(input);
         const errorMessage = screen.queryByText(/name is required/i);
         expect(errorMessage).not.toBeInTheDocument();
    });
    test("Valid email does not show error", () => {
         renderForm();
         const input = screen.getByRole("textbox", { name: /email/i});
         fireEvent.change(input, { target: { value: "johndoe@example.com" } });
         fireEvent.blur(input);
         const errorMessage1 = screen.queryByText(/email is required/i);
         const errorMessage2 = screen.queryByText(/please enter a valid email/i);
         expect(errorMessage1).not.toBeInTheDocument();
         expect(errorMessage2).not.toBeInTheDocument();
    });
    test("Valid phone number does not show error", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /mobile number/i});
        fireEvent.change(input, { target: { value: "1234567890" } });
        fireEvent.blur(input);
        const errorMessage1 = screen.queryByText(/phone number is required/i);
        const errorMessage2 = screen.queryByText(/please double check phone number/i);
        const errorMessage3 = screen.queryByText(/please enter a valid 10 digit phone number/i);
        expect(errorMessage1).not.toBeInTheDocument();
        expect(errorMessage2).not.toBeInTheDocument();
        expect(errorMessage3).not.toBeInTheDocument();
    });
    test("Valid guest count does not show error", () => {
        renderForm();
        const input = screen.getByRole("spinbutton", { name: /number of guests/i});
        fireEvent.change(input, { target: { value: "4" } });
        fireEvent.blur(input);
        const errorMessage = screen.queryByText(/number of guests is required/i);
        expect(errorMessage).not.toBeInTheDocument();
    });
    test("Valid date does not show error", () => {
        renderForm();
        const input = screen.getByLabelText(/reservation date/i);
        fireEvent.change(input, { target: { value: "2026-02-12" } });
        fireEvent.blur(input);
        const errorMessage = screen.queryByText(/reservation date is required/i);
        expect(errorMessage).not.toBeInTheDocument();
    });
    test("Valid time does not show error", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /reservation time/i});
        fireEvent.change(input, { target: { value: "17:00" } });
        fireEvent.blur(input);
        const errorMessage = screen.queryByText(/please select a reservation time/i);
        expect(errorMessage).not.toBeInTheDocument();
    });
    test("Valid occasion does not show error", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /occasion/i});
        fireEvent.change(input, { target: { value: "birthday" } });
        fireEvent.blur(input);
        const errorMessage = screen.queryByText(/please select an occasion/i);
        expect(errorMessage).not.toBeInTheDocument();
    });
    test("Valid seating preference does not show error", () => {
        renderForm();
        validFormData();
        const button = screen.getByRole("button", { name: /reserve/i });
        const seatInput = screen.getByRole("radio", { name: /indoor/i });
        fireEvent.click(seatInput);
        expect(button).toBeEnabled();
    });
});

describe("BookingForm Validation: Invalid States", () => {
    test("Empty name does show error", () => {
         renderForm();
         const input = screen.getByRole("textbox", { name: /full name/i});
         fireEvent.change(input, { target: { value: "" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/name is required/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Empty email does show error", () => {
         renderForm();
         const input = screen.getByRole("textbox", { name: /email/i});
         fireEvent.change(input, { target: { value: "" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/email is required/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Invalid email format does show error", () => {
         renderForm();
         const input = screen.getByRole("textbox", { name: /email/i});
         fireEvent.change(input, { target: { value: "johndoe" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/please enter a valid email/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Empty phone number does show error", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /mobile number/i});
        fireEvent.change(input, { target: { value: "" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/phone number is required/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Invalid phone number consisting of letters does show error", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /mobile number/i});
        fireEvent.change(input, { target: { value: "abcdefghij" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/please double check phone number/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Invalid phone number that is less than 10 digits does show error", () => {
        renderForm();
        const input = screen.getByRole("textbox", { name: /mobile number/i});
        fireEvent.change(input, { target: { value: "1234" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/please enter a valid 10 digit phone number/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Empty number of guests does show error", () => {
        renderForm();
        const input = screen.getByRole("spinbutton", { name: /number of guests/i});
        fireEvent.change(input, { target: { value: "" } });
         fireEvent.blur(input);
         const errorMessage = screen.getByText(/number of guests is required/i);
         expect(errorMessage).toBeInTheDocument();
    });
    test("Less than 1 guest does show error", () => {
        renderForm();
        const input = screen.getByRole("spinbutton", { name: /number of guests/i});
        fireEvent.change(input, { target: { value: "0" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/at least 1 guest is required/i);
        expect(errorMessage).toBeInTheDocument();
    });
    test("More than 10 guests does show error", () => {
        renderForm();
        const input = screen.getByRole("spinbutton", { name: /number of guests/i});
        fireEvent.change(input, { target: { value: "11" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/max number of guests is 10/i);
        expect(errorMessage).toBeInTheDocument();
    });
    test("Empty date does show error", () => {
        renderForm();
        const input = screen.getByLabelText(/reservation date/i);
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/reservation date is required/i);
        expect(errorMessage).toBeInTheDocument();
    });
    test("Past date does show error", () => {
        renderForm();
        const input = screen.getByLabelText(/reservation date/i);
        fireEvent.change(input, { target: { value: "2025-03-15" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/please select a date that is in the future/i);
        expect(errorMessage).toBeInTheDocument();
    });
    test("Empty time does show error", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /reservation time/i});
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/please select a reservation time/i);
        expect(errorMessage).toBeInTheDocument();
    });
    test("Empty occasion does show error", () => {
        renderForm();
        const input = screen.getByRole("combobox", { name: /occasion/i});
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText(/please select an occasion/i);
       expect(errorMessage).toBeInTheDocument();
    });
    test("Empty seating preference does show error", () => {
        renderForm();
        validFormData();
        const button = screen.getByRole("button", { name: /reserve/i });
        expect(button).toBeDisabled();

    });
});