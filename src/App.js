import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage.js'

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
