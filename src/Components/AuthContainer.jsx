import React, { useState } from "react";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";

function AuthContainer({ loginActionn, registerAction }) {
  const [showing, setShowing] = useState("login");

  const switchAuthh = () => {
    setShowing(showing === "login" ? "register" : "login");
  };

  return (
    <div className="main-container">
      <div className="auth-container">
        {/* <RegisterContainer switchAuth={switchAuthh} /> */}
        {showing === "login" ? (
          <LoginContainer switchAuth={switchAuthh} loginAction={loginActionn} />
        ) : (
          <RegisterContainer switchAuth={switchAuthh} registerActionn={registerAction} />
        )}
      </div>
    </div>
  );
}

export default AuthContainer;
