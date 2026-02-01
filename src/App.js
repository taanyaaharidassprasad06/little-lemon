import './App.css';
import Nav from './main-components/Nav.js';
import Main from './main-components/Main.js';
import Footer from './main-components/Footer.js';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage.js';

function App() {
  return (
    <>
      <Nav />

      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
