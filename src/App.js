import './App.css';
import Nav from './main-components/Nav.js';
import Header from './main-components/Header.js';
import Main from './main-components/Main.js';
import Footer from './main-components/Footer.js';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import BookingPage from './components/BookingPage.js'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />

      <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
