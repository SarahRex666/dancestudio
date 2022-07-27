import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setCurrentUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      withCredentials: "include",
      method: "DELETE",
    })
      .then(() => setCurrentUser([]))
      .then(navigate("/"));
  });
  return <div></div>;
}

export default Logout;
