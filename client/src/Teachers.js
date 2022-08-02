import React, { useState, useEffect } from "react";
import TeacherContainer from "./TeacherContainer";
import Footer from "./Footer";
import { Card, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

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
    <div class="container mb-5 pb-5">
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
