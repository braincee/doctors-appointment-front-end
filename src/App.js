import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import BookAppointment from './components/Appointments/BookAppointment';
import MyAppointments from './components/Appointments/MyAppointments';
import Navbar from './components/layouts/Navbar';
import AddDoctor from './components/Doctors/AddDoctor';
import DeleteDoctor from './components/Doctors/DeleteDoctor';
import DoctorDetails from './components/Doctors/DoctorDetails';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      { user && user.fetchedData !== null ? <Navbar /> : '' }
      <div>
        <Routes>
          <Route exact="true" path="/" element={<SplashScreen />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/add_doctor" element={<AddDoctor />} />
          <Route exact path="/delete_doctor" element={<DeleteDoctor />} />
          <Route exact path="/doctor_details/:id" element={<DoctorDetails />} />
          <Route exact path="/new_appointment" element={<BookAppointment />} />
          <Route exact path="/my_appointments" element={<MyAppointments />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
