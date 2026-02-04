import './App.css';
import Nav from './main-components/Nav';
import Main from './main-components/Main';
import Footer from './main-components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

export const writeToStorage = (bookings) => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

export const readFromStorage = () => {
  return JSON.parse(localStorage.getItem("bookings") || "[]");
}

function App() {
  const navigate = useNavigate();

    const submitForm = (formData) => {
    const result = window.submitAPI();

    if(result) {
      // get existing bookings from local storage (or empty array if none exists)
      const existingBookings = readFromStorage();

      // add new booking to array
      existingBookings.push(formData);

      // save updated array back to local storage
      writeToStorage(existingBookings);
      navigate("/confirmed");
    }
  }


  return (
    <>
      <Nav />

      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage submitForm={submitForm}/>}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
