/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Login = () => (
  <div className="container-fluid w-50 mx-auto mt-5">
    <h2 className="h2 mt-5 mb-3 text-center">Log in</h2>
    <form>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="UserName"
          placeholder="Username"
          required
        />
        <label htmlFor="UserName">Username</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  </div>
);

export default Login;
