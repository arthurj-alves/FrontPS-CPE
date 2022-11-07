import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FiMenu } from 'react-icons/fi'
import './Header.css';

function Header(){
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
        <h2 className='header_logo'>Atlética</h2>
        <FiMenu size={24} onClick={() => {
          setMenuOpen(!menuOpen)
        }}/>
      </div>
      {menuOpen && (
      <nav>
        <ul>
          <li><Button 
          onClick={() => {
            Navigate('/');
          }}variant="primary">Home</Button>{' '}</li>

          <li><Button 
          onClick={() => {
            Navigate('/produtos');
          }}variant="primary">Produtos</Button>{' '}</li>

          <li><Button 
          onClick={() => {
            Navigate('/login');
          }}variant="primary">Login</Button>{' '}</li>
          
          <li><Button 
          onClick={() => {
            Navigate('/cadastro');
          }}variant="secondary">Cadastrar</Button>{' '}</li>

        </ul>
      </nav>
      )}
    </header>
  )
}

export default Header;