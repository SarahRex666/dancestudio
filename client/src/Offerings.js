import React, { useState, useEffect, useReducer } from "react";
import OfferingsContainer from "./OfferingsContainer";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

function Offerings({ currentUser, setCurrentUser }) {
  const [offerings, setOfferings] = useState([]);
  const [, forceUpdate] = useReducer((x) => 1, 0);
  useEffect(() => {
    fetch("/dance_classes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setOfferings(data))
      .then(forceUpdate());
  }, []);
  return (
    <div class="container pb-5">
      <br></br>
      <br></br>
      <h1>OFFERINGS</h1>
      <br></br>
      <OfferingsContainer
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        offerings={offerings}
      />
    </div>
  );
}

export default Offerings;
