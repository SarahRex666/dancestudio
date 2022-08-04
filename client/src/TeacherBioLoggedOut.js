import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function TeacherBioLoggedOut({ bio }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>{bio.name}</h1>
            <p>{bio.bio}</p>
            <img src={bio.image_url} />
          </Col>
          {reviewContent.map((review) => (
            <TeacherBioCard
              user={user}
              setReviewContent={setReviewContent}
              review={review}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
