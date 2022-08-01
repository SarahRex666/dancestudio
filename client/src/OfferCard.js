import React, { useEffect, useState, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function OfferCard({ offer, currentUser, setCurrentUser }) {
  const [classes, setClasses] = useState("");
  const { id, name, style, description, time } = offer;

  function addDanceClass(offerId) {
    fetch(`/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        dance_class_id: offerId,
      }),
    });
  }
  if (currentUser && currentUser.id) {
    return (
      <div>
        <br></br>
        <br></br>
        <Card>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <h4>{name}</h4>
              <h5>{style}</h5>
              <p>{description}</p>
              <p>{time}</p>
              <Button
                variant="outline-secondary"
                class="btn btn-secondary"
                type="button"
                onClick={() => addDanceClass(offer.id)}
              >
                Sign Up
              </Button>
              <br></br>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
  return (
    <Row xs={3} md={3} className="g-4">
      <Col>
        <Card bg="secondary" border="primary" text="primary">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <footer className="blockquote-footer">{time}</footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default OfferCard;
