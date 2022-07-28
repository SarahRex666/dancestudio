import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";

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
    <FormContainer>
      <Form className="mt-5" onSubmit={handleSubmit}>
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
      </Form>
    </FormContainer>
  );
}

export default SignIn;
