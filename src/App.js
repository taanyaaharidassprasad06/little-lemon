import './App.css';
import Nav from './main-components/Nav';
import Main from './main-components/Main';
import Footer from './main-components/Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';

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
