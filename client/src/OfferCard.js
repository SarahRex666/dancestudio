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
      <div class="pb-2">
        <Card border="secondary" style={{ width: "25rem" }}>
          <Card.Header>{name}</Card.Header>
          <p class="pl-2 pt-2">{description}</p>
          <footer className="blockquote-footer pl-2">{time}</footer>
          <Button
            variant="outline-secondary"
            class="btn btn-secondary position-absolute bottom-0 end-0"
            type="button"
            style={{ width: "7rem" }}
            onClick={() => addDanceClass(offer.id)}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    );
  }
  return (
    <div class="col pb-2">
      <Card border="secondary" style={{ width: "25rem" }}>
        <Card.Header>{name}</Card.Header>
        <p class="pl-2 pt-2">{description}</p>
        <footer className="blockquote-footer pl-2">{time}</footer>
      </Card>
    </div>
  );
}
export default OfferCard;
