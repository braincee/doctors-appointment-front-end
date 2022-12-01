/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => (
  <div className="container-fluid w-50 mx-auto mt-5">
    <h2 className="h2 mt-5 mb-3 text-center">Sign Up</h2>
    <form>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          required
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="d-flex justify-content-around">
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
        <NavLink to="/login"><button type="button" className="btn btn-info">Log in</button></NavLink>
      </div>
    </form>
  </div>
);

export default Register;
