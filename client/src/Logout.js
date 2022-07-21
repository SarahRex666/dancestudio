import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setCurrentUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    })
      .then(() => setCurrentUser(null))
      .then(navigate("/"));
  });
  return <div></div>;
}

export default Logout;
