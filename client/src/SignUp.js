import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";
function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => setUser(newUser));
  };

  return (
    <FormContainer>
      <Form class="container" onSubmit={handleSubmit}>
        <Form.Group className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="first_name"
            placeholder="First Name"
            value={formState.first_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={formState.last_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            placeholder="Address"
            value={formState.address}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            id="phone"
            placeholder="Phone"
            value={formState.phone}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Username</Form.Label>
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
            type="text"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
          <br></br>
        </Form.Group>
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
  );
}

export default SignUp;
