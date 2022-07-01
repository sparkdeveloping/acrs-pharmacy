import React from "react";
import { useState } from "react";
import RegisterHeader from "./RegisterHeader";

function RegisterContainer({ switchAuth, registerActionn }) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [nationalId, setNationalId] = useState("")

  const [isRegisteringIn, setIsRegisteringIn] = useState(false)

  const registerUser = () => {
    setIsRegisteringIn(true)
    let authUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      phone: phone,
      address: address,
      password: password,
      nationalId: nationalId
    }
    registerActionn(authUser)
  }

  return (
    <div className="main-register-container">
      <RegisterHeader />
      <div className="">
        <div className="horizontal-box">
          <input className="input" type="text" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
          <div className="horizontal-padding" />
          <input className="input" type="text" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
          <div className="horizontal-padding" />
          <input
            className="input"
            type="text"
            placeholder="National ID Number"
            value={nationalId}
            onChange={(e) => { setNationalId(e.target.value) }}
          />
        </div>
        <div className="horizontal-box">
          <input className="input width-30" type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <div className="horizontal-padding" />
          <input className="input width-30" type="text" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
          <div className="horizontal-padding" />
          <input
            className="input width-40"
            type="text"
            placeholder="Address"
            value={address} onChange={(e) => { setAddress(e.target.value) }}
          />
        </div>
        <div className="vertical-padding register-border-line-separator"></div>
        <div className="horizontal-box">
          <input className="input" type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <div className="horizontal-padding" />
          <input
            className="input"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
      </div>
      <button className="blue-button" onClick={registerUser}>{isRegisteringIn ? "Registering In" : "Create Account"}</button>
      <button className="blue-text-button" onClick={switchAuth}>
        Already have an account? Login Instead
      </button>
    </div>
  );
}

export default RegisterContainer;
