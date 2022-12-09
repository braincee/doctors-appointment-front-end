import React from 'react';
import { NavLink } from 'react-router-dom';

const SplashScreen = () => (
  <div className="background container-fluid d-flex flex-column align-items-center justify-content-around vw-100">
    <h1 className="header align-items-center">Doctors Appointment</h1>
    <div className="btncontainer">
      <NavLink to="/login">
        <button type="button" className="button1 btn btn-secondary me-5 fs-5">Log in</button>
      </NavLink>
      <NavLink to="/signup">
        <button type="button" className="button1 btn btn-secondary me-5 fs-5">Sign up</button>
      </NavLink>
    </div>
  </div>
);

export default SplashScreen;
