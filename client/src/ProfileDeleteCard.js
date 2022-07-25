import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";

function ProfileDeleteCard({ danceClass, setCurrentUser, currentUser }) {
  const handleDelete = () => {
    const regId = danceClass.registrations[0].id;
    console.log(danceClass.registrations);
    fetch(`/registrations/${regId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setCurrentUser(currentUser));
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
