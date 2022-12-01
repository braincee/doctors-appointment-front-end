/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './register.css';

const Register = () => (
  <section className="register-section">
    <div className="register-container">
      <h2 className="register-title">Sign Up</h2>
      <form className="register-form">
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          className="form-control"
          id="Username"
          placeholder="Name"
          required
        />
        <div className="d-flex">
          <button type="submit" className="button1 btn btn-secondary me-4 fs-4">
            Sign Up
          </button>
          <NavLink to="/login"><button type="button" className="button1 btn btn-secondary me-4 fs-4">Log in</button></NavLink>
        </div>
      </form>
    </div>
  </section>
);

export default Register;
