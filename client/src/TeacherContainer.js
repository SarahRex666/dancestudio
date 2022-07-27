import React, { useState, useEffect } from "react";
import Teachers from "./Teachers";
import TeacherCard from "./TeacherCard";
import TeacherClasses from "./TeacherClasses";
import { Button } from "react-bootstrap";
import TeacherBio from "./TeacherBio";

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
        {teachers.map((teacher) => (
          <div key={teacher.id}>
            <TeacherCard teacher={teacher} />
            <TeacherClasses teacherClasses={teacher.dance_classes} />
            <Button
              variant="outline-secondary"
              class="btn btn-secondary"
              type="button"
              onClick={() => setBio(teacher)}
            >
              Bio & Reviews
            </Button>
          </div>
        ))}
      </div>
    );
  }
}
export default TeacherContainer;
