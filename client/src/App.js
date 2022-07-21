import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Teachers from "./Teachers";
import Contacts from "./Contact";
import Offerings from "./Offerings";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./auth";
import Contact from "./Contact";
import Logout from "./Logout";
import Profile from "./Profile";
import { Button } from "react-bootstrap/Button";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      withCredentials: true,
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
        });
      } else setAuthChecked(true);
    });
  }, []);

  if (!authChecked) {
    return <div></div>;
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <nav>
            <Navbar currentUser={currentUser} />
          </nav>
          <div class="container-fluid">
            <Routes>
              <Route path="/Teachers" element={<Teachers />} />
              <Route
                path="/Offerings"
                element={
                  <Offerings
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                  />
                }
              />
              <Route path="/Contact" element={<Contact />} />
              <Route
                path="/SignIn"
                element={<SignIn setCurrentUser={setCurrentUser} />}
              />
              <Route path="/SignUp" element={<SignUp />} />
              <Route
                path="/Profile"
                element={
                  <Profile
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/Logout"
                element={<Logout setCurrentUser={setCurrentUser} />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
