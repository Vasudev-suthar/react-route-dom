const Signup = () => {
    return (
      <div className="login-page">
        <div className="sign-inpage">
        <h1 className="">Signup</h1>
        <form>
          <div className="email-box">
            <label className="">Name:</label>
            <input type="name" className="input" />
          </div>
          <div className="pass-box">
            <label className="">Email:</label>
            <input type="email" className="input" />
          </div>
          <div className="pass-box">
            <label className="">Password:</label>
            <input type="password" className="input" />
          </div>
          <button className="btn-1">SIGN UP</button>
        </form>
        </div>
      </div>
    );
  };
  
  export default Signup;