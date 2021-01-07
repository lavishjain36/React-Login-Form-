import React, { useState } from "react";

const Login = ({ loginUserFn, errors }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserFn(details);
  };

  return (
    <div className="login">
      <p>{errors.errors}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <img
            width="700px"
            border="1px"
            border-radius="20px"
            height="200px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTHs5oZb95Cbk0QKNu1IgmUHdTP4KPfL3Ig&usqp=CAU"
            alt=""
          />
          <h1>Welcome to Appiness Interactive</h1>
          <h2>Login Form</h2>
          <br />
          <br />
          <label>Enter Username or email : </label>
          <br />
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          <label>Enter Your Password : </label>
          <br />
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            name="password"
          />{" "}
          <br />
        </div>
        <div className="form-group">
          <br />
          <br />
          <button onClick={handleSubmit} value="Login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
