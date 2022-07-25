import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setCurrentUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://final-project-asapa.herokuapp.com/logout", {
      method: "DELETE",
    })
      .then(() => setCurrentUser(null))
      .then(navigate("/"));
  });
  return <div></div>;
}

export default Logout;
