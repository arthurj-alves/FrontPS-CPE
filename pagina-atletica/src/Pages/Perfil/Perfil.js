import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function Perfil(){

    const Navigate = useNavigate();

    return (
        <div>
            <h1>Perfil</h1>
            <Button onClick={() => {
                Navigate('/produtos');
              }}
              variant="secondary"
              >Produtos
            </Button>
        </div>
    )  
}  

export default Perfil;