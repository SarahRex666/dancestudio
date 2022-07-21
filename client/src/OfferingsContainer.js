import React, { useState, useEffect } from "react";
import Offerings from "./Offerings";
import OfferCard from "./OfferCard";

function OfferingsContainer({ offerings, currentUser, setCurrentUser }) {
  return (
    <div className="teacher-container">
      {offerings.map((offer) => (
        <div key={offer.id}>
          <OfferCard
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            offer={offer}
          />
        </div>
      ))}
    </div>
  );
}

export default OfferingsContainer;
