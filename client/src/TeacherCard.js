import React from "react";
import TeacherClasses from "./TeacherClasses";

function TeacherCard({ teacher }) {
  const { name, bio, dance_classes, photo_url } = teacher;
  return (
    <div>
      <br></br>
      <br></br>
      <h4>{name}</h4>
      <p>{bio}</p>
      <img src={photo_url}></img>
      <br></br>
      <br></br>
    </div>
  );
}

export default TeacherCard;
