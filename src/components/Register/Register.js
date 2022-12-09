/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userRegister } from '../../redux/user/login';
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setErrors] = useState('');

  const newState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const input = event.target;
    const newvalue = input.value;
    switch (input.name) {
      case 'name':
        setName(newvalue);
        return name;
      case 'email':
        setEmail(newvalue);
        return email;

      default:
        return 'yes';
    }
  };

  useEffect(() => {
    if (newState.status === 200) {
      navigate('/doctors');
    } else if (newState.status !== 200 && newState.status !== '') {
      if (newState.fetchedData.error === 422) {
        setErrors(newState.fetchedData.errors);
      } else {
        setErrors(newState.fetchedData.errors);
      }
    }
  }, [newState]);

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    dispatch(userRegister(name, email));
    form.reset();
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <p>{error}</p>
        <h2 className="register-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            className="form-control"
            name="email"
            id="Email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
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
};

export default Register;
