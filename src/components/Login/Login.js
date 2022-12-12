/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/user/login';
import './login.css';

const Login = () => {
  const [name, setName] = useState('');
  // const [errors, setErrors] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const newState = useSelector((state) => state.user);

  const handleChange = (e) => {
    const input = e.target;
    const newUsername = input.value;
    switch (input.name) {
      case 'name':
        setName(newUsername);
        return name;

      default:
        return 'yes';
    }
  };

  // useEffect(() => {
  //   if (newState && newState.status === 200) {
  //     navigate('/doctors');
  //   } else if (newState && newState.status !== 200 && newState.status !== '') {
  //     if (newState.fetchedData && newState.fetchedData.error === 401) {
  //       setErrors(newState.fetchedData.errors);
  //     } else {
  //       setErrors(newState.fetchedData ? newState.fetchedData.errors : '');
  //     }
  //   }
  // }, [newState]);

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    dispatch(userLogin(name));
    navigate('/doctors');
    form.reset();
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
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
};

export default Login;
