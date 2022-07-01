import React from "react";
import Logo from "./Logo";
import { FiLogOut } from 'react-icons/fi'
function Header({ user, logout }) {

  return (
    <div className="header">
      <Logo />
      {user.name !== "" &&
        <div style={{ display: "flex" }}>
          <div className="align-right">
            <div className="name">Hi, {user.username}</div>
            <div className="role">{user.role}</div>
          </div>
          <FiLogOut className="logout" onClick={logout} />
        </div>
      }
    </div>
  );
}

export default Header;
