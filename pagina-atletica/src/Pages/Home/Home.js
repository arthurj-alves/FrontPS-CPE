import React from "react";
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
      <button 
        onClick={() => {
          Navigate('/login');
        }}
      >
        Login
      </button>
    </div> */
  )
}

export default Home;