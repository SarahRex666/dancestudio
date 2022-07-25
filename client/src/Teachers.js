import React, { useState, useEffect } from "react";
import TeacherContainer from "./TeacherContainer";
import { Button } from "react-bootstrap/Button";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://final-project-asapa.herokuapp.com/teachers", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setTeachers(data));
  }, [teachers]);

  return (
    <div class="container">
      <br></br>
      <br></br>
      <h1>TEACHERS</h1>
      <TeacherContainer teachers={teachers} />
    </div>
  );
}

export default Teachers;
