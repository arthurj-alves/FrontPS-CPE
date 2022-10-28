import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Perfil(){
    const Navigate = useNavigate();
    
    return (
        <div>
            <h1>Perfil</h1>
            <Button 
        onClick={() => {
          Navigate('/home');
        }}
        variant="primary"
      >
        Home
      </Button>
        </div>
    )  
}  

export default Perfil   ;