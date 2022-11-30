import React from 'react'

const Login = () => {
  return (
    <div className="container-fluid w-50 mx-auto mt-5"> 
      <h2 className="h2 mt-5 mb-3 text-center">Log in</h2>
      <form>
        
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={username}
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login