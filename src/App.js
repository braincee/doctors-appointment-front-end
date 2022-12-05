import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import BookAppointment from './components/Appointments/BookAppointment';
import MyAppointments from './components/Appointments/MyAppointments';
import Navbar from './components/layouts/Navbar';
import AddDoctor from './components/Doctors/AddDoctor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route exact path="/new_appointment" element={<BookAppointment />} />
        <Route exact path="my_appointments" element={<MyAppointments />} />
      </Routes>
    </>
  );
}

export default App;
