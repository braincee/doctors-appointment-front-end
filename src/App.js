import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import MainPage from './components/MainPage/MainPage';
import BookAppointment from './components/Appointment/BookAppointment';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/mainpage" element={<MainPage />} />
        <Route exact path="/new_appointment" element={<BookAppointment />} />
      </Routes>
    </>

  );
}

export default App;
