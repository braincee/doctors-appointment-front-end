import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';

const SplashScreen = () => (
  <div className="container-fluid d-flex flex-column align-items-center justify-content-around vw-100 background">
    <h1 className="header align-items-center">Doctors Appointment</h1>
    <div className="btncontainer">
      <NavLink to="/login">
        <button type="button" className="btn btn-secondary me-5 fs-5 button1">Log in</button>
      </NavLink>
      <NavLink to="/signup">
        <button type="button" className="btn btn-secondary me-5 fs-5 button1">Sign up</button>
      </NavLink>
    </div>
  </div>
);

export default SplashScreen;
