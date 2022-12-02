import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import BookAppointment from './components/Appointment/BookAppointment';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SplashScreen />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Register />} />
      <Route exact path="/mainpage" element={<MainPage />} />
      <Route exact path="/appointment" element={<BookAppointment />} />
    </Routes>
  );
}

export default App;
