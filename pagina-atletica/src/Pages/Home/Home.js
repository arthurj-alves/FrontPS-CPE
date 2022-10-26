import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const Navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>;
      <button 
        onClick={() => {
          Navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Home;