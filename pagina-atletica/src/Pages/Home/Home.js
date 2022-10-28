import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header"; 

function Home() {

  const Navigate = useNavigate();

  return (
    <>
      <Header />
    </>
/*     <div>
      <h1>Home</h1>
      <Button 
        onClick={() => {
          Navigate('/login');
        }}
        variant="secondary"
      >
        Login
      </button>
    </div> */
  )
}

export default Home;