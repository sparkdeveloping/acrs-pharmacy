import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AuthContainer from "./Components/AuthContainer";
import Header from "./Components/Header";
import PharmacistContainer from "./Components/PharmacistContainer";
import TellerContainer from "./Components/TellerContainer";

import "./Styles/Header.css";

const LOGIN_URL = "http://localhost:9001/arcs/api/v1/auth/login"
const REGISTER_URL = "http://localhost:9001/arcs/api/v1/auth/register"

function App() {

  const [currentUser, setCurrentUser] = useState({ name: "", role: "" })

  useEffect(() => {
    return () => {
      console.log(currentUser)
    };
  }, [])

  const loginUser = (username, password) => {

    // const data = { username: username, password: password }

    // axios.put(LOGIN_URL, data)
    //   .then((response) => {
    //     setCurrentUser(response.user)
    //   })
    //   .catch((error) => {
    //     alert(error)
    //   })

    setCurrentUser(
      username === "t" ?
        {
          username: "Denzel",
          role: "TELLER"
        } : {
          username: "Casper",
          role: "PHARMACIST"
        }

    )
  }

  const registerUser = (firstName, lastName, email, username, password, phone, address, nationalId) => {

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      phone: phone,
      address: address,
      nationalId: nationalId
    }

    axios.put(REGISTER_URL, data)
      .then((response) => {
        // setCurrentUser(response)
        alert(response)
        console.log("register log: " + response)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className="App">
      <Header user={currentUser} logout={() => { setCurrentUser({ name: "" }) }} />
      {currentUser.name === "" ? <AuthContainer loginActionn={loginUser} registerAction={registerUser} /> : currentUser.role === "TELLER" ? <TellerContainer /> : <PharmacistContainer />}
      {/* <PharmacistContainer /> */}
    </div>
  );
}

export default App;
