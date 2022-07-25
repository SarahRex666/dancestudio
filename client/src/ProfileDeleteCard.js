import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ProfileDeleteCard({
  danceClass,
  setCurrentUser,
  currentUser,
  setClasses,
  classes,
}) {
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log(danceClass.dance_class.name);
    fetch(`/registrations/${danceClass.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/"));
  };

  return (
    <div>
      {classes ? (
        <div>
          <p>{danceClass.dance_class.name}</p>
          <p>{danceClass.dance_class.time}</p>
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
