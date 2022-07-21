import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";

function ProfileDeleteCard({ danceClass, currentUser }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/dance_classes/${danceClass.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      {danceClass ? (
        <div>
          <p>{danceClass.name}</p>
          <p>{danceClass.time}</p>
        </div>
      ) : null}
      <Button
        variant="outline-secondary"
        class="btn btn-secondary"
        type="button"
        onClick={() => handleDelete()}
      >
        Drop Class
      </Button>
    </div>
  );
}

export default ProfileDeleteCard;
