import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";

function ResetPassword() {
  const [formState, setFormState] = useState({
    email: "",
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
    fetch("/password/reset", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then(navigate("/"));
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
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              id="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
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
        </Form>
      </FormContainer>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default ResetPassword;
