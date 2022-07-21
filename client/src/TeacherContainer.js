import React, { useState, useEffect } from "react";
import Teachers from "./Teachers";
import TeacherCard from "./TeacherCard";
import TeacherClasses from "./TeacherClasses";

function TeacherContainer({ teachers }) {
  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <TeacherCard teacher={teacher} />
          <TeacherClasses teacherClasses={teacher.dance_classes} />
        </div>
      ))}
    </div>
  );
}

export default TeacherContainer;
