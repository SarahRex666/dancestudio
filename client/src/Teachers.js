import React, { useState, useEffect } from "react";
import TeacherContainer from "./TeacherContainer";

function Teachers({ currentUser }) {
  const [teachers, setTeachers] = useState([]);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    fetch("/teachers", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div class="container">
      <br></br>
      <br></br>
      <TeacherContainer
        setBio={setBio}
        bio={bio}
        teachers={teachers}
        setTeachers={setTeachers}
      />
    </div>
  );
}

export default Teachers;
