import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const Navigate = useNavigate();

  return (

    <div className="base">
      <div className="loginbox">
        <div className="container">
          <div className="logo">
            <img src="/images/Logo_Atletica.png" alt="Logo" />
            <img src="/images/Atletica_Generica.png" alt="Atlética Genérica" />
          </div>
          <Form className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <p></p>
            <Button variant="primary">Entrar</Button>{' '}
            <p></p>
            <Button 
              onClick={() => {
                Navigate('/cadastro');
            }}
              variant="secondary"
            >
              Cadastre-se
            </Button>
          </Form>
        </div>
      </div>
    </div>

  )
}

export default Login;