import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TeacherBio from "./TeacherBio";
import Carousel from "react-bootstrap/Carousel";

function TeacherContainer({ teachers, bio, setBio, currentUser, setTeachers }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`/me`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (bio.id) {
    return (
      <div>
        <TeacherBio
          user={user}
          bio={bio}
          setTeachers={setTeachers}
          setBio={setBio}
        />
        <br></br>
        <br></br>
        <Button
          variant="outline-secondary"
          class="btn btn-secondary"
          type="button"
          onClick={() => setBio([])}
        >
          Return to Teachers
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  } else {
    return (
      <div>
        <h1>TEACHERS</h1>
        <br></br>
        <Carousel className="mx-auto" variant="dark">
          {teachers.map((teacher) => (
            <Carousel.Item key={teacher.id}>
              <img
                class="rounded mx-auto d-block"
                src={teacher.image_url}
              ></img>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Carousel.Caption>
                <h3>{teacher.name}</h3>
                <Button
                  variant="outline-secondary"
                  class="btn btn-secondary"
                  type="button"
                  onClick={() => setBio(teacher)}
                >
                  Bio & Reviews
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default TeacherContainer;
