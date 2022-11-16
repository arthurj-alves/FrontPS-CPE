import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api"
import './Cadastro.css';


function Cadastro() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const Navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();
    try {
      const response = await api.post('/user', { email, name, password });
      console.log(response.data);
      alert("Cadastro completo!")
      Navigate("/login")
    } catch (error) {
      console.warn(error);
      alert("Ocorreu uma falha no servidor " + error.message);
    }
  }

  return (
    <div className="base">
      <div className="loginbox">
        <div className="container">
          <div className="logo">
            <img className="iconeLogin" src="/images/Logo_Atletica.png" alt="Logo" />
            <img className="textoIcone" src="/images/Atletica_Generica.png" alt="Atlética Genérica" />
          </div>
          <Form className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="name"
                placeholder="Nome Completo"
                onChange={(e)=>setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password"
                placeholder="Senha"
                onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <p></p>
            <Button variant="primary" onClick={handleCadastro}>Finalizar cadastro</Button>{' '}
            <p></p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;