import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";
import ForgotPassword from "./ForgotPassword";

function SignIn({ setCurrentUser }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => {
        if (newUser.id) setCurrentUser(newUser);
      })
      .then(navigate("/"));
  };

  return (
    <div class="mt-5 mb-5 pt-5 pb-5">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              id="username"
              placeholder="User Name"
              value={formState.username}
              onChange={handleChange}
            />
            <br></br>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>
          <br></br>
          <Button
            variant="outline-secondary"
            type="submit"
            id="submit"
            value="Submit"
          >
            Submit
          </Button>
          <br></br>
          <br></br>
          <Link to="/ForgotPassword" class="mt-5 mb-5 pt-5 pb-5">
            Forgot Password?
          </Link>
        </Form>
      </FormContainer>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default SignIn;
