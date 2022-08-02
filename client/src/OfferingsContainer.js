import React, { useState, useEffect } from "react";
import Offerings from "./Offerings";
import OfferCard from "./OfferCard";
import { Row, Col } from "react-bootstrap";

function OfferingsContainer({ offerings, currentUser, setCurrentUser }) {
  return (
    <div className="teacher-container">
      <Row>
        {offerings.map((offer) => (
          <Col sm="4">
            <div key={offer.id}>
              <OfferCard
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                offer={offer}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OfferingsContainer;
