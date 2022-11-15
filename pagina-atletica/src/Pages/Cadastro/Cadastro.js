import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api"
import { login } from "../../Services/auth"
import './Cadastro.css';


function Cadastro() {

  const [Nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const Navigate = useNavigate();
  {/* Caracteres que são aceitos no input type="number" */ }
  const [symbolsArr] = useState(["e", "E", "+", "-", ".", ","]);

  function handleInputChange(e) {

    const key = e.target.name;

    const newNome = { ...Nome };

    newNome[key] = e.target.value;

    setNome(newNome);
    console.log(newNome);
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      console.log(response);
      alert("Bem vindo", response.data.user.name)
      login(response.data.AccessToken)
      Navigate("/perfil")
      console.log(response);
    } catch (error) {
      console.warn(error);
      alert(error.message);
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
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email"
                placeholder="Email"
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password"
                placeholder="Senha"
                onChange={handleInputChange} />
            </Form.Group>
            <p></p>
            <Button variant="primary" onClick={handleLogin}>Finalizar cadastro</Button>{' '}
            <p></p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;