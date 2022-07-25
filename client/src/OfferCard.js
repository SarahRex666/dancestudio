import React, { useEffect, useState, useReducer } from "react";
import Button from "react-bootstrap/Button";

function OfferCard({ offer, currentUser, setCurrentUser }) {
  const [classes, setClasses] = useState("");
  const [, forceUpdate] = useReducer((x) => 1, 0);
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
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  if (currentUser) {
    return (
      <div>
        <br></br>
        <br></br>
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
      </div>
    );
  }
  return (
    <div>
      <br></br>
      <br></br>
      <h4>{name}</h4>
      <h5>{style}</h5>
      <p>{description}</p>
      <p>{time}</p>
      <br></br>
    </div>
  );
}

export default OfferCard;
