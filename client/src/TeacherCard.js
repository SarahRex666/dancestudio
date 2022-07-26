import React from "react";
import TeacherClasses from "./TeacherClasses";

function TeacherCard({ teacher }) {
  return (
    <div>
      <br></br>
      <br></br>
      <h4>{teacher.name}</h4>
      <p>{teacher.bio}</p>
      <img src={teacher.image_url}></img>
      <br></br>
      <br></br>
    </div>
  );
}

export default TeacherCard;
