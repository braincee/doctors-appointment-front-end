import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import BookAppointment from './components/Appointment/BookAppointment';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SplashScreen />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Register />} />
      <Route exact path="/doctors" element={<Doctors />} />
      <Route exact path="/new_appointment" element={<BookAppointment />} />
    </Routes>
  );
}

export default App;
