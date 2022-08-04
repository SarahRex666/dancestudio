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
import TeacherBioForm from "./TeacherBioForm";

function TeacherBio({ bio, user, setTeachers, setBio }) {
  const [reviewContent, setReviewContent] = useState([]);
  console.log(bio);
  useEffect(() => {
    fetch(`/teachers/${bio.id}`)
      .then((res) => res.json())
      .then((res) => setReviewContent(res.reviews));
  }, []);

  if (user && user.id) {
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
        <TeacherBioForm
          bio={bio}
          user={user}
          setReviewContent={setReviewContent}
        />
      </div>
    );
  }

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
export default TeacherBio;
