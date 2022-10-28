import React from "react";
import { Link } from "react-router-dom";
/* import "./footer.css"; */


function Footer() {
  return (
    <div className="footer"> 
      <div className="top-box">
        
        <div>
          <img src="https://i.ibb.co/K5sBWhC/oie-nm4q-Dx-Tc-Xe-FN.png" className="logoFooter"/>
        </div>

        {/*Links das outras páginas*/}
        <div className="navegue">
          <p className="tituloNav">
            Navegue
          </p>
          <div className="areaNavigation">
            <Link to="./home" className="home">
              <p className="navigation"> Home </p>
            </Link>
            <Link to="./Livros" className="livros">
              <p className="navigation"> Livros </p>
            </Link>
            <Link to="./Usuarios" className="usuarios">
              <p className="navigation"> Usuários </p>
            </Link>
          </div>
        </div>




        {/*Contatos do site*/}
        <div className="contatos">
          <p className="tituloCont">
            Contatos
          </p>
          <div className={'contatosTexto'}>
            <p className={'email'}>Contato@email.com</p>
            <div className={'telefones'}>
              <p className="telefone1">+55 (77) 9 9999-9999</p>
              <p className="telefone2">+55 (31) 9 9898-9898</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;