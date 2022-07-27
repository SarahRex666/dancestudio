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

function TeacherBio({ bio, user, setTeachers, setBio }) {
  const [reviewContent, setReviewContent] = useState([]);
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
    // e.target.reset();
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

  useEffect(() => {
    fetch(`http://localhost:3000/teachers/${bio.id}`)
      .then((res) => res.json())
      .then((res) => setReviewContent(res.reviews));
  }, []);
  {
    if (user.id) {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <h1>{bio.name}</h1>
                <p>{bio.bio}</p>
                <img src={bio.image_url} />
              </Col>
              {reviewContent.map((review) => (
                <TeacherBioCard
                  user={user}
                  bio={bio}
                  id={review.id}
                  review={review}
                  setBio={setBio}
                  setReviewContent={setReviewContent}
                />
              ))}
            </Row>
          </Container>

          <FormContainer>
            <Form class="container" onSubmit={handleSubmit}>
              <Form.Group className="mt-5">
                <Form.Select
                  aria-label="rating"
                  onChange={handleChange}
                  value="rating"
                  id="rating"
                >
                  <option>Rating:</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </Form.Select>
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
    } else
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <h1>{bio.name}</h1>
                <p>{bio.bio}</p>
                <img src={bio.image_url} />
              </Col>
              {reviewContent.map((review) => (
                <TeacherBioCard
                  user={user}
                  setReviewContent={setReviewContent}
                  review={review}
                />
              ))}
            </Row>
          </Container>
        </div>
      );
  }
}
export default TeacherBio;
