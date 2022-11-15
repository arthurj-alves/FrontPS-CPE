import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FiMenu } from 'react-icons/fi'
import './Header.css';

function Header() {
  const Navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidith >= 764) {
        setMenuOpen(true)
      }
    })
  }, []);

  return (
    <header>
      <div className='header_logo_container'>
        <div className='logoNome'>
          <img className='header_logo' src='./images/LogoAtlética.png' />
          <h1>Atlética</h1>
        </div>
        <FiMenu size={24} onClick={() => {
          setMenuOpen(!menuOpen)
        }} />
      </div>
      {menuOpen && (
        <nav>
          <ul>
            <li><Button
              onClick={() => {
                Navigate('/');
              }} variant="primary">Home</Button>{' '}</li>

            <li><Button
              onClick={() => {
                Navigate('/produtos');
              }} variant="primary">Produtos</Button>{' '}</li>

            <li><Button
              onClick={() => {
                Navigate('/login');
              }} variant="secondary">Login</Button>{' '}</li>

            <li><Button
              onClick={() => {
                Navigate('/cadastro');
              }} variant="success">Cadastrar</Button>{' '}</li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header;