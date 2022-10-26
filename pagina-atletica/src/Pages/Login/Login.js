import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div className="base">
      <div className="container">
        <div className="logo">            
          <img src="/images/LogoAtlética.png" alt="Logo" />
          <img src="/images/Atletica Genérica.png" alt="Atlética Genérica" />
        </div>
          <Form className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary">Login</Button>{' '}
          </Form>
      </div>
    </div>

  )
}

export default Login;