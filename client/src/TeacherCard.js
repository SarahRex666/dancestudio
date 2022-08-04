import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import TeacherClasses from "./TeacherClasses";
import { Carousel } from "react-bootstrap";

function TeacherCard({ teacher, teacherDanceClasses }) {
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={teacher.image_url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{teacher.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
}

export default TeacherCard;
