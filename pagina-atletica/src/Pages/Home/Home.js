import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {

  const Navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <Button 
        onClick={() => {
          Navigate('/login');
        }}
        variant="secondary"
      >
        Login
      </Button>
    </div>
  )
}

export default Home;