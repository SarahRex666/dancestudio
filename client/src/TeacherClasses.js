import React from "react";
import TeacherClassCard from "./TeacherClassCard";

function TeacherClasses({ teacherClasses }) {
  return (
    <div className="teacher-container">
      {teacherClasses.map((danceClass) => (
        <div key={danceClass.id}>
          <TeacherClassCard danceClass={danceClass} />
        </div>
      ))}
    </div>
  );
}

export default TeacherClasses;
