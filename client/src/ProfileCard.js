import React, { useState, useEffect } from "react";
import ProfileDeleteCard from "./ProfileDeleteCard";

function ProfileCard({ currentUser, setCurrentUser }) {
  const [classes, setClasses] = useState(currentUser.dance_classes);
  const {
    id,
    username,
    admin,
    first_name,
    last_name,
    address,
    phone,
    dance_classes,
  } = currentUser;
  console.log(classes);
  useEffect(() => {
    fetch(`/me`)
      .then((response) => response.json())
      .then((data) => setClasses(data.registrations));
  }, []);

  return (
    <div>
      <br></br>
      <h1>Welcome back, {currentUser.first_name}!</h1>
      <br></br>
      <h3>Classes:</h3>
      <br></br>
      {classes.map((danceClass) => (
        <ProfileDeleteCard
          currentUser={currentUser}
          danceClass={danceClass}
          setCurrentUser={setCurrentUser}
          setClasses={setClasses}
          classes={classes}
        />
      ))}
    </div>
  );
}

export default ProfileCard;
