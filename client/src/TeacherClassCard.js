import React from "react";
import TeacherClasses from "./TeacherClasses";

function TeacherClassCard({ danceClass }) {
  const { name, style, description } = danceClass;

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default TeacherClassCard;
