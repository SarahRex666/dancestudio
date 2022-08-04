import React from "react";
import TeacherBioCard from "./TeacherBioCard";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

function TeacherBioForm({ user, bio, setReviewContent }) {
  const [formState, setFormState] = useState({
    user_id: user.id,
    teacher_id: bio.id,
    content: "",
    rating: "",
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => setReviewContent(newUser.reviews));
  };
  return (
    <div>
      {" "}
      <FormContainer>
        <Form class="container" onSubmit={handleSubmit}>
          <Form.Group className="mt-5">
            <Form.Select onChange={(e) => handleChange(e)} id="rating">
              <option>Rating:</option>
              <option value="5">Five Stars!</option>
              <option value="4">Four Stars</option>
              <option value="3">Three Stars</option>
              <option value="2">Two Stars</option>
              <option value="1">One Star</option>
            </Form.Select>
            <br></br>
            <FloatingLabel label="Review">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                id="content"
                value={formState.content}
                onChange={handleChange}
              />
            </FloatingLabel>
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
          </Form.Group>
        </Form>
      </FormContainer>
    </div>
  );
}

export default TeacherBioForm;
