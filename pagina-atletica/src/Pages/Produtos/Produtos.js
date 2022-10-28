import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Produtos() {

  const Navigate = useNavigate();

  return (
    <div>
      <h1>Produtos</h1>
      <Button 
        onClick={() => {
          Navigate('/perfil');
        }}
        variant="primary"
      >
        Perfil
      </Button>
    </div>
  )
}

export default Produtos;