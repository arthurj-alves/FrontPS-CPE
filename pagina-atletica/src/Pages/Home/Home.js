import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header"; 

function Home() {

  const Navigate = useNavigate()

  return (
    <h1>Ola</h1>
  )
}

export default Home;