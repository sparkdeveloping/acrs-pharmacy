import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import "../Styles/LoginContainer.css";

function LoginContainer({ switchAuth, loginAction }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const loginUser = () => {
    setLoading(true);
    loginAction(username, password)
  };

  return (
    <div className="login-container main-login-container">
      <LoginHeader />
      <div className="horizontal-box">
        <input className="input" type="text" placeholder="Username" value={username} onChange=
          {(e) => { setUsername(e.target.value) }} />
        <div className="horizontal-padding"></div>
      </div>
      <div className="horizontal-box"></div>
      <div className="horizontal-box">
        <input
          className="input"
          type="text"
          placeholder="Password"
          onSubmit={loginUser}
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <div className="horizontal-padding"></div>
      </div>
      <div className="horizontal-box"></div>
      <button className="blue-button" onClick={loading ? () => { } : loginUser}>
        {loading ? "Logging In" : "Login"}
      </button>
      <button className="blue-text-button" onClick={switchAuth}>
        Don’t have an account? Register
      </button>
    </div>
  );
}

export default LoginContainer;
