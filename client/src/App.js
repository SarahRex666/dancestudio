import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Teachers from "./Teachers";
import Offerings from "./Offerings";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./auth";
import Contact from "./Contact";
import Logout from "./Logout";
import Profile from "./Profile";
import TeacherBio from "./TeacherBio";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/me", {
      withCredentials: "include",
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
    return <div> </div>;
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <nav>
            <Navbar currentUser={currentUser} />
          </nav>
          <div>
            <Routes>
              <Route
                path="/Teachers"
                currentUser={currentUser}
                element={<Teachers />}
              />
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
