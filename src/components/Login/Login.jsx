/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

const Login = () => (
  <section className="login-section">
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          required
        />
        <div className="d-flex">
          <button type="submit" className=" button1 btn btn-secondary me-4 fs-4">
            Log in
          </button>
          <NavLink to="/signup">
            <button type="button" className="button1 btn btn-secondary me-4 fs-4">Sign Up</button>
          </NavLink>
        </div>
      </form>
    </div>
  </section>
);

export default Login;
