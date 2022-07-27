import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function TeacherBioCard({ review, setReviewContent, setBio, bio, user }) {
  const handleDelete = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setReviewContent(res.reviews));
  };

  if (user.admin) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{review.user.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {review.rating}/5
                  </Card.Subtitle>
                  <Card.Text>{review.content}</Card.Text>
                  <Button size="sm" onClick={() => handleDelete()}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{review.user.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {review.rating}/5
                </Card.Subtitle>
                <Card.Text>{review.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherBioCard;
