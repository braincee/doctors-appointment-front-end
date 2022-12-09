import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userLogOutAction } from '../../redux/user/login';
import './main.css';
import logo from '../assets/doctor-logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOutAction());
    navigate('/login');
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link
          to="/"
        >
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/doctors"
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/add_doctor"
            >
              Add Doctor
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/my_appointments"
            >
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/new_appointment"
            >
              New Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/delete_doctor"
            >
              Delete a Doctor
            </NavLink>
          </li>
          <button type="button" onClick={handleLogout} className="bg-secondary btn-sm">Logout</button>
        </ul>
      </div>
      <p className="copyright">&copy; Microverse 2022</p>
    </nav>
  );
};

export default Navbar;
