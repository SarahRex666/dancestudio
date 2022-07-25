import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";

function Profile({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    fetch(`/me`)
      .then((response) => response.json())
      .then((data) => setFormState(data));
  }, []);

  console.log(formState);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then(setFormState(""))
      .then(navigate("/"));
  };

  return (
    <div class="container">
      <br></br>
      <br></br>
      <h1>PROFILE</h1>
      <ProfileCard setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <br></br>
      <br></br>
      <h3>Edit your personal info:</h3>
      <br></br>
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="first_name"
            defaultValue={currentUser.first_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last_name"
            defaultValue={currentUser.last_name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            defaultValue={currentUser.address}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            id="phone"
            defaultValue={currentUser.phone}
            onChange={handleChange}
          />
          <br></br>
        </Form.Group>
        <Button
          variant="outline-secondary"
          class="btn btn-secondary"
          type="submit"
          id="submit"
          value="Submit"
        >
          Submit
        </Button>
        <br></br>
        <br></br>
      </Form>
    </div>
  );
}

export default Profile;
