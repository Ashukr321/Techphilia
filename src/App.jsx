import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Comps/NavBar/Navbar';
import Footer from './Comps/Footer/Footer';
import Home from './Pages/Home';
import Events from './Pages/Events';
import ContactPage from './Pages/Contact/ContactPage';
import About from './Pages/About';
import Gallery from "./Pages/Gallery";
import Error from './Pages/Error';

function App() {
  return (
    <div className="App align-center">
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
