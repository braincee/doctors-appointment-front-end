<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import AddDoctor from './components/addDoctor/AddDoctor';
import Signup from './components/auth/signup';
import Splashscreen from './components/auth/splash_screen';
import Signin from './components/auth/signin';
import DeleteDoctor from './components/delete_doctor/DeleteDoctor';
import DoctorDetails from './components/DoctorDetails';
import Doctors from './components/Doctors';
import Navbar from './components/Navbar';
import NewAppointment from './components/new-appointment/NewAppointment';
import NotFound from './components/NotFound';
import localStorages from './helpers/localStorage';
import Appointments from './components/my_appointment/Appointments';
import 'react-notifications/lib/notifications.css';
import NoAuth from './components/auth/no_auth';

const user = localStorage.getItem('user');
const App = () => {
  const hasAccount = localStorages.getUser();

  const [classValue, setClassValue] = useState('show');
  const [showNav, setShowNav] = useState('block');
  const toggleMenu = () => {
    if (classValue === 'show') {
      setClassValue('hide');
      setShowNav('none');
    } else {
      setClassValue('show');
      setShowNav('block');
    }
  };

  if (hasAccount?.user) {
    return (
      <div>
        <NotificationContainer />
        <Navbar
          classValue={classValue}
          toggleMenu={toggleMenu}
        />
        <section className={`main-sec ${showNav}`}>
          <Routes>
            <Route path="/" element={<Doctors />} />
            <Route path="/add_doctor" element={<AddDoctor />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/new_appointment" element={<NewAppointment />} />
            <Route path="/delete_doctor" element={<DeleteDoctor />} />
            <Route path="/doctor_details/:id" element={<DoctorDetails />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/401" element={<NoAuth />} />
          </Routes>
        </section>
      </div>
    );
  }
  return (
    <div>
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e
      <Routes>
        <Route path="/" element={user ? <Doctors /> : <Splashscreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={user ? <Doctors /> : <Signin />} />
      </Routes>
    </div>

  );
};

export default App;
