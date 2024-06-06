import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <div className='login-inpage'>
      <h1 className="">Login</h1>
      <form>
        <div className="email-box">
          <label className="">Email:</label>
          <input type="email" className="input" />
        </div>
        <div className="pass-box">
          <label className="">Password:</label>
          <input type="password" className="input" />
        </div>
        <button className="btn-1">LOGIN</button>
      </form>
      </div>
    </div>
  );
};

export default Login;